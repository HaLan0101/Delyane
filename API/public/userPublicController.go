package public

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"log"
	"mime/multipart"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

// GetUserById handle /user/id (GET) - PUBLIC
func GetUserById(c *gin.Context) {
	if !isUserExistById(c.Params.ByName("id")) {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found with this ID"})
		return
	}

	c.JSON(http.StatusOK, repository.GetUserById(c.Params.ByName("id")))
}

// GetUsers handle /users (GET) - PRIVATE
func GetUsers(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetUsers())
}

// PostUser handle /user for creating a new user (POST) - PUBLIC
func PostUser(c *gin.Context) {
	// Validate input
	var input models.CreateUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if len(repository.GetUserByEmail(input.Email)) != 0 {
		c.JSON(http.StatusConflict, gin.H{"error": "User with this mail already exist"})
		return
	}

	if len(repository.GetUserByUsername(input.Username)) != 0 {
		c.JSON(http.StatusConflict, gin.H{"error": "This username is already taken by another user"})
		return
	}

	input.EncryptPassword()

	repository.PostUser(input)

	c.JSON(http.StatusCreated, input)
}

// PutUserById handle /user/id for editing an existing user - PRIVATE
func PutUserById(c *gin.Context) {
	if !isUserExistById(c.Params.ByName("id")) {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found with this ID"})
		return
	}

	var input models.PostUser

	input.Email = c.PostForm("email")

	input.Username = c.PostForm("username")

	if len(repository.GetUserByEmail(input.Email)) > 1 {
		c.JSON(http.StatusConflict, gin.H{"error": "This email is already taken by another user"})
		return
	}

	if len(repository.GetUserByUsername(input.Username)) > 1 {
		c.JSON(http.StatusConflict, gin.H{"error": "This username is already taken by another user"})
		return
	}

	input.FirstName = c.PostForm("firstname")
	input.LastName = c.PostForm("lastname")
	input.Password = c.PostForm("password")
	input.EncryptPassword()

	var hasImage bool = true

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		if err.Error() != "http: no such file" {
			panic(err)
		} else {
			hasImage = false
		}
	}

	if hasImage {
		// Deleting old image if available
		if imagePath := repository.GetUserById(c.Params.ByName("id")).Image; imagePath != "/images/static/profile.png" {
			os.Remove("." + imagePath)
		}

		// Saving new image
		imageName := generateImageName(image, c.Params.ByName("id"))

		// Upload the file to specific dst.
		c.SaveUploadedFile(image, "./images/users/"+imageName)

		input.Image = "/images/users/" + imageName
	} else {
		input.Image = repository.GetUserById(c.Params.ByName("id")).Image
	}

	repository.PutUserById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

// DeleteUserById handle /user/id for deleting an existing user - PRIVATE
func DeleteUserById(c *gin.Context) {
	if !isUserExistById(c.Params.ByName("id")) {
		c.JSON(http.StatusNotFound, gin.H{"err": "User not found with this ID"})
		return
	}

	if imagePath := repository.GetUserById(c.Params.ByName("id")).Image; imagePath != "/images/static/profile.png" {
		os.Remove("." + imagePath)
	}

	for _, product := range repository.GetProductByUserId(c.Params.ByName("id")) {
		os.Remove("." + product.Image)
	}

	repository.DeleteUserById(c.Params.ByName("id"))

	c.String(http.StatusOK, "User successfully deleted")
}

// LoginUser handle /user/login for login in a user - PUBLIC
func LoginUser(c *gin.Context) {
	// Validate input
	var input models.Login
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	var userUsername models.User

	if len(repository.GetUserByUsername(input.Identifier)) == 1 {
		userUsername = repository.GetUserByUsername(input.Identifier)[0]
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Wrong username or password"})
		return
	}

	// USER FOUND in DB

	if userUsername.CheckPassword(input.Password) != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Wrong username or password"})
	} else {

		jwtWrapper := models.JwtWrapper{
			SecretKey:       "verysecretkey",
			Issuer:          "AuthService",
			ExpirationHours: 24,
		}

		signedToken, err := jwtWrapper.GenerateToken(userUsername.Email)
		if err != nil {
			log.Println(err)
			c.JSON(500, gin.H{
				"msg": "error signing token",
			})
			c.Abort()
			return
		}

		tokenResponse := models.LoginResponse{
			Token: signedToken,
		}

		c.JSON(http.StatusOK, gin.H{
			"user":  userUsername,
			"token": tokenResponse.Token,
		})
	}
}

// GetUserWishlist handle /user/:id/wishlist
func GetUserWishlist(c *gin.Context) {
	wishlistDB := repository.GetWishlistById(repository.GetUserById(c.Params.ByName("id")).UUID_wishlist)

	var uuids string

	for _, value := range wishlistDB.Products {
		uuids += string(value)
	}

	wishlist := models.Wishlist{UUID: wishlistDB.UUID, Products: strings.Split(uuids[1:len(uuids)-1], ",")}

	c.JSON(http.StatusOK, wishlist)
}

// isUserExistById return true if the user exist in the db
func isUserExistById(uuid string) bool {
	if len(uuid) != 36 {
		return false
	}

	if repository.GetUserById(uuid).UUID == "" {
		return false
	} else {
		return true
	}
}

// generateImageName generate an image name based on id and format
func generateImageName(image *multipart.FileHeader, id string) string {
	var format string = strings.Split(image.Header.Get("Content-Type"), "/")[1]

	return id + "." + format
}

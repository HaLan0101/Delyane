package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetUserById handle /user/id (GET)
func GetUserById(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetUserById(c.Params.ByName("id")))
}

// PostUser handle /user for creating a new user (POST)
func PostUser(c *gin.Context) {
	// Validate input
	var input models.PostUser
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

// PutUserById handle /user/id for editing an existing user
func PutUserById(c *gin.Context) {
	// Validate input
	var input models.PostUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if len(repository.GetUserByEmail(input.Email)) != 1 {
		c.JSON(http.StatusConflict, gin.H{"error": "This email is already taken by another user"})
		return
	}

	if len(repository.GetUserByUsername(input.Username)) != 1 {
		c.JSON(http.StatusConflict, gin.H{"error": "This username is already taken by another user"})
		return
	}

	input.EncryptPassword()

	repository.PutUserById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

// DeleteUserById handle /user/id for deleting an existing user
func DeleteUserById(c *gin.Context) {
	if repository.GetUserById(c.Params.ByName("id")).UUID == "" {
		c.JSON(http.StatusConflict, gin.H{"err": "User with this ID does not exist"})
		return
	}

	repository.DeleteUserById(c.Params.ByName("id"))

	c.String(http.StatusOK, "User successfully deleted")
}

// LoginUser handle /user/login for login in a user
func LoginUser(c *gin.Context) {
	// Validate input
	var input models.LoginUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var userUsername models.User

	if len(repository.GetUserByUsername(input.Identifier)) == 1 {
		userUsername = repository.GetUserByUsername(input.Identifier)[0]
	} else {
		c.JSON(http.StatusNotFound, gin.H{"err": "User not found"})
		return
	}

	// USER FOUND in DB

	if userUsername.CheckPassword(input.Password) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"err": "Wrong password"})
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

		c.JSON(200, tokenResponse)
		c.JSON(http.StatusOK, gin.H{
			"status": "loged in",
			"user":   userUsername,
			"token":  tokenResponse,
		})
	}
}

package controllers

import (
	"fmt"
	"net/http"

	"delyaneAPI/repository"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// GetRoot provide / with the entier place (GET) DEMO
func GetRoot(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetPaintingById("1"))
}

// SaveImage provide /upload for upload (POST) DEMO
func SaveImage(c *gin.Context) {
	fmt.Println(c.PostForm("name"))

	// single file
	file, err := c.FormFile("file")
	if err != nil {
		panic(err)
	}

	fmt.Println(file.Filename)

	// Upload the file to specific dst.
	c.SaveUploadedFile(file, "./images/"+file.Filename)

	c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))
}

// MiddlewareBasicAuth log user on API with BasicAuth with user stored on the db
func MiddlewareBasicAuth(c *gin.Context) {
	// Get the Basic Authentication credentials
	username, password, hasAuth := c.Request.BasicAuth()
	if hasAuth {
		user := repository.GetUserByUsername(username)
		if len(user) == 1 {
			if username == user[0].Username {
				if bcrypt.CompareHashAndPassword([]byte(user[0].Password), []byte(password)) == nil {
					fmt.Println("User " + username + " logged in from BasicAuth")
					return
				}
			}
		}
	}
	c.Abort()
	c.Writer.Header().Set("WWW-Authenticate", "Basic realm=Restricted")
	c.String(http.StatusUnauthorized, "")
}

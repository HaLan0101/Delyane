package controllers

import (
	"fmt"
	"net/http"

	"delyaneAPI/repository"

	"github.com/gin-gonic/gin"
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

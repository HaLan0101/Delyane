package controllers

import (
	"fmt"
	"mime/multipart"
	"net/http"
	"strconv"
	"strings"
	"time"

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

// generateImageName generate an image name based on time and format
func generateImageName(image *multipart.FileHeader) string {
	var format string = strings.Split(image.Header.Get("Content-Type"), "/")[1]

	return strconv.FormatInt(time.Now().UnixMilli(), 10) + "." + format
}

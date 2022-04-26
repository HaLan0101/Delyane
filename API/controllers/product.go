package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

// GetProductById handle /product/id (GET)
func GetProductById(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetProductById(c.Params.ByName("id")))
}

// GetProducts handle /products for all products (GET)
func GetProducts(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetProducts())
}

// PostProduct handle /product for creating a new product (POST)
func PostProduct(c *gin.Context) {
	var input models.PostProduct

	input.Title = c.PostForm("title")

	if repository.GetProductByTitle(input.Title).UUID != "" {
		c.JSON(http.StatusConflict, gin.H{"err": "A product already have this name"})
		return
	}

	input.Description = c.PostForm("description")
	price, _ := strconv.Atoi(c.PostForm("price"))
	input.Price = uint(price)
	input.UUID_category = c.PostForm("uuid_category")
	input.UUID_user = c.PostForm("uuid_user")

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		panic(err)
	}

	var format string = strings.Split(image.Header.Get("Content-Type"), "/")[1]

	// Upload the file to specific dst.
	c.SaveUploadedFile(image, "./images/products/"+strconv.FormatInt(time.Now().UnixMilli(), 10)+"."+format)

	input.Image = "/images/products/" + strconv.FormatInt(time.Now().UnixMilli(), 10) + "." + format

	repository.PostProduct(input)

	c.JSON(http.StatusCreated, input)
}

// PutProductById handle /product/id for editing an existing product (PUT)
func PutProductById(c *gin.Context) {
	var input models.PostProduct

	input.Title = c.PostForm("title")

	if repository.GetProductByTitle(input.Title).UUID != "" {
		c.JSON(http.StatusConflict, gin.H{"err": "A product already have this name"})
		return
	}

	input.Description = c.PostForm("description")
	price, _ := strconv.Atoi(c.PostForm("price"))
	input.Price = uint(price)
	input.UUID_category = c.PostForm("uuid_category")
	input.UUID_user = c.PostForm("uuid_user")

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		panic(err)
	}

	var format string = strings.Split(image.Header.Get("Content-Type"), "/")[1]

	// Upload the file to specific dst.
	c.SaveUploadedFile(image, "./images/products/"+strconv.FormatInt(time.Now().UnixMilli(), 10)+"."+format)

	input.Image = "/images/products/" + strconv.FormatInt(time.Now().UnixMilli(), 10) + "." + format

	repository.PutProductById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

// DeleteProductById handle /product/id for deleting an existing product (DELETE)
func DeleteProductById(c *gin.Context) {
	if repository.GetProductById(c.Params.ByName("id")).UUID != "" {
		c.JSON(http.StatusConflict, gin.H{"err": "This product desn't exist"})
		return
	}

	repository.DeleteProductById(c.Params.ByName("id"))

	c.String(http.StatusOK, "Product successfully deleted")
}

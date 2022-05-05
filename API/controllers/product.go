package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

// GetProductById handle /product/id (GET)
func GetProductById(c *gin.Context) {
	// Does the product with this ID exist
	if product := repository.GetProductById(c.Params.ByName("id")); product.UUID != "" {
		c.JSON(http.StatusOK, product)
		return
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
}

// GetProducts handle /products for all products (GET)
func GetProducts(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetProducts())
}

// PostProduct handle /product for creating a new product (POST)
func PostProduct(c *gin.Context) {
	email, _ := c.Get("email")

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

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		panic(err)
	}

	var format string = strings.Split(image.Header.Get("Content-Type"), "/")[1]

	var imageNamePath string = strconv.FormatInt(time.Now().UnixMilli(), 10) + "." + format

	// Upload the file to specific dst.
	c.SaveUploadedFile(image, "./images/products/"+imageNamePath)

	input.Image = "/images/products/" + imageNamePath

	repository.PostProduct(input, repository.GetUserByEmail(fmt.Sprint(email))[0].UUID)

	c.JSON(http.StatusCreated, input)
}

// PutProductById handle /product/id for editing an existing product (PUT)
func PutProductById(c *gin.Context) {
	email, _ := c.Get("email")

	var input models.PostProduct

	input.Title = c.PostForm("title")

	if repository.GetUserByEmail(fmt.Sprint(email))[0].UUID != repository.GetProductByTitle(input.Title).UUID_user {
		c.JSON(http.StatusNotAcceptable, gin.H{"err": "You are not the owner of this product"})
		return
	}

	// TODO :
	// - here for fixing name changing of a product
	if repository.GetProductByTitle(input.Title).UUID != "" {
		c.JSON(http.StatusConflict, gin.H{"err": "A product already have this name"})
		return
	}

	input.Description = c.PostForm("description")
	price, _ := strconv.Atoi(c.PostForm("price"))
	input.Price = uint(price)
	input.UUID_category = c.PostForm("uuid_category")

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		panic(err)
	}

	var format string = strings.Split(image.Header.Get("Content-Type"), "/")[1]

	var imageNamePath string = strconv.FormatInt(time.Now().UnixMilli(), 10) + "." + format

	// Upload the file to specific dst.
	c.SaveUploadedFile(image, "./images/products/"+imageNamePath)

	input.Image = "/images/products/" + imageNamePath

	repository.PutProductById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

// DeleteProductById handle /product/id for deleting an existing product (DELETE)
func DeleteProductById(c *gin.Context) {
	email, _ := c.Get("email")

	if repository.GetProductById(c.Params.ByName("id")).UUID == "" {
		c.JSON(http.StatusConflict, gin.H{"err": "This product desn't exist"})
		return
	}

	if repository.GetUserByEmail(fmt.Sprint(email))[0].UUID != repository.GetProductById(c.Params.ByName("id")).UUID_user {
		c.JSON(http.StatusNotAcceptable, gin.H{"err": "You can only delete your own products..."})
		return
	}

	repository.DeleteProductById(c.Params.ByName("id"))

	c.String(http.StatusOK, "Product successfully deleted")
}

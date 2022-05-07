package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetProductById handle /product/id (GET) - PUBLIC
func GetProductById(c *gin.Context) {
	// Does the product with this ID exist
	if len(c.Params.ByName("id")) == 32 {
		if repository.GetProductById(c.Params.ByName("id")).UUID == "" {
			c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
			return
		}
	}

	c.JSON(http.StatusOK, repository.GetProductById(c.Params.ByName("id")))
}

// GetProducts handle /products for all products (GET) - PUBLIC
func GetProducts(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetProducts())
}

// PostProduct handle /product for creating a new product (POST) - PRIVATE
func PostProduct(c *gin.Context) {
	email, _ := c.Get("email")

	var input models.PostProduct

	input.Title = c.PostForm("title")

	input.Description = c.PostForm("description")
	price, _ := strconv.Atoi(c.PostForm("price"))
	input.Price = uint(price)
	input.UUID_category = c.PostForm("uuid_category")

	if repository.GetCategoryById(input.UUID_category).UUID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "This category doesn't exist"})
		return
	}

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		panic(err)
	}

	imageName := generateImageName(image, c.Params.ByName("id"))

	// Upload the file to specific dst.
	c.SaveUploadedFile(image, "./images/products/"+imageName)

	input.Image = "/images/products/" + imageName

	repository.PostProduct(input, repository.GetUserByEmail(fmt.Sprint(email))[0].UUID)

	c.JSON(http.StatusCreated, input)
}

// PutProductById handle /product/id for editing an existing product (PUT) - PRIVATE
func PutProductById(c *gin.Context) {
	if repository.GetProductById(c.Params.ByName("id")).UUID == "" {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	email, _ := c.Get("email")

	var input models.PostProduct

	input.Title = c.PostForm("title")

	if repository.GetUserByEmail(fmt.Sprint(email))[0].UUID != repository.GetProductById(c.Params.ByName("id")).UUID_user {
		c.JSON(http.StatusNotAcceptable, gin.H{"error": "You are not the owner of this product"})
		return
	}

	input.Description = c.PostForm("description")
	price, _ := strconv.Atoi(c.PostForm("price"))
	input.Price = uint(price)
	input.UUID_category = c.PostForm("uuid_category")

	if repository.GetCategoryById(input.UUID_category).UUID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "This category doesn't exist"})
		return
	}

	// single file
	image, err := c.FormFile("image")
	if err != nil {
		panic(err)
	}

	// Deleting old image
	os.Remove("." + repository.GetProductById(c.Params.ByName("id")).Image)

	imageName := generateImageName(image, c.Params.ByName("id"))

	// Upload the file to specific dst.
	c.SaveUploadedFile(image, "./images/products/"+imageName)

	input.Image = "/images/products/" + imageName

	repository.PutProductById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

// DeleteProductById handle /product/id for deleting an existing product (DELETE) - PRIVATE
func DeleteProductById(c *gin.Context) {
	if repository.GetProductById(c.Params.ByName("id")).UUID == "" {
		c.JSON(http.StatusConflict, gin.H{"error": "This product desn't exist"})
		return
	}

	email, _ := c.Get("email")

	if repository.GetUserByEmail(fmt.Sprint(email))[0].UUID != repository.GetProductById(c.Params.ByName("id")).UUID_user {
		c.JSON(http.StatusNotAcceptable, gin.H{"err": "You can only delete your own products..."})
		return
	}

	os.Remove("." + repository.GetProductById(c.Params.ByName("id")).Image)

	repository.DeleteProductById(c.Params.ByName("id"))

	c.String(http.StatusOK, "Product successfully deleted")
}

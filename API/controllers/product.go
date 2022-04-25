package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProductById(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetProductById(c.Params.ByName("id")))
}

func GetProducts(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetProducts())
}

func PostProduct(c *gin.Context) {

	// Validate input
	var input models.PostProduct
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	repository.PostProduct(input)

	c.JSON(http.StatusCreated, input)
}

func PutProductById(c *gin.Context) {

	// Validate input
	var input models.PostProduct
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	repository.PutProductById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

func DeleteProductById(c *gin.Context) {
	repository.DeleteProductById(c.Params.ByName("id"))

	c.String(http.StatusOK, "Product successfully deleted")
}

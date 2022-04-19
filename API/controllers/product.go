package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetProductById(c *gin.Context) {
	prodcutId, _ := strconv.Atoi(c.Params.ByName("id"))

	c.JSON(http.StatusOK, repository.GetProductById(prodcutId))
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

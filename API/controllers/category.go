package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCategoryById(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetCategoryById(c.Params.ByName("id")))
}

func GetCategories(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetCategories())
}

func PostCategory(c *gin.Context) {

	// Validate input
	var input models.PostCategory
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	repository.PostCategory(input)

	c.JSON(http.StatusCreated, input)

}

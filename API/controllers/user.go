package controllers

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUserById(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetUserById(c.Params.ByName("id")))
}

func PostUser(c *gin.Context) {

	// Validate input
	var input models.PostUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	repository.PostUser(input)

	c.JSON(http.StatusCreated, input)
}

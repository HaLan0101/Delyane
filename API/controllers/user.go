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

func PutUserById(c *gin.Context) {

	// Validate input
	var input models.PostUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	repository.PutUserById(c.Params.ByName("id"), input)

	c.JSON(http.StatusOK, input)
}

func DeleteUserById(c *gin.Context) {
	repository.DeleteUserById(c.Params.ByName("id"))

	c.String(http.StatusOK, "User successfully deleted")
}

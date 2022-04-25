package controllers

import (
	"net/http"

	"delyaneAPI/repository"

	"github.com/gin-gonic/gin"
)

// GetRoot provide / with the entier place (GET)
func GetRoot(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetPaintingById("1"))
}

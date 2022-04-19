package controllers

import (
	"delyaneAPI/repository"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetCategoryById(c *gin.Context) {
	categoryId, _ := strconv.Atoi(c.Params.ByName("id"))

	c.JSON(http.StatusOK, repository.GetCategoryById(categoryId))
}

func GetCategories(c *gin.Context) {
	c.JSON(http.StatusOK, repository.GetCategories())
}

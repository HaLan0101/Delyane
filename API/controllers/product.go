package controllers

import (
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

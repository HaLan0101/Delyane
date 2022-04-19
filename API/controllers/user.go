package controllers

import (
	"delyaneAPI/repository"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetUserById(c *gin.Context) {
	userId, _ := strconv.Atoi(c.Params.ByName("id"))

	c.JSON(http.StatusOK, repository.GetUserById(userId))
}

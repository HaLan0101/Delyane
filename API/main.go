package main

import (
	"delyaneAPI/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	// Tells to gin if we are in a dev environment or not
	gin.SetMode(gin.DebugMode)
	// gin.SetMode(gin.ReleaseMode)

	// Tells to gin to force color in shell
	gin.ForceConsoleColor()

	router := gin.Default()

	// router.Static("/static", "./static") for static path

	router.GET("/", controllers.GetRoot)
	router.GET("/products", controllers.GetProducts)
	router.GET("/product/:id", controllers.GetProductById)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	// router.Run()
	router.Run(":3000")
}

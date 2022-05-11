package main

import (
	"delyaneAPI/controllers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Tells to gin if we are in a dev environment or not
	gin.SetMode(gin.DebugMode)
	// gin.SetMode(gin.ReleaseMode)

	// Tells to gin to force color in shell
	gin.ForceConsoleColor()

	router := gin.Default()

	router.Use(cors.Default())

	router.Static("/images", "./images") // for static path

	// Demo
	router.GET("/", controllers.GetRoot)
	router.POST("/upload", controllers.SaveImage)

	// User CRUD
	router.POST("/user/login", controllers.LoginUser)

	router.GET("/user/:id", controllers.GetUserById)
	router.PUT("/user/:id", controllers.MiddlewareBasicAuth, controllers.PutUserById)
	router.DELETE("/user/:id", controllers.MiddlewareBasicAuth, controllers.DeleteUserById)
	router.POST("/user", controllers.PostUser)

	// Category CRUD
	router.GET("/categories", controllers.GetCategories)
	router.GET("/category/:id", controllers.GetCategoryById)
	router.PUT("/category/:id", controllers.MiddlewareBasicAuth, controllers.PutCategoryById)
	router.DELETE("/category/:id", controllers.MiddlewareBasicAuth, controllers.DeleteCategoryById)
	router.POST("/category", controllers.MiddlewareBasicAuth, controllers.PostCategory)

	// Product CRUD
	router.GET("/products", controllers.GetProducts)
	router.GET("/product/:id", controllers.GetProductById)
	router.PUT("/product/:id", controllers.MiddlewareBasicAuth, controllers.PutProductById)
	router.DELETE("/product/:id", controllers.MiddlewareBasicAuth, controllers.DeleteProductById)
	router.POST("/product", controllers.MiddlewareBasicAuth, controllers.PostProduct)

	// Newsletter CRUD
	router.GET("/newsletters", controllers.GetNewsletters)
	router.POST("/newsletter", controllers.PostNewsletter)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	router.Run()
}

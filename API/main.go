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

	// // CORS for https://foo.com and https://github.com origins, allowing:
	// // - PUT and PATCH methods
	// // - Origin header
	// // - Credentials share
	// // - Preflight requests cached for 12 hours
	// router.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"https://foo.com"},
	// 	AllowMethods:     []string{"PUT", "PATCH"},
	// 	AllowHeaders:     []string{"Origin"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	AllowOriginFunc: func(origin string) bool {
	// 		return origin == "https://github.com"
	// 	},
	// 	MaxAge: 12 * time.Hour,
	// }))

	// same as
	// config := cors.DefaultConfig()
	// config.AllowAllOrigins = true
	// router.Use(cors.New(config))
	// router.Use(cors.Default())

	router.Use(cors.New(cors.Config{

		AllowAllOrigins: true,
		AllowMethods:    []string{"GET", "POST", "PUT", "DELETE"},
		// AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length", "Content-Type"},
		AllowCredentials: true,
	}))

	router.Static("/images", "./images") // for static path

	// Demo
	router.GET("/", controllers.GetRoot)
	router.POST("/upload", controllers.SaveImage)

	// User CRUD
	router.POST("/user/login", controllers.LoginUser)

	router.GET("/user/:id", controllers.GetUserById)
	router.PUT("/user/:id", controllers.PutUserById)
	router.DELETE("/user/:id", controllers.DeleteUserById)
	router.POST("/user", controllers.PostUser)

	// Category CRUD
	router.GET("/categories", controllers.GetCategories)
	router.GET("/category/:id", controllers.GetCategoryById)
	router.PUT("/category/:id", controllers.PutCategoryById)
	router.DELETE("/category/:id", controllers.DeleteCategoryById)
	router.POST("/category", controllers.PostCategory)

	// Product CRUD
	router.GET("/products", controllers.GetProducts)
	router.GET("/product/:id", controllers.GetProductById)
	router.PUT("/product/:id", controllers.PutProductById)
	router.DELETE("/product/:id", controllers.DeleteProductById)
	router.POST("/product", controllers.PostProduct)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	router.Run()
}

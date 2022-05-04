package main

import (
	"delyaneAPI/controllers"
	"delyaneAPI/middlewares"

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

	api := router.Group("/")
	{
		public := router.Group("/")
		{
			// Demo
			public.GET("/", controllers.GetRoot)
			public.POST("/upload", controllers.SaveImage)

			// User
			public.GET("/user/:id", controllers.GetUserById)
			public.POST("/user", controllers.PostUser)
			public.POST("/user/login", controllers.LoginUser)

			// Category
			public.GET("/categories", controllers.GetCategories)
			public.GET("/category/:id", controllers.GetCategoryById)

			// Product
			public.GET("/products", controllers.GetProducts)
			public.GET("/product/:id", controllers.GetProductById)

			// Newsletters
			public.GET("/newsletters", controllers.GetNewsletters)
			public.POST("/newsletter", controllers.PostNewsletter)
		}

		protected := api.Group("/").Use(middlewares.JWT)
		{
			// User
			protected.PUT("/user/:id", controllers.PutUserById)
			protected.DELETE("/user/:id", controllers.DeleteUserById)

			// Category
			protected.PUT("/category/:id", controllers.PutCategoryById)
			protected.DELETE("/category/:id", controllers.DeleteCategoryById)
			protected.POST("/category", controllers.PostCategory)

			// Product
			protected.PUT("/product/:id", controllers.PutProductById)
			protected.DELETE("/product/:id", controllers.DeleteProductById)
			protected.POST("/product", controllers.PostProduct)
		}
	}

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	router.Run()
}

// TODO :
// - Handle missing category for a product (resulting into server crash)

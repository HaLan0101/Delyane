package public

import (
	"delyaneAPI/repository"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetWishlistById
func GetWishlistById(c *gin.Context) {
	wishlist := repository.GetWishlistById(c.Params.ByName("id"))

	for _, value := range wishlist.Products {
		fmt.Println(value)
	}

	c.JSON(http.StatusOK, wishlist)
}

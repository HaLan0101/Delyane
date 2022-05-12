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

	var uuid string

	for index, value := range wishlist.Products {
		// fmt.Println(value)
		if index%32 == 0 {
			fmt.Println(uuid)
			uuid = ""
		} else {
			uuid += string(value)
		}
	}

	c.JSON(http.StatusOK, wishlist)
}

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
	var uuidTab []string

	for _, value := range wishlist.Products {
		// fmt.Println(value)
		// if index%32 == 0 {
		// 	fmt.Println(uuid)
		// 	uuid = ""
		// } else {
		// 	uuid += string(value)
		// }
		uuid += string(value)
		if string(value) == "," {
			uuidTab = append(uuidTab, uuid)
			uuid = ""
		}
	}

	for _, uuid := range uuidTab {
		fmt.Println(uuid)
	}

	c.JSON(http.StatusOK, wishlist)
}

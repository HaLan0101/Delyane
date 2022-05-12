package public

import (
	"delyaneAPI/repository"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// GetWishlistById
func GetWishlistById(c *gin.Context) {
	wishlist := repository.GetWishlistById(c.Params.ByName("id"))

	var uuids string

	for _, value := range wishlist.Products {
		uuids += string(value)
	}

	uuids = uuids[1 : len(uuids)-1]

	uuidTab := strings.Split(uuids, ",")

	for _, v := range uuidTab {
		fmt.Println(v)
	}

	c.JSON(http.StatusOK, wishlist)
}

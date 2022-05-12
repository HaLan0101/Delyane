package public

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// GetWishlistById handle /wishlist/:id - PRIVATE
func GetWishlistById(c *gin.Context) {
	wishlistDB := repository.GetWishlistById(c.Params.ByName("id"))

	var uuids string

	for _, value := range wishlistDB.Products {
		uuids += string(value)
	}

	wishlist := models.Wishlist{UUID: wishlistDB.UUID, Products: strings.Split(uuids[1:len(uuids)-1], ",")}

	c.JSON(http.StatusOK, wishlist)
}

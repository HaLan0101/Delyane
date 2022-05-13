package repository

import (
	"delyaneAPI/models"
)

// GetWishlistById get a wishlist from a specific user in db
func GetWishlistById(id string) models.WishlistDB {
	rows, err := currentDB.Query(`SELECT * FROM "wishlist" WHERE uuid = $1`, id)

	if err != nil {
		panic(err)
	}

	var uuid string
	var products []uint8

	for rows.Next() {
		err = rows.Scan(&uuid, &products)

		if err != nil {
			panic(err)
		}
	}

	return models.WishlistDB{UUID: uuid, Products: products}
}

// PutWishlistById allows to add and delete wishlist item from db for a specific user
func PutWishlistById(updatedWishlist models.WishlistDB) {
	// dynamic
	updateDynStmt := `update "wishlist" SET products = $2 where uuid = $1`

	_, err := currentDB.Exec(updateDynStmt, updatedWishlist.UUID, updatedWishlist.Products)
	if err != nil {
		panic(err)
	}
}

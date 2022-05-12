package repository

import (
	"delyaneAPI/models"
)

func GetWishlistById(id string) models.Wishlist {
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

	return models.Wishlist{UUID: uuid, Products: products}
}

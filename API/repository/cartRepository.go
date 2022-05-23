package repository

import "delyaneAPI/models"

// GetCartById get a cart from a specific user in db
func GetCartById(id string) models.CartDB {
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

	return models.CartDB{UUID: uuid, Products: products}
}

package repository

import "delyaneAPI/models"

// GetCartById get a cart from a specific user in db
func GetCartById(id string) models.CartDB {
	rows, err := currentDB.Query(`SELECT * FROM "cart" WHERE uuid = $1`, id)

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

func GetCartByTime(timeLocation []uint8) models.CartDB {
	rows, err := currentDB.Query(`SELECT * FROM "cart" WHERE products = $1`, timeLocation)

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

// PostCart allows to create item from db for a specific user
func PostCart(uuid string, timeLocation []uint8) {
	// dynamic
	insertDynStmt := `insert into "cart"("uuid", "products") values($1, $2)`

	_, err := currentDB.Exec(insertDynStmt, uuid, timeLocation)
	if err != nil {
		panic(err)
	}
}

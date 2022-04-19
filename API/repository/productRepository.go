package repository

import (
	"delyaneAPI/models"
)

func GetProductById(id int) models.Product {

	rows, err := currentDB.Query("SELECT * FROM product WHERE uuid = $1", id)

	if err != nil {
		panic(err)
	}

	var uuid uint
	var title string
	var description string
	var price uint
	var image string
	var uuid_category uint
	var uuid_user uint

	for rows.Next() {
		err = rows.Scan(&uuid, &title, &description, &price, &image, &uuid_category, &uuid_user)

		if err != nil {
			panic(err)
		}
	}

	return models.Product{UUID: uuid, Title: title, Description: description, Price: price, Image: image, UUID_category: uuid_category, UUID_user: uuid_user}
}

func GetProducts() []models.Product {
	rows, err := currentDB.Query("SELECT * FROM product")

	if err != nil {
		panic(err)
	}

	var uuid uint
	var title string
	var description string
	var price uint
	var image string
	var uuid_category uint
	var uuid_user uint

	var products []models.Product

	for rows.Next() {
		err = rows.Scan(&uuid, &title, &description, &price, &image, &uuid_category, &uuid_user)

		if err != nil {
			panic(err)
		}

		products = append(products, models.Product{UUID: uuid, Title: title, Description: description, Price: price, Image: image, UUID_category: uuid_category, UUID_user: uuid_user})

	}

	return products
}

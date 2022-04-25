package repository

import (
	"delyaneAPI/models"
)

func GetProductById(id string) models.Product {

	rows, err := currentDB.Query("SELECT * FROM product WHERE uuid = $1", id)

	if err != nil {
		panic(err)
	}

	var uuid string
	var title string
	var description string
	var price uint
	var image string
	var uuid_category string
	var uuid_user string

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

	var uuid string
	var title string
	var description string
	var price uint
	var image string
	var uuid_category string
	var uuid_user string

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

func PostProduct(newProduct models.PostProduct) {
	// dynamic
	insertDynStmt := `insert into "product"("title", "description", "price", "image", "uuid_category", "uuid_user") values($1, $2, $3, $4, $5, $6)`

	_, err := currentDB.Exec(insertDynStmt, newProduct.Title, newProduct.Description, newProduct.Price, newProduct.Image, newProduct.UUID_category, newProduct.UUID_user)
	if err != nil {
		panic(err)
	}
}

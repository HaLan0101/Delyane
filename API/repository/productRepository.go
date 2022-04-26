package repository

import (
	"delyaneAPI/models"
)

// GetProductById return a unique product with id from db
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

// GetProductByTitle return a unique product with title from db
func GetProductByTitle(name string) models.Product {
	rows, err := currentDB.Query("SELECT * FROM product WHERE title = $1", name)

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

// GetProducts return all products from db
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
			if uuid_category == "" {
			} else {
				panic(err)
			}
		}

		products = append(products, models.Product{UUID: uuid, Title: title, Description: description, Price: price, Image: image, UUID_category: uuid_category, UUID_user: uuid_user})

	}

	return products
}

// PostProduct create a new product in the db
func PostProduct(newProduct models.PostProduct) {
	// dynamic
	insertDynStmt := `insert into "product"("title", "description", "price", "image", "uuid_category", "uuid_user") values($1, $2, $3, $4, $5, $6)`

	_, err := currentDB.Exec(insertDynStmt, newProduct.Title, newProduct.Description, newProduct.Price, newProduct.Image, newProduct.UUID_category, newProduct.UUID_user)
	if err != nil {
		panic(err)
	}
}

// PutProductById update an existing product in the db
func PutProductById(uuid string, updatedProduct models.PostProduct) {
	// dynamic
	updateDynStmt := `update "product" SET title = $2,  description = $3, price = $4,  image = $5, uuid_category = $6,  uuid_user = $7 where uuid = $1`

	_, err := currentDB.Exec(updateDynStmt, uuid, updatedProduct.Title, updatedProduct.Description, updatedProduct.Price, updatedProduct.Image, updatedProduct.UUID_category, updatedProduct.UUID_user)
	if err != nil {
		panic(err)
	}
}

// DeleteProductById delete an existing product in the db using id
func DeleteProductById(uuid string) {
	// dynamic
	deleteDynStmt := `delete from "product" where uuid = $1`

	_, err := currentDB.Exec(deleteDynStmt, uuid)
	if err != nil {
		panic(err)
	}
}

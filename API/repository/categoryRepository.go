package repository

import "delyaneAPI/models"

func GetCategoryById(id string) models.Category {
	rows, err := currentDB.Query("SELECT * FROM category WHERE uuid = $1", id)

	if err != nil {
		panic(err)
	}

	var uuid string
	var name string

	for rows.Next() {
		err = rows.Scan(&uuid, &name)

		if err != nil {
			panic(err)
		}
	}

	return models.Category{UUID: uuid, Name: name}
}

func GetCategories() []models.Category {
	rows, err := currentDB.Query("SELECT * FROM category")

	if err != nil {
		panic(err)
	}

	var uuid string
	var name string

	var categories []models.Category

	for rows.Next() {
		err = rows.Scan(&uuid, &name)

		if err != nil {
			panic(err)
		}

		categories = append(categories, models.Category{UUID: uuid, Name: name})
	}

	return categories
}

func PostCategory(newCategory models.PostCategory) {
	// dynamic
	insertDynStmt := `insert into "category"("name") values($1)`

	_, err := currentDB.Exec(insertDynStmt, newCategory.Name)
	if err != nil {
		panic(err)
	}
}

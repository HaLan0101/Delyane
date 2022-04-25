package repository

import (
	"delyaneAPI/models"
	"fmt"
)

func GetUserById(id int) models.User {
	fmt.Println(id)
	rows, err := currentDB.Query("SELECT * FROM customer WHERE uuid = $1", id)

	if err != nil {
		panic(err)
	}

	var uuid string
	var username string
	var password string
	var email string
	var firstname string
	var lastname string
	var number uint

	for rows.Next() {
		err = rows.Scan(&uuid, &username, &password, &email, &firstname, &lastname, &number)

		if err != nil {
			panic(err)
		}
	}
	return models.User{UUID: uuid, Username: username, Password: password, Email: email, FirstName: firstname, LastName: lastname, Number: number}
}

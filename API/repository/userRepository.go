package repository

import (
	"delyaneAPI/models"
	"fmt"
)

func GetUserById(id string) models.User {
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

	for rows.Next() {
		err = rows.Scan(&uuid, &username, &password, &email, &firstname, &lastname)

		if err != nil {
			panic(err)
		}
	}
	return models.User{UUID: uuid, Username: username, Password: password, Email: email, FirstName: firstname, LastName: lastname}
}

func PostUser(newUser models.PostUser) {
	// dynamic
	insertDynStmt := `insert into "customer"("username", "password", "email", "firstname", "lastname") values($1, $2, $3, $4, $5)`

	_, err := currentDB.Exec(insertDynStmt, newUser.Username, newUser.Password, newUser.Email, newUser.FirstName, newUser.LastName)
	if err != nil {
		panic(err)
	}
}

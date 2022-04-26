package repository

import (
	"delyaneAPI/models"
)

// GetUserById return a unique user from db using id
func GetUserById(id string) models.User {
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

// GetUserByEmail return a user from db using email
func GetUserByEmail(mail string) models.User {
	rows, err := currentDB.Query("SELECT * FROM customer WHERE email = $1", mail)

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

// PostUser create a new user in db
func PostUser(newUser models.PostUser) {
	// dynamic
	insertDynStmt := `insert into "customer"("username", "password", "email", "firstname", "lastname") values($1, $2, $3, $4, $5)`

	_, err := currentDB.Exec(insertDynStmt, newUser.Username, newUser.Password, newUser.Email, newUser.FirstName, newUser.LastName)
	if err != nil {
		panic(err)
	}
}

// PutUserById update an existing user in db
func PutUserById(uuid string, updatedUser models.PostUser) {
	// dynamic
	updateDynStmt := `update "customer" SET username = $2, password = $3, email = $4, firstname = $5, lastname = $6 where uuid = $1`

	_, err := currentDB.Exec(updateDynStmt, uuid, updatedUser.Username, updatedUser.Password, updatedUser.Email, updatedUser.FirstName, updatedUser.LastName)
	if err != nil {
		panic(err)
	}
}

// DeleteUserById delete an existing user in db
func DeleteUserById(uuid string) {
	// dynamic
	deleteDynStmt := `delete from "customer" where uuid = $1`

	_, err := currentDB.Exec(deleteDynStmt, uuid)
	if err != nil {
		panic(err)
	}
}

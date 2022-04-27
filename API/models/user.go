package models

// User is the struct used to return an existing user
type User struct {
	UUID      string `json:"uuid"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
}

// PostUser is the struct used to create a new user and edit an existing one
type PostUser struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
}

// LoginUser is the struct used to log a user
type LoginUser struct {
	Identifier string `json:"Identifier"`
	Password   string `json:"password"`
}

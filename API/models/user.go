package models

type User struct {
	UUID      string `json:"uuid"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Number    uint   `json:"number"`
}

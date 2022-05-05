package models

import "golang.org/x/crypto/bcrypt"

// User is the struct used to return an existing user
type User struct {
	UUID      string `json:"uuid"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Image     string `json:"image"`
}

// PostUser is the struct used to create a new user and edit an existing one
type PostUser struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Image     string `json:"image"`
}

// LoginUser is the struct used to log a user
type LoginUser struct {
	Identifier string `json:"identifier"`
	Password   string `json:"password"`
}

func (user *PostUser) EncryptPassword() {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	user.Password = string(bytes)
}

func (user *LoginUser) EncryptPassword() {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	user.Password = string(bytes)
}

func (user *User) CheckPassword(password string) error {
	return bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
}

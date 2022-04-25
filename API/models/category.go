package models

type Category struct {
	UUID string `json:"uuid"`
	Name string `json:"name"`
}

type PostCategory struct {
	Name string `json:"name"`
}

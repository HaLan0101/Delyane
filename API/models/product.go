package models

// Product is the stuct used to return an existing product
type Product struct {
	UUID          string `json:"uuid"`
	Title         string `json:"title"`
	Description   string `json:"description"`
	Price         uint   `json:"price"`
	Image         string `json:"image"`
	UUID_category string `json:"uuid_category"`
	UUID_user     string `json:"uuid_user"`
}

// PostProduct is the struct used to create and edit an existing product
type PostProduct struct {
	Title         string `json:"title"`
	Description   string `json:"description"`
	Price         uint   `json:"price"`
	Image         string `json:"image"`
	UUID_category string `json:"uuid_category"`
	UUID_user     string `json:"uuid_user"`
}

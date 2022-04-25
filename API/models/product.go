package models

type Product struct {
	UUID          string `json:"uuid"`
	Title         string `json:"title"`
	Description   string `json:"description"`
	Price         uint   `json:"price"`
	Image         string `json:"image"`
	UUID_category string `json:"uuid_category"`
	UUID_user     string `json:"uuid_user"`
}

type PostProduct struct {
	Title         string `json:"title"`
	Description   string `json:"description"`
	Price         uint   `json:"price"`
	Image         string `json:"image"`
	UUID_category uint   `json:"uuid_category"`
	UUID_user     uint   `json:"uuid_user"`
}

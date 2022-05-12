package models

type Wishlist struct {
	UUID     string   `json:"uuid"`
	Products []string `json:"products"`
}

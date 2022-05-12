package models

type Wishlist struct {
	UUID     string  `json:"uuid"`
	Products []uint8 `json:"products"`
}

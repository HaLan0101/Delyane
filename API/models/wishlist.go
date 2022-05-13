package models

type WishlistDB struct {
	UUID     string  `json:"uuid"`
	Products []uint8 `json:"products"`
}

type Wishlist struct {
	UUID     string   `json:"UUID"`
	Products []string `json:"products"`
}

type PostWishlist struct {
	Products []string `json:"products"`
}

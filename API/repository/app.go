package repository

import (
	"log"
	"os"

	"database/sql"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var currentDB *sql.DB

func init() {
	godotenv.Load(".env")
	connStr := "user=" + os.Getenv("DB_USER") + " dbname=" + os.Getenv("DB_NAME") + " port=" + os.Getenv("SERVER_PORT") + " password=" + os.Getenv("DB_PASS") + " sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	currentDB = db
}

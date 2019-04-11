package main

import (
	"log"
	"net/http"
	"os"

	_ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("$PORT must be set")
	}

	http.Handle("/", http.FileServer(http.Dir("www")))
	http.ListenAndServe(":" + port, nil)
}

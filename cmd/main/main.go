package main

import (
	"log"
	"net/http"

	"github.com/Isaiah-peter/stress-go/pkg/routes"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterTodo(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("Localhost:9000", r))

}

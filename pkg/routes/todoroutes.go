package routes

import (
	"net/http"

	"github.com/Isaiah-peter/stress-go/pkg/controllers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

var RegisterTodo = func(router *mux.Router) {
	router.HandleFunc("/todo/", controllers.CreateTodo).Methods("POST")
	router.HandleFunc("/todo/", controllers.GetTodo).Methods("GET")
	router.HandleFunc("/todo-completed", controllers.CompletedTodo).Methods("GET")
	router.HandleFunc("/todo/{todoid}", controllers.GetTodoById).Methods("GET")
	router.HandleFunc("/todo/{todoid}", controllers.UpdateTodo).Methods("PUT")
	router.HandleFunc("/todo/{todoid}", controllers.DeleteTodo).Methods("DELETE")

	handler := cors.New(cors.Options{
		AllowedMethods: []string{"GET", "POST", "DELETE", "PUT"},
	}).Handler(router)

	http.ListenAndServe("Localhost:9000", handler)

}

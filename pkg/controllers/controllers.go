package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/Isaiah-peter/stress-go/pkg/models"
	"github.com/Isaiah-peter/stress-go/pkg/utils"
	"github.com/gorilla/mux"
)

var NewTodo models.Todo

func GetTodo(w http.ResponseWriter, r *http.Request) {
	newTodo := models.GetTodo()
	res, _ := json.Marshal(newTodo)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func CreateTodo(w http.ResponseWriter, r *http.Request) {
	createTodo := &models.Todo{}
	utils.ParseBody(r, createTodo)
	t := createTodo.CreateTodo()
	res, _ := json.Marshal(t)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteTodo(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	todoId := vars["todoid"]
	ID, err := strconv.Atoi(todoId)
	if err != nil {
		fmt.Printf("error while parsing")
	}
	todo := models.DeleteTodo(ID)
	res, _ := json.Marshal(todo)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateTodo(w http.ResponseWriter, r *http.Request) {
	var updateTodo = &models.Todo{}
	utils.ParseBody(r, updateTodo)
	vars := mux.Vars(r)
	todoId := vars["todoid"]
	ID, err := strconv.Atoi(todoId)
	if err != nil {
		fmt.Printf("error while parsing")
	}
	todoDetail, db := models.GetTodoById(ID)
	if updateTodo.Title != "" {
		todoDetail.Title = updateTodo.Title
	}
	if updateTodo.Discription != "" {
		todoDetail.Discription = updateTodo.Discription
	}

	db.Save(&todoDetail)
}

func GetTodoById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	todoId := vars["todoid"]
	ID, err := strconv.Atoi(todoId)
	if err != nil {
		fmt.Println("error while parsing")
	}
	todoDetails, _ := models.GetTodoById(ID)
	res, _ := json.Marshal(todoDetails)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func CompletedTodo(w http.ResponseWriter, r *http.Request) {
	IncompleteTodo := models.GetTodoComplete(true)
	w.Header().Set("Content-Type", "pkglication/json")
	json.NewEncoder(w).Encode(IncompleteTodo)
}

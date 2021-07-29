package models

import (
	"github.com/Isaiah-peter/stress-go/pkg/config"
	"github.com/jinzhu/gorm"
)

var (
	db *gorm.DB
)

type Todo struct {
	Id          int    `gorm:"primary_key"`
	Title       string `json:"title"`
	Discription string `json:"discription"`
	IsComplete  bool   `json:"iscomplete"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Todo{})
}

func (t *Todo) CreateTodo() *Todo {
	db.NewRecord(t)
	db.Create(t)
	return t
}

func GetTodo() []Todo {
	var Todo []Todo
	db.Find(&Todo)
	return Todo
}

func DeleteTodo(ID int) Todo {
	var todo Todo
	db.Where("ID=?", ID).Delete(todo)
	return todo
}

func GetTodoById(ID int) (*Todo, *gorm.DB) {
	var getTodo Todo
	db := db.Where("ID=?", ID).Find(&getTodo)
	return &getTodo, db
}

func GetTodoComplete(completed bool) interface{} {
	var todos []Todo
	TodoItems := db.Where("completed = ?", completed).Find(&todos).Value
	return TodoItems
}

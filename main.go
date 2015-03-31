package main

import (
	"html/template"
	"net/http"
)

func main() {
	http.HandleFunc("/", WelcomeHandler)
	http.Handle("/public/", http.FileServer(http.Dir("")))
	http.ListenAndServe(":8080", nil)
}

func WelcomeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, _ := template.ParseFiles("templates/application.html")
	tmpl.Execute(w, tmpl)
}

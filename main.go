package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func main() {
	http.HandleFunc("/", WelcomeHandler)
	http.Handle("/public/", http.FileServer(http.Dir("")))
	http.ListenAndServe(":8080", nil)
}

func WelcomeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/application.html")
	if err != nil {
		fmt.Printf("%s\n", err)
	}
	err = tmpl.Execute(w, tmpl)
	if err != nil {
		fmt.Printf("%s\n", err)
	}
}

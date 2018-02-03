package main

import (
	"net/http"
	"os"

	"github.com/petar-prog91/showreel/API/helpers"

	"github.com/petar-prog91/showreel/API/auth_service/controllers"

	"github.com/gorilla/handlers"
	"github.com/julienschmidt/httprouter"
)

func main() {
	router := httprouter.New()

	router.POST("/api/authenticate/", controllers.Authenticate)

	http.ListenAndServe(":8082", handlers.LoggingHandler(os.Stdout, helpers.CorsHandlerRouter(router)))
}

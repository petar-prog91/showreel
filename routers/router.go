package routers

import (
	"showreel/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{}, "get:Get")
	beego.Router("/register", &controllers.RegisterController{}, "get:Get;post:Post")
	beego.Router("/app", &controllers.AppController{}, "get:Get")
}

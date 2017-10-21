package routers

import (
	"showreel/web/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/register", &controllers.RegisterController{}, "get:Get;post:Post")
	beego.Router("/app", &controllers.AppController{}, "get:Get")
}

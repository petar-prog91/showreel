package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (ctrl *MainController) Get() {
	ctrl.Layout = "app_layout.html"
	ctrl.TplName = "app.tpl"
}

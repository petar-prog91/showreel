package controllers

import (
	"github.com/astaxie/beego"
)

/*
	AppController for showing Main Application Page
*/
type AppController struct {
	beego.Controller
}

func (ctrl *AppController) Get() {
	ctrl.Layout = "app_layout.html"
	ctrl.TplName = "app.tpl"
}

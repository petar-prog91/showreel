package controllers

import (
	"github.com/astaxie/beego"
)

/*
	Controller for showing Logout page
*/
type LogoutController struct {
	beego.Controller
}

func (ctrl *LogoutController) Get() {
	v := ctrl.GetSession("skolaruid")
	if v != nil {
		ctrl.DelSession("skolaruid")
		ctrl.Redirect("/", 302)
	}
}

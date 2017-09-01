package main

import (
	_ "skolar/web/routers"

	_ "github.com/go-sql-driver/mysql"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

func main() {
	beego.Run()

	o := orm.NewOrm()
	o.Using("default")
}

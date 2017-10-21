package main

import (
	_ "showreel/web/routers"

	_ "github.com/go-sql-driver/mysql"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

func main() {
	beego.Run()

	o := orm.NewOrm()
	o.Using("default")
}

func init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)

	orm.RegisterDataBase("default", "mysql", "root:root@/showreel?charset=utf8")
}

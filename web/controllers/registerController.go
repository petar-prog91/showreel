package controllers

import (
	"showreel/web/models"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"golang.org/x/crypto/bcrypt"
)

/*
	RegisterController for showing Register Page
*/
type RegisterController struct {
	beego.Controller
}

func (this *RegisterController) Get() {
	// Get the Register page
	this.Layout = "main_layout.html"
	this.TplName = "register.tpl"
}

func (this *RegisterController) Post() {
	// Open up new Orm DB Connection
	o := orm.NewOrm()

	// Create new user from User model struct
	user := new(models.User)

	// Set all the values from the form by GetString
	user.FirstName = this.GetString("firstname")
	user.LastName = this.GetString("lastname")
	user.Email = this.GetString("email")

	user.Username = this.GetString("username")
	user.UserRole = 1

	password := []byte(this.GetString("password"))
	hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)

	if err != nil {
		panic(err)
	}

	// setting the hashed password in user model
	user.Password = string(hashedPassword)

	// Insert in user table
	id, err := o.Insert(user)
	if err == nil {
		user.Id = int(id)
	}

	// Insert in user_details table
	o.Insert(user)

	this.Redirect("/login", 302)
}

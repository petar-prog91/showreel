package models

type Student struct {
	ID         int    `db:"id, omitempty"`
	FirstName  string `db:"first_name, omitempty"`
	LastName   string `db:"last_name, omitempty"`
	Address    string `db:"address, omitempty"`
	City       string `db:"city, omitempty"`
	ZipCode    int    `db:"zipcode, omitempty"`
	Email      string `db:"email, omitempty"`
	Phone      string `db:"phone, omitempty"`
	EnrollDate string `db:"enrolldate, omitempty"`
	Parent     int    `db:"parent, omitempty"`
	ClassGroup int    `db:"class_group, omitempty"`
}

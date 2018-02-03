# ShowReel
ShowReel is another application for tracking TV shows. Yep. I am a TV shows fan, and I watch a lot, but I am dissapointed with the current available applications on the web, so I decided to make one that fits me correctly. Like it, hate it, don't mind the feedback :).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements
If you wish to have ease of deployment and not worry about getting all the requirements, then please install `docker` and `docker-compose` and follow the Installing instruction.

### Installing
- Install Docker & Docker Compose.
- Checkout the code from master branch.
- Navigate into the folder of the project.
- In your terminal run command `docker-compose build`.
- Once that is finished, run `docker-compose up`.
- By default API will run under `http://localhost:8080`
- Sometimes, if some application is already running on port 8080 (very usual case for developers), it's best to adjust ports in docker-compose.yml file

# Database
- Once you have all docker containers running, using whatever method you know connect to your local MySQL database on port 3308 (MySQL DB is provided by docker, so no need for installations)
- If there isn't database called `showreel` create one
- Once logged in the database, import file `API/showreel_init.sql` from this repo

## TODO Stuff
- Replace Bee Golang backend with Node.js and enable back-end rendering of the page (react / redux)

## Deployment

TODO

## Contributing

TODO

## Authors

* **Petar Milutinovic** - *Initial work and idea* - [Petar-Prog91](https://github.com/petar-prog91)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

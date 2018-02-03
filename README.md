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
- By default API will run under `http://localhost:9090`
- To open the app, navigate to `http://localhost:4040`
- You can either log in with default user `admin` / `admin12345` or you can register your own user on the register page.
- If you wish to change ports, please make sure to have it reflected both in code and docker-compose.yml file

## TODO Stuff
- Enable React server side rendering.

## Contributing
TODO

## Authors

* **Petar Milutinovic** - *Initial work and idea* - [Petar-Prog91](https://github.com/petar-prog91)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

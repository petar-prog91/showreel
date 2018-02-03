# ShowReel

ShowReel is another application for tracking TV shows. Yep. I am a TV shows fan, and I watch a lot, but I am dissapointed with the current available applications on the web, so I decided to make one that fits me correctly. Like it, hate it, don't mind the feedback :).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Requirements

Before starting the project, you need to have these requirements installed on your sistem. There will be Docker image for this project, so it's easier to run and deploy.

```
- GoLang 1.7
- MySQL
- Node.js >= 8.0.0
- BeeGo (github.com/astaxie/beego)
```

### Installing
- Install [ShowReel API project](https://github.com/petar-prog91/showreel-api) and follow installation instructions
- Install above requirements for this project
- Checkout master branch of this project
- Run command `bee run showreel`
- Visit `http://localhost:8085` and log in with admin data (admin / admin12345)


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
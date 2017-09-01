# SkolaR

SkolaR is a management system for schools targeted toward teachers for recording feedback about students, and for parents to have access to that feedback.
What is the reason for starting this project?

- I started this project because I felt that I should contribute to Open Source, but also I wanted to have a side project which I can invest my time into and possibly stumble upon problems which need solving, which I do not have a chance to work on at my daily work routine. I believe this will push me to invest my time into learning new stuff, thinking outside the box and make continous development of my career.

## Structure

I decided to keep everything at the beginning inside one big repo, but split code, dependencies and services in separate folders.

- web folder will contain Front End part of the application as well a bare minimum needed for the Web App to work
- services folder will contain multiple micro services which are split accordingly, and together in theory they should generate REST or GraphQL API

All of the separate services and web app will be containerized using Docker.

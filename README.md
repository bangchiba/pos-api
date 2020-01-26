## Prerequisites

- Install Node.js & NPM (https://nodejs.org/en/).
- Install Yarn (if you prefer this instead of NPM) (https://yarnpkg.com/en/).
- Install `nodemon` (https://www.npmjs.com/package/nodemon).

## Usage with Docker

- Make sure you have installed `docker` and `docker-compose` on your machine.
- Clone/download this repo.
- Enter the directory.

  `cd pos-api`

- Build & run the app with `docker-compose`.

  `sudo docker-compose up`

### Execute Migration

- Enter to container pos-api

  `docker container exec -it <id container> /bin/sh`

- create database

  `sequelize db:create`

- migrate database

  `sequelize db:migrate`

- seeding

  `sequelize db:seed:all`

- Hit [http://localhost:3000](http://localhost:3000) on your favorite browser to open the apps.
- Use [http://localhost:4000](http://localhost:4000) to open Adminer and manage database.
- Use PORT `33060` to connect to MySQL database from your MySQL client.
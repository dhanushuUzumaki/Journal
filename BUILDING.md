# Building and Running Locally

Journal has three major dependencies.

* Docker
* Node
* Postgres DB

Make sure to install latest version of docker and node V^8.

Once you have these two installed you have already finished 50% of things.

Journal uses docker-compose to tie together several services.

This is the list of services.

1. [Prisma](https://www.prisma.io/)
2. [Traefik](https://traefik.io/)
3. GraphQL Server
4. React Client

## Installing the requiered packages.

Make sure to run `npm i` on the root folder of Journal repo. This is for linting and git hooks.
And similarly inside `graphql-server` and `react-client` folder.

## Creating external network.

We create a external docker network and use it to tie all our services.

Run `docker network create web`

## For HTTPS (optional)

To use traefik's reverse proxy while developing you need to create a self signed certificate and place them in the `./traefik/certs/` folder.

Run the following command in Journal's root directory to create the certificate.

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./traefik/certs/journal.key -out ./traefik/certs/journal.crt`

Then in your `/etc/hosts` file add the following line `127.0.0.1  api.journal.com`.

## Setting the env Variables

In the `.env` file update the following database information with your local db details.

* PRISMA_DB_USER
* PRISMA_DB_PASSWORD
* PRISMA_DB_PORT
* PRISMA_DB

One caveat in this is the PRISMA_DB_HOST variable. The default value will work for windows and mac but will fail on linux. We haven't found a fix for this yet.
If you do please make sure to send a Pull Request. 🙏 😓 (This will be resolved in the near feature when we set up a dev rds instance).

## Building Docker Images

Run `docker-compose build` on Journal's root directory to build the images (Initially, you need an active internet connection to pull in the docker images).

## Running Journal

Run `docker-compose up` (with -d flag if you want to run it in background) to start the containers.

## Testing your local setup

* Visiting `localhost:8081` will show traefik dashboard.
* Visiting `localhost:8080` will show our graphql server.
* Visiting `localhost:3000` will show our react client.
* Visiting `https://api.journal.com` will also show our graphql server if you have followed the steps to set up HTTPS.
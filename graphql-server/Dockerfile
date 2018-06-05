FROM node:8.11.1

ARG PORT

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

RUN chmod +x ./wait-for-it.sh
RUN chmod +x ./bootstrap.sh

EXPOSE $PORT

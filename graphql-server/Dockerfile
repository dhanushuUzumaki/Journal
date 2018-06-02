FROM node:8.11.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod 777 ./wait-for-it.sh

EXPOSE 8080
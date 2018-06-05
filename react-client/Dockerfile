FROM node:8.11.1

ARG PORT

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE $PORT

CMD [ "echo", "hi" ]

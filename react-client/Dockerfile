FROM node:8.11.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${REACT_CLIENT_PORT}
CMD [ "npm", "start" ]

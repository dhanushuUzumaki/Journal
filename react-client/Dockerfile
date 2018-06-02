FROM node:8.11.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN echo "test"

EXPOSE 3000
CMD [ "npm", "start" ]

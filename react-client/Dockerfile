FROM node:8.11.1

ARG PORT

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install
# RUN npm run build
COPY . .

EXPOSE $PORT

CMD [ "npm", "start" ]

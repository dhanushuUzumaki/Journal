FROM node:10.4.1

ARG PORT

# install jq
RUN curl -o /usr/local/bin/jq http://stedolan.github.io/jq/download/linux64/jq && chmod +x /usr/local/bin/jq

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

RUN chmod +x ./wait-for-it.sh
RUN chmod +x ./bootstrap.sh

EXPOSE $PORT

CMD ["npm", "run", "setupAndStart"]

FROM node:15.14.0-alpine3.10

LABEL version="1.0"
LABEL description="This is the base docker image for the Brocoli Frontend React App."

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
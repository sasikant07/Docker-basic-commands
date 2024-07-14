FROM node:18

ENV APP_PORT=8080

RUN mkdir app

COPY node-express/* app

RUN cd app && npm install

EXPOSE ${APP_PORT}

CMD cd app && npm run start
FROM node:18

ENV APP_PORT=8080
ENV APP_DATA=/logs

RUN mkdir app

COPY node-express/* app

RUN cd app && npm install

EXPOSE ${APP_PORT}
VOLUME ${APP_DATA}

CMD cd app && npm run start
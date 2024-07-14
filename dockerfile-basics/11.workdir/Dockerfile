FROM node:18

ENV APP_PORT=8080
ENV APP_DATA=/logs

WORKDIR /app

COPY node-express/* app

RUN npm install

EXPOSE ${APP_PORT}
VOLUME ${APP_DATA}

CMD npm run start
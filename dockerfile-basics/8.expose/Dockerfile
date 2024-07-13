FROM node:18

RUN mkdir app

COPY node-express/* app

RUN cd app && npm install

EXPOSE 3000

CMD cd app && num run start
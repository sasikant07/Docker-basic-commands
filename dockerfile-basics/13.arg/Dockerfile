ARG NODE_VERSION=18

FROM node:${NODE_VERSION}

WORKDIR /app

COPY node-express/* /app

RUN npm install

EXPOSE 3000

CMD npm run start
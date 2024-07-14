ARG NODE_VERSION=18

FROM node:${NODE_VERSION}

RUN apt-get update && apt-get install -y curl

WORKDIR /app

COPY node-express/* /app

RUN npm install

EXPOSE 3000

HEALTHCHECK --interval=5s --start-period=5s CMD curl -f http://localhost:8080/health

CMD npm run start
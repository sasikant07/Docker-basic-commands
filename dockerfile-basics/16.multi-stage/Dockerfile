# Stage 1 : build the application
FROM node:18 as build

WORKDIR /app

COPY node/* /app
RUN npm install

COPY node/. .
RUN npm build

# Stage 2: run application with alpinr image
FROM node:18-alpine

WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm install --production
COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD npm run start:prod

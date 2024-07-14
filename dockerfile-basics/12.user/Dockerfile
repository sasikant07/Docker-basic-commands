FROM node:apline3.18

RUN mkdir app

# Create a new group called "mygroup"
RUN addgroup -S mygroup
# Create a new User called "myuser" and add to the "mygroup" group
RUN adduser -S -D  -h /app myuser mygroup
#Change its ownership to myuser:mygroup
RUN chown -R myuser:mygroup /app
# switch to the newly created user
USER myuser

COPY node-express/* app

RUN npm install

CMD npm run start
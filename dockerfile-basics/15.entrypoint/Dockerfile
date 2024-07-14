FROM node:18

WORKDIR /app

COPY node-express/* app

RUN npm install

EXPOSE 3000

# set the entrypoint
ENTRYPOINT ["npm", "run", "start"]

# Default command to run when the container starts (can be overridden)
CMD ["--host", "0.0.0.0"]
# ENV

## step

## build image
`docker build -t lemocode21:env 9.env`

## create container
`docker container create --name env lemoncode21:env`

## create with an env container
`docker container create --name env --env APP_PORT=9090 -p 9090:9090 lemoncode21:env`

## run container
`docker container start env`

## inspect image
`docker image inspect lemoncode21:env`

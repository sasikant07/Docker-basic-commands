# HEALTH

`HEALTHCHECK --interval=(duration) --timeout=(duration) --start-period=(duration)`

## step

## build image
`docker build -t lemocode21:health 14.health`

## create container
`docker container create --name health -p 8080:8080 lemoncode21:health`

## run container
`docker container start health`

## container
`docker container ls`

## health
`docker conatiner inspect health`
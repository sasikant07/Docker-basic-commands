# Multi-stage

## step

## build image
`docker build -t lemocode21:multi-stage 16.multi-stage`

## create container
`docker container create --name multi-stage -p 8080:8080 lemoncode21:multi-stage`

## run container
`docker container start multi-stage`

## check image
`docker image ls`
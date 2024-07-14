# ARG

`ARG key`

## step

## build image
`docker build -t lemocode21:arg 13.arg`

## create container
`docker container create --name arg -p 8080:8080 lemoncode21:arg`

## run container
`docker container start arg`

## inspect image
`docker image inspect lemoncode21:arg`

## docker exec
`docker container exec -it arg bash`

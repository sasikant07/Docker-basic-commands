# WORKDIR

`WORKDIR foldername`

## step

## build image
`docker build -t lemocode21:workdir 11.workdir`

## create container
`docker container create --name workdir -p 8080:8080 lemoncode21:workdir`

## run container
`docker container start workdir`

## inspect image
`docker image inspect lemoncode21:workdir`

## docker exec
`docker container exec -it workdir bash`

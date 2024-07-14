# USER

`USER username`

## step

## build image
`docker build -t lemocode21:user 12.user`

## create container
`docker container create --name user -p 8080:8080 lemoncode21:user`

## run container
`docker container start user`

## inspect image
`docker image inspect lemoncode21:user`

## docker exec
`docker container exec -it user bash`

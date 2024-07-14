# VOLUME

`VOLUME foldername`

## step

## build image
`docker build -t lemocode21:volume 10.volume`

## create container
`docker container create --name volume -p 8080:8080 lemoncode21:volume`

## run container
`docker container start volume`

## inspect image
`docker image inspect lemoncode21:volume`

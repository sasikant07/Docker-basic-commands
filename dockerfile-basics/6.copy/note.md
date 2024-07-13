# COPY

`COPY file target`

## What we will do

1. create folder
    `RUN mkdir myFolder`
2. Copy file 
    `COPY file.txt myFolder`
3. CMD cat
    `CMD cat "myFolder/file.txt`


## step

## build image
`docker build -t lemocode21:copy 6.copy`

## create container
`docker container create --name copy lemoncode21:copy`

## run container
`docker container start copy`

## inspect container
`docker image inspect lemoncode21:copy`

## logs container
`docker container logs copy`
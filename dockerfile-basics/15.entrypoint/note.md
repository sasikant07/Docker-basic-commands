# ENTRYPOINT

`ENTRYPOINT ["executable", "param1", "param2"]`

## step

## build image
`docker build -t lemocode21:entrypoint 15.entrypoint`

## create container
`docker container create --name entrypoint -p 8080:8080 lemoncode21:entrypoint`

## run container
`docker container start entrypoint`

## inspect container
`docker container inspect lemoncode21:entrypoint`


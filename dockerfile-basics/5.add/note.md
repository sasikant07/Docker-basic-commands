# ADD
`ADD file target`

## What we will do

1. create directory myFolder
    `RUN mkdir myFolder`
2. ADD file to directory myFolder
    `ADD word.txt`
3. CMD file
    `CMD cat "myFolder/word.txt`

    
## step

## create container
`docker container create --name add lemoncode21/add`

## run container
`docker container start add`

## inspect container
`docker image inspect lemoncode21:add`

## logs container
`docker container logs add`


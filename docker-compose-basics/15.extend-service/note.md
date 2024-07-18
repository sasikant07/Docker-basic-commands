# Extend Service

## Stop existing docker containers if it is running
`docker compose down`

## build the docker
`docker compose build`

## create compose
`docker compose create`

## start compose
`docker compose start`

## check container
`docker container ps`

<!-- IMPORTANT (for dev)-->
## To build and run different MODES
`docker compose -f docker-compose.yaml - f dev.yml create`

## To START and run different MODES
`docker compose -f docker-compose.yaml - f dev.yml start`



## Stop existing docker containers if it is running
`docker compose down`



<!-- IMPORTANT (for prod)-->
## To build and run different MODES
`docker compose -f docker-compose.yaml - f prod.yml create`

## To START and run different MODES
`docker compose -f docker-compose.yaml - f prod.yml start`

## stop docker compose
`docker compose stop`

up:
	@docker-compose up -d

build:
	@docker-compose build

run:
	@docker-compose exec nodejs npm run start

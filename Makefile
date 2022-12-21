.PHONY: deploy
deploy: build image
	docker compose up -d --force-recreate

.PHONY: image
image:
	docker build -t feed-web .

.PHONY: build
build:
	npm run build

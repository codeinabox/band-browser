.DEFAULT_GOAL := playbook

install:
	cd server && npm install & cd client && npm install

development:
	cd server && npm start & cd client && npm start

test:
	cd server && npm test

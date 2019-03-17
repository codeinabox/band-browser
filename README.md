# Band Browser
A simple SPA to search for band names using [MusicBrainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2) as a data source

## Structure
The application is a mono repo consisting of two parts, an API located in the folder `server` written in Node and a React SPA in the folder `client` which for development is served up using [Create React App](https://github.com/facebook/create-react-app) and in production via Nginx.

## Local development
For spinning up a local development simply first run `make install` and then `make development`, which on successful completion should open a browser window for http://localhost:3000/. Changes to the client will automatically be picked up without needing to manually restart the server but changes to the API will need a manual restart.

## Docker for development
Using Docker compose you can spin a Docker based local development environment running `docker-compose up --build` and on completion using `docker ps` connect to the port of the web container. Unlike the aforementioned local development server no changes are automatically picked up but you will need to rebuild.

## Tests
Tests can be run using `make test`. At the moment they only run the API unit tests.

## Deployment
In practice this application could be deployed to AWS via the ECS CLI as it is supports Docker compose version 3.

## Considerations
 * In hindsight TypesScript would have been a good choice for the API as I could have created types for the API responses
 * Separating out the API and client had its pros and cons. A con was it created more overheads in terms of proxying requests to the API as for local development this was done leveraging the support that Create React App has for proxying [Create React App has for proxying](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development) and then a different approach in production as there Nginx is proxying to the API however now they are separate there are gains to be had as you scale up or down them independently and the API could be written in more performant languages like Golang were there a need to do so.

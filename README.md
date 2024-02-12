# Training task

A training task for the Itprofit company.

Server: [![Netlify Status](https://api.netlify.com/api/v1/badges/682cc2c2-2056-453b-a1f7-157088d952a1/deploy-status)](https://app.netlify.com/sites/yds-itprofit-server/deploys)


Client: [![Netlify Status](https://api.netlify.com/api/v1/badges/638d7877-cd19-433e-a435-3c32e1d5d1cb/deploy-status)](https://app.netlify.com/sites/yds-itprofit/deploys)

## Netlify DEMO

[Client](https://yds-itprofit.netlify.app) | [Server](https://yds-itprofit-server.netlify.app)

## Getting started

Clone the repo via the terminal:

    git clone https://github.com/darya-yarosh/tt-itprofit

`cd` into the new directory via the terminal:

    cd tt-itprofit

Check the installed version of NPM on your PC via the terminal:

    npm -v

If there is no NPM version, install the latest version via the terminal:

    npm install npm@latest -g

Installing the required libraries via the terminal:

    npm install

In "config.json", change the "isLocal" variable responsible for the api used to "true":

    "isLocal": true

Build the application:

    npm run build

Start the server of application:

    npm server

Start the client of application:

    npm start

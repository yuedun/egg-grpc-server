#!/bin/bash

npm i

EGG_SERVER_ENV=uat npm stop
npm run clean
npm run tsc
EGG_SERVER_ENV=uat npm start
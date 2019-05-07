# Response UI

UI for the Computing for Good Outcomes team project for Response of Suffolk County.

## Setup

* NodeJS `v11` or greater.
  * Executable is built using `v11.4.0`.
* NPM
* Python 3.7.x + Gevent, Zerorpc, Numpy, Pandas

## Local installation

```sh
git clone https://github.com/TaskSquirrel/response-ui
cd response-ui
npm install
npm install zeromq
./node_modules/.bin/electron-rebuild
npm run app-dev
./build.sh
```

Will start local webserver and Electron process.

## Features in-progress

* Upload wizard
* Dashboard screen

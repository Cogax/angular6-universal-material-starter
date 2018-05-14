# angular6-universal-material-starter
The purpose of this repo is to have a bare-bones starting point for Angular 6 with Universal Rendering and Material Design Components.

#### Get started
```
git clone https://github.com/leonlovett/angular6-universal-material-starter.git your-folder
cd your-folder
npm install
```
To start a dev server with automatic reload on edit:
```
ng serve
```
To build and serve server rendered bundle:
```
npm run build-serve:ssr
```
To deploy to remote server:
```
npm run build:ssr
```
then upload dist folder to remote server.

use express or node to serve the `dist/server.js` file to your chosen port.
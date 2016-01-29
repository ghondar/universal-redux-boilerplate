# Universal Redux Boilerplate

Un simple boilerplate con los siguientes features:

[![Build Status](https://travis-ci.org/ghondar/universal-redux-boilerplate.svg?branch=master)](https://travis-ci.org/ghondar/universal-redux-boilerplate)
[![Dependencies](https://david-dm.org/Ghondar/universal-redux-boilerplate.svg?style=flat-square)](https://david-dm.org/Ghondar/universal-redux-boilerplate)
[![DevDependencies](https://david-dm.org/Ghondar/universal-redux-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/Ghondar/universal-redux-boilerplate#info=devDependencies&view=list)

* Javascript Universal. *Renderizado y Ruteo con componentes, almacenes y rutas compartidas.*

* Manejo de estados desde Redux.

* ES6 como estándar usando babel y webpack.

* Express 4.x.

* Cargado en caliente en modo desarrollador desde el server.

* Convenciones y scripts útiles para el desarrollo.

## Inicializar el Proyecto

Basé mi proyecto en el boilerplate de elliot ([Referencia](https://github.com/cloverfield-tools/universal-react-boilerplate)), haciendo este para un mejor entendimiento en la comunidad hispano-hablante

```
npm install
npm run webpack:dev
```

Abrir un terminal mas en la ruta del proyecto y correr

```
npm run start:dev
```

Ahora puedes abrir el proyecto desde http://localhost:3000/

## Javascript Universal

Javascript Universal quiere decir que esta diseñado para correr un montón de código en ambos lados, cliente y servidor. Comúnmente esto incluye un montón de lógica de renderizado y dominio.

Son muchas las ventajas que obtendrás al construir aplicaciones usando este camino, pero principalmente son:

* **Cross-functional teams.** Ya que todo esta escrito en Javascript, es más fácil de construir equipos que saben cómo trabajan tanto en el cliente como en el servidor de la aplicación.

* **Write once, run everywhere.** Con la excepción de alguna sustitución de librerías y browser polyfills, el codigo es compartido, esto quiere decir que tu podrás escribir la mitad de lo que escribirías en una aplicación no universal

* **More productive developers.** Dado que el proyecto es más consistente, no hay cambio de contexto cuando necesitas mantener el comportamiento de la aplicación en ambos lados del stack. Escribe el comportamiento una sola vez y ya. El cambio de contexto ralentiza a los de desarrolladores de manera significativa

## Que tenemos dentro del proyecto?

* `src/`          - Código Compartido.

* `src/App.jsx`   - Para el lado del Browser.

* `src/store/configureStore.dev.js` - Mantengo condicionales para el desarrollo en server y client.

* `source/server` - Para el lado del Server.

## Index

### Webpack

El `webpack.server.js` hace correr un server en el puerto 8888 para el bundle de webpack

### Server

El `bin/www` basandome en express-generator este sería el archivo que ejecutaría el proyecto en el puerto 3000 por defecto, este a su vez, requiere del archivo `App.jsx` para servir el contenido dinámico. Los assets son servidos desde la carpeta `build` usando `express.static`

## Scripts

La Mayoría de estos scripts están hecho para ser corridos en entorno unix/linux (OSX y sistemas operativos basados en linux)

El `package.json` tiene los siguientes scripts:

* `npm run start:dev` corre el servidor del proyecto en modo desarrollo

* `npm run start:prod` corre el servidor del proyecto en modo producción

* `npm run webpack:dev` corre el servidor del webpack en modo desarrollo

* `npm run webpack:prod` corre el servidor del webpack en modo producción

* `npm run test` verifica si las reglas de estilos y si cumple los pruebas unitarias

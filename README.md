﻿# marvel-eh-react

A continuacion los pasos para correr el proyecto. 

## Server (Capa media de servicios)
1. Ingresar al directorio "server"
```shell
cd server 
```
2. Instalar los modulos
```shell
npm i express
npm i body-parser
npm i cors
npm i nodemon
npm i dotenv
npm i axios 
```
3. Correr el servidor
```shell
npm install
npm run start
```

## Client (Capa Front-End)
1. Ingresar al directorio "server"
```shell
cd client 
```
2. Instalar los modulos
```shell
npm i express
npm i body-parser
npm i cors
npm i nodemon
npm i dotenv
npm i axios
npm install react-icons
```
3. Instalar Taildwind
```shell
npm install -D tailwindcss
npx tailwindcss init
```
4. En el archivo taildwind.config.js se debe especificar que se usara la extension jsx
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```   
5. Notas:
Como utilicé como IDE VS Code, instalé la extensión ES7 + React para las importaciones automáticas entre otras funciones

7. Correr el servidor
```shell
npm install
npm run start
```

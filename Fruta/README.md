# Fruta

Proyecto generado con el cliente angular que permite realizar operaciones CRUD (Create, Read, Update, Delete) a través de un servicio de frutas simulado.
Las tecnologías empleadas:
- Angular 2
- Bootstrap

[Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Paso 1: Instalar las dependencias
El módulo de dependencias (node_modules) se ha eliminado del proyecto para aligerar la carga de alojamiento. Por ello, es necesario instalar las dependencias con el comando:
- **npm install**

## Paso 2: Activar JSON-SERVER
La aplicación obtiene la información mediante un servicio, es decir, recibe datos de un servidor, es necesario simular el comportamiento de un servidor.
JSON-SERVER es una herramienta que nos permitirá hacer estas peticiones de forma interna.
Para iniciarlo:
- **json-server --watch db.json** 

## Paso 3: Iniciar la webapp
Para iniciar el servidor de angular que nos permite ejecutar sus aplicaciones nos valdremos del comando:
- **ng serve -o**

###IMAGENES
![Imagen del Comparador](/frutas.png)




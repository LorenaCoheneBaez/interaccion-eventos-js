# Manipulando elementos del DOM con Javascript

## Objetivo:

Utilizar Javascript, desde el frontend, para manipular elementos del DOM, agregando eventos de teclado y mouse.

### Consignas:
### *Home
- Agregar un evento para que cada vez que el usuario haga clic sobre el logo de Digital House se muestre el menú lateral con id="menu".

- Agregar un evento que permita ocultar el menú lateral cuando el mouse deje el área del menú
***

### *Listado de películas
- Lograr que el modo oscuro se aplique si el usuario pasa el mouse sobre el logo de Digital House.
***

### *Agregar película
- Establecer que, cada vez que se pase el mouse por el título 'AGREGAR PELÍCULA', este cambie su color.

- Cuando el usuario tipee de corrido la palabra “secreto”, en el input para ingresar el título de la película, se dispare una alerta que diga “SECRETO MÁGICO”.

## Tecnologías usadas

<p align="left">
<!-- javascript -->
<a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" data-bs-toggle="tooltip" title="JavaScript"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javaScript"/> </a>
<!-- express -->
<a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction" alt="Express Js" ><img src= "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
<!-- MYSQL -->
<a href="https://www.mysql.com/" alt="Express Js" ><img src= "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" /></a>
<!-- HTML -->
<a href="https://developer.mozilla.org/es/docs/Web/HTML" alt="HTML5" ><img src= "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /></a>
<!-- css -->
<a href="https://www.w3schools.com/css/" target="_blank" data-bs-toggle="tooltip" title="CSS3"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> </a>
</p>

## Instalación de la base de datos relacional *movies-db.sql*:

- Debe tener instalado un gestor de base de datos, por ejemplo: MYSQL Workbench (https://www.mysql.com/products/workbench/) o Heidi db (https://www.heidisql.com/).

- Desde su gestor de base de datos, correr el script que se encuentra en:

   `interaccion-eventos-js/src/database/script/movies-db.sql`

- Levantar el servidor para la base de datos desde su gestor de base de datos.

## ¿Cómo instalar el proyecto?

### Desde la terminal:
  
- Clonar el proyecto:

````
 git clone https://github.com/LorenaCoheneBaez/interaccion-eventos-js.git
 ````

- Ingresar a la carpeta del proyecto: 
````
cd interaccion-eventos-js
````

- Para instalar las dependencias correr: 

```
npm install
```

### Levantar el servidor del proyecto: 

````
npm test
````

### Rutas:

- Home http://localhost:3001/
- Listado de películas http://localhost:3001/movies
- Agregar película http://localhost:3001/movies/add

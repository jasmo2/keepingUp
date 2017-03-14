# React-Native Presentation
## My first ToDo-List
Primero que todo [React-Native getting started](https://facebook.github.io/react-native/docs/getting-started.html#content);

Los comandos que debemos correr son:

 `npm install -g react-native-cli`

`react-native init todoList`

`cd todoList`

`npm install`

`react-native run-ios`
<hr>

## Paso 2

Por ahora estructuremos nuestro proyecto:
agremos una carpeta llamada **src** y dentro otra carpeta llamada components donde crearemos todos los componentes necesarios para la aplicación.


    |-- todoList
      |-- src
        |-- main.js
        |-- router.js
        |-- components
          |-- container.js

ahora procedamos a crear nuestro primer componente:
**container.js**

de aquí reconfiguramos index.ios.js para correr la aplicación.
<hr>

## Paso 3
vamos a agregar nuestras tareas en un componente aparte.
**ToDoList** que será el encargado de listar los _ToDo's_
Como se vé el es obtiene las propiedades que el **Container** le envia por medio de sus propiedades.

<hr>
## Paso 4
Se agrega un componente <Item> que será cada To-Do

vamos a usar [renderrow de RN](https://facebook.github.io/react-native/docs/listview.html#renderrow)
aquí nos indica que tenemos los siquientes metodos

 `(rowData, sectionID, rowID, highlightRow)`

También es esta sección manejaremos los metodos de presionar el _To-Do_ desde el contenedor para poder añadir nuevos _To-Do's_ en un futuro.

<hr>
## Paso 5

En este paso nos aproximamos a la creación de nuestro To-Do List.

Agregaremos un último componente que será el encargado edición y creación de items.  También usaremos una librería externa llamada [tcomb-form-native](https://github.com/gcanti/tcomb-form-native) la cual debemos instalar con:

`npm install tcomb-form-native --save`


esta nos servirá para realizar validaciones posteriormente.

También realizaremos unos cambios en la navegación para poder pasar los argumentos de nuestros _To-Do's_

<hr>
## Bonus Redux Getting Started

En este paso se implementará el _store_ de redux y toda su arquitectura. Aquí se vé reflejado la siguiente estructura:

|-- todoList
  |-- src
    |-- actions
    |-- reducers
El primer paso es instalar redux y el puente con react.

`npm install redux --save`
`npm install react-redux --save`

Hacemos refactor de todos los componentes para cambiar el viejo _estado_ por un nuevo **estado global dentro del _store_ de REDUX**

// Terminamos la clase anteriro viendo que no hay manera de saber el orden
// en el cual el servidor nos dará las respuestas, nosotros se la podemos pedir
// en cierto orden pero puede ser que el server nos responda en otra manera

// La única manera de poder mostrar en orden las respuestas es si mantenemos
// dicho orden a lo largo de nuestro programa. Y cómo se logra eso?

// Veamos cómo

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };


// Cambiaremos la función de obtener personaje para que acepte una segunda función que sea
// el callback

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function (data) {
        console.log(`Hola, yo soy ${data.name}`);
    }); 

    if (callback) {
        callback();
    }
}

// Si queremos garantizar el orden, lo que tenemos que hacer es ir llamando
// a cada una de las siguientes funciones de obtener personaje
// con callbacks

// Lo que perdemos es el paralelismo de la request. Hacemos en un pedido
// un request, y luego el callback va a ser otro request, y así sucesivamente.


obtenerPersonaje(1, function () { // Recordemos que se coloca la función declarada y no invocada 
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3);
    }); // Porque si lo ponemos de la otra manera inmediatamente se invoca (incluso antes que el obtenerPersonaje(1    ))
}); // Es importante que el callback sea una función que no se esté ejecutando o invocando, que solo sea declarada

// La diferencia es que aquí se están pidiendo EN SERIE y no en PARALELO como antes.

// Se obtiene un personaje, llega la respuesta, se obtiene un personaje, llega la respuesta, etc. 

// A la anidación de calbacks como la de arriba se le llama Callback Hell (infierno de los callbacks)

// Siguiendo la lógica de arriba empieza a ser el código a ser cada vez más horizontal
// en vez de vertical. 

// Termina siendo un lío, desastre 
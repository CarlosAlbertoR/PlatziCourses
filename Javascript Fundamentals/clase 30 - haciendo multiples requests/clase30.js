// En la clase anterior aprendimos a hacer un request con la ayuda de jQuery
// y logeamos en la consola los datos del nombre que venía, en este caso el 
// nombre de Luke Skywalker 

// Haremos un programa que logee los datos de múltiples personajes
// y dichos requests los haremos en paralelo

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const onResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`);
};


// Para ello nos crearemos una función llamada obtenerPersonaje, a partir de un id

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onResponse); 
}

// Por ejemplo si tenemos:

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

// En qué orden llegarán las respuestas?

// Llegan en distintos ordenes, y ahí se puede ver el asincronismo de JS
// en su máximo esplendor. 

// Básicamente no sabemos en qué orden nos van a llegar las respuestas, algo que
// es imposible de saber. 

// Eso es el Asincronismo. Entender que llamaremos un método asincrónico,
// o en este caso múltiples, y no sabemos en qué orden nos llegarán las respuestas.

// Eso depende del servidor y cuánto tarda en responder cada uno de los requests

// Lo que sí sabemos es que iniciamos los requests en un orden pero no sabemos
// en qué orden nos llegará. 

// Pudo haber sido incluso con un for. Pero no se garantiza
// para nada que el orden en el que los pedimos sea el orden en los que lleguen

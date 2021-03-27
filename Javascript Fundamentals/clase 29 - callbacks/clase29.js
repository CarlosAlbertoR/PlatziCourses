// Ahora aprenderemos qué son los Callbacks, cómo utilizarlos y pondremos
// en práctica lo que aprendimos de asincronismo en JS

// Utilizaremos una librería externa llamada jQuery para usar requests y 
// obtener datos en una API externa. Utilizaremos la Star Wars API que nos da
// datos sobre las películas de SW, personajes, etc. 

// un CDN es un content delivery network que es un servidor que nos servirá
// el archivo desde la ubicación más cercana a nosotros (indicandonos la IP del server cercano)

// Para hacer un request debemos saber la URL a la cual queremos acceder

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

// Construimos las constantes para el request

// Para poder hacer un REQUEST con jQuery tenemos que llamar al método GET

// GET acepta varios parámetros, en primer lugar la URL a la cual queremos acceder

// Obtener Luke Skywalker y su nombre completo:

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`;
const opts = { crossDomain: true };

const onResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`); // Hola, yo soy Luke Skywalker
};

$.get(lukeUrl, opts, onResponse); // Dicha función anónima en el get es el Callback y se ejecuta cuando la request sucede y es exitosa.
// La ejecuta get, aqui nosotros la pasamos como parámetro. onResponse es el callback.

// El segundo parámetro es indicarle a jQuery que ese request se hace a otra página
// No el archivo actual que tenemos acá

// Luego viene el famoso Callback. ¿Qué es un callback? 
// Es una función que se va a ejecutar en algún futuro, que no sabemos cuándo
// se va a ejecutar, pero que GET será el encargado de llamarlo. ¿Cuándo? en 
// el futuro, cuando termine el request se va a llamar. 

// También puede suceder que dicho Request jamás se complete y que la función nunca se llame.
// Y está bien, pero lo que tenemos que entender es que dicha función puede ejecutarse o no
// en un futuro con los datos que nos mande el request de respuesta. 

// En la función anónima que recibe GET no sabemos cuántos parámetros se reciben,
// en la documentación de jQuery pdoemos ver y también podemos usar console.log(arguments)
// En esta ocasión la función es el success: función callback que se ejecuta si el request es exitoso

// Los argumentos son la data, un string indicando el estado de respuesta, y el objeto del request en JS

// arguments es una variable que tienen todas las funciones que nos da un array con los parámetros que recibe la función

// Lo que más nos interesa es la data
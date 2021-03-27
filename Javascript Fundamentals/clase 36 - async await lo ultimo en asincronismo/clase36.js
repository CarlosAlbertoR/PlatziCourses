// La última manera de hacer tareas asíncronas en JS, que es la manera más
// sencilla y clara de realizar tareas asíncronas. Se parece mucho a como
// escribimos codigo normal, de arriba hacia abajo (antigua), sin encadenar
// métodos o codigo horizontal con callbacks, sin embargo, usa palabras
// reservadas del lenguaje. Async-await:



const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };


function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve(data);
        }).fail(() => reject(id));

    });

}

const onError = (id) => {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
};

// Creamos una función llamada obtenerPersonajes que realiza lo que veníamos haciendo

async function obtenerPersonajes () {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promesas = ids.map(id => obtenerPersonaje(id)); 

    // Ahora pondremos el resultado de las promesas en una variable
    // Nota: la línea asincrona se pone en bloque try-catch

    try {

        var personajes = await Promise.all(promesas);
        console.log(personajes);

    } catch (id) {
        onError(id);
    }


    // Con await se detiene el código en dicha línea (solo en el scope de la función),
    // es decir, la función en sí parará allí pero afuera siguen ejecutándose otras cosas
    // Hasta que TODAS las promesas sean resueltas, y allí el valor se guardará
    // en la variable personajes. 

    // También para marcar que es una función asíncrona se debe escribir
    // async antes de function

}

// La llamamos

obtenerPersonajes();


// Async-await clarifica mucho más el código, lo ordena mejor, y es algo que hoy por hoy
// se usa bastante. Tener en cuenta que no todos los navegadores lo usan, Chrome sí.
// Para usarlo en otros navegadores se usa un polyfill.
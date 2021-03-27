// Las promesas nos simplifican la vida para escribir código asíncrono.
// Sin embargo aún hacemos los request en serie en vez de paralelos,
// lo cual podríamos mejorar haciendo que la performance del programa
// mejore mucho. El tema es que no podíamos obtener en orden las respuestas
// del server. Con promesas podemos hacerlo.

// Ejemplo anterior:

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

// Lo que haremos es guardar en un array con los ids que deseamos:

var ids = [1, 2, 3, 4, 5, 6, 7];

// Generaremos un array con múltiples promesas, donde cada elemento del array
// sea una promesa correspondiente a cada id. 

// Recordando arrays, podemos usar map para modificar cada elemento de un array

// Recorreremos el array de ids y por cada uno se retornará una promesa (otro array):

// var promesas = ids.map(function (id) {
//     return obtenerPersonaje(id);
// })

var promesas = ids.map(id => obtenerPersonaje(id)); 

// Está lleno de promesas

// ¿Cómo obtenemos los valores de estas promesas cuando se resuelvan?

// Con el método all de la clase Promise (que recibe un array de promesas)
// podemos obtenerlos

Promise
    .all(promesas) 
    .then(personajes => console.log(personajes))
    .catch(onError);

// En el browser podemos ver que se hicieron las promesas en el orden
// indicado del array 
// Las promesas tienen un gran potencial por sobre los callbacks,
// encadenarlas en paralelo (con callbacks no es sencillo).

// Comentando

// obtenerPersonaje(1).then(data1 => {
//     console.log(`El personaje 1 es ${data1.name}`);
//     return obtenerPersonaje(2);
// }).then(data2 => {
//     console.log(`El personaje 2 es ${data2.name}`);
//     return obtenerPersonaje(3);
// }).then(data3 => {
//     console.log(`El personaje 3 es ${data3.name}`);
//     return obtenerPersonaje(4);
// }).then(data4 => {
//     console.log(`El personaje 4 es ${data4.name}`);
//     return obtenerPersonaje(5);
// }).then(data5 => {
//     console.log(`El personaje 5 es ${data5.name}`);
//     return obtenerPersonaje(6);
// }).then(data6 => {
//     console.log(`El personaje 6 es ${data6.name}`);
// })
// .catch(onError);



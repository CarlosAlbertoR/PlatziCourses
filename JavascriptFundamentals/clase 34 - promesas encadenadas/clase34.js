// En la clase anterior vimos como crear una promesa para resolver una tarea
// asíncrona. Lo que haremso ahora será encadenar varias promesas (similar a 
// como haciamos con los callbacks), pero quedará mucho mejor 

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


obtenerPersonaje(1).then(data1 => {
    console.log(`El personaje 1 es ${data1.name}`);
    // Lo que haremos es que al resolver la promesa, al obtener la data,
    // retornaremos otra promesa. Para obtener el siguiente personaje, y luego el siguiente y así
    // sucesivamente
    // Así devolveremos otra promesa: de esta manera en el then
    // devolveremos una promesa ya que obtenerPersonaje devuelve una promesa.
    return obtenerPersonaje(2);
}).then(data2 => {
    console.log(`El personaje 2 es ${data2.name}`);
    return obtenerPersonaje(3);
}).then(data3 => {
    console.log(`El personaje 3 es ${data3.name}`);
    return obtenerPersonaje(4);
}).then(data4 => {
    console.log(`El personaje 4 es ${data4.name}`);
    return obtenerPersonaje(5);
}).then(data5 => {
    console.log(`El personaje 5 es ${data5.name}`);
    return obtenerPersonaje(6);
}).then(data6 => {
    console.log(`El personaje 6 es ${data6.name}`);
})
.catch(onError);

// Lo que se gana es legibilidad del código, aquí no se encadenaron las llaves
// como con los callbacks. 

// Adicionalmente, si en cualquiera de las promesas hubo un error el catch es el mismo 
// para todos.

// Cabe recordar que estos requests se están haciendo en SERIE, no en paralelo.



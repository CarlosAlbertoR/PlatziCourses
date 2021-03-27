// Vimos que con los callbacks teniamos un problema bastante grande que  
// cuando llamabamos un callback dentro de otro callback y ese callback a otro,
// y así sucesivamente, el código se vuelve bastante ilegible. (algo que no queremos tener en nuestro programa)

// Para resolver este problema es que surgen las Promesas, se incorporan al
// lenguaje de JS (antes se necesitaba usar una librería externa, como Bluebird, en su época de las más famosas)

// Pero ahora ya la mayoría de los navegadores soportan promesas. Si de igual manera
// deseamos asegurarnos de que las promesas corran en nuestro programa podríamos usar 
// lo que se llama un Polyfill, que detecta si el navegador donde corremos el código
// no tiene soporte para promesas, creará automáticamente la clase de las Promesas por nosotros
// y así podríamos utilizarla y sería transparente para nuestro código.

// ¿Qué son las promesas? Debemos pensar a las promesas como valores que
// aún no conocemos. Es la promesa de que allí habrá un valor cuando
// una acción asíncrona suceda y se resuelva. 

// Las promesas tienen 3 estados en las que pueden estar (son como cualquier otro objeto de JS):

// El primero y en el cual todas las promesas se inicializan, es PENDING
// Cuando creamos una promesa estará en este estado por default. 

// Si dicha promesa se resuelve exitosamente, pasará al estado de FULFILLED.

// Si ocurre algún error en la acción asíncrona que está resolviendo va pasar al estado de REJECTED.

// No siempre las promesas funcionan de manera asíncrona. 
// Algunas promesas pueden resolverse de manera síncrona, por ejemplo una
// promesa que devuelva un número sin haber realizado ninguna tarea asíncrona,
// también es algo posible.

// Para obtener el valor de la RESOLUCIÓN de la promesa, podemos llamar
// a la función .then y le pasaremos como parámetro otra función
// en la cual, el primer parámetro de dicha función, es el valor que esperabamos

// En cambio si sucede algún error al resolver la promesa, si nunca se llega
// a resolver la promesa y se rechaza, entonces podemos hacer un .catch
// y le pasaremos otra función en la cual obtendremos como parámetro 
// el error que sucedió 

// Al crear una promesa (que es un objeto como cualquier otro de JS), 
// cuando construimos objetos Promesas le pasamos una función que lleva 2 
// parámetros: resolve y reject, que son funciones que se llaman de acuerdo 
// a si la promesa se resuelve exitosamente (resolve) o si sucede algún error
// (reject). 

// Si se resuelve exitosamente se llama a resolve pasándole como parametro el 
// valor que esperamos finalmente, si algún error sucede se llama a reject
// pasándole el error. 

// Para obtener luego el valor que esperabamos de la resolución exitosa,
// llamamos a .then y tendremos el valor disponible para nosotros, en otra
// función (arrow function). Si sucede algún error, llamamos a .catch
// y allí obtendremos el error disponible para hcer lo que tengamos que hacer,
// como mostrar algún mensaje al usuario, hacer algún log, etc. 

// Algo más acerca de las promesas es que luego de llegar al estado de
// FULFILLED, podemos podemos RETORNAR otra PROMESA dentro de .then
// y de esa manera ir encadenando las promesas en sucesivas acciones asíncronas

// Y cada una de ellas podrá ser rechazada (reject) o resuelta (resolve)
// en una nueva promesa que terminará en el estado de fulfilled. 

// Volvamos al ejemplo de la clase anterior:

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

// Modificaremos la función obtenerPersonaje para que RETORNE una PROMESA
// en vez de que RECIBA un CALLBACK como parámetro.

function obtenerPersonaje(id) {
    // Haremos que retorne una nueva promesa
    return new Promise((resolve, reject) => {
        // Dentro de la promesa se hace el llamado asíncrono
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve(data);
        }).fail(() => reject(id));
        // Resolve no se ejecutará hasta que el Callback no se ejecute, es deicr,
        // hasta que el GET sea exitoso.
    });

}

const onError = (id) => {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
};


obtenerPersonaje(1).then(function (data) {
    console.log(`El personaje 1 es ${data.name}`);
}).catch(onError);

// En .catch es equivalente a
// .catch(function (id) {
//  onError(id);
// });
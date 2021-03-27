// Antes habíamos visto como solucionar el tema de cómo podíamos solucionar
// el tema de que el server nos respondía en distinto orden a los requests
// que nosotros le hacíamos. 

// Ahora solucionaremos el tema de que tal vez en la mitad de uno de los requests
// nos quedamos sin internet, ¿cómo solucionamos eso?

// También con callbacks. Vamos a verlo:

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };


// Cambiaremos obtenerPersonaje

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    // En la función inicial teniamos dos callbacks,
    // el que se ejecuta tras llegar la respuesta del server
    // Y el que se recibe para ser el siguiente

    // Ahora quitaremos el del saludo y reestructuramos

    // En el llamado de get podemos encadenar otro llamado al metodo fail
    // que recibe un callback que se ejecutará si ocurre algún error

    $.get(url, opts, callback).fail(() => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
    });

}

// Con Google Chrome, deshabilitando caché y poniendonos offline en medio de
// refresacar la página, ocurre error y no se obtiene un personaje. Cabe
// resaltar que salta el error y después no se muestran más por la razón
// de que están encadenados unos a otros y si ese no se ejecutó bien
// tampoco lo será su callback y ahí termina la cadena

// Así solucionamos el error que nos quedemos sin conexión con callbacks

obtenerPersonaje(1, function (data) {
    console.log(`Hola, yo soy ${data.name}`); 
    obtenerPersonaje(2, function (data) {
        console.log(`Hola, yo soy ${data.name}`);
        obtenerPersonaje(3, function (data) {
            console.log(`Hola, yo soy ${data.name}`);
            obtenerPersonaje(4, function (data) {
                console.log(`Hola, yo soy ${data.name}`);
                obtenerPersonaje(5, function (data) {
                    console.log(`Hola, yo soy ${data.name}`);
                    obtenerPersonaje(6, function (data) {
                        console.log(`Hola, yo soy ${data.name}`);
                        obtenerPersonaje(7, function (data) {
                            console.log(`Hola, yo soy ${data.name}`);
                        })
                    })
                })
            })
        });
    }); 
}); 

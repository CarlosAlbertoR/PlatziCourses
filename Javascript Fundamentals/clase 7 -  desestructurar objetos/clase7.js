// Ahora aprenderemos otra forma de acceder a los atributos de los objetos que es 
// la desestructuración de los mismos. 

// Retomamos lo de la anterior clase:

var juan = {
    nombre: 'Juan',
    apellido: 'Marcos',
    edad: 28
}


var manuel = {
    nombre: 'Manuel',
    apellido: 'Calle',
    edad: 27
}

function imprimirNombreEnMayusculaMejorado4({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculaMejorado4(juan);
imprimirNombreEnMayusculaMejorado4(manuel);

// Lo que haciamos de desglosar el parametro en un objeto vamos a dejarlo como estaba antes:
// Y hacerlo en una línea abajo:

function imprimirNombreEnMayusculaMejorado5(persona) {
    // var nombre = persona.nombre; 
    // Para evitar la duplicación de la palabra nombre hacemos así:
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculaMejorado5(juan);
imprimirNombreEnMayusculaMejorado5(manuel);

// Reto

function imprimirNombreYEdad(persona) {

    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)

}

imprimirNombreYEdad(juan);
imprimirNombreYEdad(manuel);

// Esto es desestructuración de objetos. 
// Anteriormente trabajamos con los condicionales en JS, ahora trabajaremos con
// las funciones, y una manera de trabajar con ellas, que es desglosarlas
// cada vez en funciones más pequeñas y que estas funciones logren retornar
// valores que a nosotros nos interesan. 

var juan = {
    primer_nombre: 'Juan',
    segundo_nombre: 'Marcos',
    edad: 20,
    ingeniero: true,
    cocinero: false, 
    cantante: false,
    dj: false,
    guitarrista: false, 
    drone: true
}

// Tomando el ejemplod el reto de la clase pasada:

function imprimirSiEsMayorDeEdad(persona) {
    if(persona.edad >= 18) {
        console.log(`${persona.primer_nombre} es mayor de edad`);
    } else {
        console.log(`${persona.primer_nombre} es menor de edad`);
    }
}

// Se piensa que tal vez la lógica de imprimir esté en otra función y la lógica de revisar
// si es menor o mayor de edad esté en otra. Así: 

const MAYORIA_DE_EDAD = 18; // En vez de decir que es una variable que tiende a cambiar
// se puede redefinir con const para indicar que es un valor más bien fijo

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

// Además de en vez de colocar >= 18, para ser más claros definimos una variable
// de mayoría de edad y le asignamos el valor, asi controlandolo con una variable
// es mucho más legible y una mejor práctica.

// Lo reorganizamos y queda más claro el código:

function imprimirSiEsMayorDeEdad2(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.primer_nombre} es mayor de edad`);
    } else {
        console.log(`${persona.primer_nombre} es menor de edad`);
    }
}

// Desglosamos ambas funciones, a una de ellas le dijimos que retornara un número
// y usamos una constante.

imprimirSiEsMayorDeEdad2(juan);

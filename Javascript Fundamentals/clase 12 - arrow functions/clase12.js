// Ahora revisaremos otra manera de escribir las funciones con arrow functions.

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

// En JS existe otra manera de escribir funciones que es de la siguiente manera:
// lo que podemos hacer es asignar a una variable el valro de una función.
// Es algo que no todos los lenguajes de programación lo permiten hacer. 
// Podemos cambiar nuestra función:

const esMayorDeEdad = function (persona) { // Es mejor colocar const y no var, para indicar que es una función que no cambiará
    return persona.edad >= MAYORIA_DE_EDAD;
} // Cuando le sacamos el nombre se le llama Función Anónima: no tiene nombre.
// Sin embargo, dicha función anónima puede ser accedida a través de una variable
// que si tiene un nombre. 
// Luego se puede invocar la función de manera normal. Se le debe dar el mismo trato.

// Sin embargo otra forma de escribir esto, es con un Arrow Function:

const esMayorDeEdad1 = (persona) => { // Quitamos la palabra reservada function
    return persona.edad >= MAYORIA_DE_EDAD; // y agregamos una flecha
} 

// Nos podemos seguir ahorrando caracteres:

const esMayorDeEdad2 = persona => { // Cuando tenemos un solo parametro en la función podemos
    return persona.edad >= MAYORIA_DE_EDAD; // obviar los paréntesis
} 

// JS nos permite, si es una función que solo hace un return, quitar la palabra return y las llaves del bloque:

const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD; 

// También lo podemos hacer desestructurando el objeto que se recibe:

const esMayorDeEdad4 = ({ edad }) => edad >= MAYORIA_DE_EDAD; 

const MAYORIA_DE_EDAD = 18; 


function imprimirSiEsMayorDeEdad2(persona) {
    if(esMayorDeEdad4(persona)) {
        console.log(`${persona.primer_nombre} es mayor de edad`);
    } else {
        console.log(`${persona.primer_nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad2(juan);

// Reto

const esMenorDeEdad = persona => !esMayorDeEdad(persona);

console.log(esMenorDeEdad(juan));

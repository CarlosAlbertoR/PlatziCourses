// Ahora veremos las estructuras de control. Las estructuras de control nos permiten 
// decir si un bloque de código se ejecuta o no, o incluso si se ejecuta
// varias veces, o hasta que se cumpla cierta condición. 

// Continuemos con las personas:

// Diremos profesiones o hobbies si Juan los cumple o no. 
// Para decidir si algo se cumple o no se cumple usamos un nuevo tipo de variable
// que es el Booleano: Verdadero o Falso. 

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

// Definir una función que nos diga qué profesiones tiene una persona

function imprimirProfesiones(persona) {
    console.log(`${persona.primer_nombre} es: `);

    if(persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }

    if(persona.cocinero) {
        console.log('Cocinero');
    }

    if(persona.cantante) {
        console.log('Cantante');
    }

    if(persona.dj) {
        console.log('DJ');
    }

    if(persona.guitarrista) {
        console.log('Guitarrista');
    }

    if(persona.drone) {
        console.log('Piloto de drone');
    }
}

imprimirProfesiones(juan);

// El condicional If-Else nos permite verificar una condición booleana (si algo es 
// verdadero o falso) y a partir de ello ejecutar un bloque de código o no, 
// e incluso dependiendo de la condición ejecutar otro bloque de código (esto se logra
// con el else). 

// Reto: imprimir si es mayor de edad:

function imprimirSiEsMayorDeEdad(persona) {
    if(persona.edad >= 18) {
        console.log(`${persona.primer_nombre} es mayor de edad`);
    } else {
        console.log(`${persona.primer_nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(juan);
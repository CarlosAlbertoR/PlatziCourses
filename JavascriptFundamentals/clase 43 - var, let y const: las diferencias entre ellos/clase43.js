// El primero de ellos es var. La manera más antigua de declarar variables.

// Escribiremos una función que se va a llamar esMayorDeEdad

var juan = {
    nombre: 'Juan',
    edad: 20
}

function esMayorDeEdad(persona) {
    var mensaje;
    if(persona.edad >= 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
} 

esMayorDeEdad(juan);

// Cuando declaramos variables con var lo que sucede es lo mismo si la declaramos antes y la asignamos segun el caso, en vez de esto:

// function esMayorDeEdad(persona) {
//     if(persona.edad >= 18) {
//         var mensaje = 'Es mayor de edad';
//     } else {
//         var mensaje = 'Es menor de edad';
//     }
//     console.log(mensaje);
// } 

// Tener lo de arriba.

// Eso se llama hoisting, cuando tenemos variables con var, siempre conviene declararlas arriba para que quede bien claro cuales
// son las variables que existirán dentro de la función. Lo que hace es subir las declaraciones arriba del todo del bloque del código
// y ponerles undefined. 

// A diferencia de var, si se escribe con let: 

function esMayorDeEdad2(persona) {
    let mensaje;
    const MAYORIA_DE_EDAD = 18;
    if(persona.edad >= MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
} 

// Lo que pasa con let es que el alcance de la variable solo es en el bloque en el que se crea. El console.log si estuviera afuera
// no lo va a poder ver. Se debería declarar arriba y hacer asignacion (contrario al inicial que da error:)

// function esMayorDeEdad2(persona) {
//     if(persona.edad >= 18) {
//         let mensaje = 'Es mayor de edad';
//     } else {
//         let mensaje = 'Es menor de edad';
//     }
//     console.log(mensaje);
// } 

esMayorDeEdad2(juan);

// Let, a diferencia de var, reduce su alcance al bloque de código donde es utilizado

// Const en cambio se comporta parecido a let, salvo que no se puede reasignar. 

// Para arreglos declarados con const, no se pueden reasignar pero si se pueden modificar mediante push y las funciones de arrays.

const numeros = [1, 2, 3, 4];

numeros.push(5);

console.log(numeros);

// Otro para tener en cuenta es cuando se tiene en cuenta un ciclo for:

for(var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`Terminó el for, el valor de i es ${i}`)

// En este console log podemos accederlo porque fue realizado con var. Si se cambia por let,
// i no va a estar definido porque i solo se utilizaría dentro del for. 

// LO mejor es no usar var, usar let si se re asigna la variable, y si jamas se debe reasignar, usar const. 
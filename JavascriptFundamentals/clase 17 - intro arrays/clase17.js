// Hablemos sobre los Arrays, también conocidos como Arreglos. 
// Estas estructuras de datos nos permiten agrupar cierto tipo de datos, números, letras
// strings, objetos, funciones. Dentro de una colección, y luego poder realizar
// ciertas operaciones sobre esa colección. 

// Aprenderemos a hacer una colección e iterar por cada uno de los elementos que 
// existen en dicha colección. 

// Tenemos las siguientes personas:

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
  }
  
  var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
  }
  
  var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
  }
  
  var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
  }
  
  var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
  }
  
  var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
  }

// Si quisieramos agrupar a todas estas personas dentro de una misma colección 
// lo podemos hacer dentro de una variable llamada personas
// Para indicar que algo es un array tenemos que usar los corchetes:

var personas = [sacha, alan, martin, dario, vicky, paula];

// Dentro de los corchetes colocamos las variables que queremos que contenga la colección
// Un array puede ser de números, objetos, funciones, o incluso mezclar cosas dentro del mismo array
// JS nos permite hacer eso. 

// Al igual que los caractéres, las posiciones de un array en JS se indexan desde 0.
// Para acceder al primer elemento del array hacemos personas[0], por ejemplo. 

console.log(personas[0]);

// Como cada elemento del array es un objeto podemos acceder a sus atributos:

console.log(personas[0].altura);

// Otra manera válida es:

console.log(personas[0]['altura']);

// Podemos por ejemplo recorrerlo e imprimir la altura de cada persona, con un ciclo for:

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`);
}

// Con .length accedemos al atributo length de un array (su longitud)

// Así creamos arrays y los iteramos, es decir pasar por cada uno de sus elementos.

// Los arrays pueden ser de distintos tipos: no solo de objetos o numeros, se pueden combinar.


// Otra de las funciones comunes que se usan en Arrays es reduce. Reduce lo que hará
// será reducir un array a un valor único. 

// Se agregó el número de libros que tiene cada una de las personas. 

// Lo que haremos será sacar la cuenta total de cuantos libros tienen entre todos.



var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182
}


var personas = [sacha, alan, martin, dario, vicky, paula];

// Esto se podría hacer con un ciclo for y un acumulador, así:

var acum = 0;

for (var i = 0; i < personas.length; i++) {
  acum = acum + personas[i].cantidadDeLibros;
}

console.log(`En total todos tienen ${acum} libros`);

// Sin embargo con Reduce: 

// Para reducirlo necesitamos 2 cosas:
// Primero, una funcón
// Luego, el valor original del acumulador (generalmente 0)

// Esta es la función que modifica el valor del acumulador, como arrow function
// y solo retorna el acum con el valor agregado de cada item del array:

const reducer = (acum, persona) => acum + persona.cantidadDeLibros;

// Incluso podríamos desestructurar la persona y tomamos el atributo que nos interesa:

// const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);

// Antes aprendimos a crear arrays y a trabajar con ellos iterandolos. 
// Ahora veremos como filtrar elementos de los arrays. 

// Tomando el ejemplo de la clase anterior:

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

// Lo que haremos será filtrar elementos del array:

// Por ejemplo, filtrando a las personas altas. 

// Para filtrar siempre se necesitan 2 cosas:
// 1. Un array
// 2. Una condición

// La condición va a ser una función.

var personas = [sacha, alan, martin, dario, vicky, paula];

// Función para determinar la condición (si una persona es alta)
// La condición recibe cada uno de los elementos del array:

const ALTURA = 1.8;

const esAlta = persona => persona.altura > ALTURA;

// Filtraremos el array:

var personasAltas = personas.filter(esAlta);

console.log(personasAltas);

// Nos devuelve un array con los objetos que cumplen con la condición.

// Otra manera pudo haber sido:

var personasAltas2 = personas.filter(function (persona) {
  return persona.altura > ALTURA;
})

// Sin embargo, se recomienda tener la condición por separado en vez de poner la
// función anónima en el cuerpo del llamada filter

console.log(personasAltas2);

// Se debe de tener en cuenta que filter devuelve un NUEVO array, no modifica el original
// sobre el cual se hizo el filtro. 

// Otra manera sería desglosar a la persona en la función:

const esAlta2 = ({ altura }) => altura > ALTURA;

// Reto: personas bajas

const esBaja = persona => persona.altura <= ALTURA;

var personasBajas = personas.filter(esBaja);

console.log(personasBajas);

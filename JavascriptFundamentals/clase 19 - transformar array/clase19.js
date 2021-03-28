// Seguiremos aprendiendo sobre distintas funciones que podemos aplicar sobre
// los arrays. Ahora profundizaremos acerca de la función map. Map, a diferencia de
// filter, lo que hará es devolver un nuevo array en el cual modificará cada uno
// de los elementos que le vayamos pasando del array original. 

// Por ejemplo, podríamos pasar la altura de las personas (que está en metros)
// a centímetros. Tan sencillo como multiplicar la altura por 100 y listo.

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


var personas = [sacha, alan, martin, dario, vicky, paula];

// Función para pasar la altura Cms 

// const pasarAlturaACms = persona => {
//   // persona.altura = persona.altura * 100;
//   persona.altura *= 100;
//   return persona; // Se retorna la persona modificada
// }

// Aqui crearemos el array resultado de map:

// Le tenemos que decir la función que queremos que aplique a cada uno de los elementos

// var personasCms = personas.map(pasarAlturaACms);

// console.log(personasCms); // Se puede ver en la consola

// Sin embargo hasta acá modificamos el array original de personas,
// al acceder a sus atributos a través de la función.

// Lo que debemos hacer es devolver un nuevo objeto con la altura modificada:

// Retornamos un nuevo objeto con la persona desglosada:

const pasarAlturaACms2 = persona => {
  return {
    ...persona,
    altura: persona.altura * 100 // Sin embargo pisamos o modificamos el atributo de altura PERO
  } // está siendo modificado en el nuevo OBJETO que nada tiene que ver con el original
}

var personasCms2 = personas.map(pasarAlturaACms2);

console.log(personasCms2); // Al final del día serán objetos totalmente distintos en memoria

// Podemos modificar la arrow function para que simplemente devuelva un objeto:

const pasarAlturaACms3 = persona => ({
    ...persona,
    altura: persona.altura * 100
}); // Para devolver un objeto con arrow function solo lo surrendeamos con paréntesis
// surrendear = rodear

var personasCms3 = personas.map(pasarAlturaACms3);

console.log(personasCms3);

// Vimos que map devuelve un nuevo array, no modifica el array a menos de que
// lo hagamos explícito en el bloque de la función
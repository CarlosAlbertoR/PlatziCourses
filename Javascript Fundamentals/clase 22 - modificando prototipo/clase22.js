// Sigamos aprendiendo como funcionan los prototipos dentro de JS y qué diferencia
// tienen con el sistema de herencias que aparecen en otros lenguajes de programación

// Sigamos con el ejemplo de la clase anterior: 

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Agregamos soyAlto:

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
}

// Si por ejemplo invocamos un METODO (función de un objeto) antes de su definición
// JS arroja error

// Es muy importante dónde colocamos las funciones del prototipo. Es importante
// y buena práctica colocarlas todas juntas, ya que siempre deseamos que tenga
// todas las funciones. 

// A menos que más adelante en el código queramos modificar, de alguna manera,
// dicho prototipo. Pero lo más común es siempre definir los prototipos y sus funciones
// y no ir modificándolos a lo largo de todo el código. Siempre conviene hacerlo en el mismo lugar
// al iniciar el código para que después esas funciones estén todas accesibles a los objetos que a medida vamos creando.



var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona('Erika', 'Luna', 1.65);
var arturo = new Persona('Arturo', 'Martinez', 1.89);

// El prototipo es un objeto más de JavaScript. Si lo modificamos en una
// cierta altura del código, a partir de allí quedará modificado.

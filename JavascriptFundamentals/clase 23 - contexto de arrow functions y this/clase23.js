// Antes había un error. Habíamos cambiado las funciones de Persona
// a arrow functions, sin embargo con soyAlto salía false cuando debía salir
// true. 

// ¿Qué pasa con las arrow functions? ¿Qué pasa con el this dentro de ellas?



function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}



Persona.prototype.soyAlto = () => {
  debugger // Usando eldebugger en Chrome vemos que this apunta a Window, el objeto global dentro del navegador
  return this.altura > 1.8; // En este caso this.altura es undefined debido a que no existe en Window
} // y undefined nunca será mayor a 1.8

// Pero ¿por qué this es Window y no la persona?, ¿qué pasa con las Arrow Functions?
// Cuando this no es lo que esperabamos es uno de los errores más comunes en JS.

// Lo que sucede con las arrow functions es que asigna la función pero dentro de ella
// cambia el this. El this dentro de una función apuntará al this afuera de la función,
// que en este caso es el espacio global, osea que siempre el this de afuera es Window.



var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona('Erika', 'Luna', 1.65);
var arturo = new Persona('Arturo', 'Martinez', 1.89);

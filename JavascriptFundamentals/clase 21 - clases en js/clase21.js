// Cuando se habla de Objetos en JS se habla es de Prototipos, no tanto
// de clases. Si bien en las últimas veriones y nuevas versiones de JS
// existe lo que son clases, no son como tal, no existe por ejemplo la 
// herencia. 

// Pero sí existen prototipos y vamos a ver que las clases de JS
// terminan siendo nada más y nada menos que prototipos. 

// Crearemos prototipos y luego clases de JS.

// Prototipo de persona que sabe saludar y decir su nombre y apellido 

// Para definir un prototipo debemos definir una función

// Esto es lo que en otros lenguajes se conoce como Constructor

function Persona(nombre, apellido) { // En paréntesis deben ir los parámetros que permiten inicializar una nueva Persona
  this.nombre = nombre; // El this hace referencia a atributos del objeto en sí
  this.apellido = apellido; 
  // this.edad = 20; podriamos incluso definir que los atributos de toda una familia de objetos sea fija
  // return this -> JS implícitamente retorna THIS cuando la llamamos con new
} // Esta función se ejecuta cuando se hace var juan = new Persona();

// Para asignarle un METODO (es decir una FUNCIÓN que realiza un objeto)
// Como por ejemplo nuestro objeto persona, saludar, lo hacemos así:

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

// La palabra reservada new se usa para crear nuevos objetos dado un prototipo

// La palabra new seguida del prototipo lo que hace es que se crea un 
// nuevo objeto, y a ese objeto se le asignará como prototipo el que le indiquemos después
// Luego se ejecuta la función del nombre del prototipo e implícitamente se retornará 
// el nuevo objeto que se acaba de construir (aun sin haber return en la función)

var juan = new Persona('Juan', 'Marcos');

juan.saludar(); // Se muestra en consola

var sacha = new Persona('Sacha', 'Lifszyc');

sacha.saludar();

// Reto

function Persona2(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}

Persona2.prototype.soyAlto = function () {
  if(this.altura > 1.8) {
    console.log('Soy alto!');
  } else {
    console.log('Soy bajo!');
  }
}
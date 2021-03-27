var primer_nombre = 'Juan', segundo_nombre = 'Marcos';


var primer_nombre_mayusculas = primer_nombre.toUpperCase();
var segundo_nombre_minusculas = segundo_nombre.toLowerCase();

console.log(primer_nombre_mayusculas + ' ' + segundo_nombre_minusculas);

// Funciones para poner todo en mayusculas o minusculas

var primera_letra_primer_nombre = primer_nombre.charAt(0);
var ultima_letra_primer_nombre = primer_nombre.charAt(3);

// Con la función charAt podemos obtener una letra en posición particular del String

var longitud_primer_nombre = primer_nombre.length;

// Llamando el atributo length de un string devuelve cuantas letras hay en el String

var nombre_completo = primer_nombre + ' ' + segundo_nombre;

// Con el operador + se concatenan strings

// Otra manera es interpolando texto con comillas invertidas:

var nombre_completo_reciente = `${primer_nombre} ${segundo_nombre}`;

// Dentro de las llaves se puede escribir código JS

var str = segundo_nombre.substr(1, 2);

// Para poder obtener un substring o subcadena de una cadena más grande, el primer argumento es
// el caracter en el cual inicia la partición o conteo y el segundo cuantos caracteres queremos incluir

// Por ejemplo para el string 'Marcos' la función substr(1,2) va a iniciar en 'a' al ser
// la posición 1 del String, y tomará 2 caracteres, osea 'ar'. Si fuera 1 el segundo parametro
// solo tomaría 'a'.

// Reto: mostrar última letra de nombre del usuario (sin importar que el nombre cambie)

var nombre_usuario = prompt('Dame tu nombre de usuario: ');

var ultima_letra = nombre_usuario.charAt(nombre_usuario.length - 1);

alert('La última letra de tu nombre de usuario es: ' + ultima_letra);


// Las funciones son fracciones de código reutilizables 

var nombre = 'Juan', edad = 20;

// Para definir una función usamos la palabra clave function y luego
// el nombre de la función, después paréntesis y dentro de los paréntesis
// los parámetros que recibe la función. En llaves se delimita el cuerpo de la función.

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`);
}

// Así invocamos la función
imprimirEdad();

// Aquí no se aprovechó tanto el poder de las funciones, debido a que no se usaron parámetros.

// Sin embargo si cambiamos nuestra función a que acepte parametros:

function imprimirEdad2(n, e) {
    console.log(`${n} tiene ${e} años`);
}

// Así lo podemos hacer para varios casos:

imprimirEdad2('Manuel', 21);
imprimirEdad2('John', 30);
imprimirEdad2('Ana', 14);

// De esta manera se reutiliza el código. Es importante ser muy cuidadoso con el orden
// de los parámetros, la función puede comportarse de manera inesperada.

// Por ejemplo si no le pasamos argumentos a la función cuando se invoca, o se los pasamos
// en ordenes que no son los naturales, igual JS lo ejecutará y puede que de un resultado
// no esperado o que simplemente empiece a imprimir o hacer cosas con undefined. Esto
// se debe a que JS es un lenguaje interpretado, y tratará de leer el programa a medida
// que le vamos diciendo qué ejecutar, y no se fijará si están definidas o no las variables
// o si son de un tipo u otro.
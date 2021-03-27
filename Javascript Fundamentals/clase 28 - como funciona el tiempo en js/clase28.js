// Ahora que sabemos cómo JS ejecuta código asíncrono, veamóslo en la práctica
// con algunos ejemplos. 

// Imprimiremos 3 líneas:

console.log('a');
console.log('b');
console.log('c');

// Cómo ejecuta JS algo de manera asíncrona?
// Tenemos que tener en cuenta qué operaciones realizamos de manera asíncrona.

// Puede ser que si decidimos ejecutar alguna tarea en algún tiempo futuro,
// eso se realizará asíncronamente, si manipulamos el DOM (cambiar elementos de la pantalla),
// modificar un título, un botón, cambiar alguna clase CSS a un elemento, todo eso
// también se ejecutará de manera asíncrona, sincronízamos algún pedido de datos
// hacia alguna API externa, un request externo ya sea con JQuery, fetch, Vanilla JS,
// lo que sea, eso se realiza de manera asíncrona y tenemos que tenerlo en cuenta cuando
// lo vayamos desarrollando. 

// Por ejemplo, decir que el console.log de 'b' se ejecute dentro de 1 segundo,
// usamos la función setTimeout, que recibe 2 parámetros, el primero una función
// y el segundo es un delay de tiempo expresado en milisegundos, 2000 milisegundos son 2 segundos,
// la función que le pasamos la ejecutará dentro de 2 segundos,  y ahí ponemos el console log de 'b'.

// Se le pasa el console log encapsulado porque le tenemos que pasar la función que ejecutará y no la función o instrucción ejecutada

console.log('a');
setTimeout(function () {
    console.log('b');
}, 2000);
console.log('c');

// Como arrow function:

setTimeout(() => 
    console.log('arrow')
, 2000);

// Pero qué sucede si lo ejecutamos con 0 milisegundos?

console.log('a');
setTimeout(function () {
    console.log('b');
}, 0);
console.log('c');

// Imprime: a c b
// Qué sucede acá? Lo que sucede es que imprime a,
// luego la linea de setTimeout que lo que hace es decirle al navegador
// que ejecute la función en 0 segundos, y lo que hace el navegador es agarrar 
// la función y la PONE en la cola de tareas, y JS continúa ejecutando el programa
// (la tarea estará lista para ejecutarse a los 0 milisegundos), pero JS no
// la ejecutará hasta que no termine de ejecutar todo el programa principal. 
// Luego imprimirá c y llegará al final del programa. Cuando llega al final,
// recién ahí empezará a sacar funciones o tareas de la cola de tareas y
// encontrará la que imprime b y allí la ejecutará. 

// Otro ejemplo:

setTimeout(function () {
    console.log('d');
}, 2000); // Le decimos que imprima 'd' en 2 segundos

// Emulamos una ejecución del código posteriror sumamente grande

for(var i = 0; i < 10000000000; i++) {
    
}

// Aquí podemos ver que el browser se queda cargando y ejecutando el for,
// y que nunca se muestra la d después de 2 segundos habiendo pasado mucho más
// tiempo. Es algo que vuela la cabeza. 

// Lo que sucede es que JS sigue ejecutando el programa principal (el for),
// la tara de imprimir 'd' está lista para ejecutarse hace mucho, pero JS
// no la ejecutará hasta que termine el programa principal que tiene que ejecutar.

// Lo que debe quedar claro es que cuando nosotros realizamos un tarea
// asíncrona con setTimeout, el 2 segundos por ejemplo, el delay, es un delay
// mínimo, nada nos garantiza que no estemos bloqueando el Event Loop y la ejecución
// del código.

// Tener en cuenta esto hará que entender los CallBacks, como funciona el Asincronismo
// las promesas, el async await, sea algo mucho más sencillo.

// Entender Asincronismo es la diferencia entre un dev principante y otro que
// sabe los principios de JS.
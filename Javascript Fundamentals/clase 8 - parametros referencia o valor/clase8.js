// En las anteriores clases si pasabamos un valor a través de un parametro hacia una
// función cuando la invocabamos, y ese valor se veía modificado, solo era
// modificado si era accedido desde una variable global 

// Veremos como se comporta JS pasandole como parametro los objetos 

// Siguiendo con el ejemplo de la clase anterior:

var juan = {
    nombre: 'Juan',
    apellido: 'Marcos',
    edad: 28
}


var manuel = {
    nombre: 'Manuel',
    apellido: 'Calle',
    edad: 27
}

function imprimirNombreEnMayusculaMejorado5(persona) {
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculaMejorado5(juan);
imprimirNombreEnMayusculaMejorado5(manuel);

// Función cumpleaños: recibe una persona e incrementa su edad

function cumpleanos(persona) {
    // Podriamos hacer:
    // persona.edad = persona.edad + 1
    // Que funciona si revisamos en la consola del navegador e invocamos la función varias veces
    persona.edad += 1;
}

// En cambio si solo hacemos:

function cumpleanos2(edad) {
    edad += 1;
}

// Si hacemos por ejemplo cumpleanos2(juan.edad) y luego revisamos la edad
// de Juan, seguirá siendo 28 (no se habrá incrementado como si sucede con la otra función)

// En JS, los objetos que se pasan como parámetro a funcionces, se pasan por REFERENCIA.
// Esto significa que si se modifican dentro del cuerpo de una función, 
// su campo será modificado (también tendrá efecto) fuera de la función también.

// En cambio si se le pasa a una función un parametro por VALOR, solo tiene una COPIA
// del valor original de donde venga, variable o así, y tendrá a su disposición el VALOR
// de dicha copia para trabajar con el, pero nunca va a modificar como tal el valor
// de la variable original.

// Podríamos para cumpleaños devolver un objeto con la edad cambiada:

function cumpleanos3(persona) {
    return {
        ...persona, // Los 3 puntos indican que se copia todo el contenido del objeto anterior
        edad: persona.edad + 1
    }
} // Ahora la función devuelve un objeto con la edad modificada
// Sin embargo, el objeto global de juan su edad no ha sido modificada. 
// Mucho ojo con esto. 
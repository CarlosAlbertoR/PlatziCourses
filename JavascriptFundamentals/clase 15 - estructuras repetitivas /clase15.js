// Hay otra estructura similar a la que vimos en la clase anterior, que es el do-while.
// Se diferencia un poco del while ya que esta instrucción do while ejecuta al menos 1
// vez el código. 

var contador = 0;

// Digamos que llueve el 25% de las veces

const llueve = () => Math.random() < 0.25;

// En do while hacemos algo al menos una vez hasta que se cumpla una condición

do {
    contador++;
} while (!llueve()) // Si la condición del while se cumple, el código de arriba se VUELVE
// a ejecutar.

// Si no llueve, se ejecutará y aumentará el contador. Si llueve,
// no se ejecutará y saldrá del ciclo. 

if(contador === 1) {
    console.log(`Fui a ver si llovía ${contador} vez`);
} else {
    console.log(`Fui a ver si llovía ${contador} veces`);
}

// Al menos fue una vez con do while

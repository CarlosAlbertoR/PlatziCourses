// Vamos a hablar sobre Memoización, que nos permite ahorrar tiempo y cómputo, guardando ciertos resultados de algunas cuentas

// Otro ejemplo de recursividad, el factorial:

// Cuando calculamos un numero factorial utilizamos los factoriales anteriores a él

// Debemos guardar los resultados para no volver a calcular 

const factorial = (n) => {

    if(!this.cache) {
        this.cache = {};
    } 
    
    if(this.cache[n]) {
        return this.cache[n];
    }
    
    if(n === 0 || n === 1) {
        return 1;
    } else {
        this.cache[n] = n * factorial(n-1);
        return this.cache[n];
    }
}

// Memoizacion es como guardarlos en una cache interna y con esto nos podemos ahorrar bastante procesamiento
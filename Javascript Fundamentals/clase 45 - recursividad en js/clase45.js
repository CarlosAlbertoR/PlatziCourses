// EL concepto de recursividad es muy importante en cualquier lenguaje de programación. en JS se hace así:

// Dividir 13 entre 4

// 13 - 4 = 9 (1)
// 9 - 4 = 5 (1)
// 5 - 4 = 1 (1)
// 1 - 4 = -3 (0)

// 13 div 4 = 3, porque hiccimos 3 cuentas. La condicon para la cual podamos seguir haciendo cuentas es que el dividendo
// sea mayor o igual que el divisor. Usemos recursividad (caso base, caso recursivo):

const divisionEntera = (dividendo, divisor) => {
    if(dividendo < divisor) {
        return 0;
    } else {
        return 1 + divisionEntera(dividendo-divisor, divisor);
    }
}

// Es similar a como se hace en otros lenguajes clásicos
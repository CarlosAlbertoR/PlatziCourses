// Calcularemos cuántos días han pasado desde nuestra fecha de nacimiento hasta hoy, para practicar el manejo de fechas en JS.

const diasEntreFechas = (fecha1, fecha2) => {
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2); // Diferencia entre milisegundos entre ambas fechas

    return Math.floor(diferencia / unDia); // Aqui sabemos cuantos dias ocurrieron entre fechas
};

const hoy = new Date(); // Date tiene la fecha actual por default
const nacimiento = new Date(1999, 11, 16);


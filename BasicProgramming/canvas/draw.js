var texto = document.getElementById("lines");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var esp = d.width / lineas;
    var l = 0;
    var xf, yi;

    while (l < lineas) {
        yi = l * esp;
        xf = (l * esp) + esp;
        pf = 300 - yi;

        dibujarLinea("green", 0, yi, xf, 300);
        dibujarLinea("green", yi, 0, 300, xf);
        dibujarLinea("green", yi, 300, 300, pf);
        dibujarLinea("green", yi, 0, 0, pf);
        l++;
    }

    dibujarLinea("green", 1, 1, 1, 299);
    dibujarLinea("green", 1, 299, 299, 299);
    dibujarLinea("green", 299, 299, 299, 1);
    dibujarLinea("green", 1, 1, 299, 1);
}
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40
};

console.log(teclas);

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", soltarMouse);

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;
var estado;
var colorcito = "red";
var movimiento = 10;

dibujarLinea("red", x-1,y-1,x+1,y+1,papel);

function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y= y-10;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + 10;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - 10;
        break;
        case teclas.RIGTH:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + 10;
        break;
        default:
            console.log("Otra tecla");
    }
}

function dibujarMouse(evento) {
    if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
        dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function presionarMouse(evento) {
    estado = 1;         //click presionado  
    x = evento.layerX;
    y = evento.layerY;
}

function soltarMouse(evento) {
    estado = 0;         // click suelto
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("black", 1, 1, 1, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);
dibujarLinea("black", 299, 299, 299, 1, papel);
dibujarLinea("black", 1, 1, 299, 1, papel);
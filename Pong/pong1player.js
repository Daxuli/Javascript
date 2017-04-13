var partida = false;

var subir1, bajar1;
var y1=260;


//posicion pelota

var x=390;
var y=290;
var xx = 1;
var yy = 5;

document.onkeydown = checkPress;
document.onkeyup = checkRelease;

function checkPress(press) {

    press = press || event;

    if (press.keyCode == '38') {  //up
        subir1 = true;
    }
    else if (press.keyCode == '40') {  //down
        bajar1 = true;
    }
    if (press.keyCode == '32' && partida == false){  //space
        partida = true;
    }

}

function checkRelease(release) {

    release = release || event;

    if (release.keyCode == '38') {
        subir1 = false;
    }
    else if (release.keyCode == '40') {
        bajar1 = false;
    }
}

function pong1(){
    var pelota = document.getElementById("pelota");
    var hp = parseInt(pelota.getAttribute("height"));  //height pelota

    var jugador1 = document.getElementById("jugador1");
    var h1 = parseInt(jugador1.getAttribute("height"));  //height jugador1

    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    var texto3 = document.getElementById("texto3");

    var puntuacion = 0;
    var record = 0;

    setInterval(move,10)

    function move() {
        if (partida == false) {
            texto3.textContent = "Pulsa espacio para comenzar";
        } else {

            texto1.textContent = "R:" + record;
            texto2.textContent = "A:" + puntuacion;
            texto3.textContent = "";


            pelota.setAttribute("x", x);
            pelota.setAttribute("y", y);

            if (x >= 1000) {
                partida = false;
                x = 390;
                if (puntuacion > record){
                    record = puntuacion;
                }
                puntuacion = 0;
            }

            if (subir1 && y1 > 20) {
                y1 -= 5;
                jugador1.setAttribute("y", y1);
            }
            if (bajar1 && y1 < 580 - h1) {
                y1 += 5;
                jugador1.setAttribute("y", y1);
            }
            if (x < 20) {
                xx = -xx;
            }
            if (x == 765 && y + hp > y1 && y < y1 + h1) {
                puntuacion += 1;
                xx = -3;
            }

            if (y <= 20) {
                yy = -yy;
            }
            if (y >= 580 - hp) {
                yy = -yy;
            }

            x = x + xx;
            y = y + yy;

        }
    }
}

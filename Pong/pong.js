var partida = false;

var subir1, bajar1,subir2, bajar2;
var y1=260;
var y2=260;


//posicion pelota  single line comment

/*
multi-line comment
 */

var x=390;
var y=290;
var xx = 1;
var yy = 8;

document.onkeydown = checkPress;
document.onkeyup = checkRelease;

function checkPress(press) {

    press = press || event;

    if (press.keyCode == '87') {  //w
        subir1 = true;
    }
    else if (press.keyCode == '83') {  //s
        bajar1 = true;
    }
    if (press.keyCode == '38') {  //up
        subir2 = true;
    }
    else if (press.keyCode == '40') {  //down
        bajar2 = true;
    }
    if (press.keyCode == '32' && partida == false){  //space
        partida = true;
    }

}

function checkRelease(release) {

    release = release || event;


    if (release.keyCode == '87') {
        subir1 = false;
    }
    else if (release.keyCode == '83') {
        bajar1 = false;
    }
    if (release.keyCode == '38') {
        subir2 = false;
    }
    else if (release.keyCode == '40') {
        bajar2 = false;
    }
}

function pong(){
    var pelota = document.getElementById("pelota");
    var hp = parseInt(pelota.getAttribute("height"));  //height pelota

    var jugador1 = document.getElementById("jugador1");
    var h1 = parseInt(jugador1.getAttribute("height"));  //height jugador1

    var jugador2 = document.getElementById("jugador2");
    var h2 = parseInt(jugador2.getAttribute("height"));  //height jugador2

    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    var texto3 = document.getElementById("texto3");
    var puntuacion1 = 0;
    var puntuacion2 = 0;

    setInterval(move,10)

    function move() {
        if (partida == false) {
            texto3.textContent = "Pulsa espacio para comenzar";
        } else {

            texto1.textContent = puntuacion1;
            texto2.textContent = puntuacion2;

            texto3.textContent = "";

            pelota.setAttribute("x", x);
            pelota.setAttribute("y", y);

            if (puntuacion1 + puntuacion2 == 11 || puntuacion1 == 6 || puntuacion2 == 6) {

                puntuacion1 = 0;
                puntuacion2 = 0;

                y1=260;
                y2=260;

                jugador1.setAttribute("y", y1);
                jugador2.setAttribute("y", y2);

                partida = false;
            }

            if (subir1 && y1 > 20) {
                y1 -= 5;
                jugador1.setAttribute("y", y1);
            }
            if (bajar1 && y1 < 580 - h1) {
                y1 += 5;
                jugador1.setAttribute("y", y1);
            }
            if (subir2 && y2 > 20) {
                y2 -= 8;
                jugador2.setAttribute("y", y2);
            }
            if (bajar2 && y2 < 580 - h2) {
                y2 += 8;
                jugador2.setAttribute("y", y2);
            }


            if (x >= 1000) {
                x = 390;
                xx = -3;
                //y = 290;
                puntuacion1 += 1;
            }
            if (x <= -200) {
                x = 390;
                xx = 3;
                //y = 290;
                puntuacion2 += 1;
            }

            if (x == 15 && y + hp > y1 && y < y1 + h2) {
                xx = 3;
            }
            if (x == 765 && y + hp > y2 && y < y2 + h2) {
                xx = -3;
                console.log(h1, h2, hp)
            }

            if (y < 20) {
                yy = -yy;
            }
            if (y > 580 - hp) {
                yy = -yy;
            }

            x = x + xx;
            y = y + yy;

        }
    }
}

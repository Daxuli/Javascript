function handleKeyPress(e){
    var key=e.keyCode || e.which;
    if (key==13){
        myPrimos();
    }
}

function myPrimos(e) {
    var minInput = document.getElementById("min").value;
    var maxInput = document.getElementById("max").value;
    var i = parseInt(minInput);
    var j = parseInt(maxInput);
    if (j < i) {
        document.getElementById("demo").innerHTML = "Rango introducido inválido";
        return
    }
    var k;
    var l;
    var resto;
    var primos = [];
    var length;
    for (k = 2; k <= j; k++){
        resto = 1;
        /*console.log(k)*/
        length = primos.length;
        for (l = 0; l < length; l++){
            /*console.log(l)*/
            resto = k%primos[l];
            if (resto == 0) {break;}
        }
        if (resto != 0) {
            k = parseInt(k);
            k = " " + k;
            primos.push(k)}
    }
    l = 0;
    while (primos[l] < i) {
        primos.splice(l, 1);
    }

    /*console.log(primos)*/
    document.getElementById("demo").innerHTML = primos;
    /*document.getElementById("demo").style.wordWrap = "normal"; no hace falta*/

}

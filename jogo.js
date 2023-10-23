var carta = []
var ca = false
var par = 0

var maior = 0
var menor = 0

var antP1 = 0
var antP2 = 0

var plau = false

var ps = document.getElementsByTagName("p")


function get(item) {

    par += 1
    if (plau == false) {
        if (ca == false) {
            antP1 = item
            ca = true
            ps[antP1 - 1].classList.remove("fechado");
            ps[antP1 - 1].classList.add("vira");
        }

        else if (ca == true) {
            antP2 = item
            ca = false
            ps[item - 1].classList.remove("fechado");
            ps[item - 1].classList.add("vira");
            if (antP1 < antP2) {
                menor = antP1
                antP1 = antP2
                antP2 = menor
            }
            plau = true
        }
    }

    if (antP2 + 10 == antP1) {
        alert("acertou")
        par = 0
        plau = false

    }
    else if (plau == true) {

        if (par == 3) {

            console.log(antP1)
            console.log(antP2)


            par = 0
            ps[antP1 - 1].classList.remove("vira");
            ps[antP1 - 1].classList.add("fechado");

            ps[antP2 - 1].classList.add("fechado");
            ps[antP2 - 1].classList.remove("vira");

            plau = false
        }
    }
}
let tempoRestante = 0;

function atualizarContador() {
    const contador = document.getElementById("contador");
    contador.textContent = tempoRestante;
}

function iniciarTemporizador() {
    const mensagem = document.getElementById("mensagem");

    const intervalo = setInterval(function () {
        tempoRestante++;

        atualizarContador();

    }, 1000);
}


iniciarTemporizador();
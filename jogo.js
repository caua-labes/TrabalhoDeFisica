var carta = []
var ca = false
var par = 0

var maior = 0
var menor = 0

var antP1 = 0
var antP2 = 0

var numbers = [];

while(numbers.length < 10) {
  var numeroRandomizado = Math.floor(Math.random() * 10);
  if(!numbers.includes(numeroRandomizado)) {
    numbers.push(numeroRandomizado);
  }
}

var per1 = numbers[0];
var per2 = numbers[1];
var per3 = numbers[2];
var per4 = numbers[3];
var per5 = numbers[4];
var per6 = numbers[5];
var per7 = numbers[6];
var per8 = numbers[7];
var per9 = numbers[8];
var per10 = numbers[9];

console.log(per1, per2, per3, per4, per5, per6, per7, per8, per9, per10);

document.getElementsByTagName("p")[per1].innerHTML = "Perieli "
document.getElementsByTagName("p")[per2].innerHTML = "Lei da Inércia e Lei da Gravitação Universal"
document.getElementsByTagName("p")[per3].innerHTML = "2ª lei de Kepler"
document.getElementsByTagName("p")[per4].innerHTML = "Mercurio"
document.getElementsByTagName("p")[per5].innerHTML = "Afelio "
document.getElementsByTagName("p")[per6].innerHTML = "1ª lei de Kepler"
document.getElementsByTagName("p")[per7].innerHTML = "Maior a força gravitacional"
document.getElementsByTagName("p")[per8].innerHTML = "Isaac Newton"
document.getElementsByTagName("p")[per9].innerHTML = "Cometas"
document.getElementsByTagName("p")[per10].innerHTML = "Lei dos períodos"

document.getElementsByTagName("p")[per1 + 10].innerHTML = "Perto"
document.getElementsByTagName("p")[per2 + 10].innerHTML = "Quais são as leis da gravitação"
document.getElementsByTagName("p")[per3 + 10].innerHTML = "Lei das áreas"
document.getElementsByTagName("p")[per4 + 10].innerHTML = "Qual é o planeta mais próximo do Sol"
document.getElementsByTagName("p")[per5 + 10].innerHTML = "Longe"
document.getElementsByTagName("p")[per6 + 10].innerHTML = "Lei das órbitas"
document.getElementsByTagName("p")[per7 + 10].innerHTML = "Quanto mais massa"
document.getElementsByTagName("p")[per8 + 10].innerHTML = "Quem criou as leis da gravitação"
document.getElementsByTagName("p")[per9 + 10].innerHTML = "São corpos celestes compostos principalmente de gelo"
document.getElementsByTagName("p")[per10 + 10].innerHTML = "3ª lei de Kepler"

var pos1 = false
var pos2 = false
var pos3 = false
var pos4 = false
var pos5 = false
var pos6 = false
var pos7 = false
var pos8 = false
var pos9 = false
var pos10 = false
var pos11= false
var pos12 = false
var pos13 = false
var pos14 = false
var pos15 = false
var pos16 = false
var pos17 = false
var pos18 = false
var pos19 = false
var pos20 = false


var plau = false

var ps = document.getElementsByTagName("p")


function get(item) {
    if(item == 1 && pos1 == true){
        return;
    }
    else if(item == 2 && pos2 == true){
        return;
    }
    else if(item == 3 && pos3 == true){
        return
    }
    else if(item == 4 && pos4 == true){
        return
    }
    else if(item == 5 && pos5 == true){
        return
    }
    else if(item == 6 && pos6 == true){
        return
    }
    else if(item == 7 && pos7 == true){
        return
    }
    else if(item == 8 && pos8 == true){
        return
    }
    else if(item == 9 && pos9 == true){
        return
    }
    else if(item == 10 && pos10 == true){
        return
    }
    else if(item == 11 && pos11 == true){
        return
    }
    else if(item == 12 && pos12 == true){
        return
    }
    else if(item == 13 && pos13 == true){
        return
    }
    else if(item == 14 && pos14 == true){
        return
    }
    else if(item == 15 && pos15 == true){
        return
    }
    else if(item == 16 && pos16 == true){
        return
    }
    else if(item == 17 && pos17 == true){
        return
    }
    else if(item == 18 && pos18 == true){
        return
    }
    else if(item == 19 && pos19 == true){
        return
    }
    else if(item == 20 && pos20 == true){
        return
    }


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
        par = 0
        plau = false
        if(antP2 == 1 ){
            pos1 = true
            pos11 = true
        }
        else if(antP2 == 2 ){
            pos2 = true
            pos12 = true
        }
        else if(antP2 == 3 ){
            pos3 = true
            pos13 = true
        }
        else if(antP2 == 4 ){
            pos4 = true
            pos14 = true
        }
        else if(antP2 == 5 ){
            pos5 = true
            pos15 = true
        }
        else if(antP2 == 6 ){
            pos6 = true
            pos16 = true
        }
        else if(antP2 == 7 ){
            pos7 = true
            pos17 = true
        }
        else if(antP2 == 8 ){
            pos8 = true
            pos18 = true
        }
        else if(antP2 == 9 ){
            pos9 = true
            pos19 = true
        }
        else if(antP2 == 10 ){
            pos10 = true
            pos20 = true
        }

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
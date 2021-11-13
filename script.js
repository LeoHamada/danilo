var deko = document.getElementById("deko")
var pera = document.getElementById("perera")
var Henri = document.getElementById("Henri")
var marcelo = document.getElementById("marcelo")

const pererabai = new Audio()
pererabai.src = "pererabaitola.mp3"

const aidiego = new Audio()
aidiego.src = "aideigo.mp3"

const cheiro = new Audio()
cheiro.src = "cheiro.mp3"

const marceloaudio = new Audio()
marceloaudio.src = "quemundoeesse.mp3"

var fotope = document.getElementById("fotope")
var fotode = document.getElementById("fotode")
var fotohe = document.getElementById("fotohe")

deko.addEventListener('click', dekoclicou)
deko.addEventListener('mouseenter' , dekoentrou)
deko.addEventListener('mouseout',dekosaiu)

pera.addEventListener('click', peraclicou)
pera.addEventListener('mouseenter', peraentrou)
pera.addEventListener('mouseout', perasaiu)

Henri.addEventListener('click', henriclicou)
Henri.addEventListener('mouseenter', henrientrou)
Henri.addEventListener('mouseout', henrisaiu)

marcelo.addEventListener('click', marceloclicou)
marcelo.addEventListener('mouseenter', marceloentrou)
marcelo.addEventListener('mouseout', marcelosaiu)

function marceloclicou() {
    marcelo.innerHTML = 'porno da peppa'
    marceloaudio.play()
}
function marceloentrou() {
    marcelo.innerHTML = 'jotaro cavalo'
}
function marcelosaiu() {
    marcelo.innerHTML = 'Marcelinho?'
}

function dekoclicou() {
    deko.innerHTML = 'Que isso mané!'
    cheiro.play()
    
}
function dekoentrou() {
    deko.innerHTML = 'Rogerio?'
}
function dekosaiu() {
    deko.innerHTML = 'Derick?'
}

function peraclicou() {
    pera.innerHTML = "Banido 7 dias"
    pererabai.play();
}
function peraentrou() {
    pera.innerText = "foi tomar água?"
}
function perasaiu() {
    pera.innerHTML = 'Pereira?'
}

function henriclicou() {
    Henri.innerHTML = 'ASTOLFO'
    aidiego.play()
}
function henrientrou() {
    Henri.innerHTML = 'Cala boca Diego'
}
function henrisaiu() {
    Henri.innerHTML = 'Henri?'
}

let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE =120; 
const ANCHO_PERSONAJE = ALTURA_PERSONAJE/2;
const ANCHO_LIMON = 20; 
const ALTURA_LIMON = 20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-ALTURA_PERSONAJE-ALTURA_SUELO;
let limonX = canvas.width/2;
let limonY = 0;

function dibujarSuelo (){
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO, canvas.width ,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#5f9b26";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}

function moverIzquierda(){
    personajeX  = personajeX -10;
    detectarColision();
    actualizarPantalla();
}

function moverDerecha() {
    personajeX = personajeX +10;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon(){
    ctx.fillStyle="#179840";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarLimon(){
    limonY = limonY +5;
    actualizarPantalla();
}

function detectarColision(){
    if(limonX+ANCHO_LIMON >personajeX &&
       limonX < personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON> personajeY &&
        limonY < personajeY+ALTURA_PERSONAJE){
        alert("ATRAPADO!!");
    }
}
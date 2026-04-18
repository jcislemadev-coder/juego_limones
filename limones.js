let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE =120; 
const ANCHO_PERSONAJE = ALTURA_PERSONAJE/2;
const ANCHO_LIMON = 20; 
const ALTO_LIMON = 20;

let personajeX=canvas.width/2;
let personajeY=canvas.height;
let limonX = canvas.width/2;
let limonY = 5;

function dibujarSuelo (){
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO, canvas.width ,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#5f9b26";
    ctx.fillRect(personajeX,personajeY-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}

function moverIzquierda(){
    actualizarPantalla();
    personajeX  = personajeX -10;
}

function moverDerecha() {
    actualizarPantalla();
    personajeX = personajeX +10;
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
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

function bajarLimon(){
    limonY = limonY +5;
    actualizarPantalla();
}

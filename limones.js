let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE =120; 
const ANCHO_PERSONAJE = ALTURA_PERSONAJE/2;

function dibujarSuelo (){
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO, canvas.width ,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#5f9b26";
    ctx.fillRect(canvas.width-320,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}


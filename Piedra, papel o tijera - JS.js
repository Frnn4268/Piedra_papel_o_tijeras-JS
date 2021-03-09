process.stdin.resume();
process.stdin.setEncoding('utf8');

var calculo;
var elexion;
var calculo1;
var elexion1;

function aleatorio(min, max) {
    return Math.random()*(max-min)+min;
}

calculo = Math.floor(aleatorio(1, 4));

if (calculo == 1){
    elexion = "Piedra";
}
if (calculo == 2) {
    elexion = "Papel";
}
if (calculo == 3){
    elexion = "Tijera";
}

calculo1 = Math.floor(aleatorio(1, 4));

if (calculo1 == 1){
    elexion1 = "Piedra";
}
if (calculo1 == 2) {
    elexion1 = "Papel";
}
if (calculo1 == 3){
    elexion1 = "Tijera";
}

console.log("Bienvenido al juego de 'Piedra, papel o tijera'");
console.log();

console.log("El jugador 1 ha sacado '" + elexion + "'");
console.log();
console.log("El jugador 2 ha sacado '" + elexion1 + "'");
console.log();
        
if (elexion == "Piedra" && elexion1 == "Piedra"){
    console.log("EL juego ha sido un empate")
}
 if (elexion == "Piedra" && elexion1 == "Papel"){
    console.log("El ganador es el jugador 2")
}
if (elexion == "Piedra" && elexion1 == "Tijera"){
    console.log("El ganador es el jugador 1")
}
if (elexion == "Papel" && elexion1 == "Piedra"){
    console.log("El ganador es el jugador 1")
}
if (elexion == "Papel" && elexion1 == "Papel"){
   console.log("EL juego ha sido un empate")
}
if (elexion == "Papel" && elexion1 == "Tijera"){
    console.log("El ganador es el jugador 2")
}
if (elexion == "Tijera" && elexion1 == "Piedra"){
    console.log("El ganador es el jugador 2")
}
if (elexion == "Tijera" && elexion1 == "Papel"){
    console.log("El ganador es el jugador 1")
}
if (elexion == "Tijera" && elexion1 == "Tijera"){
    console.log("El juego ha sido un empate")
}

let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
let numeroClicks = 0;
let turnosX = 0;
let turnosO = 0;
let esTurnoO = true;
let finJuego = 0;
let ArrTablero = ["", "", "", "", "", "", "", "", ""];
let jugadasGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



let playerX = JSON.parse(sessionStorage.getItem("playerX"));
// if (playerX !== String) {
//   playerX = "Jugador1";
// }
// console.log("a ver el player", playerX);
let playerO = JSON.parse(sessionStorage.getItem("playerO"));
// if (playerO == null) {
//   playerO = "Jugador2";
// }

document.getElementById("asignaturnos").innerHTML = `Es el turno de ${playerX}`
document.getElementById("turnosX").innerHTML = `Turnos de  ${playerX} transcurridos: ${turnosX}`;
document.getElementById("turnosO").innerHTML = `Turnos de  ${playerO} transcurridos: ${turnosO}`;


// console.log("PlayerX =", playerX);

// SISTEMA PARA COMPROBAR SI YA HAY UN GANADOR BUSCANDO QUE SE HAYA DADO ALGUNA DE LAS JUGADAS GANADORAS DEL ARRAY
const Comprobarganador = () => {

  jugadasGanadoras.map(victoria => {
    let [casilla1, casilla2, casilla3] = victoria;
      if ((ArrTablero[casilla1] == "X") && (ArrTablero[casilla2] == "X") && (ArrTablero[casilla3] =="X")) {
          sessionStorage.setItem("ganador", `Ha ganado ${playerX}`);
          window.open("../winnerpredator.html", "_self");
    } else if ((ArrTablero[casilla1] == "O") && (ArrTablero[casilla2] == "O") && (ArrTablero[casilla3] =="O")) {
          sessionStorage.setItem("ganador", `Ha ganado ${playerO}`);
          window.open("../winneralien.html", "_self");
          finJuego = 1;//sirve para que no finalice directamente la partida tras el tercer turno de O sin asignar el correspondiente ganador  
        } else {
          document.getElementById("asignaganador").innerHTML = "La partida continúa.";
    }

  })

  //SISTEMA ALTERNATIVO PARA DETERMINAR EL GANADOR QUE CONSUMIRIA MAS RECURSOS

  // if (((ArrTablero[0]=="X")&&(ArrTablero[1]=="X")&&(ArrTablero[2]=="X"))||((ArrTablero[3]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[5]=="X"))||((ArrTablero[6]=="X")&&(ArrTablero[7]=="X")&&(ArrTablero[8]=="X"))||((ArrTablero[0]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[8]=="X"))||((ArrTablero[2]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[6]=="X"))||((ArrTablero[0]=="X")&&(ArrTablero[3]=="X")&&(ArrTablero[6]=="X"))||((ArrTablero[1]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[7]=="X"))||((ArrTablero[2]=="X")&&(ArrTablero[5]=="X")&&(ArrTablero[8]=="X"))) {
  //   sessionStorage.setItem("ganador", `Ha ganado ${JSON.parse(sessionStorage.getItem("playerX"))}`);
  //   window.open("../winner.html", "_self");

  // } else if (((ArrTablero[0]=="O")&&(ArrTablero[1]=="O")&&(ArrTablero[2]=="O"))||((ArrTablero[3]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[5]=="O"))||((ArrTablero[6]=="O")&&(ArrTablero[7]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[3]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[1]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[7]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[5]=="O")&&(ArrTablero[8]=="O"))) {
  //   sessionStorage.setItem("ganador", `Ha ganado ${JSON.parse(sessionStorage.getItem("playerO"))}`);
  //   window.open("../winner.html", "_self");
  //   finJuego = 1;
  // } else {
  //   document.getElementById("asignaganador").innerHTML = "La partida continúa.";

  // }

}

//CAMBIOS QUE SE HAN DE DAR CADA VEZ QUE UN JUGADOR MARCA UNA CASILLA
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {

  if (finJuego == 0) {

    if ((casillaEscogida.innerHTML != "X") && (casillaEscogida.innerHTML != "O")) {
      numeroClicks ++;
      let esTurnoO = (numeroClicks%2 == 0)
        ? true
        : false;

      if (esTurnoO == true) {  //Con este if acumulamos los turnos que han transcurrido de cada jugador
        //e indicamos por consola el turno actual
        document.getElementById("asignaturnos").innerHTML = `Es el turno de ${playerX}`;//indica que es el turno de X
        turnosO ++;
        document.getElementById("turnosO").innerHTML = `Turnos de  ${playerO} transcurridos: ${turnosO}`;//indica los turnos de O que ya han transcurrido
        ArrTablero[casillaEscogida.id] = "O"; //gracias a esta línea indicamos en el tablero 
        casillaEscogida.classList.add("alien");
        Comprobarganador (ArrTablero);
      } else {
        document.getElementById("asignaturnos").innerHTML = `Es el turno de ${playerO}`;
        turnosX ++;
        document.getElementById("turnosX").innerHTML = `Turnos de  ${playerX} transcurridos: ${turnosX}`;
        ArrTablero[casillaEscogida.id] = "X";
        casillaEscogida.classList.add("predator");
        Comprobarganador (ArrTablero);
      }
    }
    
    if ((turnosO==3)&&(finJuego==0)) {//gracias a este if nos aseguramos de que se finaliza la partida sin un ganador
      finJuego=1;
      document.getElementById("asignaturnos").innerHTML = "Fin del juego";
      document.getElementById("asignaganador").innerHTML = "La partida ha finalizado sin un ganador.";
      sessionStorage.setItem("ganador", "La partida ha finalizado sin un ganador.");
      window.open("../winner.html", "_self");
      }
    }
    
      });
  });


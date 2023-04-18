
let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
let numeroClicks = 0;
let turnosX = 0;
let turnosO = 0;
let esTurnoO = true;
let borrador = "A";
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

let playerO = JSON.parse(sessionStorage.getItem("playerO"));


document.getElementById("asignaturnos").innerHTML = `Es el turno de ${playerX}`
document.getElementById("turnosX").innerHTML = `Turnos de  ${playerX} transcurridos: ${turnosX}`;
document.getElementById("turnosO").innerHTML = `Turnos de  ${playerO} transcurridos: ${turnosO}`;


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
        } else {
          document.getElementById("asignaganador").innerHTML = "Asigna tu ficha.";
    }

  })
}

//CAMBIOS QUE SE HAN DE DAR CADA VEZ QUE UN JUGADOR MARCA UNA CASILLA
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {

    if (((ArrTablero[casillaEscogida.id] !== "X") && (ArrTablero[casillaEscogida.id] !== "O"))&&(turnosO < 3 )) {
      numeroClicks ++;
      let esTurnoO = (numeroClicks%2 == 0)
        ? true
        : false;

      if (esTurnoO == true) { 
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
    
    } else if (turnosO >= 3){//A partir de aquí el juego cambia para poder eliminar una casilla marcada y cambiarla

       esTurnoO = (numeroClicks%2 == 0)
        ? true
        : false;
      
      document.getElementById("asignaganador").innerHTML = "Elimina una de tus fichas y asigna una nueva.";
      if (esTurnoO == false) {//el esTurno se invierte a false porque la cláusula (turnosO < 3 ) del if hace que se haya perdido un click
        if ((ArrTablero[casillaEscogida.id] == "O")&&(borrador=="A")){
          casillaEscogida.classList.remove("alien");
          ArrTablero[casillaEscogida.id] = "";
          borrador="B";
        } else if (((ArrTablero[casillaEscogida.id] != "X") && (ArrTablero[casillaEscogida.id] != "O"))&&(borrador=="B")) {
          casillaEscogida.classList.add("alien");
          borrador="A";
          ArrTablero[casillaEscogida.id] = "O";
          document.getElementById("asignaturnos").innerHTML = `Es el turno de ${playerX}`;//indica que es el turno de X
          turnosO ++;
          numeroClicks ++;
          document.getElementById("turnosO").innerHTML = `Turnos de  ${playerO} transcurridos: ${turnosO}`;
          Comprobarganador (ArrTablero);
        }  
      } else { 
        if ((ArrTablero[casillaEscogida.id] == "X")&&(borrador=="A")){
        casillaEscogida.classList.remove("predator");
        ArrTablero[casillaEscogida.id] = "";
        borrador="B";
        } else if (((ArrTablero[casillaEscogida.id] != "X") && (ArrTablero[casillaEscogida.id] != "O"))&&(borrador=="B")) {
          casillaEscogida.classList.add("predator");
          borrador="A";
          ArrTablero[casillaEscogida.id] = "X";
          document.getElementById("asignaturnos").innerHTML = `Es el turno de ${playerO}`;//indica que es el turno de X
          turnosX ++;
          numeroClicks ++;
          document.getElementById("turnosO").innerHTML = `Turnos de  ${playerX} transcurridos: ${turnosO}`;
          Comprobarganador (ArrTablero);
        }
      }
     }    
    });
  });

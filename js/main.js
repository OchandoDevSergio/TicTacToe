let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
let numeroClicks = 0;
let turnosX = 0;
let turnosO = 0;
let esTurnoO = true;
let finJuego = 0;
let ArrTablero = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
// console.log(ArrTablero);


const Comprobarganador = (ArrTablero) => {

  if (((ArrTablero[0]=="X")&&(ArrTablero[1]=="X")&&(ArrTablero[2]=="X"))||((ArrTablero[3]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[5]=="X"))||((ArrTablero[6]=="X")&&(ArrTablero[7]=="X")&&(ArrTablero[8]=="X"))||((ArrTablero[0]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[8]=="X"))||((ArrTablero[2]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[6]=="X"))||((ArrTablero[0]=="X")&&(ArrTablero[3]=="X")&&(ArrTablero[6]=="X"))||((ArrTablero[1]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[7]=="X"))||((ArrTablero[2]=="X")&&(ArrTablero[5]=="X")&&(ArrTablero[8]=="X"))) {
    document.getElementById("asignaganador").innerHTML = "El jugador X ha ganado.";//indica que el jugador X ha ganado
    console.log("El jugador X ha ganado");
    sessionStorage.setItem("ganador", "Ha ganado el jugador X");
    window.open("../winner.html", "_self");
    document.getElementById("asignaturnos").innerHTML = "Fin del juego";
    finJuego = 1;
  } else if (((ArrTablero[0]=="O")&&(ArrTablero[1]=="O")&&(ArrTablero[2]=="O"))||((ArrTablero[3]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[5]=="O"))||((ArrTablero[6]=="O")&&(ArrTablero[7]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[3]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[1]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[7]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[5]=="O")&&(ArrTablero[8]=="O"))) {
    document.getElementById("asignaganador").innerHTML = "El jugador O ha ganado.";
    console.log("EL jugador O ha ganado");
    sessionStorage.setItem("ganador", "Ha ganado el jugador O");
    window.open("../winner.html", "_self");
    document.getElementById("asignaturnos").innerHTML = "Fin del juego";
    finJuego = 1;
  } else {
    document.getElementById("asignaganador").innerHTML = "La partida continúa.";
  }



}


arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {

  if (finJuego == 0) {

    if ((casillaEscogida.innerHTML != "X") && (casillaEscogida.innerHTML != "O")) {
      numeroClicks ++;
      let esTurnoO = (numeroClicks%2 == 0)  //La variable esTurnoX será true si es el turno de X y
      //false si es el turno de O
        ? true
        : false;

      if (esTurnoO == true) {  //Con este if acumulamos los turnos que han transcurrido de cada jugador
        //e indicamos por consola el turno actual
        document.getElementById("asignaturnos").innerHTML = "Es el turno del jugador X";//indica que es el turno de X
        turnosO ++;
        document.getElementById("turnosO").innerHTML = `Turnos de O transcurridos: ${turnosO}`;//indica los turnos de O que ya han transcurrido
        ArrTablero[casillaEscogida.id] = "O"; //gracias a esta línea indicamos en el tablero 
        casillaEscogida.innerHTML = "O";
        //lógico que casillas están marcadas por el jugador X
        Comprobarganador (ArrTablero);
      } else {
        document.getElementById("asignaturnos").innerHTML = "Es el turno del jugador O";
        turnosX ++;
        document.getElementById("turnosX").innerHTML = `Turnos de X transcurridos: ${turnosX}`;
        ArrTablero[casillaEscogida.id] = "X";
        casillaEscogida.innerHTML = "X";
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


let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
let numeroClicks = 0;
let turnosX = 0;
let turnosO = 0;
let esTurnoX = true;
let ArrTablero = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
// console.log(ArrTablero);


const Comprobarganador = (ArrTablero) => {

  if (((ArrTablero[0]=="X")&&(ArrTablero[1]=="X")&&(ArrTablero[2]=="X"))||((ArrTablero[3]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[5]=="X"))||((ArrTablero[6]=="X")&&(ArrTablero[7]=="X")&&(ArrTablero[8]=="X"))||((ArrTablero[0]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[8]=="X"))||((ArrTablero[2]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[6]=="X"))||((ArrTablero[0]=="X")&&(ArrTablero[3]=="X")&&(ArrTablero[6]=="X"))||((ArrTablero[1]=="X")&&(ArrTablero[4]=="X")&&(ArrTablero[7]=="X"))||((ArrTablero[2]=="X")&&(ArrTablero[5]=="X")&&(ArrTablero[8]=="X"))) {
    document.getElementById("asignaganador").innerHTML = "El jugador X ha gando.";//indica que el jugador X ha ganado
    
  } else if (((ArrTablero[0]=="O")&&(ArrTablero[1]=="O")&&(ArrTablero[2]=="O"))||((ArrTablero[3]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[5]=="O"))||((ArrTablero[6]=="O")&&(ArrTablero[7]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[3]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[1]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[7]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[5]=="O")&&(ArrTablero[8]=="O"))) {
    document.getElementById("asignaganador").innerHTML = "El jugador O ha gando.";

  } else {
    document.getElementById("asignaganador").innerHTML = "La partida continúa.";
  }


}




console.log("Es el turno de X");
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {

      if (turnosO < 3) {

    if ((casillaEscogida.innerHTML != "X") && (casillaEscogida.innerHTML != "O")) {
    // console.log(casillaEscogida.innerHTML); Esto indicaba la casilla que se había pinchado
    //antes de cambiar su númeor por un espacio.
    numeroClicks ++;
    // console.log("a ver los clicks", numeroClicks)

    let esTurnoX = (numeroClicks%2 == 0)  //La variable esTurnoX será true si es el turno de X y
    //false si es el turno de O
      ? true
      : false;

    //  console.log("valor de esTurnoX", esTurnoX);

    if (esTurnoX == true) {  //Con este if acumulamos los turnos que han transcurrido de cada jugador
      //e indicamos por consola el turno actual
      document.getElementById("asignaturnos").innerHTML = "Es el turno del jugador X";//indica que es el turno de X
      turnosO ++;
      document.getElementById("turnosO").innerHTML = `Turnos de O transcurridos: ${turnosO}`;//indica los turnos de O que ya han transcurrido
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
      ArrTablero[casillaEscogida.innerHTML] = "O"; //gracias a esta línea indicamos en el tablero 
      casillaEscogida.innerHTML = "O";
      //lógico qué casillas están marcadas por el jugador X
      console.log(ArrTablero);
      Comprobarganador (ArrTablero);
    } else {
      document.getElementById("asignaturnos").innerHTML = "Es el turno del jugador O";
      turnosX ++;
      document.getElementById("turnosX").innerHTML = `Turnos de X transcurridos: ${turnosX}`;
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
      ArrTablero[casillaEscogida.innerHTML] = "X";
      casillaEscogida.innerHTML = "X";
      console.log(ArrTablero);
      Comprobarganador (ArrTablero);
    }
     } else {};



    } else { document.getElementById("asignaganador").innerHTML = "La partida ha finalizado sin un ganador.";}


      });
  });


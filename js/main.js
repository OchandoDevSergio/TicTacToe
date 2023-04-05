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
     console.log("El jugador X ha ganado.");
    
  } else if (((ArrTablero[0]=="O")&&(ArrTablero[1]=="O")&&(ArrTablero[2]=="O"))||((ArrTablero[3]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[5]=="O"))||((ArrTablero[6]=="O")&&(ArrTablero[7]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[8]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[0]=="O")&&(ArrTablero[3]=="O")&&(ArrTablero[6]=="O"))||((ArrTablero[1]=="O")&&(ArrTablero[4]=="O")&&(ArrTablero[7]=="O"))||((ArrTablero[2]=="O")&&(ArrTablero[5]=="O")&&(ArrTablero[8]=="O"))) {
     console.log("El jugador O ha ganado.");

  } else {
     console.log("La partida continúa.")
  }


}


// const Comprobarganador = (ArrTablero) => {

//   if ((ArrTablero[0]=="X")&&(ArrTablero[1]=="X")&&(ArrTablero[2]=="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[3]="X")&&(ArrTablero[4]="X")&&(ArrTablero[5]="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[6]="X")&&(ArrTablero[7]="X")&&(ArrTablero[8]="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[0]="X")&&(ArrTablero[4]="X")&&(ArrTablero[8]="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[2]="X")&&(ArrTablero[4]="X")&&(ArrTablero[6]="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[0]="X")&&(ArrTablero[3]="X")&&(ArrTablero[6]="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[1]="X")&&(ArrTablero[4]="X")&&(ArrTablero[7]="X")) {
//     console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[2]="X")&&(ArrTablero[5]="X")&&(ArrTablero[8]="X")) {
//      console.log("El jugador X ha ganado.");
//   } else if ((ArrTablero[0]="O")&&(ArrTablero[1]="O")&&(ArrTablero[2]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[3]="O")&&(ArrTablero[4]="O")&&(ArrTablero[5]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[6]="O")&&(ArrTablero[7]="O")&&(ArrTablero[8]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[0]="O")&&(ArrTablero[4]="O")&&(ArrTablero[8]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[2]="O")&&(ArrTablero[4]="O")&&(ArrTablero[6]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[0]="O")&&(ArrTablero[3]="O")&&(ArrTablero[6]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[1]="O")&&(ArrTablero[4]="O")&&(ArrTablero[7]="O")) {
//     console.log("El jugador O ha ganado.");
//   } else if ((ArrTablero[2]="O")&&(ArrTablero[5]="O")&&(ArrTablero[8]="O")) {
//      console.log("El jugador O ha ganado.");
//   } else {
//      console.log("La partida continúa.")
//   }


// }





console.log("Es el turno de X");
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {

      Comprobarganador (ArrTablero);

    if ((casillaEscogida.innerHTML != "X") && (casillaEscogida.innerHTML != "O")) {
    console.log(casillaEscogida.innerHTML);
    numeroClicks ++;
    // console.log("a ver los clicks", numeroClicks)

    let esTurnoX = (numeroClicks%2 == 0)  //La variable esTurnoX será true si es el turno de X y
    //false si es el turno de O
      ? true
      : false;

    //  console.log("valor de esTurnoX", esTurnoX);

    if (esTurnoX == true) {  //Con este if acumulamos los turnos que han transcurrido de cada jugador
      //e indicamos por consola el turno actual
      console.log("Es el turno de X");
      turnosO ++;
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
      ArrTablero[casillaEscogida.innerHTML] = "O"; //gracias a esta línea indicamos en el tablero 
      casillaEscogida.innerHTML = "O";
      //lógico qué casillas están marcadas por el jugador X
      console.log(ArrTablero);
    } else {
      console.log("Es el turno de O");
      turnosX ++;
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
      ArrTablero[casillaEscogida.innerHTML] = "X";
      casillaEscogida.innerHTML = "X";
      console.log(ArrTablero);
    }
     } else {};


      });
  });


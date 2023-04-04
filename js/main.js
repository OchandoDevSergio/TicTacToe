let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
let numeroClicks = 0;
let turnosX = 0;
let turnosO = 0;
let esTurnoX = true;
let ArrTablero = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
// console.log(ArrTablero);
console.log("Es el turno de X");
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {
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
      ArrTablero[casillaEscogida.innerHTML] ="X";
      console.log(ArrTablero);
    } else {
      console.log("Es el turno de O");
      turnosX ++;
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
      ArrTablero[casillaEscogida.innerHTML] = "O";
      console.log(ArrTablero);
    }


    });
  });

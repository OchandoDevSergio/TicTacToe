let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
let numeroClicks = 0;
let turnosX = 0;
let turnosO = 0;
console.log("Es el turno de X")
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {
    console.log(casillaEscogida.innerHTML);
    numeroClicks ++;
    // console.log("a ver los clicks", numeroClicks)

    if (numeroClicks%2 == 0) {
      console.log("Es el turno de X");
      turnosO ++;
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
    } else  {
      console.log("Es el turno de O");
      turnosX ++;
      console.log(turnosX, "Son los turnos que X ha tenido.");
      console.log(turnosO, "Son los turnos que O ha tenido.");
    }

    });
  });

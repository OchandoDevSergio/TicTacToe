let conjuntoCasillas = document.getElementsByClassName("casilla");
let arrCasillas = Array.from(conjuntoCasillas);
arrCasillas.map((casillaEscogida) => {
    casillaEscogida.addEventListener("click", () => {
    console.log(casillaEscogida.innerHTML);
    });
  });
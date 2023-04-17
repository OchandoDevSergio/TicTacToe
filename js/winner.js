
let resultado = document.getElementById("resultado");

resultado.innerHTML = `${sessionStorage.getItem("ganador")}`;

const newGame = () => {

    sessionStorage.clear;

    window.open("../players.html", "_self");

}

let resultado = document.getElementById("resultado");

resultado.innerHTML = `${sessionStorage.getItem("ganador")}`;

const newGame = () => {

    sessionStorage.clear;

    window.open("../pages/players.html", "_self");

}

let playerX = document.getElementById("playerX");
let playerO = document.getElementById("playerO");
let link = document.getElementById("buttongame");

let player1 = "";
let player2 = "";

playerX.addEventListener("input", (e)=> {
    player1= e.target.value;
});

playerO.addEventListener("input", (e)=> {
    player2= e.target.value;
});

const goToGame = () => {

    if(player1 === ""){
        player1 = "Depredador";
    }
    
    if (player2 === "") {
        player2 = "Alien";
    }

    sessionStorage.setItem("playerX", JSON.stringify(player1));
    sessionStorage.setItem("playerO", JSON.stringify(player2));

    window.open("../pages/game.html", "_self");

}

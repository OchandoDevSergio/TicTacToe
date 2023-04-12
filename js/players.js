
let playerX = document.getElementById("playerX");
let playerO = document.getElementById("playerO");
let link = document.getElementById("buttongame");

playerX.addEventListener("input", (e)=> {
    playerX= e.target.value;
});


playerO.addEventListener("input", (e)=> {
playerO=e.target.value;
});

link.addEventListener("click", ()=>{
    sessionStorage.setItem("playerX", JSON.stringify(playerX));
    sessionStorage.setItem("playerO", JSON.stringify(playerO));

})


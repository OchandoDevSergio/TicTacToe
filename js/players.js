
let playerX = document.getElementById("playerX");
let playerO = document.getElementById("playerO");
let link = document.getElementById("buttongame");

playerX.addEventListener("input", (e)=> {

    console.log(`playerX ${e.target.value}`)
    // console.log(e);
});

playerO.addEventListener("input", (e)=> {

    console.log(`playerO ${e.target.value}`)
    // console.log(e);
});

link.addEventListener("click", ()=> {
    sessionStorage.setItem("playerX", playerX);
    sessionStorage.setItem("playerO", playerO);

})
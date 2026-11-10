function onClick(){
    let myFavorite = document.getElementById("myFavorite");
    myFavorite.style.color = "gold";

    let secondBest = document.getElementById("secondBest");
    secondBest.style.color = "silver";
    
    let thirdBest = document.getElementById("thirdBest");
    thirdBest.style.color = "brown";

    let goodCharacters = document.getElementsByClassName("goodCharacter");
    for(const p of Array.from(goodCharacters)){
        p.style.color = "red";
    }
    let allPElements = document.getElementsByTagName("p");
    for(const p of Array.from(allPElements)){
        p.style.fontWeight = "bold"
    }
}

function init(){
    let buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", onClick);
}

window.onload = init;
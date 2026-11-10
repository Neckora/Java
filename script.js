let visibiilty = false;

function onClick(){
    let text = document.getElementById("text");
    if (visibiilty == false){
        text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, libero ex eaque asperiores animi sit molestiae aspernatur aliquam sapiente quis!";
        visibiilty = true;
    } else{
        text.innerText = "";
        visibiilty = false;
    }
}
function init(){
    let buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", onClick);
}

window.onload = init;
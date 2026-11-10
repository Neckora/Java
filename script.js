function onClick(){
    let text = document.getElementById("text");
    text.hidden = !text.hidden
}

function init(){
    let buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", onClick);
}

window.onload = init;
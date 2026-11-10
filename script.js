function onClick(){
    let text = document.getElementById("text");
    text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, libero ex eaque asperiores animi sit molestiae aspernatur aliquam sapiente quis!";
}


function init(){
    let buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", onClick);
}

window.onload = init;
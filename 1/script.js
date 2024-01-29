let paragraphs = document.querySelectorAll("p")
let button = document.querySelector("button")

button.onclick = function(event){
    for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "green"
    }
}
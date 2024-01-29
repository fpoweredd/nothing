
let button = document.querySelector("button")
let div = document.querySelector("div")

button.addEventListener("click", function(event){
    document.querySelector("p").appendChild(document.createTextNode("New paragraph!"))
    div.appendChild(document.createElement("p"))
})
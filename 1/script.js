const nextButton = document.getElementById("next")
const prevButton = document.getElementById("previous")
const img = document.getElementById("myimage")
const imgArray = ["slides/image1.jpg", "slides/image2.jpg", "slides/image3.jpg", "slides/image4.jpg", "slides/image5.jpg"]
let actualSlide = 0

nextButton.addEventListener("click", function(event){
    event.preventDefault()

    actualSlide++
    if (imgArray.length === actualSlide) {
        actualSlide = 0
    }
    let newSlide = document.createElement("img")
    newSlide.src = imgArray[actualSlide]
    newSlide.className = "animation"
    document.getElementById("content").appendChild(newSlide)
    if (document.getElementById("content").children.length > 2) {
        document.getElementById("content").removeChild(document.getElementById("content").children[0])
    }
    swapSlide()
})

prevButton.onclick = function(event){
    event.preventDefault()
    actualSlide--
    if (actualSlide < 0) {
        actualSlide = imgArray.length - 1
    }
    swapSlide()
}

function swapSlide() {
    let newSlide = document.createElement("img")
    newSlide.src = imgArray[actualSlide]
    newSlide.className = "animation"
    document.getElementById("content").appendChild(newSlide)
    if (document.getElementById("content").children.length > 2) {
        document.getElementById("content").removeChild(document.getElementById("content").children[0])
    }
}
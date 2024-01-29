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
    // img.src = imgArray[actualSlide]
    let newSlide = document.createElement("img")
    newSlide.src = imgArray[actualSlide]
    newSlide.className = "animation"
    document.getElementById("content").appendChild(newSlide)
})

prevButton.onclick = function(event){
    event.preventDefault()
    actualSlide--
    if (actualSlide < 0) {
        actualSlide = imgArray.length - 1
    }
    // img.src = imgArray[actualSlide]
    let newSlide = document.createElement("img")
    // not a final bcs we can look all time new image in html
    newSlide.src = imgArray[actualSlide]
    newSlide.className = "animation"
    document.getElementById("content").appendChild(newSlide)
}
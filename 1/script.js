const nextButton = document.getElementById("next")
const prevButton = document.getElementById("previous")
const img = document.getElementById("myimage")
const imgArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
let actualSlide = 0

nextButton.addEventListener("click", function(){
    actualSlide++
    if (imgArray.length === actualSlide) {
        actualSlide = 0
    }
    img.src = imgArray[actualSlide]
})

prevButton.onclick = function(){
    actualSlide--
    if (actualSlide < 0) {
        actualSlide = imgArray.length - 1;
    }
    img.src = imgArray[actualSlide]
}
const images = [
    "images/slide1.jpeg",
    "images/slide2.jpeg",
    "images/slide3.jpeg"
];

let current = 0;
const slideImage = document.getElementById("slide-image");

setInterval(() => {
    current++;
    if(current >= images.length){
        current = 0;
    }
    slideImage.src = images[current];
}, 3000);
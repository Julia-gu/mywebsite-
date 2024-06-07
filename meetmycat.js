let slideIndex = 0;

function scrollSlider(n) {
    const slides = document.getElementsByClassName("photo");
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector(".photo-slider").style.transform = `translateX(${offset}%)`;
}

function changeBackgroundColor() {
    const colors = ["#ffe6f2", "#e6f2ff", "#f2ffe6", "#fff2e6"]; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    document.body.style.backgroundColor = randomColor; 
}

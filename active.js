let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
    console.log(slideIndex);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

setInterval(function() {
    changeSlide(1);
}, 5000);

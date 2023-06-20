// Countdown

let countDownDate = new Date('July 15, 2023 00:00:00').getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';

    }

}, 1000);



//   slideshow animation
var images = document.querySelectorAll(".slideshow img");
var currentImage = 0;
images[currentImage].classList.add("active");

setInterval(function () {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");
}, 3000);

// Reveal animation
document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".container-female");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".container-male");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".container-card");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});


document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".quote-image");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".quote-text");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

// Function to check if the top of an element is in the viewport
function isTopInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle scroll-triggered animation
function revealImage() {
    var images = document.querySelectorAll('.gallery-img');
    images.forEach(function (image) {
        if (isTopInViewport(image)) {
            image.classList.add('active');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', revealImage);



document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".thank-container");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});


document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".paragraf-container");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".kami");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

document.addEventListener("DOMContentLoaded", function () {
    var containerFemale = document.querySelector(".gift-container");

    function revealElement() {
        var elementPosition = containerFemale.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            containerFemale.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealElement);
});

// modal box
const toggleButton = document.getElementById('btn');
const modal = document.querySelector('.modal');

function toggleModal() {
    modal.classList.toggle('hide');
}

toggleButton.addEventListener('click', toggleModal);


const audio = document.getElementById("myAudio");
const playButton = document.getElementById("btn");

function togglePlay() {
    audio.play();
}

toggleButton.addEventListener('click', togglePlay);


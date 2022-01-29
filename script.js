var count = 0;

function backm() {
    if (count < 2) {
        new Audio("music/bc.mp3").play();
        count++;
    }
}

function tap() {
    if (count < 2) {
        new Audio("music/click.mp3").play();
        count++;
    }
}

function art() {
    new Audio("music/art.mp3").play();
}

function myStopFunction() {
    clearInterval(myVar);
}
"use strict";

//DOM load event
window.addEventListener("DOMContentLoaded", () => {
    const cube = document.querySelector(".cube"),
        imageButtons = document.querySelector(".image-buttons");
    let cubeImageClass = cube.classList[1]; //Add click event listener to image buttons container

    imageButtons.addEventListener("click", e => {
        //Get node type and class value of clicked element
        const targetNode = e.target.nodeName,
            targetClass = e.target.className; //Check if image input has been clicked and isn't the currently shown image

        if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
            console.log(`Show Image: ${targetClass.charAt(11)}`); //Replace previous cube image class with new class

            cube.classList.replace(cubeImageClass, targetClass); //Update cube image class variable with new class

            cubeImageClass = targetClass;
        }
    });
});
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
};

function closeLightbox() {
    document.getElementById('Lightbox').style.display = "none";
};

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
};
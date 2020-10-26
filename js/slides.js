var slideIndex = 1;
var x = document.getElementsByClassName("slide");
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    removeHiddenClass();
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    if (x[slideIndex-1]) { 
        x[slideIndex-1].style.display = "block";
    }
}

function goToSlide(a) {
    removeHiddenClass();
    var y = document.getElementById(a + "-text");
    y.style.display = "block";

}

function removeHiddenClass() {
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        x[i].classList.remove("hidden");
    }
}

function goToSlideKeyDown(e, a) {
    if (e.key === "Enter") {
        goToSlide(a);
    }
}
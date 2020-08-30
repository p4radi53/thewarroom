//Slider
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var ix = 0;

function prevSlide(n) {
  ix += n;
  changeSlide();
}

function nextSlide(n) {
  ix += n;
  changeSlide();
}

changeSlide();

function changeSlide() {
  if (ix > slides.length - 1) {
    ix = 0;
  }
  if (ix < 0) ix = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[ix].style.display = "block";
}

//Placeholders
$(function () {
  $("#navbar-placeholder").load("navbar.html");
});
$(function () {
  $("#footer-placeholder").load("footer.html");
});

//Navbar
setTimeout(function () {
  const toggleBtn = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByTagName("nav")[0];
  toggleBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
}, 500);

//Accordion
var acc = document.getElementsByClassName("accord");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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

//Active navbar
setTimeout(function () {
  var navlink = document.getElementsByClassName("nav-link");

  var address = window.location.toString();
  var activelink = navlink[0];

  for (let i = 0; i < navlink.length; i++) {
    if (
      navlink[i].firstElementChild.href === address.substr(0, address.length)
    ) {
      activelink = navlink[i];
    }
    console.log(activelink.innerHTML);

    //activelink.classList.toggle("active");
    navlink[i].addEventListener("mouseenter", function () {
      activelink.classList.remove("active");
      console.log("Mouse entered: " + navlink[i].innerText);
    });
    navlink[i].addEventListener("mouseout", function () {
      activelink.classList.toggle("active");
      navlink[i].classList.remove("active");
      console.log("Mouse left: " + navlink[i].innerText);
    });
  }
}, 500);

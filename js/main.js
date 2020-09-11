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

//Active navbar
setTimeout(function () {
  let navlink = document.getElementsByClassName("nav-link");

  let address = window.location.toString();
  let activelink;
  for (let i = 0; i < navlink.length; i++) {
    console.log(navlink[i].innerText);
    if (
      navlink[i].firstElementChild.href == address.substr(0, address.length)
    ) {
      activelink = navlink[i];
      console.log(activelink.innerText + "WARN");
    }
  }
  try {
    activelink.classList.add("active");
  } catch (e) {
    console.log(e);
  }

  for (let i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener("mouseenter", function () {
      if (this != activelink) {
        activelink.classList.remove("active");
        this.classList.add("active");
      }
    });
    navlink[i].addEventListener("mouseout", function () {
      if (this != activelink) {
        activelink.classList.add("active");
        this.classList.remove("active");
      }
    });
  }
}, 500);

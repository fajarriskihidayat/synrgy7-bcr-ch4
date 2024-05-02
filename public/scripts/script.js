// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});

// active link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
      navLink.classList.remove("fw-semibold");
    });
    navLink.classList.add("active");
    navLink.classList.add("fw-semibold");
  });
});

// scroll effetc
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }
};

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000, // Animation duration
    once: false, // Set to false if you want the animation to reset on scroll
    offset: 0, // Offset from the trigger point
  });
});
setTimeout(() => {
  AOS.refresh();
}, 500);

window.onload = function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

// move top arrow
// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;
//   const message = document.getElementById('scrollMessage');

//   if (scrollPosition >= 700) {
//     message.style.display = 'block'; // Show the message
//   } else {
//     message.style.display = 'none'; // Hide the message
//   }

// });

// document.addEventListener('DOMContentLoaded', function() {
//   window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const message = document.getElementById('scrollMessage');

//     if (scrollPosition >= 700) {
//       message.style.display = 'block'; // Show the message
//     } else {
//       message.style.display = 'none'; // Hide the message
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const message = document.getElementById("scrollMessage");
    const footer = document.querySelector("footer"); // Select the footer
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Show the arrow after scrolling 700px
    if (scrollPosition >= 700) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }

    // Hide the arrow when the footer is in view
    if (footerPosition <= windowHeight) {
      message.style.display = "none";
    }
  });
});

// slick

$(document).ready(function () {
  $(".leadership-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// isotope

// document.addEventListener("DOMContentLoaded", function () {
//   var grid = document.querySelector("#blog-grid"); // Selecting the grid container

//   // Check if Isotope is loaded and the grid exists
//   if (typeof Isotope === "undefined" || !grid) {
//     console.error("Isotope is not loaded or the grid container was not found.");
//     return;
//   }

//   // Initialize Isotope
//   var iso = new Isotope(grid, {
//     itemSelector: ".col-md-4", // Targeting grid items
//     layoutMode: "fitRows", // Arrange items in a grid
//   });

//   // Select all filter buttons
//   var filterButtons = document.querySelectorAll(".nav-link");

//   filterButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       var filterValue = this.getAttribute("data-filter");

//       // Apply the filter using Isotope
//       iso.arrange({ filter: filterValue });

//       // Remove active class from all buttons
//       filterButtons.forEach((btn) => btn.classList.remove("active"));
//       this.classList.add("active"); // Add active class to the clicked button
//     });
//   });
// });

// counter
// document.querySelectorAll(".counter").forEach((item) => {
//   const targetValue = Number(item.dataset.value);
//   const increment = Number(item.dataset.plus);
//   const suffix = item.textContent.trim();
//   let currentCount = 0;

//   const updateCounter = () => {
//     if (currentCount >= targetValue) {
//       item.textContent = `${targetValue}${suffix}`;
//       clearInterval(interval);
//       return;
//     }
//     item.textContent = `${currentCount}${suffix}`;
//     currentCount += increment;
//   };

//   const interval = setInterval(updateCounter, 100);
// });

const counters = document.querySelectorAll(".counter");

const startCounter = (item) => {
  const targetValue = Number(item.dataset.value);
  const increment = Number(item.dataset.plus);
  const suffix = item.textContent.trim().replace(/\d+/g, ""); // Keep only the suffix
  let currentCount = 0;

  const updateCounter = () => {
    if (currentCount >= targetValue) {
      item.textContent = `${targetValue}${suffix}`;
      clearInterval(interval);
      return;
    }
    item.textContent = `${currentCount}${suffix}`;
    currentCount += increment;
  };

  const interval = setInterval(updateCounter, 100);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target); // Stop observing after first trigger
      }
    });
  },
  { threshold: 0.5 } // 50% of the element must be visible
);

counters.forEach((counter) => observer.observe(counter));

// project
document.querySelectorAll(".price").forEach((item) => {
  const targetValue = Number(item.dataset.value); // Get target number from data-value
  const increment = Number(item.dataset.plus); // Get increment from data-plus
  if (isNaN(targetValue) || isNaN(increment)) return; // Skip if values are invalid

  let currentCount = 0;
  let interval; // Declare interval variable outside the function

  const updateCounter = () => {
    if (currentCount >= targetValue) {
      item.textContent = `${targetValue}+`; // Set final value
      clearInterval(interval); // Now interval is accessible here
      return;
    }
    item.textContent = `${currentCount}+`;
    currentCount += increment;
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          interval = setInterval(updateCounter, 50); // Assign interval here
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% visible
  );

  observer.observe(item);
});

// our client
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true, // Allows users to click on pagination bullets to navigate
//   },
//   breakpoints: {
//     640: { slidesPerView: 2, spaceBetween: 20 },
//     768: { slidesPerView: 3, spaceBetween: 30 },
//     1024: { slidesPerView: 4, spaceBetween: 40 },
//   },
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: { slidesPerView: 2, spaceBetween: 10 },
    320: { slidesPerView: 2, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 6, spaceBetween: 40 },
  },
});

var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    reverseDirection: true, // Moves slides from right to left
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: { slidesPerView: 2, spaceBetween: 10 },
    320: { slidesPerView: 2, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
  },
});

// navbarCollapse

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarOverlay.classList.toggle("show");
    if (navbarToggler.classList.contains("collapsed")) {
      navbarToggler.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Default Icon
    } else {
      navbarToggler.innerHTML = "&times;"; // Change to "×" when open
    }
  });

  // navbarOverlay.addEventListener("click", function () {
  //   navbarOverlay.classList.remove("show");
  //   navbarCollapse.classList.remove("show");
  //   navbarToggler.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Reset Icon
  // });
});

// dropdown visiblity

document.addEventListener("DOMContentLoaded", function () {
  const megaMenu = document.querySelector(".mega-menu");
  const productDropdown = document.getElementById("productDropdown");

  // Close mega menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !productDropdown.contains(event.target) &&
      !megaMenu.contains(event.target)
    ) {
      megaMenu.style.display = "none";
    }
  });

  // Show mega menu on click (mobile fix)
  productDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    megaMenu.style.display =
      megaMenu.style.display === "block" ? "none" : "block";
  });
});

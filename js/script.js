// Burger - menu
document.addEventListener("DOMContentLoaded", function () {
  const navList = document.querySelector(".nav__list");
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelectorAll(".nav__list a");

  function toggleMenu() {
    navList.classList.toggle("nav__list--active");
  }

  navToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("nav__list--active");
    });
  });
});

  // Menu
  function toggleMenu() {
    const navList = document.querySelector('.nav__list');
    navList.classList.toggle('active');
  }


// Swiper
  
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      475: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      820: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        if (modal.style.display === "block") {
          updateModalImage(swiper.realIndex);
        }
      },
    },
  });

  function openModal(img) {
    const src = img.getAttribute("data-src");
    const index = Array.from(
      document.querySelectorAll(".swiper-slide img")
    ).indexOf(img);
    modalImg.src = src;
    modal.style.display = "block";
    swiper.slideTo(index);
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  function updateModalImage(index) {
    var currentSlide = swiper.slides[index];
    var imgSrc = currentSlide.querySelector("img").getAttribute("data-src");
    modalImg.src = imgSrc;
  }

  function prevModalImage() {
    swiper.slidePrev();
    updateModalImage(swiper.realIndex);
  }

  function nextModalImage() {
    swiper.slideNext();
    updateModalImage(swiper.realIndex);
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
  window.prevModalImage = prevModalImage;
  window.nextModalImage = nextModalImage;

  // Closing the modal window when clicking on the background or image
  modal.addEventListener("click", function (event) {
    if (
      event.target === modal ||
      event.target === modalImg ||
      event.target.classList.contains("close")
    ) {
      closeModal();
    }
  });

  // Closing the modal window when pressing the Esc key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // Closing the modal window when loading the page
  modal.style.display = "none";
});



  // statistics section animation
  document.addEventListener("DOMContentLoaded", function () {
    const statItems = document.querySelectorAll('.stat-item');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
  
    statItems.forEach(item => {
      observer.observe(item);
    });
  });


// Animation on scroll
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.fade-in, .slide-in, .zoom-in');
  const viewportHeight = window.innerHeight;

  elements.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < viewportHeight - 100) {
          element.classList.add('visible');
      }
  });
});


// Animation on hover over buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
  button.addEventListener('mouseover', function() {
      button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', function() {
      button.style.transform = 'scale(1)';
  });
});

  
  // Animation on scroll
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Adding this line will ensure the animation runs only once
          }
        });
      },
      {
        threshold: 0.1, // Animates when 10% of the element is visible in the viewport
      }
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  

// animation numbers
document.addEventListener("DOMContentLoaded", function () {
  const statItem = document.querySelector('.stat-item');
  const statValue = document.getElementById('statValue');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statItem.classList.add("show");
          animateValue(statValue, 0, 95, 2000); // Animation from 0 to 90 in 2 seconds
          observer.unobserve(entry.target); // Animates only once when it appears in the viewport
        }
      });
    },
    {
      threshold: 0.1, // Animates when 10% of the element is visible in the viewport
    }
  );

  observer.observe(statItem);

  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerText = Math.floor(progress * (end - start) + start) + '%';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
});




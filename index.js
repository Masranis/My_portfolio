const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");
const links = document.querySelectorAll(".nav-link");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50); // thoda delay browser load ke liye
});
// mobile me click ke baad menu close
links.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
window.addEventListener("load", () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, " ");
  }
});

const skillsContainer = document.querySelector(".skills-container");

let scrollAmount = 0;
let isPaused = false; // scroll ko pause karne ke liye

// Scroll loop
function autoScrollSkills() {
  if (!isPaused) {
    scrollAmount += 1; // scroll speed
    if (scrollAmount > skillsContainer.scrollWidth - skillsContainer.clientWidth) {
      scrollAmount = 0; // loop
    }
    skillsContainer.scrollLeft = scrollAmount;
  }
  requestAnimationFrame(autoScrollSkills);
}

autoScrollSkills();

// Pause on hover
skillsContainer.addEventListener("mouseenter", () => {
  isPaused = true;
});

skillsContainer.addEventListener("mouseleave", () => {
  isPaused = false;
});

// Select all About cards
const aboutCards = document.querySelectorAll('.about-card');

aboutCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active from all cards (optional, if only one active at a time)
    aboutCards.forEach(c => {
      if(c !== card) c.classList.remove('active-card');
    });

    // Toggle active class
    card.classList.toggle('active-card');
  });
});

// Horizontal auto-scroll for IoT slider
const slider = document.querySelector('.iot-slide');
let scrollSpeed = 1; // px per frame

function scrollSlider() {
  slider.scrollLeft += scrollSpeed;
  
  // loop back when end is reached
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
    slider.scrollLeft = 0;
  }
  requestAnimationFrame(scrollSlider);
}

requestAnimationFrame(scrollSlider);

// Pause on hover
slider.addEventListener('mouseenter', () => {
  scrollSpeed = 0;
});
slider.addEventListener('mouseleave', () => {
  scrollSpeed = 1;
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ YAHAN VARIABLES DEFINE HOTE HAI
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;

  fetch("https://script.google.com/macros/s/AKfycbwke1DT7uHPCLmALl5LIewrz8Q32HTpKAxjpz0GVSbgqp6XFchvEhnTjUoRod8l1MRKRA/exec", {
    method: "POST",
    body: JSON.stringify({
      name: nameValue,
      email: emailValue,
      message: messageValue
    }),
  })
  .then(() => {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
  })
  .catch(err => console.error(err));
});



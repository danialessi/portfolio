// typeWriting function
let i = 0;
let title = 'Hello World! My name is Daniele Alessi.';
let speed = 60;

function type() {
  setTimeout(function typeWriter() {
    if (i < title.length) {
      document.getElementById("hello").innerHTML += title.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }, 400);
};

type();

// SWIPER 
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
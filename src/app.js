window.onscroll = function() {
  stickyHeader();
}

var header = document.getElementById("header");

function stickyHeader() {
  if (window.scrollY > 300) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}

$( document ).ready(function() {
  $('#burger-menu').click(function() {
      $('#burger-menu-list-container').toggleClass("show");
      $('main').toggleClass("z-index");
  })
});

// FADE IN
/* setTimeout(() => {
  let fadein = document.getElementById('fade-in');
  fadein.classList.add('show');
  fadein.classList.remove('hide');
}, 1500); */

// TYPEWRITING FUNCTION
let i = 0;
let title = 'Daniele Alessi';
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
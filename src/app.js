// FADE IN
setTimeout(() => {
  let fadein = document.getElementById('fade-in');
  fadein.classList.add('show');
  fadein.classList.remove('hide');
}, 1500);

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

// scrollreveal
ScrollReveal().reveal('.project-container', { delay: 600});

// BACKTOTOP
$("#backtotop-container").click(function(){
  document.documentElement.scrollTop = 0;
})
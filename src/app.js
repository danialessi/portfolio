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

var app = new Vue(
  {
    el: "#root",
    data: {
      currentActiveImage: 0,
      digitalOcean: [
        'img/digital-ocean/1.jpg',
        'img/digital-ocean/2.jpg',
        'img/digital-ocean/3.jpg',
        'img/digital-ocean/4.jpg',
        'img/digital-ocean/5.jpg',
        'img/digital-ocean/res-1.jpg',
        'img/digital-ocean/res-2.jpg',
        'img/digital-ocean/res-33.jpg'
      ],

      boolflix: [
        'img/Boolflix/boolflix-1.jpg',
        'img/Boolflix/boolflix-2.jpg'
      ],

      spotifyWeb: [
        'img/SpotifyWeb/spotify-1.jpg',
        'img/SpotifyWeb/spotify-phone.jpg',
        'img/SpotifyWeb/spotify-tab.jpg'
      ],

      boolzapp: [
        'img/Boolzapp/Boolzapp-1.jpg',
        'img/Boolzapp/Boolzapp-2.jpg',
        'img/Boolzapp/Boolzapp-3.jpg',
        'img/Boolzapp/Boolzapp-4.jpg'
      ],

      phlox: [
        'img/Phlox/phlox-1.jpg',
        'img/Phlox/phlox-2.jpg',
        'img/Phlox/phlox-3.jpg',
        'img/Phlox/phlox-4.jpg',
        'img/Phlox/phlox-5.jpg',
        'img/Phlox/phlox-6.jpg',
        'img/Phlox/phlox-7.jpg'
      ],

      deliveboo: [
        'img/Deliveboo/deliveboo-1.jpg',
        'img/Deliveboo/deliveboo-2.jpg',
        'img/Deliveboo/deliveboo-3.jpg',
        'img/Deliveboo/deliveboo-4.jpg',
        'img/Deliveboo/deliveboo-5.jpg'
      ]
    }
  }
);
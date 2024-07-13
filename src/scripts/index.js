// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// slider foto project
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

// Fungsi untuk menampilkan slide berdasarkan index
function showSlide(index) {
  // Mengatur index slide agar tidak melebihi jumlah slide
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Menyembunyikan semua slide
  slides.forEach((slide) => {
    slide.classList.add('opacity-0');
  });

  // Menampilkan slide yang sesuai
  slides[slideIndex].classList.remove('opacity-0');
}

// Fungsi untuk mengubah slide berdasarkan arah (next atau prev)
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);

function autoSlide() {
  changeSlide(1);
}

setInterval(() => {
  autoSlide()
}, 5000);
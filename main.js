// open and close the menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('#header .toggle')

toggle.forEach(element => {
  element.addEventListener('click', event => {
    nav.classList.toggle('show')
  })
})

// when clicking on a menu item, hide the menu
const links = document.querySelectorAll('nav ul li a')
links.forEach(element => {
  element.addEventListener('click', event => {
    nav.classList.remove('show')
  })
})

// Header Scroll - Add shadow
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', event => {
  if (window.scrollY >= navHeight) {
    //scroll is greater than header height
    header.classList.add('scroll')
  } else {
    // less than header height
    header.classList.remove('scroll')
  }
})

// Testimonials carrousel slider swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLLREVEAL

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links`,

  { interval: 100 }
)

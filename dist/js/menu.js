//Referencing dom elements
const menuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#mobile-menu')

const links = document.querySelectorAll('.link')
const dropdowns = document.querySelectorAll('.dropdown')
const arrows = document.querySelectorAll('.arrow')

//Mobile Menu btn's Click event listener
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('!top-100p')

  dropdowns.forEach((dropdown, i) => {
    if (!dropdown.classList.contains('hidden')) {
      dropdown.classList.add('hidden')
      arrows[i].classList.remove('rotate-180')
    }
  })
})

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    dropdowns[i].classList.toggle('hidden')
    arrows[i].classList.toggle('rotate-180')
  })
})

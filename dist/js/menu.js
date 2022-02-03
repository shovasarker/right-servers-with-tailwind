//Referencing dom elements
const menuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#mobile-menu')

const link = document.querySelectorAll('.link')
const dropdown = document.querySelectorAll('.dropdown')
const arrow = document.querySelectorAll('.arrow')

//Mobile Menu btn's Click event listener
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('!top-100p')
  for (let i = 0; i < dropdown.length; i++) {
    if (!dropdown[i].classList.contains('hidden')) {
      dropdown[i].classList.add('hidden')
      arrow[i].classList.remove('rotate-180')
    }
  }
})

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', () => {
    dropdown[i].classList.toggle('hidden')
    arrow[i].classList.toggle('rotate-180')
  })
}

//Referencing dom elements
const menuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#mobile-menu')

const ourSolutionLink = document.querySelector('#our-solution-link')
const ourSolutionDropdown = document.querySelector('#our-solution-dropdown')
const ourSolutionArrow = document.querySelector('#our-solution-arrow')

const fullyManagedLink = document.querySelector('#fully-managed-link')
const fullyManagedDropdown = document.querySelector('#fully-managed-dropdown')
const fullyManagedArrow = document.querySelector('#fully-managed-arrow')

//Mobile Menu btn's Click event listener
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('!top-100p')
  if (!ourSolutionDropdown.classList.contains('hidden')) {
    ourSolutionDropdown.classList.add('hidden')
  }
  if (!fullyManagedDropdown.classList.contains('hidden')) {
    fullyManagedDropdown.classList.add('hidden')
  }
})

// Dropdown menu click event listener

ourSolutionLink.addEventListener('click', () => {
  ourSolutionDropdown.classList.toggle('hidden')
  ourSolutionArrow.classList.toggle('rotate-180')
})

fullyManagedLink.addEventListener('click', () => {
  fullyManagedDropdown.classList.toggle('hidden')
  fullyManagedArrow.classList.toggle('rotate-180')
})

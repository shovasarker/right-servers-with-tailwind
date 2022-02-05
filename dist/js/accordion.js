const accordionBtns = document.querySelectorAll('.accordion-btn')
const accordions = document.querySelectorAll('.accordion')

accordionBtns.forEach((accordionBtn, i) => {
  accordionBtn.addEventListener('click', () => {
    accordions.forEach((accordion, j) => {
      if (i == j) {
        accordion.classList.toggle('open')
      } else if (accordion.classList.contains('open')) {
        accordion.classList.remove('open')
      }
    })
  })
})

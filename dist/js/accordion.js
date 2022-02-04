const accordionBtn = document.querySelectorAll('.accordion-btn')
const accordion = document.querySelectorAll('.accordion')

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', () => {
    for (j = 0; j < accordion.length; j++) {
      if (i == j) {
        accordion[i].classList.toggle('open')
        continue
      }
      if (accordion[j].classList.contains('open')) {
        accordion[j].classList.remove('open')
      }
    }
  })
}

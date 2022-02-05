const selectors = document.querySelectorAll('.selector')
const label = document.querySelectorAll('.label')
const text = document.querySelectorAll('.text')
const closeBtns = document.querySelectorAll('.close-btn')

selectors.forEach((selector, i) => {
  selector.addEventListener('change', () => {
    if (label[i].classList.contains('hidden')) {
      label[i].classList.remove('hidden')
    }
    text[i].innerHTML = selector.value
  })
})

closeBtns.forEach((closeBtn, i) => {
  closeBtn.addEventListener('click', () => {
    label[i].classList.add('hidden')
    selectors[i].selectedIndex = '0'
  })
})

const selector = document.querySelectorAll('.selector')
const label = document.querySelectorAll('.label')
const text = document.querySelectorAll('.text')
const closeBtn = document.querySelectorAll('.close-btn')

for (let i = 0; i < selector.length; i++) {
  selector[i].addEventListener('change', () => {
    if (label[i].classList.contains('hidden')) {
      label[i].classList.remove('hidden')
    }
    text[i].innerHTML = selector[i].value
  })
}

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', () => {
    label[i].classList.add('hidden')
    selector[i].selectedIndex = '0'
  })
}

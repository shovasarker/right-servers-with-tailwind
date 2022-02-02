const locationSelect = document.querySelector('#location')
const locationLabel = document.querySelector('#location-label')
const locationSpan = document.querySelector('#location-span')
const locationCloseBtn = document.querySelector('#location-label-close')

const processorSelect = document.querySelector('#processor')
const processorLabel = document.querySelector('#processor-label')
const processorSpan = document.querySelector('#processor-span')
const processorCloseBtn = document.querySelector('#processor-label-close')

const coreSelect = document.querySelector('#core')
const coreLabel = document.querySelector('#core-label')
const coreSpan = document.querySelector('#core-span')
const coreCloseBtn = document.querySelector('#core-label-close')

const ramSelect = document.querySelector('#ram')
const ramLabel = document.querySelector('#ram-label')
const ramSpan = document.querySelector('#ram-span')
const ramCloseBtn = document.querySelector('#ram-label-close')

const storageSelect = document.querySelector('#storage')
const storageLabel = document.querySelector('#storage-label')
const storageSpan = document.querySelector('#storage-span')
const storageCloseBtn = document.querySelector('#storage-label-close')

const bandwidthSelect = document.querySelector('#bandwidth')
const bandwidthLabel = document.querySelector('#bandwidth-label')
const bandwidthSpan = document.querySelector('#bandwidth-span')
const bandwidthCloseBtn = document.querySelector('#bandwidth-label-close')

const priceSelect = document.querySelector('#price')
const priceLabel = document.querySelector('#price-label')
const priceSpan = document.querySelector('#price-span')
const priceCloseBtn = document.querySelector('#price-label-close')

// location selector group listeners
locationSelect.addEventListener('change', () => {
  if (locationLabel.classList.contains('hidden')) {
    locationLabel.classList.remove('hidden')
  }
  locationSpan.innerHTML = locationSelect.value
})
locationCloseBtn.addEventListener('click', () => {
  locationLabel.classList.add('hidden')
  locationSelect.selectedIndex = '0'
})

// processor selector group listeners
processorSelect.addEventListener('change', () => {
  if (processorLabel.classList.contains('hidden')) {
    processorLabel.classList.remove('hidden')
  }
  processorSpan.innerHTML = processorSelect.value
})
processorCloseBtn.addEventListener('click', () => {
  processorLabel.classList.add('hidden')
  processorSelect.selectedIndex = '0'
})

// core selector group listeners
coreSelect.addEventListener('change', () => {
  if (coreLabel.classList.contains('hidden')) {
    coreLabel.classList.remove('hidden')
  }
  coreSpan.innerHTML = coreSelect.value
})
coreCloseBtn.addEventListener('click', () => {
  coreLabel.classList.add('hidden')
  coreSelect.selectedIndex = '0'
})

// ram selector group listeners
ramSelect.addEventListener('change', () => {
  if (ramLabel.classList.contains('hidden')) {
    ramLabel.classList.remove('hidden')
  }
  ramSpan.innerHTML = ramSelect.value
})
ramCloseBtn.addEventListener('click', () => {
  ramLabel.classList.add('hidden')
  ramSelect.selectedIndex = '0'
})

// storage selector group listeners
storageSelect.addEventListener('change', () => {
  if (storageLabel.classList.contains('hidden')) {
    storageLabel.classList.remove('hidden')
  }
  storageSpan.innerHTML = storageSelect.value
})
storageCloseBtn.addEventListener('click', () => {
  storageLabel.classList.add('hidden')
  storageSelect.selectedIndex = '0'
})

// bandwidth selector group listeners
bandwidthSelect.addEventListener('change', () => {
  if (bandwidthLabel.classList.contains('hidden')) {
    bandwidthLabel.classList.remove('hidden')
  }
  bandwidthSpan.innerHTML = bandwidthSelect.value
})
bandwidthCloseBtn.addEventListener('click', () => {
  bandwidthLabel.classList.add('hidden')
  bandwidthSelect.selectedIndex = '0'
})

// price selector group listeners
priceSelect.addEventListener('change', () => {
  if (priceLabel.classList.contains('hidden')) {
    priceLabel.classList.remove('hidden')
  }
  priceSpan.innerHTML = priceSelect.value
})
priceCloseBtn.addEventListener('click', () => {
  priceLabel.classList.add('hidden')
  priceSelect.selectedIndex = '0'
})

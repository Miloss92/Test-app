//main.js file
const popUpWrapper = document.querySelector('.popup-wrapper')
const contactBtn = document.querySelector('.contact-btn')
const closeBtn = document.querySelector('.close-btn')
const cancelBtn = document.querySelector('.cancel-btn')
const sendBtn = document.querySelector('.send-btn')
const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('#nav')

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    popUpWrapper.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
  })
}
if (closeBtn && cancelBtn && sendBtn) {
  closeBtn.addEventListener('click', () => {
    popUpWrapper.classList.add('hidden')
    document.body.style.overflow = 'auto'
  })
  cancelBtn.addEventListener('click', () => {
    popUpWrapper.classList.add('hidden')
    document.body.style.overflow = 'auto'
  })
  sendBtn.addEventListener('click', () => {
    popUpWrapper.classList.add('hidden')
    document.body.style.overflow = 'auto'
  })
}
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navigation.classList.contains('xmd:hidden')
      ? navigation.classList.remove('xmd:hidden')
      : navigation.classList.add('xmd:hidden')
    // navigation.style.display == 'none' ? (navigation.style.display = 'none') : (navigation.style.display = 'block')
  })
}

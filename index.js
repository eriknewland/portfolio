// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')
headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Custom for Erik!

const headingPrimary = document.querySelector('.heading-primary');
const helloWorldLanguages = [
  'console.log("Hello, World!")', // English
  'console.log("Привет, мир!")', // Russian
  'console.log("你好，世界！")', // Chinese
  'console.log("Hola, mundo!")', // Spanish
  'console.log("Bonjour, le monde!")', // French
  'console.log("Hallo, Welt!")', // German
  'console.log("Ciao, mondo!")', // Italian
  'console.log("こんにちは、世界！")', // Japanese
  'console.log("안녕하세요, 세계!")', // Korean
  'console.log("Olá, mundo!")', // Portuguese
  'console.log("Hej, världen!")', // Swedish
  'console.log("Merhaba, dünya!")', // Turkish
  'console.log("Xin chào, thế giới!")', // Vietnamese
  'console.log("שלום, עולם!")', // Hebrew
  'console.log("हैलो, वर्ल्ड!")' // Hindi
];

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % helloWorldLanguages.length;
  headingPrimary.textContent = helloWorldLanguages[currentIndex];
}, 5000);


document.getElementById('fj-video').play();
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, { delay: 600, distance: '100px', interval: 100 })
sr.reveal(`.about__data, .join__image`, { origin: 'right' })
sr.reveal(`.about__image, .join__data`, { origin: 'left' })
sr.reveal(`.popular__card`, { interval: 200 })

function openPopup(blog) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    const img = document.getElementById('popup-img');
    const expanded = document.getElementById('popup-expanded');

    // Set content based on the blog selected
    if (blog === 'croatia') {
        title.textContent = 'Explore Croatia';
        img.src = 'assets/img/home-trees.jpg';
        description.textContent = 'Discover the stunning landscapes and rich history of Croatia...';
        expanded.innerHTML = 'Croatia is known for its beautiful coastline, medieval architecture, and rich culture...';
    } else if (blog === 'iceland') {
        title.textContent = 'Explore Iceland';
        img.src = 'assets/img/home-lake.jpg';
        description.textContent = 'Experience the breathtaking landscapes of Iceland...';
        expanded.innerHTML = 'Iceland offers unique natural wonders, including geysers, hot springs, and stunning glaciers...';
    } else if (blog === 'italy') {
        title.textContent = 'Explore Italy';
        img.src = 'assets/img/home-mountain.jpg';
        description.textContent = 'Italy is renowned for its art, history, and cuisine...';
        expanded.innerHTML = 'From the canals of Venice to the ruins of Rome, Italy is a treasure trove of cultural experiences...';
    } else if (blog === 'spain') {
        title.textContent = 'Explore Spain';
        img.src = 'assets/img/home-beach.jpg';
        description.textContent = 'Immerse yourself in the vibrant culture of Spain...';
        expanded.innerHTML = 'Spain is famous for its flamenco dancing, delicious tapas, and stunning architecture...';
    }

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function toggleDescription() {
    const expanded = document.getElementById('popup-expanded');
    expanded.style.display = expanded.style.display === 'none' ? 'block' : 'none';
}

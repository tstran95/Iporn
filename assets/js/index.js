// NAVIGATION
    // Open nav
const openNav = document.querySelector('.nav__hamburger');
const closeNav = document.querySelector('.close__toggle');
const menu = document.querySelector('.nav__menu');
const navContainer = document.getElementById("nav__menu");

openNav.addEventListener('click' , ()=> {
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = "0";
    navContainer.style.width = "30rem"    
})

closeNav.addEventListener('click' , ()=> {
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = "-30rem";
    navContainer.style.width = "30rem"    
})

// AOS
AOS.init();
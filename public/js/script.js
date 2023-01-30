const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
   
});

window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// scroll
window.onscroll = function( ){
    const navbar= document.querySelector('nav');
    const fixedNav = navbar.offsetTop;

    if(window.pageYOffset > fixedNav){
        navbar.classList.add('nav-scroll');
    }
    else{
        navbar.classList.remove('nav-scroll');
    }
};

// animation aos
AOS.init();
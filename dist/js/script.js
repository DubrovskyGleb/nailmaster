"use strict"

window.onload = function () {
    const hero = document.querySelector('.hero');
    const heroContainer = document.querySelector('.hero__container');
    const heroTitle = document.querySelector('.hero__title');

    heroHeight();

    window.onresize = function () {
        heroHeight();
    }

    function heroHeight() {
        if (heroContainer.offsetHeight > window.innerHeight) {
            hero.style.height = 'auto';
        }

        if (heroContainer.offsetHeight <= window.innerHeight) {
            hero.style.height = '100vh';
        }
        console.log(heroContainer.offsetHeight);
        console.log(window.innerHeight);
    }

}

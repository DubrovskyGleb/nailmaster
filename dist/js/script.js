"use strict"

window.onload = function () {
    const hero = document.querySelector('.hero');
    const heroContainer = document.querySelector('.hero__container');
    const header = document.querySelector('.header');
    const mainMenu = document.querySelector('nav');
    const headerContacts = document.querySelector('.header__contacts');
    const burgerLabel = document.querySelector('label[for="burger"]');
    const burgerInput = document.querySelector('#burger');
    const accordion = document.querySelector('.accordion');
    const accordionHeaders = accordion.querySelectorAll('.accordion-item__header');
    const accordionItems = accordion.querySelectorAll('.accordion-item');
    const cleanImages = document.querySelectorAll('.clean__image');

    let windowWidth = window.innerWidth;
    let wrapMenu = false;
    let positionStart = window.pageYOffset;

    header.classList.add('_active');

    heroHeight();
    mainMenuPosition();
    backgroundHeader(window.pageYOffset);

    window.onresize = function () {
        windowWidth = window.innerWidth;

        heroHeight();
        mainMenuPosition()
    }

    function heroHeight() {
        if (heroContainer.offsetHeight >= window.innerHeight) {
            hero.style.height = 'auto';
        }

        if (heroContainer.offsetHeight < window.innerHeight) {
            hero.style.height = '100vh';
        }
    }

    burgerLabel.onclick = () => {
        document.body.classList.toggle('_lock');
        mainMenu.classList.toggle('_active');
    }

    document.addEventListener('click', function (e) {
        if (mainMenu.classList.contains('_active') && !e.target.closest('.header__burger')) {
            closeMenu(e);
        }
    });

    function closeMenu(e) {
        if (e.target.closest('.header-menu__item') || !e.target.closest('nav')) {
            burgerInput.checked = false;
            document.body.classList.remove('_lock');
            mainMenu.classList.remove('_active');
        }
    }

    function mainMenuPosition() {
        if (windowWidth <= 980 && !wrapMenu) {
            header.after(mainMenu);
            wrapMenu = true;
        }
        if (windowWidth > 980 && wrapMenu) {
            headerContacts.before(mainMenu);
            wrapMenu = false;
        }
    }

    window.addEventListener('scroll', () => {
        let positionCurrent = window.pageYOffset;

        backgroundHeader(positionCurrent);

        positionCurrent > positionStart ? header.classList.remove('_active') : header.classList.add('_active');
        positionStart = positionCurrent;
    });

    function backgroundHeader(positionCurrent) {
        (positionCurrent !== 0) ? header.style.backgroundColor = '#1B1B1B' : header.style.backgroundColor = 'inherit';
    }

    new Swiper('.portfolio-slider', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.slider-pagination',
            clickable: true,
        },
        breakpoints: {
            1100: {
                slidesPerView: 2,
            }
        },
        grabCursor: true,
    });

    accordion.addEventListener('click', accordionAnim);

    function accordionAnim(e) {

        if (e.target.closest('.accordion-item__header')) {
            for (let index = 0; index < accordionItems.length; index++) {
                const currentItem = accordionItems[index];
                currentItem.classList.remove('_active');
                currentItem.querySelector('.accordion-item__content').classList.add('_noScroll');
            }
            const accordionItem = e.target.closest('.accordion-item__header').parentNode;
            accordionItem.classList.add('_active');
            setTimeout(() => {
                accordionItem.querySelector('.accordion-item__content').classList.remove('_noScroll');
            }, 600);
        }
    }

    document.addEventListener('click', (e) => {
        scrollToElement(e);
    });

    function scrollToElement(e) {
        if (e.target.closest('.scrollTo')) {
            e.preventDefault();

            const currentLink = e.target.closest('.scrollTo');
            const sectionId = currentLink.getAttribute('href');
            const currentSection = document.querySelector(sectionId);

            currentSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
}

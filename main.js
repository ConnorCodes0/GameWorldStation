// hamburger menu stuff
const hamburgerBtn = document.querySelector('.hamburger');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
    const hamburgerMenu = document.querySelector('.hamburger-nav');

    if (!hamburgerOpen) {
        //menu open
        hamburgerMenu.style.left = '0';
        hamburgerOpen = true;

        //stop scrolling in background
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;

    } else {
        //menu closed
        hamburgerMenu.style.left = '-100%';
        hamburgerOpen = false;

        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
})

//dropdown stuff 
const dropdownBtn = document.querySelector('.dropdown-btn');

let dropdownOpen = false;

dropdownBtn.addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.dropdown');

    if (!dropdownOpen) {
        dropdownMenu.style.display = 'block';
        dropdownOpen = true;
        
    } else {
        dropdownMenu.style.display = 'none';
        dropdownOpen = false;
    }
})
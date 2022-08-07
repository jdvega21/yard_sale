const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnHambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Listener const funtions
const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle("inactive");
};
const toggleMobilepMenu = () => {
   mobileMenu.classList.toggle("inactive");
};

/*Adding listeners above to HTML content*/
emailMenu.addEventListener('click', toggleDesktopMenu);
btnHambMenu.addEventListener('click', toggleMobilepMenu);


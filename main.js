const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//Listener const funtions
const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle("inactive");
  };
  

emailMenu.addEventListener('click', toggleDesktopMenu);


const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnHambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailView = document.querySelector('.product-detail');

//Listener const funtions
const toggleDesktopMenu = () => {
    const isProductDetailViewClosed = productDetailView.classList.contains('inactive');

    if (!isProductDetailViewClosed){
        productDetailView.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
};
const toggleMobilepMenu = () => {
    const isProductDetailViewClosed = productDetailView.classList.contains('inactive');

    if (!isProductDetailViewClosed){
        productDetailView.classList.add('inactive');
    }
    mobileMenu.classList.toggle("inactive");
};
const toggleProductDetailView = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    productDetailView.classList.toggle("inactive");

};

/*Adding listeners above to HTML content*/
emailMenu.addEventListener('click', toggleDesktopMenu);
btnHambMenu.addEventListener('click', toggleMobilepMenu);
btnShoppingCart.addEventListener('click', toggleProductDetailView);


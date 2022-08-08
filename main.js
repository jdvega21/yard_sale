const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnHambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const btnCloseProductDetail = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
//Default Items
const productList = [];
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: '500,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'T-shirt',
    price: '10,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

       
//Listener const funtions
const toggleDesktopMenu = () => {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
};
const toggleMobilepMenu = () => {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle("inactive");
};
const toggleProductDetailView = () => {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle("inactive");

};

const openProductDetailAside = () => {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
};
const closeProductDetailView = () => {
    productDetailContainer.classList.add('inactive');
};



function renderProducts(arr){
    for(product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoChild = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + " " + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoChild.appendChild(productPrice);
        productInfoChild.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(addToCartImg);
    
        productInfo.appendChild(productInfoChild);
        productInfo.appendChild(productInfoFigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
    }
    
}

/*Adding listeners above to HTML content*/
emailMenu.addEventListener('click', toggleDesktopMenu);
btnHambMenu.addEventListener('click', toggleMobilepMenu);
btnShoppingCart.addEventListener('click', toggleProductDetailView);
btnCloseProductDetail.addEventListener('click', closeProductDetailView);

//Initializing
renderProducts(productList);


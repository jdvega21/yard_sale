const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnHambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailView = document.querySelector('.product-detail');
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

/*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>

        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
    
</div> */
       
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

function renderProducts(arr){
    for(product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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

//Initializing
renderProducts(productList);


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoopingCartContainer = document.querySelector('#shoopingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //Quita o pone la clase inactive dependiendo si ya la tiene o no
}

function toggleMobileMenu(){
    const isAsideClosed = shoopingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoopingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');  

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');  

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoopingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoopingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Casco Bike',
  price: 50,
  image: 'https://images.pexels.com/photos/5687424/pexels-photo-5687424.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
  name: 'Pedales Bike',
  price: 20,
  image: 'https://images.pexels.com/photos/9741352/pexels-photo-9741352.jpeg?auto=compress&cs=tinysrgb&w=400',
});

productList.push({
    name: 'Sillin Bike',
    price: 40,
    image: 'https://images.pexels.com/photos/6037718/pexels-photo-6037718.jpeg?auto=compress&cs=tinysrgb&w=400',
  });
  productList.push({
    name: 'Cadena Bike',
    price: 10,
    image: 'https://images.pexels.com/photos/296848/pexels-photo-296848.jpeg?auto=compress&cs=tinysrgb&w=400',
  });
  productList.push({
    name: 'Canasta Bike',
    price: 60,
    image: 'https://images.pexels.com/photos/4916682/pexels-photo-4916682.jpeg?auto=compress&cs=tinysrgb&w=400',
  });
  productList.push({
    name: 'Bike Kids',
    price: 200,
    image: 'https://images.pexels.com/photos/11355176/pexels-photo-11355176.jpeg?auto=compress&cs=tinysrgb&w=400',
  });

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
const cartButton = document.querySelectorAll('.product-item .add_to_cart button');

function cart() {
    cartButton.forEach(el => {
        el.textContent = 'купить';
    }) 
}

export default cart;
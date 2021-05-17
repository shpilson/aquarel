const cartButton = document.querySelectorAll('.product-item .add_to_cart .button span');

function cart() {
    cartButton.forEach(el => {
        el.textContent = `В корзину`;
    }) 
}

export default cart;
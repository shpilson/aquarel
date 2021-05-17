const cartButton = document.querySelectorAll('.product-item .add_to_cart button');

function cart() {
    cartButton.forEach(el => {
        el.textContent = `<span>В корзину</span>`;
    }) 
}

export default cart;
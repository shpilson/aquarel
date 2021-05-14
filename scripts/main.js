
import pages from './config/conditions.js' // Константы страниц
import catalog from './catalog/catalog.js'; // Категория товаров
import cart from './cart/cart.js'; // Смена кнопки "Купить" на "В корзину"
import offer from './offer/offer.js'; // Форма заполнения заявки

if (pages.main) {
    catalog();
    cart();
    offer();
  }

import pages from './config/conditions.js' // Константы страниц
import catalog from './catalog/catalog.js'; // Категория товаров
import cart from './cart/cart.js'; // Смена кнопки "Купить" на "В корзину"
import map from './map/map.js'; // Карта и контакты
import send from './send/send.js'; // Форма обратной связи
import headerIcon from './widgets/header.js'; // Виджеты в шапке

if (pages.main) {
    catalog();
    cart();
    map();
    send();
    headerIcon();
  }
const widgetSelector = document.querySelector("#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid > div.header_widgets");

function header() {
widgetSelector.insertAdjacentHTML('afterbegin',`
    <div class="header_test">
        <a class="d-none d-lg-block" href="https://store108758.sellavi.com/login/" role="link">Авторизация</a>
        <a class="d-none d-sm-block d-lg-none" href="https://store108758.sellavi.com/login/" role="link"><i class="far fa-user"></i></a>
    </div>
`)
}

export default header;
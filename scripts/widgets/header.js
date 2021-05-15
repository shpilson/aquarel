const widgetSelector = document.querySelector(".header > div.header-wrapper > div.container-fluid > div.header_widgets")

function headerIcon() {
widgetSelector.insertAdjacentHTML('afterbegin',`
    <div class="header_login">
        <a class="d-none d-sm-block d-lg-none" href="https://store108758.sellavi.com/#" role="link">
        <i class="far fa-heart"></i>
        </a>
    </div>`
)}

export default headerIcon;
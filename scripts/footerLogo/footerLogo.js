const footerSelector = document.querySelector(".footer .footer-meta .container .row")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',
    `<div class="col-sm-6">
        <p>TEST</p>
    </div>`
)}
    
export default footerLogo;
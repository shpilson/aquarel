const footerSelector = document.querySelector(".footer .footer-meta .container .row")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',
    `<div class="col-sm-6">
        <div class="copyright">
        <p>TEST TEST</p>
        </div>
    </div>`
)}
    
export default footerLogo;
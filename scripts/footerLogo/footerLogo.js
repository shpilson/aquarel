const footerSelector = document.querySelector("body > div > footer > div.footer-widgets > div.container > div > div")

function footerLogo() {
    footerSelector.insertAdjacentHTML('beforeend',`
    <div class="col-md-3">
    <div class="footer_logo">
    
    </div>
    </div>`
    )}
    
export default footerLogo;
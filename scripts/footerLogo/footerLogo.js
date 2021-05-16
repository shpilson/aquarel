const footerSelector = document.querySelector("body .footer .footer-meta .copyright")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',`
        <a href="http://ru.sellavi.com/" rel="nofollow" target="_blank" id="sellavi_new_logo" role="link">
            <img data-src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg" alt="" class="img-fluid" src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg">
        </a>`
    )}
    
export default footerLogo;
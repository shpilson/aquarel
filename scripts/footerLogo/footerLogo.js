const footerSelector = document.querySelector(".footer .footer-meta .container .row")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin', 
    `<div class="col-sm-6">
        <div class="copyright">
            <a href="http://ru.sellavi.com/" rel="nofollow" target="_blank" id="sellavi_new_logo" role="link">
                <img data-src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg" alt="" class="img-fluid" src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg">
            </a>
        </div>
    </div>`
)}
    
export default footerLogo;
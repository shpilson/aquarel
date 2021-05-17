const footerSelector = document.querySelector(".footer .footer-meta .container .row")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin', 
    `<div class="col-sm-6">
            <div class="copyright">
                <a href="http://ru.sellavi.com/" rel="nofollow" target="_blank" id="sellavi_new_logo" role="link">
                    <img data-src="https://shpilson.github.io/aquarel/styles/images/logo_vector.svg" alt="" class="img-fluid" src="https://shpilson.github.io/aquarel/styles/images/logo_vector.svg">
                </a>
            </div>
    </div>`
)}
    
export default footerLogo;
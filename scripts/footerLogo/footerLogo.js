const footerSelector = document.querySelector("#home > div > footer > div.footer-meta > div > div > div")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',`
    <div class="copyright">
        <a href="http://ru.sellavi.com/" rel="nofollow" target="_blank" id="sellavi_logo" role="link">
            <img data-src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg" alt="" class="img-fluid" src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg">
        </a>
    </div>`
    )}
    
export default footerLogo;
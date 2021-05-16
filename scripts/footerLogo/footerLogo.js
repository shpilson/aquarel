const footerSelector = document.querySelector("#home > div > footer > div.footer-meta > div > div")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',`
    <div class="col-sm-6">
    <div class="copyright">
    <a href="http://ru.sellavi.com/" rel="nofollow" target="_blank" id="sellavi_new_logo" role="link">
    <img data-src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg" alt="" class="img-fluid" src="https://raw.githubusercontent.com/shpilson/aquarel/main/styles/images/logo_sellavi.jpeg">
</a>
    </div>
</div>`
    )}
    
export default footerLogo;
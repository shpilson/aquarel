const socialIconSelector = document.querySelector(".footer .footer-widgets .container .row");

function footerSocial() {
    socialIconSelector.insertAdjacentHTML('beforeend', 
    `<div class="col-md-3">
        <h4 class="widget-title">Мы в соцсетях</h4>
            <ul class="social-icons">
            <li>
                    <a href="instagram.com/aquarel" target="_blank" class="instagram" data-gtm_label="instagram" title="instagram_title" role="link">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
         </ul>
    </div>`
)}
    
export default footerSocial;
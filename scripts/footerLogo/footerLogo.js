const footerSelector = document.querySelector(".footer")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',
    `<div class="col-sm-6">
        <p>TEST</p>
    </div>`
)}
    
export default footerLogo;
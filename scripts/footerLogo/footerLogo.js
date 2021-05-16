const footerSelector = document.querySelector(".footer")

function footerLogo() {
    footerSelector.insertAdjacentHTML('afterbegin',
    `
        <p>TEST</p>
    `
)}
    
export default footerLogo;
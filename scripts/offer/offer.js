const offerMain = document.querySelector(".custom_section")

function offer() {
offerMain.insertAdjacentHTML('afterbegin', `
<div class="container">

<div class="contact-with-map row">
<img src="https://shpilson.github.io/aquarel/styles/images/offer.jpeg"></img>
</div>

</div>`)
}

export default offer;
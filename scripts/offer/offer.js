const offerMain = document.querySelector(".custom_section")

function offer() {
offerMain.insertAdjacentHTML('afterbegin', `
<div class="container">

<div class="contact-with-map row">
<h2 style="position: absolute;margin: 95px auto auto 80px;font-family: Playfair Display;font-style: normal;font-weight: bold;font-size: 37px;line-height: 96%;
/* identical to box height, or 36px */color: #4B373D;">Остались вопросы?</h2>
<img src="https://shpilson.github.io/aquarel/styles/images/offer.jpeg" style="border: 3px solid rgba(142, 142, 142, 0.46);">
</div>

</div>`)
}

export default offer;
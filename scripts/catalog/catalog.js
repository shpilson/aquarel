const catalogue = document.querySelector("#home > div > div.content-area > section.page-section.homefeatured_category > div")

function catalog() {
catalogue.insertAdjacentHTML('afterbegin', `<h2 class="section-title mb-4 mt-4"><span> Категории </span></h2>`)
}

export default catalog;
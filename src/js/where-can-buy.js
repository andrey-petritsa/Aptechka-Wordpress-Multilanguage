export default function initWhereCanBuy() {
    const links = document.querySelectorAll(`.fade-out-tab-menu__link`)
    if (links) {
        links.forEach((link) => {
            link.addEventListener(`click`, function (e) {
            	e.preventDefault()
                // eslint-disable-next-line no-shadow
                links.forEach((link) => {
                    link.classList.remove(`fade-out-tab-menu__link_clicked`)
                })
                e.target.classList.toggle(`fade-out-tab-menu__link_clicked`)
                const currentProductToShow = e.target.dataset.product

                const products = document.querySelectorAll(`.fade-out-tab__section`)
                products.forEach((product) => {
                    product.classList.remove(`fade-out-tab__section_active`)
                })
                products.forEach((product) => {
                    if (product.dataset.product === currentProductToShow) {
                        product.classList.toggle(`fade-out-tab__section_active`)
                    }
                })
            })
        })
    }
}

export default function initWhereCanBuy() {
    const links = document.querySelectorAll(`.where-can-buy-menu__link`)
    if (links) {
        links.forEach((link) => {
            link.addEventListener(`click`, function () {
                // eslint-disable-next-line no-shadow
                links.forEach((link) => {
                    link.classList.remove(`where-can-buy-menu__link_clicked`)
                })
                this.classList.toggle(`where-can-buy-menu__link_clicked`)
                const currentProductToShow = this.dataset.product

                const products = document.querySelectorAll(`.where-can-buy__product`)
                products.forEach((product) => {
                    product.classList.remove(`where-can-buy__product_active`)
                })
                products.forEach((product) => {
                    if (product.dataset.product === currentProductToShow) {
                        product.classList.toggle(`where-can-buy__product_active`)
                    }
                })
            })
        })
    }
}

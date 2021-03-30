export default function init_where_can_buy() {
    let links = document.querySelectorAll('.where-can-buy-menu__link')
    if(links) {
        links.forEach(link => {
            link.addEventListener('click', function() {
                links.forEach(link => {
                    link.classList.remove('where-can-buy-menu__link_clicked')
                });
                this.classList.toggle('where-can-buy-menu__link_clicked')
                let current_product_to_show = this.dataset.product;

                let products = document.querySelectorAll('.where-can-buy__product')
                products.forEach(product => {
                    product.classList.remove('where-can-buy__product_active')
                });
                products.forEach(product => {
                    if(product.dataset.product == current_product_to_show) {
                        product.classList.toggle('where-can-buy__product_active')
                    }
                });
            })
        });
    }  
}

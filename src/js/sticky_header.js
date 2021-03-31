export default function initStickyHeader() {
    const header = document.querySelector(`.header`)
    const headerHeight = header.offsetHeight
    const stickyHeaderShowOffset = 0
    window.addEventListener(`scroll`, function () {
        if (window.pageYOffset >= headerHeight + stickyHeaderShowOffset) {
            header.classList.add(`header_sticky`)
        }
        if (window.pageYOffset < headerHeight + stickyHeaderShowOffset) {
            header.classList.remove(`header_sticky`)
        }
    })
}



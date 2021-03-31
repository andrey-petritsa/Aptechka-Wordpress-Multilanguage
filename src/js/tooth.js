function resetSelects(selects) {
    selects.forEach((select) => {
        select.classList.remove(`tooth__select_active`)
    })
}

function resetToothImages(toothImages) {
    toothImages.forEach((toothImage) => {
        toothImage.classList.remove(`tooth__image-column_active`)
    })
}


export default function initTooth() {
    const selects = document.querySelectorAll(`.tooth__select`)
    const toothImages = document.querySelectorAll(`.tooth__image-column`)
    if (selects && toothImages) {

        selects.forEach((select) => {
            select.addEventListener(`click`, function (event) {
                event.preventDefault()
                resetSelects(selects)
                resetToothImages(toothImages)
                this.classList.toggle(`tooth__select_active`)
                const i = Array.prototype.indexOf.call(selects, this)
                toothImages[i].classList.toggle(`tooth__image-column_active`)
            })
        })
    }
}



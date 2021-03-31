export default function initLanguageMenu(menuActionClass) {
    document.querySelector(menuActionClass).addEventListener(`click`, function (event) {
        event.preventDefault()
        this.classList.toggle(`active`)
    })
}

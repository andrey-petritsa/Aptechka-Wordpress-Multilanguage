export default function init_language_menu(menu_action_class) {
    document.querySelector(menu_action_class).addEventListener(`click`, function (event) {
        event.preventDefault()
        this.classList.toggle(`active`)
    })
}
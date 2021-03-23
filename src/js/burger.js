export default function init_burger(burger_class, header_menu_class) {
    const burger = document.querySelector(burger_class)
    const body = document.querySelector(`body`)
    const menu = document.querySelector(header_menu_class)
    burger.addEventListener(`click`, function () {
        burger.classList.toggle(`burger_active`)
        body.classList.toggle(`lock`)
        menu.classList.toggle(`menu_active`)
    })
}
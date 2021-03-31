export default function initBurger(burgerClass, headerMenuClass) {
    const burger = document.querySelector(burgerClass)
    const body = document.querySelector(`body`)
    const menu = document.querySelector(headerMenuClass)
    burger.addEventListener(`click`, function () {
        burger.classList.toggle(`burger_active`)
        body.classList.toggle(`lock`)
        menu.classList.toggle(`menu_active`)
    })
}

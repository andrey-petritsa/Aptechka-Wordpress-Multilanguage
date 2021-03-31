import $ from '../local_modules/jquery/dist/jquery.min'
import initSwiper from './swiper'
import initDatepicker from './datepicker'
import initBurger from './burger'
import initLanguageMenu from './language-menu'
import initAos from './aos'
import initStickyHeader from './sticky_header'
import initTooth from "./tooth"
import initPopupHowToUse from "./popup_how_to_use"
import initWhereCanBuy from "./where-can-buy"


$(document).ready(() => {
    initStickyHeader()
    initSwiper(`.swiper-container`)
    initDatepicker(`.fullscreen-form__client-date`)
    initBurger(`.burger`, `.header__menu`)
    initLanguageMenu(`.menu__action`)
    initAos()
    initTooth()
    initPopupHowToUse()
    initWhereCanBuy()
})

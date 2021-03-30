import $ from '../local_modules/jquery/dist/jquery.min'
import init_swiper from './swiper'
import init_datepicker from './datepicker'
import init_burger from './burger'
import init_language_menu from './language-menu'
import init_aos from './aos'
import init_sticky_header from './sticky_header'
import init_tooth from "./tooth"
import init_popup_how_to_use from "./popup_how_to_use"
import init_where_can_buy from "./where-can-buy"






$(document).ready(() => {
    init_sticky_header()
    init_swiper('.swiper-container')
    init_datepicker(`#form-subscribe__client-date`)
    init_burger('.burger', `.header__menu`)
    init_language_menu(`.menu__action`)
    init_aos()
    init_tooth()
    init_popup_how_to_use()
    init_where_can_buy()
})

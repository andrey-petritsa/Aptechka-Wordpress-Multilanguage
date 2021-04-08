import $ from '../local_modules/jquery/dist/jquery.min'
import initDatepicker from './datepicker'
import initMap from "./map"
import initSliderSuperMom from './slider-super-mom'
import initBurger from './burger'
import initLanguageMenu from './language-menu'
import initAos from './aos'
import initStickyHeader from './sticky_header'
import initTooth from "./tooth"
import initPopupHowToUse from "./popup_how_to_use"
import initTabMenu from "./tab-menu"
import initParallax from "./parallax"


$(document).ready(() => {
    initDatepicker()
    initParallax()
    initMap()
    initStickyHeader()
    initSliderSuperMom()
    initBurger(`.burger`, `.header__menu`)
    initLanguageMenu(`.menu__action`)
    initAos()
    initTooth()
    initPopupHowToUse()
    initTabMenu()
})

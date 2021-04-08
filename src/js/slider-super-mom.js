import Swiper from 'swiper/bundle'
export default function initSliderSuperMom() {

    const swiper = new Swiper(`.slider-super-mom__container`, {
        autoHeight: true,
        effect: `fade`,
        loop: true,
        navigation: {
            nextEl: `.slider-super-mom__button_next`,
            prevEl: `.slider-super-mom__button_prev`,
        },
        speed: 400,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })
    return swiper
}



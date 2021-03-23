import Swiper from 'swiper/bundle'
export default function init_swiper(swiper_container) {
    const swiper = new Swiper(swiper_container, {
        autoHeight: true,
        effect: `fade`,
        loop: true,
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
        },
        speed: 400,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })
    return swiper
}



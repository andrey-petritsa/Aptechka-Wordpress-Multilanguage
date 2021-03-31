import Swiper from 'swiper/bundle'
export default function initSwiper(swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
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



export default function initMap() {
    ymaps.ready(init)
}


function init() {
    const myMap = new ymaps.Map(`map`, {
        center: [55.742499, 37.527867],
        zoom: 19
    })
    myMap.behaviors.disable(`scrollZoom`)
    const placeMark = new ymaps.Placemark([55.742499, 37.527867])
    myMap.geoObjects.add(placeMark)
}

import Aos from "aos";

export default function init_sticky_header() {
    let header = document.querySelector('.header')
    let header_height = header.offsetHeight;
    let sticky_header_show_offset = 0;
    window.addEventListener('scroll', function() {
        if(pageYOffset >= header_height+sticky_header_show_offset) {
            header.classList.add("header_sticky");
        }
        if(pageYOffset < header_height+sticky_header_show_offset) {
            header.classList.remove("header_sticky");
        }
    });
}



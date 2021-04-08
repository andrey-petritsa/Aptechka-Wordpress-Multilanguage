import Parallax from 'parallax-js'


export default function initParallax() {
    const scenes = document.querySelectorAll(`.parallax-scene`)
    if (scenes) {
    	const options = {
            //
        }
        scenes.forEach((parallaxScene) => {
            // eslint-disable-next-line no-unused-vars
            const parallaxInstance = new Parallax(parallaxScene, options)
        })
    }

}


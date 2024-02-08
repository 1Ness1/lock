import anime from 'animejs/lib/anime.es.js';
export const fromTop = ({
    domElement,
    delay = 0,
    duration = 1000
}) => {
    anime({
        targets: domElement,
        translateY: [-100,0],
        opacity: [0,1],
        delay: delay,
        duration: duration,
        easing: 'easeOutQuad'
    });
}

export const fromBottom = ({
    domElement,
    delay = 0,
    duration = 1000
}) => {
    anime({
        targets: domElement,
        translateY: [100,0],
        opacity: [0,1],
        delay: delay,
        duration: duration,
        easing: 'easeOutQuad'
    });
} 
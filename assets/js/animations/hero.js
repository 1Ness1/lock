import {fromTop, fromBottom} from './animations';

export const animateHero = () => {
    const hero = document.querySelector('.hero');
    const subtitle = hero.querySelector(".hero__subtitle");
    const title = hero.querySelector(".hero__title");
    const description = hero.querySelector(".hero__description"); 
    const button = hero.querySelector(".hero__call"); 

    fromTop({
        domElement: subtitle,
    });

    fromTop({
        domElement: title,
        delay: 200
    });

    fromTop({
        domElement: description,
        delay: 400
    });

    // fromBottom({
    //     domElement: button,
    //     delay: 350
    // })
}


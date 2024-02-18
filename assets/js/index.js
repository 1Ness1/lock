import '../scss/root.scss';
import { SendToTelegramBot } from './modules/telegram';
import {observer} from './animations/observer';
import { burgerToggle } from './animations/burger';

const overflowSet = () => {
    document.body.classList.add("overflow");
}

const overflowDisabled = () => {
    document.body.classList.remove("overflow");
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(`[data-form]`);
    const telegram = new SendToTelegramBot(form);
    telegram.init();

    const animatedElements = document.querySelectorAll(`[data-animation]`);
    animatedElements.forEach(element => {
        observer().observe(element);
    })

    burgerToggle();



    const call = document.querySelectorAll(`[data-call]`);
    const modal = document.querySelector(".modal");

    call.forEach(element => {
        element.addEventListener("click", () => {
            modal.classList.add('open');
            overflowSet();
        })
    })

    const modalClose = document.querySelectorAll(`[data-modal="close"]`);

    modalClose.forEach(element => {
        element.addEventListener('click', function(event) {
            if(event.target.dataset.modal === "close") {
                modal.classList.remove("open")
                overflowDisabled();
            }
        })
    })
})
import '../scss/root.scss';
import { SendToTelegramBot } from './modules/telegram';
import {observer} from './animations/observer';
import { burgerToggle } from './animations/burger';
import IMask from 'imask';
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

    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {
            //if esc key was not pressed in combination with ctrl or alt or shift
            const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
            if (isNotCombinedKey) {
                modal.classList.remove("open")
                overflowDisabled();
            }
        }
    });

    const tel = modal.querySelector(`[data-phone]`);
    const maskOptions = {
        mask: '+{38}(000)000-00-00',
        min: 0,
        max: 100
    };

    IMask(tel, maskOptions);
})
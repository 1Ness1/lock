import '../scss/root.scss';

import { SendToTelegramBot } from './modules/telegram';
import { observer } from './animations/observer';
import { burgerToggle } from './animations/burger';
import { overflowSet, overflowDisabled, initializeBody } from "./utils/utils";
import IMask from 'imask';
import { initializeTelephoneMask } from "./modules/telephone";

document.addEventListener("DOMContentLoaded", () => {
    initializeBody();

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
    modal.classList.add("transition");

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

    initializeTelephoneMask(modal);
})
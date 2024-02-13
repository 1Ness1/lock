import '../scss/root.scss';
import { SendToTelegramBot } from './modules/telegram';
import {observer} from './animations/observer';
import { burgerToggle } from './animations/burger';
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
        })
    })
})
import '../scss/root.scss';
import { SendToTelegramBot } from './modules/telegram';
import {animateHero} from './animations/hero';
import {benefits} from './animations/benefits';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(`[data-form]`);
    const telegram = new SendToTelegramBot(form);
    telegram.init();

    animateHero();
    benefits();
})
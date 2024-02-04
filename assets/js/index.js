import '../scss/root.scss';
import { SendToTelegramBot } from './modules/telegram';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(`[data-form]`);
    const telegram = new SendToTelegramBot(form);
    telegram.init();
})
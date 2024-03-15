import { TELEGRAM_TOKEN, CHAT_ID } from "../utils/envrionments";
export class SendToTelegramBot {
    constructor(form) {
        this.form = form;
    }
    
    init = () => {
        const request = new XMLHttpRequest();

        request.addEventListener("load", () => {
            this.form.closest(".modal").classList.remove("open");
        })

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const result = new URLSearchParams(new FormData(this.form)).toString().replaceAll("&", "%0A").replaceAll("=", "%0A");

            const URL = `https://api.telegram.org/bot6339443961:AAFBh-XLXr_GIwLvwa2ob3UIkk28z4xSmvY/sendMessage?chat_id=-4170847942&text=${result}&parse_mode=markdown`;
        
            request.open("GET", URL, true);
            request.send();

            this.form.reset();
            document.body.classList.remove("overflow");
        });
    }
}
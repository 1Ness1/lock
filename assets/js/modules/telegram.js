import { TELEGRAM_TOKEN, CHAT_ID } from "../utils/envrionments";
export class SendToTelegramBot {
    constructor(form) {
        this.form = form;
    }
    
    init = () => {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const result = new URLSearchParams(new FormData(this.form)).toString().replaceAll("&", "%0A").replaceAll("=", "%0A");
            const request = new XMLHttpRequest();
            const URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${result}&parse_mode=markdown`;
        
            request.open("GET", URL, true);
            request.send();
        });
    }

};
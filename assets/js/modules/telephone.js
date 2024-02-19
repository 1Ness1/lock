import IMask from "imask";

export const initializeTelephoneMask = (modal) => {
    const tel = modal.querySelector(`[data-phone]`);
    const maskOptions = {
        mask: '+{38}(000)-000-00-00',
        min: 0,
        max: 100
    };

    IMask(tel, maskOptions);
}


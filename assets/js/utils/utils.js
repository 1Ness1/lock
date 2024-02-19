export const overflowSet = () => {
    document.body.classList.add("overflow");
}

export const overflowDisabled = () => {
    document.body.classList.remove("overflow");
}

export const initializeBody = () => {
    document.body.removeAttribute("style");
}
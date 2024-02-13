export const burgerToggle = () => {
    const burger = document.querySelector(`[data-menu]`);
    const menu = document.querySelector('.header__list');

    burger.addEventListener('click', function(event) {
        event.preventDefault();
        if(this.classList.contains("open")) {
            this.classList.remove("open");
            menu.classList.remove("open");
            document.body.style.overflow = "auto";    
            return;
        }

        
        document.body.style.overflow = "hidden";
        this.classList.add("open");
        menu.classList.add('open');
    })
}
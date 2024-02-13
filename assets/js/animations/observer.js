import { fromTop } from "./animations"
export const observer = () => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                fromTop({
                    domElement: entry.target,
                    delay: entry.target.dataset.delay,
                });

                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5, rootMargin: "150px" });
}
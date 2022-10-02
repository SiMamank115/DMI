export function changeTextBoxMenu() {
    window.changeTextBoxMenu = (order) => {
        let target = document.querySelectorAll(".text-box-menu");
        if (textBoxMenuOnDisplay == order) return;
        target = Array.from(target);
        target[textBoxMenuOnDisplay].classList.add("opacity-0");
        setTimeout(() => {
            target[textBoxMenuOnDisplay].classList.add("d-none");
            textBoxMenuOnDisplay = order;
            target[order].classList.remove("d-none");
            setTimeout(() => {
                target[order].classList.remove("opacity-0");
            }, 50);
        }, 250);
    };
}
export class Slide {
    constructor(el = document.querySelector("")) {
        this.onScreen = false;
        this.el = el;
    }
    on() {
        this.onScreen = true;
        this.el.classList.add("slide-show");
        slideOnScreen = this;
    }
    off() {
        this.onScreen = false;
        this.el.classList.remove("slide-show");
    }
}
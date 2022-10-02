import { changeSlide as chSlide } from "./changeSlide.js";
export function firstSlide(slideIndex = 1) {
    let changeSlide = chSlide();
    document.querySelector(".loading-bar").ariaValueNow = "10";
    document.querySelector(".loading-bar").style.width = "10%";
    document.onreadystatechange = (e) => {
        if (document.readyState == "interactive") {
            document.querySelector(".loading-bar").ariaValueNow = "50";
            document.querySelector(".loading-bar").style.width = "50%";
        }
        if (document.readyState == "complete") {
            document.querySelector(".loading-bar").ariaValueNow = "100";
            document.querySelector(".loading-bar").style.width = "100%";
            setTimeout(() => {
                changeSlide(window.slides[slideIndex],slideIndex);
            }, 600);
        }
    };
}

if(window.localStorage.onExam != undefined && window.localStorage.onExam) {
    document.querySelector(".link-to-soal").click()
}
import { firstSlide } from "./utils/fistSlide.js";
import { changeSlide } from "./utils/changeSlide.js";
import { changeTextBoxMenu } from "./utils/changeTextBoxMenu.js";
import { slideInit } from "./utils/slideInit.js";
window.zoom = (e) => {
    let offsetX,offsetY;
    var zoomer = e.currentTarget;
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = 0);
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = 0);
    let x = (offsetX / zoomer.offsetWidth) * 100;
    let y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
};
window.slides = [];
window.onChangeSlide = false;
window.slideOnScreen = undefined;
window.loadingText = [
    "Sedang Dimuat",
    "Memuat",
    "Loading",
    "Rendering",
    "Showing",
    "Harap Bersabar",
    "Sedang Dimuat",
];
window.changeSlide = changeSlide();
window.textBoxMenuOnDisplay = 0;

slideInit();
firstSlide(window.localStorage.lastSlide != "undefined"?window.localStorage.lastSlide:1);
changeSlide();
changeTextBoxMenu();

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
            changeSlide(slides[11]);
        }, 600);
    }
};
let slideOnScreen,
    textBoxMenuOnDisplay = 0,
    onChangeSlide = false;
const loadingText = [
        "Sedang Dimuat",
        "Memuat",
        "Loading",
        "Rendering",
        "Showing",
        "Harap Bersabar",
        "Sedang Dimuat",
    ],
    zoom = (e) => {
        var zoomer = e.currentTarget;
        e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
        e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
        x = (offsetX / zoomer.offsetWidth) * 100;
        y = (offsetY / zoomer.offsetHeight) * 100;
        zoomer.style.backgroundPosition = x + "% " + y + "%";
    },
    changeTextBoxMenu = (order) => {
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
    },
    changeSlide = (Slide) => {
        if (onChangeSlide) return;
        document.querySelector(".loading-text").textContent = loadingText[Math.floor(Math.random() * loadingText.length)];
        onChangeSlide = true;
        let target = document.querySelector(".slider-dmi"),
        targetText = document.querySelector(".loading-text")
        gsap.to(targetText, {
            duration:0,
            y:"-20%",
            opacity:0
        })
        gsap.to(target,{
            y:0,
            duration:0.6,
            ease:"power3.out",
            onComplete: () => {
                if (slideOnScreen != undefined) {
                    slideOnScreen.off();
                } else {
                    slides[0].off();
                }
                Slide.on();
            }
        })
        gsap.to(targetText,{
            duration:0.3,
            y:0,
            opacity:1,
            ease:"power1.out",
            delay:0.4
        })
        gsap.to(targetText,{
            ease:"power2.in",
            y:"100%",
            duration:0.6,
            delay:1
        })
        gsap.to(target, {
            ease:"power2.in",
            y:"100%",
            duration:0.6,
            delay:1,
            onComplete : () => {
                gsap.to(target, {y:"-100%",duration:0})
                gsap.to(targetText, {y:"-100%",duration:0})
                onChangeSlide = false
            }
        })
    }
class Slide {
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
const slides = [];
slides.push(new Slide(document.querySelector(".slide-0")));
// [ intro ]
slides.push(new Slide(document.querySelector(".slide-1")));
// [ menu ]
slides.push(new Slide(document.querySelector(".slide-2")));
// (( pendahuluan ))
slides.push(new Slide(document.querySelector(".slide-3")));
// [ kdki ]
slides.push(new Slide(document.querySelector(".slide-4")));
// [ indikator ]
slides.push(new Slide(document.querySelector(".slide-5")));
// [ tujuan ]
slides.push(new Slide(document.querySelector(".slide-6")));
// [ peta kompetensi ]
slides.push(new Slide(document.querySelector(".slide-7")));
// [ profil ]
slides.push(new Slide(document.querySelector(".slide-8")));
// (( materi ))
slides.push(new Slide(document.querySelector(".slide-9")));
// [ pengoperasian kemera digital ]
slides.push(new Slide(document.querySelector(".slide-10")));
// [ Perawatan peralatan fotografi ]
slides.push(new Slide(document.querySelector(".slide-11")));
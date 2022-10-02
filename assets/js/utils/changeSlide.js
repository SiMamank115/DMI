
export function changeSlide() {
    let changeSlide = (Slide) => {
        let duration = 0.5;
        if (onChangeSlide) return;
        let currentSlide = slideOnScreen ? slideOnScreen : slides[0];
        document.querySelector(".loading-text").textContent =
            loadingText[Math.floor(Math.random() * loadingText.length)];
        onChangeSlide = true;
        let target = document.querySelector(".slider-dmi"),
            targetText = document.querySelector(".loading-text");
        gsap.to(targetText, {
            duration: 0,
            y: "-20%",
            opacity: 0,
        });
        gsap.to(Slide.el, { opacity: 0, duration: 0 });
        gsap.to(currentSlide.el, {
            opacity: 0,
            duration: duration,
            repeat: 1,
            yoyo: true,
        });
        gsap.to(target, {
            y: 0,
            duration: duration,
            ease: "power3.out",
            onComplete: () => {
                currentSlide.off();
                Slide.on();
            },
        });
        gsap.to(targetText, {
            duration: duration / 2,
            y: 0,
            opacity: 1,
            ease: "power1.out",
            delay: duration / 1.5,
        });
        gsap.to(Slide.el, {
            opacity: 1,
            duration: duration * 1.26,
            delay: duration / 0.5454,
            ease: "power2.in",
        });
        gsap.to(targetText, {
            ease: "power2.in",
            y: "100%",
            duration: duration,
            delay: duration * 1.5,
        });
        gsap.to(target, {
            ease: "power2.in",
            y: "100%",
            duration: duration,
            delay: duration * 1.5,
            onComplete: () => {
                gsap.to(target, { y: "-100%", duration: 0 });
                gsap.to(targetText, { y: "-100%", duration: 0 });
                onChangeSlide = false;
            },
        });
    };
    return changeSlide
}
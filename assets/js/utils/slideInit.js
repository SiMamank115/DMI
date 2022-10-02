import { Slide } from "./Slide.js";
export function slideInit() {
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
// (( evaluasi ))
slides.push(new Slide(document.querySelector(".slide-12")));
// [ Rangkuman ]
slides.push(new Slide(document.querySelector(".slide-13")));
// [ Glosarium ]
slides.push(new Slide(document.querySelector(".slide-14")));
}
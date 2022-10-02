window.localStorage.onExam = true;
String.prototype.hashCode = function () {
    var hash = 0,
        i,
        chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};
for(let i = 1;i<6;i++) {
    if(window.localStorage["nomor" + i]) {
        document.querySelector("#" + window.localStorage["nomor" + i]).checked = true;
    }
}
Array.from(document.querySelectorAll("input[type=radio]")).forEach(e=> {
    e.onclick = e=>keepHistory(e)
})
function keepHistory(e) {
    let id = e.srcElement.id;
    let nomor = id.slice(-2,-1);
    let jawaban = id.slice(-1);
    window.localStorage["nomor" + nomor] = id;
    console.log(nomor,jawaban);
}
document.querySelector("[data-send-button]").onclick = () => {
    if (validation()) {
        let nilai = Math.round(checkAnswer());
        console.log(nilai);
        if (nilai > 75) {
            Swal.fire({
                title: "Selamat!",
                text: "Anda berhasil lolos dengan skor : " + nilai,
                icon: "success",
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn btn-success btn-lg button-back-to-main",
                },
                allowOutsideClick:false,
                allowEscapeKey:false,
                allowEnterKey:false,
                buttonsStyling: false,
            }).then(e=>{
                window.localStorage.onExam = false;
                document.querySelector(".link-to-main").click()
            });
        } else {
            Swal.fire({
                title: "Sayang!",
                text: "Anda gagal dengan dengan skor : " + nilai,
                icon: "error",
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn btn-danger btn-lg button-back-to-main",
                },
                allowOutsideClick:false,
                allowEscapeKey:false,
                allowEnterKey:false,
                buttonsStyling: false,
            }).then(e=>{
                window.localStorage.onExam = false;
                document.querySelector(".link-to-main").click()
            });
        }
        return;
    }
    Swal.fire({
        title: "Error!",
        text: "Silahkan Menjawab semua soal terlebih dahulu",
        icon: "error",
        confirmButtonText: "Ok",
        customClass: {
            confirmButton: "btn btn-warning btn-lg",
        },
        buttonsStyling: false,
    });
};
function checkAnswer() {
    let answer = ["-897108967", "-897108938", "-897108906", "-897108873", "-897108845", "-897108811"];
    let userAnswer = Array.from(document.querySelectorAll("form>ul>li>input:checked")).map((e) => e.id);
    let nilaiRaw = answer.map((e, x) => {
        return userAnswer[x].hashCode() == e ? 16.666 : 0;
    });
    return nilaiRaw.reduce((a, c) => a + c);
}
function validation() {
    let valid = true;
    let jumlahSoal = 6;
    for (let i = 1; i < jumlahSoal; i++) {
        if (document.querySelectorAll(`#soal${i}>form>ul>li>input:checked`).length == 0) {
            valid = false;
            return false;
        }
    }
    return true;
}

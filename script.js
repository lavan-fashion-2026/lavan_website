/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        nav.classList.toggle("active");

    });


    // إغلاق القائمة بعد الضغط على أي رابط

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    });

}


/* =========================
   IMAGE MODAL
========================= */

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");


function openImage(imagePath) {

    if (!modal || !modalImg) {
        return;
    }

    modalImg.src = imagePath;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    if (!modal || !modalImg) {
        return;
    }

    modal.classList.remove("show");

    modalImg.src = "";

    document.body.style.overflow = "";

}


function closeImage(event) {

    if (event.target === modal) {

        closeModal();

    }

}


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});

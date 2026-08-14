document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    // فتح الصورة
    window.openModal = function (imageSrc) {
        if (!modal || !modalImg) return;

        modalImg.src = imageSrc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    // فتح الصورة من زر عرض الموديل
    window.openImage = function (imageSrc) {
        openModal(imageSrc);
    };

    // إغلاق الصورة
    window.closeImage = function () {
        if (!modal) return;

        modal.style.display = "none";
        document.body.style.overflow = "";
        if (modalImg) {
            modalImg.src = "";
        }
    };

    // الضغط خارج الصورة يغلق النافذة
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeImage();
            }
        });
    }

    // الضغط على زر ESC يغلق الصورة
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeImage();
        }
    });

    // الضغط على الصورة نفسها لا يغلق النافذة
    if (modalImg) {
        modalImg.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

});

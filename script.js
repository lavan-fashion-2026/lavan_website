
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    if (modal && modalImg) {
        modalImg.src = imageSrc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function openImage(imageSrc) {
    openModal(imageSrc);
}

function closeImage() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeImage();
            }
        });
    }

    if (modalImg) {
        modalImg.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeImage();
        }
    });
});

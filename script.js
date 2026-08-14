
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  // فتح الصورة
  window.openModal = function (imageSrc) {
    if (modal && modalImg) {
      modalImg.src = imageSrc;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  };

  // فتح الصورة باستخدام openImage
  window.openImage = function (imageSrc) {
    openModal(imageSrc);
  };

  // إغلاق الصورة
  window.closeImage = function () {
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  };

  // إغلاق عند الضغط خارج الصورة
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeImage();
      }
    });
  }

  // إغلاق بزر ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeImage();
    }
  });

});

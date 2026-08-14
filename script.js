
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    // =========================
    // فتح صورة الموديل
    // =========================
    window.openModal = function (imageSrc) {
        if (!modal || !modalImg) return;

        modalImg.src = imageSrc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    window.openImage = function (imageSrc) {
        openModal(imageSrc);
    };

    // =========================
    // إغلاق الصورة
    // =========================
    window.closeImage = function () {
        if (!modal) return;

        modal.style.display = "none";
        document.body.style.overflow = "";

        if (modalImg) {
            modalImg.src = "";
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

    // منع إغلاق الصورة عند الضغط عليها
    if (modalImg) {
        modalImg.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }


    // =========================
    // أسعار الموديلات
    // =========================

    const products = document.querySelectorAll(".product");

    products.forEach(function (product, index) {

        const modelNumber = String(index + 1).padStart(2, "0");

        // السعر الأساسي
        const originalPrice = 60;

        // خصم الموديل
        const modelDiscount = 20;

        // السعر بعد الخصم
        const finalPrice = originalPrice * (1 - modelDiscount / 100);

        // سعر الدستة
        const dozenOriginalPrice = 720;

        // خصم الدستة
        const dozenDiscount = 30;

        // سعر الدستة بعد الخصم
        const dozenFinalPrice =
            dozenOriginalPrice * (1 - dozenDiscount / 100);


        // البحث عن الجزء الموجود أسفل اسم الموديل
        const infoBox = product.querySelector("div");

        if (!infoBox) return;


        // منع تكرار الأسعار إذا تم تحميل الصفحة أكثر من مرة
        if (product.querySelector(".lavan-prices")) return;


        // =========================
        // إنشاء معلومات الأسعار
        // =========================

        const priceBox = document.createElement("div");

        priceBox.className = "lavan-prices";

        priceBox.innerHTML = `
            <div class="model-price">

                <div class="old-price">
                    ${originalPrice} جنيه
                </div>

                <div class="discount">
                    خصم ${modelDiscount}%
                </div>

                <div class="final-price">
                    ${finalPrice} جنيه
                </div>

            </div>

            <div class="dozen-price">

                <div class="dozen-title">
                    عرض الدستة
                </div>

                <div class="old-price">
                    ${dozenOriginalPrice} جنيه
                </div>

                <div class="discount">
                    خصم ${dozenDiscount}%
                </div>

                <div class="dozen-final">
                    سعر الدستة: ${dozenFinalPrice} جنيه
                </div>

            </div>
        `;


        // إضافة الأسعار قبل زر عرض الموديل
        const modelButton = infoBox.querySelector("button");

        if (modelButton) {
            infoBox.insertBefore(priceBox, modelButton);
        } else {
            infoBox.appendChild(priceBox);
        }

    });

});

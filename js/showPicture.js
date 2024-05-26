document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".cs-image-group .cs-item a");
    const body = document.querySelector("body");

    galleryItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const imgSrc = this.getAttribute("href");
            showImage(imgSrc);
        });
    });

    function showImage(src) {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const img = document.createElement("img");
        img.src = src;
        img.classList.add("overlay-image");

        overlay.addEventListener("click", function() {
            body.removeChild(overlay);
        });

        overlay.appendChild(img);
        body.appendChild(overlay);
    }
});

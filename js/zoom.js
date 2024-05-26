document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".cs-picture img");
    images.forEach(function(image) {
        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.12)";
        });
        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });
    });
});


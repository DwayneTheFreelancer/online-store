var dropTrigger = document.querySelector(".drop-trigger");
var dropHeader = document.querySelector(".drop-header");
var dropLinks = document.querySelectorAll(".drop-links");

dropTrigger.addEventListener("click", function () {
    if (dropHeader.style.display == "block") {
        $(".drop-header").slideUp();
    } else {
        $(".drop-header").slideDown();
    }
});
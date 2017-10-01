const itemControl = document.querySelector(".controls");
const leftControl = document.getElementById("left-control");
const rightControl = document.getElementById("right-control");
const homeItems = document.querySelector(".home-items");
const parentItems1 = document.getElementById("parent-items-1");
const parentItems2 = document.getElementById("parent-items-2");

const headControls = document.getElementById("head-controls");
headControls.addEventListener("click", function(e) {
    if (e.target.tagName == "I") {
        if (e.target.id == "left-control") {
            parentItems1.style.display = "flex";
            parentItems2.style.display = "none";
        } else if (e.target.id = "right-control") {
            parentItems1.style.display = "none";
            parentItems2.style.display = "flex";
        }
    }
});


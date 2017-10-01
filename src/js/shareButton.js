const share = document.getElementById("share");
const shareLinks = document.getElementById("share-links");
const socialMedias = `
    <ul class="social-links">
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Google+</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Reddit</a></li>
        <li><a href="#">Tumblr</a></li>
    </ul>
`;

shareLinks.style.display = "none";
shareLinks.innerHTML = socialMedias;
share.addEventListener("click", () => {
    if(shareLinks.style.display == "none") {
        $("#share-links").slideDown();
    } else {
        $("#share-links").fadeOut();
    }
});
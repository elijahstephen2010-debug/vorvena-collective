const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
});


const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileNav.classList.remove("show");
    });

});


const feedbackBtn = document.getElementById("feedbackBtn");

feedbackBtn.addEventListener("click", (event) => {

    event.preventDefault();

    alert("Feedback system coming soon.");

});
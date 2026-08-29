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


/* ================= SEARCH ================= */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const profiles = document.querySelectorAll(".profile-card");
const noResults = document.getElementById("noResults");


function filterProfiles() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const categoryValue =
        categoryFilter.value;

    let visibleProfiles = 0;


    profiles.forEach(profile => {

        const name =
            profile.dataset.name.toLowerCase();

        const category =
            profile.dataset.category;


        const matchesSearch =
            name.includes(searchValue) ||
            profile.textContent
                .toLowerCase()
                .includes(searchValue);


        const matchesCategory =
            categoryValue === "all" ||
            category === categoryValue;


        if (matchesSearch && matchesCategory) {

            profile.style.display = "block";

            visibleProfiles++;

        } else {

            profile.style.display = "none";

        }

    });


    if (visibleProfiles === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


searchInput.addEventListener(
    "input",
    filterProfiles
);

categoryFilter.addEventListener(
    "change",
    filterProfiles
);


/* ================= PROFILE BUTTON ================= */

const profileButtons =
    document.querySelectorAll(".profile-btn");

profileButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        const profileName =
            button.dataset.profile;

        alert(
            `${profileName}'s full profile will open here.`
        );

    });

});


/* ================= FEEDBACK ================= */

const feedbackBtn =
    document.getElementById("feedbackBtn");

feedbackBtn.addEventListener("click", event => {

    event.preventDefault();

    alert("Feedback system coming soon.");

});
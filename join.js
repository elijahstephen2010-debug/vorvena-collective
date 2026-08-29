const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("show");

    });


    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("show");

        });

    });

}


/* ================= PROFILE IMAGE PREVIEW ================= */

const profilePicture =
    document.getElementById("profilePicture");

const imagePreview =
    document.getElementById("imagePreview");


if (profilePicture && imagePreview) {

    profilePicture.addEventListener("change", () => {

        const file =
            profilePicture.files[0];


        if (!file) {

            imagePreview.innerHTML = "";

            return;

        }


        const reader =
            new FileReader();


        reader.onload = function(event) {

            imagePreview.innerHTML = `
                <img
                    src="${event.target.result}"
                    alt="Profile preview"
                >
            `;

        };


        reader.readAsDataURL(file);

    });

}


/* ================= FORM ================= */

const joinForm =
    document.getElementById("joinForm");

const formMessage =
    document.getElementById("formMessage");


if (joinForm && formMessage) {

    joinForm.addEventListener("submit", event => {

        event.preventDefault();


        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        /* PASSWORD CHECK */

        if (password !== confirmPassword) {

            formMessage.textContent =
                "Passwords do not match.";

            return;

        }


        /* FRONTEND DEMO */

        formMessage.textContent =
            "Application ready. Backend connection will be added next.";

    });

}

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const navLinks = document.querySelectorAll(
        ".desktop-nav a, .mobile-nav a"
    );


    // =========================
    // MOBILE MENU
    // =========================

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("show");

            menuBtn.classList.toggle("active", isOpen);

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });


        // Close after clicking a link

        mobileNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("show");

                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });


        // Escape key

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {

                mobileNav.classList.remove("show");

                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        });


        // Close menu when returning to desktop

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                mobileNav.classList.remove("show");

                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    // =========================
    // ACTIVE NAV
    // =========================

    let currentPage =
        window.location.pathname.split("/").pop();

    if (!currentPage) {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    // =========================
    // PROFILE IMAGE PREVIEW
    // =========================

    const profilePicture =
        document.getElementById("profilePicture");

    const imagePreview =
        document.getElementById("imagePreview");

    if (profilePicture && imagePreview) {

        profilePicture.addEventListener("change", () => {

            const file =
                profilePicture.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) {

                profilePicture.value = "";

                showMessage(
                    "Please select a valid image file.",
                    "error"
                );

                return;
            }

            const reader =
                new FileReader();

            reader.onload = event => {

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


    // =========================
    // CV FILE NAME
    // =========================

    const cvInput =
        document.getElementById("cv");

    const cvName =
        document.getElementById("cvName");

    if (cvInput && cvName) {

        cvInput.addEventListener("change", () => {

            const file =
                cvInput.files[0];

            if (!file) {

                cvName.textContent =
                    "CHOOSE YOUR CV";

                return;
            }

            cvName.textContent =
                file.name;

        });

    }


    // =========================
    // FORM
    // =========================

    const joinForm =
        document.getElementById("joinForm");

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");


    if (joinForm) {

        joinForm.addEventListener("submit", event => {

            event.preventDefault();

            clearMessage();


            // =========================
            // PASSWORD CHECK
            // =========================

            if (
                password &&
                confirmPassword &&
                password.value.length < 8
            ) {

                showMessage(
                    "Password must be at least 8 characters.",
                    "error"
                );

                password.focus();

                return;
            }


            if (
                password &&
                confirmPassword &&
                password.value !== confirmPassword.value
            ) {

                showMessage(
                    "Passwords do not match.",
                    "error"
                );

                confirmPassword.focus();

                return;
            }


            // =========================
            // REQUIRED FILES
            // =========================

            if (
                profilePicture &&
                profilePicture.files.length === 0
            ) {

                showMessage(
                    "Please upload your profile picture.",
                    "error"
                );

                return;
            }


            if (
                cvInput &&
                cvInput.files.length === 0
            ) {

                showMessage(
                    "Please upload your CV or resume.",
                    "error"
                );

                return;
            }


            // =========================
            // AGREEMENTS
            // =========================

            const agreements = [
                document.getElementById("terms"),
                document.getElementById("privacy"),
                document.getElementById("guidelines"),
                document.getElementById("paymentAgreement")
            ];

            const allAgreed =
                agreements.every(
                    checkbox => checkbox && checkbox.checked
                );

            if (!allAgreed) {

                showMessage(
                    "Please agree to all required policies before submitting.",
                    "error"
                );

                return;
            }


            // =========================
            // SUCCESS
            // =========================

            showMessage(
                "Application received successfully. Your application is ready to be connected to the VORVENA backend for review.",
                "success"
            );


            /*
            ==========================================
            SUPABASE — LATER
            ==========================================

            The backend will eventually:

            1. Create the professional account
            2. Store the application
            3. Upload the profile picture
            4. Upload the CV privately
            5. Set application status to "pending"
            6. Send the application to the admin dashboard
            7. Allow admin approval/rejection
            8. Email the applicant after approval
            9. Generate the professional profile
            10. Make the approved professional discoverable

            ==========================================
            */

        });

    }


    // =========================
    // MESSAGE FUNCTIONS
    // =========================

    function showMessage(message, type) {

        const formMessage =
            document.getElementById("formMessage");

        if (!formMessage) return;

        formMessage.textContent = message;

        formMessage.className =
            `form-message ${type}`;

        formMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    function clearMessage() {

        const formMessage =
            document.getElementById("formMessage");

        if (!formMessage) return;

        formMessage.textContent = "";

        formMessage.className =
            "form-message";

    }

});
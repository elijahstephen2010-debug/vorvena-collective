document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("clientSignupForm");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const company = document.getElementById("company");

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const showPassword = document.getElementById("showPassword");
    const showConfirmPassword =
        document.getElementById("showConfirmPassword");

    const terms = document.getElementById("terms");
    const privacy = document.getElementById("privacy");

    const formMessage = document.getElementById("formMessage");
    const submitButton = document.querySelector(".submit-btn");


    // =========================
    // SHOW / HIDE PASSWORD
    // =========================

    if (showPassword && password) {

        showPassword.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";
                showPassword.textContent = "Hide";

            } else {

                password.type = "password";
                showPassword.textContent = "Show";

            }

        });

    }


    // =========================
    // SHOW / HIDE CONFIRM PASSWORD
    // =========================

    if (showConfirmPassword && confirmPassword) {

        showConfirmPassword.addEventListener("click", () => {

            if (confirmPassword.type === "password") {

                confirmPassword.type = "text";
                showConfirmPassword.textContent = "Hide";

            } else {

                confirmPassword.type = "password";
                showConfirmPassword.textContent = "Show";

            }

        });

    }


    // =========================
    // FORM SUBMISSION
    // =========================

    if (form) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();


            // Clear previous message
            clearMessage();


            // =========================
            // GET VALUES
            // =========================

            const nameValue = fullName.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            const companyValue = company.value.trim();

            const passwordValue = password.value;
            const confirmPasswordValue =
                confirmPassword.value;


            // =========================
            // REQUIRED FIELDS
            // =========================

            if (!nameValue || !emailValue || !passwordValue ||
                !confirmPasswordValue) {

                showMessage(
                    "Please complete all required fields.",
                    "error"
                );

                return;
            }


            // =========================
            // EMAIL VALIDATION
            // =========================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {

                showMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            // =========================
            // PASSWORD LENGTH
            // =========================

            if (passwordValue.length < 8) {

                showMessage(
                    "Password must be at least 8 characters.",
                    "error"
                );

                return;
            }


            // =========================
            // PASSWORD MATCH
            // =========================

            if (passwordValue !== confirmPasswordValue) {

                showMessage(
                    "Passwords do not match.",
                    "error"
                );

                return;
            }


            // =========================
            // TERMS
            // =========================

            if (!terms.checked) {

                showMessage(
                    "Please agree to the Terms & Conditions.",
                    "error"
                );

                return;
            }


            // =========================
            // PRIVACY
            // =========================

            if (!privacy.checked) {

                showMessage(
                    "Please agree to the Privacy Policy.",
                    "error"
                );

                return;
            }


            // =========================
            // LOADING STATE
            // =========================

            submitButton.disabled = true;

            submitButton.style.opacity = "0.6";
            submitButton.style.cursor = "wait";

            submitButton.querySelector("span").textContent =
                "CREATING ACCOUNT...";


            // =========================
            // TEMPORARY SIGNUP
            // =========================

            setTimeout(() => {

                /*
                ==========================================
                SUPABASE WILL GO HERE LATER
                ==========================================

                const { data, error } =
                    await supabase.auth.signUp({
                        email: emailValue,
                        password: passwordValue,
                        options: {
                            data: {
                                full_name: nameValue,
                                phone: phoneValue,
                                company: companyValue,
                                account_type: "client"
                            }
                        }
                    });

                ==========================================
                */


                // Store temporary client information
                // for frontend testing only.

                sessionStorage.setItem(
                    "vorvenaClientName",
                    nameValue
                );

                sessionStorage.setItem(
                    "vorvenaClientEmail",
                    emailValue
                );

                sessionStorage.setItem(
                    "vorvenaAccountType",
                    "client"
                );


                // =========================
                // SUCCESS
                // =========================

                showMessage(
                    "Client account created successfully. Your account is ready to connect to VORVENA.",
                    "success"
                );


                submitButton.querySelector("span").textContent =
                    "ACCOUNT CREATED";

                submitButton.style.opacity = "1";
                submitButton.style.cursor = "default";


                // =========================
                // REDIRECT LATER
                // =========================

                /*
                When Supabase is connected,
                we can redirect the client to:

                client-dashboard.html

                or directly back to the
                professional they wanted to hire.
                */


            }, 1000);

        });

    }


    // =========================
    // MESSAGE FUNCTION
    // =========================

    function showMessage(message, type) {

        if (!formMessage) return;

        formMessage.textContent = message;

        formMessage.className =
            `form-message ${type}`;

    }


    // =========================
    // CLEAR MESSAGE
    // =========================

    function clearMessage() {

        if (!formMessage) return;

        formMessage.textContent = "";

        formMessage.className =
            "form-message";

    }

});
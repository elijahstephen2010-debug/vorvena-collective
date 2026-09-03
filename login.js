document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const togglePassword =
        document.getElementById("togglePassword");

    const rememberCheckbox =
        document.getElementById("remember");

    const forgotPassword =
        document.getElementById("forgotPassword");

    const formMessage =
        document.getElementById("formMessage");


    // =========================
    // SHOW / HIDE PASSWORD
    // =========================

    if (togglePassword && passwordInput) {

        togglePassword.addEventListener("click", () => {

            const isPassword =
                passwordInput.type === "password";

            passwordInput.type =
                isPassword ? "text" : "password";

            togglePassword.textContent =
                isPassword ? "HIDE" : "SHOW";

        });

    }


    // =========================
    // REMEMBER EMAIL
    // =========================

    const savedEmail =
        localStorage.getItem("vorvenaRememberedEmail");

    if (savedEmail && emailInput) {

        emailInput.value = savedEmail;

        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }

    }


    // =========================
    // LOGIN
    // =========================

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            clearMessage();

            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value.trim();


            // =========================
            // EMPTY CHECK
            // =========================

            if (!email || !password) {

                showMessage(
                    "Please enter your email and password.",
                    "error"
                );

                return;
            }


            // =========================
            // EMAIL CHECK
            // =========================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                showMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            // =========================
            // PASSWORD CHECK
            // =========================

            if (password.length < 8) {

                showMessage(
                    "Password must be at least 8 characters.",
                    "error"
                );

                return;
            }


            // =========================
            // REMEMBER EMAIL
            // =========================

            if (
                rememberCheckbox &&
                rememberCheckbox.checked
            ) {

                localStorage.setItem(
                    "vorvenaRememberedEmail",
                    email
                );

            } else {

                localStorage.removeItem(
                    "vorvenaRememberedEmail"
                );

            }


            // =========================
            // TEMPORARY LOGIN
            // =========================

            showMessage(
                "Login form is working. Authentication will be connected to the VORVENA backend later.",
                "success"
            );


            /*
            ==========================================
            SUPABASE AUTHENTICATION — LATER
            ==========================================

            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });

            if (error) {
                showMessage(error.message, "error");
                return;
            }

            window.location.href = "dashboard.html";

            ==========================================
            */

        });

    }


    // =========================
    // FORGOT PASSWORD
    // =========================

    if (forgotPassword) {

        forgotPassword.addEventListener("click", (event) => {

            event.preventDefault();

            showMessage(
                "Password recovery will be connected when authentication is added.",
                "success"
            );

        });

    }


    // =========================
    // MESSAGE
    // =========================

    function showMessage(message, type) {

        if (!formMessage) return;

        formMessage.textContent = message;

        formMessage.className =
            `form-message ${type}`;

    }


    function clearMessage() {

        if (!formMessage) return;

        formMessage.textContent = "";

        formMessage.className =
            "form-message";

    }

});
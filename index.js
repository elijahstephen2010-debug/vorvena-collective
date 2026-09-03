document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-link");


    /* =========================
       MOBILE MENU
    ========================= */

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

        });


        /* =========================
           CLOSE WHEN LINK IS CLICKED
        ========================= */

        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");
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


        /* =========================
           CLOSE WITH ESCAPE
        ========================= */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navLinks.classList.remove("open");
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


        /* =========================
           CLOSE WHEN RESIZING
        ========================= */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                navLinks.classList.remove("open");
                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =========================
       ACTIVE NAV
    ========================= */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();

    if (!currentPage) {
        currentPage = "index.html";
    }

    navItems.forEach((link) => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

});
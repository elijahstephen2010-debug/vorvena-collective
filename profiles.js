document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const searchInput =
        document.getElementById("searchInput");

    const professionFilter =
        document.getElementById("professionFilter");

    const profileCards =
        document.querySelectorAll(".profile-card");

    const hireButtons =
        document.querySelectorAll(".hire-btn");

    const navLinks =
        document.querySelectorAll(".desktop-nav a, .mobile-nav a");


    /* =========================
       MOBILE MENU
    ========================= */

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


        /* Close after clicking a link */

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


        /* Close with Escape */

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


        /* Close when returning to desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

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

    }


    /* =========================
       ACTIVE NAV
    ========================= */

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


    /* =========================
       SEARCH + FILTER
    ========================= */

    function filterProfiles() {

        const searchValue =
            searchInput
                ? searchInput.value.toLowerCase().trim()
                : "";

        const professionValue =
            professionFilter
                ? professionFilter.value.toLowerCase()
                : "all";

        let visibleProfiles = 0;


        profileCards.forEach(card => {

            const name =
                (card.dataset.name || "").toLowerCase();

            const profession =
                (card.dataset.profession || "").toLowerCase();

            const skills =
                (card.dataset.skills || "").toLowerCase();


            const matchesSearch =
                name.includes(searchValue) ||
                profession.includes(searchValue) ||
                skills.includes(searchValue);


            const matchesProfession =
                professionValue === "all" ||
                profession === professionValue;


            if (matchesSearch && matchesProfession) {

                card.style.display = "";

                visibleProfiles++;

            } else {

                card.style.display = "none";

            }

        });


        /* =========================
           EMPTY STATE
        ========================= */

        const emptyState =
            document.getElementById("emptyState");

        if (emptyState) {

            emptyState.style.display =
                visibleProfiles === 0
                    ? "block"
                    : "none";

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProfiles
        );

    }


    if (professionFilter) {

        professionFilter.addEventListener(
            "change",
            filterProfiles
        );

    }


    /* =========================
       HIRE PROFESSIONAL
    ========================= */

    hireButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".profile-card");

            if (!card) return;


            const professional = {

                id:
                    card.dataset.id || "",

                name:
                    card.dataset.name || "",

                profession:
                    card.dataset.profession || "",

                skills:
                    card.dataset.skills || "",

                profile:
                    card.dataset.profile || ""

            };


            sessionStorage.setItem(
                "vorvenaSelectedProfessional",
                JSON.stringify(professional)
            );


            sessionStorage.setItem(
                "vorvenaHiringIntent",
                "true"
            );


            window.location.href =
                "login.html";

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".profile-card");


    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =========================
       INITIAL FILTER
    ========================= */

    filterProfiles();

});
// Starfield Initialization
const starField = document.getElementById("starfield");
const numStars = 300;

const starColors = [
    "#ffffff",
    "#b0c4de",
    "#99ccff",
    "#cce7ff",
    "#6699ff",
];

for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.background =
        starColors[Math.floor(Math.random() * starColors.length)];
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starField.appendChild(star);
}

// Smooth Scroll to Assignments Section
document
    .getElementById("goToAssignments")
    .addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#assignments").scrollIntoView({
            behavior: "smooth",
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarLeft = document.querySelector(".navbar-left");
    const assignmentsSection = document.querySelector("#assignments");
    const navbarRight = document.querySelector(".navbar-right");
    const hamburgerIcon = document.createElement("div");

    // Create Hamburger Menu Icon
    hamburgerIcon.classList.add("hamburger-icon");
    hamburgerIcon.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    document.querySelector(".navbar").appendChild(hamburgerIcon);

    // Function to toggle the navbar-right visibility
    hamburgerIcon.addEventListener("click", () => {
        navbarRight.classList.toggle("active");
        hamburgerIcon.classList.toggle("open");
    });

    // Highlight the Home link by default when on the home section
    const currentSection = window.location.hash || "#home";
    if (currentSection === "#home") {
        document.getElementById("navHome").classList.add("active");
    }

    // Function to highlight the active section in the navbar and smooth scroll to sections
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
            });
            link.classList.add("active");

            // Close the hamburger menu when a link is clicked
            navbarRight.classList.remove("active");
            hamburgerIcon.classList.remove("open");
        });
    });

    // Highlight active section on scroll and hide navbar-left when scrolled to assignments
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });

        // Check if the page is scrolled to the assignments section
        const assignmentsTop =
            assignmentsSection.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= assignmentsTop - window.innerHeight / 2) {
            navbarLeft.classList.add("hidden-logo");
        } else {
            navbarLeft.classList.remove("hidden-logo");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});

const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const contactForm = document.getElementById("contact-form")
const contactStatus = document.getElementById("contact-status")

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    contactStatus.textContent = "Thank you for your inquiry. Will get in touch with immediacy";
    window.setTimeout(() => {
        window.location.href = `mailto:keithtobias.05@gmail.com?subject=${subject}&body=${body}`;
    }, 300);
});

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim().toLowerCase();
    if (searchText === "home") {
        document.getElementById("home").scrollIntoView();
    }
    else if (searchText === "about") {
        document.getElementById("about").scrollIntoView();

    }
    else if (searchText === "skills") {
        document.getElementById("skills").scrollIntoView();

    }
    else if (searchText === "projects") {
        document.getElementById("projects").scrollIntoView();

    }
    else if (searchText === "resume") {
        document.getElementById("resume").scrollIntoView();

    }
    else if (searchText === "contact") {
        document.getElementById("contact").scrollIntoView();

    }
    else {
        alert("Sorry, I couldn't find that section.");

    }
});
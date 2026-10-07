const content = document.getElementById("content");
const navLinks = document.querySelectorAll("div a[data-page]");

async function loadPage(page) {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();

    content.innerHTML = html;

    updateActiveNavLink(page);
}

function updateActiveNavLink(activePage) {
    navLinks.forEach(link => {
        if (link.dataset.page === activePage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const page = link.dataset.page;
        loadPage(page);
    });
});

loadPage("about");
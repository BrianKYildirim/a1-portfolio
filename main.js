const content = document.getElementById("content");

async function loadPage(page) {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();

    content.innerHTML = html;
}

document.querySelectorAll("nav a[data-page]").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const page = link.dataset.page;
        loadPage(page);
    });
});

loadPage("about");
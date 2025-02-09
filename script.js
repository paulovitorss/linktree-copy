const links = [
    {
        text: "Currículo", url: "in-production.html"
    },
    {
        text: "Portfólio", url: "in-production.html"
    },
    {
        text: "Contato", url: "in-production.html"
    }
];

const linksContainer = document.querySelector(".links");

links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.text;
    a.classList.add("btn");
    linksContainer.appendChild(a);
});
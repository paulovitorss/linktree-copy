const links = [
    {
        text: "Currículo", url: "#"
    },
    {
        text: "Portfólio", url: "#"
    },
    {
        text: "Contato", url: "#"
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
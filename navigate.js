const svg = document.getElementById("excalidraw-svg");
const header = document.getElementById("header");

svg.addEventListener("click", (e) => {
    if(e.target.parentElement.getAttribute("stroke-linecap") === "round") {
        const text = e.target.parentElement.nextSibling.nextSibling.textContent;

        header.textContent = text;
    }
});
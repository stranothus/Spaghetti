const svg = document.getElementById("excalidraw-svg");
const scrollWindow = svg.parentElement;
const pageContainer = document.getElementById("page-container");

const pagesJSON = [
    {
        title: "Me",
        translatedTitle: "Me",
        content: "<p>This is about me... uhhhhhh...</p>"
    }
];

function scrollTo(parent, target) {
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    parent.scrollTo({
        left: targetRect.left - parentRect.width + parent.scrollLeft + targetRect.width / 2,
        top: targetRect.top - parentRect.height / (5 / 3) + parent.scrollTop + targetRect.height / 2,
        behavior: "smooth"
    });
}

setTimeout(() => scrollTo(scrollWindow, [...svg.getElementsByTagName("text")].find(e => e.textContent === "Me")), 500);

svg.addEventListener("click", (e) => {
    if(e.target.parentElement.getAttribute("stroke-linecap") === "round") {
        const text = e.target.parentElement.nextSibling.nextSibling.textContent.trim();
        const page = pagesJSON.find(e => e.title === text) || pagesJSON[0];

        parent.scrollTo(scrollWindow, e.target);

        pageContainer.innerHTML = `<h2>${page.title}</h2>${page.content}`;
    }
});


let drag = false;

        header.textContent = text;
    }
});
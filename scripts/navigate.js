const svg = document.getElementById("excalidraw-svg");
const scrollWindow = svg.parentElement;
const pageContainer = document.getElementById("page-container");

// [...temp1.getElementsByTagName("g")].map(v => v.textContent.replaceAll(/\s+/g, " ").trim()).filter(a => a).map(v => ({title: v, transaltedTitle: encodeURI(v), content: ``}));
const pagesJSON = [
    {
        "title": "Me",
        "transaltedTitle": "Me",
        "content": 
            `<p><blockquote>I am a collection of my experiences.</blockquote></p>
            <p>Who I am is a question that I've asked myself for as long as I can remember. For years, I found my identity through what other people percieved about me, a practice unadvisable by any mental healthcare specialist. When we find our identity through others' perceptions of us, we trap ourselves in a loop: we become what we are thought of as and perpetuate that perception of ourselves by matching it. </p>
            <div class="img" style="background-image: url('../images/looking-glass-self.webp');"></div>
            <p>As I've grown and further developed my identity, I've come to realize that it's simply a collection of my experiences, including the ones I put myself through. My own thoughts are just as much experiences as a car wreck would be. When I think about my identity, I'm reforming it around itself. In short, I'm thinking myself into being. When I base my identity on others' perceptions of me, I'm not basing my identity on anything, really. I become a mirror that reflects itself. </p>
            <p>The tricky thing about basing my identity on my experiences is how I then convey myself. There's no way to convey every experience that's ever happened to me: every situation, every accomplishment, every failure, and every thought. Even if I did manage to write it all down, it'd become an autobiography, so I present an alternative: spaghetti. This ePortfolio is a collection of things that have affected me through the experiences I've had with them. Each thing is connected to others, all ultimately leading back to me, with some especially affecting me. Each thing has a short (or sometimes not so short) page to explain how it's played a role in my identity. Follow the spaghetti to know me more. </p>`
    },
    {
        "title": "Purpose",
        "transaltedTitle": "Purpose",
        "content": ""
    },
    {
        "title": "Before the Cross",
        "transaltedTitle": "Before%20the%20Cross",
        "content": ""
    },
    {
        "title": "Before the Dawn",
        "transaltedTitle": "Before%20the%20Dawn",
        "content": ""
    },
    {
        "title": "A Daughter's Mother's Only Song",
        "transaltedTitle": "A%20Daughter's%20Mother's%20Only%20Song",
        "content": ""
    },
    {
        "title": "Broken Mirrors Give Me Gender Euphoria",
        "transaltedTitle": "Broken%20Mirrors%20Give%20Me%20Gender%20Euphoria",
        "content": ""
    },
    {
        "title": "Morning Coffee with God",
        "transaltedTitle": "Morning%20Coffee%20with%20God",
        "content": ""
    },
    {
        "title": "Heaven's Tip",
        "transaltedTitle": "Heaven's%20Tip",
        "content": ""
    },
    {
        "title": "Mobius",
        "transaltedTitle": "Mobius",
        "content": ""
    },
    {
        "title": "Questioning",
        "transaltedTitle": "Questioning",
        "content": ""
    },
    {
        "title": "The American Dream",
        "transaltedTitle": "The%20American%20Dream",
        "content": ""
    },
    {
        "title": "The Sewing",
        "transaltedTitle": "The%20Sewing",
        "content": ""
    }
];

function scrollTo(parent, target, behavior="smooth") {
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();

    parent.scrollTo({
        left: targetRect.left - parentRect.width + parent.scrollLeft + targetRect.width / 2,
        top: targetRect.top - targetRect.height - svgRect.top + targetRect.height / 4,
        behavior: behavior
    });
}

svg.addEventListener("click", (e) => {
    if(e.target.parentElement.getAttribute("stroke-linecap") === "round") {
        const text = e.target.parentElement.nextSibling.nextSibling.textContent.replaceAll(/\s+/g, " ").trim();
        const page = pagesJSON.find(e => e.title === text) || pagesJSON[0];

        parent.scrollTo(scrollWindow, e.target);

        pageContainer.innerHTML = `<h2>${page.title}</h2>${page.content}`;
    }
});


let drag = false;

scrollWindow.parentElement.addEventListener("pointerdown", () => drag = true);
addEventListener("pointerup", () => drag = false);
addEventListener("pointermove", e => {
    if(drag) {
        scrollWindow.scrollLeft -= e.movementX;
        scrollWindow.scrollTop -= e.movementY;
    }
});

pageContainer.innerHTML = `<h2>${pagesJSON[0].title}</h2>${pagesJSON[0].content}`;
function zoomIn() {
    const intervalIncrease = window.innerWidth / (1000 / 60);

    const interval = setInterval(() => {
        svg.style.width = svg.getBoundingClientRect().width + intervalIncrease;
        scrollTo(scrollWindow, [...svg.getElementsByTagName("text")].find(e => e.parentElement.textContent.trim() === "Me"), "instant");
    }, 1000 / 60);

    setTimeout(() => clearInterval(interval), 200);
}

scrollTo(scrollWindow, [...svg.getElementsByTagName("text")].find(e => e.parentElement.textContent.trim() === "Me"), "instant");
svg.style.width = `${window.innerWidth * 0.5}px`;
setTimeout(zoomIn, 100);
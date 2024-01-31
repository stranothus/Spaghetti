const svg = document.getElementById("excalidraw-svg");
const scrollWindow = svg.parentElement;
const pageContainer = document.getElementById("page-container");

const pagesJSON = [
    {
        "title": "Me",
        "translatedTitle": "Me",
        "content": `
            <p><blockquote>I am a collection of my experiences.</blockquote></p>
            <p>Who I am is a question that I've asked myself for as long as I can remember. For years, I found my identity through what other people percieved about me, a practice unadvisable by any mental healthcare specialist. When we find our identity through others' perceptions of us, we trap ourselves in a loop: we become what we are thought of as and perpetuate that perception of ourselves by matching it. </p>
            <div class="img" style="background-image: url('../images/looking-glass-self.webp');"></div>
            <p>As I've grown and further developed my identity, I've come to realize that it's simply a collection of my experiences, including the ones I put myself through. My own thoughts are just as much experiences as a car wreck would be. When I think about my identity, I'm reforming it around itself. In short, I'm thinking myself into being. When I base my identity on others' perceptions of me, I'm not basing my identity on anything, really. I become a mirror that reflects itself. </p>
            <p>The tricky thing about basing my identity on my experiences is how I then convey myself. There's no way to convey every experience that's ever happened to me: every situation, every accomplishment, every failure, and every thought. Even if I did manage to write it all down, it'd become an autobiography, so I present an alternative: spaghetti. This ePortfolio is a collection of things that have affected me through the experiences I've had with them. Each thing is connected to others, all ultimately leading back to me, with some especially affecting me. Each thing has a short (or sometimes not so short) page to explain how it's played a role in my identity. Follow the spaghetti to know me more. </p>`
    },
    {
        "title": "Professor Underwood",
        "translatedTitle": "Professor%20Underwood",
        "content": "<p></p>"
    },
    {
        "title": "Professor Underwood",
        "translatedTitle": "Professor%20Underwood",
        "content": "<p></p>"
    },
    {
        "title": "Mom",
        "translatedTitle": "Mom",
        "content": "<p></p>"
    },
    {
        "title": "PSC",
        "translatedTitle": "PSC",
        "content": "<p></p>"
    },
    {
        "title": "UWF",
        "translatedTitle": "UWF",
        "content": "<p></p>"
    },
    {
        "title": "Fink",
        "translatedTitle": "Fink",
        "content": "<p></p>"
    },
    {
        "title": "Baulch",
        "translatedTitle": "Baulch",
        "content": "<p></p>"
    },
    {
        "title": "College",
        "translatedTitle": "College",
        "content": "<p></p>"
    },
    {
        "title": "Gramps",
        "translatedTitle": "Gramps",
        "content": "<p></p>"
    },
    {
        "title": "Family",
        "translatedTitle": "Family",
        "content": "<p></p>"
    },
    {
        "title": "Peers",
        "translatedTitle": "Peers",
        "content": "<p></p>"
    },
    {
        "title": "Authors",
        "translatedTitle": "Authors",
        "content": "<p></p>"
    },
    {
        "title": "Phoenix, Jordan, Carter, Lachlan, Doc, Charlie, Etc.",
        "translatedTitle": "Phoenix,%20Jordan,%20Carter,%20Lachlan,%20Doc,%20Charlie,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Phoenix, Jordan, Carter, Lachlan, Doc, Charlie, Etc.",
        "translatedTitle": "Phoenix,%20Jordan,%20Carter,%20Lachlan,%20Doc,%20Charlie,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Phoenix, Jordan, Carter, Lachlan, Doc, Charlie, Etc.",
        "translatedTitle": "Phoenix,%20Jordan,%20Carter,%20Lachlan,%20Doc,%20Charlie,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Wordsworth, Shakespeare, T.S. Elliot, Tolkien, C.S. LewisWilliam Blake, Rick Riordan, Etc.",
        "translatedTitle": "Wordsworth,%20Shakespeare,%20T.S.%20Elliot,%20Tolkien,%20C.S.%20LewisWilliam%20Blake,%20Rick%20Riordan,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Wordsworth, Shakespeare, T.S. Elliot, Tolkien, C.S. LewisWilliam Blake, Rick Riordan, Etc.",
        "translatedTitle": "Wordsworth,%20Shakespeare,%20T.S.%20Elliot,%20Tolkien,%20C.S.%20LewisWilliam%20Blake,%20Rick%20Riordan,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Wordsworth, Shakespeare, T.S. Elliot, Tolkien, C.S. LewisWilliam Blake, Rick Riordan, Etc.",
        "translatedTitle": "Wordsworth,%20Shakespeare,%20T.S.%20Elliot,%20Tolkien,%20C.S.%20LewisWilliam%20Blake,%20Rick%20Riordan,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Wordsworth, Shakespeare, T.S. Elliot, Tolkien, C.S. LewisWilliam Blake, Rick Riordan, Etc.",
        "translatedTitle": "Wordsworth,%20Shakespeare,%20T.S.%20Elliot,%20Tolkien,%20C.S.%20LewisWilliam%20Blake,%20Rick%20Riordan,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "Wordsworth, Shakespeare, T.S. Elliot, Tolkien, C.S. LewisWilliam Blake, Rick Riordan, Etc.",
        "translatedTitle": "Wordsworth,%20Shakespeare,%20T.S.%20Elliot,%20Tolkien,%20C.S.%20LewisWilliam%20Blake,%20Rick%20Riordan,%20Etc.",
        "content": "<p></p>"
    },
    {
        "title": "LOTR",
        "translatedTitle": "LOTR",
        "content": "<p></p>"
    },
    {
        "title": "Prufrock",
        "translatedTitle": "Prufrock",
        "content": "<p></p>"
    },
    {
        "title": "Songs of Innocence and Experience",
        "translatedTitle": "Songs%20of%20Innocence%20and%20Experience",
        "content": "<p></p>"
    },
    {
        "title": "Narnia",
        "translatedTitle": "Narnia",
        "content": "<p></p>"
    },
    {
        "title": "English",
        "translatedTitle": "English",
        "content": "<p></p>"
    },
    {
        "title": "Philosophy",
        "translatedTitle": "Philosophy",
        "content": "<p></p>"
    },
    {
        "title": "Creative Writing Club",
        "translatedTitle": "Creative%20Writing%20Club",
        "content": "<p></p>"
    },
    {
        "title": "The Corsair",
        "translatedTitle": "The%20Corsair",
        "content": "<p></p>"
    },
    {
        "title": "Reciting Poetry",
        "translatedTitle": "Reciting%20Poetry",
        "content": "<p></p>"
    },
    {
        "title": "Honors",
        "translatedTitle": "Honors",
        "content": "<p></p>"
    },
    {
        "title": "Starwound",
        "translatedTitle": "Starwound",
        "content": "<p></p>"
    },
    {
        "title": "Gender Journey",
        "translatedTitle": "Gender%20Journey",
        "content": "<p></p>"
    },
    {
        "title": "Choosing major",
        "translatedTitle": "Choosing%20major",
        "content": "<p></p>"
    },
    {
        "title": "Choosing major",
        "translatedTitle": "Choosing%20major",
        "content": "<p></p>"
    },
    {
        "title": "DnD",
        "translatedTitle": "DnD",
        "content": "<p></p>"
    },
    {
        "title": "Sister",
        "translatedTitle": "Sister",
        "content": "<p></p>"
    },
    {
        "title": "Dad",
        "translatedTitle": "Dad",
        "content": "<p></p>"
    },
    {
        "title": "Difficulty imagining",
        "translatedTitle": "Difficulty%20imagining",
        "content": "<p></p>"
    },
    {
        "title": "Difficulty imagining",
        "translatedTitle": "Difficulty%20imagining",
        "content": "<p></p>"
    },
    {
        "title": "Fantasy",
        "translatedTitle": "Fantasy",
        "content": "<p></p>"
    },
    {
        "title": "Percy Jackson",
        "translatedTitle": "Percy%20Jackson",
        "content": "<p></p>"
    },
    {
        "title": "Annabeth Chase",
        "translatedTitle": "Annabeth%20Chase",
        "content": "<p></p>"
    },
    {
        "title": "Mythology",
        "translatedTitle": "Mythology",
        "content": "<p></p>"
    },
    {
        "title": "Neurodivergence",
        "translatedTitle": "Neurodivergence",
        "content": "<p></p>"
    },
    {
        "title": "Religious Trauma ✨",
        "translatedTitle": "Religious%20Trauma%20%E2%9C%A8",
        "content": "<p></p>"
    },
    {
        "title": "Religious Trauma ✨",
        "translatedTitle": "Religious%20Trauma%20%E2%9C%A8",
        "content": "<p></p>"
    },
    {
        "title": "Poor",
        "translatedTitle": "Poor",
        "content": "<p></p>"
    },
    {
        "title": "Neglected childhood",
        "translatedTitle": "Neglected%20childhood",
        "content": "<p></p>"
    },
    {
        "title": "Neglected childhood",
        "translatedTitle": "Neglected%20childhood",
        "content": "<p></p>"
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

setTimeout(() => scrollTo(scrollWindow, [...svg.getElementsByTagName("text")].find(e => e.parentElement.textContent.trim() === "Me")), 500);

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
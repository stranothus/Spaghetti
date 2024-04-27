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
            <p>As I've grown and further developed my identity, I've come to realize that it's simply a collection of my experiences, including the ones I put myself through. My own thoughts are just as much experiences as anything else would be. When I think about my identity, I'm reforming it around itself. In short, I'm thinking myself into being. When I base my identity on others' perceptions of me, I'm not basing my identity on anything. I become a mirror that reflects itself. </p>
            <p>The tricky thing about basing my identity on my experiences is how I then convey myself. There's no way to convey every experience that's ever happened to me: every situation, every accomplishment, every failure, and every thought. Even if I did manage to write it all down, it'd become an autobiography, so I present an alternative: the rhetorical trianlge of spaghetti. This ePortfolio is a collection of things that have affected me through the experiences I've had with them. Each thing is connected to others, all ultimately leading back to me, with some especially affecting me. Hopefully, you actually took the time to read the Terms and Conditions to learn how to read the rest (you know who you are). Remember that your browser has a back-button... Follow the spaghetti-links to know me more. </p>`
    },
    {
        "title": "Purpose",
        "transaltedTitle": "Purpose",
        "content": `<div class="content-block"><p>I am alive, and the world must know,<br>
        though I am written in the dark,<br>
        for I write myself as the light—<br>
        I am the light!</p></div>`
    },
    {
        "title": "Before the Cross",
        "transaltedTitle": "Before%20the%20Cross",
        "content": `<div class="content-block"><p>Before the cross I stood<br>
        my feet together, hands<br>
        outstretched as if I was<br>
        crucified.<br>
        A tear was tracing down<br>
        my cheek for my sorrows—<br>
        my own sorrows. I was<br>
        selfish.<br>
        <em>The world’s against ME! ME!</em><br>
        I screamed to Him, thorn-crowned.<br>
        I pressed the thorns to His<br>
        blood-brow.<br>
        I tore at His garments,<br>
        all soaked with blood and sparse<br>
        already, and then I tore<br>
        Christ-flesh.<br>
        I reached up into Christ’s<br>
        barechest and wrenched His heart<br>
        to threaten it to stop<br>
        blood-beating.<br>
        You know nothing, I said,<br>
        nothing of earth and pain,<br>
        with Christ-red splattered on<br>
        earthbound-hands.<br>
        And Christ-eyes turned to me,<br>
        all sunk in, full of man,<br>
        and spoke: <em>So feel my heart,<br>
        sorrow-broken.<br>
        So feel my love for earth,<br>
        that death is worth a chance<br>
        at life. I choose to die<br>
        martyrdom-glorified.</em></p></div>`
    },
    {
        "title": "Before the Dawn",
        "transaltedTitle": "Before%20the%20Dawn",
        "content": `<div class="content-block"><p>We hide books in mattresses.<br>
        We lie over their protruding rectangles.<br>
        We catch two hours of sleep—<br>
        dreaming of twenty-thousand leagues of water<br>
        that hide a thirty-foot squid,<br>
        and a bear who teaches a child<br>
        the laws of a jungle,<br>
        and an artist who is still young<br>
        who sees towers of ivory and a house of hold,<br>
        and a prehistoric earth with a dark heart<br>
        with water lapping the boat—<br>
        so we can beat at stones today<br>
        before and after the dusk<br>
        before we can lie over protruding rectangles,<br>
        feigning that we are asleep<br>
        and that we are not dreaming or dreamers<br>
        before we bring out books from mattresses<br>
        and read about twenty-thousand leagues of death,<br>
        and a bear who saves a child,<br>
        and an artist who is a little older,<br>
        and a more real earth with a flesh heart.<br>
        Before the dawn,<br>
        we hide the books in mattresses<br>
        and lie over their protruding rectangles,<br>
        our heads too full of dreams to sleep,<br>
        and we go about beating stones today,<br>
        dreamers.</p></div>`
    },
    {
        "title": "A Daughter's Mother's Only Song",
        "transaltedTitle": "A%20Daughter's%20Mother's%20Only%20Song",
        "content": `<div class="content-block"><p>I want to write a story for my daughters<br>
        about a kaleidoscope girl<br>
        of shimmering glass patterns,<br>
        who showed the world a million colors,<br>
        but only because she was shattered.<br>
        But they don’t know that.<br>
        She’s their kaleidoscope girl,<br>
        and they want to be like her.<br>
        You will, sweetheart, you will.<br>
        All too soon, I’ll see you grow.<br>
        Tell me, please,<br>
        when the world shatters you,<br>
        when you become<br>
        my kaleidoscope women,<br>
        because I never told my mother,<br>
        and I wish I could have.<br>
        I will be your kaleidoscope mother,<br>
        and I will mend your fractured souls<br>
        when the world shatters you<br>
        so that you will be kaleidoscope women.</p></div>`
    },
    {
        "title": "Broken Mirrors Give Me Gender Euphoria",
        "transaltedTitle": "Broken%20Mirrors%20Give%20Me%20Gender%20Euphoria",
        "content": `<div class="content-block"><p>A broken mirror portrays me<br>
        &emsp; ​in vivid elegy,<br>
        permitting weary eyes to see<br>
        &emsp; ​the multiplicities—<br>
        the entirely incomplete<br>
        &emsp; ​shattered fractures of me.</p></div>`
    },
    {
        "title": "Morning Coffee with God",
        "transaltedTitle": "Morning%20Coffee%20with%20God",
        "content": `<div class="content-block"><p>Not black but rather brown,<br>
        layered like translucent parchment,<br>
        weeding out the light,<br>
        projecting it back in<br>
        rippling reflections.<br>
        <br>
        A twist of steam waltzing over the surface tension,<br>
        twirling its partner around the rim,<br>
        separating to return.<br>
        Sip<br>
        The steam sets under the surface, sleeping, eluding my gaze.<br>
        <br>
        "Like so much passion, it dies<br>
        to become nothing more than a description of<br>
        a morning coffee without any cream.<br>
        Poetry wasn’t meant for this;<br>
        there is no life to be found in coffee."<br>
        <br>
        "But you have found the life now,<br>
        the despair that whimsy is its own plaything,<br>
        as fit to describe coffee as war.<br>
        Is it truly so terrible?<br>
        The coffee vapor looks like breath."</p></div>`
    },
    {
        "title": "Heaven's Tip",
        "transaltedTitle": "Heaven's%20Tip",
        "content": `<div class="content-block"><p>The clouds are beckoning sea tonight,<br>
        between the airy gaps and starry climbs,<br>
        up into the heavens where all’s white—<br>
        despite the sea’s deep dark tonight.<br>
        <br>
        The siren’s song is sung to me;<br>
        on wisping waves, the heart of sea<br>
        is calling deeper into the<br>
        soul-sand-surf stretching before me.<br>
        <br>
        My feet by mind unmine<br>
        are stepping forth to sea sublime,<br>
        forsaking ground beneath like time<br>
        I left behind, ever unmine.<br>
        <br>
        The water roots my feet and shows<br>
        me sands from miles away from shores<br>
        I’d never seen at all before,<br>
        and I am everything it shows.<br>
        <br>
        And there I stand at heaven’s tip<br>
        with waves that crash and grip<br>
        my soul with wondering to rip<br>
        away the earth-dust, leaving heaven’s tip.</p></div>`
    },
    {
        "title": "Mobius",
        "transaltedTitle": "Mobius",
        "content": `<div class="content-block"><p>I can't include this piece. This two-dimensional digital frame won't accomodate it. I took a strip of paper and twisted it once. I took a piece of tape on one end, looped it over and above, and attached it to the other end—the twist still there. And I wrote on it:</p>
        <div id="marquee-parent"><span id="marquee">Oh, to have asymmetry! I am confined to endless finity. Invert me. Unloop me. End me, please. I am perfect imperfection. </span></div>
        <p>A mobius: finitely infinite.There's something to be had there that makes the poem mean more.</p></div>`
    },
    {
        "title": "Questioning",
        "transaltedTitle": "Questioning",
        "content": `<div class="content-block"><p>Are you questioning if you can contort<br>
        to squeeze inside this cardboard box?<br>
        <br>
        How long will we survive<br>
        in adjacent cardboard boxes<br>
        <br>
        once they have taped us shut<br>
        and timed our oxygen?<br>
        <br>
        Do you sit there quietly,<br>
        minding your lungs,<br>
        <br>
        bartering breath for being,<br>
        or do you claw the inside,<br>
        <br>
        furious against the box,<br>
        and desperate to stretch your legs?</p></div>`
    },
    {
        "title": "The American Dream",
        "transaltedTitle": "The%20American%20Dream",
        "content": `<div class="content-block"><p>is filled with cockroaches,<br>
        three of them scurrying away<br>
        when I turn on a flickering light<br>
        to illuminate the lack of a dining table.<br>
        <br>
        The American Dream<br>
        is filled with eviction notices,<br>
        one of them pasted next door<br>
        where I hear my neighbor<br>
        wishing her sons good luck at school.<br>
        <br>
        The American Dream<br>
        is filled with stale bread,<br>
        a loaf for three dollars less,<br>
        that will serve just as well<br>
        for my belly, howling with hunger.<br>
        <br>
        The American Dream<br>
        is filling our lungs,<br>
        a fume that clouds our thoughts<br>
        when we look up from the operation table<br>
        at the gory truth they’ve carved from our hearts:<br>
        <br>
        The American Dream is filled with cockroaches.</p></div>`
    },
    {
        "title": "The Sewing",
        "transaltedTitle": "The%20Sewing",
        "content": `<div class="content-block"><p>They hid their needlework at first,<br>
        welcoming me for tea and cake.<br>
        I sat with them and quenched my thirst;<br>
        I feigned my sitting’s for their sake.<br>
        They hid the tapestry for some-<br>
        time longer. Tea and cakes became<br>
        ritual as trust between blossomed.<br>
        They accepted me the same<br>
        as them. And then, after a long<br>
        and patient time, they showed, at last,<br>
        their tapestry. A woman’s strong<br>
        and lovely face on the canvass<br>
        was crying softly; mouth was hung<br>
        agape, a silent screaming soul.<br>
        A hundred women, some so young,<br>
        adorned the canvas’ sorrow whole.<br>
        They handed me a single small<br>
        and metal needle, urging me.<br>
        I unbuttoned my shirt’s middle<br>
        to grab a woman’s face gently<br>
        from under my left breast and peel<br>
        the tatted skin from flesh to sew<br>
        her into all the rest, surreal<br>
        to me and dressed with tearfull woe.<br>
        I left my hand with needle-holes.<br>
        We drank our teas and ate our cakes.<br>
        We are the weeping woman’s soul,<br>
        and ever will we be the snakes.</p></div>`
    }
];

function scrollTo(parent, target, behavior="smooth") {
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();

    parent.scrollTo({
        left: targetRect.left - svgRect.left + targetRect.width / 2 - parentRect.width / 2,
        top: targetRect.top - svgRect.top + targetRect.height / 2 - parentRect.height / 2,
        behavior: behavior
    });
}

function parallaxScroll(e) {
    e.style.backgroundPosition = `0px ${-e.getBoundingClientRect().top}px`;
}

function setParallaxes(e){
    const imgs = e.getElementsByClassName("img");

    if(!imgs.length) return;

    [...imgs].forEach(e => {
        parallaxScroll(e);
        window.addEventListener("scroll", () => parallaxScroll(e));
    });
}

svg.addEventListener("click", (e) => {
    if(e.target.parentElement.getAttribute("stroke-linecap") === "round") {
        const text = e.target.parentElement.nextSibling.nextSibling.textContent.replaceAll(/\s+/g, " ").trim();
        const page = pagesJSON.find(e => e.title === text) || pagesJSON[0];

        parent.scrollTo(scrollWindow, e.target);

        pageContainer.innerHTML = `<h2>${page.title}</h2>${page.content}`;

        setParallaxes(pageContainer);

        const marquee = document.getElementById("marquee");
        
        if(!marquee) return;

        let letter = marquee.textContent[0];
        let initialLength = marquee.getBoundingClientRect().width;
        marquee.textContent = marquee.textContent.slice(1);
        let newLength = marquee.getBoundingClientRect().width;
        const difference = initialLength - newLength;

        marquee.animate([
            {
                paddingLeft: "10px"
            },
            {
                paddingLeft: `calc(10px - ${difference}px)`
            }
        ], {
            duration: 300
        });

        marquee.textContent = letter + marquee.textContent;

        window.setInterval(() => {
            marquee.textContent = marquee.textContent.slice(1);
            marquee.textContent += letter;

            letter = marquee.textContent[0];
            initialLength = marquee.getBoundingClientRect().width;
            marquee.textContent = marquee.textContent.slice(1);
            newLength = marquee.getBoundingClientRect().width;
            const difference = initialLength - newLength;

            marquee.animate([
                {
                    paddingLeft: "10px"
                },
                {
                    paddingLeft: `calc(10px - ${difference}px)`
                }
            ], {
                duration: 300
            });

            marquee.textContent = letter + marquee.textContent;
        }, 300);
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
setParallaxes(pageContainer);


function zoomIn() {
    const intervalIncrease = window.innerWidth / (1000 / 60);

    const interval = setInterval(() => {
        svg.style.width = svg.getBoundingClientRect().width + intervalIncrease;
        scrollTo(scrollWindow, [...svg.getElementsByTagName("text")].find(e => e.parentElement.textContent.trim() === "Me"), "instant");
    }, 1000 / 60);

    setTimeout(() => clearInterval(interval), 200);
}

svg.style.width = `${window.innerWidth * 1}px`;
scrollTo(scrollWindow, [...svg.getElementsByTagName("text")].find(e => e.parentElement.textContent.trim() === "Me"), "smooth");
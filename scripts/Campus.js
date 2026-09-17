const gebouwInfo = {
    ksh: {
        naam: "Kohnstammhuis",
        adres: "Wibautstraat 2-4, 1091 GM Amsterdam.",
        intro: "Het Kohnstammhuis is sterk verbonden met de Faculteit Onderwijs en Opvoeding. Het gebouw is vernoemd naar natuurkundige, filosoof en pedagoog Philip Kohnstamm.",
        eten: "Er is een Grab & Go Kiosk, op werkdagen geopend.",
        weetje: "Het gebouw heeft een grote HvA-bibliotheek/studieomgeving met 337 studieplekken. Er is ook een Servicepunt voor studenten.",
        ov: "Ongeveer 3-5 minuten lopen vanaf metrostation Weesperplein.",
        openingstijden: "Maandag t/m donderdag ongeveer 07:30–22:30, vrijdag 07:30–18:00."
    },

    tth: {
        naam: "Theo Thijssenhuis",
        adres: "Wibautstraat 2-4, 1091 RZ Amsterdam.",
        intro: "Het Theo Thijssenhuis wordt voornamelijk gebruikt door opleidingen van de Faculteit Onderwijs en Opvoeding en onder andere CMD.",
        eten: "Voor uitgebreid eten kun je gemakkelijk terecht in de nabijgelegen HvA-gebouwen, zoals het Wibauthuis.",
        weetje: "Het gebouw is vernoemd naar Theo Thijssen (1879–1943), een Amsterdamse onderwijzer en schrijver. Hij schreef onder andere het bekende boek Kees de jongen.",
        ov: "Ongeveer 3–5 minuten lopen vanaf metrostation Weesperplein.",
        openingstijden: "Maandag t/m donderdag ongeveer 07:30–22:30, vrijdag 07:30–18:00."
    },

    bph: {
        naam: "Benno Premselahuis",
        adres: "Rhijnspoorplein 1, 1091 GC Amsterdam.",
        intro: "Het Benno Premselahuis is vooral een gebouw voor opleidingen binnen media, communicatie en creatieve richtingen. Het gebouw is vernoemd naar Benno Premsela (1920–1997), een bekende Nederlandse vormgever en interieurarchitect.",
        eten: "Er is een espressobar, normaal op werkdagen van ongeveer 08:00–16:00.",
        weetje: "Benno Premsela was niet alleen ontwerper, maar ook een belangrijke voorvechter voor homorechten. Het gebouw telt meerdere verdiepingen en verschillende vleugels.",
        ov: "Ongeveer 2–4 minuten lopen vanaf metrostation Weesperplein.",
        openingstijden: "Maandag t/m vrijdag ongeveer 07:30–19:30. In vakanties kunnen de tijden afwijken."
    },

    kmh: {
        naam: "Koetsier-Montaignehuis",
        adres: "Mauritskade 11, Amsterdam.",
        intro: "Een van de onderwijsgebouwen aan de noordkant van de Amstelcampus. Het gebouw wordt onder andere gebruikt voor onderwijs en studievoorzieningen.",
        eten: "Er is geen groot HvA-restaurant zoals in het Wibauthuis of Jakoba Mulderhuis vermeld. Voor eten en drinken kun je gemakkelijk naar andere gebouwen op de campus.",
        weetje: "In het gebouw zit een HvA-bibliotheek met ongeveer 90 studieplekken. De bibliotheek is normaal maandag t/m vrijdag 11:00–17:00 geopend.",
        ov: "Ongeveer 2 minuten lopen vanaf metrostation Weesperplein.",
        openingstijden: "Maandag t/m donderdag ongeveer 07:30–19:30, vrijdag 07:30–18:00."
    },

    mlh: {
        naam: "Muller-Lulofshuis",
        adres: "Wibautstraat 5A, 1091 GH Amsterdam",
        intro: "Het Muller-Lulofshuis is onderdeel van de Amstelcampus en is vernoemd naar Marie Muller-Lulofs, die zich inzette voor maatschappelijke en sociale verbeteringen.",
        eten: "Hier vind je Café Amstelcampus.",
        weetje: "Het gebouw is onderdeel van het gebied rond de Wibautstraat waar onderwijs en studentenwoningen dicht bij elkaar liggen.",
        ov: "Ongeveer 3 minuten lopen vanaf metrostation Wibautstraat.",
        openingstijden: "Maandag t/m donderdag ongeveer 07:30–19:30, vrijdag 07:30–18:00."
    },

    wbh: {
        naam: "Wibauthuis",
        adres: "Wibautstraat 3b, 1091 GH Amsterdam.",
        intro: "Een van de belangrijkste en grotere gebouwen van de Amstelcampus. Hier zitten opleidingen van onder andere Economie en Management en Maatschappij en Recht.",
        eten: "Dit gebouw heeft het grootste restaurant van de Amstelcampus, met onder andere Pita Chef, Sardjoe's bara en The Italian Corner. Er is daarnaast een espressobar.",
        weetje: "Het gebouw is vernoemd naar Floor Wibaut (1859–1936), een invloedrijke Amsterdamse wethouder.",
        ov: "Ongeveer 2–4 minuten lopen vanaf metrostation Wibautstraat.",
        openingstijden: "Tijdens reguliere onderwijsperioden wordt 07:30–19:00 als openingstijd vermeld."
    },

    jmh: {
        naam: "Jakoba Mulderhuis",
        adres: "Rhijnspoorplein 2, Amsterdam.",
        intro: "Dit is het nieuwste grote onderwijsgebouw van de Amstelcampus en huisvest vooral opleidingen van de Faculteit Techniek.",
        eten: "Restaurant met Brio & espressobar vanaf 10:00 tot 18:00 geopend.",
        weetje: "Jakoba Mulder (1900–1988) speelde als stedenbouwkundige een belangrijke rol in de ontwikkeling van Amsterdam.",
        ov: "Ongeveer 2–4 minuten lopen vanaf Weesperplein.",
        openingstijden: "Op reguliere lesdagen doorgaans vanaf 07:30."
    }
};


// Wacht totdat de HTML volledig geladen is
document.addEventListener("DOMContentLoaded", function () {

    const gebouwen = document.querySelectorAll(".gebouw");
    const informatie = document.getElementById("informatie");

    function toonInformatie(gebouw) {

        // Bijvoorbeeld: "bph"
        const code = gebouw.getAttribute("data-building");

        // Zoek bph op in gebouwInfo
        const info = gebouwInfo[code];

        // Stop als er geen informatie gevonden is
        if (!info) {
            console.error("Geen informatie gevonden voor:", code);
            return;
        }

        // Zet alle informatie in het informatievak
        informatie.innerHTML = `
            <h2>${info.naam}</h2>

            <p>${info.intro}</p>

            <h3>🍴 Eten</h3>
            <p>${info.eten}</p>

            <h3>🐾 Leuk weetje</h3>
            <p>${info.weetje}</p>

            <h3>📍 Locatie</h3>
            <p>${info.adres}</p>

            <h3>🚇 Openbaar vervoer</h3>
            <p>${info.ov}</p>

            <h3>🕒 Openingstijden</h3>
            <p>${info.openingstijden}</p>
        `;
    }


    gebouwen.forEach(function (gebouw) {

        // Met muis over gebouw
        gebouw.addEventListener("mouseenter", function () {
            toonInformatie(gebouw);
        });

        // Op gebouw klikken
        gebouw.addEventListener("click", function () {
            toonInformatie(gebouw);
        });

    });

});
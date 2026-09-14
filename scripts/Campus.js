const gebouwen = document.querySelectorAll(".gebouw");

const informatie = document.querySelector("#informatie");

gebouwen.forEach (function (gebouw)) {
    
    gebouw.addEventListener("mouseenter", function() {

        console.log("Je gaat over een gebouw");
    });
    
};

const naam = gebouw.dataset.building;

console.log(naam);

informatie.innerHTML = 

<h2>${naam}</h2>
<p>Hier komt straks de informatie</p>

const gebouwInfo = { 
    ksh: {
        naam: Kohnstammhuis
        adres: Wibautstraat 2-4, 1091 GM Amsterdam. 
        intro: Het Kohnstammhuis is sterk verbonden met de Faculteit Onderwijs en Opvoeding. Het gebouw is vernoemd naar natuurkundige, filosoof en pedagoog Philip Kohnstamm. 
        eten: Er is een Grab & Go Kiosk, op werkdagen geopend. 
        weetje: Het gebouw heeft een grote HvA-bibliotheek/studieomgeving met 337 studieplekken. Er is ook een Servicepunt voor studenten. 
        ov: ongeveer 3-5 minuten lopen vanaf metrostation Weesperplein.
        openingstijden: maandag t/m donderdag ongeveer 07:30–22:30, vrijdag 07:30–18:00.
    }

    tth: {
        naam: Theo Thijssenhuis
        adres: Wibautstraat 2-4, 1091 RZ Amsterdam.
        intro: Het Theo Thijssenhuis wordt voornamelijk gebruikt door opleidingen van de Faculteit Onderwijs en Opvoedingen onder andere CMD. 
        eten: Voor uitgebreid eten kun je gemakkelijk terecht in de nabijgelegen HvA-gebouwen, zoals het Wibauthuis.
        weetje:  Het gebouw is vernoemd naar Theo Thijssen (1879–1943), een Amsterdamse onderwijzer en schrijver. Hij schreef onder andere het bekende boek Kees de jongen. 
        ov:ongeveer 3–5 minuten lopen vanaf metrostation Weesperplein.
        openingstijden: maandag t/m donderdag ongeveer 07:30–22:30, vrijdag 07:30–18:00.
    }

    bph: {
        naam: Benno Premselahuis
        adres: Rhijnspoorplein 1, 1091 GC Amsterdam.
        intro: Het Benno Premselahuis is vooral een gebouw voor opleidingen binnen media, communicatie en creatieve richtingen. Het gebouw is vernoemd naar Benno Premsela (1920–1997), een bekende Nederlandse vormgever en interieurarchitect. 
        eten: Er is een espressobar, normaal op werkdagen van ongeveer 08:00–16:00. 
        weetje: Benno Premsela was niet alleen ontwerper, maar ook een belangrijke voorvechter voor homorechten. Het gebouw telt meerdere verdiepingen en verschillende vleugels
        ov: ongeveer 2–4 minuten lopen vanaf metrostation Weesperplein.
        openingstijden: maandag t/m vrijdag ongeveer 07:30–19:30. In vakanties kunnen de tijden afwijken.
    }

    kmh: {
        naam: Koetsier-montaignehuis
        adres: Mauritskade 11, 1091 GC/AV Amsterdam. De HvA-bibliotheek vermeldt Mauritskade 11. 
        intro: Een van de onderwijsgebouwen aan de noordkant van de Amstelcampus. Het gebouw wordt onder andere gebruikt voor onderwijs en studievoorzieningen.
        eten: Er is geen groot HvA-restaurant zoals in het Wibauthuis of Jakoba Mulderhuis vermeld. Voor eten en drinken kun je gemakkelijk naar andere gebouwen op de campus.
        weetje: In het gebouw zit een HvA-bibliotheek met ongeveer 90 studieplekken. De bibliotheek is normaal maandag t/m vrijdag 11:00–17:00 geopend. 
        ov: ongeveer 2 minuten lopen vanaf metrostation Weesperplein.
        openingstijden: maandag t/m donderdag ongeveer 07:30–19:30, vrijdag 07:30–18:00. Tijdens vakanties kunnen deze tijden veranderen. 
    }

    mlh: {
        naam: Muller-Lulofshuis
        adres: Wibautstraat 5A, 1091 GH Amsterdam.
        intro: Het Muller-Lulofshuis is onderdeel van de Amstelcampus en is vernoemd naar Marie Muller-Lulofs, die zich inzette voor maatschappelijke en sociale verbeteringen. 
        eten: Hier vind je Café Amstelcampus. Het café is ook 's avonds en in het weekend geopend; de HvA vermeldt ma–vr 17:00–01:00 en za–zo 10:00–01:00. 
        weetje: Het gebouw is onderdeel van het gebied rond de Wibautstraat waar onderwijs en studentenwoningen dicht bij elkaar liggen. En doordat Café Amstelcampus er zit, heeft het gebouw ook buiten normale lestijden een studentenfunctie.
        ov: ongeveer 3 minuten lopen vanaf metrostation Wibautstraat.
        openingstijden: maandag t/m donderdag ongeveer 07:30–19:30, vrijdag 07:30–18:00.
    }

    wbh: {
        naam: Wibauthuis
        adres: Wibautstraat 3b, 1091 GH Amsterdam.
        intro: Een van de belangrijkste en grotere gebouwen van de Amstelcampus. Hier zitten opleidingen van onder andere Economie en Management en Maatschappij en Recht. 
        eten: Dit gebouw heeft het grootste restaurant van de Amstelcampus, met onder andere Pita Chef, Sardjoe's bara en The Italian Corner. Er is daarnaast een espressobar. 
        weetje: Het gebouw is vernoemd naar Floor Wibaut (1859–1936), een invloedrijke Amsterdamse wethouder. Je vindt er ook FLOOR, het debat- en activiteitencentrum van de HvA.
        ov: ongeveer 2–4 minuten lopen vanaf metrostation Wibautstraat.
        openingstijden: tijdens reguliere onderwijsperioden wordt 07:30–19:00 als openingstijd vermeld; vakanties en speciale dagen kunnen hiervan afwijken. 
    }

    jmh: {
        naam: Jakoba Mulderhuis
        adres: Rhijnspoorplein 2, Amsterdam. 
        intro: Dit is het nieuwste grote onderwijsgebouw van de Amstelcampus en huisvest vooral opleidingen van de Faculteit Techniek. Het is vernoemd naar architect en stedenbouwkundige Jakoba Mulder. 
        eten: Restaurant met Brio & espressobar vanaf 10:00 tot 18:00 geopend
        weetje:Jakoba Mulder (1900–1988) speelde als stedenbouwkundige een belangrijke rol in de ontwikkeling van Amsterdam. Het gebouw heeft daarnaast samenwerkplekken en stilteplekken; de stilteplekken zijn onder andere op de zevende verdieping
        ov: ongeveer 2–4 minuten lopen vanaf Weesperplein
        openingstijden: op reguliere lesdagen doorgaans vanaf 07:30; de actuele geregistreerde uren verschillen per dag en vakanties hebben afwijkende tijden. 
    }

    Studio hva: {
        naam: 
        eten:
        weetje:
        locatie:
    }
}
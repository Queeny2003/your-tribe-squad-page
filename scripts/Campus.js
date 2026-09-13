const gebouwen = document.querySelectorAll(".gebouw");

const informatie = document.querySelector("#informatie");

gebouwen.forEach(function (gebouw)) {
    
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
        naam: 
        eten:
        weetje:
        locatie:
    }

    tth: {
        naam: 
        eten:
        weetje:
        locatie:
    }

    bph: {
        naam: 
        eten:
        weetje:
        locatie:
    }

    kmh: {
        naam: 
        eten:
        weetje:
        locatie:
    }

    mlh: {
        naam: 
        eten:
        weetje:
        locatie:
    }

    wbh: {
        naam: 
        eten:
        weetje:
        locatie:
    }

    jmh: {
        naam: 
        eten:
        weetje:
        locatie:
    }

    Studio hva: {
        naam: 
        eten:
        weetje:
        locatie:
    }
}
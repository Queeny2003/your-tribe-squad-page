
# Squad page
Dit is een overzicht van FDND jaar 1.

## Beschrijving 
Wij hebben een website gemaakt om kennis te maken met hva en onze medestudenten van FNDN jaar 1.

## Gebruik 
Op de homepage vind je alle lievelingsdieren van de studenten van FNDN jaar 1. Als je op het dier klikt word je geleid naar het visitekaartje van de betreffende klasgenoot. Daaronder staat een "button", als je daar op klikt word je doorgeleid naar de campus-pagina.

Op de campus-pagina vind je een plattegrond met alle gebouwen op de campus. Wanneer je op een gebouw klikt verschijnt er meer informatie over het gebouw zoals eetgelegenheden, weetjes, routebeschrijving etc.

## Kenmerken 
De website is gebouws met HTML, CSS en Javascript

### index.html 
Hier hebben we de HREF gebruikt, daarmee wordt het visitekaartje gelinkt naar de betreffende persoon. Naast dat hebben we ook class gebruikt bij dier en icoon. Zodat we in css makkelijk de grootte etc kunnen veranderen en alles gelijk is.
In HTML schreven we dit:
```
        <a href="https://youneselkharraz.github.io/i-love-web/" class="dier">
            <div class="icoon">N</div>
            <p>Naam</p>
        </a>
```

Dat werd dan gelinkt met de code in css:
```
.icoon {
    font-size: 60px;
    transition: 0.3s;
}

.dier:hover .icoon {
    transform: scale(1.35) rotate(-5deg);
}
```

### campus.html
Hier hebben we button gebruikt, als je op het gebouw klikt dan vershijnt er informatie over het gebouw. Ook hier is gebruik gemaakt van class bij de plattegrond en het informatie vlak ernaast. Doordat dit gekoppeld is aan de css kon de plattegrond aangepast worden.

# Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



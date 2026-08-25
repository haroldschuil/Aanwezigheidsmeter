# Presentie

Aanwezigheid registreren bij de start van een les. Drie statussen, drie kleuren,
één tik per student. Draait als geïnstalleerde app op de telefoon en werkt zonder
verbinding.

## Online zetten

1. Maak een nieuwe repository op GitHub en zet deze bestanden in de root.
2. Settings > Pages > Source: `Deploy from a branch`, branch `main`, map `/ (root)`.
3. Na ongeveer een minuut staat de app op
   `https://<gebruikersnaam>.github.io/<repo>/`.

De repository moet publiek zijn, want GitHub Pages werkt op het gratis plan alleen
vanuit publieke repositories. In deze bestanden staan geen studentgegevens, alleen
verzonnen testnamen.

## Op de telefoon zetten

**Android, Chrome.** Open de URL. Bovenin verschijnt een balk met Installeren. Tik
daarop. De app komt op je beginscherm te staan en opent daarna zonder adresbalk, ook
als je geen netwerk hebt.

**iPhone, Safari.** Open de URL, tik op de deelknop en kies "Zet op beginscherm".
Safari toont geen installatiebalk, dat moet je zelf doen.

## Gebruiken

Vul bovenaan eventueel in om welke les het gaat. Per student staan drie knoppen:

- **Aanw.** groen
- **Te laat** oranje
- **Afw.** rood

E�n tik zet de status. Nog een keer op dezelfde knop maakt het ongedaan. Van afwezig
naar te laat is gewoon één tik op Te laat, dus als iemand alsnog binnenloopt pas je
het meteen aan.

De balk bovenin vult zich terwijl je bezig bent, met rechts een teller. Zo zie je in
één oogopslag wie je nog niet hebt gehad.

**Exporteer naar Excel** maakt een xlsx-bestand met vier kolommen: datum, les, naam en
status. De knop is uitgeschakeld tot je minstens één student hebt aangeklikt.

**Wissen** zet alle statussen leeg, bijvoorbeeld voor de volgende les.

## Namen aanpassen

Onder "Namen bewerken" staat de lijst, één naam per regel. Vervang de inhoud en tik
op "Lijst vervangen". Dat wist de statussen die er op dat moment staan.

De namen en de statussen blijven bewaard op het toestel, dus je bent niets kwijt als
de app tussendoor wegvalt.

## Bijwerken

De app zit in de cache van de telefoon. Na een wijziging moet je `VERSIE` bovenin
`sw.js` ophogen, bijvoorbeeld naar `presentie-v2`. Doe je dat niet, dan blijven
telefoons de oude versie tonen.

## Bestanden

| Bestand | Wat het doet |
|---|---|
| `index.html` | de hele app |
| `xlsx.full.min.js` | maakt het Excelbestand, staat lokaal zodat het offline werkt |
| `manifest.webmanifest` | maakt de app installeerbaar |
| `sw.js` | zorgt dat de app zonder netwerk opent |
| `icon-*.png` | pictogrammen voor het beginscherm |

De app verstuurt niets. Alles blijft op het toestel tot je zelf exporteert.

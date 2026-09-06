# Coco Brocades v2 in Framer

Bron: `cocobrocades.bundle.html` (self-extracting Claude Design export).
De uitgepakte pagina staat in `cocobrocades.page.html`, dat is de werkelijke spec.
Doel: Framer-project **Coco Brocades**, home `/`, breakpoint Desktop 1440px.

De vorige aubergine/ijsblauwe opzet is volledig verwijderd: pagina, tokens,
tekststijlen, beide CMS-collecties en de knopcomponent. Dit is een schone herbouw.

## Kleurtokens (23)

Grond `#faf7fa`, Plum `#4a2437` met hover `#61344b`, Lavendel `#cdbaf7` en de
tinten Soft `#e9e0f6`, Tint `#efe8fa`, Pale `#f6f0fb`, Outline `#e4d8f4`,
Hover `#dccdfb`. Brons `#8a6428` als accent. Tekst: Ink `#332b31`, Body `#5a4f56`,
Body Soft `#7a6f76`, Body Muted `#6f636a`, Review Ink `#4a3b43`. Randen: Border
`#e7dfe8`, Border Soft `#e0d5e2`, Border Pill `#d9cede`, Nav Border `#ece5ed`.
Plus Surface White, On Plum Body en On Plum Pale voor tekst op donkere vlakken.

## Tekststijlen (44)

Instrument Serif 400 voor display en koppen, Figtree voor tekst en labels.
Display XL 160 (het woordmerk), Display Italic 82, Heading 1 68 tot Heading 6 24,
Stat 32 en Stat Large 40, plus varianten op plum, kickers in brons en lavendel,
uppercase navigatie- en knoplabels, en Review Body, Stars, Meta.

## Opbouw

Sfeergradiënten als losse laag achter de pagina, sticky nav met blur, hero met
woordmerk en pill-portret plus stempel, Expertise met genummerde lijst op plum,
logobalk met ticker, Diensten, Trajecten, Werkwijze, Boek, Reviews, Contact, Footer.
Ankers: `#top`, `#over`, `#expertise`, `#diensten`, `#trajecten`, `#boek`,
`#reviews`, `#contact`, allemaal met smooth scroll.

## CMS, maximaal twee collecties

- **Producten**: Titel, Prijslabel, Kaarttekst, Beschrijving, Linktekst, Link.
  Vier items, waarvan `1:1 coaching` de echte copy en prijs draagt. De andere drie
  komen uit het ontwerp en zijn nog placeholder.
- **Reviews**: Naam, Quote. Vijf items.

## Twee Framer-eigenaardigheden

1. Een tekststijl wordt genegeerd zodra je losse tekstopmaak op dezelfde knoop zet.
   Elke variant is daarom een eigen preset.
2. Tekst aan een CMS-veld binden wist de toegewezen tekststijl. Volgorde is dus:
   eerst binden, daarna de stijl toewijzen.

## Breakpoints

Drie breakpoints als replica's van Desktop: **Desktop 1440**, **Tablet 810**,
**Phone 390**. Replica's erven alles van de primaire variant, dus er is per
breakpoint alleen overschreven wat anders moet.

- Secties: horizontale padding 64 naar 32 naar 20.
- Rasters: Hero, Expertise, Werkwijze, Boek en Contact worden op tablet en
  mobiel een verticale stack. Diensten gaat van 4 naar 2 naar 1 kolom,
  Trajecten van 3 naar 2 naar 1.
- Beeld: portret 440 naar 380 naar 300 breed, boekcover 360 naar 300 naar 230,
  sfeerfoto 850 naar 520 naar 380 hoog. De sfeergradiënten zijn per breakpoint
  herschaald.
- De cursieve ondertitel schuift 42, 36 en 20 pixels over het woordmerk,
  net als de `clamp` in het ontwerp.

Typografie schaalt via de breakpoint-slots van de tekststijlen: 21 presets
hebben een `medium` en `small` waarde gekregen, van Display XL 160 naar 92 naar
52 tot Body 17 naar 16. Eén wijziging in een preset werkt door op alle
breakpoints.

## Mobiel menu

Op tablet en mobiel zijn de merknaam en de linkbalk verborgen en verschijnt in
plaats daarvan de component **Mobiel menu**: een gesloten variant van 60px die
de links wegknipt, en een open variant met `height: auto` die ze toont. De
hamburger wisselt met `SET_VARIANT` tussen beide. Dit is het patroon dat Framer
zelf voorschrijft voor een drawer, een vaste overlay is er expliciet niet voor
bedoeld.

## Tilt op het boek

De boekcover kantelt bij hover: `perspective` van 1200px op de wrapper,
`preserve3d`, en op de cover zelf een rotatie van -9 en 14 graden, schaal 1.05,
8 pixels omhoog en een diepere schaduw, met een veer als overgang. Het paneel
eromheen staat op `overflow: visible` zodat het boek er tijdens de kanteling
uit mag steken.

Let op: dit is een kanteling bij hover, niet een die de muis volgt. Dat laatste
vraagt een code component.

## Wat nog niet klopt met het ontwerp

- De zes partnerlogo's zijn nog tekstplaceholders. Portret, sfeerfoto en
  boekcover zijn inmiddels echte beelden.
- De draaiende stempeltekst rond de hero-knop is een SVG met `textPath`. Nu staat
  er een cirkel met pijl. Vergt een code component of los SVG-asset.
- De pijlen bij Reviews zijn visueel. De rail zelf scrollt wel horizontaal.
- Mobiel menu en breakpoints ontbreken, er is alleen Desktop 1440.
- De vierde Diensten-kaart is in het ontwerp donker. Een CMS-lijst deelt één
  template, dus alle vier zijn nu wit.

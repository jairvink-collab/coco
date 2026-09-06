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

## Wat nog niet klopt met het ontwerp

- Beelden zijn placeholders op de juiste maat en vorm: portret, sfeerfoto,
  boekcover en zes logo's.
- De draaiende stempeltekst rond de hero-knop is een SVG met `textPath`. Nu staat
  er een cirkel met pijl. Vergt een code component of los SVG-asset.
- De pijlen bij Reviews zijn visueel. De rail zelf scrollt wel horizontaal.
- Mobiel menu en breakpoints ontbreken, er is alleen Desktop 1440.
- De vierde Diensten-kaart is in het ontwerp donker. Een CMS-lijst deelt één
  template, dus alle vier zijn nu wit.

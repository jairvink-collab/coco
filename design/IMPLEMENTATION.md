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

Op tablet en mobiel verbergt de nav de linkbalk en verschijnt een hamburger
rechts in de balk. Die opent met `SHOW_OVERLAY` een `FixedOverlayNode` waarvan
het paneel op alle vier de randen is vastgezet, dus echt schermvullend. Het
paneel is plum, met de merknaam en een sluitknop bovenin, zeven links in
Instrument Serif en het e-mailadres onderaan. De sluitknop en elke link vuren
`DISMISS_OVERLAY`, de achtergrond blokkeert scrollen en sluit bij een tik ernaast.

Framer raadt normaal een drawer met een open variant aan in plaats van een vaste
overlay, maar dat kan niet schermvullend over de pagina liggen. Voor deze
expliciete wens is de overlay de juiste keuze.

## UX-correcties

- De intro bij Trajecten stond op `width: auto`. Bij meerregelige tekst hugt dat
  de inhoud in plaats van mee te krimpen, waardoor de tekst op mobiel buiten
  beeld liep. Nu `1fr`, en op mobiel staat de kop verticaal.
- De hero-knoppen wrapten gecentreerd in een horizontale rij, waardoor ze scheef
  onder elkaar leken te staan. Op mobiel is dat nu een verticale stack links
  uitgelijnd, met de primaire knop over de volle breedte.
- De hamburger stond tegen de merknaam aan. De merknaam neemt nu `1fr`, zodat de
  knop tegen de rechterrand valt.
- De knoppen bij het boek en de verstuurknop lopen op mobiel mee met de breedte
  van hun buren, zodat er geen ongelijke randen meer staan.
- Op tablet was het portret 380px breed in een kolom van ongeveer 345px en liep
  het voorbij de marge. Nu volle breedte met een maximum van 330px.

## Boekcover en de tilt

De aangeleverde PNG was 666 bij 375 pixels, maar het boek besloeg daarvan maar
233 bij 342 in het midden: ruim 200 pixels transparante ruimte links en rechts.
Een schaduw op het frame viel daardoor ver buiten het boek, en een kanteling
draaide om een middelpunt dat grotendeels leeg was.

De cover is bijgesneden tot precies het boek en opnieuw geupload. Het kader volgt
nu de verhouding van het boek zelf, 0,685 breed ten opzichte van hoog: 280 bij
409 op desktop, 228 bij 333 op tablet en 176 bij 257 op mobiel.

De kanteling bij hover staat er weer op, zonder enige schaduw: `perspective` van
1200px op de wrapper, en op de cover een rotatie van -8 en 12 graden, schaal 1.04
en 6 pixels omhoog, met een veer als overgang. De wrapper staat op
`overflow: visible` zodat de kanteling niet wordt afgeknipt.

De bijgesneden cover staat ook in `framer/assets/boek-cover-bijgesneden.png`.

## Pijlen bij Reviews

De rail heeft `elementId="reviews-rail"`, zodat hij in de DOM op te zoeken is.
Een code override in `ReviewArrows.tsx` hangt aan beide pijlknoppen en roept
`scrollBy` aan op die rail, met dezelfde stapgrootte als het ontwerp:
`min(clientWidth * 0.8, 520)`. De knoppen en de rail blijven gewoon canvas-native,
de override voegt alleen het gedrag toe.

Framer heeft geen ingebouwde actie om een container te scrollen, en de
meegeleverde Carousel component heeft alleen slepen, geen pijlen. Een override
is daarom de enige route die de bestaande opmaak intact laat. De bron staat ook
in `framer/code/ReviewArrows.tsx`.

Overrides draaien alleen in preview en op de gepubliceerde site, niet op het
canvas zelf.

## Wat nog niet klopt met het ontwerp

- De zes partnerlogo's zijn nog tekstplaceholders. Portret, sfeerfoto en
  boekcover zijn inmiddels echte beelden.
- De draaiende stempeltekst rond de hero-knop is een SVG met `textPath`. Nu staat
  er een cirkel met pijl. Vergt een code component of los SVG-asset.
- Mobiel menu en breakpoints ontbreken, er is alleen Desktop 1440.
- De vierde Diensten-kaart is in het ontwerp donker. Een CMS-lijst deelt één
  template, dus alle vier zijn nu wit.

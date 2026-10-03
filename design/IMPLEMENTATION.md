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

## CMS

Er is nog één collectie: **Reviews**, met Naam en Quote. Elf items, de echte
reviews van cliënten.

De collectie Producten is weg. De dienstenkaarten op de home zijn nu een
component in plaats van een CMS-lijst.

## Component Dienst Kaart

De kaart is een `ComponentNode` met vijf controls: Prijslabel, Titel,
Kaarttekst (als tekstvlak), Linktekst en Link. De hele kaart is de link, net als
in de CMS-versie. Op de home staan vier instanties in een raster, en de tekst
staat per instantie in de controls.

De wortel van het component heeft `height: auto`. Dat is bewust: een component
met een vaste hoogte dwingt elke instantie in die hoogte, ook op mobiel waar de
kaart korter mag zijn. Nu hugt de kaart zijn inhoud, en op desktop en tablet
staan de instanties op `height: 1fr` zodat ze toch even hoog zijn.

Prijzen: 1:1 coaching vanaf 650, The Nourish Club vanaf 350, het kookboek vanaf
26,99 en lezingen en workshops op aanvraag. Dezelfde bedragen staan op de
pagina's `/1-1-coaching` en `/the-nourish-club`.

## Twee Framer-eigenaardigheden

1. Een tekststijl wordt genegeerd zodra je losse tekstopmaak op dezelfde knoop zet.
   Elke variant is daarom een eigen preset.
2. Tekst aan een CMS-veld binden wist de toegewezen tekststijl. Volgorde is dus:
   eerst binden, daarna de stijl toewijzen.

## Breakpoints

Drie breakpoints als replica's van Desktop: **Desktop 1440**, **Tablet 768**,
**Phone 390**. Replica's erven alles van de primaire variant, dus er is per
breakpoint alleen overschreven wat anders moet.

De breedte van een breakpoint bepaalt zijn media query. Tablet stond op 810 en
is naar 768 gezet, op alle negen pagina's en op de layout template. De ranges
zijn nu Desktop vanaf 1440, Tablet van 768 tot 1440 en Phone tot 768.

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
1200px op de wrapper, en op de cover een rotatie van 3 graden over de x-as en 7
over de y-as, schaal 1.02 en 8 pixels omhoog. Het draaipunt ligt op 62 procent
hoogte, zodat het boek om zijn onderkant kantelt in plaats van om zijn midden.
De overgang is een veer van 0,55 seconde met weinig terugveren. De wrapper staat
op `overflow: visible` zodat de kanteling niet wordt afgeknipt.

De cover is aanklikbaar en opent de boek-PDF op boekdb in een nieuw tabblad.

De bijgesneden cover staat ook in `framer/assets/boek-cover-bijgesneden.png`.

## Sitestructuur

Zes pagina's, allemaal met dezelfde layout template:

- `/` home
- `/over-mij`
- `/1-1-coaching`
- `/the-nourish-club`
- `/boek`
- `/contact`

De overzichtspagina `/diensten` en de losse pagina's voor het kookboek en voor
lezingen en workshops bestaan niet meer. Coaching en The Nourish Club staan nu
los, dus de terugknop Alle diensten is van allebei de pagina's gehaald. De
dienstenkaarten op de home wijzen rechtstreeks naar `/1-1-coaching`,
`/the-nourish-club`, `/boek` en `/contact`.

## Layout template

Nav en footer staan in een `LayoutTemplateNode` met de naam Site Layout, met een
`PlaceholderNode` ertussen waar de pagina-inhoud in valt. De template heeft eigen
breakpoints voor Desktop, Tablet en Phone, inclusief het mobiele menu. Alle
pagina's verwijzen ernaar via `layoutTemplate`, dus de navigatie bestaat maar op
één plek.

De template-breakpoint eist een vaste pixelhoogte; `height: auto` wordt geweigerd.
Uitlijning, gap, padding, achtergrond en overflow van een pagina-breakpoint zijn
eigendom van de template en kunnen niet op de pagina zelf worden gezet.

De navigatie wijst nu naar pagina's: Over mij, Diensten, Het boek. Trajecten en
Reviews blijven ankers op de home. Expertise is uit de balk gehaald en staat als
sectie op `/over-mij`.

Elke pagina heeft eigen Desktop-, Tablet- en Phone-breakpoints voor de inhoud,
plus eigen `metadata.title` en `metadata.description`.

De nieuwe pagina's gebruiken geen CMS, alles staat statisch op het canvas.

## Reviewkaarten

De quote zit in een aparte houder met `overflow: auto` en een maximale hoogte van
230 pixels, op mobiel 180. Die ruimte is opgerekt toen de echte reviews erin
kwamen, die een stuk langer zijn dan de placeholders. De kaart zelf houdt een automatische hoogte, dus korte
reviews blijven korte kaarten en alleen een lange review krijgt een scrollbare
tekst. Sterren en naam blijven altijd staan.

Let op de valkuil: een kind met `height: 1fr` in een kaart met automatische hoogte
krijgt geen ruimte en klapt samen tot de minimumhoogte. De begrenzing hoort dus op
de teksthouder te staan, niet op de kaart. Daarom staan de rail en de kaart zelf
op `height: auto`: met een vaste railhoogte viel de naam onder de kaartrand weg.

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

## Twee formulieren

**Het korte contactformulier** staat op de home en op de contactpagina, in
hetzelfde plum paneel: naam, e-mailadres en een vrij bericht, met de knop
Verstuur. Op de contactpagina is de tracking-id `contact-pagina-form`, op de
home `kennismaking-form`.

**Het intakeformulier** hoort bij de coaching en staat daarom op
`/1-1-coaching`, onderaan in een eigen sectie met `elementId="intake"`. De knop
Plan een intake erboven scrollt met `smoothScroll` naar `/1-1-coaching#intake`
in plaats van door te sturen naar contact.

Het formulier zelf: drie korte velden in pilvorm voor naam, leeftijd en
e-mailadres, daarna zes open vragen, elk als een eigen blok met een label, soms
een toelichting eronder, en een tekstvlak van 112 pixels hoog met een radius van
24. De namen van de velden zijn `naam`, `leeftijd`, `email`, `hulpvraag`,
`gewenste-verandering`, `dagelijkse-invloed`, `voorgeschiedenis`,
`huidige-begeleiding` en `overig`. Alleen de laatste is niet verplicht.
De tracking-id is `intakeformulier`.

Het paneel is op desktop twee kolommen, waarbij de linkerkolom `sticky` staat op
120 pixels zodat de uitleg meeloopt langs het lange formulier. Op tablet en
mobiel is het paneel een verticale stack met de uitleg boven het formulier, en
daar staat de kolom weer op `relative`, met 48 en 28 pixels padding in plaats van
72.

## Toon en contactgegevens

- Het e-mailadres is overal `cocobrocades@gmail.com`, zowel in de tekst als in de
  `mailto:`. Het staat op drie plekken: de contactpagina, het mobiele menu en de
  footer.
- De contactsectie belooft niets over geld of tijd meer. Geen gratis
  kennismaking, geen twintig minuten en geen twee werkdagen, maar simpelweg
  "Ik neem zo snel mogelijk contact met je op". Dat geldt voor de contactpagina
  en voor hetzelfde blok op de home.
- De boekpagina staat in de ik-vorm. Coco schreef het boek zelf, dus ze praat
  daar niet in de derde persoon over zichzelf.

## Links

De boekcover opent de boek-PDF op boekdb in een nieuw tabblad. De footer heeft
Instagram, TikTok en YouTube, alle drie naar de echte kanalen en in een nieuw
tabblad.

## Wat nog niet klopt met het ontwerp

- De zes partnerlogo's zijn nog tekstplaceholders. Portret, sfeerfoto en
  boekcover zijn inmiddels echte beelden.
- De draaiende stempeltekst rond de hero-knop is een SVG met `textPath`. Nu staat
  er een cirkel met pijl. Vergt een code component of los SVG-asset.
- De vierde Diensten-kaart is in het ontwerp donker. Alle vier zijn nu wit. Met
  het component kan dat wel, via een tweede visuele variant.

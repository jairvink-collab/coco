# Voedingspraktijk → Framer implementation

Source design: `Voedingspraktijk.dc.html` (Claude Design export, "Organic" design system).
Target: Framer project **Coco Brocades** (`jiYigP9ZWixVFJrGOztH`), home page `/`.

The page is built from Framer-native nodes — no HTML import — so everything stays
editable on the canvas. The design system was registered as project-level styles
first, so new pages inherit the look automatically.

## Colour style tokens

| Token | Value | Used for |
| --- | --- | --- |
| Aubergine | `#4c1a31` | page ground, text on light surfaces |
| Aubergine Surface | `#642440` | cards, book panel |
| Aubergine Deep | `#5c2039` | hero decorative blob |
| Aubergine Glow | `#7a2c4c` | book decorative blob |
| Aubergine Muted | `rgba(76,26,49,.75)` | body copy on the ice contact panel |
| Ice | `#a9dcf3` | primary text, primary button fill |
| Ice Muted | `rgba(169,220,243,.82)` | body copy |
| Ice Subtle | `rgba(169,220,243,.55)` | footer meta, captions |
| Ice Tint | `rgba(169,220,243,.14)` | tag pills, social chips |
| Ice Divider | `rgba(169,220,243,.22)` | footer rule, outline buttons |
| Saffron | `#f0c24a` | accent badge, kickers, bullets |
| Cream | `#fff8f2` | review cards |
| Terracotta | `#c67139` | review stars (inherited from Organic's accent) |

## Text style presets

Caprasimo 400 for display, Figtree for body — the Organic system's pairing.

Display 88 · Heading 1 60 · Heading 2 50 · Heading 3 34 · Heading 4 28 · Heading 5 24 ·
Brand 26 · Stat 30 · Kicker 13 caps · Body Large 19 · Body 17 · Body Small 16 ·
Nav Link 15 · Button Label 16 · Button Label Small 15 · Tag Label 13 · Meta 15 · Stars 22

Dark-on-light variants (for the cream review cards and the ice contact panel):
Heading 2 Dark · Heading 5 Dark · Body Large Dark · Body Small Dark · Stat Dark ·
Tag Label Dark · Badge · Button Label · Button Label Ice
Centred variants (marquee header only): Heading 2 Center · Body Center · Logo Label

Note: Framer ignores inline text overrides on a node that carries a style preset, so
each distinct treatment is its own preset rather than a preset plus a local tweak.

## Page structure

Breakpoint `Desktop` widened to 1440px to match the design's `max-width: 1440px`.
Sections in order: Nav · Hero · Expertise + Over mij · Samenwerkingen (ticker) ·
Boek · Trajecten · Zo werkt het · Reviews · Contact · Footer.

Scroll anchors: `#expertise`, `#over`, `#trajecten`, `#contact`, wired from the nav,
both hero buttons and the traject cards with smooth scroll.

## CMS

Repeating content is CMS-backed rather than hardcoded on the canvas:

- **Trajecten** — Kicker, Titel, Omschrijving, Prijs (3 items)
- **Reviews** — Naam, Quote (5 items)

Bind order matters: set `collectionList.collection` on the list *before* binding any
field to a descendant, or the binding is rejected as out of scope.

## Deviations from the source

- The organic blob mask (`46% 54% 48% 52% / 40% 38% 62% 60%`) has no Framer
  equivalent — CSS elliptical corner radii aren't supported. Approximated with four
  differing px corner radii for an asymmetric blob.
- Type scale consolidated: the source uses ~11 heading sizes via `clamp()`; this maps
  them onto 6 steps so the scale stays maintainable.
- Review carousel arrows are visual only. The source drives them with JavaScript;
  the rail itself is horizontally scrollable. Making them functional needs either a
  code component or Framer's built-in Carousel.
- Images are placeholder frames at the correct size, radius and mask, pending the
  real assets (portrait, gym photo, client photo, book cover, 7 partner logos).

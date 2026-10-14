# Research Systems design system

Research Systems is a scientific and engineering design system for **technical papers, reports, presentations, infographics** and the web surfaces that publish them. It is tuned for data centres, digital twins, thermal systems, AI, energy and simulation: stark white editorial space, deep green-black bands, soft mineral surfaces, painterly gradient media used sparingly, and clear process diagrams. It should feel refined and controlled, never pushy.

## Sources

- `uploads/DESIGN.md`: "enterprise-editorial" design spec (version alpha). The **only** source supplied: colour, type, radius and spacing tokens, two gradient presets, 15 component definitions, layout, elevation and responsive rules. All numeric values in `tokens/` are copied from it verbatim.
- No Figma file, codebase, slide deck, logo or imagery was provided.
- Fonts named in the spec (all SIL OFL 1.1) were self-hosted from Google Fonts into `fonts/`.
- Icons named in the spec (Lucide, ISC) were copied from `lucide-static@0.454.0` into `assets/icons/`.

**No Research Systems logo exists.** The brand name is typeset ("Research Systems", Space Grotesk 500) wherever a mark would go. Do not draw or invent one.

**Affiliation mark.** `assets/logos/nust-logo.png` is the seal of the National University of Sciences and Technology (NUST), Pakistan, supplied by the user (1000×1000 PNG, transparent). Use it as an institutional affiliation beside the typeset brand name, never as the Research Systems mark: 48–64px on white, full colour, unaltered (no recolouring, cropping or placing on gradients), with the full university name set in Inter beside it.

## Index

| Path | What |
|---|---|
| `styles.css` | Entry point: `@import`s only. Link this one file. |
| `tokens/` | `fonts.css` (@font-face) · `colors.css` · `typography.css` (+ `.rs-*` role classes) · `spacing.css` · `effects.css` (rules, focus, gradients, motion) · `viz.css` (data + status) · `base.css` (element defaults, `.rs-media-*`) |
| `fonts/` | Space Grotesk, Inter (+ italic), IBM Plex Mono woff2 (latin, latin-ext) |
| `assets/icons/` | 95 Lucide SVGs + licence |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/<group>/` | React primitives: `Name.jsx` + `Name.d.ts` + `Name.prompt.md` + one `*.card.html` per group |
| `ui_kits/website/` | Click-through web presence: home, research index, insights, contact |
| `slides/` | One Design System card per slide type (16:9); each renders that slide live from the presentation template |
| `templates/` | Starting points (Design Components): `technical-paper`, `technical-report`, `presentation`, `infographic`: each folder is self-contained (`ds-base.js`, `support.js`, `doc-page.js` / `deck-stage.js`) |
| `SKILL.md` | Agent-skill entry point |
| `thumbnail.html` | Project tile |

## Components

Namespace at runtime: `window.ResearchSystems_3407f2` (load `_ds_bundle.js`).

- **icons/**: `Icon`
- **actions/**: `Button` (primary pill · secondary text link · outline pill)
- **labels/**: `MonoLabel`, `Tag`, `CategoryChip`, `StatusChip`, `IntegrationBadge`
- **forms/**: `TextInput`, `SearchField`, `FormCard`, `FormRow`
- **navigation/**: `AnnouncementBar`, `SiteNav`, `SiteFooter`
- **media/**: `MediaCard` (dusk · lagoon · placeholder), `ConsoleCard`, `LogoStrip`
- **content/**: `CapabilityCard`, `ProductCard`, `FeatureBand`
- **editorial/**: `Figure`, `Callout`, `Metric`
- **data/**: `DataTable`, `ResearchTable`
- **charts/**: `LineChart`, `BarChart`, `Heatmap`
- **diagrams/**: `ProcessDiagram`

Mapping to DESIGN.md: button-primary / button-secondary / button-pill-outline → `Button`; announcement-bar → `AnnouncementBar`; hero-photo-card + gradient-media-card → `MediaCard`; agent-console-card → `ConsoleCard` (with `StatusChip`, `IntegrationBadge`); trust-logo-strip → `LogoStrip`; capability-card → `CapabilityCard`; dark-feature-band → `FeatureBand`; product-card → `ProductCard`; blog-filter-chip → `CategoryChip`; research-table → `ResearchTable` (topic pills → `Tag`); contact-form-card → `FormCard` + `FormRow` + `TextInput`; footer-newsletter → `SiteFooter`. `SiteNav`, `SearchField` and `MonoLabel` implement the spec's layout, search-field and mono-label rules.

### Intentional additions

Not defined in DESIGN.md; added because the brief calls for papers, reports, slides, infographics and process diagrams.

- `Icon`: wraps the Lucide subset at the house stroke weight (1.5).
- `ProcessDiagram`: the brief's "clear process diagrams": nodes, labelled arrows, feedback loop.
- `Figure`: numbered figure/table frame with caption and source, needed by every paper and report.
- `Callout`: key finding / assumption / limitation aside for technical writing.
- `Metric`: headline figure with unit and baseline, for summaries, slides, infographics.
- `DataTable`: booktabs-style results table (the spec's research-table is a publication list, not a data table).
- `LineChart`, `BarChart`, `Heatmap`: data graphics for thermal, energy and simulation results.
- `tokens/viz.css`: categorical, thermal-sequential and diverging palettes plus status colours, derived in OKLCH from the core palette so data never borrows the media-only gradient stops.

## Content fundamentals

**Voice.** Measured, precise, evidence-first. Write declarative sentences that lead with the result, then the evidence, then the method. Numbers replace adjectives: "cuts cooling energy by 11–14%" rather than "dramatically reduces energy". Confidence comes from data and restraint, not emphasis.

**Person.** "We" for the research team in papers and reports ("We calibrated the twin against 14 months of telemetry"). "You" sparingly on web surfaces, addressed to the operator's facility ("Model your hall before you change it"). Never "I".

**Spelling.** British English: modelling, optimise, centre, colour, programme (but "program" for software).

**Casing.** Sentence case everywhere: headings, buttons, nav, captions ("Request a briefing", not "Request A Briefing"). Uppercase appears only through mono labels (CSS `text-transform`; author the text in sentence case). Module names are proper nouns (Twin, Simulate).

**Headlines.** Short declarations of two to six words; hero statements may end with a full stop ("Measured."). Section headings state the finding, not the topic: "Calibrated against 14 months of telemetry" beats "Calibration".

**Actions.** Verb-first, two or three words: "Request a briefing", "Read the paper", "Download PDF", "See the method". One primary pill per view; everything else is a text link.

**Numbers and units.** Space before SI units (27.4 °C, 40 MW, 4.2 M cells); no space before % in running text (12%). True minus (−12), en dash for ranges (11–14%, Mar 2025 – Feb 2026), × for multiplication, ± for uncertainty. Dates as "14 Mar 2026"; 24-hour time. Always give a baseline or period: "−12% vs. fixed-setpoint baseline".

**Figures.** Every figure is numbered and referenced in text. Caption states what is shown, conditions and units: "Fig. 3. Rack inlet temperature at 40% IT load, CRAH-3 offline. Bands at 1 °C." A source line gives provenance: "Source: twin run 0412, calibrated 14 Mar 2026".

**Separators.** Middle dot for metadata facets: "Technical paper · 18 min · 14 Mar 2026".

**What we don't do.** No em dashes. Use commas, colons, periods, hyphens, or parentheses. (This one is non-negotiable.) No emoji. No exclamation marks. No hype ("revolutionary", "unleash", "seamless", "magic"). AI is described by function ("surrogate model", "research agent", "forecaster"), never as sentient. No invented customer claims or logos.

**Examples.**
- Hero: "Model the hall before you build it."
- Mono label: "DIGITAL TWIN · THERMAL"
- Section: "From sensor to decision in four steps"
- Callout: "Calibrated twins cut cooling energy by 11–14% without breaching ASHRAE A1."
- Announcement: "New paper: calibrating thermal twins against live rack telemetry. Learn more"
- Footer label: "Stay current" / headline "Research notes, once a month."

## Visual foundations

**Colour.** White canvas is the default surface. Near-black primary (#17171c) carries CTAs, the footer and consoles; true black only for the announcement bar and highest-contrast text. Deep green (#003c33) and dark navy (#071829) arrive as full-width or 22px-rounded bands for method, capability and assurance sections. Coral (#ff7759) is reserved for editorial taxonomy and small warm markers; action blue (#1863dc) for links. Soft stone (#eeece7) and pale green/blue washes provide section surfaces. Media stops (rust, plum, periwinkle, mist, cream, teal, abyss, peach) exist only inside gradients. Data uses its own palette (`--viz-*`). Muted #93939f is 3.0:1 on white: use it on dark surfaces or for large text; small text on white uses slate or body-muted.

**Type.** Space Grotesk for monumental display only (hero 96/1.0/−1.92px, product 72/1.0/−1.44px). Inter for everything else (60 → 12px) at weight 400; 500 only for buttons and the wordmark. IBM Plex Mono, uppercase, +0.28px, for labels, figure references, units in tables and chart ticks. One oversized headline per page, then restrained 16–24px copy. Hierarchy comes from size, space and surface, never heavy bold. Print documents keep all text at 12pt (16px) or larger.

**Spacing and layout.** 8px base with exact one-offs (2, 6, 10, 20, 22, 28, 36, 56, 60, 64). Sections separate by 80px or more; whitespace is a trust signal. Density appears only where information needs it: research rows, tables, forms. Container 1280px max with 40px side padding (24px mobile). Nav is three-zone (wordmark · centred links · sign-in + pill). Grids are 3-up on desktop, collapsing to 2 then 1. No fixed or sticky chrome by default.

**Backgrounds.** Flat. White, stone or pale washes, plus deep-green/navy bands. No patterns, textures, illustrations or full-bleed photography behind text. The only texture is an optional 3.5% fractal-noise overlay on large gradient panels to stop banding.

**Gradients.** Two media presets, `dusk` (warm, 140°, plum → mist with rust and periwinkle glows) and `lagoon` (cool, cream → teal → abyss with a peach glow). They live only in `MediaCard` panels and CTA bands at least 280px tall, with 22px radius and `overflow: hidden`. At most two in view, never the same preset side by side, never on buttons, chips, nav, text or small cards. No body text on a gradient; content floats on an opaque console card.

**Protection vs capsules.** No protection gradients or scrims. Anything placed over media sits on an opaque capsule (the near-black console card, 8px radius). No glass, no backdrop blur.

**Transparency.** Only on dark surfaces: 6% and 10% white for raised cards and chips, 16%/32% white for rules and outlines, 72% white for secondary text.

**Borders.** 1px only. Hairline #d9d9dd for list rules and inputs; #e5e7eb for utility rules; #f2f2f2 for the softest card containment; 1px primary for outline pills and booktabs table rules.

**Shadows and elevation.** None. Depth comes from surface alternation (white / stone / dark band), media contrast and rounded corners. The focus ring is the only box-shadow.

**Corner radii.** 4px inputs, search, thumbnails · 8px cards, chips, diagram nodes, consoles, dialogs · 16px grouped blocks · 22px signature media and bands · 30px filter pills · 32px CTAs · full for dots. Rounded, never cute; major media never below 8px.

**Cards.** Flat and quiet: unframed with a top hairline (capability), white with #f2f2f2 border and 4px radius (boxed), stone fill with 8px radius and 32px padding (product), or 6% white on dark bands. Many sections use no cards at all, only rules and open space.

**Imagery.** Muted and temperature-paired (warm against cool), low chroma, no neon. Photography should be natural and neutral (plant rooms, halls, instruments), never stock "AI brain" imagery. Technical renders (CFD fields, heat maps) use the thermal ramp. Images sit in rounded cards; in previews use the stone placeholder frame.

**Data graphics.** Hairline grid, 1px axis, 12px mono ticks, 2px lines. Measured solid, modelled dashed, limits in coral dashed with a label. Highlight one series or bar and drop the rest to 35%. Heatmaps use seven discrete bands (thermal sequential for magnitude, diverging for deviation). Tables are booktabs: primary rule top and bottom, hairline between rows, no vertical rules, no zebra.

**Diagrams.** Nodes are 8px-radius boxes, 1px hairline, 16px padding, mono step number top-left, optional icon top-right. Connectors are 1px slate lines with small solid arrowheads, labelled in 11px mono with what flows ("1 Hz", "setpoints"). One node may be emphasised (filled near-black; white on dark bands). Feedback loops run underneath, labelled.

**Motion.** Minimal. Colour and underline transitions at 120–200ms, `cubic-bezier(0.2, 0, 0, 1)`. No bounces, parallax, scroll-jacking or entrance choreography. Optional slow glow drift on gradient media (±5%, 30s loop), disabled under `prefers-reduced-motion`.

**Hover.** Primary pill darkens to true black (white pill → stone on dark). Text links thicken their underline from 1px to 2px. Outline pills fill with stone. Research rows underline their title. Footer links go from muted to white. Nothing scales, lifts or glows.

**Press and focus.** No shrink or bounce. Selected filter pills invert to filled. Keyboard focus is a 2px focus-blue outline with 2px offset; text inputs switch to a violet (#9b60aa) border; errors use #b30000 with a 1px ring.

## Iconography

- **System:** Lucide (ISC). 95 icons covering UI affordances and the domain (server, cpu, thermometer, wind, droplets, zap, gauge, activity, box, workflow, chart-line, sigma, atom, brain-circuit…). Unmodified SVGs in `assets/icons/`; the same set is embedded in the `Icon` component. CDN fallback: `https://unpkg.com/lucide-static@0.454.0/icons/<name>.svg`.
- **Weight:** stroke 1.5 by default (thinner than Lucide's 2 to match the thin-line brief), 1.25 at 32px and above. Always outline, never filled; colour follows text (`currentColor`).
- **Sizes:** 16 in badges and inline, 20 default UI, 24 nav and diagrams, 32+ capability markers.
- **Use:** affordances (arrows, close, search, download), integration badges (icon + text, never vendor logos), capability markers, diagram nodes. Not as decoration, not on gradients.
- **Illustrations:** DESIGN.md calls for in-house thin-line geometric illustrations. None were supplied; Lucide icons at 32px stand in until they exist.
- **No** icon font, PNG icons or emoji. Unicode is used typographically, not as icons: · (separator), ° ± − × – (technical text), ↺ (loop label in stacked diagrams).

## Templates and UI kits

- `ui_kits/website/`: the web presence described in DESIGN.md (home hero with dusk/lagoon pair, research index, insights index, contact).
- `templates/technical-paper/`: flowing, print-ready paper (`<doc-page>`): running header/footer, title block, abstract, key results, numbered sections, process figure, binned heatmap, booktabs table, references. Tweaks: draft mark, key-results strip.
- `templates/technical-report/`: four explicit A4 pages: gradient cover, executive summary with metrics and recommendations, findings with chart and table, method with process band. Tweaks: cover media (dusk · lagoon · none), classification.
- `templates/presentation/`: 16:9 deck (1920×1080, `<deck-stage>`): title, section, statement, process, chart, metrics, table, heatmap comparison, closing. Tweaks: running footer, gradient title panel.
- `templates/infographic/`: 1200px-wide long-form infographic: headline, fact console on dusk media, key figures, loop on deep green, heatmap with annotations, before/after bars, sources. Tweaks: annotations, sources.

Template text is inline and click-editable; slide and print text never drops below 24px (slides) or 12pt / 16px (print).

Sample figures in templates and kits are illustrative, not measured data.

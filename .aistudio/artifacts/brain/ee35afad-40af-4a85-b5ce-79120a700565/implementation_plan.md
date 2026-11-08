# DP — Standalone Single-File Digital Business Card for GitHub Pages

Transition the DP / Dominikphotofficial Digital Business Card into a completely self-contained, single-file `index.html` containing all HTML structure, styling (CSS / Tailwind CDN), and vanilla JavaScript. This enables zero-build, direct deployment to GitHub Pages and standalone execution in any web browser.

> [!IMPORTANT]
> **Confirmed User Decisions**:
> - **Architecture**: Single, complete, functional `index.html` file containing all HTML, CSS, and JavaScript with no framework (no Angular, no complex build dependencies).
> - **Deployment Target**: GitHub Pages static hosting with zero build steps — ready to commit and push directly to a GitHub repository root.
> - **Retained Visual & Functional Integrity**: Immersive cinematic hero background slideshow (8 photographs, crossfades, Ken Burns pan/zoom, dark scrim), Plus Jakarta Sans typography, `#F8FAFA` card stack with deep emerald `#113939` accents and 1px `#E4EAEA` borders, 3-card photo stack, DP.CORPORATION ecosystem section, social media channels, one-tap vCard export, client-side QR code generator modal, and email copy utility.

---

## 1. Overview & Core Concept

- **What It Does**: Delivers the entire DP / Dominikphotofficial digital business card experience within one clean, standards-compliant `index.html` file.
- **Target Audience / Hosting**: Visitors accessing the site via QR codes from business cards, camera straps, or social links hosted on GitHub Pages (`https://<username>.github.io/<repo>/`).
- **Key Value**: 100% portable, requires no `npm install`, no build commands, and no server runtimes. Users can commit `index.html` straight to GitHub and enable GitHub Pages with one click.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Cinematic Hero Slideshow**:
   - Automated 6-second rotation through the 8 official photographs with smooth CSS opacity crossfades and Ken Burns motion.
   - DP logo emblem, "DP | LINKS" title, photography bio, and primary CTA buttons leading to Services and Contacts.
   - Interactive slideshow controls (Pause/Play, Previous/Next, and Fullscreen viewer modal).
2. **Interactive 3-Card Perspective Photo Showcase**:
   - Smooth 3D tilt stack highlighting curated photographs with click/tap cycling.
3. **Core Digital Business Card Links**:
   - Services (`EXPLORE SERVICES` -> `https://portfolio.dominikphotofficial.lt/services.html`)
   - TFP Booking (`TFP BOOKING` -> `https://portfolio.dominikphotofficial.lt/tfp-booking.html`)
   - Contacts (`GET IN TOUCH` -> `https://portfolio.dominikphotofficial.lt/contacts.html`)
4. **DP.CORPORATION Ecosystem Section**:
   - Emerald luxury block (`EXPLORE DP.CORPORATION` -> `https://corporation.dominikphotofficial.lt/`).
5. **Social Media Section**:
   - Instagram, Threads, YouTube, Vimeo, Behance, 500px, and LinkedIn with SVG icons and copy buttons.
6. **QR Visitor Utilities**:
   - **Save Contact (vCard)**: Embedded vanilla JS function generating a downloadable `.vcf` file.
   - **Share QR Code**: Vanilla JS QR code generator rendering an SVG/canvas QR code directly in the browser.
   - **Email Quick-Copy**: Direct copy popover with confirmation feedback for `stock.dominikphotofficial.lt@gmail.com`.
7. **Official Footer**:
   - DP logo, copyright, and ecosystem navigation links.

### Visual Styling

- **Canvas Neutral**: Pure White (`#FFFFFF`)
- **Card Surfaces**: Cool Slate (`#F8FAFA`)
- **Hairline Borders**: Subtle Slate (`#E4EAEA`)
- **Brand Accent**: Deep Editorial Emerald (`#113939`)
- **Typography**: Google Fonts `Plus Jakarta Sans`

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Single Standalone File (`index.html`)**
  - *Chosen Approach*: Embed all CSS, Tailwind utility classes via standard script/CDN or inline CSS, SVG icons, and vanilla JavaScript into `index.html`.
  - *Why*: Direct compliance with user requirement for simple GitHub repository publishing with zero build tools or framework dependencies.
  - *Alternatives Considered*: Multi-file project (requires directory structure management; user explicitly requested single-file).
- **Decision 2: Native Browser APIs for QR Code & vCard**
  - *Chosen Approach*: Use a lightweight client-side QR generation script via CDN or standalone script tag, and native browser `Blob` / `URL.createObjectURL` for vCard downloading.
  - *Why*: Works completely offline and requires zero backend.

---

## 4. Technical Architecture *(Technical Reference)*

```
+───────────────────────────────────────────────────────────────────────────+
│                      STANDALONE index.html STRUCTURE                      │
+───────────────────────────────────────────────────────────────────────────+
│                                                                           │
│   <!DOCTYPE html>                                                         │
│   <html>                                                                  │
│     ├── <head>                                                            │
│     │     ├── Meta, Title, OpenGraph, Favicon (DP Logo)                   │
│     │     ├── Google Fonts: Plus Jakarta Sans                             │
│     │     ├── Tailwind CSS CDN (<script src="https://cdn.tailwindcss.com">)│
│     │     └── Custom CSS (<style>): Animations, Ken Burns, Reset          │
│     │                                                                     │
│     ├── <body>                                                            │
│     │     ├── Section 1: Hero Slideshow (8 Photos, DP Logo, Hero CTAs)    │
│     │     ├── Section 2: Main Business Card (Header, 3D Photo Deck)       │
│     │     ├── Section 3: Primary Navigation Cards (Services, TFP, Contact)│
│     │     ├── Section 4: DP.CORPORATION Ecosystem Showcase                │
│     │     ├── Section 5: Social Channels Grid                             │
│     │     ├── Section 6: Direct Inquiries & vCard Download                │
│     │     ├── Section 7: Footer & Ecosystem Navigation                    │
│     │     ├── Modal 1: Fullscreen Photo Lightbox                          │
│     │     ├── Modal 2: In-Person QR Code Share Modal                      │
│     │     └── Floating Mobile Quick Action Bar                            │
│     │                                                                     │
│     └── <script> (Vanilla JS)                                             │
│           ├── Slideshow Engine (timer, next, prev, pause, resume)         │
│           ├── 3D Photo Stack Cycling                                      │
│           ├── vCard Generator & File Download (.vcf)                      │
│           ├── Client-side QR Code Generator & PNG Export                  │
│           ├── Clipboard Copy Handlers (Email, Social, Links)              │
│           └── Lightbox & Modal Controls                                   │
│                                                                           │
+───────────────────────────────────────────────────────────────────────────+
```

<div align="center">

# 🏛️ Computer Science Museum
### *Computing Through Time: From Ancient Algorithms to Artificial Intelligence*

**A curated digital museum exhibit tracing two and a half millennia of computational history.**  
*Developed as the Capstone Final Project for the **Pathy AI Program**.*

---

[![React](https://img.shields.io/badge/React-19.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1_AAA-10b981?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Program](https://img.shields.io/badge/Pathy_AI_Program-Final_Project-f59e0b?style=for-the-badge)](https://github.com/)
[![License](https://img.shields.io/badge/License-MIT-38bdf8?style=for-the-badge)](LICENSE)

[Explore Exhibits](#-exhibition-halls) • [Interactive Features](#-key-interactive-features) • [Tech Stack](#-technical-architecture) • [Getting Started](#-getting-started) • [AI Audit Log](AI-DEVELOPMENT-LOG.md)

</div>

---

## 📖 Overview & Educational Thesis

Rather than treating computer science as a disconnected sequence of commercial gadgets, the **Computer Science Museum** traces computation as an unbroken, two-and-a-half-millennium quest for **abstraction**:

> *How humanity progressively transferred the strain of arithmetic to mechanical gears, formalized thought into symbolic logic and computability theory, translated human intent into compilers and operating systems, and ultimately harnessed statistical learning to generalize across billions of parameters.*

Built from the ground up for the **Pathy AI Program Final Project**, this web application pairs academic rigor with a bespoke digital museum aesthetic—deep obsidian tones, archival typography, zero third-party UI framework bloat, and full compliance with modern web accessibility standards.

---

## 🏛️ Exhibition Halls

The museum is structured into eight interconnected halls:

| Hall | Name | Focus & Highlights |
|:---:|:---|:---|
| **01** | **Hero & Paradigm Ribbon** | Exhibit mission overview, curated statistics (10 Eras, 26 Milestones, 2,500+ Years), and quick-jump interactive paradigm buttons (*Algorithm → Mechanical → Mainframe → PC → Internet → Smartphone → AI*). |
| **02** | **Interactive Timeline Vault** | 26 historically verified milestones across all 10 eras. Instant search, era filters, category pills, and a sequential milestone reader with keyboard shortcuts. |
| **03** | **Pioneers of Computation** | Gallery of 13 transformative thinkers spanning 1,200 years and diverse computational disciplines, filterable by domain (*Theory & Math*, *Hardware*, *Software*, *Networking*). |
| **04** | **Hardware Evolution** | Exploration of 6 technological epochs (Mechanical, Vacuum Tubes, Transistors, Mainframes, PCs, Mobile SoCs). Features both an **Epoch Inspector** and a **Side-by-Side Matrix**. |
| **05** | **Software Abstraction Layers** | 9-tier interactive stepper illustrating the tower of abstraction from mathematical algorithms and binary machine code up to declarative SQL and neural network weights. |
| **06** | **Computing Today & Ethical Frontiers** | 8 modern computational disciplines (AI, Cybersecurity, Cloud, Quantum, HCI, Robotics, Data Science, Green Computing), clearly separating *Current Reality* from *Speculative Horizons*. |
| **07** | **Interactive Knowledge Quiz** | 10-question multiple-choice assessment grounded strictly in exhibit facts. Instant pedagogical explanations upon submission, keyboard controls (`1-4`, `Enter`), and tiered scoring badges. |
| **08** | **Archival Sources & Methodology** | Verified institutional bibliography (Computer History Museum, IEEE Annals, King's College Turing Archive, W3C, NASA History Division) and project methodology disclosure. |

---

## ✨ Key Interactive Features

### 1. Sequential Milestone Reader Modal
- Clicking any milestone card opens an in-depth exhibit dialog detailing **Why It Mattered**, **Technical Architecture**, a **Primary Quote**, and **Archival Citations**.
- **Keyboard Navigation**: Press <kbd>←</kbd> and <kbd>→</kbd> to cycle sequentially through milestones without closing the modal; press <kbd>Esc</kbd> to return focus to the trigger card.
- **Progress Persistence**: Visited milestones are automatically recorded via `localStorage` and reflected in the header progress badge (`X / 26 Explored`).

### 2. Live Multi-Criteria Filtering
- Real-time search query matching across milestone titles, summaries, pioneers, and tags.
- Combine multi-axis criteria: Search text + Era selection + Category tags (Hardware, Software, Theory, Networking, People, Society).
- Zero-latency filtering powered by React `useMemo` with dedicated empty states and one-click reset.

### 3. Hardware Epoch Inspector & Comparative Matrix
- Switch between an individual epoch's physical specifications (switching speeds, power draw, physical footprint, storage media, MTBF failure rates) and a unified comparison table.

### 4. Software Abstraction Stepper
- Step through 9 layers of software history (`L1` to `L9`).
- Each layer contrasts the concrete human limitation it overcame with side-by-side historical syntax previews (from ENIAC patch cables to C pointers, SQL queries, and PyTorch optimization loops).

### 5. Keyboard-Accessible Quiz Engine
- Answer questions by clicking or using number keys <kbd>1</kbd>–<kbd>4</kbd> and <kbd>Enter</kbd>.
- Explanatory feedback is withheld until submission to support active recall, then immediately unpacks historical context.
- Final pedagogical score report with no-penalty retries.

---

## ⚡ Technical Architecture

```
Computer-Science-Museum/
├── index.html                   # HTML5 entry with Google Fonts & skip link
├── package.json                 # Project configuration (React 19, TypeScript, Vite)
├── tsconfig.json                # Strict TypeScript compiler options (noUnusedLocals, etc.)
├── vite.config.ts               # Vite configuration with React SWC/Babel plugin
├── README.md                    # Project documentation & GitHub guide
├── AI-DEVELOPMENT-LOG.md        # AI collaboration, debugging, and audit log
└── src/
    ├── App.tsx                  # Root exhibit coordinator & state binding
    ├── index.css                # Pure CSS design system, custom tokens & a11y classes
    ├── main.tsx                 # React DOM mount point
    ├── vite-env.d.ts            # Vite client type definitions
    ├── components/
    │   ├── common/              # Header, Footer, Modal, Badge, Vector Icons
    │   ├── hardware/            # Epoch inspector & comparative matrix
    │   ├── hero/                # Exhibition entrance & paradigm ribbon
    │   ├── modern/              # Contemporary computing & ethics
    │   ├── people/              # Pioneers gallery & domain filter
    │   ├── quiz/                # Assessment engine & score summary
    │   ├── software/            # 9-layer abstraction stepper with code
    │   ├── sources/             # Archival citations & methodology modal
    │   └── timeline/            # Milestones vault, filters, & detail reader
    ├── data/                    # Decoupled, type-safe historical datasets
    │   ├── eras.ts              # 10 computing eras
    │   ├── hardware.ts          # 6 hardware epochs
    │   ├── milestones.ts        # 26 verified milestones
    │   ├── modern.ts            # 8 contemporary fields
    │   ├── people.ts            # 13 computational pioneers
    │   ├── quiz.ts              # 10 assessment questions & explanations
    │   ├── software.ts          # 9 abstraction layers & syntax examples
    │   └── sources.ts           # 13 institutional archival citations
    ├── hooks/
    │   └── useLocalStorage.ts   # Resilient localStorage hook with SSR fallback
    └── types/
        └── index.ts             # Comprehensive TypeScript domain models
```

### Core Design Principles
- **Zero Heavy UI Bloat**: Built purely with native CSS3, CSS custom properties, and semantic React components. No Tailwind, Bootstrap, or Material UI dependencies.
- **Decoupled Historical Data**: 100% of historical milestones, pioneer profiles, hardware metrics, and quiz data reside in dedicated TypeScript data files under `src/data/`, separate from UI rendering logic.
- **Museum Aesthetic**: Deep Obsidian Navy (`#0a0e17`), card surfaces (`#111827`, `#151e30`), classical academic display typography (`Cinzel`), humanist body text (`Inter`), and monospace accents (`JetBrains Mono`).

---

## ♿ Accessibility (WCAG 2.1 AAA)

This project was built to ensure all visitors can navigate and explore comfortably:

- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, and `<footer>` elements with an unbroken heading structure (`h1` → `h3`).
- **Keyboard Navigation**:
  - Skip to main content link (`.skip-to-content`).
  - Strict modal cyclic focus trapping (`Tab` / `Shift+Tab`).
  - Keyboard shortcuts throughout:
    | Shortcut | Context | Action |
    |:---:|:---|:---|
    | <kbd>Esc</kbd> | Detail Modal / About Modal | Close dialog & return focus to card |
    | <kbd>→</kbd> | Timeline Modal | Navigate to next milestone |
    | <kbd>←</kbd> | Timeline Modal | Navigate to previous milestone |
    | <kbd>1</kbd> – <kbd>4</kbd> | Quiz Exhibit | Select option 1, 2, 3, or 4 |
    | <kbd>Enter</kbd> | Quiz Exhibit | Submit selected answer / next question |
- **High Contrast Mode**: Accessible via the header toggle, overriding colors with pure pitch black (`#000000`), pure white text (`#ffffff`), and high-visibility borders exceeding 21:1 contrast ratios.
- **Screen Reader Announcements**: `aria-live="polite"` regions announce dynamic search match counts and quiz feedback.
- **Touch-Friendly**: All clickable controls guarantee a minimum 44×44px touch target.
- **Reduced Motion**: All animations and transitions gracefully respect `@media (prefers-reduced-motion: reduce)`.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or later recommended)
- `npm` (bundled with Node)

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Computer-Science-Museum.git
   cd Computer-Science-Museum
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This runs the strict TypeScript typechecker (`tsc`) and Vite bundler to produce optimized production assets in `/dist`.

5. **Preview the production bundle:**
   ```bash
   npm run preview
   ```

---

## 🧪 Quality Assurance & Test Verification

| Verification Check | Target / Spec | Result |
|:---|:---|:---:|
| **TypeScript Compilation** | `tsc --noEmit` with `strict: true` and `noUnusedLocals: true` | ✅ Passed (0 errors) |
| **Production Build** | `vite build` asset bundle optimization | ✅ Passed (< 400 kB bundle) |
| **Responsive Design** | Tested across 375px (mobile), 768px (tablet), 1024px, 1440px (desktop) | ✅ Passed (Zero overflow) |
| **Contrast & Legibility** | Text contrast ratio vs background (WCAG AA/AAA) | ✅ Passed (> 7:1 headers, > 4.5:1 body) |
| **Modal Focus Management** | Focus trap, cycle containment, Escape close listener, focus restore | ✅ Passed |
| **Offline Persistence** | `localStorage` serialization for explored milestones and preferences | ✅ Passed |
| **Archival Sources** | 13 primary institutional links verified | ✅ Passed |

---

## 🤖 AI Collaboration & Academic Integrity

In full alignment with academic integrity and transparent disclosure standards:
- **Project Role**: This application was conceived, curated, and reviewed as a final project for the **Pathy AI Program**.
- **AI Pairing**: Generative AI was leveraged as an agentic pair-programming assistant for rapid boilerplate scaffolding, TypeScript interface typing, and CSS token formulation.
- **Human-in-the-Loop Curation**: Every historical date, inventor biography, technical mechanism, and architectural milestone was independently cross-checked against reputable institutional literature and archives.
- **Audit Log**: A complete development trajectory, prompt logs, and bug resolution history are publicly documented in [AI-DEVELOPMENT-LOG.md](AI-DEVELOPMENT-LOG.md).

---

## 📜 Primary Archival References

All exhibit content is verified against reputable primary and institutional archives:
- [Computer History Museum](https://computerhistory.org/) (Mountain View, CA)
- [IEEE Annals of the History of Computing](https://www.computer.org/csdl/magazine/an)
- [Alan Turing Digital Archive at King's College, Cambridge](https://www.turingarchive.org/)
- [Stanford Encyclopedia of Philosophy (SEP)](https://plato.stanford.edu/)
- [World Wide Web Consortium (W3C) Historical Archives](https://www.w3.org/History.html)
- [NASA History Division](https://history.nasa.gov/)
- [MacTutor History of Mathematics Archive (University of St Andrews)](https://mathshistory.st-andrews.ac.uk/)

---

## 📄 License

Distributed under the **MIT License**. Open for educational, academic, and non-commercial instructional use.  
See `LICENSE` for details.

<div align="center">
  <sub>© Computer Science Museum — Computing Through Time • Pathy AI Program Project</sub>
</div>

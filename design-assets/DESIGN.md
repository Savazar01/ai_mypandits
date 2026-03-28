# Design System: Sacred Modernity

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Sanctuary."** 

This system is not a mere utility; it is a meditative space. We move beyond the "app" feel to create a high-end editorial experience that honors ancient Vedic traditions through a lens of contemporary luxury. We break the rigid, boxed-in nature of standard SaaS interfaces by utilizing **intentional asymmetry**, **overlapping "temple-arch" geometries**, and a **tonal layering** system that mimics the way light filters through a stone courtyard. 

The goal is a "Sacred Modernity"—where the precision of modern typography meets the tactile, soulful weight of temple architecture. 

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the earth and the flame. We avoid clinical whites and harsh blacks in favor of organic, resonant tones.

### The Color Roles
- **Primary (#8f4e00):** A deep, burnt Saffron. This is our "Dharma" color—used for primary actions and grounding elements.
- **Secondary (#735c00):** A weathered Gold. Used for moments of prestige, verification, and high-value ornamentation.
- **Tertiary (#b52619):** 'Kumkum' Red. Reserved for high-importance accents, ritual markers, and critical states.
- **Background (#faf9f6):** 'Sandalwood' Cream. A warm, breathable base that reduces eye strain and feels like aged parchment or stone.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined through background color shifts. Use `surface-container-low` sections against a `surface` background to create separation. Inhabit the space between elements with white space, not lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine handmade paper.
- **Surface (Base):** The foundation.
- **Surface-Container-Low:** For secondary content areas.
- **Surface-Container-Lowest:** For the "Hero" cards that need to pop with a clean, bright lift.
- **Surface-Container-Highest:** For persistent navigation or structural sidebars.

### The "Glow & Gradient" Rule
To mimic the flickering light of a *diya*, use soft radial gradients (e.g., a transition from `primary` to `primary_container`) on large CTAs. This adds a visual "soul" that flat colors lack.

---

## 3. Typography: The Scriptural Voice
The typography system balances the authoritative weight of scripture with the clarity of a modern manuscript.

- **Display & Headlines (Noto Serif):** Use these for moments of "Deep Wisdom." The high-contrast serifs evoke the feeling of traditional inscriptions. 
  - *Strategy:* Use `display-lg` for single-word thematic anchors, often overlapping a subtle mandala watermark.
- **Body & Labels (Public Sans):** A clean, humanist sans-serif. This provides the "Modernity" in the system, ensuring that ritual instructions and data are legible and accessible.
- **Hierarchy as Identity:** Always lead with a Noto Serif headline. The transition from Serif to Sans-Serif marks the transition from "Sacred Text" to "Human Action."

---

## 4. Elevation & Depth: Tonal Layering
We reject the standard Material Design drop shadow. Depth in this system is organic and atmospheric.

### The Layering Principle
Achieve depth by "stacking" the surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift without a shadow.

### Ambient Shadows
If a "floating" effect is required (e.g., a ritual selection modal), shadows must be:
- **Blur:** Large (30px - 60px).
- **Opacity:** 4% to 8%.
- **Color:** Use a tinted version of `on-surface` (dark amber/brown) rather than grey to mimic natural, warm light.

### The "Ghost Border" Fallback
If a border is required for accessibility, use the `outline_variant` token at **10-20% opacity**. 100% opaque borders are strictly forbidden.

### Glassmorphism
For floating headers or navigational elements, use a backdrop-blur (12px - 20px) combined with a semi-transparent `surface` color. This allows the subtle textures (mandalas) to bleed through, keeping the experience integrated.

---

## 5. Components
Each component must feel like a tactile object—silk, gold, or stone.

- **Buttons (The "Pressed Gold" Style):**
  - **Primary:** `primary` fill with a subtle inner-glow gradient. Use `xl` (1.5rem) rounding or a "Temple Arch" radius (Top-left/Top-right: 1.5rem, Bottom: 0.5rem).
  - **Tactile State:** On hover, the button should not just change color, but gain a subtle "Silk" sheen (a soft diagonal gradient).
- **Cards:**
  - No borders. Use `surface-container-lowest`.
  - Incorporate a "Temple Corner": Use `rounded-xl` but apply a larger radius to the top corners only to evoke architectural arches.
  - Background Texture: Apply a 5% opacity Mandala watermark in the corner of significant cards.
- **Input Fields:**
  - Forgo the box. Use a "Bottom-only" line approach with a slightly heavier weight (2px) using `outline_variant`.
  - On focus, transition the line to `primary` (Saffron) with a soft outer glow.
- **Iconography:**
  - Use thin-line icons for UI actions (Public Sans style).
  - Use high-fidelity "Sacred Symbols" (Om, Lotus, Kalash) as section headers or decorative anchors. These should be treated as "Illustrative Type" rather than mere buttons.
- **Lists:**
  - Forbid divider lines. Use `spacing-4` (1.4rem) of vertical white space to separate list items.

---

## 6. Do’s and Don'ts

### Do
- **Use Asymmetry:** Place a Noto Serif headline off-center to create a modern, editorial rhythm.
- **Embrace the Texture:** Use the "Sari-border" pattern as a top-border for high-level sections (e.g., at the very top of the Sanctuary dashboard).
- **Prioritize Breathing Room:** Use the upper ends of the Spacing Scale (`20`, `24`) for section padding to maintain a "Sanctuary" feel.

### Don’t
- **No Pure Black:** Never use #000000. Use `on-surface` (#1a1c1a) for all text to keep the "Sandalwood" warmth intact.
- **No Harsh Corners:** Avoid `rounded-none`. Everything in the natural and sacred world has a softened edge.
- **No Grid Rigidity:** Don't align everything to a strict 12-column grid. Let images and decorative mandalas bleed off the edges or overlap container boundaries.
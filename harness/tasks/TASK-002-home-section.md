# TASK-002: Homepage Structure and Premium Corporate Sections

## Meta

| Field                | Value                   |
| -------------------- | ----------------------- |
| **Assignee**         | —                       |
| **Status**           | ⏳ Pending              |
| **Priority**         | P0                      |
| **Sprint**           | Sprint 1                |
| **Story Points**     | 13                      |
| **PRD Reference**    | harness/prd.md          |
| **Architecture Ref** | harness/architecture.md |
| **Created**          | 2026-05-19              |
| **Completed**        | —                       |

---

## Description

Build the complete premium homepage experience for the new JPLC holding website.

The website direction has changed from a coffee retail brand website into a premium enterprise coffee ecosystem platform focused on:

- Specialty coffee infrastructure
- Research & development
- Coffee engineering
- Manufacturing
- Hospitality solutions
- Technical services
- Training & education
- Enterprise coffee operations

This task covers:

- Building all homepage sections
- Premium storytelling layouts
- Enterprise-focused UI structure
- Modern industrial coffee visuals
- Smooth animations
- Corporate coffee ecosystem presentation

The homepage should feel like:

- A global coffee innovation company
- A premium industrial coffee ecosystem platform
- A modern enterprise specialty coffee organization

NOT:

- A Starbucks clone
- A café ordering website
- A menu-heavy retail coffee site

---

## Acceptance Criteria

- [ ] Premium homepage fully implemented
- [ ] Hero section created with cinematic enterprise coffee visuals
- [ ] About JPLC section implemented
- [ ] Enterprise Coffee Ecosystem section created
- [ ] Research & Development section created
- [ ] Coffee Engineering & Technical Infrastructure section created
- [ ] Hospitality & Supply Chain section created
- [ ] Manufacturing & Brand Development section created
- [ ] Quality Assurance & Compliance section created
- [ ] Coffee Training & Education placeholder section created
- [ ] Global Infrastructure / DMCC section created
- [ ] Partnership CTA section created
- [ ] Premium scroll animations implemented
- [ ] Framer Motion animations added throughout homepage
- [ ] Responsive layouts verified
- [ ] Mobile responsive behavior completed
- [ ] Premium industrial coffee imagery integrated
- [ ] Orange & brown enterprise theme consistently applied
- [ ] Lighthouse performance ≥ 90
- [ ] Lighthouse accessibility ≥ 90
- [ ] `pnpm build` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm type-check` passes

---

## Technical Notes

### Design Direction

The homepage should combine:

- Luxury corporate aesthetics
- Industrial coffee engineering visuals
- Editorial storytelling
- Enterprise innovation layouts
- Premium animation systems

### Theme

Primary Colors:

- Burnt Orange
- Copper
- Deep Coffee Brown
- Warm Beige
- Matte Black

### Typography

- Serif heading font for premium branding
- Clean sans-serif body typography

Suggested:

- Playfair Display
- Inter

### Animation Requirements

Use `framer-motion` for:

- Fade reveals
- Scroll animations
- Parallax effects
- Section transitions
- Hover animations
- Staggered card animations

### Image Direction

Use visuals such as:

- Coffee labs
- Roasting facilities
- Espresso machine engineering
- Industrial coffee systems
- Coffee sourcing
- Hospitality operations
- Technical coffee infrastructure
- Coffee training environments

### Important

DO NOT:

- Add e-commerce functionality
- Add add-to-cart features
- Add product checkout flows
- Add rewards systems
- Add heavy café/menu sections

This is an enterprise coffee ecosystem website.

---

## Homepage Sections

### 1. Hero Section

Content:

- Large cinematic enterprise coffee hero
- Premium headline:
  "Engineering the Future of Specialty Coffee"
- Supporting paragraph
- CTA buttons:
  - Explore Ecosystem
  - Partner With Us

Features:

- Fullscreen layout
- Video/image background support
- Dark overlay gradients
- Premium animations

---

### 2. About JPLC Section

Content:

- Corporate coffee infrastructure introduction
- Enterprise-focused storytelling
- Technical and operational positioning

Layout:

- Editorial split layout
- Large imagery
- Premium typography

---

### 3. Enterprise Coffee Ecosystem Section

Include operational pillars:

- Green Coffee Procurement
- Roasting & Production Engineering
- Research & Development
- Machine Engineering
- Distribution & Logistics
- Hospitality Operations
- Manufacturing
- Coffee Training

Use:

- Interactive cards
- Hover animations
- Grid layout

---

### 4. Research & Development Section

Include:

- Extraction science
- Brew optimization
- AI-assisted calibration
- Beverage innovation
- Thermal profiling
- Smart brewing systems

Design:

- Laboratory-inspired UI
- Technical visual styling

---

### 5. Coffee Engineering Section

Include:

- Espresso machine engineering
- IoT diagnostics
- Grinder optimization
- Thermal stability systems
- Water optimization
- Equipment prototyping

Design:

- Industrial engineering aesthetic
- Dark premium sections
- Technical motion graphics style

---

### 6. Hospitality & Supply Chain Section

Include:

- HoReCa supply solutions
- Corporate beverage infrastructure
- Distribution systems
- Inventory forecasting
- Event coffee solutions

Layout:

- Modern enterprise grid system

---

### 7. Manufacturing & Brand Development Section

Include:

- OEM coffee manufacturing
- Private label solutions
- Capsule systems
- Packaging development
- Beverage engineering

Design:

- Premium manufacturing visuals
- Industrial coffee production atmosphere

---

### 8. Quality Assurance Section

Include:

- HACCP & ISO standards
- Roast analytics
- Moisture testing
- Food safety compliance
- Packaging validation

Style:

- Technical data-inspired layouts
- Analytical visual presentation

---

### 9. Coffee Training & Education Section

Placeholder section for future client content.

Include:

- Barista training
- Brewing techniques
- Roasting education
- Hospitality training
- Sensory evaluation

Design:

- Academy/training environment visuals

---

### 10. Global Infrastructure Section

Include:

- DMCC Coffee Centre mention
- International trade infrastructure
- Roasting & warehousing
- Global sourcing networks

Design:

- Global enterprise storytelling section

---

### 11. Partnership CTA Section

Content:

- Partnership inquiry CTA
- Enterprise collaboration messaging
- Large premium banner section

Buttons:

- Contact Us
- Partnership Inquiry

---

## Files To Create / Modify

```txt
CREATE:
- apps/web/components/sections/hero-section.tsx
- apps/web/components/sections/about-section.tsx
- apps/web/components/sections/ecosystem-section.tsx
- apps/web/components/sections/research-section.tsx
- apps/web/components/sections/engineering-section.tsx
- apps/web/components/sections/hospitality-section.tsx
- apps/web/components/sections/manufacturing-section.tsx
- apps/web/components/sections/quality-section.tsx
- apps/web/components/sections/training-section.tsx
- apps/web/components/sections/global-section.tsx
- apps/web/components/sections/partnership-section.tsx

MODIFY:
- apps/web/app/page.tsx
```

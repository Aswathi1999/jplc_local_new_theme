# TASK-003: About Us Page — Enterprise Company Storytelling & Leadership

## Meta

| Field                | Value                   |
| -------------------- | ----------------------- |
| **Assignee**         | —                       |
| **Status**           | ⏳ Pending              |
| **Priority**         | P1                      |
| **Sprint**           | Sprint 1                |
| **Story Points**     | 8                       |
| **PRD Reference**    | harness/prd.md          |
| **Architecture Ref** | harness/architecture.md |
| **Created**          | 2026-05-20              |

---

## Description

Create a dedicated premium "About Us" page for the JPLC website.

This page should position JPLC as a modern specialty coffee infrastructure and innovation company operating across sourcing, roasting, engineering, research, manufacturing, hospitality infrastructure, and training.

The page must follow a luxury enterprise storytelling experience using:

- Cinematic coffee visuals
- Editorial layouts
- Industrial coffee atmosphere
- Premium animations
- Corporate typography
- Enterprise UI design

The page should feel like:

- Premium global coffee infrastructure company
- Coffee innovation platform
- Enterprise specialty coffee ecosystem

NOT:

- Café website
- Coffee shop about page
- Retail coffee brand
- Generic startup company page

---

## Acceptance Criteria

- [ ] Create dedicated `/about` page using Next.js App Router
- [ ] Add premium fullscreen hero section with cinematic coffee background
- [ ] Add company introduction/storytelling section
- [ ] Add mission & vision section
- [ ] Add enterprise operations overview section
- [ ] Add leadership/team section with professional cards
- [ ] Add global infrastructure section
- [ ] Add partnership CTA section
- [ ] Add responsive mobile/tablet layouts
- [ ] Add Framer Motion animations across sections
- [ ] Add premium hover interactions and transitions
- [ ] Use JPLC orange/brown brand palette consistently
- [ ] Use luxury editorial typography hierarchy
- [ ] Lighthouse performance score ≥ 90

---

## Technical Notes

- Use Next.js 14 App Router
- Use Tailwind CSS only
- Use Framer Motion animations
- Use responsive layouts for all breakpoints
- Use Next.js Image component for optimization
- Maintain consistent spacing system with homepage
- Maintain premium enterprise design language
- Keep animations smooth and minimal
- Use reusable section components where possible

---

## Page Structure

### 1. Hero Section

**Includes**

- Fullscreen cinematic background image
- Dark premium overlay
- Editorial typography
- CTA buttons
- Smooth entrance animations

**Heading**
"A Modern Specialty Coffee Infrastructure Company"

**Subheading**
"JPLC operates across sourcing, roasting, engineering, research, manufacturing, hospitality infrastructure, and coffee innovation for modern global markets."

---

### 2. Company Story Section

**Includes**

- Editorial storytelling layout
- Large imagery
- Premium typography
- Alternating layouts
- Enterprise coffee positioning

**Content Focus**

- Company philosophy
- Operational excellence
- Specialty coffee ecosystem
- Innovation-driven infrastructure
- Global positioning

---

### 3. Mission & Vision Section

**Mission**
Deliver scalable specialty coffee ecosystems through innovation, engineering, and operational excellence.

**Vision**
Build a globally recognized specialty coffee infrastructure company powered by research, technology, and enterprise coffee solutions.

---

### 4. Enterprise Operations Section

**Include cards for**

- Procurement
- Roasting
- R&D
- Engineering
- Manufacturing
- Distribution
- Hospitality
- Training

**Features**

- Premium cards
- Hover animations
- Glassmorphism effects
- Editorial layouts

---

### 5. Leadership / Team Section

**Create professional team cards**

Each card should include:

- Professional portrait
- Name
- Role
- Short bio

**Example Roles**

- Founder & CEO
- Head of Coffee Operations
- Director of R&D
- Engineering Lead
- Hospitality Operations Manager

**Style**

- Premium editorial layout
- Luxury card design
- Smooth hover effects
- Professional business atmosphere

---

### 6. Global Infrastructure Section

**Include**

- DMCC Coffee Centre mention
- International sourcing
- Coffee logistics
- Infrastructure operations
- Global ecosystem positioning

---

### 7. Partnership CTA Section

**Heading**
"Partner With JPLC"

**Buttons**

- Contact Us
- Partnership Inquiry

---

## Design Direction

### Visual Style

- Industrial coffee visuals
- Cinematic coffee environments
- Enterprise coffee atmosphere
- Premium corporate storytelling
- Luxury editorial layouts

### UI Style

- Matte black overlays
- Burnt orange highlights
- Coffee brown accents
- Glassmorphism
- Soft gradients
- Thin divider lines

---

## Animation Requirements

Use Framer Motion for:

- Fade-up reveals
- Scroll animations
- Image parallax
- Hover interactions
- Staggered transitions
- Smooth page entrance

---

## Files To Create / Modify

```txt
CREATE:
- apps/web/src/app/about/page.tsx
- apps/web/src/components/about/about-hero.tsx
- apps/web/src/components/about/company-story.tsx
- apps/web/src/components/about/mission-vision.tsx
- apps/web/src/components/about/operations-grid.tsx
- apps/web/src/components/about/team-section.tsx
- apps/web/src/components/about/global-infrastructure.tsx
- apps/web/src/components/about/about-cta.tsx

MODIFY:
- apps/web/src/components/layout/navbar.tsx
```

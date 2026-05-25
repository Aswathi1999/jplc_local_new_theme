# TASK-005: Contact Page — Premium Enterprise Inquiry & Partnership Hub

## Meta

| Field                | Value                        |
| -------------------- | ---------------------------- |
| **Assignee**         | —                            |
| **Status**           | ✅ Done                      |
| **Priority**         | P1                           |
| **Sprint**           | Sprint 1                     |
| **Story Points**     | 5                            |
| **PRD Reference**    | harness/prd.md               |
| **Architecture Ref** | harness/architecture.md      |
| **Created**          | 2026-05-20                   |

---

## Description

Create a dedicated premium "Contact" page for the JPLC website.

The page should serve as the primary touchpoint for enterprise inquiries, partnership discussions, training registrations, and general business communication.

It should feel:
- Premium enterprise contact experience
- Luxury coffee brand communication hub
- Professional and elegant
- Editorial and immersive
- NOT a generic contact form page

---

## Acceptance Criteria

- [ ] Create `/contact` page using Next.js App Router
- [ ] Add premium cinematic hero section
- [ ] Add contact form with enterprise inquiry fields
- [ ] Add company location / office details (DMCC Dubai)
- [ ] Add contact channels (email, phone)
- [ ] Add inquiry type selector (Partnership, Training, Supply, General)
- [ ] Add responsive layout for all devices
- [ ] Add Framer Motion animations
- [ ] Add premium hover interactions
- [ ] Update navbar Contact link to point to `/contact` page
- [ ] Use JPLC brand palette consistently

---

## Page Structure

### 1. Hero Section
- Dark cinematic background image
- Heading: "Get In Touch"
- Subheading: "Whether you're exploring a partnership, registering for training, or enquiring about our supply and engineering services — we'd love to hear from you."
- Eyebrow: "Contact JPLC"

### 2. Contact Split Layout
- **Left panel** — Office details & contact channels:
  - DMCC Coffee Centre, Dubai, UAE
  - Email: hello@jplc.com
  - Phone: +971 4 XXX XXXX
  - Inquiry channels: Partnership · Training · Supply · Engineering
- **Right panel** — Contact form:
  - Full Name
  - Company / Organisation
  - Email Address
  - Inquiry Type (select: Partnership, Training, Hospitality Supply, Engineering, General)
  - Message
  - Submit button: "Send Inquiry"

### 3. Partnership CTA Strip
- Heading: "Ready to build together?"
- Subtext: "JPLC partners with hospitality groups, coffee brands, distributors, and enterprise operators."
- CTA: "Explore Partnership Opportunities"

---

## Design Direction

- Background: `#F5E6D3` cream
- Dark hero: `#421513`
- Accents: `#F8921D` orange
- Form inputs: clean bordered, focus orange ring
- Premium spacing, editorial typography
- Glassmorphism contact info card on left
- Minimal form design on right

---

## Files To Create / Modify

```txt
CREATE:
- apps/web/src/app/contact/page.tsx
- apps/web/src/components/contact/contact-hero.tsx
- apps/web/src/components/contact/contact-form.tsx
- apps/web/src/components/contact/contact-info.tsx

MODIFY:
- apps/web/src/constants/navigation.ts  (update Contact href to /contact)
```

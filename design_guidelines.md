# Route & Rate Design Guidelines

## Design Approach
**Reference-Based: B2B Consultancy Pattern**  
Drawing inspiration from Shipware.com and modern B2B SaaS landing pages (Stripe, Intercom, Linear), emphasizing trust, professionalism, and clarity with selective premium positioning.

## Visual Identity

### Typography
- **Headings**: Inter or DM Sans (600-700 weight) - modern, professional sans-serif
- **Body**: Inter or System UI (400-500 weight) - highly readable
- **Hierarchy**: 
  - Hero headline: 3.5rem (desktop) / 2.5rem (mobile)
  - Section headings: 2.5rem (desktop) / 2rem (mobile)
  - Subheadings: 1.5rem
  - Body text: 1.125rem (18px) for readability
  - Small text: 0.875rem (footer, fine print)

### Layout System
**Spacing primitives**: Tailwind units 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop) / py-12 (mobile)
- Card padding: p-8 (desktop) / p-6 (mobile)
- Element spacing: gap-8 for grids, mb-6 for text blocks
- Container: max-w-6xl with px-6 horizontal padding

### Color Strategy
Since you requested no color specifications, structure will use semantic naming:
- Primary (trust/professionalism): For headers, key elements, navbar
- Accent (action/conversion): For CTAs, highlights
- Neutral light: Backgrounds, subtle dividers
- Neutral dark: Body text
- Success tone: For "savings" and positive metrics

## Component Library

### Navigation
**Fixed navbar** (subtle shadow on scroll):
- Logo text left-aligned
- Right-aligned links with smooth scroll behavior
- Mobile: Hamburger menu transitioning to vertical stack
- Height: 80px with centered content

### Hero Section
**Full-width, centered layout with background gradient treatment**:
- Headline + subheadline stacked vertically
- Single CTA button (large, prominent) - "See if you qualify"
- Generous vertical padding (py-24 desktop / py-16 mobile)
- No hero image - focus on compelling copy and CTA
- Typography contrast: Bold headline, lighter-weight subheadline

### Introductory Offer Strip
**Slim banner immediately below hero**:
- Light background with subtle border
- Single line on desktop, wraps gracefully on mobile
- Centered text with "Intro offer:" label in semibold
- Height: py-4, max-w-4xl centered content

### Service Cards ("What We Do")
**3-column grid (desktop) → single column (mobile)**:
- Card structure: Icon top, heading, description
- Icons: Line-style, consistent size (w-12 h-12)
- Subtle background with hover lift effect (shadow increase)
- Equal height cards with align-start content

### Process Steps ("How It Works")
**Horizontal timeline on desktop, vertical on mobile**:
- 3 steps with connecting line visual
- Step number badges (large, circular)
- Heading + description for each step
- Step 3 includes callout text about no-fee basis in lighter styling

### Bullet Lists ("Who We Help")
**Clean, scannable format**:
- Checkmark icons or bullet points
- Generous line-height (1.7) for readability
- Items in 2 columns on desktop (if more than 4 items)

### Trust Signals ("Why Work With Us")
**3 pillars layout**:
- Icon or badge + bold heading + description
- Horizontal on desktop, stacked on mobile
- Emphasize key differentiators visually

### Contact Form
**Single-column, generous spacing**:
- Input fields: Full-width with clear labels above
- Dropdown for "Annual parcel spend" with ranges
- Textarea for message (min-height: 120px)
- Submit button: Large, full-width on mobile
- Visible mailto link below form with mail icon
- Form background: Subtle card treatment

### Footer
**Simple, centered layout**:
- Logo/brand name centered
- Copyright notice
- Optional: Privacy/Terms links in small text

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked elements)
- Tablet: 768px - 1024px (2-column grids where applicable)
- Desktop: > 1024px (full multi-column layouts)

## Interaction Patterns
- Smooth scroll behavior for anchor links
- Subtle hover states on cards (shadow lift, no dramatic transforms)
- Form validation with inline error messages
- CTAs: Slight scale on hover (1.02x) with shadow increase
- Minimize animations - maintain professional feel

## Content Density
- Hero: Generous whitespace to emphasize exclusivity
- Service sections: Balanced - not cramped, not sparse
- Form: Friendly spacing, doesn't feel overwhelming
- Overall: Breathing room between sections (mb-20)

## Images
**No hero image** - Copy-driven hero maintains focus on exclusive positioning.  
**Optional**: Small trust badges or partner logos if available (placed near "Why Work With Us" section).
# Route & Rate Website

## Overview
A clean, professional one-page B2B consultancy website for Route & Rate, a parcel shipping consultancy that helps growing UK ecommerce and B2B businesses cut parcel costs and improve courier reliability.

## Key Features
- **Fixed navbar** with smooth-scrolling navigation
- **Hero section** with background image and exclusive "no savings, no fee" positioning
- **Intro offer strip** highlighting selective client acceptance
- **What We Do** - 3 service cards (review, compare, support)
- **How It Works** - 3-step process with no-fee callout
- **Who We Help** - ideal client criteria
- **Why Work With Us** - 3 differentiators (independent, focused, founder-friendly)
- **Contact section** - Email-based CTA (mailto: adam@routeandrate.com)
- **Footer** with branding

## Tech Stack
- **Frontend**: React, Tailwind CSS, Shadcn/ui components
- **Backend**: Express.js (minimal - serves static frontend)
- **Routing**: Wouter

## Project Structure
```
client/src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── OfferStrip.tsx
│   ├── WhatWeDo.tsx
│   ├── HowItWorks.tsx
│   ├── WhoWeHelp.tsx
│   ├── WhyWorkWithUs.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/
│   └── home.tsx
└── App.tsx

server/
├── routes.ts (empty - no API needed)
├── storage.ts (base storage interface)
└── index.ts (Express server)

shared/
└── schema.ts (base types)
```

## Design
- Color palette: Deep blue primary with orange CTA accent
- Font: DM Sans
- Style: Clean, professional consultancy aesthetic with generous whitespace
- Hero background: Flat lay image of parcels, laptop with analytics, and clipboard

## Contact
Email: adam@routeandrate.com

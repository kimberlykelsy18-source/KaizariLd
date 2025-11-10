# Corporate Training Website

## Overview
A modern, responsive corporate training website built with React, TypeScript, Vite, and Tailwind CSS. This project showcases professional training programs, events, and includes an interactive booking system.

## Recent Changes (November 10, 2025)

### Hero Section Improvements
- Made hero section viewport-aware to fit on screen without scrolling on any device
- Reduced padding and spacing for better mobile optimization
- Adjusted heading sizes for better responsiveness (text-3xl on mobile, text-5xl on desktop)

### PromoBar Optimization
- Reduced size significantly for mobile devices (smaller padding, text, and buttons)
- Shortened text on mobile while maintaining full information on desktop
- Improved responsive design with smaller icon sizes on mobile

### Financial Modeling Promo Enhancement
- **Complete redesign** with modern gradient card and glow effects
- Added trainer photo (Aurthur Ogonji) prominently displayed
- Integrated booking form modal (same as events section)
- Modern, engaging design with:
  - Animated background patterns
  - Gradient glowing effects
  - Featured badge
  - Pulse animation on register button
  - Responsive layout for all screen sizes
- Connected "Register Now" button to booking form workflow
- Included survey popup before booking (matching events behavior)

### Technical Implementation
- Updated `src/components/Hero.tsx` - viewport-aware hero section
- Updated `src/components/PromoBar.tsx` - mobile-optimized promo bar
- Completely rewrote `src/components/FinancialPromo.tsx` - modern promo card with booking
- Updated `src/data/financialEvent.json` - added trainer information
- Added trainer photo: `src/assets/aurthur-ogonji.png`

## Project Architecture

### Technology Stack
- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.0
- **UI Components**: Radix UI (headless components)
- **Forms**: React Hook Form 7.55.0
- **Notifications**: Sonner 2.0.3

### Project Structure
```
src/
├── assets/              # Images and static assets
├── components/          # React components
│   ├── ui/             # Reusable UI components (Radix)
│   ├── figma/          # Figma-specific components
│   └── [pages]         # Page-specific components
├── data/               # JSON data files
├── pages/              # Page components
└── styles/             # Global CSS styles
```

### Key Components
- **Hero.tsx**: Main landing section with CTA buttons
- **FinancialPromo.tsx**: Featured event promo with booking
- **PromoBar.tsx**: Top banner for limited-time offers
- **EventCard.tsx**: Reusable event card with booking form
- **Events.tsx**: Upcoming events and training programs section

## Development

### Running Locally
```bash
npm install
npm run dev
```
The dev server runs on port 5000 and is configured to accept all hosts (required for Replit environment).

### Building for Production
```bash
npm run build
```
Output directory: `build/`

### Deployment
Configured for Replit autoscale deployment:
- Build command: `npm run build`
- Deployment target: autoscale (stateless web application)

## Configuration

### Vite Configuration
- Port: 5000 (required for Replit webview)
- Host: 0.0.0.0 (accepts all hosts for proxy)
- allowedHosts: true (bypasses host header verification)

### Tailwind Configuration
Custom theme with:
- Design tokens for colors, spacing, and border radius
- Custom color palette (primary, secondary, accent, etc.)
- Responsive breakpoints
- Tailwind animate plugin

## User Preferences
None specified yet.

## Environment
- Node.js 20
- Replit environment with automatic workflow management

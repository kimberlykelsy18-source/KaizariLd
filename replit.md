# Corporate Training Website

## Overview
This is a modern corporate training website built with React, Vite, and Tailwind CSS. The project was imported from GitHub and configured to run in the Replit environment.

## Project Structure
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v3 with custom design tokens
- **UI Components**: Radix UI primitives with custom components
- **TypeScript**: Enabled for type safety

## Key Features
- Responsive corporate training website design
- Course catalog and event management
- Learning hub and company profile pages
- Modern UI components (accordions, dialogs, calendars, etc.)
- Dark mode support
- Custom design system with CSS variables

## Development Setup

### Configuration
- **Dev Server**: Runs on port 5000 at 0.0.0.0
- **Host**: Configured to allow all hosts for Replit proxy compatibility
- **Module Type**: ESM (ES Modules)

### Running the Project
The project uses a single workflow named `dev` that runs:
```bash
npm run dev
```

This starts the Vite development server on port 5000.

## File Organization
```
src/
  ├── components/     # React components
  │   ├── ui/        # Reusable UI components (buttons, cards, etc.)
  │   └── figma/     # Figma-specific components
  ├── pages/         # Page components (Home, Courses, Events, etc.)
  ├── data/          # JSON data files
  ├── styles/        # Global CSS files
  └── App.tsx        # Main application component
```

## Dependencies
- **UI Components**: Extensive Radix UI component library
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Date Picker**: React Day Picker
- **Charts**: Recharts
- **Animations**: Motion, Tailwind Animate
- **Carousel**: Embla Carousel

## Build & Deployment
- **Build Command**: `npm run build`
- **Build Output**: `build/` directory
- **Deployment Type**: Autoscale (stateless web application)
- **Target**: ES2020+ (esnext)

## Recent Changes (November 10, 2025)
- Imported from GitHub repository
- Configured Vite for Replit environment (port 5000, host 0.0.0.0)
- Updated CSS files from Tailwind v4 to v3 syntax
- Added missing configuration files (tsconfig.json, tailwind.config.js, postcss.config.js)
- Added TypeScript and Tailwind CSS dev dependencies
- Set up deployment configuration for autoscale
- Created .gitignore for Node.js projects

## Notes
- The project uses a custom design system with CSS variables defined in `src/index.css` and `src/styles/globals.css`
- All UI components follow a consistent design language
- The site includes promotional banners, course listings, event calendars, and contact forms

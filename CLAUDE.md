# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Ritav Das, a fullstack developer. It's built as a Next.js application showcasing work experience, projects, and contact information in a clean, minimalist design.

## Tech Stack

- **Framework**: Next.js 12.1.5 with React 18
- **Styling**: Hybrid approach using both Chakra UI and Tailwind CSS
- **Language**: JavaScript (no TypeScript)
- **Theme**: Custom dark theme with Chakra UI theming system

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Architecture

### Pages Structure

- `pages/index.js` - Main portfolio page containing all content (single-page application)
- `pages/_app.js` - App wrapper with Chakra UI provider
- `pages/_document.js` - Custom document structure

### Components

- `components/Experience.js` - Reusable component for work experience and project items
- `components/Avatar.js` - Profile picture component
- `components/Grid.js` - Custom grid wrapper
- `components/Header.jsx` - Header component

### Custom Hooks

- `hooks/Width.js` - Custom hook for responsive window width detection
- `hooks/Scroll.js` - Custom hook for scroll-based animations

### Styling System

- **Primary**: Chakra UI with custom theme (`utils/theme.js`)
- **Secondary**: Tailwind CSS for utility classes
- **Theme**: Dark theme with custom color palette and typography defined in `utils/foundation/`

### Key Design Patterns

- Single-page application with all content on the home page
- Responsive design using custom width hook
- Mixed styling approach (Chakra UI components with Tailwind utilities)
- Component reuse (Experience component used for both work experience and projects)
- Dark theme with custom CSS variables prefix "Ritav"

## Content Structure

The main content is hardcoded in `pages/index.js` as JavaScript objects:

- `Work_Experiences` array - Professional experience entries
- `side_projects` array - Personal project showcases
- Contact links and social media profiles

## Responsive Behavior

The site uses a custom `useWindowWidth` hook to adjust layout and spacing based on screen size, with a breakpoint at 650px for mobile vs desktop layouts.

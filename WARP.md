# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern, responsive creative portfolio website built with vanilla HTML5, CSS3, and JavaScript. The project showcases creative work and projects through an interactive portfolio gallery with smooth animations and responsive design.

## Development Commands

### Development Server
```bash
npm start          # Start development server on port 3000 with auto-open
npm run dev        # Alternative development server command
npm run serve      # Serve on port 8080 (alternative server)
```

### Build & Production
```bash
npm run build      # Build production assets (minified CSS and JS)
npm run clean      # Clean dist directory and recreate structure
npm run deploy     # Build and deploy to GitHub Pages
```

### Code Quality & Formatting
```bash
npm run lint:css   # Lint CSS files with stylelint
npm run lint:js    # Lint JavaScript files with eslint
npm run format     # Format all files (HTML, CSS, JS, MD) with prettier
```

### Asset Optimization
```bash
npm run minify:css # Minify CSS files to dist/css/style.min.css
npm run minify:js  # Minify JavaScript to dist/js/main.min.js
```

## Architecture & Code Structure

### File Organization
- `index.html` - Single-page application entry point with semantic HTML5 structure
- `css/` - Stylesheet directory with modular CSS architecture
  - `style.css` - Main styles with CSS custom properties and grid/flexbox layouts
  - `responsive.css` - Media queries and responsive design styles
- `js/main.js` - Vanilla JavaScript with modular function organization
- Configuration files for linting and formatting tools

### CSS Architecture
- **Reset & Base Styles**: Consistent cross-browser styling foundation
- **Typography System**: Playfair Display (headings) + Inter (body text)
- **Color System**: CSS custom properties with accent color (`#6366f1`)
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Component-Based**: Organized by UI components (navbar, hero, portfolio, etc.)
- **Animation System**: CSS transitions with intersection observer for scroll animations

### JavaScript Architecture
- **Module Pattern**: Functions organized by feature (navigation, portfolio, contact, animations)
- **Data-Driven UI**: Portfolio items rendered from JavaScript data array
- **Event-Driven**: DOM event listeners for user interactions
- **Performance Optimized**: Debounced scroll handlers, intersection observer for animations
- **Responsive Features**: Mobile navigation toggle, smooth scrolling, parallax effects

### Key Components
- **Navigation**: Fixed navbar with scroll effects and active state highlighting
- **Portfolio System**: Filterable gallery with category-based filtering
- **Contact Form**: Form handling with validation and notification system
- **Animation Engine**: Scroll-triggered animations using Intersection Observer API
- **Notification System**: Dynamic notification creation with auto-dismiss

### Styling Standards
- **CSS Methodlogy**: Component-based organization with BEM-like naming
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Typography Scale**: Consistent heading hierarchy and line-height system
- **Color Usage**: Consistent accent color usage with CSS custom properties
- **Spacing System**: Consistent padding/margin using rem units

### JavaScript Patterns
- **DOM Ready Pattern**: `DOMContentLoaded` event listener for initialization
- **Module Functions**: Each feature encapsulated in dedicated initialization functions
- **Error Handling**: Global error listeners and graceful degradation
- **Performance**: Debounced scroll events and optimized animation frames
- **Accessibility**: Keyboard navigation support and semantic HTML structure

### Development Guidelines
- **Code Style**: 4-space indentation, single quotes, semicolons (enforced by ESLint/Prettier)
- **CSS Organization**: Logical grouping with clear section comments
- **JavaScript**: ES6+ features with browser compatibility considerations
- **Asset Optimization**: Automated minification for production builds
- **Responsive Testing**: Mobile-first development with device testing

### External Dependencies
- **Google Fonts**: Inter and Playfair Display font families
- **Font Awesome**: Icon library for UI elements
- **http-server**: Development server for local testing
- **Build Tools**: clean-css-cli, uglify-js for asset minification
- **Code Quality**: ESLint, Stylelint, Prettier for consistent code style

## Technical Notes

### Browser Support
- Modern browsers with ES6+ support
- Graceful degradation for older browsers with polyfills
- Responsive design tested across device sizes

### Performance Considerations
- Debounced scroll event handlers for smooth performance
- Intersection Observer API for efficient scroll animations
- Lazy loading considerations for portfolio images
- Minified assets for production deployment

### Customization Points
- Portfolio data array in `js/main.js` for adding/removing projects
- CSS custom properties for theming and color scheme changes
- Responsive breakpoints in `css/responsive.css`
- Animation timing and effects in JavaScript animation functions
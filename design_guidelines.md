# Design Guidelines: Chandan Kumar Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio platforms like Dribbble, Behance, and minimal portfolio sites with emphasis on calm, professional aesthetics.

## Core Design Principles
- **Visual Tone**: Minimal, professional, restful — design should feel calming and approachable
- **Content Strategy**: Single-page scroll experience with clear visual hierarchy
- **Accessibility First**: Keyboard navigable, ARIA labels, high contrast text, semantic HTML

## Color Palette
- **Background**: Off-white / very light beige (#FAFAF8, #F5F5F3)
- **Accent Colors**: Muted teal (#5E9B9B, #6BA5A5) and soft slate blue (#6B7A99, #7B8DAA) 
- **Text**: High contrast dark gray/charcoal for readability
- **Dark Mode**: Inverted palette with dark navy/charcoal backgrounds, maintaining soft accents

## Typography System
- **Font Stack**: System fonts for performance (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- **Hierarchy**: 
  - Hero heading: Large, confident (text-5xl to text-6xl)
  - Section headings: Slightly larger than body (text-3xl to text-4xl)
  - Body text: Comfortable reading size (text-base to text-lg)
  - Line height: Generous spacing (leading-relaxed, leading-loose)

## Layout System
**Tailwind Spacing**: Use consistent units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-6, gap-8, py-12, my-20)
- **Container**: Max-width constrained (max-w-6xl or max-w-7xl) with comfortable padding
- **Section Spacing**: Generous vertical padding (py-16 to py-24) for breathing room
- **Component Spacing**: Ample whitespace between elements (gap-6, gap-8, space-y-8)

## Section Specifications

### 1. Hero Section
- **Layout**: Centered content with professional photo placeholder on one side
- **Content**: Name ("Chandan Kumar"), tagline, professional headshot placeholder (circular or subtle rounded)
- **CTA**: Primary "Contact Me" button with soft shadow and smooth scroll behavior
- **Image**: Professional headshot placeholder - clean, simple portrait style

### 2. About Section
- **Bio**: Short paragraph with clear typography
- **Skills**: Visual progress bars with soft fills (muted teal/slate blue)
- **Highlights**: Bullet points or small cards for education/interests
- **Layout**: Two-column on desktop (bio + skills), stacked on mobile

### 3. Projects Section
- **Cards**: Grid layout (2-3 columns desktop, 1 column mobile)
- **Card Design**: Soft shadows, rounded corners (rounded-lg), hover lift effect
- **Content per Card**: Image placeholder, title, short description, tech tags (pill-shaped badges), action links
- **Modal**: Clean overlay with detailed project info, lazy-loaded screenshots in gallery

### 4. Experience/Education Timeline
- **Design**: Vertical timeline with connecting line (soft teal)
- **Entry**: "BCA — Final Year" with icon/dot marker
- **Layout**: Left-aligned timeline with content cards extending right

### 5. Skills Section
- **Organization**: Categorized groups (Frontend/Backend/Tools)
- **Icons**: Tech stack icons in clean grid
- **Visual**: Subtle borders or cards grouping each category

### 6. Testimonials
- **Design**: Simple slider/carousel with navigation dots
- **Card Style**: Quote with soft background, name, role
- **Transition**: Smooth fade or slide animation

### 7. Contact Section
- **Form**: Clean inputs with soft borders, clear labels, visible validation states
- **Layout**: Form on left, contact info/social icons on right (stacked mobile)
- **Success/Error States**: Gentle toast notifications or inline messages
- **Social Icons**: Minimal, monochrome with hover color fill

### 8. Footer
- **Design**: Simple, clean bar with centered or split layout
- **Content**: Social links, "© Chandan Kumar — 2025", quick nav links
- **Spacing**: Comfortable padding, subtle top border

## Component Library

### Buttons
- **Primary**: Soft background (teal/slate blue), white text, subtle shadow, smooth hover lift
- **Secondary**: Outlined with accent color, transparent background
- **Hover States**: Gentle scale (hover:scale-105) or color darkening

### Cards
- **Style**: Soft shadows (shadow-md), rounded corners (rounded-lg to rounded-xl)
- **Hover**: Lift effect (hover:shadow-lg, hover:-translate-y-1)
- **Background**: White or very light background with subtle borders

### Progress Bars
- **Container**: Light gray background, rounded
- **Fill**: Muted teal/slate blue gradient, smooth animation on scroll-into-view

### Input Fields
- **Style**: Clean borders (border-gray-300), rounded (rounded-md), comfortable padding
- **Focus State**: Accent color ring (ring-teal-500)
- **Validation**: Green for success, red for errors with icon indicators

## Animations
- **Scroll**: Smooth scroll behavior for navigation
- **Hover**: Subtle scale, shadow, or color transitions (duration-300)
- **Modal**: Fade-in overlay with slide-up content (duration-200)
- **Progress Bars**: Animate width on scroll into view
- **Keep Minimal**: Animations should enhance, not distract

## Dark Mode Toggle
- **Position**: Top-right corner of navigation or hero
- **Icon**: Sun/moon toggle with smooth transition
- **Transition**: All colors transition smoothly (transition-colors duration-200)

## Images
- **Hero**: Professional headshot placeholder - clean portrait
- **Projects**: Mockup screenshots or project previews
- **All Images**: Use lazy loading, responsive srcset with multiple sizes

## Responsive Breakpoints
- **Mobile**: Single column, stacked sections, larger touch targets
- **Tablet (md:)**: 2-column layouts where appropriate
- **Desktop (lg:)**: Full multi-column layouts, optimal spacing

## Accessibility Requirements
- Skip-to-content link at top
- ARIA labels on all interactive elements
- Focus management for modal (trap focus, return on close)
- Keyboard navigation for carousel/slider
- High contrast text ratios (WCAG AA minimum)

This design creates a calm, professional portfolio that's easy to navigate, accessible, and showcases work effectively while maintaining visual restraint and readability.
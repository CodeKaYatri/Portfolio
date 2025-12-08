# Chandan Kumar Portfolio

## Overview
A clean, professional, responsive single-page portfolio website for Chandan Kumar, a final-year BCA student. Built with React, TypeScript, and Tailwind CSS.

## Recent Changes
- **Dec 8, 2025**: Initial portfolio creation with all sections (Hero, About, Projects, Experience, Skills, Testimonials, Contact, Footer)
- Dark mode toggle with prefers-color-scheme awareness
- EmailJS integration prepared for contact form
- SEO meta tags and Open Graph implementation

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── portfolio/       # Main portfolio section components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── examples/        # Component examples for preview
│   └── ui/              # Shadcn UI components
├── data/
│   ├── projects.json    # Project data
│   └── testimonials.json # Testimonial data
├── lib/
│   └── theme.tsx        # Dark mode theme provider
└── pages/
    └── home.tsx         # Main portfolio page
```

### Key Features
1. **Hero Section**: Professional headshot, name, tagline, social links
2. **About Section**: Bio, skills with progress bars, education highlights
3. **Projects Section**: Dynamic project cards from JSON, modal view
4. **Experience/Education**: Interactive timeline
5. **Skills Section**: Categorized tech icons (Frontend/Backend/Tools)
6. **Testimonials**: Carousel with navigation
7. **Contact Form**: Form validation, EmailJS ready
8. **Footer**: Social links, quick navigation, copyright

### Design System
- **Color Palette**: Soft neutral (off-white/beige background), muted teal primary
- **Typography**: Inter and Plus Jakarta Sans fonts
- **Theme**: Dark mode support with system preference detection

## Environment Variables
To enable the contact form, configure EmailJS:
- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## User Preferences
- Calm, professional, minimal design aesthetic
- Accessibility-first approach
- Mobile-responsive layout
- Smooth scroll navigation

## Development Notes
- Run `npm run dev` to start development server
- Frontend bound to port 5000
- Uses Vite for fast HMR
- Tailwind CSS for styling with custom design tokens

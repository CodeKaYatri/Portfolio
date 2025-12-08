# Chandan Kumar Portfolio

## Overview
A clean, professional, responsive single-page portfolio website for Chandan Kumar, a BCA final year student (completing 2026). Built with React, TypeScript, and Tailwind CSS featuring a calm, soothing color palette.

## Personal Details
- **Name**: Chandan Kumar
- **Email**: chandansoni60632@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/chandan-kumar-303478379/
- **GitHub**: https://github.com/CodeKaYatri
- **Education**: BCA Final Year (2023-2026)

## Recent Changes
- **Dec 8, 2025**: Complete portfolio with all sections:
  - Hero with name, tagline, CTA buttons
  - About with skills, typing speeds, highlights
  - Projects (Student Management System featured)
  - Education & Journey timeline
  - Skills (Programming, Typing, Tools, Knowledge)
  - Certifications (NPTEL Python 82%, Power BI)
  - Testimonials carousel
  - Contact form with EmailJS integration
  - Footer with social links

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── portfolio/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/              # Shadcn UI components
├── data/
│   ├── projects.json
│   └── testimonials.json
├── lib/
│   └── theme.tsx        # Dark mode provider
└── pages/
    └── home.tsx
```

### Key Features
1. **Hero**: Name, tagline "BCA Final Year (2026)", social links, profile photo
2. **About**: Bio, typing speeds (74 WPM English, 44 WPM Hindi), skill highlights
3. **Projects**: Student Management System (C + AI), Python Data Analysis, Power BI Dashboard
4. **Skills**: C, C++, Python, SQL, Java, Power BI, Git
5. **Certifications**: NPTEL Python (82%), Power BI Skill Nation
6. **Contact**: EmailJS-ready form with validation

### Design System
- **Colors**: Soft neutral palette (off-white, light beige), muted teal accents
- **Style**: Calm, professional, minimal with generous whitespace
- **Theme**: Dark mode with system preference detection

## Environment Variables (for EmailJS)
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Skills Listed
- **Programming**: C, C++, Python (82% NPTEL), SQL, Java
- **Typing**: English 74 WPM, Hindi 44 WPM
- **Tools**: Power BI (Certified), Git, GitHub
- **Knowledge**: Computer basics, Problem solving, Data structures

## Certifications
1. NPTEL Swayam - "The Joy of Programming Using Python" (82%)
2. Skill Nation - Power BI Certification

## Development
- Run `npm run dev` to start development server
- Frontend bound to port 5000
- Uses Vite for fast HMR

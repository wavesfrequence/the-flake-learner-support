# The Flake — Learner Support & Early Intervention

**Every learner is unique. Every flake matters.**

A role-based web app designed to support early identification and intervention for struggling learners in South African schools. The tone is calm, supportive, and non-alarming—this is about catching students early and offering care, not monitoring or punishing.

## Overview

The Flake provides tailored dashboards for three key roles:

- **Learner**: See your progress, recent check-ins, and access to support resources
- **Educator**: Monitor your class, identify students flagged for support
- **Guardian**: Simple, non-technical updates on your child's progress and wellbeing

## Features

- **Role-based dashboards**: Switch between learner, educator, and guardian views entirely client-side
- **Responsive design**: Works seamlessly on mobile and desktop
- **Accessible**: High contrast color schemes suitable for diverse users (school staff, parents, learners)
- **Demo data**: All data is clearly placeholder/sample data for preview purposes
- **Privacy-aware**: Marked with POPIA compliance awareness (South Africa's data protection law)
- **Supportive tone**: Language emphasizes care and early support, never surveillance or punishment

## Getting Started

1. Open `index.html` in a web browser
2. Use the role selector cards to switch between dashboards
3. Explore the sample data for each role

## Project Structure

- `index.html` – Main HTML file
- `styles.css` – Responsive styling with winter/ice color palette (cool blues, whites)
- `app.js` – Client-side logic for role switching and dashboard rendering

## Design Philosophy

### Color Palette
- Primary: Cool blues (`#0369a1`, `#0c4a6e`, `#06b6d4`)
- Background: Soft blues and whites
- Status badges:
  - **Steady**: Green (positive, supportive)
  - **Watch**: Warm orange/red (alert, requires attention—not punitive)
  - **Attention**: Amber (significant concern, needs immediate support)

### Typography & Tone
- Clear, accessible language
- Supportive framing: "See the signs. Support sooner."
- No clinical or surveillance-like terminology
- Emphasis on care and early intervention

### Accessibility
- High contrast text and backgrounds
- Clear status indicators (color + text)
- Responsive grid layouts
- Mobile-first approach

## Data Privacy

This is a **preview/demo app**. All data shown is sample/placeholder data. In a production environment, this app would:
- Integrate with a secure backend
- Enforce POPIA compliance (South Africa's data protection law)
- Use proper authentication and authorization
- Encrypt sensitive learner information

## Contributing

This project is designed for South African schools. Feedback and contributions are welcome. Please ensure all language and tone remain supportive and non-alarming when adding features.

## License

MIT License – feel free to adapt and use in your school context.

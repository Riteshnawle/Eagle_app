# ETIC - Eaglehi-Tech Industrial Corporate Website

A professional, modern corporate website for Eaglehi-Tech Industrial Corporate Pvt. Ltd, specializing in manpower supply and industrial solutions.

## Features

✨ **Modern Design**
- Clean, professional UI with corporate color scheme (Red #c00000, Black, White)
- Responsive design optimized for mobile and desktop
- Smooth scroll animations with Framer Motion

🎯 **Key Sections**
- **Header/Navbar** - Sticky navigation with smooth scroll links
- **Hero Section** - Eye-catching landing section with CTA
- **About Company** - Company information and core values
- **Services** - 6 service offerings with icons and descriptions
- **Clients** - Showcase of partner companies
- **Compliance** - Trust and regulatory compliance information
- **Contact** - Contact form with validation and location info
- **Footer** - Quick links and company information

🚀 **Advanced Features**
- Scroll animations and transitions
- Mobile-friendly hamburger menu
- Form validation with error handling
- Reusable React components
- Tailwind CSS for styling

## Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Language**: TypeScript

## Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Navigation header with sticky behavior
│   ├── Hero.tsx           # Hero section with background and CTA
│   ├── About.tsx          # Company info and values
│   ├── Services.tsx       # Service offerings
│   ├── Clients.tsx        # Client showcase
│   ├── Compliance.tsx     # Compliance and trust information
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Footer with links
├── App.tsx                # Main app component
├── main.tsx               # React entry point
└── index.css              # Tailwind styles
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Customization

### Color Theme
Update colors in `tailwind.config.js`:
```js
colors: {
  primary: '#c00000',  // Change primary red color
  dark: '#000000',     // Change dark color
  light: '#ffffff',    // Change light color
}
```

### Contact Information
Update contact details in `src/components/Contact.tsx`:
- Address
- Phone numbers
- Email addresses
- Business hours

### Client Logos
Add your clients in `src/components/Clients.tsx`:
```tsx
const clients = [
  { name: 'Company Name', logo: 'CN' },
  // Add more clients...
]
```

### Services
Modify services list in `src/components/Services.tsx` to match your offerings.

## Key Components

### Header
- Sticky navbar with smooth scroll
- Mobile hamburger menu
- Logo and company branding

### Hero Section
- Background gradient
- Compelling headline and subheading
- Statistics showcase
- Call-to-action button

### Services
- 6 service cards with icons
- Hover animations
- Responsive grid layout

### Contact Form
- Email, phone, name validation
- Success message display
- Error handling

## Best Practices

✓ **Clean Code**
- Functional components with hooks
- Proper TypeScript typing
- Reusable component patterns
- Consistent naming conventions

✓ **Performance**
- Motion animations for smooth UX
- Optimized component rendering
- CSS-in-JS with Tailwind

✓ **Accessibility**
- Semantic HTML
- Proper contrast ratios
- Keyboard navigation support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Google Maps integration in Contact section
- [ ] Blog/News section
- [ ] Client testimonials carousel
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Sitemap and robots.txt

## License

© 2024 Eaglehi-Tech Industrial Corporate Pvt. Ltd. All rights reserved.

## Support

For inquiries or support:
- Email: info@etic-industrial.com
- Phone: +91 (XXX) XXXX-XXXX
- Location: Chhatrapati Sambhajinagar, Maharashtra

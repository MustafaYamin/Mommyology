# Mommyology - Professional Website Redesign

A modern, professional website for Mommyology - a nature-based educational organization for children. This redesign transforms the original playful website into a professional, component-based architecture while maintaining the fun and engaging theme.

## 🎨 Design Features

### Professional Components
- **Hero Section**: Full-screen hero with animated elements and call-to-action buttons
- **Partners Section**: Infinite scrolling partner showcase
- **About Section**: Feature cards highlighting key aspects of the organization
- **Services Section**: Interactive service cards with hover effects
- **Events Section**: Event gallery with past events showcase
- **Contact Section**: Professional contact form with multiple contact methods

### Modern Design Elements
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Professional Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Proper focus states, ARIA labels, and semantic HTML

### Color Scheme
- **Primary Purple**: #6B5AA2 (Brand color)
- **Accent Yellow**: #FDE047 (Playful highlights)
- **Accent Blue**: #45C8F0 (Interactive elements)
- **Background**: Gradient from #F8F6FF to white

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Geist Sans, Comic Sans MS (for playful elements)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

## 🎯 Key Improvements

### Component Architecture
- Modular, reusable components
- Clean separation of concerns
- Easy to maintain and extend
- Professional code structure

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance
- Optimized images and assets
- Smooth scrolling and animations
- Efficient CSS with Tailwind
- Fast loading times

### User Experience
- Intuitive navigation
- Clear call-to-actions
- Engaging animations
- Professional contact forms

## 🛠️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Custom Animations

The website includes custom CSS animations:
- `bounce-slow`: 3s ease-in-out infinite
- `bounce-slower`: 4s ease-in-out infinite
- `bounce-fast`: 2s ease-in-out infinite
- `slide`: 20s linear infinite
- `scroll`: 30s linear infinite

## 🔧 Customization

### Colors
Update the color scheme in the CSS variables or Tailwind config:
- Primary: `#6B5AA2`
- Accent Yellow: `#FDE047`
- Accent Blue: `#45C8F0`

### Content
Each section component can be easily customized by modifying the data arrays and JSX structure.

### Animations
Framer Motion animations can be adjusted in each component's motion elements.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, contact the Mommyology team at info@mommyology.com

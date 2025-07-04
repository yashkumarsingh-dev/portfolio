# Yash Kumar Singh - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Yash Kumar Singh, a Full Stack Developer specializing in MERN stack and AI/ML technologies.

## 🌟 Features

### 🎨 **Modern Design**

- **Dark Theme**: Sleek dark color scheme with cyan and purple accents
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic interactions

### 📱 **Sections**

1. **Hero Section**: Professional introduction with profile image and call-to-action buttons
2. **About Section**: Personal background, education timeline, and professional summary
3. **Skills Section**: Technical skills and development tools with animated icons
4. **Work Section**: Featured projects with detailed descriptions and GitHub links
5. **Stats Section**: Professional statistics and achievements
6. **Contact Section**: Contact form with Formspree integration and contact information

### 🛠 **Technical Features**

- **TypeScript**: Full TypeScript implementation for type safety
- **React 18**: Latest React features with hooks and modern patterns
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for data fetching and caching
- **Routing**: Wouter for lightweight client-side routing

## 🚀 Technologies Used

### **Frontend**

- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Styling framework
- **Framer Motion 11.18.2** - Animations
- **React Hook Form 7.55.0** - Form handling
- **Zod 3.25.71** - Schema validation
- **TanStack Query 5.81.5** - Data fetching
- **Wouter 3.7.1** - Routing

### **UI Components**

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets
- **Class Variance Authority** - Component variant management

### **Development Tools**

- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint/TypeScript** - Code quality and type checking

## 📁 Project Structure

```
Portfolio/
├── client/                          # Frontend application
│   ├── index.html                   # HTML entry point
│   ├── src/
│   │   ├── App.tsx                  # Main application component
│   │   ├── main.tsx                 # React entry point
│   │   ├── index.css                # Global styles and Tailwind
│   │   ├── assets/                  # Static assets
│   │   │   ├── hero-profile.png     # Profile image
│   │   │   └── images.d.ts          # Image type definitions
│   │   ├── components/              # React components
│   │   │   ├── sections/            # Page sections
│   │   │   │   ├── hero.tsx         # Hero section
│   │   │   │   ├── about.tsx        # About section
│   │   │   │   ├── skills.tsx       # Skills section
│   │   │   │   ├── work.tsx         # Projects section
│   │   │   │   ├── stats.tsx        # Statistics section
│   │   │   │   └── contact.tsx      # Contact section
│   │   │   └── ui/                  # Reusable UI components
│   │   │       ├── header.tsx       # Navigation header
│   │   │       ├── footer.tsx       # Footer component
│   │   │       ├── button.tsx       # Button components
│   │   │       ├── card.tsx         # Card components
│   │   │       └── ...              # Other UI components
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── use-intersection-observer.ts
│   │   │   ├── use-mobile.tsx
│   │   │   ├── use-scroll-spy.ts
│   │   │   └── use-toast.ts
│   │   ├── lib/                     # Utility libraries
│   │   │   ├── queryClient.ts       # TanStack Query configuration
│   │   │   └── utils.ts             # Utility functions
│   │   └── pages/                   # Page components
│   │       ├── home.tsx             # Home page
│   │       └── not-found.tsx        # 404 page
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Locked dependencies
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
└── vite.config.ts                   # Vite build configuration
```

## 🎨 Design System

### **Color Palette**

- **Primary**: `#18191A` (Dark background)
- **Secondary**: `#0F0F0F` (Darker sections)
- **Accent**: `#06E6F7` (Cyan - primary accent)
- **Purple**: `#8B5CF6` (Purple - secondary accent)
- **Gray**: `#2A2A2A` (Card backgrounds)

### **Typography**

- **Primary Font**: Outfit (Modern, clean)
- **Secondary Font**: Inter (Readable body text)
- **Accent Font**: Montserrat (Headings and emphasis)

### **Components**

- **Cards**: Glass-morphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover animations
- **Navigation**: Smooth underline animations
- **Forms**: Modern input styling with focus states

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # TypeScript type checking
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile-First Approach**

- Optimized touch interactions
- Collapsible navigation
- Stacked layouts for small screens
- Optimized typography scaling

## 🎯 Key Features

### **Performance Optimizations**

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images with proper formats
- **Lazy Loading**: Intersection Observer for animations
- **Bundle Optimization**: Tree shaking and minification

### **Accessibility**

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color ratios

### **SEO Optimized**

- **Meta Tags**: Proper meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for better search results

## 🔧 Customization

### **Personal Information**

Update the following files to customize your portfolio:

- `client/src/components/sections/hero.tsx` - Hero section content
- `client/src/components/sections/about.tsx` - About section
- `client/src/components/sections/skills.tsx` - Skills and tools
- `client/src/components/sections/work.tsx` - Projects
- `client/src/components/sections/contact.tsx` - Contact information

### **Styling**

- `client/src/index.css` - Global styles and custom CSS
- `tailwind.config.ts` - Tailwind configuration and custom colors
- Component-specific styles in individual component files

### **Configuration**

- `vite.config.ts` - Build and development configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📧 Contact Integration

The contact form uses **Formspree** for email handling:

- Form submissions are sent to a configured Formspree endpoint
- Automatic form validation and error handling
- Spam protection and email delivery

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

### **Deployment Options**

- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Static site hosting
- **Firebase Hosting**: Google's hosting platform

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Yash Kumar Singh**
---

**Built using React, TypeScript, and Tailwind CSS**

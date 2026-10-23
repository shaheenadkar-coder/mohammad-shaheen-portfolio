# Mohammad Shaheen — Personal Portfolio Website

A modern, responsive, high-performance portfolio website built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**, tailored for an engineering student specializing in **Artificial Intelligence and Machine Learning**.

---

## 🚀 Live Preview & Development

The portfolio dev server is currently running:
- **Local URL**: `http://localhost:3000/`
- **Network**: `http://127.0.0.1:3000/`

### Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
mohammad-shaheen-portfolio/
├── public/
│   ├── Mohammad_Shaheen_Resume.pdf   # Verified source resume PDF
│   ├── resume.pdf                    # Alias for quick access
│   └── favicon.svg                   # Custom glowing "MS" monogram
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Responsive header, scrollspy, theme toggle
│   │   ├── Hero.tsx                  # Name, typing title, CTAs, badges
│   │   ├── About.tsx                 # Narrative bio, core pillars, verified notes
│   │   ├── Skills.tsx                # Categorized skills with live search
│   │   ├── Projects.tsx              # Filterable project cards (All/Featured/etc.)
│   │   ├── ProjectModal.tsx          # Architecture deep-dive modal & code preview
│   │   ├── Education.tsx             # AJIET credentials & coursework
│   │   ├── ResumeSection.tsx         # Dedicated CV showcase & download triggers
│   │   ├── ResumeModal.tsx           # In-browser PDF preview modal
│   │   ├── Contact.tsx               # Validated form, mailto fallback, copy email
│   │   ├── Footer.tsx                # Social links, copyright, scroll-to-top
│   │   ├── BackToTop.tsx             # Floating back-to-top button
│   │   ├── SocialIcons.tsx           # Verified vector SVGs for LinkedIn & GitHub
│   │   └── Toast.tsx                 # Non-intrusive feedback toasts
│   ├── context/
│   │   └── ThemeContext.tsx          # Dark/Light mode provider with persistence
│   ├── data/
│   │   └── portfolioData.ts          # Single source of truth (easy to update)
│   ├── types/
│   │   └── index.ts                  # TypeScript definitions
│   ├── App.tsx                       # Master layout & section orchestrator
│   ├── index.css                     # Tailwind styles & smooth animations
│   └── main.tsx                      # React root entry
├── index.html                        # SEO meta tags & font preloads
├── tailwind.config.js                # Custom navy/cyan palette & keyframes
├── tsconfig.json                     # TypeScript strict configuration
└── vite.config.ts                    # Vite build configuration (port 3000)
```

---

## 🎨 Design & Visual Identity

- **Color Palette**:
  - Background: Dark Navy / Charcoal (`#060a12`, `#0a0f1d`, `#141e34`)
  - Text: Clean Slate (`#f8fafc`, `#cbd5e1`, `#94a3b8`)
  - Accents: Electric Cyan (`#00f2ff`, `#22d3ee`, `#06b6d4`) and Vibrant Blue (`#3b82f6`)
  - Light Theme: Refined Slate/White with deep indigo and cyan accents
- **Theme Toggle**: Defaults to Dark Mode with seamless Light Mode switching and `localStorage` persistence.
- **Accessibility**: Includes `prefers-reduced-motion` detection for typing animation and high-contrast color ratios.

---

## 🔒 Grounded In Truth

- **Personal Profile**:
  - Name: Mohammad Shaheen
  - Specialization: Artificial Intelligence and Machine Learning
  - College: AJ Institute of Engineering and Technology (AJIET), Mangaluru
  - Education: Engineering, listed as 2024 in resume
  - Location: Mangaluru, Karnataka, India
  - Email: `shaheenadkar@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/mohammad-shaheen-a4621743a`
- **Integrity**: No fabricated grades, CGPAs, corporate experience, fake Github stars, or bogus customer testimonials. Transparently distinguishes between completed software features and planned roadmap items.

---

## 🌐 Deploying to the Web

### Deploy to Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

### Deploy to Netlify
1. Drag and drop the `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop) or link via Git.
2. Build Command: `npm run build`
3. Publish Directory: `dist`

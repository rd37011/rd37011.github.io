# Ryan Diaz - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Build Tools
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### Deployment
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD pipeline

## Features

- Responsive design that works on all devices
- Custom timeline component for experience section
- Reusable card components for projects
- Custom fonts (Alata and Noto Serif JP)
- Clean, professional design
- Fast loading with Vite optimization
- Type-safe with TypeScript

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── fonts/                  # Custom fonts (Alata, Noto Serif JP)
│   └── favicon.ico             # Site favicon
├── src/
│   ├── assets/
│   │   └── images/             # Images and company logos
│   ├── components/
│   │   ├── Card.tsx            # Reusable card components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Timeline.tsx        # Timeline components for experience
│   ├── pages/
│   │   ├── About.tsx           # About page (placeholder)
│   │   ├── Contact.tsx         # Contact page (placeholder)
│   │   └── Home.tsx            # Main landing page
│   ├── styles/
│   │   └── index.css           # Global styles and Tailwind imports
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite type definitions
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

## Setup Instructions

### Prerequisites
- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rd37011/rd37011.github.io.git
cd rd37011.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Development Workflow

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking
- `npm run deploy` - Build and deploy to GitHub Pages (manual)

### Development Server

The development server runs on `http://localhost:5173` with hot module replacement (HMR). Changes to your code will automatically refresh in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory. The build:
- Minifies JavaScript and CSS
- Optimizes images
- Generates source maps
- Tree-shakes unused code

### Previewing Production Build

```bash
npm run preview
```

This serves the production build locally so you can test it before deploying.

## Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `master` branch.

**How it works:**
1. Push changes to `master` branch
2. GitHub Actions workflow triggers
3. Builds the project
4. Deploys to GitHub Pages
5. Site is live at `https://rd37011.github.io/rd37011.github.io/`

**First-time setup:**
1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The workflow will handle the rest

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

This builds the project and uses `gh-pages` package to deploy to the `gh-pages` branch.

## Customization

### Fonts

The project uses custom fonts located in `public/fonts/`:
- **Alata** - For special headings
- **Noto Serif JP** - Multiple weights (Light, Regular, Medium, SemiBold, Bold, Black, ExtraLight)

Font configurations are in:
- `src/styles/index.css` - Font face declarations
- `tailwind.config.js` - Tailwind font family utilities

### Colors and Styling

Tailwind CSS provides utility classes for styling. To customize:
- Edit `tailwind.config.js` to add custom colors, spacing, etc.
- Use Tailwind's theme extension for custom design tokens

### Content

Main content is in `src/pages/Home.tsx`. Update:
- Personal information
- Work experience (Timeline component)
- Projects (Card components)
- Contact information

## Technologies Explained

### Why Vite?

Vite provides:
- Extremely fast dev server startup
- Lightning-fast hot module replacement (HMR)
- Optimized production builds
- Native ES modules support
- Better developer experience than Create React App

### Why TypeScript?

TypeScript adds:
- Type safety and fewer runtime errors
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring

### Why Tailwind CSS?

Tailwind offers:
- Utility-first approach for rapid development
- No context switching between HTML and CSS
- Smaller bundle sizes (only used classes)
- Consistent design system
- Responsive design made easy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

- Email: rd37011@gmail.com
- Alternate: rxd234@miami.edu

---

**Note:** This site is a migration from Vue.js to React, maintaining the same design and functionality while leveraging modern React and tooling practices.

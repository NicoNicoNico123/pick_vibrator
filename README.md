# VibeFinder - Vibrator Quiz App

A modern, interactive quiz application built with React and Tailwind CSS to help users discover their perfect vibrator type. Inspired by Cosmopolitan's Guide to Vibrators.

## Features

- 🎯 **7-Question Interactive Quiz** - Personalized recommendations based on preferences
- 📊 **Performance Stats** - Visual comparison charts for intensity, discretion, and versatility
- 🎨 **Beautiful UI** - Modern design with smooth animations and gradients
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔍 **Explore All Types** - Browse and compare all 10 vibrator types

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pick_vibrator.git
cd pick_vibrator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment

### GitHub Pages

1. Update the `base` path in `vite.config.js` to match your repository name:
```js
base: '/your-repo-name/',
```

2. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch
   - Save

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository for automatic deployments.

## Project Structure

```
pick_vibrator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

### Changing the Base Path

If deploying to a subdirectory, update `vite.config.js`:
```js
base: '/your-subdirectory/',
```

### Modifying Quiz Questions

Edit the `QUESTIONS` array in `src/App.jsx` to customize quiz questions and scoring.

### Adding New Vibrator Types

Add new entries to the `VIBE_TYPES` array in `src/App.jsx` with the required properties:
- `id`: Unique identifier
- `name`: Display name
- `description`: Product description
- `icon`: React icon component
- `tags`: Array of tags
- `color`: Tailwind color classes
- `imageGradient`: Gradient classes for the image container
- `specs`: Object with intensity, discretion, and versatility (0-100)

## License

This project is for educational and entertainment purposes only.

## Credits

Inspired by Cosmopolitan's Guide to Vibrators.


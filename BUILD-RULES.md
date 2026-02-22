# BUILD-RULES.md: Halo Glow Site

## 1. Tech Stack
- **Framework:** Static HTML/CSS/JS
- **Styling:** Custom CSS (assets/css/styles.css)
- **Components:** Partial-based inclusion via `assets/js/include.js`
- **Deployment:** Vercel (Static)

## 2. Project Structure
- `/index.html`: Homepage
- `/services.html`: Services page
- `/contact.html`: Contact page
- `/partials/`: Reusable HTML fragments (header, footer)
- `/assets/css/`: Stylesheets
- `/assets/js/`: Client-side scripts
- `/assets/images/`: Optimized webp/png assets

## 3. Build & Deployment
- **Build Command:** None (Static)
- **Output Directory:** `.` (Root)
- **Vercel Integration:** Automatic on push to `main`

## 4. Key Conventions
- **Logo Handling:** Use `haloglow-logo-icon.webp` for favicon/small icons and `halo-glow-beauty-logo-dark.webp` for header. Avoid duplication.
- **Image Optimization:** Always prefer `.webp` format for performance.
- **Partials:** When updating header/footer, edit files in `/partials/` and ensure `include.js` is correctly loading them.

## 5. Environment Variables
- None required for current static version.

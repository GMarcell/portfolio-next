# Grand Marcell — Portfolio

A modern, production-grade portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. Features a contact form powered by Resend, dark/light theme with smooth view transitions, custom cursor effects, and scroll-triggered animations.

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Primitives | [Base UI](https://base-ui.com/) (Switch, Button) |
| Animations | CSS `view-transition`, IntersectionObserver scroll-reveal, CSS keyframes |
| Email | [Resend](https://resend.com/) |
| Deployment | Node.js server (Vercel, Netlify, or any Node.js host) |

## Requirements

- **Node.js** >= 20.9.0
- **npm** (included with Node.js)

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/GMarcell/portfolio-next.git
cd portfolio-next

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your RESEND_API_KEY

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `RESEND_API_KEY` | Yes | — | Resend API key for the contact form |
| `CONTACT_EMAIL` | No | `grand1310marcell@gmail.com` | Where contact messages are sent |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

## Production Checklist

Before deploying to production:

1. **Set up Resend**: Create an account at [resend.com](https://resend.com/), verify your domain, and add the API key to `RESEND_API_KEY`.
2. **Update the "from" address**: In `app/api/contact/route.ts`, change `onboarding@resend.dev` to your verified domain.
3. **Update the OG image URL**: In `app/sitemap.ts` and `app/robots.ts`, update the `grandmarcell.dev` URL to your actual domain.
4. **Set environment variables**: Configure `RESEND_API_KEY` and optionally `CONTACT_EMAIL` in your deployment platform.

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Add `RESEND_API_KEY` to your Vercel project's environment variables.

### Netlify

1. Connect your repository to Netlify
2. Set build command to `npm run build`
3. Set publish directory to `.next`
4. Add `RESEND_API_KEY` to environment variables

## CI/CD

This project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs lint, type-check, and build on every push and pull request to the `main` branch.

## Security

- **Rate limiting**: The contact form API limits requests to 5 per 60 seconds per IP.
- **Content Security Policy**: Strict CSP headers are applied to all routes.
- **HTTPS enforced**: HSTS header with `includeSubDomains` and `preload`.
- **Security headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Permissions-Policy, and Referrer-Policy are all set.

## Lighthouse

The site is optimised for Lighthouse performance with:
- Targeted CSS transitions (no universal `*` transitions)
- `content-visibility: auto` on below-fold sections
- GPU-composited cursor and ticker animations (`translate3d`, `will-change`)
- Pre-rendered PNG noise instead of SVG `feTurbulence`
- `display: swap` font loading with preconnect hints
- Production source maps disabled

## File Structure

```
.
├── app/                    # Next.js App Router pages and API
│   ├── api/contact/        # Contact form API route
│   ├── globals.css         # Global styles and theme tokens
│   ├── layout.tsx          # Root layout with metadata and JSON-LD
│   ├── not-found.tsx       # Custom 404 page
│   ├── error.tsx           # Global error boundary
│   ├── loading.tsx         # Loading state
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   ├── opengraph-image.tsx # OG image for social previews
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── layout/             # SiteNav, SiteFooter, ThemeProvider, etc.
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   ├── effects/            # Custom cursor, scroll-reveal animations
│   ├── ui/                 # Reusable UI primitives (Button, Switch, Icons)
│   └── contact-form.tsx    # Contact form with validation
├── data/                   # Portfolio content (projects, experience, skills)
├── lib/                    # Utilities (rate-limit, resend client, cn helper)
├── public/                 # Static assets (resume.pdf)
└── next.config.ts          # Next.js configuration (headers, images, etc.)
```

## License

MIT — feel free to use this as a template for your own portfolio.

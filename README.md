# Venkat Portfolio

A modern, fast, fully responsive personal portfolio website for Venkat - Data Analyst & Automation Developer who also builds full-stack SaaS products.

Built with React 19 + Vite 8 + Tailwind CSS 4. Static site, no backend. Deployable on Vercel free tier.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Web3Forms (contact form)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment on Vercel

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy! No additional configuration needed

## Environment Variables

Add the following environment variables to Vercel (Project Settings > Environment Variables):

- `VITE_WEB3FORMS_KEY` - Your Web3Forms access key
- `VITE_CONTACT_EMAIL` - Your email address (shown on page if set)
- `VITE_RESUME_URL` - URL to your resume PDF (e.g. `/resume.pdf` or a full URL)

## Contact Form

The contact form uses Web3Forms. If `VITE_WEB3FORMS_KEY` is not set, the form will show an error state. If `VITE_CONTACT_EMAIL` is set, your email will be displayed on the page.

## Dark mode

- Toggle via localStorage preference (persists across visits)
- Defaults to OS preference on first visit
- No flash on first paint (theme set via inline script before render)

## Social Preview

Add `public/social-preview.png` (1200×630 PNG) for platform previews. SVG favicons do not work for platform previews.

## Custom Domain

Replace the default `https://venkat-portfolio.vercel.app` domain with your confirmed custom domain if needed.

## Passport photo

`Passport_photo.png` is 2.3 MB and unused. Either use it in the hero or About as an optimised WebP under 150 KB with width, height and alt text, or remove it.

---

*This portfolio is aimed at employers hiring Data Analysts / BI professionals. All content is based on verified facts only.*
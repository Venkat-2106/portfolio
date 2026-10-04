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

## Contact Form Setup

1. Get a free access key from [Web3Forms](https://web3forms.com/)
2. Add `VITE_WEB3FORMS_KEY` to your environment variables (Vercel: Project Settings > Environment Variables)
3. Optionally add `VITE_CONTACT_EMAIL` to display your email on the page
4. Add `VITE_CONTACT_EMAIL` to show your email on the page (otherwise email is hidden from visitors)

## Placeholders (fill these in after deployment)

- `VITE_WEB3FORMS_KEY` - Your Web3Forms access key environment variable
- `VITE_CONTACT_EMAIL` - Your email address (shown on page if set)
- Resume PDF: add `public/resume.pdf` and the "Download Résumé" button will appear automatically
- Social preview image: `public/social-preview.png` (1200×630 PNG - SVG favicons do not work for platform previews)
- Replace the default `https://venkat-portfolio.vercel.app` domain with your confirmed custom domain if needed

## Dark mode

- Toggle via localStorage preference (persists across visits)
- Defaults to OS preference on first visit
- No flash on first paint (theme set via inline script before render)

## Verified Facts (for reference only - do not modify the promo)

- Data Analyst, Datazoic Machines Pvt. Ltd., May 2025 – Present: built DataIQ (Python/Tkinter desktop app, menu-driven validation and cleanup of large Excel datasets, live log panel, thread-safe execution); automated validation pipelines (comparison, mismatch detection, duplicate cleanup, standardisation); Python/SQL/Excel transformation.
- Associate Partner, Samsung Electronics, Chennai, Aug 2023 – May 2025: VBA automation cut manual workload by 75%; SQL analysis integrated into Apache Superset improved decision-making efficiency by 15%; maintained the Master Pricing File (12 weeks, 15+ sheets, 5,500+ SKUs) for Home Appliances and Home Electronics; weekly B2B tier pricing; designed and QA-tested promotions for Samsung.com; received an appreciation mail for automation work.
- Projects: DataIQ; Power BI Dashboard Suite (Northwind, Meal Delivery, Sales & Budget Analysis, Australia Student Graduation, IPL performance; Power BI, Power Query, DAX); VBA reporting automation (Excel to PowerPoint to Outlook, up to 75% less manual effort); Python + Windows Task Scheduler workflow automation; SmartBillr (multi-tenant billing/inventory SaaS: React, FastAPI, PostgreSQL/Supabase).
- Early: April 2020 started a computer centre while in college, later recognised as an FSSAI Mitra Center (one line only).
- Links: LinkedIn https://www.linkedin.com/in/venkatesh-kumar-5a2a2631a/ , GitHub https://github.com/Venkat-2106

## Dark mode

- Toggle via localStorage preference (persists across visits)
- Defaults to OS preference on first visit
- No flash on first paint (theme set via inline script before render)
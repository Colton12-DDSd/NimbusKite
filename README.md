# NimbusKite Cloud Services Marketing Site

Production-ready static marketing site built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Production build

```bash
npm run build
```

The project is configured for static export (`output: "export"`) and outputs deployable static files in `out/`.

## Vercel deployment (zero config)

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import the repo into Vercel.
3. Keep default framework detection (Next.js) and deploy.

No custom environment variables or build overrides are required.

## Editing partner links

Update partner names, taglines, and URLs in:

- `data/partners.ts`

## Replacing or swapping the logo

Update the logo component in:

- `components/Logo.tsx`

Header and brand references automatically reflect this component.

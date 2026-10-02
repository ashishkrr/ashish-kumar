# Ashish Kumar portfolio

Personal portfolio built with React, TypeScript, and Create React App.

## Local development

```sh
npm ci
npm start
```

Create an optimized production build with:

```sh
npm run build
```

## Deployment and SEO

The GitHub Actions workflow in `.github/workflows/build.yml` publishes the
`build` directory to GitHub Pages. The production URL is
`https://ashkr19.github.io/mr_technical/`.

Update the title, description, social metadata, canonical URL, and structured
data in `public/index.html` when the portfolio identity or domain changes.
Update `public/sitemap.xml` and the sitemap URL in `public/robots.txt` at the
same time if the deployment URL changes.

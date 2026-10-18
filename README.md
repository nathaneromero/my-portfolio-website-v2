# V2 of My Portfolio

Made with React + Vite, deployed to GitHub Pages.

## Run locally
```
npm install
npm run dev
```

## Edit
- All text: `src/data/content.js`
- Styles: `src/index.css`
- Daily trivia (placeholder for now): `public/trivia.json`

## GoatCounter setup
1. Sign up at goatcounter.com and pick a site code.
2. Put the code in `index.html` (replace YOUR-CODE) and in `src/data/content.js`.
3. In GoatCounter: Settings > Site > enable "Allow adding visitor counts on your website".

## Deploy
1. Push to a GitHub repo's `main` branch.
2. Repo Settings > Pages > Source: "GitHub Actions".
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

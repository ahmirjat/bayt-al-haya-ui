# Bayt al-Haya

Faith-inspired abayas, hijabs, prayer wear, and modest essentials. This existing repository remains named `noor-abaya`; the customer-facing brand is Bayt al-Haya.

## Run locally

```powershell
cd noor-abaya
npm install
npm run dev
```

Open http://localhost:3000.

## Run Selenium UI tests

Start the website, then run:

```powershell
npm run test:ui
```

Test another deployment:

```powershell
$env:TEST_BASE_URL="https://ahmirjat.github.io/bayt-al-haya-ui/"
$env:TEST_EXPECT_DEMO_BANNER="true"
npm run test:ui
```

## GitHub Pages preview

The public UI preview is configured for:

`https://ahmirjat.github.io/bayt-al-haya-ui/`

Build the static Pages artifact locally:

```powershell
npm run build:pages
```

The export is written to `out`. Public-preview builds use mock/static data, show the demo banner, disable live admin behavior, and do not call a laptop API.

## Beginner editing guide

- Edit products in `src/data/products.ts`.
- Edit page content in `src/app`.
- Edit shared navigation and footer in `src/components`.
- Edit colors and shared styles in `src/app/globals.css`.

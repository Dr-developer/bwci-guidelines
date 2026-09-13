# Deploying the BWCI Guidelines Site to GitHub Pages — Step by Step

Your project is a **Vite + React + TypeScript + Tailwind v4** app. Good news: it uses
`vite-plugin-singlefile`, so the entire site builds into **one `index.html` file** — which
makes GitHub Pages deployment painless (no asset-path issues).

Everything needed for deployment has already been prepared in this project:

| What | Status |
|---|---|
| Correct `src/` folder structure (components, data, hooks, sections, utils) | ✅ Done |
| `base: "./"` added to `vite.config.ts` (safe for any repo name) | ✅ Done |
| `.github/workflows/deploy.yml` (auto-deploy on push) | ✅ Done |
| `.gitignore` | ✅ Done |
| Production build verified (`npm run build` → `dist/index.html`, 452 KB) | ✅ Done |

---

## Prerequisites

1. A **GitHub account** — [github.com](https://github.com)
2. **Git** installed — check with `git --version` ([download](https://git-scm.com/downloads))
3. **Node.js 20+** installed — check with `node --version` ([download](https://nodejs.org))

---

## Step 1 — Create a new GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: anything you like, e.g. `bwci-guidelines`
3. Keep it **Public** (required for free GitHub Pages)
4. **Do NOT** check "Add a README", ".gitignore", or "license" (you already have files)
5. Click **Create repository**

> Your site URL will be: `https://<your-username>.github.io/bwci-guidelines/`

---

## Step 2 — Push the project to GitHub

Open a terminal **inside the project folder** (the one containing `package.json` and `src/`)
and run these commands, replacing `<your-username>` and `<repo-name>` with your own:

```bash
# Initialize git (first time only)
git init -b main

# Stage and commit all files
git add .
git commit -m "Initial commit: BWCI UI guidelines site"

# Connect to your GitHub repository
git remote add origin https://github.com/<your-username>/<repo-name>.git

# Push
git push -u origin main
```

If GitHub asks for credentials, use a **Personal Access Token** as the password
(Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
with the `repo` scope). Or install [GitHub CLI](https://cli.github.com) and run `gh auth login`.

---

## Step 3 — Enable GitHub Pages (one-time setting)

1. In your repository on GitHub, go to **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under **"Build and deployment" → "Source"**, select **GitHub Actions**
4. Done — nothing else to configure here

---

## Step 4 — Watch the automatic deployment

1. Go to the **Actions** tab of your repository
2. You should see the workflow **"Deploy to GitHub Pages"** running (it triggers
   automatically on every push to `main`)
3. Wait for the green checkmark ✅ (usually 1–2 minutes)
4. If it's your first push and no workflow ran, click **"Run workflow"** in the Actions tab
   (the workflow supports manual dispatch too)

---

## Step 5 — Open your live site 🎉

Visit:

```
https://<your-username>.github.io/<repo-name>/
```

You can also find the exact URL in the workflow run's **deploy** job output
(`github-pages` environment → "View deployment").

> First-time publishing can take a few extra minutes for DNS/CDN to propagate.
> If you see a 404, wait ~5 minutes and hard-refresh (Ctrl+Shift+R).

---

## Future updates

Every time you change the site, just run:

```bash
git add .
git commit -m "Update guidelines"
git push
```

The workflow rebuilds and redeploys automatically.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Actions tab shows nothing | Make sure you pushed to the `main` branch, and that `.github/workflows/deploy.yml` exists in the repo |
| Workflow fails at "Install dependencies" | Make sure `package-lock.json` is committed (the workflow uses `npm ci`, which requires it) |
| Site loads but shows 404 | In **Settings → Pages**, confirm Source is **GitHub Actions** (not "Deploy from a branch") |
| Blank white page | Open browser DevTools console and check errors; also confirm the `deploy` job finished successfully |
| Fonts look different | The site loads Google Fonts (Plus Jakarta Sans, JetBrains Mono, Newsreader) from the internet — the viewer needs network access |

---

## Alternative: deploy with the `gh-pages` package (no Actions)

If you prefer pushing a built branch instead of using Actions:

```bash
npm install -D gh-pages
```

Add to `package.json` scripts:

```json
"deploy": "npm run build && gh-pages -d dist"
```

Then:

```bash
npm run deploy
```

And in **Settings → Pages**, set Source to **"Deploy from a branch"** and pick the
`gh-pages` branch / `/ (root)` folder. (The Actions method above is recommended —
it keeps your repo clean and deploys on every push automatically.)

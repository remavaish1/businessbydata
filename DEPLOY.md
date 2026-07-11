# Business By Data — GitHub Pages Deployment

This package contains the approved BBD website prepared for GitHub Pages:

- `index.html` — homepage
- `services/index.html` — dedicated Services page
- `assets/styles.css` — website styling
- BBD logo, favicon and approved image assets
- `CNAME` — preserves `businessbydata.co`
- `.nojekyll` — ensures GitHub Pages serves all files directly

## Deploy from PowerShell

1. Download and extract this ZIP.
2. Open the extracted folder and copy **all contents inside it**.
3. Paste them into:

   `C:\Users\Rema Vaish\Projects\businessbydata`

4. If Windows asks whether to replace files, choose **Replace**.
5. In PowerShell, run:

```powershell
cd "$HOME\Projects\businessbydata"
git status
git add -A
git commit -m "Deploy redesigned Business By Data website"
git push origin main
```

6. In GitHub, open **Settings → Pages** and confirm the source is:

   **Deploy from a branch → main → /(root)**

7. Allow a few minutes, then open `https://businessbydata.co` and hard refresh with `Ctrl + F5`.

## Important

Do not delete or edit the `CNAME` file. It keeps the custom domain connected.

# BN Auto Folije - Website

Profesionalna web prezentacija za BN Auto Folije - usluge zatamnjivanja stakla i presvlačenja vozila u Vrnjačkoj Banji.

## 🚀 Tehnologije

- **React 18** - UI biblioteka
- **TypeScript** - Type safety
- **Vite** - Build tool i dev server
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **EmailJS** - Email servis za kontakt formu

## 📦 Instalacija

```bash
# Instaliraj dependencies
npm install
```

## 🛠️ Development

```bash
# Pokreni dev server
npm run dev
```

Aplikacija će biti dostupna na `http://localhost:5173`

## 🏗️ Build

```bash
# Build za production
npm run build
```

Buildovani fajlovi će biti u `dist/` folderu.

## 📤 Deployment na Netlify

### Automatski deployment (preporučeno)

1. **Push na GitHub/GitLab/Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Poveži sa Netlify:**
   - Idite na [Netlify](https://www.netlify.com/)
   - Kliknite na "Add new site" → "Import an existing project"
   - Izaberite vaš Git provider (GitHub/GitLab/Bitbucket)
   - Izaberite repository
   - Netlify će automatski detektovati konfiguraciju iz `netlify.toml`

3. **Build Settings (automatski detektovano):**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18.x ili noviji

4. **Deploy:**
   - Kliknite "Deploy site"
   - Netlify će automatski buildovati i deployovati sajt

### Ručni deployment

1. Build projekta:
   ```bash
   npm run build
   ```

2. Drag & drop `dist` folder na Netlify dashboard

### Environment Variables (opciono)

Ako u budućnosti dodate environment varijable, možete ih dodati u Netlify:
- Site settings → Environment variables
- Dodajte varijable kao `VITE_*` (Vite zahteva prefix)

## 📋 Netlify Konfiguracija

Projekat koristi `netlify.toml` za konfiguraciju:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Redirects:** SPA routing (sve rute → index.html)
- **Headers:** Security headers i cache optimizacija

## 🔧 Struktura Projekta

```
project/
├── public/           # Statički fajlovi
│   ├── _redirects    # Netlify redirects za SPA
│   ├── robots.txt    # SEO robots
│   ├── sitemap.xml   # SEO sitemap
│   └── manifest.json # PWA manifest
├── src/
│   ├── components/   # React komponente
│   ├── pages/        # Page komponente
│   ├── hooks/        # Custom React hooks
│   └── data/         # Data fajlovi
├── netlify.toml      # Netlify konfiguracija
└── package.json      # Dependencies i scripts
```

## ✅ Checklist pre push-a na Git

- [x] `netlify.toml` kreiran
- [x] `manifest.json` kreiran
- [x] `.gitignore` konfigurisan
- [x] Build projekta radi (`npm run build`)
- [ ] Git repository inicijalizovan
- [ ] Sve promene commitovane
- [ ] Remote repository povezan

## 🌐 Live Site

Nakon deployment-a, sajt će biti dostupan na:
- Netlify default URL: `https://random-name-123.netlify.app`
- Custom domain: `https://bnautofolije.com` (ako je konfigurisan)

## 📝 Napomene

- **EmailJS:** Trenutno koristi hardkodovane ključeve u `ContactPage.tsx`. Za production, preporučeno je koristiti environment varijable.
- **Images:** Koriste se Cloudinary URL-ovi za slike.
- **Routing:** React Router koristi history mode, što zahteva Netlify redirects (već konfigurisano u `_redirects` i `netlify.toml`).

## 🐛 Troubleshooting

### Build greške na Netlify
- Proverite da li je Node version 18+ (možete dodati `.nvmrc` fajl)
- Proverite da li su sve dependencies instalirane (`package-lock.json` je commitovan)

### Routing ne radi
- Proverite da li `_redirects` fajl postoji u `public/` folderu
- Proverite `netlify.toml` redirect konfiguraciju

### Environment varijable
- U Netlify dashboard-u, dodajte environment varijable u Site settings
- Vite zahteva `VITE_` prefix za environment varijable


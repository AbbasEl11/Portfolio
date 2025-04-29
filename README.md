<p align="center">
  <a href="https://github.com/AbbasEl11/Portfolio/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/AbbasEl11/Portfolio/ci.yml?branch=main"
         alt="CI Status">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg"
         alt="License">
  </a>
  <a href="https://github.com/AbbasEl11/Portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/AbbasEl11/Portfolio?style=social"
         alt="GitHub stars">
  </a>
</p>

# Portfolio

**Personal portfolio website** built with **Angular CLI** v19.2.8 to showcase my web-development projects.

---

## 🚀 Features

- **One-page design** with smooth scroll  
- **Modular components** (Header, Projects, Contact)  
- **Responsive layout** via SCSS Grid & Flexbox  
- **Easy deployment** as static assets in `dist/`

---

## 🛠️ Tech Stack

- **Angular** (CLI v19.2.8)  
- **TypeScript**  
- **SCSS**  
- **HTML5**

---

## 📦 Installation & Development

```bash
# Clone the repo
git clone https://github.com/AbbasEl11/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
ng serve

# Open in browser
http://localhost:4200
````

⚙️ Build & Deployment

```bash
ng build --prod
````

Produces optimized files in dist/.
To deploy to GitHub Pages:

```bash
npm install -g angular-cli-ghpages
ng deploy --base-href=/Portfolio/
````

📁 Project Structure

```csharp
Portfolio/
├── .vscode/             # Editor settings
├── public/              # Static assets
├── src/
│   ├── app/             # Angular components
│   ├── assets/          # Images, fonts
│   └── styles/          # Global SCSS
├── angular.json         # Angular config
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
├── LICENSE
├── CONTRIBUTING.md
└── CODE_OF_CONDUCT.md
````

✅ Tests
Unit Tests:

```bash
ng test
```

E2E Tests: (if configured)

```bash
ng e2e
```

🤝 Contributing
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

📄 License
This project is licensed under the [MIT License](LICENSE).

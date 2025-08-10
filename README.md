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

## License
```bash
MIT License

Copyright (c) 2025 Abbas El Mahmoud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author
Developed by [AbbasEl11](https://https://github.com/AbbasEl11)


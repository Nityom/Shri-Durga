# 🏥 Shri Durga Hospital - Modern Healthcare Website

A premium, responsive healthcare website built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. Features a stunning dark/light mode, smooth animations, and comprehensive SEO optimization.

![ShriDurga Hospital](./public/og-image.png)

## ✨ Features

- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Static generation with Next.js 16 Turbopack
- 🎨 **Premium UI** - Modern glassmorphism, gradients, and micro-animations
- 🔍 **SEO Optimized** - Open Graph, Twitter Cards, JSON-LD structured data
- ♿ **Accessible** - Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.0.6 | React Framework |
| [React](https://react.dev/) | 19.0.0 | UI Library |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0.0 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Animations |
| [Lucide React](https://lucide.dev/) | Latest | Icons |
| [React Select](https://react-select.com/) | Latest | Dropdowns |

## 📁 Project Structure

```
kailash_hospital/
├── public/
│   ├── images/          # Doctor & hero images
│   ├── og-image.png     # Social sharing image
│   └── kailash-logo.png # Brand assets
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── appointment/ # Booking page
│   │   ├── blog/        # Blog page
│   │   ├── contact/     # Contact page
│   │   ├── doctors/     # Doctors listing
│   │   ├── faq/         # FAQ page
│   │   ├── services/    # Services page
│   │   ├── terms/       # Terms page
│   │   ├── privacy/     # Privacy page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Homepage
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Doctors.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       └── ...
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kailash-hospital.git
   cd kailash-hospital
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #0f172a;
  --accent: #0891b2;
  --warm: #f97316;
  /* ... more variables */
}
```

### Fonts

The project uses Google Fonts:
- **Outfit** - Display & body text
- **Playfair Display** - Headings
- **Roboto** - Monospace

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/kailash-hospital)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
pnpm build
# Upload .next folder to your hosting
```

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, doctors, testimonials |
| About | `/about` | Hospital history & mission |
| Services | `/services` | Medical services offered |
| Doctors | `/doctors` | Doctor profiles & specialties |
| Contact | `/contact` | Contact form & info |
| Blog | `/blog` | Health articles |
| FAQ | `/faq` | Frequently asked questions |
| Appointment | `/appointment` | Online booking form |

## 🔧 Environment Variables

No required environment variables. The app auto-detects Vercel URLs:

```js
// Automatic URL detection
metadataBase: new URL(
  process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://kailash.vercel.app"
)
```

## 📱 Screenshots

<details>
<summary>View Screenshots</summary>

### Light Mode
![Light Mode](./public/images/screenshot-light.png)

### Dark Mode
![Dark Mode](./public/images/screenshot-dark.png)

### Mobile View
![Mobile](./public/images/screenshot-mobile.png)

</details>

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images
- [Google Fonts](https://fonts.google.com/) for typography

---

<p align="center">
  Made with ❤️ for modern healthcare
</p>

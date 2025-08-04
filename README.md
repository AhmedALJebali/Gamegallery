# GameGallery

A modern, responsive web application built with Next.js, Tailwind CSS, and TypeScript. GameGallery showcases trending games, team members, testimonials, news articles, and more.

## Features

- Dynamic routing with file-based structure
- Responsive layout using Tailwind CSS
- Dark mode support
- Modular and reusable components
- Semantic HTML structure
- SEO-friendly metadata
- Game showcase with statistics and testimonials

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
- Swiper.js (for sliders)

## Folder Structure

```
app
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── about
│   ├── page.tsx
│   └── _components
│       ├── About.tsx
│       ├── aboutHero.tsx
│       ├── teamCard.tsx
│       ├── teamSection.tsx
│       ├── testimonialCard.tsx
│       └── testimonialsSection.tsx
├── components
│   ├── cards
│   │   ├── serviceCard.tsx
│   │   └── trendingCard.tsx
│   ├── layout
│   │   └── navBar.tsx
│   ├── sections
│   │   ├── footer.tsx
│   │   ├── gameOfTheWeek.tsx
│   │   ├── heroSection.tsx
│   │   ├── projects.tsx
│   │   ├── services.tsx
│   │   ├── subscribeSection.tsx
│   │   └── trending.tsx
│   └── ui
│       ├── breadCrump.tsx
│       └── darkModeToggle.tsx
├── contact
│   ├── page.tsx
│   └── _components
│       ├── contactForm.tsx
│       └── mapEmbed.tsx
├── news
│   ├── page.tsx
│   └── _components
│       ├── detailedPost.tsx
│       ├── newsHero.tsx
│       └── postCard.tsx
└── portfolio
    ├── page.tsx
    └── _components
        ├── gameCard.tsx
        ├── gameSection.tsx
        ├── statsSection.tsx
        └── testimonialsSection.tsx

```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gamegallery.git
   cd gamegallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Customization

- Update theme colors in `globals.css` or Tailwind config
- Add new sections under `app/components/sections`
- Manage routing via the `app/` folder using Next.js App Router

## License

This project is open-source and available under the [MIT License](LICENSE).
# MCM Fumigaciones

MCM Fumigaciones is a modern, responsive website for a professional pest control service company operating in Escobar and surrounding areas in Buenos Aires, Argentina. The site showcases comprehensive fumigation and pest control services for residential, commercial, and industrial clients.

## ✨ Features

- **Service Showcase**: Display of pest control services with detailed descriptions
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Client Testimonials**: Display of satisfied customer reviews and ratings
- **FAQ Section**: Common questions about pest control services answered
- **Contact Integration**: Direct messaging and WhatsApp integration for inquiries
- **Business Hours**: Dynamic hour bar showing current service availability
- **SEO Optimized**: Built with Next.js metadata and structured data for search engines

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- pnpm (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/martinstanicio/mcm-fumigaciones
   cd mcm-fumigaciones
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables** (optional for development)

   ```bash
   cp .env.example .env.local
   ```

   No need to set [VERCEL_PROJECT_PRODUCTION_URL](https://vercel.com/docs/environment-variables/system-environment-variables#VERCEL_PROJECT_PRODUCTION_URL) if deploying to Vercel.

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit components.

### Building for Production

```bash
pnpm build
pnpm start
```

### Code Quality

Lint and format code with ESLint and Prettier:

```bash
pnpm lint
pnpm format
```

## 📁 Project Structure

```text
./
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── globals.css        # Global styles and shadcn/ui theming
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Main page component
│   │   └── ...                # Other Next.js files (icons)
│   ├── assets/                # Static assets like images
│   │   └── ....
│   ├── components/            # Reusable React components
│   │   ├── ui/                # shadcn/ui components
│   │   │   └── ....
│   │   └── ...
│   ├── content/               # Static content and data files
│   │   ├── metadata.ts        # SEO metadata
│   │   ├── navigation.ts      # Navigation links used in the header
│   │   └── ...
│   └── lib/                   # Utility functions and helpers
│       └── ...
├── .env.example               # Example environment variables file
├── .env.local                 # Local environment variables (not committed)
├── .prettierrc.json           # Prettier configuration
├── README.md                  # Project documentation
├── components.json            # shadcn/ui component configuration
├── eslint.config.mjs          # ESLint configuration
├── package.json               # Project dependencies and scripts
└── ...
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with SSR and static generation
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Accessible React components built with Tailwind
- **Icons**: [Tabler Icons](https://tabler.io/icons) - React icon library
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) - Website traffic insights
- **Code Quality**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Formatting and linting
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast and efficient dependency management

## 📝 Content Management

Service and content information is centralized in `src/content/` files for easy updates:

- **Services**: Add or modify pest control services in `services.ts`
- **FAQs**: Update common questions in `faqs.ts`
- **Contact Info**: Edit contact information in `contact-info.ts`
- **Hours**: Modify business hours in `schedule.ts`
- **SEO**: Update metadata like title and keywords in `metadata.ts`

## 🌐 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/):

```bash
vercel deploy
```

Alternatively, build and deploy to any Node.js hosting:

```bash
pnpm build
pnpm start
```

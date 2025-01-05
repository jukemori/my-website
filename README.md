# My Website

URL: https://www.jun-ukemori.com/

Next.js website built with MDX support, Tailwind CSS, and theme switching capabilities.

## Tech Stack

- [Next.js 15](https://nextjs.org)
- [MDX](https://mdxjs.com/) for content management
- [Tailwind CSS](https://tailwindcss.com/) with Typography plugin
- [shadcn/ui](https://ui.shadcn.com/) for loading skeletons and dark/light mode
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight) for syntax highlighting
- TypeScript support

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` - Next.js app router pages and components
- `components/` - Reusable UI components
- `styles/` - Global styles and Tailwind configuration
- `content/` - MDX files and json files for web contents.

## Features

- ⚡️ Next.js 15 with Turbopack for fast builds
- 📝 MDX support for blog contents
- 🎨 Tailwind CSS with Typography plugin
- 🌓 Dark/light mode support
- 🎯 shadcn/ui components with skeleton loading states
- 🎯 ESLint and Prettier configuration
- 💎 TypeScript for type safety

## Development

```bash
# Lint the codebase
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

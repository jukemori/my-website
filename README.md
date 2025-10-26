# My Website

URL: https://www.jun-ukemori.com/

Next.js website built with MDX support, Tailwind CSS, and theme switching capabilities.

## Tech Stack

- [Next.js 16](https://nextjs.org) with React Compiler
- [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- [MDX](https://mdxjs.com/) for content management
- [Tailwind CSS](https://tailwindcss.com/) with Typography plugin
- [shadcn/ui](https://ui.shadcn.com/) for loading skeletons and dark/light mode
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight) for syntax highlighting
- TypeScript support

## Getting Started

First, make sure you have [pnpm](https://pnpm.io) installed:

```bash
npm install -g pnpm
```

Then, install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` - Next.js app router pages and components
- `components/` - Reusable UI components
- `content/` - MDX files and json files for web contents.
- `lib/` - Utility functions
- `public/` - Static assets

## Features

- ⚡️ Next.js 16 with Turbopack for fast builds
- 🔥 React Compiler for automatic memoization and optimization
- 📦 pnpm for efficient package management
- 📝 MDX support for blog contents
- 🎨 Tailwind CSS with Typography plugin
- 🌓 Dark/light mode support
- 🎯 shadcn/ui components with skeleton loading states
- 🎯 ESLint and Prettier configuration
- 💎 TypeScript for type safety

## Development

```bash
# Lint the codebase
pnpm lint

# Format code with Prettier
pnpm format

# Build for production
pnpm build

# Start production server
pnpm start

# Add a new package
pnpm add <package-name>

# Remove a package
pnpm remove <package-name>
```

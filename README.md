# My Website

URL: https://www.jun-ukemori.com/

Next.js website built with MDX support, Tailwind CSS, and theme switching capabilities.

## Tech Stack

- [Next.js 16](https://nextjs.org)
- [Bun](https://bun.sh) - Fast JavaScript runtime and package manager
- [MDX](https://mdxjs.com/) for content management
- [Tailwind CSS](https://tailwindcss.com/) with Typography plugin
- [shadcn/ui](https://ui.shadcn.com/) for loading skeletons and dark/light mode
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight) for syntax highlighting
- TypeScript support

## Getting Started

First, make sure you have [Bun](https://bun.sh) installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then, install the dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
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
- 🚀 Bun for blazing fast package management and runtime
- 📝 MDX support for blog contents
- 🎨 Tailwind CSS with Typography plugin
- 🌓 Dark/light mode support
- 🎯 shadcn/ui components with skeleton loading states
- 🎯 ESLint and Prettier configuration
- 💎 TypeScript for type safety

## Development

```bash
# Lint the codebase
bun lint

# Build for production
bun build

# Start production server
bun start

# Add a new package
bun add <package-name>

# Remove a package
bun remove <package-name>
```

# Turborepo NextUI Tailwind CSS Starter

A custom starter project using Turborepo, designed to integrate NextUI and Tailwind CSS.

## Quick Start

```sh
git clone https://github.com/ivanmeda993/nextui-tailwind-turborepo-starter.git
pnpm install
pnpm run dev
```


## Project Structure


This Turborepo includes the following applications and packages:


### Apps and Packages


- `web`: Next.js application styled with [Tailwind CSS](https://tailwindcss.com/) and [NextUI](https://nextui.org/)
- `ui`: shared React component library, using [Tailwind CSS](https://tailwindcss.com/) and [NextUI](https://nextui.org/)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Key Features

- **Turborepo**: A monorepo setup using [Turborepo](https://turbo.fish/).
- **NextUI**: A React component library for Next.js applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A statically typed superset of JavaScript.


### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ]
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:
- [NextUI](https://nextui.org/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

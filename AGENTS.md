# Agent Notes

## Project Summary

This is a small Next.js learning/demo project using the App Router. It demonstrates basic pages, route groups, nested layouts, dynamic routes, catch-all routes, and route-specific `not-found` handling.

The app currently has minimal UI, a Tailwind-styled global header navigation, and no API routes, database, authentication logic, or external service integration.

## Stack

- Next.js `15.5.20`
- React `19.1.0`
- TypeScript with `strict` mode enabled
- ESLint `9` with `next/core-web-vitals` and `next/typescript`
- Tailwind CSS `4` via `@tailwindcss/postcss`

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
npm run start
```

Notes:

- `dev` and `build` use Turbopack.
- The local dev server defaults to `http://localhost:3000`.

## Structure

```text
src/app/
  layout.tsx                     Root layout with root footer and metadata
  globals.css                    Tailwind CSS entrypoint
  page.tsx                       Home page
  not-found.tsx                  Global 404 page
  _components/
    main-nav.tsx                 Client component for header navigation
  about/
    layout.tsx                   Nested about layout with extra footer
    page.tsx                     About page
  blog/
    page.tsx                     Blog index
    first/page.tsx               Example nested blog route
  products/
    page.tsx                     Product list
    [productId]/
      page.tsx                   Dynamic product route
      not-found.tsx              Product-specific 404 client component
  docs/
    [...slug]/page.tsx           Catch-all route example
  (auth)/
    login/page.tsx               Login route, URL is /login
    register/page.tsx            Register route, URL is /register
    forgot-password/page.tsx     Forgot password route, URL is /forgot-password
  profile/page.tsx               Profile page
  _lib/private.tsx               Private folder example; not routable
```

## Routing Notes

- This project uses the Next.js App Router under `src/app`.
- `(auth)` is a route group, so it does not appear in URLs.
- `_lib` is a private folder and is not routable.
- Dynamic route files like `src/app/products/[productId]/page.tsx` should be quoted in zsh commands because square brackets are treated as glob syntax.
- `src/app/docs/[...slug]/page.tsx` receives a catch-all `slug` array.
- `src/app/products/[productId]/page.tsx` calls `notFound()` when `parseInt(productId) > 1000`.
- `src/app/products/[productId]/not-found.tsx` is a client component because it uses `usePathname()`.

## Current Implementation Details

- Components are simple server components by default unless marked with `"use client"`.
- Route params are typed as `Promise<...>` and awaited in async page components, matching the current Next.js App Router style used here.
- Metadata exists in both the root layout and the about layout.
- `src/app/layout.tsx` imports `src/app/globals.css` and renders `MainNav` before the page content.
- Header navigation is implemented with Tailwind utility classes in `src/app/_components/main-nav.tsx`.
- Active navigation state uses `usePathname()` in a client component and exact `pathname === href` matching.
- Header navigation intentionally includes only top-level public static routes: `/`, `/about`, `/blog`, `/products`, and `/profile`.
- The README is still the default create-next-app README and does not describe the custom routes.

## Known Rough Edges

- Product links in `src/app/products/page.tsx` currently use relative hrefs:

```tsx
<Link href={"home"}>Home</Link>
<Link href={`products/${link}`}>Product {link}</Link>
```

These may resolve differently than intended from `/products`. Prefer absolute paths such as `/` and `/products/${link}` when updating navigation.

- There are no tests configured.
- The app is intentionally sparse; avoid adding heavy abstractions unless the requested change needs them.

## Change Guidelines

- Keep changes scoped and idiomatic for App Router.
- Prefer server components unless browser APIs, React state/effects, or Next client hooks are required.
- Add `"use client"` only at the component boundary that actually needs it.
- Use Tailwind CSS utility classes for styling. Avoid adding CSS modules unless there is a clear reason.
- Use the existing `@/*` TypeScript path alias for imports from `src` when helpful.
- When making any project change, update `AGENTS.md` as needed so these notes stay accurate.
- Run `npm run lint` after code changes. Run `npm run build` when touching routing, layouts, metadata, or dynamic params.

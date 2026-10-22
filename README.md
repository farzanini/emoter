# Emoter

Emoter is a small social app for sharing emoji-only posts and browsing them in a feed.

## Features

- Signed-in users can publish posts containing emoji, with a per-user rate limit.
- Browse recent posts and view posts by author on profile pages.
- Open individual post pages and see relative posting times.
- Load user and post data through type-safe tRPC procedures.

## Tech stack

- Next.js 13, React 18, and TypeScript
- Clerk authentication
- tRPC, TanStack Query, and Zod
- Prisma with MySQL
- Tailwind CSS
- Upstash Redis for rate limiting
- Day.js for relative timestamps

## Getting started

Requirements: Node.js/npm, a MySQL database, Clerk credentials, and Upstash Redis credentials. Configure the environment required by the integrations before starting the app; `DATABASE_URL` is validated in `src/env.mjs`.

```sh
npm install
npm run dev
```

The development server is started by Next.js. Available project scripts include `npm run build`, `npm run start`, `npm run lint`, and `npm run typecheck`.

## Project structure

```text
src/
  components/       Shared page and post components
  pages/            Feed, profile, post, and API routes
  server/api/       tRPC routers and request setup
  styles/           Global styles
prisma/             Prisma schema
public/             Static assets
```

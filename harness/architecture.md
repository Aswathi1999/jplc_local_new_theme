# Architecture — JPLC

> **Project:** JPLC — Bean Brew Parent Brand Website
> **Last Updated:** 2026-05-18
> **Maintained By:** [Tech Lead]

---

## 1. System Overview

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              JPLC Monorepo (Turborepo)                       │
│                                                                              │
│  ┌──────────────────────────┐   REST/JSON   ┌──────────────────────────────┐ │
│  │   Next.js App (apps/web) │◄─────────────►│  NestJS API (apps/api)       │ │
│  │                          │               │                              │ │
│  │  • App Router (RSC)      │               │  • Modules / Controllers     │ │
│  │  • Server Components     │               │  • Services / Repositories   │ │
│  │  • Client Components     │               │  • Guards / Interceptors     │ │
│  │  • Tailwind CSS          │               │  • TypeORM (SQL)             │ │
│  └──────────────────────────┘               └──────────────┬───────────────┘ │
│                                                            │                 │
│                                             ┌──────────────┼─────────────┐   │
│                                             │              │             │   │
│                                             ▼              ▼             ▼   │
│                                       ┌──────────┐  ┌──────────┐  ┌───────┐ │
│                                       │PostgreSQL│  │  Redis   │  │ Bull  │ │
│                                       │  (SQL)   │  │ (Cache)  │  │(Jobs) │ │
│                                       └──────────┘  └──────────┘  └───────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Monorepo Structure (Turborepo)

```
jplc/                              # Root — pnpm workspace + turbo.json
├── apps/
│   ├── web/                       # Next.js 14 (App Router)
│   │   ├── app/                   # Route segments (RSC by default)
│   │   │   ├── (home)/
│   │   │   ├── menu/
│   │   │   ├── store-locator/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── layout.tsx
│   │   ├── components/            # App-level client components
│   │   ├── lib/                   # Fetch helpers, metadata utils
│   │   ├── public/
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   └── api/                       # NestJS 10
│       ├── src/
│       │   ├── modules/
│       │   │   ├── auth/          # JWT auth — register, login, refresh, logout
│       │   │   ├── users/         # User profile read (no order mgmt)
│       │   │   ├── products/      # Product catalogue (static)
│       │   │   ├── stores/        # Store locator + Maps
│       │   │   ├── contact/       # Enquiry form handler
│       │   │   └── health/        # Health-check endpoint
│       │   ├── shared/
│       │   │   ├── guards/
│       │   │   ├── interceptors/  # Audit, logging
│       │   │   ├── filters/       # Global exception filter
│       │   │   └── types/
│       │   ├── database/
│       │   │   └── migrations/    # TypeORM migrations
│       │   └── app.module.ts
│       ├── nest-cli.json
│       └── package.json
│
├── packages/
│   ├── ui/                        # Shared React component library
│   │   ├── src/
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── types/                     # Shared TypeScript interfaces/DTOs
│   │   ├── src/
│   │   │   ├── product.ts
│   │   │   ├── store.ts
│   │   │   ├── user.ts
│   │   │   ├── auth.ts
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── config/                    # Shared configs
│   │   ├── eslint/
│   │   ├── tsconfig/
│   │   │   ├── base.json
│   │   │   ├── nextjs.json
│   │   │   └── nestjs.json
│   │   └── package.json
│   │
│   └── utils/                     # Shared pure utility functions
│       ├── src/
│       │   ├── formatters.ts
│       │   └── validators.ts
│       └── package.json
│
├── turbo.json                     # Pipeline: build → test → lint
├── pnpm-workspace.yaml
└── package.json                   # Root dev deps (turbo, husky, lint-staged)
```

---

## 3. Frontend Architecture (apps/web — Next.js 14)

### Routing (App Router)

| Route | Type | Description |
|---|---|---|
| `/` | Server Component | Home page — hero, products preview, CTA |
| `/menu` | Server Component | Full product catalogue |
| `/menu/[category]` | Server Component | Category filtered view |
| `/store-locator` | Client Component | Google Maps + geolocation |
| `/about` | Server Component | Heritage & brand story |
| `/contact` | Client Component | Enquiry form (React Hook Form) |
| `/login` | Client Component | Sign-in form (JWT, persisted in httpOnly cookie) |
| `/register` | Client Component | Sign-up form |

### Data Fetching Strategy

- **Server Components** — fetch product and store data at build/request time via internal API
- **Client Components** — only for interactive sections: store map, contact form, language switcher, app redirection
- **Next.js Image** — all product and banner images optimised via `next/image`
- **next-intl** — for multi-language support (language switcher requirement)

### Component Layers

```
apps/web/
├── app/                 # Route segments — Server Components (data fetching)
├── components/          # Client components specific to web app
│   ├── layout/          # Header, Footer, Nav
│   ├── home/            # Hero, FeaturedProducts, AppBanner, etc.
│   ├── menu/            # ProductCard, CategoryFilter
│   ├── store-locator/   # MapView, StoreCard
│   ├── auth/            # LoginForm, RegisterForm, AuthGuard HOC
│   └── shared/          # ClientOnly wrappers, LanguageSwitcher
└── lib/
    ├── api.ts           # Typed fetch wrappers for apps/api
    └── metadata.ts      # generateMetadata helpers per route
```

---

## 4. Backend Architecture (apps/api — NestJS 10)

### Module Structure

```
src/modules/
├── auth/
│   ├── auth.controller.ts         # POST /auth/register, /auth/login, /auth/refresh, /auth/logout
│   ├── auth.service.ts            # bcrypt compare, JWT sign, refresh token rotation
│   ├── strategies/
│   │   ├── jwt.strategy.ts        # Passport JWT strategy (reads httpOnly cookie)
│   │   └── local.strategy.ts      # Passport local strategy (email + password)
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── dto/
│   │   ├── register.dto.ts
│   │   └── login.dto.ts
│   └── auth.module.ts
│
├── users/
│   ├── users.controller.ts        # GET /users/me (profile read — no order mgmt)
│   ├── users.service.ts
│   ├── entities/user.entity.ts
│   └── users.module.ts
│
├── products/
│   ├── products.controller.ts     # GET /products, GET /products/:category
│   ├── products.service.ts        # Returns static catalogue (Redis cached)
│   └── products.module.ts
│
├── stores/
│   ├── stores.controller.ts       # GET /stores, GET /stores/nearby
│   ├── stores.service.ts          # Dummy store data + Google Maps proxy
│   └── stores.module.ts
│
├── contact/
│   ├── contact.controller.ts      # POST /contact/enquiry
│   ├── contact.service.ts         # Saves enquiry to DB + email notification
│   ├── dto/create-enquiry.dto.ts
│   └── contact.module.ts
│
└── health/
    └── health.controller.ts       # GET /health — liveness probe
```

### Request Lifecycle

```
Request → GlobalExceptionFilter → JwtAuthGuard (protected routes only)
        → Controller → Service → Repository (TypeORM) / Redis
        → LoggingInterceptor → Response
```

### Auth Flow

```
POST /auth/register  →  hash password (bcrypt, cost 12)  →  insert user  →  issue access + refresh tokens
POST /auth/login     →  verify password  →  issue access token (15m) + refresh token (7d, httpOnly cookie)
POST /auth/refresh   →  validate refresh token in Redis  →  rotate refresh token  →  new access token
POST /auth/logout    →  delete refresh token from Redis  →  clear cookie
GET  /users/me       →  JwtAuthGuard  →  return user profile (no password_hash)
```

---

## 5. Database (PostgreSQL + TypeORM)

> Product catalogue is **static** — seeded via migration, not admin-managed in v1.
> Redis caches all GET responses (products, stores) with a 24h TTL.

### Core Tables

```sql
-- Registered website users (sign-in/sign-up — no order management)
users (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           VARCHAR(100) NOT NULL,
  email          VARCHAR(255) NOT NULL UNIQUE,
  password_hash  VARCHAR(255) NOT NULL,
  is_active      BOOLEAN DEFAULT TRUE,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
)

-- Refresh token store (rotated on every use; backed by Redis for fast lookup)
refresh_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  VARCHAR(255) NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
)

-- Enquiry form submissions
enquiries (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         VARCHAR(100) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  phone        VARCHAR(20),
  type         VARCHAR(50),           -- 'customer' | 'partnership'
  message      TEXT NOT NULL,
  created_at   TIMESTAMPTZ DEFAULT NOW()
)

-- Store locations (dummy data seeded)
stores (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         VARCHAR(200) NOT NULL,
  address      TEXT NOT NULL,
  phone        VARCHAR(20),
  lat          DECIMAL(10, 8),
  lng          DECIMAL(11, 8),
  opening_hours JSONB,
  is_active    BOOLEAN DEFAULT TRUE
)

-- Product catalogue (seeded, read-only via API)
products (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         VARCHAR(200) NOT NULL,
  description  TEXT,
  category     VARCHAR(100) NOT NULL,
  image_url    TEXT,
  is_available BOOLEAN DEFAULT TRUE
)
```

### Migration Rules

- All schema changes via TypeORM migrations in `apps/api/src/database/migrations/`
- `synchronize: false` always — never `synchronize: true`
- Seed data for products and stores via a dedicated seed migration

---

## 6. Caching Strategy (Redis)

| Cache Key | TTL | Content |
|---|---|---|
| `products:all` | 24h | Full product catalogue JSON |
| `products:category:{slug}` | 24h | Products per category |
| `stores:all` | 6h | All store records |
| `stores:nearby:{lat}:{lng}` | 1h | Geolocation-filtered stores |
| `auth:refresh:{token_hash}` | 7d | User ID string — fast refresh token validation |
| `auth:blacklist:{jti}` | 15m | Tombstone for revoked access tokens |

- Cache invalidated manually via admin trigger (v1 — no automated invalidation)
- Redis via `@nestjs/cache-manager` with `cache-manager-redis-yet` adapter

---

## 7. Turborepo Pipeline

```json
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "test": {
      "dependsOn": ["build"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

### Run Commands (from root)

```bash
pnpm dev               # Start all apps in parallel
pnpm build             # Build all apps (respects dependency order)
pnpm lint              # Lint all packages
pnpm type-check        # TypeScript check across monorepo
pnpm --filter web dev  # Start only Next.js
pnpm --filter api dev  # Start only NestJS
```

---

## 8. Key Design Decisions

1. **Next.js App Router** — Server Components fetch product/store data at request time; no client-side data fetching overhead for static content
2. **Shared `packages/types`** — Single source of truth for `Product`, `Store`, `Enquiry` interfaces used by both `apps/web` and `apps/api`
3. **Redis for catalogue cache** — Product list never changes in v1; caching avoids repeated DB reads on every page load
4. **Static product catalogue** — All products seeded via migration; client will provide final product details later
5. **Basic JWT auth (sign-in/sign-up only)** — Passport JWT with httpOnly cookie; access token 15 min, refresh token 7 days with rotation. No order history, no account management — those are v2 scope per PRD.
6. **Google Maps client-side only** — Store locator map renders in a Client Component to access browser geolocation API

---

## 9. Critical Rules for Claude Code

1. **Monorepo imports** — use workspace package names (`@jplc/types`, `@jplc/ui`) not relative cross-app paths
2. **No `any`** — use `unknown` with type guards; strict mode in all `tsconfig.json`
3. **Server vs Client Components** — default to Server Component; add `"use client"` only when browser APIs or interactivity is needed
4. **No `synchronize: true`** — all DB changes through TypeORM migrations
5. **Redis lock before any write** — acquire lock in service layer before DB mutations
6. **No e-commerce code** — no cart, checkout, payment, or order management modules
7. **pnpm only** — never npm or yarn inside this monorepo

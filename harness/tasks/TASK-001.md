# TASK-001: Project Setup and Initial Configuration

## Meta
| Field | Value |
|-------|-------|
| **Assignee** | Aswathi k |
| **Status** | ✅ Done |
| **Priority** | P0 |
| **Sprint** | Sprint 1 |
| **Story Points** | 5 |
| **PRD Reference** | harness/prd.md |
| **Architecture Ref** | harness/architecture.md |
| **Start Date** | — |
| **Due Date** | — |
| **Created** | 2026-05-18 |
| **Completed** | 2026-05-18 |

---

## Description
Bootstrap the JPLC monorepo from scratch using Turborepo. This task covers scaffolding all workspaces (`apps/web`, `apps/api`, `packages/*`), wiring shared tooling (TypeScript, ESLint, Prettier, Husky), and bringing up infrastructure (PostgreSQL + Redis via Docker Compose). By the end of this task the repo should build, lint, and type-check cleanly with both apps running locally.

---

## Sub Tasks
- [ ] No sub tasks defined

---

## Acceptance Criteria
- [ ] Turborepo monorepo initialised with `pnpm` workspaces
- [ ] `apps/web` — Next.js 14 App Router project created with TypeScript and Tailwind CSS
- [ ] `apps/api` — NestJS 10 project created with TypeScript strict mode
- [ ] `packages/ui` — shared component library scaffold (empty, exports one placeholder component)
- [ ] `packages/types` — shared TypeScript types scaffold (`user.ts`, `auth.ts`, `product.ts`, `store.ts`)
- [ ] `packages/config` — shared ESLint and Tailwind config packages
- [ ] `packages/utils` — shared utility helpers scaffold
- [ ] Root `turbo.json` configured with `build`, `dev`, `lint`, `test`, `type-check` pipeline tasks
- [ ] Root `pnpm-workspace.yaml` listing all workspace packages
- [ ] `docker-compose.yml` at repo root — PostgreSQL 16 and Redis 7 services with named volumes
- [ ] `.env.example` created at repo root with all required variable names (no secrets)
- [ ] TypeORM migration runner configured in `apps/api`; initial empty migration created
- [ ] ESLint + Prettier configured via `packages/config`; enforced by Husky pre-commit hook with lint-staged
- [ ] Conventional Commits enforced via `commitlint` + Husky `commit-msg` hook
- [ ] `pnpm dev` starts both `apps/web` (port 3000) and `apps/api` (port 4000) concurrently
- [ ] `pnpm build` succeeds across all workspaces
- [ ] `pnpm lint` and `pnpm type-check` pass with zero errors

---

## Technical Notes
- **Approach:** Use `npx create-turbo@latest` as a starting point, then replace the default apps with Next.js and NestJS scaffolds
- **Package manager:** `pnpm` only — do not use `npm` or `yarn` at any point
- **Node version:** 20 LTS — add `.nvmrc` at repo root set to `20`
- **Next.js:** Use App Router (`app/` directory). Do not use Pages Router
- **NestJS:** Enable strict TypeScript. Do not enable `synchronize: true` in TypeORM config
- **Tailwind:** Configure `packages/config/tailwind` as the shared preset; `apps/web` extends it
- **Ports:** `apps/web` → 3000, `apps/api` → 4000, PostgreSQL → 5432, Redis → 6379
- **Gotchas:** Turborepo `dev` task must set `persistent: true` for both app dev servers so they are not cached

---

## Files to Create/Modify
```
CREATE:
- turbo.json
- pnpm-workspace.yaml
- package.json (root)
- .nvmrc
- .gitignore
- .env.example
- docker-compose.yml
- apps/web/               (Next.js 14 scaffold)
- apps/api/               (NestJS 10 scaffold)
- packages/ui/
- packages/types/
- packages/config/
- packages/utils/
- .husky/pre-commit
- .husky/commit-msg
- commitlint.config.js
```

---

## API Endpoints
N/A — this task has no API endpoints

---

## UI Screens
- **Design:** —
- **Route:** —
- **Components:** Placeholder only (`packages/ui` export)
- **Responsive:** —

---

## Related Test Cases
- Test Case File: —
- Related IDs: —

## Dependencies
- **Blocked by:** None
- **Blocks:** All other tasks

---

## Claude Code Context
```
Provide Claude Code with these files:
1. harness/CLAUDE.md          (rules and standards)
2. harness/tasks/TASK-001.md  (this file)
3. harness/architecture.md    (monorepo structure and tech stack)
4. harness/prd.md             (project requirements for context)
```

---

## Progress Log
| Date | Update |
|------|--------|
| 2026-05-18 | Monorepo scaffolded and committed — all acceptance criteria met. |

---

## Time Log
| Date | Hours | Note |
|------|-------|------|
| — | — | No time logged |

---

## Review Notes
- **Reviewer:** —
- **Review Date:** —
- **Feedback:** —

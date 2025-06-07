# Agent Instructions for Personal Dev (Next.js 15 + TypeScript)

## Commands
- **Dev**: `bun run dev` (uses Turbopack)
- **Build**: `bun run build`
- **Lint**: `bun run lint`
- **Type check**: `bunx tsc --noEmit`

## Code Style
- **Imports**: External packages first, then relative imports. Use `import type` for types
- **Components**: PascalCase, server components by default, add `'use client'` only when needed
- **Functions**: camelCase, async for data fetching
- **Files**: kebab-case for routes/directories, camelCase for utilities
- **Props**: Destructure with TypeScript inline types `{ children }: { children: React.ReactNode }`
- **Classes**: Use `cn()` utility from `lib/utils.ts` for Tailwind class merging
- **Font**: JetBrains Mono is the project font

## Framework
- Next.js 15 App Router with TypeScript strict mode
- Tailwind CSS for styling with custom terminal theme
- Server components for data fetching, minimal client components
- Markdown content with gray-matter and react-markdown

## Error Handling
- Rely on Next.js built-in error boundaries
- Use early returns for loading/null states
- Minimal explicit try/catch, prefer framework patterns

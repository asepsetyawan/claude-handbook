# Mastering Claude

> My personal learning path and handbook for getting genuinely good at using **Claude** (by Anthropic) for real, everyday work.

This is a documentation-style site where I collect, structure, and summarize everything I learn about working with Claude, from picking the right model to writing better prompts, coworking on long-running tasks, and building repeatable workflows. It started as scattered notes and grew into a handbook I can revisit, extend, and share.

Built with [VitePress](https://vitepress.dev).

## Why this exists

Most people use Claude as a glorified search box and get mediocre results. The goal of this handbook is the opposite: to go from *"I tried it once"* to **"Claude saves me hours every week."**

It's written for professionals who want AI to make their day-to-day work measurably better, whether they write, analyze, plan, build, support customers, or manage teams. No deep technical background required.

## What's inside

The content is organized as a progressive path, but each section also works standalone:

- **Getting Started** — what Claude is, where to use it, your first productive conversation, and how plans/limits work.
- **Models** — the Claude model family (Haiku, Sonnet, Opus, Fable), choosing the right one, and how "thinking" and effort affect results.
- **Prompting** — the highest-leverage skill: fundamentals, the anatomy of a great prompt, core techniques, iterating, common pitfalls, and reusable templates.
- **Coworking** — going beyond chat with Projects, Artifacts, files & long context, and memory.
- **Workflows** — practical playbooks for writing, documents, data, research, meetings, and turning one-off prompts into repeatable systems.
- **Skills** — what Agent Skills are, using built-in ones, and creating your own.
- **Integrations** — connecting Claude to real tools via MCP, Claude Code, and agents.
- **Best Practices** — effective habits, privacy & data, and understanding limitations and trust.

## Tech stack

- [VitePress](https://vitepress.dev) for the static documentation site
- Markdown content with a custom, Claude-inspired theme
- Built-in local search and auto-generated sidebar navigation

## Local development

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# build a static site into docs/.vitepress/dist
npm run build

# preview the production build locally
npm run preview
```

## Structure

```
docs/
├─ index.md                 # Home page
├─ introduction/            # How to use this handbook
├─ getting-started/         # Meet Claude, interfaces, first conversation, plans
├─ models/                  # Model family, choosing a model, thinking & effort
├─ prompting/               # Fundamentals, techniques, templates
├─ coworking/               # Projects, Artifacts, Files, Memory
├─ workflows/               # Practical work playbooks
├─ skills/                  # Agent Skills
├─ integrations/            # MCP, Claude Code, agents
├─ best-practices/          # Habits, privacy, limitations
└─ .vitepress/              # Site configuration & custom theme
```

## Deploy

The build output in `docs/.vitepress/dist` is a static site that can be hosted on
Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Notes & disclaimer

- This is a **personal learning project** and is **not affiliated with Anthropic**.
- Content is educational and based on publicly available information about Claude as of **mid-2026**. AI tools change fast, so always check the [official Claude documentation](https://docs.claude.com) for the latest details.

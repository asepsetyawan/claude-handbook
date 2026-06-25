# Mastering Claude

A practical, documentation-style handbook for learning to use **Claude** (by Anthropic) to support real work, covering models, prompting, coworking, workflows, skills, and integrations.

Built with [VitePress](https://vitepress.dev).

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
├─ getting-started/         # Meet Claude, first conversation, plans
├─ models/                  # Model family, choosing a model, thinking
├─ prompting/               # Prompting fundamentals & techniques
├─ coworking/               # Projects, Artifacts, Files, Memory, Cowork
├─ workflows/               # Practical work playbooks
├─ skills/                  # Agent Skills
├─ integrations/            # MCP, connectors, agents
├─ best-practices/          # Habits, privacy, limitations
└─ .vitepress/config.mts    # Site configuration
```

## Deploy

The build output in `docs/.vitepress/dist` is a static site that can be hosted on
Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

> Content is educational and based on publicly available information about Claude as of mid-2026.
> Always check the [official Claude documentation](https://docs.claude.com) for the latest details.

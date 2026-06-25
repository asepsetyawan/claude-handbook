# What are Agent Skills

**Agent Skills** are a way to package expertise, including instructions, scripts, and reference material, turning them into a folder that Claude can discover and use automatically when it's relevant. They turn a capable generalist into a knowledgeable specialist that follows *your* procedures.

## The core idea

> A Skill is a folder with a `SKILL.md` file (plus optional scripts and resources) that teaches Claude how to do a specific kind of task the way you want it done.

Think of it like an **onboarding guide for a new team member**: the steps, the standards, the templates, the do's and don'ts, written once, applied every time.

## Why Skills beat re-prompting

| Without Skills | With Skills |
| --- | --- |
| Re-explain the procedure each time | Claude already knows it |
| Inconsistent results across chats/people | Consistent, repeatable output |
| Knowledge lives in one person's head | Knowledge is packaged and shareable |

## How Claude uses them (progressive disclosure)

Skills are efficient by design:

1. Claude first sees only a Skill's **name and description** (lightweight metadata).
2. If a task looks relevant, it reads the full **`SKILL.md`**.
3. Only if needed does it open **additional bundled files** (references, scripts).

This "progressive disclosure" means you can have many Skills available without bloating Claude's context; it loads detail only when required.

## Where Skills work

Agent Skills are supported across Claude's surfaces, including **claude.ai**, **Claude Code**, the **API**, and the **Agent SDK**, and have been published as an **open standard** for portability across tools. A Skill you write is reusable wherever Skills are supported.

## Two kinds of Skills

- **Built-in / pre-built**: ready-made Skills from Anthropic, e.g. creating PowerPoint, Excel, Word, and PDF files. See [Using built-in skills](/skills/built-in).
- **Custom**: Skills you create to capture your own workflows and standards. See [Creating your own skill](/skills/creating).

## Skills vs. Projects vs. MCP

These complement each other:

- **[Projects](/coworking/projects)** hold context for a *body of work*.
- **Skills** hold *procedural know-how* Claude applies across tasks.
- **[MCP](/integrations/mcp)** connects Claude to *external tools and data*.

A single task might use all three: a Skill defines *how* to produce a report, a Project supplies the *context*, and MCP pulls in the *live data*.

Next: put ready-made Skills to work with [built-in skills](/skills/built-in).

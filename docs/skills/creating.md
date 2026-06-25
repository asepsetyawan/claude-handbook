# Creating your own skill

Custom Skills let you package *your* expertise and procedures so Claude applies them consistently, for you and your team. The format is deliberately simple: **files and folders**.

## Anatomy of a Skill

At minimum, a Skill is a directory with one file:

```text
my-skill/
└─ SKILL.md          # required: instructions + metadata
```

As it grows, you can bundle more:

```text
weekly-report/
├─ SKILL.md          # the core instructions
├─ references/
│  └─ style-guide.md # loaded only when needed
├─ templates/
│  └─ report.md
└─ scripts/
   └─ format.py      # optional helper code
```

Claude reads `SKILL.md` first and pulls in the extra files **only when relevant** (progressive disclosure).

## What goes in `SKILL.md`

A `SKILL.md` starts with metadata (a name and a clear description of *when to use it*), followed by the instructions:

```markdown
---
name: weekly-report
description: Use when the user asks to create the weekly status report.
  Produces our standard format from raw weekly metrics and highlights.
---

# Weekly Report Skill

## When to use
When the user provides weekly numbers/highlights and asks for "the weekly report".

## Steps
1. Summarize the week in 3 bullets (wins, risks, next focus).
2. Build a metrics table: Metric | This week | Last week | Δ.
3. Write a short "Asks" section if blockers are mentioned.

## Style
- Tone: concise, factual, no hype.
- British English. Lead with outcomes, not activity.

## Output
A single document, ready to paste into email.
```

::: tip The description is everything
Claude decides whether to use a Skill mostly from its **description**. Make it specific about *when* the Skill applies, not just what it does.
:::

## How to create and use them

- **In Claude Code:** create the Skill folder in your project; Claude discovers and uses it automatically.
- **In claude.ai:** add custom Skills via Settings → Features (typically as a zip), on plans with code execution.
- **Via the API:** upload through the Skills endpoints and reference the Skill by id.

## Good Skills to build first

Start with your most repetitive, rule-heavy tasks:

- Your **report / summary format**
- Your **brand voice & writing rules**
- A **review checklist** (e.g. "review this contract for these 8 risks")
- A **data-cleaning procedure** you run often

## Principles for great Skills

- **One job per Skill.** Keep each focused.
- **Write for a new hire.** Be explicit; don't assume tribal knowledge.
- **Show examples.** Include a model of "good" output.
- **Iterate.** When Claude gets something wrong, update the Skill rather than re-correcting each time.
- **Version them.** They're just files; track changes like any document.

::: tip The Skill Creator
There's a meta-Skill ("Skill Creator") that helps you scaffold new Skills. Ask Claude to help you turn a recurring task into a Skill, and it can draft the `SKILL.md` for you.
:::

Next: connect Claude to the outside world with [MCP & connectors](/integrations/mcp).

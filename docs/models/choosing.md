# Choosing the right model

A simple decision process beats memorizing specs. Here's how to choose in seconds.

## The 3-question test

1. **Is this hard reasoning or high-stakes?** (complex analysis, important writing, tricky code, big decisions)
   → Use **Opus** (or a Mythos-class model like **Fable** for the very hardest, long-running work).
2. **Is this everyday work of normal difficulty?** (drafting, summarizing, routine analysis, most coding)
   → Use **Sonnet**: the sensible default.
3. **Is this simple, repetitive, or high-volume, and speed matters?** (classification, quick rewrites, bulk processing)
   → Use **Haiku**.

::: tip Default to Sonnet
When unsure, start with **Sonnet**. If the answer feels shallow or it makes reasoning mistakes, **escalate to Opus**. If it's slow and the task is trivial, **drop to Haiku**.
:::

## A quick reference

| Task | Recommended start |
| --- | --- |
| Draft an email or post | Sonnet (Haiku if you're in a hurry) |
| Summarize a long document | Sonnet |
| Analyze a messy dataset & reason about it | Opus |
| Brainstorm dozens of quick ideas | Haiku / Sonnet |
| Write a board-ready strategy memo | Opus |
| Triage/label hundreds of items | Haiku |
| Multi-hour autonomous coding/research agent | Fable (Mythos) or Opus |
| Production code you ship today | Opus |

## Cost vs. quality (for builders)

If you use the [API](/getting-started/interfaces), the trade-off is concrete. Heavier tiers cost more per million tokens. Rough mid-2026 ordering:

```text
Haiku  <  Sonnet  <  Opus  <  Fable (Mythos)
cheap                          premium (~2× Opus)
```

Smart patterns to control cost:

- **Tiered pipelines.** Do bulk work with Haiku/Sonnet, and **escalate only the hard turns** to Opus or Fable.
- **Prompt caching.** Reusing a large fixed context (like a long document or system prompt) can cut input costs dramatically.
- **Right-size output.** Ask for concise answers when you don't need an essay.

## Don't over-optimize

For most individual users on a subscription, the honest advice is: **use Sonnet for everyday work and Opus for the hard stuff.** Switching models is a smaller lever than [writing a better prompt](/prompting/fundamentals): that's where most quality gains actually come from.

Next: how to spend "thinking" wisely with [thinking & effort](/models/thinking).

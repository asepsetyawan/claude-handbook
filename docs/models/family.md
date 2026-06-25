# The Claude model family

Claude isn't one model; it's a **family**, organized into tiers that trade off speed, cost, and raw capability. Picking the right one is a real skill, and it directly affects your results and your usage budget.

## The tiers

Think of the tiers as different "brains" for different jobs:

| Tier | Personality | Use it when… |
| --- | --- | --- |
| **Haiku** | Fast & economical | Speed and volume matter more than depth |
| **Sonnet** | Balanced all-rounder | Everyday work, the sensible default |
| **Opus** | Deep & rigorous | Hard reasoning, important writing, complex analysis |
| **Mythos-class** (e.g. Fable) | Frontier intelligence | The hardest, long-horizon, high-stakes work |

::: tip Mental model
- **Haiku** = a sharp intern who replies instantly.
- **Sonnet** = a capable colleague who handles most things well.
- **Opus** = a senior expert you bring in for the tough stuff.
- **Mythos-class** = the specialist you call for the truly hard problem (at a premium).
:::

## The lineup as of mid-2026

Model names and versions move quickly. As of mid-2026, the notable generally-available models are:

- **Claude Haiku 4.5** (`claude-haiku-4-5`: fastest and most economical, with surprisingly strong reasoning. Great for real-time and high-volume tasks.
- **Claude Sonnet 4.6** (`claude-sonnet-4-6`: the best balance of speed and intelligence for daily coding, analysis, and tool use.
- **Claude Opus 4.8** (`claude-opus-4-8`: frontier-class flagship for complex coding, agents, and knowledge work. The go-to when quality matters.
- **Claude Fable 5** (`claude-fable-5`: a *Mythos-class* model, a tier above Opus, built for the hardest long-horizon agentic work. Most capable, roughly 2× the cost of Opus.

All of these share a very large context window (around **1M tokens**) and support advanced reasoning ("thinking").

::: warning This list will age
New versions ship regularly. Use this page to understand the *tiers* (Haiku/Sonnet/Opus/Mythos), then check the [official model docs](https://docs.claude.com) for the exact current versions.
:::

## How the tiers relate

```text
            capability  ───────────────────────────►
 cost ▲     Haiku  ──►  Sonnet  ──►  Opus  ──►  Mythos (Fable)
 speed ▼    fastest                              slowest / priciest
```

Higher tiers are smarter but slower and more expensive per message. The art is using **the lightest model that reliably does the job**, and escalating only when you hit its limits.

## Why this matters for you

- **Cost & limits:** Heavier models burn your usage budget faster (see [Plans](/getting-started/plans).
- **Latency:** Lighter models feel snappier, better for back-and-forth drafting.
- **Quality ceiling:** For genuinely hard reasoning, a top model can succeed where a lighter one quietly gets it wrong.

Next: a practical guide to [choosing the right model](/models/choosing) for any given task.

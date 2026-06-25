# Prompting fundamentals

If you learn only one thing from this handbook, learn to prompt well. It's the highest-leverage skill, a better prompt beats a bigger model almost every time.

## What a prompt really is

A prompt is **the instructions and context you give Claude**. Claude has no idea what you want until you tell it. The quality of your output is largely a reflection of the quality of your input.

A helpful reframe:

> You're not "asking a question." You're **delegating a task to a smart colleague** who needs a clear brief.

## The five ingredients

Nearly every strong prompt contains some mix of these:

1. **Role**: who Claude should act as. *"You are a meticulous financial analyst."*
2. **Task**: what you want done, specifically. *"Compare these two vendors."*
3. **Context**: the background Claude can't know. *"We're a 12-person startup; budget is tight."*
4. **Format**: the shape of the output. *"Give me a 5-row comparison table."*
5. **Constraints**: the rules and boundaries. *"Under 200 words. No jargon."*

You won't always need all five, but missing the *right* one is usually why an answer disappoints.

## Before / after

**Before** (vague):

```text
Help me with our pricing.
```

**After** (briefed):

```text
You are a SaaS pricing strategist.

Task: Recommend a 3-tier pricing structure for our product.

Context:
- Product: invoicing tool for freelancers
- Competitors charge $9–$29/month
- Our edge: fastest setup, best mobile app
- Goal: maximize sign-ups, upsell later

Format: A table (Tier | Price | Who it's for | Key features),
then 2 sentences explaining the logic.

Constraints: Keep it realistic for the freelance market.
```

The second version will reliably produce something useful. The first is a coin flip.

## The golden rule: be specific

Vagueness is the #1 cause of bad output. Whenever an answer disappoints, ask: *"What did I leave Claude to guess?"*, then put that in the prompt.

| Vague | Specific |
| --- | --- |
| "Make it better." | "Make it more concise and remove passive voice." |
| "Summarize this." | "Summarize in 5 bullets for a busy exec." |
| "Some ideas." | "10 ideas, ranked by ease of implementation." |

## Try it now

::: tip Try it
Take a request you'd normally type in 5 words. Rewrite it using the five ingredients (role, task, context, format, constraints). Run both. Compare.
:::

Next, we break down the [anatomy of a great prompt](/prompting/anatomy) in detail.

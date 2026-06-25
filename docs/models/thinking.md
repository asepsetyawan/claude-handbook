# Thinking & effort

Modern Claude models can **think before they answer**: reasoning step by step internally before producing a response. Understanding this helps you get better answers on hard problems.

## What "thinking" means

When faced with a complex task, Claude can do **extended (or adaptive) thinking**: it works through the problem privately, considers approaches, checks itself, and only then writes the final answer. This dramatically improves accuracy on:

- Multi-step math and logic.
- Complex planning and trade-off analysis.
- Tricky code and debugging.
- Careful reading of long, dense material.

On recent models this is often **adaptive**: Claude decides how much to think based on difficulty, so you don't have to micromanage it.

## When it helps (and when it doesn't)

| Good fit for more thinking | Doesn't need it |
| --- | --- |
| "Find the flaw in this argument." | "Rewrite this sentence." |
| "Plan a migration with dependencies." | "Give me 5 synonyms." |
| "Reconcile these conflicting numbers." | "Format this as a table." |

For simple tasks, heavy thinking just adds latency and cost without improving the result.

## The effort lever (for builders)

On the API, recent Opus and Sonnet models expose an **`effort`** parameter that trades intelligence for latency and cost *within a single model*. Turning effort up can be a better move than switching to a bigger model.

```text
low effort   → faster, cheaper, fine for routine tasks
high effort  → slower, pricier, better on hard reasoning
```

::: tip
Tuning **effort** is often a smarter lever than jumping to a more expensive model. Try high effort on Sonnet before reaching for Opus.
:::

## How to invite better thinking in everyday chat

Even without API parameters, your prompt can encourage deeper reasoning:

```text
Think this through carefully before answering.
First, list the constraints. Then evaluate each option
against them. Only then give your recommendation.
```

Asking Claude to **show its reasoning and consider alternatives** often yields a more reliable answer, especially for decisions and analysis.

::: warning Don't over-prompt simple tasks
For trivial requests, telling Claude to "think step by step" just makes it slower and more verbose. Match the effort to the difficulty.
:::

You now understand the models. The single biggest skill is next: [prompting](/prompting/fundamentals).

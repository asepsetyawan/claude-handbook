# Research & analysis

Claude shines at digesting lots of information and helping you *think*, comparing options, stress-testing ideas, and reaching well-reasoned decisions.

## When to reach for Claude

- Synthesizing multiple documents or sources.
- Comparing options against criteria.
- Pressure-testing a plan or argument.
- Structuring a decision you're stuck on.

## Workflow: synthesize sources

```text
I've attached [3 articles / reports]. 
Synthesize them into a single briefing:

1. Where do the sources agree?
2. Where do they disagree or conflict?
3. What's the bottom line for [our situation]?
Quote the specific lines that support each point.
```

Asking for quotes/anchors makes the synthesis **verifiable** instead of vibes.

## Workflow: structured decision

```text
Help me decide: [Option A] vs [Option B] vs [Option C].

Context: [goals, constraints, what matters most]

1. Propose the key decision criteria (and weight them).
2. Score each option against the criteria.
3. Name the biggest risk of each.
4. Give a recommendation and what would change your mind.
Think it through carefully before concluding.
```

## Workflow: red-team my thinking

One of the most valuable uses is to invite disagreement:

```text
Here's my plan: [paste]. 
Act as a skeptical critic. What are the 5 strongest objections?
Where am I likely fooling myself? What would a smart opponent say?
```

## Workflow: explain to understand

```text
Explain [unfamiliar topic] to me as a smart beginner.
Use a concrete analogy, define any jargon, and finish with
"3 things to remember" and "2 things people get wrong."
```

## A word on accuracy

Research is exactly where **hallucinations** bite. Protect yourself:

- For anything that needs to be *current* or *factual*, connect Claude to live sources via [tools/connectors](/integrations/mcp), or verify independently.
- Ask Claude to **cite sources** and **flag uncertainty**: *"Mark anything you're not sure about."*
- Don't treat a confident answer as a verified one. See [Limitations & trust](/best-practices/limitations).

## Power-ups

- **[Files](/coworking/files):** Drop in long reports and analyze across all of them at once.
- **[Web/connectors](/integrations/mcp):** Pull in live, current information.
- **[Projects](/coworking/projects):** Keep an ongoing research base for a topic.

::: tip Try it
Before your next decision, paste your reasoning and ask Claude to *red-team* it. You'll either find a hole or gain confidence.
:::

# Limitations & trust

Mastering Claude includes knowing where it falls short. Used with clear eyes, it's a superb tool. Trusted blindly, it can embarrass you. Here's how to keep the upside without the risk.

## Where Claude can go wrong

### 1. Hallucinations

Claude can state false things **confidently**, inventing facts, fake citations, and plausible-but-wrong numbers. This is the single most important limitation to internalize.

**Defense:**
- Verify anything load-bearing (facts, figures, quotes, legal/medical/financial claims).
- Ask for **sources** and to **flag uncertainty**: *"Mark anything you're not fully sure about."*
- For current info, connect [live tools](/integrations/mcp) rather than relying on memory.

### 2. Knowledge cutoff

Claude's built-in knowledge stops at a **training cutoff** and won't know recent events unless connected to live data. Don't assume its world is up to date.

### 3. Math and precise computation

Models can slip on exact arithmetic done "in their head."

**Defense:** For anything numeric and important, ask Claude to **compute with code** so the result is exact, then explain it. ([Data workflows](/workflows/data).)

### 4. Sycophancy

Claude may agree with you too readily or soften hard truths.

**Defense:** Explicitly invite disagreement: *"Push back if I'm wrong"* / *"Give me the strongest counterargument."*

### 5. Lost context in long chats

Very long conversations can cause earlier instructions to fade.

**Defense:** Start fresh chats per topic; use [Projects](/coworking/projects) for durable context.

### 6. No real-world judgment or accountability

Claude doesn't truly understand consequences and isn't responsible for outcomes; **you are**.

## A trust framework

Calibrate verification to the stakes:

| Stakes | Trust level | What to do |
| --- | --- | --- |
| Low (brainstorm, draft) | Use freely | Light review |
| Medium (internal doc, analysis) | Verify key claims | Spot-check facts & math |
| High (external, legal, financial, code in prod) | Treat as a draft from a junior | Review thoroughly; have an expert sign off |

## Keep a human in the loop

For anything that ships to customers, affects money, or carries legal/safety weight:

- **You are the editor-in-chief.** Claude drafts; you decide.
- **An expert reviews expert work.** AI assists professionals; it doesn't replace accountability.
- **Document decisions** that matter, rather than deferring to "the AI said so."

## The balanced takeaway

Claude is genuinely powerful; it can make you faster, sharper, and more productive across almost everything you do. Use it boldly for leverage, and **verify proportionally to the stakes**. That combination is what mastery actually looks like.

---

That's the handbook. Go build your [repeatable workflows](/workflows/repeatable), and revisit the [official Claude docs](https://docs.claude.com) as the tools keep evolving.

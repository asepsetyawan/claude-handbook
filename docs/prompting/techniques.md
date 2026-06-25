# Core techniques

These are the moves that reliably lift output quality. Learn them once, use them forever.

## 1. Assign a role

Telling Claude *who to be* shapes vocabulary, depth, and priorities.

```text
You are a skeptical security reviewer. Find what could go wrong.
```

## 2. Give examples (few-shot)

The fastest way to control format and style is to **show** an example or two. Claude is excellent at pattern-matching.

```text
Rewrite product names into punchy taglines.

Example:
Input: "Noise-cancelling headphones"
Output: "Silence, on demand."

Now do these:
Input: "Standing desk"
Input: "Reusable water bottle"
```

## 3. Ask for step-by-step reasoning

For analysis and decisions, invite Claude to think before concluding.

```text
Before recommending, list the trade-offs of each option,
then choose. Show your reasoning.
```

This reduces shallow or wrong answers on hard problems. (See [Thinking & effort](/models/thinking).)

## 4. Use structure and delimiters

Headings, numbered lists, and tags make complex prompts unambiguous:

```text
<rules>
- British English
- Max 120 words
</rules>

<task>
Write the welcome message.
</task>
```

## 5. Prefill the format you want

Specify the exact output shape, or even start it for Claude:

```text
Return ONLY valid JSON in this shape:
{ "summary": string, "risks": string[], "next_step": string }
```

## 6. Let Claude ask you questions

A powerful, underused move:

```text
Before you start, ask me up to 3 clarifying questions.
```

This surfaces hidden assumptions and produces a far better first draft.

## 7. Set a "definition of done"

Tell Claude what success looks like so it can self-check:

```text
The result is good if a new hire could follow it without asking
any questions. Revise until it meets that bar.
```

## 8. Decompose big tasks

Break a large request into stages and run them in sequence:

```text
Step 1: Outline the report (headings only). Wait for my OK.
```

Then approve, and continue. This keeps quality high on complex work.

## Combine them

Real prompts stack these. A strong analysis prompt might use **role + context + step-by-step + format + definition of done** all at once. Mix to taste.

::: tip Try it
Pick one technique you don't currently use; most people skip **examples** and **clarifying questions**, and apply it to your next three prompts.
:::

Next: how to [iterate and refine](/prompting/iterating) when the first answer isn't right.

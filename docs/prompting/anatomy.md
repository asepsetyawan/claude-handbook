# Anatomy of a great prompt

Let's dissect a high-quality prompt piece by piece, then give you a reusable skeleton.

## A worked example

```text
# Role
You are an experienced product marketer who writes clear, human copy.

# Task
Write a launch announcement for our new feature: bulk export to CSV.

# Context
- Product: a CRM for small sales teams
- Audience: existing customers (admins), notified by in-app banner + email
- Why it matters: customers asked for this for months; it saves hours of manual work
- Tone: warm, confident, not hypey

# Output format
1. An email (subject + body, under 150 words)
2. A 1-sentence in-app banner
3. A 280-character social post

# Constraints
- No exclamation marks
- Lead with the customer benefit, not the feature name
- Include a clear call to action: "Try it now"
```

Every section removes a guess. That's why it works.

## The reusable skeleton

Copy this and fill it in:

```text
# Role
You are [expertise / persona].

# Task
[The single, specific thing you want.]

# Context
- [What Claude can't know: audience, goals, constraints, background]
- [Relevant facts, numbers, names]

# Output format
[Exact structure: table / email / bullets / JSON / steps]

# Constraints
- [Length, tone, do's and don'ts]
```

## Order and structure matter

- **Put instructions first, long content last.** If you're pasting a big document, give the instructions, then the document. Claude reads instructions more reliably when they're up front.
- **Use clear delimiters.** Headings (`#`), triple backticks, or tags like `<document>...</document>` help Claude tell *your instructions* apart from *the material*.
- **One prompt, one job.** Bundling five unrelated tasks into one prompt invites a muddled answer. Chain them instead (see [Iterating](/prompting/iterating).

## Separating instructions from data

When working with pasted content, wrap it:

```text
Summarize the document between the tags in 3 bullets.

<document>
[ ...paste the long text here... ]
</document>
```

This prevents Claude from confusing the document's contents with your instructions, especially important for long or instruction-like material.

## Show, don't just tell

If you want a specific style or format, **give an example** of it. One good example (a "few-shot" example) is often worth a paragraph of description. We cover this in [Core techniques](/prompting/techniques).

::: tip Try it
Take the skeleton above, fill it for a real task, and save it. You're starting your own [prompt library](/prompting/templates).
:::

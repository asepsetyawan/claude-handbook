# Documents & reports

From a one-page brief to a board deck narrative, Claude is strong at structuring and drafting long-form documents, and at compressing long material into something readable.

## When to reach for Claude

- Drafting proposals, briefs, memos, and reports.
- Summarizing long documents for a specific audience.
- Restructuring messy notes into a clean outline.
- Creating first drafts of recurring docs (status updates, one-pagers).

## Workflow: outline → draft → polish

Don't ask for the whole document in one shot. Stage it:

```text
Step 1: Outline only.
I need a [2-page project proposal] for [audience].
Goal: [what it should achieve].
Give me a section-by-section outline (headings + one line each).
Wait for my approval before drafting.
```

Approve or adjust, then:

```text
Step 2: Draft section [X] in full, in [our tone].
Keep it tight; no filler.
```

This produces better documents than one giant prompt, and you stay in control of structure.

## Workflow: summarize for an audience

A summary should be shaped by *who reads it*:

```text
Summarize the attached report for [a time-poor executive].

- 3 key takeaways (one line each)
- The one decision they need to make
- Any risks worth knowing
Keep the whole thing under 150 words.
```

Change the audience and you change the summary:

```text
Now rewrite that summary for the engineering team, with more technical
detail, less business framing.
```

## Workflow: tighten and clarify

```text
This document is too long and dense. Cut it by ~40% without losing
substance. Replace jargon with plain language. Keep all numbers.
```

## Build the document as an Artifact

Ask Claude to produce the document as an [Artifact](/coworking/artifacts) so you can iterate visually and export it. For slide content, structured docs, or spreadsheets, [built-in Skills](/skills/built-in) can generate polished PowerPoint, Word, Excel, and PDF files directly.

## Power-ups

- **[Files](/coworking/files):** Upload source material; Claude drafts grounded in real content.
- **[Projects](/coworking/projects):** Keep templates and past examples so recurring docs stay consistent.
- **[Skills](/skills/built-in):** Generate formatted `.pptx`, `.docx`, `.xlsx`, and `.pdf` outputs.

::: tip Try it
Next status report: paste your bullet notes and ask Claude to expand them into your standard format using last month's report (attached) as the template.
:::

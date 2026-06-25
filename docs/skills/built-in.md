# Using built-in skills

Anthropic ships **pre-built Skills** for common document tasks. The headline ones let Claude create real, polished office files:

- **PowerPoint** (`pptx`: presentations
- **Excel** (`xlsx`: spreadsheets with real formulas
- **Word** (`docx`: formatted documents
- **PDF** (`pdf`: PDF documents

You don't install these the way you would a custom Skill, Claude **uses them automatically when your request calls for it** (with code execution available).

## How to trigger them

Just ask for the output in that format. Claude recognizes the need and uses the right Skill.

```text
Create a 6-slide PowerPoint pitching our new onboarding feature.
Slide 1 title, then problem, solution, how it works, results, and a CTA.
Keep text minimal and punchy.
```

```text
Build an Excel sheet that tracks a 12-week project: tasks, owners,
start/end dates, % complete, and a summary with overall progress.
Use formulas for the summary.
```

```text
Turn this report draft into a clean, formatted Word document with
headings, a title page, and a table of contents.
```

```text
Generate a one-page PDF invoice from these details: [paste].
```

## Why this is powerful

- You get **finished, downloadable files**, not just text to copy and reformat.
- Excel files come with **working formulas**, not static numbers.
- It removes the tedious "now make it look right" step.

## Tips

- **Be specific about structure.** Number of slides, columns, sections, tone.
- **Provide the content or source.** Paste the material or attach a file so the document is grounded in your real data.
- **Iterate.** Ask for changes, "make slide 3 a comparison table," "add a totals row"; just like any [Artifact](/coworking/artifacts).

## Availability

Built-in Skills are available on paid plans with code execution enabled, and via the API by referencing the Skill (e.g. `pptx`, `xlsx`) with the code execution tool. Exact availability varies by plan and surface; check your settings and the official docs.

::: tip Try it
Take a report you'd normally build by hand and ask Claude to produce it as a `.pptx` or `.xlsx`. Then refine it in a couple of follow-ups.
:::

Next: capture your own know-how by [creating a skill](/skills/creating).

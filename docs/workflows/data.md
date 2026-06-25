# Data & spreadsheets

You don't need to be an analyst to get insight from data with Claude. It can read spreadsheets, reason about numbers, write formulas, and explain what's going on in plain language.

## When to reach for Claude

- Making sense of a spreadsheet or export.
- Writing/explaining Excel, Google Sheets, or SQL formulas.
- Spotting patterns, outliers, and data-quality issues.
- Turning raw numbers into a narrative for non-technical readers.

## Workflow: explore a dataset

```text
Here's a CSV of [last quarter's sales] (attached).
Audience: [our leadership team].

1. Describe what this data contains in plain language.
2. Surface the 3 most interesting patterns or surprises.
3. Flag any data-quality issues (missing values, odd outliers).
4. Suggest 2 follow-up questions worth investigating.
```

## Workflow: write a formula

```text
In Google Sheets, I have dates in column A and amounts in column B.
I want a formula in D1 that sums all amounts from the last 30 days.
Give me the formula and explain how it works.
```

Or go the other way; explain an inherited formula:

```text
Explain what this formula does, step by step, and what could break it:
=ARRAYFORMULA(IF(LEN(A2:A),VLOOKUP(A2:A,Sheet2!A:C,3,FALSE),"")
```

## Workflow: from numbers to story

```text
Here are this month's metrics (pasted). Write 3 sentences I can
put at the top of a report explaining the story behind the numbers
to a non-technical audience. Lead with what changed and why it matters.
```

## Workflow: build a spreadsheet

With the **Excel Skill**, Claude can generate a real `.xlsx` file:

```text
Create an Excel model for a simple monthly budget: income, fixed costs,
variable costs, and a summary with totals and a savings rate.
Use formulas, not hard-coded numbers, and add a clean summary tab.
```

## Cautions with data

::: warning Always sanity-check
- **Verify the math** on anything important; re-run a calculation or spot-check totals.
- **Watch for hallucinated values.** If Claude can't see a number, it shouldn't invent one. Ask it to flag assumptions.
- **Mind privacy.** Don't upload sensitive data without checking policy. See [Privacy & data](/best-practices/privacy).
:::

## Power-ups

- **[Files](/coworking/files):** Upload Excel/CSV directly for analysis.
- **[Skills](/skills/built-in):** Generate `.xlsx` outputs with real formulas.
- **[Code/agents](/integrations/agents):** For heavy or repeated analysis, Claude can run code to crunch numbers precisely rather than estimating.

::: tip For precision, ask Claude to compute
For anything numerically important, prompt: *"Calculate this with code so the numbers are exact, then explain the result."* This avoids mental-math errors.
:::

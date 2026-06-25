# Build a repeatable workflow

The leap from "Claude is handy" to "Claude saves me hours every week" comes from **systematizing** what you do repeatedly. A great one-off prompt helps once. A repeatable workflow helps forever.

## Spot the repetition

For one week, notice tasks you do with Claude **more than once** in roughly the same shape:

- Weekly status reports
- Customer email replies
- Meeting summaries
- Content repurposing
- Data check-ins

Each of these is a candidate to turn into a system.

## The ladder of reuse

Move a task up this ladder as it proves valuable:

1. **One-off prompt**: you type it fresh each time.
2. **Saved template**: a [template](/prompting/templates) you copy-paste and fill in.
3. **Project**: a [Project](/coworking/projects) with standing instructions + knowledge, so context is automatic.
4. **Skill**: a packaged [Skill](/skills/overview) Claude invokes automatically when relevant.
5. **Automation**: an [API/agent](/integrations/agents) pipeline that runs with little or no manual input.

Most people should aim for **levels 2–4**. Level 5 is for developers or high-volume needs.

## Worked example: weekly report

**Level 1 (one-off):** You write a long prompt every Friday. Works, but tedious.

**Level 2 (template):** You save the prompt with `[blanks]` to fill in.

**Level 3 (Project):** Create a "Weekly Report" Project. Add custom instructions (format, tone, audience) and last month's reports as knowledge. Now each week you just paste the new data:

```text
Here are this week's numbers and highlights (pasted).
Produce this week's report in our standard format.
```

**Level 4 (Skill):** Package the exact format and rules as a [Skill](/skills/creating) so it applies consistently across chats and teammates.

**Level 5 (Automation):** Pipe the data in via the [API](/integrations/agents) so the draft generates itself.

## Make it a team asset

A workflow that lives only in your head helps one person. To scale it:

- Put shared Projects, templates, and Skills where teammates can use them (Team/Enterprise).
- Write the instructions clearly enough that a new hire could use them.
- Treat prompts and Skills like documents you version and improve over time.

## A simple framework to build one

```text
1. Define the trigger:  "Every time X happens..."
2. Define the inputs:   "I'll provide..."
3. Define the output:   "I want exactly..."
4. Capture the rules:   tone, format, constraints, examples
5. Decide the level:    template → Project → Skill → automation
```

Write that down once, and you've built a workflow.

::: tip Try it
Take the single most repetitive task from your week. Promote it one rung up the ladder, from one-off to template, or template to Project. Then do it again next week.
:::

Next, the tools that power levels 4–5: [Skills](/skills/overview).

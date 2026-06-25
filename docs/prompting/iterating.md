# Iterating & refining

The first answer is a starting point, not the finish line. Skilled users treat a chat as a **collaborative editing loop**.

## The refine loop

1. **Get a draft.** Don't over-engineer the first prompt; get something on the page.
2. **React specifically.** Say exactly what to change.
3. **Repeat.** Two or three rounds usually gets you to great.

```text
Good start. Now:
- Cut the intro paragraph
- Make the tone more direct
- Add a concrete example in point 3
```

## Give feedback like an editor

Vague feedback gets vague improvements. Be precise about *what* and *why*:

| Weak feedback | Strong feedback |
| --- | --- |
| "Make it better" | "Tighten it; aim for half the length" |
| "I don't like it" | "Too formal; write like I'm talking to a teammate" |
| "Add more" | "Add a section on risks, with 3 bullets" |

## Steer, don't restart

If Claude drifts, you usually don't need a brand-new prompt; just **course-correct**:

```text
You changed the structure I asked for. Go back to the 3-section
format from before, keeping the improved wording.
```

## Branch instead of overwriting

When you have a version you like but want to explore, ask for alternatives so you don't lose the good one:

```text
Keep this version. Now also give me a bolder, riskier variation
as "Option B" so I can compare.
```

In `claude.ai` you can also **edit a previous message** to fork the conversation and try a different direction.

## Save what works

When a prompt produces consistently great results, **save it**. That's the seed of a reusable template (see [Prompt templates](/prompting/templates) or even a [Skill](/skills/overview).

## When to start fresh

Iterate within a chat when you're refining one thing. **Start a new chat** when:

- You switch to an unrelated task.
- The conversation has gotten long and Claude seems to "lose the thread."
- Early mistakes are anchoring the responses.

Long threads cost more and can muddy focus; a clean start is often the fastest fix.

::: tip Try it
Next time an answer is "almost right," resist re-typing the whole prompt. Give three specific edits instead. Notice how much faster you converge.
:::

Next: the [common pitfalls](/prompting/pitfalls) that trip people up.

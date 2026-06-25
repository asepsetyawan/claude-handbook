# Your first conversation

Let's go from blank screen to a genuinely useful result.

## 1. Open a chat

Go to [claude.ai](https://claude.ai), sign in, and start a **new chat**. You'll see a single text box. That's it, no setup required.

## 2. Don't just ask: brief

The most common beginner mistake is treating Claude like a search bar:

```text
marketing email ideas
```

You'll get something generic. Instead, **brief Claude like you'd brief a colleague**: who, what, why, and what "good" looks like:

```text
Write 3 subject-line options for a marketing email.

Context:
- Product: a budgeting app for freelancers
- Audience: freelancers who tried us once and churned
- Goal: get them to re-open the app this week
- Tone: friendly, a little playful, not salesy

For each option, add a one-line note on why it might work.
```

Notice the difference: same task, but now Claude knows the audience, goal, tone, and the exact shape of the output.

## 3. Read, then react

Claude's first answer is a **draft, not a verdict**. The magic is in the back-and-forth:

```text
I like #2. Make it shorter and add a sense of urgency
without using the word "limited". Give me 3 variations.
```

This single habit, **iterating instead of accepting the first answer**, is what separates casual users from power users.

## 4. Bring in your material

Drag a file into the chat (a PDF, a spreadsheet, a screenshot) and ask Claude to work *with* it:

```text
Here's last quarter's report (attached). Pull out the
3 numbers a CEO would care about and explain each in one sentence.
```

## 5. Ask for the format you want

Claude is happy to give you a table, bullet list, email, JSON, or step-by-step plan, but only if you ask:

```text
Summarize this as a table with columns: Risk | Likelihood | What to do.
```

## A complete first session to try

::: tip Try it
Paste this into a new chat, replacing the bracketed parts:

```text
You are an experienced [your role, e.g. operations manager].
I need help with [your real task this week].

Here's the context:
- [bullet 1]
- [bullet 2]

First, ask me up to 3 questions if anything is unclear.
Then give me a first draft.
```
Letting Claude ask *you* questions first is a fast way to get a much better first draft.
:::

## What you just learned

- **Brief, don't search.** Context beats keywords.
- **Iterate.** The 2nd and 3rd messages are where quality happens.
- **Bring material.** Files and examples ground Claude in *your* reality.
- **Specify format.** Ask for the exact output shape.

Next, a quick look at [plans, limits, and access](/getting-started/plans), then we go deep on [models](/models/family) and [prompting](/prompting/fundamentals).

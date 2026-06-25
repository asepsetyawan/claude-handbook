# Prompt templates

Copy, paste, and adapt. Replace the `[bracketed]` parts. Build your own library on top of these.

## Universal task brief

```text
# Role
You are [expertise].

# Task
[The specific outcome you want.]

# Context
- [Audience, goal, background, constraints Claude can't know]

# Output format
[table / email / bullets / steps / JSON]

# Constraints
- [length, tone, do's and don'ts]

If anything is unclear, ask me up to 3 questions first.
```

## Summarize a long document

```text
Summarize the document below for a [busy executive].

Give me:
1. The 3 most important takeaways (one line each)
2. Any risks or red flags
3. One recommended next action

<document>
[paste here]
</document>
```

## Improve my writing

```text
You are my editor. Improve the text below.

Goals: clearer, more concise, [confident but warm] tone.
Rules: keep my voice, don't add facts, British English.

Show the revised version, then a short bullet list of what you changed and why.

<text>
[paste here]
</text>
```

## Draft an email

```text
Write an email.

To: [recipient + relationship]
Goal: [what I want them to do/feel]
Key points:
- [point 1]
- [point 2]
Tone: [e.g. friendly, professional, firm]
Length: under [120] words. Include a clear call to action.
```

## Brainstorm, then converge

```text
Brainstorm [15] ideas for [goal]. Be bold and varied.
Then pick the [3] strongest and explain why, considering [our constraint].
```

## Analyze a decision

```text
Help me decide between [Option A] and [Option B].

Context: [situation, goals, constraints]

1. List the key decision criteria.
2. Score each option against them.
3. Note risks and what would change your mind.
4. Give a clear recommendation.
Think it through before concluding.
```

## Turn data into insight

```text
Here is a dataset (attached / pasted). 
Audience: [who will read this].

1. Describe what the data shows in plain language.
2. Surface the 3 most interesting patterns.
3. Suggest 2 actions and what to watch next.
Flag any data-quality issues you notice.
```

## Explain something complex

```text
Explain [topic] to me like I'm [a smart beginner].
Use a concrete analogy, avoid jargon (or define it),
and end with a 3-bullet "what to remember".
```

## Create a plan

```text
Create a step-by-step plan to [goal] by [deadline].

Constraints: [time, budget, people]
For each step: owner, rough effort, and dependencies.
Flag the riskiest step and a fallback.
```

## Role-play / practice

```text
Role-play as [a tough customer / interviewer / skeptical stakeholder].
I'll respond, and you stay in character. After 5 exchanges,
break character and give me feedback on how I did.
```

::: tip Make them yours
Save the templates you use most. When one consistently nails a recurring task, promote it to a [Project instruction](/coworking/projects) or a [Skill](/skills/creating) so you never retype it.
:::

Next: go beyond chat, [coworking with Claude](/coworking/).

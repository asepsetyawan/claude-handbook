# Agents & computer use

The frontier of working with Claude is **agents**: instead of answering a single question, Claude pursues a *goal* by taking multiple steps, using tools, reading results, and adjusting as it goes.

## From assistant to agent

| Assistant | Agent |
| --- | --- |
| You ask, it answers | You set a goal, it acts |
| One turn | Many steps, self-directed |
| You execute the steps | It executes the steps |

An agent loops: decide the next action → take it → observe the result → repeat, until the goal is met.

## What powers an agent

A capable agent combines the pieces from earlier chapters:

1. **The model**: the reasoning core that decides what to do next. ([Models](/models/family).)
2. **A runtime**: an environment where it can run code and use a filesystem.
3. **[MCP](/integrations/mcp) connections**: access to external tools and data.
4. **[Skills](/skills/overview)**: the procedural knowledge for doing tasks well.

This is exactly why the higher Claude tiers (Opus, Mythos-class) matter for **long-horizon agentic work**: sustained, multi-step tasks need strong, reliable reasoning.

## Computer use

Claude can also operate a computer interface, viewing the screen and controlling a mouse and keyboard, to perform tasks in software that has no API. It's powerful for automating GUI-based work, though it's slower and should be sandboxed and supervised.

## Examples of agentic work

- An overnight **coding agent** that implements and tests a feature.
- A **research agent** that gathers sources across the web and compiles a report.
- A **data pipeline** that pulls, cleans, analyzes, and summarizes on a schedule.

## How to think about it as a non-developer

You don't need to build agents to benefit from the mindset:

- **Delegate outcomes, not keystrokes.** Describe the end state you want.
- **Provide guardrails.** Constraints, definitions of done, and review points.
- **Keep a human in the loop** for anything consequential.

::: warning Autonomy needs supervision
The more an agent can *do*, the more carefully you should scope its permissions and review its actions. Grant least privilege, sandbox where possible, and verify results. See [Limitations & trust](/best-practices/limitations) and [Privacy & data](/best-practices/privacy).
:::

That completes the toolkit. Finish with the habits that make it all work: [Best practices](/best-practices/habits).

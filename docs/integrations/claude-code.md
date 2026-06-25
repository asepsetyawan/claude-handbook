# Claude Code

**Claude Code** is Anthropic's coding agent that works directly in your terminal and editor. It can read your codebase, run commands, edit files, and carry out multi-step engineering tasks, not just answer questions about code.

This page is a primer. If you don't write software, you can skip it, but the *ideas* (agents that take action) are worth understanding.

## What makes it different from chat

In `claude.ai`, Claude *tells you* how to write code. Claude Code *does it*, in your actual project:

- Reads and navigates your real files.
- Runs commands and tests.
- Makes edits across multiple files.
- Iterates toward a working result, checking its own work.

It's a true **agent**: given a goal, it takes a sequence of actions to achieve it.

## What people use it for

- Implementing features from a description.
- Large refactors across many files.
- Writing and fixing tests.
- Debugging from an error message.
- Automating repetitive dev chores.

## How it connects to the rest of this handbook

- **[Skills](/skills/overview)** work in Claude Code; package your team's conventions and Claude follows them.
- **[MCP](/integrations/mcp)** connects it to external tools and data.
- The same **[prompting principles](/prompting/fundamentals)** apply: clear goals, context, constraints, and iteration.

## Good habits

- **State the goal and constraints** clearly, like any prompt.
- **Work in small steps** and review changes as they happen.
- **Use version control.** Let it work on a branch so you can review and roll back.
- **Keep a human in the loop** for anything important; you're the reviewer.

::: tip Beyond engineers
"Agentic" tools like Claude Code point to where work is heading: you describe an outcome, and the agent executes multi-step tasks. Even non-developers benefit from learning to **delegate goals, not just ask questions.**
:::

For the bigger picture, see [agents & computer use](/integrations/agents).

# Where to use Claude

Claude shows up in several places. Picking the right surface for the job is half the battle.

## The web and desktop app: `claude.ai`

The main way most people use Claude. Available in your browser at [claude.ai](https://claude.ai) and as a **desktop app** (macOS/Windows) and **mobile app**.

Best for:

- Everyday writing, analysis, and Q&A.
- **Projects**: persistent workspaces with their own knowledge and instructions.
- **Artifacts**: live documents, code, and previews beside the chat.
- Uploading files (PDFs, spreadsheets, images) for Claude to read.

This is where most of this handbook lives. If you're not sure, start here.

## The Claude Developer Platform (API)

For developers and teams who want to **build Claude into their own software**: apps, internal tools, automations, and agents. You call Claude programmatically and pay per token (unit of text).

Best for:

- Custom apps and chatbots.
- High-volume or automated processing.
- Embedding Claude in existing products.

See [Connecting Tools](/integrations/mcp) for where this fits.

## Claude Code

A command-line and IDE-based coding agent that works directly with your codebase and terminal. It can read files, run commands, edit code, and complete multi-step engineering tasks.

Best for:

- Software development and automation.
- Power users comfortable in a terminal.

More in [Claude Code](/integrations/claude-code).

## Inside other tools

Claude is also available **embedded in other platforms**: for example through cloud providers (AWS, Google Cloud, Microsoft Foundry), productivity suites, and developer tools like Cursor. The skills in this handbook transfer to those surfaces too.

## Quick chooser

| Your situation | Use |
| --- | --- |
| "I want to get work done by chatting" | [claude.ai](https://claude.ai) web/desktop |
| "I have a recurring project with its own context" | claude.ai **Projects** |
| "I'm a developer building a feature" | API / Claude Code |
| "I want Claude inside my editor" | Cursor or another integration |
| "I need to automate a repetitive task" | API + [Skills](/skills/overview) / [MCP](/integrations/mcp) |

::: tip
You can mix surfaces. Many people draft and think in `claude.ai`, then move proven prompts into automated workflows via the API.
:::

Next: [your first conversation](/getting-started/first-conversation).

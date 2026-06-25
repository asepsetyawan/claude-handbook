# MCP & connectors

On its own, Claude only knows what's in the conversation and its training. **Connectors**, built on the **Model Context Protocol (MCP)**, let Claude reach into your real tools and data that are live, current, and specific to you.

## What is MCP?

The **Model Context Protocol (MCP)** is an open standard for connecting AI assistants to external tools and data sources. Think of it as a **universal adapter**: instead of every app needing a custom integration, MCP gives Claude a standard way to talk to many systems.

MCP has become the de-facto standard for agent connectivity, with broad industry adoption.

## What it unlocks

With connectors, Claude can do things like:

- Search and read from your **knowledge base** or documents.
- Pull **live data** from a database or API.
- Look up information in tools like **issue trackers, CRMs, or docs**.
- Take actions in connected systems (e.g. create a ticket), where permitted.

The result: answers grounded in *your current reality*, not just the model's general knowledge.

## Connectors in everyday use

In `claude.ai` (on supported plans), you can enable connectors to your tools. Once connected, you just ask naturally:

```text
Check our docs and summarize our current refund policy.
```

```text
What are the open high-priority issues assigned to my team this week?
```

Claude uses the connector to fetch the real data, then reasons over it.

## MCP for builders

Developers can connect Claude to custom MCP servers, wrapping internal APIs, databases, or services, so Claude-powered apps and agents operate on live systems. There's even a "MCP Builder" Skill that encodes the patterns for building these integrations correctly.

## Skills vs. MCP: a quick distinction

People mix these up:

- **[Skills](/skills/overview)** = *know-how*. They teach Claude **how** to do a task (procedures, standards).
- **MCP** = *connectivity*. It gives Claude **access** to tools and data.

They're great together: a Skill might define how to write a competitive analysis, while MCP supplies the live web, CRM, and document data it needs to fill it in.

## Safety & permissions

::: warning Connectors can read, and sometimes act
Only connect trusted tools, review what each connector is allowed to access, and be cautious with connectors that can *take actions*. Grant the least access needed. See [Privacy & data](/best-practices/privacy).
:::

Next: the developer-focused [Claude Code](/integrations/claude-code).

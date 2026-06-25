# Privacy & data

Using AI well at work means being thoughtful about **what you share and where it goes**. This page covers the principles; always defer to your organization's policies and the official, current terms.

## Know what you're sharing

Anything you type or upload becomes part of the conversation Claude processes. Before pasting, ask:

- Is this **confidential** (customer data, secrets, unreleased plans)?
- Is this **personal data** about real people?
- Am I allowed to share it with a third-party tool under our policies?

When in doubt, **anonymize or omit**; replace names and identifiers with placeholders.

## How data is handled (general principles)

Data handling differs by **plan and surface**, so verify the specifics for yours:

- **Consumer vs. business plans** can have different defaults for data retention and whether content may be used to improve models.
- **Team/Enterprise plans** typically offer stronger guarantees, admin controls, and data governance.
- **The API** has its own data-handling terms, and some configurations support **zero or limited data retention** for sensitive workloads.

::: warning Don't assume; check
Defaults and options change. Confirm the current data-use, retention, and training settings for your plan in Anthropic's official documentation and your account settings.
:::

## Controls you have

- **Privacy/training settings.** Review whether your content can be used to improve models and adjust if available.
- **Temporary chats.** Use a non-persistent/incognito chat for sensitive one-offs so nothing is retained or remembered.
- **Memory management.** [Memory](/coworking/memory) can be turned off, viewed, and cleared.
- **Connector permissions.** [Connectors/MCP](/integrations/mcp) should be granted the **least access** necessary, and reviewed regularly.

## Practical guidelines for work

1. **Follow your company's AI policy first.** If there isn't one, ask before sharing sensitive material.
2. **Minimize.** Share only the portion needed for the task.
3. **Mask identifiers.** Swap real names/numbers for placeholders when the specifics don't matter.
4. **Prefer business plans for business data.** They're built for it.
5. **Be careful with actions.** Agents and connectors that can *do* things deserve extra scrutiny.

## A simple rule of thumb

> If you'd hesitate to paste it into an email to an outside vendor, hesitate here too, and check the policy first.

Next: understanding where Claude can go wrong in [limitations & trust](/best-practices/limitations).

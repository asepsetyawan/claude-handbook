# Plans, limits & access

You don't need to memorize pricing; it changes often, but understanding *how access works* helps you avoid surprises.

## The shape of the plans

Claude is available through a free tier and several paid tiers. As of mid-2026 the consumer tiers are roughly:

| Tier | Who it's for | What you generally get |
| --- | --- | --- |
| **Free** | Trying Claude | Access to capable models, limited usage per period |
| **Pro** | Individual professionals | Higher limits, access to top models, Projects, more features |
| **Max** | Power users | Much higher usage, priority access to the newest models |
| **Team** | Small teams | Shared workspace, collaboration, central billing |
| **Enterprise** | Organizations | Admin controls, security, scale, data governance |

::: warning Details change
Exact prices, model availability, and limits shift frequently. Always confirm on Anthropic's official pricing page before deciding.
:::

## Usage limits, in plain terms

Paid plans give you a budget of usage over a rolling window (often a few hours), not unlimited use. A few things to know:

- **Bigger models cost more** of your budget per message. The most capable models (Opus and Mythos-class) consume usage faster than lighter ones (Haiku, Sonnet).
- **Long conversations cost more.** Every message re-reads the whole chat, so very long threads use more of your budget. Start fresh chats for new topics.
- **Files and large context cost more.** Uploading a 200-page PDF and asking about it uses far more than a one-line question.

## The API is different

If you build with the [API](/getting-started/interfaces), you don't pay a subscription, you **pay per token** (input + output). This is usage-based and scales with how much you send and receive. See [Choosing the right model](/models/choosing) for the cost/quality trade-off.

## Practical tips to stretch your usage

- Use a **lighter model** for simple tasks (drafting, formatting, quick questions).
- Reserve **top models** for hard reasoning, important writing, and complex analysis.
- **Trim context**: don't paste a whole document when a section will do.
- **Start new chats** for unrelated tasks instead of one endless thread.

Now that access is clear, let's understand the different "brains" you can choose from: the [Claude model family](/models/family).

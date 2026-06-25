# Files & long context

Claude becomes far more useful when it works with **your** material. You can upload files directly into a chat or add them as [Project](/coworking/projects) knowledge.

## What you can upload

- **Documents**: PDF, Word, text, Markdown.
- **Spreadsheets & data**: Excel, CSV.
- **Images**: screenshots, photos, charts, diagrams (Claude can *see* and interpret images).
- **Slides**: PowerPoint.
- **Code**: source files.

Claude reads the content and can summarize, analyze, extract, compare, rewrite, or answer questions about it.

## The superpower: a huge context window

Modern Claude models have a very large **context window**: up to around **1 million tokens** (roughly a few thousand pages). In practice that means you can give Claude a whole report, a long contract, or a big transcript and ask questions across all of it at once.

```text
Here are three vendor contracts (attached). 
Build a comparison table: payment terms, termination clause,
liability cap, and any unusual conditions. Flag anything risky.
```

## Working well with long documents

- **Put your instructions first, the document last.** Claude follows leading instructions more reliably. ([Anatomy](/prompting/anatomy).)
- **Delimit the material.** Wrap pasted text in tags or fences so Claude separates *your ask* from *the content*.
- **Ask for citations/anchors.** "Quote the exact sentence that supports each point" makes answers verifiable.
- **Be specific about scope.** "Focus only on section 4" beats "tell me about this."

## Images count too

Claude accepts images as input. Useful moves:

```text
Here's a screenshot of an error message. What does it mean
and how do I fix it?
```

```text
This is a photo of a whiteboard from our meeting.
Turn it into a clean, typed action-item list.
```

## A note on cost and limits

Large files use more of your usage budget, because Claude re-reads the relevant context. Tips:

- Upload only the pages/sheets you actually need.
- For repeated work on the same big document, put it in a **Project** so you're not re-uploading it every chat.
- Builders can use **prompt caching** to make repeated large contexts cheaper (see [Choosing a model](/models/choosing).

::: warning Sensitive data
Be thoughtful about uploading confidential or personal data. Check your plan's data handling and your organization's policies first. See [Privacy & data](/best-practices/privacy).
:::

Next: how [memory](/coworking/memory) carries useful context across chats.

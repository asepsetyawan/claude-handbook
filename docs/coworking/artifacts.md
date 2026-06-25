# Artifacts

When Claude produces something substantial (a document, code, a diagram, or a small app), it can open an **Artifact**: a panel beside the chat showing the content as a living, editable object rather than text buried in the conversation.

## What can be an Artifact

- **Documents**: long-form writing, reports, plans (Markdown).
- **Code**: snippets or whole files, with syntax highlighting.
- **Web content**: HTML/CSS/JS, React components, even small interactive apps with a live preview.
- **Diagrams**: flowcharts and other diagrams (e.g. Mermaid), SVG graphics.
- **Data views**: tables and structured content.

## Why they're powerful

- **Iterate in place.** Ask for changes and the Artifact updates, instead of regenerating a wall of text each time.
- **See it live.** Code and web content render in a preview, so you watch results take shape.
- **Reuse easily.** Copy, download, or share the finished Artifact.
- **Keep chat clean.** The conversation stays about *direction*; the Artifact holds the *output*.

## How to work with Artifacts

Just ask for something substantial and Claude will usually create one. Then iterate:

```text
Turn this into a one-page brief as a document.
```

```text
In the artifact, make the heading shorter and add a "Next steps"
section with 3 checkboxes.
```

```text
Build a simple landing page (HTML) for this product.
Make the call-to-action button orange and center the hero text.
```

You direct from the chat; the Artifact reflects the changes.

## Practical uses at work

- Draft and refine a **proposal or report** you'll export.
- Prototype a **landing page or UI** to share an idea visually.
- Generate a **flowchart** of a process from a text description.
- Build a tiny **interactive tool** (calculator, checklist) without writing code yourself.

::: tip Sharing
On paid plans you can share an Artifact via a link, and on Team/Enterprise you can keep sharing within your organization. Great for getting quick feedback without copy-pasting.
:::

::: warning Verify before you ship
An Artifact is a draft until you've checked it; facts, numbers, and (for code) behavior. Claude builds fast; you stay the reviewer.
:::

Next: bring your own material with [files & long context](/coworking/files).

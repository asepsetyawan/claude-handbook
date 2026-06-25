# Common pitfalls

A checklist of the mistakes that quietly ruin results, and how to fix each.

## 1. Being too vague

**Symptom:** Generic, surface-level answers.
**Fix:** Add context and specifics. Ask yourself, *"What did I leave Claude to guess?"*

## 2. Asking for too much at once

**Symptom:** A muddled response that does each part poorly.
**Fix:** One job per prompt. [Decompose](/prompting/techniques) big tasks into steps.

## 3. No example of "good"

**Symptom:** Right content, wrong style or format.
**Fix:** Show a [few-shot example](/prompting/techniques) of the output you want.

## 4. Accepting the first draft

**Symptom:** "It's okay, I guess."
**Fix:** [Iterate](/prompting/iterating). The second and third rounds are where quality lives.

## 5. Trusting facts blindly

**Symptom:** A confident-sounding claim, statistic, or citation that turns out to be wrong (a "hallucination").
**Fix:** Verify anything load-bearing. Ask Claude to cite sources or flag uncertainty, and connect it to live tools when accuracy is critical. See [Limitations & trust](/best-practices/limitations).

## 6. Dumping huge context with no instructions

**Symptom:** Claude summarizes when you wanted analysis, or vice versa.
**Fix:** Put **instructions first**, then the material, clearly delimited. ([Anatomy](/prompting/anatomy).)

## 7. One never-ending chat

**Symptom:** Claude forgets earlier rules; responses get slower and pricier.
**Fix:** Start a fresh chat per topic. Use [Projects](/coworking/projects) for persistent context.

## 8. Fighting the format

**Symptom:** You keep reformatting Claude's output by hand.
**Fix:** Specify the exact format up front: table, JSON, word count, headings.

## 9. Over-thinking simple tasks

**Symptom:** Slow, bloated answers to trivial requests.
**Fix:** Match effort to difficulty. Don't ask for step-by-step reasoning to rename a file.

## 10. Polite vagueness

**Symptom:** "Could you maybe help a little with this?" → wishy-washy output.
**Fix:** Be direct and concrete. Claude responds to clarity, not hedging. Being clear isn't being rude.

::: tip The meta-fix
Almost every pitfall reduces to two cures: **add the missing context**, and **iterate with specific feedback**. When stuck, do one of those.
:::

Next: a ready-to-use [prompt template library](/prompting/templates).

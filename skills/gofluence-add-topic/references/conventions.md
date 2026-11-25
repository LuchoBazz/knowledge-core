# Handbook conventions

Handbook root: `docs/gofluence-handbook/`. Components: `docs/gofluence-handbook/_components/`.

## Choosing the group folder

| Folder | Put the topic here when it is mainly about... | Existing examples |
|--------|-----------------------------------------------|-------------------|
| `01-grammar` | a grammar structure: tenses, modals, conditionals, pronouns, prepositions, comparatives | zero-conditional, must, causatives |
| `02-vocabulary` | word lists, word families, places and objects, verbs by theme, collocations | most-common-prefixes, computer-and-online-verbs |
| `03-meetings-discussion` | language for talking with colleagues: opinions, agreeing, suggesting, feedback, raising issues | agree-and-disagree-in-a-meeting, making-suggestions |
| `04-projects-presentations` | presenting or managing work: proposals, status, scope, risks, specs | present-a-project-proposal, manage-scope-creep |
| `05-tech-products-clients` | products, apps, AI tools, tech support, customers and clients | describe-a-product, respond-to-feedback-from-clients |

Word lists go to `02-vocabulary` even when the theme is a situation (e.g. phrasal verbs for meetings). Grammar-heavy topics with a workplace flavor (e.g. "How to make predictions") stay in grammar when the lesson is built around a structure. Topics built around a situation (a meeting, a report, a client call) go to the situation group. If nothing fits, ask the user before creating a new group: new folder `NN-name/` with `_category_.json`:

```json
{ "label": "6. Name", "position": 6, "collapsed": true,
  "link": { "type": "generated-index", "description": "One line." } }
```

## File naming and position
- Path: `docs/gofluence-handbook/<group>/<slug>.mdx`. Slug is kebab-case. Drop a leading "How to" ("How to make deductions" -> `making-deductions`; keep it natural, e.g. `agree-and-disagree-in-a-meeting`).
- `sidebar_position` = highest `sidebar_position` in that folder + 1. Check with:
  `grep -h '^sidebar_position' docs/gofluence-handbook/<group>/*.mdx | sort -t: -k2 -n | tail -1`
- Numeric folder prefixes do not appear in URLs.
- Siblings (e.g. zero / first / second conditional) read best in order. The default is highest + 1; only renumber existing pages if the user asks.

## Front matter (all six keys, required)
`title`, `description`, `sidebar_label`, `sidebar_position`, `keywords` (YAML list `[a, b]`), `tags` (YAML list).

## Allowed tags (defined in `docs/tags.yml`)
grammar, vocabulary, meetings, presentations, projects, modals, conditionals, tenses, feedback, customer-support, technology, workplace, speaking, reference.
A new tag must first be added to `docs/tags.yml` as:
```yaml
tag-slug:
  label: Tag label
  description: One line.
```

## The nine sections (exact H2 text, numbered, in this order)
1. Learning objective 2. Key concepts 3. Vocabulary & useful phrases 4. Examples in a workplace context 5. Common mistakes 6. Practice exercises 7. Answer key 8. Quick recap 9. Review checklist

Admonitions available: `:::tip`, `:::note`, `:::info`, `:::warning`, `:::danger`. Section 6 has subsections A (fill in the blanks), B (rewrite), C (speaking prompts) and an optional D (Quick quiz with `Quiz`); its answers go in section 7.

One `# H1` (same as `title`). Optional `:::info Assumptions` block right under the H1 when the notes are thin or ambiguous.

## Components (import from `@site/docs/gofluence-handbook/_components/<Name>`)
- `VocabTable rows={[{en, meaning, example}]} meaningLabel?` — also feeds the glossary, so every row must keep exactly the keys `en`, `meaning`, `example` with plain string values (single or double quotes, no template literals).
- `Dialogue title? lines={[{speaker, text}]}`
- `Quiz question options={[...]} answer={index} explanation?`
- `Flashcard front back example?`
- `Tabs` / `TabItem` from `@theme/Tabs`, `@theme/TabItem`: leave a blank line before and after any markdown or code block inside a `TabItem`.

## MDX safety (the build breaks otherwise)
- No bare `<`, `>`, `{`, `}` in prose or table cells: wrap in backticks or rephrase.
- In JS string props, use double quotes when the text has an apostrophe, or escape it.
- No HTML comments; use `{/* ... */}` if a comment is needed.
- Quote rule for every JS prop (`Quiz` options and `explanation`, `VocabTable`, `Dialogue`): use double quotes around text that contains an apostrophe; inline backticks inside a string are fine.
- Close every code fence. Blank line after `<summary>` and before `</details>`.

## Links
Only relative links to existing files with the `.mdx` extension (`./other.mdx`, `../01-grammar/first-conditional.mdx`). 0-3 per doc. A broken link only warns, but check the build output.

## Style
B1-B2 English, short sentences, no filler. Spanish only as a hint in the "Meaning" column or in a `:::danger` / `:::warning` about Spanish-speaker errors. Do not invent facts about the GoFluence platform. Add standard grammar to fill gaps in the notes, and say so in `:::info Assumptions`.

## Content sizing
- Keep the `:::info Assumptions` block whenever the page uses anything beyond the pasted notes (extra rows, examples, dialogue, past forms); delete it only if nothing was added.
- Fewer than 6 vocabulary items in the paste: add 1-3 closely related items from standard English to reach 6, and list them in Assumptions. Never pad with unrelated words.
- Common mistakes: 3-5 rows that a Spanish speaker would really make; skip a row rather than invent an unrealistic one.
- Example sentences stay in English (the Spanish hint lives in the "meaning" column only).

# Digital Garden Assistant

## Context
This is a personal digital garden — a collection of short, dense articles on various topics 
(philosophy, watches, critical thinking, craft, and more). Articles are stored as markdown 
files in /content/articles/. The site is hosted on GitHub Pages using Hugo.

## Your Job After Every New Article
When I tell you I have written a new article, do the following:

### 1. Read the new article
Understand its core ideas, arguments, and themes.

### 2. Read all existing articles in /content/articles/
Look for conceptual connections, shared themes, contradictions, or extensions.

### 3. Suggest tags
Propose 2–4 tags from the existing tag vocabulary in /data/tags.yaml.
If a genuinely new tag is needed, suggest it and explain why.

### 4. Suggest inline links
Find specific sentences or phrases in the new article where a link to an 
existing article would naturally extend the idea — not just be related, 
but actually add depth if the reader expands it inline.

Format suggestions like this:
- Paragraph 2, sentence 1: "...most modern things hide their mechanisms."
  → Link to: /articles/craft-and-visibility
  → Reason: That article explores the same idea of opacity in designed objects.

### 5. Suggest reverse links
Identify existing articles that should now link back to the new one.
Format:
- /articles/attention-and-opacity, paragraph 3
  → Should now link to: [new article]
  → Reason: The new article directly extends that argument.

### 6. Ask me before changing anything
Present all suggestions, wait for my approval, then make the edits.

## Site Structure
- /content/articles/ → all articles as markdown files
- /data/tags.yaml → master tag list
- /layouts/ → Hugo templates
- /static/ → JS for inline article expansion
- hugo.toml → site config

## Article Frontmatter Format
---
title: ""
date: 
tags: []
summary: ""
---

## Writing Style Rules to Preserve
- Articles are short (300–600 words max)
- First person, direct voice
- No conclusions that wrap everything up neatly — leave it open
- Links are placed inline within sentences, not in a "see also" list at the bottom

## What You Should Never Do
- Don't rewrite or rephrase my articles
- Don't add links that are merely topically related — only link when the 
  connection genuinely deepens the reading
- Don't create new files without my approval
- Don't change frontmatter tags without my approval
```

---

## What to Tell Claude Code to Actually Build

Once you have this prompt file, give Claude Code this instruction:
```
Read CLAUDE_PROMPT.md. Then build the full Hugo site described in it with:

1. GitHub Pages config (gh-pages branch or /docs folder)
2. Filterable article index on homepage using tags
3. Inline article expansion — clicking a link fetches and 
   expands that article in place without page reload
4. Minimal, readable design — no sidebars, no clutter
5. /data/tags.yaml for managing the tag vocabulary
6. A /content/articles/ folder with one sample article 
   showing correct frontmatter

Make it ready to push to GitHub immediately.
#!/usr/bin/env python3
"""Regenerate docs/gofluence-handbook/glossary.mdx from every <VocabTable rows={[...]} /> in the topic docs."""
import glob, os, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3] / 'docs' / 'gofluence-handbook'
ROW = re.compile(
    r"\{\s*en:\s*(['\"])(?P<en>.*?)\1\s*,\s*meaning:\s*(['\"])(?P<m>.*?)\3\s*,\s*example:\s*(['\"])(?P<ex>.*?)\5\s*,?\s*\}",
    re.S,
)
clean = lambda t: t.replace("\\'", "'").replace('|', '\\|')

rows = {}
for f in sorted(glob.glob(str(ROOT / '0*' / '*.mdx'))):
    s = open(f, encoding='utf-8').read()
    title = re.search(r'^title:\s*(.+)$', s, re.M).group(1).strip().strip('"\'')
    rel = os.path.relpath(f, ROOT)
    for m in ROW.finditer(s):
        en = m['en'].replace("\\'", "'")
        rows.setdefault(en.lower(), (clean(en), clean(m['m']), clean(m['ex']), title, rel))

out = [
    '---', 'title: Glossary',
    'description: Key vocabulary and phrases from every GoFluence topic, in alphabetical order.',
    'sidebar_label: Glossary', 'sidebar_position: 90',
    'keywords: [glossary, vocabulary, phrases, English, workplace]',
    'tags: [reference, vocabulary]', '---', '', '# Glossary', '',
    'All key words and phrases from the topic pages, in alphabetical order. Use the search bar for a quick lookup. Click the topic name to go to the full lesson.',
    '', f'**{len(rows)} entries.**', '',
]
letters = {}
for k in sorted(rows, key=lambda k: re.sub(r'[^a-z0-9]', '', k)):
    letters.setdefault(re.sub(r'[^a-z]', '', k)[:1].upper() or '#', []).append(rows[k])
for ch in sorted(letters):
    out += [f'## {ch}', '', '| English | Meaning / Spanish hint | Example | Topic |',
            '|---------|------------------------|---------|-------|']
    out += [f'| **{en}** | {m} | *{ex}* | [{t}](./{rel}) |' for en, m, ex, t, rel in letters[ch]]
    out.append('')
(ROOT / 'glossary.mdx').write_text('\n'.join(out), encoding='utf-8')
print(f'glossary.mdx: {len(rows)} entries')

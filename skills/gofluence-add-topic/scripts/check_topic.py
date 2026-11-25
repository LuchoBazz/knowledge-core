#!/usr/bin/env python3
"""Validate GoFluence topic docs: python3 -I check_topic.py <file.mdx> [...]. Exit 1 on any problem."""
import re, sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
KEYS = ['title', 'description', 'sidebar_label', 'sidebar_position', 'keywords', 'tags']
SECTIONS = ['Learning objective', 'Key concepts', 'Vocabulary & useful phrases',
            'Examples in a workplace context', 'Common mistakes', 'Practice exercises',
            'Answer key', 'Quick recap', 'Review checklist']
known_tags = set(re.findall(r'^([a-z0-9-]+):\s*$', (REPO / 'docs/tags.yml').read_text(), re.M))

def check(path):
    s = Path(path).read_text(encoding='utf-8')
    errs = []
    fm = re.match(r'---\n(.*?)\n---\n', s, re.S)
    if not fm:
        return ['missing front matter']
    fm = fm.group(1)
    for k in KEYS:
        if not re.search(rf'^{k}:', fm, re.M):
            errs.append(f'front matter: missing {k}')
    t = re.search(r'^tags:\s*\[(.*?)\]', fm, re.M)
    for tag in [x.strip() for x in t.group(1).split(',')] if t else []:
        if tag not in known_tags:
            errs.append(f'tag not in docs/tags.yml: {tag}')
    body = re.sub(r'```.*?```', '', s[fm.__len__():], flags=re.S)
    if len(re.findall(r'^# ', body, re.M)) != 1:
        errs.append('need exactly one H1')
    h2 = re.findall(r'^## (\d)\. (.+)$', body, re.M)
    if [(int(n), h.strip()) for n, h in h2] != list(enumerate(SECTIONS, 1)):
        errs.append(f'H2 sections must be exactly: {SECTIONS}; found {h2}')
    if '<details>' not in s:
        errs.append('answer key needs a <details> block')
    prose = re.sub(r'(?s)<VocabTable.*?/>|<Quiz.*?/>|<Dialogue.*?/>|<Flashcard.*?/>', '', body)
    prose = re.sub(r'`[^`]*`', '', prose)                    # inline code is safe
    prose = re.sub(r'(?m)^import .*$', '', prose)
    for i, line in enumerate(prose.splitlines(), 1):
        stripped = re.sub(r'</?(Tabs|TabItem|details|summary|br ?/?)[^>]*>', '', line)
        if re.search(r'[<>{}]', stripped) and not re.match(r'^\s*(>|:::)', stripped):
            errs.append(f'possible bare < > {{ }} in prose: {line.strip()[:70]}')
    return errs

bad = 0
for p in sys.argv[1:]:
    e = check(p)
    print(('FAIL ' if e else 'ok   ') + p)
    for x in e:
        print('   -', x)
    bad += bool(e)
sys.exit(1 if bad else 0)

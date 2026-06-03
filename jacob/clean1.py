# -*- coding: utf-8 -*-
import json, re, unicodedata

qs = json.load(open("pdf1_q.json", encoding="utf-8"))

def strip_parens(t):
    # remove balanced parentheticals (annotations), repeat until stable
    prev = None
    while prev != t:
        prev = t
        t = re.sub(r"\([^()]*\)", "", t)
    return t

def clean_q(t):
    t = strip_parens(t)
    t = re.sub(r"^\s*\d+[\.\)]\s*", "", t)   # leading "21. " / "9) "
    t = re.sub(r"\s+", " ", t).strip()
    return t

NOISE_OPTS = {"...", "…", "atd...", "atd", "…?", "..", ".", "atd…"}

def clean_opt(t):
    t = strip_parens(t)
    # cut at annotation separators
    for sep in [" – ", " — ", " -- "]:
        i = t.find(sep)
        if i != -1:
            t = t[:i]
    # cut at "Skripta" / "dle skript" markers
    for marker in ["Skripta:", "Skripta", " dle ", "Dle "]:
        i = t.find(marker)
        if i > 0:
            t = t[:i]
    # cut trailing " - lowercase reasoning" (hyphen space)  -- conservative: only if remainder long
    m = re.search(r"\s-\s.*$", t)
    if m and m.start() > 0:
        head = t[:m.start()].strip()
        if len(head) >= 3:
            t = head
    t = re.sub(r"\s+", " ", t).strip()
    t = t.strip(" .,-–—").strip()
    return t

def norm_key(t):
    t = unicodedata.normalize("NFD", t)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    t = re.sub(r"[^a-z0-9 ]", "", t.lower())
    t = re.sub(r"\s+", " ", t).strip()
    return t

cleaned = []
seen = set()
for q in qs:
    qt = clean_q(q["q"])
    if len(qt) < 6:
        continue
    opts = []
    for o in q["options"]:
        ct = clean_opt(o["text"])
        if not ct or ct.lower() in NOISE_OPTS or len(ct) < 2:
            continue
        opts.append({"text": ct, "correct": o["correct"]})
    # dedup options by normalized text, keep correctness OR
    merged = {}
    order = []
    for o in opts:
        k = norm_key(o["text"])
        if k in merged:
            merged[k]["correct"] = merged[k]["correct"] or o["correct"]
        else:
            merged[k] = dict(o)
            order.append(k)
    opts = [merged[k] for k in order]
    ncorrect = sum(1 for o in opts if o["correct"])
    if len(opts) < 2 or ncorrect < 1 or ncorrect == len(opts):
        # ncorrect==len(opts): all-correct usually a parse artifact (green bleed) -> skip unless 2 opts
        if not (ncorrect == len(opts) and len(opts) >= 2 and ncorrect <= 2):
            continue
    key = norm_key(qt)
    if key in seen:
        continue
    seen.add(key)
    cleaned.append({
        "q": qt,
        "options": opts,
        "typ": "viac" if ncorrect > 1 else "jedna",
        "ncorrect": ncorrect,
        "page": q["page"],
        "version": q.get("version", ""),
    })

json.dump(cleaned, open("pdf1_clean.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# readable
buf = [f"# cleaned pdf1: {len(cleaned)} questions\n"]
for i, q in enumerate(cleaned):
    buf.append(f"--- [{i}] (p{q['page']}) typ={q['typ']}")
    buf.append("Q: " + q["q"])
    for o in q["options"]:
        buf.append(("  [x] " if o["correct"] else "  [ ] ") + o["text"])
    buf.append("")
open("pdf1_clean.txt", "w", encoding="utf-8").write("\n".join(buf))
print("cleaned questions:", len(cleaned))
print("  jedna:", sum(1 for q in cleaned if q["typ"]=="jedna"))
print("  viac: ", sum(1 for q in cleaned if q["typ"]=="viac"))

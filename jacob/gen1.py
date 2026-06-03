# -*- coding: utf-8 -*-
import json, re, unicodedata

qs = json.load(open("pdf1_clean.json", encoding="utf-8"))

def norm_key(t):
    t = unicodedata.normalize("NFD", t)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", t.lower())).strip()

# questions to drop (parse-broken / merged / low quality) -- matched by substring of norm_key
DROP = [
    "co zpusobuje metastatickou kalcifikaci",
    "nejaky strevni zanet s nalepmi",
    "nasel se utvar na slezine",
    "nejdulezitejsi vlastnosti urcujici zda je ci neni epitelovy",
    "co plati pre amyloidozu",
    "nedelici se bunky ztraceji po skonceni",
    "otazka na atopickou dermatitidu co neplati",
    "ceho je histamin mediator",
]

CUT_MARKERS = ["Skripta", "Halouzka", "http", "www", "://", ",,", "„", "Ne!!", "!!",
               " – ", " — ", " -- ", "…"]
NOISE_RE = re.compile(r"[✨😀😊🙂]|lol|jup[ií]|dementny|chceš se prát|kterej kokot")

DROP_OPT_PREFIX = ("lepší by byla", "dala jsem", "pozor", "skripta", "halouzka")

def cut_option(t):
    # cut at a merged next-question number like " 28. Co" (number + Capital letter)
    m = re.search(r"\s\d{1,3}[\.\)]\s+[A-ZÁ-Ž]", t)
    if m:
        t = t[:m.start()]
    # cut at "? Capital" -> an annotation sentence starts (keep "rohovinová? ložiska")
    m = re.search(r"\?\s+[A-ZÁ-Ž]", t)
    if m:
        t = t[:m.start()]
    for mk in CUT_MARKERS:
        i = t.find(mk)
        if i > 0:
            t = t[:i]
    # trailing " - lowercase reasoning"
    m = re.search(r"\s-\s.*$", t)
    if m and m.start() >= 3:
        t = t[:m.start()]
    t = re.sub(r"\s+", " ", t).strip().strip(" .,-–—:;").strip()
    if t.endswith("?"):
        t = t[:-1].strip()
    return t

def clean_q(t):
    t = re.sub(r"^\s*\d{1,2}:\d{2}\s*", "", t)          # leading time 9:00
    t = re.sub(r"^\s*\d+[\.\)]\s*", "", t)              # leading number
    # cut reasoning tails
    t = re.split(r"\s[–-]\s\(=|\s-\s\(=", t)[0]
    t = re.sub(r",\s*(myslím|asi|nevím|teď nevím|nebo tak|však|alebo)\b.*$", "", t, flags=re.I)
    t = t.replace("(", "").replace(")", "") if t.count("(") != t.count(")") else t
    t = re.sub(r"\s+", " ", t).strip()
    return t

final = []
for q in qs:
    qt = clean_q(q["q"])
    if any(d in norm_key(qt) for d in DROP):
        continue
    opts = []
    bad = False
    for o in q["options"]:
        if NOISE_RE.search(o["text"]):
            continue
        if o["text"].strip().lower().startswith(DROP_OPT_PREFIX) and not o["correct"]:
            continue
        ct = cut_option(o["text"])
        if not ct or len(ct) < 2:
            continue
        if len(ct) > 110:
            if o["correct"]:
                bad = True   # a correct answer is still a merged blob -> distrust whole Q
                break
            else:
                continue     # drop overly long wrong distractor
        opts.append({"text": ct, "correct": o["correct"]})
    if bad:
        continue
    # de-dup options
    merged, order = {}, []
    for o in opts:
        k = norm_key(o["text"])
        if not k:
            continue
        if k in merged:
            merged[k]["correct"] = merged[k]["correct"] or o["correct"]
        else:
            merged[k] = dict(o); order.append(k)
    opts = [merged[k] for k in order]
    ncorrect = sum(1 for o in opts if o["correct"])
    if len(opts) < 2 or ncorrect < 1 or ncorrect == len(opts):
        continue
    final.append({"q": qt, "options": opts,
                  "typ": "viac" if ncorrect > 1 else "jedna",
                  "ncorrect": ncorrect, "page": q["page"]})

# de-dup whole questions by normalized key
seen, dedup = set(), []
for q in final:
    k = norm_key(q["q"])
    if k in seen:
        continue
    seen.add(k); dedup.append(q)
final = dedup

json.dump(final, open("pdf1_final.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
buf = [f"# FINAL pdf1: {len(final)} questions  (jedna={sum(1 for q in final if q['typ']=='jedna')}, viac={sum(1 for q in final if q['typ']=='viac')})\n"]
for i, q in enumerate(final):
    buf.append(f"--- [{i}] (p{q['page']}) typ={q['typ']}")
    buf.append("Q: " + q["q"])
    for o in q["options"]:
        buf.append(("  [x] " if o["correct"] else "  [ ] ") + o["text"])
    buf.append("")
open("pdf1_final.txt", "w", encoding="utf-8").write("\n".join(buf))
print(buf[0])

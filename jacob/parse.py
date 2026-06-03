# -*- coding: utf-8 -*-
import sys, json, re

src = sys.argv[1]      # struct json
mode = sys.argv[2]     # "pdf1" or "pdf2"
out = sys.argv[3]

lines = json.load(open(src, encoding="utf-8"))

def clean(t):
    t = re.sub(r"\s+", " ", t).strip()
    return t

questions = []

if mode == "pdf1":
    # Numbered bold question; options are '-' lines (dash alone), text follows.
    cur = None
    version = "?"
    opt = None  # current option being built {text, green}
    def flush_opt():
        global opt
        if cur is not None and opt is not None:
            txt = clean(opt["text"])
            if txt:
                cur["options"].append({"text": txt, "correct": opt["green"]})
        opt = None
    def flush_q():
        global cur
        flush_opt()
        if cur is not None and cur["options"]:
            questions.append(cur)
        cur = None
    for ln in lines:
        text = ln["text"].strip()
        m = re.match(r"^(\d+)\.\s*(.*)$", text)
        if m and ("verze" in text.lower()[:14] or re.match(r"^\d+\.\s*verze", text.lower())):
            version = text
            continue
        if m and ln["bold"]:
            # new question
            flush_q()
            cur = {"num": int(m.group(1)), "version": version,
                   "q": m.group(2), "options": [], "page": ln["page"]}
            continue
        if cur is None:
            continue
        # are we still in question text (before first option)?
        is_dash = text == "-" or text.startswith("- ") or text == "•"
        if is_dash and not cur["options"] and opt is None:
            # first option dash
            flush_opt()
            opt = {"text": text.lstrip("-• ").strip(), "green": bool(ln["green"]) and ln["green"] != "-"}
            continue
        if is_dash:
            flush_opt()
            opt = {"text": text.lstrip("-• ").strip(), "green": bool(ln["green"]) and ln["green"] != "-"}
            continue
        if opt is not None:
            # continuation of option text
            opt["text"] += " " + text
            if ln["green"]:
                opt["green"] = True
        else:
            # continuation of question text (bold continuation)
            if ln["bold"] and not cur["options"]:
                cur["q"] += " " + text
    flush_q()

else:  # pdf2
    # Bold question lines (not starting with '-'); options start with '-'.
    cur = None
    def flush_q():
        global cur
        if cur is not None and cur["options"]:
            questions.append(cur)
        cur = None
    for ln in lines:
        text = ln["text"].strip()
        low = text.lower()
        is_opt = text.startswith("-")
        if is_opt:
            if cur is None:
                continue
            otext = clean(text.lstrip("-").strip())
            if otext:
                cur["options"].append({"text": otext, "correct": bool(ln["green"])})
            continue
        # not an option line
        if ln["bold"] and len(text) > 12 and not text.startswith("/"):
            # treat as a new question header
            flush_q()
            cur = {"q": text, "options": [], "page": ln["page"]}
        # else: ignore noise lines
    flush_q()

# post: mark typ
for q in questions:
    ncorrect = sum(1 for o in q["options"] if o["correct"])
    q["ncorrect"] = ncorrect
    q["typ"] = "viac" if ncorrect > 1 else "jedna"

json.dump(questions, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# stats
total = len(questions)
withcorrect = sum(1 for q in questions if q["ncorrect"] >= 1)
multi = sum(1 for q in questions if q["ncorrect"] > 1)
nocorrect = sum(1 for q in questions if q["ncorrect"] == 0)
print(f"mode={mode} total_questions={total}")
print(f"  with >=1 correct: {withcorrect}")
print(f"  multi-correct:    {multi}")
print(f"  ZERO correct:     {nocorrect}")
import collections
optdist = collections.Counter(len(q["options"]) for q in questions)
print("  option-count distribution:", dict(sorted(optdist.items())))

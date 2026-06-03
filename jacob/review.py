# -*- coding: utf-8 -*-
import sys, json
qs = json.load(open(sys.argv[1], encoding="utf-8"))
outfile = sys.argv[2]
good = [q for q in qs if q["ncorrect"] >= 1 and 2 <= len(q["options"]) <= 7]
buf = []
buf.append(f"# good candidates: {len(good)} (of {len(qs)})\n")
for i, q in enumerate(good):
    ver = q.get("version", "")
    buf.append(f"--- [{i}] (p{q['page']}) {ver} typ={q['typ']}")
    buf.append("Q: " + q["q"])
    for o in q["options"]:
        mark = "  [x]" if o["correct"] else "  [ ]"
        buf.append(f"{mark} {o['text']}")
    buf.append("")
open(outfile, "w", encoding="utf-8").write("\n".join(buf))
print("wrote", outfile, "with", len(good), "good candidates")

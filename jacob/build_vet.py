# -*- coding: utf-8 -*-
import json, re, os

OUT = os.path.join("..", "Veterina.js")

def finalize_text(t):
    return re.sub(r"\s+", " ", t).strip()

questions = []
issues = []

# --- PDF1: Patmorfa 2024 (auto-cleaned) ---
p1 = json.load(open("pdf1_final.json", encoding="utf-8"))
for i, q in enumerate(p1, start=1):
    opts = [finalize_text(o["text"]) for o in q["options"]]
    spravne = [j for j, o in enumerate(q["options"]) if o["correct"]]
    if len(opts) < 2 or not spravne or len(spravne) == len(opts):
        issues.append(("2024", i, q["q"], "bad opts/spravne"))
        continue
    questions.append({
        "id": f"vet2024-{i:03d}",
        "tema": "Patmorfa 2024",
        "typ": "viac" if len(spravne) > 1 else "jedna",
        "otazka": finalize_text(q["q"]),
        "moznosti": opts,
        "spravne": spravne,
        "vysvetlenie": "",
        "prezentacia": "Patmorfa 2024",
        "subtema": "Patmorfa 2024",
    })

# --- PDF2: Patmorfa leto 2025 (hand-curated) ---
p2 = json.load(open("pdf2_manual.json", encoding="utf-8"))
for i, q in enumerate(p2, start=1):
    opts = [finalize_text(m[0]) for m in q["moznosti"]]
    spravne = [j for j, m in enumerate(q["moznosti"]) if m[1]]
    if len(opts) < 2 or not spravne:
        issues.append(("2025", i, q["otazka"], "bad opts/spravne"))
        continue
    questions.append({
        "id": f"vet2025-{i:03d}",
        "tema": "Patmorfa léto 2025",
        "typ": "viac" if len(spravne) > 1 else "jedna",
        "otazka": finalize_text(q["otazka"]),
        "moznosti": opts,
        "spravne": spravne,
        "vysvetlenie": "",
        "prezentacia": "Patmorfa léto 2025",
        "subtema": "Patmorfa léto 2025",
    })

body = json.dumps(questions, ensure_ascii=False, indent=2)
header = (
    "// Veterina - Patologicka morfologie (Patmorfa)\n"
    "// Dva testy zostavene zo zbierok otazok:\n"
    "//   * \"Patmorfa 2024\"      (Patmorfa 2024 sesbirane.pdf)\n"
    "//   * \"Patmorfa leto 2025\" (Sesbirane patmorfa - leto 2025)\n"
    "// Spravne odpovede su prevzate zo zeleno oznacenych moznosti v povodnych PDF.\n"
    "// 'typ: \"viac\"' = otazka s viacerymi spravnymi odpovedami.\n\n"
)
with open(OUT, "w", encoding="utf-8") as f:
    f.write(header)
    f.write("const veterinaOtazky = " + body + ";\n")

# stats
n2024 = sum(1 for q in questions if q["prezentacia"] == "Patmorfa 2024")
n2025 = sum(1 for q in questions if q["prezentacia"] == "Patmorfa léto 2025")
viac = sum(1 for q in questions if q["typ"] == "viac")
print(f"wrote {OUT}")
print(f"  Patmorfa 2024:      {n2024}")
print(f"  Patmorfa leto 2025: {n2025}")
print(f"  total: {len(questions)}   (viac={viac}, jedna={len(questions)-viac})")
if issues:
    print("ISSUES:")
    for it in issues:
        print("  ", it)

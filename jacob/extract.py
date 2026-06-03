# -*- coding: utf-8 -*-
"""Extract questions from the Patmorfa PDFs preserving green=correct + bold=question."""
import sys, json
import fitz  # PyMuPDF

path = sys.argv[1]
out = sys.argv[2]

def is_green(col):
    r = (col >> 16) & 0xFF
    g = (col >> 8) & 0xFF
    b = col & 0xFF
    return g > r + 20 and g > b + 20 and g > 90

def is_bold(span):
    if span.get("flags", 0) & 16:  # bold flag
        return True
    fn = span.get("font", "").lower()
    return "bold" in fn or "black" in fn or "semibold" in fn

doc = fitz.open(path)
lines_out = []
for pno in range(doc.page_count):
    page = doc[pno]
    d = page.get_text("dict")
    # gather blocks sorted top-to-bottom, left-to-right
    blocks = [b for b in d.get("blocks", []) if b.get("type", 0) == 0]
    blocks.sort(key=lambda b: (round(b["bbox"][1]), round(b["bbox"][0])))
    for block in blocks:
        for line in block.get("lines", []):
            parts = []
            line_text = ""
            any_bold = False
            green_text = ""
            for span in line.get("spans", []):
                txt = span.get("text", "")
                if not txt:
                    continue
                line_text += txt
                green = is_green(span.get("color", 0))
                bold = is_bold(span)
                if green:
                    green_text += txt
                if bold:
                    any_bold = True
                parts.append({"t": txt, "green": green, "bold": bold})
            if line_text.strip():
                lines_out.append({
                    "page": pno + 1,
                    "text": line_text.rstrip(),
                    "bold": any_bold,
                    "green": green_text.strip(),
                    "x": round(line["bbox"][0]),
                })

with open(out, "w", encoding="utf-8") as f:
    json.dump(lines_out, f, ensure_ascii=False, indent=0)

# also write a human-readable version
with open(out.replace(".json", ".txt"), "w", encoding="utf-8") as f:
    for ln in lines_out:
        marker = ""
        if ln["bold"]:
            marker += "**"
        prefix = f"[p{ln['page']}]{marker} "
        text = ln["text"]
        if ln["green"]:
            text = text + "   <<<GREEN: " + ln["green"] + ">>>"
        f.write(prefix + text + "\n")

print("lines:", len(lines_out))
print("pages:", doc.page_count)
greens = sum(1 for l in lines_out if l["green"])
bolds = sum(1 for l in lines_out if l["bold"])
print("lines with green:", greens, "  bold lines:", bolds)

# -*- coding: utf-8 -*-
import sys, collections
import fitz  # PyMuPDF

path = sys.argv[1]
maxpages = int(sys.argv[2]) if len(sys.argv) > 2 else 3

doc = fitz.open(path)
print("pages:", doc.page_count)

color_counts = collections.Counter()
samples = collections.defaultdict(list)

for pno in range(min(maxpages, doc.page_count)):
    page = doc[pno]
    d = page.get_text("dict")
    for block in d.get("blocks", []):
        for line in block.get("lines", []):
            for span in line.get("spans", []):
                col = span.get("color", 0)
                txt = span.get("text", "").strip()
                if not txt:
                    continue
                color_counts[col] += 1
                if len(samples[col]) < 6:
                    samples[col].append(txt[:60])

def hx(c):
    return "#%06x" % (c & 0xFFFFFF)

print("\n=== distinct colors (count) ===")
for col, cnt in color_counts.most_common():
    r = (col >> 16) & 0xFF
    g = (col >> 8) & 0xFF
    b = col & 0xFF
    print(f"{hx(col)}  rgb=({r:3d},{g:3d},{b:3d})  count={cnt}")
    for s in samples[col]:
        print("      |", s)

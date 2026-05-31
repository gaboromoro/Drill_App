// Exam Mode - editovanie spravnych odpovedi.
// Edity sa ukladaju do localStorage (prezivaju reload) a navyse sa best-effort
// zapisu priamo do zdrojovych .js suborov cez File System Access API (Chrome/Edge),
// takze sa prepisu "do kodu navzdy".

(function () {
  "use strict";

  const KLUC_LS = "helExamEdits";

  function nacitajEdity() {
    try {
      return JSON.parse(localStorage.getItem(KLUC_LS) || "{}") || {};
    } catch (e) {
      return {};
    }
  }

  const edity = nacitajEdity();

  function ulozEdity() {
    try {
      localStorage.setItem(KLUC_LS, JSON.stringify(edity));
    } catch (e) {
      /* localStorage moze byt nedostupny */
    }
  }

  // Vrati editovany text ak existuje, inak povodny.
  window.aplikujExamEditText = function (id, povodny) {
    return id && Object.prototype.hasOwnProperty.call(edity, id) ? edity[id] : povodny;
  };

  // ---- Mutacia zivych dat (aby zmenu videl aj Crack Mode a dalsie renderovanie) ----
  function zivePolia() {
    const polia = [];
    if (typeof helOtazky !== "undefined" && Array.isArray(helOtazky)) polia.push(helOtazky);
    if (typeof czsOtazky !== "undefined" && Array.isArray(czsOtazky)) polia.push(czsOtazky);
    return polia;
  }

  function mutujZivuOdpoved(id, text) {
    zivePolia().forEach((pole) => {
      pole.forEach((o) => {
        if (o && o.id === id) {
          if (o.crackPair) o.crackPair.pravda = text;
          o.otazka = text;
          o.vysvetlenie = "Spravny statement: " + text;
        }
      });
    });
  }

  // Po nacitani aplikuj ulozene edity na zive data (kvoli Crack Mode po reloade).
  document.addEventListener("DOMContentLoaded", function () {
    Object.keys(edity).forEach((id) => mutujZivuOdpoved(id, edity[id]));
  });

  // ---- Zapis do zdrojoveho .js suboru (File System Access API) ----
  let adresarHandle = null;

  function suboryPreId(id) {
    if (typeof id !== "string") return [];
    if (id.startsWith("HEL 1.")) return ["hel1-crack.js"];
    if (id.startsWith("HEL 2.")) return ["hel2-crack.js"];
    if (id.startsWith("HEL 3.")) return ["hel3-crack.js"];
    if (id.startsWith("HEL 4.")) return ["hel4-zvysne.js", "hel-otazky.js"];
    if (id.startsWith("HEL 5.")) return ["hel5-zvysne.js", "hel-otazky.js"];
    return [];
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Nahradi hodnotu pravda: "..." pre dany id v texte suboru.
  function nahradPravdu(text, id, nova) {
    const re = new RegExp(
      '(id:\\s*"' + escapeRegExp(id) + '"[\\s\\S]*?pravda:\\s*)"(?:\\\\.|[^"\\\\])*"'
    );
    if (!re.test(text)) return null;
    return text.replace(re, function (m, p1) {
      return p1 + JSON.stringify(nova);
    });
  }

  async function ziskajAdresar() {
    if (adresarHandle) return adresarHandle;
    if (!window.showDirectoryPicker) return null;
    try {
      adresarHandle = await window.showDirectoryPicker({ mode: "readwrite" });
      return adresarHandle;
    } catch (e) {
      return null;
    }
  }

  async function zapisDoSuboru(id, nova) {
    const dir = await ziskajAdresar();
    if (!dir) return false;
    const kandidati = suboryPreId(id);
    for (const meno of kandidati) {
      let fh;
      try {
        fh = await dir.getFileHandle(meno);
      } catch (e) {
        continue;
      }
      try {
        const file = await fh.getFile();
        const txt = await file.text();
        const novy = nahradPravdu(txt, id, nova);
        if (novy && novy !== txt) {
          const w = await fh.createWritable();
          await w.write(novy);
          await w.close();
          return true;
        }
      } catch (e) {
        /* skus dalsi subor */
      }
    }
    return false;
  }

  // ---- Edit UI ----
  // Prida tlacidlo "Edit" do praveho horneho rohu odpovede.
  window.pridajExamEditUI = function (obal, otazka) {
    if (!obal) return;

    const tlacidlo = document.createElement("button");
    tlacidlo.type = "button";
    tlacidlo.className = "exam-edit-btn";
    tlacidlo.textContent = "Edit";
    obal.appendChild(tlacidlo);

    let stav = null; // null = zobrazenie, objekt = editacia

    function ukoncenie() {
      if (stav) {
        stav.uvolni();
        stav = null;
      }
    }

    function spustiEdit() {
      const polozky = [...obal.querySelectorAll("li[data-edit-id]")];
      const zaznamy = polozky.map((li) => {
        const id = li.dataset.editId;
        const povodny = li.textContent;
        const pole = document.createElement("textarea");
        pole.className = "exam-edit-pole";
        pole.value = povodny;
        pole.rows = Math.max(2, Math.ceil(povodny.length / 70));
        li.textContent = "";
        li.appendChild(pole);
        return { id, li, pole, povodny };
      });

      const lista = document.createElement("div");
      lista.className = "exam-edit-akcie";
      const ulozit = document.createElement("button");
      ulozit.type = "button";
      ulozit.className = "exam-edit-ulozit";
      ulozit.textContent = "Ulozit";
      const zrusit = document.createElement("button");
      zrusit.type = "button";
      zrusit.className = "exam-edit-zrusit";
      zrusit.textContent = "Zrusit";
      const stavText = document.createElement("span");
      stavText.className = "exam-edit-stav";
      lista.append(ulozit, zrusit, stavText);
      obal.appendChild(lista);

      tlacidlo.style.display = "none";

      function obnovText() {
        zaznamy.forEach((z) => {
          z.li.textContent = window.aplikujExamEditText(z.id, z.povodny);
        });
      }

      stav = {
        uvolni() {
          lista.remove();
          tlacidlo.style.display = "";
          obnovText();
        }
      };

      zrusit.addEventListener("click", ukoncenie);

      ulozit.addEventListener("click", async function () {
        const zmenene = zaznamy.filter((z) => z.pole.value !== z.povodny);
        zmenene.forEach((z) => {
          const novy = z.pole.value.trim();
          edity[z.id] = novy;
          mutujZivuOdpoved(z.id, novy);
          z.povodny = novy;
        });
        ulozEdity();

        // ukonci editaciu (zobrazi novy text)
        ukoncenie();

        if (zmenene.length === 0) return;

        // best-effort zapis do zdrojoveho kodu
        try {
          let okPocet = 0;
          for (const z of zmenene) {
            const ok = await zapisDoSuboru(z.id, z.povodny);
            if (ok) okPocet++;
          }
          if (!window.showDirectoryPicker) {
            poznamka(obal, "Ulozene (localStorage). Pre zapis do kodu pouzi Chrome/Edge.");
          } else if (okPocet === zmenene.length) {
            poznamka(obal, "Ulozene do kodu.");
          } else if (okPocet > 0) {
            poznamka(obal, "Ulozene (cast do kodu, zvysok v localStorage).");
          } else {
            poznamka(obal, "Ulozene (localStorage). Zapis do suboru sa nepodaril.");
          }
        } catch (e) {
          poznamka(obal, "Ulozene (localStorage).");
        }
      });

      zaznamy[0] && zaznamy[0].pole.focus();
    }

    tlacidlo.addEventListener("click", function () {
      if (stav) {
        ukoncenie();
      } else {
        spustiEdit();
      }
    });
  };

  function poznamka(obal, text) {
    let p = obal.querySelector(".exam-edit-poznamka");
    if (!p) {
      p = document.createElement("div");
      p.className = "exam-edit-poznamka";
      obal.appendChild(p);
    }
    p.textContent = text;
    window.clearTimeout(p._t);
    p._t = window.setTimeout(() => p.remove(), 4000);
  }
})();

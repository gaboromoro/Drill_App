// Preorganizovanie CZS otazok do 10 okruhov podla SZZ (akad. rok 2025/2026).
// Bezi po nacitani vsetkych czs*.js + vzorce-crack.js (a pred app.js).
//
// Kazdej vypracovanej otazke prepise `prezentacia` na jej SZZ okruh.
// Otazky okruhu "Vzorce" ostavaju v "Vzorce" a SZZ okruh dostanu navyse cez
// pole `okruhy` (cross-cutting clenstvo - vid ziskajOkruhyOtazky v app.js).
// Podokruh (`subtema` = oblast / podoblast) ostava zachovany.
//
// Mapovanie je centralizovane tu, takze ho mozno lahko upravit/vypnut bez
// zasahu do jednotlivych datovych suborov.

(function priradSzzOkruhy() {
  if (typeof czsOtazky === "undefined" || !Array.isArray(czsOtazky)) {
    return;
  }

  const SZZ = {
    1: "1. Diskretne a cislicove signaly",
    2: "2. Klasifikacia signalov",
    3: "3. Korelacia",
    4: "4. Diskretne systemy",
    5: "5. LTI systemy",
    6: "6. FIR a IIR systemy",
    7: "7. Transformacia Z",
    8: "8. Fourierova transformacia",
    9: "9. Navrh cislicovych filtrov",
    10: "10. Casovo-frekvencna analyza a FFT"
  };

  // Vzorce sa mapuju podla svojej temy (druha cast subtema "Vzorce / <tema>").
  const VZORCE_TEMA = {
    "Kvantizacia": 1,
    "Vzorkovanie a frekvencia": 1,
    "Parna a neparna zlozka": 2,
    "Energia a vykon": 2,
    "Korelacia": 3,
    "Konvolucia a LTI": 5,
    "Z-transformacia": 7,
    "DTFT a DFT": 8,
    "Filtre a faza": 9,
    "STFT a okna": 10,
    "FFT": 10
  };

  // CZS 1 ma jednotnu oblast "Zaklady" - rozlisujeme podla podoblasti.
  const CZS1_DO_SZZ2 = ["Energia a vykon", "Periodicita diskretneho signalu", "Komplexna exponenciala"];

  // Skutocne (nie len podobne) duplikaty - rovnaky obsah inymi slovami. V crack
  // mode ostavaju, do exam mode ide len jedna verzia (ponechana je presnejsia).
  // Sem mozno doplnit dalsie ID, ak sa objavia opakovania.
  const EXAM_SKIP = new Set([
    "CZS 5. DTFT vlastnosti 009",   // Parseval (slovne) - ponechana formula "DTFT parseval 001"
    "CZS 5. Mini DFT impulz 001"    // impulz->konst. spektrum - ponechana "DFT vypocet konkretny 001"
  ]);

  function szzCislo(otazka) {
    const casti = String(otazka.subtema || "").split("/").map((c) => c.trim());
    const oblast = casti[0] || "";
    const podoblast = casti[1] || "";

    switch (otazka.prezentacia) {
      case "CZS 4": return 7;
      case "CZS 5":
      case "Teoria 5": return 8;
      case "CZS 6":
      case "Teoria 6": return 9;
      case "CZS 7":
      case "CZS 8": return 10;
      case "CZS 0":
        return (oblast === "Parna a neparna zlozka" || oblast === "Viacrozmerne signaly") ? 2 : 1;
      case "CZS 1":
        return CZS1_DO_SZZ2.includes(podoblast) ? 2 : 1;
      case "CZS 2":
        return (oblast === "Prevodne funkcie a popis systemu" || oblast === "Klasifikacia systemov") ? 4 : 3;
      case "CZS 3":
        return (oblast === "FIR a IIR systemy") ? 6 : 5;
      case "Vzorce":
        return VZORCE_TEMA[podoblast] || null;
      default:
        return null;
    }
  }

  czsOtazky.forEach((otazka) => {
    if (EXAM_SKIP.has(otazka.id)) {
      otazka.examSkip = true;
    }
    const cislo = szzCislo(otazka);
    if (!cislo) {
      return;
    }
    const nazov = SZZ[cislo];
    if (otazka.prezentacia === "Vzorce") {
      // ostava v "Vzorce", navyse je clenom svojho SZZ okruhu
      otazka.okruhy = [nazov];
    } else {
      otazka.prezentacia = nazov;
    }
  });
})();

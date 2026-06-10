// Preorganizovanie CZS otazok do 10 okruhov podla SZZ (akad. rok 2025/2026).
// Bezi po nacitani vsetkych czs*.js + vzorce-crack.js (a pred app.js).
//
// Kazdej vypracovanej otazke prepise `prezentacia` na jej SZZ okruh.
// Otazky okruhu "Vzorce" ostavaju v "Vzorce" a SZZ okruh dostanu navyse cez
// pole `okruhy` (cross-cutting clenstvo - vid ziskajOkruhyOtazky v app.js).
// Podokruh (`subtema` = oblast / podoblast) ostava zachovany.
//
// Temy, ktore SZZ otazky NEpytaju, idu do specialnych okruhov:
//   "Mimo SZZ"  - teoria nad ramec SZZ otazok (blokova schema, hrebenovy filter...)
//   "Vypocty"   - vypoctove drily (ustna SZZ vypocty nepyta)
// Oba su drillovatelne v crack mode, ale exam mode ich vynechava (vid
// ziskajExamOtazky v app.js - rovnaky princip ako okruh "Vzorce").
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

  const MIMO_SZZ = "Mimo SZZ";
  const VYPOCTY = "Vypocty";

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

  // Teoria, ktoru SZZ otazky 2025/2026 nepytaju -> okruh "Mimo SZZ";
  // vypoctove drily -> okruh "Vypocty". Matchuje sa oblast / podoblast.
  function specialnyOkruh(prezentacia, oblast, podoblast) {
    if (prezentacia === "Vzorce") {
      return null;
    }

    // --- Mimo SZZ (teoria navyse) ---
    // SZZ 1 nepyta blokovu schemu spracovania ani ulohy spracovania.
    if (podoblast === "Blokova schema spracovania" || podoblast === "Ulohy spracovania") return MIMO_SZZ;
    // SZZ 7 pyta len linearitu, posun, nasobenie exponencialou a konvolucny teorem.
    if (podoblast === "Veta o pociatocnej hodnote") return MIMO_SZZ;
    if (podoblast.includes("nasobenie postupnostou")) return MIMO_SZZ;
    // SZZ 8 zacina normalizovanou frekvenciou a DTFT - prehlad FS/FT/DTFS nepyta.
    if (podoblast === "Vyber transformacie") return MIMO_SZZ;
    // SZZ 8 pyta len impulznu charakteristiku idealnej DP, nie jej FIR/IIR aproximacie.
    if (podoblast === "Aproximacie FIR a IIR") return MIMO_SZZ;
    // SZZ 9 menuje DP/HP/PP/PZ, rezonator a all-pass - hrebenovy a priemerovaci nie.
    if (oblast === "Hrebenovy filter" || oblast === "Priemerovaci filter") return MIMO_SZZ;
    // SZZ 9 pyta realizacie IIR filtrov; FIR struktura je navyse.
    if (oblast === "Realizacie filtrov" && podoblast === "FIR struktura") return MIMO_SZZ;

    // --- Vypocty (ustna SZZ vypocty nepyta) ---
    // Pozn.: rucny vypocet konvolucie ostava v SZZ 5 - "vypocet" je tam pytany.
    if (oblast === "Komplexny priklad") return VYPOCTY;
    if (podoblast === "Vypocty" || podoblast === "Mini priklady") return VYPOCTY;
    if (oblast === "Korelacia" && podoblast === "Rucny vypocet") return VYPOCTY;

    return null;
  }

  function szzCislo(otazka, oblast, podoblast) {
    switch (otazka.prezentacia) {
      case "CZS 4": return 7;
      case "CZS 5":
      case "Teoria 5":
        // DP/HP/PP/PZ prehlad pyta SZZ 9 (navrh filtrov), nie SZZ 8.
        return (podoblast === "Kmitoctovo selektivne filtre") ? 9 : 8;
      case "CZS 6":
      case "Teoria 6": return 9;
      case "CZS 7":
      case "CZS 8":
        // Parsevalov teorem pyta SZZ 8 (vlastnosti Fourierovej transformacie).
        return (oblast === "Parsevalov teorem") ? 8 : 10;
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

    const casti = String(otazka.subtema || "").split("/").map((c) => c.trim());
    const oblast = casti[0] || "";
    const podoblast = casti[1] || "";

    // Temy mimo SZZ otazok a vypoctove drily -> specialne okruhy.
    const specialny = specialnyOkruh(otazka.prezentacia, oblast, podoblast);
    if (specialny) {
      otazka.prezentacia = specialny;
      return;
    }

    const cislo = szzCislo(otazka, oblast, podoblast);
    if (!cislo) {
      return;
    }
    const nazov = SZZ[cislo];
    if (otazka.prezentacia === "Vzorce") {
      // ostava v "Vzorce", navyse je clenom svojho SZZ okruhu
      otazka.okruhy = [nazov];
    } else {
      otazka.prezentacia = nazov;
      // Stavovy popis pyta SZZ 4 aj SZZ 6 - cross-list do okruhu 6.
      if (oblast === "Prevodne funkcie a popis systemu" && podoblast === "Stavovy popis") {
        otazka.okruhy = [SZZ[6]];
      }
    }
  });
})();

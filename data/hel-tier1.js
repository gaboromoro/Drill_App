// Agregovany okruh "HEL TIER 1" (vysoko-yield podokruhy na rychly drill pred skuskou).
// Princip: existujucim crack polozkam pridame DALSIE clenstvo v okruhu "HEL TIER 1"
// cez pole `okruhy`. Povodny okruh (prezentacia) zostava nedotknuty - polozky sa teda
// stale zobrazuju aj vo svojich povodnych okruhoch (HEL Skuska 1, 2, 4, 5, 7).
// Tento subor sa musi nacitat AZ PO vsetkych crack suboroch (po naplneni helOtazky).
(function () {
  if (typeof helOtazky === "undefined" || !Array.isArray(helOtazky)) {
    return;
  }

  const TIER1 = "HEL TIER 1";

  // Cele okruhy, ktore patria do TIER 1 (vsetky ich crack polozky).
  const celeOkruhy = new Set([
    "HEL Skuska 7", // MIDI - kompletny okruh
    "HEL Skuska 8"  // Ovladace - kompletny okruh
  ]);

  // Konkretne oblasti. Kluc = "prezentacia::oblast", kde oblast je prva cast
  // subtemy pred " / " (tak ako ju stavaju crack mapy).
  const oblasti = new Set([
    // HEL 1 - Analogove syntezy
    "HEL Skuska 1::Aditivna a vektorova synteza",
    "HEL Skuska 1::Oscilatory a priebehy",
    "HEL Skuska 1::Subtraktivna synteza",
    "HEL Skuska 1::Modulacne metody",
    // HEL 2 - Analogove syntezatory
    "HEL Skuska 2::Riadiace signaly a prepojenie modulov",
    "HEL Skuska 2::Riadiace obvody",
    // HEL 4 - Digitalne syntezy
    "HEL Skuska 4::Tabulkove metody",
    "HEL Skuska 4::Zmena vysky tonu",
    "HEL Skuska 4::Karplus-Strong",
    // HEL 5 - Digitalne nastroje
    "HEL Skuska 5::Sampler",
    "HEL Skuska 5::GM GS XG"
  ]);

  let pocet = 0;
  helOtazky.forEach((otazka) => {
    if (!otazka || !otazka.crackPair) {
      return; // do TIER 1 berieme len crack polozky (napajaju Crack aj Exam Mode)
    }
    const prezentacia = otazka.prezentacia;
    const oblast = String(otazka.subtema || "").split("/")[0].trim();
    const patriDoTier1 = celeOkruhy.has(prezentacia) || oblasti.has(`${prezentacia}::${oblast}`);
    if (!patriDoTier1) {
      return;
    }
    if (!Array.isArray(otazka.okruhy)) {
      otazka.okruhy = [];
    }
    if (!otazka.okruhy.includes(TIER1)) {
      otazka.okruhy.push(TIER1);
      pocet += 1;
    }
  });

  if (typeof console !== "undefined" && console.info) {
    console.info(`[HEL TIER 1] otagovanych ${pocet} crack poloziek do okruhu "${TIER1}".`);
  }
})();

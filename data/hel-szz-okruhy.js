// Preorganizovanie HEL otazok do okruhov podla SZZ (akad. rok 2025/2026).
// Bezi po nacitani vsetkych hel*-crack.js / hel*-zvysne.js, gap-fill suborov
// (hel-szz5-crack.js, hel-szz10-crack.js, hel-doplnky.js) a po hel-tier1.js,
// ale pred app.js.
//
// Kazdej crack polozke prepise `prezentacia` na jej SZZ okruh. Stare labely
// "HEL Skuska 1..10" su len ZDROJOVE - po remape uz v UI neexistuju.
// Klasicke MCQ ("HEL_01_Analogove_syntezy.pdf", "HEL High Yield") sa NEDOTYKAJU
// - ostavaju ako samostatny MCQ studijny set.
//
// Mapovanie je centralizovane tu (kluc = zdrojova prezentacia + oblast = prva
// cast subtemy pred " / "), takze ho mozno lahko doladit bez zasahu do dat.
//
// Cross-walk stare skuskove okruhy -> SZZ:
//   Skuska 1 -> SZZ 1 (aditiv/filter/subtraktiv) + SZZ 2 (modulacie/waveshaping)
//   Skuska 2 -> SZZ 3
//   Skuska 3 -> SZZ 4 (hybrid/bicie) + SZZ 9 (sekvencery/sync)
//   Skuska 4 -> SZZ 6 (tabulky/sampler) + "Ostatne" (PD/modalna/Karplus)
//   Skuska 5 -> SZZ 8 (multitembr./GM-GS-XG) + SZZ 9 (sekvencery/SMF) + SZZ 6 (sampler)
//   Skuska 6 -> SZZ 5   (gap-fill HEL_06 Digitalna realizacia)
//   Skuska 7 -> SZZ 7
//   Skuska 8 -> SZZ 8 (klaviatura) + "Ostatne" (pedale/ribbon/enkodery/...)
//   Skuska 9 -> SZZ 10  (gap-fill HEL_09 Kytarove kombo)
//   Skuska 10 -> SZZ 10 (gap-fill HEL_10 Efekty/vokoder)

(function priradHelSzzOkruhy() {
  if (typeof helOtazky === "undefined" || !Array.isArray(helOtazky)) {
    return;
  }

  const SZZ = {
    1: "1. Aditivna a subtraktivna synteza",
    2: "2. Modulacne metody a tvarovanie vlny",
    3: "3. Analogovy syntezator a Eurorack",
    4: "4. Hybridny generator a synteza bicich",
    5: "5. Digitalny riadeny oscilator",
    6: "6. Tabulkova synteza a sampler",
    7: "7. MIDI protokol a kontrolery",
    8: "8. Polyfonny/multitembrovy nastroj a klaviatura",
    9: "9. Sekvencery a MIDI subory",
    10: "10. Zvukove efekty, vokoder a kytarove kombo",
    11: "11. Ostatne (mimo SZZ)"
  };

  // --- routing per zdrojova prezentacia ---

  // Skuska 1: modulacie a tvarovanie vlny -> SZZ 2, zvysok (aditiv/oscilatory/
  // filtre/subtraktiv) -> SZZ 1.
  const S1_DO_SZZ2 = new Set(["Modulacne metody", "Tvarovanie vlny"]);

  // Skuska 3: sekvencery+sync -> SZZ 9, zvysok (hybrid/DCO/bicie) -> SZZ 4.
  const S3_DO_SZZ9 = new Set(["Sekvencery a synchronizacia"]);

  // Skuska 4: fyzikalne modelovanie a PD nie su v ziadnom SZZ okruhu -> Ostatne.
  // Zvysok (tabulky/waveshaping/sampler/multisampling/zmena vysky/smycky) -> SZZ 6.
  const S4_DO_OSTATNE = new Set(["PD synteza", "Modalna synteza", "Karplus-Strong"]);

  // Skuska 5: multitembr. + GM/GS/XG -> SZZ 8; sekvencery/MIDI sync/SMF -> SZZ 9;
  // sampler (multisampling/zmena vysky/zmena dlzky/princip) -> SZZ 6.
  const S5_DO_SZZ8 = new Set(["Multitembrovy nastroj", "GM GS XG"]);
  const S5_DO_SZZ9 = new Set([
    "Digitalny sekvencer", "Sekvencery a arpeggiator",
    "MIDI synchronizacia", "Standardne MIDI subory"
  ]);

  // Skuska 8: parametre klaviatury -> SZZ 8; zvysok ovladacov (pedale, otocne/
  // posuvne, dotykove/ribbon, snimanie, MIDI kontrolery/DAW, specialne) -> Ostatne.
  const S8_DO_SZZ8 = new Set(["Klaviatura nastroja"]);

  function szzCislo(otazka) {
    const oblast = String(otazka.subtema || "").split("/")[0].trim();
    switch (otazka.prezentacia) {
      case "HEL Skuska 1":  return S1_DO_SZZ2.has(oblast) ? 2 : 1;
      case "HEL Skuska 2":  return 3;
      case "HEL Skuska 3":  return S3_DO_SZZ9.has(oblast) ? 9 : 4;
      case "HEL Skuska 4":  return S4_DO_OSTATNE.has(oblast) ? 11 : 6;
      case "HEL Skuska 5":
        if (S5_DO_SZZ8.has(oblast)) return 8;
        if (S5_DO_SZZ9.has(oblast)) return 9;
        return 6;
      case "HEL Skuska 6":  return 5;   // gap-fill: HEL_06 Digitalna realizacia
      case "HEL Skuska 7":  return 7;
      case "HEL Skuska 8":  return S8_DO_SZZ8.has(oblast) ? 8 : 11;
      case "HEL Skuska 9":  return 10;  // gap-fill: HEL_09 Kytarove kombo
      case "HEL Skuska 10": return 10;  // gap-fill: HEL_10 Efekty/vokoder
      default:              return null; // klasicke MCQ a ine necHavame tak ako su
    }
  }

  let pocet = 0;
  helOtazky.forEach((otazka) => {
    const cislo = szzCislo(otazka);
    if (!cislo) {
      return;
    }
    otazka.prezentacia = SZZ[cislo];
    pocet += 1;
  });

  if (typeof console !== "undefined" && console.info) {
    console.info(`[HEL SZZ] preorganizovanych ${pocet} crack poloziek do SZZ okruhov.`);
  }
})();

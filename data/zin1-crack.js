// ZIN SZZ okruh 1: Smyccove (slacikove) nastroje.
// SZZ otazka: Vyjmenujte smyccove nastroje, ladeni strun a bezny rozsah. Popiste typicke
// techniky hry, intonacni a artikulacni moznosti. Uvedte smyccove nastroje pro interpretaci
// stare hudby.
// Presne 20 statementov, telegraficky styl, 4 oblasti = 4 casti otazky.
// Zdroj: prezentacia "Strunne nastroje - prednasky" + standardna organologia.

const zin1CrackData = [
  // ===== Nastroje, ladenie a rozsahy (6) =====
  {
    id: "ZIN 1. Nastroje ladenie 001",
    oblast: "Nastroje, ladenie a rozsahy",
    podoblast: "Prehlad",
    pravda: "Slacikove (smyccove) nastroje orchestra: husle, viola, violoncello, kontrabas.",
    nepravda: "Slacikove (smyccove) nastroje orchestra: husle, viola, violoncello, gitara."
  },
  {
    id: "ZIN 1. Nastroje ladenie 002",
    oblast: "Nastroje, ladenie a rozsahy",
    podoblast: "Ladenie a rozsah",
    pravda: "Husle: ladenie g, d1, a1, e2; bezny rozsah g az a3.",
    nepravda: "Husle: ladenie c, g, d1, a1; bezny rozsah g az a3."
  },
  {
    id: "ZIN 1. Nastroje ladenie 003",
    oblast: "Nastroje, ladenie a rozsahy",
    podoblast: "Ladenie a rozsah",
    pravda: "Viola: ladenie c, g, d1, a1 - kvintu pod huslami; bezny rozsah c az e3; altovy kluc.",
    nepravda: "Viola: ladenie c, g, d1, a1 - kvintu pod huslami; bezny rozsah c az e3; basovy kluc."
  },
  {
    id: "ZIN 1. Nastroje ladenie 004",
    oblast: "Nastroje, ladenie a rozsahy",
    podoblast: "Ladenie a rozsah",
    pravda: "Violoncello: ladenie C, G, d, a - oktavu pod violou; bezny rozsah C az a2; basovy kluc.",
    nepravda: "Violoncello: ladenie C, G, d, a - kvintu pod violou; bezny rozsah C az a2; basovy kluc."
  },
  {
    id: "ZIN 1. Nastroje ladenie 005",
    oblast: "Nastroje, ladenie a rozsahy",
    podoblast: "Ladenie a rozsah",
    pravda: "Kontrabas: ladenie v kvartach E1, A1, D, G; znie o oktavu nizsie, nez sa pise.",
    nepravda: "Kontrabas: ladenie v kvintach E1, A1, D, G; znie o oktavu nizsie, nez sa pise."
  },
  {
    id: "ZIN 1. Nastroje ladenie 006",
    oblast: "Nastroje, ladenie a rozsahy",
    podoblast: "Ladenie a rozsah",
    pravda: "Ladenie rodiny: husle, viola a violoncello v cistych kvintach; kontrabas v cistych kvartach.",
    nepravda: "Ladenie rodiny: husle, viola a violoncello v cistych kvartach; kontrabas v cistych kvintach."
  },

  // ===== Techniky hry (7) =====
  {
    id: "ZIN 1. Techniky hry 001",
    oblast: "Techniky hry",
    podoblast: "Smyky",
    pravda: "Smyky na strune: legato, detache, radove staccato.",
    nepravda: "Smyky na strune: spiccato, sautille, ricochet."
  },
  {
    id: "ZIN 1. Techniky hry 002",
    oblast: "Techniky hry",
    podoblast: "Smyky",
    pravda: "Smyky nad strunou (odskakujuce): spiccato, sautille, ricochet.",
    nepravda: "Smyky nad strunou (odskakujuce): legato, detache, radove staccato."
  },
  {
    id: "ZIN 1. Techniky hry 003",
    oblast: "Techniky hry",
    podoblast: "Smyky",
    pravda: "Tremolo: rychle opakovanie tonu kratkymi smykmi; pizzicato: brnkanie prstom.",
    nepravda: "Tremolo: rychle opakovanie tonu kratkymi smykmi; pizzicato: hra drevom slacika."
  },
  {
    id: "ZIN 1. Techniky hry 004",
    oblast: "Techniky hry",
    podoblast: "Farebne techniky",
    pravda: "Col legno: hra drevom (prutom) slacika.",
    nepravda: "Col legno: hra slacikom tesne pri kobylke."
  },
  {
    id: "ZIN 1. Techniky hry 005",
    oblast: "Techniky hry",
    podoblast: "Farebne techniky",
    pravda: "Sul ponticello: hra pri kobylke - ostra sklena farba; sul tasto: hra nad hmatnikom - makka tmava farba.",
    nepravda: "Sul ponticello: hra nad hmatnikom - makka tmava farba; sul tasto: hra pri kobylke - ostra sklena farba."
  },
  {
    id: "ZIN 1. Techniky hry 006",
    oblast: "Techniky hry",
    podoblast: "Farebne techniky",
    pravda: "Con sordino: hra s dusitkom nasadenym na kobylku - tlmena, tmavsia farba.",
    nepravda: "Con sordino: hra s dusitkom vlozenym do zvukovych otvorov f - tlmena, tmavsia farba."
  },
  {
    id: "ZIN 1. Techniky hry 007",
    oblast: "Techniky hry",
    podoblast: "Farebne techniky",
    pravda: "Flazolety: lahky dotyk struny v uzloch (1/2, 1/3, 1/4 dlzky) - zaznie harmonicky ton.",
    nepravda: "Flazolety: silne pritlacenie struny v lubovolnom mieste - zaznie harmonicky ton."
  },

  // ===== Intonacia a artikulacia (3) =====
  {
    id: "ZIN 1. Intonacia artikulacia 001",
    oblast: "Intonacia a artikulacia",
    podoblast: "Moznosti",
    pravda: "Hmatnik bez prazcov: plynula intonacia, glissando, mikrointervaly, vibrato.",
    nepravda: "Hmatnik bez prazcov: pevna intonacia, glissando ani mikrointervaly nie su mozne."
  },
  {
    id: "ZIN 1. Intonacia artikulacia 002",
    oblast: "Intonacia a artikulacia",
    podoblast: "Moznosti",
    pravda: "Vibrato: kmitavy pohyb prsta lavej ruky na strune.",
    nepravda: "Vibrato: kmitavy pohyb slacika pravej ruky na strune."
  },
  {
    id: "ZIN 1. Intonacia artikulacia 003",
    oblast: "Intonacia a artikulacia",
    podoblast: "Moznosti",
    pravda: "Artikulacia smykom: od zabky tazsi a silnejsi, od spicky lahsi; mozne su dvojhmaty aj rozlozene akordy.",
    nepravda: "Artikulacia smykom: od zabky lahsi, od spicky tazsi a silnejsi; mozne su dvojhmaty aj rozlozene akordy."
  },

  // ===== Stara hudba (4) =====
  {
    id: "ZIN 1. Stara hudba 001",
    oblast: "Stara hudba",
    podoblast: "Violy da gamba",
    pravda: "Stara hudba: rodina viol da gamba - pardessus, diskant, alt, tenor, bas, violone.",
    nepravda: "Stara hudba: rodina viol da gamba - pardessus, diskant, alt, tenor, bas, violoncello."
  },
  {
    id: "ZIN 1. Stara hudba 002",
    oblast: "Stara hudba",
    podoblast: "Violy da gamba",
    pravda: "Violy da gamba: prazce na hmatniku, 6-7 strun, kvartovo-terciove ladenie, drzanie medzi kolenami.",
    nepravda: "Violy da gamba: prazce na hmatniku, 6-7 strun, cisto kvintove ladenie, drzanie medzi kolenami."
  },
  {
    id: "ZIN 1. Stara hudba 003",
    oblast: "Stara hudba",
    podoblast: "Violy da gamba",
    pravda: "Violone: basovy clen rodiny viol, predchodca kontrabasu (ladenia in G a in D).",
    nepravda: "Violone: najvyssi clen rodiny viol, predchodca husli (ladenia in G a in D)."
  },
  {
    id: "ZIN 1. Stara hudba 004",
    oblast: "Stara hudba",
    podoblast: "Barokova prax",
    pravda: "Barokova prax: crevove struny a barokovy slacik; viola d'amore ma sympaticky znejuce rezonancne struny.",
    nepravda: "Barokova prax: crevove struny a barokovy slacik; viola d'amore ma rezonancne struny, na ktore sa hra slacikom."
  }
];

const zin1CrackOtazky = zin1CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 1. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "1. Slacikove nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Strunne nastroje - prednasky.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin1CrackOtazky);

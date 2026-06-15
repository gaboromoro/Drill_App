// ZIN doplnkovy okruh "Rozsahy" - agreguje pitch-fakty vsetkych vyskovo definovanych
// nastrojov z okruhov 1-10 do jednotneho strucneho formatu "Nastroj: hodnoty".
//   Strunove nastroje  => ladenie strun (napr. Husle: g, d1, a1, e2)
//   Ostatne melodicke  => bezny rozsah od-do; pri transponujucich dychoch/zestoch je to
//                         PISANY rozsah s oznacenim (in X) - transpoziciu riesi okruh 5.
// Oktavove znenie (znie o oktavu/dve vyssie) je pri nastrojoch, kde je to podstata.
// Okruh je referencny/drilovaci a z exam mode je vynechany (ako Vzorce), aby sa fakty
// v exam vypracovani neduplikovali. Kazdy vyrok ma dve nepravdy (50 % / 25 % / 25 %).

const zinRozsahyData = [
  // ===== Ladenie strun =====
  {
    skupina: "Ladenie strun",
    id: "ZIN R husle",
    pravda: "Husle: g, d1, a1, e2.",
    nepravda: "Husle: c, g, d1, a1.",
    nepravda2: "Husle: g, d1, a1, e3."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R viola",
    pravda: "Viola: c, g, d1, a1.",
    nepravda: "Viola: g, d1, a1, e2.",
    nepravda2: "Viola: C, G, d, a."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R violoncello",
    pravda: "Violoncello: C, G, d, a.",
    nepravda: "Violoncello: c, g, d1, a1.",
    nepravda2: "Violoncello: E1, A1, D, G."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R kontrabas",
    pravda: "Kontrabas: E1, A1, D, G (kvarty).",
    nepravda: "Kontrabas: C, G, d, a (kvinty).",
    nepravda2: "Kontrabas: E1, A1, D, G (kvinty)."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R gamba",
    pravda: "Basova viola da gamba: D, G, c, e, a, d1 (6 strun).",
    nepravda: "Basova viola da gamba: C, G, d, a (4 struny).",
    nepravda2: "Basova viola da gamba: D, G, d, a, e1, h1 (cisto kvinty)."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R gitara",
    pravda: "Klasicka gitara: E, A, d, g, h, e1.",
    nepravda: "Klasicka gitara: E, A, d, g, c1, f1.",
    nepravda2: "Klasicka gitara: D, A, d, g, h, e1."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R basgitara",
    pravda: "Basgitara: E1, A1, D, G (znie o oktavu nizsie).",
    nepravda: "Basgitara: C, G, d, a (znie o oktavu nizsie).",
    nepravda2: "Basgitara: E1, A1, D, G (znie ako pisane)."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R mandolina",
    pravda: "Mandolina: g, d1, a1, e2 (ako husle).",
    nepravda: "Mandolina: E, A, d, g (ako gitara).",
    nepravda2: "Mandolina: c, g, d1, a1 (ako viola)."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R banjo",
    pravda: "Banjo: g, D, G, h, d (open G).",
    nepravda: "Banjo: fis, D, Fis, A, d (open D).",
    nepravda2: "Banjo: g, D, G, h, d (open D)."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R ukulele",
    pravda: "Ukulele: g, c1, e1, a1.",
    nepravda: "Ukulele: g, d1, a1, e2.",
    nepravda2: "Ukulele: a, d1, fis1, h1."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R lutna",
    pravda: "Lutna: zbory v kvartach s terciou v strede (ako gitara); theorba pridava dlhe basove struny.",
    nepravda: "Lutna: struny v cistych kvintach (ako husle); theorba pridava dlhe basove struny.",
    nepravda2: "Lutna: zbory v kvartach s terciou v strede; theorba je sopranova lutna bez basov."
  },
  {
    skupina: "Ladenie strun",
    id: "ZIN R harfa",
    pravda: "Harfa: 47 strun, 6,5 oktavy, diatonicky Ces dur.",
    nepravda: "Harfa: 47 strun, 6,5 oktavy, diatonicky C dur.",
    nepravda2: "Harfa: 36 strun, 5 oktav, diatonicky Ces dur."
  },

  // ===== Rozsah - drevene dychove =====
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R flauta",
    pravda: "Flauta: c1 - c4.",
    nepravda: "Flauta: g - c4.",
    nepravda2: "Flauta: c1 - c3."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R pikola",
    pravda: "Pikola: d2 - c5 (znie o oktavu vyssie, najvyssia v orchestri).",
    nepravda: "Pikola: d1 - c4 (znie o oktavu nizsie, najvyssia v orchestri).",
    nepravda2: "Pikola: d2 - c5 (znie o oktavu vyssie, najnizsia v orchestri)."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R hoboj",
    pravda: "Hoboj: b - a3.",
    nepravda: "Hoboj: e - c4.",
    nepravda2: "Hoboj: b - a2."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R anglicky roh",
    pravda: "Anglicky roh: altovy hoboj in F, znie o cistu kvintu nizsie nez hoboj.",
    nepravda: "Anglicky roh: altovy hoboj in F, znie o cistu kvartu nizsie nez hoboj.",
    nepravda2: "Anglicky roh: altovy hoboj in Es, znie o cistu kvintu nizsie nez hoboj."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R klarinet",
    pravda: "Klarinet: pisany e - c4 (in B / in A).",
    nepravda: "Klarinet: pisany e - a2 (in B / in A).",
    nepravda2: "Klarinet: pisany c - g3 (in B / in A)."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R basklarinet",
    pravda: "Basklarinet: znie o oktavu nizsie nez B klarinet.",
    nepravda: "Basklarinet: znie o kvintu nizsie nez B klarinet.",
    nepravda2: "Basklarinet: znie rovnako ako B klarinet, lisi sa len farbou."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R fagot",
    pravda: "Fagot: B1 - e2.",
    nepravda: "Fagot: B1 - e1.",
    nepravda2: "Fagot: C - e2."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R kontrafagot",
    pravda: "Kontrafagot: znie o oktavu nizsie nez fagot (najhlbsi v orchestri).",
    nepravda: "Kontrafagot: znie o kvintu nizsie nez fagot (najhlbsi v orchestri).",
    nepravda2: "Kontrafagot: znie o oktavu vyssie nez fagot."
  },
  {
    skupina: "Rozsah - drevene dychove",
    id: "ZIN R saxofony",
    pravda: "Saxofony: pisany b - g3 (rovnaky pre celu rodinu).",
    nepravda: "Saxofony: pisany c1 - a3 (rovnaky pre celu rodinu).",
    nepravda2: "Saxofony: pisany b - g3 (iny pre kazdy typ)."
  },

  // ===== Rozsah - zestove =====
  {
    skupina: "Rozsah - zestove",
    id: "ZIN R trubka",
    pravda: "Trubka: pisany fis - c3 (in B).",
    nepravda: "Trubka: pisany fis - c2 (in B).",
    nepravda2: "Trubka: pisany C - c1 (in B)."
  },
  {
    skupina: "Rozsah - zestove",
    id: "ZIN R lesny roh",
    pravda: "Lesny roh: F - f2 (in F, ~4 oktavy).",
    nepravda: "Lesny roh: F - f2 (in F, ~2 oktavy).",
    nepravda2: "Lesny roh: c - f2 (in F, ~4 oktavy)."
  },
  {
    skupina: "Rozsah - zestove",
    id: "ZIN R pozoun",
    pravda: "Pozoun: E - b1 + pedalove tony.",
    nepravda: "Pozoun: e - b2 bez pedalovych tonov.",
    nepravda2: "Pozoun: E - b1 bez pedalovych tonov."
  },
  {
    skupina: "Rozsah - zestove",
    id: "ZIN R tuba",
    pravda: "Tuba: D1 - f1 (najhlbsi zest).",
    nepravda: "Tuba: D - f2 (najhlbsi zest).",
    nepravda2: "Tuba: D1 - f1 (najvyssi zest)."
  },

  // ===== Rozsah - melodicke bicie =====
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R xylofon",
    pravda: "Xylofon: pisany c1 - c4 (znie o oktavu vyssie).",
    nepravda: "Xylofon: pisany c1 - c4 (znie o oktavu nizsie).",
    nepravda2: "Xylofon: pisany c - c3 (znie o oktavu vyssie)."
  },
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R marimba",
    pravda: "Marimba: C - c4 (4-5 oktav, znie ako pisane).",
    nepravda: "Marimba: C - c4 (4-5 oktav, znie o oktavu vyssie).",
    nepravda2: "Marimba: c - c3 (2-3 oktavy, znie ako pisane)."
  },
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R vibrafon",
    pravda: "Vibrafon: f - f3 (3 oktavy).",
    nepravda: "Vibrafon: c - c3 (3 oktavy).",
    nepravda2: "Vibrafon: C - c4 (5 oktav)."
  },
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R zvonkohra",
    pravda: "Zvonkohra: pisany g - c3 (znie o dve oktavy vyssie).",
    nepravda: "Zvonkohra: pisany g - c3 (znie o jednu oktavu vyssie).",
    nepravda2: "Zvonkohra: pisany g - c3 (znie o dve oktavy nizsie)."
  },
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R zvony",
    pravda: "Tycove zvony: c1 - f2 (cca poldruha oktavy).",
    nepravda: "Tycove zvony: c1 - c4 (cca tri oktavy).",
    nepravda2: "Tycove zvony: C - f1 (cca poldruha oktavy)."
  },
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R celesta",
    pravda: "Celesta: pisany c - c4 (znie o oktavu vyssie).",
    nepravda: "Celesta: pisany c - c4 (znie o oktavu nizsie).",
    nepravda2: "Celesta: pisany c - c4 (znie o dve oktavy vyssie)."
  },
  {
    skupina: "Rozsah - melodicke bicie",
    id: "ZIN R tympany",
    pravda: "Tympany: D - c1 (sada styroch kotlov).",
    nepravda: "Tympany: D - c1 (jeden univerzalny kotol).",
    nepravda2: "Tympany: D1 - C (sada styroch kotlov)."
  },

  // ===== Rozsah - klavesove =====
  {
    skupina: "Rozsah - klavesove",
    id: "ZIN R klavir",
    pravda: "Klavir: A2 - c5 (88 klaves).",
    nepravda: "Klavir: C - c4 (61 klaves).",
    nepravda2: "Klavir: A2 - c5 (76 klaves)."
  },
  {
    skupina: "Rozsah - klavesove",
    id: "ZIN R cembalo",
    pravda: "Cembalo: F1 - f3 (cca 5 oktav).",
    nepravda: "Cembalo: A2 - c5 (cca 7 oktav).",
    nepravda2: "Cembalo: F1 - f3 (cca 3 oktavy)."
  },
  {
    skupina: "Rozsah - klavesove",
    id: "ZIN R varhany",
    pravda: "Varhany: manual C - c4, pedal C - g1.",
    nepravda: "Varhany: manual C - c4, pedal C - c3.",
    nepravda2: "Varhany: manual A2 - c5, pedal C - g1."
  },

  // ===== Neladene (bez melodickeho rozsahu) =====
  {
    skupina: "Bez melodickeho rozsahu",
    id: "ZIN R neladene",
    pravda: "Neladene bicie (velky bubon, snare, cinely, triangl, tam-tam, bicia suprava): neurcita vyska, bez melodickeho rozsahu.",
    nepravda: "Neladene bicie (velky bubon, snare, cinely, triangl, tam-tam): presny chromaticky rozsah ako xylofon.",
    nepravda2: "Neladene bicie sa zapisuju ako transponujuce nastroje in B s presnou vyskou."
  }
];

const zinRozsahyOtazky = zinRozsahyData.map((polozka) => ({
  id: polozka.id,
  tema: `Rozsahy - ${polozka.skupina}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "Rozsahy",
  subtema: `Rozsahy / ${polozka.skupina}`,
  slideRef: "agregat ZIN okruhov 1-10",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zinRozsahyOtazky);

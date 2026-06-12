// ZIN SZZ okruh 5: Transponujuce nastroje.
// SZZ otazka: Vysvetlete princip notace transponujicich nastroju. Uvedte nejbeznejsi
// transpozice a nastroje, ktere k nim patri.
// 16 statementov; kazdy ma DVE nepravdy - kazda flipuje inu dolezitu vec.
// Zdroj: "Dechove nastroje", "Zeste".

const zin5CrackData = [
  // ===== Princip notacie (4) =====
  {
    id: "ZIN 5. Princip 001",
    oblast: "Princip notacie",
    podoblast: "Princip",
    pravda: "Nastroj in B: pisane c znie ako b - part sa pise o velku sekundu vyssie, nez ma zniet.",
    nepravda: "Nastroj in B: pisane c znie ako b - part sa pise o velku sekundu nizsie, nez ma zniet.",
    nepravda2: "Nastroj in B: pisane c znie ako h - part sa pise o velku sekundu vyssie, nez ma zniet."
  },
  {
    id: "ZIN 5. Princip 002",
    oblast: "Princip notacie",
    podoblast: "Princip",
    pravda: "Part sa posuva opacnym smerom nez znenie: nastroj znie nizsie - pise sa vyssie.",
    nepravda: "Part sa posuva rovnakym smerom ako znenie: nastroj znie nizsie - pise sa nizsie.",
    nepravda2: "Part sa posuva opacnym smerom nez znenie: pikola sa preto pise o oktavu vyssie, nez znie."
  },
  {
    id: "ZIN 5. Princip 003",
    oblast: "Princip notacie",
    podoblast: "Princip",
    pravda: "Zmysel: rovnake prstoklady v celej rodine nastrojov - meni sa len znejuca vyska.",
    nepravda: "Zmysel: usetrenie pomocnych liniek - prstoklady sa v rodine nastrojov lisia.",
    nepravda2: "Zmysel: rovnaky pisany part pre vsetky nastroje rodiny - prstoklady sa lisia podla velkosti nastroja."
  },
  {
    id: "ZIN 5. Princip 004",
    oblast: "Princip notacie",
    podoblast: "Princip",
    pravda: "Vsetky saxofony maju rovnaky pisany rozsah (b az g3) - prave vdaka transponovanej notacii.",
    nepravda: "Kazdy saxofon ma iny pisany rozsah - transponovana notacia rozsahy zamerne odlisuje.",
    nepravda2: "Vsetky saxofony maju rovnaky pisany rozsah (c1 az a3) - prave vdaka transponovanej notacii."
  },

  // ===== Bezne transpozicie (10) =====
  {
    id: "ZIN 5. Transpozicie B 001",
    oblast: "Bezne transpozicie",
    podoblast: "In B",
    pravda: "In B: klarinet B, trubka B, kridlovka, sopransaxofon, tenorsaxofon.",
    nepravda: "In B: klarinet B, trubka B, kridlovka, altsaxofon, barytonsaxofon.",
    nepravda2: "In B: klarinet B, trubka B, kridlovka, sopransaxofon, altsaxofon."
  },
  {
    id: "ZIN 5. Transpozicie B 002",
    oblast: "Bezne transpozicie",
    podoblast: "In B",
    pravda: "B klarinet a trubka zneju o velku sekundu (cely ton) nizsie, nez sa pisu.",
    nepravda: "B klarinet a trubka zneju o velku sekundu (cely ton) vyssie, nez sa pisu.",
    nepravda2: "B klarinet a trubka zneju o malu terciu nizsie, nez sa pisu."
  },
  {
    id: "ZIN 5. Transpozicie B 003",
    oblast: "Bezne transpozicie",
    podoblast: "In B",
    pravda: "Tenorsaxofon: o velku nonu nizsie; basklarinet: o oktavu pod B klarinetom (velka nona).",
    nepravda: "Tenorsaxofon: o velku sekundu nizsie; basklarinet: rovnako ako B klarinet, lisi sa len farbou.",
    nepravda2: "Tenorsaxofon: o velku decimu nizsie; basklarinet: o oktavu pod B klarinetom (velka nona)."
  },
  {
    id: "ZIN 5. Transpozicie Es 001",
    oblast: "Bezne transpozicie",
    podoblast: "In Es",
    pravda: "In Es: altsaxofon, barytonsaxofon, Es klarinet.",
    nepravda: "In Es: tenorsaxofon, sopransaxofon, A klarinet.",
    nepravda2: "In Es: altsaxofon, barytonsaxofon, A klarinet."
  },
  {
    id: "ZIN 5. Transpozicie Es 002",
    oblast: "Bezne transpozicie",
    podoblast: "In Es",
    pravda: "Altsaxofon: o velku sextu nizsie; barytonsaxofon: o oktavu + velku sextu nizsie.",
    nepravda: "Altsaxofon: o velku terciu nizsie; barytonsaxofon: o oktavu + velku sextu nizsie.",
    nepravda2: "Altsaxofon: o velku sextu nizsie; barytonsaxofon: o oktavu + velku terciu nizsie."
  },
  {
    id: "ZIN 5. Transpozicie Es 003",
    oblast: "Bezne transpozicie",
    podoblast: "In Es",
    pravda: "Es klarinet je vynimka: znie o malu terciu VYSSIE, nez sa pise.",
    nepravda: "Es klarinet znie ako ostatne Es nastroje o velku sextu NIZSIE, nez sa pise.",
    nepravda2: "Es klarinet je vynimka: znie o velku sekundu VYSSIE, nez sa pise."
  },
  {
    id: "ZIN 5. Transpozicie F A 001",
    oblast: "Bezne transpozicie",
    podoblast: "In F a in A",
    pravda: "In F: lesny roh a anglicky roh - zneju o cistu kvintu nizsie.",
    nepravda: "In F: lesny roh a anglicky roh - zneju o cistu kvartu nizsie.",
    nepravda2: "In F: lesny roh a anglicky roh - zneju o cistu kvintu vyssie."
  },
  {
    id: "ZIN 5. Transpozicie F A 002",
    oblast: "Bezne transpozicie",
    podoblast: "In F a in A",
    pravda: "Klarinet A: znie o malu terciu nizsie - vyhodny pre krizikove toniny.",
    nepravda: "Klarinet A: znie o malu terciu vyssie - vyhodny pre bekove (b) toniny.",
    nepravda2: "Klarinet A: znie o velku terciu nizsie - vyhodny pre krizikove toniny."
  },
  {
    id: "ZIN 5. Transpozicie oktavove 001",
    oblast: "Bezne transpozicie",
    podoblast: "Oktavove",
    pravda: "O oktavu vyssie zneju: pikola, sopranova zobcova flauta, celesta, xylofon; zvonkohra o dve oktavy vyssie.",
    nepravda: "O oktavu vyssie zneju: pikola, sopranova zobcova flauta, celesta, xylofon; zvonkohra o tri oktavy vyssie.",
    nepravda2: "O oktavu vyssie zneju: pikola, sopranova zobcova flauta, celesta, zvonkohra; xylofon o dve oktavy vyssie."
  },
  {
    id: "ZIN 5. Transpozicie oktavove 002",
    oblast: "Bezne transpozicie",
    podoblast: "Oktavove",
    pravda: "O oktavu nizsie zneju: kontrabas, kontrafagot, gitara, basgitara.",
    nepravda: "O oktavu nizsie zneju: kontrabas, kontrafagot, viola, violoncello.",
    nepravda2: "O oktavu nizsie zneju: kontrabas, kontrafagot, gitara, basklarinet."
  },

  // ===== Netransponujuce (2) =====
  {
    id: "ZIN 5. Netransponujuce 001",
    oblast: "Netransponujuce nastroje",
    podoblast: "Prehlad",
    pravda: "Netransponuju: flauta, hoboj, fagot, pozoun, tuba, klavir, slaciky okrem kontrabasu.",
    nepravda: "Netransponuju: klarinet, anglicky roh, lesny roh, trubka, saxofony.",
    nepravda2: "Netransponuju: flauta, hoboj, fagot, pozoun, tuba, klavir, slaciky vratane kontrabasu."
  },
  {
    id: "ZIN 5. Netransponujuce 002",
    oblast: "Netransponujuce nastroje",
    podoblast: "Prehlad",
    pravda: "Hoboj je in C - ladiace a1 pre orchester dava priamo v znejucej vyske.",
    nepravda: "Hoboj je in B - jeho ladiace a1 preto musi orchester transponovat.",
    nepravda2: "Hoboj je in C - ladiace a1 pre orchester dava priamo v znejucej vyske; rovnako in C je aj anglicky roh."
  }
];

const zin5CrackOtazky = zin5CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 5. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "5. Transponujuce nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Dechove nastroje - prednasky.pdf / Zeste.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zin5CrackOtazky);

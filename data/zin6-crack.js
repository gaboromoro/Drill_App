// ZIN SZZ okruh 6: Klasicka gitara a odvodene nastroje; dalsie drnkacie; tabulatura.
// SZZ otazka: Charakterizujte klasickou kytaru a od ni odvozene nastroje - akusticke,
// basove i elektricke - jejich individualni odlisnosti. Vyjmenujte dalsi bezne drnkaci
// nastroje. Vysvetlete princip tabulatury pro strunne nastroje.
// 18 statementov, telegraficky styl. Zdroj: "Strunne nastroje", "Elektro_akusticke nastroje", "Uvod do ZI".

const zin6CrackData = [
  // ===== Klasicka gitara (3) =====
  {
    id: "ZIN 6. Klasicka gitara 001",
    oblast: "Klasicka gitara",
    podoblast: "Charakteristika",
    pravda: "Klasicka gitara: 6 strun E, A, d, g, h, e1 - kvarty s velkou terciou medzi g a h.",
    nepravda: "Klasicka gitara: 6 strun E, A, d, g, h, e1 - ciste kvarty bez tercioveho kroku."
  },
  {
    id: "ZIN 6. Klasicka gitara 002",
    oblast: "Klasicka gitara",
    podoblast: "Charakteristika",
    pravda: "Klasicka gitara: nylonove struny (basove opradane), siroky plochy hmatnik; znie o oktavu nizsie, nez sa pise.",
    nepravda: "Klasicka gitara: ocelove struny (basove opradane), uzky klenuty hmatnik; znie o oktavu nizsie, nez sa pise."
  },
  {
    id: "ZIN 6. Klasicka gitara 003",
    oblast: "Klasicka gitara",
    podoblast: "Charakteristika",
    pravda: "Hra prstami pravej ruky: apoyando (oprety uder) a tirando (volny uder).",
    nepravda: "Hra prstami pravej ruky: apoyando (volny uder) a tirando (oprety uder)."
  },

  // ===== Odvodene nastroje (5) =====
  {
    id: "ZIN 6. Odvodene 001",
    oblast: "Odvodene nastroje",
    podoblast: "Akusticka",
    pravda: "Westernova (akusticka): ocelove struny, hra trsatkom, vystuzna tyc (truss rod) v krku, typ dreadnought.",
    nepravda: "Westernova (akusticka): nylonove struny, hra trsatkom, krk bez vystuznej tyce, typ dreadnought."
  },
  {
    id: "ZIN 6. Odvodene 002",
    oblast: "Odvodene nastroje",
    podoblast: "Elektricka",
    pravda: "Elektricka: single coil = zivsi, ostrejsi, ale brumovy; humbucker = 2 civky v opacnom vinuti, rusenie sa odcita.",
    nepravda: "Elektricka: single coil = tmavsi, bez brumu; humbucker = 2 civky v rovnakom vinuti, rusenie sa scita."
  },
  {
    id: "ZIN 6. Odvodene 003",
    oblast: "Odvodene nastroje",
    podoblast: "Elektricka",
    pravda: "Elektricka: prepinac snimacov, potenciometre volume/tone, packa vibrata; dute telo pridava rezonanciu skrine.",
    nepravda: "Elektricka: prepinac snimacov, potenciometre volume/tone, packa vibrata; tvar tela zvuk neovplyvnuje."
  },
  {
    id: "ZIN 6. Odvodene 004",
    oblast: "Odvodene nastroje",
    podoblast: "Basgitara",
    pravda: "Basgitara: 4 struny E1, A1, D, G v kvartach (ako kontrabas); znie o oktavu nizsie; aj bezprazcova (fretless).",
    nepravda: "Basgitara: 4 struny C, G, d, a v kvintach (ako violoncello); znie o oktavu nizsie; aj bezprazcova (fretless)."
  },
  {
    id: "ZIN 6. Odvodene 005",
    oblast: "Odvodene nastroje",
    podoblast: "Basgitara",
    pravda: "Techniky basgitary: prsty (pizzicato), trsatko, slap and pop, palm muting.",
    nepravda: "Techniky basgitary: prsty (pizzicato), slacik, slap and pop, palm muting."
  },

  // ===== Dalsie drnkacie (6) =====
  {
    id: "ZIN 6. Drnkacie 001",
    oblast: "Dalsie drnkacie nastroje",
    podoblast: "Prehlad",
    pravda: "Dalsie drnkacie: mandolina, banjo, ukulele, lutna, theorba, harfa, citera, balalajka, sitar, koto.",
    nepravda: "Dalsie drnkacie: mandolina, banjo, ukulele, lutna, theorba, harfa, citera, cimbal, ninera, duduk."
  },
  {
    id: "ZIN 6. Drnkacie 002",
    oblast: "Dalsie drnkacie nastroje",
    podoblast: "Nastroje",
    pravda: "Mandolina: 4 zdvojene zbory ladene ako husle (g, d1, a1, e2); typicke tremolo.",
    nepravda: "Mandolina: 4 zdvojene zbory ladene ako gitara (E, A, d, g); typicke tremolo."
  },
  {
    id: "ZIN 6. Drnkacie 003",
    oblast: "Dalsie drnkacie nastroje",
    podoblast: "Nastroje",
    pravda: "Banjo: blana namiesto drevenej dosky; najcastejsie ladenie open G (g, D, G, H, d).",
    nepravda: "Banjo: drevena doska namiesto blany; najcastejsie ladenie open D (f#, D, F#, A, d)."
  },
  {
    id: "ZIN 6. Drnkacie 004",
    oblast: "Dalsie drnkacie nastroje",
    podoblast: "Nastroje",
    pravda: "Ukulele: 4 nylonove struny g, c1, e1, a1; velkosti sopran, koncert, tenor, baryton.",
    nepravda: "Ukulele: 6 nylonovych strun ako gitara; velkosti sopran, koncert, tenor, baryton."
  },
  {
    id: "ZIN 6. Drnkacie 005",
    oblast: "Dalsie drnkacie nastroje",
    podoblast: "Nastroje",
    pravda: "Lutna: zalomeny krk, zdvojene zbory, kvartovo-terciove ladenie; theorba = basova lutna (continuo).",
    nepravda: "Lutna: rovny krk, jednoduche struny, kvintove ladenie; theorba = sopranova lutna (continuo)."
  },
  {
    id: "ZIN 6. Drnkacie 006",
    oblast: "Dalsie drnkacie nastroje",
    podoblast: "Nastroje",
    pravda: "Harfa: drnkacia bez hmatnika; 47 strun diatonicky v Ces dur; 7 pedalov s 3 polohami (+polton, +2 poltony).",
    nepravda: "Harfa: drnkacia bez hmatnika; 47 strun diatonicky v Ces dur; 7 pedalov s 3 polohami (-polton, -2 poltony)."
  },

  // ===== Tabulatura (4) =====
  {
    id: "ZIN 6. Tabulatura 001",
    oblast: "Tabulatura",
    podoblast: "Princip",
    pravda: "Tabulatura: linky = struny, cisla = prazce, 0 = prazdna struna.",
    nepravda: "Tabulatura: linky = prazce, cisla = struny, 0 = prazdna struna."
  },
  {
    id: "ZIN 6. Tabulatura 002",
    oblast: "Tabulatura",
    podoblast: "Princip",
    pravda: "TAB: gitara 6 liniek, basgitara 4; najnizsia struna na spodnej linke.",
    nepravda: "TAB: gitara 6 liniek, basgitara 4; najnizsia struna na vrchnej linke."
  },
  {
    id: "ZIN 6. Tabulatura 003",
    oblast: "Tabulatura",
    podoblast: "Princip",
    pravda: "Tabulatura zapisuje hmat (miesto hrania), nie absolutnu vysku; rytmus sa doplna znackami alebo notovou osnovou.",
    nepravda: "Tabulatura zapisuje absolutnu vysku, nie hmat; rytmus sa doplna znackami alebo notovou osnovou."
  },
  {
    id: "ZIN 6. Tabulatura 004",
    oblast: "Tabulatura",
    podoblast: "Princip",
    pravda: "Historicke lutnove tabulatury: francuzska pismena, talianska cisla.",
    nepravda: "Historicke lutnove tabulatury: francuzska cisla, talianska pismena."
  }
];

const zin6CrackOtazky = zin6CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 6. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "6. Gitara a drnkacie nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Strunne nastroje - prednasky.pdf / Elektro_akusticke nastroje.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin6CrackOtazky);

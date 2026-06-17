// ZHA SZZ okruh 4: Preco intervaly intonuju temperovane vs prirodzene; priklady, mechanizmy.
// SZZ otazka: Vysvetlete, proc nektere intervaly na hudebnich nastrojich intonuji v principu
// temperovane a jine prirozene, uvedte priklady, jakym mechanismem vzniknou oba druhy intervalu.
// Zdroj: Ai91R_Ladeni.

const zha4CrackData = [
  {
    id: "ZHA 4. Ladenie 001",
    oblast: "Dva druhy intervalov",
    podoblast: "Prirodzeny interval",
    pravda: "Prirodzeny (cisty) interval: pomer frekvencii = pomer celych cisel (oktava 2:1, kvinta 3:2, kvarta 4:3).",
    nepravda: "Prirodzeny (cisty) interval: pomer frekvencii je iracionalne cislo (napr. 12. odmocnina z 2).",
    nepravda2: "Prirodzeny (cisty) interval: pomer frekvencii = pomer celych cisel, napr. oktava 3:2, kvinta 2:1."
  },
  {
    id: "ZHA 4. Ladenie 002",
    oblast: "Dva druhy intervalov",
    podoblast: "Temperovany interval",
    pravda: "Temperovane ladenie: oktava rozdelena na 12 rovnakych poltonov; pomer poltonu = 12. odmocnina z 2 = 1,0595.",
    nepravda: "Temperovane ladenie: oktava rozdelena na 12 rovnakych poltonov; pomer poltonu = 3:2 = 1,5.",
    nepravda2: "Temperovane ladenie: oktava rozdelena na 7 rovnakych dielov; pomer dielu = 7. odmocnina z 2."
  },
  {
    id: "ZHA 4. Ladenie 003",
    oblast: "Dva druhy intervalov",
    podoblast: "Cista len oktava",
    pravda: "V rovnomerne temperovanom ladeni je cista len oktava; ziadny iny interval nezodpoveda presne pomeru celych cisel.",
    nepravda: "V rovnomerne temperovanom ladeni su ciste oktava aj kvinta; rozladene su len tercie.",
    nepravda2: "V rovnomerne temperovanom ladeni su vsetky intervaly ciste (pomery celych cisel)."
  },
  {
    id: "ZHA 4. Mechanizmus 001",
    oblast: "Mechanizmus vzniku",
    podoblast: "Prirodzene intonuju",
    pravda: "Prirodzene intonuju vsetky PRIRODZENE posuny frekvencie: flazolety, prefukovanie, vyssie harmonicke (alikvoty).",
    nepravda: "Prirodzene intonuju vsetky MECHANICKE posuny: klapky, prazce, dlzky pistal.",
    nepravda2: "Prirodzene intonuju iba klavesove nastroje s pevne naladenymi strunami."
  },
  {
    id: "ZHA 4. Mechanizmus 002",
    oblast: "Mechanizmus vzniku",
    podoblast: "Temperovane intonuju",
    pravda: "Temperovane intonuju vsetky MECHANICKE posuny: klapky dychov, prazce, dlzky pistal, ladenie strun klavira.",
    nepravda: "Temperovane intonuju vsetky PRIRODZENE posuny: flazolety, prefukovanie, alikvoty.",
    nepravda2: "Temperovane intonuju iba bezprazcove nastroje a ludsky hlas."
  },
  {
    id: "ZHA 4. Mechanizmus 003",
    oblast: "Mechanizmus vzniku",
    podoblast: "Nastroje",
    pravda: "Bezprazcove nastroje a hlas mozu intonovat prirodzene (plynula korekcia vysky sluchom); klavir a prazce daju temperovane.",
    nepravda: "Klavir a prazcove nastroje intonuju prirodzene; bezprazcove a hlas len temperovane.",
    nepravda2: "Vsetky nastroje intonuju vyhradne temperovane, prirodzene intervaly v praxi neexistuju."
  },
  {
    id: "ZHA 4. Porovnanie 001",
    oblast: "Porovnanie",
    podoblast: "Kvinta",
    pravda: "Temperovana kvinta (1,4983) je o nieco nizsia nez cista kvinta (3:2 = 1,5).",
    nepravda: "Temperovana kvinta (1,5) je o nieco vyssia nez cista kvinta (1,4983).",
    nepravda2: "Temperovana a cista kvinta su uplne totozne (obe presne 1,5)."
  },
  {
    id: "ZHA 4. Jednotky 001",
    oblast: "Jednotky",
    podoblast: "Cent",
    pravda: "Cent = stotina temperovaneho poltonu; cely ton = 200 centov, oktava = 1200 centov.",
    nepravda: "Cent = stotina hertza; cely ton = 200 Hz nezavisle od oktavy.",
    nepravda2: "Cent = stotina oktavy; polton = 100 centov, cely ton = 100 centov."
  },
  {
    id: "ZHA 4. Pytagoras 001",
    oblast: "Historia a koma",
    podoblast: "Pytagorejske koma",
    pravda: "Pytagorejske ladenie postupuje len po cistych kvintach 3:2 - po 12 kvintach sa netrafi presne do nasobku oktavy (pytagorejske koma).",
    nepravda: "Pytagorejske ladenie postupuje len po cistych terciach 5:4 - po 12 krokoch sa presne trafi do oktavy.",
    nepravda2: "Pytagorejske ladenie postupuje po temperovanych kvintach - po 12 kvintach sa presne trafi do oktavy."
  },
  {
    id: "ZHA 4. Temperovane 001",
    oblast: "Vlastnosti temperovaneho",
    podoblast: "Enharmonia",
    pravda: "V temperovanom ladeni su vsetky toniny rovnocenne a mozna je enharmonicka zamena (cis = des), modulacia do lubovolnej toniny.",
    nepravda: "V temperovanom ladeni je kazda tonina inak rozladena; enharmonicka zamena (cis = des) nie je mozna.",
    nepravda2: "V prirodzenom ladeni su vsetky toniny rovnocenne; enharmonicka zamena plati len tam."
  }
];

const zha4CrackOtazky = zha4CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 4. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "4. Temperovane a prirodzene intervaly",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai91R_Ladeni.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha4CrackOtazky);

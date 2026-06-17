// ZHA SZZ okruh 2: Frekvencne spektrum tonu; zmeny spektra (umele/prirodzene); formanty.
// SZZ otazka: Pojednejte o frekvencnim spektru hudebniho tonu. Jakymi umelymi a prirozenymi
// mechanismy dochazi ke zmene tohoto spektra? Vysvetlete pojem formanty.
// Zdroj: Ai31R_Spektrum.

const zha2CrackData = [
  {
    id: "ZHA 2. Spektrum 001",
    oblast: "Spektrum",
    podoblast: "Definicia",
    pravda: "Spektrum = rozklad zlozeneho kmitania do jednoduchych harmonickych (sinusov).",
    nepravda: "Spektrum = priebeh amplitudy tonu v case.",
    nepravda2: "Spektrum = rozklad zlozeneho kmitania do obdlznikovych zloziek."
  },
  {
    id: "ZHA 2. Spektrum 002",
    oblast: "Spektrum",
    podoblast: "Harmonicke",
    pravda: "Ziadny nastroj nevytvara jedinu frekvenciu - vzdy vytvara spektrum frekvencii.",
    nepravda: "Cisty nastroj vytvara jedinu frekvenciu; spektrum maju len skreslene zvuky.",
    nepravda2: "Nastroj vytvara vzdy presne dve frekvencie - fundament a oktavu."
  },
  {
    id: "ZHA 2. Spektrum 003",
    oblast: "Spektrum",
    podoblast: "Harmonicke",
    pravda: "Vyssie harmonicke = celociselne nasobky fundamentu (440 -> 880, 1320, 1760 Hz...).",
    nepravda: "Vyssie harmonicke = nasobky fundamentu odmocninou z 2 (440 -> 466, 494 Hz...).",
    nepravda2: "Vyssie harmonicke = polovicne deliny fundamentu (440 -> 220, 110 Hz...)."
  },
  {
    id: "ZHA 2. Spektrum 004",
    oblast: "Spektrum",
    podoblast: "Pocet harmonickych",
    pravda: "Pocet pocutelnych harmonickych je vyssi pri nizkych tonoch; vysoke tony maju malo harmonickych a podobnu farbu.",
    nepravda: "Pocet pocutelnych harmonickych je vyssi pri vysokych tonoch; nizke tony maju malo harmonickych.",
    nepravda2: "Pocet pocutelnych harmonickych je rovnaky pre vsetky tony nezavisle od vysky."
  },
  {
    id: "ZHA 2. Spektrum 005",
    oblast: "Spektrum",
    podoblast: "Inharmonicita",
    pravda: "U niektorych nastrojov (klavir) maju vyssie harmonicke malu odchylku od celociselneho nasobku (inharmonicita).",
    nepravda: "Vsetky nastroje maju vyssie harmonicke presne v celociselnych nasobkoch bez odchylky.",
    nepravda2: "U klavira su vyssie harmonicke presne celociselne; inharmonicita sa tyka len bicich."
  },
  {
    id: "ZHA 2. Zmena spektra 001",
    oblast: "Zmena spektra",
    podoblast: "Princip",
    pravda: "Zmena spektra = zmena amplitud jednotlivych harmonickych, nie posun ich frekvencii.",
    nepravda: "Zmena spektra = posun frekvencii jednotlivych harmonickych, nie zmena ich amplitud.",
    nepravda2: "Zmena spektra = zmena dlzky tonu pri zachovani amplitud aj frekvencii."
  },
  {
    id: "ZHA 2. Zmena spektra 002",
    oblast: "Zmena spektra",
    podoblast: "Prirodzene mechanizmy",
    pravda: "Prirodzena zmena spektra: rezonancia tela nastroja, vyzarovanie, natisk/dusitko, odraz a prechod prostredim.",
    nepravda: "Prirodzena zmena spektra: ekvalizer, filter, modulacia, exciter.",
    nepravda2: "Prirodzena zmena spektra vznika len posunom fundamentu, nie zmenou amplitud harmonickych."
  },
  {
    id: "ZHA 2. Zmena spektra 003",
    oblast: "Zmena spektra",
    podoblast: "Umele mechanizmy",
    pravda: "Umela zmena spektra: ekvalizer, filter, modulacia, exciter, nelinearne (elektronkove) zosilnenie.",
    nepravda: "Umela zmena spektra: rezonancia korpusu, natisk, dusitko, vyzarovanie.",
    nepravda2: "Umela zmena spektra: zmena teploty vzduchu a vlhkosti v sale."
  },
  {
    id: "ZHA 2. Zmena spektra 004",
    oblast: "Zmena spektra",
    podoblast: "Linearita",
    pravda: "Absolutne linearny obvod spektrum nemeni; harmonicke pridava az nelinearne skreslenie.",
    nepravda: "Absolutne linearny obvod pridava nove harmonicke; nelinearny obvod spektrum nemeni.",
    nepravda2: "Linearny aj nelinearny obvod pridavaju rovnake mnozstvo harmonickych."
  },
  {
    id: "ZHA 2. Formanty 001",
    oblast: "Formanty",
    podoblast: "Definicia",
    pravda: "Formant = zvyraznena frekvencna oblast pevna v absolutnej frekvencii - neposuva sa s vyskou tonu.",
    nepravda: "Formant = zvyraznena harmonicka, ktora sa posuva spolu s vyskou tonu.",
    nepravda2: "Formant = potlacena frekvencna oblast, ktora sa posuva spolu s vyskou tonu."
  },
  {
    id: "ZHA 2. Formanty 002",
    oblast: "Formanty",
    podoblast: "Vznik",
    pravda: "Formanty vznikaju rezonanciou (telo nastroja, ustna dutina) - su charakteristicke pre hlas aj nastroj.",
    nepravda: "Formanty vznikaju nelinearnym skreslenim v zosilnovaci.",
    nepravda2: "Formanty vznikaju posunom fundamentu pri zmene dynamiky."
  }
];

const zha2CrackOtazky = zha2CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 2. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "2. Spektrum a formanty",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai31R_Spektrum.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha2CrackOtazky);

// ZHA SZZ okruh 6: Princip strunoveho a dychoveho nastroja (otvorena aj polozatvorena pistala);
// vyssie harmonicke a ich suvislost s flazoletmi a prefukovanim.
// SZZ otazka: Vysvetlete princip funkce strunneho nastroje, dechoveho nastroje (otevrena
// i polouzavrena pistala). Pojednejte o vyssich harmonickych a jejich souvislosti s flazolety
// na strunnych a prefukovanim do vyssich poloh u dechovych nastroju.
// Zdroj: Ai61R_HudebniNastroje, Ai21R_KmityAVlny, Ai91R_Ladeni.

const zha6CrackData = [
  {
    id: "ZHA 6. Struna 001",
    oblast: "Strunovy nastroj",
    podoblast: "Frekvencia struny",
    pravda: "Frekvencia struny rastie s napatim, klesa s dlzkovou hmotnostou a dlzkou; priamo nezavisi od hrubky.",
    nepravda: "Frekvencia struny klesa s napatim, rastie s dlzkou; priamo zavisi od hrubky.",
    nepravda2: "Frekvencia struny rastie s dlzkou aj dlzkovou hmotnostou; napatie nema vplyv."
  },
  {
    id: "ZHA 6. Struna 002",
    oblast: "Strunovy nastroj",
    podoblast: "Kmitanie",
    pravda: "Struna kmita symetricky: pevne uchytene konce su uzly, najvacsi rozkmit v strede je kmitna.",
    nepravda: "Struna kmita symetricky: pevne konce su kmitne, najvacsi rozkmit v strede je uzol.",
    nepravda2: "Struna kmita nesymetricky: uzol aj kmitna su na tom istom konci."
  },
  {
    id: "ZHA 6. Struna 003",
    oblast: "Strunovy nastroj",
    podoblast: "Excitator",
    pravda: "Strunu mozno rozozvucat kdekolvek, ale rozoznenie pri kraji napomaha vzniku vyssich harmonickych.",
    nepravda: "Strunu mozno rozozvucat len presne v strede; rozoznenie pri kraji potlaci vsetky harmonicke.",
    nepravda2: "Rozoznenie struny pri kraji potlaci vyssie harmonicke a zvyrazni fundament."
  },
  {
    id: "ZHA 6. Flazolet 001",
    oblast: "Flazolety",
    podoblast: "Princip",
    pravda: "Flazolet: jemny dotyk struny v deliacom bode (1/2, 1/3, 1/4) potlaci fundament a ozve sa vyssia harmonicka.",
    nepravda: "Flazolet: silne pritlacenie struny v lubovolnom bode zvyrazni fundament a potlaci harmonicke.",
    nepravda2: "Flazolet: jemny dotyk struny v deliacom bode posunie fundament o temperovany polton."
  },
  {
    id: "ZHA 6. Pistala 001",
    oblast: "Dychovy nastroj",
    podoblast: "Otvorena pistala",
    pravda: "Otvorena pistala: dlzka zodpoveda priblizne polovici vlnovej dlzky; obsahuje vsetky harmonicke.",
    nepravda: "Otvorena pistala: dlzka zodpoveda priblizne stvrtine vlnovej dlzky; obsahuje len neparne harmonicke.",
    nepravda2: "Otvorena pistala: dlzka zodpoveda celej vlnovej dlzke; obsahuje len parne harmonicke."
  },
  {
    id: "ZHA 6. Pistala 002",
    oblast: "Dychovy nastroj",
    podoblast: "Polozatvorena pistala",
    pravda: "Zatvorena/polozatvorena pistala: dlzka zodpoveda stvrtine vlny; znie o oktavu nizsie nez rovnako dlha otvorena.",
    nepravda: "Zatvorena/polozatvorena pistala: dlzka zodpoveda polovici vlny; znie o oktavu vyssie nez rovnako dlha otvorena.",
    nepravda2: "Zatvorena/polozatvorena pistala: dlzka zodpoveda stvrtine vlny; znie rovnako vysoko ako rovnako dlha otvorena."
  },
  {
    id: "ZHA 6. Pistala 003",
    oblast: "Dychovy nastroj",
    podoblast: "Neparne harmonicke",
    pravda: "Polozatvorena pistala (klarinet) ma len neparne harmonicke a prefukuje do duodecimy (oktava + kvinta).",
    nepravda: "Polozatvorena pistala (klarinet) ma len parne harmonicke a prefukuje do oktavy.",
    nepravda2: "Polozatvorena pistala (klarinet) ma vsetky harmonicke a prefukuje do duodecimy."
  },
  {
    id: "ZHA 6. Prefukovanie 001",
    oblast: "Prefukovanie",
    podoblast: "Otvorene pistaly",
    pravda: "Otvorene pistaly a vacsina dychov prefukuju do oktavy.",
    nepravda: "Otvorene pistaly a vacsina dychov prefukuju do duodecimy ako klarinet.",
    nepravda2: "Otvorene pistaly a vacsina dychov prefukuju do kvinty."
  },
  {
    id: "ZHA 6. Prefukovanie 002",
    oblast: "Prefukovanie",
    podoblast: "Princip",
    pravda: "Prefukovanie = zvysenou energiou dychu sa vzduchovy stlpec rozdeli a znie vyssia harmonicka (vyssia poloha).",
    nepravda: "Prefukovanie = znizenou energiou dychu sa vzduchovy stlpec spoji a znie nizsia harmonicka.",
    nepravda2: "Prefukovanie = otvorenim bocnej klapky sa skrati pistala a znie temperovany polton."
  },
  {
    id: "ZHA 6. Suvislost 001",
    oblast: "Suvislost",
    podoblast: "Spolocny princip",
    pravda: "Flazolety na strunach a prefukovanie u dychov su prejavom tej istej harmonickej rady (ozvucia vyssie harmonicke).",
    nepravda: "Flazolety vyuzivaju harmonicku radu, prefukovanie vyuziva temperovane ladenie - su to nesuvisiace javy.",
    nepravda2: "Flazolety aj prefukovanie ozvucia subharmonicke tony pod fundamentom."
  }
];

const zha6CrackOtazky = zha6CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 6. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "6. Princip strunovych a dychovych nastrojov",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai61R_HudebniNastroje.pdf / Ai21R_KmityAVlny.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha6CrackOtazky);

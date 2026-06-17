// ZHA SZZ okruh 5: Vyssie harmonicke a harmonicka tonova rada; vztah k temperovanym intervalom.
// SZZ otazka: Vysvetlete pojem vyssi harmonicke a harmonicka tonova rada. Jaky je vztah
// jednotlivych tonu harmonicke rady k intervalum odvozenym od fundamentu temperovanym ladenim?
// Zdroj: Ai91R_Ladeni, Ai31R_Spektrum.

const zha5CrackData = [
  {
    id: "ZHA 5. Harmonicke 001",
    oblast: "Vyssie harmonicke",
    podoblast: "Definicia",
    pravda: "Vyssie harmonicke (alikvoty) = celociselne nasobky frekvencie fundamentu.",
    nepravda: "Vyssie harmonicke (alikvoty) = celociselne deliny frekvencie fundamentu.",
    nepravda2: "Vyssie harmonicke = nasobky fundamentu temperovanym poltonom (12. odmocnina z 2)."
  },
  {
    id: "ZHA 5. Harmonicke 002",
    oblast: "Vyssie harmonicke",
    podoblast: "Oktavy a kvinty",
    pravda: "2. harmonicka znie o oktavu, 3. harmonicka o oktavu + kvintu nad fundamentom.",
    nepravda: "2. harmonicka znie o kvintu, 3. harmonicka o oktavu nad fundamentom.",
    nepravda2: "2. harmonicka znie o oktavu, 3. harmonicka o dve oktavy nad fundamentom."
  },
  {
    id: "ZHA 5. Rada 001",
    oblast: "Harmonicka rada",
    podoblast: "Intervaly",
    pravda: "V harmonickej rade: 1-2 = oktava (2:1), 2-3 = kvinta (3:2), 3-4 = kvarta (4:3).",
    nepravda: "V harmonickej rade: 1-2 = kvinta (3:2), 2-3 = kvarta (4:3), 3-4 = oktava (2:1).",
    nepravda2: "V harmonickej rade: 1-2 = oktava (2:1), 2-3 = kvarta (4:3), 3-4 = kvinta (3:2)."
  },
  {
    id: "ZHA 5. Rada 002",
    oblast: "Harmonicka rada",
    podoblast: "Tercie a sexta",
    pravda: "V harmonickej rade: 4-5 = velka tercia (5:4), 5-6 = mala tercia (6:5), pomer 5:3 = velka sexta.",
    nepravda: "V harmonickej rade: 4-5 = mala tercia (6:5), 5-6 = velka tercia (5:4), pomer 5:3 = kvarta.",
    nepravda2: "V harmonickej rade: 4-5 = velka tercia (5:4), 5-6 = kvinta (3:2), pomer 5:3 = oktava."
  },
  {
    id: "ZHA 5. Rada 003",
    oblast: "Harmonicka rada",
    podoblast: "Nerovnomernost",
    pravda: "Vzdialenosti medzi susednymi harmonickymi s rastucim poradim klesaju - vysoke harmonicke su blizko seba.",
    nepravda: "Vzdialenosti medzi susednymi harmonickymi s rastucim poradim rastu - vysoke harmonicke su daleko od seba.",
    nepravda2: "Vzdialenosti medzi vsetkymi susednymi harmonickymi su rovnake (rada je rovnomerna)."
  },
  {
    id: "ZHA 5. Vztah 001",
    oblast: "Vztah k temperovanemu",
    podoblast: "Iracionalita",
    pravda: "Ziadny pomer harmonickej rady nezodpoveda presne temperovanemu intervalu (ten je iracionalne cislo).",
    nepravda: "Kazdy pomer harmonickej rady presne zodpoveda temperovanemu intervalu.",
    nepravda2: "Temperovane intervaly su pomery celych cisel, preto presne sedia s harmonickou radou."
  },
  {
    id: "ZHA 5. Vztah 002",
    oblast: "Vztah k temperovanemu",
    podoblast: "Povod",
    pravda: "Harmonicke vznikaju prirodzene v tone nastroja; temperovane ladenie je matematicka konstrukcia nezavisla od nich.",
    nepravda: "Temperovane intervaly vznikaju prirodzene v tone; harmonicka rada je matematicka konstrukcia.",
    nepravda2: "Harmonicke aj temperovane intervaly vznikaju rovnako z dlzok pistal a strun."
  },
  {
    id: "ZHA 5. Vztah 003",
    oblast: "Vztah k temperovanemu",
    podoblast: "Kvinta",
    pravda: "3. harmonicka da cistu kvintu (3:2 nad oktavou); temperovana kvinta je o nieco nizsia.",
    nepravda: "3. harmonicka da temperovanu kvintu; cista kvinta je o nieco nizsia.",
    nepravda2: "3. harmonicka da cistu kvartu; temperovana kvarta je o nieco vyssia."
  },
  {
    id: "ZHA 5. Prejav 001",
    oblast: "Prejav v praxi",
    podoblast: "Flazolety a prefukovanie",
    pravda: "Flazolety (struny) a prefukovanie (dychy) ozvucia konkretne vyssie harmonicke - znejuce prirodzene ladene.",
    nepravda: "Flazolety a prefukovanie ozvucia temperovane naladene tony nezavisle od harmonickej rady.",
    nepravda2: "Flazolety ozvucia fundament; prefukovanie ozvuci subharmonicke pod fundamentom."
  },
  {
    id: "ZHA 5. Prejav 002",
    oblast: "Prejav v praxi",
    podoblast: "Noty vs spektrum",
    pravda: "V notach je oktava posun o 8 stupnov (linearne), v spektre je oktava 2x frekvencia (logaritmus vs linear).",
    nepravda: "V notach je oktava 2x frekvencia, v spektre je oktava posun o 8 zloziek (linearne).",
    nepravda2: "V notach aj v spektre je oktava linearny posun o 8 jednotiek."
  }
];

const zha5CrackOtazky = zha5CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 5. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "5. Vyssie harmonicke a harmonicka rada",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai91R_Ladeni.pdf / Ai31R_Spektrum.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha5CrackOtazky);

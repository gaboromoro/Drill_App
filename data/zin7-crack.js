// ZIN SZZ okruh 7: Bicia suprava a perkusie sveta.
// SZZ otazka: Jake je slozeni bici soupravy a jeji mozne varianty. Uvedte priklady beznych
// latinskoamerickych perkusi a zastupce bicich nastroju pochazejicich z Blizkeho vychodu,
// Indie, Afriky.
// 16 statementov, telegraficky styl. Zdroj: prezentacia "Bici nastroje".

const zin7CrackData = [
  // ===== Bicia suprava (6) =====
  {
    id: "ZIN 7. Suprava 001",
    oblast: "Bicia suprava",
    podoblast: "Zlozenie",
    pravda: "Zlozenie supravy: velky buben (kick), maly bubienok (snare), tom-tomy, floor tom, hi-hat, cinely crash a ride.",
    nepravda: "Zlozenie supravy: tympan (kick), maly bubienok (snare), tom-tomy, floor tom, hi-hat, cinely crash a ride."
  },
  {
    id: "ZIN 7. Suprava 002",
    oblast: "Bicia suprava",
    podoblast: "Zlozenie",
    pravda: "Kick: nozny pedal so slapkou; snare: strunnik na spodnej blane (vypinatelny packou).",
    nepravda: "Kick: nozny pedal so slapkou; snare: strunnik na hornej blane (vypinatelny packou)."
  },
  {
    id: "ZIN 7. Suprava 003",
    oblast: "Bicia suprava",
    podoblast: "Zlozenie",
    pravda: "Hi-hat: dva cinely na stojane s pedalom - otvoreny, zatvoreny, slapnuty nohou, syknutie.",
    nepravda: "Hi-hat: jeden cinel na stojane s pedalom - otvoreny, zatvoreny, slapnuty nohou, syknutie."
  },
  {
    id: "ZIN 7. Suprava 004",
    oblast: "Bicia suprava",
    podoblast: "Zlozenie",
    pravda: "Ride: hra spickou, aj na zvon (pupok); crash: cez okraj, siroky sum; china: dlhy kovovy dozvuk.",
    nepravda: "Ride: hra cez okraj, siroky sum; crash: spickou, aj na zvon (pupok); china: dlhy kovovy dozvuk."
  },
  {
    id: "ZIN 7. Suprava 005",
    oblast: "Bicia suprava",
    podoblast: "Varianty",
    pravda: "Varianty: mensia jazzova vs vacsia rockova (viac tomov), dvojslapka (double kick), elektronicka suprava.",
    nepravda: "Varianty: mensia rockova vs vacsia jazzova (viac tomov), dvojslapka (double kick), elektronicka suprava."
  },
  {
    id: "ZIN 7. Suprava 006",
    oblast: "Bicia suprava",
    podoblast: "Varianty",
    pravda: "Doplnky supravy: oktobany (uzke hlboke valce), rototomy (bez korpusu, ladenie otacanim), cowbell.",
    nepravda: "Doplnky supravy: oktobany (siroke plytke valce), rototomy (hlboky korpus, ladenie pedalom), cowbell."
  },

  // ===== Latinskoamericke perkusie (5) =====
  {
    id: "ZIN 7. Latinske 001",
    oblast: "Latinskoamericke perkusie",
    podoblast: "Prehlad",
    pravda: "Bezne LA perkusie: konga, bonga, timbales, claves, maracas, guiro, cabasa, shaker, cowbell, cajon.",
    nepravda: "Bezne LA perkusie: konga, bonga, tabla, darbuka, maracas, guiro, cabasa, shaker, cowbell, djembe."
  },
  {
    id: "ZIN 7. Latinske 002",
    oblast: "Latinskoamericke perkusie",
    podoblast: "Bubny",
    pravda: "Bonga: par malych bubienkov (macho + hembra) medzi kolenami; konga: vysoke sudovite bubny, hra dlanami.",
    nepravda: "Bonga: vysoke sudovite bubny, hra dlanami; konga: par malych bubienkov (macho + hembra) medzi kolenami."
  },
  {
    id: "ZIN 7. Latinske 003",
    oblast: "Latinskoamericke perkusie",
    podoblast: "Bubny",
    pravda: "Timbales: kovove korpusy, hra palickami (Tito Puente); cajon: drevena debna z Peru, hrac na nej sedi.",
    nepravda: "Timbales: drevene korpusy, hra dlanami (Tito Puente); cajon: kovovy valec z Kuby, hrac pri nom stoji."
  },
  {
    id: "ZIN 7. Latinske 004",
    oblast: "Latinskoamericke perkusie",
    podoblast: "Drobne perkusie",
    pravda: "Guiro: vrubovany povrch + palicka (princip amplitudovej modulacie); maracas: zvuk podla zrnitosti a mnozstva naplne.",
    nepravda: "Guiro: vrubovany povrch + palicka (princip frekvencnej modulacie); maracas: zvuk podla farby a tvaru rukovate."
  },
  {
    id: "ZIN 7. Latinske 005",
    oblast: "Latinskoamericke perkusie",
    podoblast: "Drobne perkusie",
    pravda: "Cabasa: otacave pletivo guliciek okolo valca (z africkej shekere); kastanety NIE su LA - pochadzaju zo Spanielska.",
    nepravda: "Cabasa: otacave pletivo guliciek okolo valca (z africkej shekere); kastanety su typicke LA perkusie z Kuby."
  },

  // ===== Perkusie sveta (5) =====
  {
    id: "ZIN 7. Svet 001",
    oblast: "Perkusie sveta",
    podoblast: "Blizky vychod",
    pravda: "Blizky vychod: darbuka (poharovity buben z kovu alebo keramiky) a ramcove bubny (riq, def).",
    nepravda: "Blizky vychod: djembe (poharovity buben z dreva) a ramcove bubny (riq, def)."
  },
  {
    id: "ZIN 7. Svet 002",
    oblast: "Perkusie sveta",
    podoblast: "India",
    pravda: "India: tabla - par bubienkov, mensi dreveny (dajan/macho) + vacsi kovovy (bajan/hembra).",
    nepravda: "India: tabla - jeden velky obojstranny buben s dvomi blanami."
  },
  {
    id: "ZIN 7. Svet 003",
    oblast: "Perkusie sveta",
    podoblast: "India",
    pravda: "Tabla: na blane ladiaca cierna pasta (syahi); hra sa prstami a dlanou.",
    nepravda: "Tabla: na blane ladiaca cierna pasta (syahi); hra sa drevenymi palickami."
  },
  {
    id: "ZIN 7. Svet 004",
    oblast: "Perkusie sveta",
    podoblast: "Afrika",
    pravda: "Afrika: djembe - poharovity dreveny buben so snurovym vypletom; udery bass, tone, slap.",
    nepravda: "Afrika: djembe - valcovy kovovy buben so skrutkovym ladenim; udery bass, tone, slap."
  },
  {
    id: "ZIN 7. Svet 005",
    oblast: "Perkusie sveta",
    podoblast: "Afrika",
    pravda: "Afrika dalej: udu (hlineny dzban s dvomi otvormi), talking drum, shekere; balafon = predchodca xylofonu.",
    nepravda: "Afrika dalej: udu (kovovy zvon s jednym otvorom), talking drum, shekere; balafon = predchodca tympanov."
  }
];

const zin7CrackOtazky = zin7CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 7. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "7. Bicia suprava a perkusie",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Bici nastroje.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin7CrackOtazky);

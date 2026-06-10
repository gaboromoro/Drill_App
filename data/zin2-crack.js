// ZIN SZZ okruh 2: Melodicke bicie nastroje - typy, rozsahy; zakladne bicie symfonickeho orchestra.
// SZZ otazka: Popiste melodicke bici nastroje - typy, rozsahy. Jake jsou zakladni bici
// nastroje symfonickeho orchestru.
// 17 statementov, telegraficky styl. Zdroj: prezentacia "Bici nastroje".

const zin2CrackData = [
  // ===== Melodicke bicie - typy a rozsahy (10) =====
  {
    id: "ZIN 2. Melodicke typy 001",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Prehlad",
    pravda: "Melodicke bicie (idiofony s urcitou vyskou): xylofon, marimba, vibrafon, zvonkohra, zvony, celesta.",
    nepravda: "Melodicke bicie (membranofony s urcitou vyskou): xylofon, marimba, vibrafon, zvonkohra, zvony, celesta."
  },
  {
    id: "ZIN 2. Melodicke typy 002",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Xylofon: drevene kamene (palisander), kratky ostry ton; znie o oktavu vyssie; pisany rozsah cca c1 az c4.",
    nepravda: "Xylofon: drevene kamene (palisander), kratky ostry ton; znie o oktavu nizsie; pisany rozsah cca c1 az c4."
  },
  {
    id: "ZIN 2. Melodicke typy 003",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Marimba: drevene kamene, maksi a tmavsi ton nez xylofon; najvacsi rozsah - 4 az 5 oktav.",
    nepravda: "Marimba: kovove kamene, ostrejsi a svetlejsi ton nez xylofon; najvacsi rozsah - 4 az 5 oktav."
  },
  {
    id: "ZIN 2. Melodicke typy 004",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Vibrafon: kovove kamene, tlmiaci pedal ako klavir; rozsah tri oktavy f az f3.",
    nepravda: "Vibrafon: drevene kamene, tlmiaci pedal ako klavir; rozsah pat oktav C az c5."
  },
  {
    id: "ZIN 2. Melodicke typy 005",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Vibrafon: motorom otacane zaklopky v rezonatoroch periodicky otvaraju trubice - vznika vibrato/tremolo.",
    nepravda: "Vibrafon: motorom otacane zaklopky v rezonatoroch periodicky otvaraju trubice - ton sa preladuje o polton."
  },
  {
    id: "ZIN 2. Melodicke typy 006",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Zvonkohra: ocelove platnicky; znie o dve oktavy vyssie; pisany rozsah cca g az c3.",
    nepravda: "Zvonkohra: ocelove platnicky; znie o oktavu nizsie; pisany rozsah cca g az c3."
  },
  {
    id: "ZIN 2. Melodicke typy 007",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Zvony: tycove (trubicove), zavesene za horny koniec, hra sa kladivkom; rozsah cca poldruha oktavy (c1 az f2).",
    nepravda: "Zvony: liate kostolne, polozene na stojane, hra sa palicou zdola; rozsah cca poldruha oktavy (c1 az f2)."
  },
  {
    id: "ZIN 2. Melodicke typy 008",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Nastroje",
    pravda: "Celesta: klavesovy nastroj - kladivka na kovove platnicky s rezonatormi; znie o oktavu vyssie; rozsah cca styri oktavy.",
    nepravda: "Celesta: klavesovy nastroj - trny trsaju kovove platnicky s rezonatormi; znie o oktavu nizsie; rozsah cca styri oktavy."
  },
  {
    id: "ZIN 2. Melodicke typy 009",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Spolocne vlastnosti",
    pravda: "Xylofon, marimba a vibrafon maju pod kamenmi rezonancne trubice - dlzka a priemer urcuju rezonancne pasmo.",
    nepravda: "Xylofon, marimba a vibrafon maju pod kamenmi rezonancne trubice - trubice preladuju ton kamenov o oktavu."
  },
  {
    id: "ZIN 2. Melodicke typy 010",
    oblast: "Melodicke bicie - typy a rozsahy",
    podoblast: "Spolocne vlastnosti",
    pravda: "Farbu melodickych bicich meni tvrdost aj dotykova plocha palicky; zvonkohra ma inharmonickejsie spektrum nez vibrafon.",
    nepravda: "Farbu melodickych bicich meni len sila uderu, palicky su rovnake; zvonkohra ma cistejsie spektrum nez vibrafon."
  },

  // ===== Zakladne bicie orchestra (7) =====
  {
    id: "ZIN 2. Zakladne bicie 001",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Prehlad",
    pravda: "Zakladne bicie orchestra: tympany, velky buben, maly bubienok, cinely, triangl, tam-tam + zvonkohra, xylofon, zvony.",
    nepravda: "Zakladne bicie orchestra: bicia suprava s hi-hatkou, cinelmi ride a crash + zvonkohra, xylofon, zvony."
  },
  {
    id: "ZIN 2. Zakladne bicie 002",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Tympany",
    pravda: "Tympany: ladene membranofony; pedal meni napatie blany; bezna sada styri kusy; basovy kluc.",
    nepravda: "Tympany: ladene membranofony; pedal meni napatie blany; bezna sada styri kusy; huslovy kluc."
  },
  {
    id: "ZIN 2. Zakladne bicie 003",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Tympany",
    pravda: "Farba tympanu: radialne mody daju alikvoty, kruhove mody zhluk; zavisi od miesta uderu a tvrdosti palicky.",
    nepravda: "Farba tympanu: kruhove mody daju alikvoty, radialne mody zhluk; zavisi od miesta uderu a tvrdosti palicky."
  },
  {
    id: "ZIN 2. Zakladne bicie 004",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Neladene bicie",
    pravda: "Velky buben: neurcita vyska; maly bubienok: strunnik na spodnej blane - sumivy zvuk.",
    nepravda: "Velky buben: ladena vyska; maly bubienok: strunnik na hornej blane - sumivy zvuk."
  },
  {
    id: "ZIN 2. Zakladne bicie 005",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Neladene bicie",
    pravda: "Cinely v orchestri: par hrany o seba (a due) + zaveseny cinel hrany palickami.",
    nepravda: "Cinely v orchestri: vyhradne zaveseny cinel hrany palickami, hra o seba sa nepouziva."
  },
  {
    id: "ZIN 2. Zakladne bicie 006",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Neladene bicie",
    pravda: "Triangl: neuzavrety kovovy trojuholnik, neurcita vyska; tam-tam: velky disk neurcitej vysky (gong ma ladenu).",
    nepravda: "Triangl: uzavrety kovovy trojuholnik, ladena vyska; tam-tam: velky disk neurcitej vysky (gong ma ladenu)."
  },
  {
    id: "ZIN 2. Zakladne bicie 007",
    oblast: "Zakladne bicie orchestra",
    podoblast: "Rozdelenie",
    pravda: "Bicie delime na membranofony (blanozvucne) a idiofony (samozvucne); obe skupiny maju zastupcov s urcitou aj neurcitou vyskou.",
    nepravda: "Bicie delime na membranofony (blanozvucne) a idiofony (samozvucne); urcitu vysku mozu mat len membranofony."
  }
];

const zin2CrackOtazky = zin2CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 2. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "2. Melodicke bicie nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Bici nastroje.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin2CrackOtazky);

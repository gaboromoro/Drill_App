// ZIN SZZ okruh 3: Akusticke klavesove nastroje podla principu tvorby zvuku;
// dodnes pouzivane elektromechanicke klavesove nastroje.
// SZZ otazka: Roztridte akusticke klavesove nastroje podle principu tvorby zvuku.
// Jake jsou dodnes pouzivane elektromechanicke klavesove nastroje.
// 16 statementov, telegraficky styl. Zdroj: "Prednaska - varhany", "Strunne nastroje", "Uvod do ZI".

const zin3CrackData = [
  // ===== Rozdelenie podla tvorby zvuku (9) =====
  {
    id: "ZIN 3. Rozdelenie 001",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Kategorie",
    pravda: "Akusticke klavesove: struny uderane (klavir), struny trsane (cembalo), pistalove (varhany), volne jazycky (harmonium, akordeon), idiofonicke (celesta).",
    nepravda: "Akusticke klavesove: struny uderane (cembalo), struny trsane (klavir), pistalove (varhany), volne jazycky (harmonium, akordeon), idiofonicke (celesta)."
  },
  {
    id: "ZIN 3. Rozdelenie 002",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove uderne",
    pravda: "Klavir: plstene kladivka udieraju struny; dynamika sa meni silou uderu do klavesy.",
    nepravda: "Klavir: plstene kladivka udieraju struny; dynamika sa meni prepinanim registrov."
  },
  {
    id: "ZIN 3. Rozdelenie 003",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove trsane",
    pravda: "Cembalo: trn (povodne havranie brko) trsne strunu; dynamika uderom nemozna - menia ju registre a manualy.",
    nepravda: "Cembalo: trn (povodne havranie brko) trsne strunu; dynamika sa plynulo meni silou uderu ako u klavira."
  },
  {
    id: "ZIN 3. Rozdelenie 004",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove trsane",
    pravda: "Spinet a virginal: mensie odvodeniny cembala s jednou strunou na ton.",
    nepravda: "Spinet a virginal: mensie odvodeniny klavira s kladivkovou mechanikou."
  },
  {
    id: "ZIN 3. Rozdelenie 005",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove uderne",
    pravda: "Klavichord: kovove tangenty zostavaju oprete o strunu - umoznuje jemne vibrato (bebung).",
    nepravda: "Klavichord: kovove tangenty hned po udere odskocia od struny - vibrato nie je mozne."
  },
  {
    id: "ZIN 3. Rozdelenie 006",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Pistalove",
    pravda: "Varhany: vzduch z mecha rozoznieva pistaly retne (labialne) a jazyckove (lingualne).",
    nepravda: "Varhany: vzduch z mecha rozoznieva pistaly retne (labialne) a strunove (chordalne)."
  },
  {
    id: "ZIN 3. Rozdelenie 007",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Pistalove",
    pravda: "Retne pistaly: otvorene alebo kryte; kryta znie o oktavu nizsie a ma tlmeny ton chudobny na alikvoty.",
    nepravda: "Retne pistaly: otvorene alebo kryte; kryta znie o oktavu vyssie a ma ostry ton bohaty na alikvoty."
  },
  {
    id: "ZIN 3. Rozdelenie 008",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Volne jazycky",
    pravda: "Harmonium a akordeon: volne (prierazne) jazycky rozkmitane prudom vzduchu.",
    nepravda: "Harmonium a akordeon: male retne pistaly rozkmitane prudom vzduchu."
  },
  {
    id: "ZIN 3. Rozdelenie 009",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Idiofonicke",
    pravda: "Celesta (a klavesova zvonkohra): kladivka udieraju kovove platnicky - klavesove idiofony.",
    nepravda: "Celesta (a klavesova zvonkohra): kladivka udieraju napnute blany - klavesove membranofony."
  },

  // ===== Elektromechanicke klavesy (7) =====
  {
    id: "ZIN 3. Elektromechanicke 001",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Prehlad",
    pravda: "Dodnes pouzivane elektromechanicke klavesy: Hammond, Fender Rhodes, Wurlitzer, Clavinet, Mellotron.",
    nepravda: "Dodnes pouzivane elektromechanicke klavesy: Trautonium, Theremin, Clavivox, Electronium, Mellotron."
  },
  {
    id: "ZIN 3. Elektromechanicke 002",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Hammond: rotujuce tonove koliesko (tonewheel) pred elektromagnetickym snimacom; farba drawbarmi; typicky s Leslie ozvucnicou.",
    nepravda: "Hammond: rotujuca magnetofonova paska pred elektrostatickym snimacom; farba drawbarmi; typicky s Leslie ozvucnicou."
  },
  {
    id: "ZIN 3. Elektromechanicke 003",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Fender Rhodes: kladivka udieraju kovove tyny (tines); elektromagneticke snimanie.",
    nepravda: "Fender Rhodes: kladivka udieraju struny ako klavir; elektrostaticke snimanie."
  },
  {
    id: "ZIN 3. Elektromechanicke 004",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Wurlitzer: kladivka udieraju kovove jazyky (reeds); elektrostaticke snimanie.",
    nepravda: "Wurlitzer: kladivka udieraju tonove kolieska; elektromagneticke snimanie."
  },
  {
    id: "ZIN 3. Elektromechanicke 005",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Clavinet: tangenty udieraju struny; elektromagneticke snimanie; perkusivny funky zvuk.",
    nepravda: "Clavinet: trny trsaju struny; elektrostaticke snimanie; perkusivny funky zvuk."
  },
  {
    id: "ZIN 3. Elektromechanicke 006",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Mellotron: pod kazdou klavesou sa prehrava nahrata magnetofonova paska (magnetofonicky princip).",
    nepravda: "Mellotron: pod kazdou klavesou sa otaca mala gramofonova platna (gramotoricky princip)."
  },
  {
    id: "ZIN 3. Elektromechanicke 007",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Taxonomia",
    pravda: "Rhodes, Wurlitzer a Clavinet su mechanicko-elektricke (mechanicke budenie + snimac); Hammond je elektromechanicky (elektromagneticky), Mellotron magnetofonicky.",
    nepravda: "Rhodes, Wurlitzer a Clavinet su elektromechanicke (elektromagneticke); Hammond je mechanicko-elektricky (mechanicke budenie + snimac), Mellotron magnetofonicky."
  }
];

const zin3CrackOtazky = zin3CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 3. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "3. Klavesove nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Prednaska - varhany.pdf / Strunne nastroje - prednasky.pdf / Uvod do ZI.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin3CrackOtazky);

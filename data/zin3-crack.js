// ZIN SZZ okruh 3: Akusticke klavesove nastroje podla principu tvorby zvuku;
// dodnes pouzivane elektromechanicke klavesove nastroje.
// SZZ otazka: Roztridte akusticke klavesove nastroje podle principu tvorby zvuku.
// Jake jsou dodnes pouzivane elektromechanicke klavesove nastroje.
// 16 statementov; kazdy ma DVE nepravdy - kazda flipuje inu dolezitu vec.
// Zdroj: "Prednaska - varhany", "Strunne nastroje", "Uvod do ZI".

const zin3CrackData = [
  // ===== Rozdelenie podla tvorby zvuku (9) =====
  {
    id: "ZIN 3. Rozdelenie 001",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Kategorie",
    pravda: "Akusticke klavesove: struny uderane (klavir), struny trsane (cembalo), pistalove (varhany), volne jazycky (harmonium, akordeon), idiofonicke (celesta).",
    nepravda: "Akusticke klavesove: struny uderane (cembalo), struny trsane (klavir), pistalove (varhany), volne jazycky (harmonium, akordeon), idiofonicke (celesta).",
    nepravda2: "Akusticke klavesove: struny uderane (klavir), struny trsane (cembalo), pistalove (varhany), volne jazycky (harmonium, mellotron), idiofonicke (celesta)."
  },
  {
    id: "ZIN 3. Rozdelenie 002",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove uderne",
    pravda: "Klavir: plstene kladivka udieraju struny; dynamika sa meni silou uderu do klavesy.",
    nepravda: "Klavir: plstene kladivka udieraju struny; dynamika sa meni prepinanim registrov.",
    nepravda2: "Klavir: kovove tangenty udieraju struny; dynamika sa meni silou uderu do klavesy."
  },
  {
    id: "ZIN 3. Rozdelenie 003",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove trsane",
    pravda: "Cembalo: trn (povodne havranie brko) trsne strunu; dynamika uderom nemozna - menia ju registre a manualy.",
    nepravda: "Cembalo: trn (povodne havranie brko) trsne strunu; dynamika sa plynulo meni silou uderu ako u klavira.",
    nepravda2: "Cembalo: trn (povodne labutie brko) trsne strunu; dynamika uderom nemozna - menia ju registre a manualy."
  },
  {
    id: "ZIN 3. Rozdelenie 004",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove trsane",
    pravda: "Spinet a virginal: mensie odvodeniny cembala s jednou strunou na ton.",
    nepravda: "Spinet a virginal: mensie odvodeniny klavira s kladivkovou mechanikou.",
    nepravda2: "Spinet a virginal: vacsie koncertne verzie cembala s dvomi manualmi."
  },
  {
    id: "ZIN 3. Rozdelenie 005",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Strunove uderne",
    pravda: "Klavichord: kovove tangenty zostavaju oprete o strunu - umoznuje jemne vibrato (bebung).",
    nepravda: "Klavichord: kovove tangenty hned po udere odskocia od struny - vibrato nie je mozne.",
    nepravda2: "Klavichord: kovove tangenty zostavaju oprete o strunu - dynamika uderom nie je mozna, ako u cembala."
  },
  {
    id: "ZIN 3. Rozdelenie 006",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Pistalove",
    pravda: "Varhany: vzduch z mecha rozoznieva pistaly retne (labialne) a jazyckove (lingualne).",
    nepravda: "Varhany: vzduch z mecha rozoznieva pistaly retne (labialne) a strunove (chordalne).",
    nepravda2: "Varhany: vzduch z mecha rozoznieva pistaly retne (lingualne) a jazyckove (labialne)."
  },
  {
    id: "ZIN 3. Rozdelenie 007",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Pistalove",
    pravda: "Retne pistaly: otvorene alebo kryte; kryta znie o oktavu nizsie a ma tlmeny ton chudobny na alikvoty.",
    nepravda: "Retne pistaly: otvorene alebo kryte; kryta znie o oktavu vyssie a ma ostry ton bohaty na alikvoty.",
    nepravda2: "Retne pistaly: otvorene alebo kryte; kryta znie o kvintu nizsie a ma tlmeny ton chudobny na alikvoty."
  },
  {
    id: "ZIN 3. Rozdelenie 008",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Volne jazycky",
    pravda: "Harmonium a akordeon: volne (prierazne) jazycky rozkmitane prudom vzduchu.",
    nepravda: "Harmonium a akordeon: male retne pistaly rozkmitane prudom vzduchu.",
    nepravda2: "Harmonium a akordeon: volne (prierazne) jazycky, ktore pri kmitani udieraju o ramik."
  },
  {
    id: "ZIN 3. Rozdelenie 009",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Idiofonicke",
    pravda: "Celesta (a klavesova zvonkohra): kladivka udieraju kovove platnicky - klavesove idiofony.",
    nepravda: "Celesta (a klavesova zvonkohra): kladivka udieraju napnute blany - klavesove membranofony.",
    nepravda2: "Celesta (a klavesova zvonkohra): kladivka udieraju kovove struny - klavesove chordofony."
  },

  // ===== Elektromechanicke klavesy (7) =====
  {
    id: "ZIN 3. Elektromechanicke 001",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Prehlad",
    pravda: "Dodnes pouzivane elektromechanicke klavesy: Hammond, Fender Rhodes, Wurlitzer, Clavinet, Mellotron.",
    nepravda: "Dodnes pouzivane elektromechanicke klavesy: Trautonium, Theremin, Clavivox, Electronium, Mellotron.",
    nepravda2: "Dodnes pouzivane elektromechanicke klavesy: Hammond, Fender Rhodes, Wurlitzer, Clavinet, Theremin."
  },
  {
    id: "ZIN 3. Elektromechanicke 002",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Hammond: rotujuce tonove koliesko (tonewheel) pred elektromagnetickym snimacom; farba drawbarmi; typicky s Leslie ozvucnicou.",
    nepravda: "Hammond: rotujuca magnetofonova paska pred elektromagnetickym snimacom; farba drawbarmi; typicky s Leslie ozvucnicou.",
    nepravda2: "Hammond: rotujuce tonove koliesko (tonewheel) pred elektrostatickym snimacom; farba drawbarmi; typicky s Leslie ozvucnicou."
  },
  {
    id: "ZIN 3. Elektromechanicke 003",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Fender Rhodes: kladivka udieraju kovove tyny (tines); elektromagneticke snimanie.",
    nepravda: "Fender Rhodes: kladivka udieraju kovove tyny (tines); elektrostaticke snimanie.",
    nepravda2: "Fender Rhodes: kladivka udieraju kovove jazyky (reeds); elektromagneticke snimanie."
  },
  {
    id: "ZIN 3. Elektromechanicke 004",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Wurlitzer: kladivka udieraju kovove jazyky (reeds); elektrostaticke snimanie.",
    nepravda: "Wurlitzer: kladivka udieraju kovove jazyky (reeds); elektromagneticke snimanie.",
    nepravda2: "Wurlitzer: kladivka udieraju kovove tyny (tines); elektrostaticke snimanie."
  },
  {
    id: "ZIN 3. Elektromechanicke 005",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Clavinet: tangenty udieraju struny; elektromagneticke snimanie; perkusivny funky zvuk.",
    nepravda: "Clavinet: tangenty udieraju struny; elektrostaticke snimanie; perkusivny funky zvuk.",
    nepravda2: "Clavinet: trny trsaju struny; elektromagneticke snimanie; perkusivny funky zvuk."
  },
  {
    id: "ZIN 3. Elektromechanicke 006",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Nastroje",
    pravda: "Mellotron: pod kazdou klavesou sa prehrava nahrata magnetofonova paska (magnetofonicky princip).",
    nepravda: "Mellotron: pod kazdou klavesou sa otaca mala gramofonova platna (gramotoricky princip).",
    nepravda2: "Mellotron: pod kazdou klavesou sa prehrava nekonecna magnetofonova slucka (paska bez konca)."
  },
  {
    id: "ZIN 3. Elektromechanicke 007",
    oblast: "Elektromechanicke klavesy",
    podoblast: "Taxonomia",
    pravda: "Rhodes, Wurlitzer a Clavinet su mechanicko-elektricke (mechanicke budenie + snimac); Hammond je elektromechanicky (elektromagneticky), Mellotron magnetofonicky.",
    nepravda: "Rhodes, Wurlitzer a Clavinet su elektromechanicke (elektromagneticke); Hammond je mechanicko-elektricky (mechanicke budenie + snimac), Mellotron magnetofonicky.",
    nepravda2: "Rhodes, Wurlitzer a Clavinet su mechanicko-elektricke (mechanicke budenie + snimac); Hammond je elektromechanicky (elektromagneticky), Mellotron gramotoricky."
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
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zin3CrackOtazky);

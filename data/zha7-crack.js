// ZHA SZZ okruh 7: Zakladne delenie nastrojov podla tvorby zvuku; akusticke vyzarovanie,
// najma smerova charakteristika.
// SZZ otazka: Jake je zakladni deleni hudebnich nastroju z hlediska vytvareni zvuku?
// U zastupcu jednotlivych kategorii pojednejte o akustickem vyzarovani, predevsim o smerove
// charakteristice.
// Zdroj: Ai61R_HudebniNastroje, Ai51R_Sireni.

const zha7CrackData = [
  {
    id: "ZHA 7. Delenie 001",
    oblast: "Delenie nastrojov",
    podoblast: "Hlavne kategorie",
    pravda: "Delenie podla vzniku zvuku (co kmita): chordofony, membranofony, aerofony, idiofony, elektrofony.",
    nepravda: "Delenie podla vzniku zvuku: slacikove, dychove, bicie, klavesove, elektronicke.",
    nepravda2: "Delenie podla vzniku zvuku: chordofony, membranofony, aerofony - elektrofony a idiofony sem nepatria."
  },
  {
    id: "ZHA 7. Delenie 002",
    oblast: "Delenie nastrojov",
    podoblast: "Chordofony",
    pravda: "Chordofony (struny) delime na slacikove, trsacie (drnkacie) a kladivkove.",
    nepravda: "Chordofony (struny) delime na zestove, platkove a hranove.",
    nepravda2: "Chordofony delime na slacikove a membranofonove."
  },
  {
    id: "ZHA 7. Delenie 003",
    oblast: "Delenie nastrojov",
    podoblast: "Aerofony",
    pravda: "Aerofony (vzduch) delime na zestove, platkove a retne (hranove).",
    nepravda: "Aerofony (vzduch) delime na slacikove, trsacie a kladivkove.",
    nepravda2: "Aerofony delime len na zestove a idiofonove."
  },
  {
    id: "ZHA 7. Delenie 004",
    oblast: "Delenie nastrojov",
    podoblast: "Idiofon a membranofon",
    pravda: "Idiofon = kmita samotne telo nastroja; membranofon = kmita napnuta blana.",
    nepravda: "Idiofon = kmita napnuta blana; membranofon = kmita samotne telo nastroja.",
    nepravda2: "Idiofon = kmita vzduchovy stlpec; membranofon = kmita struna."
  },
  {
    id: "ZHA 7. Casti 001",
    oblast: "Spolocne casti",
    podoblast: "Funkcne celky",
    pravda: "Kazdy nastroj ma excitator (budic dodava energiu), oscilator (kmita), rezonator (zosilni), radiator (vyziari zvuk).",
    nepravda: "Kazdy nastroj ma len oscilator a rezonator; budic ani radiator nie su potrebne.",
    nepravda2: "Excitator zosilnuje, rezonator kmita, oscilator vyziari zvuk, radiator dodava energiu."
  },
  {
    id: "ZHA 7. Smerovost 001",
    oblast: "Smerova charakteristika",
    podoblast: "Definicia",
    pravda: "Smerova charakteristika = na ktoru stranu nastroj vyzaruje; lisi sa pre rozne vysky tonu.",
    nepravda: "Smerova charakteristika = ako rychlo nastroj vyzaruje; je rovnaka pre vsetky vysky tonu.",
    nepravda2: "Smerova charakteristika = celkovy akusticky vykon nastroja v sirenom vsetkymi smermi rovnako."
  },
  {
    id: "ZHA 7. Smerovost 002",
    oblast: "Smerova charakteristika",
    podoblast: "Frekvencia a smerovost",
    pravda: "Nizke frekvencie sa siria vsesmerovo (dlha vlna obide prekazku), vysoke frekvencie smerovo.",
    nepravda: "Nizke frekvencie sa siria smerovo (uzky luc), vysoke frekvencie vsesmerovo.",
    nepravda2: "Vsetky frekvencie sa siria rovnako vsesmerovo nezavisle od vlnovej dlzky."
  },
  {
    id: "ZHA 7. Smerovost 003",
    oblast: "Smerova charakteristika",
    podoblast: "Smerovost a vlna",
    pravda: "Smerovost rastie s frekvenciou: kratka vlna = uzky luc.",
    nepravda: "Smerovost klesa s frekvenciou: kratka vlna = siroky luc.",
    nepravda2: "Smerovost nezavisi od frekvencie, len od velkosti nastroja."
  },
  {
    id: "ZHA 7. Smerovost 004",
    oblast: "Smerova charakteristika",
    podoblast: "Dychy",
    pravda: "U dychov zavisi smer vyzarovania od poslednej otvorenej klapky, nielen od roztrubu.",
    nepravda: "U dychov vyzaruje zvuk vzdy len z roztrubu, poloha klapiek na smer nema vplyv.",
    nepravda2: "U dychov zavisi smer vyzarovania od natisku, nie od klapiek ani roztrubu."
  },
  {
    id: "ZHA 7. Vykon 001",
    oblast: "Akusticke vyzarovanie",
    podoblast: "Akusticky vykon",
    pravda: "Akusticky vykon nastrojov sa vyrazne lisi (rad mW az jednotky W); rozmiestnenie v telese to musi zohladnit.",
    nepravda: "Akusticky vykon vsetkych nastrojov je takmer rovnaky, preto rozmiestnenie nie je podstatne.",
    nepravda2: "Akusticky vykon zavisi len od velkosti nastroja, nie od dynamiky hry."
  },
  {
    id: "ZHA 7. Klasifikacia 001",
    oblast: "Delenie nastrojov",
    podoblast: "Material",
    pravda: "Klasifikacia podla materialu nema zmysel; podstatny je princip vzniku zvuku.",
    nepravda: "Klasifikacia podla materialu je zakladne delenie nastrojov z hladiska tvorby zvuku.",
    nepravda2: "Klasifikacia podla materialu rozhoduje o tom, ci je nastroj chordofon alebo aerofon."
  }
];

const zha7CrackOtazky = zha7CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 7. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "7. Delenie nastrojov a vyzarovanie",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai61R_HudebniNastroje.pdf / Ai51R_Sireni.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha7CrackOtazky);

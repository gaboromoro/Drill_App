// ZIN SZZ okruh 8: Drevene dychove nastroje.
// SZZ otazka: Popiste drevene dechove nastroje a roztridte podle principu tvoreni zvuku
// a ladeni. Ktere nastroje teto skupiny maji vyraznou zvukovou barvu nebo jinou
// specifickou vlastnost.
// 19 statementov; kazdy ma DVE nepravdy - kazda flipuje inu dolezitu vec.
// Zdroj: "Dechove nastroje - prednasky", "Uvod do ZI".

const zin8CrackData = [
  // ===== Rozdelenie podla tvorby zvuku (5) =====
  {
    id: "ZIN 8. Tvorba zvuku 001",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Skupiny",
    pravda: "Podla budenia: hranove (flauta, pikola, zobcova), jednoplatkove (klarinet, saxofon), dvojplatkove (hoboj, anglicky roh, fagot).",
    nepravda: "Podla budenia: hranove (flauta, pikola, zobcova), jednoplatkove (hoboj, anglicky roh, fagot), dvojplatkove (klarinet, saxofon).",
    nepravda2: "Podla budenia: hranove (flauta, pikola, zobcova), jednoplatkove (klarinet, saxofon), dvojplatkove (hoboj, anglicky roh, basklarinet)."
  },
  {
    id: "ZIN 8. Tvorba zvuku 002",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Skupiny",
    pravda: "Rozhoduje sposob tvorby tonu, nie material - kovova flauta aj saxofon patria k drevenym.",
    nepravda: "Rozhoduje material korpusu - kovova flauta a saxofon patria k plechovym.",
    nepravda2: "Rozhoduje sposob tvorby tonu, nie material - kovova flauta patri k drevenym, saxofon k plechovym."
  },
  {
    id: "ZIN 8. Tvorba zvuku 003",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Skupiny",
    pravda: "Hranove bez strbiny: priecna a panova flauta (luc tvoria pery); so strbinou: zobcova flauta, pistaly.",
    nepravda: "Hranove bez strbiny: zobcova flauta, pistaly; so strbinou: priecna a panova flauta (luc tvoria pery).",
    nepravda2: "Hranove bez strbiny: priecna a zobcova flauta (luc tvoria pery); so strbinou: panova flauta, pistaly."
  },
  {
    id: "ZIN 8. Tvorba zvuku 004",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Prefukovanie",
    pravda: "Prefukovanie: flauta (otvorena trubica) do oktavy; klarinet (polozatvoreny valec) do duodecimy; hoboj, fagot, sax (konicke) do oktavy.",
    nepravda: "Prefukovanie: flauta (otvorena trubica) do duodecimy; klarinet (polozatvoreny valec) do oktavy; hoboj, fagot, sax (konicke) do oktavy.",
    nepravda2: "Prefukovanie: flauta (otvorena trubica) do oktavy; klarinet (polozatvoreny valec) do duodecimy; hoboj, fagot, sax (konicke) do duodecimy."
  },
  {
    id: "ZIN 8. Tvorba zvuku 005",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Prefukovanie",
    pravda: "Klarinet ma v spodnom registri zoslabene parne harmonicke - dosledok polozatvorenej valcovej trubice.",
    nepravda: "Klarinet ma v spodnom registri zoslabene neparne harmonicke - dosledok polozatvorenej valcovej trubice.",
    nepravda2: "Klarinet ma v hornom registri zoslabene parne harmonicke - dosledok polozatvorenej valcovej trubice."
  },

  // ===== Rozdelenie podla ladenia (4) =====
  {
    id: "ZIN 8. Ladenie 001",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "In C (netransponuju): flauta, hoboj, fagot.",
    nepravda: "In C (netransponuju): flauta, klarinet, anglicky roh.",
    nepravda2: "In C (netransponuju): flauta, hoboj, klarinet."
  },
  {
    id: "ZIN 8. Ladenie 002",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "In B: klarinet, basklarinet (o nonu), sopran- a tenorsaxofon; in A: klarinet A (m3 nizsie).",
    nepravda: "In B: klarinet, basklarinet (o nonu), sopran- a tenorsaxofon; in A: klarinet A (m3 vyssie).",
    nepravda2: "In B: klarinet, basklarinet (o oktavu), sopran- a tenorsaxofon; in A: klarinet A (m3 nizsie)."
  },
  {
    id: "ZIN 8. Ladenie 003",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "In F: anglicky roh (kvinta nizsie); in G: altova flauta (kvarta nizsie); in Es: altsax, barytonsax a Es klarinet (m3 VYSSIE).",
    nepravda: "In F: anglicky roh (kvarta nizsie); in G: altova flauta (kvinta nizsie); in Es: altsax, barytonsax a Es klarinet (m3 VYSSIE).",
    nepravda2: "In F: anglicky roh (kvinta nizsie); in G: altova flauta (kvarta nizsie); in Es: altsax, barytonsax a Es klarinet (m3 NIZSIE)."
  },
  {
    id: "ZIN 8. Ladenie 004",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "Oktavove: pikola znie o oktavu vyssie, kontrafagot o oktavu nizsie.",
    nepravda: "Oktavove: pikola znie o oktavu nizsie, kontrafagot o oktavu vyssie.",
    nepravda2: "Oktavove: pikola znie o oktavu vyssie, basklarinet o oktavu nizsie."
  },

  // ===== Nastroje (6) =====
  {
    id: "ZIN 8. Nastroje 001",
    oblast: "Nastroje",
    podoblast: "Flauty",
    pravda: "Priecna flauta: Boehmov klapkovy system, 3 diely, dnes z kovu; pikola = polovicna flauta.",
    nepravda: "Priecna flauta: Boehmov klapkovy system, 5 dielov, dnes z kovu; pikola = polovicna flauta.",
    nepravda2: "Priecna flauta: Mullerov klapkovy system, 3 diely, dnes z kovu; pikola = polovicna flauta."
  },
  {
    id: "ZIN 8. Nastroje 002",
    oblast: "Nastroje",
    podoblast: "Flauty",
    pravda: "Zobcove flauty: rodina od garklein po subkontrabas; ladenia sa striedaju C a F (sopran C, alt F, tenor C, bas F).",
    nepravda: "Zobcove flauty: rodina od garklein po subkontrabas; ladenia sa striedaju C a G (sopran C, alt G, tenor C, bas G).",
    nepravda2: "Zobcove flauty: rodina od garklein po subkontrabas; ladenia sa striedaju C a F (sopran F, alt C, tenor F, bas C)."
  },
  {
    id: "ZIN 8. Nastroje 003",
    oblast: "Nastroje",
    podoblast: "Jednoplatkove",
    pravda: "Klarinet: 5 dielov (hubicka, sudok, horny a spodny diel, ozvucnik); platok z trste rakosovitej.",
    nepravda: "Klarinet: 3 diely (hubicka, korpus, ozvucnik); platok z trste rakosovitej.",
    nepravda2: "Klarinet: 5 dielov (hubicka, sudok, horny a spodny diel, ozvucnik); platok z bambusu."
  },
  {
    id: "ZIN 8. Nastroje 004",
    oblast: "Nastroje",
    podoblast: "Jednoplatkove",
    pravda: "Saxofon (Adolphe Sax): kovovy, jednoduchy platok, konicky vrt; 5 druhov - sopran B, alt Es, tenor B, baryton Es, bas B.",
    nepravda: "Saxofon (Adolphe Sax): kovovy, dvojity platok, konicky vrt; 5 druhov - sopran B, alt Es, tenor B, baryton Es, bas B.",
    nepravda2: "Saxofon (Theobald Boehm): kovovy, jednoduchy platok, konicky vrt; 5 druhov - sopran B, alt Es, tenor B, baryton Es, bas B."
  },
  {
    id: "ZIN 8. Nastroje 005",
    oblast: "Nastroje",
    podoblast: "Dvojplatkove",
    pravda: "Hoboj: dvojity platok (strojcek), konicky vrt z tvrdeho dreva; anglicky roh = altovy hoboj s hruskovitym ozvucnikom.",
    nepravda: "Hoboj: dvojity platok (strojcek), konicky vrt z tvrdeho dreva; anglicky roh = altovy hoboj s lievikovitym ozvucnikom.",
    nepravda2: "Hoboj: dvojity platok (strojcek), konicky vrt z tvrdeho dreva; anglicky roh = basovy hoboj s hruskovitym ozvucnikom."
  },
  {
    id: "ZIN 8. Nastroje 006",
    oblast: "Nastroje",
    podoblast: "Dvojplatkove",
    pravda: "Fagot: zalomena trubica cca 2,5 m, strojcek na kovovom esku; kontrafagot znie o oktavu nizsie.",
    nepravda: "Fagot: zalomena trubica cca 2,5 m, strojcek na kovovom esku; kontrafagot znie o kvintu nizsie.",
    nepravda2: "Fagot: zalomena trubica cca 1,3 m, strojcek na kovovom esku; kontrafagot znie o oktavu nizsie."
  },

  // ===== Vyrazne farby a specifika (4) =====
  {
    id: "ZIN 8. Farby 001",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Hoboj: prenikavy nosovy ton - dava orchestru ladiace a1; anglicky roh: melancholicka farba.",
    nepravda: "Hoboj: prenikavy nosovy ton - dava orchestru ladiace a1; anglicky roh: ostra vesela farba.",
    nepravda2: "Hoboj: prenikavy nosovy ton - ladiace a1 dava orchestru klarinet; anglicky roh: melancholicka farba."
  },
  {
    id: "ZIN 8. Farby 002",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Klarinet: najvacsi dynamicky rozsah z dreva + duodecimove prefukovanie; registre od temneho salmajoveho (podla chalumeau).",
    nepravda: "Klarinet: najvacsi dynamicky rozsah z dreva + duodecimove prefukovanie; registre od temneho salmajoveho (podla salmaje).",
    nepravda2: "Klarinet: najvacsi dynamicky rozsah z dreva + oktavove prefukovanie; registre od temneho salmajoveho (podla chalumeau)."
  },
  {
    id: "ZIN 8. Farby 003",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Pikola: najvyssi, prenikavy; Es klarinet: ostry; fagot: suche staccato; basklarinet a kontrafagot: temna hlbka.",
    nepravda: "Pikola: najvyssi, prenikavy; Es klarinet: ostry; fagot: spevave legato; basklarinet a kontrafagot: temna hlbka.",
    nepravda2: "Pikola: najvyssi, prenikavy; Es klarinet: makky a tmavy; fagot: suche staccato; basklarinet a kontrafagot: temna hlbka."
  },
  {
    id: "ZIN 8. Farby 004",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Saxofon: vyrazne formanty, spevavy ton; v symfonickom orchestri len vynimocne (Bolero, Arlesanka).",
    nepravda: "Saxofon: vyrazne formanty, spevavy ton; v symfonickom orchestri standardny clen od romantizmu.",
    nepravda2: "Saxofon: vyrazne formanty, spevavy ton; v symfonickom orchestri len vynimocne (Bolero, Carmen)."
  }
];

const zin8CrackOtazky = zin8CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 8. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "8. Drevene dychove nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Dechove nastroje - prednasky.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zin8CrackOtazky);

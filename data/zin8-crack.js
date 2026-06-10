// ZIN SZZ okruh 8: Drevene dychove nastroje.
// SZZ otazka: Popiste drevene dechove nastroje a roztridte podle principu tvoreni zvuku
// a ladeni. Ktere nastroje teto skupiny maji vyraznou zvukovou barvu nebo jinou
// specifickou vlastnost.
// 19 statementov, telegraficky styl. Zdroj: "Dechove nastroje - prednasky", "Uvod do ZI".

const zin8CrackData = [
  // ===== Rozdelenie podla tvorby zvuku (5) =====
  {
    id: "ZIN 8. Tvorba zvuku 001",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Skupiny",
    pravda: "Podla budenia: hranove (flauta, pikola, zobcova), jednoplatkove (klarinet, saxofon), dvojplatkove (hoboj, anglicky roh, fagot).",
    nepravda: "Podla budenia: hranove (flauta, pikola, zobcova), jednoplatkove (hoboj, anglicky roh, fagot), dvojplatkove (klarinet, saxofon)."
  },
  {
    id: "ZIN 8. Tvorba zvuku 002",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Skupiny",
    pravda: "Rozhoduje sposob tvorby tonu, nie material - kovova flauta aj saxofon patria k drevenym.",
    nepravda: "Rozhoduje material korpusu - kovova flauta a saxofon patria k plechovym."
  },
  {
    id: "ZIN 8. Tvorba zvuku 003",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Skupiny",
    pravda: "Hranove bez strbiny: priecna a panova flauta (luc tvoria pery); so strbinou: zobcova flauta, pistaly.",
    nepravda: "Hranove bez strbiny: zobcova flauta, pistaly; so strbinou: priecna a panova flauta (luc tvoria pery)."
  },
  {
    id: "ZIN 8. Tvorba zvuku 004",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Prefukovanie",
    pravda: "Prefukovanie: flauta (otvorena trubica) do oktavy; klarinet (polozatvoreny valec) do duodecimy; hoboj, fagot, sax (konicke) do oktavy.",
    nepravda: "Prefukovanie: flauta (otvorena trubica) do duodecimy; klarinet (polozatvoreny valec) do oktavy; hoboj, fagot, sax (konicke) do duodecimy."
  },
  {
    id: "ZIN 8. Tvorba zvuku 005",
    oblast: "Rozdelenie podla tvorby zvuku",
    podoblast: "Prefukovanie",
    pravda: "Klarinet ma v spodnom registri zoslabene parne harmonicke - dosledok polozatvorenej valcovej trubice.",
    nepravda: "Klarinet ma v spodnom registri zoslabene neparne harmonicke - dosledok polozatvorenej valcovej trubice."
  },

  // ===== Rozdelenie podla ladenia (4) =====
  {
    id: "ZIN 8. Ladenie 001",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "In C (netransponuju): flauta, hoboj, fagot.",
    nepravda: "In C (netransponuju): flauta, klarinet, anglicky roh."
  },
  {
    id: "ZIN 8. Ladenie 002",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "In B: klarinet, basklarinet (o nonu), sopran- a tenorsaxofon; in A: klarinet A (m3 nizsie).",
    nepravda: "In B: klarinet, basklarinet (o nonu), alt- a barytonsaxofon; in A: klarinet A (m3 vyssie)."
  },
  {
    id: "ZIN 8. Ladenie 003",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "In F: anglicky roh (kvinta nizsie); in G: altova flauta (kvarta nizsie); in Es: altsax, barytonsax a Es klarinet (m3 VYSSIE).",
    nepravda: "In F: anglicky roh (kvarta nizsie); in G: altova flauta (kvinta nizsie); in Es: altsax, barytonsax a Es klarinet (m3 NIZSIE)."
  },
  {
    id: "ZIN 8. Ladenie 004",
    oblast: "Rozdelenie podla ladenia",
    podoblast: "Transpozicie dreva",
    pravda: "Oktavove: pikola znie o oktavu vyssie, kontrafagot o oktavu nizsie.",
    nepravda: "Oktavove: pikola znie o oktavu nizsie, kontrafagot o oktavu vyssie."
  },

  // ===== Nastroje (6) =====
  {
    id: "ZIN 8. Nastroje 001",
    oblast: "Nastroje",
    podoblast: "Flauty",
    pravda: "Priecna flauta: Boehmov klapkovy system, 3 diely, dnes z kovu; pikola = polovicna flauta.",
    nepravda: "Priecna flauta: Boehmov klapkovy system, 5 dielov, dnes z kovu; pikola = polovicna flauta."
  },
  {
    id: "ZIN 8. Nastroje 002",
    oblast: "Nastroje",
    podoblast: "Flauty",
    pravda: "Zobcove flauty: rodina od garklein po subkontrabas; ladenia sa striedaju C a F (sopran C, alt F, tenor C, bas F).",
    nepravda: "Zobcove flauty: rodina od garklein po subkontrabas; ladenia sa striedaju C a G (sopran C, alt G, tenor C, bas G)."
  },
  {
    id: "ZIN 8. Nastroje 003",
    oblast: "Nastroje",
    podoblast: "Jednoplatkove",
    pravda: "Klarinet: 5 dielov (hubicka, sudok, horny a spodny diel, ozvucnik); platok z trste rakosovitej.",
    nepravda: "Klarinet: 3 diely (hubicka, korpus, ozvucnik); platok z trste rakosovitej."
  },
  {
    id: "ZIN 8. Nastroje 004",
    oblast: "Nastroje",
    podoblast: "Jednoplatkove",
    pravda: "Saxofon (Adolphe Sax): kovovy, jednoplatok, konicky vrt; 5 druhov - sopran B, alt Es, tenor B, baryton Es, bas B.",
    nepravda: "Saxofon (Adolphe Sax): kovovy, dvojplatok, valcovy vrt; 5 druhov - sopran Es, alt B, tenor Es, baryton B, bas Es."
  },
  {
    id: "ZIN 8. Nastroje 005",
    oblast: "Nastroje",
    podoblast: "Dvojplatkove",
    pravda: "Hoboj: dvojplatok (strojcek), konicky vrt z tvrdeho dreva; anglicky roh = altovy hoboj s hruskovitym ozvucnikom.",
    nepravda: "Hoboj: jednoplatok na hubicke, valcovy vrt z tvrdeho dreva; anglicky roh = altovy hoboj s lievikovitym ozvucnikom."
  },
  {
    id: "ZIN 8. Nastroje 006",
    oblast: "Nastroje",
    podoblast: "Dvojplatkove",
    pravda: "Fagot: zalomena trubica cca 2,5 m, strojcek na kovovom esku; kontrafagot znie o oktavu nizsie.",
    nepravda: "Fagot: rovna trubica cca 1 m, strojcek priamo v korpuse; kontrafagot znie o kvintu nizsie."
  },

  // ===== Vyrazne farby a specifika (4) =====
  {
    id: "ZIN 8. Farby 001",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Hoboj: prenikavy nosovy ton - dava orchestru ladiace a1; anglicky roh: melancholicka farba.",
    nepravda: "Hoboj: makky tmavy ton - ladiace a1 dava orchestru klarinet; anglicky roh: melancholicka farba."
  },
  {
    id: "ZIN 8. Farby 002",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Klarinet: najvacsi dynamicky rozsah z dreva (pianissimo az forte) + duodecimove prefukovanie; registre od temneho salmajoveho (podla chalumeau).",
    nepravda: "Klarinet: najmensi dynamicky rozsah z dreva + oktavove prefukovanie; registre od temneho salmajoveho (podla salmaje)."
  },
  {
    id: "ZIN 8. Farby 003",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Pikola: najvyssi, prenikavy; Es klarinet: ostry; fagot: suche staccato; basklarinet a kontrafagot: temna hlbka.",
    nepravda: "Pikola: temna hlbka; Es klarinet: makky; fagot: spevave legato; basklarinet a kontrafagot: prenikava vyska."
  },
  {
    id: "ZIN 8. Farby 004",
    oblast: "Vyrazne farby a specifika",
    podoblast: "Specifika",
    pravda: "Saxofon: vyrazne formanty, spevavy ton; v symfonickom orchestri len vynimocne (Bolero, Arlesanka).",
    nepravda: "Saxofon: ploche spektrum bez formantov; v symfonickom orchestri standardny clen od klasicizmu."
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
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin8CrackOtazky);

// ZIN specialny okruh: Rozsahy.
// Zhrnutie rozsahov a transpozicii nastrojov napriec ZIN okruhmi.

const zinRozsahyData = [
  // ===== Slaciky a drnkacie =====
  {
    id: "ZIN Rozsahy Slaciky 001",
    oblast: "Slaciky a drnkacie",
    podoblast: "Husle a viola",
    pravda: "Husle: bezny rozsah g az a3; viola: c az e3 a cita hlavne v altovom kluci.",
    nepravda: "Husle: bezny rozsah c az a3; viola: g az e3 a cita hlavne v altovom kluci.",
    nepravda2: "Husle: bezny rozsah g az e3; viola: c az e3 a cita hlavne v basovom kluci."
  },
  {
    id: "ZIN Rozsahy Slaciky 002",
    oblast: "Slaciky a drnkacie",
    podoblast: "Violoncello a kontrabas",
    pravda: "Violoncello: bezny rozsah C az a2; kontrabas ma struny E1, A1, D, G a znie o oktavu nizsie, nez sa pise.",
    nepravda: "Violoncello: bezny rozsah C az a1; kontrabas ma struny E1, A1, D, G a znie o oktavu nizsie, nez sa pise.",
    nepravda2: "Violoncello: bezny rozsah C az a2; kontrabas ma struny C, G, d, a a znie tak, ako sa pise."
  },
  {
    id: "ZIN Rozsahy Slaciky 003",
    oblast: "Slaciky a drnkacie",
    podoblast: "Stara hudba",
    pravda: "Violy da gamba tvoria rodinu od diskantu po bas; violone je najhlbsi clen rodiny, blizky kontrabasu.",
    nepravda: "Violy da gamba maju vsetky rovnaky rozsah; violone je sopranovy clen rodiny.",
    nepravda2: "Violy da gamba tvoria rodinu od pikoly po tenor; violone je predchodca husli."
  },
  {
    id: "ZIN Rozsahy Slaciky 004",
    oblast: "Slaciky a drnkacie",
    podoblast: "Harfa",
    pravda: "Koncertna harfa ma 47 strun, priblizne rozsah Ces1 az gis4; pedale menia kazdy ton o poltony.",
    nepravda: "Koncertna harfa ma 47 strun, priblizne rozsah Ces1 az c3; pedale menia kazdy ton o oktavy.",
    nepravda2: "Koncertna harfa ma 37 strun, priblizne rozsah c az c4; pedale sluzia iba na tlmenie."
  },
  {
    id: "ZIN Rozsahy Slaciky 005",
    oblast: "Slaciky a drnkacie",
    podoblast: "Gitara a basgitara",
    pravda: "Klasicka gitara sa pise od E po cca h3/e4 a znie o oktavu nizsie; 4-strunna basgitara E1, A1, D, G tiez znie o oktavu nizsie.",
    nepravda: "Klasicka gitara sa pise od E po cca h3/e4 a znie tak, ako sa pise; 4-strunna basgitara C, G, d, a znie o oktavu vyssie.",
    nepravda2: "Klasicka gitara sa pise od C po cca c3 a znie o dve oktavy nizsie; 4-strunna basgitara E1, A1, D, G znie tak, ako sa pise."
  },
  {
    id: "ZIN Rozsahy Slaciky 006",
    oblast: "Slaciky a drnkacie",
    podoblast: "Mandolina, ukulele, banjo",
    pravda: "Mandolina: g, d1, a1, e2 ako husle; ukulele: g, c1, e1, a1; 5-strunne banjo casto open G: g, D, G, H, d.",
    nepravda: "Mandolina: E, A, d, g ako gitara; ukulele: g, c1, e1, a1; 5-strunne banjo casto open G: g, D, G, H, d.",
    nepravda2: "Mandolina: g, d1, a1, e2 ako husle; ukulele: e, a, d1, g1; 5-strunne banjo casto open D: f#, D, F#, A, d."
  },
  {
    id: "ZIN Rozsahy Slaciky 007",
    oblast: "Slaciky a drnkacie",
    podoblast: "Lutna a theorba",
    pravda: "Lutna a theorba nemaju jeden pevny moderny rozsah; theorba pridava dlhe basove struny pre hlboke continuo.",
    nepravda: "Lutna a theorba maju pevny rozsah ako moderna gitara; theorba nema ziadne hlboke basove struny.",
    nepravda2: "Lutna a theorba su vzdy ladene v kvintach ako mandolina; theorba je sopranova lutna bez basov."
  },

  // ===== Drevene dychy =====
  {
    id: "ZIN Rozsahy Dreva 001",
    oblast: "Drevene dychy",
    podoblast: "Flauty",
    pravda: "Priecna flauta ma rozsah cca c1 az c4; pikola sa pise cca d1 az c4 a znie o oktavu vyssie.",
    nepravda: "Priecna flauta ma rozsah cca c1 az c4; pikola sa pise cca d1 az c4 a znie o oktavu nizsie.",
    nepravda2: "Priecna flauta ma rozsah cca g az c3; pikola sa pise cca d1 az c4 a znie tak, ako sa pise."
  },
  {
    id: "ZIN Rozsahy Dreva 002",
    oblast: "Drevene dychy",
    podoblast: "Altova a zobcove flauty",
    pravda: "Altova flauta in G znie o cistu kvartu nizsie; zobcove flauty v C/F maju podla velkosti zvycajne asi dvojoktavovy rozsah.",
    nepravda: "Altova flauta in G znie o cistu kvintu nizsie; zobcove flauty v C/F maju podla velkosti zvycajne asi dvojoktavovy rozsah.",
    nepravda2: "Altova flauta in G znie o cistu kvartu vyssie; zobcove flauty maju vzdy rovnaky rozsah ako priecna flauta."
  },
  {
    id: "ZIN Rozsahy Dreva 003",
    oblast: "Drevene dychy",
    podoblast: "Hoboj a anglicky roh",
    pravda: "Hoboj ma rozsah cca b az c3; anglicky roh in F znie o cistu kvintu nizsie, znejuci rozsah cca e az b2.",
    nepravda: "Hoboj ma rozsah cca e az b2; anglicky roh in F znie o cistu kvartu nizsie, znejuci rozsah cca b az c3.",
    nepravda2: "Hoboj ma rozsah cca b az c3; anglicky roh in F znie o cistu kvintu vyssie, znejuci rozsah cca e3 az b4."
  },
  {
    id: "ZIN Rozsahy Dreva 004",
    oblast: "Drevene dychy",
    podoblast: "Klarinety",
    pravda: "Klarinet B/A ma pisany rozsah cca e az g3; B znie o velku sekundu nizsie, A o malu terciu nizsie.",
    nepravda: "Klarinet B/A ma pisany rozsah cca b az g3; B znie o velku sekundu vyssie, A o malu terciu vyssie.",
    nepravda2: "Klarinet B/A ma pisany rozsah cca e az g3; B znie o malu terciu nizsie, A o velku sekundu nizsie."
  },
  {
    id: "ZIN Rozsahy Dreva 005",
    oblast: "Drevene dychy",
    podoblast: "Es a basovy klarinet",
    pravda: "Es klarinet znie o malu terciu vyssie; basklarinet B znie o velku nonu nizsie a casto sa pise do nizkeho D alebo C.",
    nepravda: "Es klarinet znie o malu terciu nizsie; basklarinet B znie o velku sekundu nizsie a nikdy nema nizke D/C.",
    nepravda2: "Es klarinet znie o velku sekundu vyssie; basklarinet B znie o oktavu vyssie a cita len v basovom kluci."
  },
  {
    id: "ZIN Rozsahy Dreva 006",
    oblast: "Drevene dychy",
    podoblast: "Fagot a kontrafagot",
    pravda: "Fagot ma rozsah cca B1 az e2; kontrafagot znie o oktavu nizsie ako zapis.",
    nepravda: "Fagot ma rozsah cca B1 az e2; kontrafagot znie o kvintu nizsie ako zapis.",
    nepravda2: "Fagot ma rozsah cca c az c3; kontrafagot znie o oktavu vyssie ako zapis."
  },
  {
    id: "ZIN Rozsahy Dreva 007",
    oblast: "Drevene dychy",
    podoblast: "Saxofony",
    pravda: "Saxofony maju spolocny pisany rozsah cca b az g3; sopran a tenor su in B, alt a baryton in Es.",
    nepravda: "Saxofony maju kazdy iny pisany rozsah; sopran a alt su in B, tenor a baryton in Es.",
    nepravda2: "Saxofony maju spolocny pisany rozsah cca c1 az a3; sopran a tenor su in Es, alt a baryton in B."
  },
  {
    id: "ZIN Rozsahy Dreva 008",
    oblast: "Drevene dychy",
    podoblast: "Saxofonove transpozicie",
    pravda: "Sopransax znie o velku sekundu nizsie, tenorsax o velku nonu nizsie; altsax o velku sextu nizsie, barytonsax o oktavu + velku sextu nizsie.",
    nepravda: "Sopransax znie o velku nonu nizsie, tenorsax o velku sekundu nizsie; altsax o velku terciu nizsie, barytonsax o oktavu + velku terciu nizsie.",
    nepravda2: "Sopransax a tenorsax zneju o malu terciu vyssie; altsax a barytonsax zneju o cistu kvintu nizsie."
  },

  // ===== Zeste =====
  {
    id: "ZIN Rozsahy Zeste 001",
    oblast: "Zestove nastroje",
    podoblast: "Trubka",
    pravda: "Trubka in B znie o velku sekundu nizsie; pisany rozsah je cca fis az c3.",
    nepravda: "Trubka in B znie o velku sekundu vyssie; pisany rozsah je cca fis az c3.",
    nepravda2: "Trubka in B znie o malu terciu nizsie; pisany rozsah je cca c az g2."
  },
  {
    id: "ZIN Rozsahy Zeste 002",
    oblast: "Zestove nastroje",
    podoblast: "Lesny roh",
    pravda: "Lesny roh in F znie o cistu kvintu nizsie a ma priblizne stvorktavovy rozsah.",
    nepravda: "Lesny roh in F znie o cistu kvartu nizsie a ma priblizne dvojoktavovy rozsah.",
    nepravda2: "Lesny roh in F znie o cistu kvintu vyssie a ma priblizne jednooktavovy rozsah."
  },
  {
    id: "ZIN Rozsahy Zeste 003",
    oblast: "Zestove nastroje",
    podoblast: "Pozoun",
    pravda: "Pozoun netransponuje; bezny rozsah je cca E az b1 plus pedalove tony.",
    nepravda: "Pozoun transponuje in B; bezny rozsah je cca E az b1 bez pedalovych tonov.",
    nepravda2: "Pozoun netransponuje; bezny rozsah je cca fis az c3 ako trubka."
  },
  {
    id: "ZIN Rozsahy Zeste 004",
    oblast: "Zestove nastroje",
    podoblast: "Tuba",
    pravda: "Tuba netransponuje v orchestralnej partiture, cita basovy kluc a podla ladenia pokryva najhlbsi zestovy register.",
    nepravda: "Tuba transponuje in B ako trubka, cita huslovy kluc a pokryva hlavne stredny register.",
    nepravda2: "Tuba netransponuje, ale cita altovy kluc a jej register je vyssi nez register pozounu."
  },

  // ===== Klavesove =====
  {
    id: "ZIN Rozsahy Klavesy 001",
    oblast: "Klavesove nastroje",
    podoblast: "Klavir",
    pravda: "Moderny klavir ma 88 klaves, rozsah A2 az c5.",
    nepravda: "Moderny klavir ma 61 klaves, rozsah C az c4.",
    nepravda2: "Moderny klavir ma 88 klaves, rozsah C1 az c4."
  },
  {
    id: "ZIN Rozsahy Klavesy 002",
    oblast: "Klavesove nastroje",
    podoblast: "Cembalo, klavichord, celesta",
    pravda: "Cembalo a klavichord mavaju podla typu asi 4-5 oktav; celesta ma cca styri oktavy a znie o oktavu vyssie.",
    nepravda: "Cembalo a klavichord maju vzdy 88 klaves; celesta ma cca styri oktavy a znie o oktavu nizsie.",
    nepravda2: "Cembalo a klavichord mavaju podla typu asi 2 oktavy; celesta ma rozsah ako plny klavir a znie tak, ako sa pise."
  },
  {
    id: "ZIN Rozsahy Klavesy 003",
    oblast: "Klavesove nastroje",
    podoblast: "Varhany, harmonium, akordeon",
    pravda: "Varhany, harmonium a akordeon nemaju jeden pevny rozsah; zavisi od dispozicie, manualov, pedalov a typu nastroja.",
    nepravda: "Varhany, harmonium a akordeon maju vzdy presne rozsah moderneho klavira A2 az c5.",
    nepravda2: "Varhany, harmonium a akordeon maju vzdy len jednu oktavu, lebo ich zvuk tvoria vzduchove jazycky alebo pistaly."
  },
  {
    id: "ZIN Rozsahy Klavesy 004",
    oblast: "Klavesove nastroje",
    podoblast: "Elektromechanicke",
    pravda: "Rhodes 73 ma rozsah E1 az e4; Wurlitzer 200A cca A1 az c4; Clavinet D6 cca F1 az e4.",
    nepravda: "Rhodes 73 ma rozsah A2 az c5; Wurlitzer 200A cca C az c4; Clavinet D6 cca c1 az c5.",
    nepravda2: "Rhodes 73, Wurlitzer 200A aj Clavinet D6 maju vzdy rovnaky 88-klavesovy rozsah ako klavir."
  },
  {
    id: "ZIN Rozsahy Klavesy 005",
    oblast: "Klavesove nastroje",
    podoblast: "Hammond a Mellotron",
    pravda: "Hammondove manualy mavaju 61 klaves C az c4; Mellotron M400 ma cca 35 klaves G az f2.",
    nepravda: "Hammondove manualy mavaju 88 klaves A2 az c5; Mellotron M400 ma cca 73 klaves E1 az e4.",
    nepravda2: "Hammondove manualy mavaju 25 klaves C az c2; Mellotron M400 ma rozsah len jednej oktavy."
  },

  // ===== Melodicke a neladene bicie =====
  {
    id: "ZIN Rozsahy Bicie 001",
    oblast: "Bicie nastroje",
    podoblast: "Drevene melodicke bicie",
    pravda: "Xylofon ma pisany rozsah cca c1 az c4 a znie o oktavu vyssie; marimba mava najvacsi rozsah, obvykle 4 az 5 oktav.",
    nepravda: "Xylofon ma pisany rozsah cca c1 az c4 a znie o oktavu nizsie; marimba mava iba 2 oktavy.",
    nepravda2: "Xylofon ma pisany rozsah cca g az c3 a znie tak, ako sa pise; marimba je vzdy mensia nez xylofon."
  },
  {
    id: "ZIN Rozsahy Bicie 002",
    oblast: "Bicie nastroje",
    podoblast: "Kovove melodicke bicie",
    pravda: "Vibrafon ma rozsah f az f3; zvonkohra ma pisany rozsah cca g az c3 a znie o dve oktavy vyssie.",
    nepravda: "Vibrafon ma rozsah c az c3; zvonkohra ma pisany rozsah cca g az c3 a znie o oktavu nizsie.",
    nepravda2: "Vibrafon ma rozsah f az f3; zvonkohra ma pisany rozsah cca f az f3 a znie tak, ako sa pise."
  },
  {
    id: "ZIN Rozsahy Bicie 003",
    oblast: "Bicie nastroje",
    podoblast: "Zvony, celesta, tympany",
    pravda: "Trubicove zvony maju rozsah cca c1 az f2; celesta znie o oktavu vyssie; sada tympanov pokryva priblizne basovy register cca D az a.",
    nepravda: "Trubicove zvony maju rozsah cca c1 az c4; celesta znie o oktavu nizsie; sada tympanov pokryva hlavne sopranovy register.",
    nepravda2: "Trubicove zvony nemaju urcitu vysku; celesta znie tak, ako sa pise; tympany sa nikdy neladia."
  },
  {
    id: "ZIN Rozsahy Bicie 004",
    oblast: "Bicie nastroje",
    podoblast: "Neladene bicie",
    pravda: "Velky buben, maly bubienok, cinely, triangl, tam-tam a vacsina world perkusii nemaju pevny melodicky rozsah.",
    nepravda: "Velky buben, maly bubienok, cinely, triangl a tam-tam maju presny chromaticky rozsah ako xylofon.",
    nepravda2: "Neladene bicie sa v orchestri vzdy zapisuju v huslovom kluci s presnymi vyskovymi tonmi."
  },
  {
    id: "ZIN Rozsahy Bicie 005",
    oblast: "Bicie nastroje",
    podoblast: "Bicia suprava",
    pravda: "Bicia suprava nema melodicky rozsah ako klavir; kick, snare a tomy maju laditelnu, ale neurcitu vysku.",
    nepravda: "Bicia suprava ma standardny melodicky rozsah b az g3 ako saxofony.",
    nepravda2: "Bicia suprava sa vzdy zapisuje ako transponujuci nastroj in B s presnou vyskou kazdeho bubna."
  }
];

const zinRozsahyOtazky = zinRozsahyData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN Rozsahy. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "Rozsahy",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "ZIN SZZ okruhy 1-10 + doplnene standardne rozsahy",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zinRozsahyOtazky);

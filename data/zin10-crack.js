// ZIN SZZ okruh 10: Komorne subory a big band.
// SZZ otazka: Popiste standardni komorni soubory klasicke, jazzove a barokni hudby.
// Uvedte obsazeni a sekce jazzoveho big-bandu.
// 18 statementov; kazdy ma DVE nepravdy - kazda flipuje inu dolezitu vec.
// Zdroj: "Faktura orchestru" (dixieland, big band), "Strunne nastroje" (smyccovy orchester),
// "Zeste"/"Dechove" (kvinteta).

const zin10CrackData = [
  // ===== Klasicke subory (6) =====
  {
    id: "ZIN 10. Klasicke 001",
    oblast: "Klasicke subory",
    podoblast: "Slacikove",
    pravda: "Smyccove kvarteto: 2 husle, viola, violoncello.",
    nepravda: "Smyccove kvarteto: 2 husle, violoncello, kontrabas.",
    nepravda2: "Smyccove kvarteto: husle, 2 violy, violoncello."
  },
  {
    id: "ZIN 10. Klasicke 002",
    oblast: "Klasicke subory",
    podoblast: "Slacikove",
    pravda: "Smyccove trio: husle, viola, cello; kvintet: kvarteto + druha viola alebo druhe cello.",
    nepravda: "Smyccove trio: 2 husle, viola; kvintet: kvarteto + druha viola alebo druhe cello.",
    nepravda2: "Smyccove trio: husle, viola, cello; kvintet: kvarteto + kontrabas."
  },
  {
    id: "ZIN 10. Klasicke 003",
    oblast: "Klasicke subory",
    podoblast: "S klavirom",
    pravda: "Klavirne trio: klavir, husle, cello; klavirny kvintet: klavir + smyccove kvarteto.",
    nepravda: "Klavirne trio: klavir, 2 husle; klavirny kvintet: klavir + smyccove kvarteto.",
    nepravda2: "Klavirne trio: klavir, husle, viola; klavirny kvintet: klavir + smyccove kvarteto."
  },
  {
    id: "ZIN 10. Klasicke 004",
    oblast: "Klasicke subory",
    podoblast: "Dychove",
    pravda: "Dychove kvinteto: flauta, hoboj, klarinet, lesny roh, fagot - roh je jediny plech.",
    nepravda: "Dychove kvinteto: flauta, hoboj, klarinet, trubka, fagot - trubka je jediny plech.",
    nepravda2: "Dychove kvinteto: flauta, hoboj, klarinet, lesny roh, basklarinet - roh je jediny plech."
  },
  {
    id: "ZIN 10. Klasicke 005",
    oblast: "Klasicke subory",
    podoblast: "Dychove",
    pravda: "Zestove kvinteto: 2 trubky, lesny roh, pozoun, tuba.",
    nepravda: "Zestove kvinteto: 2 trubky, 2 pozouny, kridlovka.",
    nepravda2: "Zestove kvinteto: 2 trubky, lesny roh, pozoun, basovy pozoun."
  },
  {
    id: "ZIN 10. Klasicke 006",
    oblast: "Klasicke subory",
    podoblast: "Slacikove",
    pravda: "Smyccovy orchester: 12 az 21 hracov (4-3-2-2-1 az 6-5-4-4-2), casto bez dirigenta.",
    nepravda: "Smyccovy orchester: minimalne 40 hracov (16-14-12-10-8), casto bez dirigenta.",
    nepravda2: "Smyccovy orchester: 12 az 21 hracov (4-3-2-2-1 az 6-5-4-4-2), vzdy s dirigentom."
  },

  // ===== Barokove subory (4) =====
  {
    id: "ZIN 10. Barokove 001",
    oblast: "Barokove subory",
    podoblast: "Basso continuo",
    pravda: "Basso continuo: akordicky nastroj (cembalo, varhany, teorba) + basovy (cello, gamba, violone, fagot); hra z cislovaneho basu.",
    nepravda: "Basso continuo: len akordicky nastroj (cembalo) bez basoveho; hra z cislovaneho basu.",
    nepravda2: "Basso continuo: akordicky nastroj (cembalo, varhany, teorba) + basovy (cello, gamba, violone, fagot); hra z plne vypisanych akordov."
  },
  {
    id: "ZIN 10. Barokove 002",
    oblast: "Barokove subory",
    podoblast: "Formy a telesa",
    pravda: "Triova sonata: 2 vrchne melodicke hlasy + continuo - typicky styria hraci.",
    nepravda: "Triova sonata: 3 vrchne melodicke hlasy bez continua - typicky traja hraci.",
    nepravda2: "Triova sonata: 2 vrchne melodicke hlasy + continuo - typicky traja hraci."
  },
  {
    id: "ZIN 10. Barokove 003",
    oblast: "Barokove subory",
    podoblast: "Formy a telesa",
    pravda: "Concerto grosso: mala skupina solistov (concertino) proti plnemu ansamblu (ripieno/tutti).",
    nepravda: "Concerto grosso: jeden solista (concertino) proti plnemu ansamblu (ripieno/tutti).",
    nepravda2: "Concerto grosso: mala skupina solistov (ripieno) proti plnemu ansamblu (concertino/tutti)."
  },
  {
    id: "ZIN 10. Barokove 004",
    oblast: "Barokove subory",
    podoblast: "Formy a telesa",
    pravda: "Consort: rodina rovnakych nastrojov roznych velkosti (gamby, zobcove flauty); barokovy orchester este bez klarinetov.",
    nepravda: "Consort: rodina rovnakych nastrojov roznych velkosti (gamby, zobcove flauty); barokovy orchester uz s klarinetmi.",
    nepravda2: "Consort: zasadne miesany subor roznych rodin nastrojov; barokovy orchester este bez klarinetov."
  },

  // ===== Jazzove subory (4) =====
  {
    id: "ZIN 10. Jazzove 001",
    oblast: "Jazzove subory",
    podoblast: "Comba",
    pravda: "Jazzova rytmika: klavir alebo gitara, kontrabas (basgitara), bicia suprava.",
    nepravda: "Jazzova rytmika: trubka alebo saxofon, kontrabas (basgitara), bicia suprava.",
    nepravda2: "Jazzova rytmika: klavir alebo gitara, kontrabas (basgitara), vibrafon."
  },
  {
    id: "ZIN 10. Jazzove 002",
    oblast: "Jazzove subory",
    podoblast: "Comba",
    pravda: "Trio: klavir + kontrabas + bicie (alebo organove trio); kvartet/kvintet: rytmika + 1-2 dychy (hardbop: trubka + tenorsax).",
    nepravda: "Trio: tri dychove nastroje bez rytmiky; kvartet/kvintet: rytmika + 1-2 dychy (hardbop: trubka + tenorsax).",
    nepravda2: "Trio: klavir + kontrabas + bicie (alebo organove trio); kvartet/kvintet: rytmika + 1-2 dychy (hardbop: dve trubky)."
  },
  {
    id: "ZIN 10. Jazzove 003",
    oblast: "Jazzove subory",
    podoblast: "Dixieland",
    pravda: "Dixieland: klarinet + trubka (kornet) + pozoun nad rytmikou (banjo/gitara, tuba/kontrabas, bicie); kolektivna improvizacia.",
    nepravda: "Dixieland: flauta + altsaxofon + lesny roh nad rytmikou (banjo/gitara, tuba/kontrabas, bicie); kolektivna improvizacia.",
    nepravda2: "Dixieland: klarinet + trubka (kornet) + pozoun nad rytmikou (banjo/gitara, tuba/kontrabas, bicie); aranzovane unisono bez improvizacie."
  },
  {
    id: "ZIN 10. Jazzove 004",
    oblast: "Jazzove subory",
    podoblast: "Comba",
    pravda: "Combo: male jazzove obsadenie (trio az septet); vacsi celok cleneny do sekcii je big band.",
    nepravda: "Combo: velke jazzove teleso nad 15 hracov; male obsadenie do septeta je big band.",
    nepravda2: "Combo: male jazzove obsadenie (trio az nonet); vacsi celok cleneny do sekcii je big band."
  },

  // ===== Big band (4) =====
  {
    id: "ZIN 10. Big band 001",
    oblast: "Big band",
    podoblast: "Sekcie",
    pravda: "Big band - styri sekcie: saxofony, trubky, pozouny, rytmika.",
    nepravda: "Big band - styri sekcie: saxofony, klarinety, lesne rohy, rytmika.",
    nepravda2: "Big band - styri sekcie: saxofony, trubky, lesne rohy, rytmika."
  },
  {
    id: "ZIN 10. Big band 002",
    oblast: "Big band",
    podoblast: "Obsadenie",
    pravda: "Saxofony: 2 alty, 2 tenory, 1 baryton = 5 hracov; trubky 3-4; pozouny 3-4 vratane basoveho.",
    nepravda: "Saxofony: 2 alty, 2 barytony, 1 tenor = 5 hracov; trubky 3-4; pozouny 3-4 vratane basoveho.",
    nepravda2: "Saxofony: 2 alty, 2 tenory, 1 sopran = 5 hracov; trubky 3-4; pozouny 3-4 vratane basoveho."
  },
  {
    id: "ZIN 10. Big band 003",
    oblast: "Big band",
    podoblast: "Obsadenie",
    pravda: "Standardny big band cca 17 hracov: 5 saxofonov, 4 trubky, 4 pozouny, 4-clenna rytmika (klavir, gitara, kontrabas/basgitara, bicie).",
    nepravda: "Standardny big band cca 30 hracov: 10 saxofonov, 8 trubiek, 8 pozounov, 4-clenna rytmika (klavir, gitara, kontrabas/basgitara, bicie).",
    nepravda2: "Standardny big band cca 21 hracov: 5 saxofonov, 4 trubky, 4 pozouny, 4-clenna rytmika (klavir, gitara, kontrabas/basgitara, bicie)."
  },
  {
    id: "ZIN 10. Big band 004",
    oblast: "Big band",
    podoblast: "Obsadenie",
    pravda: "Do zestov big bandu sa obcas pridava aj par lesnych rohov; saxofonisti casto striedaju klarinet a flautu (doubling).",
    nepravda: "Lesne rohy do big bandu zasadne nepatria; saxofonisti casto striedaju klarinet a flautu (doubling).",
    nepravda2: "Do zestov big bandu sa obcas pridava aj par lesnych rohov; saxofonisti casto striedaju hoboj a fagot (doubling)."
  }
];

const zin10CrackOtazky = zin10CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 10. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "10. Komorne subory a big band",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Faktura orchestru.pdf / Zeste.pdf / Dechove nastroje - prednasky.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zin10CrackOtazky);

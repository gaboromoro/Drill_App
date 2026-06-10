// ZIN SZZ okruh 9: Symfonicky orchester a partitura.
// SZZ otazka: Uvedte slozeni symfonickeho orchestru, jeho zakladni a rozsirene obsazeni.
// Jaka je struktura orchestralni partitury.
// 15 statementov, telegraficky styl. Zdroj: "Strunne nastroje" (pocty slacikov) + standardna organologia.

const zin9CrackData = [
  // ===== Zlozenie a obsadenie (8) =====
  {
    id: "ZIN 9. Zlozenie 001",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Sekcie",
    pravda: "Styri sekcie orchestra: drevene dychove, plechove (zestove), bicie, slacikove; + harfa a klavesove.",
    nepravda: "Tri sekcie orchestra: dychove, bicie, slacikove; harfa a klavesove do orchestra nepatria."
  },
  {
    id: "ZIN 9. Zlozenie 002",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Zakladne obsadenie",
    pravda: "Zakladne (parove) obsadenie: 2 flauty, 2 hoboje, 2 klarinety, 2 fagoty; 2-4 rohy, 2 trubky; tympany; slaciky.",
    nepravda: "Zakladne (parove) obsadenie: 2 flauty, 2 hoboje, 2 klarinety, 2 fagoty; 2-4 rohy, 2 trubky, 3 pozouny, tuba; tympany; slaciky."
  },
  {
    id: "ZIN 9. Zlozenie 003",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Zakladne obsadenie",
    pravda: "Pozouny vstupili do symfonie az s Beethovenom (5. symfonia); tuba este neskor v romantizme.",
    nepravda: "Pozouny boli v symfonii standardne uz od Haydna; Beethoven v 5. symfonii pridal tubu."
  },
  {
    id: "ZIN 9. Zlozenie 004",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Zakladne obsadenie",
    pravda: "Slacikova sekcia: prve husle, druhe husle, violy, violoncella, kontrabasy - najpocetnejsia sekcia.",
    nepravda: "Slacikova sekcia: husle, violy, violoncella, kontrabasy (husle sa nedelia) - najpocetnejsia sekcia."
  },
  {
    id: "ZIN 9. Zlozenie 005",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Rozsirene obsadenie",
    pravda: "Rozsirene (trojite): + pikola, anglicky roh, basklarinet, kontrafagot; 4 rohy, 3 trubky, 3 pozouny, tuba.",
    nepravda: "Rozsirene (trojite): + pikola, anglicky roh, basklarinet, kontrafagot; 8 rohov, 6 trubiek, 6 pozounov, 2 tuby."
  },
  {
    id: "ZIN 9. Zlozenie 006",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Rozsirene obsadenie",
    pravda: "Velky romanticky orchester: 2 harfy, celesta/klavir, rozsirena sekcia bicich.",
    nepravda: "Velky romanticky orchester: 1 harfa; celesta, klavir ani viac bicich sa nepouzivaju."
  },
  {
    id: "ZIN 9. Zlozenie 007",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Pocty slacikov",
    pravda: "Plne slaciky: 16 prvych husli, 14 druhych, 12 viol, 10 violoncell, 8 kontrabasov = 60 hracov.",
    nepravda: "Plne slaciky: 8 prvych husli, 8 druhych, 8 viol, 8 violoncell, 8 kontrabasov = 40 hracov."
  },
  {
    id: "ZIN 9. Zlozenie 008",
    oblast: "Zlozenie a obsadenie",
    podoblast: "Prax",
    pravda: "Vedlajsie nastroje (pikola, anglicky roh) hra 2./3. hrac sekcie; koncertny majster = veduci prvych husli; ladi sa na a1 hoboja.",
    nepravda: "Vedlajsie nastroje (pikola, anglicky roh) hraju samostatni specialisti; koncertny majster = dirigentov asistent; ladi sa na a1 trubky."
  },

  // ===== Partitura (7) =====
  {
    id: "ZIN 9. Partitura 001",
    oblast: "Partitura",
    podoblast: "Poradie sekcii",
    pravda: "Partitura zhora nadol: drevo, plech, tympany a bicie, harfa a klavesove, (spev), slaciky.",
    nepravda: "Partitura zhora nadol: slaciky, plech, tympany a bicie, harfa a klavesove, (spev), drevo."
  },
  {
    id: "ZIN 9. Partitura 002",
    oblast: "Partitura",
    podoblast: "Poradie sekcii",
    pravda: "Drevo zhora: flauty, hoboje, klarinety, fagoty (vedlajsie nastroje pri svojej rodine).",
    nepravda: "Drevo zhora: klarinety, flauty, hoboje, fagoty (vedlajsie nastroje pri svojej rodine)."
  },
  {
    id: "ZIN 9. Partitura 003",
    oblast: "Partitura",
    podoblast: "Poradie sekcii",
    pravda: "Plech zhora: lesne rohy, trubky, pozouny, tuba - rohy nad trubkami napriek nizsiemu ladeniu.",
    nepravda: "Plech zhora: trubky, lesne rohy, pozouny, tuba - poradie presne kopiruje vysku ladenia."
  },
  {
    id: "ZIN 9. Partitura 004",
    oblast: "Partitura",
    podoblast: "Poradie sekcii",
    pravda: "Slaciky zhora: 1. husle, 2. husle, violy, violoncella, kontrabasy.",
    nepravda: "Slaciky zhora: kontrabasy, violoncella, violy, 2. husle, 1. husle."
  },
  {
    id: "ZIN 9. Partitura 005",
    oblast: "Partitura",
    podoblast: "Zapis",
    pravda: "Transponujuce nastroje su v partiture zapisane vo svojej transpozicii; partitura in C ma vsetko v znejucich tonoch.",
    nepravda: "Transponujuce nastroje su v partiture zapisane v znejucich tonoch; partitura in C oznacuje transponovany zapis."
  },
  {
    id: "ZIN 9. Partitura 006",
    oblast: "Partitura",
    podoblast: "Zapis",
    pravda: "Sekcie sa spajaju svorkami a spolocnymi taktovymi ciarami; dva party jedneho nastroja zdielaju osnovu (a2, divisi).",
    nepravda: "Kazda osnova je graficky samostatna bez svoriek; dva party jedneho nastroja musia mat vzdy vlastne osnovy."
  },
  {
    id: "ZIN 9. Partitura 007",
    oblast: "Partitura",
    podoblast: "Zapis",
    pravda: "Tympany: basovy kluc, skutocne tony; neladene bicie: jednolinajkova osnova alebo specialne linky.",
    nepravda: "Tympany: huslovy kluc, transponovane tony; neladene bicie: klasicka patlinajkova osnova s klucom."
  }
];

const zin9CrackOtazky = zin9CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 9. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "9. Symfonicky orchester a partitura",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Strunne nastroje - prednasky.pdf / standardna organologia",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

zinOtazky.push(...zin9CrackOtazky);

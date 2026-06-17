// ZHA SZZ okruh 9: Akustika priestorov a salov; zakladna velicina dozvuku a od coho zavisi;
// prejav stavebnych a zariadovacich prvkov pri interpretacii.
// SZZ otazka: Pojednejte o akustice prostoru a salu. Jaka je zakladni velicina, popisujici
// dozvuk, na cem zavisi. Jak se projevuji jednotlive stavebni a zarizovaci prvky pri prakticke
// interpretaci?
// Zdroj: Ai51R_Sireni.

const zha9CrackData = [
  {
    id: "ZHA 9. Dozvuk 001",
    oblast: "Dozvuk",
    podoblast: "Vznik",
    pravda: "Dozvuk = postupne odrazy po priamom zvuku; po urcitom case prejde do difuzneho dozvuku.",
    nepravda: "Dozvuk = priamy zvuk pred prvymi odrazmi; pred difuznou fazou.",
    nepravda2: "Dozvuk = zoslabenie priameho zvuku pohltenim, bez akychkolvek odrazov."
  },
  {
    id: "ZHA 9. Dozvuk 002",
    oblast: "Dozvuk",
    podoblast: "Zakladna velicina",
    pravda: "Zakladna velicina dozvuku: doba dozvuku (RT, T60) = cas poklesu hladiny o 60 dB.",
    nepravda: "Zakladna velicina dozvuku: intenzita prveho odrazu v dB.",
    nepravda2: "Zakladna velicina dozvuku: doba dozvuku = cas poklesu hladiny o 6 dB."
  },
  {
    id: "ZHA 9. Dozvuk 003",
    oblast: "Dozvuk",
    podoblast: "Od coho zavisi",
    pravda: "Doba dozvuku rastie s objemom priestoru a klesa s pohltivostou a plochou povrchov (Sabineho vztah).",
    nepravda: "Doba dozvuku klesa s objemom priestoru a rastie s pohltivostou povrchov.",
    nepravda2: "Doba dozvuku zavisi len od teploty vzduchu, nie od objemu ani pohltivosti."
  },
  {
    id: "ZHA 9. Dozvuk 004",
    oblast: "Dozvuk",
    podoblast: "Obsadenie",
    pravda: "Obsadenie publikom skracuje dozvuk - ludia a textilie pohlcuju zvuk.",
    nepravda: "Obsadenie publikom predlzuje dozvuk - ludia odrazaju zvuk viac nez prazdne sedadla.",
    nepravda2: "Obsadenie publikom nema na dobu dozvuku ziadny vplyv."
  },
  {
    id: "ZHA 9. Prvky 001",
    oblast: "Stavebne prvky",
    podoblast: "Tvrde steny",
    pravda: "Tvrda hladka stena = smerovy odraz; tvrda strukturovana stena = rozptyl.",
    nepravda: "Tvrda hladka stena = rozptyl; tvrda strukturovana stena = smerovy odraz.",
    nepravda2: "Tvrda hladka aj strukturovana stena rovnako pohlcaju zvuk."
  },
  {
    id: "ZHA 9. Prvky 002",
    oblast: "Stavebne prvky",
    podoblast: "Mekke a vibrujuce",
    pravda: "Mekka / vibrujuca stena s tlmenim = pohltenie; klenby a portaly odrazaju zvuk spat.",
    nepravda: "Mekka stena s tlmenim = smerovy odraz; klenby a portaly zvuk pohlcaju.",
    nepravda2: "Mekka stena = rozptyl bez pohltenia; klenby a portaly rozptyluju zvuk do stran."
  },
  {
    id: "ZHA 9. Prvky 003",
    oblast: "Stavebne prvky",
    podoblast: "Clenitost",
    pravda: "Clenita architektura a difuzery rozptyluju zvuk rovnomerne do priestoru.",
    nepravda: "Clenita architektura a difuzery smeruju zvuk presne jednym smerom.",
    nepravda2: "Clenita architektura a difuzery pohlcaju zvuk a skracuju dozvuk."
  },
  {
    id: "ZHA 9. Prvky 004",
    oblast: "Stavebne prvky",
    podoblast: "Panely a stlpy",
    pravda: "Stropne odrazove panely usmernuju/posuvaju zvuk; stlpy ho rozptyluju.",
    nepravda: "Stropne odrazove panely rozptyluju zvuk; stlpy ho presne usmernuju k poslucacovi.",
    nepravda2: "Stropne panely aj stlpy zvuk pohlcaju, preto skracuju dozvuk."
  },
  {
    id: "ZHA 9. Prvky 005",
    oblast: "Stavebne prvky",
    podoblast: "Stojate vlny",
    pravda: "Nizke tony (dlha vlna porovnatelna s rozmerom miestnosti) budia stojate vlny - priestor duni v hlbkach.",
    nepravda: "Vysoke tony (kratka vlna) budia stojate vlny - priestor duni vo vyskach.",
    nepravda2: "Stojate vlny vznikaju len vonku, v uzavretom priestore nie su mozne."
  },
  {
    id: "ZHA 9. Bilancia 001",
    oblast: "Energeticka bilancia",
    podoblast: "Dopadajuca energia",
    pravda: "Dopadajuca energia = odrazena + presla + pohltena; pomer zavisi od frekvencie a materialu povrchu.",
    nepravda: "Dopadajuca energia = odrazena + presla; energia sa nikdy nepohlcuje.",
    nepravda2: "Dopadajuca energia sa cela odrazi spat; prechod ani pohltenie nenastavaju."
  }
];

const zha9CrackOtazky = zha9CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 9. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "9. Akustika priestorov a dozvuk",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai51R_Sireni.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha9CrackOtazky);

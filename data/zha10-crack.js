// ZHA SZZ okruh 10: Uloha dozvuku a odrazu pri interpretacii; priestor s nulovym dozvukom;
// idealny dozvuk pre studia vs koncertne saly; vyuzitie odrazu.
// SZZ otazka: Pojednejte o uloze dozvuku a odrazu zvukovych vln pri interpretaci. Na jakem
// principu funguje a jak se nazyva prostor s nulovym dozvukem a k cemu je vhodny? Jaka je idealni
// charakteristika dozvuku pro studia a jaka pro koncertni saly a jak je realizovana? Jak se vyuziva
// odraz zvuku pri interpretaci?
// Zdroj: Ai51R_Sireni, Ai11R_Uvod.

const zha10CrackData = [
  {
    id: "ZHA 10. Bezodrazova 001",
    oblast: "Priestor s nulovym dozvukom",
    podoblast: "Bezodrazova komora",
    pravda: "Priestor s nulovym dozvukom = bezodrazova komora; steny (kliny) pohltia vsetky odrazy.",
    nepravda: "Priestor s nulovym dozvukom = dozvukova komora; steny vsetky odrazy zosilnuju.",
    nepravda2: "Priestor s nulovym dozvukom = koncertna sala s tvrdymi hladkymi stenami."
  },
  {
    id: "ZHA 10. Bezodrazova 002",
    oblast: "Priestor s nulovym dozvukom",
    podoblast: "Vyuzitie",
    pravda: "Bezodrazova komora je vhodna na merania (charakteristiky nastrojov, reproduktorov), nie na hudobnu produkciu.",
    nepravda: "Bezodrazova komora je idealna na koncerty komornej hudby vdaka cistemu zvuku.",
    nepravda2: "Bezodrazova komora sluzi na pridavanie prirodzeneho dozvuku k nahravkam."
  },
  {
    id: "ZHA 10. Studio 001",
    oblast: "Idealny dozvuk",
    podoblast: "Studio",
    pravda: "Studio: kratky a neutralny dozvuk - dozvuk sa da pridat (umely), z nahravky sa neda ubrat.",
    nepravda: "Studio: dlhy vyrazny dozvuk - z nahravky sa da lubovolne ubrat, ale neda sa pridat.",
    nepravda2: "Studio: ziadny vplyv na zaznam nie je potrebny, idealny je co najdlhsi dozvuk ako v sale."
  },
  {
    id: "ZHA 10. Sala 001",
    oblast: "Idealny dozvuk",
    podoblast: "Koncertna sala",
    pravda: "Koncertna sala: dlhsi, ale frekvencne vyvazeny dozvuk (prirodzeny utlm vysokych frekvencii).",
    nepravda: "Koncertna sala: co najkratsi dozvuk s prebytkom vysokych frekvencii.",
    nepravda2: "Koncertna sala: nulovy dozvuk, aby bola interpretacia maximalne citelna."
  },
  {
    id: "ZHA 10. Umely 001",
    oblast: "Idealny dozvuk",
    podoblast: "Umely dozvuk",
    pravda: "Umely dozvuk je nedestruktivny (da sa pridat aj ubrat); dozvuk v primarnej nahravke sa odstranit neda.",
    nepravda: "Umely dozvuk je destruktivny a neda sa ubrat; dozvuk v primarnej nahravke sa lahko odstrani.",
    nepravda2: "Umely aj primarny dozvuk sa daju lubovolne pridavat aj odstranovat bez straty kvality."
  },
  {
    id: "ZHA 10. Umely 002",
    oblast: "Idealny dozvuk",
    podoblast: "Konvolucny reverb",
    pravda: "Konvolucny reverb = nasnimana impulzova odozva (dozvuk) konkretnej saly.",
    nepravda: "Konvolucny reverb = synteticky dozvuk vypocitany bez akehokolvek merania realneho priestoru.",
    nepravda2: "Konvolucny reverb = odstranenie dozvuku z nahravky pomocou inverznej konvolucie."
  },
  {
    id: "ZHA 10. Interpretacia 001",
    oblast: "Uloha dozvuku",
    podoblast: "Pri interpretacii",
    pravda: "Dozvuk pri interpretacii zahladi dlzkove nepresnosti, napomoze napatiu pomalych viet a posilni solove pasaze.",
    nepravda: "Dozvuk pri interpretacii zhorsuje suhru a vzdy znizuje napatie pomalych viet.",
    nepravda2: "Dozvuk pri interpretacii nema ziadny umelecky vyznam, je len technickou chybou."
  },
  {
    id: "ZHA 10. Odraz 001",
    oblast: "Vyuzitie odrazu",
    podoblast: "Ziaduci odraz",
    pravda: "Ziaduci odraz: nastroje hrajuce nahor (doska klavira, husle) vyuziju odraz nad sebou smerom k poslucacom.",
    nepravda: "Ziaduci odraz: nastroje hrajuce nahor vyuziju odraz od podlahy pod sebou.",
    nepravda2: "Odraz je vzdy nez ziaduci a treba ho pri interpretacii uplne eliminovat."
  },
  {
    id: "ZHA 10. Odraz 002",
    oblast: "Vyuzitie odrazu",
    podoblast: "Pozicia odraznej plochy",
    pravda: "Odrazna plocha musi byt blizko zdroja (aby odraz zvuk nerozdvojil) a frekvencne neutralna.",
    nepravda: "Odrazna plocha musi byt co najdalej od zdroja, aby vznikol vyrazny samostatny odraz.",
    nepravda2: "Odrazna plocha ma zamerne potlacat vysoke frekvencie, aby zmenila farbu nastroja."
  },
  {
    id: "ZHA 10. Odraz 003",
    oblast: "Vyuzitie odrazu",
    podoblast: "Mikrofon a dozvuk",
    pravda: "Cim dalej je mikrofon od zdroja, tym viac sa uplatni akustika miestnosti (dozvuk) v nahravke.",
    nepravda: "Cim dalej je mikrofon od zdroja, tym menej sa uplatni akustika miestnosti v nahravke.",
    nepravda2: "Vzdialenost mikrofonu od zdroja nema na podiel dozvuku v nahravke ziadny vplyv."
  }
];

const zha10CrackOtazky = zha10CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 10. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "10. Dozvuk, odraz a bezodrazova komora",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai51R_Sireni.pdf / Ai11R_Uvod.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha10CrackOtazky);

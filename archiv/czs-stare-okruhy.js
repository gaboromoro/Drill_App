// STARE CZS okruhy - referencny material, NENACITAVA sa do aplikacie.
//
// 250 klasickych otazok (format: klasicka / najdi_chybu / vypocet) k temam
// CZS 1 - CZS 4, vyextrahovanych zo zdrojov CZS_1_03.pdf - 4 a Teoria 5 a 6.
// Ponechane na pripadne neskorsie zurodnenie aktualnych Okruhov 1 - 8.
// V appke ich nahradili crack okruhy (CZS 1 - CZS 8) z czsN-crack.js suborov.
const czsStareOkruhy = [
  {
    "id": "czs1-001",
    "tema": "CZS 1: Bloková schéma",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Aké je správne poradie základného reťazca číslicového spracovania analógového signálu?",
    "moznosti": [
      "analógový vstup → pre-filter → A/D → diskrétny systém → D/A → post-filter → analógový výstup",
      "analógový vstup → D/A → pre-filter → diskrétny systém → A/D → analógový výstup",
      "analógový vstup → diskrétny systém → pre-filter → D/A → A/D → analógový výstup",
      "analógový vstup → kvantovanie → post-filter → pre-filter → výstup bez D/A"
    ],
    "spravne": [0],
    "vysvetlenie": "Najprv sa vstup pripraví pre-filtrom, potom sa prevedie A/D, spracuje diskrétnym systémom, prevedie späť D/A a vyhladí post-filtrom.",
    "slideRef": "CZS_1_03.pdf slide 5",
    "subtema": "CZS 1: Bloková schéma"
  },
  {
    "id": "czs1-002",
    "tema": "CZS 1: Bloková schéma",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Na čo slúži pre-filter pred A/D prevodníkom?",
    "moznosti": [
      "Obmedzuje spektrum vstupného signálu pred vzorkovaním.",
      "Mení číslicový signál späť na analógový.",
      "Zvyšuje počet kvantizačných hladín.",
      "Počíta energiu diskrétneho signálu."
    ],
    "spravne": [0],
    "vysvetlenie": "Pre-filter je antialiasingový filter. Má potlačiť príliš vysoké frekvencie ešte pred A/D prevodom.",
    "slideRef": "CZS_1_03.pdf slide 5",
    "subtema": "CZS 1: Bloková schéma"
  },
  {
    "id": "czs1-003",
    "tema": "CZS 1: Bloková schéma",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Na čo slúži post-filter za D/A prevodníkom?",
    "moznosti": [
      "Vyhladzuje analógový výstup po spätnom prevode z číslicovej podoby.",
      "Vzorkuje analógový vstup pred A/D prevodom.",
      "Vyberá správnu vzorkovaciu frekvenciu.",
      "Mení spojitý čas na index n."
    ],
    "spravne": [0],
    "vysvetlenie": "Po D/A prevode môže mať signál schodovitý priebeh. Post-filter ho vyhladí.",
    "slideRef": "CZS_1_03.pdf slide 5",
    "subtema": "CZS 1: Bloková schéma"
  },
  {
    "id": "czs1-004",
    "tema": "CZS 1: Bloková schéma",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "lahka",
    "otazka": "Nájdi chybu: „A/D prevodník prevádza číslicový signál späť na analógový.“",
    "moznosti": [
      "A/D prevádza analógový signál na číslicový. Spätný prevod robí D/A.",
      "Tvrdenie je správne, A/D znamená analógový výstup.",
      "Chyba je iba v tom, že A/D musí byť vždy za D/A.",
      "A/D prevodník slúži iba na odstránenie šumu."
    ],
    "spravne": [0],
    "vysvetlenie": "A/D znamená analog-to-digital. D/A znamená digital-to-analog.",
    "slideRef": "CZS_1_03.pdf slide 4",
    "subtema": "CZS 1: Bloková schéma"
  },
  {
    "id": "czs1-005",
    "tema": "CZS 1: Bloková schéma",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo je hlavný rozdiel medzi A/D prevodníkom a diskrétnym systémom?",
    "moznosti": [
      "A/D pripraví vzorky, diskrétny systém potom matematicky spracuje postupnosť x[n].",
      "A/D počíta výstup y[n], diskrétny systém iba mení analógový signál na číslicový.",
      "Medzi nimi nie je rozdiel.",
      "Diskrétny systém je vždy analógový filter pred A/D prevodníkom."
    ],
    "spravne": [0],
    "vysvetlenie": "A/D je prevodník. Diskrétny systém je blok, ktorý transformuje vstupnú postupnosť x[n] na výstupnú postupnosť y[n].",
    "slideRef": "CZS_1_03.pdf slides 5, 8",
    "subtema": "CZS 1: Bloková schéma"
  },
  {
    "id": "czs1-006",
    "tema": "CZS 1: Úlohy spracovania",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré úlohy patria skôr do filtrácie signálov?",
    "moznosti": [
      "Odstránenie šumu.",
      "Oddelenie frekvenčných pásiem.",
      "Rozpoznávanie reči.",
      "Tvarovanie spektra signálu."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Filtrácia upravuje signál: odstraňuje šum, oddeľuje pásma alebo tvaruje spektrum. Rozpoznávanie reči je skôr analýza.",
    "slideRef": "CZS_1_03.pdf slide 6",
    "subtema": "CZS 1: Kategórie spracovania"
  },
  {
    "id": "czs1-007",
    "tema": "CZS 1: Úlohy spracovania",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré úlohy patria skôr do signálovej analýzy?",
    "moznosti": [
      "Analýza spektra.",
      "Verifikácia hovoriaceho.",
      "Zistenie zdroja signálu.",
      "Vyhladenie D/A výstupu post-filtrom."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Analýza zisťuje vlastnosti signálu alebo informácie zo signálu. Post-filter je prvok filtračného reťazca.",
    "slideRef": "CZS_1_03.pdf slide 6",
    "subtema": "CZS 1: Kategórie spracovania"
  },
  {
    "id": "czs1-008",
    "tema": "CZS 1: Úlohy spracovania",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Analýza signálu znamená hlavne to, že zo signálu vždy odstránime šum.“",
    "moznosti": [
      "Odstránenie šumu je typická filtrácia, analýza skôr zisťuje vlastnosti signálu.",
      "Tvrdenie je správne, analýza a filtrácia sú úplne to isté.",
      "Chyba je iba v tom, že šum sa odstraňuje D/A prevodníkom.",
      "Analýza signálu znamená iba kvantovanie amplitúdy."
    ],
    "spravne": [0],
    "vysvetlenie": "Filtrácia signál upravuje. Analýza sa pýta, čo signál obsahuje alebo čo z neho vieme určiť.",
    "slideRef": "CZS_1_03.pdf slide 6",
    "subtema": "CZS 1: Kategórie spracovania"
  },
  {
    "id": "czs1-009",
    "tema": "CZS 1: Diskrétny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo znamená, že signál je diskrétny v čase?",
    "moznosti": [
      "Je definovaný iba v oddelených časových okamihoch, ktoré označujeme indexom n.",
      "Môže nadobúdať iba hodnoty 0 a 1.",
      "Nemá amplitúdu.",
      "Musí byť vždy periodický."
    ],
    "spravne": [0],
    "vysvetlenie": "Diskrétnosť v čase znamená, že signál nepoznáme pre každé reálne t, ale iba pre celočíselné indexy n.",
    "slideRef": "CZS_1_03.pdf slide 7",
    "subtema": "CZS 1: Diskrétny a spojitý čas"
  },
  {
    "id": "czs1-010",
    "tema": "CZS 1: Diskrétny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ako zapisujeme vzorky diskrétneho signálu?",
    "moznosti": [
      "x[n]",
      "x(t) pre každé reálne t",
      "x{t}",
      "x / n bez indexu"
    ],
    "spravne": [0],
    "vysvetlenie": "Diskrétny signál sa zapisuje ako postupnosť x[n], kde n je celé číslo.",
    "slideRef": "CZS_1_03.pdf slide 7",
    "subtema": "CZS 1: Diskrétny a spojitý čas"
  },
  {
    "id": "czs1-011",
    "tema": "CZS 1: Diskrétny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý vzťah vyjadruje vznik diskrétneho signálu zo spojitého signálu?",
    "moznosti": [
      "x[n] = xa(n · Tvz)",
      "xa[n] = x(t · n)",
      "x(t) = xa[n · fvz]",
      "x[n] = xa(t) / Tvz pre všetky reálne t"
    ],
    "spravne": [0],
    "vysvetlenie": "Vzorka x[n] je hodnota spojitého signálu xa(t) v čase t = n · Tvz.",
    "slideRef": "CZS_1_03.pdf slides 7, 9",
    "vzorec": "x[n] = xa(n · Tvz)",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-012",
    "tema": "CZS 1: Diskrétny a číslicový signál",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré tvrdenia správne rozlišujú diskrétny a číslicový signál?",
    "moznosti": [
      "Diskrétny signál má diskrétny časový index n.",
      "Číslicový signál má hodnoty kvantované na konečný počet úrovní.",
      "Diskrétny signál musí mať iba hodnoty 0 a 1.",
      "Číslicový signál vzniká až po kvantovaní a kódovaní hodnôt."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Diskrétnosť sa týka času. Číslicovosť pridáva obmedzený počet hodnôt a ich kódovanie.",
    "slideRef": "CZS_1_03.pdf slide 9",
    "subtema": "CZS 1: Diskrétny a číslicový signál"
  },
  {
    "id": "czs1-013",
    "tema": "CZS 1: Diskrétny a číslicový signál",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Vzorkovanie samo o sebe vytvorí číslicový signál, takže kvantovanie už netreba.“",
    "moznosti": [
      "Vzorkovanie diskretizuje čas, ale číslicový signál vzniká až kvantovaním hodnôt a kódovaním.",
      "Tvrdenie je správne, kvantovanie sa používa iba pri obraze.",
      "Chyba je iba v tom, že kvantovanie patrí pred pre-filter.",
      "Vzorkovanie nemení čas, iba zaokrúhľuje amplitúdu."
    ],
    "spravne": [0],
    "vysvetlenie": "Vzorkovanie rieši, kedy meriame. Kvantovanie rieši, na aké hodnoty meriame.",
    "slideRef": "CZS_1_03.pdf slides 9, 11",
    "subtema": "CZS 1: Diskrétny a číslicový signál"
  },
  {
    "id": "czs1-014",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Aký je vzťah medzi vzorkovacou frekvenciou fvz a vzorkovacou periódou Tvz?",
    "moznosti": [
      "fvz = 1 / Tvz",
      "fvz = Tvz",
      "fvz = 2 · Tvz",
      "fvz = Tvz / 2"
    ],
    "spravne": [0],
    "vysvetlenie": "Frekvencia hovorí, koľko vzoriek je za sekundu. Perióda je čas medzi dvoma vzorkami.",
    "slideRef": "CZS_1_03.pdf slide 9",
    "vzorec": "fvz = 1 / Tvz",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-015",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Aká je základná podmienka vzorkovacej poučky podľa prezentácie?",
    "moznosti": [
      "fvz > 2 · fmax",
      "fvz < 2 · fmax",
      "fvz = fmax",
      "Tvz > 2 · fmax"
    ],
    "spravne": [0],
    "vysvetlenie": "Vzorkovacia frekvencia musí byť väčšia než dvojnásobok najvyššej frekvenčnej zložky signálu.",
    "slideRef": "CZS_1_03.pdf slide 9",
    "vzorec": "fvz > 2 · fmax",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-016",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "lahka",
    "otazka": "Signál má fmax = 4 kHz. Aká vzorkovacia frekvencia je minimálne potrebná podľa vzorkovacej poučky?",
    "moznosti": [
      "fvz > 8 kHz",
      "fvz > 4 kHz",
      "fvz = 4 kHz",
      "fvz < 8 kHz"
    ],
    "spravne": [0],
    "vysvetlenie": "Dosadíme do vzorca fvz > 2 · fmax. Pre 4 kHz vyjde fvz > 8 kHz.",
    "slideRef": "CZS_1_03.pdf slides 9, 10",
    "vzorec": "fvz > 2 · fmax",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-017",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak fmax = 8 kHz, aká je potrebná vzorkovacia frekvencia?",
    "moznosti": [
      "fvz > 16 kHz",
      "fvz = 8 kHz",
      "fvz < 16 kHz",
      "fvz = 4 kHz"
    ],
    "spravne": [0],
    "vysvetlenie": "Dvojnásobok 8 kHz je 16 kHz. Podmienka je ostrá: fvz > 16 kHz.",
    "slideRef": "CZS_1_03.pdf slides 9, 10",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-018",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak fmax = 8 kHz, aká je maximálna prípustná vzorkovacia perióda?",
    "moznosti": [
      "Tvz < 62,5 μs",
      "Tvz > 62,5 μs",
      "Tvz = 125 μs",
      "Tvz < 16 μs"
    ],
    "spravne": [0],
    "vysvetlenie": "Najprv fvz > 16 kHz. Potom Tvz < 1 / 16000 s = 62,5 μs.",
    "slideRef": "CZS_1_03.pdf slide 14",
    "vzorec": "Tvz < 1 / (2 · fmax)",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-019",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Videosignál má pásmo 0 až 6,5 MHz. Aká je hranica vzorkovacej periódy?",
    "moznosti": [
      "Tvz < 76,93 ns",
      "Tvz > 76,93 ns",
      "Tvz < 153,86 ns",
      "Tvz = 6,5 μs"
    ],
    "spravne": [0],
    "vysvetlenie": "Treba fvz > 13 MHz. Perióda preto musí byť menšia než 1 / 13 MHz, teda približne 76,93 ns.",
    "slideRef": "CZS_1_03.pdf slide 14",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-020",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Ak fvz = 2 · fmax, signál je vždy bezpečne obnoviteľný.“",
    "moznosti": [
      "Rovnosť môže byť problémová, preto prezentácia používa podmienku fvz > 2 · fmax.",
      "Tvrdenie je správne, rovnosť je vždy najlepšia možnosť.",
      "Chyba je iba v tom, že má byť fvz < 2 · fmax.",
      "Rovnosť spôsobuje iba kvantizačný šum, nie problém vzorkovania."
    ],
    "spravne": [0],
    "vysvetlenie": "Na hranici môžu vzorky padnúť napríklad do nulových priechodov sínusu. Preto sa používa ostrá nerovnosť.",
    "slideRef": "CZS_1_03.pdf slide 10",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-021",
    "tema": "CZS 1: Aliasing",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "S čím najviac súvisí aliasing?",
    "moznosti": [
      "S príliš nízkou vzorkovacou frekvenciou vzhľadom na spektrum signálu.",
      "S príliš veľkým počtom bitov v D/A prevodníku.",
      "S tým, že signál má vždy nulovú energiu.",
      "S tým, že index n nie je celé číslo."
    ],
    "spravne": [0],
    "vysvetlenie": "Aliasing je chyba vzorkovania. Vzniká, keď sa vysoké frekvencie po vzorkovaní prejavia ako nižšie frekvencie.",
    "slideRef": "CZS_1_03.pdf slides 9, 10",
    "subtema": "CZS 1: Aliasing"
  },
  {
    "id": "czs1-022",
    "tema": "CZS 1: Aliasing",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Aliasing vzniká hlavne preto, že D/A prevodník nemá dosť bitov.“",
    "moznosti": [
      "Aliasing súvisí so vzorkovaním a spektrálnym obmedzením pred A/D, nie priamo s počtom bitov D/A.",
      "Tvrdenie je správne, aliasing je vždy bitová chyba.",
      "Aliasing vzniká iba pri post-filtri.",
      "Aliasing je iný názov pre jednotkový impulz."
    ],
    "spravne": [0],
    "vysvetlenie": "Počet bitov súvisí s kvantizačnou chybou. Aliasing rieši vzorkovacia frekvencia a pre-filter.",
    "slideRef": "CZS_1_03.pdf slides 9, 11",
    "subtema": "CZS 1: Aliasing"
  },
  {
    "id": "czs1-023",
    "tema": "CZS 1: Aliasing",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré tvrdenia pomáhajú predchádzať aliasingu?",
    "moznosti": [
      "Použiť pre-filter pred A/D prevodníkom.",
      "Zvoliť vzorkovaciu frekvenciu väčšiu než 2 · fmax.",
      "Znížiť vzorkovaciu frekvenciu pod fmax.",
      "Obmedziť príliš vysoké frekvenčné zložky vstupu."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Proti aliasingu pomáha antialiasingový pre-filter a dostatočne vysoká vzorkovacia frekvencia.",
    "slideRef": "CZS_1_03.pdf slides 5, 9",
    "subtema": "CZS 1: Aliasing"
  },
  {
    "id": "czs1-024",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "lahka",
    "otazka": "Ak Tvz = 0,25 ms, aká je vzorkovacia frekvencia?",
    "moznosti": [
      "4 kHz",
      "250 Hz",
      "0,25 kHz",
      "2 kHz"
    ],
    "spravne": [0],
    "vysvetlenie": "0,25 ms = 0,00025 s. fvz = 1 / 0,00025 = 4000 Hz = 4 kHz.",
    "slideRef": "CZS_1_03.pdf slide 9",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-025",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Pri Tvz = 0,25 ms, aké maximálne fmax možno teoreticky vzorkovať bez aliasingu podľa podmienky?",
    "moznosti": [
      "fmax < 2 kHz",
      "fmax ≤ 2 kHz vždy bezpečne",
      "fmax < 4 kHz",
      "fmax > 8 kHz"
    ],
    "spravne": [0],
    "vysvetlenie": "Z Tvz = 0,25 ms vyjde fvz = 4 kHz. Preto musí platiť 4 kHz > 2 fmax, teda fmax < 2 kHz.",
    "slideRef": "CZS_1_03.pdf slides 9, 10",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-026",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Signál má fmax = 12 kHz. Ktorá vzorkovacia frekvencia je bezpečná?",
    "moznosti": [
      "48 kHz",
      "24 kHz presne",
      "20 kHz",
      "12 kHz"
    ],
    "spravne": [0],
    "vysvetlenie": "Hranica je 24 kHz, ale podmienka má byť väčšia než 2 fmax. 48 kHz je bezpečne nad hranicou.",
    "slideRef": "CZS_1_03.pdf slides 9, 10",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-027",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak fmax = 20 kHz, aká podmienka musí platiť pre Tvz?",
    "moznosti": [
      "Tvz < 25 μs",
      "Tvz > 25 μs",
      "Tvz = 50 μs vždy bezpečne",
      "Tvz < 20 ms"
    ],
    "spravne": [0],
    "vysvetlenie": "Treba fvz > 40 kHz. Preto Tvz < 1 / 40000 s = 25 μs.",
    "slideRef": "CZS_1_03.pdf slide 14",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-028",
    "tema": "CZS 1: Vzorkovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "lahka",
    "otazka": "Ak Tvz = 1 ms, koľko vzoriek sa odoberie za jednu sekundu?",
    "moznosti": [
      "1000 vzoriek",
      "100 vzoriek",
      "10 vzoriek",
      "1 vzorka"
    ],
    "spravne": [0],
    "vysvetlenie": "1 ms = 0,001 s. Za sekundu sa odoberie 1 / 0,001 = 1000 vzoriek.",
    "slideRef": "CZS_1_03.pdf slide 9",
    "subtema": "CZS 1: Vzorkovanie"
  },
  {
    "id": "czs1-029",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo je kvantovanie?",
    "moznosti": [
      "Zaokrúhlenie alebo priradenie hodnôt vzoriek na konečný počet povolených úrovní.",
      "Výber časových okamihov, v ktorých meriame signál.",
      "Prevod číslicového signálu späť na analógový.",
      "Výpočet stredného výkonu signálu."
    ],
    "spravne": [0],
    "vysvetlenie": "Kvantovanie diskretizuje hodnoty amplitúdy. Vzorkovanie diskretizuje čas.",
    "slideRef": "CZS_1_03.pdf slide 11",
    "subtema": "CZS 1: Kvantovanie"
  },
  {
    "id": "czs1-030",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo je kvantizačná hladina?",
    "moznosti": [
      "Jedna z povolených amplitúdových hodnôt po kvantovaní.",
      "Čas medzi dvoma vzorkami.",
      "Najvyššia frekvencia v spektre.",
      "Index n pri diskrétnom signáli."
    ],
    "spravne": [0],
    "vysvetlenie": "Po kvantovaní hodnota vzorky neostane ľubovoľná, ale priradí sa k jednej z kvantizačných hladín.",
    "slideRef": "CZS_1_03.pdf slide 11",
    "subtema": "CZS 1: Kvantovanie"
  },
  {
    "id": "czs1-031",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo je kvantizačná chyba?",
    "moznosti": [
      "Rozdiel medzi pôvodnou hodnotou vzorky a jej kvantovanou hodnotou.",
      "Rozdiel medzi fvz a fmax.",
      "Chyba spôsobená tým, že n nie je celé číslo.",
      "Názov pre post-filter."
    ],
    "spravne": [0],
    "vysvetlenie": "Pri kvantovaní sa hodnota zaokrúhli na hladinu. Tým vzniká odchýlka, teda kvantizačná chyba.",
    "slideRef": "CZS_1_03.pdf slide 11",
    "subtema": "CZS 1: Kvantovanie"
  },
  {
    "id": "czs1-032",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "lahka",
    "otazka": "Koľko kvantizačných hladín dá 3-bitové kódovanie?",
    "moznosti": [
      "8 hladín",
      "3 hladiny",
      "6 hladín",
      "9 hladín"
    ],
    "spravne": [0],
    "vysvetlenie": "Počet hladín pri b bitoch je 2^b. Pre 3 bity je to 2^3 = 8.",
    "slideRef": "CZS_1_03.pdf slide 11",
    "vzorec": "L = 2^b",
    "subtema": "CZS 1: Kvantovanie"
  },
  {
    "id": "czs1-033",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ak máme 8 kvantizačných hladín, koľko bitov stačí na ich označenie?",
    "moznosti": [
      "3 bity",
      "4 bity",
      "8 bitov",
      "2 bity"
    ],
    "spravne": [0],
    "vysvetlenie": "Hľadáme b tak, aby 2^b = 8. Preto b = 3.",
    "slideRef": "CZS_1_03.pdf slide 11",
    "subtema": "CZS 1: Kvantovanie"
  },
  {
    "id": "czs1-034",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Kvantovanie je bezstratový krok, lebo každá pôvodná hodnota sa dá presne obnoviť.“",
    "moznosti": [
      "Kvantovanie je stratové, pretože pôvodná hodnota sa zaokrúhli na najbližšiu hladinu.",
      "Tvrdenie je správne, kvantovanie nikdy nespôsobí chybu.",
      "Chyba je iba v tom, že kvantovanie mení vzorkovaciu frekvenciu.",
      "Kvantovanie je to isté ako post-filter."
    ],
    "spravne": [0],
    "vysvetlenie": "Po kvantovaní poznáme iba priradenú hladinu, nie presnú pôvodnú hodnotu.",
    "slideRef": "CZS_1_03.pdf slide 11",
    "subtema": "CZS 1: Kvantovanie"
  },
  {
    "id": "czs1-035",
    "tema": "CZS 1: Kvantovanie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré poradie najlepšie vystihuje vznik číslicového signálu?",
    "moznosti": [
      "vzorkovanie → kvantovanie → kódovanie",
      "kódovanie → post-filter → vzorkovanie",
      "D/A → kvantovanie → pre-filter",
      "energia → výkon → periodicita"
    ],
    "spravne": [0],
    "vysvetlenie": "Najprv vyberieme vzorky v čase, potom ich hodnoty kvantujeme a nakoniec zapíšeme kódom.",
    "slideRef": "CZS_1_03.pdf slides 9, 11",
    "subtema": "CZS 1: Vzorkovanie + kvantovanie"
  },
  {
    "id": "czs1-036",
    "tema": "CZS 1: Popis signálu",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorými spôsobmi možno popísať diskrétny signál?",
    "moznosti": [
      "Funkčným predpisom.",
      "Tabuľkou hodnôt.",
      "Grafom diskrétnej postupnosti.",
      "Iba slovným opisom bez hodnôt."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Diskrétny signál možno zadať vzorcom, tabuľkou, sekvenciou alebo grafom.",
    "slideRef": "CZS_1_03.pdf slides 15, 16",
    "subtema": "CZS 1: Popis diskrétnych signálov"
  },
  {
    "id": "czs1-037",
    "tema": "CZS 1: Popis signálu",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo znamená zápis x[2]?",
    "moznosti": [
      "Hodnotu diskrétneho signálu pri indexe n = 2.",
      "Druhú deriváciu spojitého signálu.",
      "Vzorkovaciu frekvenciu 2 Hz.",
      "Dve kvantizačné hladiny."
    ],
    "spravne": [0],
    "vysvetlenie": "V zápise x[n] číslo v hranatých zátvorkách určuje index vzorky.",
    "slideRef": "CZS_1_03.pdf slides 15, 16",
    "subtema": "CZS 1: Popis diskrétnych signálov"
  },
  {
    "id": "czs1-038",
    "tema": "CZS 1: Popis signálu",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "lahka",
    "otazka": "Z tabuľky urč hodnotu x[0].",
    "kod": "n:    -2  -1   0   1   2\nx[n]:  4   1  -3   2   0",
    "moznosti": [
      "-3",
      "0",
      "1",
      "2"
    ],
    "spravne": [0],
    "vysvetlenie": "Pri indexe n = 0 je v tabuľke hodnota x[n] = -3.",
    "slideRef": "CZS_1_03.pdf slides 15, 16",
    "subtema": "CZS 1: Popis diskrétnych signálov"
  },
  {
    "id": "czs1-039",
    "tema": "CZS 1: Popis signálu",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Z tabuľky vypočítaj x[-1] + x[2].",
    "kod": "n:    -2  -1   0   1   2\nx[n]:  4   1  -3   2   0",
    "moznosti": [
      "1",
      "0",
      "-2",
      "3"
    ],
    "spravne": [0],
    "vysvetlenie": "x[-1] = 1 a x[2] = 0. Súčet je 1.",
    "slideRef": "CZS_1_03.pdf slides 15, 16",
    "subtema": "CZS 1: Popis diskrétnych signálov"
  },
  {
    "id": "czs1-040",
    "tema": "CZS 1: Operácie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ako sa počíta súčet dvoch diskrétnych signálov s1[n] a s2[n]?",
    "moznosti": [
      "Vzorka po vzorke pre rovnaký index: y[n] = s1[n] + s2[n].",
      "Sčítajú sa iba ich indexy n.",
      "Sčítajú sa iba maximálne hodnoty.",
      "Najprv sa musia previesť na spojitý čas."
    ],
    "spravne": [0],
    "vysvetlenie": "Operácie nad diskrétnymi signálmi sa robia pre rovnaké indexy n.",
    "slideRef": "CZS_1_03.pdf slide 17",
    "subtema": "CZS 1: Operácie s diskrétnymi signálmi"
  },
  {
    "id": "czs1-041",
    "tema": "CZS 1: Operácie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ako sa počíta súčin dvoch diskrétnych signálov?",
    "moznosti": [
      "Vzorka po vzorke: y[n] = s1[n] · s2[n].",
      "Súčin sa počíta iba z ich periód.",
      "Násobia sa iba indexy.",
      "Súčin diskrétnych signálov nie je definovaný."
    ],
    "spravne": [0],
    "vysvetlenie": "Pri súčine sa pre každý index n vynásobia hodnoty oboch signálov.",
    "slideRef": "CZS_1_03.pdf slide 17",
    "subtema": "CZS 1: Operácie s diskrétnymi signálmi"
  },
  {
    "id": "czs1-042",
    "tema": "CZS 1: Operácie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak x[1] = 3 a y[n] = 2 · x[n], aká je hodnota y[1]?",
    "moznosti": [
      "6",
      "3",
      "2",
      "1"
    ],
    "spravne": [0],
    "vysvetlenie": "Pri násobení konštantou sa každá vzorka vynásobí danou konštantou. y[1] = 2 · 3 = 6.",
    "slideRef": "CZS_1_03.pdf slide 17",
    "subtema": "CZS 1: Operácie s diskrétnymi signálmi"
  },
  {
    "id": "czs1-043",
    "tema": "CZS 1: Posun signálu",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo znamená zápis y[n] = x[n - 2]?",
    "moznosti": [
      "Signál x[n] je posunutý doprava, teda oneskorený o 2 vzorky.",
      "Signál x[n] je posunutý doľava o 2 vzorky.",
      "Každá hodnota signálu sa zmenší o 2.",
      "Index n sa vynásobí číslom 2."
    ],
    "spravne": [0],
    "vysvetlenie": "Pri x[n - k] ide o oneskorenie, graf sa posunie doprava o k vzoriek.",
    "slideRef": "CZS_1_03.pdf slide 18",
    "subtema": "CZS 1: Posun signálu"
  },
  {
    "id": "czs1-044",
    "tema": "CZS 1: Posun signálu",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo znamená zápis z[n] = x[n + 2]?",
    "moznosti": [
      "Signál x[n] je posunutý doľava, teda predstihnutý o 2 vzorky.",
      "Signál x[n] je posunutý doprava o 2 vzorky.",
      "Každá hodnota signálu sa zväčší o 2.",
      "Vzorkovacia frekvencia sa zdvojnásobí."
    ],
    "spravne": [0],
    "vysvetlenie": "Pri x[n + k] ide o predstih, graf sa posunie doľava o k vzoriek.",
    "slideRef": "CZS_1_03.pdf slide 18",
    "subtema": "CZS 1: Posun signálu"
  },
  {
    "id": "czs1-045",
    "tema": "CZS 1: Posun signálu",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „x[n - 3] znamená, že každá hodnota signálu sa zmenší o 3.“",
    "moznosti": [
      "Nejde o zmenu amplitúdy, ale o posun signálu v indexe n.",
      "Tvrdenie je správne, mínus v zátvorke vždy znižuje amplitúdu.",
      "Chyba je iba v tom, že signál sa posunie doľava o 3.",
      "x[n - 3] znamená kvantovanie na 3 hladiny."
    ],
    "spravne": [0],
    "vysvetlenie": "Výraz v hranatých zátvorkách mení index, nie hodnotu amplitúdy.",
    "slideRef": "CZS_1_03.pdf slide 18",
    "subtema": "CZS 1: Posun signálu"
  },
  {
    "id": "czs1-046",
    "tema": "CZS 1: Jednotkový impulz",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorá definícia jednotkového impulzu δ[n] je správna?",
    "moznosti": [
      "δ[0] = 1 a δ[n] = 0 pre n ≠ 0.",
      "δ[n] = 1 pre všetky n.",
      "δ[n] = n pre n ≥ 0.",
      "δ[n] = 0 iba pre n = 0."
    ],
    "spravne": [0],
    "vysvetlenie": "Jednotkový impulz má jedinú nenulovú hodnotu, a to v počiatku.",
    "slideRef": "CZS_1_03.pdf slide 21",
    "subtema": "CZS 1: Jednotkový impulz"
  },
  {
    "id": "czs1-047",
    "tema": "CZS 1: Jednotkový impulz",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Kde je nenulová hodnota signálu δ[n + 3]?",
    "moznosti": [
      "Pri n = -3.",
      "Pri n = 3.",
      "Pri n = 0.",
      "Pre všetky n ≥ 3."
    ],
    "spravne": [0],
    "vysvetlenie": "Impulz je nenulový, keď n + 3 = 0. Preto n = -3.",
    "slideRef": "CZS_1_03.pdf slide 21",
    "subtema": "CZS 1: Jednotkový impulz"
  },
  {
    "id": "czs1-048",
    "tema": "CZS 1: Jednotkový impulz",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Kde je nenulová hodnota signálu δ[n - 4]?",
    "moznosti": [
      "Pri n = 4.",
      "Pri n = -4.",
      "Pri n = 0.",
      "Pre všetky n ≤ 4."
    ],
    "spravne": [0],
    "vysvetlenie": "Impulz je nenulový, keď n - 4 = 0. Preto n = 4.",
    "slideRef": "CZS_1_03.pdf slide 21",
    "subtema": "CZS 1: Jednotkový impulz"
  },
  {
    "id": "czs1-049",
    "tema": "CZS 1: Jednotkový impulz",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Prečo je jednotkový impulz dôležitý pri diskrétnych systémoch?",
    "moznosti": [
      "Pomáha popísať impulznú reakciu systému.",
      "Vždy spôsobí aliasing.",
      "Nahrádza vzorkovaciu frekvenciu.",
      "Je to jediný možný číslicový signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Reakcia systému na jednotkový impulz je dôležitý spôsob opisu správania diskrétneho systému.",
    "slideRef": "CZS_1_03.pdf slide 21",
    "subtema": "CZS 1: Jednotkový impulz"
  },
  {
    "id": "czs1-050",
    "tema": "CZS 1: Jednotkový skok",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorá definícia jednotkového skoku u[n] je správna?",
    "moznosti": [
      "u[n] = 1 pre n ≥ 0 a u[n] = 0 pre n < 0.",
      "u[n] = 1 iba pre n = 0.",
      "u[n] = n pre všetky záporné n.",
      "u[n] = 0 pre všetky n."
    ],
    "spravne": [0],
    "vysvetlenie": "Jednotkový skok sa v n = 0 prepne z nuly na jednotku a potom ostáva rovný 1.",
    "slideRef": "CZS_1_03.pdf slide 22",
    "subtema": "CZS 1: Jednotkový skok"
  },
  {
    "id": "czs1-051",
    "tema": "CZS 1: Jednotkový skok",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Od ktorého indexu je signál u[n - 2] rovný 1?",
    "moznosti": [
      "Od n = 2.",
      "Od n = -2.",
      "Iba pri n = 0.",
      "Pre všetky záporné n."
    ],
    "spravne": [0],
    "vysvetlenie": "u[n - 2] je jednotkový skok posunutý doprava o 2 vzorky.",
    "slideRef": "CZS_1_03.pdf slide 22",
    "subtema": "CZS 1: Jednotkový skok"
  },
  {
    "id": "czs1-052",
    "tema": "CZS 1: Jednotkový skok",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Jednotkový skok u[n] a jednotkový impulz δ[n] majú rovnaký priebeh.“",
    "moznosti": [
      "Impulz je nenulový iba v n = 0, skok je rovný 1 pre všetky n ≥ 0.",
      "Tvrdenie je správne, oba signály sú jednotkové.",
      "Chyba je iba v tom, že skok je rovný 2.",
      "Impulz je vždy spojitý signál, skok vždy analógový filter."
    ],
    "spravne": [0],
    "vysvetlenie": "Impulz je jedna vzorka. Skok je postupnosť jednotiek od n = 0 ďalej.",
    "slideRef": "CZS_1_03.pdf slides 21, 22",
    "subtema": "CZS 1: Jednotkový skok"
  },
  {
    "id": "czs1-053",
    "tema": "CZS 1: Rampová postupnosť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorý zápis zodpovedá rampovej postupnosti?",
    "moznosti": [
      "r[n] = n · u[n]",
      "r[n] = δ[n]",
      "r[n] = u[n] - u[n - 1]",
      "r[n] = 1 / Tvz"
    ],
    "spravne": [0],
    "vysvetlenie": "Rampa od n = 0 rastie podľa indexu n, preto sa často zapisuje ako n · u[n].",
    "slideRef": "CZS_1_03.pdf slide 23",
    "subtema": "CZS 1: Rampová postupnosť"
  },
  {
    "id": "czs1-054",
    "tema": "CZS 1: Harmonický signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorý tvar zodpovedá diskrétnemu harmonickému signálu?",
    "moznosti": [
      "s[n] = A · sin(ω0 n + φ)",
      "s[n] = δ[n] iba pre n = 0",
      "s[n] = n · u[n] iba ako rampa",
      "s[n] = 2^b iba ako počet hladín"
    ],
    "spravne": [0],
    "vysvetlenie": "Diskrétny harmonický signál je sínusový alebo kosínusový priebeh zapísaný pre index n.",
    "slideRef": "CZS_1_03.pdf slide 24",
    "subtema": "CZS 1: Harmonický diskrétny signál"
  },
  {
    "id": "czs1-055",
    "tema": "CZS 1: Harmonický signál",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "V signáli s[n] = sin(250π · n · Tvz + 0,25π), aká je analógová frekvencia pred vzorkovaním?",
    "moznosti": [
      "125 Hz",
      "250 Hz",
      "500 Hz",
      "0,25 Hz"
    ],
    "spravne": [0],
    "vysvetlenie": "Porovnáme 250π s tvarom 2πf. Platí 2πf = 250π, teda f = 125 Hz.",
    "slideRef": "CZS_1_03.pdf slide 24",
    "subtema": "CZS 1: Harmonický diskrétny signál"
  },
  {
    "id": "czs1-056",
    "tema": "CZS 1: Harmonický signál",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "V signáli s[n] = sin(600π · n · Tvz + π/6), aká je frekvencia f?",
    "moznosti": [
      "300 Hz",
      "600 Hz",
      "100 Hz",
      "π/6 Hz"
    ],
    "spravne": [0],
    "vysvetlenie": "Použijeme 2πf = 600π. Po vydelení 2π dostaneme f = 300 Hz.",
    "slideRef": "CZS_1_03.pdf slide 24",
    "subtema": "CZS 1: Harmonický diskrétny signál"
  },
  {
    "id": "czs1-057",
    "tema": "CZS 1: Periodicita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Kedy je diskrétny signál periodický?",
    "moznosti": [
      "Ak existuje celé kladné N tak, že x[n + N] = x[n] pre všetky n.",
      "Ak má vždy konečnú energiu.",
      "Ak je definovaný iba pre n = 0.",
      "Ak je jeho vzorkovacia frekvencia nulová."
    ],
    "spravne": [0],
    "vysvetlenie": "Perioda diskrétneho signálu musí byť celočíselný počet vzoriek.",
    "slideRef": "CZS_1_03.pdf slide 39",
    "subtema": "CZS 1: Periodicita"
  },
  {
    "id": "czs1-058",
    "tema": "CZS 1: Periodicita",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak s[n] = sin(2π · (1/5) · n), aká je základná perióda?",
    "moznosti": [
      "N = 5",
      "N = 1",
      "N = 2",
      "Signál nie je periodický."
    ],
    "spravne": [0],
    "vysvetlenie": "Koeficient pri n je 2π · 1/5, takže priebeh sa zopakuje po 5 vzorkách.",
    "slideRef": "CZS_1_03.pdf slide 39",
    "subtema": "CZS 1: Periodicita"
  },
  {
    "id": "czs1-059",
    "tema": "CZS 1: Periodicita",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Je signál s[n] = cos(πn) periodický?",
    "moznosti": [
      "Áno, má periódu N = 2.",
      "Nie, nikdy sa neopakuje.",
      "Áno, má periódu N = π.",
      "Nie, lebo kosínus nemôže byť diskrétny."
    ],
    "spravne": [0],
    "vysvetlenie": "cos(πn) strieda hodnoty 1, -1, 1, -1, takže sa opakuje po dvoch vzorkách.",
    "slideRef": "CZS_1_03.pdf slide 39",
    "subtema": "CZS 1: Periodicita"
  },
  {
    "id": "czs1-060",
    "tema": "CZS 1: Periodicita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Je signál s[n] = cos(n) periodický v diskrétnom čase?",
    "moznosti": [
      "Nie, pretože 1 / (2π) nie je racionálne číslo.",
      "Áno, každý kosínus je v diskrétnom čase periodický.",
      "Áno, má periódu N = 1.",
      "Nie, pretože diskrétny signál nemôže byť harmonický."
    ],
    "spravne": [0],
    "vysvetlenie": "Diskrétny harmonický signál je periodický iba vtedy, keď je normalizovaná frekvencia racionálne viazaná na 2π.",
    "slideRef": "CZS_1_03.pdf slide 39",
    "subtema": "CZS 1: Periodicita"
  },
  {
    "id": "czs1-061",
    "tema": "CZS 1: Periodicita",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Každý diskrétny harmonický signál je automaticky periodický.“",
    "moznosti": [
      "Nie každý. V diskrétnom čase záleží, či existuje celočíselná perióda N.",
      "Tvrdenie je správne pre všetky harmonické signály.",
      "Chyba je iba v tom, že perioda musí byť záporná.",
      "Harmonický signál nemôže existovať v diskrétnom čase."
    ],
    "spravne": [0],
    "vysvetlenie": "Pri diskrétnych harmonických signáloch musí perióda vyjsť ako celé číslo vzoriek.",
    "slideRef": "CZS_1_03.pdf slide 39",
    "subtema": "CZS 1: Periodicita"
  },
  {
    "id": "czs1-062",
    "tema": "CZS 1: Periodicita",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak má diskrétny harmonický signál 8 vzoriek na jednu periódu, aká je uhlová frekvencia Ω?",
    "moznosti": [
      "Ω = π/4",
      "Ω = 8π",
      "Ω = 4π",
      "Ω = 1/8"
    ],
    "spravne": [0],
    "vysvetlenie": "Jedna perióda má 2π radiánov. Pri 8 vzorkách na periódu je Ω = 2π / 8 = π/4.",
    "slideRef": "CZS_1_03.pdf slides 24, 39",
    "subtema": "CZS 1: Periodicita"
  },
  {
    "id": "czs1-063",
    "tema": "CZS 1: Exponenciálny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorý zápis zodpovedá exponenciálnemu diskrétnemu signálu?",
    "moznosti": [
      "s[n] = a^n",
      "s[n] = δ[n] iba v n = 0",
      "s[n] = 1 / Tvz",
      "s[n] = x[n] + y[t]"
    ],
    "spravne": [0],
    "vysvetlenie": "Exponenciálny diskrétny signál má základný tvar a^n, prípadne a^n u[n].",
    "slideRef": "CZS_1_03.pdf slide 25",
    "subtema": "CZS 1: Exponenciálny diskrétny signál"
  },
  {
    "id": "czs1-064",
    "tema": "CZS 1: Exponenciálny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ak 0 < a < 1 v signáli s[n] = a^n u[n], aký má signál priebeh?",
    "moznosti": [
      "Klesajúci exponenciálny priebeh od n = 0.",
      "Rastúci exponenciálny priebeh bez obmedzenia.",
      "Strieda znamienko pri každom n.",
      "Je nenulový iba v n = 0."
    ],
    "spravne": [0],
    "vysvetlenie": "Ak je a medzi 0 a 1, mocniny a^n sa s rastúcim n zmenšujú.",
    "slideRef": "CZS_1_03.pdf slide 25",
    "subtema": "CZS 1: Exponenciálny diskrétny signál"
  },
  {
    "id": "czs1-065",
    "tema": "CZS 1: Exponenciálny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ak a > 1 v signáli s[n] = a^n u[n], aký má signál priebeh?",
    "moznosti": [
      "Rastúci exponenciálny priebeh od n = 0.",
      "Klesajúci exponenciálny priebeh.",
      "Stále nulový signál.",
      "Jednotkový impulz."
    ],
    "spravne": [0],
    "vysvetlenie": "Ak je a väčšie než 1, mocniny a^n rastú.",
    "slideRef": "CZS_1_03.pdf slide 25",
    "subtema": "CZS 1: Exponenciálny diskrétny signál"
  },
  {
    "id": "czs1-066",
    "tema": "CZS 1: Exponenciálny signál",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo spôsobí záporné a v signáli s[n] = a^n u[n]?",
    "moznosti": [
      "Hodnoty signálu striedajú znamienko.",
      "Signál sa zmení na spojitý.",
      "Vzorkovacia frekvencia sa zdvojnásobí.",
      "Signál je nulový pre všetky n."
    ],
    "spravne": [0],
    "vysvetlenie": "Mocniny záporného čísla sa striedajú medzi kladným a záporným znamienkom.",
    "slideRef": "CZS_1_03.pdf slide 25",
    "subtema": "CZS 1: Exponenciálny diskrétny signál"
  },
  {
    "id": "czs1-067",
    "tema": "CZS 1: Komplexná exponenciála",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ak a = r · e^(jΘ), ktorý rozklad platí pre a^n?",
    "moznosti": [
      "a^n = r^n · e^(jΘn)",
      "a^n = r + e^(jΘn)",
      "a^n = n · r · Θ",
      "a^n = e^(jr) · Θ^n"
    ],
    "spravne": [0],
    "vysvetlenie": "Pri mocnení sa mocní modul r a násobí fáza Θ indexom n.",
    "slideRef": "CZS_1_03.pdf slide 25",
    "subtema": "CZS 1: Komplexná exponenciála"
  },
  {
    "id": "czs1-068",
    "tema": "CZS 1: Komplexná exponenciála",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak s[n] = 0,9^n · e^(jπn/10), aká je reálna časť signálu?",
    "moznosti": [
      "0,9^n · cos(πn/10)",
      "0,9^n · sin(πn/10)",
      "cos(0,9n) · e^(jπ/10)",
      "πn/10"
    ],
    "spravne": [0],
    "vysvetlenie": "Reálna časť komplexnej exponenciály e^(jθ) je cos(θ).",
    "slideRef": "CZS_1_03.pdf slide 25",
    "subtema": "CZS 1: Komplexná exponenciála"
  },
  {
    "id": "czs1-069",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ktorý vzťah zodpovedá energii diskrétneho signálu?",
    "moznosti": [
      "E = Σ |x[n]|²",
      "E = 1 / Tvz",
      "E = 2 · fmax",
      "E = x[n + N]"
    ],
    "spravne": [0],
    "vysvetlenie": "Energia diskrétneho signálu je súčet štvorcov absolútnych hodnôt cez všetky indexy.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia signálu"
  },
  {
    "id": "czs1-070",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo vyjadruje stredný výkon diskrétneho signálu?",
    "moznosti": [
      "Priemernú energiu na jednu vzorku v dlhom časovom intervale.",
      "Počet kvantizačných hladín.",
      "Vzorkovaciu periódu.",
      "Polohu jednotkového impulzu."
    ],
    "spravne": [0],
    "vysvetlenie": "Výkon je časový priemer štvorca veľkosti signálu.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Výkon signálu"
  },
  {
    "id": "czs1-071",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak x[n] = {1, -2, 2} a mimo týchto troch hodnôt je signál nulový, aká je energia?",
    "moznosti": [
      "9",
      "5",
      "3",
      "1"
    ],
    "spravne": [0],
    "vysvetlenie": "E = 1² + (-2)² + 2² = 1 + 4 + 4 = 9.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia a výkon"
  },
  {
    "id": "czs1-072",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Aký typ signálu je konečná postupnosť, ktorá má nenulových iba pár vzoriek?",
    "moznosti": [
      "Energetický signál s konečnou energiou a nulovým stredným výkonom.",
      "Výkonový signál s nekonečnou energiou.",
      "Signál s nulovou energiou.",
      "Vždy periodický signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Konečný nenulový signál má konečný súčet štvorcov, ale priemer cez nekonečný čas ide k nule.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia a výkon"
  },
  {
    "id": "czs1-073",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Akú energiu má jednotkový skok u[n]?",
    "moznosti": [
      "Nekonečnú energiu.",
      "Nulovú energiu.",
      "Energiu rovnú 1.",
      "Energiu rovnú vzorkovacej frekvencii."
    ],
    "spravne": [0],
    "vysvetlenie": "u[n] má nekonečne veľa jednotkových vzoriek, takže súčet štvorcov diverguje.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia a výkon"
  },
  {
    "id": "czs1-074",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Komplexný harmonický signál x[n] = A · e^(jω0n) má aký stredný výkon?",
    "moznosti": [
      "|A|²",
      "A",
      "0",
      "ω0"
    ],
    "spravne": [0],
    "vysvetlenie": "Veľkosť e^(jω0n) je vždy 1, preto |x[n]|² = |A|².",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia a výkon"
  },
  {
    "id": "czs1-075",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak A = 3 v signáli x[n] = A · e^(jω0n), aký je stredný výkon?",
    "moznosti": [
      "9",
      "3",
      "0",
      "1/3"
    ],
    "spravne": [0],
    "vysvetlenie": "Výkon je |A|². Pre A = 3 je to 3² = 9.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia a výkon"
  },
  {
    "id": "czs1-076",
    "tema": "CZS 1: Energia a výkon",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Ak má signál nekonečnú energiu, automaticky má nulový výkon.“",
    "moznosti": [
      "Nie vždy. Napríklad harmonický signál má nekonečnú energiu, ale konečný nenulový výkon.",
      "Tvrdenie je vždy správne.",
      "Nekonečná energia znamená, že signál neexistuje.",
      "Výkon sa pri diskrétnych signáloch nedefinuje."
    ],
    "spravne": [0],
    "vysvetlenie": "Výkonové signály typicky majú nekonečnú energiu, ale konečný stredný výkon.",
    "slideRef": "CZS_1_03.pdf slide 34",
    "subtema": "CZS 1: Energia a výkon"
  },
  {
    "id": "czs1-077",
    "tema": "CZS 1: Sudá a lichá časť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý vzťah definuje sudú časť reálneho diskrétneho signálu?",
    "moznosti": [
      "xe[n] = (x[n] + x[-n]) / 2",
      "xe[n] = (x[n] - x[-n]) / 2",
      "xe[n] = x[n] · x[-n]",
      "xe[n] = x[n + 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Sudá časť vzniká priemerom hodnoty v n a zrkadlovej hodnoty v -n.",
    "slideRef": "CZS_1_03.pdf slide 43",
    "subtema": "CZS 1: Sudá a lichá časť"
  },
  {
    "id": "czs1-078",
    "tema": "CZS 1: Sudá a lichá časť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý vzťah definuje lichú časť reálneho diskrétneho signálu?",
    "moznosti": [
      "xo[n] = (x[n] - x[-n]) / 2",
      "xo[n] = (x[n] + x[-n]) / 2",
      "xo[n] = x[n]²",
      "xo[n] = x[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Lichá časť vzniká polovicou rozdielu medzi hodnotou v n a zrkadlovou hodnotou v -n.",
    "slideRef": "CZS_1_03.pdf slide 43",
    "subtema": "CZS 1: Sudá a lichá časť"
  },
  {
    "id": "czs1-079",
    "tema": "CZS 1: Sudá a lichá časť",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak x[3] = 6 a x[-3] = 0, aká je sudá časť xe[3]?",
    "moznosti": [
      "3",
      "6",
      "0",
      "-3"
    ],
    "spravne": [0],
    "vysvetlenie": "xe[3] = (x[3] + x[-3]) / 2 = (6 + 0) / 2 = 3.",
    "slideRef": "CZS_1_03.pdf slide 43",
    "subtema": "CZS 1: Sudá a lichá časť"
  },
  {
    "id": "czs1-080",
    "tema": "CZS 1: Sudá a lichá časť",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak x[3] = 6 a x[-3] = 0, aká je lichá časť xo[3]?",
    "moznosti": [
      "3",
      "6",
      "0",
      "-3"
    ],
    "spravne": [0],
    "vysvetlenie": "xo[3] = (x[3] - x[-3]) / 2 = (6 - 0) / 2 = 3.",
    "slideRef": "CZS_1_03.pdf slide 43",
    "subtema": "CZS 1: Sudá a lichá časť"
  },
  {
    "id": "czs1-081",
    "tema": "CZS 1: Sudá a lichá časť",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré tvrdenia platia pre sudý a lichý signál?",
    "moznosti": [
      "Sudý signál spĺňa x[n] = x[-n].",
      "Lichý signál spĺňa x[n] = -x[-n].",
      "Každý signál je automaticky iba sudý.",
      "Každý reálny signál možno rozložiť na sudú a lichú časť."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Sudá časť je zrkadlovo rovnaká, lichá je zrkadlovo opačná. Reálny signál sa dá rozložiť na ich súčet.",
    "slideRef": "CZS_1_03.pdf slide 43",
    "subtema": "CZS 1: Sudá a lichá časť"
  },
  {
    "id": "czs1-082",
    "tema": "CZS 1: 2D signály",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ako sa zapisuje dvojrozmerný diskrétny signál?",
    "moznosti": [
      "x[m, n]",
      "x(t) iba s jedným spojitým časom",
      "x[n] vždy iba s jedným indexom",
      "x / Tvz"
    ],
    "spravne": [0],
    "vysvetlenie": "2D diskrétny signál má dva celočíselné indexy, napríklad m a n. Používa sa napríklad pri obrazoch.",
    "slideRef": "CZS_1_03.pdf slide 44",
    "subtema": "CZS 1: 2D diskrétne signály"
  },
  {
    "id": "czs1-083",
    "tema": "CZS 1: 2D signály",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorá definícia zodpovedá 2D jednotkovému impulzu δ[m, n]?",
    "moznosti": [
      "Má hodnotu 1 iba v bode m = 0, n = 0 a inde 0.",
      "Má hodnotu 1 pre všetky m a n.",
      "Je rovný m + n pre všetky indexy.",
      "Je nenulový iba pre n ≥ 0 bez ohľadu na m."
    ],
    "spravne": [0],
    "vysvetlenie": "2D impulz je nenulový iba v počiatku dvojrozmernej indexovej roviny.",
    "slideRef": "CZS_1_03.pdf slide 44",
    "subtema": "CZS 1: 2D diskrétne signály"
  },
  {
    "id": "czs1-084",
    "tema": "CZS 1: 2D signály",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorá definícia zodpovedá 2D jednotkovému skoku u[m, n]?",
    "moznosti": [
      "Má hodnotu 1 pre m ≥ 0 a n ≥ 0, inak 0.",
      "Má hodnotu 1 iba v bode m = 0, n = 0.",
      "Je rovný iba indexu n.",
      "Je to vždy harmonický signál."
    ],
    "spravne": [0],
    "vysvetlenie": "2D skok je jednotkový v prvom kvadrante indexovej roviny.",
    "slideRef": "CZS_1_03.pdf slide 44",
    "subtema": "CZS 1: 2D diskrétne signály"
  },
  {
    "id": "czs1-085",
    "tema": "CZS 1: 2D signály",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Kedy je 2D signál oddeliteľný?",
    "moznosti": [
      "Keď sa dá zapísať ako súčin dvoch 1D signálov, napríklad x[m, n] = x1[m] · x2[n].",
      "Keď má iba jednu vzorku.",
      "Keď je vždy rovný jednotkovému impulzu.",
      "Keď sa nedá zapísať pomocou indexov m a n."
    ],
    "spravne": [0],
    "vysvetlenie": "Oddeliteľnosť znamená, že dvojrozmerná závislosť sa rozloží na súčin dvoch jednorozmerných závislostí.",
    "slideRef": "CZS_1_03.pdf slide 46",
    "subtema": "CZS 1: Oddeliteľný 2D signál"
  },
  {
    "id": "czs1-086",
    "tema": "CZS 1: 2D signály",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Prečo je oddeliteľnosť 2D signálu alebo operátora užitočná?",
    "moznosti": [
      "Zjednodušuje výpočet 2D spracovania.",
      "Umožní spracovať 2D problém cez dva 1D kroky.",
      "Znamená, že signál nemá žiadne hodnoty.",
      "Vždy úplne odstráni kvantizačnú chybu."
    ],
    "spravne": [0, 1],
    "vysvetlenie": "Ak je 2D úloha oddeliteľná, dá sa často počítať efektívnejšie po riadkoch a stĺpcoch.",
    "slideRef": "CZS_1_03.pdf slide 46",
    "subtema": "CZS 1: Oddeliteľný 2D signál"
  },
  {
    "id": "czs1-087",
    "tema": "CZS 1: 2D signály",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Každý 2D signál je automaticky oddeliteľný.“",
    "moznosti": [
      "Nie každý 2D signál sa dá rozložiť na súčin jednej funkcie m a jednej funkcie n.",
      "Tvrdenie je správne pre všetky obrazy.",
      "Oddeliteľnosť znamená iba to, že signál má dva indexy.",
      "Oddeliteľnosť je to isté ako kvantovanie."
    ],
    "spravne": [0],
    "vysvetlenie": "Oddeliteľnosť je špeciálna vlastnosť, nie automatická vlastnosť každého 2D signálu.",
    "slideRef": "CZS_1_03.pdf slide 46",
    "subtema": "CZS 1: Oddeliteľný 2D signál"
  },
  {
    "id": "czs1-088",
    "tema": "CZS 1: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré dvojice pojmov sú správne spárované?",
    "moznosti": [
      "Vzorkovanie → diskretizácia času.",
      "Kvantovanie → diskretizácia hodnôt.",
      "Aliasing → dôsledok nedostatočného vzorkovania.",
      "Post-filter → filter pred A/D prevodníkom."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Post-filter patrí až za D/A prevodník. Filter pred A/D je pre-filter.",
    "slideRef": "CZS_1_03.pdf slides 5, 9, 11",
    "subtema": "CZS 1: Integrované pojmy"
  },
  {
    "id": "czs1-089",
    "tema": "CZS 1: Súhrn",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Ak je signál x[n] diskrétny, jeho hodnoty musia byť automaticky kvantované.“",
    "moznosti": [
      "Diskrétny signál má diskrétny čas, ale jeho hodnoty ešte nemusia byť kvantované.",
      "Tvrdenie je správne, diskrétnosť a kvantovanie sú to isté.",
      "Chyba je iba v tom, že sa má písať x(t).",
      "Diskrétny signál nemôže vzniknúť zo spojitého signálu."
    ],
    "spravne": [0],
    "vysvetlenie": "Diskrétnosť sa týka indexu n. Kvantovanie sa týka amplitúdových hodnôt.",
    "slideRef": "CZS_1_03.pdf slides 9, 11",
    "subtema": "CZS 1: Integrované pojmy"
  },
  {
    "id": "czs1-090",
    "tema": "CZS 1: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia sú správne pre základné CZS 1 pojmy?",
    "moznosti": [
      "Diskrétny systém spracuje postupnosť x[n] a vytvorí postupnosť y[n].",
      "Pri x[n - k] ide o oneskorenie signálu o k vzoriek.",
      "Energia konečnej nenulovej postupnosti je súčet štvorcov jej hodnôt.",
      "Aliasing vzniká preto, že jednotkový impulz má hodnotu 1 v n = 0."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Prvé tri tvrdenia spájajú základné pravidlá. Posledné mieša aliasing s definíciou impulzu.",
    "slideRef": "CZS_1_03.pdf",
    "subtema": "CZS 1: Integrované pojmy"
  },
  {
    "id": "czs2-001",
    "tema": "CZS 2: Korelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Na čo slúži korelácia diskrétnych signálov?",
    "moznosti": [
      "Na určenie podobnosti dvoch signálov.",
      "Na kvantovanie amplitúdy signálu.",
      "Na prevod číslicového signálu späť na analógový.",
      "Na zmenu počtu bitov v A/D prevodníku."
    ],
    "spravne": [0],
    "vysvetlenie": "Korelácia meria, ako veľmi sú si dva signály podobné pri rôznych vzájomných posunoch.",
    "slideRef": "CZS_2_03.pdf slide 2",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-002",
    "tema": "CZS 2: Korelácia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Kde sa podľa prezentácie používa korelácia alebo autokorelácia?",
    "moznosti": [
      "Pri meraní podobnosti signálov.",
      "Pri hľadaní skrytej periodicity v zašumených signáloch.",
      "Pri rozpoznávaní reči alebo obrazov.",
      "Iba pri výpočte kvantizačného šumu."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Korelácia je základný nástroj na podobnosť, oneskorenie, periodicitu a rozpoznávanie vzorov.",
    "slideRef": "CZS_2_03.pdf slide 2",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-003",
    "tema": "CZS 2: Korelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo znamená parameter m v korelačnej funkcii?",
    "moznosti": [
      "Vzájomný posun jedného signálu voči druhému.",
      "Počet kvantizačných hladín.",
      "Vzorkovaciu frekvenciu.",
      "Amplitúdu jednotkového impulzu."
    ],
    "spravne": [0],
    "vysvetlenie": "Korelácia skúša rôzne posuny m a zisťuje, pri ktorom posune sú signály najpodobnejšie.",
    "slideRef": "CZS_2_03.pdf slides 3, 4",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-004",
    "tema": "CZS 2: Korelácia",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Korelačná funkcia je komutatívna, takže na poradí signálov vôbec nezáleží.“",
    "moznosti": [
      "Na poradí záleží; platí zrkadlový vzťah rxy[m] = ryx[-m].",
      "Tvrdenie je správne, korelácia je vždy úplne komutatívna.",
      "Chyba je iba v tom, že korelácia sa používa len pre spojité signály.",
      "Korelácia nemá parameter m."
    ],
    "spravne": [0],
    "vysvetlenie": "Pri zámene poradia signálov sa korelačná funkcia zrkadlovo otočí okolo nulového posunu.",
    "slideRef": "CZS_2_03.pdf slides 3, 5",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-005",
    "tema": "CZS 2: Korelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo hľadáme na grafe korelačnej funkcie, ak chceme zistiť najväčšiu podobnosť dvoch signálov?",
    "moznosti": [
      "Maximum korelačnej funkcie.",
      "Najnižší index v tabuľke.",
      "Počet nulových vzoriek.",
      "Najmenší možný počet kvantizačných hladín."
    ],
    "spravne": [0],
    "vysvetlenie": "Najväčšia hodnota korelácie ukazuje, pri ktorom posune sú signály najviac podobné.",
    "slideRef": "CZS_2_03.pdf slide 4",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-006",
    "tema": "CZS 2: Korelácia",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Ak má korelačná funkcia maximum pri m = 0, signály sú najpodobnejšie až po oneskorení.“",
    "moznosti": [
      "Maximum pri m = 0 znamená najväčšiu podobnosť bez vzájomného posunu.",
      "Tvrdenie je správne, m = 0 vždy znamená oneskorenie.",
      "Chyba je iba v tom, že korelácia nemôže mať maximum.",
      "m = 0 znamená, že signály boli kvantované na nulu."
    ],
    "spravne": [0],
    "vysvetlenie": "Nulový posun znamená, že signály porovnávame bez posunutia.",
    "slideRef": "CZS_2_03.pdf slide 4",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-007",
    "tema": "CZS 2: Korelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo znamená vzťah rxy[m] = ryx[-m]?",
    "moznosti": [
      "Pri zámene poradia signálov sa korelačná funkcia zrkadlovo otočí.",
      "Korelácia je vždy nulová.",
      "Autokorelácia nemôže byť symetrická.",
      "Korelácia závisí iba od amplitúdy prvého signálu."
    ],
    "spravne": [0],
    "vysvetlenie": "Vzájomná korelácia nie je obyčajne komutatívna; zmena poradia zmení znamienko posunu.",
    "slideRef": "CZS_2_03.pdf slide 5",
    "subtema": "CZS 2: Korelácia"
  },
  {
    "id": "czs2-008",
    "tema": "CZS 2: Autokorelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo je autokorelačná funkcia?",
    "moznosti": [
      "Korelácia signálu s posunutou kópiou samého seba.",
      "Korelácia dvoch úplne nesúvisiacich prevodníkov.",
      "Prevod signálu do analógovej podoby.",
      "Počet bitov použitých pri kvantovaní."
    ],
    "spravne": [0],
    "vysvetlenie": "Autokorelácia meria samopodobnosť signálu pri rôznych posunoch.",
    "slideRef": "CZS_2_03.pdf slide 6",
    "subtema": "CZS 2: Autokorelácia"
  },
  {
    "id": "czs2-009",
    "tema": "CZS 2: Autokorelácia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré vlastnosti autokorelačnej funkcie sú uvedené v prezentácii?",
    "moznosti": [
      "Je symetrická.",
      "Maximum má pre m = 0.",
      "Pri periodickom úseku je kvaziperiodická s rovnakou periódou.",
      "Vždy je záporná pre všetky posuny."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Autokorelácia má najväčšiu zhodu pri nulovom posune a pri periodických signáloch opakuje maximá.",
    "slideRef": "CZS_2_03.pdf slides 6, 8",
    "subtema": "CZS 2: Autokorelácia"
  },
  {
    "id": "czs2-010",
    "tema": "CZS 2: Autokorelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ako sa prejaví periodický signál v autokorelačnej funkcii?",
    "moznosti": [
      "Autokorelácia má opakované maximá s periódou pôvodného signálu.",
      "Autokorelácia je vždy iba jedna nenulová vzorka.",
      "Autokorelácia sa nedá počítať pre periodické signály.",
      "Autokorelácia odstráni všetky harmonické zložky."
    ],
    "spravne": [0],
    "vysvetlenie": "Periodický signál je podobný sám sebe po celej perióde, preto sa maximá autokorelácie opakujú.",
    "slideRef": "CZS_2_03.pdf slide 8",
    "subtema": "CZS 2: Autokorelácia"
  },
  {
    "id": "czs2-011",
    "tema": "CZS 2: Autokorelácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ako vyzerá autokorelácia náhodného šumu podľa prezentácie?",
    "moznosti": [
      "Má výrazné maximum pri nulovom posune a mimo neho je podobnosť malá.",
      "Má pravidelné maximá ako čistý periodický signál.",
      "Je stále rovná jednotke.",
      "Nedá sa zobraziť ako diskrétny signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Náhodný šum nie je deterministicky podobný svojej posunutej kópii, preto dominuje maximum pri m = 0.",
    "slideRef": "CZS_2_03.pdf slide 9",
    "subtema": "CZS 2: Autokorelácia"
  },
  {
    "id": "czs2-012",
    "tema": "CZS 2: Autokorelácia",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Autokorelácia nemôže pomôcť nájsť periodický signál v šume.“",
    "moznosti": [
      "Môže pomôcť, pretože periodická zložka vytvára opakované maximá autokorelácie.",
      "Tvrdenie je správne, autokorelácia sa používa iba pre čistý šum.",
      "Autokorelácia funguje iba pre analógové signály.",
      "Periodický signál nemá nikdy autokoreláciu."
    ],
    "spravne": [0],
    "vysvetlenie": "Jedna z typických úloh autokorelácie je detekcia skrytej periodicity v zašumenom signáli.",
    "slideRef": "CZS_2_03.pdf slides 8, 10, 11",
    "subtema": "CZS 2: Autokorelácia"
  },
  {
    "id": "czs2-013",
    "tema": "CZS 2: Aplikácie korelácie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Ako korelácia pomáha pri určovaní oneskorenia medzi dvoma signálmi?",
    "moznosti": [
      "Nájde posun m, pri ktorom je korelačná funkcia maximálna.",
      "Zmení vzorkovaciu frekvenciu na dvojnásobok.",
      "Vymaže všetky vzorky pred n = 0.",
      "Prevedie signál na 2D obraz."
    ],
    "spravne": [0],
    "vysvetlenie": "Maximum korelácie ukáže, o koľko vzoriek je jeden signál posunutý voči druhému.",
    "slideRef": "CZS_2_03.pdf slide 12",
    "subtema": "CZS 2: Aplikácie korelácie"
  },
  {
    "id": "czs2-014",
    "tema": "CZS 2: Aplikácie korelácie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak Tvz = 100 μs a korelácia ukáže oneskorenie 500 vzoriek, aké je časové oneskorenie?",
    "moznosti": [
      "50 ms",
      "5 ms",
      "500 ms",
      "100 ms"
    ],
    "spravne": [0],
    "vysvetlenie": "500 · 100 μs = 50000 μs = 50 ms.",
    "slideRef": "CZS_2_03.pdf slides 15, 16",
    "subtema": "CZS 2: Aplikácie korelácie"
  },
  {
    "id": "czs2-015",
    "tema": "CZS 2: Aplikácie korelácie",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak Tvz = 100 μs a oneskorenie je 100 ms, koľko je to vzoriek?",
    "moznosti": [
      "1000 vzoriek",
      "100 vzoriek",
      "10 vzoriek",
      "10000 vzoriek"
    ],
    "spravne": [0],
    "vysvetlenie": "100 ms = 0,1 s. Pri Tvz = 0,0001 s je počet vzoriek 0,1 / 0,0001 = 1000.",
    "slideRef": "CZS_2_03.pdf slides 15, 16",
    "subtema": "CZS 2: Aplikácie korelácie"
  },
  {
    "id": "czs2-016",
    "tema": "CZS 2: Aplikácie korelácie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Prečo sa korelácia používa napríklad pri radarovom meraní?",
    "moznosti": [
      "Porovná vyslaný signál s prijatým odrazom a určí oneskorenie.",
      "Zmení prijatý signál na konštantnú nulu.",
      "Nahradí potrebu vyslať signál.",
      "Vypočíta iba počet kvantizačných bitov."
    ],
    "spravne": [0],
    "vysvetlenie": "Odraz je oneskorená a zmenená verzia vyslaného signálu. Korelácia vie zistiť posun maxima.",
    "slideRef": "CZS_2_03.pdf slide 12",
    "subtema": "CZS 2: Aplikácie korelácie"
  },
  {
    "id": "czs2-017",
    "tema": "CZS 2: Diskrétny systém",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo robí diskrétny systém?",
    "moznosti": [
      "Transformuje vstupný signál x[n] na výstupný signál y[n].",
      "Vždy iba znižuje vzorkovaciu frekvenciu.",
      "Slúži výlučne na D/A prevod.",
      "Mení index n na spojitý čas t."
    ],
    "spravne": [0],
    "vysvetlenie": "Diskrétny systém je transformácia, ktorá zo vstupnej postupnosti x[n] vytvorí výstupnú postupnosť y[n].",
    "slideRef": "CZS_2_03.pdf slide 19",
    "subtema": "CZS 2: Popis diskrétneho systému"
  },
  {
    "id": "czs2-018",
    "tema": "CZS 2: Diskrétny systém",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo znamená vonkajší popis diskrétneho systému?",
    "moznosti": [
      "Popis vzťahu medzi vstupom x[n] a výstupom y[n].",
      "Popis iba fyzického tvaru procesora.",
      "Popis farby grafu v prezentácii.",
      "Popis výlučne kvantizačných hladín."
    ],
    "spravne": [0],
    "vysvetlenie": "Vonkajší popis sa pozerá na systém cez vstup a výstup, typicky y[n] = T{x[n]}.",
    "slideRef": "CZS_2_03.pdf slide 19",
    "subtema": "CZS 2: Popis diskrétneho systému"
  },
  {
    "id": "czs2-019",
    "tema": "CZS 2: Diskrétny systém",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo pridáva vnútorný/stavový popis systému oproti vonkajšiemu popisu?",
    "moznosti": [
      "Stavové vnútorné premenné systému.",
      "Iba inú farbu výstupného grafu.",
      "Iba vzorkovaciu periódu.",
      "Iba počet bitov A/D prevodníka."
    ],
    "spravne": [0],
    "vysvetlenie": "Stavový popis sleduje aj vnútorné premenné, ktoré si systém pamätá medzi vzorkami.",
    "slideRef": "CZS_2_03.pdf slides 19, 33, 34",
    "subtema": "CZS 2: Stavový popis"
  },
  {
    "id": "czs2-020",
    "tema": "CZS 2: Akumulátor",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo robí systém typu akumulátor?",
    "moznosti": [
      "Počíta postupný súčet aktuálnej a predchádzajúcich vstupných vzoriek.",
      "Vždy počíta iba rozdiel dvoch susedných vzoriek.",
      "Ignoruje všetky predchádzajúce vzorky.",
      "Mení každý signál na jednotkový impulz."
    ],
    "spravne": [0],
    "vysvetlenie": "Akumulátor si sčíta vstupné vzorky, teda jeho výstup závisí aj od minulosti.",
    "slideRef": "CZS_2_03.pdf slides 20, 21",
    "subtema": "CZS 2: Akumulátor"
  },
  {
    "id": "czs2-021",
    "tema": "CZS 2: Akumulátor",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý rekurzívny vzťah vystihuje akumulátor?",
    "moznosti": [
      "y[n] = y[n - 1] + x[n]",
      "y[n] = x[n]²",
      "y[n] = n · x[n]",
      "y[n] = x[n + 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Nový výstup akumulátora je predchádzajúci výstup plus aktuálna vstupná vzorka.",
    "slideRef": "CZS_2_03.pdf slides 23, 24",
    "subtema": "CZS 2: Akumulátor"
  },
  {
    "id": "czs2-022",
    "tema": "CZS 2: Akumulátor",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "lahka",
    "otazka": "Ak y[-1] = 0, x[0] = 2 a akumulátor má vzťah y[n] = y[n - 1] + x[n], koľko je y[0]?",
    "moznosti": [
      "2",
      "0",
      "-2",
      "4"
    ],
    "spravne": [0],
    "vysvetlenie": "Dosadíme y[0] = y[-1] + x[0] = 0 + 2 = 2.",
    "slideRef": "CZS_2_03.pdf slides 23, 24",
    "subtema": "CZS 2: Akumulátor"
  },
  {
    "id": "czs2-023",
    "tema": "CZS 2: Akumulátor",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak y[-1] = 0 a vstup je x[0] = 1, x[1] = 2, x[2] = 3, aká je hodnota y[2] pre akumulátor?",
    "moznosti": [
      "6",
      "3",
      "2",
      "1"
    ],
    "spravne": [0],
    "vysvetlenie": "Akumulátor sčíta 1 + 2 + 3 = 6.",
    "slideRef": "CZS_2_03.pdf slides 20, 22",
    "subtema": "CZS 2: Akumulátor"
  },
  {
    "id": "czs2-024",
    "tema": "CZS 2: Počiatočné podmienky",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo vyjadruje počiatočná podmienka pri akumulátore?",
    "moznosti": [
      "Vplyv hodnôt pred začiatkom výpočtu.",
      "Počet bitov v kvantizéri.",
      "Najvyššiu frekvenciu signálu.",
      "Farbu krivky v grafe."
    ],
    "spravne": [0],
    "vysvetlenie": "Počiatočná podmienka hovorí, aký stav mal systém pred zvoleným začiatkom výpočtu.",
    "slideRef": "CZS_2_03.pdf slides 23, 24",
    "subtema": "CZS 2: Počiatočné podmienky"
  },
  {
    "id": "czs2-025",
    "tema": "CZS 2: Počiatočné podmienky",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo znamenajú nulové počiatočné podmienky?",
    "moznosti": [
      "Výstupné/stavové hodnoty pred začiatkom výpočtu sú nulové.",
      "Vstupný signál má vždy nulovú amplitúdu.",
      "Vzorkovacia frekvencia je nulová.",
      "Systém nemá žiadny výstup ani po budení."
    ],
    "spravne": [0],
    "vysvetlenie": "Systém bez predchádzajúceho budenia má pred začiatkom výpočtu nulový vnútorný stav.",
    "slideRef": "CZS_2_03.pdf slide 24",
    "subtema": "CZS 2: Počiatočné podmienky"
  },
  {
    "id": "czs2-026",
    "tema": "CZS 2: Počiatočné podmienky",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Ak akumulátor má y[-1] = 5 a x[0] = 2, aké je y[0]?",
    "moznosti": [
      "7",
      "2",
      "5",
      "-3"
    ],
    "spravne": [0],
    "vysvetlenie": "Počiatočný stav sa pripočíta: y[0] = y[-1] + x[0] = 5 + 2 = 7.",
    "slideRef": "CZS_2_03.pdf slides 24, 26",
    "subtema": "CZS 2: Počiatočné podmienky"
  },
  {
    "id": "czs2-027",
    "tema": "CZS 2: Počiatočné podmienky",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Počiatočné podmienky nemôžu ovplyvniť výstup rekurzívneho systému.“",
    "moznosti": [
      "Môžu, pretože rekurzívny systém používa minulý výstup alebo stav.",
      "Tvrdenie je správne pre každý systém s pamäťou.",
      "Počiatočné podmienky sú iba názov pre vzorkovaciu periódu.",
      "Rekurzívny systém nikdy nepoužíva minulosť."
    ],
    "spravne": [0],
    "vysvetlenie": "Ak systém používa y[n - 1] alebo stavové premenné, musí byť jasné, odkiaľ výpočet začína.",
    "slideRef": "CZS_2_03.pdf slides 23, 24",
    "subtema": "CZS 2: Počiatočné podmienky"
  },
  {
    "id": "czs2-028",
    "tema": "CZS 2: Rekurzia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo znamená, že diferenčná rovnica systému je rekurzívna?",
    "moznosti": [
      "Výstup sa počíta aj zo zpoždených výstupných vzoriek.",
      "Výstup závisí iba od aktuálneho vstupu.",
      "Systém nemá žiadnu pamäť.",
      "Rovnica neobsahuje index n."
    ],
    "spravne": [0],
    "vysvetlenie": "Rekurzívny systém používa spätnú väzbu alebo predchádzajúce výstupy, napríklad y[n - 1].",
    "slideRef": "CZS_2_03.pdf slide 30",
    "subtema": "CZS 2: Rekurzia"
  },
  {
    "id": "czs2-029",
    "tema": "CZS 2: Rekurzia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý zápis najviac naznačuje rekurzívny systém?",
    "moznosti": [
      "y[n] = 0,5 · y[n - 1] + x[n]",
      "y[n] = 2 · x[n]",
      "y[n] = x[n]²",
      "y[n] = x[n] + x[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Rekurziu spoznáme podľa toho, že pravá strana obsahuje minulý výstup y[n - 1].",
    "slideRef": "CZS_2_03.pdf slide 30",
    "subtema": "CZS 2: Rekurzia"
  },
  {
    "id": "czs2-030",
    "tema": "CZS 2: Blokový diagram",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo v blokovom diagrame znamená z^-1?",
    "moznosti": [
      "Zpoždenie signálu o jeden diskrétny krok.",
      "Zosilnenie signálu na -1 volt.",
      "Prevod signálu na analógový.",
      "Vymazanie aktuálnej vzorky."
    ],
    "spravne": [0],
    "vysvetlenie": "Blok z^-1 je pamäťový prvok, ktorý oneskorí signál o jednu vzorku.",
    "slideRef": "CZS_2_03.pdf slide 31",
    "subtema": "CZS 2: Blokové diagramy"
  },
  {
    "id": "czs2-031",
    "tema": "CZS 2: Blokový diagram",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Na čo slúži blokový diagram alebo graf signálových tokov?",
    "moznosti": [
      "Na znázornenie realizácie diskrétneho systému pomocou sčítačiek, násobení a oneskorení.",
      "Na výber farby pozadia aplikácie.",
      "Na kvantovanie hodnôt vzoriek.",
      "Iba na zápis spojitého času t."
    ],
    "spravne": [0],
    "vysvetlenie": "Blokový diagram ukazuje, ako je rovnica systému zostavená z operácií a pamäťových prvkov.",
    "slideRef": "CZS_2_03.pdf slides 31, 32",
    "subtema": "CZS 2: Blokové diagramy"
  },
  {
    "id": "czs2-032",
    "tema": "CZS 2: Stavový popis",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo je stavová premenná v[n]?",
    "moznosti": [
      "Vnútorná premenná systému, ktorá reprezentuje jeho pamäťový stav.",
      "Vždy iba vstupný signál systému.",
      "Vzorkovacia frekvencia zapísaná v hertzoch.",
      "Počet bitov kvantovania."
    ],
    "spravne": [0],
    "vysvetlenie": "Stavová premenná uchováva informáciu o vnútri systému medzi jednotlivými vzorkami.",
    "slideRef": "CZS_2_03.pdf slides 33, 34",
    "subtema": "CZS 2: Stavový popis"
  },
  {
    "id": "czs2-033",
    "tema": "CZS 2: Klasifikácia systémov",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo je statický diskrétny systém?",
    "moznosti": [
      "Systém bez pamäti, ktorého výstup závisí iba od aktuálnej vstupnej vzorky.",
      "Systém, ktorý vždy používa budúce vzorky.",
      "Systém, ktorý má vždy spätnú väzbu.",
      "Systém, ktorý neobsahuje vstupný signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Statický systém nemá pamäť, preto nepotrebuje minulé ani budúce vzorky.",
    "slideRef": "CZS_2_03.pdf slide 36",
    "subtema": "CZS 2: Statický a dynamický systém"
  },
  {
    "id": "czs2-034",
    "tema": "CZS 2: Klasifikácia systémov",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo je dynamický diskrétny systém?",
    "moznosti": [
      "Systém s pamäťou, ktorý využíva minulé vstupné alebo výstupné vzorky.",
      "Systém, ktorý závisí iba od x[n].",
      "Systém bez vnútornej pamäte.",
      "Systém, ktorý má vždy nulový výstup."
    ],
    "spravne": [0],
    "vysvetlenie": "Dynamický systém si pamätá predchádzajúce vzorky alebo stav.",
    "slideRef": "CZS_2_03.pdf slide 36",
    "subtema": "CZS 2: Statický a dynamický systém"
  },
  {
    "id": "czs2-035",
    "tema": "CZS 2: Klasifikácia systémov",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý systém je statický?",
    "moznosti": [
      "y[n] = 3 · x[n]",
      "y[n] = x[n] + x[n - 1]",
      "y[n] = y[n - 1] + x[n]",
      "y[n] = x[n + 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "y[n] = 3 · x[n] závisí iba od aktuálnej vstupnej vzorky.",
    "slideRef": "CZS_2_03.pdf slide 36",
    "subtema": "CZS 2: Statický a dynamický systém"
  },
  {
    "id": "czs2-036",
    "tema": "CZS 2: Klasifikácia systémov",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý systém je dynamický?",
    "moznosti": [
      "y[n] = x[n] + x[n - 1]",
      "y[n] = 2 · x[n]",
      "y[n] = x[n]²",
      "y[n] = n · x[n]"
    ],
    "spravne": [0],
    "vysvetlenie": "Systém používa minulú vzorku x[n - 1], teda má pamäť.",
    "slideRef": "CZS_2_03.pdf slide 36",
    "subtema": "CZS 2: Statický a dynamický systém"
  },
  {
    "id": "czs2-037",
    "tema": "CZS 2: Časová invariantnosť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo znamená časovo invariantný systém?",
    "moznosti": [
      "Jeho správanie sa nemení s časom; posun vstupu spôsobí rovnaký posun výstupu.",
      "Jeho výstup je vždy nulový.",
      "Jeho správanie závisí priamo od indexu n.",
      "Vždy používa budúce vzorky."
    ],
    "spravne": [0],
    "vysvetlenie": "Časová invariantnosť znamená, že systém reaguje rovnako bez ohľadu na to, kedy signál príde.",
    "slideRef": "CZS_2_03.pdf slide 37",
    "subtema": "CZS 2: Časová invariantnosť"
  },
  {
    "id": "czs2-038",
    "tema": "CZS 2: Časová invariantnosť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ako sa testuje časová invariantnosť systému?",
    "moznosti": [
      "Porovná sa odozva na posunutý vstup s posunutou odozvou na pôvodný vstup.",
      "Stačí pozrieť, či výstup obsahuje samé nuly.",
      "Stačí zistiť počet kvantizačných hladín.",
      "Vždy sa počíta iba energia vstupu."
    ],
    "spravne": [0],
    "vysvetlenie": "Ak oba postupy dajú rovnaký výsledok, systém je časovo invariantný.",
    "slideRef": "CZS_2_03.pdf slide 38",
    "subtema": "CZS 2: Časová invariantnosť"
  },
  {
    "id": "czs2-039",
    "tema": "CZS 2: Časová invariantnosť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Je systém y[n] = x[n - 1] časovo invariantný?",
    "moznosti": [
      "Áno, ide o pevné oneskorenie o jednu vzorku.",
      "Nie, lebo obsahuje index n.",
      "Nie, lebo každý systém s oneskorením je časovo premenný.",
      "Áno, ale iba ak je x[n] nulový."
    ],
    "spravne": [0],
    "vysvetlenie": "Pevné oneskorenie nemení svoje správanie v čase, preto je systém časovo invariantný.",
    "slideRef": "CZS_2_03.pdf slides 39, 42",
    "subtema": "CZS 2: Časová invariantnosť"
  },
  {
    "id": "czs2-040",
    "tema": "CZS 2: Časová invariantnosť",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Je systém y[n] = n · x[n] časovo invariantný?",
    "moznosti": [
      "Nie, pretože násobenie závisí priamo od času/indexu n.",
      "Áno, lebo je bez pamäti.",
      "Áno, lebo nepoužíva x[n - 1].",
      "Nie, lebo neobsahuje žiadny vstup."
    ],
    "spravne": [0],
    "vysvetlenie": "Koeficient n sa mení s časom, preto sa systém správa inak pre rôzne polohy signálu.",
    "slideRef": "CZS_2_03.pdf slides 43, 46",
    "subtema": "CZS 2: Časová invariantnosť"
  },
  {
    "id": "czs2-041",
    "tema": "CZS 2: Linearita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo musí spĺňať lineárny systém?",
    "moznosti": [
      "Princíp superpozície.",
      "Vždy musí byť bez pamäti.",
      "Vždy musí byť nestabilný.",
      "Musí obsahovať člen x[n]²."
    ],
    "spravne": [0],
    "vysvetlenie": "Lineárny systém zachováva sčítanie a násobenie konštantou.",
    "slideRef": "CZS_2_03.pdf slide 47",
    "subtema": "CZS 2: Linearita"
  },
  {
    "id": "czs2-042",
    "tema": "CZS 2: Linearita",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré dve vlastnosti tvoria princíp superpozície?",
    "moznosti": [
      "Aditivita.",
      "Homogenita.",
      "Kvantovanie.",
      "Vzorkovanie."
    ],
    "spravne": [0, 1],
    "vysvetlenie": "Pre lineárny systém platí T{a1x1 + a2x2} = a1T{x1} + a2T{x2}.",
    "slideRef": "CZS_2_03.pdf slide 47",
    "subtema": "CZS 2: Linearita"
  },
  {
    "id": "czs2-043",
    "tema": "CZS 2: Linearita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Je systém y[n] = n · x[n] lineárny?",
    "moznosti": [
      "Áno, lebo vstup x[n] je iba násobený koeficientom závislým od n.",
      "Nie, každý člen n automaticky znamená nelinearitu.",
      "Nie, lebo systém je časovo invariantný.",
      "Áno, ale iba pre nulový vstup."
    ],
    "spravne": [0],
    "vysvetlenie": "Systém je lineárny voči vstupu x[n], aj keď je časovo premenný.",
    "slideRef": "CZS_2_03.pdf slides 48, 50",
    "subtema": "CZS 2: Linearita"
  },
  {
    "id": "czs2-044",
    "tema": "CZS 2: Linearita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Je systém y[n] = x[n]² lineárny?",
    "moznosti": [
      "Nie, druhá mocnina porušuje princíp superpozície.",
      "Áno, každý systém bez oneskorenia je lineárny.",
      "Áno, ak x[n] je diskrétny signál.",
      "Nie, lebo neobsahuje index n."
    ],
    "spravne": [0],
    "vysvetlenie": "Pre súčet vstupov vznikne člen 2x1[n]x2[n], preto superpozícia neplatí.",
    "slideRef": "CZS_2_03.pdf slides 51, 52",
    "subtema": "CZS 2: Linearita"
  },
  {
    "id": "czs2-045",
    "tema": "CZS 2: Linearita",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Ak je systém časovo premenný, automaticky nemôže byť lineárny.“",
    "moznosti": [
      "Časová premennosť a linearita sú rôzne vlastnosti; systém môže byť lineárny aj časovo premenný.",
      "Tvrdenie je vždy správne.",
      "Lineárny systém musí byť vždy bez pamäti.",
      "Časová premennosť znamená iba kvantovanie hodnôt."
    ],
    "spravne": [0],
    "vysvetlenie": "Napríklad y[n] = n · x[n] je lineárny voči vstupu, ale nie je časovo invariantný.",
    "slideRef": "CZS_2_03.pdf slides 43, 47, 50",
    "subtema": "CZS 2: Linearita"
  },
  {
    "id": "czs2-046",
    "tema": "CZS 2: Kauzalita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo je kauzálny diskrétny systém?",
    "moznosti": [
      "Systém, ktorého výstup závisí iba od aktuálnych a minulých vzoriek vstupu.",
      "Systém, ktorého výstup závisí od budúcich vzoriek.",
      "Systém, ktorý nemá žiadny vstup.",
      "Systém, ktorý je vždy nelineárny."
    ],
    "spravne": [0],
    "vysvetlenie": "Kauzálny systém nepotrebuje vedieť budúcnosť vstupného signálu.",
    "slideRef": "CZS_2_03.pdf slide 53",
    "subtema": "CZS 2: Kauzalita"
  },
  {
    "id": "czs2-047",
    "tema": "CZS 2: Kauzalita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý systém je kauzálny?",
    "moznosti": [
      "y[n] = x[n] + x[n - 1]",
      "y[n] = x[n + 1]",
      "y[n] = x[n + 3] - x[n]",
      "y[n] = x[n + 2]"
    ],
    "spravne": [0],
    "vysvetlenie": "Používa aktuálnu a minulú vzorku, nie budúcu vzorku.",
    "slideRef": "CZS_2_03.pdf slide 53",
    "subtema": "CZS 2: Kauzalita"
  },
  {
    "id": "czs2-048",
    "tema": "CZS 2: Kauzalita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktorý systém je nekauzálny?",
    "moznosti": [
      "y[n] = x[n + 2]",
      "y[n] = x[n]",
      "y[n] = x[n - 1]",
      "y[n] = y[n - 1] + x[n]"
    ],
    "spravne": [0],
    "vysvetlenie": "x[n + 2] je budúca vstupná vzorka, preto ide o nekauzálny systém.",
    "slideRef": "CZS_2_03.pdf slide 54",
    "subtema": "CZS 2: Kauzalita"
  },
  {
    "id": "czs2-049",
    "tema": "CZS 2: Kauzalita",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Systém y[n] = x[n + 1] je kauzálny, lebo používa iba jednu vzorku.“",
    "moznosti": [
      "Nie je kauzálny, pretože používa budúcu vzorku vstupu.",
      "Tvrdenie je správne, počet vzoriek rozhoduje o kauzalite.",
      "Chyba je iba v tom, že systém je vždy nulový.",
      "Kauzalita sa pri diskrétnych systémoch nedefinuje."
    ],
    "spravne": [0],
    "vysvetlenie": "Rozhoduje časová poloha vzorky. Budúce vzorky znamenajú nekauzálny systém.",
    "slideRef": "CZS_2_03.pdf slide 54",
    "subtema": "CZS 2: Kauzalita"
  },
  {
    "id": "czs2-050",
    "tema": "CZS 2: Stabilita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "lahka",
    "otazka": "Čo znamená BIBO stabilita?",
    "moznosti": [
      "Ohraničený vstup vyvolá ohraničený výstup.",
      "Nulový vstup vždy vyvolá nekonečný výstup.",
      "Každý systém s pamäťou je stabilný.",
      "Stabilita znamená iba časovú invariantnosť."
    ],
    "spravne": [0],
    "vysvetlenie": "BIBO znamená Bounded Input - Bounded Output.",
    "slideRef": "CZS_2_03.pdf slide 55",
    "subtema": "CZS 2: Stabilita"
  },
  {
    "id": "czs2-051",
    "tema": "CZS 2: Stabilita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Čo je typický prejav nestabilného systému?",
    "moznosti": [
      "Aj pri ohraničenom vstupe môže výstup rásť bez obmedzenia.",
      "Výstup je vždy presne rovný vstupu.",
      "Systém nepoužíva žiadne vzorky.",
      "Každý výstup má konečnú dĺžku jednej vzorky."
    ],
    "spravne": [0],
    "vysvetlenie": "Nestabilita znamená, že systém vie vyprodukovať neohraničený výstup z ohraničeného vstupu.",
    "slideRef": "CZS_2_03.pdf slides 55, 57",
    "subtema": "CZS 2: Stabilita"
  },
  {
    "id": "czs2-052",
    "tema": "CZS 2: Stabilita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Pre systém y[n] = C · y[n - 1] + x[n] je podľa prezentácie stabilita spojená s ktorou podmienkou?",
    "moznosti": [
      "|C| < 1",
      "|C| > 1",
      "C musí byť presne 2",
      "C nemá žiadny vplyv na stabilitu"
    ],
    "spravne": [0],
    "vysvetlenie": "Ak |C| < 1, odozva postupne klesá. Ak |C| > 1, výstup rastie bez obmedzenia.",
    "slideRef": "CZS_2_03.pdf slides 56, 57",
    "subtema": "CZS 2: Stabilita"
  },
  {
    "id": "czs2-053",
    "tema": "CZS 2: Stabilita",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Je systém y[n] = 0,5 · y[n - 1] + x[n] stabilný podľa podmienky |C| < 1?",
    "moznosti": [
      "Áno, pretože |0,5| < 1.",
      "Nie, pretože 0,5 je kladné číslo.",
      "Nie, pretože systém je rekurzívny.",
      "Áno, ale iba pre nulový vstup."
    ],
    "spravne": [0],
    "vysvetlenie": "Koeficient spätnej väzby má veľkosť menšiu než 1, preto odozva klesá.",
    "slideRef": "CZS_2_03.pdf slide 57",
    "subtema": "CZS 2: Stabilita"
  },
  {
    "id": "czs2-054",
    "tema": "CZS 2: Stabilita",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "stredna",
    "otazka": "Je systém y[n] = 2 · y[n - 1] + x[n] stabilný podľa podmienky |C| < 1?",
    "moznosti": [
      "Nie, pretože |2| > 1.",
      "Áno, každý systém s konštantou 2 je stabilný.",
      "Áno, lebo používa iba jednu minulú vzorku.",
      "Nie, lebo x[n] je diskrétny signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Koeficient spätnej väzby má veľkosť väčšiu než 1, takže odozva môže rásť bez obmedzenia.",
    "slideRef": "CZS_2_03.pdf slide 57",
    "subtema": "CZS 2: Stabilita"
  },
  {
    "id": "czs2-055",
    "tema": "CZS 2: Stabilita",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "stredna",
    "otazka": "Nájdi chybu: „Každý rekurzívny systém je automaticky nestabilný.“",
    "moznosti": [
      "Nie každý. Stabilita závisí od koeficientov, napríklad od |C| pri spätnej väzbe.",
      "Tvrdenie je vždy správne.",
      "Rekurzívny systém nikdy nemá vstup.",
      "Stabilita sa nedá skúmať pri diskrétnych systémoch."
    ],
    "spravne": [0],
    "vysvetlenie": "Rekurzia sama o sebe neznamená nestabilitu. Dôležité je, či sa odozva tlmí alebo rastie.",
    "slideRef": "CZS_2_03.pdf slides 56, 57",
    "subtema": "CZS 2: Stabilita"
  },
  {
    "id": "czs2-056",
    "tema": "CZS 2: Súhrn klasifikácie",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré dvojice vlastností sú správne spárované?",
    "moznosti": [
      "Statický systém → bez pamäti.",
      "Dynamický systém → s pamäťou.",
      "Kauzálny systém → používa iba aktuálne a minulé vzorky.",
      "Nekauzálny systém → nikdy nepoužíva budúce vzorky."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Nekauzálny systém je práve ten, ktorý používa aj budúce vzorky.",
    "slideRef": "CZS_2_03.pdf slides 36, 53, 54",
    "subtema": "CZS 2: Súhrn klasifikácie"
  },
  {
    "id": "czs2-057",
    "tema": "CZS 2: Súhrn klasifikácie",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "stredna",
    "otazka": "Ktoré tvrdenia sú správne?",
    "moznosti": [
      "Systém môže byť lineárny a zároveň časovo premenný.",
      "Systém môže byť dynamický a zároveň kauzálny.",
      "Systém bez pamäti je vždy nekauzálny.",
      "BIBO stabilita znamená ohraničený vstup → ohraničený výstup."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Vlastnosti systému sa posudzujú samostatne. Statický systém môže byť kauzálny, ak nepoužíva budúcnosť.",
    "slideRef": "CZS_2_03.pdf slides 36, 47, 53, 55",
    "subtema": "CZS 2: Súhrn klasifikácie"
  },
  {
    "id": "czs2-058",
    "tema": "CZS 2: Súhrn klasifikácie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ako by si klasifikoval systém y[n] = x[n] + x[n - 1]?",
    "moznosti": [
      "Dynamický, kauzálny, lineárny a časovo invariantný.",
      "Statický, nekauzálny, nelineárny a časovo premenný.",
      "Dynamický, nekauzálny, nelineárny a nestabilný vždy.",
      "Statický, kauzálny, nelineárny a časovo invariantný."
    ],
    "spravne": [0],
    "vysvetlenie": "Používa minulú vzorku, teda je dynamický. Nepoužíva budúcnosť, je kauzálny. Súčet je lineárny a pevné oneskorenie je časovo invariantné.",
    "slideRef": "CZS_2_03.pdf slides 36, 37, 47, 53",
    "subtema": "CZS 2: Súhrn klasifikácie"
  },
  {
    "id": "czs2-059",
    "tema": "CZS 2: Súhrn klasifikácie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ako by si klasifikoval systém y[n] = x[n + 1]?",
    "moznosti": [
      "Statický podľa počtu vzoriek, ale nekauzálny, pretože používa budúcnosť.",
      "Kauzálny, lebo používa iba jednu vzorku.",
      "Nelineárny, lebo obsahuje plus.",
      "Rekurzívny, lebo obsahuje x[n + 1]."
    ],
    "spravne": [0],
    "vysvetlenie": "Výstup závisí od jednej vstupnej vzorky, ale táto vzorka je budúca. Preto je systém nekauzálny.",
    "slideRef": "CZS_2_03.pdf slide 54",
    "subtema": "CZS 2: Súhrn klasifikácie"
  },
  {
    "id": "czs2-060",
    "tema": "CZS 2: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia vystihujú CZS 2?",
    "moznosti": [
      "Korelácia vie odhadnúť podobnosť a oneskorenie signálov.",
      "Autokorelácia vie ukázať skrytú periodicitu.",
      "Rekurzívny systém používa minulý výstup alebo vnútorný stav.",
      "Stabilný systém musí vždy používať budúce vzorky."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Prvé tri tvrdenia sú základ CZS 2. Stabilita nesúvisí s nutnosťou používať budúce vzorky.",
    "slideRef": "CZS_2_03.pdf",
    "subtema": "CZS 2: Súhrn"
  },
  {
    "id": "czs3-001",
    "tema": "CZS 3: LTI systém",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia sú nutné na to, aby bol výstup systému možné vyjadriť konvolúciou y[n] = x[n] * h[n]?",
    "moznosti": [
      "Systém musí byť lineárny, aby sa odozva na súčet impulzov dala zložiť zo súčtu odoziev.",
      "Systém musí byť časovo invariantný, aby odozva na posunutý impulz bola posunutá verzia jednej impulznej charakteristiky.",
      "Stačí, aby bol systém kauzálny; linearita ani časová invariantnosť nie sú potrebné.",
      "Stačí, aby bola impulzná charakteristika konečná; potom konvolučný popis platí aj pre nelineárny systém."
    ],
    "spravne": [0, 1],
    "vysvetlenie": "Konvolučný popis vychádza z rozkladu vstupu na vážené impulzy. Linearita dovolí sčítať vážené odozvy a časová invariantnosť dovolí používať jednu h[n] pre všetky posuny.",
    "slideRef": "CZS_3_03.pdf slides 2, 3",
    "subtema": "CZS 3: LTI a konvolučný popis"
  },
  {
    "id": "czs3-002",
    "tema": "CZS 3: LTI systém",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Prečo pri LTI systéme stačí poznať jednu impulznú charakteristiku h[n]?",
    "moznosti": [
      "Lebo časová invariantnosť zaručí, že odozva na δ[n - k] je iba posunutá h[n - k].",
      "Lebo linearita sama zaručí, že odozva na každý posunutý impulz má rovnakú polohu aj tvar.",
      "Lebo kauzalita zaručí, že všetky impulzné charakteristiky pred n = 0 sú rovnaké.",
      "Lebo stabilita zaručí, že odozva na každý impulz má konečný počet vzoriek."
    ],
    "spravne": [0],
    "vysvetlenie": "Lineárny systém môže mať pre rôzne časy rôzne impulzné odozvy, ak nie je časovo invariantný. Jedna h[n] stačí až v LTI prípade.",
    "slideRef": "CZS_3_03.pdf slide 3",
    "subtema": "CZS 3: LTI a konvolučný popis"
  },
  {
    "id": "czs3-003",
    "tema": "CZS 3: LTI systém",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Ak poznám h[n], viem konvolúciou popísať každý diskrétny systém, aj keď je nelineárny.“",
    "moznosti": [
      "Impulzná charakteristika jednoznačne určuje vstupno-výstupný vzťah len pri LTI systéme.",
      "Tvrdenie je správne, impulzná charakteristika vždy stačí pre ľubovoľný diskrétny systém.",
      "Chyba je iba v tom, že pri nelineárnom systéme treba namiesto konvolúcie použiť koreláciu.",
      "Stačí pridať podmienku kauzality; nelinearita potom nevadí."
    ],
    "spravne": [0],
    "vysvetlenie": "Nelineárny systém nereaguje na súčet impulzov ako súčet jednotlivých odoziev, preto rozklad cez vážené impulzy nevedie na konvolúciu.",
    "slideRef": "CZS_3_03.pdf slides 2, 3",
    "subtema": "CZS 3: LTI a konvolučný popis"
  },
  {
    "id": "czs3-004",
    "tema": "CZS 3: LTI systém",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak je x[n] = 3δ[n] - 2δ[n - 1] a systém je LTI s impulznou charakteristikou h[n], aký je výstup?",
    "moznosti": [
      "y[n] = 3h[n] - 2h[n - 1]",
      "y[n] = 3h[n] - 2h[n + 1]",
      "y[n] = h[3n] - h[2n - 1]",
      "y[n] = 3δ[n] * h[n - 2]"
    ],
    "spravne": [0],
    "vysvetlenie": "Každý vážený a posunutý impulz vyvolá rovnakým spôsobom váženú a posunutú impulznú odozvu.",
    "slideRef": "CZS_3_03.pdf slides 2, 3",
    "subtema": "CZS 3: LTI a konvolučný popis"
  },
  {
    "id": "czs3-005",
    "tema": "CZS 3: LTI systém",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré interpretácie impulznej charakteristiky h[n] sú správne?",
    "moznosti": [
      "Je to odozva LTI systému na jednotkový impulz δ[n].",
      "Pri LTI systéme určuje, ako systém ovplyvní ľubovoľný vstup cez konvolúciu.",
      "Pri časovo premennom lineárnom systéme musí byť rovnaká pre každý časový posun impulzu.",
      "Ak je h[n] konečná, systém je FIR; ak je nekonečná, systém môže byť IIR."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Tretia možnosť je pasca: rovnaká odozva pre posunuté impulzy je vlastnosť časovej invariantnosti, nie všeobecného časovo premenného systému.",
    "slideRef": "CZS_3_03.pdf slides 3, 23, 26",
    "subtema": "CZS 3: Impulzná charakteristika"
  },
  {
    "id": "czs3-006",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktorý zápis diskrétnej konvolúcie správne zodpovedá výstupu LTI systému?",
    "moznosti": [
      "y[n] = Σ_k x[k] · h[n - k]",
      "y[n] = Σ_k x[k] · h[n + k]",
      "y[n] = Σ_k x[n] · h[k], teda x[n] sa v sume nemení.",
      "y[n] = Σ_k x[k] · h[k - n], čo je vždy rovnaké ako korelácia bez otočenia."
    ],
    "spravne": [0],
    "vysvetlenie": "Konvolúcia obsahuje otočenie a posun jednej postupnosti. Zápis s h[n - k] je štandardný konvolučný tvar.",
    "slideRef": "CZS_3_03.pdf slides 4, 5",
    "subtema": "CZS 3: Diskrétna konvolúcia"
  },
  {
    "id": "czs3-007",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Pri ručnom výpočte konvolúcie stačí jednu postupnosť iba posúvať, netreba ju otáčať.“",
    "moznosti": [
      "Pri konvolúcii sa jedna postupnosť najprv zmení na funkciu indexu k, potom sa otočí a až potom posúva.",
      "Tvrdenie je správne, otočenie patrí ku korelácii, nie ku konvolúcii.",
      "Otočenie netreba iba vtedy, keď sú obe postupnosti konečné.",
      "Otočenie sa nahrádza tým, že zameníme x[n] a h[n]; tým vždy dostaneme koreláciu."
    ],
    "spravne": [0],
    "vysvetlenie": "Pasca je zámenná s koreláciou. Konvolúcia vyžaduje otočenie jednej postupnosti a posúvanie cez všetky n.",
    "slideRef": "CZS_3_03.pdf slides 5, 6",
    "subtema": "CZS 3: Diskrétna konvolúcia"
  },
  {
    "id": "czs3-008",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Ak x[n] = {1, 2} so začiatkom pri prvej vzorke a h[n] = {3, 4, 5} so začiatkom pri prvej vzorke, aký je lineárny konvolučný výsledok?",
    "moznosti": [
      "{3, 10, 13, 10}",
      "{3, 8, 15, 10}",
      "{5, 14, 11, 6}",
      "{10, 13, 10}"
    ],
    "spravne": [0],
    "vysvetlenie": "Postupne: 1·3 = 3, 1·4 + 2·3 = 10, 1·5 + 2·4 = 13, 2·5 = 10. Tretia možnosť pripomína zamenený/otočený výpočet.",
    "slideRef": "CZS_3_03.pdf slides 6, 7",
    "subtema": "CZS 3: Výpočet konvolúcie"
  },
  {
    "id": "czs3-009",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Ak x[n] = {1, -1, 2} a h[n] = {2, 1}, aký je výsledok x[n] * h[n]?",
    "moznosti": [
      "{2, -1, 3, 2}",
      "{2, 1, -1, 2}",
      "{1, 1, 1, 2}",
      "{2, -2, 4, 0}"
    ],
    "spravne": [0],
    "vysvetlenie": "Výsledok má dĺžku 3 + 2 - 1 = 4. Hodnoty sú 1·2, 1·1 + (-1)·2, (-1)·1 + 2·2, 2·1.",
    "slideRef": "CZS_3_03.pdf slides 6, 7",
    "subtema": "CZS 3: Výpočet konvolúcie"
  },
  {
    "id": "czs3-010",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Dve konečné postupnosti majú dĺžky M = 5 a N = 3. Aká je dĺžka ich lineárnej konvolúcie?",
    "moznosti": [
      "7",
      "8",
      "5",
      "15"
    ],
    "spravne": [0],
    "vysvetlenie": "Dĺžka lineárnej konvolúcie je M + N - 1. Pasca M + N ignoruje prekrytie prvého/posledného nenulového člena.",
    "slideRef": "CZS_3_03.pdf slide 8",
    "subtema": "CZS 3: Výpočet konvolúcie"
  },
  {
    "id": "czs3-011",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Nech x[n] má prvý nenulový index -1 a dĺžku 4, h[n] má prvý nenulový index 2 a dĺžku 3. Kde začína y[n] = x[n] * h[n]?",
    "moznosti": [
      "Na indexe n = 1.",
      "Na indexe n = -3.",
      "Na indexe n = 2.",
      "Na indexe n = 0, lebo konvolúcia vždy začína v nule."
    ],
    "spravne": [0],
    "vysvetlenie": "Začiatok konvolúcie je súčet prvých nenulových indexov: -1 + 2 = 1. Poloha začiatku nie je automaticky nula.",
    "slideRef": "CZS_3_03.pdf slide 8",
    "subtema": "CZS 3: Výpočet konvolúcie"
  },
  {
    "id": "czs3-012",
    "tema": "CZS 3: Konvolúcia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia o lineárnej konvolúcii konečných postupností sú správne?",
    "moznosti": [
      "Poradie postupností možno zameniť bez zmeny výsledných hodnôt.",
      "Dĺžka výsledku je súčet dĺžok mínus jedna.",
      "Začiatok výsledku je súčet začiatkov oboch postupností.",
      "Komutativnosť konvolúcie znamená, že sa pri ručnom výpočte nemusí otáčať žiadna postupnosť."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Komutativnosť neodstraňuje princíp otočenia a posunu pri ručnom algoritme. Hovorí iba, že x*h a h*x dávajú rovnaký výsledok.",
    "slideRef": "CZS_3_03.pdf slides 8, 9, 11",
    "subtema": "CZS 3: Vlastnosti konvolúcie"
  },
  {
    "id": "czs3-013",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo presne znamená komutativita konvolúcie v kontexte LTI systému?",
    "moznosti": [
      "Z matematického hľadiska je x[n] * h[n] = h[n] * x[n], hoci fyzikálne zostáva h[n] impulznou odozvou systému.",
      "Vstupný signál a systém sú fyzikálne vždy zameniteľné, teda každý vstup možno považovať za filter.",
      "Komutativita platí iba pre kauzálne FIR systémy, nie pre všeobecné LTI systémy.",
      "Komutativita znamená, že korelácia a konvolúcia sú rovnaká operácia."
    ],
    "spravne": [0],
    "vysvetlenie": "Matematicky sú postupnosti v konvolúcii rovnocenné, ale v systémovej interpretácii má h[n] význam impulznej charakteristiky.",
    "slideRef": "CZS_3_03.pdf slides 9, 11",
    "subtema": "CZS 3: Vlastnosti konvolúcie"
  },
  {
    "id": "czs3-014",
    "tema": "CZS 3: Konvolúcia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré vlastnosti konvolúcie sú správne spárované s dôsledkom pri LTI systémoch?",
    "moznosti": [
      "Asociativita → sériovo zapojené LTI systémy možno združiť do jednej impulznej charakteristiky.",
      "Distributivita → paralelné vetvy možno nahradiť súčtom impulzných charakteristík.",
      "Komutativita → poradie kaskádnych LTI systémov neovplyvní výslednú impulznú charakteristiku.",
      "Distributivita → výstup paralelného zapojenia je vždy súčin impulzných charakteristík."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Paralelné zapojenie vedie na h[n] = h1[n] + h2[n], nie na súčin impulzných charakteristík.",
    "slideRef": "CZS_3_03.pdf slides 11, 13, 14",
    "subtema": "CZS 3: Spájanie LTI systémov"
  },
  {
    "id": "czs3-015",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak sú dva LTI systémy s impulznými charakteristikami h1[n] a h2[n] zapojené sériovo, aká je výsledná impulzná charakteristika?",
    "moznosti": [
      "h[n] = h1[n] * h2[n]",
      "h[n] = h1[n] + h2[n]",
      "h[n] = h1[n] · h2[n] vzorka po vzorke",
      "h[n] = h1[n - h2[n]]"
    ],
    "spravne": [0],
    "vysvetlenie": "Kaskáda systémov znamená, že výstup prvého systému prejde druhým, takže impulzné charakteristiky sa konvolvujú.",
    "slideRef": "CZS_3_03.pdf slide 13",
    "subtema": "CZS 3: Spájanie LTI systémov"
  },
  {
    "id": "czs3-016",
    "tema": "CZS 3: Konvolúcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak sú dva LTI systémy s impulznými charakteristikami h1[n] a h2[n] zapojené paralelne a výstupy sa sčítajú, aká je výsledná impulzná charakteristika?",
    "moznosti": [
      "h[n] = h1[n] + h2[n]",
      "h[n] = h1[n] * h2[n]",
      "h[n] = h1[n] - h2[-n]",
      "h[n] = h1[n] · h2[n] vzorka po vzorke"
    ],
    "spravne": [0],
    "vysvetlenie": "V paralelnom zapojení obe vetvy reagujú na rovnaký vstup a ich výstupy sa sčítajú, preto sa sčítajú aj impulzné charakteristiky.",
    "slideRef": "CZS_3_03.pdf slide 14",
    "subtema": "CZS 3: Spájanie LTI systémov"
  },
  {
    "id": "czs3-017",
    "tema": "CZS 3: Špeciálne konvolúcie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo spôsobí konvolúcia x[n] * δ[n - k]?",
    "moznosti": [
      "Posunie signál x[n] o k vzoriek doprava: x[n - k].",
      "Posunie signál x[n] o k vzoriek doľava: x[n + k].",
      "Vynuluje všetky vzorky okrem n = k.",
      "Vytvorí autokoreláciu signálu x[n] s posunom k."
    ],
    "spravne": [0],
    "vysvetlenie": "Impulz pri n = k v konvolúcii funguje ako oneskorenie o k vzoriek. Znamienko posunu je častá pasca.",
    "slideRef": "CZS_3_03.pdf slide 12",
    "subtema": "CZS 3: Špeciálne prípady konvolúcie"
  },
  {
    "id": "czs3-018",
    "tema": "CZS 3: Špeciálne konvolúcie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak y[n] = x[n] * u[n], čo tento systém robí?",
    "moznosti": [
      "Akumuluje súčet aktuálnej a predchádzajúcich vzoriek vstupu.",
      "Derivuje vstup ako rozdiel x[n] - x[n - 1].",
      "Posunie vstup o jednu vzorku doprava bez zmeny tvaru.",
      "Vytvorí trojuholníkový signál bez ohľadu na vstup."
    ],
    "spravne": [0],
    "vysvetlenie": "Konvolúcia s jednotkovým skokom zodpovedá kumulatívnemu súčtu. Pasca je zámena s derivátorom alebo s impulzom.",
    "slideRef": "CZS_3_03.pdf slide 12",
    "subtema": "CZS 3: Špeciálne prípady konvolúcie"
  },
  {
    "id": "czs3-019",
    "tema": "CZS 3: Špeciálne konvolúcie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak sa konvolvujú dva jednotkové skoky u[n] * u[n], aký typ priebehu vznikne?",
    "moznosti": [
      "Rampový signál.",
      "Jednotkový impulz.",
      "Znovu jednotkový skok s rovnakou amplitúdou.",
      "Konečný obdĺžnikový signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Sčítanie jednotiek cez rastúci počet prekrytí vytvorí rampový priebeh.",
    "slideRef": "CZS_3_03.pdf slide 12",
    "subtema": "CZS 3: Špeciálne prípady konvolúcie"
  },
  {
    "id": "czs3-020",
    "tema": "CZS 3: Špeciálne konvolúcie",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Prečo konvolúcia obdĺžnikového signálu so sebou typicky vytvorí trojuholníkový priebeh?",
    "moznosti": [
      "Počet prekrytých nenulových vzoriek najprv rastie a potom klesá.",
      "Pretože každý obdĺžnikový signál je periodický s periódou 3.",
      "Pretože konvolúcia vždy zmení konečný signál na harmonický.",
      "Pretože sa pri konvolúcii sčíta iba prvá a posledná vzorka."
    ],
    "spravne": [0],
    "vysvetlenie": "Tvar výsledku určuje veľkosť prekrytia dvoch konečných blokov pri posúvaní.",
    "slideRef": "CZS_3_03.pdf slide 12",
    "subtema": "CZS 3: Špeciálne prípady konvolúcie"
  },
  {
    "id": "czs3-021",
    "tema": "CZS 3: Periodické signály",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Ak je vstup periodický, konvolúcia s konečnou h[n] dá vždy konečný neperiodický výstup s dĺžkou M + N - 1.“",
    "moznosti": [
      "Pri periodickom vstupe sa po zohľadnení periód výsledok periodizuje s rovnakou periódou.",
      "Tvrdenie je správne, lineárna konvolúcia vždy končí po M + N - 1 vzorkách.",
      "Chyba je iba v tom, že dĺžka má byť M · N.",
      "Periodický vstup sa pred konvolúciou musí vždy nahradiť autokoreláciou."
    ],
    "spravne": [0],
    "vysvetlenie": "M + N - 1 platí pre jednu konečnú lineárnu konvolúciu. Pri periodickom signáli sa príspevky periód skladajú do periodického výsledku.",
    "slideRef": "CZS_3_03.pdf slide 10",
    "subtema": "CZS 3: Periodické signály a konvolúcia"
  },
  {
    "id": "czs3-022",
    "tema": "CZS 3: Periodické signály",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak periodický vstup x[n] s periódou T prechádza LTI systémom, čo možno očakávať o výstupe po ustálení podľa prezentácie?",
    "moznosti": [
      "Výstup bude periodický s rovnakou periódou T.",
      "Výstup bude mať vždy periódu danú dĺžkou impulznej charakteristiky.",
      "Výstup bude neperiodický, ak h[n] nie je jednotkový impulz.",
      "Výstup bude mať periódu T + dĺžka h[n] - 1."
    ],
    "spravne": [0],
    "vysvetlenie": "LTI systém zachová periodicitu vstupu; mení tvar vzoriek v perióde, nie základnú periódu.",
    "slideRef": "CZS_3_03.pdf slide 10",
    "subtema": "CZS 3: Periodické signály a konvolúcia"
  },
  {
    "id": "czs3-023",
    "tema": "CZS 3: Kauzalita LTI",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Aká je nutná a postačujúca podmienka kauzality LTI systému z pohľadu impulznej charakteristiky?",
    "moznosti": [
      "h[n] = 0 pre všetky n < 0.",
      "h[n] = 0 pre všetky n > 0.",
      "h[n] musí mať konečný počet nenulových vzoriek.",
      "Σ |h[n]| musí byť konečné."
    ],
    "spravne": [0],
    "vysvetlenie": "Nenulové hodnoty h[n] pre záporné indexy by pri konvolúcii vyžadovali budúce vzorky vstupu vzhľadom na aktuálny čas.",
    "slideRef": "CZS_3_03.pdf slides 15, 17",
    "subtema": "CZS 3: Kauzalita LTI systémov"
  },
  {
    "id": "czs3-024",
    "tema": "CZS 3: Kauzalita LTI",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré impulzné charakteristiky patria kauzálnym LTI systémom?",
    "moznosti": [
      "h[n] = δ[n] - 0,5δ[n - 2]",
      "h[n] = u[n]",
      "h[n] = δ[n + 1] + δ[n]",
      "h[n] = 0,2δ[n - 1] + 0,7δ[n - 3]"
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Kauzálne sú tie, ktoré nemajú nenulové vzorky pre n < 0. Člen δ[n + 1] je nenulový pri n = -1, preto je nekauzálny.",
    "slideRef": "CZS_3_03.pdf slides 15, 17",
    "subtema": "CZS 3: Kauzalita LTI systémov"
  },
  {
    "id": "czs3-025",
    "tema": "CZS 3: Kauzalita LTI",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „FIR systém je automaticky kauzálny, lebo jeho impulzná charakteristika je konečná.“",
    "moznosti": [
      "FIR môže byť nekauzálny, ak má nenulové hodnoty h[n] pre záporné indexy.",
      "Tvrdenie je správne, konečná dĺžka impulznej charakteristiky vždy stačí na kauzalitu.",
      "FIR je kauzálny iba vtedy, keď je jeho impulzná charakteristika symetrická okolo n = 0.",
      "FIR nemôže byť kauzálny, lebo nemá spätnú väzbu."
    ],
    "spravne": [0],
    "vysvetlenie": "Kauzalita rieši polohu nenulových vzoriek v čase, nie iba ich počet.",
    "slideRef": "CZS_3_03.pdf slides 15, 23, 25",
    "subtema": "CZS 3: Kauzalita LTI systémov"
  },
  {
    "id": "czs3-026",
    "tema": "CZS 3: Stabilita LTI",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Aká je podmienka BIBO stability LTI systému vyjadrená cez impulznú charakteristiku?",
    "moznosti": [
      "Σ_n |h[n]| < ∞",
      "Σ_n h[n] = 0",
      "h[n] = 0 pre n < 0",
      "h[n] musí byť symetrická"
    ],
    "spravne": [0],
    "vysvetlenie": "Pre stabilitu nestačí obyčajný súčet h[n], lebo kladné a záporné hodnoty sa môžu rušiť. Treba absolútnu sumovateľnosť.",
    "slideRef": "CZS_3_03.pdf slide 18",
    "subtema": "CZS 3: Stabilita LTI systémov"
  },
  {
    "id": "czs3-027",
    "tema": "CZS 3: Stabilita LTI",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Ak je súčet Σ h[n] konečný alebo nulový, LTI systém je určite stabilný.“",
    "moznosti": [
      "Stabilita vyžaduje konečnosť Σ |h[n]|, nie iba podmienené rušenie kladných a záporných členov.",
      "Tvrdenie je správne, znamienka impulznej charakteristiky nemajú pri stabilite význam.",
      "Stačí overiť kauzalitu h[n] = 0 pre n < 0, potom je systém automaticky stabilný.",
      "Stačí, aby h[n] nebola periodická; absolútna suma sa už nerieši."
    ],
    "spravne": [0],
    "vysvetlenie": "BIBO stabilita musí obmedziť najhorší prípad vstupu, preto sa používa suma absolútnych hodnôt.",
    "slideRef": "CZS_3_03.pdf slide 18",
    "subtema": "CZS 3: Stabilita LTI systémov"
  },
  {
    "id": "czs3-028",
    "tema": "CZS 3: Stabilita LTI",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Pre h[n] = a^n u[n], kedy je LTI systém BIBO stabilný?",
    "moznosti": [
      "|a| < 1",
      "a ≤ 1 vrátane a = 1",
      "a > 0 bez ohľadu na veľkosť",
      "|a| ≥ 1, lebo nekonečná impulzná odozva je potom tlmená"
    ],
    "spravne": [0],
    "vysvetlenie": "Absolútna suma geometrickej rady konverguje práve pre |a| < 1. Pri a = 1 ide o nekonečný súčet jednotiek.",
    "slideRef": "CZS_3_03.pdf slides 19, 20",
    "subtema": "CZS 3: Stabilita LTI systémov"
  },
  {
    "id": "czs3-029",
    "tema": "CZS 3: Stabilita LTI",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Je systém s h[n] = (-0,8)^n u[n] stabilný?",
    "moznosti": [
      "Áno, lebo Σ |(-0,8)^n| = Σ 0,8^n konverguje.",
      "Nie, lebo h[n] strieda znamienko a preto absolútna suma diverguje.",
      "Áno, ale iba preto, že obyčajný súčet h[n] je nulový.",
      "Nie, lebo každá nekonečná impulzná charakteristika je nestabilná."
    ],
    "spravne": [0],
    "vysvetlenie": "Striedanie znamienka samo nevadí. Rozhoduje absolútna hodnota základu, ktorá je 0,8 < 1.",
    "slideRef": "CZS_3_03.pdf slides 18, 20",
    "subtema": "CZS 3: Stabilita LTI systémov"
  },
  {
    "id": "czs3-030",
    "tema": "CZS 3: Stabilita LTI",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia o kauzalite a stabilite LTI systémov sú správne?",
    "moznosti": [
      "Kauzalita a stabilita sú nezávislé vlastnosti; jedna automaticky nezaručuje druhú.",
      "h[n] = u[n] je kauzálna impulzná charakteristika, ale nie je absolútne sumovateľná.",
      "Každý FIR systém je stabilný, ak má konečný počet konečných koeficientov.",
      "Každý IIR systém je nestabilný, lebo má nekonečnú impulznú charakteristiku."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "IIR môže byť stabilný, ak je jeho impulzná odozva absolútne sumovateľná, napríklad a^n u[n] pre |a| < 1.",
    "slideRef": "CZS_3_03.pdf slides 18, 20, 23, 26",
    "subtema": "CZS 3: Kauzalita a stabilita"
  },
  {
    "id": "czs3-031",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo presne znamená FIR systém?",
    "moznosti": [
      "Diskrétny systém s konečnou impulznou charakteristikou.",
      "Diskrétny systém bez oneskorení v realizácii.",
      "Diskrétny systém s konečnou dĺžkou vstupného signálu.",
      "Systém, ktorého prenosová funkcia musí obsahovať póly mimo počiatku."
    ],
    "spravne": [0],
    "vysvetlenie": "FIR znamená Finite Impulse Response. Konečný vstup ešte neurobí zo systému FIR; rozhoduje impulzná odozva.",
    "slideRef": "CZS_3_03.pdf slide 23",
    "subtema": "CZS 3: FIR systémy"
  },
  {
    "id": "czs3-032",
    "tema": "CZS 3: FIR",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré vlastnosti FIR systémov podľa prezentácie platia?",
    "moznosti": [
      "Majú konečný počet prvkov impulznej charakteristiky.",
      "Sú vždy stabilné, ak koeficienty sú konečné.",
      "Pri symetrickej alebo antisymetrickej impulznej charakteristike môžu mať lineárnu fázovú charakteristiku.",
      "Vždy vyžadujú spätnú väzbu, preto majú malú pamäť a nekonečnú impulznú odozvu."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Štvrtá možnosť opisuje skôr IIR vlastnosti so spätnou väzbou, nie FIR.",
    "slideRef": "CZS_3_03.pdf slide 23",
    "subtema": "CZS 3: FIR systémy"
  },
  {
    "id": "czs3-033",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktorá diferenčná rovnica je FIR systém?",
    "moznosti": [
      "y[n] = 0,25x[n] + 0,25x[n - 1] + 0,25x[n - 2] + 0,25x[n - 3]",
      "y[n] = 0,9y[n - 1] + x[n]",
      "y[n] = y[n - 1] - 0,5y[n - 2] + x[n]",
      "y[n] = x[n] + 0,3y[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "FIR rovnica obsahuje len konečný počet aktuálnych a oneskorených vstupov, nie oneskorené výstupy.",
    "slideRef": "CZS_3_03.pdf slides 21, 29, 30",
    "subtema": "CZS 3: FIR systémy"
  },
  {
    "id": "czs3-034",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak FIR filter má N koeficientov b0 až bN-1, aký je jeho rád podľa prezentácie?",
    "moznosti": [
      "N - 1",
      "N",
      "2N - 1",
      "Počet nenulových vzoriek vstupu mínus jedna"
    ],
    "spravne": [0],
    "vysvetlenie": "Rád FIR filtra je najväčšie oneskorenie, teda pri N koeficientoch ide o N - 1.",
    "slideRef": "CZS_3_03.pdf slide 21",
    "subtema": "CZS 3: FIR systémy"
  },
  {
    "id": "czs3-035",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Aká impulzná charakteristika zodpovedá čistému zosilňovaču y[n] = kx[n]?",
    "moznosti": [
      "h[n] = kδ[n]",
      "h[n] = δ[n - k]",
      "h[n] = k u[n]",
      "h[n] = δ[n] + kδ[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Zosilňovač mení iba amplitúdu bez oneskorenia, preto je impulzná odozva vážený impulz v nule.",
    "slideRef": "CZS_3_03.pdf slide 24",
    "subtema": "CZS 3: FIR príklady"
  },
  {
    "id": "czs3-036",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Aká impulzná charakteristika zodpovedá oneskoreniu y[n] = x[n - k]?",
    "moznosti": [
      "h[n] = δ[n - k]",
      "h[n] = δ[n + k]",
      "h[n] = kδ[n]",
      "h[n] = u[n - k]"
    ],
    "spravne": [0],
    "vysvetlenie": "Konvolúcia s δ[n - k] oneskorí signál o k vzoriek. Znamienko v impulze je rozhodujúce.",
    "slideRef": "CZS_3_03.pdf slide 24",
    "subtema": "CZS 3: FIR príklady"
  },
  {
    "id": "czs3-037",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Aká impulzná charakteristika zodpovedá derivátoru y[n] = x[n] - x[n - 1]?",
    "moznosti": [
      "h[n] = δ[n] - δ[n - 1]",
      "h[n] = δ[n] + δ[n - 1]",
      "h[n] = δ[n - 1] - δ[n]",
      "h[n] = u[n] - u[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Derivátor je rozdiel aktuálnej a predchádzajúcej vzorky. Posledná možnosť je síce rovná δ[n], ale nie derivátoru.",
    "slideRef": "CZS_3_03.pdf slide 24",
    "subtema": "CZS 3: FIR príklady"
  },
  {
    "id": "czs3-038",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Nekauzálny priemerovací FIR filter 3. rádu je nepoužiteľný, lebo nie je stabilný.“",
    "moznosti": [
      "Nekauzalita neznamená nestabilitu; FIR s konečnou impulznou odozvou je stabilný, ale vyžaduje budúce vzorky alebo posun realizácie.",
      "Tvrdenie je správne, každý nekauzálny FIR je nestabilný.",
      "Chyba je iba v tom, že priemerovací filter nikdy nemôže byť FIR.",
      "Nekauzálny filter sa stane stabilným až po pridaní spätnej väzby."
    ],
    "spravne": [0],
    "vysvetlenie": "Pre offline spracovanie môže byť nekauzálny filter použiteľný. Stabilitu určuje absolútna sumovateľnosť h[n], nie kauzalita.",
    "slideRef": "CZS_3_03.pdf slide 25",
    "subtema": "CZS 3: FIR príklady"
  },
  {
    "id": "czs3-039",
    "tema": "CZS 3: FIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Aký je hlavný rozdiel medzi nekauzálnym a kauzálnym 3-bodovým priemerovacím filtrom v príklade z prezentácie?",
    "moznosti": [
      "Majú podobné váhy, ale kauzálna verzia je časovo posunutá, teda má fázové oneskorenie.",
      "Nekauzálna verzia je IIR, kauzálna verzia je FIR.",
      "Kauzálna verzia musí mať nekonečnú impulznú odozvu.",
      "Nekauzálna verzia je nestabilná, kauzálna stabilná."
    ],
    "spravne": [0],
    "vysvetlenie": "Kauzalita sa dosiahne posunom použitej vzorkovej trojice do minulosti, čo pridá oneskorenie.",
    "slideRef": "CZS_3_03.pdf slide 25",
    "subtema": "CZS 3: FIR príklady"
  },
  {
    "id": "czs3-040",
    "tema": "CZS 3: IIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo presne znamená IIR systém?",
    "moznosti": [
      "Diskrétny systém s nekonečnou impulznou charakteristikou.",
      "Systém s konečnou impulznou charakteristikou, ale nekonečným vstupom.",
      "Systém, ktorý musí byť vždy časovo premenný.",
      "Systém, ktorý nemôže mať prenosovú funkciu."
    ],
    "spravne": [0],
    "vysvetlenie": "IIR znamená Infinite Impulse Response. Typicky vzniká vďaka spätnej väzbe/rekurzii.",
    "slideRef": "CZS_3_03.pdf slide 26",
    "subtema": "CZS 3: IIR systémy"
  },
  {
    "id": "czs3-041",
    "tema": "CZS 3: IIR",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia o IIR systémoch podľa prezentácie platia?",
    "moznosti": [
      "Môžu mať nekonečný počet prvkov impulznej charakteristiky.",
      "Ich stabilita je problematická a treba ju overovať.",
      "Často potrebujú menej pamäte na koeficienty diferenčnej rovnice než dlhý FIR filter.",
      "Vždy majú lineárnu fázovú charakteristiku v celom rozsahu."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Pre IIR je typická nelineárna fázová charakteristika v celom rozsahu; lineárna fáza je skôr výhoda symetrických FIR filtrov.",
    "slideRef": "CZS_3_03.pdf slide 26",
    "subtema": "CZS 3: IIR systémy"
  },
  {
    "id": "czs3-042",
    "tema": "CZS 3: IIR",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktorá rovnica je typický IIR systém?",
    "moznosti": [
      "y[n] = 0,8y[n - 1] + 5x[n]",
      "y[n] = 0,25x[n] + 0,25x[n - 1] + 0,25x[n - 2] + 0,25x[n - 3]",
      "y[n] = x[n] - x[n - 1]",
      "y[n] = 3x[n - 2]"
    ],
    "spravne": [0],
    "vysvetlenie": "Prítomnosť minulého výstupu y[n - 1] znamená spätnú väzbu a potenciálne nekonečnú impulznú odozvu.",
    "slideRef": "CZS_3_03.pdf slides 27, 28",
    "subtema": "CZS 3: IIR systémy"
  },
  {
    "id": "czs3-043",
    "tema": "CZS 3: IIR",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Pre systém y[n] = 0,8y[n - 1] + 5x[n] s nulovou počiatočnou podmienkou a vstupom δ[n], aké sú prvé tri vzorky h[0], h[1], h[2]?",
    "moznosti": [
      "5; 4; 3,2",
      "0; 5; 4",
      "5; 0,8; 0,64",
      "0,8; 5; 4"
    ],
    "spravne": [0],
    "vysvetlenie": "h[0] = 5, h[1] = 0,8·5 = 4, h[2] = 0,8·4 = 3,2.",
    "slideRef": "CZS_3_03.pdf slide 28",
    "subtema": "CZS 3: IIR príklady"
  },
  {
    "id": "czs3-044",
    "tema": "CZS 3: IIR",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Pre y[n] = 0,9y[n - 1] + x[n] s nulovou počiatočnou podmienkou a vstupom δ[n], aký tvar má impulzná charakteristika?",
    "moznosti": [
      "h[n] = 0,9^n u[n]",
      "h[n] = 0,9δ[n] + δ[n - 1]",
      "h[n] = 0,9^n bez obmedzenia pre záporné n",
      "h[n] = δ[n] - 0,9δ[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Rekurzia opakovane násobí predchádzajúci výstup koeficientom 0,9 a začína impulzom v n = 0.",
    "slideRef": "CZS_3_03.pdf slides 32, 34",
    "subtema": "CZS 3: IIR príklady"
  },
  {
    "id": "czs3-045",
    "tema": "CZS 3: FIR/IIR",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Ak rovnica obsahuje x[n - 3], systém musí byť IIR, lebo používa starú vzorku.“",
    "moznosti": [
      "Staré vstupné vzorky ešte neznamenajú IIR; IIR naznačujú hlavne minulé výstupy alebo nekonečná impulzná odozva.",
      "Tvrdenie je správne, každé oneskorenie je spätná väzba.",
      "Systém s x[n - 3] je vždy nekauzálny.",
      "Ak je oneskorenie väčšie než 1, impulzná odozva je automaticky nekonečná."
    ],
    "spravne": [0],
    "vysvetlenie": "FIR filtre bežne používajú viac oneskorených vstupných vzoriek. Rozhoduje, či impulzná odozva skončí.",
    "slideRef": "CZS_3_03.pdf slides 21, 29, 30",
    "subtema": "CZS 3: Rozlíšenie FIR/IIR"
  },
  {
    "id": "czs3-046",
    "tema": "CZS 3: FIR/IIR",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré systémy sú FIR?",
    "moznosti": [
      "y[n] = x[n] - x[n - 1]",
      "y[n] = 0,25x[n] + 0,25x[n - 1] + 0,25x[n - 2] + 0,25x[n - 3]",
      "y[n] = 0,9y[n - 1] + x[n]",
      "y[n] = 2x[n - 5]"
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "FIR systémy obsahujú konečný počet vstupných členov. Rovnicia s y[n - 1] je rekurzívna a typicky IIR.",
    "slideRef": "CZS_3_03.pdf slides 24, 29, 30, 32",
    "subtema": "CZS 3: Rozlíšenie FIR/IIR"
  },
  {
    "id": "czs3-047",
    "tema": "CZS 3: FIR/IIR",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré systémy sú IIR alebo sa tak správajú pri impulznom vstupe?",
    "moznosti": [
      "y[n] = 0,8y[n - 1] + 5x[n]",
      "y[n] = y[n - 1] - 0,4y[n - 2] + x[n]",
      "y[n] = x[n] + x[n - 1] + x[n - 2]",
      "y[n] = -0,5y[n - 1] + 0,2x[n - 1]"
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Všetky správne možnosti obsahujú spätnú väzbu cez minulé výstupy. Tretia je konečná suma vstupov, teda FIR.",
    "slideRef": "CZS_3_03.pdf slides 26, 27, 28",
    "subtema": "CZS 3: Rozlíšenie FIR/IIR"
  },
  {
    "id": "czs3-048",
    "tema": "CZS 3: Prenosová funkcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ako sa v Z-oblasti typicky prejaví FIR systém?",
    "moznosti": [
      "Prenosová funkcia má iba čitateľ s konečným počtom členov z^-k.",
      "Prenosová funkcia musí mať menovateľ s pólmi mimo počiatku.",
      "Prenosová funkcia neexistuje, lebo FIR nemá spätnú väzbu.",
      "Prenosová funkcia má vždy nekonečný počet pólov."
    ],
    "spravne": [0],
    "vysvetlenie": "FIR filter je konečný polynóm v z^-1. IIR má racionálny tvar s menovateľom zodpovedajúcim spätnej väzbe.",
    "slideRef": "CZS_3_03.pdf slides 21, 22",
    "subtema": "CZS 3: Z-popis FIR/IIR"
  },
  {
    "id": "czs3-049",
    "tema": "CZS 3: Prenosová funkcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ako sa v Z-oblasti typicky prejaví IIR systém so spätnou väzbou?",
    "moznosti": [
      "Prenosová funkcia má čitateľ aj menovateľ; póly súvisia s rekurzívnou časťou.",
      "Prenosová funkcia má vždy iba čitateľ, rovnako ako FIR.",
      "Prenosová funkcia sa nedá zapísať, ak má impulzná odozva nekonečne veľa vzoriek.",
      "Menovateľ prenosovej funkcie opisuje iba oneskorené vstupné vzorky."
    ],
    "spravne": [0],
    "vysvetlenie": "Rekurzívne členy vedú na menovateľ prenosovej funkcie a tým na póly systému.",
    "slideRef": "CZS_3_03.pdf slide 27",
    "subtema": "CZS 3: Z-popis FIR/IIR"
  },
  {
    "id": "czs3-050",
    "tema": "CZS 3: Prenosová funkcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Prečo tvrdenie „IIR filter má menšiu pamäť než FIR filter“ treba chápať opatrne?",
    "moznosti": [
      "Myslí sa menší počet uložených koeficientov alebo stavov pri podobnom filtračnom efekte, nie nulová pamäť systému.",
      "Je vždy nepravdivé, pretože IIR má nekonečnú impulznú odozvu a musí ukladať všetky jej vzorky.",
      "Platí iba vtedy, keď je IIR nekauzálny.",
      "Znamená, že IIR systém nesmie obsahovať z^-1."
    ],
    "spravne": [0],
    "vysvetlenie": "IIR nemusí ukladať celú nekonečnú impulznú odozvu; používa rekurziu a stavové premenné.",
    "slideRef": "CZS_3_03.pdf slide 26",
    "subtema": "CZS 3: Z-popis FIR/IIR"
  },
  {
    "id": "czs3-051",
    "tema": "CZS 3: Stavový popis",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Prečo sa pri stavovom popise systému 3. rádu zavedú tri stavové premenné?",
    "moznosti": [
      "Každá stavová premenná reprezentuje jeden pamäťový krok/oneskorenie potrebné pre vnútorný opis.",
      "Pretože systém 3. rádu musí mať práve tri vstupy.",
      "Pretože FIR systém vždy potrebuje toľko stavov, koľko má výstupných vzoriek.",
      "Pretože tretí rád znamená tri rôzne vzorkovacie frekvencie."
    ],
    "spravne": [0],
    "vysvetlenie": "Stavové premenné uchovávajú vnútorný stav systému a umožňujú prepísať vyšší rád do sústavy prvého rádu.",
    "slideRef": "CZS_3_03.pdf slide 35",
    "subtema": "CZS 3: Stavový popis"
  },
  {
    "id": "czs3-052",
    "tema": "CZS 3: Stavový popis",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia o stavovom popise diskrétneho LTI systému sú správne?",
    "moznosti": [
      "Stavový popis používa vnútorné premenné, ktoré sa aktualizujú v čase.",
      "Maticový tvar vie oddeliť stavovú rovnicu a výstupnú rovnicu.",
      "Stavový popis je použiteľný iba pre statické systémy bez pamäti.",
      "Počet stavových premenných súvisí s rádom realizácie systému."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Stavový popis je práve nástroj pre systémy s pamäťou. Statický systém by vnútorný stav nepotreboval.",
    "slideRef": "CZS_3_03.pdf slides 35, 38, 39",
    "subtema": "CZS 3: Stavový popis"
  },
  {
    "id": "czs3-053",
    "tema": "CZS 3: Stavový popis",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktorý všeobecný tvar najlepšie vystihuje diskrétny stavový popis?",
    "moznosti": [
      "v[n + 1] = A v[n] + B x[n], y[n] = C v[n] + D x[n]",
      "v[n] = A x[n + 1], y[n] = B / x[n]",
      "y[n] = x[n] * h[n] bez akejkoľvek vnútornej premennej",
      "A[n] = v[n] + x[n], pričom výstup y[n] sa v stavovom popise nepíše"
    ],
    "spravne": [0],
    "vysvetlenie": "Stavový popis má rovnicu aktualizácie stavu a rovnicu výstupu. Matice A, B, C, D určujú väzby.",
    "slideRef": "CZS_3_03.pdf slides 38, 39",
    "subtema": "CZS 3: Stavový popis"
  },
  {
    "id": "czs3-054",
    "tema": "CZS 3: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré kombinácie vlastností sú možné?",
    "moznosti": [
      "FIR systém môže byť nekauzálny, ale stále stabilný.",
      "IIR systém môže byť kauzálny a stabilný.",
      "LTI systém môže byť popísaný konvolúciou s impulznou charakteristikou.",
      "Nelineárny systém je LTI, ak má konečnú impulznú odozvu."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "LTI znamená lineárny a časovo invariantný. Nelineárny systém preto nemôže byť LTI bez ohľadu na tvar nejakej odozvy.",
    "slideRef": "CZS_3_03.pdf",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs3-055",
    "tema": "CZS 3: Súhrn",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Systém má h[n] = δ[n + 1] + 0,5δ[n] + δ[n - 1]. Ktoré tvrdenie je najpresnejšie?",
    "moznosti": [
      "Je FIR a stabilný, ale nie je kauzálny.",
      "Je FIR, kauzálny a stabilný.",
      "Je IIR, stabilný, ale nie kauzálny.",
      "Je FIR, ale nestabilný, pretože má záporný index."
    ],
    "spravne": [0],
    "vysvetlenie": "Má konečný počet vzoriek, teda FIR a stabilný. Člen δ[n + 1] je nenulový pri n = -1, preto systém nie je kauzálny.",
    "slideRef": "CZS_3_03.pdf slides 15, 17, 23",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs3-056",
    "tema": "CZS 3: Súhrn",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Systém má h[n] = 1,1^n u[n]. Ktoré tvrdenie je najpresnejšie?",
    "moznosti": [
      "Je kauzálny IIR, ale nie je BIBO stabilný.",
      "Je kauzálny FIR a stabilný.",
      "Je nekauzálny IIR, ale stabilný, lebo 1,1^n je kladné.",
      "Je stabilný, lebo h[n] je definovaná len pre n ≥ 0."
    ],
    "spravne": [0],
    "vysvetlenie": "u[n] zabezpečí kauzalitu, ale geometrická rada s |1,1| > 1 nie je absolútne sumovateľná.",
    "slideRef": "CZS_3_03.pdf slides 18, 20, 26",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs3-057",
    "tema": "CZS 3: Súhrn",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenie najlepšie odlíši konvolúciu od korelácie v ručnom výpočte?",
    "moznosti": [
      "Pri konvolúcii sa jedna postupnosť otočí a posúva; korelácia meria podobnosť bez tej istej systémovej interpretácie h[n] ako impulznej odozvy.",
      "Pri konvolúcii sa nikdy nerobí otočenie, pri korelácii áno.",
      "Konvolúcia aj korelácia sú rovnaké, rozdiel je iba v názve parametra m.",
      "Konvolúcia sa používa iba pre náhodné signály, korelácia iba pre LTI systémy."
    ],
    "spravne": [0],
    "vysvetlenie": "Obe operácie sú príbuzné, ale pri LTI systéme má konvolúcia presný význam vstup * impulzná charakteristika.",
    "slideRef": "CZS_3_03.pdf slides 4, 5",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs3-058",
    "tema": "CZS 3: Súhrn",
    "typ": "jedna",
    "format": "vypocet",
    "uroven": "tazka",
    "otazka": "Sú kaskádne zapojené dva FIR filtre s dĺžkami impulzných charakteristík 4 a 5. Aká je dĺžka výslednej impulznej charakteristiky?",
    "moznosti": [
      "8",
      "9",
      "20",
      "5"
    ],
    "spravne": [0],
    "vysvetlenie": "Kaskáda znamená konvolúciu impulzných charakteristík. Dĺžka je 4 + 5 - 1 = 8.",
    "slideRef": "CZS_3_03.pdf slides 8, 13",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs3-059",
    "tema": "CZS 3: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré výroky by si odmietol ako nepresné?",
    "moznosti": [
      "Každý stabilný LTI systém musí byť FIR.",
      "Každý kauzálny LTI systém musí byť stabilný.",
      "Každý FIR systém s konečnými koeficientmi je stabilný.",
      "Každý IIR systém musí byť nelineárny."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Stabilný systém môže byť IIR, kauzalita nezaručuje stabilitu a IIR môže byť lineárny. Tretie tvrdenie je správne.",
    "slideRef": "CZS_3_03.pdf slides 18, 23, 26",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs3-060",
    "tema": "CZS 3: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia sú správne pre komplexné pochopenie LTI systémov?",
    "moznosti": [
      "Konvolúcia vyjadruje výstup LTI systému z vstupu a impulznej charakteristiky.",
      "Kauzalita LTI systému sa dá určiť z toho, či h[n] má nenulové hodnoty pre n < 0.",
      "BIBO stabilita LTI systému sa dá určiť z absolútnej sumovateľnosti h[n].",
      "FIR/IIR rozlíšenie závisí od dĺžky vstupného signálu, nie od impulznej charakteristiky."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "FIR/IIR rozlišuje impulzná odozva systému. Vstup môže byť konečný alebo nekonečný nezávisle od typu systému.",
    "slideRef": "CZS_3_03.pdf",
    "subtema": "CZS 3: Integrované pasce"
  },
  {
    "id": "czs4-001",
    "tema": "CZS 4: Z-transformácia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia správne vystihujú obojstrannú Z-transformáciu X(z) = suma x[n] z^-n?",
    "moznosti": [
      "Hodnota X(z) závisí nielen od postupnosti x[n], ale aj od komplexnej premennej z.",
      "Samotný algebraický výraz X(z) vždy jednoznačne určuje pôvodnú postupnosť bez potreby ROC.",
      "ROC je množina hodnôt z, pre ktoré nekonečná suma konverguje.",
      "Pri racionálnom X(z) sú póly kandidátmi na hranice ROC, ale nikdy neležia v ROC."
    ],
    "spravne": [0, 2, 3],
    "vysvetlenie": "Pasca je druhá možnosť: rovnaký algebraický výraz môže patriť pravostrannej, ľavostrannej alebo obojstrannej postupnosti. Bez ROC sa pri Z-transformácii stráca informácia o čase.",
    "slideRef": "CZS_4_03.pdf slides 2, 3",
    "subtema": "CZS 4: Definícia a ROC"
  },
  {
    "id": "czs4-002",
    "tema": "CZS 4: Z-transformácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre postupnosť x[n] = a^n u[n] platí X(z) = 1 / (1 - a z^-1). Ktorá ROC k nej patrí?",
    "moznosti": [
      "|z| > |a|",
      "|z| < |a|",
      "0 < |z| < |a|",
      "celá z-rovina vrátane pólu z = a"
    ],
    "spravne": [0],
    "vysvetlenie": "Pravostranná exponenciála konverguje mimo pólu. Možnosť |z| < |a| je veľmi realistická pasca, lebo patrí k ľavostrannej postupnosti s rovnakým algebraickým výrazom.",
    "slideRef": "CZS_4_03.pdf slides 4, 5",
    "subtema": "CZS 4: Základné dvojice"
  },
  {
    "id": "czs4-003",
    "tema": "CZS 4: Z-transformácia",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Ak X(z) = 1 / (1 - a z^-1), potom pôvodný signál musí byť a^n u[n].“",
    "moznosti": [
      "Chýba ROC; rovnaký výraz môže patriť aj ľavostrannému signálu -a^n u[-n-1].",
      "Chýba iba hodnota X(0); ROC pri inverznej Z-transformácii nie je potrebná.",
      "Chyba je v znamienku exponentu, správne má byť z^n.",
      "Tvrdenie je správne pre každý racionálny X(z)."
    ],
    "spravne": [0],
    "vysvetlenie": "Algebraický tvar a ROC tvoria dvojicu. Ak zameníš ROC, zmeníš časovú podporu signálu, hoci vzorec vyzerá rovnako.",
    "slideRef": "CZS_4_03.pdf slides 4, 6",
    "subtema": "CZS 4: ROC ako súčasť transformácie"
  },
  {
    "id": "czs4-004",
    "tema": "CZS 4: ROC",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre racionálnu Z-transformáciu s pólmi v z = 0.5 a z = 2 môžu byť ktoré ROC teoreticky možné?",
    "moznosti": [
      "|z| > 2",
      "0.5 < |z| < 2",
      "|z| < 0.5",
      "|z| = 2"
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "ROC nemôže obsahovať pól, preto nie je kružnica |z| = 2 platná ROC. Ostatné tri oblasti zodpovedajú pravostrannej, obojstrannej alebo ľavostrannej postupnosti.",
    "slideRef": "CZS_4_03.pdf slides 6, 7",
    "subtema": "CZS 4: ROC a póly"
  },
  {
    "id": "czs4-005",
    "tema": "CZS 4: ROC",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak je racionálny signál pravostranný a jeho najvzdialenejší pól má modul 3, aká je ROC?",
    "moznosti": [
      "|z| > 3",
      "|z| < 3",
      "0 < |z| < 3",
      "ROC je vždy jednotková kružnica"
    ],
    "spravne": [0],
    "vysvetlenie": "Pravostranný signál má ROC smerom von od vonkajšieho pólu. Jednotková kružnica je dôležitá pre DTFT a stabilitu, ale neurčuje ROC automaticky.",
    "slideRef": "CZS_4_03.pdf slides 6, 7",
    "subtema": "CZS 4: Pravostranné postupnosti"
  },
  {
    "id": "czs4-006",
    "tema": "CZS 4: ROC",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak je racionálny signál ľavostranný a jeho najbližší pól k začiatku má modul 0.4, aká je ROC?",
    "moznosti": [
      "|z| < 0.4",
      "|z| > 0.4",
      "0.4 < |z| < 1",
      "|z| = 0.4"
    ],
    "spravne": [0],
    "vysvetlenie": "Ľavostranný signál konverguje smerom dovnútra od najvnútornejšieho pólu. Rovnosť |z| = 0.4 je pasca, pretože póly nikdy neležia v ROC.",
    "slideRef": "CZS_4_03.pdf slides 6, 7",
    "subtema": "CZS 4: Ľavostranné postupnosti"
  },
  {
    "id": "czs4-007",
    "tema": "CZS 4: ROC",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo musí platiť pre obojstrannú postupnosť s racionálnou Z-transformáciou?",
    "moznosti": [
      "ROC má tvar medzikružia medzi dvoma pólmi.",
      "ROC môže obsahovať jednotkovú kružnicu, ale nemusí.",
      "ROC je vždy vonkajšok najvzdialenejšieho pólu.",
      "Rovnaký algebraický výraz môže pri inom ROC zodpovedať jednostrannému signálu."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Vonkajšok najvzdialenejšieho pólu je typický pre pravostranný signál. Pri obojstrannom signáli sa ROC nachádza medzi pólmi.",
    "slideRef": "CZS_4_03.pdf slides 6, 7",
    "subtema": "CZS 4: Obojstranné postupnosti"
  },
  {
    "id": "czs4-008",
    "tema": "CZS 4: DTFT a Z-transformácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Kedy možno z X(z) získať DTFT X(e^jω) jednoduchým dosadením z = e^jω?",
    "moznosti": [
      "Keď jednotková kružnica leží v ROC.",
      "Vždy, ak je X(z) racionálna.",
      "Len vtedy, ak všetky póly ležia na jednotkovej kružnici.",
      "Len pri FIR signáloch bez oneskorenia."
    ],
    "spravne": [0],
    "vysvetlenie": "Dosadenie na jednotkovú kružnicu je platné len tam, kde Z-transformácia konverguje. Pól na jednotkovej kružnici je práve problém, nie podmienka.",
    "slideRef": "CZS_4_03.pdf slides 8, 9",
    "subtema": "CZS 4: Vzťah k DTFT"
  },
  {
    "id": "czs4-009",
    "tema": "CZS 4: DTFT a Z-transformácia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré dôsledky platia, ak jednotková kružnica nie je v ROC X(z)?",
    "moznosti": [
      "DTFT v bežnom zmysle nemusí existovať.",
      "Samotný algebraický výraz X(z) môže stále existovať mimo jednotkovej kružnice.",
      "Stačí ignorovať ROC a dosadiť z = e^jω, výsledok bude vždy fyzikálne správny.",
      "Pri stabilnom LTI systéme sa táto situácia nesmie stať pre H(z)."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Tretia možnosť je nebezpečná: formálne dosadenie môže dať výraz, ale ak jednotková kružnica nie je v ROC, nejde o platnú frekvenčnú charakteristiku.",
    "slideRef": "CZS_4_03.pdf slides 8, 9",
    "subtema": "CZS 4: Vzťah k DTFT"
  },
  {
    "id": "czs4-010",
    "tema": "CZS 4: Póly a nuly",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo znamená nula prenosu H(z) v bode z0?",
    "moznosti": [
      "H(z0) = 0, teda daná komplexná zložka je potlačená podľa polohy nuly.",
      "H(z0) ide do nekonečna, pretože nuly sú rovnaké ako póly.",
      "Bod z0 musí patriť mimo ROC.",
      "Nula vždy znamená nestabilitu systému."
    ],
    "spravne": [0],
    "vysvetlenie": "Pól spôsobuje singularitu, nula potlačenie. Pasce miešajú póly, ROC a stabilitu; nula sama o sebe stabilitu neurčuje.",
    "slideRef": "CZS_4_03.pdf slides 10, 11",
    "subtema": "CZS 4: Póly a nuly"
  },
  {
    "id": "czs4-011",
    "tema": "CZS 4: Póly a nuly",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre racionálnu funkciu H(z) = B(z) / A(z) vyber správne tvrdenia.",
    "moznosti": [
      "Korene A(z) sú póly, ak sa nezrušia s rovnakými koreňmi v B(z).",
      "Korene B(z) sú nuly, ak sa nezrušia s rovnakými koreňmi v A(z).",
      "Poloha pólov ovplyvňuje stabilitu a charakter odozvy viac priamo než poloha núl.",
      "ROC môže obsahovať pól, ak je pól zároveň nulou po krátení."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Po krátení sa rušený pól už v minimálnom popise nespráva ako pól. ROC však nikdy neobsahuje skutočné póly výslednej transformácie.",
    "slideRef": "CZS_4_03.pdf slides 10, 11",
    "subtema": "CZS 4: Póly a nuly"
  },
  {
    "id": "czs4-012",
    "tema": "CZS 4: Kauzalita a stabilita",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre racionálny LTI systém s prenosom H(z) platí:",
    "moznosti": [
      "Ak je systém kauzálny, ROC je vonkajšok najvzdialenejšieho pólu.",
      "Ak je systém BIBO stabilný, jednotková kružnica musí byť v ROC.",
      "Ak je systém kauzálny aj stabilný, všetky póly musia ležať vnútri jednotkovej kružnice.",
      "Ak má systém všetky nuly vnútri jednotkovej kružnice, automaticky je stabilný."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Nuly neurčujú BIBO stabilitu. Pri kauzálnom systéme sa stabilita redukuje na polohu pólov vnútri jednotkovej kružnice.",
    "slideRef": "CZS_4_03.pdf slides 12, 13",
    "subtema": "CZS 4: Kauzalita a stabilita"
  },
  {
    "id": "czs4-013",
    "tema": "CZS 4: Kauzalita a stabilita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Systém má póly v 0.7 a 1.2 a je kauzálny. Je stabilný?",
    "moznosti": [
      "Nie, lebo kauzálna ROC je |z| > 1.2 a neobsahuje jednotkovú kružnicu.",
      "Áno, lebo aspoň jeden pól je vnútri jednotkovej kružnice.",
      "Áno, lebo kauzalita sama zaručuje stabilitu.",
      "Nedá sa rozhodnúť, pretože poloha pólov nikdy nesúvisí so stabilitou."
    ],
    "spravne": [0],
    "vysvetlenie": "Pre kauzálny racionálny systém rozhoduje najvzdialenejší pól. Ak je mimo jednotkovej kružnice, jednotková kružnica nie je v ROC.",
    "slideRef": "CZS_4_03.pdf slides 12, 13",
    "subtema": "CZS 4: Kauzalita a stabilita"
  },
  {
    "id": "czs4-014",
    "tema": "CZS 4: Kauzalita a stabilita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Systém má pól v z = 2 a ROC |z| < 2. Čo možno povedať?",
    "moznosti": [
      "Môže byť stabilný, ak ROC obsahuje jednotkovú kružnicu, ale nie je kauzálny.",
      "Musí byť kauzálny, lebo ROC je určená pólom.",
      "Nemôže byť stabilný, lebo pól je mimo jednotkovej kružnice bez ohľadu na ROC.",
      "Je FIR, pretože ROC je ohraničená."
    ],
    "spravne": [0],
    "vysvetlenie": "Pól mimo jednotkovej kružnice nevylučuje stabilitu pri ľavostrannej ROC. Pasca je preniesť kauzálne pravidlo na nekauzálny prípad.",
    "slideRef": "CZS_4_03.pdf slides 12, 13",
    "subtema": "CZS 4: Kauzalita a stabilita"
  },
  {
    "id": "czs4-015",
    "tema": "CZS 4: Vlastnosti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak y[n] = x[n - n0], aký faktor pribudne v Z-oblasti?",
    "moznosti": [
      "Y(z) = z^-n0 X(z)",
      "Y(z) = z^n0 X(z)",
      "Y(z) = X(z - n0)",
      "Y(z) = X(z) - n0"
    ],
    "spravne": [0],
    "vysvetlenie": "Oneskorenie v čase sa prejaví násobením z^-n0. Pasca X(z - n0) zamieňa posun indexu s posunom komplexnej premennej.",
    "slideRef": "CZS_4_03.pdf slides 14, 15",
    "subtema": "CZS 4: Posun v čase"
  },
  {
    "id": "czs4-016",
    "tema": "CZS 4: Vlastnosti",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pri časovom posune v Z-transformácii si treba dať pozor na:",
    "moznosti": [
      "znamienko exponentu pri z^-n0,",
      "možnú zmenu správania ROC pri z = 0 alebo z = ∞,",
      "to, že posun v čase nie je to isté ako derivácia podľa z,",
      "to, že každý posun v čase zmení póly na ich komplexne združené hodnoty."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Posun mení mocninu z, nie komplexné združenie pólov. Pri jednostranných alebo konečných postupnostiach sú práve 0 a ∞ časté okrajové pasce.",
    "slideRef": "CZS_4_03.pdf slides 14, 15",
    "subtema": "CZS 4: Posun v čase"
  },
  {
    "id": "czs4-017",
    "tema": "CZS 4: Vlastnosti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak y[n] = a^n x[n], aký je vzťah medzi Y(z) a X(z)?",
    "moznosti": [
      "Y(z) = X(z / a)",
      "Y(z) = X(a z)",
      "Y(z) = a X(z)",
      "Y(z) = X(z) / a^n"
    ],
    "spravne": [0],
    "vysvetlenie": "Dosadenie X(z/a) dá sumu x[n](z/a)^-n = x[n]a^n z^-n. Pasca X(az) má opačné škálovanie ROC.",
    "slideRef": "CZS_4_03.pdf slides 14, 16",
    "subtema": "CZS 4: Násobenie exponenciálou"
  },
  {
    "id": "czs4-018",
    "tema": "CZS 4: Vlastnosti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak y[n] = n x[n], ktorá vlastnosť Z-transformácie je správna?",
    "moznosti": [
      "Y(z) = -z dX(z)/dz",
      "Y(z) = dX(z)/dz",
      "Y(z) = z X(z)",
      "Y(z) = X(z^-1)"
    ],
    "spravne": [0],
    "vysvetlenie": "Faktor n vznikne derivovaním z^-n: d(z^-n)/dz = -n z^-n-1, preto treba násobiť -z. Znamienko je typická skúšková pasca.",
    "slideRef": "CZS_4_03.pdf slides 14, 16",
    "subtema": "CZS 4: Derivačná vlastnosť"
  },
  {
    "id": "czs4-019",
    "tema": "CZS 4: Vlastnosti",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre konvolúciu y[n] = x[n] * h[n] v Z-oblasti platí:",
    "moznosti": [
      "Y(z) = X(z)H(z).",
      "ROC Y(z) obsahuje aspoň prienik ROC X(z) a ROC H(z), ak nenastane rušenie pólov a núl.",
      "Konvolúcia v čase sa mení na sčítanie Z-transformácií.",
      "Ak sa zruší pól s nulou, výsledná ROC sa môže zmeniť oproti jednoduchému prieniku."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Sčítanie patrí k linearite, nie ku konvolúcii. Jemná pasca je ROC: produkt výrazov nestačí, treba sledovať aj možné rušenie pólov.",
    "slideRef": "CZS_4_03.pdf slides 14, 17",
    "subtema": "CZS 4: Konvolúcia"
  },
  {
    "id": "czs4-020",
    "tema": "CZS 4: Vlastnosti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak y[n] = x[-n], ako sa zmení Z-transformácia?",
    "moznosti": [
      "Y(z) = X(z^-1) a ROC sa invertuje podľa |z|.",
      "Y(z) = -X(z), ROC ostane rovnaká.",
      "Y(z) = X(-z), póly sa iba zrkadlia cez reálnu os.",
      "Y(z) = X(z) vždy, lebo suma ide cez všetky n."
    ],
    "spravne": [0],
    "vysvetlenie": "Obrátenie času nahrádza z za z^-1. Pasca je myslieť si, že obojstranná suma automaticky zruší rozdiel v indexoch.",
    "slideRef": "CZS_4_03.pdf slides 14, 17",
    "subtema": "CZS 4: Obrátenie času"
  },
  {
    "id": "czs4-021",
    "tema": "CZS 4: Inverzná Z-transformácia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré postupy sa používajú pri inverznej Z-transformácii racionálneho X(z)?",
    "moznosti": [
      "Rozklad na parciálne zlomky.",
      "Použitie známych transformačných dvojíc spolu s ROC.",
      "Ignorovanie ROC, ak sa algebraický výraz dá upraviť na jednoduchý tvar.",
      "Rozhodnutie, či jednotlivé členy patria k pravostrannej alebo ľavostrannej postupnosti."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Najväčšia pasca je tretia možnosť. Parciálny zlomok bez ROC dá iba tvar, ale nie časový smer postupnosti.",
    "slideRef": "CZS_4_03.pdf slides 18, 19",
    "subtema": "CZS 4: Inverzná Z-transformácia"
  },
  {
    "id": "czs4-022",
    "tema": "CZS 4: Inverzná Z-transformácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "X(z) = 1 / (1 - 0.5 z^-1), ROC |z| > 0.5. Aký je x[n]?",
    "moznosti": [
      "(0.5)^n u[n]",
      "-(0.5)^n u[-n - 1]",
      "(0.5)^-n u[n]",
      "δ[n] - 0.5δ[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "ROC vonku určuje pravostrannú exponenciálu. Druhá možnosť má rovnaký algebraický výraz, ale opačnú ROC.",
    "slideRef": "CZS_4_03.pdf slides 18, 19",
    "subtema": "CZS 4: Inverzná Z-transformácia"
  },
  {
    "id": "czs4-023",
    "tema": "CZS 4: Inverzná Z-transformácia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "X(z) = 1 / (1 - 0.5 z^-1), ROC |z| < 0.5. Aký je x[n]?",
    "moznosti": [
      "-(0.5)^n u[-n - 1]",
      "(0.5)^n u[n]",
      "(0.5)^n u[-n]",
      "δ[n] + 0.5δ[n - 1]"
    ],
    "spravne": [0],
    "vysvetlenie": "Vnútorná ROC určuje ľavostrannú postupnosť. Znamienko mínus a hranica -n-1 sú časté pasce pri sčítaní geometrického radu.",
    "slideRef": "CZS_4_03.pdf slides 18, 19",
    "subtema": "CZS 4: Inverzná Z-transformácia"
  },
  {
    "id": "czs4-024",
    "tema": "CZS 4: Prenosová funkcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre diferenčnú rovnicu y[n] - 0.8y[n - 1] = x[n] je prenos H(z) pri nulových počiatočných podmienkach:",
    "moznosti": [
      "H(z) = 1 / (1 - 0.8z^-1)",
      "H(z) = 1 - 0.8z^-1",
      "H(z) = 1 / (1 + 0.8z^-1)",
      "H(z) = z / (z - 0.8z^-1)"
    ],
    "spravne": [0],
    "vysvetlenie": "Člen s výstupom ide do menovateľa. Znamienko sa nestráca: y[n] - 0.8y[n-1] dá faktor 1 - 0.8z^-1.",
    "slideRef": "CZS_4_03.pdf slides 20, 21",
    "subtema": "CZS 4: Prenosová funkcia"
  },
  {
    "id": "czs4-025",
    "tema": "CZS 4: Prenosová funkcia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pri prechode z diferenčnej rovnice do H(z) sú správne ktoré kroky?",
    "moznosti": [
      "Oneskorenie y[n-k] sa v Z-oblasti prejaví faktorom z^-k Y(z).",
      "Oneskorenie x[n-k] sa v Z-oblasti prejaví faktorom z^-k X(z).",
      "Koeficienty pri minulých výstupoch sa objavia v menovateli H(z).",
      "Koeficienty pri minulých výstupoch sa vždy objavia v čitateli H(z)."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Výstupné rekurzívne členy tvoria menovateľ. Štvrtá možnosť je realistická chyba pri mechanickom presúvaní členov.",
    "slideRef": "CZS_4_03.pdf slides 20, 21",
    "subtema": "CZS 4: Prenosová funkcia"
  },
  {
    "id": "czs4-026",
    "tema": "CZS 4: FIR/IIR v Z-oblasti",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia správne rozlišujú FIR a IIR cez H(z)?",
    "moznosti": [
      "FIR filter má H(z) ako konečný polynóm v z^-1, ak zanedbáme prípadné póly v nule spôsobené zápisom.",
      "IIR filter má v H(z) netriviálny menovateľ spojený so spätnou väzbou.",
      "Každý FIR filter je nestabilný, ak má nuly mimo jednotkovej kružnice.",
      "IIR môže byť stabilný, ak jeho kauzálne póly ležia vnútri jednotkovej kružnice."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Nuly mimo jednotkovej kružnice neznamenajú nestabilitu. Stabilita kauzálneho IIR sa riadi pólmi, nie nulami.",
    "slideRef": "CZS_4_03.pdf slides 20, 22",
    "subtema": "CZS 4: FIR/IIR v Z-oblasti"
  },
  {
    "id": "czs4-027",
    "tema": "CZS 4: FIR/IIR v Z-oblasti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Filter H(z) = 1 - z^-1 má nulu v z = 1. Čo to znamená pre frekvenciu ω = 0?",
    "moznosti": [
      "Potláča DC zložku, pretože z = e^j0 = 1 leží v nule prenosu.",
      "Zosilňuje DC zložku, pretože nula je na jednotkovej kružnici.",
      "Je nestabilný, pretože nula na jednotkovej kružnici je vždy pól.",
      "Nedá sa povedať nič, lebo nuly nesúvisia s frekvenčnou odozvou."
    ],
    "spravne": [0],
    "vysvetlenie": "Nula na jednotkovej kružnici potláča príslušnú frekvenciu. Pasca je zameniť nulu s pólom alebo stabilitou.",
    "slideRef": "CZS_4_03.pdf slides 10, 22",
    "subtema": "CZS 4: Interpretácia núl"
  },
  {
    "id": "czs4-028",
    "tema": "CZS 4: FIR/IIR v Z-oblasti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Filter H(z) = 1 + z^-1 má nulu v z = -1. Ktorú frekvenciu potláča?",
    "moznosti": [
      "ω = π",
      "ω = 0",
      "ω = π/2",
      "žiadnu, nula mimo jednotkovej kružnice nič neznamená"
    ],
    "spravne": [0],
    "vysvetlenie": "Bod z = -1 zodpovedá e^jπ. Ide o pascu medzi znamienkom koeficientu a tým, či sa potláča DC alebo najvyššia diskrétna frekvencia.",
    "slideRef": "CZS_4_03.pdf slides 10, 22",
    "subtema": "CZS 4: Interpretácia núl"
  },
  {
    "id": "czs4-029",
    "tema": "CZS 4: Stabilita",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré systémy môžu byť BIBO stabilné?",
    "moznosti": [
      "Kauzálny racionálny systém so všetkými pólmi vnútri jednotkovej kružnice.",
      "Nekauzálny systém, ktorého ROC obsahuje jednotkovú kružnicu.",
      "Kauzálny systém s pólom na jednotkovej kružnici.",
      "FIR systém s konečným počtom konečných koeficientov."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Pól na jednotkovej kružnici zabráni tomu, aby jednotková kružnica patrila do ROC. Stabilita nie je totožná s kauzalitou.",
    "slideRef": "CZS_4_03.pdf slides 12, 13, 22",
    "subtema": "CZS 4: Stabilita"
  },
  {
    "id": "czs4-030",
    "tema": "CZS 4: Stabilita",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre kauzálny systém je pól v z = -0.95. Čo je správna interpretácia?",
    "moznosti": [
      "Systém môže byť stabilný, ale odozva bude mať striedavé znamienko a pomalý zánik.",
      "Systém je určite nestabilný, lebo pól je záporný.",
      "Systém je FIR, lebo pól je blízko jednotkovej kružnice.",
      "Záporný pól sa pri stabilite ignoruje, rozhodujú len kladné póly."
    ],
    "spravne": [0],
    "vysvetlenie": "Stabilitu určuje modul pólu, nie znamienko. Záporný pól spôsobuje oscilujúce znamienko v čase.",
    "slideRef": "CZS_4_03.pdf slides 12, 13",
    "subtema": "CZS 4: Stabilita a póly"
  },
  {
    "id": "czs4-031",
    "tema": "CZS 4: Póly a odozva",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Dva kauzálne systémy majú póly 0.2 a 0.95. Ktorý má pomalšie doznievanie impulznej odozvy?",
    "moznosti": [
      "Systém s pólom 0.95, lebo pól je bližšie k jednotkovej kružnici.",
      "Systém s pólom 0.2, lebo menší pól znamená menšie tlmenie.",
      "Oba rovnako, lebo oba póly sú vnútri jednotkovej kružnice.",
      "Nedá sa rozhodnúť, póly neovplyvňujú časovú odozvu."
    ],
    "spravne": [0],
    "vysvetlenie": "Pól bližšie k jednotkovej kružnici znamená pomalší exponenciálny zánik. Stabilita len hovorí, že zánik nastane, nie ako rýchlo.",
    "slideRef": "CZS_4_03.pdf slides 10, 13",
    "subtema": "CZS 4: Póly a odozva"
  },
  {
    "id": "czs4-032",
    "tema": "CZS 4: Póly a odozva",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Komplexne združené póly r e^{±jω0} v kauzálnom systéme spôsobia:",
    "moznosti": [
      "kmitavú zložku s uhlovou frekvenciou približne ω0,",
      "rýchlosť zániku závislú od r,",
      "automatickú nestabilitu bez ohľadu na r,",
      "reálnu impulznú odozvu, ak sú póly aj koeficienty v združených pároch."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Komplexný pól nie je problém sám o sebe. Nestabilita nastane až pri module pólu mimo alebo na jednotkovej kružnici v kauzálnom prípade.",
    "slideRef": "CZS_4_03.pdf slides 10, 13",
    "subtema": "CZS 4: Komplexné póly"
  },
  {
    "id": "czs4-033",
    "tema": "CZS 4: Jednotková kružnica",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Čo sa dá čítať z polohy pólov a núl vzhľadom na jednotkovú kružnicu?",
    "moznosti": [
      "Nuly blízko jednotkovej kružnice potláčajú blízke frekvencie.",
      "Póly blízko jednotkovej kružnice zvýrazňujú blízke frekvencie a predlžujú doznievanie.",
      "Póly na jednotkovej kružnici sú pri stabilnom LTI systéme bezproblémové.",
      "Frekvenčná charakteristika je hodnotenie H(z) na z = e^jω, ak jednotková kružnica patrí do ROC."
    ],
    "spravne": [0, 1, 3],
    "vysvetlenie": "Tretia možnosť je pasca: pól na jednotkovej kružnici vylučuje jednotkovú kružnicu z ROC, a teda problém pre BIBO stabilitu.",
    "slideRef": "CZS_4_03.pdf slides 8, 10, 13",
    "subtema": "CZS 4: Jednotková kružnica"
  },
  {
    "id": "czs4-034",
    "tema": "CZS 4: ROC pasce",
    "typ": "jedna",
    "format": "najdi_chybu",
    "uroven": "tazka",
    "otazka": "Nájdi chybu: „Ak má X(z) pól v 0.8, tak ROC musí byť |z| > 0.8.“",
    "moznosti": [
      "To platí iba pri pravostrannom signáli; pri ľavostrannom môže byť ROC |z| < 0.8.",
      "Pól v 0.8 znamená, že ROC je presne |z| = 0.8.",
      "ROC sa určuje výlučne podľa núl, nie podľa pólov.",
      "Tvrdenie je vždy správne pre každý signál."
    ],
    "spravne": [0],
    "vysvetlenie": "Pól určuje hranicu, ale smer ROC závisí od časovej podpory. Automatické zvolenie vonkajšej ROC je typická kauzálna predpojatosť.",
    "slideRef": "CZS_4_03.pdf slides 6, 7",
    "subtema": "CZS 4: ROC pasce"
  },
  {
    "id": "czs4-035",
    "tema": "CZS 4: ROC pasce",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia o ROC sú správne?",
    "moznosti": [
      "ROC je súvislá oblasť v z-rovine pre racionálne transformácie.",
      "ROC neobsahuje póly.",
      "ROC pravostranného signálu sa rozprestiera smerom k nekonečnu.",
      "ROC ľavostranného signálu sa vždy rozprestiera smerom k nekonečnu."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Ľavostranný signál má ROC smerom k začiatku, nie k nekonečnu. Výnimky okolo z = 0 a ∞ treba čítať podľa konkrétneho signálu.",
    "slideRef": "CZS_4_03.pdf slides 6, 7",
    "subtema": "CZS 4: ROC pasce"
  },
  {
    "id": "czs4-036",
    "tema": "CZS 4: Konečné postupnosti",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenie najlepšie vystihuje konečnú postupnosť v Z-oblasti?",
    "moznosti": [
      "Jej Z-transformácia je konečný súčet mocnín z a z^-1; ROC môže vylúčiť 0 alebo ∞ podľa krajných indexov.",
      "Každá konečná postupnosť má jeden pól mimo jednotkovej kružnice.",
      "Konečná postupnosť nemá Z-transformáciu, iba DTFT.",
      "ROC konečnej postupnosti je vždy iba jednotková kružnica."
    ],
    "spravne": [0],
    "vysvetlenie": "Konečnosť neznamená automaticky celú z-rovinu vrátane 0 a ∞. Záleží, či sa v zápise vyskytujú kladné alebo záporné mocniny z.",
    "slideRef": "CZS_4_03.pdf slides 4, 7",
    "subtema": "CZS 4: Konečné postupnosti"
  },
  {
    "id": "czs4-037",
    "tema": "CZS 4: Prenosová funkcia",
    "typ": "jedna",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ak H(z) = (1 - z^-1) / (1 - 0.9z^-1), ktorý popis je najpresnejší?",
    "moznosti": [
      "Má nulu v z = 1 a pól v z = 0.9.",
      "Má pól v z = 1 a nulu v z = 0.9.",
      "Má nulu v z = -1 a pól v z = -0.9.",
      "Nemá pól, pretože oba členy obsahujú z^-1."
    ],
    "spravne": [0],
    "vysvetlenie": "Rovnica 1 - z^-1 = 0 dá z = 1, rovnica 1 - 0.9z^-1 = 0 dá z = 0.9. Zápis so z^-1 často mätie pri hľadaní koreňov.",
    "slideRef": "CZS_4_03.pdf slides 10, 20",
    "subtema": "CZS 4: Póly a nuly prenosu"
  },
  {
    "id": "czs4-038",
    "tema": "CZS 4: Prenosová funkcia",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Pre H(z) = (1 + z^-1) / (1 - 0.5z^-1) pri kauzálnej ROC platí:",
    "moznosti": [
      "pól je v z = 0.5,",
      "nula je v z = -1,",
      "systém je stabilný, lebo kauzálna ROC |z| > 0.5 obsahuje jednotkovú kružnicu,",
      "systém je nestabilný, lebo nula leží na jednotkovej kružnici."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Nula na jednotkovej kružnici môže potlačiť frekvenciu, ale nespôsobuje BIBO nestabilitu. Stabilitu riadi ROC a póly.",
    "slideRef": "CZS_4_03.pdf slides 10, 13, 20",
    "subtema": "CZS 4: Póly, nuly a stabilita"
  },
  {
    "id": "czs4-039",
    "tema": "CZS 4: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré tvrdenia spájajú Z-transformáciu s LTI systémami správne?",
    "moznosti": [
      "H(z) je Z-transformácia impulznej charakteristiky h[n].",
      "Výstup LTI systému v Z-oblasti je Y(z) = X(z)H(z).",
      "Frekvenčná charakteristika vznikne dosadením z = e^jω, ak jednotková kružnica patrí do ROC H(z).",
      "Kauzalita systému sa určí podľa núl v čitateli H(z)."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Kauzalita racionálneho LTI systému súvisí s ROC a impulznou odozvou, nie s nulami v čitateli.",
    "slideRef": "CZS_4_03.pdf",
    "subtema": "CZS 4: Integrované pasce"
  },
  {
    "id": "czs4-040",
    "tema": "CZS 4: Súhrn",
    "typ": "viac",
    "format": "klasicka",
    "uroven": "tazka",
    "otazka": "Ktoré dvojice podmienok sú správne?",
    "moznosti": [
      "kauzálny racionálny systém: ROC mimo najvzdialenejšieho pólu,",
      "stabilný LTI systém: jednotková kružnica v ROC,",
      "pravostranná exponenciála a^n u[n]: ROC |z| > |a|,",
      "ľavostranná exponenciála: ROC vždy |z| > |a|."
    ],
    "spravne": [0, 1, 2],
    "vysvetlenie": "Posledná možnosť je zámerná pasca: ľavostranná exponenciála má ROC smerom dovnútra, teda typicky |z| < |a|.",
    "slideRef": "CZS_4_03.pdf",
    "subtema": "CZS 4: Integrované pasce"
  }
];

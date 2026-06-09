// SZZ okruh 5 - Digitalny riadeny oscilator (gap-fill z prezentacie
// HEL_06_Digitalni_realizace.pdf). Zdrojova prezentacia "HEL Skuska 6",
// ktoru hel-szz-okruhy.js premapuje na "5. Digitalny riadeny oscilator".
const helSkuska6CrackData = [
  // ===== Generovanie harmonickeho signalu =====
  {
    id: "HEL 6. Harm gen 001",
    oblast: "Generovanie harmonickeho signalu",
    podoblast: "Prehlad metod",
    pravda: "Harmonicky (sinusovy) signal mozno digitalne generovat mocninnym radom, rekurzivnym modelom, integraciou trojuholnika alebo filtraciou 1. harmonickej zlozky.",
    nepravda: "Harmonicky (sinusovy) signal mozno digitalne generovat iba priamym citanim z analogovej pamate bez akehokolvek vypoctu."
  },
  {
    id: "HEL 6. Harm gen 002",
    oblast: "Generovanie harmonickeho signalu",
    podoblast: "Mocninne rady",
    pravda: "Vypocet sin/cos ciastocnym suctom Maclaurinovho radu je vypoctovo narocny a argument x treba pocitat modulo 2pi.",
    nepravda: "Vypocet sin/cos ciastocnym suctom Maclaurinovho radu je vypoctovo nenarocny a argument x netreba nijako obmedzovat."
  },
  {
    id: "HEL 6. Harm gen 003",
    oblast: "Generovanie harmonickeho signalu",
    podoblast: "Rekurzivny model",
    pravda: "Rekurzivny model vychadza z definicie sin a cos na jednotkovej kruznici a kazdu periodu rotuje fazor o uhol dany kmitoctom signalu.",
    nepravda: "Rekurzivny model vychadza z tabulky ulozenej v ROM a kazdu periodu inkrementuje adresu citaca o jednu vzorku."
  },
  {
    id: "HEL 6. Harm gen 004",
    oblast: "Generovanie harmonickeho signalu",
    podoblast: "Rekurzivny model",
    pravda: String.raw`Rekurzivny model pocita $x(n{+}1)=x(n)\cos\theta - y(n)\sin\theta$ a $y(n{+}1)=x(n)\sin\theta + y(n)\cos\theta$, pricom sin a cos su konstanty vypocitane len raz.`,
    nepravda: String.raw`Rekurzivny model pocita $x(n{+}1)=x(n)\cos\theta - y(n)\sin\theta$ a $y(n{+}1)=x(n)\sin\theta + y(n)\cos\theta$, pricom sin a cos sa musia prepocitavat v kazdej vzorke.`
  },
  {
    id: "HEL 6. Harm gen 005",
    oblast: "Generovanie harmonickeho signalu",
    podoblast: "Rekurzivny model",
    pravda: "Pociatocne podmienky rekurzivneho modelu su x(0)=1 a y(0)=0; kvantovanie pri pevnej radovej ciarke sposobuje pokles amplitudy.",
    nepravda: "Pociatocne podmienky rekurzivneho modelu su x(0)=0 a y(0)=1; kvantovanie pri pevnej radovej ciarke amplitudu nijako neovplyvnuje."
  },

  // ===== Generovanie periodickych signalov =====
  {
    id: "HEL 6. Periodicke 001",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Metody",
    pravda: "Periodicke priebehy mozno digitalne generovat harmonickou syntezou, citacom modulo alebo integraciou/derivaciou inych signalov.",
    nepravda: "Periodicke priebehy mozno digitalne generovat iba analogovym relaxacnym oscilatorom prevedenym do digitalnej formy."
  },
  {
    id: "HEL 6. Periodicke 002",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Harmonicka synteza",
    pravda: "Harmonicka synteza pouziva 10 az 20 (casto 12) harmonickych zloziek bez jednosmernej zlozky a amplitudy sa pocitaju cez koeficienty diskretnej Fourierovej rady.",
    nepravda: "Harmonicka synteza pouziva vzdy presne jednu harmonicku zlozku vratane jednosmernej zlozky a amplitudy sa nastavuju nahodne."
  },
  {
    id: "HEL 6. Periodicke 003",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Harmonicka synteza",
    pravda: "Pri pilovom priebehu klesa relativna amplituda harmonickych ako 1/k a obsahuje vsetky harmonicke zlozky.",
    nepravda: "Pri pilovom priebehu klesa relativna amplituda harmonickych ako 1/k a obsahuje iba neparne harmonicke zlozky."
  },
  {
    id: "HEL 6. Periodicke 004",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Harmonicka synteza",
    pravda: "Obdlznikovy priebeh so striedou 1:1 obsahuje iba neparne harmonicke s relativnou amplitudou 1/k.",
    nepravda: "Obdlznikovy priebeh so striedou 1:1 obsahuje vsetky harmonicke s relativnou amplitudou 1/k."
  },
  {
    id: "HEL 6. Periodicke 005",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Harmonicka synteza",
    pravda: "Trojuholnikovy priebeh obsahuje iba neparne harmonicke, ktorych amplitudy klesaju ako 1/k^2.",
    nepravda: "Trojuholnikovy priebeh obsahuje iba neparne harmonicke, ktorych amplitudy klesaju ako 1/k."
  },
  {
    id: "HEL 6. Periodicke 006",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Harmonicka synteza",
    pravda: "Parabolicky priebeh obsahuje iba neparne harmonicke, ktorych amplitudy klesaju ako 1/k^3.",
    nepravda: "Parabolicky priebeh obsahuje vsetky harmonicke, ktorych amplitudy klesaju ako 1/k^3."
  },
  {
    id: "HEL 6. Citac modulo 001",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Citac modulo",
    pravda: "Citac modulo generuje linearne rastucu funkciu, ktora sa na zaciatku kazdej periody resetuje.",
    nepravda: "Citac modulo generuje exponencialne klesajucu funkciu, ktora sa na konci kazdej periody zdvojnasobuje."
  },
  {
    id: "HEL 6. Citac modulo 002",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Citac modulo",
    pravda: "Pilovy signal z citaca modulo sa pre rozsah od -1 do 1 nasobi 2 a odcita 1.",
    nepravda: "Pilovy signal z citaca modulo sa pre rozsah od -1 do 1 nasobi 4 a pricita 1."
  },
  {
    id: "HEL 6. Citac modulo 003",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Citac modulo",
    pravda: "Trojuholnikovy signal vznikne z absolutnej hodnoty piloveho signalu a obdlznikovy zo znamienka (sgn) piloveho signalu.",
    nepravda: "Trojuholnikovy signal vznikne zo znamienka piloveho signalu a obdlznikovy z absolutnej hodnoty piloveho signalu."
  },
  {
    id: "HEL 6. Citac modulo 004",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Citac modulo",
    pravda: "Zmenu striedy obdlznika dosiahneme odcitanim jednosmernej zlozky o velkosti 2*rDC-1 od piloveho signalu pred funkciou sgn.",
    nepravda: "Zmenu striedy obdlznika dosiahneme nasobenim piloveho signalu konstantou 2*rDC-1 pred funkciou sgn."
  },
  {
    id: "HEL 6. Citac modulo 005",
    oblast: "Generovanie periodickych signalov",
    podoblast: "Citac modulo",
    pravda: "Parabolicky signal vznikne vypoctom druhej mocniny trojuholnikoveho priebehu.",
    nepravda: "Parabolicky signal vznikne vypoctom odmocniny obdlznikoveho priebehu."
  },

  // ===== Integrator a diferenciator =====
  {
    id: "HEL 6. Integ diff 001",
    oblast: "Integrator a diferenciator",
    podoblast: "Prevody priebehov",
    pravda: "Integraciou obdlznikoveho signalu ziskame trojuholnikovy, pricom strieda obdlznika urcuje pomer nabeznej a sestupnej hrany.",
    nepravda: "Integraciou obdlznikoveho signalu ziskame parabolicky, pricom strieda obdlznika nema na vysledny tvar ziadny vplyv."
  },
  {
    id: "HEL 6. Integ diff 002",
    oblast: "Integrator a diferenciator",
    podoblast: "Prevody priebehov",
    pravda: "Derivaciou trojuholnikoveho signalu ziskame obdlznikovy a integraciou trojuholnikoveho ziskame parabolicky signal.",
    nepravda: "Derivaciou trojuholnikoveho signalu ziskame parabolicky a integraciou trojuholnikoveho ziskame obdlznikovy signal."
  },
  {
    id: "HEL 6. Integ diff 003",
    oblast: "Integrator a diferenciator",
    podoblast: "Prevody priebehov",
    pravda: "Derivaciou obdlznikoveho signalu ziskame bipolarny periodicky sled impulzov.",
    nepravda: "Derivaciou obdlznikoveho signalu ziskame hladky sinusovy priebeh."
  },
  {
    id: "HEL 6. Integ diff 004",
    oblast: "Integrator a diferenciator",
    podoblast: "Vlastnosti clankov",
    pravda: "Prenos integracneho a derivacneho clanku zavisi na kmitocte, preto treba vystup nasobit prevratenou hodnotou modulu prenosu na kmitocte vstupneho signalu.",
    nepravda: "Prenos integracneho a derivacneho clanku nezavisi na kmitocte, preto netreba vystup nijako korigovat."
  },
  {
    id: "HEL 6. Integ diff 005",
    oblast: "Integrator a diferenciator",
    podoblast: "Vlastnosti clankov",
    pravda: "Pri niektorych priebehoch vznikne po integracii jednosmerna zlozka, ktoru treba odstranit filtrom.",
    nepravda: "Pri integracii nikdy nevznikne jednosmerna zlozka, takze ziadna dalsia filtracia nie je potrebna."
  },

  // ===== Aliasing a nadvzorkovanie =====
  {
    id: "HEL 6. Aliasing 001",
    oblast: "Aliasing a nadvzorkovanie",
    podoblast: "Vznik aliasingu",
    pravda: "Periodicke signaly maju teoreticky nekonecny pocet harmonickych zloziek, preto v cislicovom systeme vznika aliasingove skreslenie uz pri ich generovani.",
    nepravda: "Periodicke signaly maju konecny pocet harmonickych zloziek, preto pri ich digitalnom generovani aliasing nikdy nevznikne."
  },
  {
    id: "HEL 6. Aliasing 002",
    oblast: "Aliasing a nadvzorkovanie",
    podoblast: "Riesenia",
    pravda: "Aliasing pri generovani mozno potlacit harmonickou syntezou, nadvzorkovanim alebo metodami pasmovo obmedzenych signalov.",
    nepravda: "Aliasing pri generovani mozno potlacit iba znizenim bitovej hlbky vystupnych vzoriek."
  },
  {
    id: "HEL 6. Aliasing 003",
    oblast: "Aliasing a nadvzorkovanie",
    podoblast: "Nadvzorkovanie",
    pravda: "Pri nadvzorkovani sa signal generuje pri N-krat vyssom vzorkovacom kmitocte a nasledne podvzorkuje; cim vyssi fvz, tym nizsia amplituda aliasingovych zloziek.",
    nepravda: "Pri nadvzorkovani sa signal generuje pri N-krat nizsom vzorkovacom kmitocte a nasledne nadvzorkuje; vyssi fvz amplitudu aliasingu zvysuje."
  },

  // ===== Pasmovo obmedzene signaly =====
  {
    id: "HEL 6. BL 001",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "DSF",
    pravda: "Diskretny suctovy vzorec (DSF) ziskava pasmovo obmedzene signaly cez goniometricke funkcie a je vypoctovo nenarocny, vyuziva sa hlavne pre LFO.",
    nepravda: "Diskretny suctovy vzorec (DSF) ziskava pasmovo obmedzene signaly cez ROM tabulku a je vypoctovo velmi narocny, takze sa pre LFO nehodi."
  },
  {
    id: "HEL 6. BL 002",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "DSF",
    pravda: "DSF neumoznuje generovat presny trojuholnikovy ani obdlznikovy tvar, iba im podobne priebehy.",
    nepravda: "DSF umoznuje generovat presny trojuholnikovy aj obdlznikovy tvar bez akejkolvek odchylky."
  },
  {
    id: "HEL 6. BL 003",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "DPW",
    pravda: "Metoda DPW vyuziva, ze amplitudy harmonickych parabolickeho priebehu klesaju 12 dB/okt (pri pile 6 dB/okt), takze aliasing je nizsi a moze byt maskovany.",
    nepravda: "Metoda DPW vyuziva, ze amplitudy harmonickych parabolickeho priebehu klesaju 6 dB/okt (pri pile 12 dB/okt), takze aliasing je vyssi."
  },
  {
    id: "HEL 6. BL 004",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "DPW",
    pravda: "DPW generuje pilu cez modulo citac, umocnenie signalu na druhu, vyhladenie FIR (moving average) filtrom a normalizaciu.",
    nepravda: "DPW generuje pilu cez modulo citac, odmocnenie signalu, vyhladenie IIR rezonancnym filtrom a kvantovanie."
  },
  {
    id: "HEL 6. BL 005",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "BLIT",
    pravda: "Unipolarny BLIT vznikne suctom K harmonickych zloziek s amplitudou 1; bipolarny BLIT vznikne odcitanim fazovo posunuteho unipolarneho BLIT.",
    nepravda: "Unipolarny BLIT vznikne suctom K harmonickych s klesajucou amplitudou; bipolarny BLIT vznikne ich nasobenim."
  },
  {
    id: "HEL 6. BL 006",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "BLIT",
    pravda: "Integraciou BLIT sa ziskaju pilovy, obdlznikovy aj trojuholnikovy signal, pricom jednosmernu zlozku C treba kompenzovat filtrom typu horna priepust.",
    nepravda: "Integraciou BLIT sa ziska iba sinusovy signal a jednosmerna zlozka C sa kompenzuje filtrom typu dolna priepust."
  },
  {
    id: "HEL 6. BL 007",
    oblast: "Pasmovo obmedzene signaly",
    podoblast: "BLIT",
    pravda: "Zmenu striedy a PWM odvodeneho obdlznika z bipolarneho BLIT robime zmenou fazoveho posunu, pricom pre necelociselny posun treba interpolovat vzorky.",
    nepravda: "Zmenu striedy a PWM odvodeneho obdlznika z bipolarneho BLIT robime zmenou amplitudy a interpolacia vzoriek nikdy nie je potrebna."
  },

  // ===== Sumove signaly =====
  {
    id: "HEL 6. Sum 001",
    oblast: "Sumove signaly",
    podoblast: "Biely sum",
    pravda: "Biely sum sa generuje postupnostou pseudonahodnych cisel s rovnomernym rozdelenim (Lehmer, Marsaglia) a nasledne sa transformuje na normalne rozlozenie.",
    nepravda: "Biely sum sa generuje postupnostou pseudonahodnych cisel s normalnym rozdelenim a nasledne sa transformuje na rovnomerne rozlozenie."
  },
  {
    id: "HEL 6. Sum 002",
    oblast: "Sumove signaly",
    podoblast: "Farebne sumy",
    pravda: "Farebne sumy vznikaju filtraciou bieleho sumu; hnedy (cerveny) klesa -6 dB/okt (integrator) a ruzovy -3 dB/okt.",
    nepravda: "Farebne sumy vznikaju filtraciou bieleho sumu; hnedy (cerveny) klesa -3 dB/okt a ruzovy -6 dB/okt (integrator)."
  },
  {
    id: "HEL 6. Sum 003",
    oblast: "Sumove signaly",
    podoblast: "Farebne sumy",
    pravda: "Modry sum rastie +3 dB/okt a fialovy (purpurovy) rastie +6 dB/okt, ktory vznikne filtraciou diferenciatorom.",
    nepravda: "Modry sum klesa -3 dB/okt a fialovy (purpurovy) klesa -6 dB/okt, ktory vznikne filtraciou integratorom."
  },

  // ===== Parametricke filtre (modifikator vo VA syntezatore) =====
  {
    id: "HEL 6. Filtre 001",
    oblast: "Parametricke filtre",
    podoblast: "IIR filtre",
    pravda: "Parametricke filtre sa najcastejsie realizuju ako IIR filtre 1. a 2. radu v 2. kanonickej forme.",
    nepravda: "Parametricke filtre sa najcastejsie realizuju ako FIR filtre vysokeho radu v priamej forme."
  },
  {
    id: "HEL 6. Filtre 002",
    oblast: "Parametricke filtre",
    podoblast: "State Variable Filter",
    pravda: "Filter s kanonickou stavovou strukturou (State Variable Filter) ma sucasne tri vystupy: dolnu priepust, pasmovu priepust a hornu priepust.",
    nepravda: "Filter s kanonickou stavovou strukturou (State Variable Filter) ma jediny vystup, ktory sa prepina medzi typmi filtra."
  },
  {
    id: "HEL 6. Filtre 003",
    oblast: "Parametricke filtre",
    podoblast: "Moogov filter",
    pravda: "Moogov rebrickovy filter tvoria styri dolne priepuste 1. radu so spatnou vazbou, ktora riadi rezonanciu.",
    nepravda: "Moogov rebrickovy filter tvori jedina horna priepust 4. radu bez spatnej vazby."
  },
  {
    id: "HEL 6. Filtre 004",
    oblast: "Parametricke filtre",
    podoblast: "Riadenie filtra",
    pravda: "Koeficienty parametrickeho filtra sa prepocitavaju kazdu vzorkovaciu periodu podla hodnoty riadiaceho signalu (medzny kmitocet, pripadne cinitel akosti).",
    nepravda: "Koeficienty parametrickeho filtra sa nastavia raz pri starte tonu a pocas hrania sa uz nemenia."
  },

  // ===== Virtualne analogove syntezatory =====
  {
    id: "HEL 6. VA 001",
    oblast: "Virtualne analogove syntezatory",
    podoblast: "Struktura",
    pravda: "Virtualny analogovy syntezator kopiruje strukturu analogoveho, kde su analogove obvody nahradene digitalnymi: zvukovy generator, modifikator a efektovy procesor.",
    nepravda: "Virtualny analogovy syntezator pouziva iba prehravanie vzoriek reálnych analogovych nastrojov bez akehokolvek generatora."
  },
  {
    id: "HEL 6. VA 002",
    oblast: "Virtualne analogove syntezatory",
    podoblast: "Zvukovy generator",
    pravda: "Zvukovy generator VA syntezatora je realizovany ako wavetable alebo matematickym modelovanim a umoznuje aditivnu aj modulacne syntezy PWM, RM a FM.",
    nepravda: "Zvukovy generator VA syntezatora je realizovany iba jednym pevnym sinusovym oscilatorom bez moznosti modulacie."
  },
  {
    id: "HEL 6. VA 003",
    oblast: "Virtualne analogove syntezatory",
    podoblast: "Synchronizacia a rozladenie",
    pravda: "Mierne nahodne rozladenie oscilatorov (napr. Supersaw) vytvara bohatsie zvukove farby, typicke pre analogove syntezatory.",
    nepravda: "Mierne rozladenie oscilatorov je vo VA syntezatoroch neziaduce a vzdy zuzuje vyslednu zvukovu farbu."
  }
];

const helSkuska6CrackOtazky = helSkuska6CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 6. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 6",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

helOtazky.push(...helSkuska6CrackOtazky);

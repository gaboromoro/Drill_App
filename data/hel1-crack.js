// HEL Skuska 1 -> SZZ okruh 1 (Aditivna+vektorova, Oscilatory/priebehy, Filtracne metody,
// Subtraktivna) + SZZ okruh 2 (Modulacne metody, Tvarovanie vlny). Remap riesi hel-szz-okruhy.js
// podla (prezentacia, oblast) - oblast/podoblast preto NEMENIT.
// Kazdy vyrok ma dve nepravdy (50 % pravda / 25 % + 25 % nepravda), kazda flipuje iny dolezity fakt.

const helSkuska1CrackData = [
  // ===== Oblast 1: Aditivna a vektorova synteza =====
  {
    id: "HEL 1. Aditivna princip 001",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Princip aditivnej syntezy",
    pravda: "Aditivna synteza scituje vystupne signaly viacerych funkcnych generatorov.",
    nepravda: "Aditivna synteza filtruje jeden spektralne bohaty signal cez modifikator.",
    nepravda2: "Aditivna synteza nasobi vystupne signaly dvoch generatorov (kruhova modulacia)."
  },
  {
    id: "HEL 1. Aditivna princip 002",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Princip aditivnej syntezy",
    pravda: "Pri aditivnej synteze vznika vysledna farba suctom viacerych zvukovych farieb.",
    nepravda: "Pri aditivnej synteze vznika vysledna farba odoberanim zloziek zo spektralne bohateho signalu.",
    nepravda2: "Pri aditivnej synteze vznika vysledna farba nelinearnym skreslenim jedneho oscilatora."
  },
  {
    id: "HEL 1. Aditivna princip 003",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Princip aditivnej syntezy",
    pravda: "Koeficienty Fourierovej rady vystupu su dane suctom koeficientov Fourierovej rady jednotlivych generatorov.",
    nepravda: "Koeficienty Fourierovej rady vystupu su dane sucinom koeficientov Fourierovej rady generatorov.",
    nepravda2: "Koeficienty Fourierovej rady vystupu su dane rozdielom koeficientov dvoch generatorov."
  },
  {
    id: "HEL 1. Aditivna princip 004",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Princip aditivnej syntezy",
    pravda: "Pri aditivnej synteze moze mat kazda zlozka vlastnu amplitudovu obalku a zvuk aj celkovu obalku.",
    nepravda: "Pri aditivnej synteze maju vsetky zlozky jednu spolocnu obalku, ktoru nemozno menit samostatne.",
    nepravda2: "Pri aditivnej synteze ma obalku iba zakladna zlozka, vyssie harmonicke su konstantne."
  },
  {
    id: "HEL 1. Aditivna harmonicka 001",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Harmonicka synteza",
    pravda: "Harmonicka synteza scituje oscilatory s nasobkami zakladneho kmitoctu a jej vystup je periodicky signal.",
    nepravda: "Harmonicka synteza scituje oscilatory na neharmonickych kmitoctoch a jej vystup je neperiodicky signal.",
    nepravda2: "Harmonicka synteza scituje oscilatory s nahodnymi fazami a jej vystupom je sum."
  },
  {
    id: "HEL 1. Aditivna harmonicka 002",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Harmonicka synteza",
    pravda: "Amplitudy a fazy harmonickych zloziek sa ziskaju pomocou Fourierovej rady.",
    nepravda: "Amplitudy a fazy harmonickych zloziek nemozno popisat Fourierovou radou.",
    nepravda2: "Amplitudy a fazy harmonickych zloziek sa ziskaju Fourierovou transformaciou neperiodickeho signalu."
  },
  {
    id: "HEL 1. Aditivna harmonicka 003",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Harmonicka synteza",
    pravda: "Ciastocny sucet K clenov Fourierovej rady je aproximacia signalu obmedzenym poctom harmonickych.",
    nepravda: "Ciastocny sucet K clenov Fourierovej rady je presna rekonstrukcia signalu bez aproximacnej chyby.",
    nepravda2: "Ciastocny sucet K clenov Fourierovej rady na skoku signalu konverguje uplne bez Gibbsovho zakmitu."
  },
  {
    id: "HEL 1. Aditivna zlozkova 001",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Zlozkova synteza",
    pravda: "Zlozkova synteza scituje spektralne zlozky (partials), ktore nemusia byt celociselnymi nasobkami zakladneho kmitoctu.",
    nepravda: "Zlozkova synteza scituje partials, ktore musia byt vzdy celociselnymi nasobkami zakladneho kmitoctu.",
    nepravda2: "Zlozkova synteza odobera spektralne zlozky zo sumu pomocou filtra."
  },
  {
    id: "HEL 1. Aditivna zlozkova 002",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Zlozkova synteza",
    pravda: "Prikladom aditivnej (zlozkovej) syntezy su Hammondove varhany, ktorych drawbary su popisane dlzkou pistal v stopach.",
    nepravda: "Prikladom zlozkovej syntezy su Hammondove varhany, ktorych drawbary urcuju index FM modulacie.",
    nepravda2: "Prikladom zlozkovej syntezy su Hammondove varhany, ktorych drawbary nastavuju medzny kmitocet VCF."
  },
  {
    id: "HEL 1. Aditivna resynteza 001",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Resynteza",
    pravda: "Resynteza najprv analyzuje spektrum a casovy vyvoj realneho zvuku, potom ho znovu posklada zo zloziek.",
    nepravda: "Resynteza vytvara zvuk nahodnym generovanim parcialov bez predchadzajucej analyzy.",
    nepravda2: "Resynteza iba prehrava nahraty zvuk z pamate ako sampler, bez rozkladu na zlozky."
  },
  {
    id: "HEL 1. Aditivna resynteza 002",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Resynteza",
    pravda: "Presnost resyntezy zavisi od toho, ako dobre analyza zachyti casovy vyvoj parcialov.",
    nepravda: "Presnost resyntezy zavisi iba od poctu parcialov, casovy vyvoj netreba zachytit.",
    nepravda2: "Presnost resyntezy zavisi iba od vzorkovacieho kmitoctu prehravania."
  },
  {
    id: "HEL 1. Vektorova 001",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Vektorova synteza",
    pravda: "Vektorova synteza plynulo miesa viacero zvukovych zdrojov podla polohy alebo trajektorie vektoroveho ovladaca.",
    nepravda: "Vektorova synteza prehrava vzdy iba jeden aktivny zdroj a zdroje nemiesa.",
    nepravda2: "Vektorova synteza prepina medzi zdrojmi skokovo, bez plynuleho miesania."
  },
  {
    id: "HEL 1. Vektorova 002",
    oblast: "Aditivna a vektorova synteza",
    podoblast: "Vektorova synteza",
    pravda: "Pri vektorovej synteze je podstatna zmena pomerov zdrojov v case, teda pohyb farby medzi zdrojmi.",
    nepravda: "Pri vektorovej synteze pohyb vektora meni hlavne vysku tonu, nie pomer zdrojov.",
    nepravda2: "Pri vektorovej synteze pohyb vektora meni iba celkovu hlasitost, nie pomer zdrojov."
  },

  // ===== Oblast 2: Oscilatory a priebehy =====
  {
    id: "HEL 1. Oscilator princip 001",
    oblast: "Oscilatory a priebehy",
    podoblast: "Princip oscilatora",
    pravda: "Oscilator je generator harmonickych kmitov zlozeny zo zosilnovaca a spatnovazobneho clanku.",
    nepravda: "Oscilator je generator harmonickych kmitov, ktory potrebuje periodicky vstupny signal a iba ho zosilnuje.",
    nepravda2: "Oscilator je pasivny LC obvod bez zosilnovaca, ktoreho kmity sa nikdy neutlmia."
  },
  {
    id: "HEL 1. Oscilator princip 002",
    oblast: "Oscilatory a priebehy",
    podoblast: "Princip oscilatora",
    pravda: "Pre vznik kmitov musi byt prenos spatnovazobnej slucky rovny jednej a celkovy fazovy posun nasobkom 2 pi.",
    nepravda: "Pre vznik kmitov staci, aby bol prenos spatnovazobnej slucky vacsi nez jedna, faza je nepodstatna.",
    nepravda2: "Pre vznik kmitov musi byt prenos slucky nulovy a fazovy posun rovny pi."
  },
  {
    id: "HEL 1. Oscilator princip 003",
    oblast: "Oscilatory a priebehy",
    podoblast: "Princip oscilatora",
    pravda: "LC oscilator urcuje frekvenciu rezonancnym obvodom a pri nulovom tlmeni su kmity netlmene s konstantnou amplitudou.",
    nepravda: "LC oscilator urcuje frekvenciu vystupnou amplitudou a tlmenie obvodu na frekvenciu nema vplyv.",
    nepravda2: "LC oscilator urcuje frekvenciu velkostou napajacieho napatia."
  },
  {
    id: "HEL 1. Oscilator princip 004",
    oblast: "Oscilatory a priebehy",
    podoblast: "Princip oscilatora",
    pravda: "RC oscilator urcuje frekvenciu fazovacim clankom z R a C v spatnej vazbe.",
    nepravda: "RC oscilator urcuje frekvenciu iba vystupnou amplitudou, hodnoty R a C ju neovplyvnuju.",
    nepravda2: "RC oscilator urcuje frekvenciu indukcnostou civky v rezonancnom obvode."
  },
  {
    id: "HEL 1. Funkcny generator 001",
    oblast: "Oscilatory a priebehy",
    podoblast: "Funkcny generator",
    pravda: "Funkcny generator pracuje na inom principe nez oscilator a ako akumulacny prvok pouziva kondenzator.",
    nepravda: "Funkcny generator pracuje na rovnakom principe ako oscilator so spatnovazobnym rezonancnym clankom.",
    nepravda2: "Funkcny generator ako akumulacny prvok pouziva civku (indukcnost)."
  },
  {
    id: "HEL 1. Funkcny generator 002",
    oblast: "Oscilatory a priebehy",
    podoblast: "Funkcny generator",
    pravda: "Nabijanim a vybijanim kondenzatora konstantnym prudom vznikne trojuholnikove napatie.",
    nepravda: "Nabijanim a vybijanim kondenzatora konstantnym prudom vznikne priamo sinusove napatie.",
    nepravda2: "Nabijanim a vybijanim kondenzatora konstantnym prudom vznikne obdlznikove napatie."
  },
  {
    id: "HEL 1. Funkcny generator 003",
    oblast: "Oscilatory a priebehy",
    podoblast: "Funkcny generator",
    pravda: "Komparator s hysterezou preklapa pri dosiahnuti prahov a na jeho vystupe je obdlznikove napatie.",
    nepravda: "Komparator s hysterezou iba zosilnuje napatie kondenzatora a jeho vystup je trojuholnikovy.",
    nepravda2: "Komparator s hysterezou integruje vstupne napatie a na vystupe da pilu."
  },
  {
    id: "HEL 1. Funkcny generator 004",
    oblast: "Oscilatory a priebehy",
    podoblast: "Funkcny generator",
    pravda: "Pri rovnakom nabijacom a vybijacom prude vznikne obdlznik so striedou 1:1, pri roznych prudoch vznikne pila a ina strieda.",
    nepravda: "Velkost nabijacieho a vybijacieho prudu neovplyvnuje tvar ani striedu, meni iba amplitudu vystupu.",
    nepravda2: "Rozne nabijacie a vybijacie prudy menia iba frekvenciu, strieda vzdy ostane 1:1."
  },
  {
    id: "HEL 1. Priebehy 001",
    oblast: "Oscilatory a priebehy",
    podoblast: "Priebehy a spektra",
    pravda: "Sinusovy priebeh obsahuje idealne jedinu spektralnu zlozku.",
    nepravda: "Sinusovy priebeh obsahuje vsetky neparne harmonicke s poklesom 1/n.",
    nepravda2: "Sinusovy priebeh obsahuje zakladnu a druhu harmonicku v pomere 2:1."
  },
  {
    id: "HEL 1. Priebehy 002",
    oblast: "Oscilatory a priebehy",
    podoblast: "Priebehy a spektra",
    pravda: "Obdlznikovy priebeh so striedou 1:1 obsahuje iba neparne harmonicke.",
    nepravda: "Obdlznikovy priebeh so striedou 1:1 obsahuje iba parne harmonicke.",
    nepravda2: "Obdlznikovy priebeh so striedou 1:1 obsahuje vsetky harmonicke s poklesom 1/k."
  },
  {
    id: "HEL 1. Priebehy 003",
    oblast: "Oscilatory a priebehy",
    podoblast: "Priebehy a spektra",
    pravda: "Pilovy priebeh obsahuje parne aj neparne harmonicke s amplitudami klesajucimi priblizne ako 1/k.",
    nepravda: "Pilovy priebeh obsahuje iba neparne harmonicke, parne uplne chybaju.",
    nepravda2: "Pilovy priebeh obsahuje iba parne harmonicke, neparne uplne chybaju."
  },
  {
    id: "HEL 1. Priebehy 004",
    oblast: "Oscilatory a priebehy",
    podoblast: "Priebehy a spektra",
    pravda: "Trojuholnikovy priebeh obsahuje neparne harmonicke, ktore klesaju rychlejsie nez pri obdlzniku.",
    nepravda: "Trojuholnikovy priebeh ma bohatsie vyssie harmonicke nez pila, preto znie ostrejsie.",
    nepravda2: "Trojuholnikovy priebeh obsahuje parne aj neparne harmonicke rovnako ako pila."
  },
  {
    id: "HEL 1. Priebehy 005",
    oblast: "Oscilatory a priebehy",
    podoblast: "Priebehy a spektra",
    pravda: "Spektralna obalka obdlznikoveho signalu je funkcia sinc a poloha jej nul zavisi od striedy.",
    nepravda: "Spektralna obalka obdlznikoveho signalu je konstantna a od striedy nezavisi.",
    nepravda2: "Spektralna obalka obdlznikoveho signalu je exponencialny pokles nezavisly od striedy."
  },

  // ===== Oblast 3: Filtracne metody syntezy =====
  {
    id: "HEL 1. Integrator 001",
    oblast: "Filtracne metody syntezy",
    podoblast: "Integracny clanok",
    pravda: "Integracny clanok je dolna priepust, realizovana RC alebo LR dvojbranom.",
    nepravda: "Integracny clanok je horna priepust, realizovana CR alebo RL dvojbranom.",
    nepravda2: "Integracny clanok je pasmova priepust, realizovana RLC dvojbranom."
  },
  {
    id: "HEL 1. Integrator 002",
    oblast: "Filtracne metody syntezy",
    podoblast: "Integracny clanok",
    pravda: "Vystupne napatie integratora je umerne casovemu integralu vstupneho napatia.",
    nepravda: "Vystupne napatie integratora je umerne casovej derivacii vstupneho napatia.",
    nepravda2: "Vystupne napatie integratora je umerne druhej mocnine vstupneho napatia."
  },
  {
    id: "HEL 1. Integrator 003",
    oblast: "Filtracne metody syntezy",
    podoblast: "Integracny clanok",
    pravda: "Po integracii vznika jednosmerna zlozka, ktoru je potrebne odstranit.",
    nepravda: "Po integracii nevznika ziadna jednosmerna zlozka, takze sa nic neodstranuje.",
    nepravda2: "Po integracii vznika iba fazovy posun, ziadna jednosmerna zlozka."
  },
  {
    id: "HEL 1. Derivator 001",
    oblast: "Filtracne metody syntezy",
    podoblast: "Derivacny clanok",
    pravda: "Derivacny clanok je horna priepust, realizovana CR alebo RL dvojbranom.",
    nepravda: "Derivacny clanok je dolna priepust, realizovana RC alebo LR dvojbranom.",
    nepravda2: "Derivacny clanok je pasmova zadrz, realizovana RLC dvojbranom."
  },
  {
    id: "HEL 1. Derivator 002",
    oblast: "Filtracne metody syntezy",
    podoblast: "Derivacny clanok",
    pravda: "Vystupne napatie diferenciatora je umerne casovej derivacii vstupneho napatia.",
    nepravda: "Vystupne napatie diferenciatora je umerne casovemu integralu vstupneho napatia.",
    nepravda2: "Vystupne napatie diferenciatora je umerne casovo oneskorenemu vstupnemu napatiu."
  },
  {
    id: "HEL 1. Tvarba priebehov 001",
    oblast: "Filtracne metody syntezy",
    podoblast: "Tvarba priebehov",
    pravda: "Integraciou obdlznikoveho priebehu vznikne trojuholnikovy priebeh.",
    nepravda: "Integraciou obdlznikoveho priebehu vznikne periodicky sled impulzov.",
    nepravda2: "Integraciou obdlznikoveho priebehu vznikne sinusovy priebeh."
  },
  {
    id: "HEL 1. Tvarba priebehov 002",
    oblast: "Filtracne metody syntezy",
    podoblast: "Tvarba priebehov",
    pravda: "Integraciou trojuholnikoveho priebehu vznikne parabolicky priebeh.",
    nepravda: "Integraciou trojuholnikoveho priebehu vznikne obdlznikovy priebeh.",
    nepravda2: "Integraciou trojuholnikoveho priebehu vznikne pilovy priebeh."
  },
  {
    id: "HEL 1. Tvarba priebehov 003",
    oblast: "Filtracne metody syntezy",
    podoblast: "Tvarba priebehov",
    pravda: "Derivaciou obdlznikoveho priebehu vznikne periodicky sled impulzov.",
    nepravda: "Derivaciou obdlznikoveho priebehu vznikne hladky sinusovy priebeh.",
    nepravda2: "Derivaciou obdlznikoveho priebehu vznikne trojuholnikovy priebeh."
  },
  {
    id: "HEL 1. Tvarba priebehov 004",
    oblast: "Filtracne metody syntezy",
    podoblast: "Tvarba priebehov",
    pravda: "Derivaciou trojuholnikoveho priebehu vznikne obdlznikovy signal so striedou 1:1.",
    nepravda: "Derivaciou trojuholnikoveho priebehu vznikne parabolicky priebeh.",
    nepravda2: "Derivaciou trojuholnikoveho priebehu vznikne periodicky sled impulzov."
  },

  // ===== Oblast 4: Subtraktivna synteza =====
  {
    id: "HEL 1. Subtraktivna princip 001",
    oblast: "Subtraktivna synteza",
    podoblast: "Princip",
    pravda: "Subtraktivna synteza pracuje s filtrami (modifikatormi), ktore obmedzuju spektrum signalu bohateho na zlozky.",
    nepravda: "Subtraktivna synteza sklada zvuk suctom samostatne riadenych harmonickych zloziek.",
    nepravda2: "Subtraktivna synteza vytvara zvuk nasobenim dvoch oscilatorov (kruhova modulacia)."
  },
  {
    id: "HEL 1. Subtraktivna princip 002",
    oblast: "Subtraktivna synteza",
    podoblast: "Princip",
    pravda: "Vstupom modifikatora moze byt periodicky signal, sum, signal aditivneho syntezatora alebo signal po nelinearnom systeme.",
    nepravda: "Vstupom modifikatora moze byt iba cisty sinusovy signal s jedinou spektralnou zlozkou.",
    nepravda2: "Vstupom modifikatora moze byt iba biely sum, iny zdroj sa nepouziva."
  },
  {
    id: "HEL 1. Subtraktivna princip 003",
    oblast: "Subtraktivna synteza",
    podoblast: "Princip",
    pravda: "V casovej oblasti je vystup modifikatora konvoluciou vstupneho signalu s jeho impulznou odozvou.",
    nepravda: "V casovej oblasti je vystup modifikatora suctom vstupneho signalu a jeho impulznej odozvy.",
    nepravda2: "V casovej oblasti je vystup modifikatora sucinom vstupneho signalu a jeho impulznej odozvy."
  },
  {
    id: "HEL 1. Subtraktivna princip 004",
    oblast: "Subtraktivna synteza",
    podoblast: "Princip",
    pravda: "V spektralnej oblasti sa spektrum vstupu nasobi prenosovou funkciou modifikatora.",
    nepravda: "V spektralnej oblasti sa spektrum vstupu scituje s prenosovou funkciou modifikatora.",
    nepravda2: "V spektralnej oblasti sa spektrum vstupu konvoluuje s prenosovou funkciou modifikatora."
  },
  {
    id: "HEL 1. Subtraktivna moduly 001",
    oblast: "Subtraktivna synteza",
    podoblast: "Moduly a riadenie",
    pravda: "VCF je napatim riadeny filter, ktoreho medzny alebo stredny kmitocet urcuje riadiace napatie.",
    nepravda: "VCF je napatim riadeny zosilnovac, ktoreho zosilnenie urcuje riadiace napatie.",
    nepravda2: "VCF je napatim riadeny oscilator, ktoreho frekvenciu urcuje riadiace napatie."
  },
  {
    id: "HEL 1. Subtraktivna moduly 002",
    oblast: "Subtraktivna synteza",
    podoblast: "Moduly a riadenie",
    pravda: "VCA je napatim riadeny zosilnovac, ktoreho okamzite zosilnenie urcuje riadiace napatie.",
    nepravda: "VCA je napatim riadeny filter, ktoreho medzny kmitocet urcuje riadiace napatie.",
    nepravda2: "VCA je napatim riadeny oscilator, ktoreho frekvenciu urcuje riadiace napatie."
  },
  {
    id: "HEL 1. Subtraktivna moduly 003",
    oblast: "Subtraktivna synteza",
    podoblast: "Moduly a riadenie",
    pravda: "EG je generator po castiach linearneho priebehu spustany stlacenim klavesu a riadi napr. VCA alebo VCF.",
    nepravda: "EG je nizkofrekvencny periodicky oscilator, ktory sa opakuje pocas drzania tonu.",
    nepravda2: "EG je napatim riadeny filter, ktory tvaruje spektrum signalu."
  },
  {
    id: "HEL 1. Subtraktivna moduly 004",
    oblast: "Subtraktivna synteza",
    podoblast: "Moduly a riadenie",
    pravda: "LFO je nizkofrekvencny generator (radovo 0,1 az 10 Hz) periodickeho alebo nahodneho signalu pre modulaciu.",
    nepravda: "LFO je audiofrekvencny generator pouzivany ako hlavny zdroj vysky hranej noty.",
    nepravda2: "LFO je generator obalky spustany stlacenim klavesu."
  },
  {
    id: "HEL 1. Subtraktivna filtre 001",
    oblast: "Subtraktivna synteza",
    podoblast: "Typy filtrov a rezonancia",
    pravda: "Dolna priepust potlaca zlozky nad medznym kmitoctom, horna priepust zlozky pod nim.",
    nepravda: "Dolna priepust potlaca zlozky pod medznym kmitoctom, horna priepust zlozky nad nim.",
    nepravda2: "Dolna aj horna priepust potlacaju zlozky v okoli medzneho kmitoctu."
  },
  {
    id: "HEL 1. Subtraktivna filtre 002",
    oblast: "Subtraktivna synteza",
    podoblast: "Typy filtrov a rezonancia",
    pravda: "Pasmova priepust prepusta okolie zvolenej frekvencie, pasmova zadrz toto okolie potlaca.",
    nepravda: "Pasmova priepust aj pasmova zadrz prepustaju to iste okolie a lisia sa iba nazvom.",
    nepravda2: "Pasmova priepust okolie zvolenej frekvencie potlaca, pasmova zadrz ho prepusta."
  },
  {
    id: "HEL 1. Subtraktivna filtre 003",
    oblast: "Subtraktivna synteza",
    podoblast: "Typy filtrov a rezonancia",
    pravda: "Parameter Resonance je akost filtra a pri vysokej hodnote moze filter prejst do samooscilacie.",
    nepravda: "Parameter Resonance transponuje cele spektrum podobne ako preladenie VCO.",
    nepravda2: "Parameter Resonance meni strmost filtra v dB na oktavu."
  },
  {
    id: "HEL 1. Subtraktivna tracking 001",
    oblast: "Subtraktivna synteza",
    podoblast: "Sledovac klaviatury, Gate a Trigger",
    pravda: "Sledovac klaviatury je obvod, ktoreho vystupne napatie je priamo umerne vyske stlacenej klavesy.",
    nepravda: "Sledovac klaviatury je obvod, ktoreho vystupne napatie je priamo umerne sile uderu (velocity).",
    nepravda2: "Sledovac klaviatury je obvod, ktoreho vystupne napatie je priamo umerne dlzke drzania klavesy."
  },
  {
    id: "HEL 1. Subtraktivna tracking 002",
    oblast: "Subtraktivna synteza",
    podoblast: "Sledovac klaviatury, Gate a Trigger",
    pravda: "Sledovac klaviatury nastavuje medzny kmitocet VCF podla vysky tonu tak, aby sa nemenila barva v roznych polohach.",
    nepravda: "Sledovac klaviatury nastavuje hlasitost VCA tak, aby barva zvuku bola v kazdej polohe ina.",
    nepravda2: "Sledovac klaviatury nastavuje casy obalky EG podla vysky stlaceneho tonu."
  },
  {
    id: "HEL 1. Subtraktivna tracking 003",
    oblast: "Subtraktivna synteza",
    podoblast: "Sledovac klaviatury, Gate a Trigger",
    pravda: "Gate je stavovy signal indikujuci drzanie klavesu, Trigger je impulz pri stlaceni a uvolneni klavesu.",
    nepravda: "Gate je impulz pri stlaceni klavesu, Trigger je stavovy signal pocas drzania klavesu.",
    nepravda2: "Gate aj Trigger su stavove signaly, lisia sa iba polaritou napatia."
  },

  // ===== Oblast 5: Modulacne metody (okruh 2) =====
  {
    id: "HEL 1. Nelinearne systemy 001",
    oblast: "Modulacne metody",
    podoblast: "Nelinearne systemy",
    pravda: "Nelinearny system obsahuje aspon jeden nelinearny prvok a neplati v nom princip superpozicie.",
    nepravda: "Nelinearny system obsahuje iba linearne prvky a plati v nom princip superpozicie.",
    nepravda2: "Nelinearny system meni iba amplitudu signalu, spektrum zachova nezmenene."
  },
  {
    id: "HEL 1. Nelinearne systemy 002",
    oblast: "Modulacne metody",
    podoblast: "Nelinearne systemy",
    pravda: "Pri budeni harmonickym signalom vznikaju vyssie harmonicke, pri zlozenom signale aj kombinacne zlozky.",
    nepravda: "Pri budeni nelinearneho systemu vznikaju iba vyssie harmonicke, kombinacne zlozky nikdy nevzniknu.",
    nepravda2: "Pri budeni nelinearneho systemu vznikaju iba kombinacne zlozky, vyssie harmonicke nie."
  },
  {
    id: "HEL 1. Nelinearne systemy 003",
    oblast: "Modulacne metody",
    podoblast: "Nelinearne systemy",
    pravda: "Velkost spektralnych zloziek na vystupe zavisi od charakteru nelinearity, pracovneho bodu a maximalnej amplitudy vstupu.",
    nepravda: "Velkost spektralnych zloziek na vystupe zavisi iba od maximalnej amplitudy vstupu, charakter nelinearity nehra rolu.",
    nepravda2: "Velkost spektralnych zloziek na vystupe zavisi iba od frekvencie vstupneho signalu."
  },
  {
    id: "HEL 1. PWM 001",
    oblast: "Modulacne metody",
    podoblast: "PWM",
    pravda: "PWM je modulacia sirky impulzu (striedy) obdlznikoveho signalu.",
    nepravda: "PWM je modulacia okamzitej frekvencie nosneho signalu.",
    nepravda2: "PWM je modulacia okamzitej amplitudy nosneho signalu."
  },
  {
    id: "HEL 1. PWM 002",
    oblast: "Modulacne metody",
    podoblast: "PWM",
    pravda: "Pri PWM sa s okamzitou striedou meni poloha nul sinc obalky, teda spektrum a barva.",
    nepravda: "Pri PWM sa meni iba faza harmonickych a amplitudove spektrum ostava ako pri striede 50 %.",
    nepravda2: "Pri PWM sa meni iba zakladny kmitocet, spektrum harmonickych ostava rovnake."
  },
  {
    id: "HEL 1. PWM 003",
    oblast: "Modulacne metody",
    podoblast: "PWM",
    pravda: "PWM sa analogovo realizuje zmenou nabijacieho a opacnou zmenou vybijacieho prudu funkcneho generatora.",
    nepravda: "PWM sa analogovo realizuje zmenou medzneho kmitoctu vystupneho filtra.",
    nepravda2: "PWM sa analogovo realizuje zmenou napajacieho napatia komparatora."
  },
  {
    id: "HEL 1. RM 001",
    oblast: "Modulacne metody",
    podoblast: "RM (kruhova modulacia)",
    pravda: "Kruhova modulacia (RM) je nasobenie signalov: amplitudu nosnej ovplyvnuje okamzita hodnota modulacneho signalu.",
    nepravda: "Kruhova modulacia (RM) meni okamzitu frekvenciu nosnej podla okamzitej hodnoty modulacneho signalu.",
    nepravda2: "Kruhova modulacia (RM) scituje nosny a modulacny signal."
  },
  {
    id: "HEL 1. RM 002",
    oblast: "Modulacne metody",
    podoblast: "RM (kruhova modulacia)",
    pravda: "Vystupom RM dvoch harmonickych signalov je DSB-SC: obe postranne pasma a potlacena nosna.",
    nepravda: "Vystupom RM dvoch harmonickych signalov su obe postranne pasma aj zachovana nosna.",
    nepravda2: "Vystupom RM dvoch harmonickych signalov je iba jedno postranne pasmo (SSB)."
  },
  {
    id: "HEL 1. RM 003",
    oblast: "Modulacne metody",
    podoblast: "RM (kruhova modulacia)",
    pravda: "Pri necelociselnom pomere kmitoctov vytvara RM neharmonicke, kovove zvuky.",
    nepravda: "RM vytvara vzdy harmonicke spektrum bez ohladu na pomer kmitoctov.",
    nepravda2: "RM pri akomkolvek pomere kmitoctov vytvara cisty sinusovy ton."
  },
  {
    id: "HEL 1. AM 001",
    oblast: "Modulacne metody",
    podoblast: "AM (amplitudova modulacia)",
    pravda: "Amplitudova modulacia (AM) je kruhova modulacia s pripoctanim nosneho signalu.",
    nepravda: "Amplitudova modulacia (AM) je kruhova modulacia s potlacenou nosnou.",
    nepravda2: "Amplitudova modulacia (AM) je frekvencna modulacia s malym indexom modulacie."
  },
  {
    id: "HEL 1. AM 002",
    oblast: "Modulacne metody",
    podoblast: "AM (amplitudova modulacia)",
    pravda: "Vystupom AM dvoch harmonickych signalov su obe postranne pasma a nosna zlozka.",
    nepravda: "Vystupom AM dvoch harmonickych signalov su obe postranne pasma a potlacena nosna.",
    nepravda2: "Vystupom AM dvoch harmonickych signalov je iba nosna zlozka bez postrannych pasiem."
  },
  {
    id: "HEL 1. AM 003",
    oblast: "Modulacne metody",
    podoblast: "AM (amplitudova modulacia)",
    pravda: "Pomaly modulacny signal pri AM vnimame ako tremolo.",
    nepravda: "Pomaly modulacny signal pri AM vnimame ako vibrato.",
    nepravda2: "Pomaly modulacny signal pri AM vnimame ako glissando (zmenu vysky tonu)."
  },
  {
    id: "HEL 1. FM 001",
    oblast: "Modulacne metody",
    podoblast: "FM (frekvencna modulacia)",
    pravda: "Frekvencna modulacia (FM) meni okamzitu frekvenciu nosneho oscilatora modulacnym signalom.",
    nepravda: "Frekvencna modulacia (FM) meni amplitudu nosneho oscilatora pri nemennej frekvencii.",
    nepravda2: "Frekvencna modulacia (FM) meni striedu obdlznikoveho nosneho signalu."
  },
  {
    id: "HEL 1. FM 002",
    oblast: "Modulacne metody",
    podoblast: "FM (frekvencna modulacia)",
    pravda: "Spektrum FM obsahuje zlozky na kmitoctoch fc plus celociselne nasobky fm, s amplitudami danymi Besselovymi funkciami a indexom modulacie.",
    nepravda: "Spektrum FM obsahuje vzdy iba dve postranne zlozky bez ohladu na index modulacie.",
    nepravda2: "Spektrum FM obsahuje iba nasobky nosnej fc, modulacny kmitocet fm sa v nom neobjavi."
  },
  {
    id: "HEL 1. FM 003",
    oblast: "Modulacne metody",
    podoblast: "FM (frekvencna modulacia)",
    pravda: "Pri modulacnom kmitocte pod cca 20 Hz vnimame FM ako vibrato, teda periodicku zmenu vysky nosnej.",
    nepravda: "Pri modulacnom kmitocte pod cca 20 Hz vnimame FM ako tremolo, teda periodicku zmenu hlasitosti.",
    nepravda2: "Pri modulacnom kmitocte pod cca 20 Hz vnimame FM ako zmenu farby bez zmeny vysky."
  },
  {
    id: "HEL 1. FM 004",
    oblast: "Modulacne metody",
    podoblast: "FM (frekvencna modulacia)",
    pravda: "Celociselny pomer kmitoctov nosnej a modulatora dava harmonicke spektrum, necelociselny neharmonicke (kovove) spektrum.",
    nepravda: "Pomer kmitoctov nosnej a modulatora neovplyvnuje harmonickost spektra FM.",
    nepravda2: "Spektrum FM je harmonicke pri kazdom pomere kmitoctov nosnej a modulatora."
  },

  // ===== Oblast 6: Tvarovanie vlny (okruh 2) =====
  {
    id: "HEL 1. Tvarovanie princip 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Princip",
    pravda: "Pri tvarovani vlny prechadza signal oscilatora systemom s nelinearnou prevodnou charakteristikou, casto bez setrvacnych prvkov.",
    nepravda: "Pri tvarovani vlny prechadza signal oscilatora linearnym filtrom bez nelinearnej charakteristiky.",
    nepravda2: "Pri tvarovani vlny prechadza signal oscilatora linearnym oneskorovacim vedenim (delay)."
  },
  {
    id: "HEL 1. Tvarovanie princip 002",
    oblast: "Tvarovanie vlny",
    podoblast: "Princip",
    pravda: "Vystup nelinearneho tvarovaca sa privadza na filter, ktory obmedzi vznikle spektrum.",
    nepravda: "Vystup nelinearneho tvarovaca sa privadza priamo na vystup bez potreby filtra.",
    nepravda2: "Vystup nelinearneho tvarovaca sa privadza spat na vstup oscilatora ako spatna vazba."
  },
  {
    id: "HEL 1. Tvarovanie princip 003",
    oblast: "Tvarovanie vlny",
    podoblast: "Princip",
    pravda: "Amplitudy zloziek vystupu tvarovaca zavisia od tvaru charakteristiky, amplitudy vstupu a posunu pracovneho bodu (DC zlozka).",
    nepravda: "Amplitudy zloziek vystupu tvarovaca zavisia iba od frekvencie vstupu, nie od jeho amplitudy.",
    nepravda2: "Amplitudy zloziek vystupu tvarovaca zavisia iba od vzorkovacieho kmitoctu."
  },
  {
    id: "HEL 1. Funkcne menice 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Symetricky obmedzovac (hard-clip) ma neparnu charakteristiku a pri harmonickom vstupe vytvara iba neparne harmonicke.",
    nepravda: "Symetricky obmedzovac (hard-clip) pri harmonickom vstupe vytvara iba parne harmonicke.",
    nepravda2: "Symetricky obmedzovac (hard-clip) pri harmonickom vstupe vytvara vsetky harmonicke rovnomerne."
  },
  {
    id: "HEL 1. Funkcne menice 002",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Nesymetricky obmedzovac ma charakteristiku, ktora nie je parna ani neparna, preto vytvara parne aj neparne harmonicke.",
    nepravda: "Nesymetricky obmedzovac vytvara iba neparne harmonicke rovnako ako symetricky.",
    nepravda2: "Nesymetricky obmedzovac vytvara iba parne harmonicke."
  },
  {
    id: "HEL 1. Funkcne menice 003",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Pri mekkom obmedzeni (soft-clip) klesaju vyssie harmonicke s poradim rychlejsie nez pri tvrdom obmedzeni.",
    nepravda: "Mekke a tvrde obmedzenie maju rovnaky pokles vyssich harmonickych pri rovnakej maximalnej amplitude.",
    nepravda2: "Pri mekkom obmedzeni (soft-clip) klesaju vyssie harmonicke pomalsie nez pri tvrdom obmedzeni."
  },
  {
    id: "HEL 1. Funkcne menice 004",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Dvojcestny usmernovac ma parnu charakteristiku, preto vytvara iba parne harmonicke.",
    nepravda: "Dvojcestny usmernovac ma neparnu charakteristiku, preto vytvara iba neparne harmonicke.",
    nepravda2: "Dvojcestny usmernovac nevytvara nove harmonicke, iba meni amplitudu signalu."
  },
  {
    id: "HEL 1. Funkcne menice 005",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Logaritmicku funkciu realizuje dioda v spatnovazobnej vetve OZ, exponencialnu dioda vo vstupnej vetve.",
    nepravda: "Logaritmicku funkciu realizuje dioda vo vstupnej vetve OZ, exponencialnu dioda v spatnovazobnej vetve.",
    nepravda2: "Logaritmicku aj exponencialnu funkciu realizuje civka v spatnovazobnej vetve OZ."
  },
  {
    id: "HEL 1. Funkcne menice 006",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Wavefolder pri prekroceni prahovej hodnoty prevracia (preklada) signal do radu kmitov.",
    nepravda: "Wavefolder pri prekroceni prahovej hodnoty signal iba orezava na konstantnu uroven.",
    nepravda2: "Wavefolder pri prekroceni prahovej hodnoty signal iba zoslabuje (znizi amplitudu)."
  },
  {
    id: "HEL 1. Tvarovanie porovnanie 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Linearne vs nelinearne",
    pravda: "Linearny filter nevytvara nove harmonicke, meni iba amplitudy a fazy uz existujucich zloziek.",
    nepravda: "Linearny filter s vysokou rezonanciou vytvara nove harmonicke rovnako ako nelinearny tvarovac.",
    nepravda2: "Linearny filter vytvara nove harmonicke, ale iba parne."
  }
];

const helSkuska1CrackOtazky = helSkuska1CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 1. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 1",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

helOtazky.push(...helSkuska1CrackOtazky);

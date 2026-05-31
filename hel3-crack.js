const helSkuska3CrackData = [
  // ===== Oblast 1: Hybridna synteza a generatory hornej oktavy =====
  {
    id: "HEL 3. Hybridna synteza 001",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Princip hybridnej syntezy",
    pravda: "Hybridna synteza je ciastocne digitalna a ciastocne analogova: cast priebehu vznika digitalne (napr. DCO), zvysok spracuvaju analogove obvody.",
    nepravda: "Hybridna synteza je cisto digitalna a cely retazec vratane filtrov a zosilnovacov je realizovany softverovo."
  },
  {
    id: "HEL 3. Hybridna synteza 002",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Princip hybridnej syntezy",
    pravda: "Typicky hybridny nastroj generuje priebeh digitalne (DCO a D/A prevodnik) a dalej ho spracuva analogovymi blokmi VCF a VCA.",
    nepravda: "Typicky hybridny nastroj generuje aj filtruje signal vylucne v digitalnej oblasti bez D/A prevodu."
  },
  {
    id: "HEL 3. Hybridne syntezatory 001",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Hybridne syntezatory (priklady)",
    pravda: "PPG Wave pouziva wavetable DCO (prehravanie vzorkov z pamate) nasledovany analogovym VCF a VCA.",
    nepravda: "PPG Wave pouziva cisto analogove VCO bez akejkolvek digitalnej tabulky priebehov."
  },
  {
    id: "HEL 3. Hybridne syntezatory 002",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Hybridne syntezatory (priklady)",
    pravda: "Quasar M8 (neskor licencovany ako Fairlight) bol hybridny nastroj s 8-hlasou polyfoniou a syntezou pomocou FFT.",
    nepravda: "Quasar M8 bol cisto analogovy modularny syntezator bez mikroprocesora a pamate."
  },
  {
    id: "HEL 3. Horna oktava 001",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Generatory hornej oktavy",
    pravda: "Generator hornej oktavy pouziva 12 impulzovych oscilatorov s kmitoctami temperovaneho ladenia hornej oktavy namiesto jedneho plynule preladovaneho VCO.",
    nepravda: "Generator hornej oktavy pouziva jediny plynule preladovany VCO, ktoreho ladenie nezavisi od teploty."
  },
  {
    id: "HEL 3. Horna oktava 002",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Generatory hornej oktavy",
    pravda: "Kmitocty nizsich oktav sa ziskaju postupnym delenim dvomi z tonov hornej oktavy.",
    nepravda: "Kmitocty nizsich oktav sa ziskaju postupnym nasobenim dvomi z tonov hornej oktavy."
  },
  {
    id: "HEL 3. Horna oktava 003",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Generatory hornej oktavy",
    pravda: "Pri odvodeni z jedneho hlavneho oscilatora sa tony hornej oktavy ziskaju delenim jeho vysokeho kmitoctu celym cislom, co vnasa malu chybu ladenia (zaokruhlenie delicieho pomeru).",
    nepravda: "Pri odvodeni z jedneho hlavneho oscilatora sa tony hornej oktavy ziskaju nasobenim jeho kmitoctu necelym cislom, takze ladenie je presne."
  },
  {
    id: "HEL 3. Horna oktava 004",
    oblast: "Hybridna synteza a generatory hornej oktavy",
    podoblast: "Generatory hornej oktavy",
    pravda: "Plynula zmena vysky tonu je pri generatoroch hornej oktavy problematicka.",
    nepravda: "Plynula zmena vysky tonu je pri generatoroch hornej oktavy jednoducha a bezstratova."
  },

  // ===== Oblast 2: Cislicove generatory funkcii (DCO) =====
  {
    id: "HEL 3. DCO princip 001",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "DCO princip",
    pravda: "DCO je cislicovy generator periodickeho priebehu nasledovany jednoduchym D/A prevodnikom.",
    nepravda: "DCO je analogovy oscilator riadeny napatim bez akehokolvek D/A prevodnika."
  },
  {
    id: "HEL 3. DCO princip 002",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "DCO princip",
    pravda: "Vyssie periody spektra na vystupe DCO sa odstranuju napatim riadenou rekonstrukcnou dolnou priepustou.",
    nepravda: "Vyssie periody spektra na vystupe DCO sa odstranuju napatim riadenou hornou priepustou."
  },
  {
    id: "HEL 3. Citac pila 001",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "Generator s citacom (pilovy priebeh)",
    pravda: "V generatore piloveho priebehu vystupy citaca spinaju tranzistory, ktore pripajaju vahove rezistory v invertujucom sumacnom zapojeni OZ.",
    nepravda: "V generatore piloveho priebehu citac priamo riadi kmitocet analogoveho VCO bez vahovych rezistorov."
  },
  {
    id: "HEL 3. Citac pila 002",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "Generator s citacom (pilovy priebeh)",
    pravda: "Pri n-bitovom citaci je kmitocet hodinovych impulzov 2 na n-tu krat vyssi nez kmitocet vystupneho signalu.",
    nepravda: "Pri n-bitovom citaci je kmitocet hodinovych impulzov rovnaky ako kmitocet vystupneho signalu."
  },
  {
    id: "HEL 3. Walsh 001",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "Walshove funkcie",
    pravda: "Walshove funkcie vytvaraju priebeh scitanim binarnych signalov s roznym kmitoctom (z delicov) alebo posunutych klopnymi obvodmi typu D.",
    nepravda: "Walshove funkcie vytvaraju priebeh scitanim cistych sinusovych harmonickych zloziek."
  },
  {
    id: "HEL 3. Slider scanning 001",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "Slider scanning",
    pravda: "Pri slider scanningu citac riadi analogovy multiplexer, ktory prepina na vystup napatia nastavene napatovymi delicami (slidermi).",
    nepravda: "Pri slider scanningu citac priamo adresuje pamat ROM, z ktorej cita ulozene vzorky priebehu."
  },
  {
    id: "HEL 3. ROM 001",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "Generator s pamatou ROM",
    pravda: "Pri generatore s ROM citac adresuje pamat, z ktorej sa periodicky citaju vzorky priebehu privadzane na D/A prevodnik.",
    nepravda: "Pri generatore s ROM citac prepina napatia na vstupoch multiplexera nastavene slidermi."
  },
  {
    id: "HEL 3. Wavecycle 001",
    oblast: "Cislicove generatory funkcii (DCO)",
    podoblast: "Synteza Wavecycle",
    pravda: "Pri synteze Wavecycle sa rozlisuje single-cycle (cita sa jeden cyklus priebehu) a multi-cycle (cita sa viac cyklov za sebou).",
    nepravda: "Pri synteze Wavecycle sa vzdy cita iba jediny cyklus a multi-cycle neexistuje."
  },

  // ===== Oblast 3: Sekvencery a synchronizacia =====
  {
    id: "HEL 3. Sekvencer 001",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Sekvencer (princip)",
    pravda: "Sekvencer zaznamenava a prehrava riadiace signaly syntezatora, pricom ich neuklada kontinualne, ale ako udalosti.",
    nepravda: "Sekvencer zaznamenava a prehrava priamo audio signal syntezatora ako kontinualnu nahravku."
  },
  {
    id: "HEL 3. Sekvencer 002",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Sekvencer (princip)",
    pravda: "Sekvencer s plynulym zaznamom uklada hodnoty s casovacom od predchadzajucej udalosti a jeho rozlisenie urcuje PPQN hodinoveho generatora.",
    nepravda: "Sekvencer s plynulym zaznamom uklada hodnoty v pevnych hrubych krokoch nezavisle od hodinoveho generatora."
  },
  {
    id: "HEL 3. Krokovy sekvencer 001",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Krokovy sekvencer",
    pravda: "Krokovy sekvencer prehrava v slucke rucne zadane hodnoty riadiacich signalov s hrubym rozlisenim, kde kazdy krok ma jedno pamatove miesto.",
    nepravda: "Krokovy sekvencer zaznamenava riadiace signaly plynule s jemnym rozlisenim urcenym PPQN."
  },
  {
    id: "HEL 3. Krokovy sekvencer 002",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Krokovy sekvencer",
    pravda: "V krokovom sekvenceri citac prepina vstupy multiplexera s napatiami nastavenymi potenciometrami alebo D/A prevodnikmi.",
    nepravda: "V krokovom sekvenceri sa hodnoty citaju z magnetickej pasky bez multiplexera."
  },
  {
    id: "HEL 3. Pulse Clock 001",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Synchronizacny kod Pulse Clock",
    pravda: "Pulse Clock prenasa medzi zariadeniami signal Clock ako elektricke impulzy, najcastejsie 24 PPQN.",
    nepravda: "Pulse Clock prenasa medzi zariadeniami absolutnu poziciu v skladbe pre kazdy takt."
  },
  {
    id: "HEL 3. Pulse Clock 002",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Synchronizacny kod Pulse Clock",
    pravda: "Sync24 / DIN Sync pouziva 5-pinovy konektor DIN a signaly Clock (0 a 5 V), Start/Stop, pripadne Reset.",
    nepravda: "Sync24 / DIN Sync pouziva kmitoctove klucovanie 1 kHz / 2 kHz nahrane na magneticku pasku."
  },
  {
    id: "HEL 3. FSK 001",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Synchronizacny kod FSK",
    pravda: "FSK (Frequency Shift Keying) koduje impulzy Pulse Clock kmitoctovym klucovanim 1 kHz / 2 kHz, je odolnejsi voci sumu a da sa nahrat na pasku.",
    nepravda: "FSK koduje impulzy Pulse Clock priamo ako jednosmerne napatove urovne 0 a 5 V na DIN konektore."
  },
  {
    id: "HEL 3. FSK 002",
    oblast: "Sekvencery a synchronizacia",
    podoblast: "Synchronizacny kod FSK",
    pravda: "Pulse Clock je relativny kod, kym FSK 2, Smart FSK a Tape Sync II koduju aj absolutnu poziciu v skladbe.",
    nepravda: "Pulse Clock koduje absolutnu poziciu v skladbe, kym FSK koduje iba relativne impulzy bez pozicie."
  },

  // ===== Oblast 4: Bicie a basove automaty =====
  {
    id: "HEL 3. Bici automat 001",
    oblast: "Bicie a basove automaty",
    podoblast: "Struktura biciho automatu",
    pravda: "Bici automat je syntezator zvukov bicich nastrojov alebo basy, spustanych signalom Trig z krokoveho sekvencera alebo klaviatury.",
    nepravda: "Bici automat je iba prehravac hotovych sluciek z pamate bez akehokolvek spustania signalom Trig."
  },
  {
    id: "HEL 3. Bici automat 002",
    oblast: "Bicie a basove automaty",
    podoblast: "Struktura biciho automatu",
    pravda: "V bicom automate citac cez delic kmitoctu a multiplexer postupne vybera kroky frazy, ktorych vystupy sa mixuju a budia generatory zvukov.",
    nepravda: "V bicom automate sa vsetky zvuky spustaju naraz jednym Trig impulzom bez krokoveho vyberu."
  },
  {
    id: "HEL 3. Bici automat 003",
    oblast: "Bicie a basove automaty",
    podoblast: "Struktura biciho automatu",
    pravda: "Skore bicie automaty (TR-77, CR-78) pouzivali analogovu syntezu, neskorsie (LM-1) uz prehravali samply.",
    nepravda: "Vsetky bicie automaty od zaciatku pouzivali vylucne prehravanie samplov, analogova synteza sa nepouzivala."
  },
  {
    id: "HEL 3. Synteza bicich 001",
    oblast: "Bicie a basove automaty",
    podoblast: "Analogova synteza bicich",
    pravda: "Analogova synteza bicich je amplitudova modulacia sumoveho alebo tonoveho signalu obalkou prechodneho deja.",
    nepravda: "Analogova synteza bicich je frekvencna modulacia nosneho signalu pomalym LFO."
  },
  {
    id: "HEL 3. Synteza bicich 002",
    oblast: "Bicie a basove automaty",
    podoblast: "Analogova synteza bicich",
    pravda: "Pri synteze bicich sa zo signalu Trig obvodom hold vytvori pravouhly impulz, ktory po priechode integracnym alebo derivacnym clankom tvaruje obalku.",
    nepravda: "Pri synteze bicich sa signal Trig privadza priamo na reproduktor bez tvarovania obalky."
  },
  {
    id: "HEL 3. Synteza bicich 003",
    oblast: "Bicie a basove automaty",
    podoblast: "Analogova synteza bicich",
    pravda: "Basovy bubon mozno syntetizovat ako harmonicky signal (pripadne tlmeny oscilator) modulovany obalkou a filtrovany dolnou priepustou.",
    nepravda: "Basovy bubon mozno syntetizovat iba ako biely sum modulovany hornou priepustou."
  }
];

const helSkuska3CrackOtazky = helSkuska3CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 3. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 3",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

helOtazky.push(...helSkuska3CrackOtazky);

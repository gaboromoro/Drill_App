const helSkuska2CrackData = [
  // ===== Oblast 1: Riadiace signaly a prepojenie modulov =====
  {
    id: "HEL 2. Riadiace signaly cv 001",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Riadiace signaly (CV, Gate, Trig, Clock)",
    pravda: "Control Voltage (CV) je riadiace napatie, ktoreho velkost zodpoveda vyske stlacenej klavesy alebo hodnote parametra.",
    nepravda: "Control Voltage (CV) je kratky impulz, ktory iba indikuje stlacenie klavesy bez informacie o jej vyske."
  },
  {
    id: "HEL 2. Riadiace signaly cv 002",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Riadiace signaly (CV, Gate, Trig, Clock)",
    pravda: "Pri linearnom CV (V/Hz) je konstantny prirastok napatia na 1 Hz, pri exponencialnom (V/okt) konstantny prirastok napatia na oktavu.",
    nepravda: "Pri linearnom CV (V/Hz) je konstantny prirastok napatia na oktavu, pri exponencialnom (V/okt) na 1 Hz."
  },
  {
    id: "HEL 2. Riadiace signaly gate 001",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Riadiace signaly (CV, Gate, Trig, Clock)",
    pravda: "Gate je stavovy signal indikujuci drzanie klavesy (kludovy stav log. 0, aktivny stav log. 1).",
    nepravda: "Gate je kratky impulz vznikajuci iba v okamihu stlacenia a uvolnenia klavesy."
  },
  {
    id: "HEL 2. Riadiace signaly trig 001",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Riadiace signaly (CV, Gate, Trig, Clock)",
    pravda: "Trig je signal indikujuci stlacenie a uvolnenie klavesy kratkym impulzom.",
    nepravda: "Trig je stavovy signal, ktory trva po celu dobu drzania klavesy."
  },
  {
    id: "HEL 2. Riadiace signaly clock 001",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Riadiace signaly (CV, Gate, Trig, Clock)",
    pravda: "Clock je periodicky impulzny signal, ktoreho kmitocet sa udava v impulzoch (tikoch) za stvrtovu notu (PPQN).",
    nepravda: "Clock je riadiace napatie, ktoreho velkost zodpoveda vyske stlacenej klavesy."
  },
  {
    id: "HEL 2. Prepojenie zdroje 001",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Zdroje a prepojenie riadiacich signalov",
    pravda: "Klaviatura dodava CV pre VCO (vyska tonu) a cez sledovac aj pre VCF, a signalom Gate spusta generatory obalky.",
    nepravda: "Klaviatura dodava iba audio signal a neriadi VCO ani generatory obalky."
  },
  {
    id: "HEL 2. Prepojenie zdroje 002",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Zdroje a prepojenie riadiacich signalov",
    pravda: "LFO riadi VCO (vibrato, PWM), VCA (tremolo) a VCF (dynamicky filter).",
    nepravda: "LFO sluzi iba ako hlavny audio zdroj a neriadi VCO, VCA ani VCF."
  },
  {
    id: "HEL 2. Prepojenie zdroje 003",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Zdroje a prepojenie riadiacich signalov",
    pravda: "Generator obalky (EG) typicky riadi VCA, pripadne VCF a VCO.",
    nepravda: "Generator obalky (EG) generuje audio signal, ktory sa privadza na vstup VCF."
  },
  {
    id: "HEL 2. Prepojenie zdroje 004",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Zdroje a prepojenie riadiacich signalov",
    pravda: "Zdrojom hodinovych signalov je clock generator, ktory riadi sekvencer.",
    nepravda: "Zdrojom hodinovych signalov je VCF, ktory riadi sekvencer."
  },
  {
    id: "HEL 2. Moduly prehlad 001",
    oblast: "Riadiace signaly a prepojenie modulov",
    podoblast: "Zakladne moduly",
    pravda: "Medzi zakladne moduly syntezatora patria VCO, NG, VCF, VCA, LFO, EG, sekvencer, mixer a S&H.",
    nepravda: "Jedinymi modulmi analogoveho syntezatora su VCO a reproduktor, ostatne bloky su vzdy digitalne."
  },

  // ===== Oblast 2: Riadiace obvody =====
  {
    id: "HEL 2. Klaviatura 001",
    oblast: "Riadiace obvody",
    podoblast: "Klaviatura a CV",
    pravda: "Klaviatura vytvara CV odporovym delicom s odbockami a uplatnuje prioritu najvyssej alebo najnizsej klavesy.",
    nepravda: "Klaviatura vytvara CV nezavisle od stlacenej klavesy, vzdy s rovnakou hodnotou napatia."
  },
  {
    id: "HEL 2. Klaviatura 002",
    oblast: "Riadiace obvody",
    podoblast: "Klaviatura a CV",
    pravda: "Hradlovy signal Gate sa na klaviature odvodzuje komparatorom z CV.",
    nepravda: "Hradlovy signal Gate sa na klaviature odvodzuje integracnym clankom z audio signalu."
  },
  {
    id: "HEL 2. Klaviatura 003",
    oblast: "Riadiace obvody",
    podoblast: "Klaviatura a CV",
    pravda: "Spustaci signal Trig sa odvodzuje monostabilnym klopnym obvodom z Gate.",
    nepravda: "Spustaci signal Trig sa odvodzuje odporovym delicom priamo z CV."
  },
  {
    id: "HEL 2. Portamento 001",
    oblast: "Riadiace obvody",
    podoblast: "Portamento",
    pravda: "Portamento je plynule preladenie tonu z jednej vysky na inu, realizovane filtraciou CV integracnym clankom s nastavitelnou casovou konstantou.",
    nepravda: "Portamento je skokova zmena vysky tonu, realizovana komparatorom napatia CV."
  },
  {
    id: "HEL 2. Sledovac 001",
    oblast: "Riadiace obvody",
    podoblast: "Sledovac klaviatury",
    pravda: "Sledovac klaviatury je obvod, ktoreho vystupne napatie je priamo umerne vyske stlacenej klavesy.",
    nepravda: "Sledovac klaviatury je obvod, ktoreho vystupne napatie je priamo umerne sile uderu (velocity)."
  },
  {
    id: "HEL 2. Sledovac 002",
    oblast: "Riadiace obvody",
    podoblast: "Sledovac klaviatury",
    pravda: "Sledovac klaviatury nastavuje medzny kmitocet VCF podla vysky tonu tak, aby sa pomer f0:fC nemenil a nemenila sa barva.",
    nepravda: "Sledovac klaviatury drzi medzny kmitocet VCF pevne, takze barva zvuku sa s vyskou tonu meni."
  },
  {
    id: "HEL 2. Polyfonia 001",
    oblast: "Riadiace obvody",
    podoblast: "Polyfonna klaviatura",
    pravda: "Neobmedzena polyfonia znamena, ze pocet VCO je rovnaky ako pocet klaves; dosahuju ju iba nastroje s generatorom hornej oktavy a delenim kmitoctu.",
    nepravda: "Neobmedzena polyfonia znamena, ze jediny VCO sa dynamicky prepina medzi vsetkymi stlacenymi klavesami."
  },
  {
    id: "HEL 2. Polyfonia 002",
    oblast: "Riadiace obvody",
    podoblast: "Polyfonna klaviatura",
    pravda: "Pri polyfonii N hlasov je k dispozicii N VCO, ktore sa dynamicky priradzuju stlacenym klavesam.",
    nepravda: "Pri polyfonii N hlasov je k dispozicii jediny VCO, ktory zni vo vsetkych N hlasoch naraz."
  },
  {
    id: "HEL 2. Polyfonia 003",
    oblast: "Riadiace obvody",
    podoblast: "Polyfonna klaviatura",
    pravda: "VCO moze byt pevne priradeny skupine klaves s prioritou, alebo priradeny vyske tonu v skupine znejucich tonov (narocnejsia logika).",
    nepravda: "VCO musi byt vzdy priradeny vsetkym klavesam sucasne bez akejkolvek logiky priority."
  },
  {
    id: "HEL 2. Polyfonia 004",
    oblast: "Riadiace obvody",
    podoblast: "Polyfonna klaviatura",
    pravda: "Ak su vsetky VCO obsadene a stlaci sa dalsia klavesa, nova nota sa bud ignoruje, alebo sa od VCO odpoji najnizsia, najvyssia ci prva stlacena klavesa.",
    nepravda: "Ak su vsetky VCO obsadene a stlaci sa dalsia klavesa, nastroj sa restartuje a vypne vsetky znejuce tony."
  },
  {
    id: "HEL 2. LFO 001",
    oblast: "Riadiace obvody",
    podoblast: "Nizkofrekvencny oscilator a S&H",
    pravda: "LFO je generator periodickych priebehov CV s kmitoctom od desatin do desiatok Hz.",
    nepravda: "LFO je generator audio signalu s kmitoctom v rozsahu desiatok az tisicok Hz."
  },
  {
    id: "HEL 2. LFO 002",
    oblast: "Riadiace obvody",
    podoblast: "Nizkofrekvencny oscilator a S&H",
    pravda: "Typicke priebehy LFO su sinus, pila, trojuholnik, obdlznik a nahodny priebeh sample&hold.",
    nepravda: "LFO dokaze generovat iba sinusovy priebeh, ine tvary nie su mozne."
  },
  {
    id: "HEL 2. LFO 003",
    oblast: "Riadiace obvody",
    podoblast: "Nizkofrekvencny oscilator a S&H",
    pravda: "LFO moze mat fazovy posun na vzajomne rozladenie viacerych LFO a moze byt resetovany signalom Trig z klaviatury.",
    nepravda: "LFO nemozno fazovo posunut ani resetovat, bezi vzdy nezavisle od klaviatury."
  },
  {
    id: "HEL 2. LFO 004",
    oblast: "Riadiace obvody",
    podoblast: "Nizkofrekvencny oscilator a S&H",
    pravda: "S&H (Sample and Hold) vzorkuje napatie analogoveho signalu a drzi jeho hodnotu konstantnu pomocou naboja na kondenzatore.",
    nepravda: "S&H (Sample and Hold) priebezne sleduje vstupny signal a jeho hodnotu nikdy nedrzi konstantnu."
  },
  {
    id: "HEL 2. EG 001",
    oblast: "Riadiace obvody",
    podoblast: "Generator obalky (EG)",
    pravda: "EG je generator po castiach monotonneho priebehu, spustany a zastavovany signalom Gate z klaviatury.",
    nepravda: "EG je periodicky oscilator, ktory generuje obalku nezavisle od stlacenia klavesy."
  },
  {
    id: "HEL 2. EG 002",
    oblast: "Riadiace obvody",
    podoblast: "Generator obalky (EG)",
    pravda: "Podla riadeneho obvodu rozlisujeme PEG (kmitocet oscilatorov), FEG (medzny kmitocet filtra) a AEG (priebeh amplitudy).",
    nepravda: "PEG, FEG a AEG su tri rozne audio oscilatory, ktorych vystupy sa scitavaju do vysledneho zvuku."
  },
  {
    id: "HEL 2. EG 003",
    oblast: "Riadiace obvody",
    podoblast: "Generator obalky (EG)",
    pravda: "Pri obalke ADSR dosiahne parameter za cas Attack maximum, za Decay klesne na Sustain drzany do uvolnenia klavesy a za Release klesne na nulu.",
    nepravda: "Pri obalke ADSR parameter pocas drzania klavesy rovnomerne rastie a po uvolneni skokovo klesne na nulu."
  },
  {
    id: "HEL 2. EG 004",
    oblast: "Riadiace obvody",
    podoblast: "Generator obalky (EG)",
    pravda: "Sustain je uroven drzana pocas drzania klavesy, kym Attack, Decay a Release su casove segmenty obalky.",
    nepravda: "Sustain je casovy segment obalky, kym Attack, Decay a Release urcuju urovne napatia."
  },
  {
    id: "HEL 2. EG 005",
    oblast: "Riadiace obvody",
    podoblast: "Generator obalky (EG)",
    pravda: "V rezime retrigger spusta kazda nova klavesa svoju obalku od zaciatku, v rezime legato (single-trigger) zacina novy ton na urovni Sustain.",
    nepravda: "V rezime retrigger zacina kazda nova klavesa na urovni Sustain, v rezime legato sa obalka vzdy spusta od zaciatku."
  },

  // ===== Oblast 3: Zapojenie modulov, modularne systemy a Eurorack =====
  {
    id: "HEL 2. Struktura 001",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Modularne vs pevna struktura",
    pravda: "Modularny syntezator nema pevnu strukturu, jeho zapojenie je dane prepojenim modulov kablami.",
    nepravda: "Modularny syntezator ma pevnu strukturu, ktoru nemozno menit prepojenim modulov."
  },
  {
    id: "HEL 2. Struktura 002",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Modularne vs pevna struktura",
    pravda: "Syntezator s pevnou strukturou ma kompaktnu konstrukciu s pevne prepojenymi blokmi.",
    nepravda: "Syntezator s pevnou strukturou sa zapaja vylucne kablami na celnom paneli."
  },
  {
    id: "HEL 2. Struktura 003",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Modularne vs pevna struktura",
    pravda: "East Coast koncepcia (Moog) je subtraktivna s jednoduchymi oscilatormi a klaviaturou, West Coast (Buchla) stavia na waveshapingu, FM a sekvenceri.",
    nepravda: "East Coast koncepcia (Moog) stavia na waveshapingu a FM, West Coast (Buchla) je subtraktivna s klaviaturou."
  },
  {
    id: "HEL 2. Formaty 001",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Modularne formaty",
    pravda: "Modularne moduly maju standardnu velkost, konektory a napajanie a ich rozmery vychadzaju z 19-palcoveho rackoveho systemu.",
    nepravda: "Modularne moduly nemaju ziadny standard rozmerov ani napajania, kazdy vyrobca pouziva vlastny."
  },
  {
    id: "HEL 2. Formaty 002",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Modularne formaty",
    pravda: "Medzi modularne formaty patria 6U Wiard, 5U Moog/Modcan, 4U Serge a 3U Eurorack.",
    nepravda: "Jedinym existujucim modularnym formatom je Eurorack, ine velkosti neexistuju."
  },
  {
    id: "HEL 2. Eurorack 001",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Eurorack",
    pravda: "Eurorack zaviedol Dieter Doepfer v roku 1990; moduly maju vysku 3U a sirku v nasobkoch 1 HP.",
    nepravda: "Eurorack zaviedol Robert Moog v 60. rokoch; moduly maju vysku 5U a sirku v celych palcoch."
  },
  {
    id: "HEL 2. Eurorack 002",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Eurorack",
    pravda: "Eurorack pouziva na celnom paneli konektory 1/8 palca TS (3,5 mm mono jack).",
    nepravda: "Eurorack pouziva na celnom paneli konektory 1/4 palca TRS (6,3 mm stereo jack)."
  },
  {
    id: "HEL 2. Eurorack 003",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Eurorack",
    pravda: "Eurorack pouziva normu CV 1 V na oktavu a signal Gate s urovnami 0 a 5 V.",
    nepravda: "Eurorack pouziva normu CV 1 V na 1 Hz a signal Gate s urovnami 0 a 15 V."
  },
  {
    id: "HEL 2. Pevna struktura 001",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Pevna struktura",
    pravda: "Typicka pevna struktura ma pevne prepojene bloky vo variante VCO - VCF - VCA, casto doplnene RM, AM a FM dvojice VCO.",
    nepravda: "Typicka pevna struktura nepouziva VCF ani VCA, signal ide z VCO priamo na vystup."
  },
  {
    id: "HEL 2. Pevna struktura 002",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Pevna struktura",
    pravda: "V pevnej strukture mozu byt riadiace obvody pevne pridelene, volne priraditelne prepinacmi alebo cez modulacnu maticu.",
    nepravda: "V pevnej strukture su riadiace obvody vzdy prepojene iba kablami na celnom paneli."
  },
  {
    id: "HEL 2. Pomocne obvody 001",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Pomocne obvody",
    pravda: "Mixer je sumacny zosilnovac s nastavitelnym zosilnenim jednotlivych vetiev.",
    nepravda: "Mixer rozvetvuje jeden vstup do viacerych vystupov s nastavitelnou hlbkou modulacie."
  },
  {
    id: "HEL 2. Pomocne obvody 002",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Pomocne obvody",
    pravda: "Modulacna matica rozvetvuje jeden vstup do viacerych vystupov s nastavitelnou hlbkou modulacie.",
    nepravda: "Modulacna matica scituje viacero audio signalov do jedneho vystupneho signalu."
  },
  {
    id: "HEL 2. Pomocne obvody 003",
    oblast: "Zapojenie modulov, modularne systemy a Eurorack",
    podoblast: "Pomocne obvody",
    pravda: "Trigger sa realizuje monostabilnym klopnym obvodom, generator hodinovych impulzov bistabilnym klopnym obvodom a delicom kmitoctu.",
    nepravda: "Trigger aj generator hodinovych impulzov sa realizuju odporovym delicom napatia."
  }
];

const helSkuska2CrackOtazky = helSkuska2CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 2. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 2",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

helOtazky.push(...helSkuska2CrackOtazky);

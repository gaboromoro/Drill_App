const helSkuska7CrackData = [
  // ===== Oblast: Hardware MIDI =====
  {
    id: "HEL 7. Hardware konektory 001",
    oblast: "Hardware MIDI",
    podoblast: "Konektory",
    pravda: "MIDI rozhranie ma tri 5-pinove konektory DIN 180 stupnov: In, Out a Thru.",
    nepravda: "MIDI rozhranie ma tri 5-pinove konektory DIN 180 stupnov: In, Out a Merge."
  },
  {
    id: "HEL 7. Hardware konektory 002",
    oblast: "Hardware MIDI",
    podoblast: "Konektory",
    pravda: "Konektor In privadza vstupne data, Out vysiela data generovane zariadenim a Thru kopiruje data prijate na vstupe In.",
    nepravda: "Konektor In privadza vstupne data, Out kopiruje data prijate na vstupe a Thru vysiela data generovane zariadenim."
  },
  {
    id: "HEL 7. Hardware konektory 003",
    oblast: "Hardware MIDI",
    podoblast: "Konektory",
    pravda: "V MIDI kabli su zapojene piny 2, 4 a 5, pricom pin 2 je tienenie, a maximalna dlzka kabla je 15 m.",
    nepravda: "V MIDI kabli su zapojene vsetky piny 1 az 5 a maximalna dlzka kabla je 50 m."
  },
  {
    id: "HEL 7. Hardware signal 001",
    oblast: "Hardware MIDI",
    podoblast: "Signal a ramec",
    pravda: "MIDI pouziva 5 mA prudovu slucku, kde logickej nule zodpoveda pretekajuci prud.",
    nepravda: "MIDI pouziva 5 mA prudovu slucku, kde logickej jednotke zodpoveda pretekajuci prud."
  },
  {
    id: "HEL 7. Hardware signal 002",
    oblast: "Hardware MIDI",
    podoblast: "Signal a ramec",
    pravda: "MIDI prenasa data asynchronne rychlostou 31,25 kBaudu s toleranciou +-1 %.",
    nepravda: "MIDI prenasa data synchronne rychlostou 31,25 kBaudu s toleranciou +-1 %."
  },
  {
    id: "HEL 7. Hardware signal 003",
    oblast: "Hardware MIDI",
    podoblast: "Signal a ramec",
    pravda: "MIDI ramec ma 1 startbit, 8 datovych bitov a 1 stopbit a trva 320 mikrosekund.",
    nepravda: "MIDI ramec ma 1 startbit, 7 datovych bitov a 2 stopbity a trva 320 mikrosekund."
  },
  {
    id: "HEL 7. Hardware signal 004",
    oblast: "Hardware MIDI",
    podoblast: "Signal a ramec",
    pravda: "Vstup MIDI je galvanicky oddeleny optoizolatorom s dobou reakcie pod 2 mikrosekundy.",
    nepravda: "Vystup MIDI je galvanicky oddeleny optoizolatorom s dobou reakcie pod 2 mikrosekundy."
  },
  {
    id: "HEL 7. Hardware signal 005",
    oblast: "Hardware MIDI",
    podoblast: "Signal a ramec",
    pravda: "Prenosova rychlost MIDI je pevne stanovena na 31,25 kbit/s a datovy tok je na nu stale taktovany.",
    nepravda: "Prenosova rychlost MIDI sa automaticky prisposobuje mnozstvu prenasanych dat az do 38,4 kbit/s."
  },

  // ===== Oblast: Struktura protokolu =====
  {
    id: "HEL 7. Protokol byte 001",
    oblast: "Struktura protokolu",
    podoblast: "Stavovy a datovy byte",
    pravda: "MIDI sprava sa sklada z jedneho stavoveho bytu a niekolkych datovych bytov, ktorych pocet zavisi od typu spravy.",
    nepravda: "MIDI sprava sa sklada z jedneho datoveho bytu a niekolkych stavovych bytov, ktorych pocet zavisi od typu spravy."
  },
  {
    id: "HEL 7. Protokol byte 002",
    oblast: "Struktura protokolu",
    podoblast: "Stavovy a datovy byte",
    pravda: "Najvyznamnejsi bit rozlisuje stavovy byte (MSb=1) od datoveho bytu (MSb=0).",
    nepravda: "Najvyznamnejsi bit rozlisuje stavovy byte (MSb=0) od datoveho bytu (MSb=1)."
  },
  {
    id: "HEL 7. Protokol byte 003",
    oblast: "Struktura protokolu",
    podoblast: "Stavovy a datovy byte",
    pravda: "V stavovom byte kanalovej spravy hornu cast tvori identifikator typu spravy a dolne 4 bity urcuju cislo MIDI kanala.",
    nepravda: "V stavovom byte kanalovej spravy hornu cast tvori cislo MIDI kanala a dolne 4 bity urcuju identifikator typu spravy."
  },
  {
    id: "HEL 7. Protokol byte 004",
    oblast: "Struktura protokolu",
    podoblast: "Stavovy a datovy byte",
    pravda: "Datovy byte nesie 7-bitovu hodnotu v rozsahu 0 az 127.",
    nepravda: "Datovy byte nesie 8-bitovu hodnotu v rozsahu 0 az 255."
  },
  {
    id: "HEL 7. Protokol typy 001",
    oblast: "Struktura protokolu",
    podoblast: "Typy sprav",
    pravda: "Kanalove spravy maju v stavovom byte vyhradene 4 bity pre cislo virtualneho kanala.",
    nepravda: "Kanalove spravy maju v stavovom byte vyhradene 4 bity pre cislo programu."
  },
  {
    id: "HEL 7. Protokol typy 002",
    oblast: "Struktura protokolu",
    podoblast: "Typy sprav",
    pravda: "Systemove spravy su spolocne pre vsetky kanaly a dolne 4 bity stavoveho bytu urcuju typ systemovej spravy.",
    nepravda: "Systemove spravy su urcene jednemu kanalu a dolne 4 bity stavoveho bytu urcuju cislo tohto kanala."
  },
  {
    id: "HEL 7. Protokol typy 003",
    oblast: "Struktura protokolu",
    podoblast: "Typy sprav",
    pravda: "Systemove data sa delia na zvlastne, spolocne a data realneho casu.",
    nepravda: "Systemove data sa delia na hlasove, kanalove a data realneho casu."
  },
  {
    id: "HEL 7. Protokol priebezny 001",
    oblast: "Struktura protokolu",
    podoblast: "Priebezny stav",
    pravda: "Pri priebeznom stave sa pri nezmenenom stavovom byte vysielaju len datove byty, cim sa zvysuje priepustnost zbernice.",
    nepravda: "Pri priebeznom stave sa pri nezmenenom stavovom byte vysiela stavovy byte opakovane, cim sa zvysuje priepustnost zbernice."
  },
  {
    id: "HEL 7. Protokol priebezny 002",
    oblast: "Struktura protokolu",
    podoblast: "Priebezny stav",
    pravda: "Sprava Note On s hodnotou velocity 0 sa povazuje za Note Off, co umoznuje vyuzit priebezny stav.",
    nepravda: "Sprava Note Off s hodnotou velocity 0 sa povazuje za Note On, co umoznuje vyuzit priebezny stav."
  },
  {
    id: "HEL 7. Protokol rezimy 001",
    oblast: "Struktura protokolu",
    podoblast: "Kanalove rezimy",
    pravda: "Nastavenie OMNI ON/OFF urcuje, ci nastroj prijima data na vsetkych kanaloch alebo len na zakladnom kanale N.",
    nepravda: "Nastavenie OMNI ON/OFF urcuje, ci nastroj hra polyfonne alebo monofonne."
  },
  {
    id: "HEL 7. Protokol rezimy 002",
    oblast: "Struktura protokolu",
    podoblast: "Kanalove rezimy",
    pravda: "Nastavenie MONO/POLY urcuje, ci ma polyfonny nastroj hrat monofonne alebo polyfonne.",
    nepravda: "Nastavenie MONO/POLY urcuje, ci nastroj prijima data na vsetkych kanaloch alebo len na jednom."
  },
  {
    id: "HEL 7. Protokol rezimy 003",
    oblast: "Struktura protokolu",
    podoblast: "Kanalove rezimy",
    pravda: "V rezime 4 (Omni Off, Mono) su kanalove spravy prijimane na kanaloch N az N+M-1 a priradene monofonne hlasom 1 az M.",
    nepravda: "V rezime 4 (Omni Off, Mono) su kanalove spravy prijimane len na kanale N a priradene polyfonne vsetkym hlasom."
  },
  {
    id: "HEL 7. Protokol priorita 001",
    oblast: "Struktura protokolu",
    podoblast: "Priorita dat",
    pravda: "Najvyssiu prioritu na MIDI zbernici ma resetovanie systemu, hned za nim data realneho casu.",
    nepravda: "Najvyssiu prioritu na MIDI zbernici maju kanalove data, hned za nimi data realneho casu."
  },
  {
    id: "HEL 7. Protokol priorita 002",
    oblast: "Struktura protokolu",
    podoblast: "Priorita dat",
    pravda: "Kanalove data maju na MIDI zbernici najnizsiu prioritu zo vsetkych typov dat.",
    nepravda: "Kanalove data maju na MIDI zbernici najvyssiu prioritu zo vsetkych typov dat."
  },

  // ===== Oblast: Kanalove data =====
  {
    id: "HEL 7. Kanalove prehlad 001",
    oblast: "Kanalove data",
    podoblast: "Prehlad sprav",
    pravda: "Pre identifikator typu kanalovej spravy su v stavovom byte 3 bity, vyuzitych je 7 z 8 moznosti.",
    nepravda: "Pre identifikator typu kanalovej spravy su v stavovom byte 4 bity, vyuzitych je vsetkych 16 moznosti."
  },
  {
    id: "HEL 7. Kanalove prehlad 002",
    oblast: "Kanalove data",
    podoblast: "Prehlad sprav",
    pravda: "Spravy Program Change a Channel Pressure obsahuju iba jeden datovy byte.",
    nepravda: "Spravy Program Change a Channel Pressure obsahuju dva datove byty."
  },
  {
    id: "HEL 7. Kanalove prehlad 003",
    oblast: "Kanalove data",
    podoblast: "Prehlad sprav",
    pravda: "Spravy Note On, Note Off, Poly Key Pressure, Control Change a Pitch Bend obsahuju dva datove byty.",
    nepravda: "Spravy Note On, Note Off, Poly Key Pressure, Control Change a Pitch Bend obsahuju jeden datovy byte."
  },
  {
    id: "HEL 7. Kanalove prehlad 004",
    oblast: "Kanalove data",
    podoblast: "Prehlad sprav",
    pravda: "Stavovy byte Note On je $9n a Note Off je $8n, kde n je cislo kanala.",
    nepravda: "Stavovy byte Note On je $8n a Note Off je $9n, kde n je cislo kanala."
  },
  {
    id: "HEL 7. Kanalove note 001",
    oblast: "Kanalove data",
    podoblast: "Note On Off a velocity",
    pravda: "Spravy Note On a Note Off nesu cislo noty a rychlostne data (velocity).",
    nepravda: "Spravy Note On a Note Off nesu cislo noty a cislo programu."
  },
  {
    id: "HEL 7. Kanalove note 002",
    oblast: "Kanalove data",
    podoblast: "Note On Off a velocity",
    pravda: "Cislo noty je 7-bitove v rozsahu 0 az 127, pricom jednociarkovane C ma hodnotu 60.",
    nepravda: "Cislo noty je 7-bitove v rozsahu 0 az 127, pricom jednociarkovane C ma hodnotu 0."
  },
  {
    id: "HEL 7. Kanalove note 003",
    oblast: "Kanalove data",
    podoblast: "Note On Off a velocity",
    pravda: "Velocity vyjadruje dynamiku zahranu rychlostou stlacenia klavesy.",
    nepravda: "Velocity vyjadruje dynamiku zahranu silou tlaku na uz stlacenu klavesu."
  },
  {
    id: "HEL 7. Kanalove aftertouch 001",
    oblast: "Kanalove data",
    podoblast: "Aftertouch",
    pravda: "Poly Key Pressure (Poly Aftertouch) nesie cislo noty aj hodnotu tlaku a vyuziva senzory pod kazdou klavesou.",
    nepravda: "Poly Key Pressure (Poly Aftertouch) nesie iba hodnotu tlaku a vyuziva jeden spolocny senzor pre celu klaviaturu."
  },
  {
    id: "HEL 7. Kanalove aftertouch 002",
    oblast: "Kanalove data",
    podoblast: "Aftertouch",
    pravda: "Channel Pressure (Channel Aftertouch) nesie jediny datovy byte a plati pre vsetky znejuce noty na danom kanale.",
    nepravda: "Channel Pressure (Channel Aftertouch) nesie dva datove byty a plati samostatne pre kazdu znejucu notu."
  },
  {
    id: "HEL 7. Kanalove aftertouch 003",
    oblast: "Kanalove data",
    podoblast: "Aftertouch",
    pravda: "Channel Aftertouch pouzivaju vysielace s jednym tlakovym senzorom, Poly Aftertouch vysielace s viacerymi senzormi.",
    nepravda: "Channel Aftertouch pouzivaju vysielace s viacerymi tlakovymi senzormi, Poly Aftertouch vysielace s jednym senzorom."
  },
  {
    id: "HEL 7. Kanalove program 001",
    oblast: "Kanalove data",
    podoblast: "Program Change a banky",
    pravda: "Sprava Program Change ma jeden datovy byte s cislom programu, teda sady nastaveni ovplyvnujucich zvuk.",
    nepravda: "Sprava Program Change ma dva datove byty s cislom banky a cislom programu."
  },
  {
    id: "HEL 7. Kanalove program 002",
    oblast: "Kanalove data",
    podoblast: "Program Change a banky",
    pravda: "Pri viac ako 128 programoch sa programy organizuju do bank po 128 a banky sa prepinaju dvojicou Bank Select (0 a 32).",
    nepravda: "Pri viac ako 128 programoch sa programy organizuju do bank po 64 a banky sa prepinaju kontrolerom Modulation (1)."
  },
  {
    id: "HEL 7. Kanalove program 003",
    oblast: "Kanalove data",
    podoblast: "Program Change a banky",
    pravda: "Po prijati Bank Select MSB prijimac nereaguje hned, ale caka na Bank Select LSB a nasledne Program Change.",
    nepravda: "Po prijati Bank Select MSB prijimac ihned prepne banku bez cakania na dalsie spravy."
  },
  {
    id: "HEL 7. Kanalove pitchbend 001",
    oblast: "Kanalove data",
    podoblast: "Pitch Bend",
    pravda: "Sprava Pitch Bend Change nesie 14-bitovu hodnotu relativnej zmeny vysky vsetkych znejucich tonov.",
    nepravda: "Sprava Pitch Bend Change nesie 7-bitovu hodnotu absolutnej vysky jedneho znejuceho tonu."
  },
  {
    id: "HEL 7. Kanalove pitchbend 002",
    oblast: "Kanalove data",
    podoblast: "Pitch Bend",
    pravda: "Rozsah ohybania tonu v poltonoch nie je sucastou spravy Pitch Bend, ale je nastaveny na zvukovom generatore.",
    nepravda: "Rozsah ohybania tonu v poltonoch je priamo zakodovany v kazdej sprave Pitch Bend."
  },

  // ===== Oblast: Kontrolery =====
  {
    id: "HEL 7. Kontrolery rozdelenie 001",
    oblast: "Kontrolery",
    podoblast: "Rozdelenie cisel",
    pravda: "Sprava Control Change obsahuje cislo kontrolera a jeho novu hodnotu, obe v rozsahu 0 az 127.",
    nepravda: "Sprava Control Change obsahuje cislo kontrolera 0 az 127 a hodnotu v rozsahu 0 az 16383."
  },
  {
    id: "HEL 7. Kontrolery rozdelenie 002",
    oblast: "Kontrolery",
    podoblast: "Rozdelenie cisel",
    pravda: "Kontrolery 0 az 31 su MSB spojitych kontrolerov a kontrolery 32 az 63 su ich zodpovedajuce LSB.",
    nepravda: "Kontrolery 0 az 31 su LSB spojitych kontrolerov a kontrolery 32 az 63 su ich zodpovedajuce MSB."
  },
  {
    id: "HEL 7. Kontrolery rozdelenie 003",
    oblast: "Kontrolery",
    podoblast: "Rozdelenie cisel",
    pravda: "Pri dvojici kontrolerov sa vysiela najprv MSB a potom LSB, a ak staci 128 hodnot, posiela sa len MSB.",
    nepravda: "Pri dvojici kontrolerov sa vysiela najprv LSB a potom MSB, a ak staci 128 hodnot, posiela sa len LSB."
  },
  {
    id: "HEL 7. Kontrolery rozdelenie 004",
    oblast: "Kontrolery",
    podoblast: "Rozdelenie cisel",
    pravda: "Kontrolery 120 az 127 su vyhradene pre povely, teda kanalove rezimove spravy.",
    nepravda: "Kontrolery 120 az 127 su vyhradene pre spojite zvukove parametre ako jas a rezonancia."
  },
  {
    id: "HEL 7. Kontrolery dvojbytove 001",
    oblast: "Kontrolery",
    podoblast: "Dvojbytove kontrolery",
    pravda: "Modulacne koliesko je kontroler cislo 1 a hlasitost kanala kontroler cislo 7.",
    nepravda: "Modulacne koliesko je kontroler cislo 7 a hlasitost kanala kontroler cislo 1."
  },
  {
    id: "HEL 7. Kontrolery dvojbytove 002",
    oblast: "Kontrolery",
    podoblast: "Dvojbytove kontrolery",
    pravda: "Pan (panorama) je kontroler cislo 10 a Expression kontroler cislo 11.",
    nepravda: "Pan (panorama) je kontroler cislo 11 a Expression kontroler cislo 10."
  },
  {
    id: "HEL 7. Kontrolery dvojbytove 003",
    oblast: "Kontrolery",
    podoblast: "Dvojbytove kontrolery",
    pravda: "Bank Select tvori dvojica kontrolerov 0 (MSB) a 32 (LSB).",
    nepravda: "Bank Select tvori dvojica kontrolerov 6 (MSB) a 38 (LSB)."
  },
  {
    id: "HEL 7. Kontrolery spinace 001",
    oblast: "Kontrolery",
    podoblast: "Spinace",
    pravda: "Sustain (damper pedal) je kontroler 64 a podrziava znejuce tony.",
    nepravda: "Sustain (damper pedal) je kontroler 66 a podrziava znejuce tony."
  },
  {
    id: "HEL 7. Kontrolery spinace 002",
    oblast: "Kontrolery",
    podoblast: "Spinace",
    pravda: "U spinacovych kontrolerov sa hodnota 0 az 63 berie ako vypnute a 64 az 127 ako zapnute.",
    nepravda: "U spinacovych kontrolerov sa hodnota 0 az 63 berie ako zapnute a 64 az 127 ako vypnute."
  },
  {
    id: "HEL 7. Kontrolery spinace 003",
    oblast: "Kontrolery",
    podoblast: "Spinace",
    pravda: "Sostenuto je kontroler 66 a Soft pedal kontroler 67.",
    nepravda: "Sostenuto je kontroler 67 a Soft pedal kontroler 66."
  },
  {
    id: "HEL 7. Kontrolery priebezne 001",
    oblast: "Kontrolery",
    podoblast: "Priebezne kontrolery",
    pravda: "Attack Time je kontroler 73 a Release Time kontroler 72.",
    nepravda: "Attack Time je kontroler 72 a Release Time kontroler 73."
  },
  {
    id: "HEL 7. Kontrolery priebezne 002",
    oblast: "Kontrolery",
    podoblast: "Priebezne kontrolery",
    pravda: "Kontroler 71 (Harmonic Content) najcastejsie meni medzni kmitocet filtra a kontroler 74 (Brightness) jeho rezonanciu.",
    nepravda: "Kontroler 71 (Harmonic Content) najcastejsie meni rezonanciu filtra a kontroler 74 (Brightness) jeho medzni kmitocet."
  },
  {
    id: "HEL 7. Kontrolery priebezne 003",
    oblast: "Kontrolery",
    podoblast: "Priebezne kontrolery",
    pravda: "Send level efektu Reverb je kontroler 91 a efektu Chorus kontroler 93.",
    nepravda: "Send level efektu Reverb je kontroler 93 a efektu Chorus kontroler 91."
  },
  {
    id: "HEL 7. Kontrolery rpn 001",
    oblast: "Kontrolery",
    podoblast: "RPN a NRPN",
    pravda: "RPN a NRPN riesia maly pocet kontrolerov a maly rozsah hodnot rozsirenim na 16384 parametrov a hodnoty 0 az 16383.",
    nepravda: "RPN a NRPN riesia malu prenosovu rychlost zbernice zvysenim taktu na 16384 kbit/s."
  },
  {
    id: "HEL 7. Kontrolery rpn 002",
    oblast: "Kontrolery",
    podoblast: "RPN a NRPN",
    pravda: "NRPN tvoria kontrolery 99 (MSB) a 98 (LSB), RPN kontrolery 101 (MSB) a 100 (LSB).",
    nepravda: "NRPN tvoria kontrolery 101 (MSB) a 100 (LSB), RPN kontrolery 99 (MSB) a 98 (LSB)."
  },
  {
    id: "HEL 7. Kontrolery rpn 003",
    oblast: "Kontrolery",
    podoblast: "RPN a NRPN",
    pravda: "Jedna dvojica RPN alebo NRPN zvoli cislo parametra a dvojica Data Entry (6 a 38) nastavi jeho hodnotu.",
    nepravda: "Jedna dvojica RPN alebo NRPN zvoli hodnotu parametra a dvojica Data Entry (6 a 38) zvoli jeho cislo."
  },
  {
    id: "HEL 7. Kontrolery rpn 004",
    oblast: "Kontrolery",
    podoblast: "RPN a NRPN",
    pravda: "Data Increment (96) a Decrement (97) menia hodnotu o +-1 z poslednej znamej hodnoty Data Entry a neobsahuju druhy datovy byte.",
    nepravda: "Data Increment (96) a Decrement (97) nastavuju absolutnu hodnotu parametra a obsahuju druhy datovy byte."
  },
  {
    id: "HEL 7. Kontrolery rpn 005",
    oblast: "Kontrolery",
    podoblast: "RPN a NRPN",
    pravda: "RPN su parametre registrovane normou, NRPN su neregistrovane a ich vyznam si urcuje vyrobca.",
    nepravda: "NRPN su parametre registrovane normou, RPN su neregistrovane a ich vyznam si urcuje vyrobca."
  },
  {
    id: "HEL 7. Kontrolery rpn 006",
    oblast: "Kontrolery",
    podoblast: "RPN a NRPN",
    pravda: "Rozsah ohybania tonu sa nastavuje registrovanym parametrom RPN 0/0 (Pitch Bend Range).",
    nepravda: "Rozsah ohybania tonu sa nastavuje neregistrovanym parametrom NRPN 0/0 (Pitch Bend Range)."
  },
  {
    id: "HEL 7. Kontrolery povely 001",
    oblast: "Kontrolery",
    podoblast: "Povely",
    pravda: "All Notes Off je kontroler 123 a vypne vsetky znejuce noty.",
    nepravda: "All Notes Off je kontroler 120 a vypne vsetky znejuce noty."
  },
  {
    id: "HEL 7. Kontrolery povely 002",
    oblast: "Kontrolery",
    podoblast: "Povely",
    pravda: "Reset All Controllers je kontroler 121 a Local Control kontroler 122.",
    nepravda: "Reset All Controllers je kontroler 122 a Local Control kontroler 121."
  },
  {
    id: "HEL 7. Kontrolery povely 003",
    oblast: "Kontrolery",
    podoblast: "Povely",
    pravda: "All Sounds Off (120) umlci zvuk okamzite, kym All Notes Off (123) ukonci noty, ktore mozu este doznievat podla obalky.",
    nepravda: "All Notes Off (123) umlci zvuk okamzite, kym All Sounds Off (120) nechava tony dlho doznievat podla obalky."
  },

  // ===== Oblast: Prepojenie MIDI =====
  {
    id: "HEL 7. Prepojenie zariadenia 001",
    oblast: "Prepojenie MIDI",
    podoblast: "Typy zariadeni",
    pravda: "Zvukove syntezatory bez klaviatury, ktore len prijimaju MIDI data, sa nazyvaju expandery.",
    nepravda: "Zvukove syntezatory bez klaviatury, ktore len vysielaju MIDI data, sa nazyvaju expandery."
  },
  {
    id: "HEL 7. Prepojenie zariadenia 002",
    oblast: "Prepojenie MIDI",
    podoblast: "Typy zariadeni",
    pravda: "Sekvencery a playery su zariadenia, ktore zaznamenavaju a prehravaju MIDI data.",
    nepravda: "Sekvencery a playery su zariadenia, ktore generuju zvukovy signal z prijatych MIDI dat."
  },
  {
    id: "HEL 7. Prepojenie topologia 001",
    oblast: "Prepojenie MIDI",
    podoblast: "Topologia a Thru Merge",
    pravda: "Kaskadna topologia retazi zariadenia cez konektor Thru, hviezdicova vyuziva Thru box.",
    nepravda: "Kaskadna topologia vyuziva Thru box, hviezdicova retazi zariadenia cez konektor Thru."
  },
  {
    id: "HEL 7. Prepojenie topologia 002",
    oblast: "Prepojenie MIDI",
    podoblast: "Topologia a Thru Merge",
    pravda: "Thru box rozvedie data z jedneho vstupu na viac vystupov, Merge box zluci data z viacerych vstupov do jedneho vystupu.",
    nepravda: "Thru box zluci data z viacerych vstupov do jedneho vystupu, Merge box rozvedie data z jedneho vstupu na viac vystupov."
  },
  {
    id: "HEL 7. Prepojenie topologia 003",
    oblast: "Prepojenie MIDI",
    podoblast: "Topologia a Thru Merge",
    pravda: "Funkcie Soft Thru a Soft Merge v sekvenceri umoznuju smerovat data z lubovolnych vstupov na lubovolne vystupy.",
    nepravda: "Funkcie Soft Thru a Soft Merge v sekvenceri umoznuju len pevne prepojenie jedneho vstupu na jeden vystup."
  },
  {
    id: "HEL 7. Prepojenie local 001",
    oblast: "Prepojenie MIDI",
    podoblast: "Lokalne riadenie",
    pravda: "Funkcia Local Off odpoji klaviaturu od interneho syntezatora, ktory je potom riadeny len cez MIDI In.",
    nepravda: "Funkcia Local Off odpoji MIDI In od interneho syntezatora, ktory je potom riadeny len z klaviatury."
  },
  {
    id: "HEL 7. Prepojenie local 002",
    oblast: "Prepojenie MIDI",
    podoblast: "Lokalne riadenie",
    pravda: "Pri pripojeni kombinovaneho nastroja k sekvenceru bez Local Off by sa kazda nota dorucila internemu syntezatoru dvakrat.",
    nepravda: "Pri pripojeni kombinovaneho nastroja k sekvenceru bez Local Off by sa kazda nota uplne stratila a nezaznela."
  }
];

const helSkuska7CrackOtazky = helSkuska7CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 7. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 7",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

helOtazky.push(...helSkuska7CrackOtazky);

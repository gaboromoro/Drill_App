const helSkuska8CrackData = [
  // ===== Oblast: Klaviatura nastroja =====
  {
    id: "HEL 8. Klaviatura info 001",
    oblast: "Klaviatura nastroja",
    podoblast: "Vysielane informacie",
    pravda: "Klaviatura digitalneho nastroja moze vysielat vysku noty, rychlostnu citlivost, tlakovu citlivost a polohovu citlivost.",
    nepravda: "Klaviatura digitalneho nastroja vysiela iba vysku noty a hlasitost, ine informacie nie su mozne."
  },
  {
    id: "HEL 8. Klaviatura info 002",
    oblast: "Klaviatura nastroja",
    podoblast: "Vysielane informacie",
    pravda: "Rychlostna citlivost (velocity) sa zistuje meranim casoveho intervalu medzi zopnutim dvoch kontaktov v roznej vyske pod klavesou.",
    nepravda: "Rychlostna citlivost (velocity) sa zistuje meranim tlaku na klavesu jednym senzorom pod klavesou."
  },
  {
    id: "HEL 8. Klaviatura info 003",
    oblast: "Klaviatura nastroja",
    podoblast: "Vysielane informacie",
    pravda: "Tlakova citlivost (aftertouch) sa sníma tlakovym senzorom az po stlaceni klavesy.",
    nepravda: "Tlakova citlivost (aftertouch) sa sníma rychlostou pohybu klavesy pri jej stlacani."
  },
  {
    id: "HEL 8. Klaviatura info 004",
    oblast: "Klaviatura nastroja",
    podoblast: "Vysielane informacie",
    pravda: "Polohova citlivost vyhodnocuje polohu klavesy, ktora nie je stlacena az do spodnej polohy, pomocou viacerych spinacov v roznej vyske.",
    nepravda: "Polohova citlivost vyhodnocuje silu prítlaku na uplne stlacenu klavesu pomocou jedineho tlakoveho senzora."
  },
  {
    id: "HEL 8. Klaviatura skenovanie 001",
    oblast: "Klaviatura nastroja",
    podoblast: "Skenovanie klaviatury",
    pravda: "Maticove skenovanie klaviatury pracuje na principe casoveho multiplexu, postupne sa testuju skupiny spinacov pod klavesami.",
    nepravda: "Maticove skenovanie klaviatury sníma vsetky spinace naraz samostatnym vodicom pre kazdu klavesu."
  },
  {
    id: "HEL 8. Klaviatura skenovanie 002",
    oblast: "Klaviatura nastroja",
    podoblast: "Skenovanie klaviatury",
    pravda: "Pri variante bez multiplexera procesor cez citac a n vystupov adresuje demultiplexer 1 z N a priklada log.1 postupne na kontakty, klaviatura sa oskenuje za N cyklov.",
    nepravda: "Pri variante bez multiplexera procesor adresuje demultiplexer 1 z N, ale klaviatura sa oskenuje v jedinom cykle bez ohladu na N."
  },
  {
    id: "HEL 8. Klaviatura skenovanie 003",
    oblast: "Klaviatura nastroja",
    podoblast: "Skenovanie klaviatury",
    pravda: "Pridanim multiplexera na zbernicu staci procesoru jeden vstup, no klaviatura sa oskenuje za N krat M cyklov.",
    nepravda: "Pridanim multiplexera na zbernicu staci procesoru jeden vstup a klaviatura sa oskenuje rychlejsie, za N delene M cyklov."
  },
  {
    id: "HEL 8. Klaviatura rychlost 001",
    oblast: "Klaviatura nastroja",
    podoblast: "Rychlostne snimace",
    pravda: "Rychlostny snimac tvoria dva spinace v roznej vyske pod klavesou, ide o zdvojeny obvod skenovania klaviatury.",
    nepravda: "Rychlostny snimac tvori jeden spinac pod klavesou doplneny o tlakovy senzor na povrchu klavesy."
  },
  {
    id: "HEL 8. Klaviatura rychlost 002",
    oblast: "Klaviatura nastroja",
    podoblast: "Rychlostne snimace",
    pravda: "Nizkej dynamike zodpoveda dlhy cas medzi zopnutim kontaktov a vysokej dynamike kratky cas.",
    nepravda: "Nizkej dynamike zodpoveda kratky cas medzi zopnutim kontaktov a vysokej dynamike dlhy cas."
  },
  {
    id: "HEL 8. Klaviatura mechaniky 001",
    oblast: "Klaviatura nastroja",
    podoblast: "Mechaniky",
    pravda: "Jednoduche spinacove klavesy bez rychlostneho snimania vysielaju pevnu hodnotu velocity 64.",
    nepravda: "Jednoduche spinacove klavesy bez rychlostneho snimania vysielaju vzdy maximalnu velocity 127."
  },
  {
    id: "HEL 8. Klaviatura mechaniky 002",
    oblast: "Klaviatura nastroja",
    podoblast: "Mechaniky",
    pravda: "Kladivkova mechanika napodobnuje cinnost kladivkovej mechaniky koncertneho kridla.",
    nepravda: "Kladivkova mechanika sa pouziva na elimináciu rychlostnej citlivosti a posiela len konstantnu dynamiku."
  },
  {
    id: "HEL 8. Klaviatura tlak 001",
    oblast: "Klaviatura nastroja",
    podoblast: "Tlakovy snimac",
    pravda: "Spolocny tlakovy senzor po celej klaviature vysiela spravu Channel Pressure, individualne senzory pod klavesami vysielaju Polyphonic Aftertouch.",
    nepravda: "Spolocny tlakovy senzor po celej klaviature vysiela Polyphonic Aftertouch, individualne senzory pod klavesami vysielaju Channel Pressure."
  },
  {
    id: "HEL 8. Klaviatura tlak 002",
    oblast: "Klaviatura nastroja",
    podoblast: "Tlakovy snimac",
    pravda: "FSR (Force Sensitive Resistor) ma klesajuci odpor s rastucou silou prítlaku a zapaja sa ako napatovy delic.",
    nepravda: "FSR (Force Sensitive Resistor) ma rastuci odpor s rastucou silou prítlaku a zapaja sa ako zdroj prudu."
  },
  {
    id: "HEL 8. Klaviatura kontrolery 001",
    oblast: "Klaviatura nastroja",
    podoblast: "Kontrolery klaviatury",
    pravda: "Koliesko ohybania tonu (Pitch Bender) vysiela spravu Pitch Bend Change, modulacne koliesko vysiela MIDI kontroler cislo 1.",
    nepravda: "Koliesko ohybania tonu (Pitch Bender) vysiela MIDI kontroler cislo 1, modulacne koliesko vysiela spravu Pitch Bend Change."
  },
  {
    id: "HEL 8. Klaviatura kontrolery 002",
    oblast: "Klaviatura nastroja",
    podoblast: "Kontrolery klaviatury",
    pravda: "Pitch Bender je koliesko s aretaciou v strede a pouziva 8 az 14-bitovy prevodnik.",
    nepravda: "Pitch Bender je koliesko bez aretacie a pouziva iba 1-bitovy spinaci prevodnik."
  },
  {
    id: "HEL 8. Klaviatura kontrolery 003",
    oblast: "Klaviatura nastroja",
    podoblast: "Kontrolery klaviatury",
    pravda: "Potenciometer hlasitosti na klaviature vysiela MIDI kontroler Main Volume cislo 7.",
    nepravda: "Potenciometer hlasitosti na klaviature vysiela MIDI kontroler Main Volume cislo 10."
  },

  // ===== Oblast: Snimanie analogovych prvkov =====
  {
    id: "HEL 8. Analog potenciometer 001",
    oblast: "Snimanie analogovych prvkov",
    podoblast: "Potenciometre a prevodnik",
    pravda: "Priebezny ovladaci prvok sa sníma potenciometrom zapojenym ako napatovy delic, napatie na jazdci cita A/D prevodnik s rozlisenim 8 az 12 bitov.",
    nepravda: "Priebezny ovladaci prvok sa sníma potenciometrom zapojenym ako napatovy delic, napatie na jazdci cita D/A prevodnik s rozlisenim 1 bit."
  },
  {
    id: "HEL 8. Analog potenciometer 002",
    oblast: "Snimanie analogovych prvkov",
    podoblast: "Potenciometre a prevodnik",
    pravda: "Pri vacsom pocte potenciometrov sa pouziva spolocna zbernica prevodnikov alebo procesorom prepinany multiplexer na vstupe prevodnika.",
    nepravda: "Pri vacsom pocte potenciometrov musi mat kazdy potenciometer vlastny procesor s vlastnou zbernicou."
  },
  {
    id: "HEL 8. Analog spinace 001",
    oblast: "Snimanie analogovych prvkov",
    podoblast: "Spinace",
    pravda: "Spinac sa sníma uzemnenim vstupu procesora (GPI) s potlacenim zakmitov, pri vacsom pocte spinacov sa pouzije maticove skenovanie ako u klaviatury.",
    nepravda: "Spinac sa sníma A/D prevodnikom s rozlisenim 12 bitov, maticove skenovanie sa u spinacov nepouziva."
  },

  // ===== Oblast: Otocne a posuvne ovladace =====
  {
    id: "HEL 8. Enkoder 001",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Rotacne enkodery",
    pravda: "Rotacny enkoder prevadza otacanie hriadela s optickym diskom na sekvenciu impulzov, ktorych kmitocet udava rychlost otacania.",
    nepravda: "Rotacny enkoder prevadza otacanie hriadela na jednosmerne napatie, ktoreho velkost udava rychlost otacania."
  },
  {
    id: "HEL 8. Enkoder 002",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Rotacne enkodery",
    pravda: "Smer otacania enkodera sa urci dvoma snimacmi posunutymi o stvrt periody podla toho, ci nabezna hrana kanala A pride pri stave kanala B log.1 alebo log.0.",
    nepravda: "Smer otacania enkodera sa urci jednym snimacom podla toho, ci je kmitocet impulzov vyssi alebo nizsi."
  },
  {
    id: "HEL 8. Enkoder 003",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Rotacne enkodery",
    pravda: "Svetlo z LED pred optickym diskom prechadza len okienkami disku a otacanim vznikaju svetelne impulzy snimane optickym snimacom.",
    nepravda: "Svetlo z LED pred optickym diskom je diskom uplne pohltene a impulzy vznikaju az mechanickym kontaktom hriadela."
  },
  {
    id: "HEL 8. Digipot 001",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Digitalne potenciometre",
    pravda: "Digitalny potenciometer je potenciometer s digitalnym vystupom realizovanym inkrementaciou/dekrementaciou alebo komparacnym A/D prevodnikom.",
    nepravda: "Digitalny potenciometer je potenciometer s analogovym vystupom bez akehokolvek prevodnika."
  },
  {
    id: "HEL 8. Digipot 002",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Motorizovany fader",
    pravda: "Motorizovany tahovy potenciometer poha lineary jednosmerny motor, smer sa voli polaritou a riadi sa z procesora cez H-mostik.",
    nepravda: "Motorizovany tahovy potenciometer poha krokovy motor, smer sa voli frekvenciou impulzov bez H-mostika."
  },
  {
    id: "HEL 8. Digipot 003",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Motorizovany fader",
    pravda: "Dotykova citlivost faderu (touch sensitivity) sa zistuje vodivym prepojenim plosok na jazdci.",
    nepravda: "Dotykova citlivost faderu (touch sensitivity) sa zistuje meranim tlaku prsta tlakovym senzorom FSR."
  },
  {
    id: "HEL 8. Hall 001",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Hallova sonda",
    pravda: "V Hallovom clanku preteka prud polovodivou dostickou a v magnetickom poli sa naboje preskupia na jednu stranu, cim vznikne Hallovo napatie.",
    nepravda: "V Hallovom clanku preteka prud polovodivou dostickou a v magnetickom poli sa naboje rovnomerne rozlozia, cim napatie zanikne."
  },
  {
    id: "HEL 8. Hall 002",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Hallova sonda",
    pravda: "Hallovo napatie je dane vztahom Uh = k I B, kde I je jednosmerny prud a B magneticka indukcia.",
    nepravda: "Hallovo napatie je dane vztahom Uh = k I / B, takze s rastucou magnetickou indukciou klesa."
  },
  {
    id: "HEL 8. Joystick 001",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Joystick a jog shuttle",
    pravda: "Jog&shuttle kombinuje otocny enkoder s aretovanym otocnym potenciometrom.",
    nepravda: "Jog&shuttle kombinuje dva nezavisle tahove potenciometre bez enkodera."
  },
  {
    id: "HEL 8. Joystick 002",
    oblast: "Otocne a posuvne ovladace",
    podoblast: "Joystick a jog shuttle",
    pravda: "Scratch pad je otocny enkoder bez definovanych krokov so zotrvacnostou.",
    nepravda: "Scratch pad je otocny potenciometer s pevnou aretaciou v strede dráhy."
  },

  // ===== Oblast: Dotykove a bezdotykove snimace =====
  {
    id: "HEL 8. Ribbon 001",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "Ribbon kontroler",
    pravda: "Ribbon kontroler urcuje polohu dotyku membranovym potenciometrom, teda linearnou odporovou drahou prepojenou kontaktom cez vodivu membranu.",
    nepravda: "Ribbon kontroler urcuje polohu dotyku optickym snimacom merajucim zatienenie svetla pozdlz drahy."
  },
  {
    id: "HEL 8. Ribbon 002",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "Ribbon kontroler",
    pravda: "Silu prítlaku na ribbon kontroleri urcuje samostatny prvok FSR.",
    nepravda: "Silu prítlaku na ribbon kontroleri urcuje samotna poloha jazdca membranoveho potenciometra."
  },
  {
    id: "HEL 8. Pad2D 001",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "2D dotykove plochy",
    pravda: "2D dotykova plocha je 2D membranovy potenciometer, polohu na jednej osi urci privedenim napatia na protilahle okraje, kym zvysne dva su nepripojene.",
    nepravda: "2D dotykova plocha je 2D membranovy potenciometer, polohu na jednej osi urci privedenim napatia na vsetky styri okraje sucasne."
  },
  {
    id: "HEL 8. Pad2D 002",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "2D dotykove plochy",
    pravda: "Prepinanie napatia medzi dvojicami protilahlych kontaktov 2D plochy treba vykonavat dostatocne rychlo, aby sa zistili obe suradnice.",
    nepravda: "Prepinanie napatia medzi dvojicami protilahlych kontaktov 2D plochy moze byt lubovolne pomale bez vplyvu na presnost."
  },
  {
    id: "HEL 8. Pady 001",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "Pady",
    pravda: "Pady su dosky citlive na silu, pripadne aj polohu uderu, a vyuzivaju rychlostne senzory (dva spinace) alebo FSR.",
    nepravda: "Pady su dosky citlive iba na polohu uderu a vyuzivaju vyhradne kapacitne snimanie."
  },
  {
    id: "HEL 8. Bezdotyk 001",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "Bezdotykove senzory",
    pravda: "Infracerveny senzor meria vzdialenost odrazom IR ziarenia do cidla, kombinacia viacerych snimacov umozni detekciu pohybu (Roland D-Beam).",
    nepravda: "Infracerveny senzor meria vzdialenost casom prechodu zvukovej vlny a jeden snimac staci na detekciu smeru pohybu."
  },
  {
    id: "HEL 8. Bezdotyk 002",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "Bezdotykove senzory",
    pravda: "Ultrazvukovy senzor sníma vzdialenost (Soundbeam), kapacitny snimac sníma polohu (Theremin).",
    nepravda: "Ultrazvukovy senzor sníma polohu (Theremin), kapacitny snimac sníma vzdialenost (Soundbeam)."
  },
  {
    id: "HEL 8. Bezdotyk 003",
    oblast: "Dotykove a bezdotykove snimace",
    podoblast: "Bezdotykove senzory",
    pravda: "Opticky senzor sníma zatienenie prechodu svetla, ako napriklad u nastroja VideoHarp.",
    nepravda: "Opticky senzor sníma silu prítlaku prsta, ako napriklad u nastroja VideoHarp."
  },

  // ===== Oblast: Pedale =====
  {
    id: "HEL 8. Pedale spinacie 001",
    oblast: "Pedale",
    podoblast: "Spinacie pedale",
    pravda: "Spinacie pedale (Sustain, Sostenuto, Softpedal) mozu mat kladnu polaritu, kde prud preteka pri zoslapnutom pedali (Yamaha, Roland).",
    nepravda: "Spinacie pedale (Sustain, Sostenuto, Softpedal) maju vzdy kladnu polaritu, kde prud preteka pri nezoslapnutom pedali."
  },
  {
    id: "HEL 8. Pedale spinacie 002",
    oblast: "Pedale",
    podoblast: "Spinacie pedale",
    pravda: "Pri zapornej polarite spinacieho pedala preteka prud pri nezoslapnutom pedali (Casio, Korg), preto byvaju pedale s prepinacom polarity.",
    nepravda: "Pri zapornej polarite spinacieho pedala preteka prud pri zoslapnutom pedali, preto nie su potrebne prepinace polarity."
  },
  {
    id: "HEL 8. Pedale priebezne 001",
    oblast: "Pedale",
    podoblast: "Priebezne pedale",
    pravda: "Priebezne pedale (Volume, Portamento, Effect depth) prevadzaju priamociary pohyb na rotacny pohyb otocneho potenciometra zapojeneho ako premenny odpor.",
    nepravda: "Priebezne pedale (Volume, Portamento, Effect depth) prevadzaju priamociary pohyb priamo na digitalny impulz bez potenciometra."
  },

  // ===== Oblast: MIDI kontrolery a DAW =====
  {
    id: "HEL 8. MIDIkontrolery typy 001",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Typy kontrolerov",
    pravda: "DAW kontrolery typicky obsahuju motorizovane fadery, transportny panel, zdruzene ovladanie channel stripu a time code.",
    nepravda: "DAW kontrolery typicky obsahuju iba rychlostne citlive pady bez faderov a transportneho panela."
  },
  {
    id: "HEL 8. MIDIkontrolery typy 002",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Typy kontrolerov",
    pravda: "Launchpad ma rychlostne citlive pady, fadery a prvky na ovladanie stop a MPC.",
    nepravda: "Launchpad je motorizovany kontroler s casovym kodom urceny vyhradne na ovladanie scratch padov."
  },
  {
    id: "HEL 8. MIDIkontrolery vyuzitie 001",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Vyuzitie MIDI sprav",
    pravda: "Ak na riadenie parametra v DAW nestaci 7-bitovy rozsah Change Controller, pouzije sa dvojica MSB-LSB s 14-bitovym rozlisenim.",
    nepravda: "Ak na riadenie parametra v DAW nestaci 7-bitovy rozsah Change Controller, pouzije sa zvlastna systemova sprava s 8-bitovym rozlisenim."
  },
  {
    id: "HEL 8. MIDIkontrolery vyuzitie 002",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Vyuzitie MIDI sprav",
    pravda: "Spravy Nota zapnuta/vypnuta sa v DAW kontroleri pouzivaju pre spinace a rotacne enkodery, cim sa setria cisla kontrolerov pre priebezne parametre.",
    nepravda: "Spravy Nota zapnuta/vypnuta sa v DAW kontroleri pouzivaju pre priebezne fadery, cim sa zvysuje pocet potrebnych cisel kontrolerov."
  },
  {
    id: "HEL 8. MIDIkontrolery vyuzitie 003",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Vyuzitie MIDI sprav",
    pravda: "Ohybanie tonu sa v DAW kontroleri vyuziva ako jedina kanalova sprava so 14-bitovym rozsahom, napriklad na riadenie hlasitosti.",
    nepravda: "Ohybanie tonu sa v DAW kontroleri vyuziva ako 7-bitova sprava a na riadenie hlasitosti sa pouzit neda."
  },
  {
    id: "HEL 8. Mackie HUI 001",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Mackie HUI",
    pravda: "Mackie HUI takmer vyhradne pouziva spravy Nota zapnuta na kanale 1, prvy datovy byte urcuje parameter a kanal DAW, druhy prenasa 0 alebo 127.",
    nepravda: "Mackie HUI takmer vyhradne pouziva spravy Change Controller na kanale 1, prvy datovy byte urcuje hodnotu a druhy kanal DAW."
  },
  {
    id: "HEL 8. Mackie HUI 002",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Mackie HUI",
    pravda: "U Mackie HUI poloha tahoveho potenciometra vysiela spravu Ohybanie tonu a dotyk potenciometra spravu Nota zapnuta.",
    nepravda: "U Mackie HUI poloha tahoveho potenciometra vysiela spravu Nota zapnuta a dotyk potenciometra spravu Ohybanie tonu."
  },
  {
    id: "HEL 8. Mackie HUI 003",
    oblast: "MIDI kontrolery a DAW",
    podoblast: "Mackie HUI",
    pravda: "U Mackie HUI otacanie rotacneho enkodera vysiela Change Controller (cislo 16-23), kde 0-63 znamena dolava a 64-127 doprava.",
    nepravda: "U Mackie HUI otacanie rotacneho enkodera vysiela Change Controller (cislo 16-23), kde 0-63 znamena doprava a 64-127 dolava."
  },

  // ===== Oblast: Specialne kontrolery =====
  {
    id: "HEL 8. Bicie 001",
    oblast: "Specialne kontrolery",
    podoblast: "Bicie a triggery",
    pravda: "Bicie kontrolery maju snare pady s viacerymi senzormi, tom pady, kick pad pre basovy pedal a senzor na rame pre rim-shot.",
    nepravda: "Bicie kontrolery maju len jeden univerzalny pad s jednym senzorom pre vsetky bubny a cinely."
  },
  {
    id: "HEL 8. Bicie 002",
    oblast: "Specialne kontrolery",
    podoblast: "Bicie a triggery",
    pravda: "Triggery umoznuju snimat udery na klasicku akusticku biciu supravu a previest ich na spustanie zvukov.",
    nepravda: "Triggery sa pouzivaju vyhradne na ladenie blan akustickej bicej supravy, nie na snimanie uderov."
  },
  {
    id: "HEL 8. Dechove 001",
    oblast: "Specialne kontrolery",
    podoblast: "Dechove",
    pravda: "Breath controller je snimac tlaku vzduchu, wind instrument doplna dotekove senzory pre vysku tonu a snimac tlaku rtov pre modulaciu.",
    nepravda: "Breath controller je dotykova klaviatura, wind instrument doplna iba kapacitne snimace pre vysku tonu."
  },
  {
    id: "HEL 8. Strunne 001",
    oblast: "Specialne kontrolery",
    podoblast: "Strunne",
    pravda: "Fretwiring je mechanicke snimanie miesta stisku struny pomocou krizovej matice kontaktov struna-prazec.",
    nepravda: "Fretwiring je rozpoznavanie vysky tonu elektromagnetickym snimacom a digitalnym spracovanim signalu."
  },
  {
    id: "HEL 8. Strunne 002",
    oblast: "Specialne kontrolery",
    podoblast: "Strunne",
    pravda: "Pitchtracking rozpoznava vysku tonu elektromagnetickym snimacom a digitalnym spracovanim, je pouzitelny s beznou gitarou, ale ma oneskorenie.",
    nepravda: "Pitchtracking rozpoznava vysku tonu krizovou maticou kontaktov na hmatniku a pracuje bez akehokolvek oneskorenia."
  }
];

const helSkuska8CrackOtazky = helSkuska8CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 8. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 8",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

helOtazky.push(...helSkuska8CrackOtazky);

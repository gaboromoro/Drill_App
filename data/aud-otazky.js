const audOkruhy = {
  A: "A. Zakladni pojmy z oblasti nizkofrekvencni elektroniky",
  B: "B. Zaklady elektroakustiky, mikrofony a reproduktory",
  C: "C. Vstupni zesilovace a predzesilovace",
  D: "D. Korekcni a mezilehle zesilovace a nizkofrekvencni filtry",
  E: "E. Koncove a vykonove zesilovace",
  F: "F. Digitalni zpracovani nizkofrekvencnich signalu",
  G: "G. ADC a DAC prevodniky a metody snizeni degradace cislicoveho signalu",
  H: "H. Redukce datoveho toku a komprimace audio signalu",
  I: "I. Analogovy a digitalni zaznam bez redukce a s redukci datoveho toku",
  J: "J. Metody mereni analogovych a digitalnich nizkofrekvencnich signalu",
  P: "P. Pojmy"
};

const audPrednasky = {
  A: "aud_prednaska_1.pdf",
  B: "aud_prednaska_2.pdf",
  C: "aud_prednaska_3.pdf",
  D: "aud_prednaska_4.pdf",
  E: "aud_prednaska_5.pdf",
  F: "aud_prednaska_7.pdf",
  G: "aud_prednaska_8.pdf",
  H: "aud_prednaska_9.pdf",
  I: "aud_prednaska_10.pdf",
  J: "aud_prednaska_6.pdf",
  P: "AUD pojmy"
};

const audTvrdsieMoznosti = {
  "a-01-3": {
    chytaky: [
      "Vyjadruji stejnou objektivni hladinu akustickeho tlaku pro vsechny frekvence.",
      "Popisuji jen prah bolesti, ale ne rozdily subjektivni hlasitosti mezi frekvencemi.",
      "Predpokladaji, ze ucho ma pri stejnem dB SPL stejnou citlivost v celem audio pasmu."
    ]
  },
  "a-03-1": {
    chytaky: [
      "Zdroj signalu, regulace hlasitosti a vykonovy zesilovac staci; vstupni prizpusobeni se v NF retezci neuvazuje.",
      "Korekcni a predzesilovaci cast patri az za elektroakusticky menic, aby upravovala akusticky tlak v mistnosti.",
      "Vykonovy zesilovac se radi pred zdroj signalu, protoze nejprve vytvori linkovou uroven pro dalsi zpracovani."
    ]
  },
  "a-03-3": {
    chytaky: [
      "Vstup ma mit impedanci srovnatelnou se zdrojem, aby se napeti rozdelilo rovnomerne mezi oba odpory.",
      "Nizka vstupni impedance je vyhodna, protoze zdroj vic zatizi a tim snizi sumove napeti na vstupu.",
      "Vysoka vstupni impedance je dulezita jen u vykonoveho vystupu, u napetoveho vstupu nema vliv na prenos."
    ]
  },
  "a-04-1": {
    chytaky: [
      "Je to vystupni napeti zesilovace pri nulovem vstupnim signalu a odpojene zatezi.",
      "Je to nejmensi impedance zdroje, pri ktere jeste nevznikne frekvencni pokles.",
      "Je to rezerva mezi beznym poslechem a prahem bolesti vyjadrena v dB SPL."
    ]
  },
  "a-04-3": {
    chytaky: [
      "Pomer jmenoviteho vystupniho vykonu k ucinnosti koncoveho stupne.",
      "Rozdil mezi uzitecnou urovni a celkovym harmonickym zkreslenim pri stejne frekvenci.",
      "Rozsah mezi nejmensi a nejvetsi frekvenci, kterou zesilovac prenese bez poklesu."
    ]
  },
  "b-01-1": {
    chytaky: [
      "Stridava slozka atmosferickeho tlaku po casovem zprumerovani, bez okamzitych odchylek.",
      "Efektivni hodnota rychlosti kmitani castic, ktera se s tlakem shoduje jen v rovine vlne.",
      "Hladina akustickeho vykonu zdroje prepocitana na referencni vzdalenost 1 m."
    ]
  },
  "b-01-2": {
    chytaky: [
      "Tlakovou hladinu v konkretnim bode prostoru, ktera se vzdalenosti od zdroje nemeni.",
      "Elektricky prikon menice, pokud je prepocten pres jmenovitou impedanci reproduktoru.",
      "Subjektivni hlasitost zdroje po korekci krivkami stejne hlasitosti."
    ]
  },
  "b-01-3": {
    chytaky: [
      "Pole, ve kterem prevlada pouze primy zvuk a odrazene slozky jsou zanedbatelne.",
      "Pole s jednim vyraznym smerem prichodu zvuku, ale s rovnomernou frekvencni charakteristikou.",
      "Pole, kde je akusticky tlak stejny, ale intenzita ma pevny smer od zdroje k posluchaci."
    ]
  },
  "b-02-1": {
    chytaky: [
      "Zavislost citlivosti mikrofonu na frekvenci pri stale stejnem uhlu dopadu.",
      "Zavislost vystupniho napeti na akustickem tlaku bez ohledu na smer dopadu.",
      "Zavislost vlastniho sumu mikrofonu na zatizeni vstupu predzesilovace."
    ]
  },
  "b-02-2": {
    chytaky: [
      "Vznikne souctem dvou tlakove-gradientnich slozek se stejnou polaritou.",
      "Vznikne jen tlakovy princip s casovym zpozdenim ve vystupnim predzesilovaci.",
      "Vznikne elektrickou ekvalizaci kulove charakteristiky bez pristupu zvuku k zadni strane membrany."
    ]
  },
  "b-03-1": {
    chytaky: [
      "Pred prenosem dynamiku rozsiri a po prijmu ji znovu zkomprimuje, aby se zmensila uroven nosne.",
      "Pouziva se jen jako limiter spickove urovne; odstup od sumu prenosove cesty tim neovlivni.",
      "Meni citlivost mikrofonni kapsle podle urovne signalu, ale nepracuje s dynamikou prenosove cesty."
    ]
  },
  "b-03-2": {
    chytaky: [
      "Demoduluje prijatou nosnou a obnovuje linkovy signal pro vstup mixazniho pultu.",
      "Zpracuje signal az po prijimaci; do vysilane nosne se mikrofonni signal nemoduluje.",
      "Jen stabilizuje napajeni kapsle, zatimco radiovy prenos vytvari az prijimac."
    ]
  },
  "b-03-3": {
    chytaky: [
      "Zesili vystup pri ztrate nosne, aby expander udrzel stejnou hlasitost.",
      "Zavira se pri velke urovni prijateho signalu, aby potlacila modulaci nosne.",
      "Odstrani sum demodulatoru tak, ze zmeni smerovou charakteristiku mikrofonu."
    ]
  },
  "b-04-1": {
    chytaky: [
      "Meni se jen kvuli indukcnosti kmitaci civky; mechanicka rezonance a ozvucnice se v impedanci neprojevi.",
      "Je konstantni v audio pasmu a zmena se uvadi jen kvuli toleranci stejnosmerneho odporu civky.",
      "Zavisi hlavne na nastaveni hlasitosti zesilovace, proto se pri mereni pouziva jmenovity vykon."
    ]
  },
  "b-04-2": {
    chytaky: [
      "Frekvence, pri ktere je impedance menice rovna presne jmenovite hodnote.",
      "Horni mez pasma, kde indukcnost civky jeste nema vliv na proud reproduktorem.",
      "Frekvence, pri ktere ozvucnice uplne odstrani vychylku membrany."
    ]
  },
  "b-04-3": {
    spravnaOdpoved: "Zjednoduseny udaj pro volbu zesilovace, i kdyz skutecna impedance se s frekvenci meni.",
    chytaky: [
      "Nejnizsi okamzita impedance v celem prenasenem pasmu.",
      "Stejnosmerny odpor kmitaci civky meritelny ohmmetrem.",
      "Prumer impedance pres audio pasmo bez ohledu na minima impedancni krivky."
    ]
  },
  "b-05-1": {
    chytaky: [
      "Kvuli zvyseni stejnosmerneho odporu civky, aby se zesilovac mene proudove zatezoval.",
      "Kvuli presnemu srovnani impedance v celem pasmu, coz samotny menic bez skrine nedokaze.",
      "Kvuli mechanickemu oddeleni vyhybky od membrany, aby se nemenila smerovost."
    ]
  },
  "b-05-2": {
    chytaky: [
      "Je to uzavrena ozvucnice, kde se zadni vlna uplne pohlti a otvor nevyzaruje.",
      "Otvor slouzi jen k vyrovnani statickeho tlaku, nema byt naladen na akustickou rezonanci.",
      "Zadni strana membrany je vyuzita v protifazi tak, aby se basove frekvence zamerne vykompenzovaly."
    ]
  },
  "b-05-3": {
    chytaky: [
      "Sjednoti impedanci soustavy na konstantni hodnotu bez ohledu na frekvenci.",
      "Rozdeli vykon podle citlivosti menicu, ale frekvencni obsah ponecha v kazde vetvi stejny.",
      "Nahradi akusticke ladeni ozvucnice, protoze oddeli predni a zadni vlnu membrany."
    ]
  },
  "c-01-1": {
    spravnaOdpoved: "Tepelny sum odporu, proudovy a napetovy sum aktivnich prvku a pri nizkych frekvencich i blikavy sum.",
    chytaky: [
      "Jen tepelny sum odporu; sum aktivniho prvku se pri malych signalovych urovnich obvykle neprojevi.",
      "Hlavne kvantizacni sum, pokud je za predzesilovacem pripojen A/D prevodnik.",
      "Pouze sum napajeciho zdroje; vstupni tranzistor se v malosignalovem modelu povazuje za bezsumovy."
    ]
  },
  "c-01-2": {
    chytaky: [
      "Volba impedanci pro maximalni prenos vykonu, i kdyz tim celkovy vstupni sum vzroste.",
      "Nastaveni vstupu tak, aby byl sum zdroje a sum zesilovace stejne velky pri kazde frekvenci.",
      "Pridani odporu do serie se zdrojem, aby se potlacilo zkresleni bez ohledu na vlastni sum odporu."
    ]
  },
  "c-01-3": {
    chytaky: [
      "Udava absolutni vystupni sum, ale neporovnava ho se sumem idealniho vstupniho prvku.",
      "Je to odstup signal-sum celeho zarizeni po vykonovem zesilovaci a reproduktoru.",
      "Popisuje jen sum napajeni, protoze tepelny a proudovy sum jsou zahrnuty do zkresleni."
    ]
  },
  "c-02-1": {
    chytaky: [
      "Protoze tranzistor je v malem signalu popsan jen limitaci a saturaci, nikoli pracovnim bodem.",
      "Protoze dynamicke parametry plati pro libovolne velky signal a nahrazuji nelinearni charakteristiky.",
      "Protoze se tim z malych zmen signalu urci stejnosmerne otepleni pouzdra pri maximalnim vykonu."
    ]
  },
  "c-02-2": {
    chytaky: [
      "Jen stejnosmerny pracovni bod; vstupni a vystupni odpor patri az do velkosignalove analyzy.",
      "Pouze proudove zesileni, zatimco napetovy prenos je z h-parametru neurcitelny.",
      "Parametry pri saturaci a limitaci, ne linearizovany model okolo pracovniho bodu."
    ]
  },
  "c-02-3": {
    chytaky: [
      "Zavadi kladnou zpetnou vazbu, proto zvetsi zesileni a obvykle zhorsi stabilitu pracovního bodu.",
      "Ovlivni jen dolni mezni frekvenci, protoze v malem signalu se emitorovy proud nemeni.",
      "Zmensi vystupni odpor na nulu, ale zesileni a linearita zustanou prakticky stejne."
    ]
  },
  "c-03-1": {
    chytaky: [
      "Vraci cast vystupu ve stejne fazi a tim stabilizuje zesilovac za cenu vetsiho zesileni.",
      "Vraci se jen stejnosmerna slozka vystupu, stridavy signal se zpetnou vazbou neovlivni.",
      "Zvysi otevreny zisk aktivniho prvku, protoze k nemu prida cast vystupniho napeti."
    ]
  },
  "c-03-3": {
    chytaky: [
      "Protoze kazdy fazovy posuv automaticky zmeni zapornou vazbu na kladnou i pri velmi malem zisku smycky.",
      "Protoze pri jednotkovem zisku je kazda smycka nestabilni bez ohledu na fazovou rezervu.",
      "Protoze stabilitu urcuje jen velikost vstupniho kondenzatoru a ne faze otevrene smycky."
    ]
  },
  "c-04-1": {
    chytaky: [
      "Oddeluji vysoke frekvence a spolu s odpory urcuji hlavne horni mezni frekvenci.",
      "Propousteji stejnosmernou slozku mezi stupni, aby se sjednotily pracovni body.",
      "Slouzi jen k blokovani sumu napajeni; signalovy prenos pres ne neni urcen impedancemi."
    ]
  },
  "c-04-2": {
    chytaky: [
      "Omezuji hlavne dolni mezni frekvenci, protoze se pri nizkych frekvencich jevi jako zkrat.",
      "Na vysokych frekvencich zvetsuji prenos, protoze obchazeji signalove odpory bez fazoveho posuvu.",
      "Projevi se jen ve vstupni impedanci, zatimco napetovy prenos zustava frekvencne nezavisly."
    ]
  },
  "c-04-3": {
    chytaky: [
      "Jen mezni frekvence pri poklesu -3 dB, protoze fazovy posuv nema vliv na stabilitu smycky.",
      "Fazova rezerva pri nulovem zisku otevrene smycky, ale ziskova rezerva se neuvazuje.",
      "Pouze velikost vystupniho napeti pred limitaci, protoze nestabilita vznikne az po prebuzeni."
    ]
  },
  "c-05-1": {
    chytaky: [
      "Zmensuje efektivni impedanci tim, ze zvetsi signalovy rozdil na odporu.",
      "Je to stejnosmerna zpetna vazba, ktera meni hlavne pracovni bod a ne signalovou impedanci.",
      "Nahrazuje vazebni kondenzator tim, ze propousti jen stejnosmernou slozku mezi stupni."
    ]
  },
  "c-05-2": {
    chytaky: [
      "Ke zmenseni vstupni impedance, aby se zdroj vice zatizil a snizilo se vystupni napeti.",
      "K primemu zvyseni otevreneho proudoveho zesileni tranzistoru bez vlivu na zatezovaci impedanci.",
      "Pouze ke zmene dolni mezni frekvence, ne k signalovemu odlehčení predchoziho stupne."
    ]
  },
  "c-05-3": {
    chytaky: [
      "Bez zpetne vazby realizuje presne linearni zesileni, protoze ma velmi velky otevreny zisk.",
      "Pouziva se hlavne jako vykonovy koncovy stupen pro primé buzeni nizkoohmoveho reproduktoru.",
      "V predzesilovaci slouzi jen ke stabilizaci napajeni, signalove zesileni urcuje pasivni delič."
    ]
  },
  "d-01-1": {
    chytaky: [
      "Pri prehravani znovu zdurazni vysky stejnym smerem jako zaznamova ekvalizace.",
      "Slouzi jen ke zvyseni citlivosti phono vstupu; frekvencni prenos zustava linearni.",
      "Kompenzuje jen mechanickou rezonanci prenosky, ne zaznamove omezeni basu a zdurazneni vysek."
    ]
  },
  "d-02-1": {
    chytaky: [
      "Pri male hlasitosti snizuje basy a vysky, aby byl prenos objektivne linearnejsi.",
      "Upravuje vsechny frekvence stejnym pomerem, jen podle polohy regulatoru hlasitosti.",
      "Kompenzuje pouze vlastni sum zesilovace, ne nizsi citlivost sluchu na kraji pasma."
    ]
  },
  "d-03-1": {
    chytaky: [
      "Pomoci RC siti meni frekvencni prenos a zaroven umi dodat kladne zesileni bez aktivniho prvku.",
      "Meni jen celkovou uroven, protoze pasivni RC sit nemuze frekvencne rozlisovat signal.",
      "Pracuji jen v reproduktorove vyhybce na vysokem vykonu, ne na signalove urovni."
    ]
  },
  "d-03-2": {
    chytaky: [
      "Frekvence, pri ktere ma korektor jednotkove zesileni bez ohledu na nastaveni regulatoru.",
      "Pevna hranice mezi basovym a vyskovym reproduktorem v pasivni vyhybce.",
      "Bod, kde se meni jen faze signalu, zatimco amplitudovy prenos zustava rovny."
    ]
  },
  "d-04-1": {
    chytaky: [
      "Pevny vysokofrekvencni filtr, ktery stejne potlaci sum i uzitecny signal pri zaznamu i prehravani.",
      "Kompander s obracenym poradim: pri zaznamu expanduje a pri prehravani komprimuje dynamiku.",
      "Lineární ekvalizer bez urovnove zavislosti; ucinek je stejny pro tiche i hlasite pasaze."
    ]
  },
  "d-05-2": {
    chytaky: [
      "Deli vysoky reproduktorovy vykon az za koncovymi zesilovaci a nepotrebuje vlastni napajeni.",
      "Je to pasivni vyhybka doplnena o ochranu reproduktoru, ale bez aktivnich filtru.",
      "Deli signal az po elektroakustickem menici, aby se upravila smerovost jednotliveho reproduktoru."
    ]
  },
  "e-01-1": {
    chytaky: [
      "Aktivni prvek vede priblizne pul periody, proto je linearita vysoka i bez klidoveho proudu.",
      "Pracuje ve spinacim rezimu s PWM, proto ma pri linearni reprodukci nejmensi ztraty.",
      "Klidovy proud je nastaven nulovy, aby se odstranilo tepelne zahrivani za cenu vetsiho zkresleni."
    ]
  },
  "e-02-1": {
    chytaky: [
      "Vznikne hlavne pri velkem vybuzeni v saturaci, nikoli v okoli prechodu nulou.",
      "Vznikne pri dokonale nastavenem predpeti obou tranzistoru, protoze se prekryva jejich vodeni.",
      "Je to druh frekvencniho zkresleni vystupniho filtru, ne nelinearita predani proudu mezi prvky."
    ]
  },
  "e-03-1": {
    chytaky: [
      "Budi zatez dvema vystupy ve stejne fazi, takze se zvetsi proud, ale ne napetovy rozkmit.",
      "Pripoji jeden konec reproduktoru na zem a druhy na zdvojeny zdroj, bez protifazoveho buzeni.",
      "Spoji dva zesilovace paralelne na stejnou svorku zateze, cimz se zdvojnasobi napeti."
    ]
  },
  "e-04-3": {
    chytaky: [
      "Omezuje jen maximalni proud, protoze napeti a doba trvani pretizeni nejsou pro tranzistor dulezite.",
      "Je to oblast linearniho zesileni bez zkresleni, ne oblast tepelne a proudove bezpecnosti.",
      "Udava jen dovolenou teplotu chladiče pri jmenovitem vykonu."
    ]
  },
  "e-05-1": {
    chytaky: [
      "Tranzistory pracuji stale v linearni oblasti, ale ztraty snizi vysoky vystupni filtr.",
      "Ucinnost je vysoka hlavne proto, ze se nepouziva klidovy proud ani zadna zpetna vazba.",
      "Vysoka ucinnost vznikne az v reproduktoru, kde se PWM premeni na akusticky tlak bez ztrat."
    ]
  },
  "e-05-2": {
    chytaky: [
      "Vytvari PWM prubeh z analogoveho vstupu; samotny vykonovy stupen pak uz filtr nepotrebuje.",
      "Potlaci nizkofrekvencni audio slozku a ponecha jen spinaci frekvenci pro reproduktor.",
      "Je nutny jen kvuli stejnosmerne ochrane reproduktoru, ne kvuli vysokofrekvencni spinaci slozce."
    ]
  },
  "f-01-2": {
    chytaky: [
      "Pouziva se az po ADC, aby odstranil kvantizacni sum vznikly zaokrouhlenim vzorku.",
      "Omezuje spektrum nad polovinou bitove hloubky, ne nad polovinou vzorkovaci frekvence.",
      "Zarucuje, ze signal pod Nyquistovou mezi nebude mit zadny kvantizacni sum."
    ]
  },
  "f-01-3": {
    chytaky: [
      "Potlaci frekvence nad Nyquistem jeste pred vzorkovanim, proto patri pred ADC.",
      "Zvysi bitovou hloubku vystupu DAC, aby se odstranily schodovite urovne bez filtrace.",
      "Nahrazuje vzorkovani drzenim hodnoty, aby se vystupni signal nemenil mezi vzorky."
    ]
  },
  "f-02-1": {
    chytaky: [
      "Vznikne casovou nejistotou okamziku vzorkovani, i kdyz amplituda ma nekonecne mnoho hladin.",
      "Je to chyba analogoveho filtru, ktery propusti slozky nad Nyquistovou frekvenci.",
      "Je to jen pridany nahodny dither, pokud neni korelovany se signalem."
    ]
  },
  "f-02-3": {
    chytaky: [
      "Odstrani kvantizacni chybu uplne, protoze zvetsi pocet kvantizacnich hladin.",
      "Zmensi sumove dno bez pridani energie do signalu, pokud je spravne tvarovan.",
      "Nahradi antialias filtr, protoze dekorelace chyby zabrani preklopeni spektra."
    ]
  },
  "f-03-3": {
    chytaky: [
      "Nejprve vynecha vzorky a teprve potom digitalne potlaci aliasy, ktere vznikly.",
      "Snizi bitovou hloubku bez zmeny vzorkovaci frekvence a tim omezi datovy tok.",
      "Znamena doplneni nul mezi vzorky a filtraci obrazoveho spektra."
    ]
  },
  "g-01-1": {
    chytaky: [
      "Urcuje bity paralelne pomoci odporove site bez postupneho porovnavani s vnitrnim DAC.",
      "Integruje vstup po pevny cas a vysledek urci z doby vybijeni integratoru.",
      "Porovnava vstup jen jednou s pevnou referenci, proto je prevod rychly, ale jednobitovy."
    ]
  },
  "g-01-3": {
    chytaky: [
      "DNL popisuje celkovou odchylku od idealni primky, INL chybu jednoho kodoveho kroku.",
      "DNL i INL popisuji pouze nahodny sum prevodniku, ne tvar prevodove charakteristiky.",
      "INL je chyba casu vzorkovani a DNL je chyba rekonstrukcniho filtru."
    ]
  },
  "g-03-2": {
    chytaky: [
      "Vznikne, kdyz je krok prilis maly pro rychlou zmenu a odhad za signalem zaostava.",
      "Vznikne, kdyz se velikost kroku adaptivne zvetsi pri prudke zmene signalu.",
      "Vznikne jen pri nulovem vstupu, protoze delta modulator tehdy nema zadnou zpetnou vazbu."
    ]
  },
  "g-04-2": {
    chytaky: [
      "Pouziva prevzorkovani bez zpetne vazby, proto kvantizacni sum zustava rovnomerne v pasmu.",
      "Je to delta modulace s pevnym krokem bez integracni casti a bez tvarovani sumu.",
      "Presnost zvysi jen zvetsenim poctu bitu v kazdem vzorku, ne presunutim sumu mimo pasmo."
    ]
  },
  "g-05-1": {
    chytaky: [
      "Shlukove chyby soustredi do jednoho bloku, aby je prehravac mohl cele ztlumit.",
      "Nahrazuje korekcni kod tim, ze zmeni poradi audio vzorku bez redundance.",
      "Pouziva se az po dekodovani audia, proto neovlivni opravu chyb z media."
    ]
  },
  "h-01-1": {
    chytaky: [
      "Datovy tok se redukuje hlavne zvysenim vzorkovaci frekvence a naslednym presnejsim kvantovanim.",
      "Redukce datoveho toku znamena vzdy bezeztratove zkraceni kodu bez zmeny slysitele informace.",
      "Pri ztratove redukci se odstranuje jen statisticka redundance, psychoakustika se nepouziva."
    ]
  },
  "h-01-3": {
    chytaky: [
      "Urci, ktere slozky jsou elektricky rusene, a ty opravi pridanim Reed-Solomonovy redundance.",
      "Rozdeli signal na pasma se stejnym poctem bitu bez ohledu na maskovani.",
      "Slouzi jen k vyrovnani hlasitosti kanalu, ne k rozhodovani o kvantizacnim sumu."
    ]
  },
  "h-02-3": {
    chytaky: [
      "Kdyz je kvantizacni sum tesne nad maskovacim prahem, sluch ho spolehlive ignoruje.",
      "Maskovani funguje jen pro ciste sinusy, proto se v audio kodecich kvantizacni sum neschovava.",
      "Kvantizacni sum se skryje tim, ze se presune do stejneho pasma jako nejslabsi slozka signalu."
    ]
  },
  "h-04-2": {
    chytaky: [
      "Prideli kazdemu pasmu stejny pocet bitu, aby byla chyba rovnomerne rozlozena v Hz.",
      "Prideli vice bitu tam, kde je maskovaci prah vysoky a chyba by byla mene slyset.",
      "Je to jen rozdeleni bitstreamu na ramce, ne rozhodovani o presnosti koeficientu."
    ]
  },
  "h-05-1": {
    chytaky: [
      "Ztracene odstrani psychoakusticky maskovane slozky a tim samo rozhoduje o kvalite audia.",
      "Prideli vsem symbolum stejne dlouhe kody, aby bylo dekodovani jednoznacne.",
      "Zkrati vzorky s mensi amplitudou a delsi kody priradi hlasitym vzorkum bez ohledu na cetnost."
    ]
  },
  "i-01-1": {
    chytaky: [
      "Je to ztratova psychoakusticka komprese, ktera zmensuje pocet audio vzorku na CD.",
      "Prevadi ctyrnactibitove kanalove symboly zpet na osmibitove uz pri zaznamu, aby snizil tok.",
      "Slouzi k oprave chyb pomoci parity, zatimco omezeni prechodu resi az CIRC."
    ]
  },
  "i-01-3": {
    chytaky: [
      "Je to samotne EFM kanalove kodovani bez prokladani a bez Reed-Solomonovych kodu.",
      "Opravi jen jednotlive izolovane chyby, ale shlukove chyby z poskrabani disku neumí rozlozit.",
      "Je to psychoakusticky kodek, ktery pred zaznamem odstrani mene slysitelne slozky."
    ]
  },
  "i-02-1": {
    chytaky: [
      "Bezeztratovy kanalovy kod DCC, ktery nemeni audio data a slouzi jen k fyzickemu cteni.",
      "Transformacni kodek totozny s AC-3, pouzity hlavne pro vicekanalovy filmovy zvuk.",
      "Analogova redukce sumu pro magneticky zaznam, ktera komprimuje a expanduje dynamiku."
    ]
  },
  "i-03-1": {
    chytaky: [
      "Kanalovy kod pro CD, ktery nekomprimuje audio a resi hlavne nevhodne prechody v zaznamu.",
      "Bezeztratovy archivni format, ktery po dekodovani obnovi bitove totozne PCM.",
      "Analogovy system redukce sumu, kde se pri zaznamu meni dynamika bez transformacniho kodovani."
    ]
  },
  "i-04-1": {
    chytaky: [
      "Pouziva opticky disk s nekomprimovanym PCM bez datove redukce jako standardni rezim.",
      "Pouziva ciste magneticky zapis a bezeztratovou kompresi podobnou FLAC.",
      "Pouziva mechanickou drazku a elektrickou RIAA korekci podobne jako gramofon."
    ]
  },
  "j-01-1": {
    chytaky: [
      "Vznik slozek na libovolnych souctovych a rozdilovych frekvencich pri dvoutonovem buzeni.",
      "Zmena amplitudy signalu bez vzniku novych spektralnich slozek.",
      "Vznik nahodneho sumu nezavisleho na vstupni frekvenci a bez harmonicke vazby."
    ]
  },
  "j-02-2": {
    chytaky: [
      "THD+N je vzdy mensi nez THD, protoze se z harmonickych slozek odecte sumove dno.",
      "THD zahrnuje sum i neharmonicke slozky, THD+N pouze ciste harmonicke.",
      "Obe hodnoty jsou stejne, pokud se meri notch filtrem, protoze sum se potlaci spolu s fundamentalem."
    ]
  },
  "j-03-1": {
    chytaky: [
      "Vznik pouze celociselnych nasobku jedne vstupni frekvence pri sinusovem buzeni.",
      "Vznik slozek jen nad audio pasmem, proto se pri NF mereni neuvazuje.",
      "Zmena casoveho zpozdeni signalu bez novych frekvencnich slozek."
    ]
  },
  "j-04-2": {
    chytaky: [
      "Nejvyssi frekvence sinusoveho signalu, kterou zesilovac prenese pri malem vykonu.",
      "Cas, za ktery ochrana pripoji reproduktor po zapnuti zesilovace.",
      "Rychlost zmeny vstupniho proudu pri konstantnim vystupnim napeti."
    ]
  },
  "j-05-1": {
    chytaky: [
      "Staci definovat jmenovitou impedanci; frekvence, zkresleni a pocet kanalu vykon neovlivni.",
      "Je nutne merit bez zateze, aby se vyloucilo tepelne a proudove omezeni koncoveho stupne.",
      "Dulezita je hlavne citlivost reproduktoru, protoze vykon zesilovace se z ni primo vypocte."
    ]
  }
};

function rozdelAudZadanie(otazka) {
  const zhoda = otazka.match(/^([A-JP]\s+\d+\.\d+)\s+(.+)$/);
  if (!zhoda) {
    return { kod: "", text: otazka };
  }

  return {
    kod: zhoda[1],
    text: zhoda[2]
  };
}

function vytvorAudOtazku([id, okruh, otazka, spravnaOdpoved, chytaky, vysvetlenie]) {
  const zadanie = rozdelAudZadanie(otazka);
  const tvrdsiaVerzia = audTvrdsieMoznosti[id] || {};
  const pouzitaSpravnaOdpoved = tvrdsiaVerzia.spravnaOdpoved || spravnaOdpoved;
  const pouziteChytaky = tvrdsiaVerzia.chytaky || chytaky;
  const spravneOdpovede = Array.isArray(pouzitaSpravnaOdpoved) ? pouzitaSpravnaOdpoved : [pouzitaSpravnaOdpoved];
  const jeViacMoznosti = Array.isArray(pouzitaSpravnaOdpoved);

  return {
    id: `aud-${id}`,
    tema: zadanie.kod ? `AUD ${zadanie.kod}` : `AUD ${okruh}: ${audOkruhy[okruh].slice(3)}`,
    typ: jeViacMoznosti ? "viac" : "jedna",
    format: "klasicka",
    uroven: "tazka",
    otazka: zadanie.text,
    kodOtazky: zadanie.kod,
    moznosti: [...spravneOdpovede, ...pouziteChytaky],
    spravne: spravneOdpovede.map((_, index) => index),
    pocetZobrazenychMoznosti: jeViacMoznosti ? 5 : 3,
    odpoved: spravneOdpovede.join(", "),
    vysvetlenie,
    prezentacia: audPrednasky[okruh],
    subtema: audOkruhy[okruh]
  };
}

const audOtazky = [
  ["a-01-1", "A", "A 1.1 Jakym mechanismem se siri zvuk?", "Zvuk se ve vzduchu siri jako mechanicke vlneni tvorene stridavym zhustovanim a zredovanim prostredi.", ["Zvuk se ve vzduchu siri jako pomala zmena statickeho tlaku bez kmitani casti prostredi.", "Zvuk se ve vzduchu siri hlavne jako elektromagneticke vlneni vyzarene pohybem membrany.", "Zvuk se siri prenosem castic od zdroje k uchu bez jejich kmitani okolo rovnovazne polohy."], "Zvuk je mechanicke vlneni v prostredi. V plynu ide najma o rychle zmeny akustickeho tlaku."],
  ["a-01-2", "A", "A 1.2 Cim je vymezena oblast slyseni lidskeho ucha?", "Oblast slyseni je priblizne 20 Hz az 20 kHz a zaroven je omezena prahem slyseni a prahem bolesti podle frekvence.", ["Oblast slyseni je urcena jen frekvencemi 20 Hz az 20 kHz, protoze tlakova uroven v ni nema vliv.", "Oblast slyseni je hlavne 1 kHz az 10 kHz a mimo ni ucho nema zadnou citlivost.", "Oblast slyseni je dana pouze hladinou akustickeho tlaku, frekvence urcuje jen barvu tonu."], "Skuskovy zaklad: pocutelnost zavisi od frekvencie aj hladiny akustickeho tlaku."],
  ["a-01-3", "A", "A 1.3 Co vyjadruji Fletcher-Munsonovy krivky?", "Fletcher-Munsonovy krivky vyjadruji stejnou subjektivni hlasitost pro ruzne frekvence a ruzne hladiny akustickeho tlaku.", ["Fletcher-Munsonovy krivky popisuji linearni prubeh impedance reproduktoru pri ruznych frekvencich.", "Fletcher-Munsonovy krivky urcuji jen elektricke napeti nutne pro stejnou hlasitost zesilovace.", "Fletcher-Munsonovy krivky nahrazuji spektrum signalu krivkou harmonickeho zkresleni."], "Krivky rovnakej hlasitosti vysvetluju, preco pri nizkej hlasitosti slabnu hlavne basy a vysky."],
  ["a-02-1", "A", "A 2.1 Jak se definuje decibelovy pomer vykonu?", "Pomer vykonu v decibelech je 10 log10(P2/P1).", ["Pomer vykonu v decibelech je 20 log10(P2/P1), protoze vykon je primo amplitudova velicina.", "Pomer vykonu v decibelech je log10(P2/P1) bez nasobeni, nasobek 10 patri jen k napeti.", "Pomer vykonu v decibelech je 20 log10(U2/U1) bez ohledu na impedanci zateze."], "Pri vykone je koeficient 10; koeficient 20 patri napetiu alebo prudu pri rovnakej impedancii."],
  ["a-02-2", "A", "A 2.2 Kdy se pro napeti pouziva vztah 20 log10(U2/U1)?", "Pro napetovy pomer se pouziva 20 log10(U2/U1), pokud porovnavana napeti pusobi na stejne impedance.", ["Pro napetovy pomer se vzdy pouziva 10 log10(U2/U1), protoze napeti i vykon maji stejny logaritmicky predpis.", "Pro napetovy pomer se pouziva 20 log10(U2/U1) i pri libovolne zmenene impedanci bez dalsiho prepocitani.", "Pro napetovy pomer se pouziva 10 log10(U2/U1) a impedance se uvazuje jen u akustickeho tlaku."], "Napatie je odmocninovo viazane na vykon, preto sa pri rovnakej impedancii objavi faktor 20."],
  ["a-02-3", "A", "A 2.3 Co znamena absolutni uroven dBu?", "dBu je napetova uroven vztažena k 0,775 V bez nutnosti predpokladu zateze 600 ohm.", ["dBu je vykonova uroven vztažena k 1 mW na zatezi 600 ohm.", "dBu je napetova uroven vztažena k 1 V a proto je totozna s dBV.", "dBu je akusticka uroven vztažena k 20 uPa pri frekvenci 1 kHz."], "dBu vychadza z 0,775 V; dBm je vykonova referencia 1 mW a dBV je 1 V."],
  ["a-03-1", "A", "A 3.1 Jake bloky typicky tvori nizkofrekvencni reprodukcni retezec?", "Typicky retezec obsahuje zdroj signalu, vstupni nebo predzesilovac, korekcni cast, vykonovy zesilovac a elektroakusticky menic.", ["Typicky retezec obsahuje jen mikrofon, vykonovy zesilovac a reproduktor, korekce patri pouze do merici techniky.", "Typicky retezec zacina vzdy DAC prevodnikem, protoze analogove zdroje se v NF elektronice neuvazuji.", "Typicky retezec obsahuje hlavne vysilac, antenu, mezifrekvencni zesilovac a detektor."], "NF retazec sa sklada zo zdroja, upravy urovne a farby, vykonoveho stupna a menica."],
  ["a-03-2", "A", "A 3.2 Jaky je rozdil mezi mikrofonni a linkovou urovni signalu?", "Mikrofonni signal ma obvykle velmi malou uroven, zatimco linkova uroven je radove stovky mV az jednotky V.", ["Mikrofonni signal ma obvykle vyssi uroven nez linkovy signal, proto vyzaduje mensi zesileni.", "Mikrofonni a linkova uroven se lisi jen impedanci, napetova uroven je v praxi stejna.", "Linkova uroven je definovana pouze akustickym tlakem a neni elektrickou urovni."], "Mikrofon treba predzosilnit; linkovy signal je uz vhodny pre dalsie spracovanie."],
  ["a-03-3", "A", "A 3.3 Proc ma mit vstup zesilovace zpravidla vysokou impedanci?", "Vysoka vstupni impedance omezuje zatizeni predchoziho zdroje a snizuje chybu prenosu napeti.", ["Vysoka vstupni impedance zamerne zkratuje zdroj, aby byl prenos vykonu maximalni.", "Vysoka vstupni impedance slouzi hlavne ke zvyseni vystupniho vykonu koncoveho stupne.", "Vysoka vstupni impedance nahrazuje frekvencni korekci RIAA u magnetodynamicke prenosky."], "V audio retazci sa vacsinou prenasa napatie, preto vstup nesmie zdroj vyrazne zatazovat."],
  ["a-04-1", "A", "A 4.1 Co vyjadruje vstupni citlivost zesilovace?", "Vstupni citlivost je vstupni napeti potrebne k dosazeni jmenoviteho vystupniho vykonu nebo urovne.", ["Vstupni citlivost je maximalni vystupni proud pri zkratu reproduktorove svorky.", "Vstupni citlivost je napeti, pri kterem ma korekcni zesilovac nulove zesileni.", "Vstupni citlivost je impedance vstupu prepocitana na frekvenci 1 kHz."], "Citlivost hovori, aky velky vstupny signal staci na plny vystup."],
  ["a-04-2", "A", "A 4.2 Jak se obvykle vymezuje sirka prenaseneho pasma zesilovace?", "Sirka pasma se casto vymezuje frekvencemi, kde pokles prenosu dosahne asi -3 dB proti strednimu pasmu.", ["Sirka pasma se urcuje frekvencemi, kde vystupni vykon vzroste o +3 dB proti strednimu pasmu.", "Sirka pasma je dana jen nejvyssi frekvenci hodinoveho signalu v digitalni casti.", "Sirka pasma je totozna s dynamickym rozsahem a udava se jen v decibelech."], "Hranicne frekvencie sa v praxi casto citaju pri poklese prenosu o 3 dB."],
  ["a-04-3", "A", "A 4.3 Co znamena odstup signal-sum?", "Odstup signal-sum je logaritmicky pomer uzitecne urovne signalu k urovni sumu nebo ruseni.", ["Odstup signal-sum je pomer vystupni impedance k impedanci reproduktoru.", "Odstup signal-sum je rozdil mezi horni a dolni mezni frekvenci zesilovace.", "Odstup signal-sum je stejny udaj jako celkove harmonicke zkresleni THD."], "SNR popisuje rezervu uzitocneho signalu nad sumom, nie skreslenie ani frekvencne pasmo."],
  ["a-05-1", "A", "A 5.1 Co v audiu znamena dynamicky rozsah?", "Dynamicky rozsah je rozdil mezi nejvetsi nezkreslenou urovni a nejmensi pouzitelnou urovni nad sumem.", ["Dynamicky rozsah je rozdil mezi dolni a horni frekvenci prenaseneho pasma.", "Dynamicky rozsah je pocet harmonickych slozek ve spektru periodickeho signalu.", "Dynamicky rozsah je pouze subjektivni hlasitost vyjadrena ve phonech."], "Dynamika je amplitudova rezerva od sumoveho dna po limitaci."],
  ["a-05-2", "A", "A 5.2 Co vyjadruje tlumici cinitel koncoveho zesilovace?", "Tlumici cinitel je pomer impedance reproduktoru k vystupni impedanci zesilovace a souvisi s kontrolou pohybu membrany.", ["Tlumici cinitel je pomer vstupni impedance zesilovace k odporu signaloveho kabelu.", "Tlumici cinitel je pomer harmonickeho zkresleni pri plnem a polovicnim vykonu.", "Tlumici cinitel je konstanta urcujici hlasitostni krivku podle Fletcher-Munsona."], "Nizka vystupna impedancia zlepsuje elektricke tlmenie reproduktora."],
  ["a-05-3", "A", "A 5.3 Co znamena vykonova sirka pasma?", "Vykonova sirka pasma je frekvencni rozsah, v nemz zesilovac doda predepsany vykon pri stanovene mire zkresleni.", ["Vykonova sirka pasma je rozsah hlasitosti, pri kterem se meni subjektivni barva zvuku.", "Vykonova sirka pasma je stejne cislo jako vstupni citlivost vyjadrena v dBu.", "Vykonova sirka pasma je pocet vzorku na periodu pri digitalnim zaznamu."], "Pri koncovom stupni nestaci male signalove pasmo; dolezite je pasmo pri velkom vykone."],

  ["b-01-1", "B", "B 1.1 Co je akusticky tlak?", "Akusticky tlak je stridava odchylka okamziteho tlaku vzduchu od atmosferickeho tlaku zpusobena zvukem.", ["Akusticky tlak je stejnosmerny atmosfericky tlak meritelny bez pritomnosti zvukove vlny.", "Akusticky tlak je elektricke napeti mikrofonu prepocitane primo na watty.", "Akusticky tlak je akusticky vykon rozdeleny jen podle frekvence signalu."], "Meri sa odchylka tlaku sposobena zvukom, nie samotny atmosfericky tlak."],
  ["b-01-2", "B", "B 1.2 Co vyjadruje akusticky vykon zdroje?", "Akusticky vykon vyjadruje energii zvuku vyzarenou zdrojem za jednotku casu.", ["Akusticky vykon je tlak ve vzdalenosti 1 m nezavisly na prostoru.", "Akusticky vykon je citlivost mikrofonu vyjadrena ve V/Pa.", "Akusticky vykon je pouze subjektivni hlasitost posluchace."], "Vykon patri zdroju; tlak v bode zavisi aj od vzdialenosti a miestnosti."],
  ["b-01-3", "B", "B 1.3 Co je difuzni zvukove pole?", "Difuzni pole je stav, kdy zvuk prichazi do mista mereni ze vsech smeru s priblizne stejnou pravdepodobnosti.", ["Difuzni pole je oblast, kde je pritomen pouze primy zvuk bez odrazu.", "Difuzni pole je pole s jedinym stojatym modem mezi dvema rovnobeznymi stenami.", "Difuzni pole je elektricke pole v civce reproduktoru."], "Difuzne pole suvisi s odrazmi a dozvukom, nie s cisto priamou vlnou."],
  ["b-02-1", "B", "B 2.1 Co popisuje smerova charakteristika mikrofonu?", "Smerova charakteristika popisuje zavislost citlivosti mikrofonu na uhlu dopadu zvuku.", ["Smerova charakteristika popisuje zavislost vystupni impedance mikrofonu na teplote.", "Smerova charakteristika je frekvencni prubeh zesileni predzesilovace.", "Smerova charakteristika urcuje jen maximalni povoleny akusticky tlak."], "Smerovost hovori, odkial mikrofon snima viac alebo menej."],
  ["b-02-2", "B", "B 2.2 Jak vznikne kardioidni charakteristika mikrofonu?", "Kardioida vznikne kombinaci tlakove a tlakove-gradientni slozky.", ["Kardioida vznikne pouze z tlakove slozky bez pristupu zvuku k zadni strane membrany.", "Kardioida vznikne pouze z magneticke indukce v civce bez vlivu akusticke konstrukce.", "Kardioida vznikne filtraci signalu dolni propusti za mikrofonem."], "Kardioida je kombinacia vsesmerovej tlakovej a osmickovej gradientnej zlozky."],
  ["b-02-3", "B", "B 2.3 Jak se lisi kulova a osmickova charakteristika?", "Kulova charakteristika snima priblizne stejne ze vsech smeru, osmickova ma maxima v ose a minima z boku.", ["Kulova charakteristika ma hluboke minimum v ose, osmickova snima rovnomerne ze vsech smeru.", "Kulova a osmickova charakteristika se lisi jen vystupnim napetim, nikoli smerovou citlivosti.", "Osmickova charakteristika vznikne vzdy jen elektronickou korekci bez akustickeho vlivu."], "Omni je tlakovy princip, osmicka je gradientny princip s bocnymi nulami."],
  ["b-03-1", "B", "B 3.1 Proc se u bezdratovych mikrofonu pouziva kompander?", "Kompander zmensi dynamiku pred prenosem a po prijmu ji obnovi, cimz zlepsi odstup od sumu prenosove cesty.", ["Kompander prevadi analogovy mikrofonni signal primo na opticky paprsek bez modulace.", "Kompander zvysuje smerovost mikrofonu potlacenim zvuku zezadu.", "Kompander nahrazuje antenu tim, ze zvysuje vykon kapsle mikrofonu."], "Kompander je compressor + expander; riesi sum a obmedzeny dynamicky rozsah bezdrotoveho prenosu."],
  ["b-03-2", "B", "B 3.2 Jaka je uloha vysilace v bezdratovem mikrofonu?", "Vysilac zpracuje mikrofonni signal, namoduluje ho na nosnou a vyzari ho antenou.", ["Vysilac jen mechanicky smeruje mikrofonni kapsli k reproduktoru.", "Vysilac prevadi zvuk v mistnosti na akusticky vykon reproduktoru.", "Vysilac provadi pouze RIAA korekci signalu z prenosky."], "Bezdratovy mikrofon potrebuje modulaciu na nosnu a antenovy prenos."],
  ["b-03-3", "B", "B 3.3 Proc muze byt v prijimaci bezdratoveho mikrofonu sumova brana?", "Sumova brana potlaci vystup pri male nebo chybne prijimane urovni, aby nebyl slyset sum a ruseni.", ["Sumova brana zamerne zvysi vystup pri ztrate nosne, aby se zachovala hlasitost.", "Sumova brana meni smerovou charakteristiku mikrofonu podle polohy anteny.", "Sumova brana nahrazuje demodulator pri prijmu FM signalu."], "Noise gate je ochrana proti pocutelnemu sumu v pauzach alebo pri slabom prijme."],
  ["b-04-1", "B", "B 4.1 Proc neni impedance reproduktoru konstantni?", "Impedance reproduktoru zavisi na frekvenci vlivem mechanicke rezonance, indukcnosti civky a ozvucnice.", ["Impedance reproduktoru je konstantni, meni se jen citlivost mikrofonu v mistnosti.", "Impedance reproduktoru zavisi pouze na delce pripojovaciho kabelu.", "Impedance reproduktoru je dana jen nastavenim hlasitosti zesilovace."], "Reproduktor je elektromechanicky system, preto jeho zataz nie je cisty odpor."],
  ["b-04-2", "B", "B 4.2 Co je rezonancni frekvence reproduktoru?", "Rezonancni frekvence je oblast, kde mechanicka soustava membrany a zavesu vykazuje zvyseny kmitavy odezvovy ucin.", ["Rezonancni frekvence je vzorkovaci frekvence nutna pro digitalni zaznam reproduktoru.", "Rezonancni frekvence je vzdy horni mez prenaseneho pasma zesilovace.", "Rezonancni frekvence je frekvence, pri ktere je mikrofon dokonale vsesmerovy."], "Rezonancia je mechanicka vlastnost menica a vyrazne sa prejavi aj v impedancnej krivke."],
  ["b-04-3", "B", "B 4.3 Proc se u reproduktoru uvadi jmenovita impedance?", "Zjednoduseny udaj pro volbu zesilovace, i kdyz skutecna impedance se s frekvenci meni.", ["Nejnizsi okamzita impedance v celem prenasenem pasmu.", "Stejnosmerny odpor kmitaci civky meritelny ohmmetrem.", "Prumer impedance pres audio pasmo bez ohledu na minima impedancni krivky."], "Menovita impedancia je prakticky parameter zataze, nie konstantna fyzikalna hodnota v celom pasme."],
  ["b-05-1", "B", "B 5.1 Proc se reproduktor montuje do ozvucnice?", "Ozvucnice omezuje akusticky zkrat mezi predni a zadni stranou membrany a ovlivnuje basovou odezvu.", ["Ozvucnice slouzi hlavne k prevodu elektrickeho signalu na magneticke pole civky.", "Ozvucnice zpusobuje, ze impedance reproduktoru je naprosto konstantni.", "Ozvucnice nahrazuje vyhybku mezi basovym a vyskovym reproduktorem."], "Bez ozvucnice sa hlavne nizke frekvencie rusili medzi prednou a zadnou vlnou."],
  ["b-05-2", "B", "B 5.2 Jak pracuje bassreflexova ozvucnice?", "Bassreflex vyuziva rezonator s otvorem k posileni vyzarovani v oblasti nizkych frekvenci.", ["Je to uzavrena ozvucnice, kde se zadni vlna uplne pohlti a otvor nevyzaruje.", "Otvor slouzi jen k vyrovnani statickeho tlaku, nema byt naladen na akustickou rezonanci.", "Zadni strana membrany je vyuzita v protifazi tak, aby se basove frekvence zamerne vykompenzovaly."], "Bassreflex je naladeny akusticky rezonator; chytak je zamena s uzavretou ozvucnicou."],
  ["b-05-3", "B", "B 5.3 K cemu slouzi reproduktorova vyhybka?", "Vyhybka rozdeli signal do frekvencnich pasem vhodnych pro jednotlive menice.", ["Vyhybka slouzi k bezdratovemu prenosu signalu mezi mikrofonem a prijimacem.", "Vyhybka zmeni akusticky tlak na elektricke napeti ve vstupnim predzesilovaci.", "Vyhybka sjednoti impedanci reproduktoru na presnou hodnotu pri vsech frekvencich."], "Vyhybka chrani menice a deli pasmo na basovu, stredovu a vyskovu cast."],

  ["c-01-1", "C", "C 1.1 Jake zdroje sumu jsou dulezite ve vstupnim zesilovaci?", "Tepelny sum odporu, proudovy a napetovy sum aktivnich prvku a pri nizkych frekvencich i blikavy sum.", ["Jen tepelny sum odporu; sum aktivniho prvku se pri malych signalovych urovnich obvykle neprojevi.", "Hlavne kvantizacni sum, pokud je za predzesilovacem pripojen A/D prevodnik.", "Pouze sum napajeciho zdroje; vstupni tranzistor se v malosignalovem modelu povazuje za bezsumovy."], "Vstupny stupen pracuje s malym signalom, preto sa sumove zdroje velmi prejavia."],
  ["c-01-2", "C", "C 1.2 Co znamena sumove prizpusobeni zdroje a vstupu?", "Sumove prizpusobeni voli impedanci a prvek tak, aby byl celkovy sum vstupniho retezce minimalni.", ["Sumove prizpusobeni znamena nastavit vstupni a vystupni impedanci na maximalni prenos vykonu.", "Sumove prizpusobeni znamena pridat zamerne sum, aby se potlacilo zkresleni.", "Sumove prizpusobeni je stejne jako frekvencni korekce RIAA."], "Nejde len o napetove prisposobenie; pri sume zalezi na impedancii zdroja aj type prvku."],
  ["c-01-3", "C", "C 1.3 Co vyjadruje sumove cislo predzesilovace?", "Sumove cislo vyjadruje, o kolik predzesilovac zhorsi odstup signal-sum proti idealnimu bezsumovemu prvku.", ["Sumove cislo vyjadruje maximalni vystupni vykon predzesilovace v decibelech.", "Sumove cislo vyjadruje mezni frekvenci dolni propusti ve vstupnim obvodu.", "Sumove cislo je pocet sumovych bran v bezdratovem mikrofonu."], "Sumove cislo je degradacia SNR sposobena realnym vstupnym obvodom."],
  ["c-02-1", "C", "C 2.1 Proc se tranzistor v malem signalu popisuje dynamickymi parametry?", "Dynamicke parametry linearizuji chovani tranzistoru v pracovnim bode pro male zmeny signalu.", ["Dynamicke parametry popisuji jen teplotu pouzdra pri maximalnim vykonu.", "Dynamicke parametry nahrazuji potrebu pracovního bodu v libovolne velkem signalu.", "Dynamicke parametry jsou shodne s mechanickymi parametry membrany reproduktoru."], "Malosignalovy model plati okolo pracovného bodu, nie pre lubovolne velku nelinearnu oblast."],
  ["c-02-2", "C", "C 2.2 Co lze z h-parametru tranzistoroveho stupne urcit?", "Z h-parametru lze urcovat vstupni a vystupni odpor, proudove zesileni a napetovy prenos v malem signalu.", ["Jen stejnosmerny pracovni bod; vstupni a vystupni odpor patri az do velkosignalove analyzy.", "Pouze proudove zesileni, zatimco napetovy prenos je z h-parametru neurcitelny.", "Parametry pri saturaci a limitaci, ne linearizovany model okolo pracovniho bodu."], "h-parametre su nahradny model tranzistora pre analyzu zosilnovacieho stupna."],
  ["c-02-3", "C", "C 2.3 Jak se projevi emitorovy odpor bez premosteni kondenzatorem?", "Nepremosteny emitorovy odpor zavadi zapornou zpetnou vazbu a zmensuje zesileni, ale zlepsuje linearitu.", ["Nepremosteny emitorovy odpor zpusobi kladnou zpetnou vazbu a zvysi zkresleni.", "Nepremosteny emitorovy odpor nema vliv na zesileni, ovlivni jen barvu ozvucnice.", "Nepremosteny emitorovy odpor prevadi zesilovac na digitalni delta modulator."], "Emitorova degeneracia stabilizuje pracovny bod a linearizuje, ale znizuje zosilnenie."],
  ["c-03-1", "C", "C 3.1 Co je zaporna zpetna vazba v zesilovaci?", "Zaporna zpetna vazba vraci cast vystupu na vstup v opacne fazi a tim zmensuje vysledne zesileni.", ["Zaporna zpetna vazba vraci vystup na vstup ve stejne fazi a tim rozkmita obvod.", "Zaporna zpetna vazba je pouze mechanicke tlumeni membrany reproduktoru.", "Zaporna zpetna vazba znamena pridani sumu do vstupu pro dither."], "Negativna spatna vazba obetuje cast zisku za lepsie parametre."],
  ["c-03-2", "C", "C 3.2 Jake ucinky ma zaporna zpetna vazba?", "Zaporna zpetna vazba obvykle snizuje zkresleni, stabilizuje prenos, rozsiri pasmo a zmeni impedance podle zapojeni.", ["Zaporna zpetna vazba vzdy zvysuje zkresleni a zuzuje pasmo, proto se v audiu nepouziva.", "Zaporna zpetna vazba meni jen barvu podsviceni pristroje, elektricke parametry zustanou stejne.", "Zaporna zpetna vazba vzdy snizuje vstupni odpor a zvysuje vystupni odpor bez ohledu na topologii."], "Ucinok vazby zalezi na topologii, ale typicky zlepsuje linearitu a stabilitu prenosu."],
  ["c-03-3", "C", "C 3.3 Proc muze zpetna vazba zpusobit nestabilitu?", "Kvuli fazovemu posuvu pri vysokych frekvencich se muze zaporna vazba zmenit ucinkem na kladnou.", ["Protoze kazda zaporna vazba je nestabilni uz pri nulove frekvenci.", "Protoze zpetna vazba zvysuje vzorkovaci frekvenci nad Nyquistovu mez.", "Protoze zpetna vazba odstrani vsechny kapacity v obvodu."], "Stabilitu treba hodnotit cez amplitudovu a fazovu rezervu."],
  ["c-04-1", "C", "C 4.1 Jakou ulohu maji vazebni kondenzatory v predzesilovaci?", "Vazebni kondenzatory oddeluji stejnosmerne pracovni body a spolu s odpory urcuji dolni mezni frekvenci.", ["Vazebni kondenzatory zesiluji stejnosmerny signal a urcuji vystupni vykon.", "Vazebni kondenzatory meni mikrofonni smerovost z kulove na kardioidni.", "Vazebni kondenzatory provadeji Huffmanovo kodovani audio dat."], "Kondenzator pusti AC zlozku, ale blokuje DC; s odporom tvori horni propust."],
  ["c-04-2", "C", "C 4.2 Proc parazitni kapacity omezuji horni mezni frekvenci?", "Parazitni kapacity s odpory vytvareji dolnopropustne clanky a pri vyssich frekvencich zmensuji prenos.", ["Omezuji hlavne dolni mezni frekvenci, protoze se pri nizkych frekvencich jevi jako zkrat.", "Na vysokych frekvencich zvetsuji prenos, protoze obchazeji signalove odpory bez fazoveho posuvu.", "Projevi se jen ve vstupni impedanci, zatimco napetovy prenos zustava frekvencne nezavisly."], "Kapacity sa na vysokych frekvenciach viac uplatnia, preto orezavaju horne pasmo."],
  ["c-04-3", "C", "C 4.3 Co se sleduje na Bodeho charakteristice kvuli stabilite?", "Sleduje se ziskova a fazova rezerva, hlavne zda pri jednotkovem zisku neni fazovy posuv blizko 180 stupnu.", ["Sleduje se jen pocet harmonickych slozek v periodickem signalu.", "Sleduje se pouze stejnosmerny odpor reproduktorove civky.", "Sleduje se jen teplota chladiče pri jmenovitem vykonu."], "Nebezpecny je stav, ked spatna vazba ziska fazu kladnej vazby."],
  ["c-05-1", "C", "C 5.1 Co je bootstrap v tranzistorovem zesilovaci?", "Bootstrap zveda efektivni impedanci obvodu tim, ze se jeden bod pohybuje signalove podobne jako druhy.", ["Zmensuje efektivni impedanci tim, ze zvetsi signalovy rozdil na odporu.", "Je to stejnosmerna zpetna vazba, ktera meni hlavne pracovni bod a ne signalovou impedanci.", "Nahrazuje vazebni kondenzator tim, ze propousti jen stejnosmernou slozku mezi stupni."], "Bootstrap sposobuje, ze na prvku je mensi signalovy rozdiel, a preto sa javi ako vyssia impedancia."],
  ["c-05-2", "C", "C 5.2 Proc se bootstrap pouziva ve vstupnich nebo budicich obvodech?", "Pouziva se ke zvyseni vstupni nebo zatezovaci impedance bez velke zmeny stejnosmerneho nastaveni.", ["Pouziva se k primemu zvyseni akustickeho vykonu reproduktoru.", "Pouziva se k prevodu PCM signalu na EFM kod.", "Pouziva se jen k merici filtraci zakladni harmonicke."], "Cielom je vacsia efektivna impedancia a mensie zatazenie predchadzajuceho stupna."],
  ["c-05-3", "C", "C 5.3 Jaka je typicka uloha operacniho zesilovace v predzesilovaci?", "Operacni zesilovac se zapornou zpetnou vazbou realizuje presne zesileni, filtraci nebo korekci.", ["Operacni zesilovac slouzi primarne jako reproduktorova membrana s velkou plochou.", "Operacni zesilovac bez zpetne vazby se pouziva pro presne linearni audio zesileni.", "Operacni zesilovac nahrazuje mechanickou ozvucnici u bassreflexu."], "Op-amp je univerzalny aktivny blok; presne vlastnosti urcuje najma spatna vazba."],

  ["d-01-1", "D", "D 1.1 Proc je u gramofonove prenosky potreba RIAA korekce?", "RIAA prehravaci korekce kompenzuje zaznamovou ekvalizaci, ktera pri zapisu omezuje basy a zduraznuje vysky.", ["RIAA korekce slouzi k prevodu stereo signalu na mono bez zmeny spektra.", "RIAA korekce je dolnopropustny filtr proti aliasingu pred ADC.", "RIAA korekce zamerne potlaci vysky pri zapisu i prehravani stejnym smerem."], "Pri gramofone je zaznam aj prehravanie tvarovane inverznymi krivkami."],
  ["d-01-2", "D", "D 1.2 Jak se pri prehravani projevuje RIAA charakteristika?", "Pri prehravani RIAA relativne zesiluje nizke frekvence a potlacuje vysoke frekvence oproti linearnimu prenosu.", ["Pri prehravani RIAA relativne potlacuje basy a zduraznuje vysky stejne jako zaznamova krivka.", "Pri prehravani RIAA meni jen hlasitost, frekvencni prenos zustava rovny.", "Pri prehravani RIAA nahrazuje vykonovy zesilovac pro reproduktor."], "Prehravacia korekcia musi byt opacna k zaznamovej."],
  ["d-01-3", "D", "D 1.3 Proc magnetodynamicka prenoska vyzaduje predzesilovac?", "Ma malou vystupni uroven a potrebuje soucasne zesileni i presnou RIAA korekci.", ["Ma velmi vysokou linkovou uroven a predzesilovac slouzi jen jako omezovac hlasitosti.", "Je digitalnim zdrojem signalu a potrebuje hlavne dekoder EFM.", "Vytvari akusticky tlak a musi se pripojit primo k reproduktoru."], "Phono vstup nie je len citlivy vstup; robi aj frekvencnu korekciu."],
  ["d-02-1", "D", "D 2.1 Co znamena fyziologicka regulace hlasitosti?", "Fyziologicka regulace pri male hlasitosti kompenzuje nizsi citlivost ucha hlavne v basech a castecne ve vyskach.", ["Fyziologicka regulace linearne zmensuje vsechny frekvence stejnym pomerem.", "Fyziologicka regulace je ochrana koncoveho stupne proti zkratu.", "Fyziologicka regulace je metoda odstraneni kvantizacniho sumu ditheringem."], "Loudness vychadza z kriviek rovnakej hlasitosti, nie z linearnej zmeny celeho pasma."],
  ["d-02-2", "D", "D 2.2 Kde v retezci se obvykle nachazi regulace hlasitosti?", "Regulace hlasitosti se obvykle nachazi pred vykonovym stupnem, aby ridila uroven signalu do dalsich zesilovacu.", ["Regulace hlasitosti se vklada az mezi reproduktorovou civku a membranu.", "Regulace hlasitosti je vzdy soucasti digitalniho error-correction kodu.", "Regulace hlasitosti se pouziva pouze pred mikrofonni kapsli jako akusticka prepazka."], "Hlasitost sa riadi v signalovej ceste pred koncovym zosilnovacom."],
  ["d-02-3", "D", "D 2.3 Proc neni obycejny potenciometr idealni fyziologicka regulace?", "Potenciometr meni hlavne celkovou uroven, zatimco fyziologicka regulace meni i frekvencni zavislost podle hlasitosti.", ["Potenciometr meni jen fazi signalu a nikdy nemeni amplitudu.", "Potenciometr je vzdy digitalni prevodnik a potrebuje vzorkovani.", "Potenciometr automaticky kompenzuje Fletcher-Munsonovy krivky pri kazdem zapojeni."], "Chytak je zamena regulacie hlasitosti s loudness korekciou."],
  ["d-03-1", "D", "D 3.1 Co delaji pasivni korektory basu a vysek?", "Pasivni korektory meni frekvencni prenos pomoci RC siti, ale samy signal nezesiluji.", ["Pasivni korektory zvysuji vykon zesilovace bez aktivniho prvku.", "Pasivni korektory meni vzorkovaci frekvenci digitalniho signalu.", "Pasivni korektory potlacuji pouze stejnosmernou slozku bez vlivu na audio pasmo."], "Pasivny korektor len tvaruje a tlmi; zisk musi dodat dalsi stupen."],
  ["d-03-2", "D", "D 3.2 Co je prechodova frekvence u tonoveho korektoru?", "Je to oblast, kde korektor zacina vyrazne menit prenos mezi strednim pasmem a regulovanou casti spektra.", ["Je to vzorkovaci frekvence, pri ktere prestava platit Nyquistuv teorem.", "Je to frekvence, pri ktere reproduktorova impedance musi byt presne 8 ohm.", "Je to frekvence nosne bezdratoveho mikrofonu."], "Tonovy korektor pracuje so sklonom a zlomom charakteristiky v urcitej frekvencnej oblasti."],
  ["d-03-3", "D", "D 3.3 Proc se korekcni zesilovac casto kombinuje se zpetnou vazbou?", "Zpetna vazba umozni presne nastavit frekvencne zavisle zesileni a snizit zkresleni aktivniho stupne.", ["Zpetna vazba se pouziva jen k pridani nahodneho sumu do signalu.", "Zpetna vazba neni v korekcich mozna, protoze by odstranila vsechny frekvence.", "Zpetna vazba nahrazuje mechanickou smerovost mikrofonu."], "Aktivna korekcia vyuziva frekvencne zavislu spatnu vazbu."],
  ["d-04-1", "D", "D 4.1 Na jakem principu pracuje analogova redukce sumu typu Dolby?", "Pracuje jako frekvencne a urovnove zavisly kompander, ktery pri zaznamu upravi dynamiku a pri prehravani ji obnovi.", ["Pracuje jako pevny dolnopropustny filtr, ktery stejne oreze signal pri zaznamu i prehravani.", "Pracuje jako RIAA korekce urcena vyhradne pro gramofonovou prenosku.", "Pracuje jako opticky zpusob cteni CD disku pomoci laseru."], "Dolby nie je len filter; je to riadena kompresia a expanzia."],
  ["d-04-2", "D", "D 4.2 Proc se pri redukci sumu casto zpracovavaji hlavne vysoke frekvence?", "Paskovy a elektronicky sum je tam rusivy a sluch je citlivy na syceni, zatimco uzitecny signal muze sum maskovat.", ["Protoze basove frekvence nelze zaznamenat na magneticky pasek.", "Protoze vysoke frekvence nemaji zadny hudebni obsah a lze je vzdy odstranit.", "Protoze vysoke frekvence se v analogove technice nemohou zesilovat."], "Redukcia sumu vyuziva maskovanie a urovnovu zavislost, nie slepe vymazanie vysek."],
  ["d-04-3", "D", "D 4.3 Co je expander v sumove redukci?", "Expander zvetsi dynamicky rozsah zpracovaneho signalu opacnym zpusobem k predchozi kompresi.", ["Expander zmensi dynamicky rozsah presne stejne jako kompresor.", "Expander meni analogovy signal na cislicovy kod PCM.", "Expander je mechanicka cast reproduktoru zvetsujici vychylku membrany."], "Kompresor a expander musia byt parove, aby sa obnovila dynamika a potlacil sum."],
  ["d-05-1", "D", "D 5.1 Proc se v audiu pouzivaji aktivni filtry misto civek?", "Aktivni RC filtry s operacnimi zesilovaci nahradi velke a ztratove civky a umozni presnejsi nastaveni.", ["Aktivni filtry se pouzivaji, protoze cívky neovlivnuji frekvencni prenos.", "Aktivni filtry jsou nutne jen pro mechanicke tlumeni membrany reproduktoru.", "Aktivni filtry vzdy pracuji bez napajeni jako pasivni korektory."], "V NF oblasti by civky mohli byt velke a neidealne; aktivne RC zapojenia su prakticke."],
  ["d-05-2", "D", "D 5.2 Co je aktivni vyhybka?", "Aktivni vyhybka deli signal na pasma pred vykonovymi zesilovaci pomoci aktivnich filtru.", ["Aktivni vyhybka deli vysoky reproduktorovy vykon az pasivnimi civkami v ozvucnici.", "Aktivni vyhybka je algoritmus pro Huffmanovo kodovani audia.", "Aktivni vyhybka je merici metoda harmonickeho zkresleni."], "Aktivna vyhybka pracuje na nizkej urovni signalu pred koncovymi stupnami."],
  ["d-05-3", "D", "D 5.3 Co urcuje rad nizkofrekvencniho filtru?", "Rad filtru urcuje sklon utlumu za mezni frekvenci a pocet energetickych akumulacnich prvku v modelu.", ["Rad filtru urcuje jen maximalni povolene napajeci napeti operacniho zesilovace.", "Rad filtru je pocet reproduktoru v ozvucnici bez vztahu ke sklonu charakteristiky.", "Rad filtru je vzorkovaci hloubka PCM signalu v bitech."], "Vyssi rad znamena strmsi prechod, ale moze priniest fazove a stabilitne dosledky."],

  ["e-01-1", "E", "E 1.1 Co charakterizuje tridu A koncoveho zesilovace?", "Ve tride A vede aktivni prvek po celou periodu signalu, proto ma dobrou linearitu, ale nizkou ucinnost.", ["Ve tride A vede kazdy prvek jen polovinu periody a bez klidoveho proudu dosahuje nejvyssi ucinnosti.", "Ve tride A se signal prevadi na PWM a vystupni tranzistory pouze spinaji.", "Ve tride A se pouziva jen digitalni sigma-delta modulator bez analogoveho vystupu."], "Trieda A je linearna, ale energeticky neefektivna."],
  ["e-01-2", "E", "E 1.2 Co charakterizuje tridu B nebo AB?", "Trida B vede priblizne pul periody na kazdy prvek, trida AB pridava klidovy proud pro zmenseni prechodoveho zkresleni.", ["Trida B vede celou periodu v jednom prvku a AB je jen jeji digitalni varianta.", "Trida AB nema zadny klidovy proud a proto ma vzdy nulove prechodove zkresleni.", "Trida B a AB pracuji pouze s akustickym tlakem bez elektrickeho signalu."], "AB je kompromis medzi ucinnostou triedy B a linearitou pri prechode nulou."],
  ["e-01-3", "E", "E 1.3 Co charakterizuje tridu D?", "Trida D prevadi signal na spinany prubeh, typicky PWM, a za vystupnim filtrem ziska analogovy vykonovy signal.", ["Trida D znamena, ze zesilovac ma ctyri analogove stupne zapojene za sebou.", "Trida D je ciste pasivni korektor hlasitosti bez napajeni.", "Trida D je linearni trida, kde tranzistor vede celou periodu jako ve tride A."], "D nie je digitalny zosilnovac v zmysle PCM; jadrom je spinany vykonovy stupen."],
  ["e-02-1", "E", "E 2.1 Co je prechodove zkresleni u push-pull stupne?", "Prechodove zkresleni vznika v okoli pruchodu nulou, kdy se stridaji vodici prvky a vznikne mrtve pasmo.", ["Prechodove zkresleni vznika pouze kvuli aliasingu pri spatne zvolene vzorkovaci frekvenci.", "Prechodove zkresleni je stejne jako akusticky zkrat mezi stranami membrany.", "Prechodove zkresleni je zamerna RIAA korekce pri prehravani gramofonu."], "Najtypickejsie je pri triede B, kde bez predpatia vznikne mrtva zona."],
  ["e-02-2", "E", "E 2.2 Proc se pouziva klidovy proud v tride AB?", "Klidovy proud udrzuje oba vystupni prvky lehce otevrene a zmensuje prechodove zkresleni.", ["Klidovy proud slouzi k odstraneni vsech vysokofrekvencnich slozek za LC filtrem.", "Klidovy proud zmensuje jen vstupni citlivost, nikoli linearitu vystupu.", "Klidovy proud je proud pro napajeni mikrofonni kapsle v bezdratovem prijimaci."], "Predpatie je kompromis: menej skreslenia, ale viac tepla."],
  ["e-02-3", "E", "E 2.3 Proc se v koncovych stupnich resi tepelna stabilizace?", "Zmeny teploty meni prahove napeti a proudy tranzistoru, coz muze vest k tepelnemu uteku.", ["Tepelna stabilizace je potreba jen u reproduktorove ozvucnice, ne u tranzistoru.", "Tepelna stabilizace meni vzorkovaci frekvenci tak, aby se snizil sum.", "Tepelna stabilizace slouzi vyhradne ke zmene smerovosti mikrofonu."], "Koncove tranzistory sa hreju; bez kompenzacie moze prud nekontrolovane rast."],
  ["e-03-1", "E", "E 3.1 Jak pracuje mustkovy vykonovy zesilovac?", "Mustkovy zesilovac budi zatez dvema protifazovymi vystupy, takze se na zatezi zvetsi napetovy rozkmit.", ["Mustkovy zesilovac spojuje oba vystupy paralelne se stejnou fazi, aby se napeti na zatezi zrusilo.", "Mustkovy zesilovac je pasivni filtr z civek a kondenzatoru v reproduktoru.", "Mustkovy zesilovac je metoda komprese dat pred ulozenim na disk."], "Bridge zvacsi napatie na zatazi, ale kazda polovica vidi narocnejsiu zataz."],
  ["e-03-2", "E", "E 3.2 Co se stane s vykonem pri zdvojnasobeni napeti na stejne zatezi?", "Pri stejne zatezi se vykon zvysi priblizne ctyrikrat, protoze P je umerne U na druhou.", ["Vykon se zvysi jen dvakrat, protoze P je primo umerne pouze napeti.", "Vykon zustane stejny, pokud se nezmeni frekvence signalu.", "Vykon se snizi na ctvrtinu, protoze napeti se rozdeli mezi dva vystupy."], "Pri rovnakej impedancii plati kvadraticka zavislost vykonu od napatia."],
  ["e-03-3", "E", "E 3.3 Jake riziko ma mustkove zapojeni pro zesilovac?", "Kazda polovina zesilovace je zatizena jako pri nizsi efektivni impedanci, proto rostou proudove a tepelne naroky.", ["Rizikem je jen ztrata stereofonni informace, proudove naroky se nemeni.", "Rizikem je, ze reproduktor prestane mit mechanickou rezonanci.", "Rizikem je prevod analogoveho signalu na PCM bez ditheringu."], "Bridge vyzera jednoducho, ale prudove zatazenie koncovych prvkov je tvrdsie."],
  ["e-04-1", "E", "E 4.1 Proc musi mit koncovy zesilovac ochranu proti zkratu?", "Zkrat reproduktoroveho vystupu muze vyvolat proud prekračujici bezpecnou oblast tranzistoru.", ["Zkrat vystupu zpusobi jen mensi hlasitost, proudove pretizeni nevznika.", "Zkrat vystupu je bezny zpusob mereni vstupni citlivosti.", "Zkrat vystupu se resi pouze RIAA korekci."], "Koncovy stupen dodava velke prudy, preto ochrana sleduje SOA a prud."],
  ["e-04-2", "E", "E 4.2 K cemu slouzi ochrana reproduktoru rele?", "Rele muze odpojit reproduktor pri stejnosmernem napeti, zpozdit pripojeni nebo ochranit pri poruse.", ["Rele zvysuje rozliseni DAC prevodniku.", "Rele vytvari kardioidni smerovou charakteristiku reproduktoru.", "Rele nahrazuje kompresor v Dolby systemu."], "Reproduktor nesmie dostat DC zlozku pri poruche koncoveho stupna."],
  ["e-04-3", "E", "E 4.3 Co je bezpecna pracovni oblast tranzistoru?", "Bezpecna pracovni oblast omezuje kombinaci napeti, proudu, vykonu a casu, ve ktere prvek vydrzi bez poskozeni.", ["Bezpecna pracovni oblast je frekvencni pasmo, v nemz je lidske ucho nejcitlivejsi.", "Bezpecna pracovni oblast je oblast pameti, kam se uklada Huffmanuv kod.", "Bezpecna pracovni oblast je misto v mistnosti s difuznim polem."], "SOA spaja napatia, prudy, vykon a teplotu; samotny maximalny prud nestaci."],
  ["e-05-1", "E", "E 5.1 Proc ma trida D vysokou ucinnost?", "Vystupni tranzistory pracuji prevazne ve spinacim rezimu, tedy s malym soucasnym napetim a proudem na prvku.", ["Vystupni tranzistory pracuji stale v linearni oblasti s velkym ubytkem napeti.", "Ucinnost je vysoka proto, ze se nepouziva zadny vystupni filtr.", "Ucinnost je vysoka jen diky zvyseni vzorkovaci hloubky PCM."], "Spinany prvok ma male straty, ked je bud zavrety, alebo tvrdo otvoreny."],
  ["e-05-2", "E", "E 5.2 Proc je u tridy D potreba vystupni filtr?", "Vystupni filtr potlaci spinaci slozku a ponecha nizkofrekvencni signal pro reproduktor.", ["Vystupni filtr vytvari spinaci PWM signal z analogoveho vstupu.", "Vystupni filtr zvysuje akusticky tlak mikrofonu pred prevodem.", "Vystupni filtr nahrazuje napajeci zdroj koncoveho stupne."], "Za PWM je treba oddelit audio pasmo od nosnej/spinacej zlozky."],
  ["e-05-3", "E", "E 5.3 Jake problemy muze prinest trida D?", "Trida D muze prinest elektromagneticke ruseni, naroky na filtr a zkresleni zavisle na zatezi nebo modulaci.", ["Trida D nema zadne vysokofrekvencni slozky, proto nepotrebuje EMC reseni.", "Trida D ma vzdy vetsi ztraty nez trida A pri stejnem vykonu.", "Trida D neumi budit reproduktor, protoze pracuje jen s mikrofonni urovni."], "Vysoka ucinnost nie je zadarmo; treba riesit filtraciu, EMC a spravanie so zatazou."],

  ["f-01-1", "F", "F 1.1 Jake bloky obsahuje digitalni zpracovani analogoveho audio signalu?", "Typicky obsahuje antialias filtr, vzorkovani se zachycenim, kvantovani, kodovani, zpracovani a zpetny prevod s rekonstrukci.", ["Obsahuje jen kvantovani, protoze filtrovani a vzorkovani jsou mechanicke procesy.", "Obsahuje jen vykonovy zesilovac a reproduktorovou vyhybku.", "Obsahuje pouze RIAA korekci a gramofonovou prenosku."], "Digitalizacia nie je len ADC; pred a za prevodnikom su dolezite filtre."],
  ["f-01-2", "F", "F 1.2 Proc je pred ADC potreba antialias filtr?", "Antialias filtr omezi spektrum vstupu pod Nyquistovu mez, aby vyssi frekvence nevznikly v pasmu jako aliasy.", ["Antialias filtr po ADC obnovuje schodovity signal na analogovou vlnu.", "Antialias filtr zvysuje kvantizacni sum, aby byl mene korelovany se signalem.", "Antialias filtr se pouziva jen u mikrofonu se smerovou charakteristikou osmicka."], "Pred vzorkovanim sa musia odstranit zlozky, ktore by sa preklopili do audio pasma."],
  ["f-01-3", "F", "F 1.3 Proc je po DAC potreba rekonstrukcni filtr?", "Rekonstrukcni filtr potlaci obrazy spektra a vysokofrekvencni slozky vznikle cislicove-analogovym prevodem.", ["Rekonstrukcni filtr zabrani aliasingu jeste pred vzorkovanim vstupu.", "Rekonstrukcni filtr zvysi rozliseni ulozeneho kodu z 16 na 24 bitu.", "Rekonstrukcni filtr urcuje smerovou charakteristiku reproduktoru."], "Po DAC sa filtruje obrazove spektrum, pred ADC aliasing; toto je caste zamienanie."],
  ["f-02-1", "F", "F 2.1 Co je kvantizacni zkresleni?", "Kvantizacni zkresleni vznikne zaokrouhlenim amplitudy vzorku na konecny pocet kvantizacnich hladin.", ["Kvantizacni zkresleni vznikne jen mechanickou rezonanci reproduktorove membrany.", "Kvantizacni zkresleni je vzdy presne druha harmonicka analogoveho zesilovace.", "Kvantizacni zkresleni je odraz zvuku mezi rovnobeznymi stenami mistnosti."], "Kvantovanie robi chybu amplitudy, nie casoveho odberu ani akustiky."],
  ["f-02-2", "F", "F 2.2 Jak souvisi pocet bitu s idealnim odstupem signal-sum?", "Kazdy pridany bit zlepsi idealni kvantizacni odstup priblizne o 6 dB.", ["Kazdy pridany bit zlepsi odstup presne o 3 dB, protoze se zdvoji frekvence.", "Pocet bitu meni jen horni mezni frekvenci, nikoli kvantizacni sum.", "Kazdy pridany bit zhorsuje odstup, protoze pribude vice hladin sumu."], "Bitova hlbka urcuje pocet hladin; dvojnasobok hladin je asi 6 dB."],
  ["f-02-3", "F", "F 2.3 K cemu slouzi dither?", "Dither pridava male rizene ruseni, aby se kvantizacni chyba dekorelovala od signalu a pusobila spis jako sum.", ["Dither odstrani potrebu vzorkovani a nahradi ADC analogovym filtrem.", "Dither zvysuje harmonicke zkresleni zamerne na jednu konkretni frekvenci.", "Dither je kompresni metoda pro ztracenou redukci datoveho toku."], "Dither moze zvysit sumove dno, ale odstrani neprijemne korelovane kvantizacne skreslenie."],
  ["f-03-1", "F", "F 3.1 Co znamena prevzorkovani v digitalnim audiu?", "Prevzorkovani pouziva vyssi vnitrni vzorkovaci frekvenci, cimz zjednodusi analogove filtry a rozlozi kvantizacni sum.", ["Prevzorkovani snizi vzorkovaci frekvenci pod Nyquistovu mez, aby se usetrila data.", "Prevzorkovani je zmena hlasitosti podle Fletcher-Munsonovych krivek.", "Prevzorkovani je zapojeni dvou reproduktoru do mustku."], "Oversampling presunie naroky z analogovych filtrov na digitalne spracovanie."],
  ["f-03-2", "F", "F 3.2 Co je interpolace pri zvyseni vzorkovaci frekvence?", "Interpolace doplni mezi puvodni vzorky nove hodnoty a digitalnim filtrem omezi vznikle obrazove slozky.", ["Interpolace odstrani kazdy druh sumu bez zmeny spektra.", "Interpolace je prepnuti zesilovace z tridy A do tridy D.", "Interpolace znamena nahodne vynechani vzorku pred ulozenim."], "Pri upsamplingu sa vzorky doplnia a filtracia vytvori spravne pasmo."],
  ["f-03-3", "F", "F 3.3 Co je decimace pri snizeni vzorkovaci frekvence?", "Decimace snizi pocet vzorku az po digitalnim omezeni spektra proti aliasingu.", ["Decimace je snizeni bitove hloubky bez jakekoliv zmeny vzorkovaci frekvence.", "Decimace je zesileni basu fyziologickou regulaci.", "Decimace znamena pridat vysoke frekvence pred vzorkovanim."], "Pred vynechavanim vzorkov sa musi pasmo obmedzit, inak vznikne aliasing."],
  ["f-04-1", "F", "F 4.1 Co dela obvod sample-and-hold?", "Sample-and-hold kratce odebere hodnotu vstupniho signalu a podrzi ji po dobu prevodu.", ["Sample-and-hold trvale zprumeruje cele spektrum a odstrani vsechny harmonicke.", "Sample-and-hold je vykonovy spinac mezi zesilovacem a reproduktorem.", "Sample-and-hold je akusticka komora pro mereni dozvuku."], "S/H stabilizuje hodnotu pre ADC, aby sa pocas prevodu nemenila."],
  ["f-04-2", "F", "F 4.2 Co je aperturova chyba?", "Aperturova chyba souvisi s nejistotou casu odebrani vzorku a u rychlych zmen se projevi jako chyba amplitudy.", ["Aperturova chyba je stejnosmerny odpor mikrofonni kapsle.", "Aperturova chyba je zpusobena pouze spatnou RIAA korekci.", "Aperturova chyba je vzdy harmonicke zkresleni druheho radu."], "Casova neistota vzorkovania sa pri strmych signaloch premeni na amplitudovu chybu."],
  ["f-04-3", "F", "F 4.3 Co je pokles drzeni v sample-and-hold obvodu?", "Pokles drzeni je zmena podrzene hodnoty behem prevodu vlivem uniku a nedokonalosti kondenzatoru.", ["Pokles drzeni je ztrata smerovosti mikrofonu pri vysokych frekvencich.", "Pokles drzeni je prechodove zkresleni push-pull stupne.", "Pokles drzeni je komprese dynamiky pred Dolby expanzi."], "Hold nie je dokonaly; kondenzator moze pocas prevodu mierne stratit napatie."],
  ["f-05-1", "F", "F 5.1 Jak se lisi aliasing a obrazove spektrum po DAC?", "Aliasing vznikne pri vzorkovani ze vstupnich slozek nad Nyquistem, obrazove spektrum po DAC vznikne opakovanim spektra kolem nasobku vzorkovaci frekvence.", ["Aliasing i obrazove spektrum jsou totozne se stejnosmernou slozkou signalu.", "Aliasing vznikne az v reproduktoru, obrazove spektrum vznikne v mikrofonni kapsli.", "Aliasing se odstranuje reproduktorovou vyhybkou a obrazove spektrum RIAA korekci."], "Pred ADC filtr proti aliasu, po DAC rekonstrukcny filtr proti obrazom."],
  ["f-05-2", "F", "F 5.2 Proc jsou strme analogove filtry problematicke?", "Strme analogove filtry maji narocne soucastky a mohou mit velke fazove zpozdeni nebo zvlneni v pasmu.", ["Strme analogove filtry jsou problematicke, protoze nemohou ovlivnit frekvencni prenos.", "Strme analogove filtry vzdy zvysi bitovou hloubku signalu.", "Strme analogove filtry meni jen dynamiku, nikoli spektrum."], "Oversampling casto pomaha zjemnit naroky na analogove filtre."],
  ["f-05-3", "F", "F 5.3 Co je hlavni vyhoda digitalni filtrace v prevodnicich?", "Digitalni filtr muze byt presnejsi, stabilnejsi a opakovatelnejsi nez slozity analogovy filtr.", ["Digitalni filtr odstrani potrebu vstupniho a vystupniho analogoveho obvodu uplne.", "Digitalni filtr funguje jen na stejnosmerny signal a ne na audio pasmo.", "Digitalni filtr zvysuje akusticky vykon reproduktoru bez zesilovace."], "Digitalna filtracia je presna a stabilna, ale analogove casti prevodnika stale zostavaju potrebne."],

  ["g-01-1", "G", "G 1.1 Jak pracuje aproximacni ADC prevodnik?", "Aproximacni ADC porovnava vstup s vystupem vnitrniho DAC a postupne urcuje bity od nejvyssiho k nejnizsimu.", ["Aproximacni ADC pocita jen prumer vstupniho signalu za celou nahravku.", "Aproximacni ADC prevadi data pomoci Huffmanova kodu bez analogoveho porovnavani.", "Aproximacni ADC funguje jako reproduktorova vyhybka se tremi pasmy."], "SAR prevodnik je postupne binarne hladanie kodu pomocou komparatora a DAC."],
  ["g-01-2", "G", "G 1.2 Co je rozliseni ADC prevodniku?", "Rozliseni udava pocet bitu vystupniho kodu a tim pocet dostupnych kvantizacnich hladin.", ["Rozliseni udava jen nejvyssi vstupni frekvenci bez vztahu k amplitudovym hladinam.", "Rozliseni udava vykon, ktery prevodnik doda do reproduktoru.", "Rozliseni udava smerovou charakteristiku mikrofonu."], "Rozlisenie je amplitudove cleneni, nie samotna vzorkovacia frekvencia."],
  ["g-01-3", "G", "G 1.3 Co znamenaji chyby INL a DNL?", "DNL popisuje chybu velikosti jednotlivych kodovych kroku, INL celkovou odchylku prevodnikove charakteristiky od idealni primky.", ["DNL je odstup signal-sum a INL je vstupni impedance zesilovace.", "DNL popisuje jen sum mikrofonu a INL jen akusticky vykon.", "DNL i INL jsou typy Dolby redukce sumu."], "DNL je lokalna chyba kroku, INL je integrovana chyba charakteristiky."],
  ["g-02-1", "G", "G 2.1 Jak pracuje DAC s vahovymi proudy nebo odpory?", "Jednotlive bity spinaji vahovane prispevky, jejichz soucet vytvori analogovou vystupni hodnotu.", ["Jednotlive bity urcuji smerovost mikrofonu a ne analogovou amplitudu.", "DAC jen filtruje akusticky tlak bez elektricke reference.", "DAC prevadi analogovou hodnotu na kod postupnym porovnavanim."], "DAC sklada analogovu hodnotu zo zavazenych bitovych prispevkov."],
  ["g-02-2", "G", "G 2.2 Proc se pouziva sit R-2R?", "R-2R sit vytvari binarne vazene napeti nebo proudy s pouzitim jen dvou hodnot odporu.", ["R-2R sit je akusticky rezonator bassreflexove ozvucnice.", "R-2R sit je algoritmus ztracene psychoakusticke komprese.", "R-2R sit vytvari smerovou charakteristiku kardioida."], "R-2R ulahcuje presnu vyrobu DAC, lebo netreba mnoho roznych odporovych hodnot."],
  ["g-02-3", "G", "G 2.3 Na cem zavisi absolutni presnost DAC?", "Zavisi na presnosti referencniho napeti, linearite vahovych prvku a chybach spinacu.", ["Zavisi pouze na hlasitosti reproduktoru v mistnosti.", "Zavisi jen na frekvenci sitoveho napajeni, nikoli na referenci.", "Zavisi pouze na poctu kanalu stereo signalu."], "Kod sam nestaci; vystup urcuje referencia a realne neidealnosti prvkov."],
  ["g-03-1", "G", "G 3.1 Jak pracuje delta modulace?", "Delta modulace prenasi informaci o tom, zda se ma odhad signalu v kazdem kroku zvysit nebo snizit o pevny krok.", ["Delta modulace prenasi vzdy celou absolutni amplitudu kazdeho vzorku jako PCM slovo.", "Delta modulace meri jen harmonicke zkresleni analogoveho zesilovace.", "Delta modulace je mechanicky princip pohybu membrany reproduktoru."], "DM koduje zmenu, nie absolutnu hodnotu v plnej bitovej hlbke."],
  ["g-03-2", "G", "G 3.2 Co je granularni sum u delta modulace?", "Granularni sum vznikne, kdyz je krok prilis velky pro male zmeny signalu a odhad kmitá kolem skutecne hodnoty.", ["Granularni sum vznikne, kdyz je krok prilis maly pro prudkou zmenu a odhad nestaci sledovat signal.", "Granularni sum je sum ozvucnice zpusobeny stojatymi vlnami.", "Granularni sum je elektromagneticke ruseni tridy D za vystupnim filtrem."], "Pri velkom kroku DM zbytocne kmitá okolo signalu; pri malom kroku hrozi slope overload."],
  ["g-03-3", "G", "G 3.3 Co je pretizeni strmosti u delta modulace?", "Pretizeni strmosti vznikne, kdyz je krok prilis maly na sledovani rychle zmeny vstupniho signalu.", ["Pretizeni strmosti vznikne, kdyz je krok prilis velky a odhad kmitá kolem konstantni hodnoty.", "Pretizeni strmosti je prechodove zkresleni koncoveho stupne tridy B.", "Pretizeni strmosti je chyba smerove charakteristiky mikrofonu."], "Slope overload je opacny problem ako granularny sum: odhad nestaci dobiehat strmy signal."],
  ["g-04-1", "G", "G 4.1 Jak pomaha adaptivni delta modulace?", "Adaptivni delta modulace meni velikost kroku podle prubehu signalu, aby omezila granularni sum i pretizeni strmosti.", ["Adaptivni delta modulace meni pouze smerovou charakteristiku mikrofonu podle hlasitosti.", "Adaptivni delta modulace zamerne udrzuje krok stale stejny bez ohledu na signal.", "Adaptivni delta modulace je pasivni RIAA korekce s pevnou casovou konstantou."], "ADM prisposobi krok: vacsi pre strme zmeny, mensi pre jemne casti."],
  ["g-04-2", "G", "G 4.2 Co je sigma-delta modulace?", "Sigma-delta modulace pouziva prevzorkovani, zpetnou vazbu a tvarovani sumu k presnemu popisu pasma zajmu.", ["Sigma-delta modulace je jen analogovy kompresor hlasitosti bez vzorkovani.", "Sigma-delta modulace je mechanicka rezonance reproduktoru v ozvucnici.", "Sigma-delta modulace je pevny kod CD EFM bez kvantizacni zpetne vazby."], "Sigma-delta vyuziva vysoky oversampling a noise shaping."],
  ["g-04-3", "G", "G 4.3 Co znamena tvarovani kvantizacniho sumu?", "Tvarovani sumu presune znacnou cast kvantizacniho sumu mimo uzitecne pasmo, typicky do vyssich frekvenci.", ["Tvarovani sumu rovnomerne zvysi sum ve vsech pasmech, aby se zjednodusil filtr.", "Tvarovani sumu znamena mechanicky utlum v ozvucnici.", "Tvarovani sumu je totez jako zmena smerove charakteristiky mikrofonu."], "Noise shaping sum neodstrani, ale zmeni jeho spektralne rozlozenie."],
  ["g-05-1", "G", "G 5.1 Proc se pri digitalnim zaznamu pouziva prokladani dat?", "Prokladani rozlozi shlukove chyby do vice mist, aby je korekcni kod dokazal opravit nebo zamaskovat.", ["Prokladani zvysi analogovy vykon reproduktoru bez zesilovace.", "Prokladani slouzi jen k nastaveni loudness korekce.", "Prokladani meni mikrofonni signal na kardioidni smerovost."], "Interleaving meni burst chybu na rozptylene chyby, ktore sa lepsie opravujú."],
  ["g-05-2", "G", "G 5.2 Jakou ulohu maji Reed-Solomonovy kody v audio zaznamu?", "Pridavaji redundantni informace pro detekci a opravu chyb v blocich digitalnich dat.", ["Slouzi k analogovemu zesileni signalu z mikrofonu.", "Slouzi k mechanickemu tlumeni reproduktorove membrany.", "Slouzi k RIAA ekvalizaci pri prehravani desky."], "Chybova ochrana pridava redundanciu, aby citanie z media neznamenalo okamzitu stratu zvuku."],
  ["g-05-3", "G", "G 5.3 Co je maskovani chyby pri prehravani digitalniho audia?", "Kdyz chyba nejde opravit, prehravac muze chybici vzorky odhadnout interpolaci nebo kratkym utlumenim.", ["Kdyz chyba nejde opravit, prehravac vzdy zvysi basy a tim obnovi puvodni data.", "Maskovani chyby je psychoakusticka komprese, ktera predem zahodi vsechny tiche zvuky.", "Maskovani chyby je zmena vystupni impedance zesilovace."], "Oprava dat a zakrytie neopravenych chyb su rozdielne vrstvy ochrany."],

  ["h-01-1", "H", "H 1.1 Proc se v audiu redukuje datovy tok?", "Datovy tok se redukuje odstranenim redundance a psychoakusticky mene vyznamnych informaci pri zachovani prijemne kvality.", ["Datovy tok se redukuje zvysenim vzorkovaci frekvence a bitove hloubky.", "Datovy tok se redukuje zesilenim signalu ve vykonovem stupni.", "Datovy tok se redukuje zmenou smerove charakteristiky mikrofonu."], "Redukcia moze byt bezstratova alebo stratova; pri audiu sa casto vyuziva psychoakustika."],
  ["h-01-2", "H", "H 1.2 Jaky je rozdil mezi bezeztratovou a ztratovou kompresi?", "Bezeztratova komprese obnovi presne puvodni data, ztratova odstrani informace povazovane za mene slyšitelne.", ["Bezeztratova komprese vzdy meni zvuk, ztratova vzdy obnovi bitove totozna data.", "Bezeztratova komprese funguje jen v analogovych zesilovacich.", "Ztratova komprese je totéz jako pridani ditheringu pred kvantovanim."], "Lossless setri redundanciu, lossy vyuziva aj irelevanciu pre sluch."],
  ["h-01-3", "H", "H 1.3 Co je psychoakusticky model kodéru?", "Psychoakusticky model odhaduje, ktere spektralni slozky a kvantizacni sum budou pro posluchace maskovane.", ["Psychoakusticky model meri jen elektrickou impedanci reproduktoru.", "Psychoakusticky model je presna RIAA krivka pro gramofon.", "Psychoakusticky model slouzi jen k oprave bitovych chyb na CD."], "Koder neprideluje bity rovnomerne; riadi sa prahmi pocutelnosti a maskovania."],
  ["h-02-1", "H", "H 2.1 Co je simultanni frekvencni maskovani?", "Silna slozka muze zvysit prah slyseni pro blizke frekvence ve stejnem casovem okamziku.", ["Silna slozka zvysi prah slyseni pouze pro vsechny frekvence stejne daleko od ni.", "Maskovani znamena, ze ticha slozka vzdy prekryje hlasitou slozku.", "Maskovani je ciste elektricka ochrana proti zkratu zesilovace."], "Maskovanie je frekvencne zavisle a najviac posobi v blizkych kritickych pasmach."],
  ["h-02-2", "H", "H 2.2 Co jsou kriticka pasma sluchu?", "Kriticka pasma jsou frekvencni oblasti, ve kterych se slozky silne ovlivnuji pri vnimani hlasitosti a maskovani.", ["Kriticka pasma jsou rozsahy vystupniho vykonu koncoveho zesilovace.", "Kriticka pasma jsou pevne bloky Reed-Solomonova kodu na CD.", "Kriticka pasma jsou mechanicke rezonance ozvucnice bez vztahu ke sluchu."], "Koder casto pracuje podla sluchovych pasiem, nie iba podla rovnomernych Hz usekov."],
  ["h-02-3", "H", "H 2.3 Proc muze byt kvantizacni sum v kompresi skryt?", "Kdyz je kvantizacni sum pod maskovacim prahem daneho pasma, posluchac ho pravdepodobne neuslysi.", ["Kvantizacni sum je skryt, kdyz je vzdy presne nad maskovacim prahem.", "Kvantizacni sum je skryt pouze zvysenim vystupni impedance zesilovace.", "Kvantizacni sum nelze nikdy maskovat, protoze nema spektrum."], "Cielom je drzat chybu pod prahom pocutelnosti v danom case a pasme."],
  ["h-03-1", "H", "H 3.1 Co je casove maskovani?", "Casove maskovani znamena, ze silny zvuk ovlivni slysitelnost slabších zvuku tesne pred nim nebo po nem.", ["Casove maskovani znamena, ze zvuk maskuje jen slozky se stejnou frekvenci po celou dobu nahravky.", "Casove maskovani je stejny jev jako tepelny sum odporu.", "Casove maskovani se pouziva jen k mereni impedance reproduktoru."], "Sluch ma casovu zotrvacnost; existuje predmaskovanie aj postmaskovanie."],
  ["h-03-2", "H", "H 3.2 Co je predmaskovani?", "Predmaskovani je kratke maskovani slabeho zvuku, ktery nastal tesne pred silnym maskerem.", ["Predmaskovani je dlouhodobe maskovani vsech zvuku po silnem impulzu.", "Predmaskovani je omezeni spektra pred ADC antialias filtrem.", "Predmaskovani je ochrana zesilovace pred zapnutim."], "Predmaskovanie je kratke, ale dolezite pri impulznych zvukoch a kodekoch."],
  ["h-03-3", "H", "H 3.3 Proc jsou preecho artefakty problem ztratove komprese?", "Pri spatnem rozdeleni kvantizacniho sumu muze byt sum slyset tesne pred prudkym transientem.", ["Preecho je zpozdeni reproduktorove membrany zpusobene nizkou impedanci.", "Preecho je vzdy zadouci dozvuk mistnosti.", "Preecho je DC slozka ve vystupu koncoveho stupne."], "Kodery musia pri transientnych signaloch skratit blok alebo zmenit alokaciu bitov."],
  ["h-04-1", "H", "H 4.1 Proc kodeky pouzivaji transformaci do frekvencni oblasti?", "Transformace rozlozi signal na spektralni slozky, pro ktere lze ridit kvantovani podle maskovani.", ["Transformace do frekvencni oblasti slouzi jen k fyzickemu otaceni CD disku.", "Transformace odstrani potrebu psychoakustickeho modelu.", "Transformace zmeni analogovy signal primo na akusticky tlak."], "Vo frekvencii sa lepsie vidi, kde moze byt kvantizacna chyba skryta."],
  ["h-04-2", "H", "H 4.2 Co znamena alokace bitu v kodeku?", "Alokace bitu prirazuje ruznym pasmum nebo koeficientum ruzny pocet bitu podle jejich slyšitelnosti a energie.", ["Alokace bitu znamena pevne pridelit stejny pocet bitu kazde frekvenci bez ohledu na signal.", "Alokace bitu je nastaveni klidoveho proudu tridy AB.", "Alokace bitu je volba mechanickeho prumeru membrany reproduktoru."], "Bity sa davaju tam, kde ich sluch najviac potrebuje."],
  ["h-04-3", "H", "H 4.3 Proc se v MPEG audio pouzivaji ramce?", "Ramce umoznuji zpracovat casove useky signalu s vlastnimi pomocnymi informacemi, bitovou alokaci a daty.", ["Ramce jsou analogove ozvucnice pro snizeni akustickeho zkratu.", "Ramce jsou pouze mechanicke znacky na magnetofonovem pasku.", "Ramce vzdy obsahuji jen jednu sinusovku bez pomocnych dat."], "Audio kodek spracuje bloky dat; v nich nesie aj informacie potrebne na dekodovanie."],
  ["h-05-1", "H", "H 5.1 Co dela Huffmanovo kodovani?", "Huffmanovo kodovani priradi castejsim symbolum kratší kody a ridším symbolum delší kody bez ztraty informace.", ["Huffmanovo kodovani psychoakusticky maze neslysitelne slozky samo o sobe.", "Huffmanovo kodovani prevadi akusticky tlak na napeti mikrofonu.", "Huffmanovo kodovani je analogovy expander v Dolby systemu."], "Huffman je entropicke bezstratove kodovanie; stratovost vznika inde."],
  ["h-05-2", "H", "H 5.2 Co je redundance v audio datech?", "Redundance je opakovatelna nebo predvidatelna cast informace, kterou lze zapsat usporneji bez zmeny obsahu.", ["Redundance je vzdy neslysitelna psychoakusticka slozka, kterou nelze obnovit.", "Redundance je mechanicka rezonance reproduktoru.", "Redundance je pouze kvantizacni chyba zpusobena malym poctem bitu."], "Redundancia sa da stlacit bez straty; irelevancia sa pri stratovej kompresii zahadzuje."],
  ["h-05-3", "H", "H 5.3 Proc samotne entropicke kodovani nestaci pro velkou audio kompresi?", "Protoze bez psychoakustickeho odstraneni irelevantnich slozek umi vyuzit hlavne statistickou redundanci.", ["Protoze entropicke kodovani vzdy zhorsuje analogovy odstup signal-sum.", "Protoze entropicke kodovani funguje jen pro obraz, nikdy pro audio.", "Protoze entropicke kodovani meni smerovou charakteristiku mikrofonu."], "Velke datove uspory u MP3/AAC stoja hlavne na psychoakustike a kvantovani, nie len na Huffmane."],

  ["i-01-1", "I", "I 1.1 Co je EFM kodovani na CD?", "EFM prevadi osmibitove symboly na ctyrnactibitove tak, aby se usnadnilo cteni z disku a omezily nevhodne prechody.", ["EFM je psychoakusticka ztratova komprese podobna MP3.", "EFM je analogova RIAA korekce pro gramofon.", "EFM je metoda mereni harmonickeho zkresleni zesilovace."], "EFM nie je audio kompresia; je to kanalovy kod pre fyzicky zaznam."],
  ["i-01-2", "I", "I 1.2 K cemu slouzi rizeni DSV pri CD zaznamu?", "Rizeni DSV pomaha omezit stejnosmernou slozku a nizkofrekvencni odchylky v kanálovem signalu.", ["DSV urcuje subjektivni hlasitost ve phonech.", "DSV nastavuje klidovy proud vykonoveho zesilovace.", "DSV je smerova charakteristika mikrofonu ve tvaru osmicky."], "Pri optickom citani je dolezity kanalovy signal bez nevhodnej DC zlozky."],
  ["i-01-3", "I", "I 1.3 Co je CIRC u CD?", "CIRC je kombinace prokladani a Reed-Solomonovych kodu pro opravu a maskovani chyb pri cteni CD.", ["CIRC je kompresor dynamiky v analogovem magnetofonu.", "CIRC je typ mikrofonni kapsle s kulovou charakteristikou.", "CIRC je filtr RIAA pro prenosku."], "CD pouziva silnu chybovu ochranu, pretoze opticke medium ma skrabance a burst chyby."],
  ["i-02-1", "I", "I 2.1 Co je PASC u DCC?", "PASC je ztratove podpasmove kodovani pouzite v DCC, vychazejici z psychoakusticke redukce dat.", ["PASC je bezeztratovy kanalovy kod pro CD EFM.", "PASC je analogova metoda biasu v koncovem zesilovaci.", "PASC je mechanicka forma ozvucnice reproduktoru."], "PASC patri k perceptualnej kompresii, nie k ochrane chyb na CD."],
  ["i-02-2", "I", "I 2.2 Jak se v podpasmove kompresi vyuziva psychoakustika?", "Signal se rozdeli do pasem a kazde pasmo se kvantuje podle energie a maskovaciho prahu.", ["Kazde pasmo se vzdy kvantuje stejne, aby psychoakusticky model nebyl potreba.", "Pasmove deleni slouzi jen ke zvyseni vystupniho vykonu reproduktoru.", "Podpasmove kodovani je ciste mechanicke snimani magneticke stopy."], "Pasma umoznia cielene pridelovat bity podla pocutelnosti chyb."],
  ["i-02-3", "I", "I 2.3 Proc ztratovy format nemusi byt bitove totozny po dekodovani?", "Protoze kodér zamerne odstrani nebo hrubeji kvantuje informace povazovane za mene slyšitelne.", ["Protoze vsechny ztratove formaty pouzivaji jen chybove kody bez kvantovani.", "Protoze dekoder ztratoveho formatu nesmi vytvorit analogovy signal.", "Protoze ztratovy format vzdy zvysi bitovou hloubku na nekonecno."], "Stratovy zaznam cieli na vnimanu kvalitu, nie na presnu obnovu bitov."],
  ["i-03-1", "I", "I 3.1 Co je AC-3 z hlediska principu kodovani?", "AC-3 je vicekanalovy ztratovy perceptualni kodek s transformacnim zpracovanim a bitovou alokaci.", ["AC-3 je analogovy sumovy expander pro kazetovy magnetofon.", "AC-3 je kanalovy kod pro cteni CD bez komprese audia.", "AC-3 je trida vykonoveho zesilovace s PWM spinanim."], "AC-3 patri ku kodekom Dolby Digital, nie k analogovej Dolby sumovej redukcii."],
  ["i-03-2", "I", "I 3.2 Proc AC-3 pouziva metadata nebo rezimy pro vicekanalovy zvuk?", "Metadata pomahaji dekoderu spravne interpretovat kanaly, dynamiku a pripadne downmixovani.", ["Metadata nahrazuji vsechny audio vzorky a proto neni potreba prenaset koeficienty.", "Metadata meni mechanickou stopu magnetofonove pasky.", "Metadata slouzi jen k nastaveni odporu reproduktorove civky."], "Viackanalovy kodek potrebuje popis, ako signal prehravat v roznych zostavach."],
  ["i-03-3", "I", "I 3.3 Co je coupling v perceptualnim vicekanalovem kodeku?", "Coupling muze sdilet vybrane vysokofrekvencni informace mezi kanaly, kdyz to psychoakusticky neprekazi.", ["Coupling je spojeni vystupu mustkoveho zesilovace primo na zem.", "Coupling je RIAA korekce pri prehravani gramofonove desky.", "Coupling je mechanicke uchyceni mikrofonni kapsle bez vlivu na data."], "Pri vyssich frekvenciach moze byt smerova presnost mensia, co kodek vyuzije."],
  ["i-04-1", "I", "I 4.1 Na jakem principu pracuje MiniDisc zaznam?", "MiniDisc pouziva magnetoopticky zaznam a ztratovou psychoakustickou kompresi ATRAC.", ["MiniDisc pouziva pouze analogovy zapis bez digitalni komprese.", "MiniDisc je mechanicky gramofonovy zaznam s RIAA korekci.", "MiniDisc uklada nekomprimovane 24bit PCM pri 192 kHz jako standardni rezim."], "MD spaja fyzicky magnetoopticky nosic a datovu redukciu ATRAC."],
  ["i-04-2", "I", "I 4.2 Co znamena magnetoopticky zapis?", "Pri zapisu se misto lokalne zahriva laserem a magneticke pole urci orientaci zaznamu.", ["Magnetoopticky zapis znamena, ze zvuk je zapsan jen mechanickou drážkou.", "Magnetoopticky zapis znamena, ze data vznikaji polarizaci mikrofonni kapsle.", "Magnetoopticky zapis znamena, ze vystupni tranzistory pracuji ve tride D."], "Laser pomaha zmenit magneticky stav, samotne citanie potom vyuziva opticky efekt."],
  ["i-04-3", "I", "I 4.3 Jak se magnetoopticky zaznam cte?", "Cteni vyuziva zmenu polarizace odrazeného svetla podle magnetizace zaznamove vrstvy.", ["Cteni vyuziva mechanickou jehlu a zmenu kapacity prenosky.", "Cteni vyuziva kompresor a expander jako u analogoveho Dolby.", "Cteni vyuziva reproduktorovou civku jako snimaci hlavu."], "Kerruv efekt meni polarizaciu odrazu, nie jas v beznom mechanickom zmysle."],
  ["i-05-1", "I", "I 5.1 Co je DSD zaznam?", "DSD pouziva jednobitovy tok s velmi vysokou vzorkovaci frekvenci a tvarovanim sumu.", ["DSD pouziva nizkou vzorkovaci frekvenci a mnoho bitu bez tvarovani sumu.", "DSD je analogovy zapis do drážky gramofonove desky.", "DSD je metoda mereni vystupni impedance zesilovace."], "DSD vychadza zo sigma-delta principu: malo bitov, velmi vysoka rychlost, noise shaping."],
  ["i-05-2", "I", "I 5.2 Proc ma DSD mnoho vysokofrekvencniho sumu?", "Noise shaping presouva kvantizacni sum nad audio pasmo, kde se musi pri prehravani filtrovat.", ["Protoze DSD zamerne uklada jen harmonicke zkresleni reproduktoru.", "Protoze DSD nema zadny kvantizacni proces.", "Protoze DSD pouziva RIAA korekci s velkym zduraznenim basu."], "Sum nie je prec, je presunuty mimo hlavne pocutelne pasmo."],
  ["i-05-3", "I", "I 5.3 Jak se lisi PCM a DSD v zakladnim principu?", "PCM uklada vicebitove amplitudy v pravidelnych vzorcich, DSD uklada hustotu jednobitoveho toku.", ["PCM i DSD ukladaji vzdy jen analogovou drážku bez vzorkovani.", "PCM uklada hustotu jednobitoveho toku, zatimco DSD uklada 16bitova slova CD.", "PCM je metoda smerovosti mikrofonu a DSD je typ ozvucnice."], "PCM popisuje hodnotu vzorku slovom; DSD popisuje signal hustotou jednobitovych zmen."],

  ["j-01-1", "J", "J 1.1 Co je harmonicke zkresleni?", "Harmonicke zkresleni je vznik slozek na celociselnych nasobcich zakladni frekvence vlivem nelinearity.", ["Harmonicke zkresleni je zpozdeni signalu vlivem konecne rychlosti zvuku.", "Harmonicke zkresleni je chyba vzorkovani nad Nyquistovou frekvenci.", "Harmonicke zkresleni je pouze sum s rovnomernym spektrem bez vazby na vstupni ton."], "Nelinearita vytvara harmonicke zlozky, ktore v povodnom sinusovom vstupe neboli."],
  ["j-01-2", "J", "J 1.2 Jak souvisi symetrie nelinearity se spektrem zkresleni?", "Sude nebo liche slozky zavisi na symetrii prevodni charakteristiky, proto tvar nelinearity ovlivni spektrum zkresleni.", ["Symetrie nelinearity nema vliv na spektrum, vzdy vznikne jen druha harmonicka.", "Symetrie nelinearity urcuje jen smerovou charakteristiku mikrofonu.", "Symetrie nelinearity meni pouze akusticky tlak v mistnosti."], "Tvar prevodovej charakteristiky rozhoduje, ake harmonicke budu dominantne vznikat."],
  ["j-01-3", "J", "J 1.3 Proc nestaci merit jen jednu hodnotu zkresleni?", "Jedna hodnota neukaze rozlozeni harmonickych, sum, intermodulaci ani zavislost na urovni a frekvenci.", ["Jedna hodnota staci vzdy, protoze vsechny druhy zkresleni maji stejny puvod a spektrum.", "Jedna hodnota popisuje zaroven smerovost, dozvuk i impedanci.", "Jedna hodnota je presna jen tehdy, kdyz je signal zcela bez harmonickych i bez sumu."], "THD cislo je uzitocne, ale samo nemusi povedat, ako bude skreslenie pocutelne."],
  ["j-02-1", "J", "J 2.1 Jak se meri THD?", "Na vstup se privede sinus, fundamentalni slozka se potlaci nebo oddeli a meri se energie harmonickych slozek.", ["Na vstup se privede sum a meri se jen stredni hodnota stejnosmerneho vystupu.", "Na vstup se privede obdelnik a meri se pouze mechanicka rezonance reproduktoru.", "THD se meri jen pocitanim bitu v PCM slovu."], "THD porovnava harmonicke produkty s povodnou zakladnou zlozkou."],
  ["j-02-2", "J", "J 2.2 Jaky je rozdil mezi THD a THD+N?", "THD zahrnuje harmonicke slozky, zatimco THD+N zahrnuje i sum a dalsi neharmonicke zbytky po odfiltrovani fundamentu.", ["THD+N je vzdy mensi nez THD, protoze se od harmonickych odecte sum.", "THD a THD+N jsou totozne pouze nazvy pro vstupni citlivost.", "THD meri jen sum a THD+N meri jen smerovost mikrofonu."], "THD+N moze byt horsie cislo, lebo obsahuje aj sum a neharmonicke zlozky."],
  ["j-02-3", "J", "J 2.3 Proc se pri mereni THD pouziva zadrz nebo notch filtr?", "Notch filtr potlaci zakladni frekvenci, aby merici pristroj mohl vyhodnotit male zbytky zkresleni a sumu.", ["Notch filtr zvysi zakladni frekvenci, aby se zlepsilo zkresleni zesilovace.", "Notch filtr nahrazuje reproduktorovou zatez pri mereni vykonu.", "Notch filtr slouzi k psychoakusticke kompresi dat."], "Zakladna sinusovka je ovela vacsia nez skreslenie, preto ju treba pri merani potlacit."],
  ["j-03-1", "J", "J 3.1 Co je intermodulacni zkresleni?", "Intermodulacni zkresleni vytvari souctove a rozdilove slozky mezi dvema nebo vice vstupnimi frekvencemi.", ["Intermodulacni zkresleni vytvari pouze harmonicke nasobky jedne zakladni frekvence.", "Intermodulacni zkresleni je ztrata dat pri Reed-Solomonove oprave.", "Intermodulacni zkresleni je akusticky tlak ve stojate vlne."], "IMD je nebezpecne, lebo vytvara nove zlozky aj mimo harmonickych povodnych tonov."],
  ["j-03-2", "J", "J 3.2 Proc muze byt IMD slysitelejsi nez samotne THD?", "Intermodulacni produkty mohou lezet na neharmonickych frekvencich, ktere sluch vnima jako cizi slozky.", ["IMD je vzdy neslysitelne, protoze vzniká jen mimo audio pasmo.", "IMD se projevuje pouze jako zmena smerovosti mikrofonu.", "IMD je presne stejny jev jako difuzni zvukove pole."], "Harmonicke mozu byt hudobnejsie maskovane, neharmonicke IM produkty posobia rusivejsie."],
  ["j-03-3", "J", "J 3.3 Jaky signal se pouziva pro mereni IMD?", "Pouziva se dvoutonovy nebo vicetonovy signal, aby nelinearita vytvorila souctove a rozdilove produkty.", ["Pouziva se pouze stejnosmerne napeti bez jakekoliv stridave slozky.", "Pouziva se jen jeden cisty sinus a meri se druha harmonicka.", "Pouziva se jen mechanicke poklepani na ozvucnici."], "Na intermodulaciu treba aspon dve frekvencie."],
  ["j-04-1", "J", "J 4.1 Co je TIM nebo DIM zkresleni?", "TIM/DIM souvisi s prechodovym chovanim zesilovace pri rychlych zmenach a nedostatecnou rychlosti prebehu nebo zpetnou vazbou.", ["TIM/DIM je bezstratova komprese Huffmanovym kodem.", "TIM/DIM je vzdy jen staticke harmonicke zkresleni pri 1 kHz.", "TIM/DIM je smerova charakteristika reproduktoru v mistnosti."], "Tieto merania testuju dynamicke spravanie, nie len ustaleny sinus."],
  ["j-04-2", "J", "J 4.2 Co je rychlost prebehu zesilovace?", "Rychlost prebehu je maximalni rychlost zmeny vystupniho napeti v case, obvykle ve V/us.", ["Rychlost prebehu je rychlost sireni zvuku ve vzduchu.", "Rychlost prebehu je pocet bitu za sekundu po Huffmanove kodovani.", "Rychlost prebehu je mechanicka rychlost otaceni CD disku bez vztahu k vystupu."], "Slew rate urcuje, ci zosilnovac stihne strme velke signaly bez skreslenia."],
  ["j-04-3", "J", "J 4.3 Proc se pro DIM pouziva signal s prudkymi hranami?", "Prudke hrany odhali omezeni rychlosti prebehu a prechodove chovani, ktere cisty pomaly sinus nemusi ukazat.", ["Prudke hrany se pouziji proto, aby se vyloucily vsechny vysoke frekvence.", "Prudke hrany slouzi jen ke zmereni odporu reproduktorove civky.", "Prudke hrany jsou potreba pouze pro RIAA korekci gramofonu."], "Rychle transienty su pre spatnu vazbu a slew rate narocnejsie nez hladky sinus."],
  ["j-05-1", "J", "J 5.1 Jake podminky jsou dulezite pri mereni vykonu zesilovace?", "Je nutne definovat zatez, frekvenci, povolene zkresleni, napajeni a pocet buzenych kanalu.", ["Staci uvest jen barvu reproduktorove ozvucnice a smerovost mikrofonu.", "Staci uvest jen vzorkovaci frekvenci, protoze analogova zatez nema vliv.", "Staci merit bez zateze, protoze vystupni napeti pak odpovida vykonu do reproduktoru."], "Vykon bez podmienok je nejednoznacny udaj."],
  ["j-05-2", "J", "J 5.2 Jak se meri frekvencni charakteristika zesilovace?", "Meri se zmena vystupni urovne pri konstantnim vstupnim signalu v zavislosti na frekvenci.", ["Meri se jen pocet harmonickych pri jedne frekvenci 1 kHz.", "Meri se pouze impedance reproduktoru bez buzeni zesilovace.", "Meri se rychlost cteni dat z optickeho disku."], "Frekvencna charakteristika je amplitudovy prenos vs. frekvencia."],
  ["j-05-3", "J", "J 5.3 Co je preslech mezi kanaly?", "Preslech je nezadouci pronikani signalu z jednoho kanalu do druheho, udavane jako odstup v dB.", ["Preslech je stejne jako harmonicke zkresleni druheho radu v jednom kanalu.", "Preslech je akusticky vykon reproduktoru vyzareny do mistnosti.", "Preslech je korekce hlasitosti podle Fletcher-Munsonovych krivek."], "Pri stereo pristrojoch treba merat aj oddelenie kanalov, nielen skreslenie a vykon."],

  ["p-01-1", "P", "P 1.1 sumove prizpusobeni", ["impedance", "prvek"], ["vykonovy prenos", "jmenovita zatez", "loudness", "DSV"], "Sumove prisposobenie spaja impedanciu zdroja s typom vstupneho prvku."],
  ["p-01-2", "P", "P 1.2 dynamicke parametry", ["linearizace", "pracovni bod"], ["saturace", "DSV", "maskovaci prah", "akusticky zkrat"], "Dynamicke parametre su malosignalovy opis okolo pracovneho bodu."],
  ["p-01-3", "P", "P 1.3 sumove cislo", ["zhorseni SNR", "idealni prvek"], ["klidovy proud", "vystupni zatez", "kriticke pasmo", "kanalovy kod"], "Sumove cislo hovori, o kolko realny vstup zhorsi odstup oproti idealu."],
  ["p-01-4", "P", "P 1.4 bootstrap", ["efektivni impedance", "signalove sledovani", "odlehčení"], ["mrtva zona", "kompander", "DSV", "prokladani"], "Bootstrap zvysuje javovu impedanciu tym, ze body maju podobny signalovy pohyb."],
  ["p-01-5", "P", "P 1.5 zaporna zpetna vazba", ["opacna faze", "linearita", "rezerva stability"], ["kladne buzeni", "preecho", "osmicka", "EFM"], "Spatna vazba obetuje zisk za lepsie parametre, ale treba strazit stabilitu."],

  ["p-02-1", "P", "P 2.1 akusticky tlak", ["odchylka tlaku", "Pa", "efektivni hodnota"], ["akusticky vykon", "V/Pa", "phone", "dBFS"], "Akusticky tlak je lokalna zmena tlaku sposobena zvukom."],
  ["p-02-2", "P", "P 2.2 Fletcher-Munson", ["stejna hlasitost", "phony", "citlivost sluchu"], ["DSV", "DNL", "klidovy proud", "CIRC"], "Krivky rovnakej hlasitosti prepajaju subjektivnu hlasitost s hladinou."],
  ["p-02-3", "P", "P 2.3 dBu", ["0,775 V", "napetova uroven"], ["1 V", "1 mW", "20 uPa", "8 ohm"], "dBu je napetova referencia 0,775 V, nie dBV ani dBm."],
  ["p-02-4", "P", "P 2.4 tlumici cinitel", ["vystupni impedance", "kontrola membrany", "zatez"], ["vstupni citlivost", "prah bolesti", "Huffman", "predmaskovani"], "Tlumici cinitel suvisi s nizkou vystupnou impedanciou a riadenim menica."],
  ["p-02-5", "P", "P 2.5 difuzni pole", ["odrazy", "vsechny smery", "dozvuk"], ["primy zvuk", "stereo báze", "mrtva zona", "kvantizacni krok"], "Difuzne pole znamena prichod energie z mnohych smerov."],

  ["p-03-1", "P", "P 3.1 kardioida", ["tlakova slozka", "gradientni slozka", "zadni potlaceni"], ["kulova kapsle", "kompander", "Reed-Solomon", "slew rate"], "Kardioida je kombinacia tlakoveho a gradientneho principu."],
  ["p-03-2", "P", "P 3.2 kompander", ["komprese", "expanze", "odstup od sumu"], ["linearizace", "pracovni bod", "kanalovy kod", "Kerruv efekt"], "Kompander zmensi dynamiku pred prenosom a obnovi ju po nom."],
  ["p-03-3", "P", "P 3.3 sumova brana", ["prah", "umlčení", "slaby prijem"], ["downmix", "klidovy proud", "R-2R", "DNL"], "Sumova brana zavrie vystup pri malej alebo chybnej urovni prijmu."],
  ["p-03-4", "P", "P 3.4 jmenovita impedance", ["orientacni hodnota", "volba zateze"], ["hlasitost 1 m", "stejny prubeh", "citlivost V/Pa", "phone"], "Menovita impedancia je prakticky udaj, nie presna konstanta v celom priebehu."],
  ["p-03-5", "P", "P 3.5 bassreflex", ["otvor", "rezonator", "zadni vlna"], ["uzavrena skrin", "tlumici material", "prechod nuly", "notch"], "Bassreflex vyuziva naladeny otvor a zadnu stranu membrany."],

  ["p-04-1", "P", "P 4.1 RIAA", ["zaznamova ekvalizace", "inverzni korekce", "basy/vysky"], ["kvantizace", "delta krok", "kriticke pasmo", "SOA"], "RIAA je dvojica zaznamovej a prehravacej korekcie."],
  ["p-04-2", "P", "P 4.2 fyziologicka regulace", ["loudness", "krivky hlasitosti", "basy"], ["DNL", "EFM", "mrtva zona", "SAR"], "Fyziologicka regulacia kompenzuje vnimanie pri malej hlasitosti."],
  ["p-04-3", "P", "P 4.3 Dolby", ["kompander", "dynamika", "sum pasku"], ["kanalovy kod", "jmenovita zatez", "R-2R", "Kerruv efekt"], "Dolby analogovo pracuje s dynamikou a sumom, nie s chybovym kodom."],
  ["p-04-4", "P", "P 4.4 aktivni vyhybka", ["pred koncovymi stupni", "vetve", "aktivni RC"], ["za menicem", "CIRC", "preecho", "vstupni sum"], "Aktivna vyhybka deli signal este pred vykonovymi vetvami."],

  ["p-05-1", "P", "P 5.1 trida A", ["cely cyklus", "klidovy proud", "nizka ucinnost"], ["PWM", "mrtva zona", "dvouton", "DSV"], "Trieda A vedie cely cas, preto je linearna a stratova."],
  ["p-05-2", "P", "P 5.2 trida AB", ["klidovy proud", "prechod nuly", "prechodove zkresleni"], ["DSD", "EFM", "kriticke pasmo", "Kerruv efekt"], "AB zmiernuje mrtvu zonu triedy B predpätim."],
  ["p-05-3", "P", "P 5.3 trida D", ["PWM", "spinani", "LC vystup"], ["cely cyklus", "RIAA", "Huffman", "vstupni citlivost"], "Trieda D je spinany vykonovy princip s naslednym vyhladenim vystupu."],
  ["p-05-4", "P", "P 5.4 SOA", ["napeti", "proud", "teplota", "cas"], ["preecho", "phony", "osmicka", "downmix"], "SOA je bezpecna oblast kombinacie prudu, napatia, teploty a trvania."],

  ["p-06-1", "P", "P 6.1 antialias", ["Nyquist", "preklopeni spektra", "pred ADC"], ["rekonstrukce", "DNL", "notch", "mrtva zona"], "Antialias obmedzi zlozky, ktore by sa po vzorkovani preklopili."],
  ["p-06-2", "P", "P 6.2 dither", ["dekorelace", "kvantizacni chyba", "sumove dno"], ["kladna vazba", "DSV", "vystupni zatez", "gradientni slozka"], "Dither meni korelovanu chybu na mene rusive sumove spravanie."],
  ["p-06-3", "P", "P 6.3 sample-and-hold", ["odebrani", "drzeni", "kondenzator"], ["kompander", "maskovani", "R-2R", "bassreflex"], "S/H odoberie hodnotu a podrzi ju pocas prevodu."],
  ["p-06-4", "P", "P 6.4 aperturova chyba", ["casova nejistota", "strmost", "amplitudova chyba"], ["mrtva zona", "stejna hlasitost", "kanalovy kod", "zadni vlna"], "Aperturova chyba je casova nepresnost prevedena na amplitudovu chybu."],

  ["p-07-1", "P", "P 7.1 SAR ADC", ["vnitrni DAC", "komparator", "MSB"], ["Huffman", "Kerruv efekt", "loudness", "zadni potlaceni"], "SAR hlada bity postupnym porovnavanim od najvyssieho bitu."],
  ["p-07-2", "P", "P 7.2 INL/DNL", ["kodovy krok", "idealni primka", "linearita"], ["predmaskovani", "klidovy proud", "akusticky zkrat", "downmix"], "DNL je chyba kroku, INL celkova odchylka od idealnej priamky."],
  ["p-07-3", "P", "P 7.3 R-2R", ["dve hodnoty odporu", "binarni vahy", "DAC"], ["kriticke pasmo", "sum pasku", "mrtva zona", "phone"], "R-2R vytvara vazene prispevky z dvoch odporovych hodnot."],
  ["p-07-4", "P", "P 7.4 delta modulace", ["jeden bit", "krok", "odhad"], ["notch", "DSV", "basy/vysky", "SOA"], "Delta modulacia prenasa smer zmeny odhadu pevnym krokom."],
  ["p-07-5", "P", "P 7.5 granularni sum", ["velky krok", "kmitani", "male zmeny"], ["maly krok", "rychla zmena", "prokladani", "downmix"], "Granularny sum vznika pri prilis velkom kroku okolo jemnych zmien."],
  ["p-07-6", "P", "P 7.6 pretizeni strmosti", ["maly krok", "rychla zmena", "zpozdeni odhadu"], ["velky krok", "kmitani", "kriticke pasmo", "CIRC"], "Slope overload je opacny problem: odhad nestaci dobehnut rychlu zmenu."],
  ["p-07-7", "P", "P 7.7 sigma-delta modulace", ["prevzorkovani", "zpetna vazba", "tvarovani sumu"], ["Huffman", "mrtva zona", "RIAA", "jmenovita zatez"], "Sigma-delta vyuziva oversampling, smycku a presun sumu."],

  ["p-08-1", "P", "P 8.1 Reed-Solomon", ["redundance", "blok", "oprava chyb"], ["maskovaci prah", "PWM", "klidovy proud", "V/Pa"], "Reed-Solomon pridava blokovu redundanciu na opravu chyb."],
  ["p-08-2", "P", "P 8.2 prokladani", ["shlukove chyby", "rozptyleni", "burst"], ["kvantizacni krok", "prechod nuly", "loudness", "R-2R"], "Interleaving rozlozi burst chybu na lahsie opravitelne miesta."],
  ["p-08-3", "P", "P 8.3 psychoakusticky model", ["maskovani", "prahy", "bitova alokace"], ["DSV", "SOA", "vystupni impedance", "Kerruv efekt"], "Psychoakusticky model rozhoduje, kde chyba nebude pocutelna."],
  ["p-08-4", "P", "P 8.4 kriticka pasma", ["Bark", "sluchove oblasti", "maskovani"], ["MSB", "mrtva zona", "CIRC", "zadni vlna"], "Kriticke pasma su sluchove oblasti, kde sa zlozky navzajom maskuju."],
  ["p-08-5", "P", "P 8.5 preecho", ["transient", "predmaskovani", "kratke bloky"], ["DNL", "klidovy proud", "osmicka", "bassreflex"], "Preecho je pocutelny artefakt pred prudkym dejom."],
  ["p-08-6", "P", "P 8.6 Huffman", ["cetnost symbolu", "kratke kody", "bezeztrata"], ["psychoakusticke mazani", "PWM", "Kerruv efekt", "pracovni bod"], "Huffman je entropicke bezstratove kodovanie podla cetnosti."],

  ["p-09-1", "P", "P 9.1 EFM", ["8 na 14", "kanalovy kod", "DSV"], ["psychoakustika", "klidovy proud", "mrtva zona", "R-2R"], "EFM je kanalovy kod CD, nie stratova audio kompresia."],
  ["p-09-2", "P", "P 9.2 CIRC", ["prokladani", "Reed-Solomon", "maskovani chyb"], ["loudness", "PWM", "DNL", "zadni potlaceni"], "CIRC kombinuje prokladanie a Reed-Solomonove kody."],
  ["p-09-3", "P", "P 9.3 PASC", ["DCC", "podpasmove", "psychoakustika"], ["EFM", "RIAA", "SOA", "vstupni sum"], "PASC je perceptualne podpasmove kodovanie pre DCC."],
  ["p-09-4", "P", "P 9.4 AC-3", ["vicekanal", "metadata", "downmix"], ["R-2R", "mrtva zona", "otvor", "pracovni bod"], "AC-3 riesi viackanalovy perceptualny zapis aj pomocne metadata."],
  ["p-09-5", "P", "P 9.5 ATRAC", ["MiniDisc", "psychoakustika", "bloky"], ["CIRC", "jeden bit", "klidovy proud", "V/Pa"], "ATRAC patri k MiniDiscu a vyuziva perceptualne spracovanie."],
  ["p-09-6", "P", "P 9.6 DSD", ["1 bit", "vysoky tok", "noise shaping"], ["8 na 14", "kompander", "pracovni bod", "phone"], "DSD je jednobitovy vysokorychlostny tok s tvarovanim sumu."],

  ["p-10-1", "P", "P 10.1 THD", ["harmonicke slozky", "fundamental", "nelinearita"], ["souctove slozky", "burst", "DSV", "downmix"], "THD sleduje harmonicke produkty jednej zakladnej zlozky."],
  ["p-10-2", "P", "P 10.2 THD+N", ["sum", "zbytky", "notch"], ["kriticke pasmo", "PWM", "R-2R", "loudness"], "THD+N obsahuje harmonicke aj sumove/neidealne zbytky po potlaceni fundamentu."],
  ["p-10-3", "P", "P 10.3 IMD", ["souctove slozky", "rozdilove slozky", "dvouton"], ["fundamental", "DSV", "zadni vlna", "klidovy proud"], "IMD vznikne zo vzajomneho miesania viacerych vstupnych zloziek."],
  ["p-10-4", "P", "P 10.4 slew rate", ["V/us", "rychlost zmeny napeti", "prechodove chovani"], ["Bark", "phone", "CIRC", "akusticky zkrat"], "Slew rate obmedzuje, ako rychlo sa moze menit vystupne napatie."],
  ["p-10-5", "P", "P 10.5 preslech", ["pronik kanalu", "odstup dB", "stereo"], ["harmonicke slozky", "preecho", "MSB", "efektivni impedance"], "Preslech je neziaduce prenikanie signalu medzi kanalmi."]
].map(vytvorAudOtazku);

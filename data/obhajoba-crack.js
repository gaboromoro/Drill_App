// OBHAJOBA - priprava na obhajobu bakalarskej prace
// "Kvantizacia a dithering audio a obrazovych signalov" (2 webove applety: Audio-Dither, Bachelor_Code_Image).
// 40 statementov v 5 okruhoch: teoria kvantizacie -> audio dither -> obraz dither -> implementacia -> obhajoba.
// Kazdy statement ma DVE nepravdy - kazda flipuje inu dolezitu vec (cisla, smery, pojmy, mechanizmy).
// Obsah = co sa moze pytat komisia + deep teoria nad ramec textu prace (povod konstant, momenty chyby,
// noise shaping <-> sigma-delta <-> difuzia chyby, BT.601 vs BT.709, rozdiel krokov Q audio vs obraz).
// Zdroj: Bakalarka_tisk.pdf + kody appletov.

const obhajobaCrackData = [
  // ============================================================
  // OKRUH 1: Kvantizacia a vzorkovanie
  // ============================================================
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Digitalizacia 001",
    oblast: "Digitalizacia a vzorkovanie",
    podoblast: "PCM",
    pravda: "Digitalizacia ma dva kroky: vzorkovanie je diskretizacia v case (urcuje ju vzorkovacia frekvencia), kvantizacia je diskretizacia v amplitude (urcuje ju pocet bitov); spolu tvoria PCM (pulznu kodovu modulaciu).",
    nepravda: "Digitalizacia ma dva kroky: vzorkovanie je diskretizacia v amplitude (urcuje ju pocet bitov), kvantizacia je diskretizacia v case (urcuje ju vzorkovacia frekvencia); spolu tvoria PCM (pulznu kodovu modulaciu).",
    nepravda2: "Digitalizacia ma dva kroky: vzorkovanie je diskretizacia v case (urcuje ju vzorkovacia frekvencia), kvantizacia je diskretizacia v amplitude (urcuje ju pocet bitov); spolu tvoria PWM (pulznu sirkovu modulaciu)."
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Digitalizacia 002",
    oblast: "Digitalizacia a vzorkovanie",
    podoblast: "Nyquist a aliasing",
    pravda: String.raw`Nyquistov teorem: $f_\mathrm{s} \geq 2 f_\mathrm{max}$; zlozky nad Nyquistovou frekvenciou $f_\mathrm{s}/2$ sa pri vzorkovani zrkadlovo preklopia do pasma pod nou - vznika aliasing.`,
    nepravda: String.raw`Nyquistov teorem: $f_\mathrm{s} \geq f_\mathrm{max}$; zlozky nad Nyquistovou frekvenciou $f_\mathrm{s}/2$ sa pri vzorkovani zrkadlovo preklopia do pasma pod nou - vznika aliasing.`,
    nepravda2: String.raw`Nyquistov teorem: $f_\mathrm{s} \geq 2 f_\mathrm{max}$; zlozky nad vzorkovacou frekvenciou $f_\mathrm{s}$ sa pri vzorkovani zrkadlovo preklopia do pasma pod nou - vznika aliasing.`
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Digitalizacia 003",
    oblast: "Digitalizacia a vzorkovanie",
    podoblast: "Antialias filter",
    pravda: "Aliasing sa po vzorkovani uz neda odstranit, preto sa pred A/D prevodnik zaradzuje analogovy dolnopriepustny antialias filter; realny filter je vzdy kompromis medzi strmostou prechodu a fazovym spravanim.",
    nepravda: "Aliasing sa da po vzorkovani odstranit cislicovym filtrom, napriek tomu sa pred A/D prevodnik zaradzuje analogovy dolnopriepustny antialias filter; realny filter je vzdy kompromis medzi strmostou prechodu a fazovym spravanim.",
    nepravda2: "Aliasing sa po vzorkovani uz neda odstranit, preto sa pred A/D prevodnik zaradzuje analogovy hornopriepustny antialias filter; realny filter je vzdy kompromis medzi strmostou prechodu a fazovym spravanim."
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Kvantizer 001",
    oblast: "Kvantizer a SNR",
    podoblast: "Zaokruhlovanie",
    pravda: String.raw`Pri uniformnej kvantizacii sa vzorka zaokruhluje na najblizsiu uroven; okamzita chyba preto nikdy nepresiahne polovicu kroku - $e[n]$ lezi v intervale od $-Q/2$ po $+Q/2$.`,
    nepravda: String.raw`Pri uniformnej kvantizacii sa vzorka zaokruhluje na najblizsiu uroven; okamzita chyba preto nikdy nepresiahne cely krok - $e[n]$ lezi v intervale od $-Q$ po $+Q$.`,
    nepravda2: String.raw`Pri uniformnej kvantizacii sa vzorka odsekava na najblizsiu nizsiu uroven; okamzita chyba preto nikdy nepresiahne polovicu kroku - $e[n]$ lezi v intervale od $-Q/2$ po $+Q/2$.`
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Kvantizer 002",
    oblast: "Kvantizer a SNR",
    podoblast: "Mid-tread a mid-riser",
    pravda: "V audiu sa pouziva mid-tread kvantizer: nula je priamo jednou z kvantizacnych urovni (lezi v strede schodu), takze ticho ma stabilny kod; mid-riser nulovu uroven nema, nula pada medzi dve urovne.",
    nepravda: "V audiu sa pouziva mid-riser kvantizer: nula je priamo jednou z kvantizacnych urovni (lezi v strede schodu), takze ticho ma stabilny kod; mid-tread nulovu uroven nema, nula pada medzi dve urovne.",
    nepravda2: "V audiu sa pouziva mid-tread kvantizer: nula je priamo jednou z kvantizacnych urovni (lezi v strede schodu), no ticho kmita medzi dvoma najblizsimi kodmi; mid-riser nulovu uroven nema, nula pada medzi dve urovne."
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Kvantizer 003",
    oblast: "Kvantizer a SNR",
    podoblast: "SNR hodnoty",
    pravda: "Pre idealny linearny kvantizer plati SNR priblizne 6,02 N + 1,76 dB (pre plnorozsahovu sinusovku); 16 bitov dava priblizne 98 dB, 24 bitov priblizne 146 dB.",
    nepravda: "Pre idealny linearny kvantizer plati SNR priblizne 6,02 N + 1,76 dB (pre plnorozsahovu sinusovku); 16 bitov dava priblizne 120 dB, 24 bitov priblizne 146 dB.",
    nepravda2: "Pre idealny linearny kvantizer plati SNR priblizne 6,02 N + 1,76 dB (pre plnorozsahovy obdlznikovy signal); 16 bitov dava priblizne 98 dB, 24 bitov priblizne 146 dB."
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Kvantizer 004",
    oblast: "Kvantizer a SNR",
    podoblast: "Povod konstant",
    pravda: "V SNR vzorci je 6,02 dB na bit dane ako 20 log10(2) - kazdy bit zdvojnasobi pocet urovni; clen 1,76 dB je 10 log10(1,5) a plynie z pomeru vykonov plnorozsahovej sinusovky a rovnomerneho kvantizacneho sumu.",
    nepravda: "V SNR vzorci je 6,02 dB na bit dane ako 10 log10(2) - kazdy bit zdvojnasobi pocet urovni; clen 1,76 dB je 10 log10(1,5) a plynie z pomeru vykonov plnorozsahovej sinusovky a rovnomerneho kvantizacneho sumu.",
    nepravda2: "V SNR vzorci je 6,02 dB na bit dane ako 20 log10(2) - kazdy bit zdvojnasobi pocet urovni; clen 1,76 dB je 20 log10(1,5) a plynie z pomeru vykonov plnorozsahovej sinusovky a rovnomerneho kvantizacneho sumu."
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Kvantizer 005",
    oblast: "Kvantizer a SNR",
    podoblast: "Vykon sumu",
    pravda: String.raw`Vykon kvantizacneho sumu je $Q^2/12$ - presne rozptyl rovnomerneho rozdelenia na intervale sirky $Q$; model plati, ked je chyba priblizne rovnomerna a nekorelovana so signalom.`,
    nepravda: String.raw`Vykon kvantizacneho sumu je $Q^2/6$ - presne rozptyl rovnomerneho rozdelenia na intervale sirky $Q$; model plati, ked je chyba priblizne rovnomerna a nekorelovana so signalom.`,
    nepravda2: String.raw`Vykon kvantizacneho sumu je $Q^2/12$ - presne rozptyl trojuholnikoveho rozdelenia na intervale sirky $Q$; model plati, ked je chyba priblizne rovnomerna a nekorelovana so signalom.`
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Chyba 001",
    oblast: "Kvantizacna chyba",
    podoblast: "Charakter chyby",
    pravda: "Pri zlozitom signale s velkou amplitudou posobi kvantizacna chyba ako sum; pri nizkych urovniach alebo jednoduchych periodickych signaloch je so signalom korelovana a vnimame ju ako nelinearne skreslenie - to je hlavna motivacia ditheringu.",
    nepravda: "Pri nizkych urovniach alebo jednoduchych periodickych signaloch posobi kvantizacna chyba ako sum; pri zlozitom signale s velkou amplitudou je so signalom korelovana a vnimame ju ako nelinearne skreslenie - to je hlavna motivacia ditheringu.",
    nepravda2: "Pri zlozitom signale s velkou amplitudou posobi kvantizacna chyba ako sum; pri nizkych urovniach alebo jednoduchych periodickych signaloch je so signalom korelovana a vnimame ju ako neskodny biely sum - to je hlavna motivacia ditheringu."
  },
  {
    okruh: "1. Kvantizacia a vzorkovanie",
    id: "OBH 1. Chyba 002",
    oblast: "Kvantizacna chyba",
    podoblast: "Nizke urovne",
    pravda: String.raw`Sinusovka s amplitudou radovo 1 LSB sa bez ditheru kvantuje prakticky na obdlznik - vznikaju neparne harmonicke; ked amplituda klesne pod $Q/2$, vystup je uplne nulovy (digitalne ticho).`,
    nepravda: String.raw`Sinusovka s amplitudou radovo 1 LSB sa bez ditheru kvantuje prakticky na obdlznik - vznikaju parne harmonicke; ked amplituda klesne pod $Q/2$, vystup je uplne nulovy (digitalne ticho).`,
    nepravda2: String.raw`Sinusovka s amplitudou radovo 1 LSB sa bez ditheru kvantuje prakticky na obdlznik - vznikaju neparne harmonicke; ked amplituda klesne pod $Q/2$, vystup je zasumeny, ale signal ostava pocutelny.`
  },

  // ============================================================
  // OKRUH 2: Dithering v audiu
  // ============================================================
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Princip 001",
    oblast: "Princip ditheru",
    podoblast: "Definicia",
    pravda: "Dither je maly nahodny signal pridany k uzitocnemu signalu PRED kvantizaciou; cielom nie je chybu odstranit, ale zbavit ju zavislosti od signalu - deterministicke skreslenie sa zmeni na stabilny sum.",
    nepravda: "Dither je maly nahodny signal pridany k uzitocnemu signalu PO kvantizacii; cielom nie je chybu odstranit, ale zbavit ju zavislosti od signalu - deterministicke skreslenie sa zmeni na stabilny sum.",
    nepravda2: "Dither je maly nahodny signal pridany k uzitocnemu signalu PRED kvantizaciou; cielom je kvantizacnu chybu uplne odstranit - deterministicke skreslenie aj sum zmiznu."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Princip 002",
    oblast: "Princip ditheru",
    podoblast: "Cena a vnem",
    pravda: "Dither celkovu hladinu sumu mierne zvysi, ale vnem je lepsi: stale, od signalu nezavisle sumove pozadie je pre sluch prijatelnejsie nez skreslenie, ktore sa meni spolu so signalom.",
    nepravda: "Dither celkovu hladinu sumu mierne znizi, a navyse je vnem lepsi: stale, od signalu nezavisle sumove pozadie je pre sluch prijatelnejsie nez skreslenie, ktore sa meni spolu so signalom.",
    nepravda2: "Dither celkovu hladinu sumu mierne zvysi, ale vnem je lepsi: skreslenie, ktore sa meni spolu so signalom, je pre sluch prijatelnejsie nez stale, od signalu nezavisle sumove pozadie."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Princip 003",
    oblast: "Princip ditheru",
    podoblast: "Signal pod 1 LSB",
    pravda: "Spravny dither kvantizer linearizuje: signal mensi nez 1 LSB zostava zakodovany v strednej hodnote vystupu (moduluje pravdepodobnost preklapania medzi urovnami) - dozvuk tak plynulo doznieva do sumu namiesto rozpadu na skreslenie a nahle ticho.",
    nepravda: "Spravny dither kvantizer linearizuje: signal mensi nez 1 LSB zostava zakodovany tym, ze dither trvalo zdvihne jeho amplitudu nad 1 LSB - dozvuk tak plynulo doznieva do sumu namiesto rozpadu na skreslenie a nahle ticho.",
    nepravda2: "Spravny dither kvantizer linearizuje, no signal mensi nez 1 LSB aj tak zanika pod kvantizacnym prahom - dozvuk preto konci rozpadom na skreslenie a nahle ticho."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Typy 001",
    oblast: "Typy ditheru",
    podoblast: "RPDF",
    pravda: "RPDF dither - jedno rovnomerne rozdelene nahodne cislo, typicky 1 Q peak-to-peak: odstrani zavislost strednej hodnoty chyby od signalu, ale jej vykon (rozptyl) ostava zavisly - pocut to ako modulaciu sumu signalom.",
    nepravda: "RPDF dither - jedno rovnomerne rozdelene nahodne cislo, typicky 1 Q peak-to-peak: odstrani zavislost strednej hodnoty aj vykonu chyby od signalu - vysledny sum je uplne stabilny.",
    nepravda2: "RPDF dither - jedno rovnomerne rozdelene nahodne cislo, typicky 2 Q peak-to-peak: odstrani zavislost strednej hodnoty chyby od signalu, ale jej vykon (rozptyl) ostava zavisly - pocut to ako modulaciu sumu signalom."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Typy 002",
    oblast: "Typy ditheru",
    podoblast: "TPDF",
    pravda: "TPDF dither - sucet (alebo rozdiel) dvoch nezavislych rovnomernych cisel, 2 Q peak-to-peak: od signalu oddeli strednu hodnotu AJ vykon chyby, sum sa nemoduluje; preto je standardnou volbou pri znizovani bitovej hlbky.",
    nepravda: "TPDF dither - sucet (alebo rozdiel) dvoch nezavislych rovnomernych cisel, 1 Q peak-to-peak: od signalu oddeli strednu hodnotu AJ vykon chyby, sum sa nemoduluje; preto je standardnou volbou pri znizovani bitovej hlbky.",
    nepravda2: "TPDF dither - sucet (alebo rozdiel) dvoch nezavislych rovnomernych cisel, 2 Q peak-to-peak: od signalu oddeli iba strednu hodnotu chyby, vykon ostava zavisly; preto je standardnou volbou pri znizovani bitovej hlbky."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Typy 003",
    oblast: "Typy ditheru",
    podoblast: "Porovnanie urovni sumu",
    pravda: String.raw`Cena ditheru v celkovom vykone chyby oproti cistej kvantizacii: RPDF priblizne +3 dB, TPDF priblizne +4,8 dB (celkova chyba $3 \times Q^2/12$), gaussovsky pri Q/2 RMS priblizne +6 dB - najtichsi je RPDF, najlepsi kompromis TPDF.`,
    nepravda: String.raw`Cena ditheru v celkovom vykone chyby oproti cistej kvantizacii: RPDF priblizne +4,8 dB, TPDF priblizne +3 dB (celkova chyba $3 \times Q^2/12$), gaussovsky pri Q/2 RMS priblizne +6 dB - najtichsi je TPDF, najlepsi kompromis RPDF.`,
    nepravda2: String.raw`Cena ditheru v celkovom vykone chyby oproti cistej kvantizacii: RPDF priblizne +3 dB, TPDF priblizne +4,8 dB (celkova chyba $2 \times Q^2/12$), gaussovsky pri Q/2 RMS priblizne +6 dB - najtichsi je RPDF, najlepsi kompromis TPDF.`
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Typy 004",
    oblast: "Typy ditheru",
    podoblast: "Box-Muller",
    pravda: String.raw`Gaussovsky dither sa v aplete generuje Box-Mullerovou transformaciou $\sqrt{-2\ln u_1}\,\cos(2\pi u_2)$; cyklus while zabezpecuje $u_1 \neq 0$, pretoze logaritmus nuly nie je definovany.`,
    nepravda: String.raw`Gaussovsky dither sa v aplete generuje Box-Mullerovou transformaciou $\sqrt{-2\ln u_1}\,\tan(2\pi u_2)$; cyklus while zabezpecuje $u_1 \neq 0$, pretoze logaritmus nuly nie je definovany.`,
    nepravda2: String.raw`Gaussovsky dither sa v aplete generuje Box-Mullerovou transformaciou $\sqrt{-2\ln u_1}\,\cos(2\pi u_2)$; cyklus while zabezpecuje $u_2 \neq 0$, pretoze logaritmus nuly nie je definovany.`
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Typy 005",
    oblast: "Typy ditheru",
    podoblast: "TPDF v kode",
    pravda: "V kode je TPDF() = Math.random() - Math.random(): rozdiel dvoch nezavislych rovnomernych velicin ma rovnake trojuholnikove rozdelenie ako ich sucet, ale na rozdiel od suctu ma priamo nulovu strednu hodnotu.",
    nepravda: "V kode je TPDF() = Math.random() + Math.random(): sucet dvoch nezavislych rovnomernych velicin ma trojuholnikove rozdelenie a priamo nulovu strednu hodnotu.",
    nepravda2: "V kode je TPDF() = Math.random() - Math.random(): rozdiel dvoch nezavislych rovnomernych velicin ma rovnomerne rozdelenie sirky 2, ale na rozdiel od suctu ma priamo nulovu strednu hodnotu."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Noise shaping 001",
    oblast: "Noise shaping",
    podoblast: "Princip",
    pravda: "Noise shaping neznizuje celkovy vykon kvantizacneho sumu, ale meni jeho spektrum: potlaci ho v najcitlivejsej oblasti sluchu priblizne 1 az 5 kHz a presunie ho k vysokym frekvenciam, kde je sluch menej citlivy.",
    nepravda: "Noise shaping neznizuje celkovy vykon kvantizacneho sumu, ale meni jeho spektrum: potlaci ho v najcitlivejsej oblasti sluchu priblizne 10 az 15 kHz a presunie ho k vysokym frekvenciam, kde je sluch menej citlivy.",
    nepravda2: "Noise shaping neznizuje celkovy vykon kvantizacneho sumu, ale meni jeho spektrum: potlaci ho v najcitlivejsej oblasti sluchu priblizne 1 az 5 kHz a presunie ho k nizkym frekvenciam, kde je sluch menej citlivy."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Noise shaping 002",
    oblast: "Noise shaping",
    podoblast: "Spatna vazba a sigma-delta",
    pravda: "Noise shaping je spatna vazba chyby: kvantizacna chyba sa filtruje a vracia do vstupu nasledujucich vzoriek; s oversamplingom mozno sum vytlacit nad 20 kHz a odfiltrovat - rovnaky princip pouzivaju sigma-delta (1-bitove) prevodniky.",
    nepravda: "Noise shaping je spatna vazba chyby: kvantizacna chyba sa filtruje a vracia do vstupu predchadzajucich, uz spracovanych vzoriek; s oversamplingom mozno sum vytlacit nad 20 kHz a odfiltrovat - rovnaky princip pouzivaju sigma-delta (1-bitove) prevodniky.",
    nepravda2: "Noise shaping je spatna vazba chyby: kvantizacna chyba sa filtruje a vracia do vstupu nasledujucich vzoriek; s oversamplingom mozno sum vytlacit nad 20 kHz a odfiltrovat - rovnaky princip pouzivaju R-2R rebrikove prevodniky."
  },
  {
    okruh: "2. Dithering v audiu",
    id: "OBH 2. Prax 001",
    oblast: "Pouzitie v praxi",
    podoblast: "Kedy ditherovat",
    pravda: "Dither sa nasadzuje pri kazdom znizovani bitovej hlbky - typicky export z 24-bitoveho DAW na 16-bitove CD - a az ako posledny krok retazca; netreba ho, ked ma material sumove dno vyrazne nad LSB, ani pri medzivypoctoch s plavajucou ciarkou.",
    nepravda: "Dither sa nasadzuje pri kazdom znizovani bitovej hlbky - typicky export zo 16-bitoveho DAW na 24-bitove CD - a az ako posledny krok retazca; netreba ho, ked ma material sumove dno vyrazne nad LSB, ani pri medzivypoctoch s plavajucou ciarkou.",
    nepravda2: "Dither sa nasadzuje pri kazdom znizovani bitovej hlbky - typicky export z 24-bitoveho DAW na 16-bitove CD - a ako prvy krok retazca este pred mixom; netreba ho, ked ma material sumove dno vyrazne nad LSB, ani pri medzivypoctoch s plavajucou ciarkou."
  },

  // ============================================================
  // OKRUH 3: Dithering v obraze
  // ============================================================
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Princip 001",
    oblast: "Princip v obraze",
    podoblast: "Banding",
    pravda: "Priama kvantizacia obrazu rozbije plynule prechody na plochy s ostrymi hranami (banding, posterizacia); oko je na taketo kontury ovela citlivejsie nez na jemne zrno, preto banding rusi viac nez sum ditheru.",
    nepravda: "Priama kvantizacia obrazu rozbije plynule prechody na plochy s ostrymi hranami (banding, posterizacia); oko je na jemne zrno ovela citlivejsie nez na kontury, preto sum ditheru rusi viac nez banding.",
    nepravda2: "Priama kvantizacia obrazu rozbije plynule prechody na plochy s ostrymi hranami (moire, posterizacia); oko je na taketo kontury ovela citlivejsie nez na jemne zrno, preto tento jav rusi viac nez sum ditheru."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Princip 002",
    oblast: "Princip v obraze",
    podoblast: "Priestorove priemerovanie",
    pravda: "Obrazovy dithering vyuziva, ze oko z beznej vzdialenosti pixely priestorovo priemeruje (posobi ako dolnopriepustny filter) - chybajuce urovne nahradi jemna struktura dostupnych hodnot, napriklad siva vznikne z ciernych a bielych bodov.",
    nepravda: "Obrazovy dithering vyuziva, ze oko z beznej vzdialenosti pixely casovo priemeruje (posobi ako dolnopriepustny filter) - chybajuce urovne nahradi jemna struktura dostupnych hodnot, napriklad siva vznikne z ciernych a bielych bodov.",
    nepravda2: "Obrazovy dithering vyuziva, ze oko z beznej vzdialenosti pixely priestorovo priemeruje (posobi ako hornopriepustny filter) - chybajuce urovne nahradi jemna struktura dostupnych hodnot, napriklad siva vznikne z ciernych a bielych bodov."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Metody 001",
    oblast: "Metody",
    podoblast: "Nahodny dithering",
    pravda: "Nahodny dithering rozhoduje medzi najblizsou nizsou a vyssou urovnou nahodnym prahom; stredna hodnota vystupu sa rovna vstupu (metoda je nestranna), pasy rozbije, ale vysledok je zrnity - priestorova obdoba RPDF v audiu.",
    nepravda: "Nahodny dithering rozhoduje medzi najblizsou nizsou a vyssou urovnou nahodnym prahom; stredna hodnota vystupu je o pol kroku posunuta (metoda je stranna), pasy rozbije, ale vysledok je zrnity - priestorova obdoba RPDF v audiu.",
    nepravda2: "Nahodny dithering rozhoduje medzi najblizsou nizsou a vyssou urovnou nahodnym prahom; stredna hodnota vystupu sa rovna vstupu (metoda je nestranna), pasy rozbije, ale vysledok je zrnity - priestorova obdoba TPDF v audiu."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Metody 002",
    oblast: "Metody",
    podoblast: "Usporiadany dithering",
    pravda: "Usporiadany dithering pouziva pevnu prahovu maticu opakovanu cez cely obraz - aplet ma Bayerovu maticu 4x4; vysledok je deterministicky (rovnaky vstup da vzdy rovnaky vystup), danou za to je viditelny opakujuci sa vzor.",
    nepravda: "Usporiadany dithering pouziva pevnu prahovu maticu opakovanu cez cely obraz - aplet ma Bayerovu maticu 4x4; vysledok je nahodny (kazdy beh dopadne inak), danou za to je viditelny opakujuci sa vzor.",
    nepravda2: "Usporiadany dithering pouziva pevnu prahovu maticu opakovanu cez cely obraz - aplet ma Bayerovu maticu 8x8; vysledok je deterministicky (rovnaky vstup da vzdy rovnaky vystup), danou za to je viditelny opakujuci sa vzor."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Metody 003",
    oblast: "Metody",
    podoblast: "Bayer detail",
    pravda: "V kode sa prah z Bayerovej matice normalizuje ako (hodnota + 0,5)/16 a porovnava s relativnou polohou pixelu medzi susednymi urovnami; matica 2x2 vie vytvorit 5 urovni pokrytia od ciernej po bielu.",
    nepravda: "V kode sa prah z Bayerovej matice normalizuje ako (hodnota + 0,5)/16 a porovnava s relativnou polohou pixelu medzi susednymi urovnami; matica 2x2 vie vytvorit 4 urovne pokrytia od ciernej po bielu.",
    nepravda2: "V kode sa prah z Bayerovej matice normalizuje ako hodnota/16 bez posunu a porovnava s relativnou polohou pixelu medzi susednymi urovnami; matica 2x2 vie vytvorit 5 urovni pokrytia od ciernej po bielu."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Metody 004",
    oblast: "Metody",
    podoblast: "Floyd-Steinberg vahy",
    pravda: "Floyd-Steinbergov algoritmus rozdeli chybu pixelu medzi styroch nespracovanych susedov v pomere 7/16 vpravo, 3/16 vlavo dole, 5/16 dole a 1/16 vpravo dole; sucet vah je 1, takze lokalny priemer jasu sa zachovava.",
    nepravda: "Floyd-Steinbergov algoritmus rozdeli chybu pixelu medzi styroch nespracovanych susedov v pomere 5/16 vpravo, 3/16 vlavo dole, 7/16 dole a 1/16 vpravo dole; sucet vah je 1, takze lokalny priemer jasu sa zachovava.",
    nepravda2: "Floyd-Steinbergov algoritmus rozdeli chybu pixelu medzi styroch nespracovanych susedov v pomere 7/16 vpravo, 3/16 vlavo hore, 5/16 dole a 1/16 vpravo dole; sucet vah je 1, takze lokalny priemer jasu sa zachovava."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Metody 005",
    oblast: "Metody",
    podoblast: "Smer sirenia chyby",
    pravda: "Chyba sa pri difuzii nikdy nevracia k uz spracovanym pixelom - ich vystup je finalny; prenasa sa len na pixely, ktore sa este len budu kvantovat, takze ich vstup uz zohladnuje chybu predchodcov.",
    nepravda: "Chyba sa pri difuzii rozdeluje aj k uz spracovanym pixelom, ktore sa nasledne prepocitaju este raz; prenasa sa aj na pixely, ktore sa este len budu kvantovat, takze ich vstup uz zohladnuje chybu predchodcov.",
    nepravda2: "Chyba sa pri difuzii nikdy nevracia k uz spracovanym pixelom - ich vystup je finalny; prenasa sa len na pixely v tom istom riadku, takze nasledujuce riadky chybu predchodcov nezohladnuju."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Suvislosti 001",
    oblast: "Hlboke suvislosti",
    podoblast: "Difuzia ako noise shaping",
    pravda: "Difuzia chyby je priestorova obdoba noise shapingu: spatna vazba chyby tlaci kvantizacny sum do vysokych priestorovych frekvencii, kde ho oko (dolnopriepustny filter) vnima najmenej - vysledok ma charakter tzv. modreho sumu.",
    nepravda: "Difuzia chyby je priestorova obdoba noise shapingu: spatna vazba chyby tlaci kvantizacny sum do nizkych priestorovych frekvencii, kde ho oko (dolnopriepustny filter) vnima najmenej - vysledok ma charakter tzv. modreho sumu.",
    nepravda2: "Difuzia chyby je priestorova obdoba noise shapingu: spatna vazba chyby tlaci kvantizacny sum do vysokych priestorovych frekvencii, kde ho oko (dolnopriepustny filter) vnima najmenej - vysledok ma charakter tzv. ruzoveho sumu."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Suvislosti 002",
    oblast: "Hlboke suvislosti",
    podoblast: "Prevod do sivej",
    pravda: "Prevod do odtienov sivej: Y = 0,299 R + 0,587 G + 0,114 B podla ITU-R BT.601; najvacsiu vahu ma zelena, lebo citlivost oka je najvyssia okolo 555 nm - novsi HD standard BT.709 ma vahy ine (0,2126 / 0,7152 / 0,0722).",
    nepravda: "Prevod do odtienov sivej: Y = 0,587 R + 0,299 G + 0,114 B podla ITU-R BT.601; najvacsiu vahu ma cervena, lebo citlivost oka je najvyssia okolo 555 nm - novsi HD standard BT.709 ma vahy ine (0,2126 / 0,7152 / 0,0722).",
    nepravda2: "Prevod do odtienov sivej: Y = 0,299 R + 0,587 G + 0,114 B podla ITU-R BT.601; najvacsiu vahu ma zelena, lebo citlivost oka je najvyssia okolo 650 nm - novsi HD standard BT.709 ma vahy ine (0,2126 / 0,7152 / 0,0722)."
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Suvislosti 003",
    oblast: "Hlboke suvislosti",
    podoblast: "Krok Q: obraz vs audio",
    pravda: String.raw`Obrazovy aplet pouziva $Q = 255/(2^N - 1)$, lebo 0 aj 255 su platne urovne (oba konce rozsahu); audio aplet pouziva $Q = 2/2^N$ s rozsahom od $-1$ po $1-Q$ - horna uroven chyba, podobne ako v dvojkovom doplnku (16 bitov: -32768 az +32767).`,
    nepravda: String.raw`Obrazovy aplet pouziva $Q = 255/2^N$, lebo 0 aj 255 su platne urovne (oba konce rozsahu); audio aplet pouziva $Q = 2/(2^N - 1)$ s rozsahom od $-1$ po $1-Q$ - horna uroven chyba, podobne ako v dvojkovom doplnku (16 bitov: -32768 az +32767).`,
    nepravda2: String.raw`Obrazovy aplet pouziva $Q = 255/(2^N - 1)$, lebo 0 aj 255 su platne urovne (oba konce rozsahu); audio aplet pouziva $Q = 2/2^N$ s rozsahom od $-1$ po $1-Q$ - horna uroven chyba, podobne ako v dvojkovom doplnku (16 bitov: -32767 az +32768).`
  },
  {
    okruh: "3. Dithering v obraze",
    id: "OBH 3. Suvislosti 004",
    oblast: "Hlboke suvislosti",
    podoblast: "Farebny rezim",
    pravda: "Vo farebnom rezime sa kazdy algoritmus aplikuje na kanaly R, G a B samostatne a nezavisle; vysledna paleta su kombinacie urovni kanalov a nezavisle rozhodnutia mozu vytvorit farebny (chromaticky) sum.",
    nepravda: "Vo farebnom rezime sa kazdy algoritmus aplikuje na spolocnu jasovu zlozku a farba sa nasledne dopocita; vysledna paleta su kombinacie urovni kanalov a tento postup moze vytvorit farebny (chromaticky) sum.",
    nepravda2: "Vo farebnom rezime sa kazdy algoritmus aplikuje na kanaly R, G a B samostatne a nezavisle; vysledna paleta su kombinacie urovni kanalov, no nezavisle rozhodnutia farebny sum vytvorit nemozu - zrno ostava neutralne sive."
  },

  // ============================================================
  // OKRUH 4: Implementacia appletov
  // ============================================================
  {
    okruh: "4. Implementacia appletov",
    id: "OBH 4. Technologie 001",
    oblast: "Navrh a technologie",
    podoblast: "Preco web",
    pravda: "Applety su zamerne webove: bezia v kazdom prehliadaci bez instalacie (aj na mobile) a su volne dostupne na GitHub Pages - na rozdiel od MATLAB-u netreba licenciu; HTML tvori strukturu, CSS vzhlad a JavaScript logiku a vypocty.",
    nepravda: "Applety su zamerne webove: bezia v kazdom prehliadaci, vyzaduju vsak nainstalovany Node.js, a su volne dostupne na GitHub Pages - na rozdiel od MATLAB-u netreba licenciu; HTML tvori strukturu, CSS vzhlad a JavaScript logiku a vypocty.",
    nepravda2: "Applety su zamerne webove: bezia v kazdom prehliadaci bez instalacie (aj na mobile) a su volne dostupne na GitHub Pages - na rozdiel od MATLAB-u netreba licenciu; HTML tvori logiku a vypocty, CSS vzhlad a JavaScript strukturu."
  },
  {
    okruh: "4. Implementacia appletov",
    id: "OBH 4. Technologie 002",
    oblast: "Navrh a technologie",
    podoblast: "p5.js vs Canvas API",
    pravda: "Audio aplet kresli grafy kniznicou p5.js (noLoop a prekreslenie len cez redraw pri zmene parametra), obrazovy aplet pouziva priamo Canvas API - potrebuje pristup k jednotlivym pixelom cez ImageData (pole RGBA, 4 bajty na pixel).",
    nepravda: "Audio aplet kresli grafy priamo cez Canvas API, obrazovy aplet pouziva kniznicu p5.js (noLoop a prekreslenie len cez redraw pri zmene parametra) - potrebuje pristup k jednotlivym pixelom cez ImageData (pole RGBA, 4 bajty na pixel).",
    nepravda2: "Audio aplet kresli grafy kniznicou p5.js (noLoop a prekreslenie len cez redraw pri zmene parametra), obrazovy aplet pouziva priamo Canvas API - potrebuje pristup k jednotlivym pixelom cez ImageData (pole RGB, 3 bajty na pixel)."
  },
  {
    okruh: "4. Implementacia appletov",
    id: "OBH 4. Audio aplet 001",
    oblast: "Audio aplet",
    podoblast: "Retazec spracovania",
    pravda: "Retazec audio apletu: generator (sinus, trojuholnik, obdlznik, pila; 440 Hz pri fs 44 100 Hz) -> pridanie ditheru -> kvantizacia -> chyba ako rozdiel; kresli sa 101 vzoriek, co je priblizne jedna perioda (44100/440 je cca 100,2).",
    nepravda: "Retazec audio apletu: generator (sinus, trojuholnik, obdlznik, pila; 440 Hz pri fs 44 100 Hz) -> kvantizacia -> pridanie ditheru -> chyba ako rozdiel; kresli sa 101 vzoriek, co je priblizne jedna perioda (44100/440 je cca 100,2).",
    nepravda2: "Retazec audio apletu: generator (sinus, trojuholnik, obdlznik, pila; 440 Hz pri fs 44 100 Hz) -> pridanie ditheru -> kvantizacia -> chyba ako rozdiel; kresli sa 101 vzoriek, co su priblizne styri periody signalu."
  },
  {
    okruh: "4. Implementacia appletov",
    id: "OBH 4. Audio aplet 002",
    oblast: "Audio aplet",
    podoblast: "noiseBase",
    pravda: "Sum sa negeneruje pri kazdom prepocte: pole noiseBase sa obnovi len pri zmene typu ditheru; posuvniky menia iba skalovanie amount * Q * r[n], takze priebeh sumu na grafe ostava rovnaky a meni sa len jeho velkost.",
    nepravda: "Sum sa generuje nanovo pri kazdom prepocte: pole noiseBase sa obnovi pri kazdom pohybe posuvnika; posuvniky tak menia skalovanie aj priebeh sumu na grafe zaroven.",
    nepravda2: "Sum sa negeneruje pri kazdom prepocte: pole noiseBase sa obnovi len pri zmene typu ditheru; posuvniky menia iba skalovanie amount * r[n] nezavisle od kroku Q, takze priebeh sumu na grafe ostava rovnaky a meni sa len jeho velkost."
  },
  {
    okruh: "4. Implementacia appletov",
    id: "OBH 4. Audio aplet 003",
    oblast: "Audio aplet",
    podoblast: "Prehravanie",
    pravda: "Prehravanie ide cez Web Audio API: tri tlacidla porovnavaju povodny signal, kvantovany bez ditheru a kvantovany s ditherom; v nasadenom aplete zvuk vytvara AudioWorklet procesor v realnom case (podrobnosti v okruhu 7).",
    nepravda: "Prehravanie ide cez Web Audio API: tri tlacidla porovnavaju povodny signal, kvantovany bez ditheru a kvantovany s ditherom; v nasadenom aplete zvuk vytvara MediaRecorder v realnom case (podrobnosti v okruhu 7).",
    nepravda2: "Prehravanie ide cez Web Audio API: dve tlacidla porovnavaju povodny signal a kvantovany s ditherom; v nasadenom aplete zvuk vytvara AudioWorklet procesor v realnom case (podrobnosti v okruhu 7)."
  },

  // ============================================================
  // OKRUH 5: Obhajoba a rozsirenia
  // ============================================================
  {
    okruh: "5. Obhajoba a rozsirenia",
    id: "OBH 5. Zhodnotenie 001",
    oblast: "Zhodnotenie",
    podoblast: "Prinos prace",
    pravda: "Hlavny prinos prace: dithering, ktory byva vo vyucbe DSP len dodatkom k hlavnej teorii, je tu spracovany ako teoria plus dve volne dostupne interaktivne aplikacie, kde efekt ditheru priamo VIDIET (grafy, obraz) aj POCUT (prehravanie).",
    nepravda: "Hlavny prinos prace: dithering, ktory byva vo vyucbe DSP hlavnou temou, je tu spracovany ako teoria plus dve volne dostupne interaktivne aplikacie, kde efekt ditheru priamo VIDIET (grafy, obraz) aj POCUT (prehravanie).",
    nepravda2: "Hlavny prinos prace: dithering, ktory byva vo vyucbe DSP len dodatkom k hlavnej teorii, je tu spracovany ako teoria plus dve volne dostupne interaktivne aplikacie, kde efekt ditheru priamo VIDIET (grafy, obraz) - pocut ho zatial nie je mozne."
  },
  {
    okruh: "5. Obhajoba a rozsirenia",
    id: "OBH 5. Rozsirenia 001",
    oblast: "Rozsirenia",
    podoblast: "Audio aplet",
    pravda: "Prirodzene rozsirenia audio apletu: zobrazenie spektra (FFT) ako dokaz zmeny charakteru chyby, noise shaping ako dalsia volba, meranie SNR, volitelna frekvencia signalu a subtraktivny dither.",
    nepravda: "Prirodzene rozsirenia audio apletu: zobrazenie kepstra ako dokaz zmeny charakteru chyby, noise shaping ako dalsia volba, meranie SNR, volitelna frekvencia signalu a subtraktivny dither.",
    nepravda2: "Prirodzene rozsirenia audio apletu: zobrazenie spektra (FFT) ako dokaz zmeny charakteru chyby, oversampling ako dalsi typ ditheru, meranie SNR, volitelna frekvencia signalu a subtraktivny dither."
  },
  {
    okruh: "5. Obhajoba a rozsirenia",
    id: "OBH 5. Rozsirenia 002",
    oblast: "Rozsirenia",
    podoblast: "Obrazovy aplet",
    pravda: "Prirodzene rozsirenia obrazoveho apletu: serpentinove skenovanie proti smerovym strukturam (cervikom) difuzie chyby, vacsie alebo blue-noise prahove matice, gamma korekcia pred kvantizaciou a vlastne farebne palety.",
    nepravda: "Prirodzene rozsirenia obrazoveho apletu: serpentinove skenovanie proti opakujucemu sa vzoru Bayerovej matice, vacsie alebo blue-noise prahove matice, gamma korekcia pred kvantizaciou a vlastne farebne palety.",
    nepravda2: "Prirodzene rozsirenia obrazoveho apletu: serpentinove skenovanie proti smerovym strukturam (cervikom) difuzie chyby, vacsie alebo blue-noise prahove matice, gamma korekcia az po kvantizacii a vlastne farebne palety."
  },

  // ============================================================
  // OKRUH 6: Nepripravene otazky komisie (slabiny a zjednodusenia)
  // ============================================================
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 001",
    oblast: "Slabiny a obhajoba",
    podoblast: "Aditivny vs subtraktivny dither",
    pravda: "Aplet pouziva aditivny dither - sum ostava vo vystupe, preto je tu cena za linearizaciu trvale zvysene sumove dno; subtraktivny dither by ten isty sum po kvantizacii odcital a sum odstranil, ale vyzaduje presne tu istu realizaciu sumu na prijimaci, co je v distribucii neprakticke.",
    nepravda: "Aplet pouziva subtraktivny dither - sum sa po kvantizacii odcita a vystup ostava bez sumu; aditivny dither by sum ponechal vo vystupe, ale vyzaduje presne tu istu realizaciu sumu na prijimaci, co je v distribucii neprakticke.",
    nepravda2: "Aplet pouziva aditivny dither - sum ostava vo vystupe, preto je tu cena za linearizaciu trvale zvysene sumove dno; subtraktivny dither by ten isty sum po kvantizacii odcital a sum odstranil, a pritom nevyzaduje ziadnu znalost sumu na prijimaci."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 002",
    oblast: "Slabiny a obhajoba",
    podoblast: "Chybajuce spektrum",
    pravda: "Aplet dokazuje zmenu charakteru chyby len v casovej oblasti; presvedcivy dokaz, ze skreslenie sa zmenilo na sum, je az v spektre - bez ditheru vidno diskretne harmonicke, s ditherom rovne sumove dno. Spektralny pohlad je preto najprirodzenejsie rozsirenie.",
    nepravda: "Aplet dokazuje zmenu charakteru chyby uz v spektre cez zabudovanu FFT; casova oblast by bola menej presvedciva - bez ditheru vidno diskretne harmonicke, s ditherom rovne sumove dno. Spektralny pohlad uz aplet obsahuje.",
    nepravda2: "Aplet dokazuje zmenu charakteru chyby len v casovej oblasti; presvedcivy dokaz, ze skreslenie sa zmenilo na sum, je az v spektre - bez ditheru vidno rovne sumove dno, s ditherom diskretne harmonicke. Spektralny pohlad je preto najprirodzenejsie rozsirenie."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 003",
    oblast: "Slabiny a obhajoba",
    podoblast: "Chybajuce metriky",
    pravda: "Hodnotenie v praci je zamerne kvalitativne (vidiet, pocut) - co je v poriadku pre vyukovu pomocku; objektivne by sa rozdiel doložil metrikami ako SNR, THD+N ci segmentalny SNR, pripadne pre obraz PSNR alebo SSIM. To je priznana hranica prace, nie chyba.",
    nepravda: "Hodnotenie v praci je objektivne, lebo aplety pocitaju SNR a THD+N priamo; kvalitativny dojem (vidiet, pocut) je len doplnok. Pre obraz by sa rozdiel dalej dolozil metrikami ako PSNR alebo SSIM.",
    nepravda2: "Hodnotenie v praci je zamerne kvalitativne (vidiet, pocut) - co je v poriadku pre vyukovu pomocku; objektivne by sa rozdiel doložil metrikami ako bitova hlbka, vzorkovacia frekvencia ci pocet urovni, pripadne pre obraz rozlisenie v pixeloch. To je priznana hranica prace, nie chyba."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 004",
    oblast: "Slabiny a obhajoba",
    podoblast: "Gamma a linearne svetlo",
    pravda: "Obrazovy aplet kvantuje a ditheruje priamo v sRGB hodnotach (0-255), nie v linearnom svetle; korektnejsie by bolo previest do linearneho priestoru, ditherovat a vratit gamma. Dosledok je, ze priemerny jas ditherovanej plochy sa mierne posunie - znama, ale v praci nezohladnena nepresnost.",
    nepravda: "Obrazovy aplet kvantuje a ditheruje v linearnom svetle a az potom aplikuje gamma; preto je priemerny jas ditherovanej plochy presny. Robit to naopak, priamo v sRGB hodnotach, by jas mierne posunulo - tomu sa praca vyhla.",
    nepravda2: "Obrazovy aplet kvantuje a ditheruje priamo v sRGB hodnotach (0-255), nie v linearnom svetle; korektnejsie by bolo previest do linearneho priestoru, ditherovat a vratit gamma. Dosledok je, ze sa zmeni farebny odtien, ale priemerny jas plochy ostava presny - znama, ale v praci nezohladnena nepresnost."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 005",
    oblast: "Slabiny a obhajoba",
    podoblast: "Hranice sumoveho modelu",
    pravda: "Vzorec SNR = 6,02 N + 1,76 dB plati za predpokladu, ze kvantizacny sum je rovnomerny, biely a nekorelovany so signalom; tieto predpoklady zlyhavaju prave pri nizkych urovniach a jednoduchych signaloch - teda presne tam, kde dither potrebujeme. Dither tieto predpoklady (znova) zabezpeci.",
    nepravda: "Vzorec SNR = 6,02 N + 1,76 dB plati vzdy a nezavisle od signalu, lebo kvantizacny sum je principialne biely a nekorelovany; pri nizkych urovniach a jednoduchych signaloch plati rovnako dobre, dither slúzi len na kozmeticke vylepsenie.",
    nepravda2: "Vzorec SNR = 6,02 N + 1,76 dB plati za predpokladu, ze kvantizacny sum je rovnomerny, biely a nekorelovany so signalom; tieto predpoklady zlyhavaju prave pri vysokych urovniach a zlozitych signaloch - teda presne tam, kde dither potrebujeme. Dither tieto predpoklady (znova) zabezpeci."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 006",
    oblast: "Slabiny a obhajoba",
    podoblast: "Je ordered dither dither?",
    pravda: "Usporiadany (Bayer) dither nepouziva nahodu, ale pevny periodicky vzor - oddeli kvantizacne pasy, no nezbavi chybu zavislosti od signalu tak ako nahodny ci TPDF dither; je to deterministicka technika rozptylu, preto ho casto radime skor k 'halftoningu' nez k pravemu (nahodnemu) ditheru.",
    nepravda: "Usporiadany (Bayer) dither pouziva nahodu rovnako ako RPDF, len ulozenu v matici - zbavi chybu zavislosti od signalu uplne rovnako ako TPDF dither; je to nahodna technika rozptylu, preto ho radime k pravemu ditheru.",
    nepravda2: "Usporiadany (Bayer) dither nepouziva nahodu, ale pevny periodicky vzor - oddeli kvantizacne pasy a navyse zbavi chybu zavislosti od signalu lepsie nez nahodny ci TPDF dither; je to deterministicka technika rozptylu, preto ho radime k najkvalitnejsiemu ditheru."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 007",
    oblast: "Slabiny a obhajoba",
    podoblast: "Jedna perioda vs statistika",
    pravda: "Audio aplet kresli len asi jednu periodu (101 vzoriek) - je to nazorne, ale sumovy charakter chyby je v podstate statisticky a naozaj sa prejavi az cez mnoho period; jedna perioda je teda didakticky kompromis, nie statisticky dokaz.",
    nepravda: "Audio aplet kresli len asi jednu periodu (101 vzoriek) - to uplne staci aj ako statisticky dokaz sumoveho charakteru chyby, lebo ten sa prejavi uz v ramci jednej periody; viac period by nepridalo nic nove.",
    nepravda2: "Audio aplet kresli az asi styri periody (101 vzoriek) - je to nazorne, ale sumovy charakter chyby je v podstate statisticky a naozaj sa prejavi az cez mnoho period; par period je teda didakticky kompromis, nie statisticky dokaz."
  },
  {
    okruh: "6. Nepripravene otazky komisie",
    id: "OBH 6. Slabiny 008",
    oblast: "Slabiny a obhajoba",
    podoblast: "Kvalita generatora sumu",
    pravda: "Dither generuje Math.random(), co je bezny, nie kryptograficky generator; pre vyukovu vizualizaciu plne postacuje, ale pre realny ditherovaci retazec by bola dolezita kvalita a rovnomernost jeho rozdelenia (aby vysledny dither bol naozaj biely).",
    nepravda: "Dither generuje Math.random(), co je kryptograficky bezpecny generator s garantovane bielym spektrom; preto by sa dal bez vyhrad pouzit aj v realnom ditherovacom retazci bez akehokolvek overovania kvality rozdelenia.",
    nepravda2: "Dither generuje Math.random(), co je bezny, nie kryptograficky generator; pre realny ditherovaci retazec plne postacuje, ale pre vyukovu vizualizaciu by bola dolezita kvalita a rovnomernost jeho rozdelenia (aby vysledny dither bol naozaj biely)."
  },

  // ============================================================
  // OKRUH 7: Audio - hlbsia teoria okolo
  // ============================================================
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 001",
    oblast: "SNR a dither",
    podoblast: "Zlepsuje dither SNR?",
    pravda: "Dither NEzlepsuje odstup signalu od sumu (SNR) - prave naopak, pridanim sumu celkovy sumovy vykon mierne stupne; zlepsuje linearitu kvantizera a subjektivny dojem tym, ze deterministicke skreslenie nahradi stacionarnym, od signalu nezavislym sumom.",
    nepravda: "Dither zlepsuje odstup signalu od sumu (SNR) tym, ze znizuje celkovy sumovy vykon; zlepsuje aj linearitu kvantizera a subjektivny dojem tym, ze deterministicke skreslenie nahradi stacionarnym, od signalu nezavislym sumom.",
    nepravda2: "Dither NEzlepsuje odstup signalu od sumu (SNR) - prave naopak, pridanim sumu celkovy sumovy vykon mierne stupne; zhorsuje vsak aj linearitu kvantizera, lebo do signalu vnasa nahodnu zlozku zavislu od vstupu."
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 002",
    oblast: "SNR a dither",
    podoblast: "Co je 6.02N+1.76 dB",
    pravda: String.raw`Vztah $\mathrm{SNR} \approx 6{,}02\,N + 1{,}76$ dB udava maximalny teoreticky odstup signalu od sumu idealneho N-bitoveho uniformneho kvantizera pre PLNOROZSAHOVY sinusovy signal; 6,02 dB pripada na kazdy bit (20 log 2), clen 1,76 dB plynie z tvaru plnorozsahovej sinusovky (10 log 1,5).`,
    nepravda: String.raw`Vztah $\mathrm{SNR} \approx 6{,}02\,N + 1{,}76$ dB udava maximalny teoreticky odstup signalu od sumu idealneho N-bitoveho uniformneho kvantizera pre PLNOROZSAHOVY obdlznikovy signal; 6,02 dB pripada na kazdy bit (20 log 2), clen 1,76 dB plynie z tvaru plnorozsahovej sinusovky (10 log 1,5).`,
    nepravda2: String.raw`Vztah $\mathrm{SNR} \approx 6{,}02\,N + 1{,}76$ dB udava maximalny teoreticky odstup signalu od sumu idealneho N-bitoveho uniformneho kvantizera pre PLNOROZSAHOVY sinusovy signal; 1,76 dB pripada na kazdy bit (20 log 2), clen 6,02 dB plynie z tvaru plnorozsahovej sinusovky (10 log 1,5).`
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 003",
    oblast: "SNR a dither",
    podoblast: "Kedy 6.02N+1.76 plati",
    pravda: "Vztah 6,02N + 1,76 dB plati len za idealnych podmienok: plnorozsahovy budiaci signal a kvantizacny sum priblizne biely a nekorelovany so signalom; pre amplitudu A pod plnym rozsahom treba odpocitat 20 log(FS/A) dB, a pri nizkych urovniach ci jednoduchych signaloch model vobec neplati (chyba sa zmeni na skreslenie).",
    nepravda: "Vztah 6,02N + 1,76 dB plati univerzalne pre lubovolny signal aj uroven; pre amplitudu A pod plnym rozsahom netreba nic odpocitavat a pri nizkych urovniach ci jednoduchych signaloch model plati rovnako dobre.",
    nepravda2: "Vztah 6,02N + 1,76 dB plati len za idealnych podmienok: plnorozsahovy budiaci signal a kvantizacny sum priblizne biely a nekorelovany so signalom; pre amplitudu A pod plnym rozsahom treba PRIPOCITAT 20 log(FS/A) dB, lebo nizsia uroven znamena vyssi odstup od sumu."
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 004",
    oblast: "Uroven ditheru",
    podoblast: "Optimalna uroven",
    pravda: "Optimalna uroven ditheru je najmensia, ktora uplne odstrani zavislost chyby od signalu: pre RPDF je to 1 Q peak-to-peak, pre TPDF 2 Q peak-to-peak; v aplete tomu zodpoveda hodnota posuvnika amount = 1 (sum sa skaluje ako amount * Q).",
    nepravda: "Optimalna uroven ditheru je co najvacsia, aby sum dokonale prekryl signal: pre RPDF je to 1 Q peak-to-peak, pre TPDF 2 Q peak-to-peak; v aplete tomu zodpoveda hodnota posuvnika amount = 1 (sum sa skaluje ako amount * Q).",
    nepravda2: "Optimalna uroven ditheru je najmensia, ktora uplne odstrani zavislost chyby od signalu: pre RPDF je to 2 Q peak-to-peak, pre TPDF 1 Q peak-to-peak; v aplete tomu zodpoveda hodnota posuvnika amount = 1 (sum sa skaluje ako amount * Q)."
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 005",
    oblast: "Uroven ditheru",
    podoblast: "Pod-dither vs pre-dither",
    pravda: "Posuvnik urovne ditheru ukazuje kompromis: prilis maly dither plne neodstrani skreslenie (chyba ostava ciastocne viazana na signal), prilis velky dither uz nic nezlepsi a len zbytocne zvysi sumove dno; spravny bod je najmensia uroven, ktora chybu uplne dekoreluje.",
    nepravda: "Posuvnik urovne ditheru ukazuje kompromis: prilis maly dither uz nic nezlepsi a len zbytocne zvysi sumove dno, prilis velky dither plne neodstrani skreslenie; spravny bod je najvacsia mozna uroven.",
    nepravda2: "Posuvnik urovne ditheru ukazuje kompromis: prilis maly dither plne neodstrani skreslenie, prilis velky dither uz nic nezlepsi a len zbytocne zvysi sumove dno; spravny bod je najvacsia uroven, pri ktorej este nie je sum pocut."
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 006",
    oblast: "Noise shaping",
    podoblast: "Princip spatnej vazby",
    pravda: "Tvarovanie sumu pouziva spatnu vazbu kvantizacnej chyby: chyba sa filtruje a pricita k vstupu nasledujucich vzoriek, takze sumova prenosova funkcia (NTF) ma tvar 1 - H(z); volbou H sa sum vytlaci z citliveho pasma (1-5 kHz) do vysokych frekvencii.",
    nepravda: "Tvarovanie sumu pouziva spatnu vazbu kvantizacnej chyby: chyba sa filtruje a pricita k vstupu nasledujucich vzoriek, takze sumova prenosova funkcia (NTF) ma tvar 1 - H(z); volbou H sa sum vytlaci z vysokych frekvencii do citliveho pasma (1-5 kHz).",
    nepravda2: "Tvarovanie sumu pouziva spatnu vazbu kvantizacnej chyby: chyba sa filtruje a odcita od vystupu uz hotovych vzoriek, takze signalova prenosova funkcia ma tvar 1 - H(z); volbou H sa sum vytlaci z citliveho pasma (1-5 kHz) do vysokych frekvencii."
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 007",
    oblast: "Noise shaping",
    podoblast: "Vykon, oversampling, dither",
    pravda: "Tvarovanie sumu nezmensuje celkovy vykon kvantizacneho sumu, len ho prerozdeli v spektre; pri oversamplingu sa cast sumu dostane nad pocutelne pasmo a odfiltruje sa (princip sigma-delta prevodnikov), a aby nevznikali limitne cykly, kombinuje sa s ditherom.",
    nepravda: "Tvarovanie sumu zmensuje celkovy vykon kvantizacneho sumu tym, ze ho vyfiltruje; pri oversamplingu sa cast sumu dostane nad pocutelne pasmo a odfiltruje sa (princip sigma-delta prevodnikov), a aby nevznikali limitne cykly, kombinuje sa s ditherom.",
    nepravda2: "Tvarovanie sumu nezmensuje celkovy vykon kvantizacneho sumu, len ho prerozdeli v spektre; pri oversamplingu sa cast sumu dostane nad pocutelne pasmo a odfiltruje sa (princip R-2R prevodnikov), a aby nevznikali limitne cykly, musi sa dither vypnut."
  },
  {
    okruh: "8. Audio - hlbsia teoria",
    id: "OBH 7. Audio 008",
    oblast: "Dalsie algoritmy",
    podoblast: "Audio metody",
    pravda: "Pokrocilejsie audio metody nad ramec prace: psychoakusticky vazene tvarovanie sumu (napr. POW-R, Apogee UV22, SBM) tvaruje sum podla krivky citlivosti sluchu, dalej viacradove shapery, sigma-delta modulacia a subtraktivny dither.",
    nepravda: "Pokrocilejsie audio metody nad ramec prace: psychoakusticky vazene tvarovanie sumu (napr. POW-R, Apogee UV22, SBM) sustreduje sum naopak do najcitlivejsieho pasma 1-5 kHz, dalej viacradove shapery, sigma-delta modulacia a subtraktivny dither.",
    nepravda2: "Pokrocilejsie audio metody nad ramec prace: Floyd-Steinbergov a Bayerov dither vazeny podla krivky citlivosti sluchu, dalej viacradove shapery, sigma-delta modulacia a subtraktivny dither."
  },

  // ============================================================
  // OKRUH 8: Obraz - hlbsia teoria okolo
  // ============================================================
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 001",
    oblast: "sRGB a linearizacia",
    podoblast: "Gamma vs linearne svetlo",
    pravda: "Hodnoty pixelov 0-255 su gamma-kodovane (sRGB), nie linearne svetlo; oko vsak priestorovo priemeruje v linearnom svetle. Korektny dithering by mal preto sRGB najprv linearizovat, az potom kvantovat a difuzovat chybu.",
    nepravda: "Hodnoty pixelov 0-255 su linearne svetlo, nie gamma-kodovane; oko vsak priestorovo priemeruje v gamma priestore. Korektny dithering by mal preto hodnoty najprv gamma-kodovat, az potom kvantovat a difuzovat chybu.",
    nepravda2: "Hodnoty pixelov 0-255 su gamma-kodovane (sRGB), nie linearne svetlo; oko vsak priestorovo priemeruje takisto v gamma priestore, takze linearizacia nie je potrebna."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 002",
    oblast: "sRGB a linearizacia",
    podoblast: "Dosledok nelinearizovania",
    pravda: "V aplete sa sRGB hodnoty NElinearizuju - kvantizacia aj difuzia chyby bezia priamo na kodovych hodnotach 0-255; dosledok je, ze priemerny jas ditherovanej plochy sa mierne posunie (stredne tony pri 1-bitovom gradiente vyjdu svetlejsie, nez maju byt). Je to znamy, v praci nezohladneny efekt.",
    nepravda: "V aplete sa sRGB hodnoty linearizuju este pred kvantizaciou - kvantizacia aj difuzia chyby bezia v linearnom svetle; dosledok je, ze priemerny jas ditherovanej plochy presne sedi. Je to v praci osetreny efekt.",
    nepravda2: "V aplete sa sRGB hodnoty NElinearizuju - kvantizacia aj difuzia chyby bezia priamo na kodovych hodnotach 0-255; dosledok je, ze sa posunie len farebny odtien, ale priemerny jas plochy ostane presny. Je to znamy, v praci nezohladneny efekt."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 003",
    oblast: "Prevod do sivej",
    podoblast: "Luma vs luminancia",
    pravda: "Prevod do sivej vahami BT.601 (0,299/0,587/0,114) sa pocita z gamma-kodovaneho R'G'B', takze vysledok je luma Y' - perceptualna velicina, NIE fyzikalna (linearna) luminancia Y, ktora by vyzadovala najprv linearizaciu.",
    nepravda: "Prevod do sivej vahami BT.601 (0,299/0,587/0,114) sa pocita z linearneho RGB, takze vysledok je fyzikalna luminancia Y - nie luma Y', ktora by vyzadovala najprv linearizaciu.",
    nepravda2: "Prevod do sivej vahami BT.601 (0,299/0,587/0,114) sa pocita z gamma-kodovaneho R'G'B', takze vysledok je luma Y' - fyzikalna (linearna) velicina, ktora ziadnu linearizaciu nepotrebuje."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 004",
    oblast: "Prevod do sivej",
    podoblast: "BT.601 vs BT.709",
    pravda: "BT.601 vahy patria SDTV; novsi BT.709 (0,2126/0,7152/0,0722) zodpoveda HD a primarnym farbam sRGB, takze pre sRGB obsah je o nieco spravnejsi. Pre vyukovy nastroj na prevod do sivej je vizualny rozdiel maly, preto BT.601 ako ucebnicovy vzorec postacuje.",
    nepravda: "BT.709 vahy patria SDTV; novsi BT.601 (0,2126/0,7152/0,0722) zodpoveda HD a primarnym farbam sRGB, takze pre sRGB obsah je o nieco spravnejsi. Pre vyukovy nastroj na prevod do sivej je vizualny rozdiel maly, preto BT.709 ako ucebnicovy vzorec postacuje.",
    nepravda2: "BT.601 vahy patria SDTV; novsi BT.709 (0,2126/0,7152/0,0722) zodpoveda HD a primarnym farbam sRGB. Pre vyukovy nastroj je vizualny rozdiel zasadny, preto by sa BT.601 nemal pouzivat."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 005",
    oblast: "Farebny dithering",
    podoblast: "Samostatne kanaly vs perceptualne",
    pravda: "Kvantovat R, G, B samostatne je jednoduche a nevyzaduje pevnu paletu, ale chyby v kanaloch su nezavisle, takze vznika farebny (chromaticky) sum a vybrana vystupna farba nie je perceptualne najblizsia (neminimalizuje sa farebna vzdialenost delta-E).",
    nepravda: "Kvantovat R, G, B samostatne je jednoduche a nevyzaduje pevnu paletu; chyby v kanaloch su zaroven previazane, takze nevznika farebny sum a vybrana vystupna farba je vzdy perceptualne najblizsia (minimalizuje sa farebna vzdialenost delta-E).",
    nepravda2: "Kvantovat R, G, B samostatne je jednoduche a nevyzaduje pevnu paletu; hoci su chyby v kanaloch nezavisle, farebny sum NEvznika, lebo nezavisle zaokruhlenie kanalov vzdy zachova povodny odtien."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 006",
    oblast: "Farebny dithering",
    podoblast: "Perceptualny pristup",
    pravda: "Perceptualne presnejsi pristup by kvantoval vo vnimovo rovnomernom priestore (napr. CIELAB), vybral najblizsiu farbu palety podla delta-E a chybu difuzoval ako farebny vektor; praca zamerne zvolila jednoduchsie nezavisle kanaly RGB.",
    nepravda: "Perceptualne presnejsi pristup by kvantoval priamo v RGB, vybral najblizsiu farbu palety podla euklidovskej vzdialenosti v RGB a chybu difuzoval po kanaloch; praca zamerne zvolila zlozitejsi priestor CIELAB.",
    nepravda2: "Perceptualne presnejsi pristup by kvantoval vo vnimovo rovnomernom priestore (napr. CIELAB), vybral najblizsiu farbu palety podla delta-E a chybu difuzoval ako farebny vektor; praca prave tento perceptualny pristup aj pouzila."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 007",
    oblast: "Float buffer",
    podoblast: "Preco float pri Floyd-Steinbergovi",
    pravda: "Pri difuzii chyby treba idealne pocitat vo float pracovnom buffri, lebo imageData.data je Uint8ClampedArray: kazde pricitanie chyby (+=) sa hned zaokruhli na cele cislo a oreze do 0-255, cim sa zlomkova cast chyby straca a na okrajoch rozsahu sa chyba uplne strati.",
    nepravda: "Pri difuzii chyby treba idealne pocitat vo float pracovnom buffri, lebo imageData.data je Float32Array: kazde pricitanie chyby (+=) sa hned zaokruhli na cele cislo a oreze do 0-255, cim sa zlomkova cast chyby straca a na okrajoch rozsahu sa chyba uplne strati.",
    nepravda2: "Pri difuzii chyby staci pocitat priamo v poli imageData.data (Uint8ClampedArray), lebo to drzi desatinne aj zaporne hodnoty bez zaokruhlenia; ziadny float pracovny buffer nie je potrebny."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 008",
    oblast: "Float buffer",
    podoblast: "Dosledok a riesenie",
    pravda: "Dosledok difuzie priamo v Uint8ClampedArray: zaokruhlenie pri kazdom kroku znepresni prenos chyby a orezanie na 0-255 ju vo svetlach a tienoch uplne straci, takze tam moze prezit banding; spravne riesenie je drzat hodnoty vo Float32 pracovnom buffri a do 8-bitoveho vystupu zapisat az finalnu kvantovanu hodnotu.",
    nepravda: "Dosledok difuzie priamo v Uint8ClampedArray nie je ziadny, lebo pole presne uchova aj zlomkovu chybu aj pretecenie mimo 0-255; float pracovny buffer by vysledok nezmenil.",
    nepravda2: "Dosledok difuzie priamo v Uint8ClampedArray: zaokruhlenie pri kazdom kroku znepresni prenos chyby a orezanie na 0-255 ju vo svetlach a tienoch uplne straci; spravne riesenie je drzat hodnoty v 8-bitovom celociselnom poli a do vystupu zapisat az finalnu kvantovanu hodnotu - float sa pouzit neda."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 8. Obraz 009",
    oblast: "Dalsie algoritmy",
    podoblast: "Obrazove metody",
    pravda: "Dalsie obrazove metody nad ramec prace: blue-noise / void-and-cluster matice (lepsie nez Bayer, bez periodickeho vzoru), ine difuzne jadra ako Jarvis-Judice-Ninke, Stucki, Atkinson ci Sierra, serpentinovy (cik-cak) sken a Riemersmov dithering po Hilbertovej krivke.",
    nepravda: "Dalsie obrazove metody nad ramec prace: blue-noise / void-and-cluster matice (lepsie nez Bayer, bez periodickeho vzoru), ine difuzne jadra ako TPDF, RPDF, Gaussian ci Box-Muller, serpentinovy (cik-cak) sken a Riemersmov dithering po Hilbertovej krivke.",
    nepravda2: "Dalsie obrazove metody nad ramec prace: blue-noise / void-and-cluster matice su horsie nez Bayer (maju vyrazny periodicky vzor), ine difuzne jadra ako Jarvis-Judice-Ninke, Stucki, Atkinson ci Sierra, serpentinovy sken a Riemersmov dithering po Hilbertovej krivke."
  },

  // ===== Implementacia palety (obrazovy aplet) - real-time / AudioWorklet ma vlastny okruh 7 =====
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 9. Impl 004",
    oblast: "Paleta",
    podoblast: "Siva paleta",
    pravda: "Sivu paletu kresli zobrazSivuPaletu: vytvori 2^N farebnych stvorcekov (div), kde hodnota i-teho je round(i * Q), a vypise text s poctom urovni; paleta sa prekresli pri kazdej zmene bitovej hlbky.",
    nepravda: "Sivu paletu kresli zobrazSivuPaletu: vytvori 2^N farebnych stvorcekov (div), kde hodnota i-teho je round(i * Q), a vypise text s poctom urovni; paleta sa vykresli iba raz pri nacitani stranky.",
    nepravda2: "Sivu paletu kresli zobrazSivuPaletu: vytvori N farebnych stvorcekov (div), kde hodnota i-teho je round(i * Q), a vypise text s poctom urovni; paleta sa prekresli pri kazdej zmene bitovej hlbky."
  },
  {
    okruh: "9. Obraz - hlbsia teoria",
    id: "OBH 9. Impl 005",
    oblast: "Paleta",
    podoblast: "RGB paleta",
    pravda: "RGB paleta ma (2^N)^3 farieb (kombinacie urovni troch kanalov); kedze pri vyssich N je ich prilis vela na zobrazenie, funkcia zobrazRGBPaletu vypise realny pocet v texte, ale samotne policka orezuje na 3-bitovu paletu (512 farieb), ak je N > 3.",
    nepravda: "RGB paleta ma 3 * 2^N farieb (sucet urovni troch kanalov); kedze pri vyssich N je ich prilis vela na zobrazenie, funkcia zobrazRGBPaletu vypise realny pocet v texte, ale samotne policka orezuje na 3-bitovu paletu (512 farieb), ak je N > 3.",
    nepravda2: "RGB paleta ma (2^N)^3 farieb (kombinacie urovni troch kanalov); funkcia zobrazRGBPaletu vykresli vsetky tieto policka bez ohladu na N, aj keby ich boli miliony."
  },

  // ============================================================
  // OKRUH 10: Komentare oponenta
  // ============================================================
  {
    okruh: "10. Komentare oponenta",
    id: "OBH 10. Oponent 001",
    oblast: "Vertikalna os grafov",
    podoblast: "Co tym oponent myslel",
    pravda: "Oponentov navrh 'zmena kroku vertikalnej osi podla bitovej hlbky' znamena: krok mriezky na osi y by sa mal rovnat kvantizacnemu kroku Q(N), aby vodorovne ciary grafu predstavovali realne kvantizacne urovne a ich pocet sa menil so zmenou bitovej hlbky.",
    nepravda: "Oponentov navrh 'zmena kroku vertikalnej osi podla bitovej hlbky' znamena: krok mriezky na casovej osi x by sa mal rovnat kvantizacnemu kroku Q(N), aby zvisle ciary grafu predstavovali realne kvantizacne urovne.",
    nepravda2: "Oponentov navrh 'zmena kroku vertikalnej osi podla bitovej hlbky' znamena: rozsah osi y by sa mal s rastucou bitovou hlbkou zvacsovat nad rozsah <-1, 1>, aby sa zmestilo viac urovni."
  },
  {
    okruh: "10. Komentare oponenta",
    id: "OBH 10. Oponent 002",
    oblast: "Vertikalna os grafov",
    podoblast: "Aktualny stav a prinos",
    pravda: "V aktualnom aplete je mriezka osi y pevne po 0,2 nezavisle od bitovej hlbky, takze kvantizacne urovne su len implicitne nazncene schodmi; ciara na kazdu uroven (najma pri nizkom N) by ich zviditelnila a priamo prepojila graf s teoriou - je to opravneny vyukovy navrh, nie chyba vypoctu.",
    nepravda: "V aktualnom aplete sa mriezka osi y uz meni s bitovou hlbkou a kazda ciara lezi na kvantizacnej urovni, takze oponentov navrh je uz splneny a netreba nic menit.",
    nepravda2: "V aktualnom aplete je mriezka osi y pevne po 0,2 nezavisle od bitovej hlbky; doplnit ciaru na kazdu uroven by vsak bola chyba vypoctu, lebo by zmenila tvar kvantizovaneho signalu."
  },
  {
    okruh: "10. Komentare oponenta",
    id: "OBH 10. Oponent 003",
    oblast: "Ocenenie palety a metod",
    podoblast: "Je to vytka alebo pochvala",
    pravda: "Druhy citovany komentar ('ocenujem vizualizaciu paliet a implementaciu viacerych nastavitelnych metod ditheringu') je POZITIVNE hodnotenie, nie vytka: oponent chvali zobrazenie palety farieb pre sivy aj RGB rezim a moznost prepinat metody none/random/ordered/Floyd-Steinberg - netreba nic opravovat, len to vediet ukazat.",
    nepravda: "Druhy citovany komentar ('ocenujem vizualizaciu paliet a implementaciu viacerych nastavitelnych metod ditheringu') je VYTKA: oponent kritizuje, ze paleta aj metody su zle spracovane a treba ich prerobit pred obhajobou.",
    nepravda2: "Druhy citovany komentar ('ocenujem vizualizaciu paliet a implementaciu viacerych nastavitelnych metod ditheringu') je pozitivne hodnotenie audio apletu: oponent chvali zobrazenie spektra a moznost prepinat typy ditheru TPDF/RPDF/Gaussian."
  },

  // ============================================================
  // OKRUH 11: SZZ Prienik Bakalarka
  // Mosty medzi SZZ okruhmi (CZS, VS2, ZHA, HEL) a temami bakalarky.
  // Predseda = skolitel, statnice nadvazuju na obhajobu -> najpravdepodobnejsie prepojenia.
  // ============================================================
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 001",
    oblast: "Strategia",
    podoblast: "Kde caka prienik",
    pravda: "Statnice nadvazuju na obhajobu a predseda je moj skolitel, takze najpravdepodobnejsi prienik je s CZS (cislicove spracovanie signalov) - moja praca je prakticka aplikacia CZS: vzorkovanie, kvantizacia, kvantizacny sum, spektrum a filtre.",
    nepravda: "Statnice nadvazuju na obhajobu a predseda je moj skolitel, takze najpravdepodobnejsi prienik je so ZIN (zaklady instrumentace) - moja praca je prakticka aplikacia organologie nastrojov.",
    nepravda2: "Statnice nadvazuju na obhajobu a predseda je moj skolitel, ale moja praca nema so SZZ okruhmi nic spolocne - je to cisto programatorska praca o JavaScripte."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 002",
    oblast: "CZS",
    podoblast: "Okruh 1 - diskretny vs cislicovy",
    pravda: "Prienik s CZS okruhom 1 (Diskretne a cislicove signaly): rozdiel medzi diskretnym a cislicovym signalom je prave kvantizacia - diskretny je vzorkovany len v case, cislicovy je navyse kvantovany v amplitude na konecny pocet urovni. Digitalizacia v mojej praci = vzorkovanie + kvantizacia.",
    nepravda: "Prienik s CZS okruhom 1 (Diskretne a cislicove signaly): rozdiel medzi diskretnym a cislicovym signalom je prave vzorkovanie - diskretny je kvantovany v amplitude, cislicovy je navyse vzorkovany v case. Digitalizacia v mojej praci = vzorkovanie + kvantizacia.",
    nepravda2: "Prienik s CZS okruhom 1 (Diskretne a cislicove signaly): rozdiel medzi diskretnym a cislicovym signalom je prave kvantizacia - diskretny je vzorkovany len v case, cislicovy je navyse kvantovany v amplitude na NEkonecny pocet urovni. Digitalizacia v mojej praci = vzorkovanie + kvantizacia."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 003",
    oblast: "CZS",
    podoblast: "Okruh 2 - klasifikacia signalov",
    pravda: "Prienik s CZS okruhom 2 (Klasifikacia signalov): kvantizacny sum aj dither su nahodne (stochasticke) signaly, kym budiaci sinus je deterministicky periodicky signal; dither je zamerne pridany nahodny signal, ktory meni deterministicke skreslenie na nahodny sum.",
    nepravda: "Prienik s CZS okruhom 2 (Klasifikacia signalov): kvantizacny sum aj dither su deterministicke periodicke signaly, kym budiaci sinus je nahodny signal; dither je zamerne pridany nahodny signal, ktory meni deterministicke skreslenie na nahodny sum.",
    nepravda2: "Prienik s CZS okruhom 2 (Klasifikacia signalov): kvantizacny sum aj dither su nahodne signaly, kym budiaci sinus je deterministicky periodicky signal; dither je zamerne pridany deterministicky signal, ktory meni nahodny sum na periodicke skreslenie."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 004",
    oblast: "CZS",
    podoblast: "Okruh 3 - korelacia",
    pravda: "Prienik s CZS okruhom 3 (Korelacia): cielom ditheru je, aby kvantizacna chyba bola NEKORELOVANA so vstupnym signalom; pri nizkych urovniach bez ditheru je chyba so signalom silno korelovana (preto skreslenie). Dither teda riesi prave koreláciu chyby so signalom.",
    nepravda: "Prienik s CZS okruhom 3 (Korelacia): cielom ditheru je, aby kvantizacna chyba bola silno KORELOVANA so vstupnym signalom; pri nizkych urovniach bez ditheru je chyba so signalom nekorelovana. Dither teda riesi prave koreláciu chyby so signalom.",
    nepravda2: "Prienik s CZS okruhom 3 (Korelacia): cielom ditheru je, aby kvantizacna chyba bola nekorelovana so vstupnym signalom; pri VYSOKYCH urovniach a zlozitych signaloch je chyba so signalom silno korelovana (preto skreslenie). Dither teda riesi prave koreláciu chyby so signalom."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 005",
    oblast: "CZS",
    podoblast: "Okruhy 5/6 - LTI, FIR a IIR",
    pravda: "Prienik s CZS okruhmi 5/6 (LTI, FIR a IIR systemy): kvantizer je NElinearny systém (preto vznika skreslenie a harmonicke), nie LTI; dither ho stochasticky 'linearizuje'. Tvarovanie sumu aj Floyd-Steinbergova difuzia su naopak filtre so spatnou vazbou (FIR/IIR).",
    nepravda: "Prienik s CZS okruhmi 5/6 (LTI, FIR a IIR systemy): kvantizer je linearny casovo invariantny (LTI) systém, preto nevznika ziadne skreslenie; dither ho stochasticky 'linearizuje'. Tvarovanie sumu aj Floyd-Steinbergova difuzia su filtre so spatnou vazbou (FIR/IIR).",
    nepravda2: "Prienik s CZS okruhmi 5/6 (LTI, FIR a IIR systemy): kvantizer je NElinearny systém (preto vznika skreslenie a harmonicke); dither ho linearizuje. Tvarovanie sumu aj Floyd-Steinbergova difuzia su vsak ciste bezpamatove systemy bez akejkolvek spatnej vazby."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 006",
    oblast: "CZS",
    podoblast: "Okruh 7 - transformacia Z",
    pravda: "Prienik s CZS okruhom 7 (Transformacia Z): sumova prenosova funkcia tvarovania sumu sa zapisuje v Z-doméne ako NTF = 1 - H(z); prvoradovy shaper ma NTF = 1 - z^-1, co je hornopriepustny filter tlaciaci sum k vyssim frekvenciam.",
    nepravda: "Prienik s CZS okruhom 7 (Transformacia Z): sumova prenosova funkcia tvarovania sumu sa zapisuje v Z-doméne ako NTF = 1 + H(z); prvoradovy shaper ma NTF = 1 + z^-1, co je dolnopriepustny filter tlaciaci sum k nizsim frekvenciam.",
    nepravda2: "Prienik s CZS okruhom 7 (Transformacia Z): sumova prenosova funkcia tvarovania sumu sa zapisuje v Z-doméne ako NTF = 1 - H(z); prvoradovy shaper ma NTF = 1 - z^-1, co je dolnopriepustny filter tlaciaci sum k nizsim frekvenciam."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 007",
    oblast: "CZS",
    podoblast: "Okruh 8 - Fourier a spektrum",
    pravda: "Prienik s CZS okruhom 8 (Fourierova transformacia): biely dither ma plochu spektralnu hustotu; kvantizacne skreslenie sa v spektre prejavi ako diskretne harmonicke a dither ich rozprestrie do plocheho sumoveho dna. Spektrum (FFT) by bolo najlepsim dokazom zmeny charakteru chyby - chybajuce rozsirenie apletu.",
    nepravda: "Prienik s CZS okruhom 8 (Fourierova transformacia): biely dither ma plochu spektralnu hustotu; kvantizacne skreslenie sa v spektre prejavi ako ploche sumove dno a dither ho stiahne do diskretnych harmonickych. Spektrum (FFT) by bolo najlepsim dokazom zmeny charakteru chyby.",
    nepravda2: "Prienik s CZS okruhom 8 (Fourierova transformacia): biely dither ma spektrum sustredene do nizkych frekvencii; kvantizacne skreslenie sa v spektre prejavi ako diskretne harmonicke a dither ich rozprestrie do plocheho sumoveho dna. Spektrum (FFT) by bolo najlepsim dokazom zmeny charakteru chyby."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 008",
    oblast: "CZS",
    podoblast: "Okruh 8 - Nyquist a aliasing",
    pravda: "Prienik s CZS okruhom 8 a vzorkovanim: Nyquistov teorem (fs >= 2 fmax) a aliasing su zakladom vzorkovacej casti mojej prace; zlozky nad fs/2 sa zrkadlovo preklopia, preto sa pred A/D prevodnik zaradzuje analogovy antialiasing dolnopriepustny filter.",
    nepravda: "Prienik s CZS okruhom 8 a vzorkovanim: Nyquistov teorem (fs >= fmax) a aliasing su zakladom vzorkovacej casti mojej prace; zlozky nad fs/2 sa zrkadlovo preklopia, preto sa pred A/D prevodnik zaradzuje analogovy antialiasing dolnopriepustny filter.",
    nepravda2: "Prienik s CZS okruhom 8 a vzorkovanim: Nyquistov teorem (fs >= 2 fmax) a aliasing su zakladom vzorkovacej casti mojej prace; zlozky nad fs/2 sa preklopia, preto sa az za D/A prevodnik zaradzuje analogovy antialiasing hornopriepustny filter."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 009",
    oblast: "CZS",
    podoblast: "Okruh 9 - navrh filtrov",
    pravda: "Prienik s CZS okruhom 9 (Navrh cislicovych filtrov): Floyd-Steinbergovo difuzne jadro je 2D FIR filter kvantizacnej chyby a tvarovanie sumu je IIR filter v spatnej vazbe kvantizera; aj antialiasing a rekonstrukcny filter z reťazca A/D-D/A patria do tohto okruhu.",
    nepravda: "Prienik s CZS okruhom 9 (Navrh cislicovych filtrov): Floyd-Steinbergovo difuzne jadro je 2D IIR filter v spatnej vazbe a tvarovanie sumu je FIR filter bez spatnej vazby; aj antialiasing a rekonstrukcny filter patria do tohto okruhu.",
    nepravda2: "Prienik s CZS okruhom 9 (Navrh cislicovych filtrov): Floyd-Steinbergovo difuzne jadro je 2D FIR filter kvantizacnej chyby a tvarovanie sumu je IIR filter v spatnej vazbe kvantizera; antialiasing ani rekonstrukcny filter vsak s filtrami nesuvisia."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 010",
    oblast: "ZHA",
    podoblast: "Okruhy 2/5 - spektrum a harmonicke",
    pravda: "Prienik so ZHA okruhmi 2 a 5 (Spektrum, vyssie harmonicke): kvantizacne skreslenie pri nizkych urovniach generuje vyssie harmonicke (neparne pre symetricky kvantizer) - to iste harmonicke spektrum, ktore ZHA rozobera pri tonoch nastrojov. Dither tieto harmonicke nahradi sumom.",
    nepravda: "Prienik so ZHA okruhmi 2 a 5 (Spektrum, vyssie harmonicke): kvantizacne skreslenie pri nizkych urovniach generuje vyssie harmonicke (parne pre symetricky kvantizer) - to iste harmonicke spektrum, ktore ZHA rozobera pri tonoch nastrojov. Dither tieto harmonicke nahradi sumom.",
    nepravda2: "Prienik so ZHA okruhmi 2 a 5 (Spektrum, vyssie harmonicke): kvantizacne skreslenie pri nizkych urovniach generuje vyssie harmonicke - to iste spektrum, ktore ZHA rozobera pri tonoch nastrojov. Dither tieto harmonicke este zvyrazni a prida dalsie."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 011",
    oblast: "ZHA",
    podoblast: "Okruh 3 - cas vs frekvencia",
    pravda: "Prienik so ZHA okruhom 3 (Frekvencna a casova reprezentacia): moj aplet zobrazuje chybu len v CASOVEJ oblasti, no zmena jej charakteru (skreslenie -> sum) je najlepsie viditelna vo FREKVENCNEJ oblasti - presne tu dualitu cas/frekvencia preberá ZHA aj CZS.",
    nepravda: "Prienik so ZHA okruhom 3 (Frekvencna a casova reprezentacia): moj aplet zobrazuje chybu len vo FREKVENCNEJ oblasti, no zmena jej charakteru je najlepsie viditelna v CASOVEJ oblasti - presne tu dualitu cas/frekvencia preberá ZHA aj CZS.",
    nepravda2: "Prienik so ZHA okruhom 3 (Frekvencna a casova reprezentacia): moj aplet zobrazuje chybu v casovej oblasti a zmena jej charakteru je rovnako citatelna v case aj vo frekvencii, takze na volbe oblasti nezalezi."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 012",
    oblast: "VS2",
    podoblast: "Okruh 9 - psychoakustika",
    pravda: "Prienik s VS2 okruhom 9 (Vnutorne ucho a psychoakustika): tvarovanie sumu vyuziva nerovnomernu citlivost sluchu - najcitlivejsi je priblizne v pasme 1-5 kHz, preto sa kvantizacny sum tlaci mimo neho. Je to priama aplikacia psychoakustiky na kvantizacny sum.",
    nepravda: "Prienik s VS2 okruhom 9 (Vnutorne ucho a psychoakustika): tvarovanie sumu vyuziva nerovnomernu citlivost sluchu - najcitlivejsi je priblizne v pasme 10-15 kHz, preto sa kvantizacny sum tlaci mimo neho. Je to priama aplikacia psychoakustiky na kvantizacny sum.",
    nepravda2: "Prienik s VS2 okruhom 9 (Vnutorne ucho a psychoakustika): tvarovanie sumu vyuziva nerovnomernu citlivost sluchu - najcitlivejsi je priblizne v pasme 1-5 kHz, preto sa kvantizacny sum tlaci prave do neho. Je to priama aplikacia psychoakustiky na kvantizacny sum."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 013",
    oblast: "VS2",
    podoblast: "Okruh 10 - Weber-Fechner",
    pravda: "Prienik s VS2 okruhom 10 (Weber-Fechner): vnem rastie logaritmicky s podnetom, preto odstup signalu od sumu (SNR) aj uroven signalu meriame v decibeloch; Weber-Fechner zaroven vysvetluje, preco je dolezity SUBJEKTIVNY dojem - hlavny argument celej mojej prace o ditheringu.",
    nepravda: "Prienik s VS2 okruhom 10 (Weber-Fechner): vnem rastie linearne s podnetom, preto odstup signalu od sumu (SNR) meriame v decibeloch; Weber-Fechner zaroven vysvetluje, preco je dolezity subjektivny dojem - hlavny argument celej mojej prace o ditheringu.",
    nepravda2: "Prienik s VS2 okruhom 10 (Weber-Fechner): vnem rastie logaritmicky s podnetom, preto odstup signalu od sumu (SNR) meriame v percentach; Weber-Fechner zaroven vysvetluje, preco je dolezity subjektivny dojem - hlavny argument celej mojej prace o ditheringu."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 014",
    oblast: "HEL",
    podoblast: "Okruh 5 - DCO a fazovy akumulator",
    pravda: "Prienik s HEL okruhom 5 (Digitalny riadeny oscilator): moj AudioWorklet generuje tony fazovym akumulatorom (faza sa zvysuje o f/fs a wrapuje pri 1) - to je presne princip cislicovo riadeneho oscilatora (DCO/NCO) zo syntezy v HEL.",
    nepravda: "Prienik s HEL okruhom 5 (Digitalny riadeny oscilator): moj AudioWorklet generuje tony fazovym akumulatorom (faza sa zvysuje o fs/f a wrapuje pri 1) - to je presne princip cislicovo riadeneho oscilatora (DCO/NCO) zo syntezy v HEL.",
    nepravda2: "Prienik s HEL okruhom 5 (Digitalny riadeny oscilator): moj AudioWorklet generuje tony fazovym akumulatorom (faza sa zvysuje o f/fs a wrapuje pri 1) - to je presne princip napatovo riadeneho oscilatora (VCO) z analogovej syntezy v HEL."
  },
  {
    okruh: "11. SZZ Prienik Bakalarka",
    id: "OBH 11. Prienik 015",
    oblast: "HEL",
    podoblast: "Okruhy 1/6 - synteza a vzorky",
    pravda: "Prienik s HEL okruhmi 1 a 6 (Aditivna synteza, tabulkova synteza a sampler): aditivna synteza sklada zvuk zo sumu harmonickych a sampler pracuje s ulozenymi vzorkami s konecnou bitovou hlbkou - oboje sa opiera o vzorkovanie a kvantizaciu, ktore su jadrom mojej prace.",
    nepravda: "Prienik s HEL okruhmi 1 a 6 (Aditivna synteza, tabulkova synteza a sampler): aditivna synteza sklada zvuk z jedineho sinusu a sampler pracuje so vzorkami s nekonecnou bitovou hlbkou - oboje sa opiera o vzorkovanie a kvantizaciu, ktore su jadrom mojej prace.",
    nepravda2: "Prienik s HEL okruhmi 1 a 6 (Aditivna synteza, tabulkova synteza a sampler): subtraktivna synteza sklada zvuk zo sumu harmonickych a sampler pracuje s ulozenymi vzorkami - oboje sa opiera o vzorkovanie a kvantizaciu, ktore su jadrom mojej prace."
  }
];

const obhajobaOtazky = obhajobaCrackData.map((polozka) => ({
  id: polozka.id,
  tema: `OBH ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: polozka.okruh,
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Bakalarka_tisk.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

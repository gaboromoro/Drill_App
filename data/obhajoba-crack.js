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
    pravda: "Prehravanie ide cez Web Audio API: AudioContext -> mono AudioBuffer (createBuffer) -> AudioBufferSourceNode -> destination; tri tlacidla porovnavaju povodny signal, kvantovany bez ditheru a kvantovany s ditherom.",
    nepravda: "Prehravanie ide cez Web Audio API: AudioContext -> stereo AudioBuffer (createBuffer) -> AudioBufferSourceNode -> destination; tri tlacidla porovnavaju povodny signal, kvantovany bez ditheru a kvantovany s ditherom.",
    nepravda2: "Prehravanie ide cez Web Audio API: AudioContext -> mono AudioBuffer (createBuffer) -> AudioBufferSourceNode -> destination; dve tlacidla porovnavaju povodny signal a kvantovany s ditherom."
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
    nepravda2: "Hlavny prinos prace: dithering, ktory byva vo vyucbe DSP len dodatkom k hlavnej teorii, je tu spracovany ako teoria plus dve volne dostupne interaktivne aplikacie, kde efekt ditheru priamo VIDIET (grafy, obraz) - pocut ho zatial nie je mozne.",
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

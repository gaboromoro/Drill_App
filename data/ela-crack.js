// ELA - Elektroakustika, priprava na SZZ 2025/2026 (VUT Brno, Schimmel).
// 10 SZZ okruhov zgrupenych do 3 velkych okruhov v aplikacii (~20 statementov kazdy, ~60 spolu).
// Crack format s dvoma nepravdami; nepravda = chytak zvyraznujuci dolezitu informaciu.
// Obsah STRIKTNE len to, na co sa pytaju SZZ okruhy. Zdroj: prezentacie ELA_01..ELA_12.
// Skupina 1 = okruhy 1-4 (sirenie vln, sluch, zvukomer, akustika priestoru).
// Skupina 2 = okruhy 5-7 (menice, mikrofony, reproduktory).
// Skupina 3 = okruhy 8-10 (sustavy a vyhybky, sluchadla, ozvucovanie).

const elaCrackData = [
  // ##########################################################
  // SKUPINA 1 - OKRUHY 1-4: Akustika a meranie
  // ##########################################################

  // ===== Okruh 1: Sirenie a vlastnosti vln, typy poli =====
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 1. Vlny 001",
    oblast: "Okruh 1 - sirenie vln",
    podoblast: "Rovinna vlna",
    pravda: "Pri rovinnej vlne sa plocha vlnoplochy nemeni, preto sa akusticky tlak ANI intenzita so vzdialenostou od zdroja nemenia; specificka akusticka impedancia postupnej rovinnej vlny je realna a rovna sa ρ₀c₀ (≈ 413 kg·m⁻²·s⁻¹).",
    nepravda: "Pri rovinnej vlne sa plocha vlnoplochy zvacsuje, preto akusticky tlak aj intenzita so vzdialenostou od zdroja klesaju; specificka akusticka impedancia postupnej rovinnej vlny je realna a rovna sa ρ₀c₀ (≈ 413 kg·m⁻²·s⁻¹).",
    nepravda2: "Pri rovinnej vlne sa plocha vlnoplochy nemeni, preto sa akusticky tlak ani intenzita so vzdialenostou nemenia; specificka akusticka impedancia postupnej rovinnej vlny je komplexna a zavisi od vzdialenosti kr."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 1. Vlny 002",
    oblast: "Okruh 1 - sirenie vln",
    podoblast: "Gulova vlna",
    pravda: "Pri gulovej vlne rastie plocha vlnoplochy s r², preto intenzita klesa s druhou mocninou vzdialenosti (1/r²) a akusticky tlak s prvou mocninou (1/r) - zdvojnasobenie vzdialenosti znamena pokles tlaku o 6 dB; impedancia je komplexna, pre kr → ∞ prechadza na ρ₀c₀.",
    nepravda: "Pri gulovej vlne rastie plocha vlnoplochy s r², preto intenzita klesa s prvou mocninou vzdialenosti (1/r) a akusticky tlak s druhou mocninou (1/r²) - zdvojnasobenie vzdialenosti znamena pokles tlaku o 6 dB; impedancia je komplexna, pre kr → ∞ prechadza na ρ₀c₀.",
    nepravda2: "Pri gulovej vlne rastie plocha vlnoplochy s r², preto intenzita klesa s druhou mocninou vzdialenosti (1/r²) a akusticky tlak s prvou mocninou (1/r) - zdvojnasobenie vzdialenosti znamena pokles tlaku o 3 dB; impedancia je komplexna, pre kr → ∞ prechadza na ρ₀c₀."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 1. Vlny 003",
    oblast: "Okruh 1 - sirenie vln",
    podoblast: "Rychlost zvuku",
    pravda: "Rychlost zvuku v suchom vzduchu je c₀ = 331,6 + 0,61·ϑ [m/s], pri 20 °C teda ≈ 344 m/s; vo vode ≈ 1440 m/s; v pevnych latkach c = √(E/ρ) (E = modul pruznosti). Rychlost sirenia c₀ je konstantna skalarna velicina (na rozdiel od akustickej rychlosti castic v).",
    nepravda: "Rychlost zvuku v suchom vzduchu je c₀ = 331,6 + 0,61·ϑ [m/s], pri 20 °C teda ≈ 344 m/s; vo vode ≈ 344 m/s; v pevnych latkach c = √(E/ρ). Rychlost sirenia c₀ je konstantna skalarna velicina.",
    nepravda2: "Rychlost zvuku v suchom vzduchu je c₀ = 331,6 + 0,61·ϑ [m/s], pri 20 °C teda ≈ 344 m/s; vo vode ≈ 1440 m/s; v pevnych latkach c = √(E/ρ). Rychlost sirenia c₀ je premenna vektorova velicina meniaca smer s casom."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 1. Vlny 004",
    oblast: "Okruh 1 - typy poli",
    podoblast: "Volne a difuzne pole",
    pravda: "Vo volnom poli prevazuju priame (primarne) vlny - hustota energie sekundarnych (odrazenych) vln je nizsia; v difuznom poli je smer sirenia energie nahodny a stale sa meniaci, nedaju sa definovat vlnoplochy a hustota energie je vsade rovnaka.",
    nepravda: "Vo volnom poli prevazuju odrazene (sekundarne) vlny - hustota energie primarnych vln je nizsia; v difuznom poli je smer sirenia energie nahodny a stale sa meniaci, nedaju sa definovat vlnoplochy a hustota energie je vsade rovnaka.",
    nepravda2: "Vo volnom poli prevazuju priame (primarne) vlny - hustota energie sekundarnych vln je nizsia; v difuznom poli je smer sirenia energie pevne dany a hustota energie sa s polohou vyrazne meni."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 1. Vlny 005",
    oblast: "Okruh 1 - typy poli",
    podoblast: "Dozvukova vzdialenost a blizke pole",
    pravda: "Dozvukova (kriticka) vzdialenost je tam, kde sa hustota energie priamych vln rovna hustote odrazenych vln: r_d = 0,14·√A (A = celkova pohltivost). Blizke pole (Fresnelov priestor, kr << 1) je nehomogenne, medzi fazorom tlaku a rychlosti je nezanedbatelny uhol; vo vzdialenom poli je tento uhol zanedbatelny.",
    nepravda: "Dozvukova (kriticka) vzdialenost je tam, kde sa hustota energie priamych vln rovna hustote odrazenych vln: r_d = 0,14·√A (A = celkova pohltivost). Blizke pole (kr >> 1) je homogenne, medzi fazorom tlaku a rychlosti je zanedbatelny uhol; vo vzdialenom poli je tento uhol naopak velky.",
    nepravda2: "Dozvukova (kriticka) vzdialenost je tam, kde hustota energie priamych vln dosahuje maximum: r_d = 0,14·√A. Blizke pole (kr << 1) je nehomogenne, medzi fazorom tlaku a rychlosti je nezanedbatelny uhol; vo vzdialenom poli je tento uhol zanedbatelny."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 1. Vlny 006",
    oblast: "Okruh 1 - scitanie hladin",
    podoblast: "Koherentne vs nekoherentne",
    pravda: "Dve rovnako silne KOHERENTNE vlny vo faze daju +6 dB (tlaky sa scitaju vektorovo, 2p), v protifaze sa vyrusia; dve rovnako silne NEKOHERENTNE vlny daju len +3 dB (scitavaju sa vykony/intenzity). Pri rozdiele hladin nad ~15 dB je scitanie zbytocne.",
    nepravda: "Dve rovnako silne KOHERENTNE vlny vo faze daju +3 dB, v protifaze sa vyrusia; dve rovnako silne NEKOHERENTNE vlny daju +6 dB. Pri rozdiele hladin nad ~15 dB je scitanie zbytocne.",
    nepravda2: "Dve rovnako silne KOHERENTNE vlny vo faze daju +6 dB, v protifaze sa vyrusia; dve rovnako silne NEKOHERENTNE vlny daju tiez +6 dB. Pri rozdiele hladin nad ~3 dB je scitanie zbytocne."
  },

  // ===== Okruh 2: Sluch, kriticke pasma, maskovanie, smerove slysenie =====
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 2. Sluch 001",
    oblast: "Okruh 2 - sluchovy organ",
    podoblast: "Funkcie casti ucha",
    pravda: "Stredne ucho (kladivko-kovadlinka-strmienok) robi impedancnu transformaciu nizkej impedancie vzduchu na vysoku impedanciu tekutiny vnutorneho ucha (pomer ≈ 1:336); kmitoctova analyza zvuku prebieha az vo VNUTORNOM uchu na bazilarnej membrane.",
    nepravda: "Stredne ucho (kladivko-kovadlinka-strmienok) robi kmitoctovu analyzu zvuku; impedancna transformacia nizkej impedancie vzduchu na vysoku impedanciu tekutiny (pomer ≈ 1:336) prebieha az vo vnutornom uchu na bazilarnej membrane.",
    nepravda2: "Stredne ucho (kladivko-kovadlinka-strmienok) robi impedancnu transformaciu vysokej impedancie vzduchu na nizku impedanciu tekutiny vnutorneho ucha (pomer ≈ 1:336); kmitoctova analyza prebieha az vo vnutornom uchu na bazilarnej membrane."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 2. Sluch 002",
    oblast: "Okruh 2 - kmitoctova analyza",
    podoblast: "Tonotopia",
    pravda: "Princip tonotopie: kazdemu kmitoctu odpoveda miesto maxima vychylky bazilarnej membrany a mozog vyhodnoti vysku tonu podla miesta najvacsieho podrazdenia. Vysoke kmitocty budia maximum pri zaklade (blizko strmienka), nizke pri vrchole (apex); zavislost je logaritmicka (von Bekesy).",
    nepravda: "Princip tonotopie: kazdemu kmitoctu odpoveda miesto maxima vychylky bazilarnej membrany. Nizke kmitocty budia maximum pri zaklade (blizko strmienka), vysoke pri vrchole (apex); zavislost je logaritmicka (von Bekesy).",
    nepravda2: "Princip tonotopie: kazdemu kmitoctu odpoveda miesto maxima vychylky bazilarnej membrany. Vysoke kmitocty budia maximum pri zaklade, nizke pri vrchole; zavislost miesta od kmitoctu je linearna (von Bekesy)."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 2. Sluch 003",
    oblast: "Okruh 2 - kriticke pasma",
    podoblast: "Bark a sirka pasma",
    pravda: "Kriticke pasmo je ta cast spektra sirokopasmoveho sumu okolo maskovaneho tonu, ktora sa podiela na maskovani (energia mimo neho maskovaci prah neovplyvni). Sirka je do ~500 Hz konstantna (~100 Hz), nad tym rastie priblizne ako 0,2·f; Barkova stupnica ma 24 pasiem, 1 bark = 100 mel.",
    nepravda: "Kriticke pasmo je ta cast spektra sirokopasmoveho sumu okolo maskovaneho tonu, ktora sa podiela na maskovani. Sirka je do ~500 Hz konstantna (~100 Hz), nad tym rastie ako 0,2·f; Barkova stupnica ma 24 pasiem, 1 bark = 100 fon.",
    nepravda2: "Kriticke pasmo je ta cast spektra sumu okolo maskovaneho tonu, ktora sa podiela na maskovani. Sirka kritickeho pasma je v celom rozsahu konstantna (~100 Hz); Barkova stupnica ma 24 pasiem, 1 bark = 100 mel."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 2. Sluch 004",
    oblast: "Okruh 2 - maskovanie",
    podoblast: "Simultanne a casove",
    pravda: "Maskovanie: silnejsi zvuk potlaci vnem slabsieho, ak drazdia tie iste miesta bazilarnej membrany. Casove maskovanie ma pre-masking (kratky, pred zaznenim maskovaceho zvuku) aj post-masking (dlhsi, po jeho odzneni). Vyuziva sa pri stratovom kodovani (znizenie slova o 1 bit = pokles SNR o 6 dB).",
    nepravda: "Maskovanie: silnejsi zvuk potlaci vnem slabsieho. Casove maskovanie ma pre-masking (dlhy, pred zaznenim) aj post-masking (kratky, po odzneni). Vyuziva sa pri stratovom kodovani (znizenie slova o 1 bit = pokles SNR o 6 dB).",
    nepravda2: "Maskovanie: silnejsi zvuk potlaci vnem slabsieho. Casove maskovanie ma pre-masking aj post-masking. Vyuziva sa pri stratovom kodovani, kde znizenie dlzky slova o 1 bit znamena pokles odstupu signal-sum o 12 dB."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 2. Sluch 005",
    oblast: "Okruh 2 - smerove slysenie",
    podoblast: "ITD, ILD, precedence",
    pravda: "Smerove pocutie (duplexna teoria): na nizkych kmitoctoch (do ~700 Hz) rozhoduje interauralny casovy rozdiel ITD, na vyssich interauralny rozdiel urovni ILD/IID (akusticky tien hlavy), nad ~5 kHz spektralne zmeny od boltca. Haasov efekt (zakon prveho cela vlny): smer urcuje prva vlna; odraz do ~30 ms sa nevnima ako smer.",
    nepravda: "Smerove pocutie: na nizkych kmitoctoch (do ~700 Hz) rozhoduje interauralny rozdiel urovni ILD/IID, na vyssich casovy rozdiel ITD; nad ~5 kHz spektralne zmeny od boltca. Haasov efekt: smer urcuje prva vlna; odraz do ~30 ms sa nevnima ako smer.",
    nepravda2: "Smerove pocutie: na nizkych kmitoctoch (do ~700 Hz) rozhoduje ITD, na vyssich ILD/IID; nad ~5 kHz spektralne zmeny od boltca. Haasov efekt: smer urcuje vzdy hlasnejsia vlna bez ohladu na poradie prichodu."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 2. Sluch 006",
    oblast: "Okruh 2 - subjektivny vnem",
    podoblast: "Weber-Fechner, fon, son, mel",
    pravda: "Weber-Fechnerov zakon: nasobky akustickych velicin (geometricka rada) vnima ucho ako pristky (aritmeticka rada), preto logaritmicke dB. Hladina hlasitosti = fon (= dB SPL sinusu 1 kHz rovnako hlasiteho), subjektivna hlasitost = son (1 son = 40 fon, +10 fon ≈ dvojnasobna hlasitost), vyska = mel.",
    nepravda: "Weber-Fechnerov zakon: nasobky velicin (geometricka rada) vnima ucho ako pristky (aritmeticka rada), preto logaritmicke dB. Hladina hlasitosti = son, subjektivna hlasitost = fon (1 fon = 40 son, +10 son ≈ dvojnasobna hlasitost), vyska = mel.",
    nepravda2: "Weber-Fechnerov zakon: nasobky velicin vnima ucho ako pristky, preto logaritmicke dB. Hladina hlasitosti = fon, subjektivna hlasitost = son (1 son = 40 fon, +3 fon ≈ dvojnasobna hlasitost), vyska = mel."
  },

  // ===== Okruh 3: Zvukomer, CPB, vahove filtre, kalibracia =====
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 3. Zvukomer 001",
    oblast: "Okruh 3 - blokova schema",
    podoblast: "Casti zvukomeru",
    pravda: "Blokova schema digitalneho zvukomeru: mikrofon → predzosilovac (prepinac rozsahu) → A/D prevodnik → kmitoctove vahove filtre → pasmove filtry → kvadrator (druha mocnina) → dolna priepust = integracny clanok (casova konstanta) → druha odmocnina → logaritmus → zobrazenie efektivnej hodnoty v dB.",
    nepravda: "Blokova schema digitalneho zvukomeru: mikrofon → predzosilovac → A/D prevodnik → kmitoctove vahove filtre → pasmove filtry → logaritmus → dolna priepust (casova konstanta) → kvadrator → druha odmocnina → zobrazenie. Druha mocnina sa pocita az na konci.",
    nepravda2: "Blokova schema digitalneho zvukomeru: mikrofon → predzosilovac → A/D prevodnik → kmitoctove vahove filtre → pasmove filtry → kvadrator → horna priepust (casova konstanta) → druha odmocnina → logaritmus → zobrazenie efektivnej hodnoty v dB."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 3. Zvukomer 002",
    oblast: "Okruh 3 - mikrofon a rozsah",
    podoblast: "Kondenzatorovy mikrofon",
    pravda: "Mikrofon zvukomeru je kondenzatorovy (elektrostaticky menic) s polarizacnym napatim az 200 V; ma konstantnu kmitoctovu charakteristiku, vysoku a stalu citlivost a vsesmerovu charakteristiku. Citlivost = Uef/p [V/Pa]; mensi priemer membrany posuva narast tlaku k vyssim kmitoctom.",
    nepravda: "Mikrofon zvukomeru je dynamicky (elektrodynamicky menic) bez potreby polarizacneho napatia; ma konstantnu kmitoctovu charakteristiku, vysoku citlivost a vsesmerovu charakteristiku. Citlivost = Uef/p [V/Pa]; mensi priemer membrany posuva narast tlaku k vyssim kmitoctom.",
    nepravda2: "Mikrofon zvukomeru je kondenzatorovy s polarizacnym napatim az 200 V; ma konstantnu kmitoctovu charakteristiku a vysoku citlivost. Citlivost = p/Uef [Pa/V]; vacsi priemer membrany posuva narast tlaku k vyssim kmitoctom."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 3. Zvukomer 003",
    oblast: "Okruh 3 - casove konstanty",
    podoblast: "Slow, Fast, Impulse",
    pravda: "Casove vazenie (casove konstanty) zvukomeru podla IEC 61672-1: Slow (S) = 1 s pre stacionarne hluky, Fast (F) = 125 ms pre kratkodobo premenne hluky, Impulse (I) = 35 ms pre impulzne hluky (s pomalsim poklesom 2,9 dB/s). Realizovane dolnou priepustou (integracny clanok).",
    nepravda: "Casove vazenie zvukomeru: Slow (S) = 1 s pre impulzne hluky, Fast (F) = 125 ms pre stacionarne hluky, Impulse (I) = 35 ms pre kratkodobo premenne hluky. Realizovane dolnou priepustou.",
    nepravda2: "Casove vazenie zvukomeru: Slow (S) = 125 ms pre stacionarne hluky, Fast (F) = 1 s pre kratkodobo premenne hluky, Impulse (I) = 35 ms pre impulzne hluky. Realizovane dolnou priepustou."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 3. Zvukomer 004",
    oblast: "Okruh 3 - vahove filtre a CPB",
    podoblast: "Filtre A/C/Z a CPB analyza",
    pravda: "Vahove filtre su inverzne ku krivkam rovnakej hlasitosti: typ A ≈ inverzia 40 fon (nizke urovne), typ C ≈ 100 fon (vysoke urovne), typ Z (zero) = bez korekcie. CPB analyza (Constant Percentage Bandwidth) ma konstantnu relativnu sirku pasma - oktavove, 1/3, 1/6-oktavove pasma, kde absolutna sirka rastie s kmitoctom.",
    nepravda: "Vahove filtre su inverzne ku krivkam rovnakej hlasitosti: typ A ≈ inverzia 100 fon (vysoke urovne), typ C ≈ 40 fon (nizke urovne), typ Z = bez korekcie. CPB analyza ma konstantnu relativnu sirku pasma (oktavove, tretinooktavove pasma).",
    nepravda2: "Vahove filtre su inverzne ku krivkam rovnakej hlasitosti: typ A ≈ 40 fon, typ C ≈ 100 fon, typ Z = bez korekcie. CPB analyza (Constant Percentage Bandwidth) ma konstantnu ABSOLUTNU sirku pasma v Hz pre vsetky pasma rovnaku."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 3. Zvukomer 005",
    oblast: "Okruh 3 - kalibracia",
    podoblast: "Kalibracia vs justovanie",
    pravda: "Kalibracia = metrologicky ukon podla pisomneho postupu, vydava sa protokol, ma lehoty a stanovuje sa nejistota. Justovanie (justaz) = priprava midla k meraniu, najma kompenzacia na aktualny barometricky tlak - BEZ protokolu, lehot a nejistot; v praxi sa nespravne oznacuje ako kalibracia. Akusticka kalibracia: pistonfon (do 250 Hz) alebo tonovy kalibrator (1 kHz, 94/114 dB).",
    nepravda: "Justovanie = metrologicky ukon podla pisomneho postupu s protokolom a nejistotou. Kalibracia = priprava midla, najma kompenzacia na barometricky tlak, bez protokolu a lehot; v praxi sa nespravne oznacuje ako justovanie. Akusticka kalibracia: pistonfon (do 250 Hz) alebo tonovy kalibrator (1 kHz).",
    nepravda2: "Kalibracia = metrologicky ukon s protokolom a nejistotou. Justovanie = kompenzacia na barometricky tlak, bez protokolu. Akusticka kalibracia: pistonfon az do 5 kHz alebo tonovy kalibrator na 440 Hz s hladinami 94/114 dB."
  },

  // ===== Okruh 4: Akustika priestoru, dozvuk, impulzna charakteristika =====
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 4. Priestor 001",
    oblast: "Okruh 4 - javy pri sireni",
    podoblast: "Odraz, ohyb, absorpcia",
    pravda: "Pri narazeni vlny na prekazku nastava odraz (zrkadlovy/difuzny), ohyb (difrakcia), absorpcia a prechod. O tom, ci sa energia odrazi alebo siri ohybom dalej, rozhoduju rozmery prekazky v porovnani s vlnovou dlzkou. Cinitel pohltivosti α = Wa/Wd (pohltena/dopadajuca energia).",
    nepravda: "Pri narazeni vlny na prekazku nastava odraz, ohyb, absorpcia a prechod. O tom, ci sa energia odrazi alebo siri ohybom dalej, rozhoduje vyhradne material prekazky, nie jej rozmer. Cinitel pohltivosti α = Wa/Wd.",
    nepravda2: "Pri narazeni vlny na prekazku nastava odraz, ohyb, absorpcia a prechod. O tom, ci sa energia odrazi alebo siri ohybom dalej, rozhoduju rozmery prekazky vs vlnova dlzka. Cinitel pohltivosti α = Wd/Wa (dopadajuca/pohltena energia)."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 4. Priestor 002",
    oblast: "Okruh 4 - vlastne kmity",
    podoblast: "Mody a Schroderov kmitocet",
    pravda: "Vlastne kmity (mody) prostoru su stojate vlnenia; podla indexov delime axialne (dva indexy nulove), tangencialne (jeden nulovy) a sikme (ziadny nulovy). Degenerovane mody (rovnaky kmitocet) koncentruju energiu. Nad Schroderovym (kritickym) kmitoctom f_k ≈ 2000·√(T/V) je rozlozenie tlaku priblizne rovnomerne (difuzne pole).",
    nepravda: "Vlastne kmity (mody) prostoru su stojate vlnenia; delime axialne (jeden index nulovy), tangencialne (dva nulove) a sikme (ziadny nulovy). Degenerovane mody koncentruju energiu. Nad Schroderovym kmitoctom f_k ≈ 2000·√(T/V) je rozlozenie tlaku rovnomerne.",
    nepravda2: "Vlastne kmity (mody) prostoru su stojate vlnenia; delime axialne, tangencialne a sikme. Degenerovane mody koncentruju energiu. POD Schroderovym kmitoctom f_k ≈ 2000·√(T/V) je rozlozenie tlaku priblizne rovnomerne, nad nim dominuju jednotlive mody."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 4. Priestor 003",
    oblast: "Okruh 4 - doba dozvuku",
    podoblast: "T60, Sabine, Eyring",
    pravda: "Doba dozvuku T (T60) je cas, za ktory hustota energie / intenzita po vypnuti zdroja klesne o 60 dB (na 10⁻⁶ povodnej hodnoty). Sabinov vzorec T = 0,164·V/(α·S) plati len pre maly cinitel pohltivosti; Eyringov T = 0,164·V/(−S·ln(1−α)) pre α < 0,8.",
    nepravda: "Doba dozvuku T (T60) je cas, za ktory hustota energie po vypnuti zdroja klesne o 30 dB. Sabinov vzorec T = 0,164·V/(α·S) plati len pre maly cinitel pohltivosti; Eyringov T = 0,164·V/(−S·ln(1−α)) pre α < 0,8.",
    nepravda2: "Doba dozvuku T (T60) je cas, za ktory hustota energie po vypnuti zdroja klesne o 60 dB. Sabinov vzorec T = 0,164·V/(α·S) plati pre velke pohltivosti blizko 1; Eyringov vzorec naopak len pre maly cinitel pohltivosti."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 4. Priestor 004",
    oblast: "Okruh 4 - meranie dozvuku",
    podoblast: "Metody a T20/T30",
    pravda: "Dobu dozvuku merame dvoma metodami: metoda preruseneho sumu (reproduktor + sirokopasmovy sum, meria sa pokles po vypnuti) a metoda integrovanej impulznej odozvy (impulzny zdroj, napr. signalna pistol; Schroderova spatna integracia druhej mocniny IR). Kvoli hluku pozadia sa casto meria T20 alebo T30 a extrapoluje na 60 dB.",
    nepravda: "Dobu dozvuku merame dvoma metodami: metoda preruseneho sumu a metoda integrovanej impulznej odozvy. Kvoli hluku pozadia sa casto meria az T120 a interpoluje sa nadol na 60 dB.",
    nepravda2: "Dobu dozvuku merame jedinou metodou - priamym sledovanim poklesu o cely 60 dB; metoda impulznej odozvy ani preruseneho sumu sa nepouzivaju. Hluk pozadia meranie neovplyvnuje."
  },
  {
    okruh: "Okruhy 1-4: Akustika a meranie",
    id: "ELA 4. Priestor 005",
    oblast: "Okruh 4 - impulzna charakteristika",
    podoblast: "RIR a jeho casti",
    pravda: "Impulzna charakteristika prostoru (RIR) chape priestor ako linearny casovo invariantny (LTI) system. Ma tri typicke casti: priama vlna, prvotne (rane) odrazy a mnohonasobne odrazy (difuzny dozvuk). Pociatocna doba dozvuku (pokles o 10 dB) koreluje so subjektivnym vnemom lepsie nez cele T60.",
    nepravda: "Impulzna charakteristika prostoru (RIR) chape priestor ako nelinearny system. Ma tri casti: priama vlna, prvotne odrazy a mnohonasobne odrazy (difuzny dozvuk). Pociatocna doba dozvuku (pokles o 10 dB) koreluje so subjektivnym vnemom lepsie nez cele T60.",
    nepravda2: "Impulzna charakteristika prostoru (RIR) chape priestor ako LTI system. Ma tri casti: priama vlna, prvotne odrazy a mnohonasobne odrazy. Cela doba dozvuku T60 koreluje so subjektivnym vnemom vzdy lepsie nez pociatocna doba dozvuku."
  }

  // ##########################################################
  // SKUPINA 2 a 3 sa doplnia nizsie (okruhy 5-7 a 8-10).
  // ##########################################################
];

const elaOtazky = elaCrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ELA ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: polozka.okruh,
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "ELA prezentacie (Schimmel)",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

// VS2 (Vybavenie studia 2) - okruh "0. Zaklady".
// Prierezovy prehlad cez vsetkych 10 SZZ otazok 2025/2026 - big picture / extremne solidny zaklad.
// 46 statementov v 11 oblastiach (= 11 exam slidov). Slovensky, ASCII bez diakritiky.
// Kazdy ma DVE nepravdy - kazda flipuje INY dolezity, tazko zapamatatelny fakt (cisla, smery,
// zamena pojmov), nikdy nie hlupy zjavny omyl. pravda/nepravda ~90% identicke (appka ich diffuje).
// Pushuje sa do vs2Otazky (definovane v vs2-otazky.js - tento subor sa nacita az po nom).
// Zdroj: VS2 prezentacie (Mikrofony, Psychoakustika, Mozek a hudba, Elektroakusticke nastroje,
// FM synteza, Zkreslovace, Nastroje pro popis spektra, Prace ve studiu) + SZZ otazky 2025/2026.

const vs2ZakladyCrackData = [
  // ===== 1. Mikrofony - typy a princip (4) =====
  {
    id: "VS2 0. Mikrofony typy 001",
    oblast: "Mikrofony - typy a princip",
    podoblast: "Dynamicky mikrofon",
    pravda: "Dynamicky mikrofon: membrana rozkmita civku v poli permanentneho magnetu a indukuje prud; je menej citlivy nez kondenzatorovy, mechanicky odolny a nevyzaduje napajanie.",
    nepravda: "Dynamicky mikrofon: membrana rozkmita civku v poli permanentneho magnetu a indukuje prud; je citlivejsi nez kondenzatorovy, mechanicky odolny a nevyzaduje napajanie.",
    nepravda2: "Dynamicky mikrofon: membrana rozkmita civku v poli permanentneho magnetu a indukuje prud; je menej citlivy nez kondenzatorovy, mechanicky odolny a vyzaduje fantomove napajanie 48 V."
  },
  {
    id: "VS2 0. Mikrofony typy 002",
    oblast: "Mikrofony - typy a princip",
    podoblast: "Kondenzatorovy mikrofon",
    pravda: "Kondenzatorovy mikrofon pracuje na zmene kapacity - membrana tvori jednu elektrodu kondenzatora; vyzaduje napajanie a je povazovany za najkvalitnejsi pre studiovy zaznam.",
    nepravda: "Kondenzatorovy mikrofon pracuje na zmene indukcnosti civky; vyzaduje napajanie a je povazovany za najkvalitnejsi pre studiovy zaznam.",
    nepravda2: "Kondenzatorovy mikrofon pracuje na zmene kapacity - membrana tvori jednu elektrodu kondenzatora; nevyzaduje napajanie a je povazovany za najkvalitnejsi pre studiovy zaznam."
  },
  {
    id: "VS2 0. Mikrofony typy 003",
    oblast: "Mikrofony - typy a princip",
    podoblast: "Paskovy mikrofon",
    pravda: "Paskovy (ribbon) mikrofon snima pohybom tenkeho kovoveho pasika v magnetickom poli; ma nizku citlivost (pod 1 mV) a prirodzeny, jemny zvuk.",
    nepravda: "Paskovy (ribbon) mikrofon snima pohybom tenkeho kovoveho pasika v magnetickom poli; ma vysoku citlivost (desiatky mV) a prirodzeny, jemny zvuk.",
    nepravda2: "Paskovy (ribbon) mikrofon snima pohybom tenkeho kovoveho pasika v magnetickom poli; ma nizku citlivost (pod 1 mV) a ostry, agresivny zvuk s durazom na vysky."
  },
  {
    id: "VS2 0. Mikrofony typy 004",
    oblast: "Mikrofony - typy a princip",
    podoblast: "Prevodnik tlaku vs gradientu",
    pravda: "Vsetky mikrofony okrem gulovych pracuju ako prevodniky gradientu tlaku, a preto u nich vznika proximity efekt; tlakovy (gulovy) mikrofon snima samotny akusticky tlak.",
    nepravda: "Vsetky mikrofony okrem gulovych pracuju ako ciste prevodniky tlaku, a preto u nich vznika proximity efekt; tlakovy (gulovy) mikrofon snima samotny akusticky tlak.",
    nepravda2: "Vsetky mikrofony okrem gulovych pracuju ako prevodniky gradientu tlaku, a preto u nich proximity efekt nevznika; tlakovy (gulovy) mikrofon snima samotny akusticky tlak."
  },

  // ===== 2. Mikrofony - parametre a charakteristiky (5) =====
  {
    id: "VS2 0. Mikrofony parametre 001",
    oblast: "Mikrofony - parametre a charakteristiky",
    podoblast: "Citlivost",
    pravda: "Citlivost mikrofonu udava vystupne napatie (v mV) pri akustickom tlaku 1 Pa, co zodpoveda 94 dB SPL, merane tonom 1 kHz.",
    nepravda: "Citlivost mikrofonu udava vystupne napatie (v mV) pri akustickom tlaku 1 Pa, co zodpoveda 124 dB SPL, merane tonom 1 kHz.",
    nepravda2: "Citlivost mikrofonu udava vystupne napatie (v mV) pri akustickom tlaku 1 Pa, co zodpoveda 94 dB SPL, merane tonom 10 kHz."
  },
  {
    id: "VS2 0. Mikrofony parametre 002",
    oblast: "Mikrofony - parametre a charakteristiky",
    podoblast: "Maximalne SPL a dynamicky rozsah",
    pravda: "Maximalne SPL udava najvyssi tlak, ktory mikrofon spracuje pri minimalnom skresleni (0,5-1 %); odcitanim sumoveho ekvivalentu od max. SPL ziskame dynamicky rozsah.",
    nepravda: "Maximalne SPL udava najvyssi tlak, ktory mikrofon spracuje pri minimalnom skresleni (0,5-1 %); odcitanim sumoveho ekvivalentu od max. SPL ziskame citlivost.",
    nepravda2: "Maximalne SPL udava najvyssi tlak, ktory mikrofon spracuje pri minimalnom skresleni (5-10 %); odcitanim sumoveho ekvivalentu od max. SPL ziskame dynamicky rozsah."
  },
  {
    id: "VS2 0. Mikrofony parametre 003",
    oblast: "Mikrofony - parametre a charakteristiky",
    podoblast: "Proximity efekt",
    pravda: "Proximity efekt: u smerovych mikrofonov sa priblizenim k zdroju zvysuje zisk v nizkych frekvenciach; u gulovej charakteristiky sa neprejavuje.",
    nepravda: "Proximity efekt: u smerovych mikrofonov sa priblizenim k zdroju zvysuje zisk vo vysokych frekvenciach; u gulovej charakteristiky sa neprejavuje.",
    nepravda2: "Proximity efekt: u smerovych mikrofonov sa priblizenim k zdroju zvysuje zisk v nizkych frekvenciach; u gulovej charakteristiky sa prejavuje najviac."
  },
  {
    id: "VS2 0. Mikrofony parametre 004",
    oblast: "Mikrofony - parametre a charakteristiky",
    podoblast: "Smerove charakteristiky",
    pravda: "Kardioida (oblicka) ma plny zisk vpredu (0 stupnov) a potlaca zvuk zozadu (180 stupnov); osmicka (bidirekcionalna) ma maximalny zisk vpredu aj vzadu a potlacenie zo stran (90 a 270 stupnov).",
    nepravda: "Kardioida (oblicka) ma plny zisk vpredu (0 stupnov) a potlaca zvuk zo stran (90 stupnov); osmicka (bidirekcionalna) ma maximalny zisk vpredu aj vzadu a potlacenie zo stran (90 a 270 stupnov).",
    nepravda2: "Kardioida (oblicka) ma plny zisk vpredu (0 stupnov) a potlaca zvuk zozadu (180 stupnov); osmicka (bidirekcionalna) ma maximalny zisk zo stran a potlacenie vpredu aj vzadu."
  },
  {
    id: "VS2 0. Mikrofony parametre 005",
    oblast: "Mikrofony - parametre a charakteristiky",
    podoblast: "Frekvencna zavislost smerovosti",
    pravda: "Smerova charakteristika je frekvencne zavisla - vyrazne sa prejavuje pri vysokych tonoch, hlboke zostavaju malo smerovane; do polarneho grafu sa kresli v oktavovych intervaloch.",
    nepravda: "Smerova charakteristika je frekvencne zavisla - vyrazne sa prejavuje pri hlbokych tonoch, vysoke zostavaju malo smerovane; do polarneho grafu sa kresli v oktavovych intervaloch.",
    nepravda2: "Smerova charakteristika je frekvencne zavisla - vyrazne sa prejavuje pri vysokych tonoch, hlboke zostavaju malo smerovane; do polarneho grafu sa kresli v tretinooktavovych intervaloch."
  },

  // ===== 3. Stereofonne mikrofonne techniky (5) =====
  {
    id: "VS2 0. Stereo techniky 001",
    oblast: "Stereofonne mikrofonne techniky",
    podoblast: "Koincidencne vs rozlozene",
    pravda: "Koincidencne techniky (XY, MS, Blumlein) maju mikrofony v jednom bode a pracuju iba s rozdielom intenzity, preto su dobre monokompatibilne; rozlozeny par AB pracuje iba s casovym rozdielom.",
    nepravda: "Koincidencne techniky (XY, MS, Blumlein) maju mikrofony v jednom bode a pracuju iba s casovym rozdielom, preto su dobre monokompatibilne; rozlozeny par AB pracuje iba s rozdielom intenzity.",
    nepravda2: "Koincidencne techniky (XY, MS, Blumlein) maju mikrofony v jednom bode a pracuju iba s rozdielom intenzity, preto su zle monokompatibilne; rozlozeny par AB pracuje iba s casovym rozdielom."
  },
  {
    id: "VS2 0. Stereo techniky 002",
    oblast: "Stereofonne mikrofonne techniky",
    podoblast: "XY a Blumlein",
    pravda: "XY pouziva dvojicu kardioidnych mikrofonov zvierajucich typicky 90 stupnov; Blumlein pouziva dve osmicky zvierajuce 90 stupnov.",
    nepravda: "XY pouziva dvojicu osmickovych mikrofonov zvierajucich typicky 90 stupnov; Blumlein pouziva dve osmicky zvierajuce 90 stupnov.",
    nepravda2: "XY pouziva dvojicu kardioidnych mikrofonov zvierajucich typicky 90 stupnov; Blumlein pouziva dve kardioidy zvierajuce 90 stupnov."
  },
  {
    id: "VS2 0. Stereo techniky 003",
    oblast: "Stereofonne mikrofonne techniky",
    podoblast: "MS (Middle-Side)",
    pravda: "MS (Middle-Side): stred snima kardioida a boky osmicka; suctom a rozdielom (M+-S) sa dekoduje stereo a sirku stereobazy mozno menit aj po nahrati.",
    nepravda: "MS (Middle-Side): stred snima osmicka a boky kardioida; suctom a rozdielom (M+-S) sa dekoduje stereo a sirku stereobazy mozno menit aj po nahrati.",
    nepravda2: "MS (Middle-Side): stred snima kardioida a boky osmicka; suctom a rozdielom (M+-S) sa dekoduje stereo, no sirku stereobazy po nahrati menit nemozno."
  },
  {
    id: "VS2 0. Stereo techniky 004",
    oblast: "Stereofonne mikrofonne techniky",
    podoblast: "ORTF a AB",
    pravda: "ORTF: dve kardioidy, vzdialenost membran 17 cm, uhol 110 stupnov (simuluje usi a tienenie hlavy); AB pouziva dve gulove vo vzdialenosti asi 40-60 cm.",
    nepravda: "ORTF: dve kardioidy, vzdialenost membran 30 cm, uhol 90 stupnov (simuluje usi a tienenie hlavy); AB pouziva dve gulove vo vzdialenosti asi 40-60 cm.",
    nepravda2: "ORTF: dve kardioidy, vzdialenost membran 17 cm, uhol 110 stupnov (simuluje usi a tienenie hlavy); AB pouziva dve kardioidy vo vzdialenosti asi 40-60 cm."
  },
  {
    id: "VS2 0. Stereo techniky 005",
    oblast: "Stereofonne mikrofonne techniky",
    podoblast: "Jecklin Disk a Decca tree",
    pravda: "Jecklin Disk: dve gulove mikrofony po stranach tlmeneho disku (simuluje hlavu); Decca tree su tri gulove mikrofony do T, typicke pre orchester.",
    nepravda: "Jecklin Disk: dve osmickove mikrofony po stranach tlmeneho disku (simuluje hlavu); Decca tree su tri gulove mikrofony do T, typicke pre orchester.",
    nepravda2: "Jecklin Disk: dve gulove mikrofony po stranach tlmeneho disku (simuluje hlavu); Decca tree su dva gulove mikrofony, typicke pre komorne duo."
  },

  // ===== 4. Efekty - delenie podla parametra (5) =====
  {
    id: "VS2 0. Efekty 001",
    oblast: "Efekty - delenie podla parametra",
    podoblast: "Sila signalu",
    pravda: "So silou (urovnou) signalu pracuju kompresor, limiter, expander a gate; ovladame ich prahom (threshold), pomerom (ratio), nabehom (attack) a dobehom (release).",
    nepravda: "So silou (urovnou) signalu pracuju delay, reverb a chorus; ovladame ich prahom (threshold), pomerom (ratio), nabehom (attack) a dobehom (release).",
    nepravda2: "So silou (urovnou) signalu pracuju kompresor, limiter, expander a gate; ovladame ich frekvenciou, sirkou pasma (Q) a ziskom."
  },
  {
    id: "VS2 0. Efekty 002",
    oblast: "Efekty - delenie podla parametra",
    podoblast: "Dlzka (cas)",
    pravda: "S dlzkou (casom) pracuju delay, echo a dozvuk (reverb/hall); ovladame ich casom, spatnou vazbou (feedback), mixom a predelay.",
    nepravda: "S dlzkou (casom) pracuju kompresor a gate; ovladame ich casom, spatnou vazbou (feedback), mixom a predelay.",
    nepravda2: "S dlzkou (casom) pracuju delay, echo a dozvuk (reverb/hall); ovladame ich pomerom (ratio) a prahom (threshold)."
  },
  {
    id: "VS2 0. Efekty 003",
    oblast: "Efekty - delenie podla parametra",
    podoblast: "Vyska",
    pravda: "S vyskou pracuju pitch-shift, harmonizer, vibrato a trilok; ovladame ich posunom v poltonoch alebo centoch a rychlostou.",
    nepravda: "S vyskou pracuje kompresor; ovladame ho posunom v poltonoch alebo centoch a rychlostou.",
    nepravda2: "S vyskou pracuju pitch-shift, harmonizer, vibrato a trilok; ovladame ich prahom a pomerom (ratio)."
  },
  {
    id: "VS2 0. Efekty 004",
    oblast: "Efekty - delenie podla parametra",
    podoblast: "Farba (spektrum)",
    pravda: "S farbou (spektrom) pracuju ekvalizer, filtre, chorus, flanger, phaser a skreslovace; ovladame ich frekvenciou, sirkou pasma (Q) a ziskom, pri modulacnych aj hlbkou a rychlostou.",
    nepravda: "S farbou (spektrom) pracuju limiter a expander; ovladame ich frekvenciou, sirkou pasma (Q) a ziskom, pri modulacnych aj hlbkou a rychlostou.",
    nepravda2: "S farbou (spektrom) pracuju ekvalizer, filtre, chorus, flanger, phaser a skreslovace; ovladame ich prahom (threshold) a pomerom (ratio)."
  },
  {
    id: "VS2 0. Efekty 005",
    oblast: "Efekty - delenie podla parametra",
    podoblast: "De-esser",
    pravda: "De-esser je frekvencne zavisly kompresor, ktory potlaca sykavky v pasme asi 5-11 kHz; pracuje teda zaroven so silou aj farbou signalu.",
    nepravda: "De-esser je frekvencne zavisly kompresor, ktory potlaca sykavky v pasme asi 50-110 Hz; pracuje teda zaroven so silou aj farbou signalu.",
    nepravda2: "De-esser je cisty frekvencny filter bez zavislosti na urovni, ktory potlaca sykavky v pasme asi 5-11 kHz."
  },

  // ===== 5. Elektroakusticke a elektronicke nastroje (4) =====
  {
    id: "VS2 0. Elektroakusticke 001",
    oblast: "Elektroakusticke a elektronicke nastroje",
    podoblast: "Hammondove organy",
    pravda: "Hammondove organy generuju ton elektromagneticky - rotujuce ozubene kolecka (tonewheels) snimane civkami; farbu miesame registrovymi tahlami (drawbars) a priestor dotvara Leslie box (rotujuci reproduktor).",
    nepravda: "Hammondove organy generuju ton magnetofonickym zaznamom na pasiku; farbu miesame registrovymi tahlami (drawbars) a priestor dotvara Leslie box (rotujuci reproduktor).",
    nepravda2: "Hammondove organy generuju ton elektromagneticky - rotujuce ozubene kolecka (tonewheels) snimane civkami; farbu miesame registrovymi tahlami (drawbars) a priestor dotvara vstavany pruzinovy dozvuk."
  },
  {
    id: "VS2 0. Elektroakusticke 002",
    oblast: "Elektroakusticke a elektronicke nastroje",
    podoblast: "Rhodes piano",
    pravda: "Rhodes piano je elektromechanicky nastroj s mechanickym budenim: kladivko udrie kovovy jazycek (tine), ktoreho kmity snima magneticky snimac.",
    nepravda: "Rhodes piano je elektromechanicky nastroj s mechanickym budenim: kladivko udrie strunu, ktorej kmity snima magneticky snimac.",
    nepravda2: "Rhodes piano je elektromechanicky nastroj s mechanickym budenim: kladivko udrie kovovy jazycek (tine), ktoreho kmity snima opticky snimac."
  },
  {
    id: "VS2 0. Elektroakusticke 003",
    oblast: "Elektroakusticke a elektronicke nastroje",
    podoblast: "Mellotron a Orchestron",
    pravda: "Mellotron prehrava realne nahravky ulozene na magnetofonovych pasikoch (jeden pasik na klaves); Orchestron je obdoba vyuzivajuca opticke disky namiesto pasikov.",
    nepravda: "Mellotron prehrava realne nahravky ulozene na optickych diskoch (jeden disk na klaves); Orchestron je obdoba vyuzivajuca opticke disky namiesto pasikov.",
    nepravda2: "Mellotron prehrava realne nahravky ulozene na magnetofonovych pasikoch (jeden pasik na klaves); Orchestron je obdoba vyuzivajuca magnetofonove pasiky namiesto diskov."
  },
  {
    id: "VS2 0. Elektroakusticke 004",
    oblast: "Elektroakusticke a elektronicke nastroje",
    podoblast: "Clavinet",
    pravda: "Clavinet je elektrifikovany nastroj, kde uder gumovej platnicky rozkmita strunu snimanu magnetickym snimacom - odtial jeho ostry, perkusivny funkovy ton.",
    nepravda: "Clavinet je elektrifikovany nastroj, kde uder gumovej platnicky rozkmita kovovy jazycek snimany magnetickym snimacom - odtial jeho ostry, perkusivny funkovy ton.",
    nepravda2: "Clavinet je elektrifikovany nastroj, kde uder gumovej platnicky rozkmita strunu snimanu kondenzatorovym mikrofonom - odtial jeho ostry, perkusivny funkovy ton."
  },

  // ===== 6. Synteza zvuku (5) =====
  {
    id: "VS2 0. Synteza 001",
    oblast: "Synteza zvuku",
    podoblast: "Bloky subtraktivneho syntezatora",
    pravda: "Analogovy (subtraktivny) syntezator obsahuje zakladne bloky VCO (oscilator), VCF (filter), VCA (zosilnovac), riadene LFO a obalkou EG (ADSR).",
    nepravda: "Analogovy (subtraktivny) syntezator obsahuje zakladne bloky VCO (oscilator), VCA (filter), VCF (zosilnovac), riadene LFO a obalkou EG (ADSR).",
    nepravda2: "Analogovy (subtraktivny) syntezator obsahuje zakladne bloky VCO (oscilator), VCF (filter), VCA (zosilnovac), riadene EG a obalkou LFO (ADSR)."
  },
  {
    id: "VS2 0. Synteza 002",
    oblast: "Synteza zvuku",
    podoblast: "AM",
    pravda: "AM (amplitudova modulacia) ma chudobne spektrum - modulacia ovplyvnuje iba amplitudy vzniknutych zloziek; obe postranne pasma maju rovnaku amplitudu.",
    nepravda: "AM (amplitudova modulacia) ma bohate spektrum - modulacia ovplyvnuje aj vysky vzniknutych zloziek; obe postranne pasma maju rovnaku amplitudu.",
    nepravda2: "AM (amplitudova modulacia) ma chudobne spektrum - modulacia ovplyvnuje iba amplitudy vzniknutych zloziek; obe postranne pasma maju roznu amplitudu."
  },
  {
    id: "VS2 0. Synteza 003",
    oblast: "Synteza zvuku",
    podoblast: "FM",
    pravda: "FM ma bohate spektrum tvorene suctovymi a rozdielovymi tonmi; jeho sirku riadi modulacny index a amplitudy zloziek popisuju Besselove funkcie.",
    nepravda: "FM ma chudobne spektrum iba s amplitudovymi zmenami; jeho sirku riadi modulacny index a amplitudy zloziek popisuju Besselove funkcie.",
    nepravda2: "FM ma bohate spektrum tvorene suctovymi a rozdielovymi tonmi; jeho sirku riadi modulacny index a amplitudy zloziek popisuju Fourierove rady."
  },
  {
    id: "VS2 0. Synteza 004",
    oblast: "Synteza zvuku",
    podoblast: "Kruhova a krizova modulacia",
    pravda: "Kruhova (ring) modulacia dava inharmonicke spektrum tvorene suctovymi a rozdielovymi tonmi bez nosnej; krizova modulacia (vokoder, Homer Dudley 1938) prenasa obalky kanalovych filtrov jedneho signalu na druhy.",
    nepravda: "Kruhova (ring) modulacia dava ciste harmonicke spektrum s nosnou; krizova modulacia (vokoder, Homer Dudley 1938) prenasa obalky kanalovych filtrov jedneho signalu na druhy.",
    nepravda2: "Kruhova (ring) modulacia dava inharmonicke spektrum tvorene suctovymi a rozdielovymi tonmi bez nosnej; krizova modulacia (vokoder, Robert Moog 1938) prenasa obalky kanalovych filtrov jedneho signalu na druhy."
  },
  {
    id: "VS2 0. Synteza 005",
    oblast: "Synteza zvuku",
    podoblast: "Granular, wavetable, sampler, aliasing",
    pravda: "Granularna synteza sklada za sebou kratke zrna zvuku; wavetable prechadza tabulkou period; sampler prehrava nahrane vzorky. Zcudzenie (aliasing) vznika, ked je vzorkovaci kmitocet nizsi nez dvojnasobok najvyssej zlozky.",
    nepravda: "Granularna synteza prechadza tabulkou period; wavetable sklada za sebou kratke zrna zvuku; sampler prehrava nahrane vzorky. Zcudzenie (aliasing) vznika, ked je vzorkovaci kmitocet nizsi nez dvojnasobok najvyssej zlozky.",
    nepravda2: "Granularna synteza sklada za sebou kratke zrna zvuku; wavetable prechadza tabulkou period; sampler prehrava nahrane vzorky. Zcudzenie (aliasing) vznika, ked je vzorkovaci kmitocet vyssi nez dvojnasobok najvyssej zlozky."
  },

  // ===== 7. Organizacia nahravania (4) =====
  {
    id: "VS2 0. Nahravanie 001",
    oblast: "Organizacia nahravania",
    podoblast: "Izolovane vs skupinove",
    pravda: "Izolovane nahravanie dava maximalnu kontrolu a ziadne presluchy, ale menej prirodzenu sucinnost; skupinove nahravanie s presluchmi znie prirodzenejsie, ale hrozi hrebenovy filter a mensia kontrola.",
    nepravda: "Izolovane nahravanie znie prirodzenejsie vdaka presluchom, ale dava mensiu kontrolu; skupinove nahravanie ma maximalnu kontrolu a ziadne presluchy.",
    nepravda2: "Izolovane nahravanie dava maximalnu kontrolu a ziadne presluchy, ale menej prirodzenu sucinnost; skupinove nahravanie s presluchmi znie prirodzenejsie, ale hrozi spatna vazba mikrofonu do sluchadiel a mensia kontrola."
  },
  {
    id: "VS2 0. Nahravanie 002",
    oblast: "Organizacia nahravania",
    podoblast: "Hrebenovy filter",
    pravda: "Hrebenovy filter vznika suctom priameho a oneskoreneho signalu z toho isteho smeru - na niektorych frekvenciach sa scitavaju vo faze, na inych v protifaze.",
    nepravda: "Hrebenovy filter vznika suctom priameho a oneskoreneho signalu z opacnych smerov - na niektorych frekvenciach sa scitavaju vo faze, na inych v protifaze.",
    nepravda2: "Hrebenovy filter vznika suctom priameho a oneskoreneho signalu z toho isteho smeru - na vsetkych frekvenciach dochadza iba k suctu (zosilneniu)."
  },
  {
    id: "VS2 0. Nahravanie 003",
    oblast: "Organizacia nahravania",
    podoblast: "Channel strip",
    pravda: "Channel strip (vstupna jednotka pultu) typicky obsahuje gain/trim, fantom, PAD (utlm), otocenie fazy, hornu priepust (low-cut), EQ, aux zbernice, panoramu a fader.",
    nepravda: "Channel strip (vstupna jednotka pultu) typicky obsahuje gain/trim, fantom, PAD (zosilnenie slabeho signalu), otocenie fazy, hornu priepust (low-cut), EQ, aux zbernice, panoramu a fader.",
    nepravda2: "Channel strip (vstupna jednotka pultu) typicky obsahuje gain/trim, fantom, PAD (utlm), otocenie fazy, dolnu priepust (low-cut, oreza vysky), EQ, aux zbernice, panoramu a fader."
  },
  {
    id: "VS2 0. Nahravanie 004",
    oblast: "Organizacia nahravania",
    podoblast: "Odposluchy a playback",
    pravda: "Odposluchy pre hudobnikov riesime sluchadlami (in-ear) s vlastnym mixom; playback = nahravanie noveho nastroja proti uz hotovej podkresovej stope, ktoru hrac pocuje v odposluchu.",
    nepravda: "Odposluchy pre hudobnikov riesime sluchadlami (in-ear) s vlastnym mixom; playback = nahravanie vsetkych nastrojov sucasne bez podkresovej stopy.",
    nepravda2: "Odposluchy pre hudobnikov riesime hlasitym reproduktorom v miestnosti pri citlivom mikrofone; playback = nahravanie noveho nastroja proti uz hotovej podkresovej stope, ktoru hrac pocuje v odposluchu."
  },

  // ===== 8. Rytmicka sekcia a maskovanie (3) =====
  {
    id: "VS2 0. Rytmicka sekcia 001",
    oblast: "Rytmicka sekcia a maskovanie",
    podoblast: "Kruhove a dortove mody",
    pravda: "Na blane bubna vznikaju kruhove (sustredne) mody a dortove (radialne, vysecove) mody; poloha mikrofonu nad uzlom alebo kmitnou dane modu rozhoduje, kolko tonu vs. uderu zachyti.",
    nepravda: "Na blane bubna vznikaju kruhove (sustredne) mody a dortove mody (pozdlzne kmity blany po obvode); poloha mikrofonu nad uzlom alebo kmitnou dane modu rozhoduje, kolko tonu vs. uderu zachyti.",
    nepravda2: "Na blane bubna vznikaju kruhove (sustredne) mody a dortove (radialne, vysecove) mody; poloha mikrofonu na farbu nema vplyv, meni iba hlasitost."
  },
  {
    id: "VS2 0. Rytmicka sekcia 002",
    oblast: "Rytmicka sekcia a maskovanie",
    podoblast: "Maskovacie pasma",
    pravda: "V rytmickej sekcii sa nastroje maskuju v nizkych stredoch (kopak a baskytara) a okolo kickovych frekvencii (maly bubon, vokal), zatial co krajne pasma zostavaju relativne volne.",
    nepravda: "V rytmickej sekcii sa nastroje maskuju vo vysokych frekvenciach (kopak a baskytara) a okolo kickovych frekvencii (maly bubon, vokal), zatial co krajne pasma zostavaju relativne volne.",
    nepravda2: "V rytmickej sekcii sa nastroje maskuju v nizkych stredoch (kopak a cinely) a okolo kickovych frekvencii (maly bubon, vokal), zatial co krajne pasma zostavaju relativne volne."
  },
  {
    id: "VS2 0. Rytmicka sekcia 003",
    oblast: "Rytmicka sekcia a maskovanie",
    podoblast: "Eliminacia maskovania v stereu",
    pravda: "Maskovanie pri rozprestreni rytmickej sekcie do sterea eliminujeme rozmiestnenim koliziacich nastrojov do roznych miest stereobazy a ekvalizaciou (radsej uberanim rusiveho pasma nez pridavanim).",
    nepravda: "Maskovanie pri rozprestreni rytmickej sekcie do sterea eliminujeme umiestnenim vsetkych nastrojov do stredu (mono) a ekvalizaciou (radsej uberanim rusiveho pasma nez pridavanim).",
    nepravda2: "Maskovanie pri rozprestreni rytmickej sekcie do sterea eliminujeme rozmiestnenim koliziacich nastrojov do roznych miest stereobazy a ekvalizaciou (radsej pridavanim uzitocneho pasma nez uberanim)."
  },

  // ===== 9. Umele vs. prirodne zvuky (3) =====
  {
    id: "VS2 0. Umele prirodne 001",
    oblast: "Umele vs. prirodne zvuky",
    podoblast: "Typy signalov",
    pravda: "Tranzienty su kratke prechodove javy (nabeh tonu, uder); stacionarne signaly su ustalene periodicke (drzany ton); stochasticke su nahodne alebo sumove.",
    nepravda: "Tranzienty su ustalene periodicke signaly (drzany ton); stacionarne signaly su kratke prechodove javy; stochasticke su nahodne alebo sumove.",
    nepravda2: "Tranzienty su kratke prechodove javy (nabeh tonu, uder); stacionarne signaly su ustalene periodicke (drzany ton); stochasticke su presne periodicke."
  },
  {
    id: "VS2 0. Umele prirodne 002",
    oblast: "Umele vs. prirodne zvuky",
    podoblast: "Silne a slabe stranky",
    pravda: "Prirodne zvuky su bohate, zive a maju prirodzene tranzienty, ale horsie kontrolovatelne; umele (synteticke) su presne riaditelne a opakovatelne, ale mozu posobit staticky a sterilne.",
    nepravda: "Prirodne zvuky su presne opakovatelne a lahko riaditelne, ale mozu posobit staticky; umele (synteticke) su bohate, zive a horsie kontrolovatelne.",
    nepravda2: "Prirodne zvuky su bohate, zive a maju prirodzene tranzienty, ale horsie kontrolovatelne; umele (synteticke) maju bohatsie prirodzene tranzienty nez prirodne a su presne riaditelne."
  },
  {
    id: "VS2 0. Umele prirodne 003",
    oblast: "Umele vs. prirodne zvuky",
    podoblast: "Principy kombinovania",
    pravda: "Pri kombinovani umelych a prirodnych zvukov dbame na sulad tranzientov a obalok (ADSR), doplnenie spektier bez maskovania a zladenie priestoru (spolocny dozvuk).",
    nepravda: "Pri kombinovani umelych a prirodnych zvukov dbame najma na to, aby mali opacne fazy.",
    nepravda2: "Pri kombinovani umelych a prirodnych zvukov dbame na sulad tranzientov a obalok (ADSR), pricom umele a prirodne zvuky sa nikdy nesmu miesat v jednom pasme."
  },

  // ===== 10. Psychoakustika a vnutorne ucho (5) =====
  {
    id: "VS2 0. Psychoakustika 001",
    oblast: "Psychoakustika a vnutorne ucho",
    podoblast: "Anatomia vnutorneho ucha",
    pravda: "Vnutorne ucho tvori hlemyzd (cochlea); premenu mechanickeho vlnenia na nervovy vzruch zabezpecuje Cortiho organ s vlaskovymi bunkami na bazilarnej membrane.",
    nepravda: "Vnutorne ucho tvori hlemyzd (cochlea); premenu mechanickeho vlnenia na nervovy vzruch zabezpecuje Reisnerova membrana s vlaskovymi bunkami.",
    nepravda2: "Vnutorne ucho tvori hlemyzd (cochlea); premenu mechanickeho vlnenia na nervovy vzruch zabezpecuje Cortiho organ s vlaskovymi bunkami na tektorialnej membrane."
  },
  {
    id: "VS2 0. Psychoakustika 002",
    oblast: "Psychoakustika a vnutorne ucho",
    podoblast: "Triedenie kmitoctov v hlemyzdi",
    pravda: "Po dlzke hlemyzda sa triedia kmitocty: vysoke tony na zaciatku (baza, uzky priemer asi 100 um), hlboke az na konci (vrchol, siroky asi 500 um).",
    nepravda: "Po dlzke hlemyzda sa triedia kmitocty: hlboke tony na zaciatku (baza, uzky priemer asi 100 um), vysoke az na konci (vrchol, siroky asi 500 um).",
    nepravda2: "Po dlzke hlemyzda sa kmitocty netriedia, snima ich cely naraz na jednom mieste."
  },
  {
    id: "VS2 0. Psychoakustika 003",
    oblast: "Psychoakustika a vnutorne ucho",
    podoblast: "Maskovanie a kriticke pasma",
    pravda: "Maskovanie vznika preto, lebo lymfa nezatlaci iba na jednom uzkom mieste, ale prenesie tlak aj na okolne kmitocty - hlasnejsi ton maskuje tichsi v tom istom kritickom (barkovom) pasme (spolu 24 pasiem).",
    nepravda: "Maskovanie vznika preto, lebo lymfa nezatlaci iba na jednom uzkom mieste, ale prenesie tlak aj na okolne kmitocty - hlasnejsi ton maskuje tichsi vo vzdialenom kritickom (barkovom) pasme (spolu 24 pasiem).",
    nepravda2: "Maskovanie vznika preto, lebo lymfa nezatlaci iba na jednom uzkom mieste, ale prenesie tlak aj na okolne kmitocty - hlasnejsi ton maskuje tichsi v tom istom kritickom (barkovom) pasme (spolu 12 pasiem)."
  },
  {
    id: "VS2 0. Psychoakustika 004",
    oblast: "Psychoakustika a vnutorne ucho",
    podoblast: "Zwickerove parametre a jednotky",
    pravda: "Psychoakusticke jednotky podla Zwickera: hlasitost - son, ostrost - acum, drsnost - asper, kolisanie sily - vacil, subjektivna vyska - mel, subjektivna dlzka - dura.",
    nepravda: "Psychoakusticke jednotky podla Zwickera: hlasitost - acum, ostrost - son, drsnost - asper, kolisanie sily - vacil, subjektivna vyska - mel, subjektivna dlzka - dura.",
    nepravda2: "Psychoakusticke jednotky podla Zwickera: hlasitost - son, ostrost - acum, drsnost - asper, kolisanie sily - vacil, subjektivna vyska - dura, subjektivna dlzka - mel."
  },
  {
    id: "VS2 0. Psychoakustika 005",
    oblast: "Psychoakustika a vnutorne ucho",
    podoblast: "Fon a son",
    pravda: "Fon (phon) je hladina hlasitosti vztiahnuta k tonu 1 kHz: pri 1 kHz sa hodnota vo fonoch rovna hladine v dB; son je linearna skala subjektivnej hlasitosti (1 son = 40 fonov).",
    nepravda: "Fon (phon) je hladina hlasitosti vztiahnuta k tonu 3 kHz: pri 3 kHz sa hodnota vo fonoch rovna hladine v dB; son je linearna skala subjektivnej hlasitosti (1 son = 40 fonov).",
    nepravda2: "Fon (phon) je hladina hlasitosti vztiahnuta k tonu 1 kHz: pri 1 kHz sa hodnota vo fonoch rovna hladine v dB; son je linearna skala subjektivnej hlasitosti (1 son = 100 fonov)."
  },

  // ===== 11. Mozog, rec a hudba (3) =====
  {
    id: "VS2 0. Mozog 001",
    oblast: "Mozog, rec a hudba",
    podoblast: "Weber-Fechnerov zakon",
    pravda: "Weber-Fechnerov zakon: ak ma podnet rast radom geometrickym, vnem rastie radom aritmetickym - vnimanie je teda logaritmicke (preto decibely).",
    nepravda: "Weber-Fechnerov zakon: ak ma podnet rast radom aritmetickym, vnem rastie radom geometrickym - vnimanie je teda logaritmicke (preto decibely).",
    nepravda2: "Weber-Fechnerov zakon: ak ma podnet rast radom geometrickym, vnem rastie radom aritmetickym - vnimanie je teda presne linearne."
  },
  {
    id: "VS2 0. Mozog 002",
    oblast: "Mozog, rec a hudba",
    podoblast: "Mozgove laloky",
    pravda: "Styri laloky koncoveho mozgu: celny - motorika a recova produkcia, spankovy - sluch, temenny - senzoricke vnimanie, tylovy - zrak.",
    nepravda: "Styri laloky koncoveho mozgu: celny - motorika a recova produkcia, spankovy - zrak, temenny - senzoricke vnimanie, tylovy - sluch.",
    nepravda2: "Styri laloky koncoveho mozgu: celny - sluch, spankovy - motorika, temenny - senzoricke vnimanie, tylovy - zrak."
  },
  {
    id: "VS2 0. Mozog 003",
    oblast: "Mozog, rec a hudba",
    podoblast: "Brockovo a Wernickeho centrum",
    pravda: "Brockovo centrum (dolna lava cast celneho laloku) riadi produkciu reci (porucha = motoricka afazia); Wernickeho centrum (spankovy/temenny lalok) zabezpecuje porozumenie reci.",
    nepravda: "Brockovo centrum (dolna lava cast celneho laloku) zabezpecuje porozumenie reci; Wernickeho centrum (spankovy/temenny lalok) riadi produkciu reci.",
    nepravda2: "Brockovo centrum (dolna lava cast tyloveho laloku) riadi produkciu reci (porucha = motoricka afazia); Wernickeho centrum (spankovy/temenny lalok) zabezpecuje porozumenie reci."
  }
];

const vs2ZakladyCrackOtazky = vs2ZakladyCrackData.map((polozka) => ({
  id: polozka.id,
  tema: `VS2 Zaklady - ${polozka.oblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "0. Zaklady",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "VS2 prezentacie (prierezovy prehlad)",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

if (typeof vs2Otazky !== "undefined") {
  vs2Otazky.push(...vs2ZakladyCrackOtazky);
}

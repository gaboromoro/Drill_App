// VS2 (Vybavenie studia 2) - okruhy 1-10 pre SZZ 2025/2026.
// 10 okruhov = 10 SZZ otazok; kazdy ma 10 strucnych, vystiznych statementov, ktore priamo
// odpovedaju na danu SZZ otazku. Slovensky, ASCII bez diakritiky. Kazdy ma DVE nepravdy.
// pravda/nepravda ~90% identicke (appka ich diffuje). Pushuje sa do vs2Otazky (vs2-otazky.js
// sa nacita skor). Zdroj: VS2 prezentacie + SZZ otazky 2025/2026.

const vs2OkruhyCrackData = [
  // ============ OKRUH 1: Mikrofony ============
  {
    okruh: "1. Mikrofony", oblast: "Smerove charakteristiky a kmitoctova odozva", podoblast: "Polarny graf",
    pravda: "Smerova charakteristika sa kresli do polarneho grafu (0-360 st.): kardioida potlaca zozadu (180 st.), osmicka zo stran (90/270 st.), gulova sníma rovnako zo vsetkych stran.",
    nepravda: "Smerova charakteristika sa kresli do polarneho grafu (0-360 st.): kardioida potlaca zo stran (90 st.), osmicka zo stran (90/270 st.), gulova sníma rovnako zo vsetkych stran.",
    nepravda2: "Smerova charakteristika sa kresli do polarneho grafu (0-360 st.): kardioida potlaca zozadu (180 st.), osmicka zo stran (90/270 st.), gulova sníma iba spredu."
  },
  {
    okruh: "1. Mikrofony", oblast: "Smerove charakteristiky a kmitoctova odozva", podoblast: "Kmitoctova odozva",
    pravda: "Kmitoctova odozva (frekvencna charakteristika) je graf: vodorovna os = frekvencie celeho pasma, zvisla os = uroven vystupu v dB; meria sa v osi mikrofonu (0 st.).",
    nepravda: "Kmitoctova odozva (frekvencna charakteristika) je graf: vodorovna os = uroven vystupu v dB, zvisla os = frekvencie; meria sa v osi mikrofonu (0 st.).",
    nepravda2: "Kmitoctova odozva (frekvencna charakteristika) je graf: vodorovna os = frekvencie celeho pasma, zvisla os = uroven vystupu v dB; meria sa kolmo na os mikrofonu (90 st.)."
  },
  {
    okruh: "1. Mikrofony", oblast: "Smerove charakteristiky a kmitoctova odozva", podoblast: "Vyrovnanost charakteristiky",
    pravda: "Kondenzatorove mikrofony maju velmi vyrovnanu frekvencnu charakteristiku v celom pasme; dynamicke mavaju na najnizsich a najvyssich frekvenciach mierny pokles.",
    nepravda: "Dynamicke mikrofony maju velmi vyrovnanu frekvencnu charakteristiku v celom pasme; kondenzatorove mavaju na najnizsich a najvyssich frekvenciach mierny pokles.",
    nepravda2: "Kondenzatorove mikrofony maju velmi vyrovnanu frekvencnu charakteristiku v celom pasme; dynamicke mavaju na najnizsich a najvyssich frekvenciach mierny narast."
  },
  {
    okruh: "1. Mikrofony", oblast: "Konstrukcia a citlivost", podoblast: "Dynamicky",
    pravda: "Dynamicky mikrofon: membrana pohybuje civkou v magnetickom poli (elektrodynamicky princip); nizka citlivost (jednotky mV), odolny, nepotrebuje napajanie.",
    nepravda: "Dynamicky mikrofon: membrana pohybuje civkou v magnetickom poli (elektrodynamicky princip); nizka citlivost (jednotky mV), odolny, potrebuje fantomove napajanie.",
    nepravda2: "Dynamicky mikrofon: membrana meni kapacitu kondenzatora; nizka citlivost (jednotky mV), odolny, nepotrebuje napajanie."
  },
  {
    okruh: "1. Mikrofony", oblast: "Konstrukcia a citlivost", podoblast: "Kondenzatorovy",
    pravda: "Kondenzatorovy mikrofon: membrana je elektroda kondenzatora, meni sa kapacita; vyssia citlivost (desiatky mV), potrebuje napajanie, najkvalitnejsi.",
    nepravda: "Kondenzatorovy mikrofon: membrana je elektroda kondenzatora, meni sa kapacita; vyssia citlivost (desiatky mV), nepotrebuje napajanie, najkvalitnejsi.",
    nepravda2: "Kondenzatorovy mikrofon: membrana meni indukcnost civky; vyssia citlivost (desiatky mV), potrebuje napajanie, najkvalitnejsi."
  },
  {
    okruh: "1. Mikrofony", oblast: "Konstrukcia a citlivost", podoblast: "Paskovy",
    pravda: "Paskovy (ribbon) mikrofon: kovovy pasik kmita v magnetickom poli; velmi nizka citlivost (pod 1 mV), vyzaduje velky zisk predzosilnovaca, jemny prirodzeny zvuk.",
    nepravda: "Paskovy (ribbon) mikrofon: civka kmita v magnetickom poli; velmi nizka citlivost (pod 1 mV), vyzaduje velky zisk predzosilnovaca, jemny prirodzeny zvuk.",
    nepravda2: "Paskovy (ribbon) mikrofon: kovovy pasik kmita v magnetickom poli; velmi nizka citlivost (pod 1 mV), vyzaduje velky zisk predzosilnovaca, ostry agresivny zvuk."
  },
  {
    okruh: "1. Mikrofony", oblast: "Konstrukcia a citlivost", podoblast: "Porovnanie citlivosti",
    pravda: "Citlivost podla konstrukcie: kondenzatorove najvyssia (desiatky mV), dynamicke stredna (jednotky mV), paskove najnizsia (pod 1 mV).",
    nepravda: "Citlivost podla konstrukcie: paskove najvyssia (desiatky mV), dynamicke stredna (jednotky mV), kondenzatorove najnizsia (pod 1 mV).",
    nepravda2: "Citlivost podla konstrukcie: kondenzatorove najvyssia (desiatky mV), dynamicke stredna (stovky mV), paskove najnizsia (pod 1 mV)."
  },
  {
    okruh: "1. Mikrofony", oblast: "Pouzitie v praxi", podoblast: "Dynamicky",
    pravda: "Dynamicky pouzijeme na hlasity zdroj (zivy spev, bicie, gitarove aparaty) — je odolny a znesie vysoke SPL.",
    nepravda: "Dynamicky pouzijeme na hlasity zdroj (zivy spev, bicie, gitarove aparaty) — je krehky a znesie len nizke SPL.",
    nepravda2: "Kondenzatorovy mikrofon pouzijeme na hlasity zdroj (zivy spev, bicie, gitarove aparaty) — je odolny a znesie vysoke SPL."
  },
  {
    okruh: "1. Mikrofony", oblast: "Pouzitie v praxi", podoblast: "Kondenzatorovy",
    pravda: "Kondenzatorovy pouzijeme v studiu na detailne a tiche zdroje (spev, akusticke nastroje, snimanie celku) — pre vernost a citlivost.",
    nepravda: "Kondenzatorovy pouzijeme hlavne na podiu na velmi hlasite zdroje — pre odolnost voci vysokemu SPL.",
    nepravda2: "Dynamicky mikrofon pouzijeme v studiu na detailne a tiche zdroje (spev, akusticke nastroje, snimanie celku) — pre vernost a citlivost."
  },
  {
    okruh: "1. Mikrofony", oblast: "Pouzitie v praxi", podoblast: "Paskovy",
    pravda: "Paskovy pouzijeme na zjemnenie ostrych zdrojov (plechy, gitarove aparaty, dychy) — pre teply hladky zvuk; je krehky na fukanie a manipulaciu.",
    nepravda: "Paskovy pouzijeme na zjemnenie ostrych zdrojov (plechy, gitarove aparaty, dychy) — pre ostry jasny zvuk; je krehky na fukanie a manipulaciu.",
    nepravda2: "Paskovy pouzijeme na zjemnenie ostrych zdrojov (plechy, gitarove aparaty, dychy) — pre teply hladky zvuk; je najodolnejsi typ a znesie aj silne fukanie."
  },

  // ============ OKRUH 2: Mikrofonne parove techniky ============
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Koincidencne techniky", podoblast: "Princip",
    pravda: "Koincidencne techniky (zhodny par, oba mikrofony v jednom bode) tvoria stereo iba rozdielom intenzity: XY, MS, Blumlein; su dobre monokompatibilne.",
    nepravda: "Koincidencne techniky (zhodny par, oba mikrofony v jednom bode) tvoria stereo iba casovym rozdielom: XY, MS, Blumlein; su dobre monokompatibilne.",
    nepravda2: "Koincidencne techniky (zhodny par, oba mikrofony v jednom bode) tvoria stereo iba rozdielom intenzity: XY, MS, Blumlein; su zle monokompatibilne."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Koincidencne techniky", podoblast: "XY",
    pravda: "XY: dve kardioidy v jednom bode pod uhlom 90 st.; zmenou uhla menime sirku stereobazy.",
    nepravda: "XY: dve osmicky v jednom bode pod uhlom 90 st.; zmenou uhla menime sirku stereobazy.",
    nepravda2: "XY: dve kardioidy v jednom bode pod uhlom 180 st.; zmenou uhla menime sirku stereobazy."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Koincidencne techniky", podoblast: "Blumlein",
    pravda: "Blumlein: dve osmicky v jednom bode pod uhlom 90 st. (kazda 45 st. od zdroja); velmi verny priestor, ale sníma aj zvuk zozadu.",
    nepravda: "Blumlein: dve kardioidy v jednom bode pod uhlom 90 st. (kazda 45 st. od zdroja); velmi verny priestor, ale sníma aj zvuk zozadu.",
    nepravda2: "Blumlein: dve osmicky v jednom bode pod uhlom 120 st. (kazda 60 st. od zdroja); velmi verny priestor, ale sníma aj zvuk zozadu."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Koincidencne techniky", podoblast: "MS",
    pravda: "MS (Middle-Side): stred = kardioida, boky = osmicka; maticou M+-S vznika L/R a sirku stereobazy mozno menit aj po nahrati (patent Blumlein 1934).",
    nepravda: "MS (Middle-Side): stred = osmicka, boky = kardioida; maticou M+-S vznika L/R a sirku stereobazy mozno menit aj po nahrati (patent Blumlein 1934).",
    nepravda2: "MS (Middle-Side): stred = kardioida, boky = osmicka; maticou M+-S vznika L/R, ale sirku stereobazy po nahrati menit nemozno."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Rozlozene a near-koincidencne", podoblast: "AB",
    pravda: "AB (rozlozeny par): dve gulove vzdialene cca 40-60 cm tvoria stereo iba casovym rozdielom; prirodzeny zvuk, bez proximity efektu.",
    nepravda: "AB (rozlozeny par): dve gulove vzdialene cca 40-60 cm tvoria stereo iba rozdielom intenzity; prirodzeny zvuk, bez proximity efektu.",
    nepravda2: "AB (rozlozeny par): dve kardioidy vzdialene cca 40-60 cm tvoria stereo iba casovym rozdielom; prirodzeny zvuk, bez proximity efektu."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Rozlozene a near-koincidencne", podoblast: "Near-koincidencne",
    pravda: "Near-koincidencne techniky (blizky par) kombinuju rozdiel intenzity aj casu: ORTF, DIN, NOS.",
    nepravda: "Near-koincidencne techniky (blizky par) pouzivaju iba rozdiel intenzity: ORTF, DIN, NOS.",
    nepravda2: "Near-koincidencne techniky (blizky par) kombinuju rozdiel intenzity aj casu: XY, MS, Blumlein."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Rozlozene a near-koincidencne", podoblast: "ORTF, DIN, NOS",
    pravda: "ORTF: dve kardioidy, 17 cm a 110 st. (simuluje usi a hlavu); DIN: 20 cm a 90 st.; NOS: 30 cm a 90 st.",
    nepravda: "ORTF: dve kardioidy, 30 cm a 90 st. (simuluje usi a hlavu); DIN: 20 cm a 90 st.; NOS: 30 cm a 90 st.",
    nepravda2: "ORTF: dve osmicky, 17 cm a 110 st. (simuluje usi a hlavu); DIN: 20 cm a 90 st.; NOS: 30 cm a 90 st."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Specialne techniky a volba", podoblast: "Jecklin Disk",
    pravda: "Jecklin Disk (OSS): dve gulove mikrofony po stranach tlmeneho disku (~30 cm), ktory simuluje tienenie hlavy.",
    nepravda: "Jecklin Disk (OSS): dve osmicky po stranach tlmeneho disku (~30 cm), ktory simuluje tienenie hlavy.",
    nepravda2: "Jecklin Disk (OSS): dve gulove mikrofony po stranach tvrdeho odrazaveho disku (~30 cm), ktory simuluje tienenie hlavy."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Specialne techniky a volba", podoblast: "Decca tree",
    pravda: "Decca tree: tri gulove mikrofony do tvaru T (lavy, stredny, pravy); klasika pre velky symfonicky orchester.",
    nepravda: "Decca tree: dva gulove mikrofony; klasika pre velky symfonicky orchester.",
    nepravda2: "Decca tree: tri kardioidy do tvaru T (lavy, stredny, pravy); klasika pre velky symfonicky orchester."
  },
  {
    okruh: "2. Mikrofonne parove techniky", oblast: "Specialne techniky a volba", podoblast: "Volba podla telesa",
    pravda: "Volba podla telesa: koincidencne (XY) na komorne a male zostavy (monokompatibilita); AB, Decca tree a Jecklin na orchester a velky priestor; ORTF univerzalne na zbor.",
    nepravda: "Volba podla telesa: koincidencne (XY) na velky orchester a priestor; AB, Decca tree a Jecklin na komorne a male zostavy; ORTF univerzalne na zbor.",
    nepravda2: "Volba podla telesa: koincidencne (XY) na komorne a male zostavy; Decca tree na blizke snimanie soloveho spevu; ORTF univerzalne na zbor."
  },

  // ============ OKRUH 3: Efekty a parametre ============
  {
    okruh: "3. Efekty a parametre", oblast: "Sila signalu (dynamika)", podoblast: "Ktore efekty",
    pravda: "So silou (urovnou) signalu pracuju: kompresor, limiter, expander a gate (+ de-esser).",
    nepravda: "So silou (urovnou) signalu pracuju: delay, reverb, chorus a flanger.",
    nepravda2: "So silou (urovnou) signalu pracuju: kompresor, limiter, phaser a vibrato."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Sila signalu (dynamika)", podoblast: "Parametre kompresora",
    pravda: "Kompresor a limiter ovladame parametrami: prah (threshold), pomer (ratio), nabeh (attack), dobeh (release) a vystupny zisk (makeup gain).",
    nepravda: "Kompresor a limiter ovladame parametrami: prah (threshold), frekvencia (Hz), nabeh (attack), dobeh (release) a vystupny zisk (makeup gain).",
    nepravda2: "Kompresor a limiter ovladame parametrami: prah (threshold), pomer (ratio), hlbka a rychlost modulacie a vystupny zisk."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Sila signalu (dynamika)", podoblast: "Gate, expander, limiter",
    pravda: "Gate a expander stisia/zatvoria signal pod prahom (potlacenie sumu a preslechov); limiter = kompresor s velmi vysokym pomerom (zastropuje uroven).",
    nepravda: "Gate a expander stisia/zatvoria signal nad prahom (potlacenie sumu a preslechov); limiter = kompresor s velmi vysokym pomerom (zastropuje uroven).",
    nepravda2: "Gate a expander stisia/zatvoria signal pod prahom (potlacenie sumu a preslechov); limiter = kompresor s velmi nizkym pomerom (zastropuje uroven)."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Delka a vyska", podoblast: "Casove efekty",
    pravda: "S dlzkou (casom) pracuju: delay, echo a dozvuk (reverb/hall).",
    nepravda: "S dlzkou (casom) pracuju: kompresor, gate a limiter.",
    nepravda2: "S dlzkou (casom) pracuju: delay, echo a ekvalizer."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Delka a vyska", podoblast: "Parametre casovych",
    pravda: "Casove efekty ovladame: cas oneskorenia (time), spatna vazba (feedback), predelay a mix (dry/wet).",
    nepravda: "Casove efekty ovladame: cas oneskorenia (time), pomer (ratio), predelay a mix (dry/wet).",
    nepravda2: "Casove efekty ovladame: sirka pasma (Q), spatna vazba (feedback), predelay a mix (dry/wet)."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Delka a vyska", podoblast: "Vyskove efekty",
    pravda: "S vyskou pracuju: pitch-shift, harmonizer, vibrato a trilok; ovladame ich posunom v poltonoch/centoch a rychlostou.",
    nepravda: "S vyskou pracuju: kompresor a limiter; ovladame ich posunom v poltonoch/centoch a rychlostou.",
    nepravda2: "S vyskou pracuju: pitch-shift, harmonizer, vibrato a trilok; ovladame ich prahom (threshold) a pomerom (ratio)."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Barva (spektrum)", podoblast: "Farebne efekty",
    pravda: "S farbou (spektrom) pracuju: ekvalizer, filtre, skreslenie (distortion), chorus, flanger a phaser.",
    nepravda: "S farbou (spektrom) pracuju: kompresor, limiter, gate a expander.",
    nepravda2: "S farbou (spektrom) pracuju: ekvalizer, filtre, delay, echo a reverb."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Barva (spektrum)", podoblast: "Parametre EQ",
    pravda: "EQ a filtre ovladame: frekvencia, sirka pasma (Q) a zisk (boost/cut); typy filtra: horna priepust, dolna priepust, pasmova.",
    nepravda: "EQ a filtre ovladame: prah (threshold), pomer (ratio) a nabeh (attack); typy filtra: horna priepust, dolna priepust, pasmova.",
    nepravda2: "EQ a filtre ovladame: frekvencia, sirka pasma (Q) a zisk (boost/cut); horna priepust oreza vysoke frekvencie, dolna priepust oreza nizke."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Barva (spektrum)", podoblast: "Modulacne efekty",
    pravda: "Modulacne farebne efekty (chorus, flanger, phaser) ovladame hlbkou a rychlostou modulacie (+ feedback); menia fazu a spektrum.",
    nepravda: "Modulacne farebne efekty (chorus, flanger, phaser) ovladame prahom a pomerom (ratio); menia fazu a spektrum.",
    nepravda2: "Modulacne farebne efekty (chorus, flanger, phaser) ovladame hlbkou a rychlostou modulacie; menia iba hlasitost signalu."
  },
  {
    okruh: "3. Efekty a parametre", oblast: "Barva (spektrum)", podoblast: "De-esser",
    pravda: "De-esser = frekvencne zavisly kompresor (sykavky 5-11 kHz) — pracuje so silou aj farbou naraz.",
    nepravda: "De-esser = frekvencne zavisly kompresor (sykavky 50-110 Hz) — pracuje so silou aj farbou naraz.",
    nepravda2: "De-esser = cisty filter bez zavislosti na urovni (sykavky 5-11 kHz) — pracuje iba s farbou."
  },

  // ============ OKRUH 4: Elektroakusticke nastroje ============
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Delenie a Hammond", podoblast: "Delenie",
    pravda: "Elektroakusticke nastroje delime na mechanicko-elektricke (struna/jazycek budeny mechanicky + snimac) a elektromechanicke (Hammond, Mellotron); cisto elektronicke generuju zvuk obvodmi.",
    nepravda: "Elektroakusticke nastroje delime na mechanicko-elektricke (Hammond, Mellotron) a elektromechanicke (struna/jazycek + snimac); cisto elektronicke generuju zvuk obvodmi.",
    nepravda2: "Elektroakusticke nastroje delime na mechanicko-elektricke (struna/jazycek + snimac) a elektromechanicke (Hammond, Mellotron); cisto elektronicke generuju zvuk cisto akustickou rezonanciou."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Delenie a Hammond", podoblast: "Hammond - generovanie",
    pravda: "Hammond (elektromagneticky): rotujuce ozubene kolecka (tonewheels) pred snimacimi civkami generuju sinusove tony; farbu miesame aditivne tahlami (drawbars).",
    nepravda: "Hammond (magnetofonicky): magneticky pasik pred snimacimi civkami generuje tony; farbu miesame aditivne tahlami (drawbars).",
    nepravda2: "Hammond (elektromagneticky): rotujuce ozubene kolecka (tonewheels) pred snimacimi civkami generuju sinusove tony; farbu miesame subtraktivne filtrom."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Delenie a Hammond", podoblast: "Hammond - retazec",
    pravda: "Hammond retazec: tonewheel -> snimacia civka -> drawbars (aditivne miesanie) -> predzosilnovac -> Leslie box (rotujuci reproduktor, Dopplerov efekt).",
    nepravda: "Hammond retazec: tonewheel -> snimacia civka -> drawbars -> predzosilnovac -> Leslie box (pevny reproduktor s pruzinovym dozvukom).",
    nepravda2: "Hammond retazec: tonewheel -> snimacia civka -> drawbars -> predzosilnovac -> Leslie box (rotujuci reproduktor, ktoreho hlavny efekt je skreslenie)."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Rhodes, Wurlitzer, Clavinet", podoblast: "Rhodes",
    pravda: "Rhodes piano (elektrifikovane, mech. budenie): kladivko udrie kovovy jazycek (tine) + rezonancnu tyc -> magneticky snimac -> mäkky zvonkovy ton.",
    nepravda: "Rhodes piano (elektrifikovane, mech. budenie): kladivko udrie strunu -> magneticky snimac -> mäkky zvonkovy ton.",
    nepravda2: "Rhodes piano (elektrifikovane, mech. budenie): kladivko udrie kovovy jazycek (tine) -> opticky snimac -> mäkky zvonkovy ton."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Rhodes, Wurlitzer, Clavinet", podoblast: "Wurlitzer",
    pravda: "Wurlitzer je podobny Rhodesu, ale kladivka udieraju kovove jazyky (reeds); zvuk je ostrejsi a hrubsi nez Rhodes.",
    nepravda: "Wurlitzer je podobny Rhodesu, ale kladivka udieraju kovove jazyky (reeds); zvuk je mäksi a oblejsi nez Rhodes.",
    nepravda2: "Wurlitzer je podobny Rhodesu, ale kladivka udieraju struny; zvuk je ostrejsi a hrubsi nez Rhodes."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Rhodes, Wurlitzer, Clavinet", podoblast: "Clavinet",
    pravda: "Clavinet (elektrifikovany): gumova platnicka pritlaci a rozkmita strunu -> magneticky snimac -> ostry perkusivny funkovy ton.",
    nepravda: "Clavinet (elektrifikovany): gumova platnicka pritlaci a rozkmita kovovy jazycek -> magneticky snimac -> ostry perkusivny funkovy ton.",
    nepravda2: "Clavinet (elektrifikovany): gumova platnicka pritlaci a rozkmita strunu -> magneticky snimac -> mäkky zvonkovy ton."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Mellotron, Orchestron a schemy", podoblast: "Mellotron",
    pravda: "Mellotron (magnetofonicky): kazda klaves prehrava svoj magnetofonovy pasik s realnou nahravkou nastroja (asi 8 s na pasik).",
    nepravda: "Mellotron (opticky): kazda klaves prehrava svoj opticky disk s realnou nahravkou nastroja (asi 8 s na disk).",
    nepravda2: "Mellotron (magnetofonicky): kazda klaves prehrava svoj magnetofonovy pasik so syntetickou sinusovkou (asi 8 s na pasik)."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Mellotron, Orchestron a schemy", podoblast: "Orchestron",
    pravda: "Orchestron: obdoba Mellotronu, ale namiesto magnetofonovych pasikov pouziva opticke disky (gramotoricky princip).",
    nepravda: "Orchestron: obdoba Mellotronu, ale namiesto magnetofonovych pasikov pouziva dlhsie magneticke pasiky.",
    nepravda2: "Orchestron: obdoba Hammondovych organov, ale namiesto tonewheels pouziva opticke disky (gramotoricky princip)."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Mellotron, Orchestron a schemy", podoblast: "Spolocna schema",
    pravda: "Spolocna schema elektrifikovanych (Rhodes/Clavinet): mechanicky budic (jazycek/struna) -> magneticky snimac -> predzosilnovac -> efekty -> vystup.",
    nepravda: "Spolocna schema elektrifikovanych (Rhodes/Clavinet): mechanicky budic (jazycek/struna) -> reproduktor -> mikrofon -> efekty -> vystup.",
    nepravda2: "Spolocna schema elektrifikovanych (Rhodes/Clavinet): elektronicky oscilator -> magneticky snimac -> predzosilnovac -> efekty -> vystup."
  },
  {
    okruh: "4. Elektroakusticke nastroje", oblast: "Mellotron, Orchestron a schemy", podoblast: "Generacie",
    pravda: "Generacie elektronickych nastrojov: 1. elektronkove, 2. tranzistorove, 3. integrovane obvody, 4. analogovo-digitalne, 5. digitalne, 6. resynteza.",
    nepravda: "Generacie elektronickych nastrojov: 1. tranzistorove, 2. elektronkove, 3. integrovane obvody, 4. analogovo-digitalne, 5. digitalne, 6. resynteza.",
    nepravda2: "Generacie elektronickych nastrojov: 1. elektronkove, 2. tranzistorove, 3. integrovane obvody, 4. analogovo-digitalne, 5. akusticke, 6. resynteza."
  },

  // ============ OKRUH 5: Analogove syntezatory ============
  {
    okruh: "5. Analogove syntezatory", oblast: "Bloky a retazec", podoblast: "Subtraktivny princip",
    pravda: "Subtraktivny syntezator: zo spektrovo bohateho signalu filter odobera zlozky; zakladne bloky su VCO, VCF, VCA, LFO a EG.",
    nepravda: "Subtraktivny syntezator: do chudobneho signalu filter pridava zlozky; zakladne bloky su VCO, VCF, VCA, LFO a EG.",
    nepravda2: "Subtraktivny syntezator: zo spektrovo bohateho signalu filter odobera zlozky; zakladne bloky su VCO, RM, VCA, LFO a EG."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Bloky a retazec", podoblast: "Retazec signalu",
    pravda: "Retazec signalu: VCO (oscilator) -> VCF (filter) -> VCA (zosilnovac); modulatory LFO a EG (ADSR) riadia VCF a VCA.",
    nepravda: "Retazec signalu: VCO (oscilator) -> VCA (filter) -> VCF (zosilnovac); modulatory LFO a EG (ADSR) riadia VCF a VCA.",
    nepravda2: "Retazec signalu: VCO (oscilator) -> VCF (filter) -> VCA (zosilnovac); modulatory VCF a VCA riadia LFO a EG."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Bloky a retazec", podoblast: "ADSR obalka",
    pravda: "ADSR obalka (Attack, Decay, Sustain, Release) tvaruje hlasitost (cez VCA) a jas (cez VCF) v case.",
    nepravda: "ADSR obalka (Attack, Delay, Sostenuto, Reverb) tvaruje hlasitost (cez VCA) a jas (cez VCF) v case.",
    nepravda2: "ADSR obalka (Attack, Decay, Sustain, Release) tvaruje hlasitost a jas iba cez oscilator VCO."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Bloky a retazec", podoblast: "Aditivna vs subtraktivna",
    pravda: "Aditivna synteza sklada sinusovky (za sebou a nad sebou); subtraktivna orezava zlozky filtrom z bohateho signalu.",
    nepravda: "Subtraktivna synteza sklada sinusovky (za sebou a nad sebou); aditivna orezava zlozky filtrom z bohateho signalu.",
    nepravda2: "Aditivna synteza sklada same sumy; subtraktivna orezava zlozky filtrom z bohateho signalu."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Modulacie", podoblast: "AM",
    pravda: "AM (amplitudova modulacia): chudobne spektrum, modulacia meni iba amplitudy zloziek; obe postranne pasma maju rovnaku amplitudu.",
    nepravda: "AM (amplitudova modulacia): bohate spektrum, modulacia meni aj vysky zloziek; obe postranne pasma maju rovnaku amplitudu.",
    nepravda2: "AM (amplitudova modulacia): chudobne spektrum, modulacia meni iba amplitudy zloziek; obe postranne pasma maju roznu amplitudu."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Modulacie", podoblast: "FM a PM",
    pravda: "FM: bohate spektrum (suctove + rozdielove tony), sirku riadi modulacny index, zlozky popisuju Besselove funkcie; PM (fazova) je pribuzna (Yamaha DX7).",
    nepravda: "FM: bohate spektrum (suctove + rozdielove tony), sirku riadi modulacny index, zlozky popisuju Fourierove rady; PM (fazova) je pribuzna (Yamaha DX7).",
    nepravda2: "FM: chudobne spektrum bez postrannych pasiem, sirku riadi modulacny index, zlozky popisuju Besselove funkcie; PM (fazova) je pribuzna (Yamaha DX7)."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Modulacie", podoblast: "Kruhova (ring)",
    pravda: "Kruhova (ring) modulacia: inharmonicke spektrum (sucet + rozdiel) bez nosnej; typicky kovovy, zvonovy zvuk.",
    nepravda: "Kruhova (ring) modulacia: ciste harmonicke spektrum s nosnou; typicky kovovy, zvonovy zvuk.",
    nepravda2: "Kruhova (ring) modulacia: inharmonicke spektrum (sucet + rozdiel) bez nosnej; typicky teply gitarovy zvuk."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Modulacie", podoblast: "Krizova (vokoder)",
    pravda: "Krizova synteza = vokoder: prenasa obalky kanalovych filtrov reci na iny (hudobny) signal; vynasiel Homer Dudley (Bell Labs, 1938).",
    nepravda: "Krizova synteza = vokoder: prenasa obalky kanalovych filtrov hudobneho signalu na rec; vynasiel Homer Dudley (Bell Labs, 1938).",
    nepravda2: "Krizova synteza = vokoder: prenasa obalky kanalovych filtrov reci na iny (hudobny) signal; vynasiel Robert Moog (1938)."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Dalsie typy a samplery", podoblast: "Wavetable, vektorova, granularna",
    pravda: "Dalsie typy: wavetable (prechod tabulkou period), vektorova (miesanie 4 zdrojov v osiach X/Y), granularna (skladanie kratkych zrn zvuku).",
    nepravda: "Dalsie typy: wavetable (prechod tabulkou period), vektorova (miesanie 4 zdrojov v osiach X/Y), granularna (prechod tabulkou period).",
    nepravda2: "Dalsie typy: wavetable (prechod tabulkou period), vektorova (miesanie 2 zdrojov v jednej osi), granularna (skladanie kratkych zrn zvuku)."
  },
  {
    okruh: "5. Analogove syntezatory", oblast: "Dalsie typy a samplery", podoblast: "Sampler a aliasing",
    pravda: "Sampler prehrava nahrane vzorky (transponuje ich klavesami); zcudzenie (aliasing) = falosne nizke tony, ked je vzorkovacia frekvencia mensia nez 2x najvyssia zlozka (Nyquist).",
    nepravda: "Sampler prehrava nahrane vzorky (transponuje ich klavesami); zcudzenie (aliasing) = falosne nizke tony, ked je vzorkovacia frekvencia vacsia nez 2x najvyssia zlozka (Nyquist).",
    nepravda2: "Sampler generuje cisto syntetické sinusovky; zcudzenie (aliasing) = falosne nizke tony, ked je vzorkovacia frekvencia mensia nez 2x najvyssia zlozka (Nyquist)."
  },

  // ============ OKRUH 6: Organizacia nahravania ============
  {
    okruh: "6. Organizacia nahravania", oblast: "Izolovane vs skupinove", podoblast: "Izolovane",
    pravda: "Izolovane nahravanie: maximalna kontrola, ziadne preslechy a lahke neskorsie upravy — ale straca sa zivost a vzajomna sucinnost hracov.",
    nepravda: "Izolovane nahravanie: mala kontrola a vela preslechov — ale zachovava sa zivost a vzajomna sucinnost hracov.",
    nepravda2: "Izolovane nahravanie: maximalna kontrola a ziadne preslechy, ale neskorsie upravy uz nie su mozne; straca sa zivost."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Izolovane vs skupinove", podoblast: "Skupinove",
    pravda: "Skupinove nahravanie (s preslechmi): prirodzena sucinnost a zivost — ale hrozi hrebenovy filter, mensia kontrola a tazke opravy.",
    nepravda: "Skupinove nahravanie (s preslechmi): sterilny zvuk bez zivosti — ale hrozi hrebenovy filter, mensia kontrola a tazke opravy.",
    nepravda2: "Skupinove nahravanie (s preslechmi): prirodzena sucinnost a zivost, hrozi hrebenovy filter, ale opravy su velmi lahke."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Izolovane vs skupinove", podoblast: "Zlepsenie izolacie",
    pravda: "Izolaciu pri skupinovom nahravani zlepsime: paravanmi, smerovymi mikrofonmi, oddelenymi kabinami a vacsou vzdialenostou rusivych zdrojov.",
    nepravda: "Izolaciu pri skupinovom nahravani zlepsime: paravanmi, gulovymi (vsesmerovymi) mikrofonmi, oddelenymi kabinami a vacsou vzdialenostou rusivych zdrojov.",
    nepravda2: "Izolaciu pri skupinovom nahravani zlepsime: paravanmi, smerovymi mikrofonmi, oddelenymi kabinami a priblizenim vsetkych zdrojov k sebe."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Channel strip a odposluchy", podoblast: "Channel strip - vstup",
    pravda: "Channel strip (vstupna jednotka pultu) na vstupe: gain/trim, fantom 48 V, PAD (utlm), otocenie fazy a low-cut (horna priepust).",
    nepravda: "Channel strip (vstupna jednotka pultu) na vstupe: gain/trim, fantom 48 V, PAD (zosilnenie slabeho signalu), otocenie fazy a low-cut (horna priepust).",
    nepravda2: "Channel strip (vstupna jednotka pultu) na vstupe: gain/trim, fantom 48 V, PAD (utlm), otocenie fazy a low-cut (dolna priepust)."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Channel strip a odposluchy", podoblast: "Channel strip - dalej",
    pravda: "Channel strip dalej: EQ (vysky/stredy/basy), aux/sends (odposluch a efekty), panorama, mute/solo, fader a smerovanie do zbernic.",
    nepravda: "Channel strip dalej: EQ (vysky/stredy/basy), panorama, mute/solo, fader — aux/sends pult nema.",
    nepravda2: "Channel strip dalej: EQ (iba jedno pevne pasmo), aux/sends (odposluch a efekty), panorama, mute/solo, fader a smerovanie do zbernic."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Channel strip a odposluchy", podoblast: "Odposluch",
    pravda: "Odposluch hudobnikov: sluchadla (in-ear) s vlastnym mixom; pri zbore a hlasitom snimani musi byt odposluch izolovany, aby mikrofon snimal len nastroj.",
    nepravda: "Odposluch hudobnikov: hlasity reproduktor v miestnosti; pri zbore a hlasitom snimani musi byt odposluch izolovany, aby mikrofon snimal len nastroj.",
    nepravda2: "Odposluch hudobnikov: sluchadla s jednym spolocnym mixom rovnakym pre vsetkych; pri zbore musi byt odposluch izolovany."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Channel strip a odposluchy", podoblast: "Playback",
    pravda: "Playback: nahravanie noveho nastroja proti uz hotovej podkresovej (zakladnej) stope, ktoru hrac pocuje v odposluchu.",
    nepravda: "Playback: nahravanie vsetkych nastrojov naraz bez akejkolvek podkresovej stopy.",
    nepravda2: "Playback: prehravanie uz hotovej nahravky publiku na koncerte, kde umelci iba predstieraju hru."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Psychologicke aspekty", podoblast: "Osamelost",
    pravda: "Psych. uskalie izolovaneho: osamelost a strata kontaktu/súhry s ostatnymi; riesenie = vizualny kontakt, spolocny zakladny odposluch, scratch nahravka.",
    nepravda: "Psych. uskalie izolovaneho: prilis vela rozptylenia od ostatnych hracov; riesenie = vizualny kontakt, spolocny odposluch, scratch nahravka.",
    nepravda2: "Psych. uskalie izolovaneho: osamelost a strata kontaktu; riesenie = uplne odrezat hraca od ostatnych aj od odposluchu."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Psychologicke aspekty", podoblast: "Tlak metronomu",
    pravda: "Psych. uskalie klik/playback: stres z metronomu a tlak na 'dokonaly zaber'; riesenie = skusobne zabery, trpezlivost a pohodlny odposluchovy mix.",
    nepravda: "Psych. uskalie klik/playback: metronom uplne odstrani vsetok stres; riesenie = skusobne zabery, trpezlivost a pohodlny odposluchovy mix.",
    nepravda2: "Psych. uskalie klik/playback: stres z metronomu a tlak na dokonaly zaber; riesenie = vynutit dokonaly vykon hned v prvom zabere."
  },
  {
    okruh: "6. Organizacia nahravania", oblast: "Psychologicke aspekty", podoblast: "Unava z opakovania",
    pravda: "Psych. uskalie opakovania: unava a strata spontannosti pri mnohych zaberoch; riesenie = nahrat skoro, vybrat najlepsi zaber, nelepit part po malych kuskoch.",
    nepravda: "Psych. uskalie opakovania: s kazdym zaberom energia a spontannost rastie; riesenie = nahrat skoro, vybrat najlepsi zaber, nelepit part po kuskoch.",
    nepravda2: "Psych. uskalie opakovania: unava a strata spontannosti pri mnohych zaberoch; riesenie = part zlozit z co najviac malych zostrihanych kuskov."
  },

  // ============ OKRUH 7: Rytmicka sekcia ============
  {
    okruh: "7. Rytmicka sekcia", oblast: "Kruhove a dortove mody", podoblast: "Dva typy modov",
    pravda: "Blana bubna kmita v dvoch typoch morov: kruhove (sustredne) mody a dortove (radialne, vysecove) mody.",
    nepravda: "Blana bubna kmita v dvoch typoch morov: kruhove (sustredne) mody a dortove mody (pozdlzne kmity po obvode).",
    nepravda2: "Blana bubna kmita v dvoch typoch morov: kruhove (uplne nahodne) mody a dortove (radialne, vysecove) mody."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Kruhove a dortove mody", podoblast: "Vplyv miesta uderu",
    pravda: "Uder do stredu blany budi hlavne kruhove mody (tlmenejsi, dunivy ton); uder mimo stred budi dortove mody (vyssie alikvoty, vyraznejsi ton s viac vyskami).",
    nepravda: "Uder do stredu blany budi dortove mody (vyssie alikvoty, vyraznejsi ton); uder mimo stred budi kruhove mody (tlmenejsi, dunivy ton).",
    nepravda2: "Uder do stredu blany budi hlavne kruhove mody (ostry jasny ton); uder mimo stred budi dortove mody (tlmenejsi dunivy ton)."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Kruhove a dortove mody", podoblast: "Poloha mikrofonu",
    pravda: "Poloha mikrofonu nad blanou urcuje farbu: nad uzlom modu ten mod nezachyti, nad kmitnou ano — preto rozhoduje, kolko tonu vs. uderu sníma.",
    nepravda: "Poloha mikrofonu nad blanou urcuje farbu: nad uzlom modu ten mod najlepsie zachyti, nad kmitnou nie — preto rozhoduje, kolko tonu vs. uderu sníma.",
    nepravda2: "Poloha mikrofonu nad blanou nema vplyv na farbu, meni iba celkovu hlasitost zachyteneho bubna."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Maskovacie pasma", podoblast: "Basy",
    pravda: "Kopak (bass drum) a baskytara sa maskuju v basoch (cca 50-120 Hz) — najvacsia kolizia v rytmickej sekcii.",
    nepravda: "Kopak (bass drum) a baskytara sa maskuju vo vyskach (cca 5-12 kHz) — najvacsia kolizia v rytmickej sekcii.",
    nepravda2: "Hi-hat a cinely sa maskuju v basoch (cca 50-120 Hz) — najvacsia kolizia v rytmickej sekcii."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Maskovacie pasma", podoblast: "Stredy",
    pravda: "Maly bubon (snare) a vokal sa maskuju v stredoch (~200 Hz az 2 kHz) — pasmo zrozumitelnosti a 'kicku'.",
    nepravda: "Maly bubon (snare) a vokal sa maskuju v subbasoch (~20 az 60 Hz) — pasmo zrozumitelnosti a kicku.",
    nepravda2: "Kopak a baskytara sa maskuju v stredoch (~200 Hz az 2 kHz) — pasmo zrozumitelnosti a kicku."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Maskovacie pasma", podoblast: "Vysky a volne pasma",
    pravda: "Cinely a hi-hat zaberaju vysoke frekvencie (nad ~8 kHz) — relativne volne pasmo s malo koliziami.",
    nepravda: "Cinely a hi-hat zaberaju nizke frekvencie (pod ~100 Hz) — relativne volne pasmo s malo koliziami.",
    nepravda2: "Cinely a hi-hat zaberaju vysoke frekvencie (nad ~8 kHz) — najviac obsadene a koliziace pasmo."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Maskovacie pasma", podoblast: "Volne kraje",
    pravda: "Relativne volne ostavaju kraje spektra (subbasy a najvyssie vysky); najviac obsadene a koliziace su stredne pasma.",
    nepravda: "Relativne volne ostavaju stredne pasma; najviac obsadene a koliziace su kraje spektra (subbasy a najvyssie vysky).",
    nepravda2: "Relativne volne ostavaju kraje spektra; v rytmickej sekcii sa nastroje vobec nemaskuju."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Eliminacia v stereu", podoblast: "Panorama",
    pravda: "Maskovanie eliminujeme rozlozenim do sterea: koliziace nastroje dame na rozne miesta panoramy (napr. hi-hat vlavo, ride vpravo).",
    nepravda: "Maskovanie eliminujeme tym, ze vsetky koliziace nastroje dame do stredu (mono).",
    nepravda2: "Maskovanie zhorsuje rozlozenie do sterea, preto koliziace nastroje davame na to iste miesto panoramy."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Eliminacia v stereu", podoblast: "Ekvalizacia",
    pravda: "Maskovanie eliminujeme aj ekvalizaciou: radsej ubrat rusive pasmo jednemu nastroju nez pridavat druhemu — uvolnime tak miesto.",
    nepravda: "Maskovanie eliminujeme aj ekvalizaciou: radsej pridat to iste pasmo obom nastrojom — zvyraznime tak oba.",
    nepravda2: "Maskovanie eliminujeme aj ekvalizaciou, hoci ubranie ci pridanie pasma na maskovanie nema ziadny vplyv."
  },
  {
    okruh: "7. Rytmicka sekcia", oblast: "Eliminacia v stereu", podoblast: "Basy do stredu",
    pravda: "Kopak a baskytaru (najviac energie) nechame v strede / mono — kvoli stabilite basov a hlasitosti; ostatne nastroje rozlozime do sterea.",
    nepravda: "Kopak a baskytaru (najviac energie) dame uplne na kraje sterea; ostatne nastroje nechame v strede.",
    nepravda2: "Kopak a baskytaru nechame v strede kvoli stabilite vysokych frekvencii a cinelov; ostatne rozlozime do sterea."
  },

  // ============ OKRUH 8: Umele a prirodne zvuky ============
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Typy signalov", podoblast: "Tranzient",
    pravda: "Tranzient = kratky prechodovy jav (nabeh tonu, uder); nesie hlavnu informaciu o nastroji a artikulacii.",
    nepravda: "Tranzient = ustaleny dlhy periodicky jav (drzany ton); nesie hlavnu informaciu o nastroji a artikulacii.",
    nepravda2: "Tranzient = kratky prechodovy jav (nabeh tonu, uder); pre rozpoznanie nastroja je nepodstatny."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Typy signalov", podoblast: "Stacionarny a stochasticky",
    pravda: "Stacionarny signal = ustaleny periodicky (drzany ton, samohlaska); stochasticky = nahodny/sumovy (sykavky, dych, sum plechov).",
    nepravda: "Stochasticky signal = ustaleny periodicky (drzany ton); stacionarny = nahodny/sumovy (sykavky, dych, sum plechov).",
    nepravda2: "Stacionarny signal = ustaleny periodicky (drzany ton, samohlaska); stochasticky = presne periodicky a predvidatelny."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Silne a slabe stranky", podoblast: "Prirodne",
    pravda: "Prirodne zvuky: bohate, zive, s prirodzenymi tranzientmi a mikrovariaciami — ale tazko kontrolovatelne a opakovatelne.",
    nepravda: "Prirodne zvuky: bohate, zive, s prirodzenymi tranzientmi — a zaroven lahko presne kontrolovatelne a opakovatelne.",
    nepravda2: "Prirodne zvuky: chudobne a staticke bez tranzientov — a tazko kontrolovatelne a opakovatelne."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Silne a slabe stranky", podoblast: "Umele",
    pravda: "Umele (synteticke) zvuky: presne riaditelne a dokonale opakovatelne — ale mozu posobit staticky, sterilne, bez zivota.",
    nepravda: "Umele (synteticke) zvuky: nahodne a neopakovatelne — ale mozu posobit staticky, sterilne, bez zivota.",
    nepravda2: "Umele (synteticke) zvuky: presne riaditelne a opakovatelne — a vzdy posobia zivsie a prirodzenejsie nez akusticke."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Silne a slabe stranky", podoblast: "Hlavny problem",
    pravda: "Hlavny problem kombinovania: umele zvuky byvaju prilis staticke a 'mrtve' vedla zivych prirodnych — chyba im pohyb a prirodzene tranzienty.",
    nepravda: "Hlavny problem kombinovania: prirodne zvuky byvaju prilis staticke a 'mrtve' vedla zivych umelych — chybaju im tranzienty.",
    nepravda2: "Hlavny problem kombinovania: umele zvuky maju prilis vela nahodneho pohybu a chaosu vedla pokojnych prirodnych."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Principy kombinovania", podoblast: "Tranzienty a obalky",
    pravda: "Princip 1: zladit tranzienty a obalky (ADSR) — umely zvuk dostane prirodzeny nabeh a dobeh.",
    nepravda: "Princip 1: z umeleho zvuku uplne odstranit vsetky tranzienty a obalku.",
    nepravda2: "Princip 1: zladit obalky tak, ze kazdemu zvuku dame co najostrejsi klikavy nabeh."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Principy kombinovania", podoblast: "Spektra bez maskovania",
    pravda: "Princip 2: doplnit spektra bez maskovania — kazdy zvuk dostane vlastne frekvencne pasmo.",
    nepravda: "Princip 2: vsetky zvuky natlacit do toho isteho frekvencneho pasma kvoli sile.",
    nepravda2: "Princip 2: doplnit spektra tak, ze vsetky nastroje pokryju cele pasmo naraz a maskuju sa."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Principy kombinovania", podoblast: "Spolocny priestor",
    pravda: "Princip 3: spolocny priestor (rovnaky dozvuk/reverb) zjednoti umely a prirodny zvuk do jednej zvukovej sceny.",
    nepravda: "Princip 3: kazdemu zvuku dame uplne iny priestor a dozvuk, aby sa do seba nemiesali.",
    nepravda2: "Princip 3: spolocny dozvuk umely a prirodny zvuk naopak rozbije a oddeli do dvoch scen."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Principy kombinovania", podoblast: "Pohyb a humanizacia",
    pravda: "Princip 4: vniest do umeleho zvuku pohyb (modulacie, mikrovariacie, humanizacia tempa/dynamiky), aby nebol staticky.",
    nepravda: "Princip 4: z umeleho zvuku odstranit vsetky modulacie a variacie, aby bol uplne staticky.",
    nepravda2: "Princip 4: umely zvuk co najpresnejsie kvantizovat na mriezku, aby posobil mechanicky."
  },
  {
    okruh: "8. Umele a prirodne zvuky", oblast: "Principy kombinovania", podoblast: "Ladenie a faza",
    pravda: "Princip 5: zladit ladenie a faze, aby pri spojeni umeleho a prirodneho zvuku nevznikol rusivy hrebenovy filter ci rozladenie.",
    nepravda: "Princip 5: umely a prirodny zvuk dat zamerne do protifazy, aby sa vyrusili.",
    nepravda2: "Princip 5: zladit ladenie a faze, inak pri spojeni vznikne iba zosilnenie basov bez problemu."
  },

  // ============ OKRUH 9: Vnutorne ucho a psychoakustika ============
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Anatomia a premena na vzruch", podoblast: "Hlemyzd",
    pravda: "Vnutorne ucho = hlemyzd (cochlea, ~2,5 zavitu), naplneny perilymfou a endolymfou; vnutri oddeleny bazilarnou a Reisnerovou membranou.",
    nepravda: "Vnutorne ucho = sustava kostocok (kladivko, nakovka, strmienok), naplnena perilymfou a endolymfou; oddelena bazilarnou a Reisnerovou membranou.",
    nepravda2: "Vnutorne ucho = hlemyzd (cochlea, asi 5 zavitov), naplneny perilymfou a endolymfou; vnutri oddeleny bazilarnou a Reisnerovou membranou."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Anatomia a premena na vzruch", podoblast: "Cortiho organ",
    pravda: "Cortiho organ (na bazilarnej membrane) ma asi 20 000 vlaskovych buniek; premiena mechanicke vlnenie na nervovy vzruch.",
    nepravda: "Reisnerova membrana (s asi 20 000 vlaskovymi bunkami) premiena mechanicke vlnenie na nervovy vzruch.",
    nepravda2: "Cortiho organ (na bazilarnej membrane) ma asi 20 000 vlaskovych buniek; iba mechanicky zosilnuje prichadzajuci zvuk."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Anatomia a premena na vzruch", podoblast: "Vznik vzruchu",
    pravda: "Sklopenie vlaskov vyvola chemicku reakciu a elektricky impulz, ktory sluchovy nerv vedie do centralnej nervovej sustavy.",
    nepravda: "Sklopenie vlaskov vyvola cisto mechanicky tlak bez chemickej reakcie, ktory sluchovy nerv vedie do CNS.",
    nepravda2: "Sklopenie vlaskov vyvola elektricky impulz, ktory ide priamo do svalov ucha, nie do mozgu."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Anatomia a premena na vzruch", podoblast: "Triedenie kmitoctov",
    pravda: "Triedenie kmitoctov pozdlzou: vysoke tony na zaciatku hlemyzda (baza, uzka ~100 um), hlboke na konci (vrchol, siroky ~500 um) — princip postupnej vlny.",
    nepravda: "Triedenie kmitoctov pozdlzou: hlboke tony na zaciatku hlemyzda (baza, uzka ~100 um), vysoke na konci (vrchol, siroky ~500 um) — princip postupnej vlny.",
    nepravda2: "Hlemyzd kmitocty netriedi po dlzke; cely vnima vsetky vysky naraz na jednom mieste."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Druhy maskovania", podoblast: "Frekvencne maskovanie",
    pravda: "Frekvencne (simultanne) maskovanie: hlasnejsi ton maskuje tichsi v tom istom kritickom (barkovom) pasme; spolu je 24 pasiem.",
    nepravda: "Frekvencne (simultanne) maskovanie: hlasnejsi ton maskuje tichsi vo velmi vzdialenom kritickom pasme; spolu je 24 pasiem.",
    nepravda2: "Frekvencne (simultanne) maskovanie: hlasnejsi ton maskuje tichsi v tom istom kritickom (barkovom) pasme; spolu je 12 pasiem."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Druhy maskovania", podoblast: "Casove maskovanie",
    pravda: "Casove maskovanie: premasking (kratko pred) a postmasking (po hlasitom zvuku); vyuziva ho kompresia MP3.",
    nepravda: "Casove maskovanie: premasking aj postmasking nastavaju az po hlasitom zvuku; vyuziva ho kompresia MP3.",
    nepravda2: "Casove maskovanie: premasking (pred) a postmasking (po hlasitom zvuku); vyuziva ho bezstratovy format WAV."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Zwickerove parametre a jednotky", podoblast: "Hlasitost (son)",
    pravda: "Hlasitost — jednotka son (1 son = 40 fonov pri 1 kHz); fon je hladina hlasitosti vztiahnuta k tonu 1 kHz.",
    nepravda: "Hlasitost — jednotka acum (1 acum = 40 fonov pri 1 kHz); fon je hladina hlasitosti vztiahnuta k tonu 1 kHz.",
    nepravda2: "Hlasitost — jednotka son (1 son = 100 fonov pri 1 kHz); fon je hladina hlasitosti vztiahnuta k tonu 1 kHz."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Zwickerove parametre a jednotky", podoblast: "Ostrost (acum)",
    pravda: "Ostrost — jednotka acum (1 acum = uzkopasmovy sum so stredom 1 kHz, sirka 1 bark, 60 dB); zavisi od podielu vysokych frekvencii.",
    nepravda: "Ostrost — jednotka asper (1 asper = uzkopasmovy sum so stredom 1 kHz, sirka 1 bark, 60 dB); zavisi od podielu vysokych frekvencii.",
    nepravda2: "Ostrost — jednotka acum (1 acum = uzkopasmovy sum so stredom 1 kHz, sirka 1 bark, 60 dB); zavisi od podielu nizkych frekvencii."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Zwickerove parametre a jednotky", podoblast: "Drsnost a kolisanie",
    pravda: "Drsnost (hrubost) — jednotka asper (1 asper = ton 1 kHz, 60 dB, 100% AM pri 70 Hz); kolisanie sily — jednotka vacil (pomala AM okolo 4 Hz).",
    nepravda: "Drsnost (hrubost) — jednotka acum (1 acum = ton 1 kHz, 60 dB, 100% AM pri 70 Hz); kolisanie sily — jednotka vacil (pomala AM okolo 4 Hz).",
    nepravda2: "Drsnost (hrubost) — jednotka asper (1 asper = ton 1 kHz, 60 dB, 100% AM pri 70 Hz); kolisanie sily — jednotka asper (pomala AM okolo 4 Hz)."
  },
  {
    okruh: "9. Vnutorne ucho a psychoakustika", oblast: "Zwickerove parametre a jednotky", podoblast: "Vyska, dlzka, tonovost",
    pravda: "Subjektivna vyska — jednotka mel (1000 Hz pri 40 dB = 1000 mel); subjektivna dlzka — jednotka dura; tonovost sa znaci T a udava sa v percentach.",
    nepravda: "Subjektivna vyska — jednotka dura (1000 Hz pri 40 dB = 1000 dura); subjektivna dlzka — jednotka mel; tonovost sa znaci T a udava sa v percentach.",
    nepravda2: "Subjektivna vyska — jednotka mel (1000 Hz pri 40 dB = 1000 mel); subjektivna dlzka — jednotka dura; tonovost sa znaci T a udava sa v decibeloch."
  },

  // ============ OKRUH 10: Weber-Fechner a mozog ============
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Weber-Fechner a laloky", podoblast: "Weber-Fechnerov zakon",
    pravda: "Weber-Fechnerov zakon: ak podnet rastie geometricky (nasobne), vnem rastie iba aritmeticky (scitanim) — vnimanie je logaritmicke (preto dB, son, mel).",
    nepravda: "Weber-Fechnerov zakon: ak podnet rastie aritmeticky, vnem rastie geometricky — vnimanie je logaritmicke (preto dB, son, mel).",
    nepravda2: "Weber-Fechnerov zakon: ak podnet rastie geometricky, vnem rastie aritmeticky — vnimanie je teda presne linearne."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Weber-Fechner a laloky", podoblast: "Styri laloky",
    pravda: "Styri laloky koncoveho mozgu: celny (frontalny), spankovy (temporalny), temenny (parietalny) a tylovy (okcipitalny).",
    nepravda: "Styri laloky koncoveho mozgu: celny (frontalny), spankovy (temporalny), temenny (parietalny) a medzimozog (diencefalon).",
    nepravda2: "Styri laloky koncoveho mozgu: celny (frontalny), mozocek (cerebellum), temenny (parietalny) a tylovy (okcipitalny)."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Weber-Fechner a laloky", podoblast: "Celny lalok",
    pravda: "Celny lalok = motorika a pohyb — riadi aj produkciu reci, spev a hru na nastroj (pohyb prstov, dychu).",
    nepravda: "Celny lalok = spracovanie sluchu — riadi vnimanie hudby a tonov.",
    nepravda2: "Celny lalok = zrak — riadi citanie not a sledovanie dirigenta."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Weber-Fechner a laloky", podoblast: "Spankovy lalok",
    pravda: "Spankovy lalok = sluch — spracovanie zvuku a hudby a porozumenie reci.",
    nepravda: "Spankovy lalok = zrak — spracovanie obrazu a citanie not.",
    nepravda2: "Spankovy lalok = motorika — riadi pohyb prstov pri hre na nastroj."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Weber-Fechner a laloky", podoblast: "Temenny a tylovy",
    pravda: "Temenny lalok = senzoricke vnimanie (integracia vnemov, rytmus, priestor); tylovy lalok = zrak (citanie not, sledovanie dirigenta).",
    nepravda: "Temenny lalok = zrak (citanie not); tylovy lalok = senzoricke vnimanie (rytmus, priestor).",
    nepravda2: "Temenny lalok = senzoricke vnimanie (rytmus, priestor); tylovy lalok = sluch (spracovanie hudby)."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Hemisfery a mix", podoblast: "Hemisfery",
    pravda: "Lava hemisfera = logicka (rec, analyza, rytmus, detail); prava hemisfera = kreativna (melodia, farba, priestor, emocia).",
    nepravda: "Lava hemisfera = kreativna (melodia, farba, emocia); prava hemisfera = logicka (rec, analyza, rytmus, detail).",
    nepravda2: "Obe hemisfery spracuvavaju rec aj melodiu uplne rovnako, bez akejkolvek specializacie."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Hemisfery a mix", podoblast: "Vyuzitie pri mixe",
    pravda: "Vyuzitie pri mixe: solo/rec a detail patria do lavej (analytickej) pozornosti, atmosfera a priestor do pravej — vyvazujeme citelnost a zazitok.",
    nepravda: "Vyuzitie pri mixe: atmosfera a priestor patria do lavej (analytickej) pozornosti, solo a rec do pravej — vyvazujeme citelnost a zazitok.",
    nepravda2: "Vyuzitie pri mixe: rozdelenie hemisfer nema na mix ziadny vplyv, vsetko spracuvavame rovnako."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Broca a Wernicke", podoblast: "Brockovo centrum",
    pravda: "Brockovo centrum: dolna lava cast celneho laloku — riadi produkciu reci; poskodenie = motoricka afazia (clovek rozumie, ale nevie hovorit).",
    nepravda: "Brockovo centrum: dolna lava cast celneho laloku — riadi porozumenie reci; poskodenie = clovek nerozumie hovorenemu.",
    nepravda2: "Brockovo centrum: dolna cast tyloveho laloku — riadi produkciu reci; poskodenie = motoricka afazia (clovek rozumie, ale nevie hovorit)."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Broca a Wernicke", podoblast: "Wernickeho centrum",
    pravda: "Wernickeho centrum: horna cast spankoveho (a temenneho) laloku — zabezpecuje porozumenie reci; poskodenie = clovek hovori, ale nerozumie.",
    nepravda: "Wernickeho centrum: horna cast spankoveho (a temenneho) laloku — zabezpecuje produkciu reci; poskodenie = clovek rozumie, ale nevie hovorit.",
    nepravda2: "Wernickeho centrum: dolna cast celneho laloku — zabezpecuje porozumenie reci; poskodenie = clovek hovori, ale nerozumie."
  },
  {
    okruh: "10. Weber-Fechner a mozog", oblast: "Broca a Wernicke", podoblast: "Priekopnici",
    pravda: "Broca (1861, pacient 'tan') a Wernicke (1874) su priekopnici lokalizacie recovych centier a modernej afaziologie.",
    nepravda: "Broca (1761, pacient 'tan') a Wernicke (1874) su priekopnici lokalizacie recovych centier a modernej afaziologie.",
    nepravda2: "Broca (1861) a Wernicke (1874) su priekopnici lokalizacie zrakovych centier mozgu."
  }
];

const vs2OkruhyCrackOtazky = vs2OkruhyCrackData.map((polozka) => ({
  id: `VS2 ${polozka.okruh.split(".")[0]}. ${polozka.oblast} - ${polozka.podoblast}`,
  tema: `${polozka.okruh} - ${polozka.oblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: polozka.okruh,
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "VS2 prezentacie",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

if (typeof vs2Otazky !== "undefined") {
  vs2Otazky.push(...vs2OkruhyCrackOtazky);
}

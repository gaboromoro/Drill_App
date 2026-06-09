// SZZ okruh 10 - Zvukove efekty, vokoder a kytarove kombo (gap-fill).
// Zdroje: HEL_09_Kytarove_zesilovace.pdf + HEL_10_Hudebni_efekty.pdf.
// Kytarova cast pouziva zdrojovu prezentaciu "HEL Skuska 9", efektova
// "HEL Skuska 10"; obe hel-szz-okruhy.js premapuje na SZZ okruh 10.

// ============ Kytarove kombo (HEL_09) ============
const helSkuska9KytaraData = [
  // ===== Struktura komba =====
  {
    id: "HEL 9. Kombo 001",
    oblast: "Kytarove kombo",
    podoblast: "Struktura",
    pravda: "Vseobecna struktura kytaroveho komba je: predzosilnovac (preamp), kmitoctovy korektor (tone stack), efektovy procesor a koncovy zosilnovac (power amp).",
    nepravda: "Vseobecna struktura kytaroveho komba je: mikrofon, A/D prevodnik, DSP a reproduktor bez predzosilnovaca."
  },
  {
    id: "HEL 9. Kombo 002",
    oblast: "Kytarove kombo",
    podoblast: "Predzosilnovac",
    pravda: "Predzosilnovac vytvara linearne aj nelinearne skreslenie a tvoria ho 2 az 6 triodovych zosilnovacov oddelenych pasivnymi filtrami.",
    nepravda: "Predzosilnovac vytvara iba linearne zosilnenie a tvori ho jediny operacny zosilnovac bez filtrov."
  },
  {
    id: "HEL 9. Kombo 003",
    oblast: "Kytarove kombo",
    podoblast: "Predzosilnovac",
    pravda: "Katodovy sledovac v predzosilnovaci sluzi ako buffer, teda impedancne oddelenie medzi blokmi.",
    nepravda: "Katodovy sledovac v predzosilnovaci sluzi ako hlavny zdroj skreslenia signalu."
  },
  {
    id: "HEL 9. Kombo 004",
    oblast: "Kytarove kombo",
    podoblast: "Parametre",
    pravda: "Gain (Drive) je zosilnenie signalu pred predzosilnovacom, teda miera skreslenia; Output/Volume je zosilnenie za predzosilnovacom.",
    nepravda: "Gain (Drive) je zosilnenie az v koncovom zosilnovaci a urcuje len celkovu hlasitost, nie skreslenie."
  },
  {
    id: "HEL 9. Kombo 005",
    oblast: "Kytarove kombo",
    podoblast: "Tone stack",
    pravda: "Kmitoctovy korektor (Tone Stack) je pasivny filter s dvoma az tromi pasmami (Bass, Mid, Treble).",
    nepravda: "Kmitoctovy korektor (Tone Stack) je aktivny parametricky ekvalizer s plne nastavitelnou strmostou kazdeho pasma."
  },
  {
    id: "HEL 9. Kombo 006",
    oblast: "Kytarove kombo",
    podoblast: "Tone stack",
    pravda: "Tone stack za prvym triodovym zosilnovacom je typicky pre 'Clean' kanaly, na konci predzosilnovaca pre 'Drive' kanaly.",
    nepravda: "Tone stack za prvym triodovym zosilnovacom je typicky pre 'Drive' kanaly, na konci predzosilnovaca pre 'Clean' kanaly."
  },
  {
    id: "HEL 9. Kombo 007",
    oblast: "Kytarove kombo",
    podoblast: "Tone stack",
    pravda: "Topologie korektorov sa lisia: Fender v nulovej pozicii uplne blokuje signal, Marshall ma mierny efekt peak filtru a VOX vykazuje interakciu medzi basmi a vyskami.",
    nepravda: "Vsetky topologie korektorov (Fender, Marshall, VOX) sa spravaju identicky a v nulovej pozicii uplne blokuju signal."
  },
  {
    id: "HEL 9. Kombo 008",
    oblast: "Kytarove kombo",
    podoblast: "Koncovy zosilnovac",
    pravda: "Koncovy zosilnovac je dvojcinny (push-pull) s fazovym invertorom, ktory vyrazne ovplyvnuje zvuk, pretoze signal v protifaze ma inu amplitudu a skreslenie.",
    nepravda: "Koncovy zosilnovac je jednocinny bez invertora, takze na vysledny zvuk nema ziadny vplyv."
  },
  {
    id: "HEL 9. Kombo 009",
    oblast: "Kytarove kombo",
    podoblast: "Koncovy zosilnovac",
    pravda: "Spatna vazba koncoveho zosilnovaca je kladna; Presence filter potlaca prenos nizkych kmitoctov vo spatnej vazbe a Resonance filter prenos vysokych kmitoctov.",
    nepravda: "Spatna vazba koncoveho zosilnovaca je zaporna; Presence filter potlaca vysoke kmitocty a Resonance filter nizke kmitocty priamo na vystupe."
  },
  {
    id: "HEL 9. Kombo 010",
    oblast: "Kytarove kombo",
    podoblast: "Koncovy zosilnovac",
    pravda: "Elektronkovy koncovy zosilnovac ma vysoku vystupnu impedanciu, kym zataz reproduktora je nizka, preto je nutny vystupny transformator, ktory sam sposobuje skreslenie.",
    nepravda: "Elektronkovy koncovy zosilnovac ma nizku vystupnu impedanciu zhodnu s reproduktorom, preto vystupny transformator nie je potrebny."
  },
  {
    id: "HEL 9. Kombo 011",
    oblast: "Kytarove kombo",
    podoblast: "Elektronky",
    pravda: "12AX7/ECC83 je dvojita trioda pouzivana v predzosilnovacoch, kym 6L6, EL84 a EL34 su koncove elektronky.",
    nepravda: "12AX7/ECC83 je koncova pentoda, kym 6L6, EL84 a EL34 su predzosilnovacie triody."
  },
  // ===== Zvuk a vplyv blokov =====
  {
    id: "HEL 9. Zvuk 001",
    oblast: "Kytarove kombo",
    podoblast: "Zvuk elektronkoveho komba",
    pravda: "Nesymetricka prevodna charakteristika elektronky generuje parne aj neparne harmonicke, co je na poslech prijemnejsie.",
    nepravda: "Nesymetricka prevodna charakteristika elektronky generuje iba neparne harmonicke, co je na poslech ostrejsie."
  },
  {
    id: "HEL 9. Zvuk 002",
    oblast: "Kytarove kombo",
    podoblast: "Zvuk elektronkoveho komba",
    pravda: "Makke koleno prevodnej charakteristiky znamena, ze vyssim harmonickym rychlejsie klesa amplituda, takze skreslenie je menej ostre.",
    nepravda: "Makke koleno prevodnej charakteristiky znamena, ze vyssim harmonickym amplituda rastie, takze skreslenie je ostrejsie."
  },
  {
    id: "HEL 9. Zvuk 003",
    oblast: "Kytarove kombo",
    podoblast: "Zvuk elektronkoveho komba",
    pravda: "Elektronka je nelinearna aj v okoli pracovneho bodu, takze generuje harmonicke aj pre male amplitudy; zmena predpätia meni pomer harmonickych zloziek.",
    nepravda: "Elektronka je linearna v okoli pracovneho bodu, takze pre male amplitudy negeneruje ziadne harmonicke a predpätie nic nemeni."
  },
  {
    id: "HEL 9. Zvuk 004",
    oblast: "Kytarove kombo",
    podoblast: "Ozvucnica",
    pravda: "Pre kytarove komba sa pouziva otvorena (poluzavreta) ozvucnica; na nizkych kmitoctoch sa reproduktor sprava ako vsesmerovy zdroj a moze vzniknut akusticky skrat.",
    nepravda: "Pre kytarove komba sa pouziva uzavreta ozvucnica, takze na nizkych kmitoctoch nikdy nemoze vzniknut akusticky skrat."
  },
  // ===== Hybridne kombo a modelovanie =====
  {
    id: "HEL 9. Model 001",
    oblast: "Kytarove kombo",
    podoblast: "Hybridne kombo",
    pravda: "Hybridne kombo ma digitalny predzosilnovac, tone stack a efektovy procesor, ale analogovy koncovy zosilnovac (napr. Vox Valvetronix, Line6 Spider).",
    nepravda: "Hybridne kombo ma plne analogovy signalovy retazec a digitalny je iba napajaci zdroj."
  },
  {
    id: "HEL 9. Model 002",
    oblast: "Kytarove kombo",
    podoblast: "Digitalne modelovanie",
    pravda: "Black-box model vychadza len z vonkajsieho popisu systemu (napr. impulzovej odozvy) a nedokaze simulovat dynamicke zmeny spravania.",
    nepravda: "Black-box model vychadza z vnutornej topologie obvodu a presne simuluje aj dynamicke zmeny spravania."
  },
  {
    id: "HEL 9. Model 003",
    oblast: "Kytarove kombo",
    podoblast: "Digitalne modelovanie",
    pravda: "White-box model vychadza z vnutorneho popisu (diferencialne rovnice z topologie obvodu), je vypoctovo narocny, ale modeluje aj dynamicke zmeny.",
    nepravda: "White-box model vychadza len z vonkajsieho popisu, je vypoctovo nenarocny a dynamicke zmeny ignoruje."
  },
  {
    id: "HEL 9. Model 004",
    oblast: "Kytarove kombo",
    podoblast: "Digitalne modelovanie",
    pravda: "Gray-box model je kompromis: bloky zosilnovaca sa modeluju ako black-box, parametre sa hladaju empiricky alebo optimalizaciou (aj neuronovymi sietami).",
    nepravda: "Gray-box model je cisto analogova kopia obvodu bez akejkolvek optimalizacie parametrov."
  },
  {
    id: "HEL 9. Model 005",
    oblast: "Kytarove kombo",
    podoblast: "Digitalne modelovanie",
    pravda: "Pre simulaciu elektronkovych zosilnovacov sa pouziva polynom 3. radu pre triodu a polynom 5. radu pre pentodu.",
    nepravda: "Pre simulaciu elektronkovych zosilnovacov sa pouziva polynom 5. radu pre triodu a polynom 3. radu pre pentodu."
  },
  // ===== Kytarove efekty =====
  {
    id: "HEL 9. Efekty 001",
    oblast: "Kytarove kombo",
    podoblast: "Kytarove efekty",
    pravda: "Distortion je symetricke/nesymetricke tvrde orezanie signalu, kym Overdrive a Saturator su makke orezanie signalu.",
    nepravda: "Distortion je makke orezanie signalu, kym Overdrive a Saturator su tvrde orezanie signalu."
  },
  {
    id: "HEL 9. Efekty 002",
    oblast: "Kytarove kombo",
    podoblast: "Looper",
    pravda: "Looper je sampler, ktory nahrava kratke frazy a nasledne ich prehrava v slucke, pricom umoznuje vrstvenie viacerych fraz.",
    nepravda: "Looper je oscilator, ktory generuje kratke frazy zo zabudovanej ROM bez moznosti vrstvenia."
  },

  {
    id: "HEL 9. Snimace 001",
    oblast: "Kytarove kombo",
    podoblast: "Snimace",
    pravda: "Humbucker tvoria dve cievky na spolocnom jadre zapojene proti sebe, takze nezadane magneticke ruchy sa vyrusia a vystupne napatie je vyssie.",
    nepravda: "Humbucker tvori jedna cievka, takze ma znacny brum a nizsie vystupne napatie nez single coil."
  }
];

// ============ Hudobne zvukove efekty a vokoder (HEL_10) ============
const helSkuska10EfektyData = [
  // ===== Klasifikacia a zoznam efektov =====
  {
    id: "HEL 10. Klas 001",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Klasifikacia",
    pravda: "Zvukove efekty mozno klasifikovat podla ucelu, typickeho pouzitia, zmeny subjektivneho vnemu (hlasitost, vyska, cas, farba, priestor) a podla spracovania (casova/kmitoctova oblast).",
    nepravda: "Zvukove efekty mozno klasifikovat iba podla vyrobcu a roku uvedenia na trh."
  },
  {
    id: "HEL 10. Klas 002",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Efekty v syntezatoroch",
    pravda: "Efektova jednotka syntezatora ma typicky 4 jednotky: delay fx, modulation fx, ekvalizer a variation.",
    nepravda: "Efektova jednotka syntezatora ma typicky jedinu jednotku, ktora robi sucasne vsetky efekty."
  },
  {
    id: "HEL 10. Trans 001",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Transformacie",
    pravda: "Translacia (posun) v casovej osi dava echo, v kmitoctovej osi amplitudovu modulaciu SSB-SC a v amplitudovej osi pricitanie jednosmernej zlozky.",
    nepravda: "Translacia (posun) v casovej osi dava pitch shift, v kmitoctovej osi echo a v amplitudovej osi time stretching."
  },
  {
    id: "HEL 10. Trans 002",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Transformacie",
    pravda: "Dynamicka translacia v casovej osi dava chorus, phaser a flanger.",
    nepravda: "Dynamicka translacia v casovej osi dava kompresor, limiter a sumovu branu."
  },
  {
    id: "HEL 10. Trans 003",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Transformacie",
    pravda: "Filtracia/modulacia v melodickej rovine dava vibrato, v dynamickej rovine tremolo a v harmonickej rovine kmitoctovu filtraciu (ekvalizery).",
    nepravda: "Filtracia/modulacia v melodickej rovine dava tremolo, v dynamickej rovine vibrato a v harmonickej rovine echo."
  },
  // ===== Dynamicky riadene efekty =====
  {
    id: "HEL 10. Dyn 001",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Staticke vs dynamicke riadenie",
    pravda: "Pri dynamicky riadenom efekte sa hodnota parametra meni automaticky riadiacim obvodom (LFO, sledovac obalky EF, generator obalky EG); uzivatel nastavuje len parametre tohto obvodu.",
    nepravda: "Pri dynamicky riadenom efekte nastavuje hodnotu parametra priamo uzivatel rucne pomocou ovladacieho prvku."
  },
  {
    id: "HEL 10. Dyn 002",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Delay linka",
    pravda: "Pri efektoch s dynamicky riadenou zpozdovacou linkou je okamzite zpozdenie riadene LFO; premenne zpozdenie sa digitalne realizuje zmenou pozicie citania v kruhovej pamati.",
    nepravda: "Pri efektoch s dynamicky riadenou zpozdovacou linkou je zpozdenie konstantne a realizuje sa pevnym poctom vzoriek bez LFO."
  },
  {
    id: "HEL 10. Dyn 003",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Delay linka",
    pravda: "Kedze okamzite zpozdenie casto nezodpoveda celociselnemu nasobku vzoriek, treba interpolovat (susedny vzorek, linearna, polynomialna alebo FIR interpolacia).",
    nepravda: "Okamzite zpozdenie vzdy zodpoveda celociselnemu nasobku vzoriek, takze interpolacia nie je nikdy potrebna."
  },
  {
    id: "HEL 10. Dyn 004",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Leslie a Doppler",
    pravda: "Efekt Leslie (rotacne reproduktory) vyuziva Dopplerov jav; digitalne sa realizuje dvoma zpozdovacimi linkami s premennym zpozdenim riadenym harmonickym LFO.",
    nepravda: "Efekt Leslie vyuziva nelinearne skreslenie elektronky a digitalne sa realizuje jedinou pevnou zpozdovacou linkou."
  },
  // ===== Vokoder =====
  {
    id: "HEL 10. Voc 001",
    oblast: "Vokoder",
    podoblast: "Princip",
    pravda: "Vocoder (VOice CODER) je hlasovy kodek na analyzu a syntezu ludskeho hlasu; vynasiel ho 1938 Homer Dudley v Bell Labs.",
    nepravda: "Vocoder (VOice CODER) je typ zpozdovacej linky na tvorbu echa; vynasli ho az pri digitalnych efektoch po roku 2000."
  },
  {
    id: "HEL 10. Voc 002",
    oblast: "Vokoder",
    podoblast: "Kanalovy vocoder",
    pravda: "Kanalovy vocoder prenasa iba spektralnu obalku signalu a vychadza z rozdelenia hlasoveho ustroja na budic+oscilator (zdroj) a rezonator (filter).",
    nepravda: "Kanalovy vocoder prenasa cely casovy priebeh signalu a nerozlisuje medzi zdrojom a rezonatorom."
  },
  {
    id: "HEL 10. Voc 003",
    oblast: "Vokoder",
    podoblast: "Kanalovy vocoder",
    pravda: "Spektralna obalka zodpoveda prenosu rezonatora; metody jej separacie su banka filtrov, linearna predikcia (LPC) a obmedzenie koeficientov realneho kepstra.",
    nepravda: "Spektralna obalka zodpoveda prenosu zdroja; jedinou metodou jej separacie je priame meranie fazy vstupneho signalu."
  },
  {
    id: "HEL 10. Voc 004",
    oblast: "Vokoder",
    podoblast: "Separacia LPC",
    pravda: "Pri linearnej predikcii filter modeluje iba rezonancie (maxima prenosovej funkcie), takze prenosova funkcia ma iba poly; koeficienty sa pocitaju z autokorelacie segmentu.",
    nepravda: "Pri linearnej predikcii filter modeluje iba minima prenosovej funkcie, takze prenosova funkcia ma iba nuly bez polov."
  },
  {
    id: "HEL 10. Voc 005",
    oblast: "Vokoder",
    podoblast: "Separacia banka filtrov",
    pravda: "Pri separacii obalky bankou filtrov sa signal prefiltruje pasmovymi priepustami a pocita sa efektivna hodnota (druha mocnina, integracny clanok, odmocnina).",
    nepravda: "Pri separacii obalky bankou filtrov sa signal iba zosilni a obalka sa odcita ako jednosmerna zlozka."
  },
  {
    id: "HEL 10. Voc 006",
    oblast: "Vokoder",
    podoblast: "Vyuzitie",
    pravda: "Vyuzitie kanaloveho vocoderu: krizova synteza (obalka na zdroj ineho nastroja), formantova synteza (modelovanie vokalneho traktu), zmena vysky bez zmeny dlzky a spektralna interpolacia.",
    nepravda: "Vyuzitie kanaloveho vocoderu je obmedzene iba na pridanie dozvuku a nemoze menit vysku ani farbu tonu."
  },
  {
    id: "HEL 10. Voc 007",
    oblast: "Vokoder",
    podoblast: "Formantova synteza",
    pravda: "Pri formantovej synteze su znele zvuky tvorene harmonickym signalom, neznele sumom a vokalny trakt je modelovany filtrom (najcastejsie s krizovou strukturou).",
    nepravda: "Pri formantovej synteze su znele zvuky tvorene sumom a neznele harmonickym signalom, vokalny trakt sa nemodeluje."
  },
  {
    id: "HEL 10. Voc 008",
    oblast: "Vokoder",
    podoblast: "Fazovy vocoder",
    pravda: "Fazovy vocoder transformuje casovu aj kmitoctovu domenu signalu pomocou informacie o faze; pracuje v krokoch analyza - transformacia - synteza (FFT/IFFT, overlap-add).",
    nepravda: "Fazovy vocoder pracuje iba v casovej oblasti a informaciu o faze vobec nevyuziva."
  },
  {
    id: "HEL 10. Voc 009",
    oblast: "Vokoder",
    podoblast: "Fazovy vocoder",
    pravda: "Efekty fazoveho vocoderu su napr. robotizacia (vynulovanie fazy), sept (znahodnenie modulov), zmena dlzky a vysky signalu a morfing medzi zvukmi.",
    nepravda: "Fazovy vocoder umoznuje iba zosilnenie signalu a nedokaze menit dlzku, vysku ani robit morfing."
  },
  // ===== Spektralne metody =====
  {
    id: "HEL 10. Spek 001",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Spektralne metody",
    pravda: "Spektralna transformacia ma tri kroky: spektralna analyza povodneho signalu, transformacia jeho spektralnych vlastnosti a spätna rekonstrukcia noveho signalu.",
    nepravda: "Spektralna transformacia ma jediny krok: priame nasobenie casoveho priebehu konstantou."
  },
  {
    id: "HEL 10. Spek 002",
    oblast: "Hudobne zvukove efekty",
    podoblast: "Spektralne metody",
    pravda: "Spektralne modely su STFT, sinusovy a sinusovy s reziduom (kombinacia sinusoveho a STFT).",
    nepravda: "Spektralne modely su iba STFT; sinusovy model ani reziduum sa v praxi nepouzivaju."
  }
];

function mapujKytaraEfekty(data, prezentacia, prefix) {
  return data.map((polozka) => ({
    id: polozka.id,
    tema: `${prefix} ${polozka.oblast} - ${polozka.podoblast}`,
    typ: "jedna",
    format: "crack",
    uroven: "tazka",
    otazka: polozka.pravda,
    moznosti: ["z", "x"],
    spravne: [0],
    vysvetlenie: `Spravny statement: ${polozka.pravda}`,
    prezentacia,
    subtema: `${polozka.oblast} / ${polozka.podoblast}`,
    crackPair: {
      pravda: polozka.pravda,
      nepravda: polozka.nepravda
    }
  }));
}

helOtazky.push(
  ...mapujKytaraEfekty(helSkuska9KytaraData, "HEL Skuska 9", "HEL 9."),
  ...mapujKytaraEfekty(helSkuska10EfektyData, "HEL Skuska 10", "HEL 10.")
);

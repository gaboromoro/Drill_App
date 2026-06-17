// OBHAJOBA - okruh 7: Real-time prehravanie zvuku cez AudioWorklet (Web Audio API).
// Rozsirenie audio appletu: z modelu "predpocitaj cely buffer a prehraj" na "generuj vzorky v callbacku".
// 31 statementov v 7 blokoch; kazdy ma DVE nepravdy - kazda flipuje inu dolezitu vec (smer, cislo, mechanizmus, pojem).
// Zameranie: AudioWorklet v OOP podobe - trieda je POVINNY obal, vnutri bezia bezne funkcie a slucka.
// Pripaja sa do existujuceho predmetu "obhajoba" (obhajobaOtazky), preto sa MUSI nacitat AZ PO obhajoba-crack.js.

const obhajobaWorkletCrackData = [
  // ============================================================
  // BLOK A: Princip real-time
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Princip 001",
    oblast: "Princip real-time",
    podoblast: "Pull model",
    pravda: "Real-time audio funguje ako pull model: zvukova karta si vzorky pyta sama a opakovane vola tvoj callback, ktory ich doplna; ty neurcujes, kedy sa prehra dalsi blok.",
    nepravda: "Real-time audio funguje ako push model: ty sam volas callback vtedy, kedy chces poslat dalsie vzorky zvukovej karte, a karta len pasivne caka, kym jej ich dodas.",
    nepravda2: "Real-time audio funguje ako pull model: zvukova karta si vzorky pyta sama, ale tvoj callback dostane naraz cely signal a vrati ho jedinym volanim."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Princip 002",
    oblast: "Princip real-time",
    podoblast: "Render quantum",
    pravda: "AudioWorklet spracuva zvuk po blokoch s pevnou dlzkou 128 vzoriek (render quantum); callback process() sa vola priblizne kazdych 128/fs sekund.",
    nepravda: "AudioWorklet spracuva zvuk po blokoch s pevnou dlzkou 256 vzoriek (render quantum); callback process() sa vola priblizne kazdych 256/fs sekund.",
    nepravda2: "AudioWorklet spracuva zvuk po blokoch, ktorych dlzka sa nahodne meni blok od bloku; callback process() sa preto vola v nepravidelnych intervaloch."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Princip 003",
    oblast: "Princip real-time",
    podoblast: "Deadline",
    pravda: "Naplnenie bloku ma tvrdy deadline: blok musi byt hotovy skor, nez dohra predchadzajuci, inak vznikne underrun - vypadok zvuku (lupnutie az prerusenie).",
    nepravda: "Naplnenie bloku ma len slaby deadline: ak ho nestihnes, prehravac jednoducho pocka a plynulo pokracuje bez akehokolvek vypadku zvuku.",
    nepravda2: "Naplnenie bloku ma tvrdy deadline: ak ho nestihnes, zostavajuce vzorky sa preskocia a zvuk sa zrychli (zvysi sa vyska tonu), ale bez poculelneho vypadku."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Princip 004",
    oblast: "Princip real-time",
    podoblast: "Audio vlakno",
    pravda: "Procesor bezi na samostatnom audio vlakne s vysokou prioritou, oddelenom od hlavneho (UI) vlakna; preto plynule prehravanie nerusi vykreslovanie ani spomaleny UI kod.",
    nepravda: "Procesor bezi na hlavnom (UI) vlakne spolu s vykreslovanim a obsluhou udalosti; preto ho pomaly UI kod moze prerusit a sposobit vypadky zvuku.",
    nepravda2: "Procesor bezi na samostatnom audio vlakne, ale s nizsou prioritou nez UI vlakno; preto ho vykreslovanie kedykolvek odsunie a sposobi vypadky."
  },

  // ============================================================
  // BLOK B: Offline vs real-time
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Offline 001",
    oblast: "Offline vs real-time",
    podoblast: "AudioBufferSourceNode",
    pravda: "Povodny pristup (AudioBufferSourceNode) prehra cely predpocitany buffer naraz; po start() je jeho obsah fixny snapshot a node je jednorazovy - na dalsie prehratie treba vytvorit novy.",
    nepravda: "Povodny pristup (AudioBufferSourceNode) prehra cely predpocitany buffer naraz; jeho obsah vsak mozes menit aj pocas prehravania a zmenu okamzite pocut.",
    nepravda2: "Povodny pristup (AudioBufferSourceNode) prehra cely predpocitany buffer naraz; ten isty node mozes opakovane spustat cez start() viackrat za sebou."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Offline 002",
    oblast: "Offline vs real-time",
    podoblast: "Snapshot bufra",
    pravda: "V povodnom kode posun slidera pocas prehravania nepocut, lebo prehravany buffer je kopia (snapshot) dat z casu spustenia; zmenu pocut az po stop a novom start.",
    nepravda: "V povodnom kode posun slidera pocas prehravania nepocut, lebo Web Audio API prepocitava parametre len raz za sekundu; zmenu pocut az s jednosekundovym oneskorenim.",
    nepravda2: "V povodnom kode posun slidera pocas prehravania pocut okamzite, lebo node si data automaticky cita zo zdrojoveho pola pri kazdej vzorke."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Offline 003",
    oblast: "Offline vs real-time",
    podoblast: "Generovanie za behu",
    pravda: "Pri real-time generovani neexistuje predpocitane pole celeho signalu; vzorky vznikaju az v callbacku z prave aktualnych hodnot parametrov, preto je zmenu pocut o par milisekund.",
    nepravda: "Pri real-time generovani sa najprv predpocita cele pole signalu a callback z neho uz len cita; preto zmena parametrov ovplyvni az dalsie spustenie.",
    nepravda2: "Pri real-time generovani vzorky vznikaju az v callbacku z aktualnych parametrov, ale zmena sa prejavi az o niekolko sekund kvoli velkemu predbufferovaniu."
  },

  // ============================================================
  // BLOK C: Architektura AudioWorklet
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Architektura 001",
    oblast: "Architektura AudioWorklet",
    podoblast: "Dva subory",
    pravda: "AudioWorklet ma dve casti: subor procesora (samostatny .js, bezi na audio vlakne) a hlavny skript (bezi na UI vlakne a vytvara uzol); su to oddelene prostredia.",
    nepravda: "AudioWorklet sa cely pise do jedneho suboru spolu s ostatnym kodom stranky; ziadny samostatny subor procesora netreba.",
    nepravda2: "AudioWorklet ma dve casti, ale subor procesora aj hlavny skript bezia na rovnakom hlavnom (UI) vlakne; oddelene su len nazvom."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Architektura 002",
    oblast: "Architektura AudioWorklet",
    podoblast: "addModule (async)",
    pravda: "Subor procesora sa nacita cez audioCtx.audioWorklet.addModule('procesor.js'); je to asynchronne (vracia Promise), takze uzol smies vytvorit az po jeho dokonceni (await).",
    nepravda: "Subor procesora sa nacita cez audioCtx.audioWorklet.addModule('procesor.js'); je to synchronne volanie, takze uzol mozes vytvorit hned na dalsom riadku bez cakania.",
    nepravda2: "Subor procesora sa nacita cez audioCtx.audioWorklet.addModule('procesor.js'); uzol vsak musis vytvorit este pred volanim addModule, inak sa modul nezaregistruje."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Architektura 003",
    oblast: "Architektura AudioWorklet",
    podoblast: "Trieda a registerProcessor",
    pravda: "Procesor je trieda, ktora dedi z AudioWorkletProcessor; na konci suboru ju zaregistrujes volanim registerProcessor('meno', Trieda).",
    nepravda: "Procesor je trieda, ktora dedi z AudioWorkletNode; na konci suboru ju zaregistrujes volanim registerProcessor('meno', Trieda).",
    nepravda2: "Procesor je trieda, ktora dedi z AudioWorkletProcessor; zaregistrujes ju vsak az v hlavnom skripte volanim registerProcessor('meno', Trieda)."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Architektura 004",
    oblast: "Architektura AudioWorklet",
    podoblast: "AudioWorkletNode",
    pravda: "V hlavnom skripte vytvoris uzol cez new AudioWorkletNode(audioCtx, 'meno'), kde 'meno' musi presne sediet s menom z registerProcessor; potom uzol pripojis cez .connect(audioCtx.destination).",
    nepravda: "V hlavnom skripte vytvoris uzol cez new AudioWorkletNode(audioCtx, 'meno'), pricom 'meno' je lubovolny popisok a nemusi sediet s menom z registerProcessor.",
    nepravda2: "V hlavnom skripte staci zavolat registerProcessor a uzol sa vytvori aj pripoji na vystup sam; new AudioWorkletNode ani .connect() volat netreba."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Architektura 005",
    oblast: "Architektura AudioWorklet",
    podoblast: "Izolovany scope",
    pravda: "Subor procesora ma izolovany rozsah: nevidi DOM ani funkcie z hlavneho .js; pomocne funkcie (generatory, kvantizator) si musis skopirovat priamo do suboru procesora.",
    nepravda: "Subor procesora ma plny pristup k DOM aj k vsetkym funkciam hlavneho .js; mozes v nom priamo citat napr. document.getElementById.",
    nepravda2: "Subor procesora nevidi DOM, ale globalne funkcie definovane v hlavnom skripte automaticky zdiela, takze ich kopirovat netreba."
  },

  // ============================================================
  // BLOK D: process() callback
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Process 001",
    oblast: "process() callback",
    podoblast: "Signatura process()",
    pravda: "Trieda procesora prepisuje metodu process(inputs, outputs, parameters); prave v nej generujes alebo spracuvas vzorky kazdeho bloku.",
    nepravda: "Trieda procesora prepisuje metodu onaudioprocess(inputs, outputs, parameters); prave v nej generujes alebo spracuvas vzorky kazdeho bloku.",
    nepravda2: "Trieda procesora prepisuje metodu process(outputs, inputs, parameters); prvy argument su teda vystupy a druhy vstupy."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Process 002",
    oblast: "process() callback",
    podoblast: "outputs[0][0]",
    pravda: "Vystup zapisujes do outputs[0][0] - prvy vystup, prvy kanal; je to Float32Array so 128 vzorkami, ktore v cykle naplnis.",
    nepravda: "Vystup zapisujes do outputs[0][0] - je to prva vzorka prveho vystupu; cely blok teda naplnis tym, ze do outputs[0] postupne priradzujes jednotlive cisla.",
    nepravda2: "Vystup zapisujes do outputs[0][0] - prvy vystup, prvy kanal; je to Float32Array s 1024 vzorkami, ktore v cykle naplnis."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Process 003",
    oblast: "process() callback",
    podoblast: "Navratova hodnota",
    pravda: "process() vracia boolean: return true udrzi procesor nazive a vola sa dalej, return false dovoli systemu uzol ukoncit a uvolnit, ked uz netreba produkovat zvuk.",
    nepravda: "process() vracia boolean: return true uzol okamzite ukonci a uvolni, kym return false ho udrzi nazive a vola sa dalej.",
    nepravda2: "process() nevracia nic (void); o tom, ci sa procesor vola dalej, rozhoduje vylucne to, ci je uzol pripojeny cez connect()."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Process 004",
    oblast: "process() callback",
    podoblast: "Stav v this",
    pravda: "Stav, ktory ma prezit medzi blokmi (napr. faza oscilatora), uchovavas v instancnej premennej this.phase, lebo process() sa opakovane vola na tej istej instancii procesora.",
    nepravda: "Stav, ktory ma prezit medzi blokmi, staci ulozit do lokalnej premennej vnutri process(); ta si svoju hodnotu medzi volaniami sama zachova.",
    nepravda2: "Stav uchovavas v instancnej premennej this.phase, no kazde volanie process() bezi na novej instancii procesora, takze this sa medzi blokmi resetuje."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Process 005",
    oblast: "process() callback",
    podoblast: "constructor a super()",
    pravda: "Pociatocny stav (napr. this.phase = 0) nastavis v konstruktore triedy, ktory musi ako prve zavolat super().",
    nepravda: "Pociatocny stav nastavis v konstruktore triedy; volanie super() je nepovinne a pokojne ho mozes vynechat.",
    nepravda2: "Pociatocny stav (this.phase = 0) musis nastavit na zaciatku metody process(); v konstruktore sa instancne premenne procesora nastavit nedaju."
  },

  // ============================================================
  // BLOK E: Parametre a komunikacia
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Parametre 001",
    oblast: "Parametre a komunikacia",
    podoblast: "parameterDescriptors",
    pravda: "Plynule cisla (amplituda, frekvencia) zavedies ako AudioParam cez static get parameterDescriptors(); da sa nimi hybat bez lupania pomocou casovych ramp.",
    nepravda: "Plynule cisla zavedies ako AudioParam cez metodu this.port.addParam() volanu v konstruktore; az potom sa daju automatizovat rampami.",
    nepravda2: "Plynule cisla posielas cez port.postMessage(); parameterDescriptors naopak sluzi len na diskretne prepinace ako typ signalu."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Parametre 002",
    oblast: "Parametre a komunikacia",
    podoblast: "a-rate vs k-rate",
    pravda: "V process() pride parameter ako Float32Array: pri a-rate ma dlzku 128 (hodnota pre kazdu vzorku), pri k-rate dlzku 1 (jedna konstanta na cely blok).",
    nepravda: "V process() pride parameter ako Float32Array: pri a-rate ma dlzku 1 (jedna konstanta na cely blok), pri k-rate dlzku 128 (hodnota pre kazdu vzorku).",
    nepravda2: "V process() pride kazdy parameter vzdy ako jedno cislo (nie pole), rovnake pre cely blok; rozdiel medzi a-rate a k-rate je len v rychlosti UI."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Parametre 003",
    oblast: "Parametre a komunikacia",
    podoblast: "port.postMessage",
    pravda: "Diskretne volby (typ signalu, typ ditheru) posielas z hlavneho skriptu cez node.port.postMessage(...); procesor ich prijima v this.port.onmessage.",
    nepravda: "Diskretne volby posielas z procesora cez this.port.postMessage(...); hlavny skript ich prijima v node.port.onmessage.",
    nepravda2: "Diskretne volby (typ signalu, typ ditheru) posielas tiez ako AudioParam cez node.parameters.get(...).value; port.postMessage sluzi len na ladiace logy."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Parametre 004",
    oblast: "Parametre a komunikacia",
    podoblast: "Nastavenie z hlavneho skriptu",
    pravda: "Z hlavneho skriptu citas a nastavujes AudioParam cez node.parameters.get('amplitude'); priame nastavenie je .value = x, plynula zmena .linearRampToValueAtTime(x, cas).",
    nepravda: "Z hlavneho skriptu citas a nastavujes AudioParam priamo cez node.amplitude = x; metoda parameters.get() existuje len vnutri procesora.",
    nepravda2: "Z hlavneho skriptu nastavis AudioParam cez node.parameters.get('amplitude'); .value = x meni hodnotu plynulou rampou, kym .linearRampToValueAtTime(x, cas) ju zmeni skokovo."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Parametre 005",
    oblast: "Parametre a komunikacia",
    podoblast: "Ziadny DOM v procesore",
    pravda: "Vnutri process() nemozes citat slider.value ani iny DOM, lebo procesor bezi na audio vlakne; aktualne hodnoty sa k nemu musia dostat cez AudioParam alebo port.",
    nepravda: "Vnutri process() mozes priamo citat slider.value cez document.getElementById, lebo procesor zdiela DOM s hlavnou strankou.",
    nepravda2: "Vnutri process() nemozes citat slider.value priamo; hodnotu vsak staci ulozit do globalnej premennej v hlavnom skripte a procesor ju odtial precita."
  },

  // ============================================================
  // BLOK F: Fazovy akumulator
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Faza 001",
    oblast: "Fazovy akumulator",
    podoblast: "Prirastok fazy",
    pravda: "Sinus generujes z priebeznej fazy: v kazdej vzorke pripocitas 2*Math.PI*f/sampleRate k this.phase a vystup je Math.sin(this.phase).",
    nepravda: "Sinus generujes z priebeznej fazy: v kazdej vzorke pripocitas 2*Math.PI*f*sampleRate k this.phase a vystup je Math.sin(this.phase).",
    nepravda2: "Sinus generujes z priebeznej fazy: 2*Math.PI*f/sampleRate pripocitas k this.phase len raz na zaciatku kazdeho bloku, takze vsetkych 128 vzoriek ma rovnaku fazu."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Faza 002",
    oblast: "Fazovy akumulator",
    podoblast: "Spojitost medzi blokmi",
    pravda: "Faza musi prezit medzi blokmi (drzis ju v this.phase); inak na hranici blokov vznikne nespojitost priebehu - poculelne lupnutie (klik).",
    nepravda: "Fazu mozes v kazdom bloku pocitat nanovo z lokalneho indexu vzorky (n od 0 do 127); na hranici blokov vdaka tomu ziadne lupnutie nevznika.",
    nepravda2: "Faza musi prezit medzi blokmi; ak ju vsak na hranici bloku vynulujes, priebeh ostane spojity, len sa nepatrne zmeni hlasitost."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Faza 003",
    oblast: "Fazovy akumulator",
    podoblast: "Wrap fazy",
    pravda: "Fazu wrapujes: ked this.phase >= 2*Math.PI, odpocitas 2*Math.PI; cislo tak ostane male a Math.sin presny aj po dlhom hrani.",
    nepravda: "Fazu wrapujes: ked this.phase >= Math.PI, odpocitas Math.PI; cislo tak ostane male a Math.sin presny aj po dlhom hrani.",
    nepravda2: "Wrap fazy netreba: this.phase moze neobmedzene rast a Math.sin z lubovolne velkeho cisla vrati rovnako presnu hodnotu bez straty presnosti."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Faza 004",
    oblast: "Fazovy akumulator",
    podoblast: "sampleRate",
    pravda: "Vnutri procesora je vzorkovacia frekvencia dostupna ako globalna premenna sampleRate, takze ju netreba hardcodovat na 44100; pre vsetky bloky je rovnaka.",
    nepravda: "Vnutri procesora vzorkovacia frekvencia nijako dostupna nie je, preto si ju musis natvrdo napisat ako 44100, inak by frekvencia tonu nesedela.",
    nepravda2: "Vnutri procesora je vzorkovacia frekvencia dostupna ako sampleRate, jej hodnota sa vsak meni blok od bloku, preto ju treba citat na zaciatku kazdeho process()."
  },

  // ============================================================
  // BLOK G: Real-time bezpecnost a uskalia
  // ============================================================
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Bezpecnost 001",
    oblast: "Real-time bezpecnost",
    podoblast: "Bez alokacie",
    pravda: "V process() nealokuj pamat (ziadne new Float32Array ani vytvaranie objektov v kazdom volani); pomocne buffery priprav raz v konstruktore, inak hrozi zasek GC a vypadok.",
    nepravda: "V process() mozes pokojne v kazdom volani vytvarat nove polia a objekty; garbage collector bezi mimo audio vlakna, takze prehravanie to neovplyvni.",
    nepravda2: "V process() nealokuj pamat; pomocne buffery preto alokuj na zaciatku kazdeho volania process(), aby boli vzdy cerstve."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Bezpecnost 002",
    oblast: "Real-time bezpecnost",
    podoblast: "Bez console.log",
    pravda: "V process() sa vyhni console.log a akymkolvek blokujucim operaciam; zdrzia callback, presiahnu deadline bloku a sposobia poculelne vypadky.",
    nepravda: "V process() mozes bez obav logovat cez console.log aj na kazdu vzorku; logovanie bezi asynchronne a callback nijako nezdrzi.",
    nepravda2: "V process() sa vyhni len pomalym matematickym funkciam ako Math.sin a Math.random; console.log a cakacie slucky su naopak v poriadku."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Bezpecnost 003",
    oblast: "Real-time bezpecnost",
    podoblast: "Zipper noise",
    pravda: "Skokova zmena amplitudy (alebo bitovej hlbky) medzi blokmi sposobuje cvakanie - zipper noise; riesi sa rampou parametra alebo postupnym vyhladenim hodnoty.",
    nepravda: "Cvakanie - zipper noise - vznika len pri zmene frekvencie, nikdy nie pri zmene amplitudy; amplitudu preto mozes menit skokovo bez nasledkov.",
    nepravda2: "Skokova zmena amplitudy sposobuje zipper noise; riesi sa tym, ze parameter menis este vacsimi a rychlejsimi skokmi, aby zmena trvala kratsie."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Bezpecnost 004",
    oblast: "Real-time bezpecnost",
    podoblast: "Autoplay / resume",
    pravda: "AudioContext sa kvoli autoplay politike smie rozbehnut az po geste pouzivatela; preto sa audioCtx.resume() (alebo jeho vytvorenie) viaze na klik ci stlacenie klavesy.",
    nepravda: "AudioContext sa rozbehne sam hned pri nacitani stranky bez akehokolvek gesta; volat resume() po geste pouzivatela netreba.",
    nepravda2: "AudioContext sa smie rozbehnut az po geste, ale ako gesto staci pohyb mysou nad strankou; klik ani stlacenie klavesy potrebne nie su."
  },
  {
    okruh: "7. Real-time prehravanie (AudioWorklet)",
    id: "OBH 7. Bezpecnost 005",
    oblast: "Real-time bezpecnost",
    podoblast: "Latencia vs blok",
    pravda: "Latencia zhruba zodpoveda velkosti bloku delenej fs; mensi blok znamena nizsiu latenciu, ale vyssie riziko vypadku, pricom AudioWorklet ma blok pevne 128 vzoriek.",
    nepravda: "Latencia zhruba zodpoveda velkosti bloku delenej fs; vacsi blok znamena nizsiu latenciu aj nizsie riziko vypadku, takze sa vzdy oplati co najvacsi.",
    nepravda2: "Latencia zhruba zodpoveda fs delenej velkostou bloku; mensi blok preto znamena vyssiu latenciu, ale nizsie riziko vypadku."
  }
];

// Pripojenie do predmetu "obhajoba". MUSI sa nacitat az po obhajoba-crack.js (kde vznika obhajobaOtazky).
if (typeof obhajobaOtazky === "undefined") {
  console.error("obhajoba-worklet-crack.js: obhajobaOtazky neexistuje - nacitaj tento subor AZ PO data/obhajoba-crack.js v index.html.");
} else {
  obhajobaOtazky.push(
    ...obhajobaWorkletCrackData.map((polozka) => ({
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
      slideRef: "AudioWorklet (Web Audio API)",
      crackPair: {
        pravda: polozka.pravda,
        nepravda: polozka.nepravda,
        nepravda2: polozka.nepravda2
      }
    }))
  );
}

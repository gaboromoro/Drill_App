let poradieOtazok = [];
let aktualnyIndex = 0;
let skore = 0;
let pocetVyhodnotenychOtazok = 0;
let vyhodnotene = false;
let aktualnyPredmet = "test";
let zakladneOtazkyPredmetu = [];
let aktualneOtazky = [];
let aktualneMoznosti = [];
let stavStlpca = 0;
let seriaSpravnych = 0;
let najvyssiaSeriaSpravnych = 0;
let casovacDalsejOtazky = null;
let casovacCrackTimeru = null;
let animaciaSpravnehoFlashu = null;
let casovacSpravnehoFlashu = null;
let casovacMegaStreaku = null;
let hlasitost = 0.5;
let pociatocnyPocetPoolu = 0;
let casZaciatkuPoolu = 0;
let cakaNaVyradenieOtazky = false;
let poolDokonceny = false;
let pouzivaTazkyPool = false;
let vybranaPrezentacia = "__vsetko";
let vybranePodokruhy = new Set();
let predoslyVysledok = null;
let zobrazujePredoslyVysledok = false;
let cakaNaSlowPotvrdenie = false;
let nahladAktualnejOtazky = null;
let aktualnaTema = "oranzova";
let aktualnyIndexCitatu = -1;
let urovenRychlehoRezimu = 0;
let citatZobrazeny = false;
let rytmickyEfekt = "default";
let zostavajuceRytmickeBeaty = 0;
let casovacRytmickychBeatov = null;
let casovacRytmickehoUkoncenia = null;
let pocetZlychOdpovediPreCitat = 0;
let mobilnyCrackModeZmenenyRucne = false;
const odstraneneOtazky = new Map();
const tazkeOtazky = new Map();
const hodnotaVsetko = "__vsetko";
const priestorSvg = "http://www.w3.org/2000/svg";
const zvukSpravne = new Audio("Audio-samples/correct/ESM_Simple_Google_Soundalike_Alert_20_Beep_Chirp_Notification_Synth_Electronic.wav");
const zvukSpravneStreak7 = new Audio("Audio-samples/correct/streak7x.wav");
const zvukSpravneStreak14 = new Audio("Audio-samples/correct/streak14x.wav");
const zvukZle = new Audio("Audio-samples/wrong/FF_CF_foley_fart_green.wav");
const zvukZle8x = new Audio("Audio-samples/wrong/ESM_Wrong_Answer_or_Negative_Game_Hit_2_Sound_FX_Arcade_Casino_Kids_Mobile_App.wav");
const zvukZle15x = new Audio("Audio-samples/wrong/ESM_Retro_Game_Classic_Player_Death_1_8_Bit_Arcade_80s_Negative.wav");
const zvukDokonceniaPoolu = new Audio("Audio-samples/Complete/ESM_Ambient_Game_Objective_Complete_Simple_Run_1_Score_LevelUp_Bonus_Unlock.wav");
const zvukDokonceniaPooluChoir = new Audio("Audio-samples/Complete/ChoirBars_A.wav");
const zvukVyberuVolby = new Audio("Audio-samples/select/ESM_Perfect_Clean_App_Button_Click_2_Organic_Simple_Classic_Game_Click.wav");
const zvukCitatu = new Audio("Audio-samples/Holy/ESM_FX_achievements_rewards_swipe_choir_angelic_positive_03.wav");
const zvukyAplikacie = [zvukSpravne, zvukSpravneStreak7, zvukSpravneStreak14, zvukZle, zvukZle8x, zvukZle15x, zvukDokonceniaPoolu, zvukDokonceniaPooluChoir, zvukVyberuVolby, zvukCitatu];
let zvukovyKontext = null;
let audioRelaciaNastavena = false;
const buffreZvukov = new Map();
const normalizacneZosilneniaZvukov = new Map();
const cieloveRmsZvuku = 0.16;
let prednacitanieZvukov = null;

const prvokTema = document.getElementById("tema");
const prvokTypOtazky = document.getElementById("typOtazky");
const prvokOtazka = document.getElementById("otazka");
const prvokObrazokOtazky = document.getElementById("obrazokOtazky");
const prvokMediaOtazky = document.getElementById("mediaOtazky");
const prvokKod = document.getElementById("kod");
const prvokMoznosti = document.getElementById("moznosti");
const prvokVysledok = document.getElementById("vysledok");
const prvokPocitadlo = document.getElementById("pocitadloOtazok");
const prvokSkore = document.getElementById("skore");
const prvokVyplnStlpca = document.getElementById("vyplnStlpca");
const prvokVyplnCrackTimeru = document.getElementById("vyplnCrackTimeru");
const prvokCasovacZaplava = document.getElementById("casovacZaplava");
const prvokCasovacZaplavaObsah = document.getElementById("casovacZaplavaObsah");
const prvokPixelyStlpca = document.getElementById("pixelyStlpca");
const prvokStreakAktualny = document.getElementById("streakAktualny");
const prvokStreakNajlepsi = document.getElementById("streakNajlepsi");
const prvokPrepinacRezimu = document.getElementById("prepinacRezimu");
const prvokPanelNastaveni = document.getElementById("panelNastaveni");
const prvokVyberPrezentacie = document.getElementById("vyberPrezentacie");
const prvokZoznamPodokruhov = document.getElementById("zoznamPodokruhov");
const prvokPocetFiltra = document.getElementById("pocetFiltra");
const prvokSkupinaPoolov = document.getElementById("skupinaPoolov");
const prvokBlokOdstranenych = document.getElementById("blokOdstranenych");
const prvokZoznamOdstranenychOtazok = document.getElementById("zoznamOdstranenychOtazok");
const prvokBlokTazkychOtazok = document.getElementById("blokTazkychOtazok");
const prvokZoznamTazkychOtazok = document.getElementById("zoznamTazkychOtazok");
const prvokPocetTazkychOtazok = document.getElementById("pocetTazkychOtazok");
const prvokRezimTest = document.getElementById("rezimTest");
const prvokRezimKod = document.getElementById("rezimKod");
const prvokKodTema = document.getElementById("kodTema");
const prvokKodPocitadlo = document.getElementById("kodPocitadlo");
const prvokKodZadanie = document.getElementById("kodZadanie");
const prvokKodOdpoved = document.getElementById("kodOdpoved");
const prvokKodVysledok = document.getElementById("kodVysledok");
const prvokKodRiesenie = document.getElementById("kodRiesenie");
const prvokFlashEfekt = document.getElementById("flashEfekt");
const prvokStreakFlashCislo = document.getElementById("streakFlashCislo");
const prvokVideoOverlay = document.getElementById("videoOverlay");
const prvokVideoPrehravac = document.getElementById("videoPrehravac");
const blokyCitatu = [...document.querySelectorAll(".blok-citatu")];
const prvkyTextuCitatu = [...document.querySelectorAll(".text-citatu")];

const tlacidloMedzernik = document.getElementById("tlacidloMedzernik");
const tlacidloNastavenia = document.getElementById("tlacidloNastavenia");
const tlacidloPredoslyVysledok = document.getElementById("tlacidloPredoslyVysledok");
const tlacidloOdstranitOtazku = document.getElementById("tlacidloOdstranitOtazku");
const tlacidloPridatTazkuOtazku = document.getElementById("tlacidloPridatTazkuOtazku");
const tlacidloNeviem = document.getElementById("tlacidloNeviem");
const tlacidloSipkaVlavo = document.getElementById("tlacidloSipkaVlavo");
const tlacidloSipkaVpravo = document.getElementById("tlacidloSipkaVpravo");
const tlacidloVratitVsetkyOtazky = document.getElementById("tlacidloVratitVsetkyOtazky");
const tlacidloSpustitTazkyPool = document.getElementById("tlacidloSpustitTazkyPool");
const tlacidloVypnutTazkyPool = document.getElementById("tlacidloVypnutTazkyPool");
const tlacidloVycistitTazkyPool = document.getElementById("tlacidloVycistitTazkyPool");
const tlacidloPredmetPc2 = document.getElementById("tlacidloPredmetPc2");
const tlacidloPredmetCzs = document.getElementById("tlacidloPredmetCzs");
const tlacidloPredmetHel = document.getElementById("tlacidloPredmetHel");
const tlacidloPredmetVs2 = document.getElementById("tlacidloPredmetVs2");
const tlacidloPredmetAud = document.getElementById("tlacidloPredmetAud");
const tlacidloPredmetVet = document.getElementById("tlacidloPredmetVet");
const tlacidloPredmetTest = document.getElementById("tlacidloPredmetTest");
const tlacidloVsetkyPodokruhy = document.getElementById("tlacidloVsetkyPodokruhy");
const tlacidloZiadnePodokruhy = document.getElementById("tlacidloZiadnePodokruhy");
const tlacidloRezimTest = document.getElementById("tlacidloRezimTest");
const tlacidloRezimKod = document.getElementById("tlacidloRezimKod");
const tlacidloKodKontrola = document.getElementById("tlacidloKodKontrola");
const tlacidloKodDalsia = document.getElementById("tlacidloKodDalsia");
const tlacidloTemaOranzova = document.getElementById("tlacidloTemaOranzova");
const tlacidloTemaZlta = document.getElementById("tlacidloTemaZlta");
const tlacidloTemaSiva = document.getElementById("tlacidloTemaSiva");
const tlacidloTemaFialova = document.getElementById("tlacidloTemaFialova");
const tlacidloTemaTyrkysova = document.getElementById("tlacidloTemaTyrkysova");
const tlacidloTemaMentolova = document.getElementById("tlacidloTemaMentolova");
const tlacidloTemaTabula = document.getElementById("tlacidloTemaTabula");
const kriedaPlatno = document.getElementById("krieda-platno");
const posuvnikHlasitosti = document.getElementById("posuvnikHlasitosti");
const prepinacVypnutiaZvuku = document.getElementById("prepinacVypnutiaZvuku");
const prepinacCitatov = document.getElementById("prepinacCitatov");
const prepinacNahodnehoPoradia = document.getElementById("prepinacNahodnehoPoradia");
const prepinacDisplaySorting = document.getElementById("prepinacDisplaySorting");
const prepinacUcenia = document.getElementById("prepinacUcenia");
const prvokTextUcenia = document.getElementById("textUcenia");
const prvokHintUcenia = document.getElementById("hintUcenia");
const prepinacRychlehoRezimu = document.getElementById("prepinacRychlehoRezimu");
const prvokTextRychlehoRezimu = document.getElementById("textRychlehoRezimu");
const prvokHintRychlehoRezimu = document.getElementById("hintRychlehoRezimu");
const prepinacPrejdeniaPoolu = document.getElementById("prepinacPrejdeniaPoolu");
const prepinacMultipleChoice = document.getElementById("prepinacMultipleChoice");
const prepinacExamMode = document.getElementById("prepinacExamMode");
const prvokTextExamMode = document.getElementById("textExamMode");
const prepinacSlowMode = document.getElementById("prepinacSlowMode");
const riadokSlowMode = document.getElementById("riadokSlowMode");
const riadokMultipleChoice = document.getElementById("riadokMultipleChoice");
const riadokSpeedMode = document.getElementById("riadokSpeedMode");
const riadokExamMode = document.getElementById("riadokExamMode");
const riadokTimerMode = document.getElementById("riadokTimerMode");
const riadokMobileMode = document.getElementById("riadokMobileMode");
let examModeMini = false;
const prepinacCrackTimeru = document.getElementById("prepinacCrackTimeru");
const prepinacMobilnehoCrackModu = document.getElementById("prepinacMobilnehoCrackModu");
const klavesyMoznosti = ["1", "2", "3", "4", "5", "6"];
const trvanieCrackTimeru = 10000;
const rytmickeBpm = 160;
const pocetBeatovRytmickehoEfektu = 16;
const intervalRytmickehoBeatu = Math.round(60000 / rytmickeBpm);
const pocetStlpcovPixelov = 24;
const pocetRiadkovPixelov = 4;
const selektorVolitelnychPrvkov = "button, .moznost, select, input[type='checkbox'], input[type='radio'], input[type='range']";
const skusobneOtazky = Array.from({ length: 30 }, (_, index) => vytvorSkusobnuOtazku(index + 1));
let casovacPixelovStlpca = null;
let poradieKodovychUloh = [];
let aktualnyKodIndex = 0;
const casovaceEfektuTlacidiel = new WeakMap();

const katexDelimitery = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\[", right: "\\]", display: true },
  { left: "\\(", right: "\\)", display: false }
];

function nastavStatementText(prvok, text) {
  prvok.textContent = text;
  if (typeof window.renderMathInElement === "function") {
    try {
      window.renderMathInElement(prvok, {
        delimiters: katexDelimitery,
        throwOnError: false,
        errorColor: "#cc0000"
      });
    } catch (chyba) {
      // KaTeX nie je dostupny alebo zlyhal - text ostane ako plain text
    }
  }
}

function vykresliVysledokPredoslej(otazka, jeSpravne, fallbackText) {
  prvokVysledok.innerHTML = "";
  prvokVysledok.className = jeSpravne ? "vysledok ok" : "vysledok zle";

  if (otazka && otazka.crackPair) {
    const popisok = document.createElement("div");
    popisok.className = "vysledok-popisok";
    popisok.textContent = jeSpravne
      ? "Spravne. Spravna verzia statementu:"
      : "Nespravne. Spravna verzia statementu:";
    prvokVysledok.appendChild(popisok);

    const statement = document.createElement("div");
    statement.className = "vysledok-statement";
    prvokVysledok.appendChild(statement);
    nastavStatementText(statement, otazka.crackPair.pravda);
    return;
  }

  nastavStatementText(prvokVysledok, fallbackText || "");
}

// Rozdeli statement na tokeny: cele matematicke bloky ($...$, \(...\), ...) su
// atomicke, zvysok sa deli na slova a medzery. Vdaka tomu sa LaTeX nikdy nerozbije.
function tokenizujStatement(text) {
  const tokeny = [];
  const matematika = /\$\$[\s\S]*?\$\$|\$[^$]*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g;
  let posledny = 0;
  let zhoda;

  const pridajText = (kus) => {
    for (const cast of kus.split(/(\s+)/)) {
      if (cast === "") continue;
      const jeMedzera = /^\s+$/.test(cast);
      tokeny.push({ raw: cast, kluc: jeMedzera ? " " : cast, medzera: jeMedzera });
    }
  };

  while ((zhoda = matematika.exec(text)) !== null) {
    if (zhoda.index > posledny) pridajText(text.slice(posledny, zhoda.index));
    tokeny.push({ raw: zhoda[0], kluc: zhoda[0].replace(/\s+/g, ""), medzera: false });
    posledny = matematika.lastIndex;
  }
  if (posledny < text.length) pridajText(text.slice(posledny));
  return tokeny;
}

// Cez najdlhsiu spolocnu podpostupnost oznaci tokeny prveho (spravneho) statementu,
// ktore maju protejsok v druhom (zobrazenom) statemente. Neoznacene = rozdiely.
function spolocneTokeny(spravne, zobrazene) {
  const n = spravne.length;
  const m = zobrazene.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = spravne[i].kluc === zobrazene[j].kluc
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const spolocne = new Array(n).fill(false);
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (spravne[i].kluc === zobrazene[j].kluc) {
      spolocne[i] = true;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }
  return spolocne;
}

// Vlozi do prvku spravny statement a cerveno zvyrazni tokeny, ktore sa lisia od
// zobrazeneho statementu. Cely odlisny matematicky blok sa zvyrazni naraz.
function vlozZvyrazneneRozdiely(prvok, spravneText, zobrazeneText) {
  prvok.innerHTML = "";
  const spravne = tokenizujStatement(spravneText);
  const zobrazene = tokenizujStatement(zobrazeneText || "");
  const spolocne = spolocneTokeny(spravne, zobrazene);

  spravne.forEach((token, index) => {
    if (token.medzera || spolocne[index]) {
      prvok.appendChild(document.createTextNode(token.raw));
      return;
    }
    const span = document.createElement("span");
    span.className = "crack-rozdiel";
    span.textContent = token.raw;
    prvok.appendChild(span);
  });

  if (typeof window.renderMathInElement === "function") {
    try {
      window.renderMathInElement(prvok, {
        delimiters: katexDelimitery,
        throwOnError: false,
        errorColor: "#cc0000"
      });
    } catch (chyba) {
      // KaTeX nedostupny - text ostane ako plain text
    }
  }
}

// Slow Mode reveal: spravnu odpoved ukaz na mieste otazky (nie pod keycapmi).
// Pri crackPair zvyrazni rozdiely oproti zobrazenemu (chybnemu) statementu.
function zobrazSpravnuOdpovedVStatemente(otazka, jeSpravne, fallbackText) {
  if (otazka && otazka.crackPair && otazka.crackPair.pravda) {
    vlozZvyrazneneRozdiely(prvokOtazka, otazka.crackPair.pravda, otazka.otazka);
    prvokOtazka.classList.add("crack-odhalena");
    prvokVysledok.className = "vysledok skryte";
    prvokVysledok.innerHTML = "";
    return;
  }

  // Bez crackPair neexistuje "spravna verzia" statementu - ponechaj povodne zobrazenie.
  vykresliVysledokPredoslej(otazka, jeSpravne, fallbackText);
}

// Vrati #otazka do bezneho stavu (zrusi Slow Mode reveal).
function nastavOtazkuStatement(text) {
  prvokOtazka.classList.remove("crack-odhalena");
  nastavStatementText(prvokOtazka, text);
}

function zamiesaj(pole) {
  const kopia = [...pole];
  for (let i = kopia.length - 1; i > 0; i--) {
    const nahodnyIndex = Math.floor(Math.random() * (i + 1));
    [kopia[i], kopia[nahodnyIndex]] = [kopia[nahodnyIndex], kopia[i]];
  }
  return kopia;
}

function nahodneCeleCislo(minimum, maximum) {
  return Math.floor(minimum + Math.random() * (maximum - minimum + 1));
}

function vytvorSkusobnuOtazku(cislo) {
  return {
    id: `test-${String(cislo).padStart(2, "0")}`,
    tema: "TESTT",
    typ: "jedna",
    format: "klasicka",
    uroven: "test",
    otazka: "1?",
    moznosti: ["1", "0"],
    spravne: [0],
    vysvetlenie: "",
    prezentacia: "TESTT",
    subtema: "Kontrola fungovania appky",
    pevnePoradieMoznosti: true,
    crack: true
  };
}

function pravdepodobnostPixelu(riadokOdHladiny) {
  if (riadokOdHladiny === 0) {
    return 0.95;
  }

  if (riadokOdHladiny === 1) {
    return 0.90;
  }

  if (riadokOdHladiny === 2) {
    return 0.50;
  }

  return 0.035;
}

function casZmenyPixelu(riadokOdHladiny) {
  if (riadokOdHladiny <= 1) {
    return {
      minimum: 1400,
      maximum: 3000
    };
  }

  if (riadokOdHladiny === 2) {
    return {
      minimum: 500,
      maximum: 2500
    };
  }

  return {
    minimum: 100,
    maximum: 1000
  };
}

function nastavDalsiuZmenuPixelu(pixel, teraz) {
  const rozsah = casZmenyPixelu(Number(pixel.dataset.riadokOdHladiny));
  pixel.dataset.dalsiaZmena = String(teraz + nahodneCeleCislo(rozsah.minimum, rozsah.maximum));
}

function nastavStavPixelu(pixel, teraz) {
  const riadokOdHladiny = Number(pixel.dataset.riadokOdHladiny);
  const jeAktivny = Math.random() < pravdepodobnostPixelu(riadokOdHladiny);
  pixel.classList.toggle("aktivny", jeAktivny);
  nastavDalsiuZmenuPixelu(pixel, teraz);
}

function prepocitajPixelyStlpca() {
  const aktivne = stavStlpca > 0;
  const teraz = Date.now();

  [...prvokPixelyStlpca.children].forEach((pixel) => {
    if (!aktivne) {
      pixel.classList.remove("aktivny");
      pixel.dataset.dalsiaZmena = "0";
      return;
    }

    if (teraz >= Number(pixel.dataset.dalsiaZmena || 0)) {
      nastavStavPixelu(pixel, teraz);
    }
  });
}

function spustiPixelyStlpca() {
  if (casovacPixelovStlpca) {
    return;
  }

  casovacPixelovStlpca = window.setInterval(prepocitajPixelyStlpca, 150);
}

function vytvorPixelyStlpca() {
  prvokPixelyStlpca.innerHTML = "";
  const teraz = Date.now();

  for (let riadok = 0; riadok < pocetRiadkovPixelov; riadok++) {
    for (let stlpec = 0; stlpec < pocetStlpcovPixelov; stlpec++) {
      const pixel = document.createElement("span");
      pixel.className = "pixel-stlpca";
      pixel.dataset.riadok = String(riadok);
      pixel.dataset.riadokOdHladiny = String(pocetRiadkovPixelov - 1 - riadok);
      pixel.dataset.stlpec = String(stlpec);
      nastavStavPixelu(pixel, teraz);
      prvokPixelyStlpca.appendChild(pixel);
    }
  }

  prepocitajPixelyStlpca();
  spustiPixelyStlpca();
}

function jeZvukVypnuty() {
  return Boolean(prepinacVypnutiaZvuku && prepinacVypnutiaZvuku.checked);
}

function jeIosZariadenie() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function nastavAmbientnuAudioRelaciu() {
  if (audioRelaciaNastavena || !navigator.audioSession) {
    return;
  }

  try {
    navigator.audioSession.type = "ambient";
    audioRelaciaNastavena = true;
  } catch (chyba) {
    audioRelaciaNastavena = true;
  }
}

function ziskajZvukovyKontext() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    return null;
  }

  if (!zvukovyKontext) {
    const KonstruktorKontextu = window.AudioContext || window.webkitAudioContext;
    zvukovyKontext = new KonstruktorKontextu();
  }

  return zvukovyKontext;
}

function ziskajZdrojZvuku(zvuk) {
  return zvuk.currentSrc || zvuk.src;
}

function vypocitajNormalizacneZosilnenie(buffer) {
  if (!buffer || buffer.length === 0 || buffer.numberOfChannels === 0) {
    return 1;
  }

  let sucetStvorcov = 0;
  let pocetVzoriek = 0;
  let spicka = 0;
  const krok = Math.max(1, Math.floor(buffer.length / 44100));

  for (let kanal = 0; kanal < buffer.numberOfChannels; kanal++) {
    const data = buffer.getChannelData(kanal);
    for (let index = 0; index < data.length; index += krok) {
      const hodnota = data[index];
      const absolutnaHodnota = Math.abs(hodnota);
      sucetStvorcov += hodnota * hodnota;
      pocetVzoriek += 1;
      if (absolutnaHodnota > spicka) {
        spicka = absolutnaHodnota;
      }
    }
  }

  if (pocetVzoriek === 0 || spicka <= 0) {
    return 1;
  }

  const rms = Math.sqrt(sucetStvorcov / pocetVzoriek);
  if (rms <= 0) {
    return 1;
  }

  const zosilneniePodlaRms = cieloveRmsZvuku / rms;
  const limitPodlaSpicky = 0.95 / spicka;
  return obmedz(Math.min(zosilneniePodlaRms, limitPodlaSpicky), 0.35, 2.4);
}

function ziskajNormalizacneZosilnenie(zvuk) {
  return normalizacneZosilneniaZvukov.get(ziskajZdrojZvuku(zvuk)) || 1;
}

function dekodujZvuk(kontext, data) {
  return new Promise((resolve, reject) => {
    const vysledok = kontext.decodeAudioData(data, resolve, reject);
    if (vysledok && typeof vysledok.then === "function") {
      vysledok.then(resolve).catch(reject);
    }
  });
}

async function nacitajBufferZvuku(zvuk, kontext) {
  const zdroj = ziskajZdrojZvuku(zvuk);
  if (!zdroj) {
    return null;
  }

  if (!buffreZvukov.has(zdroj)) {
    const nacitanie = fetch(zdroj)
      .then((odpoved) => (odpoved.ok ? odpoved.arrayBuffer() : null))
      .then((data) => (data ? dekodujZvuk(kontext, data) : null))
      .then((buffer) => {
        if (buffer) {
          normalizacneZosilneniaZvukov.set(zdroj, vypocitajNormalizacneZosilnenie(buffer));
        }
        return buffer;
      })
      .catch(() => null);
    buffreZvukov.set(zdroj, nacitanie);
  }

  return buffreZvukov.get(zdroj);
}

async function prehrajZvukCezWebAudio(zvuk, rychlost) {
  const kontext = ziskajZvukovyKontext();
  if (!kontext) {
    return false;
  }

  if (kontext.state === "suspended") {
    try {
      await kontext.resume();
    } catch (chyba) {
      return false;
    }
  }

  const buffer = await nacitajBufferZvuku(zvuk, kontext);
  if (!buffer) {
    return false;
  }

  if (jeZvukVypnuty() || hlasitost <= 0) {
    return true;
  }

  const zdroj = kontext.createBufferSource();
  const zosilnenie = kontext.createGain();
  zdroj.buffer = buffer;
  zdroj.playbackRate.value = rychlost;
  zosilnenie.gain.value = hlasitost * ziskajNormalizacneZosilnenie(zvuk);
  zdroj.connect(zosilnenie);
  zosilnenie.connect(kontext.destination);
  zdroj.start(0);
  return true;
}

function prehrajZvukCezHtmlAudio(zvuk, rychlost) {
  const prehravac = typeof zvuk.cloneNode === "function" ? zvuk.cloneNode(true) : zvuk;
  prehravac.currentTime = 0;
  prehravac.volume = obmedz(hlasitost * ziskajNormalizacneZosilnenie(zvuk), 0, 1);
  prehravac.preservesPitch = false;
  prehravac.mozPreservesPitch = false;
  prehravac.webkitPreservesPitch = false;
  prehravac.playbackRate = rychlost;
  prehravac.play().catch(() => {});
}

function prehrajZvuk(zvuk, rychlost = 1) {
  if (jeZvukVypnuty() || hlasitost <= 0) {
    return;
  }

  nastavAmbientnuAudioRelaciu();
  prehrajZvukCezWebAudio(zvuk, rychlost).then((prehrane) => {
    if (!prehrane && !jeIosZariadenie() && !jeZvukVypnuty()) {
      prehrajZvukCezHtmlAudio(zvuk, rychlost);
    }
  });
}

function prednacitajAudioElementy() {
  zvukyAplikacie.forEach((zvuk) => {
    try {
      zvuk.preload = "auto";
      zvuk.load();
    } catch (chyba) {
      // Niektore mobilne prehliadace load ignoruju, WebAudio preload to isti po prvom dotyku.
    }
  });

  prednacitajBuffreZvukov(ziskajZvukovyKontext());
}

function prednacitajBuffreZvukov(kontext) {
  if (!kontext) {
    return null;
  }

  if (!prednacitanieZvukov) {
    prednacitanieZvukov = Promise.allSettled(zvukyAplikacie.map((zvuk) => nacitajBufferZvuku(zvuk, kontext)));
  }

  return prednacitanieZvukov;
}

function pripravZvuky() {
  if (jeZvukVypnuty()) {
    return;
  }

  nastavAmbientnuAudioRelaciu();
  const kontext = ziskajZvukovyKontext();
  if (!kontext) {
    return;
  }

  if (kontext.state === "suspended") {
    kontext.resume().catch(() => {});
  }

  prednacitajBuffreZvukov(kontext);
}

function ziskajZvukSpravnejOdpovede(dlzkaSerie) {
  const streak = Math.max(1, dlzkaSerie);

  if (streak >= 15) {
    return {
      zvuk: zvukSpravneStreak14,
      rychlost: Math.min(1 + (streak - 15) * 0.06, 1.5)
    };
  }

  if (streak >= 8) {
    return {
      zvuk: zvukSpravneStreak7,
      rychlost: Math.min(1 + (streak - 8) * 0.12, 1.72)
    };
  }

  return {
    zvuk: zvukSpravne,
    rychlost: Math.min(1 + (streak - 1) * 0.12, 1.72)
  };
}

function ziskajZvukZlejOdpovede(dlzkaSerie) {
  if (dlzkaSerie >= 15) return { zvuk: zvukZle15x, rychlost: 1 };
  if (dlzkaSerie >= 8) return { zvuk: zvukZle8x, rychlost: 1 };
  return { zvuk: zvukZle, rychlost: 1 };
}

function pocetPrehratiZvuku(jeSpravne, dlzkaSerie) {
  if (!jeSpravne) {
    return 1;
  }

  if (dlzkaSerie < 22) {
    return 1;
  }

  return Math.max(2, dlzkaSerie - 20);
}

function nastavHlasitost(hodnota) {
  hlasitost = Math.max(0, Math.min(1, Number(hodnota) / 100));
  zvukyAplikacie.forEach((zvuk) => {
    zvuk.volume = hlasitost;
  });
}

function nastavVypnutieZvuku(pripravitZvuk = false) {
  if (posuvnikHlasitosti) {
    posuvnikHlasitosti.disabled = jeZvukVypnuty();
  }

  if (!jeZvukVypnuty()) {
    if (pripravitZvuk) {
      pripravZvuky();
    }
    return;
  }

  zvukyAplikacie.forEach((zvuk) => {
    zvuk.pause();
    zvuk.currentTime = 0;
  });

  if (zvukovyKontext && zvukovyKontext.state === "running") {
    zvukovyKontext.suspend().catch(() => {});
  }
}

function nastavTemu(tema) {
  aktualnaTema = tema;
  const triedyTemy = ["tema-zlta", "tema-zlta-tmava", "tema-siva", "tema-fialova", "tema-tyrkysova", "tema-mentolova", "tema-tabula"];
  document.body.classList.remove(...triedyTemy);
  document.documentElement.classList.remove(...triedyTemy);

  if (tema !== "oranzova") {
    const mapaTriedTemy = {
      zlta: "tema-zlta",
      zltaTmava: "tema-zlta-tmava",
      siva: "tema-siva",
      fialova: "tema-fialova",
      tyrkysova: "tema-tyrkysova",
      mentolova: "tema-mentolova",
      tabula: "tema-tabula"
    };

    const triedaTemy = mapaTriedTemy[tema];
    if (triedaTemy) {
      document.body.classList.add(triedaTemy);
      document.documentElement.classList.add(triedaTemy);
    }
  }

  tlacidloTemaOranzova.classList.toggle("aktivny", tema === "oranzova");
  tlacidloTemaZlta.classList.toggle("aktivny", tema === "zlta" || tema === "zltaTmava");
  tlacidloTemaSiva.classList.toggle("aktivny", tema === "siva");
  tlacidloTemaFialova.classList.toggle("aktivny", tema === "fialova");
  tlacidloTemaTyrkysova.classList.toggle("aktivny", tema === "tyrkysova");
  tlacidloTemaMentolova.classList.toggle("aktivny", tema === "mentolova");
  tlacidloTemaTabula.classList.toggle("aktivny", tema === "tabula");

  if (tema !== "tabula") krieda.vymazat();
}

function prepniZltuTemu() {
  nastavTemu(aktualnaTema === "zlta" ? "zltaTmava" : "zlta");
}

const krieda = (() => {
  const platno = kriedaPlatno;
  const ctx = platno.getContext("2d");
  let kreslim = false;
  let tahy = [];
  let aktualnyTah = null;

  function zmenVelkost() {
    platno.width = window.innerWidth;
    platno.height = window.innerHeight;
    prekresliBodky();
  }

  function prekresliBodky() {
    ctx.clearRect(0, 0, platno.width, platno.height);
    for (const tah of tahy) nakreslTah(tah);
    if (aktualnyTah) nakreslTah(aktualnyTah);
  }

  function nakreslTah(body) {
    if (!body || body.length === 0) return;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (body.length === 1) {
      ctx.beginPath();
      ctx.arc(body[0].x, body[0].y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(232,228,208,0.88)";
      ctx.fill();
      ctx.restore();
      return;
    }

    ctx.strokeStyle = "rgba(255,252,235,0.2)";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(body[0].x, body[0].y);
    for (let i = 1; i < body.length; i++) ctx.lineTo(body[i].x, body[i].y);
    ctx.stroke();

    ctx.strokeStyle = "rgba(232,228,208,0.86)";
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.moveTo(body[0].x, body[0].y);
    for (let i = 1; i < body.length; i++) ctx.lineTo(body[i].x, body[i].y);
    ctx.stroke();

    ctx.strokeStyle = "rgba(255,255,255,0.48)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(body[0].x, body[0].y);
    for (let i = 1; i < body.length; i++) ctx.lineTo(body[i].x, body[i].y);
    ctx.stroke();

    ctx.restore();
  }

  function zacat(e) {
    if (aktualnaTema !== "tabula" || e.button !== 0) return;
    const tag = e.target.tagName.toLowerCase();
    if (["button", "input", "select", "textarea", "a", "label"].includes(tag)) return;
    kreslim = true;
    aktualnyTah = [{ x: e.clientX, y: e.clientY }];
  }

  function pokracovat(e) {
    if (!kreslim || !aktualnyTah) return;
    aktualnyTah.push({ x: e.clientX, y: e.clientY });
    prekresliBodky();
  }

  function skoncit() {
    if (!kreslim || !aktualnyTah) return;
    kreslim = false;
    if (aktualnyTah.length >= 1) tahy.push(aktualnyTah);
    aktualnyTah = null;
  }

  function odvolat(e) {
    if (aktualnaTema !== "tabula") return;
    e.preventDefault();
    if (tahy.length > 0) {
      tahy.pop();
      prekresliBodky();
    }
  }

  function vymazat() {
    kreslim = false;
    aktualnyTah = null;
    tahy = [];
    ctx.clearRect(0, 0, platno.width, platno.height);
  }

  zmenVelkost();
  window.addEventListener("resize", zmenVelkost);

  return { zacat, pokracovat, skoncit, odvolat, vymazat };
})();

function obmedz(hodnota, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, hodnota));
}

function spustiRytmickuTriedu(trieda, trvanie) {
  document.body.classList.remove(trieda);
  void document.body.offsetWidth;
  document.body.classList.add(trieda);
  window.setTimeout(() => document.body.classList.remove(trieda), trvanie);
}

function zrusRytmickyCasovac() {
  if (casovacRytmickychBeatov) {
    window.clearInterval(casovacRytmickychBeatov);
    casovacRytmickychBeatov = null;
  }

  if (casovacRytmickehoUkoncenia) {
    window.clearTimeout(casovacRytmickehoUkoncenia);
    casovacRytmickehoUkoncenia = null;
  }
}

function dokonciRytmickyEfekt() {
  zrusRytmickyCasovac();
  rytmickyEfekt = "default";
  zostavajuceRytmickeBeaty = 0;
  casovacRytmickehoUkoncenia = window.setTimeout(() => {
    document.body.classList.remove("rezim-rytmu", "rytmus-beat", "rytmus-flash", "rytmus-pulse", "rytmus-vlna");
    document.body.style.setProperty("--rytmus-uroven", "0");
    document.body.style.setProperty("--rytmus-pulz", "0");
    casovacRytmickehoUkoncenia = null;
  }, 900);
}

function spustiRytmickyPulz(efekt) {
  const silaPulzu = efekt === "flash" ? 1 : efekt === "pulse" ? 0.76 : efekt === "wave" ? 0.9 : 0.24;
  document.body.classList.add("rezim-rytmu");
  document.body.style.setProperty("--rytmus-uroven", "0.55");
  document.body.style.setProperty("--rytmus-pulz", String(obmedz(silaPulzu, 0.12, 1)));
  document.body.style.setProperty("--rytmus-trvanie", efekt === "default" ? "360ms" : "230ms");
  spustiRytmickuTriedu("rytmus-beat", efekt === "default" ? 360 : 260);

  if (efekt === "flash") {
    spustiRytmickuTriedu("rytmus-flash", 300);
  } else if (efekt === "pulse") {
    spustiRytmickuTriedu("rytmus-pulse", 420);
  } else if (efekt === "wave") {
    spustiRytmickuTriedu("rytmus-vlna", 780);
  }

  window.setTimeout(() => {
    document.body.style.setProperty("--rytmus-pulz", "0");
  }, efekt === "default" ? 220 : 150);
}

function prehratRytmickyBeat() {
  if (zostavajuceRytmickeBeaty <= 0) {
    dokonciRytmickyEfekt();
    return;
  }

  spustiRytmickyPulz(rytmickyEfekt);
  zostavajuceRytmickeBeaty--;
}

function aktivujRytmickyEfekt(efekt) {
  zrusRytmickyCasovac();
  rytmickyEfekt = efekt;
  zostavajuceRytmickeBeaty = pocetBeatovRytmickehoEfektu;
  document.body.classList.add("rezim-rytmu");
  prehratRytmickyBeat();
  casovacRytmickychBeatov = window.setInterval(prehratRytmickyBeat, intervalRytmickehoBeatu);
  return true;
}

function spustiJednorazovyFlash() {
  if (!prvokFlashEfekt) return;
  if (animaciaSpravnehoFlashu) {
    animaciaSpravnehoFlashu.cancel();
    animaciaSpravnehoFlashu = null;
  }
  if (casovacSpravnehoFlashu) {
    window.clearTimeout(casovacSpravnehoFlashu);
    casovacSpravnehoFlashu = null;
  }
  prvokFlashEfekt.classList.remove("aktivny", "specialny");
  prvokFlashEfekt.style.mixBlendMode = "normal";
  prvokFlashEfekt.style.background = "rgba(255, 255, 255, 0.97)";
  prvokFlashEfekt.style.setProperty("--flash-trvanie", "380ms");
  prvokFlashEfekt.style.setProperty("--flash-scale-start", "1");
  prvokFlashEfekt.style.setProperty("--flash-scale-peak", "1");
  void prvokFlashEfekt.offsetHeight;
  prvokFlashEfekt.classList.add("aktivny");
  casovacSpravnehoFlashu = window.setTimeout(() => {
    prvokFlashEfekt.classList.remove("aktivny");
    prvokFlashEfekt.style.opacity = "0";
    casovacSpravnehoFlashu = null;
  }, 420);
}

function prehrajVideoOverlay(src, rychlost = 1) {
  if (!prvokVideoOverlay || !prvokVideoPrehravac) return;
  prvokVideoPrehravac.src = src;
  prvokVideoPrehravac.playbackRate = rychlost;
  prvokVideoPrehravac.currentTime = 0;
  prvokVideoOverlay.classList.add("aktivny");
  prvokVideoPrehravac.play().catch(() => {});
  prvokVideoPrehravac.onended = () => {
    prvokVideoOverlay.classList.remove("aktivny");
    prvokVideoPrehravac.src = "";
  };
}

function spustiInvertFlash() {
  if (!prvokFlashEfekt) return;
  if (animaciaSpravnehoFlashu) {
    animaciaSpravnehoFlashu.cancel();
    animaciaSpravnehoFlashu = null;
  }
  if (casovacSpravnehoFlashu) {
    window.clearTimeout(casovacSpravnehoFlashu);
    casovacSpravnehoFlashu = null;
  }
  prvokFlashEfekt.classList.remove("aktivny", "specialny");
  prvokFlashEfekt.style.background = "#ffffff";
  prvokFlashEfekt.style.mixBlendMode = "difference";
  prvokFlashEfekt.style.setProperty("--flash-trvanie", "380ms");
  prvokFlashEfekt.style.setProperty("--flash-scale-start", "1");
  prvokFlashEfekt.style.setProperty("--flash-scale-peak", "1");
  void prvokFlashEfekt.offsetHeight;
  prvokFlashEfekt.classList.add("aktivny");
  casovacSpravnehoFlashu = window.setTimeout(() => {
    prvokFlashEfekt.classList.remove("aktivny");
    prvokFlashEfekt.style.opacity = "0";
    prvokFlashEfekt.style.mixBlendMode = "normal";
    casovacSpravnehoFlashu = null;
  }, 420);
}

function obsluzRytmickuKlavesu(klaves) {
  if (klaves === ",") {
    spustiJednorazovyFlash();
    return true;
  }

  if (klaves === ".") {
    spustiInvertFlash();
    return true;
  }

  if (klaves === "/") {
    prehrajVideoOverlay("Animations/explosion1.mp4", 6);
    return true;
  }

  return false;
}

function vytvorSvgPrvok(nazov, atributy) {
  const prvok = document.createElementNS(priestorSvg, nazov);

  Object.entries(atributy).forEach(([atribut, hodnota]) => {
    prvok.setAttribute(atribut, hodnota);
  });

  return prvok;
}

function vytvorObrazokKlavesy() {
  const obrazokKlavesy = vytvorSvgPrvok("svg", {
    class: "obrazokKlavesy",
    width: "147",
    height: "138",
    viewBox: "0 0 147 138",
    "aria-hidden": "true",
    focusable: "false"
  });

  obrazokKlavesy.append(
    vytvorSvgPrvok("polygon", {
      class: "okraj-klavesy",
      points: "0 10 10 0 10 120 0 135"
    }),
    vytvorSvgPrvok("polygon", {
      class: "okraj-klavesy",
      points: "130 0 145 15 145 135 130 120"
    }),
    vytvorSvgPrvok("polygon", {
      class: "okraj-klavesy",
      points: "0 135 10 120 130 120 145 135"
    }),
    vytvorSvgPrvok("rect", {
      class: "vrch-klavesy",
      x: "10",
      y: "0",
      width: "120",
      height: "120"
    }),
    vytvorSvgPrvok("path", {
      class: "obrys-klavesy",
      d: "M10 0 H130 L145 15 V135 H0 V10 Z M10 0 V120 L0 135 M130 0 V120 L145 135 M10 120 H130",
      "stroke-width": "4"
    })
  );

  return obrazokKlavesy;
}

function vytvorKlavesu(textKlavesy, extraTrieda = "") {
  const klavesa = document.createElement("span");
  klavesa.className = ["klavesa", extraTrieda].filter(Boolean).join(" ");

  const obrazokKlavesy = vytvorObrazokKlavesy();
  const cisloKlavesy = document.createElement("span");
  cisloKlavesy.className = "cisloKlavesy";
  cisloKlavesy.textContent = textKlavesy;
  klavesa.append(obrazokKlavesy, cisloKlavesy);

  return klavesa;
}

function nastavTlacidloOtazky(tlacidlo, textKlavesy, nazov, ukazNazov = true) {
  tlacidlo.textContent = "";
  tlacidlo.setAttribute("aria-label", `${nazov} (${textKlavesy})`);

  const textTlacidla = document.createElement("span");
  textTlacidla.className = "text-tlacidla-otazky";
  textTlacidla.textContent = nazov;

  tlacidlo.append(vytvorKlavesu(textKlavesy, "klavesa-tlacidla"));
  if (ukazNazov) {
    tlacidlo.append(textTlacidla);
  }
}

function nastavTlacidlaOtazok() {
  nastavTlacidloOtazky(tlacidloOdstranitOtazku, "q", "Trash");
  nastavTlacidloOtazky(tlacidloPridatTazkuOtazku, "w", "Hard");
  nastavTlacidloOtazky(tlacidloNeviem, "e", "Idk");
  nastavTlacidloOtazky(tlacidloSipkaVlavo, "←", "Sipka vlavo", false);
  nastavTlacidloOtazky(tlacidloSipkaVpravo, "→", "Sipka vpravo", false);
}

function spustiEfektTlacidla(tlacidlo) {
  if (!tlacidlo || tlacidlo.disabled) {
    return;
  }

  const staryCasovac = casovaceEfektuTlacidiel.get(tlacidlo);
  if (staryCasovac) {
    window.clearTimeout(staryCasovac);
  }

  tlacidlo.classList.add("stlacene");
  const novyCasovac = window.setTimeout(() => {
    tlacidlo.classList.remove("stlacene");
    casovaceEfektuTlacidiel.delete(tlacidlo);
  }, 150);

  casovaceEfektuTlacidiel.set(tlacidlo, novyCasovac);
}

function dostupneCitaty() {
  if (typeof citaty === "undefined" || !Array.isArray(citaty)) {
    return [];
  }

  return citaty;
}

function zlozTextCitatu(citat) {
  return [citat.zdroj, citat.text].filter(Boolean).join("\n\n");
}

function vyberIndexCitatu(zoznamCitatov) {
  if (zoznamCitatov.length <= 1) {
    return 0;
  }

  let novyIndex = aktualnyIndexCitatu;
  while (novyIndex === aktualnyIndexCitatu) {
    novyIndex = nahodneCeleCislo(0, zoznamCitatov.length - 1);
  }

  return novyIndex;
}

function nastavNahodnyCitat(vynutit = false) {
  const zoznamCitatov = dostupneCitaty();

  if ((!prepinacCitatov.checked && !vynutit) || zoznamCitatov.length === 0) {
    skryCitaty();
    return;
  }

  aktualnyIndexCitatu = vyberIndexCitatu(zoznamCitatov);
  const citat = zoznamCitatov[aktualnyIndexCitatu];
  const textCitatu = zlozTextCitatu(citat);

  prvkyTextuCitatu.forEach((prvok) => {
    prvok.textContent = textCitatu;
  });
  blokyCitatu.forEach((blok) => blok.classList.remove("skryte"));
  citatZobrazeny = true;
  spustiEfektCitatu();
}

function skryCitaty() {
  blokyCitatu.forEach((blok) => blok.classList.add("skryte"));
  prvkyTextuCitatu.forEach((prvok) => {
    prvok.textContent = "";
  });
  citatZobrazeny = false;
}

function posunCitatPoOtazkach() {
  skryCitaty();
  pocetVyhodnotenychOtazok++;
}

function posunCitatPoOdpovedi(jeSpravne) {
  skryCitaty();
  pocetVyhodnotenychOtazok++;

  if (jeSpravne) {
    if (seriaSpravnych > 0 && seriaSpravnych % 7 === 0) {
      nastavNahodnyCitat(true);
    }
    return;
  }

  pocetZlychOdpovediPreCitat++;
  if (pocetZlychOdpovediPreCitat % 10 === 0) {
    nastavNahodnyCitat(true);
  }
}

function nastavZobrazenieCitatov() {
  skryCitaty();
}

function spustiEfektCitatu() {
  prehrajZvuk(zvukCitatu);
  document.body.classList.remove("flash-citat");
  void document.body.offsetWidth;
  document.body.classList.add("flash-citat");
  window.setTimeout(() => document.body.classList.remove("flash-citat"), 760);
}

function jeRychlyRezim() {
  return urovenRychlehoRezimu > 0;
}

function jeRychlyRezim2x() {
  return urovenRychlehoRezimu === 2;
}

function jeRezimUcenia() {
  return Boolean(prepinacUcenia && prepinacUcenia.checked);
}

function jeDisplaySortingZapnuty() {
  return Boolean(prepinacDisplaySorting && prepinacDisplaySorting.checked);
}

function nastavDisplaySorting() {
  document.body.classList.toggle("display-sorting-vypnuty", !jeDisplaySortingZapnuty());
}

function aktualizujRozlozenieUcenia() {
  const ucenie = jeRezimUcenia();
  const exam = jeExamMode();
  // Sipky sluzia na navigaciu medzi otazkami aj v Mobile Mode so zapnutym Sorting (Display Sorting).
  const mobilneTriedenie = jeMobilnyCrackMode() && jeDisplaySortingZapnuty();
  const sipkyDostupne = (exam || mobilneTriedenie) && poradieOtazok.length > 0 && !poolDokonceny && !zobrazujePredoslyVysledok;

  document.body.classList.toggle("rezim-ucenia", ucenie);
  document.body.classList.toggle("rezim-ucenia-master", ucenie);
  document.body.classList.toggle("rezim-crack", jeCrackMode());
  document.body.classList.toggle("rezim-exam", exam);
  if (prvokTextUcenia) {
    prvokTextUcenia.textContent = ucenie ? "Learn Mode Master" : "Learn Mode";
  }
  if (prvokHintUcenia) {
    prvokHintUcenia.textContent = "Zobrazi cely vybrany okruh so spravnymi odpovedami podla podokruhov.";
  }
  aktualizujRozlozenieCrackTimeru();
  nastavMobilnyCrackMode();
  aktualizujViditelnostModov();
  tlacidloSipkaVlavo.disabled = !sipkyDostupne;
  tlacidloSipkaVpravo.disabled = !sipkyDostupne;
}

function aktualizujViditelnostModov() {
  const hel = aktualnyPredmet === "hel";
  const crack = jeCrackMode();
  // Multiple Choice + Exam su iba pre HEL.
  if (riadokMultipleChoice) riadokMultipleChoice.classList.toggle("skryte", !hel);
  if (riadokExamMode) riadokExamMode.classList.toggle("skryte", !hel);
  // Speed Mode dava zmysel iba v klasickom (non-crack) mode.
  if (riadokSpeedMode) riadokSpeedMode.classList.toggle("skryte", crack);
  // Timer, Mobile a Slow su crack-only vlastnosti.
  if (riadokTimerMode) riadokTimerMode.classList.toggle("skryte", !crack);
  if (riadokMobileMode) riadokMobileMode.classList.toggle("skryte", !crack);
  if (riadokSlowMode) riadokSlowMode.classList.toggle("skryte", !crack);
}

function textTypuOtazky(otazka, ucenie = jeRezimUcenia()) {
  if (otazka?.exam || jeExamMode()) {
    return "Exam Mode: napis vypracovanie";
  }

  if (otazka?.crack || jeCrackMode()) {
    // V Mobile Mode su keycapy 1/0 namiesto klaves z/x.
    return jeMobilnyCrackMode()
      ? "Crack Mode: 1 = pravda, 0 = nepravda"
      : "Crack Mode: z = pravda, x = nepravda";
  }

  if (ucenie) {
    return "Learn Mode Master";
  }

  return otazka.typ === "viac" ? "Vyber jednu alebo viac možností" : "Vyber jednu možnosť";
}

function nastavRychlyRezim() {
  prepinacRychlehoRezimu.checked = jeRychlyRezim();
  prepinacRychlehoRezimu.dataset.uroven = String(urovenRychlehoRezimu);
  if (prvokTextRychlehoRezimu) {
    prvokTextRychlehoRezimu.textContent = jeRychlyRezim2x() ? "Speed Mode 2x" : "Speed Mode";
  }
  if (prvokHintRychlehoRezimu) {
    prvokHintRychlehoRezimu.textContent = jeRychlyRezim2x()
      ? "Po spravnej odpovedi automaticky prejde dalej. Pri otazkach s jednou odpovedou sa odpoved odosle hned po vybere."
      : "Po spravnej odpovedi automaticky prejde na dalsiu otazku. Druhy klik zapne Speed Mode 2x.";
  }

  if (!jeRychlyRezim()) {
    zrusCasovacDalsejOtazky();
  }
}

function prepniRychlyRezim() {
  if (urovenRychlehoRezimu === 0 && prepinacRychlehoRezimu.checked) {
    urovenRychlehoRezimu = 1;
  } else if (urovenRychlehoRezimu === 1 && !prepinacRychlehoRezimu.checked) {
    urovenRychlehoRezimu = 2;
  } else if (urovenRychlehoRezimu === 2 && !prepinacRychlehoRezimu.checked) {
    urovenRychlehoRezimu = 0;
  } else {
    urovenRychlehoRezimu = prepinacRychlehoRezimu.checked ? 1 : 0;
  }

  nastavRychlyRezim();
}

function jeRezimPrejdeniaPoolu() {
  return Boolean(prepinacPrejdeniaPoolu && prepinacPrejdeniaPoolu.checked);
}

function predmetPodporujeCrack() {
  return aktualnyPredmet === "hel" || aktualnyPredmet === "czs";
}

function jeMultipleChoiceOverride() {
  // Multiple Choice Mode (povodny klasicky mod) je dostupny iba pre HEL.
  return aktualnyPredmet === "hel" && Boolean(prepinacMultipleChoice && prepinacMultipleChoice.checked);
}

function jeCrackMode() {
  // Crack Mode je zaklad pre predmety co ho podporuju (HEL, CZS);
  // vypne sa iba ked je v HEL aktivny Multiple Choice override alebo bezi Exam Mode.
  return predmetPodporujeCrack() && !jeMultipleChoiceOverride() && !jeExamMode();
}

function jeSlowMode() {
  return Boolean(prepinacSlowMode && prepinacSlowMode.checked);
}

function jeExamMode() {
  return Boolean(prepinacExamMode && prepinacExamMode.checked);
}

function jeExamModeMini() {
  return jeExamMode() && examModeMini;
}

// Cyklus na prepinaci Exam Mode: vypnute -> Exam Mode -> Exam Mode Mini -> vypnute
function prepniExamMode() {
  if (prepinacExamMode.checked) {
    // prechod vypnute -> Exam Mode (plny)
    examModeMini = false;
  } else if (!examModeMini) {
    // bol plny Exam Mode, druhe kliknutie -> Exam Mode Mini (ostava aktivny)
    prepinacExamMode.checked = true;
    examModeMini = true;
  } else {
    // bol Exam Mode Mini, dalsie kliknutie -> vypnute
    examModeMini = false;
  }
  nastavExamMode();
}

function jeCrackTimerZapnuty() {
  return Boolean(prepinacCrackTimeru && prepinacCrackTimeru.checked && jeCrackMode() && !jeExamMode());
}

function jeMobilnyCrackMode() {
  return Boolean(prepinacMobilnehoCrackModu && prepinacMobilnehoCrackModu.checked && jeCrackMode() && !jeExamMode());
}

function jeMobilneZariadenie() {
  const userAgent = navigator.userAgent || "";
  const jeMobilnyUserAgent = /iPhone|iPod|Android.*Mobile|Windows Phone/i.test(userAgent);
  const maDotyk = navigator.maxTouchPoints > 0;
  const maHrubyPointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const nemaHover = window.matchMedia && window.matchMedia("(hover: none)").matches;
  const sirka = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const vyska = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const kratsiaStrana = Math.min(sirka || 0, vyska || 0);
  const dlhsiaStrana = Math.max(sirka || 0, vyska || 0);

  return jeMobilnyUserAgent || (maDotyk && maHrubyPointer && nemaHover && kratsiaStrana <= 600 && dlhsiaStrana <= 1200);
}

function aktualizujAutomatickyMobilnyCrackMode() {
  if (!prepinacMobilnehoCrackModu || mobilnyCrackModeZmenenyRucne || !jeMobilneZariadenie()) {
    return;
  }

  prepinacMobilnehoCrackModu.checked = true;
  nastavMobilnyCrackMode();
}

function nastavMobilnyCrackMode() {
  document.body.classList.toggle("rezim-crack-mobile", jeMobilnyCrackMode());
}

function nastavMobilnuVysku() {
  const vyskaViewportu = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const vyska = Math.max(240, Math.round(vyskaViewportu || window.innerHeight || 0));
  document.documentElement.style.setProperty("--mobilna-vyska-js", `${vyska}px`);
}

function aktualizujMobilneRozlozenie() {
  nastavMobilnuVysku();
  aktualizujAutomatickyMobilnyCrackMode();
}

function aktualizujRozlozenieCrackTimeru() {
  const aktivny = jeCrackTimerZapnuty();
  document.body.classList.toggle("rezim-crack-timer", aktivny);
  if (prepinacCrackTimeru) {
    prepinacCrackTimeru.disabled = !jeCrackMode() || jeExamMode();
  }

  if (!aktivny) {
    zrusCrackTimer(true);
  }
}

// Celoobrazovkova zaplava casovaca (Mobile Mode): klon obsahu s bielym pismom,
// pod ktory zdola hore stupa cierna hladina. Realny obsah ostava interaktivny
// (zaplava ma pointer-events: none), takze z/x dalej funguju.
function pripravTimerZaplavu() {
  if (!prvokCasovacZaplavaObsah) return;
  prvokCasovacZaplavaObsah.innerHTML = "";
  const stranka = document.querySelector(".stranka");
  if (!stranka) return;
  const klon = stranka.cloneNode(true);
  klon.removeAttribute("id");
  klon.querySelectorAll("[id]").forEach((prvok) => prvok.removeAttribute("id"));
  klon.querySelectorAll(".panel-nastaveni, script, canvas").forEach((prvok) => prvok.remove());
  prvokCasovacZaplavaObsah.appendChild(klon);
}

function zrusTimerZaplavu() {
  if (!prvokCasovacZaplava) return;
  prvokCasovacZaplava.style.transition = "none";
  prvokCasovacZaplava.style.clipPath = "inset(100% 0 0 0)";
  if (prvokCasovacZaplavaObsah) {
    prvokCasovacZaplavaObsah.innerHTML = "";
  }
}

function spustiTimerZaplavu() {
  if (!prvokCasovacZaplava || !jeMobilnyCrackMode()) return;
  pripravTimerZaplavu();
  prvokCasovacZaplava.style.transition = "none";
  prvokCasovacZaplava.style.clipPath = "inset(100% 0 0 0)";
  void prvokCasovacZaplava.offsetHeight;
  prvokCasovacZaplava.style.transition = `clip-path ${trvanieCrackTimeru}ms linear`;
  prvokCasovacZaplava.style.clipPath = "inset(0% 0 0 0)";
}

function zrusCrackTimer(resetuj = false) {
  if (casovacCrackTimeru) {
    window.clearTimeout(casovacCrackTimeru);
    casovacCrackTimeru = null;
  }

  if (resetuj) {
    if (prvokVyplnCrackTimeru) {
      prvokVyplnCrackTimeru.style.transition = "none";
      prvokVyplnCrackTimeru.style.height = "0%";
    }
    zrusTimerZaplavu();
  }
}

function vyprsalCrackTimer() {
  casovacCrackTimeru = null;
  if (!jeCrackTimerZapnuty() || vyhodnotene || jeRezimUcenia() || zobrazujePredoslyVysledok || poolDokonceny) {
    return;
  }

  skontrolujOdpoved([], true, "Cas vyprsal");
}

function spustiCrackTimer() {
  zrusCrackTimer(true);
  if (!jeCrackTimerZapnuty() || vyhodnotene || jeRezimUcenia() || zobrazujePredoslyVysledok || poolDokonceny) {
    return;
  }

  // Desktop: vertikalny bar (height). Mobile: celoobrazovkova cierna zaplava.
  prvokVyplnCrackTimeru.style.transition = "none";
  prvokVyplnCrackTimeru.style.height = "0%";
  void prvokVyplnCrackTimeru.offsetHeight;
  prvokVyplnCrackTimeru.style.transition = `height ${trvanieCrackTimeru}ms linear`;
  prvokVyplnCrackTimeru.style.height = "100%";
  spustiTimerZaplavu();
  casovacCrackTimeru = window.setTimeout(vyprsalCrackTimer, trvanieCrackTimeru);
}

function nastavCrackTimer() {
  aktualizujRozlozenieCrackTimeru();
  if (jeCrackTimerZapnuty() && aktualnaOtazka() && !vyhodnotene) {
    spustiCrackTimer();
  }
}

function nastavRezimPrejdeniaPoolu() {
  cakaNaVyradenieOtazky = false;
  nastavPoradie();
}

function nastavMultipleChoiceMode() {
  zrusCasovacDalsejOtazky();
  pocetZlychOdpovediPreCitat = 0;
  pouzivaTazkyPool = false;

  // Multiple Choice override (klasicky mod) sa vzajomne vylucuje s Exam Mode.
  if (jeMultipleChoiceOverride() && prepinacExamMode && prepinacExamMode.checked) {
    prepinacExamMode.checked = false;
    examModeMini = false;
  }

  if (jeCrackMode()) {
    prepinacDisplaySorting.checked = false;
    nastavDisplaySorting();
  } else {
    zrusCrackTimer(true);
  }

  aktualizujRozlozenieUcenia();
  nastavPoradie();
}

function nastavExamMode() {
  zrusCasovacDalsejOtazky();
  zrusCrackTimer(true);
  pouzivaTazkyPool = false;

  if (jeExamMode()) {
    prepinacUcenia.checked = false;
    prepinacCrackTimeru.checked = false;
    // Exam Mode a Multiple Choice override sa vzajomne vylucuju.
    if (prepinacMultipleChoice) {
      prepinacMultipleChoice.checked = false;
    }
    if (aktualnyPredmet !== "hel") {
      nastavPredmet("hel");
      return;
    }
  }

  document.body.classList.toggle("rezim-exam-mini", jeExamModeMini());
  if (prvokTextExamMode) {
    prvokTextExamMode.textContent = jeExamModeMini() ? "Exam Mode Mini" : "Exam Mode";
  }

  aktualizujRozlozenieUcenia();
  nastavPoradie();
}

function nastavRezimUcenia() {
  zrusCasovacDalsejOtazky();
  zrusCrackTimer(true);

  if (jeRezimUcenia() && jeExamMode()) {
    prepinacExamMode.checked = false;
    examModeMini = false;
    nastavPoradie();
    return;
  }

  aktualizujRozlozenieUcenia();

  if (zobrazujePredoslyVysledok) {
    zobrazujePredoslyVysledok = false;
    nahladAktualnejOtazky = null;
  }

  nastavPoradie();
}

function najdiVolitelnyPrvok(ciel) {
  if (!(ciel instanceof Element)) {
    return null;
  }

  const prvok = ciel.closest(selektorVolitelnychPrvkov);
  if (!prvok || prvok.closest(".skryte")) {
    return null;
  }

  if (prvok.classList.contains("moznost")) {
    const vstup = prvok.querySelector("input");
    return vstup && !vstup.disabled ? prvok : null;
  }

  if ("disabled" in prvok && prvok.disabled) {
    return null;
  }

  return prvok;
}

function obsluzKlikVolitelnehoPrvku(udalost) {
  if (citatZobrazeny) {
    udalost.preventDefault();
    udalost.stopPropagation();
    skryCitaty();
    return;
  }

  const prvok = najdiVolitelnyPrvok(udalost.target);
  if (!prvok || !prvok.matches("button") || prvok === tlacidloMedzernik) {
    return;
  }

  prehrajZvuk(zvukVyberuVolby);
}

function obsluzKlikCitatu(udalost) {
  if (!citatZobrazeny) {
    return;
  }

  udalost.preventDefault();
  udalost.stopPropagation();
  skryCitaty();
}

function obsluzZmenuVolitelnehoPrvku(udalost) {
  const prvok = najdiVolitelnyPrvok(udalost.target);
  if (!prvok || prvok.closest(".moznost")) {
    return;
  }

  prehrajZvuk(zvukVyberuVolby);
}

function prepniNastavenia() {
  const budeOtvorene = prvokPanelNastaveni.classList.contains("skryte");
  prvokPanelNastaveni.classList.toggle("skryte", !budeOtvorene);
  tlacidloNastavenia.setAttribute("aria-expanded", String(budeOtvorene));
}

function zavriNastavenia() {
  prvokPanelNastaveni.classList.add("skryte");
  tlacidloNastavenia.setAttribute("aria-expanded", "false");
}

function ziskajPrezentaciu(otazka) {
  if (otazka.prezentacia) {
    return otazka.prezentacia;
  }

  const referencia = String(otazka.slideRef || otazka.zdroj || "");
  const zhoda = referencia.match(/[^\s/\\]+\.pdf/i);
  if (zhoda) {
    return zhoda[0];
  }

  if (aktualnyPredmet === "pc2") {
    return "PC2";
  }

  if (aktualnyPredmet === "hel") {
    return "HEL";
  }

  return "Bez prezentácie";
}

function ziskajPodokruh(otazka) {
  return otazka.subtema || otazka.tema || "Bez podokruhu";
}

function ziskajIdOtazky(otazka) {
  return String(otazka.id || otazka.otazka);
}

function vytvorCrackStatement(otazka, moznost, index) {
  const normalizovanaMoznost = vytvorMoznostOtazky(moznost, index);
  const jePravda = otazka.spravne.includes(index);
  const povodneId = ziskajIdOtazky(otazka);
  const prezentacia = ziskajPrezentaciu(otazka);
  const podokruh = ziskajPodokruh(otazka);
  const vysvetlenie = [
    jePravda ? "Tvrdenie je pravdive." : "Tvrdenie je nepravdive.",
    `Povodna otazka: ${otazka.otazka}`,
    otazka.vysvetlenie || ""
  ].filter(Boolean).join(" ");

  return {
    id: `crack-${povodneId}-${index + 1}`,
    tema: `${prezentacia}: Crack Mode`,
    typ: "jedna",
    format: "klasicka",
    uroven: otazka.uroven || "tazka",
    otazka: normalizovanaMoznost.text,
    moznosti: ["z", "x"],
    spravne: [jePravda ? 0 : 1],
    vysvetlenie,
    prezentacia,
    subtema: podokruh,
    povodnaOtazkaId: povodneId,
    pevnePoradieMoznosti: true,
    crack: true
  };
}

function nastavNahodnyCrackParStatement(otazka) {
  const crackDvojica = otazka.crackPair;
  if (!crackDvojica?.pravda || !crackDvojica?.nepravda) {
    return otazka;
  }

  const pouziPravdu = jeRezimUcenia() ? true : Math.random() < 0.5;
  const spravnyVyrok = crackDvojica.pravda;
  otazka.otazka = pouziPravdu ? crackDvojica.pravda : crackDvojica.nepravda;
  otazka.spravne = [pouziPravdu ? 0 : 1];
  otazka.vysvetlenie = [
    pouziPravdu ? "Tvrdenie je pravdive." : "Tvrdenie je nepravdive.",
    `Spravny statement: ${spravnyVyrok}`
  ].join(" ");

  return otazka;
}

function vytvorCrackParStatement(otazka) {
  const povodneId = ziskajIdOtazky(otazka);
  const crackOtazka = {
    id: `crack-${povodneId}`,
    tema: otazka.tema,
    typ: "jedna",
    format: "klasicka",
    uroven: otazka.uroven || "tazka",
    otazka: "",
    moznosti: ["z", "x"],
    spravne: [0],
    vysvetlenie: "",
    prezentacia: ziskajPrezentaciu(otazka),
    subtema: ziskajPodokruh(otazka),
    povodnaOtazkaId: povodneId,
    crackPair: { ...otazka.crackPair },
    pevnePoradieMoznosti: true,
    crack: true
  };

  if (Array.isArray(otazka.obrazky)) {
    crackOtazka.obrazky = otazka.obrazky;
  }
  if (otazka.obrazok) {
    crackOtazka.obrazok = otazka.obrazok;
    crackOtazka.popisObrazka = otazka.popisObrazka;
  }

  return nastavNahodnyCrackParStatement(crackOtazka);
}

function ziskajCrackOtazky() {
  return ziskajOtazkyZBeznychFiltrov(true)
    .flatMap((otazka) => {
      if (otazka.crackPair?.pravda && otazka.crackPair?.nepravda) {
        return [vytvorCrackParStatement(otazka)];
      }

      if (Array.isArray(otazka.moznosti)) {
        return otazka.moznosti.map((moznost, index) => vytvorCrackStatement(otazka, moznost, index));
      }

      return [];
    })
    .filter((otazka) => otazka.otazka.trim().length > 0);
}

function normalizujKluc(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function rozdelExamPodokruh(otazka) {
  const casti = ziskajPodokruh(otazka).split("/").map((cast) => cast.trim()).filter(Boolean);
  return {
    oblast: casti[0] || ziskajPodokruh(otazka),
    podoblast: casti[1] || "Zakladne body"
  };
}

function zjednodusExamPrezentaciu(prezentacia) {
  return String(prezentacia).replace(/\s+Skuska\s+/i, " ").replace(/\s+/g, " ").trim();
}

function zlozExamNadpis(prezentacia, oblast) {
  return `${zjednodusExamPrezentaciu(prezentacia)} ${oblast}`;
}

function ziskajExamOtazky() {
  const mini = jeExamModeMini();
  const skupiny = new Map();

  ziskajOtazkyZBeznychFiltrov(true).forEach((otazka) => {
    if (!otazka.crackPair?.pravda) {
      return;
    }

    const prezentacia = ziskajPrezentaciu(otazka);
    const { oblast, podoblast } = rozdelExamPodokruh(otazka);
    // V Mini rezime je kazda podotazka samostatny slide (skupina podla oblast aj podoblast)
    const kluc = mini ? `${prezentacia}::${oblast}::${podoblast}` : `${prezentacia}::${oblast}`;

    if (!skupiny.has(kluc)) {
      skupiny.set(kluc, {
        prezentacia,
        oblast,
        podoblast,
        sekcie: new Map()
      });
    }

    const skupina = skupiny.get(kluc);
    if (!skupina.sekcie.has(podoblast)) {
      skupina.sekcie.set(podoblast, []);
    }
    skupina.sekcie.get(podoblast).push({ id: otazka.id, text: otazka.crackPair.pravda });
  });

  return [...skupiny.values()].map((skupina) => {
    const sekcie = [...skupina.sekcie.entries()].map(([nazov, body]) => ({ nazov, body }));
    const zakladnyNadpis = zlozExamNadpis(skupina.prezentacia, skupina.oblast);
    const nadpis = mini ? `${zakladnyNadpis} - ${skupina.podoblast}` : zakladnyNadpis;
    const idSuffix = mini
      ? `${normalizujKluc(skupina.oblast)}-${normalizujKluc(skupina.podoblast)}`
      : normalizujKluc(skupina.oblast);
    return {
      id: `exam-${normalizujKluc(skupina.prezentacia)}-${idSuffix}`,
      tema: `${skupina.prezentacia}: ${mini ? "Exam Mode Mini" : "Exam Mode"}`,
      typ: "exam",
      format: "exam",
      uroven: "skuskova",
      otazka: nadpis,
      moznosti: [],
      spravne: [],
      vysvetlenie: "",
      prezentacia: skupina.prezentacia,
      subtema: mini ? `${skupina.oblast} / ${skupina.podoblast}` : skupina.oblast,
      examSekcie: sekcie,
      exam: true
    };
  });
}

function unikatneHodnoty(hodnoty) {
  return [...new Set(hodnoty)].sort((a, b) => a.localeCompare(b, "sk"));
}

function ziskajOkruhyOtazky(otazka) {
  // Primarny okruh otazky (jej prezentacia) + pripadne dalsie clenstva v poli `okruhy`
  // (napr. agregovany okruh "HEL TIER 1"). Povodny okruh zostava zachovany.
  const okruhy = [ziskajPrezentaciu(otazka)];
  if (Array.isArray(otazka.okruhy)) {
    otazka.okruhy.forEach((okruh) => {
      if (okruh) {
        okruhy.push(okruh);
      }
    });
  }
  return okruhy;
}

function ziskajPrezentacie() {
  return unikatneHodnoty(zakladneOtazkyPredmetu.flatMap(ziskajOkruhyOtazky));
}

function ziskajOtazkyPrePrezentaciu() {
  return zakladneOtazkyPredmetu.filter((otazka) => (
    vybranaPrezentacia === hodnotaVsetko || ziskajOkruhyOtazky(otazka).includes(vybranaPrezentacia)
  ));
}

function ziskajDostupnePodokruhy() {
  return unikatneHodnoty(ziskajOtazkyPrePrezentaciu().map(ziskajPodokruh));
}

function ziskajOtazkyZBeznychFiltrov(vratCrackData = false) {
  return ziskajOtazkyPrePrezentaciu().filter((otazka) => (
    (vratCrackData || !otazka.crackPair) &&
    vybranePodokruhy.has(ziskajPodokruh(otazka)) && !odstraneneOtazky.has(ziskajIdOtazky(otazka))
  ));
}

function ziskajOtazkyPodlaFiltra() {
  if (jeExamMode()) {
    return ziskajExamOtazky().filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)));
  }

  if (jeCrackMode()) {
    return ziskajCrackOtazky().filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)));
  }

  if (pouzivaTazkyPool) {
    return [...tazkeOtazky.values()].filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)));
  }

  return ziskajOtazkyZBeznychFiltrov();
}

function jePravdivaCrackOtazka(otazka) {
  return !otazka.crack || (Array.isArray(otazka.spravne) && otazka.spravne.includes(0));
}

function ziskajOtazkyPreLearnMaster() {
  if (pouzivaTazkyPool) {
    return [...tazkeOtazky.values()]
      .filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)))
      .filter(jePravdivaCrackOtazka);
  }

  return jeCrackMode() ? ziskajOtazkyZBeznychFiltrov(true) : ziskajOtazkyZBeznychFiltrov();
}

function nastavVsetkyPodokruhy() {
  vybranePodokruhy = new Set(ziskajDostupnePodokruhy());
}

function aktualizujPocetFiltra() {
  const pocet = jeRezimUcenia() ? ziskajOtazkyPreLearnMaster().length : ziskajOtazkyPodlaFiltra().length;
  const textPoctu = pocet === 1 ? "1 otazka" : `${pocet} otazok`;
  if (jeRezimUcenia()) {
    prvokPocetFiltra.textContent = `${textPoctu} v Learn Mode Master`;
    return;
  }

  if (jeExamMode()) {
    prvokPocetFiltra.textContent = `${textPoctu} v Exam Mode`;
    return;
  }

  if (jeCrackMode()) {
    prvokPocetFiltra.textContent = `${textPoctu} v Crack Mode`;
    return;
  }

  prvokPocetFiltra.textContent = pouzivaTazkyPool ? `${textPoctu} v tazkom poole` : textPoctu;
}

function aktualizujViditelnostPoolov() {
  const maOdstranene = !prvokBlokOdstranenych.classList.contains("skryte");
  const maTazke = !prvokBlokTazkychOtazok.classList.contains("skryte");
  prvokSkupinaPoolov.classList.toggle("skryte", !maOdstranene && !maTazke);
}

function vykresliOdstraneneOtazky() {
  const otazky = [...odstraneneOtazky.values()];
  prvokBlokOdstranenych.classList.toggle("skryte", otazky.length === 0);
  tlacidloVratitVsetkyOtazky.disabled = otazky.length === 0;
  prvokZoznamOdstranenychOtazok.innerHTML = "";

  otazky.forEach((otazka) => {
    const riadok = document.createElement("div");
    riadok.className = "odstranena-otazka";

    const text = document.createElement("span");
    text.textContent = `${ziskajPodokruh(otazka)}: ${otazka.otazka}`;

    const tlacidlo = document.createElement("button");
    tlacidlo.type = "button";
    tlacidlo.className = "mini-tlacidlo";
    tlacidlo.textContent = "Vrátiť";
    tlacidlo.addEventListener("click", () => vratOtazku(ziskajIdOtazky(otazka)));

    riadok.append(text, tlacidlo);
    prvokZoznamOdstranenychOtazok.appendChild(riadok);
  });

  aktualizujViditelnostPoolov();
}

function vratOtazku(idOtazky) {
  odstraneneOtazky.delete(idOtazky);
  vykresliOdstraneneOtazky();
  aktualizujPocetFiltra();
  nastavPoradie();
}

function vratVsetkyOtazky() {
  if (odstraneneOtazky.size === 0) {
    return;
  }

  odstraneneOtazky.clear();
  vykresliOdstraneneOtazky();
  aktualizujPocetFiltra();
  nastavPoradie();
}

function jeOtazkaVTazkomPoole(otazka) {
  return Boolean(otazka && tazkeOtazky.has(ziskajIdOtazky(otazka)));
}

function aktualizujTlacidloTazkejOtazky() {
  const otazka = aktualnaOtazka();
  const jeDostupna = Boolean(otazka) && !zobrazujePredoslyVysledok && !poolDokonceny;
  const jePridana = jeOtazkaVTazkomPoole(otazka);

  tlacidloPridatTazkuOtazku.disabled = !jeDostupna;
  tlacidloPridatTazkuOtazku.classList.toggle("vybrana", jeDostupna && jePridana);
  tlacidloPridatTazkuOtazku.setAttribute("aria-pressed", String(jeDostupna && jePridana));
}

function aktualizujTlacidloNeviem() {
  const otazka = aktualnaOtazka();
  tlacidloNeviem.disabled = !otazka || vyhodnotene || jeRezimUcenia() || zobrazujePredoslyVysledok || poolDokonceny;
}

function vykresliTazkeOtazky() {
  const otazky = [...tazkeOtazky.values()];
  prvokBlokTazkychOtazok.classList.toggle("skryte", otazky.length === 0 && !pouzivaTazkyPool);
  prvokPocetTazkychOtazok.textContent = `(${otazky.length})`;
  tlacidloSpustitTazkyPool.disabled = otazky.length === 0 || pouzivaTazkyPool;
  tlacidloVypnutTazkyPool.disabled = !pouzivaTazkyPool;
  tlacidloVycistitTazkyPool.disabled = otazky.length === 0;
  prvokZoznamTazkychOtazok.innerHTML = "";

  otazky.forEach((otazka) => {
    const riadok = document.createElement("div");
    riadok.className = "odstranena-otazka";

    const text = document.createElement("span");
    text.textContent = `${ziskajPodokruh(otazka)}: ${otazka.otazka}`;

    const tlacidlo = document.createElement("button");
    tlacidlo.type = "button";
    tlacidlo.className = "mini-tlacidlo";
    tlacidlo.textContent = "Odstranit";
    tlacidlo.addEventListener("click", () => odoberTazkuOtazku(ziskajIdOtazky(otazka)));

    riadok.append(text, tlacidlo);
    prvokZoznamTazkychOtazok.appendChild(riadok);
  });

  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujViditelnostPoolov();
}

function pridajAktualnuOtazkuDoTazkych() {
  if (zobrazujePredoslyVysledok || poolDokonceny) {
    return;
  }

  const otazka = aktualnaOtazka();
  if (!otazka) {
    return;
  }

  tazkeOtazky.set(ziskajIdOtazky(otazka), otazka);
  vykresliTazkeOtazky();
}

function odoberTazkuOtazku(idOtazky) {
  tazkeOtazky.delete(idOtazky);

  if (pouzivaTazkyPool) {
    poradieOtazok = poradieOtazok.filter((otazka) => ziskajIdOtazky(otazka) !== idOtazky);
    if (tazkeOtazky.size === 0) {
      pouzivaTazkyPool = false;
    }
    nastavPoradie();
    return;
  }

  vykresliTazkeOtazky();
}

function spustiTazkyPool() {
  if (tazkeOtazky.size === 0) {
    return;
  }

  if (jeCrackMode()) {
    pocetZlychOdpovediPreCitat = 0;
  }

  pouzivaTazkyPool = true;
  nastavPoradie();
}

function vypniTazkyPool() {
  if (!pouzivaTazkyPool) {
    return;
  }

  pouzivaTazkyPool = false;
  nastavPoradie();
}

function vycistiTazkyPool() {
  if (tazkeOtazky.size === 0) {
    return;
  }

  tazkeOtazky.clear();
  pouzivaTazkyPool = false;
  vykresliTazkeOtazky();
  nastavPoradie();
}

function vykresliVyberPrezentacie() {
  prvokVyberPrezentacie.innerHTML = "";

  const vsetky = document.createElement("option");
  vsetky.value = hodnotaVsetko;
  vsetky.textContent = "Vsetko";
  prvokVyberPrezentacie.appendChild(vsetky);

  ziskajPrezentacie().forEach((prezentacia) => {
    const moznost = document.createElement("option");
    moznost.value = prezentacia;
    moznost.textContent = prezentacia;
    prvokVyberPrezentacie.appendChild(moznost);
  });

  prvokVyberPrezentacie.value = vybranaPrezentacia;
}

function rozdelPodokruhNaSkupinu(podokruh) {
  const casti = String(podokruh).split("/").map((cast) => cast.trim()).filter(Boolean);
  return {
    skupina: casti.length > 1 ? casti[0] : "",
    nazov: casti.length > 1 ? casti.slice(1).join(" / ") : podokruh
  };
}

function nastavVyberPodokruhov(podokruhy, vybrane) {
  podokruhy.forEach((podokruh) => {
    if (vybrane) {
      vybranePodokruhy.add(podokruh);
    } else {
      vybranePodokruhy.delete(podokruh);
    }
  });

  pouzivaTazkyPool = false;
  aktualizujPocetFiltra();
  nastavPoradie();
}

function vytvorVolbuPodokruhu(podokruh, nazov, poZmene) {
  const popisok = document.createElement("label");
  popisok.className = "volba-podokruhu";

  const vstup = document.createElement("input");
  vstup.type = "checkbox";
  vstup.checked = vybranePodokruhy.has(podokruh);
  vstup.addEventListener("change", () => {
    nastavVyberPodokruhov([podokruh], vstup.checked);
    if (poZmene) {
      poZmene();
    }
  });

  const text = document.createElement("span");
  text.className = "text-podokruhu";
  text.textContent = nazov;

  popisok.append(vstup, text);
  return {
    popisok,
    vstup
  };
}

function vytvorSkupinuPodokruhov(skupina, polozky) {
  const obal = document.createElement("div");
  obal.className = "skupina-podokruhu";

  const hlavicka = document.createElement("label");
  hlavicka.className = "volba-podokruhu volba-skupiny";

  const hlavnyVstup = document.createElement("input");
  hlavnyVstup.type = "checkbox";

  const hlavnyText = document.createElement("span");
  hlavnyText.className = "text-podokruhu";
  hlavnyText.textContent = skupina;

  hlavicka.append(hlavnyVstup, hlavnyText);
  obal.appendChild(hlavicka);

  const vetvy = document.createElement("div");
  vetvy.className = "vetvy-podokruhu";
  const vstupyVetiev = [];
  const podokruhy = polozky.map((polozka) => polozka.podokruh);

  const nastavStavHlavicky = () => {
    const pocetVybranych = podokruhy.filter((podokruh) => vybranePodokruhy.has(podokruh)).length;
    hlavnyVstup.checked = pocetVybranych === podokruhy.length;
    hlavnyVstup.indeterminate = pocetVybranych > 0 && pocetVybranych < podokruhy.length;
  };

  polozky.forEach((polozka) => {
    const { popisok, vstup } = vytvorVolbuPodokruhu(polozka.podokruh, polozka.nazov, nastavStavHlavicky);
    vstupyVetiev.push(vstup);
    vetvy.appendChild(popisok);
  });

  hlavnyVstup.addEventListener("change", () => {
    nastavVyberPodokruhov(podokruhy, hlavnyVstup.checked);
    vstupyVetiev.forEach((vstup) => {
      vstup.checked = hlavnyVstup.checked;
    });
    hlavnyVstup.indeterminate = false;
  });

  nastavStavHlavicky();
  obal.appendChild(vetvy);
  return obal;
}

function vykresliPodokruhy() {
  prvokZoznamPodokruhov.innerHTML = "";
  const samostatne = [];
  const skupiny = new Map();

  ziskajDostupnePodokruhy().forEach((podokruh) => {
    const { skupina, nazov } = rozdelPodokruhNaSkupinu(podokruh);

    if (!skupina) {
      samostatne.push({ podokruh, nazov });
      return;
    }

    if (!skupiny.has(skupina)) {
      skupiny.set(skupina, []);
    }
    skupiny.get(skupina).push({ podokruh, nazov });
  });

  samostatne.forEach((polozka) => {
    prvokZoznamPodokruhov.appendChild(vytvorVolbuPodokruhu(polozka.podokruh, polozka.nazov).popisok);
  });

  skupiny.forEach((polozky, skupina) => {
    prvokZoznamPodokruhov.appendChild(vytvorSkupinuPodokruhov(skupina, polozky));
  });

  aktualizujPocetFiltra();
}

function obnovFiltrePredmetu() {
  pouzivaTazkyPool = false;
  vybranaPrezentacia = hodnotaVsetko;
  vykresliVyberPrezentacie();
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
}

function vycistiPredoslyVysledok() {
  predoslyVysledok = null;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  tlacidloPredoslyVysledok.disabled = true;
  tlacidloPredoslyVysledok.textContent = "Previous";
}

function textyOdpovedi(indexy, moznosti = aktualneMoznosti) {
  return moznosti
    .filter((moznost) => indexy.includes(moznost.povodnyIndex))
    .map((moznost) => moznost.text);
}

function zlozSpravnyVysledok(otazka) {
  return ["Spravne.", otazka.vysvetlenie].filter(Boolean).join(" ");
}

function zlozZlyVysledok(otazka, moznosti = aktualneMoznosti, uvod = "Nespravne") {
  const vysvetlenie = otazka.vysvetlenie ? ` ${otazka.vysvetlenie}` : "";
  return `${uvod}. Spravna odpoved: ${textSpravnychOdpovedi(otazka, moznosti)}${vysvetlenie}`;
}

function kopirujOtazkuPreVysledok(otazka) {
  return {
    ...otazka,
    moznosti: Array.isArray(otazka.moznosti)
      ? otazka.moznosti.map((moznost) => moznost && typeof moznost === "object" ? { ...moznost } : moznost)
      : otazka.moznosti,
    spravne: Array.isArray(otazka.spravne) ? [...otazka.spravne] : otazka.spravne,
    crackPair: otazka.crackPair ? { ...otazka.crackPair } : otazka.crackPair
  };
}

function ulozPredoslyVysledok(otazka, vybrane, jeSpravne, textVysledku = null) {
  const moznosti = aktualneMoznosti.map((moznost) => ({ ...moznost }));
  predoslyVysledok = {
    jeSpravne,
    otazka: kopirujOtazkuPreVysledok(otazka),
    moznosti,
    vybrane: [...vybrane],
    textVysledku: jeSpravne
      ? zlozSpravnyVysledok(otazka)
      : `Nesprávne. Správna odpoveď: ${textSpravnychOdpovedi(otazka, moznosti)}. ${otazka.vysvetlenie}`
  };
  if (textVysledku) {
    predoslyVysledok.textVysledku = textVysledku;
  }
  tlacidloPredoslyVysledok.disabled = false;
  tlacidloPredoslyVysledok.textContent = "Previous";
}

function ulozNahladAktualnejOtazky() {
  const otazka = aktualnaOtazka();
  if (!otazka) {
    return null;
  }

  return {
    index: aktualnyIndex,
    moznosti: aktualneMoznosti.map((moznost) => ({ ...moznost })),
    vybrane: ziskajVybraneIndexy(),
    vyhodnotene,
    ucenie: jeRezimUcenia(),
    vysledokTrieda: prvokVysledok.className,
    vysledokText: prvokVysledok.textContent
  };
}

function obnovNahladAktualnejOtazky() {
  if (!nahladAktualnejOtazky || nahladAktualnejOtazky.index !== aktualnyIndex) {
    nahladAktualnejOtazky = null;
    zobrazOtazku();
    return;
  }

  const nahlad = nahladAktualnejOtazky;
  const otazka = aktualnaOtazka();
  nahladAktualnejOtazky = null;
  zobrazujePredoslyVysledok = false;
  vyhodnotene = nahlad.vyhodnotene;
  aktualneMoznosti = nahlad.moznosti.map((moznost) => ({ ...moznost }));

  prvokTema.textContent = otazka.tema;
  prvokTypOtazky.textContent = textTypuOtazky(otazka, nahlad.ucenie);
  nastavOtazkuStatement(otazka.otazka);
  prvokPocitadlo.textContent = `${aktualnyIndex + 1} / ${poradieOtazok.length}`;
  prvokSkore.textContent = `Skóre: ${skore}`;
  prvokVysledok.className = nahlad.vysledokTrieda;
  prvokVysledok.textContent = nahlad.vysledokText;

  nastavMediaOtazky(otazka);
  vykresliMoznosti(otazka, aktualneMoznosti, nahlad.vybrane, nahlad.vyhodnotene, nahlad.ucenie);
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = false;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  tlacidloPredoslyVysledok.textContent = "Previous";
  if (!vyhodnotene) {
    spustiCrackTimer();
  }
}

function vykresliPredoslyVysledok() {
  if (!predoslyVysledok) {
    return;
  }

  nahladAktualnejOtazky = ulozNahladAktualnejOtazky();
  zrusCasovacDalsejOtazky();
  zrusCrackTimer(true);
  zobrazujePredoslyVysledok = true;
  vyhodnotene = true;

  const otazka = predoslyVysledok.otazka;
  aktualneMoznosti = predoslyVysledok.moznosti.map((moznost) => ({ ...moznost }));

  prvokTema.textContent = otazka.tema;
  prvokTypOtazky.textContent = predoslyVysledok.jeSpravne ? "Previous: správne" : "Previous: nesprávne";
  nastavOtazkuStatement(otazka.otazka);
  prvokPocitadlo.textContent = "Previous";
  prvokSkore.textContent = `Skóre: ${skore}`;
  vykresliVysledokPredoslej(otazka, predoslyVysledok.jeSpravne, predoslyVysledok.textVysledku);

  nastavMediaOtazky(otazka);
  vykresliMoznosti(otazka, aktualneMoznosti, predoslyVysledok.vybrane, true);
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = true;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  tlacidloPredoslyVysledok.textContent = "Current";
}

function prepniPredoslyVysledok() {
  if (tlacidloPredoslyVysledok.disabled) {
    return;
  }

  if (zobrazujePredoslyVysledok) {
    obnovNahladAktualnejOtazky();
  } else {
    vykresliPredoslyVysledok();
  }
}

function ziskajNastaveniaFlashu(dlzkaSerie) {
  const streak = Math.max(dlzkaSerie, 1);
  const zltyPodiel = Math.min(Math.max((streak - 1) / 12, 0), 1);

  return {
    bieleJadro: Math.min(0.72 + streak * 0.03, 1),
    bielyPodklad: Math.min(0.22 + streak * 0.018, 0.48),
    zltaZiara: Math.min(0.22 + zltyPodiel * 0.68, 0.9),
    zltyOkraj: Math.min(0.10 + zltyPodiel * 0.50, 0.62),
    rozsah: Math.min(34 + streak * 2.5, 78),
    scaleStart: Math.min(1.012 + streak * 0.004, 1.09),
    scalePeak: Math.min(1.035 + streak * 0.006, 1.14),
    trvanie: Math.min(230 + streak * 16, 620)
  };
}

function nastavPozadieFlashu(nastavenia) {
  return [
    `radial-gradient(circle at 50% 48%, rgba(255, 255, 255, ${nastavenia.bieleJadro}) 0%, rgba(255, 255, 255, ${Math.min(nastavenia.bieleJadro * 0.84, 0.92)}) 18%, rgba(255, 230, 58, ${nastavenia.zltaZiara}) ${nastavenia.rozsah}%, rgba(255, 126, 0, ${nastavenia.zltyOkraj}) 78%, rgba(255, 126, 0, 0) 92%)`,
    `rgba(255, 255, 255, ${nastavenia.bielyPodklad})`
  ].join(", ");
}

function spustiMegaStreakCislo(dlzkaSerie) {
  if (!prvokStreakFlashCislo || dlzkaSerie <= 0 || dlzkaSerie % 7 !== 0) {
    return;
  }

  if (casovacMegaStreaku) {
    window.clearTimeout(casovacMegaStreaku);
    casovacMegaStreaku = null;
  }

  const trvanie = 220;
  prvokStreakFlashCislo.classList.remove("aktivny", "specialny");
  prvokStreakFlashCislo.textContent = String(dlzkaSerie);
  prvokStreakFlashCislo.style.setProperty("--mega-trvanie", `${trvanie}ms`);
  prvokStreakFlashCislo.style.setProperty("--mega-scale", Math.min(1 + dlzkaSerie * 0.035, 1.9));
  void prvokStreakFlashCislo.offsetWidth;
  prvokStreakFlashCislo.classList.add("aktivny");

  casovacMegaStreaku = window.setTimeout(() => {
    prvokStreakFlashCislo.classList.remove("aktivny", "specialny");
    casovacMegaStreaku = null;
  }, trvanie + 60);
}

function spustiSpravnyFlash(dlzkaSerie) {
  if (!prvokFlashEfekt) {
    return false;
  }

  const nastavenia = ziskajNastaveniaFlashu(dlzkaSerie);
  const pozadie = nastavPozadieFlashu(nastavenia);
  const specialny = dlzkaSerie > 0 && dlzkaSerie % 7 === 0;
  spustiMegaStreakCislo(dlzkaSerie);
  if (animaciaSpravnehoFlashu) {
    animaciaSpravnehoFlashu.cancel();
  } else if (typeof prvokFlashEfekt.getAnimations === "function") {
    prvokFlashEfekt.getAnimations().forEach((animacia) => animacia.cancel());
  }

  if (casovacSpravnehoFlashu) {
    window.clearTimeout(casovacSpravnehoFlashu);
    casovacSpravnehoFlashu = null;
  }

  prvokFlashEfekt.classList.remove("aktivny", "specialny");
  prvokFlashEfekt.style.mixBlendMode = "normal";
  prvokFlashEfekt.style.background = pozadie;
  prvokFlashEfekt.style.opacity = "1";
  prvokFlashEfekt.style.setProperty("--flash-trvanie", `${nastavenia.trvanie}ms`);
  prvokFlashEfekt.style.setProperty("--flash-scale-start", nastavenia.scaleStart);
  prvokFlashEfekt.style.setProperty("--flash-scale-peak", nastavenia.scalePeak);
  void prvokFlashEfekt.offsetHeight;
  prvokFlashEfekt.classList.toggle("specialny", specialny);

  if (typeof prvokFlashEfekt.animate !== "function") {
    prvokFlashEfekt.classList.add("aktivny");
    casovacSpravnehoFlashu = window.setTimeout(() => {
      prvokFlashEfekt.classList.remove("aktivny", "specialny");
      prvokFlashEfekt.style.opacity = "0";
      casovacSpravnehoFlashu = null;
    }, nastavenia.trvanie + 40);

    return true;
  }

  animaciaSpravnehoFlashu = prvokFlashEfekt.animate([
    {
      opacity: 1,
      transform: `scale(${nastavenia.scaleStart})`,
      filter: "brightness(1.9) saturate(1.15)",
      offset: 0
    },
    {
      opacity: 0.78,
      transform: `scale(${nastavenia.scalePeak})`,
      filter: "brightness(1.34) saturate(1.45)",
      offset: 0.16
    },
    {
      opacity: 0,
      transform: "scale(1)",
      filter: "brightness(1) saturate(1)",
      offset: 1
    }
  ], {
    duration: nastavenia.trvanie,
    easing: "cubic-bezier(0.05, 0.82, 0.22, 1)",
    fill: "forwards"
  });

  animaciaSpravnehoFlashu.onfinish = () => {
    prvokFlashEfekt.style.opacity = "0";
    prvokFlashEfekt.classList.remove("specialny");
    animaciaSpravnehoFlashu = null;
  };

  return true;
}

function spustiEfekt(jeSpravne, dlzkaSerie = 0) {
  const trieda = jeSpravne ? "flash-spravne" : "flash-zle";
  let casOdstranenia = 360;
  document.body.classList.remove("flash-spravne", "flash-zle");

  if (jeSpravne) {
    if (spustiSpravnyFlash(dlzkaSerie)) {
      return;
    }

    const urovenSerie = Math.max(dlzkaSerie, 1);
    const sila = Math.min(0.28 + urovenSerie * 0.045, 0.94);
    const jadro = Math.min(0.50 + urovenSerie * 0.045, 0.98);
    const podklad = Math.min(0.04 + urovenSerie * 0.018, 0.30);
    const rozsah = Math.min(32 + urovenSerie * 1.8, 68);
    const presah = Math.min(urovenSerie * 3, 64);
    const scale = Math.min(1.01 + urovenSerie * 0.004, 1.08);
    const trvanie = Math.min(135 + urovenSerie * 12, 420);
    document.body.style.setProperty("--flash-sila", sila);
    document.body.style.setProperty("--flash-jadro", jadro);
    document.body.style.setProperty("--flash-podklad", podklad);
    document.body.style.setProperty("--flash-rozsah", `${rozsah}%`);
    document.body.style.setProperty("--flash-presah", `${presah}px`);
    document.body.style.setProperty("--flash-scale", scale);
    document.body.style.setProperty("--flash-trvanie", `${trvanie}ms`);
    casOdstranenia = trvanie + 60;
  } else {
    document.body.style.removeProperty("--flash-sila");
    document.body.style.removeProperty("--flash-jadro");
    document.body.style.removeProperty("--flash-podklad");
    document.body.style.removeProperty("--flash-rozsah");
    document.body.style.removeProperty("--flash-presah");
    document.body.style.removeProperty("--flash-scale");
    document.body.style.removeProperty("--flash-trvanie");
  }

  void document.body.offsetWidth;
  document.body.classList.add(trieda);
  window.setTimeout(() => document.body.classList.remove(trieda), casOdstranenia);
}

function spustiSpatnuVazbu(jeSpravne, dlzkaSerie = 0) {
  const spatnaVazba = jeSpravne
    ? ziskajZvukSpravnejOdpovede(dlzkaSerie)
    : ziskajZvukZlejOdpovede(dlzkaSerie);
  const { zvuk, rychlost } = spatnaVazba;
  const pocetPrehrati = pocetPrehratiZvuku(jeSpravne, dlzkaSerie);

  for (let i = 0; i < pocetPrehrati; i++) {
    window.setTimeout(() => prehrajZvuk(zvuk, rychlost), i * 85);
  }

  spustiEfekt(jeSpravne, dlzkaSerie);
}

function maximumStlpca() {
  return Math.max(jeRezimPrejdeniaPoolu() ? pociatocnyPocetPoolu : poradieOtazok.length, 1);
}

function aktualizujStlpec() {
  const maximum = maximumStlpca();
  const presnaVyska = Math.max(0, Math.min(100, (stavStlpca / maximum) * 100));
  const zobrazenaVyska = stavStlpca > 0 ? Math.max(presnaVyska, 1.5) : 0;
  prvokVyplnStlpca.style.height = `${zobrazenaVyska}%`;
  prvokVyplnStlpca.parentElement.style.setProperty("--vyska-liquidu", `${zobrazenaVyska}%`);
  prvokVyplnStlpca.parentElement.style.setProperty("--sirka-liquidu", `${zobrazenaVyska}%`);
  prvokVyplnStlpca.parentElement.style.setProperty("--viditelnost-pixelov", stavStlpca > 0 ? "1" : "0");
  prepocitajPixelyStlpca();
}

function aktualizujStreak(animuj = false) {
  const zobrazenaHodnota = seriaSpravnych;
  const velkost = Math.min(34 + zobrazenaHodnota * 4.4, 112);
  prvokStreakAktualny.textContent = String(zobrazenaHodnota);
  prvokStreakAktualny.style.setProperty("--streak-velkost", `${velkost}px`);
  prvokStreakNajlepsi.textContent = `HS: ${najvyssiaSeriaSpravnych}`;

  if (!animuj) {
    return;
  }

  prvokStreakAktualny.classList.remove("streak-efekt");
  void prvokStreakAktualny.offsetWidth;
  prvokStreakAktualny.classList.add("streak-efekt");
}

function upravStlpec(jeSpravne) {
  const maximum = maximumStlpca();

  if (jeRezimPrejdeniaPoolu()) {
    stavStlpca += jeSpravne ? 1 : 0;
  } else {
    stavStlpca += jeSpravne ? 1 : -1;
  }

  stavStlpca = Math.max(0, Math.min(maximum, stavStlpca));
  aktualizujStlpec();
}

function zrusCasovacDalsejOtazky() {
  if (!casovacDalsejOtazky) {
    return;
  }

  window.clearTimeout(casovacDalsejOtazky);
  casovacDalsejOtazky = null;
}

function naplanujDalsiuOtazku() {
  zrusCasovacDalsejOtazky();
  casovacDalsejOtazky = window.setTimeout(() => {
    casovacDalsejOtazky = null;
    dalsiaOtazka();
  }, 420);
}

function nastavPoradie() {
  zrusCasovacDalsejOtazky();
  zrusCrackTimer(true);
  aktualneOtazky = jeRezimUcenia() ? ziskajOtazkyPreLearnMaster() : ziskajOtazkyPodlaFiltra();
  poradieOtazok = jeRezimUcenia()
    ? [...aktualneOtazky]
    : prepinacNahodnehoPoradia.checked ? zamiesaj(aktualneOtazky) : [...aktualneOtazky];
  pociatocnyPocetPoolu = poradieOtazok.length;
  aktualnyIndex = 0;
  skore = 0;
  pocetVyhodnotenychOtazok = 0;
  casZaciatkuPoolu = Date.now();
  pocetZlychOdpovediPreCitat = 0;
  skryCitaty();
  stavStlpca = 0;
  seriaSpravnych = 0;
  najvyssiaSeriaSpravnych = 0;
  cakaNaVyradenieOtazky = false;
  cakaNaSlowPotvrdenie = false;
  poolDokonceny = false;
  vycistiPredoslyVysledok();
  aktualizujStlpec();
  aktualizujStreak();
  vykresliOdstraneneOtazky();
  vykresliTazkeOtazky();

  if (poradieOtazok.length === 0) {
    zobrazPrazdnyVyber();
    return;
  }

  zobrazOtazku();
}

function aktualnaOtazka() {
  return poradieOtazok[aktualnyIndex];
}

function zobrazPrazdnyVyber() {
  zrusCrackTimer(true);
  vyhodnotene = true;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  const pocetPredOdstranenim = ziskajOtazkyPrePrezentaciu()
    .filter((otazka) => vybranePodokruhy.has(ziskajPodokruh(otazka))).length;
  prvokTema.textContent = "Výber otázok";
  prvokTypOtazky.textContent = "0 otázok";
  const textPrazdnehoPoolu = pouzivaTazkyPool
    ? "Tazky pool je prazdny. Pridaj do neho otazky alebo sa vrat na bezny filter."
    : pocetPredOdstranenim > 0
    ? "V aktuálnom poole už nie sú otázky. Vráť niektorú odstránenú otázku v nastaveniach."
    : "Vyber aspoň jeden podokruh v nastaveniach.";
  nastavOtazkuStatement(textPrazdnehoPoolu);
  prvokPocitadlo.textContent = "0 / 0";
  prvokSkore.textContent = "Skóre: 0";
  prvokMoznosti.innerHTML = "";
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  prvokOtazka.classList.remove("exam-otazka");
  prvokObrazokOtazky.classList.add("skryte");
  prvokMediaOtazky.classList.add("skryte");
  prvokMediaOtazky.innerHTML = "";
  prvokKod.classList.add("skryte");
  prvokKod.textContent = "";
  tlacidloMedzernik.disabled = true;
  tlacidloOdstranitOtazku.disabled = true;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  tlacidloPredoslyVysledok.textContent = "Previous";
}

function vytvorObrazokMedia(src, alt) {
  const obrazok = document.createElement("img");
  obrazok.src = src;
  obrazok.alt = alt;
  obrazok.className = "obrazok-otazky";
  return obrazok;
}

function nastavMediaOtazky(otazka) {
  const obrazky = Array.isArray(otazka.obrazky) ? otazka.obrazky : [];
  prvokMediaOtazky.innerHTML = "";
  prvokMediaOtazky.classList.remove("exam-pisanie");

  if (obrazky.length > 0) {
    prvokObrazokOtazky.removeAttribute("src");
    prvokObrazokOtazky.alt = "";
    prvokObrazokOtazky.classList.add("skryte");
    obrazky.forEach((obrazok, index) => {
      prvokMediaOtazky.appendChild(vytvorObrazokMedia(obrazok, `Obrázok k otázke ${index + 1}`));
    });
    prvokMediaOtazky.classList.remove("skryte");
  } else if (otazka.obrazok) {
    prvokObrazokOtazky.src = otazka.obrazok;
    prvokObrazokOtazky.alt = otazka.popisObrazka || "Obrázok k otázke";
    prvokObrazokOtazky.classList.remove("skryte");
    prvokMediaOtazky.classList.add("skryte");
  } else {
    prvokObrazokOtazky.removeAttribute("src");
    prvokObrazokOtazky.alt = "";
    prvokObrazokOtazky.classList.add("skryte");
    prvokMediaOtazky.classList.add("skryte");
  }

  if (otazka.kod) {
    prvokKod.textContent = otazka.kod;
    prvokKod.classList.remove("skryte");
  } else {
    prvokKod.textContent = "";
    prvokKod.classList.add("skryte");
  }
}

function vykresliMoznosti(otazka, moznosti, vybrane = [], ukazVyhodnotenie = false, ukazUcenie = false) {
  prvokMoznosti.innerHTML = "";
  moznosti.forEach((moznost, index) => {
    const popisok = document.createElement("label");
    popisok.className = "moznost";
    popisok.classList.toggle("ucenie", ukazUcenie);

    const vstup = document.createElement("input");
    vstup.type = otazka.typ === "viac" ? "checkbox" : "radio";
    vstup.name = "odpoved";
    vstup.value = String(moznost.povodnyIndex);
    vstup.checked = vybrane.includes(moznost.povodnyIndex);

    if (ukazVyhodnotenie || ukazUcenie) {
      vstup.disabled = true;
      if (otazka.spravne.includes(moznost.povodnyIndex)) {
        popisok.classList.add("spravna");
      }
      if (vstup.checked && !otazka.spravne.includes(moznost.povodnyIndex)) {
        popisok.classList.add("chybna");
      }
    } else {
      vstup.addEventListener("change", aktualizujVybraneMoznosti);
      popisok.addEventListener("click", (udalost) => {
        udalost.preventDefault();
        // Slow Mode reveal: tapnutim na keycap (z/x) prejdes na dalsiu otazku (mobil bez medzernika).
        if (cakaNaSlowPotvrdenie) {
          cakaNaSlowPotvrdenie = false;
          dalsiaOtazka();
          return;
        }
        prepniVstupOdpovede(vstup);
      });
    }

    const klavesa = document.createElement("span");
    klavesa.className = "klavesa";

    const obrazokKlavesy = vytvorObrazokKlavesy();

    const cisloKlavesy = document.createElement("span");
    cisloKlavesy.className = "cisloKlavesy";
    // V Mobile Mode su keycapy "1" (pravda) a "0" (nepravda) namiesto klaves z/x.
    const mobilCrack = jeMobilnyCrackMode();
    const crackPopisok = index === 0
      ? (mobilCrack ? "1" : "z")
      : (mobilCrack ? "0" : "x");
    cisloKlavesy.textContent = otazka.crack ? crackPopisok : String(index + 1);
    klavesa.append(obrazokKlavesy, cisloKlavesy);

    const obsah = document.createElement("span");
    obsah.className = "obsahMoznosti";

    const text = document.createElement("span");
    text.className = "textMoznosti";
    text.textContent = moznost.text;
    obsah.appendChild(text);

    if (moznost.obrazok) {
      const obrazok = document.createElement("img");
      obrazok.src = moznost.obrazok;
      obrazok.alt = moznost.text || "Obrázok možnosti";
      obrazok.className = "obrazok-moznosti";
      obsah.appendChild(obrazok);
    }

    popisok.append(vstup, klavesa, obsah);
    prvokMoznosti.appendChild(popisok);
  });

  aktualizujVybraneMoznosti();
}

function pocetZobrazenychMoznosti(otazka) {
  const nastavene = Number(otazka.pocetZobrazenychMoznosti);
  if (Number.isInteger(nastavene) && nastavene > 0) {
    return Math.min(nastavene, otazka.moznosti.length);
  }

  return otazka.moznosti.length >= 7 ? 5 : otazka.moznosti.length;
}

function vytvorMoznostOtazky(moznost, povodnyIndex) {
  if (moznost && typeof moznost === "object") {
    return {
      text: moznost.text || `Možnosť ${povodnyIndex + 1}`,
      obrazok: moznost.obrazok || "",
      povodnyIndex
    };
  }

  return {
    text: String(moznost),
    obrazok: "",
    povodnyIndex
  };
}

function vyberSpravneMoznostiOtazky(otazka) {
  return otazka.moznosti
    .map(vytvorMoznostOtazky)
    .filter((moznost) => otazka.spravne.includes(moznost.povodnyIndex));
}

function vytvorTextLearnMaster(text, trieda = "") {
  const prvok = document.createElement("div");
  if (trieda) {
    prvok.className = trieda;
  }
  nastavStatementText(prvok, text || "");
  return prvok;
}

function ziskajNadpisLearnMasterOkruhu() {
  if (pouzivaTazkyPool) {
    return "Tazky pool";
  }

  if (vybranaPrezentacia === hodnotaVsetko) {
    return "Vsetky okruhy";
  }

  return vybranaPrezentacia;
}

function zoskupLearnMasterOtazky(otazky) {
  const skupiny = [];
  const indexySkupin = new Map();

  otazky.forEach((otazka) => {
    const podokruh = ziskajPodokruh(otazka);
    if (!indexySkupin.has(podokruh)) {
      indexySkupin.set(podokruh, skupiny.length);
      skupiny.push({ nazov: podokruh, otazky: [] });
    }
    skupiny[indexySkupin.get(podokruh)].otazky.push(otazka);
  });

  return skupiny;
}

function jePravdivyStatementLearnMaster(otazka) {
  return Boolean(otazka.crackPair?.pravda || otazka.crack);
}

function ziskajZadanieLearnMaster(otazka) {
  return otazka.crackPair?.pravda || otazka.otazka;
}

function pridajObrazokLearnMaster(obal, src, alt) {
  const obrazok = vytvorObrazokMedia(src, alt);
  obrazok.classList.add("learn-master-obrazok");
  obal.appendChild(obrazok);
}

function pridajMediaLearnMaster(obal, otazka) {
  const obrazky = Array.isArray(otazka.obrazky) ? otazka.obrazky : [];

  if (obrazky.length > 0) {
    const media = document.createElement("div");
    media.className = "learn-master-media";
    obrazky.forEach((obrazok, index) => {
      pridajObrazokLearnMaster(media, obrazok, `Obrazok k otazke ${index + 1}`);
    });
    obal.appendChild(media);
  } else if (otazka.obrazok) {
    const media = document.createElement("div");
    media.className = "learn-master-media";
    pridajObrazokLearnMaster(media, otazka.obrazok, otazka.popisObrazka || "Obrazok k otazke");
    obal.appendChild(media);
  }

  if (otazka.kod) {
    const kod = document.createElement("pre");
    kod.className = "kod learn-master-kod";
    kod.textContent = otazka.kod;
    obal.appendChild(kod);
  }
}

function ziskajSpravneMoznostiLearnMaster(otazka) {
  if (otazka.crack) {
    const jePravda = Array.isArray(otazka.spravne) && otazka.spravne.includes(0);
    return [{ text: jePravda ? "z - pravda" : "x - nepravda", obrazok: "" }];
  }

  if (!Array.isArray(otazka.moznosti) || !Array.isArray(otazka.spravne)) {
    return [];
  }

  return otazka.moznosti
    .map(vytvorMoznostOtazky)
    .filter((moznost) => otazka.spravne.includes(moznost.povodnyIndex));
}

function vytvorOdpovedeLearnMaster(otazka) {
  const obal = document.createElement("div");
  obal.className = "learn-master-odpovede";

  const popisok = document.createElement("div");
  popisok.className = "learn-master-popisok";
  popisok.textContent = otazka.typ === "viac" ? "Spravne odpovede" : "Spravna odpoved";
  obal.appendChild(popisok);

  if (otazka.exam) {
    obal.appendChild(vytvorExamOdpoved(otazka));
    return obal;
  }

  const odpovede = ziskajSpravneMoznostiLearnMaster(otazka);
  if (odpovede.length === 0) {
    obal.appendChild(vytvorTextLearnMaster("Bez zapisanej spravnej odpovede.", "learn-master-odpoved-text"));
    return obal;
  }

  const zoznam = document.createElement("ol");
  zoznam.className = "learn-master-zoznam-odpovedi";
  odpovede.forEach((odpoved, index) => {
    const polozka = document.createElement("li");
    polozka.appendChild(vytvorTextLearnMaster(odpoved.text, "learn-master-odpoved-text"));
    if (odpoved.obrazok) {
      pridajObrazokLearnMaster(polozka, odpoved.obrazok, `Obrazok k odpovedi ${index + 1}`);
    }
    zoznam.appendChild(polozka);
  });
  obal.appendChild(zoznam);

  return obal;
}

function vytvorOtazkuLearnMaster(otazka, poradoveCislo) {
  const clanok = document.createElement("article");
  clanok.className = "learn-master-otazka";
  const jeStatement = jePravdivyStatementLearnMaster(otazka);

  const hlavicka = document.createElement("div");
  hlavicka.className = "learn-master-hlavicka";

  const cislo = document.createElement("span");
  cislo.className = "learn-master-cislo";
  cislo.textContent = String(poradoveCislo);

  const okruh = document.createElement("span");
  okruh.className = "learn-master-okruh";
  okruh.textContent = ziskajPrezentaciu(otazka);

  hlavicka.append(cislo, okruh);
  clanok.appendChild(hlavicka);
  clanok.appendChild(vytvorTextLearnMaster(ziskajZadanieLearnMaster(otazka), "learn-master-zadanie"));
  pridajMediaLearnMaster(clanok, otazka);

  if (!jeStatement) {
    clanok.appendChild(vytvorOdpovedeLearnMaster(otazka));
  }

  if (!jeStatement && otazka.vysvetlenie) {
    clanok.appendChild(vytvorTextLearnMaster(otazka.vysvetlenie, "learn-master-vysvetlenie"));
  }

  return clanok;
}

function zobrazLearnModeMaster() {
  const otazky = [...poradieOtazok];
  if (otazky.length === 0) {
    zobrazPrazdnyVyber();
    return;
  }

  vyhodnotene = true;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  cakaNaVyradenieOtazky = false;
  poolDokonceny = false;
  aktualneMoznosti = [];

  const skupiny = zoskupLearnMasterOtazky(otazky);
  prvokTema.textContent = ziskajNadpisLearnMasterOkruhu();
  prvokTypOtazky.textContent = "Learn Mode Master";
  nastavOtazkuStatement("Learn Mode Master");
  prvokOtazka.classList.remove("exam-otazka");
  prvokPocitadlo.textContent = `${otazky.length} odpovedi`;
  prvokSkore.textContent = `${skupiny.length} podokruhov`;
  prvokMoznosti.innerHTML = "";
  prvokVysledok.innerHTML = "";
  prvokVysledok.className = "vysledok learn-master-vysledok";
  prvokObrazokOtazky.removeAttribute("src");
  prvokObrazokOtazky.alt = "";
  prvokObrazokOtazky.classList.add("skryte");
  prvokMediaOtazky.innerHTML = "";
  prvokMediaOtazky.classList.remove("exam-pisanie");
  prvokMediaOtazky.classList.add("skryte");
  prvokKod.textContent = "";
  prvokKod.classList.add("skryte");

  const obal = document.createElement("div");
  obal.className = "learn-master";

  let poradoveCislo = 1;
  skupiny.forEach((skupina) => {
    const sekcia = document.createElement("section");
    sekcia.className = "learn-master-podokruh";

    const nadpis = document.createElement("h3");
    nadpis.className = "learn-master-nadpis";
    nadpis.textContent = `${skupina.nazov} (${skupina.otazky.length})`;
    sekcia.appendChild(nadpis);

    skupina.otazky.forEach((otazka) => {
      sekcia.appendChild(vytvorOtazkuLearnMaster(otazka, poradoveCislo));
      poradoveCislo += 1;
    });

    obal.appendChild(sekcia);
  });

  prvokVysledok.appendChild(obal);
  tlacidloMedzernik.disabled = true;
  tlacidloOdstranitOtazku.disabled = true;
  tlacidloPridatTazkuOtazku.disabled = true;
  tlacidloPridatTazkuOtazku.classList.remove("vybrana");
  tlacidloPridatTazkuOtazku.setAttribute("aria-pressed", "false");
  tlacidloPredoslyVysledok.disabled = true;
  tlacidloPredoslyVysledok.textContent = "Previous";
  aktualizujRozlozenieUcenia();
}

function vyberMoznostiOtazky(otazka) {
  const moznosti = otazka.moznosti.map(vytvorMoznostOtazky);
  if (otazka.pevnePoradieMoznosti) {
    return moznosti;
  }

  const pocet = pocetZobrazenychMoznosti(otazka);

  if (pocet >= moznosti.length) {
    return zamiesaj(moznosti);
  }

  const spravne = zamiesaj(moznosti.filter((moznost) => otazka.spravne.includes(moznost.povodnyIndex)));
  const chytaky = zamiesaj(moznosti.filter((moznost) => !otazka.spravne.includes(moznost.povodnyIndex)));
  const vybrane = [];

  if (spravne.length > 0) {
    vybrane.push(spravne.shift());
  }

  if (chytaky.length > 0 && vybrane.length < pocet) {
    vybrane.push(chytaky.shift());
  }

  const maximalnyPocetChytakov = Math.min(chytaky.length, Math.max(0, pocet - 2));
  const dalsieChytaky = maximalnyPocetChytakov > 0 ? nahodneCeleCislo(0, maximalnyPocetChytakov) : 0;
  for (let i = 0; i < dalsieChytaky && vybrane.length < pocet; i++) {
    vybrane.push(chytaky.shift());
  }

  const zvysne = zamiesaj([...spravne, ...chytaky]);
  while (vybrane.length < pocet && zvysne.length > 0) {
    vybrane.push(zvysne.shift());
  }

  return zamiesaj(vybrane);
}

function vytvorExamOdpoved(otazka) {
  const obal = document.createElement("div");
  obal.className = "exam-odpoved";

  otazka.examSekcie.forEach((sekcia) => {
    const nadpis = document.createElement("h3");
    nadpis.textContent = sekcia.nazov;
    obal.appendChild(nadpis);

    const zoznam = document.createElement("ul");
    sekcia.body.forEach((bod) => {
      const idBodu = typeof bod === "string" ? null : bod.id;
      const povodny = typeof bod === "string" ? bod : bod.text;
      const text = (idBodu && typeof window.aplikujExamEditText === "function")
        ? window.aplikujExamEditText(idBodu, povodny)
        : povodny;
      const polozka = document.createElement("li");
      polozka.textContent = text;
      if (idBodu) {
        polozka.dataset.editId = idBodu;
      }
      zoznam.appendChild(polozka);
    });
    obal.appendChild(zoznam);
  });

  if (typeof window.pridajExamEditUI === "function") {
    window.pridajExamEditUI(obal, otazka);
  }

  return obal;
}

function nastavExamOdpoved(otazka, zobrazit) {
  prvokVysledok.innerHTML = "";

  if (!zobrazit) {
    prvokVysledok.className = "vysledok skryte";
    return;
  }

  prvokVysledok.className = "vysledok exam-vysledok";
  prvokVysledok.appendChild(vytvorExamOdpoved(otazka));
}

function zobrazExamOdpoved() {
  const otazka = aktualnaOtazka();
  if (!otazka?.exam || otazka.examOdpovedZobrazena) {
    return;
  }

  otazka.examOdpovedZobrazena = true;
  nastavExamOdpoved(otazka, true);
}

function vytvorExamPisanie(otazka) {
  const obal = document.createElement("div");
  obal.className = "exam-pisanie-vnutro";

  if (!otazka.examOdpovedeUzivatela) {
    otazka.examOdpovedeUzivatela = {};
  }

  otazka.examSekcie.forEach((sekcia) => {
    const blok = document.createElement("section");
    blok.className = "exam-sekcia-pisania";

    const nadpis = document.createElement("h3");
    nadpis.textContent = `Popiste ${sekcia.nazov}`;

    const pole = document.createElement("textarea");
    pole.className = "exam-vstup";
    pole.rows = 5;
    pole.spellcheck = false;
    pole.value = otazka.examOdpovedeUzivatela[sekcia.nazov] || "";
    pole.placeholder = "Tvoje vypracovanie...";
    pole.addEventListener("input", () => {
      otazka.examOdpovedeUzivatela[sekcia.nazov] = pole.value;
    });

    blok.append(nadpis, pole);
    obal.appendChild(blok);
  });

  return obal;
}

function nastavExamPisanie(otazka) {
  prvokMediaOtazky.innerHTML = "";
  prvokMediaOtazky.classList.add("exam-pisanie");
  prvokMediaOtazky.classList.remove("skryte");
  prvokMediaOtazky.appendChild(vytvorExamPisanie(otazka));
}

function zobrazExamOtazku(otazka) {
  otazka.examOdpovedZobrazena = false;
  vyhodnotene = true;
  aktualneMoznosti = [];
  prvokMoznosti.innerHTML = "";
  nastavExamPisanie(otazka);
  nastavExamOdpoved(otazka, false);
  prvokOtazka.classList.add("exam-otazka");
  tlacidloMedzernik.disabled = false;
  aktualizujTlacidloNeviem();
}

function zobrazOtazku() {
  zrusCasovacDalsejOtazky();
  zrusCrackTimer(true);
  const otazka = aktualnaOtazka();
  if (!otazka) {
    zobrazPrazdnyVyber();
    return;
  }

  if (jeRezimUcenia()) {
    zobrazLearnModeMaster();
    return;
  }

  nastavNahodnyCrackParStatement(otazka);

  const ucenie = jeRezimUcenia();
  vyhodnotene = ucenie;
  zobrazujePredoslyVysledok = false;
  cakaNaSlowPotvrdenie = false;
  nahladAktualnejOtazky = null;
  cakaNaVyradenieOtazky = false;
  poolDokonceny = false;

  prvokTema.textContent = otazka.tema;
  prvokTypOtazky.textContent = textTypuOtazky(otazka, ucenie);
  nastavOtazkuStatement(otazka.otazka);
  prvokOtazka.classList.toggle("exam-otazka", Boolean(otazka.exam));
  prvokPocitadlo.textContent = `${aktualnyIndex + 1} / ${poradieOtazok.length}`;
  prvokSkore.textContent = `Skóre: ${skore}`;
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = false;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  tlacidloPredoslyVysledok.textContent = "Previous";

  nastavMediaOtazky(otazka);

  if (otazka.exam) {
    zobrazExamOtazku(otazka);
    return;
  }

  aktualneMoznosti = ucenie ? vyberSpravneMoznostiOtazky(otazka) : vyberMoznostiOtazky(otazka);

  const spravneMoznosti = ucenie ? spravneZobrazeneIndexy(otazka, aktualneMoznosti) : [];
  vykresliMoznosti(otazka, aktualneMoznosti, spravneMoznosti, ucenie, ucenie);
  spustiCrackTimer();
}

function ziskajVybraneIndexy() {
  return [...prvokMoznosti.querySelectorAll("input:checked")].map((vstup) => Number(vstup.value));
}

function aktualizujVybraneMoznosti() {
  [...prvokMoznosti.children].forEach((popisok) => {
    const vstup = popisok.querySelector("input");
    popisok.classList.toggle("vybrana", Boolean(vstup && vstup.checked));
  });
}

function prepniVstupOdpovede(vstup) {
  if (!vstup || vstup.disabled || vyhodnotene || jeRezimUcenia()) {
    return;
  }

  const bolVybrany = vstup.checked;
  if (vstup.type === "radio") {
    [...prvokMoznosti.querySelectorAll('input[type="radio"]')].forEach((inyVstup) => {
      inyVstup.checked = false;
    });
    vstup.checked = !bolVybrany;
  } else {
    vstup.checked = !vstup.checked;
  }

  aktualizujVybraneMoznosti();

  const otazka = aktualnaOtazka();
  if (jeCrackMode() && otazka?.crack && vstup.type === "radio" && vstup.checked) {
    window.setTimeout(() => skontrolujOdpoved(), 0);
    return;
  }

  if (jeRychlyRezim2x() && otazka?.typ === "jedna" && vstup.type === "radio" && vstup.checked) {
    window.setTimeout(() => skontrolujOdpoved(), 0);
  }
}

function vyberMoznostKlavesou(index) {
  if (vyhodnotene || jeRezimUcenia() || zobrazujePredoslyVysledok) {
    return;
  }

  const vstupy = [...prvokMoznosti.querySelectorAll("input")];
  const vstup = vstupy[index];
  if (!vstup || vstup.disabled) {
    return;
  }

  prepniVstupOdpovede(vstup);
}

function posunOtazkuVPovodnomPoradi(smer) {
  if (jeRezimUcenia() || zobrazujePredoslyVysledok || poolDokonceny || poradieOtazok.length === 0) {
    return;
  }

  const otazka = aktualnaOtazka();
  if (!otazka) {
    return;
  }

  const povodnePoradie = aktualneOtazky.length > 0 ? aktualneOtazky : ziskajOtazkyPodlaFiltra();
  if (povodnePoradie.length <= 1) {
    return;
  }

  const aktualneId = ziskajIdOtazky(otazka);
  const povodnyIndex = povodnePoradie.findIndex((polozka) => ziskajIdOtazky(polozka) === aktualneId);
  if (povodnyIndex === -1) {
    return;
  }

  const cielovyPovodnyIndex = (povodnyIndex + smer + povodnePoradie.length) % povodnePoradie.length;
  const cielovaOtazka = povodnePoradie[cielovyPovodnyIndex];
  const cieloveId = ziskajIdOtazky(cielovaOtazka);
  const cielovyNahodnyIndex = poradieOtazok.findIndex((polozka) => ziskajIdOtazky(polozka) === cieloveId);
  if (cielovyNahodnyIndex === -1) {
    return;
  }

  zrusCasovacDalsejOtazky();
  aktualnyIndex = cielovyNahodnyIndex;
  zobrazOtazku();
}

function posunOtazkuSipkou(smer, tlacidlo) {
  spustiEfektTlacidla(tlacidlo);
  posunOtazkuVPovodnomPoradi(smer);
}

function jeTextovePole(prvok) {
  if (!prvok) {
    return false;
  }

  const tag = prvok.tagName;
  return tag === "TEXTAREA" || (tag === "INPUT" && ["text", "search", "email", "number", "password"].includes(prvok.type));
}

function obsluzKlavesnicu(udalost) {
  if (citatZobrazeny) {
    udalost.preventDefault();
    udalost.stopPropagation();
    skryCitaty();
    return;
  }

  if (jeTextovePole(document.activeElement)) {
    return;
  }

  if (obsluzRytmickuKlavesu(udalost.key)) {
    udalost.preventDefault();
    return;
  }

  if (prvokRezimTest.classList.contains("skryte")) {
    return;
  }

  if (!prvokPanelNastaveni.classList.contains("skryte")) {
    return;
  }

  const klaves = udalost.key.toLowerCase();
  const indexMoznosti = klavesyMoznosti.indexOf(klaves);

  if (jeRezimUcenia()) {
    return;
  }

  if (!jeExamMode() && (jeCrackMode() || aktualnaOtazka()?.crack) && (klaves === "z" || klaves === "x")) {
    udalost.preventDefault();
    // Slow Mode: po zlej odpovedi z/x rovno potvrdi a prejde dalej.
    if (cakaNaSlowPotvrdenie) {
      cakaNaSlowPotvrdenie = false;
      dalsiaOtazka();
      return;
    }
    vyberMoznostKlavesou(klaves === "z" ? 0 : 1);
    return;
  }

  if (indexMoznosti !== -1) {
    udalost.preventDefault();
    vyberMoznostKlavesou(indexMoznosti);
    return;
  }

  if (klaves === "o") {
    udalost.preventDefault();
    nastavNahodnyCitat(true);
    return;
  }

  if (!jeExamMode() && klaves === "q") {
    udalost.preventDefault();
    spustiEfektTlacidla(tlacidloOdstranitOtazku);
    odoberAktualnuOtazku();
    return;
  }

  if (!jeExamMode() && klaves === "w") {
    udalost.preventDefault();
    pridajAktualnuOtazkuDoTazkych();
    return;
  }

  if (!jeExamMode() && klaves === "e") {
    udalost.preventDefault();
    spustiEfektTlacidla(tlacidloNeviem);
    odpovedzNeviem();
    return;
  }

  if (udalost.key === "Backspace") {
    udalost.preventDefault();
    prepniPredoslyVysledok();
    return;
  }

  if (udalost.key === "ArrowLeft") {
    udalost.preventDefault();
    posunOtazkuSipkou(-1, tlacidloSipkaVlavo);
    return;
  }

  if (udalost.key === "ArrowRight") {
    udalost.preventDefault();
    posunOtazkuSipkou(1, tlacidloSipkaVpravo);
    return;
  }

  if (udalost.code === "Space") {
    udalost.preventDefault();
    pouziMedzernik();
    return;
  }
}

function pouziMedzernik() {
  if (casovacDalsejOtazky) {
    return;
  }

  if (jeRezimUcenia()) {
    return;
  }

  if (jeExamMode()) {
    const otazka = aktualnaOtazka();
    if (otazka?.exam && !otazka.examOdpovedZobrazena) {
      zobrazExamOdpoved();
    } else {
      dalsiaOtazka();
    }
    return;
  }

  if (poolDokonceny) {
    nastavPoradie();
    return;
  }

  // Slow Mode: medzernikom potvrdis prezretie chyby a prejdes na dalsiu otazku.
  if (cakaNaSlowPotvrdenie) {
    cakaNaSlowPotvrdenie = false;
    dalsiaOtazka();
    return;
  }

  if (jeCrackMode()) {
    return;
  }

  if (zobrazujePredoslyVysledok) {
    obnovNahladAktualnejOtazky();
    return;
  }

  if (jeRezimUcenia()) {
    posunOtazkuVPovodnomPoradi(1);
    return;
  }

  if (vyhodnotene) {
    dalsiaOtazka();
  } else {
    skontrolujOdpoved();
  }
}

function rovnakePolia(prvePole, druhePole) {
  if (prvePole.length !== druhePole.length) {
    return false;
  }
  const prve = [...prvePole].sort((a, b) => a - b);
  const druhe = [...druhePole].sort((a, b) => a - b);
  return prve.every((hodnota, index) => hodnota === druhe[index]);
}

function textSpravnychOdpovedi(otazka, moznosti = aktualneMoznosti) {
  if (otazka.crack) {
    return otazka.spravne.includes(0) ? "z (pravda)" : "x (nepravda)";
  }

  return moznosti
    .map((moznost, index) => ({ ...moznost, index }))
    .filter((moznost) => otazka.spravne.includes(moznost.povodnyIndex))
    .map((moznost) => `${moznost.index + 1}. ${moznost.text}`)
    .join(" | ");
}

function spravneZobrazeneIndexy(otazka, moznosti = aktualneMoznosti) {
  return moznosti
    .filter((moznost) => otazka.spravne.includes(moznost.povodnyIndex))
    .map((moznost) => moznost.povodnyIndex);
}

function skontrolujOdpoved(vybrane = ziskajVybraneIndexy(), povolPrazdnu = false, uvodZlejOdpovede = "Nespravne") {
  if (vyhodnotene || jeRezimUcenia() || zobrazujePredoslyVysledok) {
    return;
  }

  zrusCrackTimer();
  const otazka = aktualnaOtazka();
  if (vybrane.length === 0 && !povolPrazdnu) {
    prvokVysledok.className = "vysledok zle";
    prvokVysledok.textContent = "Najprv vyber odpoveď.";
    return;
  }

  vyhodnotene = true;

  const jeSpravne = rovnakePolia(vybrane, spravneZobrazeneIndexy(otazka));
  const textVysledku = jeSpravne ? zlozSpravnyVysledok(otazka) : zlozZlyVysledok(otazka, aktualneMoznosti, uvodZlejOdpovede);
  ulozPredoslyVysledok(otazka, vybrane, jeSpravne, textVysledku);
  cakaNaVyradenieOtazky = jeSpravne && jeRezimPrejdeniaPoolu();

  const predoslaSeriaSpravnych = seriaSpravnych;
  if (jeSpravne) {
    seriaSpravnych++;
    najvyssiaSeriaSpravnych = Math.max(najvyssiaSeriaSpravnych, seriaSpravnych);
  } else {
    seriaSpravnych = 0;
  }

  upravStlpec(jeSpravne);
  aktualizujStreak(jeSpravne);
  spustiSpatnuVazbu(jeSpravne, jeSpravne ? seriaSpravnych : predoslaSeriaSpravnych);
  posunCitatPoOdpovedi(jeSpravne);

  if (jeSpravne) {
    skore++;
  }

  // Slow Mode: po zlej odpovedi v Crack Mode pozastav postup a ukaz spravnu odpoved.
  const slowZastavenie = jeCrackMode() && jeSlowMode() && !jeSpravne;

  if (jeCrackMode() && slowZastavenie) {
    cakaNaSlowPotvrdenie = true;
    zobrazSpravnuOdpovedVStatemente(otazka, jeSpravne, textVysledku);
  } else if (jeCrackMode()) {
    prvokVysledok.className = "vysledok skryte";
    prvokVysledok.textContent = "";
  } else if (jeSpravne) {
    prvokVysledok.className = "vysledok ok";
    prvokVysledok.textContent = textVysledku;
  } else {
    prvokVysledok.className = "vysledok zle";
    prvokVysledok.textContent = `Nesprávne. Správna odpoveď: ${textSpravnychOdpovedi(otazka)}. ${otazka.vysvetlenie}`;
  }

  if (!jeSpravne && !jeCrackMode()) {
    prvokVysledok.textContent = textVysledku;
  }

  [...prvokMoznosti.children].forEach((popisok, index) => {
    if (!aktualneMoznosti[index]) {
      return;
    }

    const povodnyIndex = aktualneMoznosti[index].povodnyIndex;
    const jeVybrana = vybrane.includes(povodnyIndex);
    const jeSpravna = otazka.spravne.includes(povodnyIndex);
    if (jeSpravna) {
      popisok.classList.add("spravna");
    }
    if (jeVybrana && !jeSpravna) {
      popisok.classList.add("chybna");
    }
    popisok.querySelector("input").disabled = true;
  });

  prvokSkore.textContent = `Skóre: ${skore}`;

  aktualizujTlacidloNeviem();

  if (!slowZastavenie && (jeCrackMode() || (jeSpravne && jeRychlyRezim()) || jeRychlyRezim2x())) {
    naplanujDalsiuOtazku();
  }
}

function odpovedzNeviem() {
  if (jeRezimUcenia()) {
    return;
  }

  skontrolujOdpoved([], true, "Neviem");
}

function vyradSpravneZodpovedanuOtazku() {
  if (!cakaNaVyradenieOtazky) {
    return false;
  }

  const otazka = aktualnaOtazka();
  cakaNaVyradenieOtazky = false;

  if (!otazka) {
    return false;
  }

  const idOtazky = ziskajIdOtazky(otazka);
  poradieOtazok = poradieOtazok.filter((polozka) => ziskajIdOtazky(polozka) !== idOtazky);
  aktualneOtazky = aktualneOtazky.filter((polozka) => ziskajIdOtazky(polozka) !== idOtazky);

  if (aktualnyIndex >= poradieOtazok.length) {
    aktualnyIndex = 0;
  }

  return true;
}

function formatTrvanie(ms) {
  const sekundy = Math.max(0, Math.round(ms / 1000));
  const hodiny = Math.floor(sekundy / 3600);
  const minuty = Math.floor((sekundy % 3600) / 60);
  const zvysok = sekundy % 60;
  const dvojm = (n) => String(n).padStart(2, "0");
  return hodiny > 0 ? `${hodiny}:${dvojm(minuty)}:${dvojm(zvysok)}` : `${minuty}:${dvojm(zvysok)}`;
}

function sklonujOtazky(pocet) {
  if (pocet === 1) return "otázka";
  if (pocet >= 2 && pocet <= 4) return "otázky";
  return "otázok";
}

function zobrazDokoncenyPool() {
  zrusCrackTimer(true);
  poolDokonceny = true;
  prehrajZvuk(zvukDokonceniaPoolu);
  prehrajZvuk(zvukDokonceniaPooluChoir);
  prehrajVideoOverlay("Animations/explosion_ultiamte.mp4", 1);
  vyhodnotene = true;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  const vsetkoSpravne = skore >= pociatocnyPocetPoolu && pociatocnyPocetPoolu > 0;
  const casPoolu = formatTrvanie(Date.now() - casZaciatkuPoolu);
  prvokTema.textContent = "Pool hotovy";
  prvokTypOtazky.textContent = vsetkoSpravne ? "Vsetko spravne" : `Vysledok ${skore} / ${pociatocnyPocetPoolu}`;

  // "HOTOVO" v slote otazky + staty: kolko otazok bolo zodpovedanych a za aky cas.
  prvokOtazka.classList.remove("crack-odhalena", "exam-otazka");
  prvokOtazka.innerHTML = "";
  prvokOtazka.appendChild(document.createTextNode("HOTOVO"));
  const staty = document.createElement("span");
  staty.className = "pool-hotovo-staty";
  staty.textContent = `${pocetVyhodnotenychOtazok} ${sklonujOtazky(pocetVyhodnotenychOtazok)} za ${casPoolu}`;
  prvokOtazka.appendChild(staty);

  prvokPocitadlo.textContent = `${stavStlpca} / ${pociatocnyPocetPoolu}`;
  prvokSkore.textContent = `Skore: ${skore}`;
  prvokMoznosti.innerHTML = "";
  prvokVysledok.className = "vysledok ok";
  prvokVysledok.textContent = "Stlac medzernik pre novy beh toho isteho poolu.";
  prvokObrazokOtazky.classList.add("skryte");
  prvokMediaOtazky.classList.add("skryte");
  prvokMediaOtazky.innerHTML = "";
  prvokKod.classList.add("skryte");
  prvokKod.textContent = "";
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = true;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  tlacidloPredoslyVysledok.textContent = "Previous";
}

function dalsiaOtazka() {
  const boloVyradene = vyradSpravneZodpovedanuOtazku();

  if (poradieOtazok.length === 0) {
    zobrazDokoncenyPool();
    return;
  }

  if (boloVyradene) {
    zobrazOtazku();
    return;
  }

  if (aktualnyIndex < poradieOtazok.length - 1) {
    aktualnyIndex++;
    zobrazOtazku();
    return;
  }

  if (jeRezimPrejdeniaPoolu()) {
    poradieOtazok = zamiesaj(poradieOtazok);
    aktualnyIndex = 0;
    zobrazOtazku();
    return;
  }

  if (jeExamMode()) {
    prvokVysledok.className = "vysledok ok";
    prvokVysledok.textContent = "Koniec Exam Mode. Sipkami prejdes vypracovane okruhy.";
    return;
  }

  zobrazDokoncenyPool();
}

function odoberAktualnuOtazku() {
  if (zobrazujePredoslyVysledok) {
    return;
  }

  const otazka = aktualnaOtazka();
  if (!otazka) {
    return;
  }

  zrusCasovacDalsejOtazky();
  odstraneneOtazky.set(ziskajIdOtazky(otazka), otazka);
  cakaNaVyradenieOtazky = false;
  poradieOtazok = poradieOtazok.filter((polozka) => ziskajIdOtazky(polozka) !== ziskajIdOtazky(otazka));
  aktualneOtazky = aktualneOtazky.filter((polozka) => ziskajIdOtazky(polozka) !== ziskajIdOtazky(otazka));

  if (jeRezimPrejdeniaPoolu()) {
    pociatocnyPocetPoolu = Math.max(stavStlpca, pociatocnyPocetPoolu - 1);
  }

  stavStlpca = Math.min(stavStlpca, maximumStlpca());

  if (aktualnyIndex >= poradieOtazok.length) {
    aktualnyIndex = Math.max(0, poradieOtazok.length - 1);
  }

  vykresliOdstraneneOtazky();
  aktualizujPocetFiltra();
  aktualizujStlpec();
  aktualizujStreak();

  if (poradieOtazok.length === 0) {
    zobrazPrazdnyVyber();
    return;
  }

  zobrazOtazku();
}

function nastavRezim(rezim) {
  if (rezim === "kod" && aktualnyPredmet !== "pc2") {
    return;
  }

  const jeKod = rezim === "kod";
  prvokRezimKod.classList.toggle("skryte", !jeKod);
  prvokRezimTest.classList.toggle("skryte", jeKod);
  tlacidloRezimKod.classList.toggle("aktivny", jeKod);
  tlacidloRezimKod.classList.toggle("sekundarne", !jeKod);
  tlacidloRezimTest.classList.toggle("aktivny", !jeKod);
  tlacidloRezimTest.classList.toggle("sekundarne", jeKod);
}

function ziskajOtazkyPredmetu(predmet) {
  if (predmet === "pc2") {
    return otazky;
  }

  if (predmet === "test") {
    return skusobneOtazky;
  }

  if (predmet === "hel") {
    return helOtazky;
  }

  if (predmet === "vs2") {
    return typeof vs2Otazky === "undefined" ? [] : vs2Otazky;
  }

  if (predmet === "aud") {
    return typeof audOtazky === "undefined" ? [] : audOtazky;
  }

  if (predmet === "vet") {
    return typeof veterinaOtazky === "undefined" ? [] : veterinaOtazky;
  }

  return czsOtazky;
}

function nastavPredmet(predmet) {
  // Multiple Choice override aj Exam Mode su iba pre HEL - pri inom predmete ich vypneme.
  if (predmet !== "hel") {
    if (prepinacMultipleChoice) {
      prepinacMultipleChoice.checked = false;
    }
    if (prepinacExamMode) {
      prepinacExamMode.checked = false;
      examModeMini = false;
    }
  }

  // Predmety bez crack podpory bezia v klasickom mode - zrusime crack timer.
  if (predmet !== "hel" && predmet !== "czs") {
    zrusCrackTimer(true);
  }

  aktualnyPredmet = predmet;
  zakladneOtazkyPredmetu = ziskajOtazkyPredmetu(predmet);

  tlacidloPredmetPc2.classList.toggle("aktivny", predmet === "pc2");
  tlacidloPredmetPc2.classList.toggle("sekundarne", predmet !== "pc2");
  tlacidloPredmetCzs.classList.toggle("aktivny", predmet === "czs");
  tlacidloPredmetCzs.classList.toggle("sekundarne", predmet !== "czs");
  tlacidloPredmetHel.classList.toggle("aktivny", predmet === "hel");
  tlacidloPredmetHel.classList.toggle("sekundarne", predmet !== "hel");
  tlacidloPredmetVs2.classList.toggle("aktivny", predmet === "vs2");
  tlacidloPredmetVs2.classList.toggle("sekundarne", predmet !== "vs2");
  tlacidloPredmetAud.classList.toggle("aktivny", predmet === "aud");
  tlacidloPredmetAud.classList.toggle("sekundarne", predmet !== "aud");
  tlacidloPredmetVet.classList.toggle("aktivny", predmet === "vet");
  tlacidloPredmetVet.classList.toggle("sekundarne", predmet !== "vet");
  tlacidloPredmetTest.classList.toggle("aktivny", predmet === "test");
  tlacidloPredmetTest.classList.toggle("sekundarne", predmet !== "test");
  prvokPrepinacRezimu.classList.toggle("skryte", predmet !== "pc2");

  aktualizujViditelnostModov();
  obnovFiltrePredmetu();
  nastavRezim("test");
  nastavPoradie();
}

function aktualnaKodovaUloha() {
  return poradieKodovychUloh[aktualnyKodIndex];
}

function nastavKodovePoradie() {
  poradieKodovychUloh = zamiesaj(kodoveUlohy);
  aktualnyKodIndex = 0;
  zobrazKodovuUlohu();
}

function zobrazKodovuUlohu() {
  const uloha = aktualnaKodovaUloha();
  if (!uloha) {
    return;
  }

  prvokKodTema.textContent = uloha.tema;
  prvokKodPocitadlo.textContent = `${aktualnyKodIndex + 1} / ${poradieKodovychUloh.length}`;
  prvokKodZadanie.textContent = uloha.zadanie;
  prvokKodOdpoved.value = "";
  prvokKodVysledok.className = "vysledok skryte";
  prvokKodVysledok.innerHTML = "";
  prvokKodRiesenie.classList.add("skryte");
  prvokKodRiesenie.textContent = "";
}

function normalizujKod(kod) {
  return kod
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\r\n/g, "\n");
}

function splnaKriterium(kod, kriterium) {
  return kriterium.vzory.some((vzor) => new RegExp(vzor, "i").test(kod));
}

function vyhodnotKodovuOdpoved() {
  const uloha = aktualnaKodovaUloha();
  const kod = normalizujKod(prvokKodOdpoved.value);

  if (!kod.trim()) {
    prvokKodVysledok.className = "vysledok zle";
    prvokKodVysledok.textContent = "Najprv napíš riešenie.";
    return;
  }

  const chybajuce = uloha.kriteria.filter((kriterium) => !splnaKriterium(kod, kriterium));
  const splnene = uloha.kriteria.length - chybajuce.length;
  const jeSpravne = chybajuce.length === 0;
  spustiSpatnuVazbu(jeSpravne);

  prvokKodVysledok.className = jeSpravne ? "vysledok ok" : "vysledok zle";
  prvokKodVysledok.innerHTML = "";

  const nadpis = document.createElement("p");
  nadpis.textContent = jeSpravne
    ? `Vyzerá správne. Splnené body: ${splnene} / ${uloha.kriteria.length}.`
    : `Ešte nie. Splnené body: ${splnene} / ${uloha.kriteria.length}.`;
  prvokKodVysledok.appendChild(nadpis);

  if (chybajuce.length > 0) {
    const zoznam = document.createElement("ul");
    chybajuce.forEach((kriterium) => {
      const polozka = document.createElement("li");
      polozka.textContent = kriterium.popis;
      zoznam.appendChild(polozka);
    });
    prvokKodVysledok.appendChild(zoznam);
  }

  const nadpisRiesenia = document.createElement("p");
  nadpisRiesenia.textContent = "Správne riešenie:";
  prvokKodVysledok.appendChild(nadpisRiesenia);

  prvokKodRiesenie.textContent = uloha.riesenie;
  prvokKodRiesenie.classList.remove("skryte");
}

function dalsiaKodovaUloha() {
  if (aktualnyKodIndex < poradieKodovychUloh.length - 1) {
    aktualnyKodIndex++;
  } else {
    aktualnyKodIndex = 0;
  }
  zobrazKodovuUlohu();
}

tlacidloMedzernik.addEventListener("click", pouziMedzernik);
tlacidloNastavenia.addEventListener("click", prepniNastavenia);
tlacidloPredoslyVysledok.addEventListener("click", prepniPredoslyVysledok);
tlacidloOdstranitOtazku.addEventListener("click", odoberAktualnuOtazku);
tlacidloPridatTazkuOtazku.addEventListener("click", pridajAktualnuOtazkuDoTazkych);
tlacidloNeviem.addEventListener("click", odpovedzNeviem);
tlacidloSipkaVlavo.addEventListener("click", () => posunOtazkuSipkou(-1, tlacidloSipkaVlavo));
tlacidloSipkaVpravo.addEventListener("click", () => posunOtazkuSipkou(1, tlacidloSipkaVpravo));
tlacidloVratitVsetkyOtazky.addEventListener("click", vratVsetkyOtazky);
tlacidloSpustitTazkyPool.addEventListener("click", spustiTazkyPool);
tlacidloVypnutTazkyPool.addEventListener("click", vypniTazkyPool);
tlacidloVycistitTazkyPool.addEventListener("click", vycistiTazkyPool);
posuvnikHlasitosti.addEventListener("input", () => nastavHlasitost(posuvnikHlasitosti.value));
prepinacVypnutiaZvuku.addEventListener("change", () => nastavVypnutieZvuku(true));
tlacidloPredmetPc2.addEventListener("click", () => {
  nastavPredmet("pc2");
});
tlacidloPredmetCzs.addEventListener("click", () => {
  nastavPredmet("czs");
});
tlacidloPredmetHel.addEventListener("click", () => {
  nastavPredmet("hel");
});
tlacidloPredmetVs2.addEventListener("click", () => {
  nastavPredmet("vs2");
});
tlacidloPredmetAud.addEventListener("click", () => {
  nastavPredmet("aud");
});
tlacidloPredmetVet.addEventListener("click", () => {
  nastavPredmet("vet");
});
tlacidloPredmetTest.addEventListener("click", () => {
  nastavPredmet("test");
});
tlacidloTemaOranzova.addEventListener("click", () => nastavTemu("oranzova"));
tlacidloTemaZlta.addEventListener("click", prepniZltuTemu);
tlacidloTemaSiva.addEventListener("click", () => nastavTemu("siva"));
tlacidloTemaFialova.addEventListener("click", () => nastavTemu("fialova"));
tlacidloTemaTyrkysova.addEventListener("click", () => nastavTemu("tyrkysova"));
tlacidloTemaMentolova.addEventListener("click", () => nastavTemu("mentolova"));
tlacidloTemaTabula.addEventListener("click", () => nastavTemu("tabula"));
document.addEventListener("mousedown", (e) => krieda.zacat(e));
document.addEventListener("mousemove", (e) => krieda.pokracovat(e));
document.addEventListener("mouseup", () => krieda.skoncit());
document.addEventListener("contextmenu", (e) => krieda.odvolat(e));
window.addEventListener("blur", () => krieda.skoncit());
prepinacCitatov.addEventListener("change", nastavZobrazenieCitatov);
prepinacNahodnehoPoradia.addEventListener("change", nastavPoradie);
prepinacDisplaySorting.addEventListener("change", () => {
  nastavDisplaySorting();
  // Prepocita rozlozenie (vratane dostupnosti sipok pre Mobile Mode sorting).
  aktualizujRozlozenieUcenia();
});
prepinacUcenia.addEventListener("change", nastavRezimUcenia);
prepinacRychlehoRezimu.addEventListener("change", prepniRychlyRezim);
prepinacPrejdeniaPoolu.addEventListener("change", nastavRezimPrejdeniaPoolu);
prepinacMultipleChoice.addEventListener("change", nastavMultipleChoiceMode);
prepinacSlowMode.addEventListener("change", () => {
  // Pri vypnuti Slow Mode zrus pripadne cakanie a posun dalej.
  if (!jeSlowMode() && cakaNaSlowPotvrdenie) {
    cakaNaSlowPotvrdenie = false;
    dalsiaOtazka();
  }
});
prepinacExamMode.addEventListener("change", prepniExamMode);
prepinacCrackTimeru.addEventListener("change", nastavCrackTimer);
prepinacMobilnehoCrackModu.addEventListener("change", () => {
  mobilnyCrackModeZmenenyRucne = true;
  nastavMobilnyCrackMode();
  // Prepocita rozlozenie (vratane dostupnosti sipok pre Mobile Mode sorting).
  aktualizujRozlozenieUcenia();
});
prvokVyberPrezentacie.addEventListener("change", () => {
  pouzivaTazkyPool = false;
  vybranaPrezentacia = prvokVyberPrezentacie.value;
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
  nastavPoradie();
});
tlacidloVsetkyPodokruhy.addEventListener("click", () => {
  pouzivaTazkyPool = false;
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
  nastavPoradie();
});
tlacidloZiadnePodokruhy.addEventListener("click", () => {
  pouzivaTazkyPool = false;
  vybranePodokruhy.clear();
  vykresliPodokruhy();
  nastavPoradie();
});
tlacidloRezimTest.addEventListener("click", () => nastavRezim("test"));
tlacidloRezimKod.addEventListener("click", () => nastavRezim("kod"));
tlacidloKodKontrola.addEventListener("click", vyhodnotKodovuOdpoved);
tlacidloKodDalsia.addEventListener("click", dalsiaKodovaUloha);
document.addEventListener("click", obsluzKlikCitatu, true);
document.addEventListener("click", obsluzKlikVolitelnehoPrvku);
document.addEventListener("change", obsluzZmenuVolitelnehoPrvku);
document.addEventListener("keydown", obsluzKlavesnicu);
document.addEventListener("pointerdown", pripravZvuky, { once: true });
document.addEventListener("keydown", pripravZvuky, { once: true });
window.addEventListener("resize", aktualizujMobilneRozlozenie);
window.addEventListener("orientationchange", () => window.setTimeout(aktualizujMobilneRozlozenie, 250));
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", aktualizujMobilneRozlozenie);
}

nastavTlacidlaOtazok();
vytvorPixelyStlpca();
aktualizujMobilneRozlozenie();
prednacitajAudioElementy();
nastavHlasitost(posuvnikHlasitosti.value);
nastavVypnutieZvuku();
prepinacNahodnehoPoradia.checked = true;
prepinacMultipleChoice.checked = false;
prepinacCrackTimeru.checked = false;
prepinacDisplaySorting.checked = false;
// Slow Mode je automaticky zapnuty: po zlej odpovedi v Crack Mode ukaze spravnu odpoved.
prepinacSlowMode.checked = true;
aktualizujAutomatickyMobilnyCrackMode();
nastavRychlyRezim();
nastavDisplaySorting();
nastavCrackTimer();
nastavMobilnyCrackMode();
aktualizujRozlozenieUcenia();
nastavTemu("mentolova");
skryCitaty();
nastavPredmet("czs");
nastavKodovePoradie();

let poradieOtazok = [];
let aktualnyIndex = 0;
let skore = 0;
let pocetSpravnychSession = 0;
let pocetVyhodnotenychOtazok = 0;
let vyhodnotene = false;
let aktualnyPredmet = "test";
let rozbalenyPredmetMenu = null;
let zakladneOtazkyPredmetu = [];
let aktualneOtazky = [];
let aktualneMoznosti = [];
let stavStlpca = 0;
let seriaSpravnych = 0;
let najvyssiaSeriaSpravnych = 0;
let casovacDalsejOtazky = null;
let casovacCrackTimeru = null;
let casovacCasPoolu = null;
let animaciaSpravnehoFlashu = null;
let casovacSpravnehoFlashu = null;
let casovacMegaStreaku = null;
let tokenMiniImpulzu = 0;
let prvokMiniImpulzEfekt = null;
let hlasitost = 0.5;
let pociatocnyPocetPoolu = 0;
let casZaciatkuPoolu = 0;
let casZobrazeniaOtazky = 0;
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
const hotoveBuffreZvukov = new Map();
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
const prvokCasPoolu = document.getElementById("casPoolu");
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
const prvokRychlyBonus = document.getElementById("rychlyBonus");
const prvokStreakEfekty = document.getElementById("streakEfekty");
const prvokStreakBurnCanvas = document.getElementById("streakBurnCanvas");
const prvokVideoOverlay = document.getElementById("videoOverlay");
const prvokVideoPrehravac = document.getElementById("videoPrehravac");
const blokyCitatu = [...document.querySelectorAll(".blok-citatu")];
const prvkyTextuCitatu = [...document.querySelectorAll(".text-citatu")];

const streakBurn = {
  canvas: prvokStreakBurnCanvas,
  ctx: prvokStreakBurnCanvas ? prvokStreakBurnCanvas.getContext("2d", { alpha: true }) : null,
  aktivny: false,
  animacia: null,
  poslednyCas: 0,
  sirka: 0,
  vyska: 0,
  velkostPixelu: 6,
  hlbka: 12,
  intenzita: 0,
  interval: 180,
  faza: 0,
  seed: Math.random() * 1000,
  rgb: [255, 216, 17],
  okrajRgb: [255, 126, 0],
  teplo: null,
  dalsie: null,
  obrazok: null,
  znizenyPohyb: typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null
};

const tlacidloMedzernik = document.getElementById("tlacidloMedzernik");
const tlacidloNastavenia = document.getElementById("tlacidloNastavenia");
const tlacidloMenu = document.getElementById("tlacidloMenu");
const bocneMenu = document.getElementById("bocneMenu");
const prekrytieMenu = document.getElementById("prekrytieMenu");
const uvodneInfo = document.getElementById("uvodneInfo");
const uvodneInfoKarta = uvodneInfo ? uvodneInfo.querySelector(".uvodne-info-karta") : null;
const uvodneInfoNadpis = document.getElementById("uvodneInfoNadpis");
const tlacidloZavrietUvodneInfo = document.getElementById("tlacidloZavrietUvodneInfo");
const tlacidloZobrazitUvodneInfo = document.getElementById("tlacidloZobrazitUvodneInfo");
const tlacidloZavrietMenu = document.getElementById("tlacidloZavrietMenu");
const menuOtvoritNastavenia = document.getElementById("menuOtvoritNastavenia");
const menuPolozkyPredmetov = [...bocneMenu.querySelectorAll(".menu-polozka[data-predmet]")];
const menuPodstromy = [...bocneMenu.querySelectorAll(".menu-podstrom")];
const menuVetvyPredmetov = [...bocneMenu.querySelectorAll(".menu-vetva[data-predmet]")];
const tlacidloPredoslyVysledok = document.getElementById("tlacidloPredoslyVysledok");
const tlacidloBackspaceSorting = document.getElementById("tlacidloBackspaceSorting");
const tlacidloOdstranitOtazku = document.getElementById("tlacidloOdstranitOtazku");
const tlacidloPridatTazkuOtazku = document.getElementById("tlacidloPridatTazkuOtazku");
const tlacidloNeviem = document.getElementById("tlacidloNeviem");
const tlacidloSipkaVlavo = document.getElementById("tlacidloSipkaVlavo");
const tlacidloSipkaVpravo = document.getElementById("tlacidloSipkaVpravo");
const tlacidloVratitVsetkyOtazky = document.getElementById("tlacidloVratitVsetkyOtazky");
const tlacidloSpustitTazkyPool = document.getElementById("tlacidloSpustitTazkyPool");
const tlacidloVypnutTazkyPool = document.getElementById("tlacidloVypnutTazkyPool");
const tlacidloVycistitTazkyPool = document.getElementById("tlacidloVycistitTazkyPool");
const prekrytieNastaveni = document.getElementById("prekrytieNastaveni");
const tlacidloZavrietNastavenia = document.getElementById("tlacidloZavrietNastavenia");
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
const tlacidloTemaNocna = document.getElementById("tlacidloTemaNocna");
const kriedaPlatno = document.getElementById("krieda-platno");
const posuvnikHlasitosti = document.getElementById("posuvnikHlasitosti");
const prepinacVypnutiaZvuku = document.getElementById("prepinacVypnutiaZvuku");
const prepinacCitatov = document.getElementById("prepinacCitatov");
const prepinacNahodnehoPoradia = document.getElementById("prepinacNahodnehoPoradia");
const prepinacDisplaySorting = document.getElementById("prepinacDisplaySorting");
const prepinacExtraStatements = document.getElementById("prepinacExtraStatements");
const riadokExtraStatements = document.getElementById("riadokExtraStatements");
const prepinacUcenia = document.getElementById("prepinacUcenia");
const prvokTextUcenia = document.getElementById("textUcenia");
const prvokHintUcenia = document.getElementById("hintUcenia");
const prepinacRychlehoRezimu = document.getElementById("prepinacRychlehoRezimu");
const prvokTextRychlehoRezimu = document.getElementById("textRychlehoRezimu");
const prvokHintRychlehoRezimu = document.getElementById("hintRychlehoRezimu");
const prepinacPrejdeniaPoolu = document.getElementById("prepinacPrejdeniaPoolu");
const prepinacEndlessMode = document.getElementById("prepinacEndlessMode");
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
const klucUvodnehoInfo = "drill-uvodne-info-v1";

// Streak mechanika: pomenovane tiery (farba pre flash/cislo), milnik kazdych KROK_MILNIKA.
const KROK_MILNIKA = 5;
const PRAH_RYCHLEJ_ODPOVEDE = 3000; // ms - rychla (FAST) odpoved
const PRAH_DRAMY_STRATY = 5;        // od akeho streaku ma strata dramaticky efekt
const PRAH_BURN_OKRAJOV = 7;        // od akeho streaku zacnu horiet okraje obrazovky
const KROK_BURN_OKRAJOV = 7;
const PRAH_SILNEHO_BURNU = PRAH_BURN_OKRAJOV + KROK_BURN_OKRAJOV * 2;
const TIERY = [
  { od: 5,  nazov: "ZAHRIEVAM SA", rgb: "255, 214, 17",  okrajRgb: "255, 126, 0" },
  { od: 10, nazov: "ON FIRE",      rgb: "255, 126, 0",   okrajRgb: "255, 38, 0" },
  { od: 15, nazov: "UNSTOPPABLE",  rgb: "255, 61, 139",  okrajRgb: "200, 30, 90" },
  { od: 20, nazov: "GODLIKE",      rgb: "61, 165, 255",  okrajRgb: "21, 97, 200" },
  { od: 25, nazov: "LEGENDARY",    rgb: "176, 107, 255", okrajRgb: "255, 210, 61" },
  { od: 35, nazov: "MYTHIC",       rgb: "255, 255, 255", okrajRgb: "125, 249, 255" }
];

function ziskajTier(streak) {
  let aktualny = null;
  for (const tier of TIERY) {
    if (streak >= tier.od) aktualny = tier;
  }
  return aktualny;
}

function ziskajFarbyTieru(streak) {
  const tier = ziskajTier(streak);
  return tier
    ? { ziara: tier.rgb, okraj: tier.okrajRgb }
    : { ziara: "255, 230, 58", okraj: "255, 126, 0" };
}

function zavibruj(vzor) {
  if (!vzor) return;
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    try { navigator.vibrate(vzor); } catch (chyba) { /* nepodporovane */ }
  }
}

function rgbTextNaPole(hodnota, zaloha = [255, 216, 17]) {
  if (Array.isArray(hodnota) && hodnota.length >= 3) {
    return hodnota.slice(0, 3).map((cast) => Math.max(0, Math.min(255, Number(cast) || 0)));
  }

  const casti = String(hodnota || "")
    .split(",")
    .map((cast) => Number(cast.trim()))
    .filter((cast) => Number.isFinite(cast));

  return casti.length >= 3
    ? casti.slice(0, 3).map((cast) => Math.max(0, Math.min(255, cast)))
    : zaloha;
}

function nahodneBurnCislo(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function obmedzBurnIndex(hodnota, maximum) {
  return Math.max(0, Math.min(maximum - 1, hodnota));
}

function ziskajUrovenStreakBurnu(streak) {
  if (streak < PRAH_BURN_OKRAJOV) return -1;
  return Math.floor((streak - PRAH_BURN_OKRAJOV) / KROK_BURN_OKRAJOV);
}

function ziskajIntenzituStreakBurnu(streak) {
  const uroven = ziskajUrovenStreakBurnu(streak);
  if (uroven < 0) return 0;
  const krok = Math.max(0, streak - PRAH_BURN_OKRAJOV);
  const poziciaVKroku = krok % KROK_BURN_OKRAJOV;
  const jemnyNarast = poziciaVKroku / Math.max(KROK_BURN_OKRAJOV - 1, 1);
  const zaklady = [0.02, 0.34, 0.68, 0.92];
  const prirastky = [0.12, 0.16, 0.14, 0.08];
  const index = Math.min(uroven, zaklady.length - 1);
  return Math.min(zaklady[index] + jemnyNarast * prirastky[index], 1);
}

function hashStreakBurnu(hodnota) {
  const sinus = Math.sin(hodnota * 12.9898 + streakBurn.seed * 78.233) * 43758.5453;
  return sinus - Math.floor(sinus);
}

function hladkyHashStreakBurnu(hodnota) {
  const zaklad = Math.floor(hodnota);
  const pomer = hodnota - zaklad;
  const plynulyPomer = pomer * pomer * (3 - 2 * pomer);
  const a = hashStreakBurnu(zaklad);
  const b = hashStreakBurnu(zaklad + 1);
  return a + (b - a) * plynulyPomer;
}

function dosahStreakBurnu(smer, pozicia) {
  const i = streakBurn.intenzita;
  const faza = streakBurn.faza;
  const posun = smer * 37.17;
  const velkaVlna = (Math.sin(pozicia * 0.11 + faza * 0.42 + posun) + 1) * 0.5;
  const malaVlna = (Math.sin(pozicia * 0.43 - faza * 1.05 + posun * 0.7) + 1) * 0.5;
  const bunka = (pozicia + faza * 0.9 + smer * 11) / 3.1;
  const sum = velkaVlna * 0.36 + malaVlna * 0.26 + hladkyHashStreakBurnu(bunka) * 0.38;
  const spicaBunka = pozicia / 3.25 + faza * 0.28 + smer * 101;
  const spicaPulz = (Math.sin(faza * 0.92 + spicaBunka * 2.8) + 1) * 0.5;
  const spicaSeed = hladkyHashStreakBurnu(spicaBunka) * 0.7 + spicaPulz * 0.3;
  const spica = spicaSeed > 0.62 ? Math.pow((spicaSeed - 0.62) / 0.38, 1.85) : 0;
  const zarez = Math.pow(hladkyHashStreakBurnu(pozicia / 2.2 - faza * 0.42 + smer * 19), 1.35) * (1.2 + i * 3.8);
  const zaklad = 1 + i * 3.2;
  const vlna = Math.pow(sum, 1.95) * (2.6 + i * 10);
  const spicovyBonus = spica * (7 + i * 32);
  return Math.max(1, Math.round(zaklad + vlna + spicovyBonus - zarez));
}

function kresliBocneHranyStreakBurnu() {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= 720;
}

function najblizsiaHranaBurnu(x, y) {
  const { sirka, vyska } = streakBurn;
  const moznosti = kresliBocneHranyStreakBurnu()
    ? [
        { smer: 0, vzdialenost: x, pozicia: y },
        { smer: 1, vzdialenost: sirka - 1 - x, pozicia: y },
        { smer: 2, vzdialenost: y, pozicia: x },
        { smer: 3, vzdialenost: vyska - 1 - y, pozicia: x }
      ]
    : [
        { smer: 2, vzdialenost: y, pozicia: x },
        { smer: 3, vzdialenost: vyska - 1 - y, pozicia: x }
      ];
  let najblizsia = moznosti[0];
  for (const moznost of moznosti) {
    if (moznost.vzdialenost < najblizsia.vzdialenost) {
      najblizsia = moznost;
    }
  }
  najblizsia.dosah = dosahStreakBurnu(najblizsia.smer, najblizsia.pozicia);
  return najblizsia;
}

function nastavRozmeryStreakBurnu(vynutit = false) {
  if (!streakBurn.canvas || !streakBurn.ctx) return false;

  const pixel = window.innerWidth < 720 ? 7 : 8;
  const sirka = Math.max(1, Math.ceil(window.innerWidth / pixel));
  const vyska = Math.max(1, Math.ceil(window.innerHeight / pixel));
  if (!vynutit && streakBurn.sirka === sirka && streakBurn.vyska === vyska) {
    return true;
  }

  streakBurn.velkostPixelu = pixel;
  streakBurn.sirka = sirka;
  streakBurn.vyska = vyska;
  streakBurn.canvas.width = sirka;
  streakBurn.canvas.height = vyska;
  streakBurn.ctx.imageSmoothingEnabled = false;
  streakBurn.teplo = new Uint8ClampedArray(sirka * vyska);
  streakBurn.dalsie = new Uint8ClampedArray(sirka * vyska);
  streakBurn.obrazok = streakBurn.ctx.createImageData(sirka, vyska);
  return true;
}

function zastavStreakBurn() {
  streakBurn.aktivny = false;
  if (streakBurn.animacia) {
    window.cancelAnimationFrame(streakBurn.animacia);
    streakBurn.animacia = null;
  }
  if (streakBurn.ctx && streakBurn.canvas) {
    streakBurn.ctx.clearRect(0, 0, streakBurn.canvas.width, streakBurn.canvas.height);
  }
  if (streakBurn.teplo) streakBurn.teplo.fill(0);
  if (streakBurn.dalsie) streakBurn.dalsie.fill(0);
}

function namiesajZlozky(a, b, pomer) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * pomer),
    Math.round(a[1] + (b[1] - a[1]) * pomer),
    Math.round(a[2] + (b[2] - a[2]) * pomer)
  ];
}

function najblizsiaStatickaHranaBurnu(x, y) {
  const { sirka, vyska } = streakBurn;
  if (!kresliBocneHranyStreakBurnu()) {
    const hore = y;
    const dole = vyska - 1 - y;
    return hore <= dole
      ? { smer: 2, vzdialenost: hore, pozicia: x }
      : { smer: 3, vzdialenost: dole, pozicia: x };
  }

  const vlavo = x;
  const vpravo = sirka - 1 - x;
  const hore = y;
  const dole = vyska - 1 - y;
  const minimum = Math.min(vlavo, vpravo, hore, dole);

  if (minimum === vlavo) return { smer: 0, vzdialenost: vlavo, pozicia: y };
  if (minimum === vpravo) return { smer: 1, vzdialenost: vpravo, pozicia: y };
  if (minimum === hore) return { smer: 2, vzdialenost: hore, pozicia: x };
  return { smer: 3, vzdialenost: dole, pozicia: x };
}

function silaVnutornychCiarBurnu(x, y, teplota) {
  const t = Math.max(0, Math.min(1, teplota / 255));
  if (t < 0.34) return 0;

  const hrana = najblizsiaStatickaHranaBurnu(x, y);
  const pomerDoVnutra = hrana.vzdialenost / Math.max(streakBurn.hlbka, 1);
  if (pomerDoVnutra < 0.1 || pomerDoVnutra > 0.94) return 0;

  const faza = streakBurn.faza;
  const pozicia = hrana.pozicia;
  const cikcak =
    Math.sin(pozicia * 0.72 + hrana.vzdialenost * 1.18 + faza * 0.94 + hrana.smer * 4.1) +
    Math.sin(pozicia * 0.31 - hrana.vzdialenost * 0.86 + faza * 0.62) * 0.55;
  const jadroCiary = Math.max(0, 1 - Math.abs(cikcak) / 0.36);
  const zubatost = hladkyHashStreakBurnu(pozicia / 2.6 + hrana.vzdialenost * 0.38 + hrana.smer * 17);
  const vnutro = Math.sin(Math.PI * pomerDoVnutra);
  return Math.min(1, Math.pow(jadroCiary, 1.8) * (0.45 + zubatost * 0.75) * vnutro);
}

function silaBielehoJadraBurnu(x, y, teplota) {
  const t = Math.max(0, Math.min(1, teplota / 255));
  if (t < 0.58) return 0;

  const hrana = najblizsiaStatickaHranaBurnu(x, y);
  const faza = streakBurn.faza;
  const i = streakBurn.intenzita;
  const pozicia = hrana.pozicia;
  const vzdialenost = hrana.vzdialenost;
  const vlna =
    (Math.sin(pozicia * 0.5 + faza * 1.25 + hrana.smer * 2.8) + 1) * 0.35 +
    (Math.sin(pozicia * 0.19 - faza * 0.84 + vzdialenost * 0.9) + 1) * 0.2 +
    hladkyHashStreakBurnu(pozicia / 2.2 + faza * 0.52 + hrana.smer * 31) * 0.45;
  const vyskaJadra = 0.55 + i * 0.65 + Math.pow(vlna, 1.65) * (1.7 + i * 4.4);
  const hlbka = Math.max(0, 1 - vzdialenost / Math.max(vyskaJadra, 0.1));
  if (hlbka <= 0) return 0;

  const deravaMaska =
    hladkyHashStreakBurnu(pozicia / 1.45 + faza * 0.92 + vzdialenost * 0.8 + hrana.smer * 13) * 0.62 +
    vlna * 0.38;
  if (vzdialenost <= 0 && deravaMaska < 0.34) return 0;

  const horucost = Math.max(0, Math.min(1, (t - 0.58) / 0.42));
  return Math.min(1, Math.pow(hlbka, 0.72) * Math.pow(horucost, 0.95) * (0.42 + deravaMaska * 0.82));
}

function farbaPixeluBurnu(teplota, x, y) {
  const t = Math.max(0, Math.min(1, teplota / 255));
  if (t < 0.12) return [0, 0, 0, 0];

  const hrot = namiesajZlozky(streakBurn.okrajRgb, streakBurn.rgb, 0.08);
  const okraj = namiesajZlozky(streakBurn.okrajRgb, streakBurn.rgb, 0.28);
  const stred = namiesajZlozky(streakBurn.rgb, [255, 255, 255], 0.08);
  let farba;
  if (t < 0.72) {
    farba = namiesajZlozky(hrot, okraj, (t - 0.12) / 0.6);
  } else if (t < 0.9) {
    farba = namiesajZlozky(okraj, stred, (t - 0.72) / 0.18);
  } else if (t < 0.965) {
    farba = namiesajZlozky(stred, [255, 255, 255], (t - 0.9) / 0.065);
  } else {
    farba = namiesajZlozky(stred, [255, 255, 255], 0.82);
  }

  const silaBielehoJadra = silaBielehoJadraBurnu(x, y, teplota);
  if (silaBielehoJadra > 0) {
    farba = silaBielehoJadra > 0.9
      ? [255, 255, 255]
      : namiesajZlozky(farba, [255, 255, 255], Math.min(0.92, silaBielehoJadra));
  }

  const silaCiar = silaVnutornychCiarBurnu(x, y, teplota);
  if (silaCiar > 0) {
    farba = namiesajZlozky(farba, hrot, Math.min(0.66, 0.22 + silaCiar * 0.5));
  }

  return [farba[0], farba[1], farba[2], 255];
}

function seedujStreakBurn() {
  const { teplo, sirka, vyska, intenzita } = streakBurn;
  if (!teplo || sirka <= 0 || vyska <= 0) return;

  const hrubkaJadra = 1 + Math.round(intenzita * 2);
  const sanca = 0.52 + intenzita * 0.28;
  const minimum = Math.round(184 + intenzita * 42);

  for (let x = 0; x < sirka; x++) {
    for (let d = 0; d < hrubkaJadra; d++) {
      const vrch = d * sirka + x;
      const spodok = (vyska - 1 - d) * sirka + x;
      const cielVrch = Math.random() < sanca ? nahodneBurnCislo(minimum, 255) : nahodneBurnCislo(18, 118);
      const cielSpodok = Math.random() < sanca ? nahodneBurnCislo(minimum, 255) : nahodneBurnCislo(18, 118);
      teplo[vrch] = Math.max(teplo[vrch], Math.round(teplo[vrch] * 0.68 + cielVrch * 0.32));
      teplo[spodok] = Math.max(teplo[spodok], Math.round(teplo[spodok] * 0.68 + cielSpodok * 0.32));
    }
  }

  if (kresliBocneHranyStreakBurnu()) {
    for (let y = 0; y < vyska; y++) {
      for (let d = 0; d < hrubkaJadra; d++) {
        const vlavo = y * sirka + d;
        const vpravo = y * sirka + (sirka - 1 - d);
        const cielVlavo = Math.random() < sanca ? nahodneBurnCislo(minimum, 255) : nahodneBurnCislo(18, 118);
        const cielVpravo = Math.random() < sanca ? nahodneBurnCislo(minimum, 255) : nahodneBurnCislo(18, 118);
        teplo[vlavo] = Math.max(teplo[vlavo], Math.round(teplo[vlavo] * 0.68 + cielVlavo * 0.32));
        teplo[vpravo] = Math.max(teplo[vpravo], Math.round(teplo[vpravo] * 0.68 + cielVpravo * 0.32));
      }
    }
  }
}

function prepocitajStreakBurn() {
  const { sirka, vyska, teplo, dalsie, hlbka } = streakBurn;
  if (!teplo || !dalsie) return;

  seedujStreakBurn();
  dalsie.fill(0);

  const limit = Math.min(hlbka, Math.max(sirka, vyska));
  const limitX = Math.min(limit, sirka);
  const limitY = Math.min(limit, vyska);
  const zaciatokPravej = Math.max(limitX, sirka - limitX);
  const zaciatokSpodku = Math.max(limitY, vyska - limitY);

  const spracuj = (x, y) => {
    const index = y * sirka + x;
    const hrana = najblizsiaHranaBurnu(x, y);
    const vzdialenost = hrana.vzdialenost;

    if (vzdialenost > Math.min(hlbka, hrana.dosah)) {
      return;
    }

    const bocnyPosun = nahodneBurnCislo(-1, 1);
    let zdrojX = x;
    let zdrojY = y;
    if (hrana.smer === 0) {
      zdrojX = obmedzBurnIndex(x - 1, sirka);
      zdrojY = obmedzBurnIndex(y + bocnyPosun, vyska);
    } else if (hrana.smer === 1) {
      zdrojX = obmedzBurnIndex(x + 1, sirka);
      zdrojY = obmedzBurnIndex(y + bocnyPosun, vyska);
    } else if (hrana.smer === 2) {
      zdrojX = obmedzBurnIndex(x + bocnyPosun, sirka);
      zdrojY = obmedzBurnIndex(y - 1, vyska);
    } else {
      zdrojX = obmedzBurnIndex(x + bocnyPosun, sirka);
      zdrojY = obmedzBurnIndex(y + 1, vyska);
    }

    const zdroj = zdrojY * sirka + zdrojX;
    const hranovyPomer = vzdialenost / Math.max(Math.min(hlbka, hrana.dosah), 1);
    const rozpad = nahodneBurnCislo(1, 5) + Math.round(Math.pow(hranovyPomer, 1.55) * (24 + streakBurn.intenzita * 20));
    dalsie[index] = Math.max(0, teplo[zdroj] - rozpad);
  };

  if (kresliBocneHranyStreakBurnu()) {
    for (let y = 0; y < vyska; y++) {
      for (let x = 0; x < limitX; x++) spracuj(x, y);
      for (let x = zaciatokPravej; x < sirka; x++) spracuj(x, y);
    }

    for (let x = limitX; x < zaciatokPravej; x++) {
      for (let y = 0; y < limitY; y++) spracuj(x, y);
      for (let y = zaciatokSpodku; y < vyska; y++) spracuj(x, y);
    }
  } else {
    for (let x = 0; x < sirka; x++) {
      for (let y = 0; y < limitY; y++) spracuj(x, y);
      for (let y = zaciatokSpodku; y < vyska; y++) spracuj(x, y);
    }
  }

  streakBurn.teplo = dalsie;
  streakBurn.dalsie = teplo;
}

function vykresliStreakBurn() {
  const { ctx, obrazok, teplo, sirka, vyska } = streakBurn;
  if (!ctx || !obrazok || !teplo) return;

  const data = obrazok.data;
  data.fill(0);
  const limit = Math.min(streakBurn.hlbka, Math.max(sirka, vyska));
  const limitX = Math.min(limit, sirka);
  const limitY = Math.min(limit, vyska);
  const zaciatokPravej = Math.max(limitX, sirka - limitX);
  const zaciatokSpodku = Math.max(limitY, vyska - limitY);

  const zapis = (x, y) => {
    const index = y * sirka + x;
    const teplota = teplo[index];
    if (teplota < 31) return;
    const [r, g, b, a] = farbaPixeluBurnu(teplota, x, y);
    const offset = index * 4;
    data[offset] = r;
    data[offset + 1] = g;
    data[offset + 2] = b;
    data[offset + 3] = a;
  };

  if (kresliBocneHranyStreakBurnu()) {
    for (let y = 0; y < vyska; y++) {
      for (let x = 0; x < limitX; x++) zapis(x, y);
      for (let x = zaciatokPravej; x < sirka; x++) zapis(x, y);
    }

    for (let x = limitX; x < zaciatokPravej; x++) {
      for (let y = 0; y < limitY; y++) zapis(x, y);
      for (let y = zaciatokSpodku; y < vyska; y++) zapis(x, y);
    }
  } else {
    for (let x = 0; x < sirka; x++) {
      for (let y = 0; y < limitY; y++) zapis(x, y);
      for (let y = zaciatokSpodku; y < vyska; y++) zapis(x, y);
    }
  }

  ctx.putImageData(obrazok, 0, 0);
}

function krokStreakBurn(cas) {
  if (!streakBurn.aktivny) return;

  if (!streakBurn.poslednyCas) {
    streakBurn.poslednyCas = cas;
  }

  const uplynulo = cas - streakBurn.poslednyCas;
  if (uplynulo >= streakBurn.interval) {
    const nasobicCasu = Math.max(0.65, Math.min(2.4, uplynulo / 16.67));
    streakBurn.poslednyCas = cas;
    streakBurn.faza += (0.07 + streakBurn.intenzita * 0.72) * nasobicCasu;
    prepocitajStreakBurn();
    vykresliStreakBurn();
  }

  streakBurn.animacia = window.requestAnimationFrame(krokStreakBurn);
}

function nastavStreakBurn(zapnuty, farby, intenzita) {
  streakBurn.rgb = rgbTextNaPole(farby.ziara, [255, 216, 17]);
  streakBurn.okrajRgb = rgbTextNaPole(farby.okraj, [255, 126, 0]);
  streakBurn.intenzita = Math.max(0, Math.min(1, intenzita));
  streakBurn.hlbka = Math.round(3 + streakBurn.intenzita * 42);
  streakBurn.interval = Math.round(30 - streakBurn.intenzita * 12);

  if (!zapnuty || !streakBurn.canvas || !streakBurn.ctx || streakBurn.znizenyPohyb?.matches) {
    zastavStreakBurn();
    return;
  }

  if (!nastavRozmeryStreakBurnu()) {
    zastavStreakBurn();
    return;
  }

  if (streakBurn.aktivny) return;
  streakBurn.aktivny = true;
  streakBurn.poslednyCas = 0;
  streakBurn.animacia = window.requestAnimationFrame(krokStreakBurn);
}
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
    tokeny.push({ raw: zhoda[0], kluc: zhoda[0].replace(/\s+/g, ""), medzera: false, matematika: true });
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
    if (token.matematika) {
      span.classList.add("crack-rozdiel-matika");
    }
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
  prvokOtazka.classList.remove("crack-odhalena", "pool-hotovo");
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
    return 1;
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
    try {
      zvukovyKontext = new KonstruktorKontextu({ latencyHint: "interactive" });
    } catch (chyba) {
      zvukovyKontext = new KonstruktorKontextu();
    }
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

function ziskajHotovyBufferZvuku(zvuk) {
  return hotoveBuffreZvukov.get(ziskajZdrojZvuku(zvuk)) || null;
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
          hotoveBuffreZvukov.set(zdroj, buffer);
          normalizacneZosilneniaZvukov.set(zdroj, vypocitajNormalizacneZosilnenie(buffer));
        }
        return buffer;
      })
      .catch(() => null);
    buffreZvukov.set(zdroj, nacitanie);
  }

  return buffreZvukov.get(zdroj);
}

async function prehrajZvukCezWebAudio(zvuk, rychlost, cakatNaBuffer = false) {
  const kontext = ziskajZvukovyKontext();
  if (!kontext) {
    return false;
  }

  const hotovyBuffer = ziskajHotovyBufferZvuku(zvuk);
  const buffer = hotovyBuffer || (cakatNaBuffer ? await nacitajBufferZvuku(zvuk, kontext) : null);
  if (!buffer) {
    nacitajBufferZvuku(zvuk, kontext);
    return false;
  }

  if (kontext.state === "suspended") {
    try {
      await kontext.resume();
    } catch (chyba) {
      return false;
    }
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
  const triedyTemy = ["tema-zlta", "tema-zlta-tmava", "tema-siva", "tema-nocna", "tema-fialova", "tema-tyrkysova", "tema-mentolova", "tema-tabula"];
  document.body.classList.remove(...triedyTemy);
  document.documentElement.classList.remove(...triedyTemy);

  if (tema !== "oranzova") {
    const mapaTriedTemy = {
      zlta: "tema-zlta",
      zltaTmava: "tema-zlta-tmava",
      siva: "tema-siva",
      nocna: "tema-nocna",
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
  tlacidloTemaNocna.classList.toggle("aktivny", tema === "nocna");

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
  prvokFlashEfekt.innerHTML = "";
  document.body.classList.remove("mini-impulz-panel");
  prvokFlashEfekt.classList.remove("aktivny", "specialny", "lucovy", "mini-impulz");
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
  prvokFlashEfekt.innerHTML = "";
  document.body.classList.remove("mini-impulz-panel");
  prvokFlashEfekt.classList.remove("aktivny", "specialny", "lucovy", "mini-impulz");
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

function vytvorMiniImpulzWaveform(uroven) {
  const svg = vytvorSvgPrvok("svg", {
    class: "mini-impulz-vlna",
    viewBox: "0 0 420 128",
    "aria-hidden": "true",
    focusable: "false"
  });
  const amplituda = 14 + uroven * 38;
  const hustota = 0.72 + uroven * 0.58;
  const faza = Date.now() * 0.012;
  const body = [];

  for (let x = 0; x <= 420; x += 7) {
    const stred = Math.abs(x - 210) / 210;
    const obalka = Math.pow(1 - stred, 1.8);
    const y = 64
      + Math.sin(x * 0.095 * hustota + faza) * amplituda * obalka
      + Math.sin(x * 0.031 + faza * 0.7) * amplituda * 0.38 * obalka;
    body.push(`${x === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  const cesta = body.join(" ");
  const tien = vytvorSvgPrvok("path", { class: "mini-impulz-vlna-tien", d: cesta });
  const jadro = vytvorSvgPrvok("path", { class: "mini-impulz-vlna-jadro", d: cesta });
  svg.append(tien, jadro);
  return svg;
}

function ziskajPrvokMiniImpulzEfektu() {
  if (prvokMiniImpulzEfekt?.isConnected) {
    return prvokMiniImpulzEfekt;
  }

  prvokMiniImpulzEfekt = document.createElement("div");
  prvokMiniImpulzEfekt.className = "mini-impulz-efekty";
  prvokMiniImpulzEfekt.setAttribute("aria-hidden", "true");
  document.body.appendChild(prvokMiniImpulzEfekt);
  return prvokMiniImpulzEfekt;
}

function dokoncitMiniImpulzVrstvu(vrstva) {
  const kontajner = vrstva.parentElement;
  vrstva.remove();
  if (kontajner && !kontajner.querySelector(".mini-impulz-vrstva")) {
    kontajner.classList.remove("aktivny");
  }
}

function spustiMiniImpulz() {
  const prvokMiniImpulzu = ziskajPrvokMiniImpulzEfektu();
  if (!prvokMiniImpulzu) return;
  const streak = Math.max(0, stavStlpca);
  const uroven = Math.min(streak / 18, 1);
  const farby = ziskajFarbyTieru(Math.max(streak, 1));
  const trvanieKruhu = Math.round(700 + uroven * 180);
  const trvanieVlny = Math.round(320 + uroven * 120);
  const aktualnyTokenMiniImpulzu = ++tokenMiniImpulzu;
  const vrstva = document.createElement("div");

  vrstva.className = "mini-impulz-vrstva";
  vrstva.style.setProperty("--mini-uroven", uroven.toFixed(3));
  vrstva.style.setProperty("--mini-rgb", farby.ziara);
  vrstva.style.setProperty("--mini-okraj-rgb", farby.okraj);
  vrstva.style.setProperty("--mini-trvanie", `${trvanieVlny}ms`);
  vrstva.style.setProperty("--mini-kruh-trvanie", `${trvanieKruhu}ms`);
  vrstva.appendChild(vytvorMiniImpulzWaveform(uroven));

  document.body.style.setProperty("--mini-otras", `${(4.5 + uroven * 9.5).toFixed(2)}px`);
  document.body.classList.remove("mini-impulz-panel");
  prvokMiniImpulzu.classList.add("aktivny");
  prvokMiniImpulzu.appendChild(vrstva);
  const spustiNaDalsomFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 0));
  spustiNaDalsomFrame(() => {
    if (!vrstva.isConnected) return;
    document.body.classList.add("mini-impulz-panel");
    vrstva.classList.add("aktivny");
  });

  window.setTimeout(() => {
    dokoncitMiniImpulzVrstvu(vrstva);
    if (aktualnyTokenMiniImpulzu === tokenMiniImpulzu) {
      document.body.classList.remove("mini-impulz-panel");
    }
  }, trvanieKruhu + 140);
}

function obsluzRytmickuKlavesu(klaves) {
  if (klaves === ",") {
    spustiMiniImpulz();
    return true;
  }

  if (klaves === ".") {
    spustiJednorazovyFlash();
    return true;
  }

  if (klaves === ";" || klaves === ":") {
    prehrajVideoOverlay("Animations/explosion1.mp4", 6);
    return true;
  }

  if (klaves === "/") {
    spustiInvertFlash();
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

function nastavTlacidloPredoslehoVysledku(disabled, text = "Previous") {
  tlacidloPredoslyVysledok.disabled = disabled;
  tlacidloPredoslyVysledok.textContent = text;
  if (tlacidloBackspaceSorting) {
    tlacidloBackspaceSorting.disabled = disabled;
    tlacidloBackspaceSorting.setAttribute(
      "aria-label",
      text === "Current" ? "Backspace: aktualna otazka" : "Backspace: predchadzajuca odpoved"
    );
  }
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

function aktualizujPocitadloSpravnychSession() {
  prvokSkore.textContent = `${pocetSpravnychSession}`;
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

function suExtraStatementsZapnute() {
  return Boolean(prepinacExtraStatements && prepinacExtraStatements.checked);
}

function jeOtazkaDostupnaPodlaExtraStatements(otazka, predmet = aktualnyPredmet) {
  return predmet !== "zin" || suExtraStatementsZapnute() || !otazka.extraStatement;
}

function filtrujExtraStatementsPredmetu(predmet, otazky) {
  if (predmet !== "zin" || suExtraStatementsZapnute()) {
    return otazky;
  }

  return otazky.filter((otazka) => !otazka.extraStatement);
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
    prvokTextUcenia.textContent = "Learn Mode";
  }
  if (prvokHintUcenia) {
    prvokHintUcenia.textContent = "Zobrazi vybrany okruh ako prehlad podokruhov so spravnymi odpovedami. Pri statementoch vies krizikom presunut otazku do Trash poolu.";
  }
  aktualizujRozlozenieCrackTimeru();
  nastavMobilnyCrackMode();
  aktualizujViditelnostModov();
  tlacidloSipkaVlavo.disabled = !sipkyDostupne;
  tlacidloSipkaVpravo.disabled = !sipkyDostupne;
}

function aktualizujViditelnostModov() {
  const hel = aktualnyPredmet === "hel";
  const test = jeTestPredmet();
  const crack = jeCrackMode();
  // Multiple Choice je iba pre HEL; Exam Mode pre HEL, CZS, ZIN, VS2 aj Obhajoba.
  const examPodporovany = hel || aktualnyPredmet === "czs" || aktualnyPredmet === "zin" || aktualnyPredmet === "vs2" || aktualnyPredmet === "obhajoba";
  if (riadokMultipleChoice) riadokMultipleChoice.classList.toggle("skryte", !hel);
  if (riadokExamMode) riadokExamMode.classList.toggle("skryte", !examPodporovany);
  // TEST ma rychly rezim automaticky; pre crack mode Speed Mode tiez nedava zmysel.
  if (riadokSpeedMode) riadokSpeedMode.classList.toggle("skryte", crack || test);
  // Timer, Mobile a Slow su crack-only vlastnosti.
  if (riadokTimerMode) riadokTimerMode.classList.toggle("skryte", !crack);
  if (riadokMobileMode) riadokMobileMode.classList.toggle("skryte", !crack);
  if (riadokSlowMode) riadokSlowMode.classList.toggle("skryte", !crack);
  if (riadokExtraStatements) riadokExtraStatements.classList.toggle("skryte", aktualnyPredmet !== "zin");
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
      ? "V klasickom teste odosle single-choice odpoved hned po vybere a pri spravnej odpovedi automaticky ide dalej."
      : "V klasickom teste po spravnej odpovedi automaticky prejde na dalsiu otazku. Druhy klik zapne Speed Mode 2x.";
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

function jeEndlessMode() {
  return Boolean(prepinacEndlessMode && prepinacEndlessMode.checked);
}

function jeTestPredmet() {
  return aktualnyPredmet === "test";
}

function predmetPodporujeCrack() {
  return aktualnyPredmet === "hel" || aktualnyPredmet === "czs" || aktualnyPredmet === "zin" || aktualnyPredmet === "vs2" || aktualnyPredmet === "obhajoba";
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
  return prepinacSlowMode ? prepinacSlowMode.checked : true;
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
  const touchPoints = navigator.maxTouchPoints || 0;
  const jeMobilnyUserAgent = /iPhone|iPod|Android|Windows Phone|Mobile/i.test(userAgent);
  const jeIpadOS = /Macintosh/i.test(userAgent) && touchPoints > 1;
  const maDotyk = touchPoints > 0;
  const maHrubyPointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const nemaHover = window.matchMedia && window.matchMedia("(hover: none)").matches;
  const sirka = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const vyska = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const kratsiaStrana = Math.min(sirka || 0, vyska || 0);
  const dlhsiaStrana = Math.max(sirka || 0, vyska || 0);
  const mobilnyViewport = kratsiaStrana <= 920 && dlhsiaStrana <= 1400;

  return jeMobilnyUserAgent || jeIpadOS || (maDotyk && mobilnyViewport && (maHrubyPointer || nemaHover));
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
  if (jeRezimPrejdeniaPoolu() && prepinacEndlessMode) {
    prepinacEndlessMode.checked = false;
  }
  nastavPoradie();
}

function nastavEndlessMode() {
  cakaNaVyradenieOtazky = false;
  if (jeEndlessMode() && prepinacPrejdeniaPoolu) {
    prepinacPrejdeniaPoolu.checked = false;
  }
  nastavPoradie();
}

function nastavExtraStatements() {
  if (aktualnyPredmet !== "zin") {
    aktualizujViditelnostModov();
    return;
  }

  zrusCasovacDalsejOtazky();
  zrusCrackTimer(true);
  pouzivaTazkyPool = false;
  zakladneOtazkyPredmetu = ziskajOtazkyPredmetu("zin");
  if (vybranaPrezentacia !== hodnotaVsetko && !ziskajPrezentacie().includes(vybranaPrezentacia)) {
    vybranaPrezentacia = hodnotaVsetko;
  }
  vykresliVyberPrezentacie();
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
  vykresliMenuOkruhy();
  vykresliTazkeOtazky();
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
    if (aktualnyPredmet !== "hel" && aktualnyPredmet !== "czs" && aktualnyPredmet !== "zin" && aktualnyPredmet !== "vs2" && aktualnyPredmet !== "obhajoba") {
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
  prekrytieNastaveni.classList.toggle("skryte", !budeOtvorene);
  tlacidloNastavenia.setAttribute("aria-expanded", String(budeOtvorene));
}

function zavriNastavenia() {
  prvokPanelNastaveni.classList.add("skryte");
  prekrytieNastaveni.classList.add("skryte");
  tlacidloNastavenia.setAttribute("aria-expanded", "false");
}

function jeOtvoreneMenu() {
  return bocneMenu.classList.contains("otvorene");
}

function otvorMenu() {
  zavriNastavenia();
  bocneMenu.classList.add("otvorene");
  prekrytieMenu.classList.add("otvorene");
  bocneMenu.setAttribute("aria-hidden", "false");
  tlacidloMenu.setAttribute("aria-expanded", "true");
}

function zavriMenu() {
  bocneMenu.classList.remove("otvorene");
  prekrytieMenu.classList.remove("otvorene");
  bocneMenu.setAttribute("aria-hidden", "true");
  tlacidloMenu.setAttribute("aria-expanded", "false");
}

function boloUvodneInfoPotvrdene() {
  try {
    return window.localStorage.getItem(klucUvodnehoInfo) === "1";
  } catch {
    return false;
  }
}

function ulozUvodneInfoPotvrdene() {
  try {
    window.localStorage.setItem(klucUvodnehoInfo, "1");
  } catch {
    // Storage moze byt v sukromnom rezime nedostupny; panel aj tak zatvorime.
  }
}

function jeUvodneInfoOtvorene() {
  return Boolean(uvodneInfo && !uvodneInfo.classList.contains("skryte"));
}

function zobrazUvodneInfoAkTreba(vynutit = false) {
  if (!uvodneInfo || (!vynutit && boloUvodneInfoPotvrdene())) {
    return;
  }

  zavriNastavenia();
  zavriMenu();
  uvodneInfo.classList.remove("skryte");
  uvodneInfo.setAttribute("aria-hidden", "false");
  if (uvodneInfoKarta) {
    uvodneInfoKarta.scrollTop = 0;
    window.requestAnimationFrame(() => {
      uvodneInfoKarta.scrollTop = 0;
    });
  }
  if (uvodneInfoNadpis) {
    window.setTimeout(() => {
      uvodneInfoNadpis.focus({ preventScroll: true });
      if (uvodneInfoKarta) {
        uvodneInfoKarta.scrollTop = 0;
      }
    }, 0);
  }
}

function zavriUvodneInfo() {
  if (!uvodneInfo) {
    return;
  }

  uvodneInfo.classList.add("skryte");
  uvodneInfo.setAttribute("aria-hidden", "true");
  ulozUvodneInfoPotvrdene();
}

function prepniMenu() {
  if (jeOtvoreneMenu()) {
    zavriMenu();
  } else {
    otvorMenu();
  }
}

function aktualizujMenuPredmet(predmet) {
  menuPolozkyPredmetov.forEach((tlacidlo) => {
    tlacidlo.classList.toggle("aktivny", tlacidlo.dataset.predmet === predmet);
  });
  aktualizujRozbalenieMenuPredmetov();
}

function aktualizujRozbalenieMenuPredmetov() {
  menuVetvyPredmetov.forEach((vetva) => {
    const jeRozbalena = vetva.dataset.predmet === rozbalenyPredmetMenu;
    const jeAktivna = vetva.dataset.predmet === aktualnyPredmet;
    vetva.classList.toggle("rozbalena", jeRozbalena);
    vetva.classList.toggle("ma-aktivny-predmet", jeAktivna);
  });
}

function ziskajPrezentaciuPrePredmet(otazka, predmet) {
  if (otazka.prezentacia) {
    return otazka.prezentacia;
  }

  const referencia = String(otazka.slideRef || otazka.zdroj || "");
  const zhoda = referencia.match(/[^\s/\\]+\.pdf/i);
  if (zhoda) {
    return zhoda[0];
  }

  if (predmet === "pc2") {
    return "PC2";
  }

  if (predmet === "hel") {
    return "HEL";
  }

  return "Bez prezentacie";
}

function ziskajOkruhyOtazkyPrePredmet(otazka, predmet) {
  const okruhy = [ziskajPrezentaciuPrePredmet(otazka, predmet)];
  if (Array.isArray(otazka.okruhy)) {
    otazka.okruhy.forEach((okruh) => {
      if (okruh) {
        okruhy.push(okruh);
      }
    });
  }
  return okruhy;
}

function ziskajPrezentaciePredmetu(predmet) {
  if (predmet === "test") {
    return [];
  }

  return unikatneHodnoty(ziskajOtazkyPredmetu(predmet).flatMap((otazka) => ziskajOkruhyOtazkyPrePredmet(otazka, predmet)));
}

function nastavPredmetZMenu(predmet) {
  rozbalenyPredmetMenu = rozbalenyPredmetMenu === predmet ? null : predmet;
  if (predmet === aktualnyPredmet) {
    aktualizujRozbalenieMenuPredmetov();
    return;
  }
  nastavPredmet(predmet);
  aktualizujRozbalenieMenuPredmetov();
}

// Strom okruhov je naplneny pre vsetky predmety; rozbali sa iba po kliknuti na predmet.
function vykresliMenuOkruhy() {
  menuPodstromy.forEach((podstrom) => {
    const predmet = podstrom.dataset.predmet;
    podstrom.innerHTML = "";
    [hodnotaVsetko, ...ziskajPrezentaciePredmetu(predmet)].forEach((okruh) => {
      const tlacidlo = document.createElement("button");
      tlacidlo.type = "button";
      tlacidlo.className = "menu-okruh";
      tlacidlo.textContent = okruh === hodnotaVsetko ? "V\u0161etko" : okruh;
      tlacidlo.classList.toggle("aktivny", predmet === aktualnyPredmet && vybranaPrezentacia === okruh);
      tlacidlo.addEventListener("click", () => vyberOkruhZMenu(okruh, predmet));
      podstrom.appendChild(tlacidlo);
    });
  });
  aktualizujRozbalenieMenuPredmetov();
  return;

  const aktivnyPodstrom = menuPodstromy.find((p) => p.dataset.predmet === aktualnyPredmet);
  if (!aktivnyPodstrom) {
    return;
  }

  [hodnotaVsetko, ...ziskajPrezentacie()].forEach((okruh) => {
    const tlacidlo = document.createElement("button");
    tlacidlo.type = "button";
    tlacidlo.className = "menu-okruh";
    tlacidlo.textContent = okruh === hodnotaVsetko ? "Všetko" : okruh;
    tlacidlo.classList.toggle("aktivny", vybranaPrezentacia === okruh);
    tlacidlo.addEventListener("click", () => vyberOkruhZMenu(okruh));
    aktivnyPodstrom.appendChild(tlacidlo);
  });
}

function vyberOkruhZMenu(okruh, predmet = aktualnyPredmet) {
  if (predmet !== aktualnyPredmet) {
    nastavPredmet(predmet);
  }

  rozbalenyPredmetMenu = predmet;
  pouzivaTazkyPool = false;
  vybranaPrezentacia = okruh;
  prvokVyberPrezentacie.value = okruh;
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
  vykresliMenuOkruhy();
  nastavPoradie();
  zavriMenu();
}

function otvorNastaveniaZMenu() {
  zavriMenu();
  if (prvokPanelNastaveni.classList.contains("skryte")) {
    prepniNastavenia();
  }
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
    extraStatement: Boolean(otazka.extraStatement),
    pevnePoradieMoznosti: true,
    crack: true
  };
}

function nastavNahodnyCrackParStatement(otazka) {
  const crackDvojica = otazka.crackPair;
  if (!crackDvojica?.pravda || !crackDvojica?.nepravda) {
    return otazka;
  }

  // 50 % pravda; nepravdiva verzia sa vybera rovnomerne zo vsetkych variantov
  // (pri dvoch nepravdach 25 % + 25 %). Stare data s jednou nepravdou funguju dalej.
  const nepravdy = [crackDvojica.nepravda, crackDvojica.nepravda2].filter(Boolean);
  const pouziPravdu = jeRezimUcenia() ? true : Math.random() < 0.5;
  const spravnyVyrok = crackDvojica.pravda;
  otazka.otazka = pouziPravdu
    ? crackDvojica.pravda
    : nepravdy[Math.floor(Math.random() * nepravdy.length)];
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
    extraStatement: Boolean(otazka.extraStatement),
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
  const videneTexty = new Set();

  ziskajOtazkyZBeznychFiltrov(true).forEach((otazka) => {
    if (!otazka.crackPair?.pravda) {
      return;
    }

    const primarnaPrezentacia = ziskajPrezentaciu(otazka);
    // Okruhy "Vzorce" (flashcardy), "Mimo SZZ" (CZS teoria mimo SZZ otazok), "Vypocty"
    // (CZS vypoctove drily) a "11. Ostatne (mimo SZZ)" (HEL) do exam mode
    // (vypracovanie) nepatria - exam = len SZZ temy.
    // (examSkip = rucne oznaceny duplikat: ostava v crack mode, do exam mode nejde.)
    if (otazka.examSkip || ["Vzorce", "Mimo SZZ", "Vypocty", "11. Ostatne (mimo SZZ)", "Rozsahy"].includes(primarnaPrezentacia)) {
      return;
    }
    // Pri vybranom konkretnom okruhu zoskup slidy pod jeho nazvom (aj cross-listed otazky cez `okruhy`).
    const prezentacia = (vybranaPrezentacia !== hodnotaVsetko) ? vybranaPrezentacia : primarnaPrezentacia;
    // Rovnaku odpoved (pravda) zaradime do exam mode iba raz (deduplikacia opakovanych otazok).
    const dedupKluc = normalizujKluc(otazka.crackPair.pravda);
    if (videneTexty.has(dedupKluc)) {
      return;
    }
    videneTexty.add(dedupKluc);

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
  return [...new Set(hodnoty)].sort((a, b) => a.localeCompare(b, "sk", { numeric: true }));
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
  if (pouzivaTazkyPool) {
    return [...tazkeOtazky.values()]
      .filter((otazka) => jeOtazkaDostupnaPodlaExtraStatements(otazka))
      .filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)));
  }

  if (jeExamMode()) {
    return ziskajExamOtazky().filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)));
  }

  if (jeCrackMode()) {
    return ziskajCrackOtazky().filter((otazka) => !odstraneneOtazky.has(ziskajIdOtazky(otazka)));
  }

  return ziskajOtazkyZBeznychFiltrov();
}

function jePravdivaCrackOtazka(otazka) {
  return !otazka.crack || (Array.isArray(otazka.spravne) && otazka.spravne.includes(0));
}

function ziskajOtazkyPreLearnMaster() {
  if (pouzivaTazkyPool) {
    return [...tazkeOtazky.values()]
      .filter((otazka) => jeOtazkaDostupnaPodlaExtraStatements(otazka))
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
  if (pouzivaTazkyPool) {
    prvokPocetFiltra.textContent = `${textPoctu} v tazkom poole`;
    return;
  }

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

  prvokPocetFiltra.textContent = textPoctu;
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
  const otazky = [...tazkeOtazky.values()].filter((otazka) => jeOtazkaDostupnaPodlaExtraStatements(otazka));
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
  if ([...tazkeOtazky.values()].filter((otazka) => jeOtazkaDostupnaPodlaExtraStatements(otazka)).length === 0) {
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
  nastavTlacidloPredoslehoVysledku(true);
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
  nastavTlacidloPredoslehoVysledku(false);
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
  aktualizujPocitadloSpravnychSession();
  prvokVysledok.className = nahlad.vysledokTrieda;
  prvokVysledok.textContent = nahlad.vysledokText;

  nastavMediaOtazky(otazka);
  vykresliMoznosti(otazka, aktualneMoznosti, nahlad.vybrane, nahlad.vyhodnotene, nahlad.ucenie);
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = false;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  nastavTlacidloPredoslehoVysledku(tlacidloPredoslyVysledok.disabled);
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
  aktualizujPocitadloSpravnychSession();
  if (jeCrackMode() && !predoslyVysledok.jeSpravne) {
    zobrazSpravnuOdpovedVStatemente(otazka, predoslyVysledok.jeSpravne, predoslyVysledok.textVysledku);
  } else {
    vykresliVysledokPredoslej(otazka, predoslyVysledok.jeSpravne, predoslyVysledok.textVysledku);
  }

  nastavMediaOtazky(otazka);
  vykresliMoznosti(otazka, aktualneMoznosti, predoslyVysledok.vybrane, true);
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = true;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  nastavTlacidloPredoslehoVysledku(false, "Current");
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

function nastavPozadieFlashu(nastavenia, farby) {
  const ziara = farby ? farby.ziara : "255, 230, 58";
  const okraj = farby ? farby.okraj : "255, 126, 0";
  return [
    `radial-gradient(circle at 50% 48%, rgba(255, 255, 255, ${nastavenia.bieleJadro}) 0%, rgba(255, 255, 255, ${Math.min(nastavenia.bieleJadro * 0.84, 0.92)}) 18%, rgba(${ziara}, ${nastavenia.zltaZiara}) ${nastavenia.rozsah}%, rgba(${okraj}, ${nastavenia.zltyOkraj}) 78%, rgba(${okraj}, 0) 92%)`,
    `rgba(255, 255, 255, ${nastavenia.bielyPodklad})`
  ].join(", ");
}

function spustiMegaStreakCislo(dlzkaSerie) {
  if (!prvokStreakFlashCislo || dlzkaSerie <= 0 || dlzkaSerie % KROK_MILNIKA !== 0) {
    return;
  }

  if (casovacMegaStreaku) {
    window.clearTimeout(casovacMegaStreaku);
    casovacMegaStreaku = null;
  }

  const tier = ziskajTier(dlzkaSerie);
  const trvanie = 220;
  prvokStreakFlashCislo.classList.remove("aktivny", "specialny", "strata");
  prvokStreakFlashCislo.innerHTML = "";

  const cislo = document.createElement("span");
  cislo.className = "mega-cislo";
  cislo.textContent = String(dlzkaSerie);
  prvokStreakFlashCislo.appendChild(cislo);

  if (tier) {
    const nazov = document.createElement("span");
    nazov.className = "mega-tier";
    nazov.textContent = tier.nazov;
    prvokStreakFlashCislo.appendChild(nazov);
    prvokStreakFlashCislo.style.setProperty("--mega-farba", `rgb(${tier.rgb})`);
  } else {
    prvokStreakFlashCislo.style.setProperty("--mega-farba", "rgb(255, 216, 17)");
  }

  prvokStreakFlashCislo.style.setProperty("--mega-trvanie", `${trvanie}ms`);
  prvokStreakFlashCislo.style.setProperty("--mega-scale", Math.min(1 + dlzkaSerie * 0.035, 1.9));
  void prvokStreakFlashCislo.offsetWidth;
  prvokStreakFlashCislo.classList.add("aktivny");

  casovacMegaStreaku = window.setTimeout(() => {
    prvokStreakFlashCislo.classList.remove("aktivny", "specialny");
    casovacMegaStreaku = null;
  }, trvanie + 60);
}

// Otras obrazovky pri milniku (sila rastie so streakom).
function spustiOtras(dlzkaSerie) {
  document.body.style.setProperty("--otras-sila", `${Math.min(4 + dlzkaSerie * 0.5, 16)}px`);
  document.body.classList.remove("streak-otras");
  void document.body.offsetWidth;
  document.body.classList.add("streak-otras");
  window.setTimeout(() => document.body.classList.remove("streak-otras"), 430);
}

function odstranPoAnimacii(prvok, zaloznyCas = 900) {
  if (!prvok) return;
  let odstranene = false;
  const odstran = () => {
    if (odstranene) return;
    odstranene = true;
    prvok.remove();
  };
  prvok.addEventListener("animationend", (udalost) => {
    if (udalost.target === prvok) odstran();
  }, { once: true });
  window.setTimeout(odstran, zaloznyCas);
}

function najdiPrvokVybranejKlavesy(vybrane) {
  if (!Array.isArray(vybrane) || vybrane.length === 0) return null;
  const hladane = new Set(vybrane);
  const popisky = [...prvokMoznosti.children];
  const index = aktualneMoznosti.findIndex((moznost) => hladane.has(moznost.povodnyIndex));
  if (index < 0) return null;
  return popisky[index]?.querySelector(".klavesa") || popisky[index] || null;
}

function spustiKeycapShockwave(jeSpravne, dlzkaSerie, vybrane) {
  if (!prvokStreakEfekty) return;
  const klavesa = najdiPrvokVybranejKlavesy(vybrane);
  if (!klavesa) return;

  const rect = klavesa.getBoundingClientRect();
  const farby = ziskajFarbyTieru(dlzkaSerie);
  const vlna = document.createElement("span");
  vlna.className = `keycap-shockwave ${jeSpravne ? "spravna" : "chybna"}`;
  vlna.style.left = `${rect.left + rect.width / 2}px`;
  vlna.style.top = `${rect.top + rect.height / 2}px`;
  vlna.style.setProperty("--shockwave-rgb", jeSpravne ? farby.ziara : "255, 72, 0");
  vlna.style.setProperty("--shockwave-scale", Math.min(1.1 + dlzkaSerie * 0.035, 2.2));
  prvokStreakEfekty.appendChild(vlna);
  odstranPoAnimacii(vlna, 760);
}

function spustiMilnikovyBurst(dlzkaSerie) {
  if (!prvokStreakEfekty || dlzkaSerie <= 0 || dlzkaSerie % KROK_MILNIKA !== 0) return;

  const farby = ziskajFarbyTieru(dlzkaSerie);
  document.body.style.setProperty("--milnik-rgb", farby.ziara);
  document.body.style.setProperty("--milnik-okraj-rgb", farby.okraj);
  document.body.classList.remove("streak-milnik-flash");
  void document.body.offsetWidth;
  document.body.classList.add("streak-milnik-flash");
  window.setTimeout(() => document.body.classList.remove("streak-milnik-flash"), 760);

  const burst = document.createElement("div");
  burst.className = "milnik-burst";
  const pocet = Math.min(18 + Math.floor(dlzkaSerie / 5) * 4, 42);
  for (let i = 0; i < pocet; i++) {
    const luc = document.createElement("span");
    const uhol = (360 / pocet) * i + nahodneCeleCislo(-6, 6);
    luc.style.setProperty("--uhol", `${uhol}deg`);
    luc.style.setProperty("--dlzka", `${nahodneCeleCislo(120, 330)}px`);
    luc.style.setProperty("--delay", `${i % 5 * 18}ms`);
    luc.style.setProperty("--burst-rgb", i % 3 === 0 ? farby.okraj : farby.ziara);
    burst.appendChild(luc);
  }
  prvokStreakEfekty.appendChild(burst);
  odstranPoAnimacii(burst, 980);
}

// Kratke "FAST" pri rychlej spravnej odpovedi.
function spustiRychlyBonus() {
  if (!prvokRychlyBonus) return;
  prvokRychlyBonus.classList.remove("aktivny");
  prvokRychlyBonus.textContent = "⚡ FAST";
  void prvokRychlyBonus.offsetWidth;
  prvokRychlyBonus.classList.add("aktivny");
  window.setTimeout(() => prvokRychlyBonus.classList.remove("aktivny"), 620);
}

// Dramaticka strata streaku: spomalenie + odsednutie + rozbite cislo.
function spustiStratuStreaku(dlzka) {
  if (!prvokStreakFlashCislo || dlzka < PRAH_DRAMY_STRATY) return;

  if (casovacMegaStreaku) {
    window.clearTimeout(casovacMegaStreaku);
    casovacMegaStreaku = null;
  }

  document.body.classList.remove("streak-strata");
  void document.body.offsetWidth;
  document.body.classList.add("streak-strata");

  prvokStreakFlashCislo.classList.remove("aktivny", "specialny", "strata");
  prvokStreakFlashCislo.innerHTML = "";
  const cislo = document.createElement("span");
  cislo.className = "mega-cislo strata-cislo";
  cislo.textContent = String(dlzka);
  prvokStreakFlashCislo.appendChild(cislo);
  void prvokStreakFlashCislo.offsetWidth;
  prvokStreakFlashCislo.classList.add("strata");

  window.setTimeout(() => {
    document.body.classList.remove("streak-strata");
    prvokStreakFlashCislo.classList.remove("strata");
  }, 820);
}

function spustiSpravnyFlash(dlzkaSerie) {
  if (!prvokFlashEfekt) {
    return false;
  }

  const nastavenia = ziskajNastaveniaFlashu(dlzkaSerie);
  const pozadie = nastavPozadieFlashu(nastavenia, ziskajFarbyTieru(dlzkaSerie));
  const specialny = dlzkaSerie > 0 && dlzkaSerie % KROK_MILNIKA === 0;
  spustiMegaStreakCislo(dlzkaSerie);
  if (specialny) {
    spustiOtras(dlzkaSerie);
    spustiMilnikovyBurst(dlzkaSerie);
  }
  if (animaciaSpravnehoFlashu) {
    animaciaSpravnehoFlashu.cancel();
  } else if (typeof prvokFlashEfekt.getAnimations === "function") {
    prvokFlashEfekt.getAnimations().forEach((animacia) => animacia.cancel());
  }

  if (casovacSpravnehoFlashu) {
    window.clearTimeout(casovacSpravnehoFlashu);
    casovacSpravnehoFlashu = null;
  }

  prvokFlashEfekt.innerHTML = "";
  document.body.classList.remove("mini-impulz-panel");
  prvokFlashEfekt.classList.remove("aktivny", "specialny", "lucovy", "mini-impulz");
  prvokFlashEfekt.style.mixBlendMode = "normal";
  prvokFlashEfekt.style.background = pozadie;
  prvokFlashEfekt.style.opacity = "1";
  prvokFlashEfekt.style.setProperty("--flash-trvanie", `${nastavenia.trvanie}ms`);
  prvokFlashEfekt.style.setProperty("--flash-scale-start", nastavenia.scaleStart);
  prvokFlashEfekt.style.setProperty("--flash-scale-peak", nastavenia.scalePeak);
  void prvokFlashEfekt.offsetHeight;
  prvokFlashEfekt.classList.add("lucovy");
  prvokFlashEfekt.classList.toggle("specialny", specialny);

  if (typeof prvokFlashEfekt.animate !== "function") {
    prvokFlashEfekt.classList.add("aktivny");
    casovacSpravnehoFlashu = window.setTimeout(() => {
      prvokFlashEfekt.classList.remove("aktivny", "specialny", "lucovy", "mini-impulz");
      prvokFlashEfekt.innerHTML = "";
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
    prvokFlashEfekt.classList.remove("specialny", "lucovy", "mini-impulz");
    prvokFlashEfekt.innerHTML = "";
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

function spustiSpatnuVazbu(jeSpravne, dlzkaSerie = 0, rychla = false, vybrane = []) {
  const spatnaVazba = jeSpravne
    ? ziskajZvukSpravnejOdpovede(dlzkaSerie)
    : ziskajZvukZlejOdpovede(dlzkaSerie);
  const { zvuk, rychlost } = spatnaVazba;
  const pocetPrehrati = pocetPrehratiZvuku(jeSpravne, dlzkaSerie);

  for (let i = 0; i < pocetPrehrati; i++) {
    window.setTimeout(() => prehrajZvuk(zvuk, rychlost), i * 85);
  }

  spustiEfekt(jeSpravne, dlzkaSerie);
  spustiKeycapShockwave(jeSpravne, dlzkaSerie, vybrane);

  // Haptika (mobil): stupa so streakom; milnik a strata maju vlastny vzor.
  const milnik = jeSpravne && dlzkaSerie > 0 && dlzkaSerie % KROK_MILNIKA === 0;
  let vzor;
  if (!jeSpravne) {
    vzor = dlzkaSerie >= PRAH_DRAMY_STRATY ? [60, 40, 130] : [40, 30, 70];
  } else if (milnik) {
    vzor = [18, 26, Math.min(45 + dlzkaSerie * 3, 170)];
  } else if (rychla) {
    vzor = [10, 18, 26];
  } else {
    vzor = Math.min(8 + dlzkaSerie, 26);
  }
  zavibruj(vzor);

  if (jeSpravne && rychla) {
    spustiRychlyBonus();
  }
  if (!jeSpravne) {
    spustiStratuStreaku(dlzkaSerie);
  }
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

  // Farba a ziara cisla podla aktualneho tieru (rastie so streakom).
  const tier = ziskajTier(zobrazenaHodnota);
  const farby = ziskajFarbyTieru(zobrazenaHodnota);
  const intenzita = Math.min(zobrazenaHodnota / 20, 1);
  const burnIntenzita = ziskajIntenzituStreakBurnu(zobrazenaHodnota);
  const burnZapnuty = zobrazenaHodnota >= PRAH_BURN_OKRAJOV && !poolDokonceny;
  prvokStreakAktualny.classList.toggle("ma-tier", Boolean(tier));
  if (tier) {
    prvokStreakAktualny.style.setProperty("--streak-farba", `rgb(${tier.rgb})`);
  } else {
    prvokStreakAktualny.style.removeProperty("--streak-farba");
  }
  prvokStreakAktualny.style.setProperty("--streak-glow", `${Math.min(zobrazenaHodnota * 1.4, 32)}px`);
  document.body.style.setProperty("--streak-rgb", farby.ziara);
  document.body.style.setProperty("--streak-okraj-rgb", farby.okraj);
  document.body.style.setProperty("--streak-intenzita", String(intenzita));
  document.body.style.setProperty("--streak-burn-rgb", farby.ziara);
  document.body.style.setProperty("--streak-burn-okraj-rgb", farby.okraj);
  document.body.style.setProperty("--streak-burn-intenzita", String(burnIntenzita));
  document.body.classList.toggle("streak-bar-nabity", zobrazenaHodnota >= 5);
  document.body.classList.remove("streak-aura-zapnuta");
  document.body.classList.toggle("streak-burn-okraje", burnZapnuty);
  document.body.classList.toggle("streak-burn-silny", burnZapnuty && zobrazenaHodnota >= PRAH_SILNEHO_BURNU);
  nastavStreakBurn(burnZapnuty, farby, burnIntenzita);

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
  aktualizujCasPoolu("0");
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
  aktualizujPocitadloSpravnychSession();
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
  nastavTlacidloPredoslehoVysledku(tlacidloPredoslyVysledok.disabled);
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
    const skupina = ziskajSkupinuLearnMaster(otazka);
    if (!indexySkupin.has(skupina.kluc)) {
      indexySkupin.set(skupina.kluc, skupiny.length);
      skupiny.push({ nazov: skupina.nazov, otazky: [] });
    }
    skupiny[indexySkupin.get(skupina.kluc)].otazky.push(otazka);
  });

  return skupiny;
}

function ziskajSkupinuLearnMaster(otazka) {
  const prezentacia = ziskajPrezentaciu(otazka);
  const podokruh = ziskajPodokruh(otazka);
  const casti = String(podokruh).split("/").map((cast) => cast.trim()).filter(Boolean);
  let skupina = podokruh;

  if (casti.length > 1) {
    skupina = normalizujKluc(casti[0]) === normalizujKluc(prezentacia)
      ? casti[1]
      : casti[0];
  }

  const nazov = normalizujKluc(skupina) === normalizujKluc(prezentacia)
    ? prezentacia
    : `${prezentacia} - ${skupina}`;

  return {
    kluc: `${prezentacia}::${skupina}`,
    nazov
  };
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

function presunOtazkuDoTrashPoolu(otazka, moznosti = {}) {
  const { upravPociatocnyPool = false } = moznosti;
  const idOtazky = ziskajIdOtazky(otazka);

  odstraneneOtazky.set(idOtazky, otazka);
  poradieOtazok = poradieOtazok.filter((polozka) => ziskajIdOtazky(polozka) !== idOtazky);
  aktualneOtazky = aktualneOtazky.filter((polozka) => ziskajIdOtazky(polozka) !== idOtazky);

  if (upravPociatocnyPool && jeRezimPrejdeniaPoolu()) {
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
}

function odstranOtazkuZLearnMaster(otazka) {
  presunOtazkuDoTrashPoolu(otazka);
  zobrazLearnModeMaster();
}

function vytvorTlacidloTrashLearnMaster(otazka) {
  const tlacidlo = document.createElement("button");
  tlacidlo.type = "button";
  tlacidlo.className = "learn-master-trash";
  tlacidlo.setAttribute("aria-label", "Presunut otazku do Trash poolu");
  tlacidlo.addEventListener("click", (udalost) => {
    udalost.preventDefault();
    udalost.stopPropagation();
    odstranOtazkuZLearnMaster(otazka);
  });
  return tlacidlo;
}

function vytvorStatementLearnMaster(otazka) {
  const polozka = document.createElement("li");
  polozka.className = "learn-master-statement";

  const riadok = document.createElement("div");
  riadok.className = "learn-master-statement-riadok";
  riadok.append(
    vytvorTextLearnMaster(ziskajZadanieLearnMaster(otazka), "learn-master-statement-text"),
    vytvorTlacidloTrashLearnMaster(otazka)
  );
  polozka.appendChild(riadok);

  return polozka;
}

function vytvorZoznamStatementovLearnMaster() {
  const zoznam = document.createElement("ul");
  zoznam.className = "learn-master-statementy";
  return zoznam;
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
  aktualizujPocitadloSpravnychSession();
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

    let zoznamStatementov = null;
    skupina.otazky.forEach((otazka) => {
      if (jePravdivyStatementLearnMaster(otazka)) {
        if (!zoznamStatementov) {
          zoznamStatementov = vytvorZoznamStatementovLearnMaster();
          sekcia.appendChild(zoznamStatementov);
        }
        zoznamStatementov.appendChild(vytvorStatementLearnMaster(otazka));
      } else {
        zoznamStatementov = null;
        sekcia.appendChild(vytvorOtazkuLearnMaster(otazka, poradoveCislo));
      }
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
  nastavTlacidloPredoslehoVysledku(true);
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
      nastavStatementText(polozka, text);
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
  aktualizujPocitadloSpravnychSession();
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = false;
  aktualizujTlacidloTazkejOtazky();
  aktualizujTlacidloNeviem();
  aktualizujRozlozenieUcenia();
  nastavTlacidloPredoslehoVysledku(tlacidloPredoslyVysledok.disabled);

  nastavMediaOtazky(otazka);

  if (otazka.exam) {
    zobrazExamOtazku(otazka);
    return;
  }

  aktualneMoznosti = ucenie ? vyberSpravneMoznostiOtazky(otazka) : vyberMoznostiOtazky(otazka);

  const spravneMoznosti = ucenie ? spravneZobrazeneIndexy(otazka, aktualneMoznosti) : [];
  vykresliMoznosti(otazka, aktualneMoznosti, spravneMoznosti, ucenie, ucenie);
  casZobrazeniaOtazky = ucenie ? 0 : Date.now();
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
  if (jeTestPredmet() && otazka?.typ === "jedna" && vstup.type === "radio" && vstup.checked) {
    window.setTimeout(() => skontrolujOdpoved(), 0);
    return;
  }

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

  if (jeUvodneInfoOtvorene()) {
    if (udalost.key === "Escape" || udalost.key === "Enter" || udalost.key === " ") {
      udalost.preventDefault();
      zavriUvodneInfo();
      return;
    }
    if (udalost.key !== "Tab") {
      udalost.preventDefault();
    }
    return;
  }

  if (jeOtvoreneMenu()) {
    if (udalost.key === "Escape") {
      udalost.preventDefault();
      zavriMenu();
    }
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
    if (udalost.key === "Escape") {
      udalost.preventDefault();
      zavriNastavenia();
    }
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

function jeInteraktivnyTap(udalost) {
  return Boolean(udalost.target?.closest?.("button, a, input, label, select, textarea, summary, [role='button']"));
}

function obsluzTapDokoncenehoPoolu(udalost) {
  if (!poolDokonceny || !jeMobilnyCrackMode() || jeInteraktivnyTap(udalost)) {
    return;
  }

  udalost.preventDefault();
  nastavPoradie();
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
  cakaNaVyradenieOtazky = jeSpravne && jeRezimPrejdeniaPoolu() && !jeEndlessMode();

  const predoslaSeriaSpravnych = seriaSpravnych;
  if (jeSpravne) {
    seriaSpravnych++;
    najvyssiaSeriaSpravnych = Math.max(najvyssiaSeriaSpravnych, seriaSpravnych);
  } else {
    seriaSpravnych = 0;
  }

  // Speed bonus: spravna odpoved do PRAH_RYCHLEJ_ODPOVEDE od zobrazenia otazky.
  const rychlaOdpoved = jeSpravne
    && casZobrazeniaOtazky > 0
    && (Date.now() - casZobrazeniaOtazky) <= PRAH_RYCHLEJ_ODPOVEDE;

  upravStlpec(jeSpravne);
  aktualizujStreak(jeSpravne);
  spustiSpatnuVazbu(jeSpravne, jeSpravne ? seriaSpravnych : predoslaSeriaSpravnych, rychlaOdpoved, vybrane);
  posunCitatPoOdpovedi(jeSpravne);

  if (jeSpravne) {
    skore++;
    pocetSpravnychSession++;
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

  aktualizujPocitadloSpravnychSession();

  aktualizujTlacidloNeviem();

  const testAutomatickyPreskok = jeTestPredmet() && jeSpravne;
  const rychlyRezimPreskok = !jeTestPredmet() && ((jeSpravne && jeRychlyRezim()) || jeRychlyRezim2x());
  if (!slowZastavenie && (jeCrackMode() || testAutomatickyPreskok || rychlyRezimPreskok)) {
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
  if (sekundy < 60) {
    return String(sekundy);
  }
  const hodiny = Math.floor(sekundy / 3600);
  const minuty = Math.floor((sekundy % 3600) / 60);
  const zvysok = sekundy % 60;
  const dvojm = (n) => String(n).padStart(2, "0");
  return hodiny > 0 ? `${hodiny}:${dvojm(minuty)}:${dvojm(zvysok)}` : `${minuty}:${dvojm(zvysok)}`;
}

function aktualizujCasPoolu(zamrznutyCas = null) {
  if (!prvokCasPoolu) return;
  if (zamrznutyCas !== null) {
    prvokCasPoolu.textContent = zamrznutyCas;
    return;
  }
  if (!casZaciatkuPoolu || poolDokonceny) return;
  prvokCasPoolu.textContent = formatTrvanie(Date.now() - casZaciatkuPoolu);
}

function spustiCasovacPoolu() {
  aktualizujCasPoolu("0");
  if (casovacCasPoolu) return;
  casovacCasPoolu = window.setInterval(() => aktualizujCasPoolu(), 250);
}

function sklonujOtazky(pocet) {
  if (pocet === 1) return "otázka";
  if (pocet >= 2 && pocet <= 4) return "otázky";
  return "otázok";
}

function zobrazDokoncenyPool() {
  zrusCrackTimer(true);
  poolDokonceny = true;
  document.body.classList.remove("streak-aura-zapnuta", "streak-burn-okraje", "streak-burn-silny");
  zastavStreakBurn();
  prehrajZvuk(zvukDokonceniaPoolu);
  prehrajZvuk(zvukDokonceniaPooluChoir);
  prehrajVideoOverlay("Animations/explosion_ultiamte.mp4", 1);
  vyhodnotene = true;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  const vsetkoSpravne = skore >= pociatocnyPocetPoolu && pociatocnyPocetPoolu > 0;
  const casPoolu = formatTrvanie(Date.now() - casZaciatkuPoolu);
  aktualizujCasPoolu(casPoolu);
  prvokTema.textContent = "Pool hotovy";
  prvokTypOtazky.textContent = vsetkoSpravne ? "Vsetko spravne" : `Vysledok ${skore} / ${pociatocnyPocetPoolu}`;

  // "HOTOVO" v slote otazky + staty: kolko otazok bolo zodpovedanych a za aky cas.
  prvokOtazka.classList.remove("crack-odhalena", "exam-otazka");
  prvokOtazka.classList.add("pool-hotovo");
  prvokOtazka.innerHTML = "";
  prvokOtazka.appendChild(document.createTextNode("HOTOVO"));
  const staty = document.createElement("span");
  staty.className = "pool-hotovo-staty";
  staty.textContent = `${pocetVyhodnotenychOtazok} ${sklonujOtazky(pocetVyhodnotenychOtazok)} za ${casPoolu}`;
  prvokOtazka.appendChild(staty);

  prvokPocitadlo.textContent = `${stavStlpca} / ${pociatocnyPocetPoolu}`;
  aktualizujPocitadloSpravnychSession();
  prvokMoznosti.innerHTML = "";
  prvokVysledok.className = "vysledok ok";
  prvokVysledok.textContent = jeMobilnyCrackMode()
    ? "Tapni na obrazovku pre novy beh toho isteho poolu."
    : "Stlac medzernik pre novy beh toho isteho poolu.";
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
  nastavTlacidloPredoslehoVysledku(tlacidloPredoslyVysledok.disabled);
}

function posunNaDalsiuEndlessOtazku() {
  if (poradieOtazok.length <= 1) {
    aktualnyIndex = 0;
    return;
  }

  if (prepinacNahodnehoPoradia.checked) {
    let dalsiIndex = aktualnyIndex;
    while (dalsiIndex === aktualnyIndex) {
      dalsiIndex = nahodneCeleCislo(0, poradieOtazok.length - 1);
    }
    aktualnyIndex = dalsiIndex;
    return;
  }

  aktualnyIndex = aktualnyIndex < poradieOtazok.length - 1 ? aktualnyIndex + 1 : 0;
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

  if (jeEndlessMode()) {
    posunNaDalsiuEndlessOtazku();
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
  cakaNaVyradenieOtazky = false;
  presunOtazkuDoTrashPoolu(otazka, { upravPociatocnyPool: true });

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

  if (predmet === "zin") {
    const otazkyPredmetu = typeof zinOtazky === "undefined" ? [] : zinOtazky;
    return filtrujExtraStatementsPredmetu(predmet, otazkyPredmetu);
  }

  if (predmet === "obhajoba") {
    return typeof obhajobaOtazky === "undefined" ? [] : obhajobaOtazky;
  }

  return czsOtazky;
}

function nastavPredmet(predmet) {
  // Multiple Choice override je iba pre HEL; Exam Mode pre HEL, CZS, ZIN aj VS2 - inde ich vypneme.
  if (predmet !== "hel") {
    if (prepinacMultipleChoice) {
      prepinacMultipleChoice.checked = false;
    }
  }
  if (predmet !== "hel" && predmet !== "czs" && predmet !== "zin" && predmet !== "vs2" && predmet !== "obhajoba") {
    if (prepinacExamMode) {
      prepinacExamMode.checked = false;
      examModeMini = false;
    }
  }

  // Predmety bez crack podpory bezia v klasickom mode - zrusime crack timer.
  if (predmet !== "hel" && predmet !== "czs" && predmet !== "zin" && predmet !== "vs2" && predmet !== "obhajoba") {
    zrusCrackTimer(true);
  }

  aktualnyPredmet = predmet;
  zakladneOtazkyPredmetu = ziskajOtazkyPredmetu(predmet);

  aktualizujMenuPredmet(predmet);
  prvokPrepinacRezimu.classList.toggle("skryte", predmet !== "pc2");

  aktualizujViditelnostModov();
  obnovFiltrePredmetu();
  vykresliMenuOkruhy();
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
tlacidloZavrietNastavenia.addEventListener("click", zavriNastavenia);
prekrytieNastaveni.addEventListener("click", zavriNastavenia);
tlacidloMenu.addEventListener("click", prepniMenu);
tlacidloZavrietMenu.addEventListener("click", zavriMenu);
tlacidloZavrietUvodneInfo.addEventListener("click", zavriUvodneInfo);
tlacidloZobrazitUvodneInfo.addEventListener("click", () => zobrazUvodneInfoAkTreba(true));
prekrytieMenu.addEventListener("click", zavriMenu);
menuOtvoritNastavenia.addEventListener("click", otvorNastaveniaZMenu);
menuPolozkyPredmetov.forEach((tlacidlo) => {
  tlacidlo.addEventListener("click", () => {
    // Prepne predmet a necha menu otvorene, aby bolo vidno strom okruhov.
    // Menu zatvori az vyber konkretneho okruhu (vratane "Všetko").
    nastavPredmetZMenu(tlacidlo.dataset.predmet);
  });
});
tlacidloPredoslyVysledok.addEventListener("click", prepniPredoslyVysledok);
tlacidloBackspaceSorting.addEventListener("click", () => {
  spustiEfektTlacidla(tlacidloBackspaceSorting);
  prepniPredoslyVysledok();
});
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
tlacidloTemaOranzova.addEventListener("click", () => nastavTemu("oranzova"));
tlacidloTemaZlta.addEventListener("click", prepniZltuTemu);
tlacidloTemaSiva.addEventListener("click", () => nastavTemu("siva"));
tlacidloTemaFialova.addEventListener("click", () => nastavTemu("fialova"));
tlacidloTemaTyrkysova.addEventListener("click", () => nastavTemu("tyrkysova"));
tlacidloTemaMentolova.addEventListener("click", () => nastavTemu("mentolova"));
tlacidloTemaTabula.addEventListener("click", () => nastavTemu("tabula"));
tlacidloTemaNocna.addEventListener("click", () => nastavTemu("nocna"));
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
if (prepinacExtraStatements) {
  prepinacExtraStatements.addEventListener("change", nastavExtraStatements);
}
prepinacUcenia.addEventListener("change", nastavRezimUcenia);
prepinacRychlehoRezimu.addEventListener("change", prepniRychlyRezim);
prepinacPrejdeniaPoolu.addEventListener("change", nastavRezimPrejdeniaPoolu);
prepinacEndlessMode.addEventListener("change", nastavEndlessMode);
prepinacMultipleChoice.addEventListener("change", nastavMultipleChoiceMode);
if (prepinacSlowMode) {
  prepinacSlowMode.addEventListener("change", () => {
    // Pri vypnuti Slow Mode zrus pripadne cakanie a posun dalej.
    if (!jeSlowMode() && cakaNaSlowPotvrdenie) {
      cakaNaSlowPotvrdenie = false;
      dalsiaOtazka();
    }
  });
}
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
  vykresliMenuOkruhy();
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
document.addEventListener("pointerup", obsluzTapDokoncenehoPoolu);
document.addEventListener("pointerdown", pripravZvuky, { once: true, capture: true });
document.addEventListener("keydown", pripravZvuky, { once: true, capture: true });
window.addEventListener("resize", aktualizujMobilneRozlozenie);
window.addEventListener("resize", () => {
  if (streakBurn.aktivny) nastavRozmeryStreakBurnu(true);
});
window.addEventListener("orientationchange", () => window.setTimeout(aktualizujMobilneRozlozenie, 250));
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", aktualizujMobilneRozlozenie);
}
if (streakBurn.znizenyPohyb) {
  const obnovBurnPoZmenePohybu = () => aktualizujStreak();
  if (typeof streakBurn.znizenyPohyb.addEventListener === "function") {
    streakBurn.znizenyPohyb.addEventListener("change", obnovBurnPoZmenePohybu);
  } else if (typeof streakBurn.znizenyPohyb.addListener === "function") {
    streakBurn.znizenyPohyb.addListener(obnovBurnPoZmenePohybu);
  }
}

nastavTlacidlaOtazok();
vytvorPixelyStlpca();
spustiCasovacPoolu();
aktualizujMobilneRozlozenie();
prednacitajAudioElementy();
nastavHlasitost(posuvnikHlasitosti.value);
nastavVypnutieZvuku();
prepinacNahodnehoPoradia.checked = true;
prepinacPrejdeniaPoolu.checked = true;
prepinacEndlessMode.checked = false;
prepinacMultipleChoice.checked = false;
prepinacCrackTimeru.checked = false;
prepinacDisplaySorting.checked = false;
if (prepinacExtraStatements) prepinacExtraStatements.checked = false;
// Slow Mode je automaticky zapnuty: po zlej odpovedi v Crack Mode ukaze spravnu odpoved.
if (prepinacSlowMode) prepinacSlowMode.checked = true;
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
zobrazUvodneInfoAkTreba();

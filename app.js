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
let hlasitost = 0.5;
let pociatocnyPocetPoolu = 0;
let cakaNaVyradenieOtazky = false;
let poolDokonceny = false;
let vybranaPrezentacia = "__vsetko";
let vybranePodokruhy = new Set();
let predoslyVysledok = null;
let zobrazujePredoslyVysledok = false;
let nahladAktualnejOtazky = null;
let aktualnaTema = "oranzova";
let aktualnyIndexCitatu = -1;
const odstraneneOtazky = new Map();
const hodnotaVsetko = "__vsetko";
const priestorSvg = "http://www.w3.org/2000/svg";
const zvukSpravne = new Audio("Audio-samples/correct/ESM_Simple_Google_Soundalike_Alert_20_Beep_Chirp_Notification_Synth_Electronic.wav");
const zvukZle = new Audio("Audio-samples/wrong/FF_CF_foley_fart_green.wav");
const zvukVyberuVolby = new Audio("Audio-samples/select/ESM_Perfect_Clean_App_Button_Click_2_Organic_Simple_Classic_Game_Click.wav");

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
const prvokPixelyStlpca = document.getElementById("pixelyStlpca");
const prvokStreakAktualny = document.getElementById("streakAktualny");
const prvokStreakNajlepsi = document.getElementById("streakNajlepsi");
const prvokPrepinacRezimu = document.getElementById("prepinacRezimu");
const prvokPanelNastaveni = document.getElementById("panelNastaveni");
const prvokVyberPrezentacie = document.getElementById("vyberPrezentacie");
const prvokZoznamPodokruhov = document.getElementById("zoznamPodokruhov");
const prvokPocetFiltra = document.getElementById("pocetFiltra");
const prvokBlokOdstranenych = document.getElementById("blokOdstranenych");
const prvokZoznamOdstranenychOtazok = document.getElementById("zoznamOdstranenychOtazok");
const prvokRezimTest = document.getElementById("rezimTest");
const prvokRezimKod = document.getElementById("rezimKod");
const prvokKodTema = document.getElementById("kodTema");
const prvokKodPocitadlo = document.getElementById("kodPocitadlo");
const prvokKodZadanie = document.getElementById("kodZadanie");
const prvokKodOdpoved = document.getElementById("kodOdpoved");
const prvokKodVysledok = document.getElementById("kodVysledok");
const prvokKodRiesenie = document.getElementById("kodRiesenie");
const blokyCitatu = [...document.querySelectorAll(".blok-citatu")];
const prvkyTextuCitatu = [...document.querySelectorAll(".text-citatu")];

const tlacidloMedzernik = document.getElementById("tlacidloMedzernik");
const tlacidloNastavenia = document.getElementById("tlacidloNastavenia");
const tlacidloPredoslyVysledok = document.getElementById("tlacidloPredoslyVysledok");
const tlacidloOdstranitOtazku = document.getElementById("tlacidloOdstranitOtazku");
const tlacidloVratitVsetkyOtazky = document.getElementById("tlacidloVratitVsetkyOtazky");
const tlacidloPredmetPc2 = document.getElementById("tlacidloPredmetPc2");
const tlacidloPredmetCzs = document.getElementById("tlacidloPredmetCzs");
const tlacidloPredmetHel = document.getElementById("tlacidloPredmetHel");
const tlacidloPredmetVs2 = document.getElementById("tlacidloPredmetVs2");
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
const posuvnikHlasitosti = document.getElementById("posuvnikHlasitosti");
const prepinacCitatov = document.getElementById("prepinacCitatov");
const prepinacRychlehoRezimu = document.getElementById("prepinacRychlehoRezimu");
const prepinacPrejdeniaPoolu = document.getElementById("prepinacPrejdeniaPoolu");
const klavesyMoznosti = ["1", "2", "3", "4", "5", "6"];
const pocetStlpcovPixelov = 24;
const pocetRiadkovPixelov = 4;
const selektorVolitelnychPrvkov = "button, .moznost, select, input[type='checkbox'], input[type='radio'], input[type='range']";
const skusobneOtazky = Array.from({ length: 20 }, (_, index) => vytvorSkusobnuOtazku(index + 1));
let casovacPixelovStlpca = null;
let poradieKodovychUloh = [];
let aktualnyKodIndex = 0;

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
  const spravnyIndex = (cislo * 3 + 1) % 4;
  const moznosti = ["0", "0", "0", "0"];
  moznosti[spravnyIndex] = "1";

  return {
    id: `test-${String(cislo).padStart(2, "0")}`,
    tema: "TESTT",
    typ: "jedna",
    format: "klasicka",
    uroven: "test",
    otazka: "1 ?",
    moznosti,
    spravne: [spravnyIndex],
    vysvetlenie: "",
    prezentacia: "TESTT",
    subtema: "Kontrola fungovania appky"
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

function prehrajZvuk(zvuk, rychlost = 1) {
  const prehravac = typeof zvuk.cloneNode === "function" ? zvuk.cloneNode(true) : zvuk;
  prehravac.currentTime = 0;
  prehravac.volume = hlasitost;
  prehravac.preservesPitch = false;
  prehravac.mozPreservesPitch = false;
  prehravac.webkitPreservesPitch = false;
  prehravac.playbackRate = rychlost;
  prehravac.play().catch(() => {});
}

function pocetPrehratiZvuku(jeSpravne, dlzkaSerie) {
  if (!jeSpravne) {
    return 1;
  }

  return Math.max(1, dlzkaSerie - 6);
}

function nastavHlasitost(hodnota) {
  hlasitost = Math.max(0, Math.min(1, Number(hodnota) / 100));
  [zvukSpravne, zvukZle, zvukVyberuVolby].forEach((zvuk) => {
    zvuk.volume = hlasitost;
  });
}

function nastavTemu(tema) {
  aktualnaTema = tema;
  document.body.classList.remove("tema-zlta", "tema-zlta-tmava", "tema-siva", "tema-fialova", "tema-tyrkysova");

  if (tema !== "oranzova") {
    const triedyTemy = {
      zlta: "tema-zlta",
      zltaTmava: "tema-zlta-tmava",
      siva: "tema-siva",
      fialova: "tema-fialova",
      tyrkysova: "tema-tyrkysova"
    };

    const triedaTemy = triedyTemy[tema];
    if (triedaTemy) {
      document.body.classList.add(triedaTemy);
    }
  }

  tlacidloTemaOranzova.classList.toggle("aktivny", tema === "oranzova");
  tlacidloTemaZlta.classList.toggle("aktivny", tema === "zlta" || tema === "zltaTmava");
  tlacidloTemaSiva.classList.toggle("aktivny", tema === "siva");
  tlacidloTemaFialova.classList.toggle("aktivny", tema === "fialova");
  tlacidloTemaTyrkysova.classList.toggle("aktivny", tema === "tyrkysova");
}

function prepniZltuTemu() {
  nastavTemu(aktualnaTema === "zlta" ? "zltaTmava" : "zlta");
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

function nastavNahodnyCitat() {
  const zoznamCitatov = dostupneCitaty();

  if (!prepinacCitatov.checked || zoznamCitatov.length === 0) {
    blokyCitatu.forEach((blok) => blok.classList.add("skryte"));
    return;
  }

  aktualnyIndexCitatu = vyberIndexCitatu(zoznamCitatov);
  const citat = zoznamCitatov[aktualnyIndexCitatu];
  const textCitatu = zlozTextCitatu(citat);

  prvkyTextuCitatu.forEach((prvok) => {
    prvok.textContent = textCitatu;
  });
  blokyCitatu.forEach((blok) => blok.classList.remove("skryte"));
}

function posunCitatPoOtazkach() {
  pocetVyhodnotenychOtazok++;

  if (pocetVyhodnotenychOtazok % 10 === 0) {
    nastavNahodnyCitat();
  }
}

function nastavZobrazenieCitatov() {
  if (prepinacCitatov.checked) {
    nastavNahodnyCitat();
    return;
  }

  blokyCitatu.forEach((blok) => blok.classList.add("skryte"));
}

function nastavRychlyRezim() {
  if (!prepinacRychlehoRezimu.checked) {
    zrusCasovacDalsejOtazky();
  }
}

function jeRezimPrejdeniaPoolu() {
  return Boolean(prepinacPrejdeniaPoolu && prepinacPrejdeniaPoolu.checked);
}

function nastavRezimPrejdeniaPoolu() {
  cakaNaVyradenieOtazky = false;
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
  const prvok = najdiVolitelnyPrvok(udalost.target);
  if (!prvok || !prvok.matches("button") || prvok === tlacidloMedzernik) {
    return;
  }

  prehrajZvuk(zvukVyberuVolby);
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

function unikatneHodnoty(hodnoty) {
  return [...new Set(hodnoty)].sort((a, b) => a.localeCompare(b, "sk"));
}

function ziskajPrezentacie() {
  return unikatneHodnoty(zakladneOtazkyPredmetu.map(ziskajPrezentaciu));
}

function ziskajOtazkyPrePrezentaciu() {
  return zakladneOtazkyPredmetu.filter((otazka) => (
    vybranaPrezentacia === hodnotaVsetko || ziskajPrezentaciu(otazka) === vybranaPrezentacia
  ));
}

function ziskajDostupnePodokruhy() {
  return unikatneHodnoty(ziskajOtazkyPrePrezentaciu().map(ziskajPodokruh));
}

function ziskajOtazkyPodlaFiltra() {
  return ziskajOtazkyPrePrezentaciu().filter((otazka) => (
    vybranePodokruhy.has(ziskajPodokruh(otazka)) && !odstraneneOtazky.has(ziskajIdOtazky(otazka))
  ));
}

function nastavVsetkyPodokruhy() {
  vybranePodokruhy = new Set(ziskajDostupnePodokruhy());
}

function aktualizujPocetFiltra() {
  const pocet = ziskajOtazkyPodlaFiltra().length;
  prvokPocetFiltra.textContent = pocet === 1 ? "1 otázka" : `${pocet} otázok`;
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

function vykresliVyberPrezentacie() {
  prvokVyberPrezentacie.innerHTML = "";

  const vsetky = document.createElement("option");
  vsetky.value = hodnotaVsetko;
  vsetky.textContent = "Všetky prezentácie";
  prvokVyberPrezentacie.appendChild(vsetky);

  ziskajPrezentacie().forEach((prezentacia) => {
    const moznost = document.createElement("option");
    moznost.value = prezentacia;
    moznost.textContent = prezentacia;
    prvokVyberPrezentacie.appendChild(moznost);
  });

  prvokVyberPrezentacie.value = vybranaPrezentacia;
}

function vykresliPodokruhy() {
  prvokZoznamPodokruhov.innerHTML = "";

  ziskajDostupnePodokruhy().forEach((podokruh) => {
    const popisok = document.createElement("label");
    popisok.className = "volba-podokruhu";

    const vstup = document.createElement("input");
    vstup.type = "checkbox";
    vstup.checked = vybranePodokruhy.has(podokruh);
    vstup.addEventListener("change", () => {
      if (vstup.checked) {
        vybranePodokruhy.add(podokruh);
      } else {
        vybranePodokruhy.delete(podokruh);
      }
      aktualizujPocetFiltra();
      nastavPoradie();
    });

    const text = document.createElement("span");
    text.textContent = podokruh;

    popisok.append(vstup, text);
    prvokZoznamPodokruhov.appendChild(popisok);
  });

  aktualizujPocetFiltra();
}

function obnovFiltrePredmetu() {
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
  tlacidloPredoslyVysledok.textContent = "Predošlé";
}

function textyOdpovedi(indexy, moznosti = aktualneMoznosti) {
  return moznosti
    .filter((moznost) => indexy.includes(moznost.povodnyIndex))
    .map((moznost) => moznost.text);
}

function zlozSpravnyVysledok(otazka) {
  return ["WHEEEEEEEEEEE", otazka.vysvetlenie].filter(Boolean).join(" ");
}

function ulozPredoslyVysledok(otazka, vybrane, jeSpravne) {
  const moznosti = aktualneMoznosti.map((moznost) => ({ ...moznost }));
  predoslyVysledok = {
    jeSpravne,
    otazka,
    moznosti,
    vybrane: [...vybrane],
    textVysledku: jeSpravne
      ? zlozSpravnyVysledok(otazka)
      : `Nesprávne. Správna odpoveď: ${textSpravnychOdpovedi(otazka, moznosti)}. ${otazka.vysvetlenie}`
  };
  tlacidloPredoslyVysledok.disabled = false;
  tlacidloPredoslyVysledok.textContent = "Predošlé";
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
  prvokTypOtazky.textContent = otazka.typ === "viac" ? "Vyber jednu alebo viac možností" : "Vyber jednu možnosť";
  prvokOtazka.textContent = otazka.otazka;
  prvokPocitadlo.textContent = `${aktualnyIndex + 1} / ${poradieOtazok.length}`;
  prvokSkore.textContent = `Skóre: ${skore}`;
  prvokVysledok.className = nahlad.vysledokTrieda;
  prvokVysledok.textContent = nahlad.vysledokText;

  nastavMediaOtazky(otazka);
  vykresliMoznosti(otazka, aktualneMoznosti, nahlad.vybrane, nahlad.vyhodnotene);
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = false;
  tlacidloPredoslyVysledok.textContent = "Predošlé";
}

function vykresliPredoslyVysledok() {
  if (!predoslyVysledok) {
    return;
  }

  nahladAktualnejOtazky = ulozNahladAktualnejOtazky();
  zrusCasovacDalsejOtazky();
  zobrazujePredoslyVysledok = true;
  vyhodnotene = true;

  const otazka = predoslyVysledok.otazka;
  aktualneMoznosti = predoslyVysledok.moznosti.map((moznost) => ({ ...moznost }));

  prvokTema.textContent = otazka.tema;
  prvokTypOtazky.textContent = predoslyVysledok.jeSpravne ? "Predošlá: správne" : "Predošlá: nesprávne";
  prvokOtazka.textContent = otazka.otazka;
  prvokPocitadlo.textContent = "Predošlá";
  prvokSkore.textContent = `Skóre: ${skore}`;
  prvokVysledok.className = predoslyVysledok.jeSpravne ? "vysledok ok" : "vysledok zle";
  prvokVysledok.textContent = predoslyVysledok.textVysledku;

  nastavMediaOtazky(otazka);
  vykresliMoznosti(otazka, aktualneMoznosti, predoslyVysledok.vybrane, true);
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = true;
  tlacidloPredoslyVysledok.textContent = "Aktuálna";
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

function spustiEfekt(jeSpravne, dlzkaSerie = 0) {
  const trieda = jeSpravne ? "flash-spravne" : "flash-zle";
  document.body.classList.remove("flash-spravne", "flash-zle");

  if (jeSpravne) {
    const sila = Math.min(0.45 + dlzkaSerie * 0.13, 0.96);
    const trvanie = Math.min(150 + dlzkaSerie * 35, 320);
    document.body.style.setProperty("--flash-sila", sila);
    document.body.style.setProperty("--flash-trvanie", `${trvanie}ms`);
  } else {
    document.body.style.removeProperty("--flash-sila");
    document.body.style.removeProperty("--flash-trvanie");
  }

  void document.body.offsetWidth;
  document.body.classList.add(trieda);
  window.setTimeout(() => document.body.classList.remove(trieda), 360);
}

function spustiSpatnuVazbu(jeSpravne, dlzkaSerie = 0) {
  const rychlostZvuku = jeSpravne ? Math.min(1 + (dlzkaSerie - 1) * 0.12, 1.72) : 1;
  const zvuk = jeSpravne ? zvukSpravne : zvukZle;
  const pocetPrehrati = pocetPrehratiZvuku(jeSpravne, dlzkaSerie);

  for (let i = 0; i < pocetPrehrati; i++) {
    window.setTimeout(() => prehrajZvuk(zvuk, rychlostZvuku), i * 85);
  }

  spustiEfekt(jeSpravne, dlzkaSerie);
}

function maximumStlpca() {
  return Math.max(jeRezimPrejdeniaPoolu() ? pociatocnyPocetPoolu : poradieOtazok.length, 1);
}

function aktualizujStlpec() {
  const maximum = maximumStlpca();
  const vyska = Math.round((stavStlpca / maximum) * 100);
  prvokVyplnStlpca.style.height = `${vyska}%`;
  prvokVyplnStlpca.parentElement.style.setProperty("--vyska-liquidu", `${vyska}%`);
  prvokVyplnStlpca.parentElement.style.setProperty("--viditelnost-pixelov", stavStlpca > 0 ? "1" : "0");
  prepocitajPixelyStlpca();
}

function aktualizujStreak(animuj = false) {
  const zobrazenaHodnota = jeRezimPrejdeniaPoolu() ? stavStlpca : seriaSpravnych;
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
  aktualneOtazky = ziskajOtazkyPodlaFiltra();
  poradieOtazok = zamiesaj(aktualneOtazky);
  pociatocnyPocetPoolu = poradieOtazok.length;
  aktualnyIndex = 0;
  skore = 0;
  pocetVyhodnotenychOtazok = 0;
  stavStlpca = 0;
  seriaSpravnych = 0;
  najvyssiaSeriaSpravnych = 0;
  cakaNaVyradenieOtazky = false;
  poolDokonceny = false;
  vycistiPredoslyVysledok();
  aktualizujStlpec();
  aktualizujStreak();
  vykresliOdstraneneOtazky();

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
  vyhodnotene = true;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  const pocetPredOdstranenim = ziskajOtazkyPrePrezentaciu()
    .filter((otazka) => vybranePodokruhy.has(ziskajPodokruh(otazka))).length;
  prvokTema.textContent = "Výber otázok";
  prvokTypOtazky.textContent = "0 otázok";
  prvokOtazka.textContent = pocetPredOdstranenim > 0
    ? "V aktuálnom poole už nie sú otázky. Vráť niektorú odstránenú otázku v nastaveniach."
    : "Vyber aspoň jeden podokruh v nastaveniach.";
  prvokPocitadlo.textContent = "0 / 0";
  prvokSkore.textContent = "Skóre: 0";
  prvokMoznosti.innerHTML = "";
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  prvokObrazokOtazky.classList.add("skryte");
  prvokMediaOtazky.classList.add("skryte");
  prvokMediaOtazky.innerHTML = "";
  prvokKod.classList.add("skryte");
  prvokKod.textContent = "";
  tlacidloMedzernik.disabled = true;
  tlacidloOdstranitOtazku.disabled = true;
  tlacidloPredoslyVysledok.textContent = "Predošlé";
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

function vykresliMoznosti(otazka, moznosti, vybrane = [], ukazVyhodnotenie = false) {
  prvokMoznosti.innerHTML = "";
  moznosti.forEach((moznost, index) => {
    const popisok = document.createElement("label");
    popisok.className = "moznost";

    const vstup = document.createElement("input");
    vstup.type = otazka.typ === "viac" ? "checkbox" : "radio";
    vstup.name = "odpoved";
    vstup.value = String(moznost.povodnyIndex);
    vstup.checked = vybrane.includes(moznost.povodnyIndex);

    if (ukazVyhodnotenie) {
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
        prepniVstupOdpovede(vstup);
      });
    }

    const klavesa = document.createElement("span");
    klavesa.className = "klavesa";

    const obrazokKlavesy = vytvorObrazokKlavesy();

    const cisloKlavesy = document.createElement("span");
    cisloKlavesy.className = "cisloKlavesy";
    cisloKlavesy.textContent = String(index + 1);
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

function vyberMoznostiOtazky(otazka) {
  const moznosti = otazka.moznosti.map(vytvorMoznostOtazky);
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

function zobrazOtazku() {
  zrusCasovacDalsejOtazky();
  const otazka = aktualnaOtazka();
  if (!otazka) {
    zobrazPrazdnyVyber();
    return;
  }

  vyhodnotene = false;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  cakaNaVyradenieOtazky = false;
  poolDokonceny = false;

  prvokTema.textContent = otazka.tema;
  prvokTypOtazky.textContent = otazka.typ === "viac" ? "Vyber jednu alebo viac možností" : "Vyber jednu možnosť";
  prvokOtazka.textContent = otazka.otazka;
  prvokPocitadlo.textContent = `${aktualnyIndex + 1} / ${poradieOtazok.length}`;
  prvokSkore.textContent = `Skóre: ${skore}`;
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  tlacidloMedzernik.disabled = false;
  tlacidloOdstranitOtazku.disabled = false;
  tlacidloPredoslyVysledok.textContent = "Predošlé";

  nastavMediaOtazky(otazka);

  aktualneMoznosti = vyberMoznostiOtazky(otazka);

  vykresliMoznosti(otazka, aktualneMoznosti);
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
  if (!vstup || vstup.disabled || vyhodnotene) {
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
}

function vyberMoznostKlavesou(index) {
  if (vyhodnotene || zobrazujePredoslyVysledok) {
    return;
  }

  const vstupy = [...prvokMoznosti.querySelectorAll("input")];
  const vstup = vstupy[index];
  if (!vstup || vstup.disabled) {
    return;
  }

  prepniVstupOdpovede(vstup);
}

function jeTextovePole(prvok) {
  if (!prvok) {
    return false;
  }

  const tag = prvok.tagName;
  return tag === "TEXTAREA" || (tag === "INPUT" && ["text", "search", "email", "number", "password"].includes(prvok.type));
}

function obsluzKlavesnicu(udalost) {
  if (prvokRezimTest.classList.contains("skryte")) {
    return;
  }

  if (!prvokPanelNastaveni.classList.contains("skryte")) {
    return;
  }

  if (jeTextovePole(document.activeElement)) {
    return;
  }

  const klaves = udalost.key.toLowerCase();
  const indexMoznosti = klavesyMoznosti.indexOf(klaves);

  if (indexMoznosti !== -1) {
    udalost.preventDefault();
    vyberMoznostKlavesou(indexMoznosti);
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

  if (poolDokonceny) {
    nastavPoradie();
    return;
  }

  if (zobrazujePredoslyVysledok) {
    obnovNahladAktualnejOtazky();
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

function skontrolujOdpoved() {
  if (vyhodnotene || zobrazujePredoslyVysledok) {
    return;
  }

  const otazka = aktualnaOtazka();
  const vybrane = ziskajVybraneIndexy();

  if (vybrane.length === 0) {
    prvokVysledok.className = "vysledok zle";
    prvokVysledok.textContent = "Najprv vyber odpoveď.";
    return;
  }

  vyhodnotene = true;

  const jeSpravne = rovnakePolia(vybrane, spravneZobrazeneIndexy(otazka));
  ulozPredoslyVysledok(otazka, vybrane, jeSpravne);
  cakaNaVyradenieOtazky = jeSpravne && jeRezimPrejdeniaPoolu();

  if (jeSpravne) {
    seriaSpravnych++;
    najvyssiaSeriaSpravnych = Math.max(najvyssiaSeriaSpravnych, seriaSpravnych);
  } else {
    seriaSpravnych = 0;
  }

  upravStlpec(jeSpravne);
  aktualizujStreak(jeSpravne);
  spustiSpatnuVazbu(jeSpravne, seriaSpravnych);
  posunCitatPoOtazkach();

  if (jeSpravne) {
    skore++;
    prvokVysledok.className = "vysledok ok";
    prvokVysledok.textContent = zlozSpravnyVysledok(otazka);
  } else {
    prvokVysledok.className = "vysledok zle";
    prvokVysledok.textContent = `Nesprávne. Správna odpoveď: ${textSpravnychOdpovedi(otazka)}. ${otazka.vysvetlenie}`;
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

  if (jeSpravne && prepinacRychlehoRezimu.checked) {
    naplanujDalsiuOtazku();
  }
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

function zobrazDokoncenyPool() {
  poolDokonceny = true;
  vyhodnotene = true;
  zobrazujePredoslyVysledok = false;
  nahladAktualnejOtazky = null;
  prvokTema.textContent = "Pool hotovy";
  prvokTypOtazky.textContent = "Vsetko spravne";
  prvokOtazka.textContent = "Vsetky otazky v aktualnom poole boli zodpovedane spravne.";
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
  tlacidloPredoslyVysledok.textContent = "Predosle";
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

  prvokVysledok.className = "vysledok ok";
  prvokVysledok.textContent = `Koniec testu. Výsledok: ${skore} / ${poradieOtazok.length}.`;
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

  return czsOtazky;
}

function nastavPredmet(predmet) {
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
  tlacidloPredmetTest.classList.toggle("aktivny", predmet === "test");
  tlacidloPredmetTest.classList.toggle("sekundarne", predmet !== "test");
  prvokPrepinacRezimu.classList.toggle("skryte", predmet !== "pc2");

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
tlacidloVratitVsetkyOtazky.addEventListener("click", vratVsetkyOtazky);
posuvnikHlasitosti.addEventListener("input", () => nastavHlasitost(posuvnikHlasitosti.value));
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
tlacidloPredmetTest.addEventListener("click", () => {
  nastavPredmet("test");
});
tlacidloTemaOranzova.addEventListener("click", () => nastavTemu("oranzova"));
tlacidloTemaZlta.addEventListener("click", prepniZltuTemu);
tlacidloTemaSiva.addEventListener("click", () => nastavTemu("siva"));
tlacidloTemaFialova.addEventListener("click", () => nastavTemu("fialova"));
tlacidloTemaTyrkysova.addEventListener("click", () => nastavTemu("tyrkysova"));
prepinacCitatov.addEventListener("change", nastavZobrazenieCitatov);
prepinacRychlehoRezimu.addEventListener("change", nastavRychlyRezim);
prepinacPrejdeniaPoolu.addEventListener("change", nastavRezimPrejdeniaPoolu);
prvokVyberPrezentacie.addEventListener("change", () => {
  vybranaPrezentacia = prvokVyberPrezentacie.value;
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
  nastavPoradie();
});
tlacidloVsetkyPodokruhy.addEventListener("click", () => {
  nastavVsetkyPodokruhy();
  vykresliPodokruhy();
  nastavPoradie();
});
tlacidloZiadnePodokruhy.addEventListener("click", () => {
  vybranePodokruhy.clear();
  vykresliPodokruhy();
  nastavPoradie();
});
tlacidloRezimTest.addEventListener("click", () => nastavRezim("test"));
tlacidloRezimKod.addEventListener("click", () => nastavRezim("kod"));
tlacidloKodKontrola.addEventListener("click", vyhodnotKodovuOdpoved);
tlacidloKodDalsia.addEventListener("click", dalsiaKodovaUloha);
document.addEventListener("click", obsluzKlikVolitelnehoPrvku);
document.addEventListener("change", obsluzZmenuVolitelnehoPrvku);
document.addEventListener("keydown", obsluzKlavesnicu);

vytvorPixelyStlpca();
nastavHlasitost(posuvnikHlasitosti.value);
nastavTemu("oranzova");
nastavNahodnyCitat();
nastavPredmet("test");
nastavKodovePoradie();

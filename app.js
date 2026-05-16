let poradieOtazok = [];
let aktualnyIndex = 0;
let skore = 0;
let vyhodnotene = false;
let aktualnyPredmet = "czs";
let zakladneOtazkyPredmetu = czsOtazky;
let aktualneOtazky = czsOtazky;
let aktualneMoznosti = [];
let stavStlpca = 0;
let seriaSpravnych = 0;
let casovacDalsejOtazky = null;
let hlasitost = 1;
let vybranaPrezentacia = "__vsetko";
let vybranePodokruhy = new Set();
let predoslyVysledok = null;
const hodnotaVsetko = "__vsetko";
const zvukSpravne = new Audio("Audio-samples/ESM_Simple_Google_Soundalike_Alert_20_Beep_Chirp_Notification_Synth_Electronic.wav");
const zvukZle = new Audio("Audio-samples/FF_CF_foley_fart_green.wav");

const prvokTema = document.getElementById("tema");
const prvokTypOtazky = document.getElementById("typOtazky");
const prvokOtazka = document.getElementById("otazka");
const prvokObrazokOtazky = document.getElementById("obrazokOtazky");
const prvokKod = document.getElementById("kod");
const prvokMoznosti = document.getElementById("moznosti");
const prvokVysledok = document.getElementById("vysledok");
const prvokPredoslyVysledok = document.getElementById("predoslyVysledok");
const prvokPocitadlo = document.getElementById("pocitadloOtazok");
const prvokSkore = document.getElementById("skore");
const prvokVyplnStlpca = document.getElementById("vyplnStlpca");
const prvokPrepinacRezimu = document.getElementById("prepinacRezimu");
const prvokPanelNastaveni = document.getElementById("panelNastaveni");
const prvokVyberPrezentacie = document.getElementById("vyberPrezentacie");
const prvokZoznamPodokruhov = document.getElementById("zoznamPodokruhov");
const prvokPocetFiltra = document.getElementById("pocetFiltra");
const prvokRezimTest = document.getElementById("rezimTest");
const prvokRezimKod = document.getElementById("rezimKod");
const prvokKodTema = document.getElementById("kodTema");
const prvokKodPocitadlo = document.getElementById("kodPocitadlo");
const prvokKodZadanie = document.getElementById("kodZadanie");
const prvokKodOdpoved = document.getElementById("kodOdpoved");
const prvokKodVysledok = document.getElementById("kodVysledok");
const prvokKodRiesenie = document.getElementById("kodRiesenie");

const tlacidloMedzernik = document.getElementById("tlacidloMedzernik");
const tlacidloNastavenia = document.getElementById("tlacidloNastavenia");
const tlacidloPredoslyVysledok = document.getElementById("tlacidloPredoslyVysledok");
const tlacidloPredmetPc2 = document.getElementById("tlacidloPredmetPc2");
const tlacidloPredmetCzs = document.getElementById("tlacidloPredmetCzs");
const tlacidloVsetkyPodokruhy = document.getElementById("tlacidloVsetkyPodokruhy");
const tlacidloZiadnePodokruhy = document.getElementById("tlacidloZiadnePodokruhy");
const tlacidloRezimTest = document.getElementById("tlacidloRezimTest");
const tlacidloRezimKod = document.getElementById("tlacidloRezimKod");
const tlacidloKodKontrola = document.getElementById("tlacidloKodKontrola");
const tlacidloKodDalsia = document.getElementById("tlacidloKodDalsia");
const posuvnikHlasitosti = document.getElementById("posuvnikHlasitosti");
const klavesyMoznosti = ["1", "2", "3", "4"];
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

function prehrajZvuk(zvuk, rychlost = 1) {
  zvuk.currentTime = 0;
  zvuk.volume = hlasitost;
  zvuk.preservesPitch = false;
  zvuk.mozPreservesPitch = false;
  zvuk.webkitPreservesPitch = false;
  zvuk.playbackRate = rychlost;
  zvuk.play().catch(() => {});
}

function nastavHlasitost(hodnota) {
  hlasitost = Math.max(0, Math.min(1, Number(hodnota) / 100));
  zvukSpravne.volume = hlasitost;
  zvukZle.volume = hlasitost;
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

  return aktualnyPredmet === "pc2" ? "PC2" : "Bez prezentácie";
}

function ziskajPodokruh(otazka) {
  return otazka.subtema || otazka.tema || "Bez podokruhu";
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
  return ziskajOtazkyPrePrezentaciu().filter((otazka) => vybranePodokruhy.has(ziskajPodokruh(otazka)));
}

function nastavVsetkyPodokruhy() {
  vybranePodokruhy = new Set(ziskajDostupnePodokruhy());
}

function aktualizujPocetFiltra() {
  const pocet = ziskajOtazkyPodlaFiltra().length;
  prvokPocetFiltra.textContent = pocet === 1 ? "1 otázka" : `${pocet} otázok`;
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
  prvokPredoslyVysledok.classList.add("skryte");
  prvokPredoslyVysledok.innerHTML = "";
  tlacidloPredoslyVysledok.disabled = true;
}

function textyOdpovedi(indexy) {
  return aktualneMoznosti
    .filter((moznost) => indexy.includes(moznost.povodnyIndex))
    .map((moznost) => moznost.text);
}

function ulozPredoslyVysledok(otazka, vybrane, jeSpravne) {
  predoslyVysledok = {
    jeSpravne,
    tema: otazka.tema,
    otazka: otazka.otazka,
    vybrane: textyOdpovedi(vybrane),
    spravne: textyOdpovedi(otazka.spravne),
    vysvetlenie: otazka.vysvetlenie
  };
  tlacidloPredoslyVysledok.disabled = false;
}

function pridajRiadokPredosleho(nadpis, hodnota) {
  const riadok = document.createElement("p");
  const tucne = document.createElement("strong");
  tucne.textContent = `${nadpis}: `;
  riadok.append(tucne, hodnota);
  prvokPredoslyVysledok.appendChild(riadok);
}

function vykresliPredoslyVysledok() {
  prvokPredoslyVysledok.innerHTML = "";

  if (!predoslyVysledok) {
    pridajRiadokPredosleho("Výsledok", "Zatiaľ neexistuje predošlá odpoveď.");
    return;
  }

  const nadpis = document.createElement("h3");
  nadpis.textContent = predoslyVysledok.jeSpravne ? "Predošlá odpoveď: správne" : "Predošlá odpoveď: nesprávne";
  prvokPredoslyVysledok.appendChild(nadpis);

  pridajRiadokPredosleho("Téma", predoslyVysledok.tema);
  pridajRiadokPredosleho("Otázka", predoslyVysledok.otazka);
  pridajRiadokPredosleho("Tvoja odpoveď", predoslyVysledok.vybrane.join(" | ") || "bez odpovede");
  pridajRiadokPredosleho("Správne", predoslyVysledok.spravne.join(" | "));
  pridajRiadokPredosleho("Vysvetlenie", predoslyVysledok.vysvetlenie);
}

function prepniPredoslyVysledok() {
  if (tlacidloPredoslyVysledok.disabled) {
    return;
  }

  const budeViditelny = prvokPredoslyVysledok.classList.contains("skryte");
  if (budeViditelny) {
    vykresliPredoslyVysledok();
  }
  prvokPredoslyVysledok.classList.toggle("skryte", !budeViditelny);
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
  prehrajZvuk(jeSpravne ? zvukSpravne : zvukZle, rychlostZvuku);
  spustiEfekt(jeSpravne, dlzkaSerie);
}

function aktualizujStlpec() {
  const maximum = Math.max(poradieOtazok.length, 1);
  const vyska = Math.round((stavStlpca / maximum) * 100);
  prvokVyplnStlpca.style.height = `${vyska}%`;
}

function upravStlpec(jeSpravne) {
  const maximum = Math.max(poradieOtazok.length, 1);
  stavStlpca += jeSpravne ? 1 : -1;
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
  aktualnyIndex = 0;
  skore = 0;
  stavStlpca = 0;
  seriaSpravnych = 0;
  vycistiPredoslyVysledok();
  aktualizujStlpec();

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
  prvokTema.textContent = "Výber otázok";
  prvokTypOtazky.textContent = "0 otázok";
  prvokOtazka.textContent = "Vyber aspoň jeden podokruh v nastaveniach.";
  prvokPocitadlo.textContent = "0 / 0";
  prvokSkore.textContent = "Skóre: 0";
  prvokMoznosti.innerHTML = "";
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  prvokObrazokOtazky.classList.add("skryte");
  prvokKod.classList.add("skryte");
  prvokKod.textContent = "";
  tlacidloMedzernik.disabled = true;
}

function zobrazOtazku() {
  zrusCasovacDalsejOtazky();
  const otazka = aktualnaOtazka();
  if (!otazka) {
    zobrazPrazdnyVyber();
    return;
  }

  vyhodnotene = false;

  prvokTema.textContent = otazka.tema;
  prvokTypOtazky.textContent = otazka.typ === "viac" ? "Vyber jednu alebo viac možností" : "Vyber jednu možnosť";
  prvokOtazka.textContent = otazka.otazka;
  prvokPocitadlo.textContent = `${aktualnyIndex + 1} / ${poradieOtazok.length}`;
  prvokSkore.textContent = `Skóre: ${skore}`;
  prvokVysledok.className = "vysledok skryte";
  prvokVysledok.textContent = "";
  prvokPredoslyVysledok.classList.add("skryte");
  tlacidloMedzernik.disabled = false;

  if (otazka.obrazok) {
    prvokObrazokOtazky.src = otazka.obrazok;
    prvokObrazokOtazky.alt = otazka.popisObrazka || "Obrázok k otázke";
    prvokObrazokOtazky.classList.remove("skryte");
  } else {
    prvokObrazokOtazky.removeAttribute("src");
    prvokObrazokOtazky.alt = "";
    prvokObrazokOtazky.classList.add("skryte");
  }

  if (otazka.kod) {
    prvokKod.textContent = otazka.kod;
    prvokKod.classList.remove("skryte");
  } else {
    prvokKod.textContent = "";
    prvokKod.classList.add("skryte");
  }

  aktualneMoznosti = zamiesaj(otazka.moznosti.map((text, povodnyIndex) => ({
    text,
    povodnyIndex
  })));

  prvokMoznosti.innerHTML = "";
  aktualneMoznosti.forEach((moznost, index) => {
    const popisok = document.createElement("label");
    popisok.className = "moznost";

    const vstup = document.createElement("input");
    vstup.type = otazka.typ === "viac" ? "checkbox" : "radio";
    vstup.name = "odpoved";
    vstup.value = String(moznost.povodnyIndex);
    vstup.addEventListener("change", aktualizujVybraneMoznosti);
    popisok.addEventListener("click", (udalost) => {
      udalost.preventDefault();
      prepniVstupOdpovede(vstup);
    });

    const klavesa = document.createElement("span");
    klavesa.className = "klavesa";

    const obrazokKlavesy = document.createElement("img");
    obrazokKlavesy.className = "obrazokKlavesy";
    obrazokKlavesy.src = "assets/keycap_lines.svg";
    obrazokKlavesy.alt = "";

    const cisloKlavesy = document.createElement("span");
    cisloKlavesy.className = "cisloKlavesy";
    cisloKlavesy.textContent = String(index + 1);
    klavesa.append(obrazokKlavesy, cisloKlavesy);

    const text = document.createElement("span");
    text.className = "textMoznosti";
    text.textContent = moznost.text;

    popisok.append(vstup, klavesa, text);
    prvokMoznosti.appendChild(popisok);
  });

  aktualizujVybraneMoznosti();
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
  if (vyhodnotene) {
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

function textSpravnychOdpovedi(otazka) {
  return aktualneMoznosti
    .map((moznost, index) => ({ ...moznost, index }))
    .filter((moznost) => otazka.spravne.includes(moznost.povodnyIndex))
    .map((moznost) => `${moznost.index + 1}. ${moznost.text}`)
    .join(" | ");
}

function skontrolujOdpoved() {
  if (vyhodnotene) {
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

  const jeSpravne = rovnakePolia(vybrane, otazka.spravne);
  ulozPredoslyVysledok(otazka, vybrane, jeSpravne);

  if (jeSpravne) {
    seriaSpravnych++;
  } else {
    seriaSpravnych = 0;
  }

  upravStlpec(jeSpravne);
  spustiSpatnuVazbu(jeSpravne, seriaSpravnych);

  if (jeSpravne) {
    skore++;
    prvokVysledok.className = "vysledok ok";
    prvokVysledok.textContent = `Správne. ${otazka.vysvetlenie}`;
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

  if (jeSpravne) {
    naplanujDalsiuOtazku();
  }
}

function dalsiaOtazka() {
  if (aktualnyIndex < poradieOtazok.length - 1) {
    aktualnyIndex++;
    zobrazOtazku();
    return;
  }

  prvokVysledok.className = "vysledok ok";
  prvokVysledok.textContent = `Koniec testu. Výsledok: ${skore} / ${poradieOtazok.length}.`;
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

function nastavPredmet(predmet) {
  aktualnyPredmet = predmet;
  zakladneOtazkyPredmetu = predmet === "czs" ? czsOtazky : otazky;

  tlacidloPredmetPc2.classList.toggle("aktivny", predmet === "pc2");
  tlacidloPredmetPc2.classList.toggle("sekundarne", predmet !== "pc2");
  tlacidloPredmetCzs.classList.toggle("aktivny", predmet === "czs");
  tlacidloPredmetCzs.classList.toggle("sekundarne", predmet !== "czs");
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
posuvnikHlasitosti.addEventListener("input", () => nastavHlasitost(posuvnikHlasitosti.value));
tlacidloPredmetPc2.addEventListener("click", () => {
  nastavPredmet("pc2");
});
tlacidloPredmetCzs.addEventListener("click", () => {
  nastavPredmet("czs");
});
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
document.addEventListener("keydown", obsluzKlavesnicu);

nastavHlasitost(posuvnikHlasitosti.value);
nastavPredmet("czs");
nastavKodovePoradie();

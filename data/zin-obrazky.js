// Obrazky nastrojov k definicnym statementom ZIN (zdroj: Wikipedia/Wikimedia thumbnaily,
// ulozene lokalne v assets/zin/). Pripaja sa az PO nacitani zin1-10 suborov.
// Kluc = id statementu, hodnota = [subor v assets/zin, popis (alt text)].
// Vykreslovanie riesi existujuci mechanizmus otazka.obrazok (nastavMediaOtazky v app.js).

(function priradZinObrazky() {
  if (typeof zinOtazky === "undefined" || !Array.isArray(zinOtazky)) {
    return;
  }

  const ZIN_OBRAZKY = {
    // 1. Slacikove nastroje
    "ZIN 1. Nastroje ladenie 002": ["husle.png", "Husle"],
    "ZIN 1. Nastroje ladenie 003": ["viola.jpg", "Viola"],
    "ZIN 1. Nastroje ladenie 004": ["violoncello.png", "Violoncello"],
    "ZIN 1. Nastroje ladenie 005": ["kontrabas.jpg", "Kontrabas"],
    "ZIN 1. Stara hudba 001": ["viola-da-gamba.png", "Viola da gamba"],

    // 2. Melodicke bicie nastroje
    "ZIN 2. Melodicke typy 002": ["xylofon.png", "Xylofon"],
    "ZIN 2. Melodicke typy 003": ["marimba.jpg", "Marimba"],
    "ZIN 2. Melodicke typy 004": ["vibrafon.jpg", "Vibrafon"],
    "ZIN 2. Melodicke typy 006": ["zvonkohra.jpg", "Zvonkohra"],
    "ZIN 2. Melodicke typy 007": ["zvony.jpg", "Trubicove zvony"],
    "ZIN 2. Melodicke typy 008": ["celesta.jpg", "Celesta"],
    "ZIN 2. Zakladne bicie 002": ["tympany.jpg", "Tympany"],
    "ZIN 2. Zakladne bicie 004": ["maly-bubienok.jpg", "Maly bubienok"],
    "ZIN 2. Zakladne bicie 005": ["cinely.jpg", "Cinely"],
    "ZIN 2. Zakladne bicie 006": ["triangl.jpg", "Triangl"],

    // 3. Klavesove nastroje
    "ZIN 3. Rozdelenie 002": ["klavir.jpg", "Klavir"],
    "ZIN 3. Rozdelenie 003": ["cembalo.jpg", "Cembalo"],
    "ZIN 3. Rozdelenie 004": ["spinet.jpg", "Spinet"],
    "ZIN 3. Rozdelenie 005": ["klavichord.jpg", "Klavichord"],
    "ZIN 3. Rozdelenie 006": ["varhany.jpg", "Varhany"],
    "ZIN 3. Rozdelenie 008": ["akordeon.jpg", "Akordeon"],
    "ZIN 3. Rozdelenie 009": ["celesta.jpg", "Celesta"],
    "ZIN 3. Elektromechanicke 002": ["hammond.jpg", "Hammondove varhany"],
    "ZIN 3. Elektromechanicke 003": ["rhodes.jpg", "Fender Rhodes"],
    "ZIN 3. Elektromechanicke 004": ["wurlitzer.jpg", "Wurlitzer"],
    "ZIN 3. Elektromechanicke 005": ["clavinet.jpg", "Clavinet"],
    "ZIN 3. Elektromechanicke 006": ["mellotron.jpg", "Mellotron"],

    // 4. Zestove nastroje
    "ZIN 4. Individualne 001": ["trubka.jpg", "Trubka"],
    "ZIN 4. Individualne 002": ["lesny-roh.jpg", "Lesny roh"],
    "ZIN 4. Individualne 004": ["pozoun.jpg", "Pozoun"],
    "ZIN 4. Individualne 005": ["tuba.jpg", "Tuba"],
    "ZIN 4. Individualne 006": ["wagnerova-tuba.jpg", "Wagnerova tuba"],

    // 6. Gitara a drnkacie nastroje
    "ZIN 6. Klasicka gitara 001": ["klasicka-gitara.png", "Klasicka gitara"],
    "ZIN 6. Odvodene 001": ["westernova-gitara.jpg", "Westernova gitara"],
    "ZIN 6. Odvodene 002": ["elektricka-gitara.jpg", "Elektricka gitara"],
    "ZIN 6. Odvodene 004": ["basgitara.jpg", "Basgitara"],
    "ZIN 6. Drnkacie 002": ["mandolina.jpg", "Mandolina"],
    "ZIN 6. Drnkacie 003": ["banjo.jpg", "Banjo"],
    "ZIN 6. Drnkacie 004": ["ukulele.jpg", "Ukulele"],
    "ZIN 6. Drnkacie 005": ["lutna.jpg", "Lutna"],
    "ZIN 6. Drnkacie 006": ["harfa.png", "Harfa"],

    // 7. Bicia suprava a perkusie
    "ZIN 7. Suprava 001": ["bicia-suprava.jpg", "Bicia suprava"],
    "ZIN 7. Suprava 003": ["hi-hat.png", "Hi-hat"],
    "ZIN 7. Latinske 002": ["bongo.jpg", "Bonga"],
    "ZIN 7. Latinske 003": ["timbales.jpg", "Timbales"],
    "ZIN 7. Latinske 004": ["guiro.jpg", "Guiro"],
    "ZIN 7. Latinske 005": ["cabasa.jpg", "Cabasa"],
    "ZIN 7. Svet 001": ["darbuka.jpg", "Darbuka"],
    "ZIN 7. Svet 002": ["tabla.jpg", "Tabla"],
    "ZIN 7. Svet 004": ["djembe.jpeg", "Djembe"],
    "ZIN 7. Svet 005": ["udu.jpg", "Udu"],

    // 8. Drevene dychove nastroje
    "ZIN 8. Nastroje 001": ["flauta.png", "Priecna flauta"],
    "ZIN 8. Nastroje 002": ["zobcova-flauta.jpg", "Zobcova flauta"],
    "ZIN 8. Nastroje 003": ["klarinet.png", "Klarinet"],
    "ZIN 8. Nastroje 004": ["saxofon.png", "Saxofon"],
    "ZIN 8. Nastroje 005": ["hoboj.jpg", "Hoboj"],
    "ZIN 8. Nastroje 006": ["fagot.png", "Fagot"]
  };

  zinOtazky.forEach((otazka) => {
    const zaznam = ZIN_OBRAZKY[otazka.id];
    if (zaznam) {
      otazka.obrazok = `assets/zin/${zaznam[0]}`;
      otazka.popisObrazka = zaznam[1];
    }
  });
})();

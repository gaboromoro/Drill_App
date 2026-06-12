// ZIN extra statements.
// Core pool = 10 strongest statements per SZZ okruh. Everything else stays available
// behind the "Extra Statements" setting.

(() => {
  if (typeof zinOtazky === "undefined" || !Array.isArray(zinOtazky)) {
    return;
  }

  const coreStatementIds = new Set([
    // ZIN 1
    "ZIN 1. Nastroje ladenie 001",
    "ZIN 1. Nastroje ladenie 002",
    "ZIN 1. Nastroje ladenie 003",
    "ZIN 1. Nastroje ladenie 004",
    "ZIN 1. Nastroje ladenie 005",
    "ZIN 1. Techniky hry 001",
    "ZIN 1. Techniky hry 002",
    "ZIN 1. Techniky hry 005",
    "ZIN 1. Intonacia artikulacia 001",
    "ZIN 1. Stara hudba 001",

    // ZIN 2
    "ZIN 2. Melodicke typy 001",
    "ZIN 2. Melodicke typy 002",
    "ZIN 2. Melodicke typy 003",
    "ZIN 2. Melodicke typy 004",
    "ZIN 2. Melodicke typy 006",
    "ZIN 2. Melodicke typy 008",
    "ZIN 2. Zakladne bicie 001",
    "ZIN 2. Zakladne bicie 002",
    "ZIN 2. Zakladne bicie 004",
    "ZIN 2. Zakladne bicie 006",

    // ZIN 3
    "ZIN 3. Rozdelenie 001",
    "ZIN 3. Rozdelenie 002",
    "ZIN 3. Rozdelenie 003",
    "ZIN 3. Rozdelenie 006",
    "ZIN 3. Elektromechanicke 001",
    "ZIN 3. Elektromechanicke 002",
    "ZIN 3. Elektromechanicke 003",
    "ZIN 3. Elektromechanicke 004",
    "ZIN 3. Elektromechanicke 005",
    "ZIN 3. Elektromechanicke 006",

    // ZIN 4
    "ZIN 4. Spolocne znaky 001",
    "ZIN 4. Spolocne znaky 002",
    "ZIN 4. Spolocne znaky 003",
    "ZIN 4. Spolocne znaky 004",
    "ZIN 4. Individualne 001",
    "ZIN 4. Individualne 002",
    "ZIN 4. Individualne 004",
    "ZIN 4. Individualne 005",
    "ZIN 4. Ladenie notacia 001",
    "ZIN 4. Ladenie notacia 003",

    // ZIN 5
    "ZIN 5. Princip 001",
    "ZIN 5. Princip 003",
    "ZIN 5. Transpozicie B 001",
    "ZIN 5. Transpozicie B 002",
    "ZIN 5. Transpozicie Es 001",
    "ZIN 5. Transpozicie Es 002",
    "ZIN 5. Transpozicie F A 001",
    "ZIN 5. Transpozicie F A 002",
    "ZIN 5. Transpozicie oktavove 001",
    "ZIN 5. Netransponujuce 001",

    // ZIN 6
    "ZIN 6. Klasicka gitara 001",
    "ZIN 6. Klasicka gitara 002",
    "ZIN 6. Klasicka gitara 003",
    "ZIN 6. Odvodene 001",
    "ZIN 6. Odvodene 002",
    "ZIN 6. Odvodene 004",
    "ZIN 6. Drnkacie 001",
    "ZIN 6. Drnkacie 002",
    "ZIN 6. Drnkacie 006",
    "ZIN 6. Tabulatura 001",

    // ZIN 7
    "ZIN 7. Suprava 001",
    "ZIN 7. Suprava 002",
    "ZIN 7. Suprava 003",
    "ZIN 7. Suprava 005",
    "ZIN 7. Latinske 001",
    "ZIN 7. Latinske 002",
    "ZIN 7. Latinske 003",
    "ZIN 7. Svet 001",
    "ZIN 7. Svet 002",
    "ZIN 7. Svet 004",

    // ZIN 8
    "ZIN 8. Tvorba zvuku 001",
    "ZIN 8. Tvorba zvuku 002",
    "ZIN 8. Tvorba zvuku 004",
    "ZIN 8. Ladenie 001",
    "ZIN 8. Ladenie 002",
    "ZIN 8. Ladenie 003",
    "ZIN 8. Nastroje 005",
    "ZIN 8. Nastroje 006",
    "ZIN 8. Farby 001",
    "ZIN 8. Farby 002",

    // ZIN 9
    "ZIN 9. Zlozenie 001",
    "ZIN 9. Zlozenie 002",
    "ZIN 9. Zlozenie 004",
    "ZIN 9. Zlozenie 005",
    "ZIN 9. Zlozenie 007",
    "ZIN 9. Partitura 001",
    "ZIN 9. Partitura 002",
    "ZIN 9. Partitura 003",
    "ZIN 9. Partitura 004",
    "ZIN 9. Partitura 005",

    // ZIN 10
    "ZIN 10. Klasicke 001",
    "ZIN 10. Klasicke 003",
    "ZIN 10. Klasicke 004",
    "ZIN 10. Klasicke 005",
    "ZIN 10. Barokove 001",
    "ZIN 10. Barokove 002",
    "ZIN 10. Jazzove 001",
    "ZIN 10. Jazzove 002",
    "ZIN 10. Big band 001",
    "ZIN 10. Big band 003"
  ]);

  const coreCounts = new Map();
  const extraCounts = new Map();

  zinOtazky.forEach((otazka) => {
    if (!otazka || !otazka.crackPair) {
      return;
    }

    const match = String(otazka.id || "").match(/^ZIN\s+(\d+)\./);
    if (!match) {
      return;
    }

    const okruh = match[1];
    const jeCore = coreStatementIds.has(otazka.id);
    otazka.extraStatement = !jeCore;
    const counts = jeCore ? coreCounts : extraCounts;
    counts.set(okruh, (counts.get(okruh) || 0) + 1);
  });

  for (let okruh = 1; okruh <= 10; okruh++) {
    const kluc = String(okruh);
    if ((coreCounts.get(kluc) || 0) !== 10) {
      console.warn(`[ZIN] Okruh ${okruh} nema presne 10 core statements.`);
    }
  }
})();

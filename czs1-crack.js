const czsSkuska1CrackData = [
  {
    id: "CZS 1. Zaklady vzorkovacia veta 001",
    oblast: "Zaklady",
    podoblast: "Vzorkovacia veta",
    pravda: "Pre signal s pasmom 0 az fmax = 6,5 MHz musi byt maximalna vzorkovacia perioda Tvz mensia ako 1 / (2 * 6,5 MHz) = 76,93 ns.",
    nepravda: "Pre signal s pasmom 0 az fmax = 6,5 MHz musi byt maximalna vzorkovacia perioda Tvz mensia ako 1 / 6,5 MHz = 153,85 ns."
  },
  {
    id: "CZS 1. Zaklady vzorkovacia veta 002",
    oblast: "Zaklady",
    podoblast: "Vzorkovacia veta",
    pravda: "Pre audio signal s pasmom 0 az 8 kHz musi vzorkovacia frekvencia fvz splnat fvz > 16 kHz, inak nastane aliasing.",
    nepravda: "Pre audio signal s pasmom 0 az 8 kHz staci, aby vzorkovacia frekvencia fvz splnala fvz > 8 kHz, inak nastane aliasing."
  },
  {
    id: "CZS 1. Zaklady vzorkovacia veta 003",
    oblast: "Zaklady",
    podoblast: "Vzorkovacia veta",
    pravda: "Pri vzorkovani sin(2 * pi * fmax * t) presne na hranicke fvz = 2 * fmax padnu vsetky vzorky na priechody nulou a vystupna postupnost je samych nul.",
    nepravda: "Pri vzorkovani sin(2 * pi * fmax * t) presne na hranicke fvz = 2 * fmax padnu vsetky vzorky na lokalne maxima a vystupna postupnost ma konstantnu kladnu amplitudu."
  },
  {
    id: "CZS 1. Zaklady vlastna frekvencia signalu 001",
    oblast: "Zaklady",
    podoblast: "Vlastna frekvencia signalu",
    pravda: "Pre s[n] = sin(250 * pi * n * Tvz + 0,25 * pi) pri Tvz = 1 ms plati 250 * pi = 2 * pi * f, takze vlastna frekvencia signalu je f = 125 Hz.",
    nepravda: "Pre s[n] = sin(250 * pi * n * Tvz + 0,25 * pi) pri Tvz = 1 ms plati 250 * pi = 2 * pi * f, takze vlastna frekvencia signalu je f = 250 Hz."
  },
  {
    id: "CZS 1. Zaklady normalizovana frekvencia 001",
    oblast: "Zaklady",
    podoblast: "Normalizovana frekvencia",
    pravda: "Normalizovana frekvencia sa pocita ako f = F / Fs, takze pre F = 250 Hz a Fs = 1000 Hz vyjde f = 0,25.",
    nepravda: "Normalizovana frekvencia sa pocita ako f = F / Fs, takze pre F = 250 Hz a Fs = 1000 Hz vyjde f = 4."
  },
  {
    id: "CZS 1. Zaklady zakladne operacie posun 001",
    oblast: "Zaklady",
    podoblast: "Zakladne operacie",
    pravda: "Pre x[n] = {0; 1; 2; 3} na indexoch n = 0,1,2,3 vznikne y[n] = x[n - 2] ako {0; 0; 0; 1; 2; 3} na indexoch n = 0,1,2,3,4,5; signal je posunuty doprava o dve vzorky.",
    nepravda: "Pre x[n] = {0; 1; 2; 3} na indexoch n = 0,1,2,3 vznikne y[n] = x[n - 2] ako {2; 3; 0; 0} na indexoch n = 0,1,2,3; signal je posunuty dolava o dve vzorky."
  },
  {
    id: "CZS 1. Zaklady energia a vykon 001",
    oblast: "Zaklady",
    podoblast: "Energia a vykon",
    pravda: "Jednotkovy skok u[n] ma celkovu energiu E = sum (n = 0 az inf) 1^2 = nekonecno, preto u[n] nie je energeticky signal.",
    nepravda: "Jednotkovy skok u[n] ma celkovu energiu E = sum (n = 0 az inf) 1^2 = 1, preto u[n] je energeticky signal."
  },
  {
    id: "CZS 1. Zaklady energia a vykon 002",
    oblast: "Zaklady",
    podoblast: "Energia a vykon",
    pravda: "Stredny vykon jednotkoveho skoku u[n] je P = lim (N -> inf) (N + 1) / (2N + 1) = 1/2, takze u[n] je vykonovy signal.",
    nepravda: "Stredny vykon jednotkoveho skoku u[n] je P = lim (N -> inf) (N + 1) / (2N + 1) = 1, takze u[n] je vykonovy signal."
  },
  {
    id: "CZS 1. Zaklady periodicita 001",
    oblast: "Zaklady",
    podoblast: "Periodicita diskretneho signalu",
    pravda: "Signal s[n] = cos(n) nie je periodicky, lebo neexistuje cele cislo T1 >= 1, pre ktore by platilo cos(n + T1) = cos(n).",
    nepravda: "Signal s[n] = cos(n) je periodicky s celociselnou periodou T1 = 2 * pi vzoriek, pretoze cos(n + 2 * pi) = cos(n)."
  },
  {
    id: "CZS 1. Zaklady periodicita 002",
    oblast: "Zaklady",
    podoblast: "Periodicita diskretneho signalu",
    pravda: "Signal s[n] = cos(pi * n) je periodicky s periodou T1 = 2 vzorky, lebo cos(pi * (n + 2)) = cos(pi * n + 2 * pi) = cos(pi * n).",
    nepravda: "Signal s[n] = cos(pi * n) je periodicky s periodou T1 = pi vzoriek, lebo cos(pi * (n + pi)) = cos(pi * n + pi^2) = cos(pi * n)."
  },
  {
    id: "CZS 1. Zaklady rozklad cez impulzy 001",
    oblast: "Zaklady",
    podoblast: "Rozklad cez jednotkove impulzy",
    pravda: "Jednotkovy skok u[n] sa da rozpisat ako u[n] = sum (k = 0 az inf) delta[n - k], teda ako nekonecna suma jednotkovych impulzov posunutych doprava o k.",
    nepravda: "Jednotkovy skok u[n] sa da rozpisat ako u[n] = sum (k = -inf az 0) delta[n - k], teda ako nekonecna suma jednotkovych impulzov posunutych dolava o k."
  },
  {
    id: "CZS 1. Zaklady komplexna exponenciala 001",
    oblast: "Zaklady",
    podoblast: "Komplexna exponenciala",
    pravda: "Pre s[n] = a^n s a = r * e^(j * theta) plati Eulerov rozpis s[n] = r^n * cos(theta * n) + j * r^n * sin(theta * n).",
    nepravda: "Pre s[n] = a^n s a = r * e^(j * theta) plati Eulerov rozpis s[n] = r * cos(theta^n) + j * r * sin(theta^n)."
  }
];

const czsSkuska1CrackOtazky = czsSkuska1CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 1. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 1",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_1_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska1CrackOtazky);

const czsSkuska2CrackData = [
  {
    id: "CZS 2-3. Konvolucia vypocet dlzka 001",
    oblast: "Konvolucia",
    podoblast: "Dlzka a indexovanie",
    pravda: "Konvolucia dvoch konecnych signalov dlzky L1 a L2 ma vyslednu dlzku L1 + L2 - 1.",
    nepravda: "Konvolucia dvoch konecnych signalov dlzky L1 a L2 ma vyslednu dlzku L1 * L2 - 1."
  },
  {
    id: "CZS 2-3. Konvolucia vypocet dlzka 002",
    oblast: "Konvolucia",
    podoblast: "Dlzka a indexovanie",
    pravda: "Ak x[n] zacina na indexe nx a h[n] na indexe nh, potom y[n] = x[n] * h[n] zacina na indexe nx + nh.",
    nepravda: "Ak x[n] zacina na indexe nx a h[n] na indexe nh, potom y[n] = x[n] * h[n] zacina na indexe max(nx, nh)."
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 001",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: "Konvolucia [1, 2] * [1, 1] dava postupnost [1, 3, 2], lebo y[0]=1*1=1, y[1]=1*1+2*1=3, y[2]=2*1=2.",
    nepravda: "Konvolucia [1, 2] * [1, 1] dava postupnost [1, 2, 2], lebo y[0]=1*1=1, y[1]=2*1=2, y[2]=2*1=2."
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 002",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: "Konvolucia [1, 2, 3] * [1, 1] dava postupnost [1, 3, 5, 3]: y[0]=1, y[1]=1+2=3, y[2]=2+3=5, y[3]=3.",
    nepravda: "Konvolucia [1, 2, 3] * [1, 1] dava postupnost [1, 3, 3, 3]: y[0]=1, y[1]=1+2=3, y[2]=3, y[3]=3."
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 003",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: "Konvolucia [1, 2, 3, 1, 1] * [1, 2, 2] zacina hodnotami y[0]=1, y[1]=4, y[2]=9 a vysledok ma dlzku 7.",
    nepravda: "Konvolucia [1, 2, 3, 1, 1] * [1, 2, 2] zacina hodnotami y[0]=1, y[1]=4, y[2]=9 a vysledok ma dlzku 5."
  },
  {
    id: "CZS 2-3. Konvolucia identita 001",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: "Konvolucia x[n] * delta[n] = x[n]; jednotkovy impulz je neutralny prvok konvolucie a signal sa neposunie.",
    nepravda: "Konvolucia x[n] * delta[n] = x[n - 1]; jednotkovy impulz konvoluciou posunie signal o jednu vzorku doprava."
  },
  {
    id: "CZS 2-3. Konvolucia identita 002",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: "Konvolucia x[n] * delta[n - k] = x[n - k]: konvolucia s posunutym impulzom posunie signal o k vzoriek doprava.",
    nepravda: "Konvolucia x[n] * delta[n - k] = x[n + k]: konvolucia s posunutym impulzom posunie signal o k vzoriek dolava."
  },
  {
    id: "CZS 2-3. Konvolucia identita 003",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: "Konvolucia x[n] * u[n] zodpoveda kumulativnemu suctu: y[n] = sum (k = -inf az n) x[k].",
    nepravda: "Konvolucia x[n] * u[n] zodpoveda kumulativnemu suctu od aktualneho indexu po nekonecno: y[n] = sum (k = n az inf) x[k]."
  },
  {
    id: "CZS 2-3. Konvolucia identita 004",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: "Konvolucia u[n] * u[n] dava rampu, ktora pre n >= 0 nadobuda hodnoty (n + 1), teda postupnost {1, 2, 3, 4, ...}.",
    nepravda: "Konvolucia u[n] * u[n] dava opat jednotkovy skok u[n], pretoze konvolucia s u[n] funguje ako identita."
  },
  {
    id: "CZS 2-3. Konvolucia vlastnosti 001",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: "Diskretna konvolucia je komutativna: x[n] * h[n] = h[n] * x[n]; vstupny signal aj impulzna odozva su zamenitelne.",
    nepravda: "Diskretna konvolucia nie je komutativna: x[n] * h[n] vo vseobecnosti nie je rovne h[n] * x[n], lebo h[n] sa pri vypocte zrkadli."
  },
  {
    id: "CZS 2-3. Korelacia autokorelacia 001",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: "Autokorelacna funkcia realneho signalu je parna: r_xx[m] = r_xx[-m] a maximum nadobuda v bode m = 0.",
    nepravda: "Autokorelacna funkcia realneho signalu je neparna: r_xx[m] = -r_xx[-m] a maximum nadobuda v bode m = 1."
  },
  {
    id: "CZS 2-3. Korelacia krizova 001",
    oblast: "Korelacia",
    podoblast: "Krizova korelacia",
    pravda: "Krizova korelacia nie je komutativna; plati vztah r_xy[m] = r_yx[-m], teda zamena poradia signalov sa prejavi zrkadlovym otocenim okolo nuly.",
    nepravda: "Krizova korelacia je komutativna; plati vztah r_xy[m] = r_yx[m], teda zamena poradia signalov nema na vysledok ziadny vplyv."
  },
  {
    id: "CZS 2-3. LTI stabilita 001",
    oblast: "LTI system",
    podoblast: "Stabilita cez impulznu charakteristiku",
    pravda: "LTI system je BIBO stabilny prave vtedy, ked plati sum (n = -inf az inf) |h[n]| < nekonecno (absolutna sumovatelnost impulznej charakteristiky).",
    nepravda: "LTI system je BIBO stabilny prave vtedy, ked plati sum (n = -inf az inf) h[n]^2 < nekonecno (energia impulznej charakteristiky je konecna)."
  },
  {
    id: "CZS 2-3. LTI stabilita 002",
    oblast: "LTI system",
    podoblast: "Stabilita cez impulznu charakteristiku",
    pravda: "LTI system s h[n] = (1/2)^n * u[n] je stabilny, lebo sum (n = 0 az inf) (1/2)^n = 1 / (1 - 1/2) = 2 < nekonecno.",
    nepravda: "LTI system s h[n] = (1/2)^n * u[n] je nestabilny, lebo geometricky rad sum (n = 0 az inf) (1/2)^n diverguje."
  },
  {
    id: "CZS 2-3. LTI kauzalita 001",
    oblast: "LTI system",
    podoblast: "Kauzalita cez impulznu charakteristiku",
    pravda: "LTI system je kauzalny prave vtedy, ked jeho impulzna charakteristika splna h[n] = 0 pre vsetky n < 0.",
    nepravda: "LTI system je kauzalny prave vtedy, ked jeho impulzna charakteristika splna h[n] = 0 pre vsetky n > 0."
  }
];

const czsSkuska2CrackOtazky = czsSkuska2CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 2-3. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 2-3",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_2_03.pdf, CZS_3_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska2CrackOtazky);

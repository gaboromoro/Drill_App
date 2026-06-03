// CZS 2 - komplexny worked example: vzajomna (krizova) korelacia dvoch
// konecnych signalov zadanych grafmi (styl slide 4, prezentacia 2).
// x[n] = [1, 2, 3, 2, 1] (n = 0..4),  y[n] = [1, 2, 1] (n = 0..2).
// Definicia (lecture): r_xy[m] = sum_n x[n] * y[n - m].
// Vysledok r_xy[m] pre m = -2..4:  [1, 4, 8, 10, 8, 4, 1].
// Kazdy krok je samostatna crack otazka. Obrazky su stem-grafy x[n] a y[n].

const SIG_X = "assets/czs2-priklad/signal_x.png";
const SIG_Y = "assets/czs2-priklad/signal_y.png";

const czsSkuska2PrikladData = [
  {
    id: "CZS 2. Priklad korelacia 001 zadanie",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Z grafov odcitame $x[n] = \{1, 2, 3, 2, 1\}$ na indexoch $n = 0\ldots 4$ a $y[n] = \{1, 2, 1\}$ na indexoch $n = 0\ldots 2$.`,
    nepravda: String.raw`Z grafov odcitame $x[n] = \{1, 2, 3, 2, 1\}$ na indexoch $n = 0\ldots 4$ a $y[n] = \{1, 2, 1\}$ na indexoch $n = 0\ldots 2$, pricom oba signaly maju rovnaku dlzku.`
  },
  {
    id: "CZS 2. Priklad korelacia 002 vzorec",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Vzajomnu korelaciu pocitame podla $r_{xy}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\, y[n-m]$ — signal $y$ sa posuva o $m$, NIE zrkadli (to je rozdiel oproti konvolucii).`,
    nepravda: String.raw`Vzajomnu korelaciu pocitame podla $r_{xy}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\, y[m-n]$ — signal $y$ sa pred sumovanim zrkadli okolo pociatku.`
  },
  {
    id: "CZS 2. Priklad korelacia 003 dlzka",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Korelacna funkcia ma dlzku $N_x + N_y - 1 = 5 + 3 - 1 = 7$ nenulovych vzoriek, rozlozenych pre $m = -2 \ldots 4$.`,
    nepravda: String.raw`Korelacna funkcia ma dlzku $N_x + N_y - 1 = 5 + 3 - 1 = 7$ nenulovych vzoriek, rozlozenych pre $m = 0 \ldots 6$ (vzdy zacina v nule).`
  },
  {
    id: "CZS 2. Priklad korelacia 004 r0",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Pre $m = 0$ je $r_{xy}[0] = \sum_n x[n]\,y[n] = 1\cdot 1 + 2\cdot 2 + 3\cdot 1 = 8$ (prekryv $x$ s neposunutym $y$).`,
    nepravda: String.raw`Pre $m = 0$ je $r_{xy}[0] = \sum_n x[n]\,y[n] = 1\cdot 1 + 2\cdot 2 + 3\cdot 1 = 11$.`
  },
  {
    id: "CZS 2. Priklad korelacia 005 rmax",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Pre $m = 1$ je $r_{xy}[1] = \sum_n x[n]\,y[n-1] = 2\cdot 1 + 3\cdot 2 + 2\cdot 1 = 10$ — toto je maximum korelacie, signaly su si najpodobnejsie pri posune $m = 1$.`,
    nepravda: String.raw`Pre $m = 1$ je $r_{xy}[1] = \sum_n x[n]\,y[n-1] = 2\cdot 1 + 3\cdot 2 + 2\cdot 1 = 8$ — maximum je az pri $m = 0$.`
  },
  {
    id: "CZS 2. Priklad korelacia 006 zaporne m",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Pre $m = -1$ je $r_{xy}[-1] = \sum_n x[n]\,y[n+1] = 1\cdot 2 + 2\cdot 1 = 4$.`,
    nepravda: String.raw`Pre $m = -1$ je $r_{xy}[-1] = \sum_n x[n]\,y[n+1] = 1\cdot 2 + 2\cdot 1 = 8$ (rovnake ako $r_{xy}[0]$).`
  },
  {
    id: "CZS 2. Priklad korelacia 007 cely vysledok",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Cela korelacna funkcia pre $m = -2 \ldots 4$ je $r_{xy}[m] = \{1, 4, 8, 10, 8, 4, 1\}$ s maximom $10$ pri $m = 1$.`,
    nepravda: String.raw`Cela korelacna funkcia pre $m = -2 \ldots 4$ je $r_{xy}[m] = \{1, 2, 3, 2, 1\}$ — kopiruje tvar signalu $x[n]$.`
  },
  {
    id: "CZS 2. Priklad korelacia 008 symetria",
    obrazky: [SIG_X, SIG_Y],
    pravda: String.raw`Opacne poradie da zrkadlovu funkciu: $r_{yx}[m] = r_{xy}[-m]$, teda $r_{yx}[m]$ ma maximum pri $m = -1$. Na poradi signalov pri korelacii zalezi.`,
    nepravda: String.raw`Opacne poradie da identicku funkciu: $r_{yx}[m] = r_{xy}[m]$, teda korelacia je komutativna a na poradi signalov nezalezi.`
  }
];

const czsSkuska2PrikladOtazky = czsSkuska2PrikladData.map((polozka) => ({
  id: polozka.id,
  tema: "CZS 2. Komplexny priklad - krizova korelacia",
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  obrazky: polozka.obrazky,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 2",
  subtema: "Komplexny priklad / Krizova korelacia",
  slideRef: "CZS_2_03.pdf, slidy 3-4, 13-14",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

// ===== Komplexny priklad - autokorelacia (signal x[n] = {1, 2, 1}) =====
const czsSkuska2AutokorelaciaData = [
  {
    id: "CZS 2. Priklad autokorelacia 001 vzorec",
    pravda: String.raw`Autokorelaciu pocitame ako $r_{xx}[m] = \displaystyle\sum_{n} x[n]\, x[n - m]$ — signal sa koreluje so svojou vlastnou posunutou kopiou.`,
    nepravda: String.raw`Autokorelaciu pocitame ako $r_{xx}[m] = \displaystyle\sum_{n} x[n]\, x[m - n]$ — vlastnu kopiu pred sumovanim zrkadlime (to je vsak konvolucia, nie korelacia).`
  },
  {
    id: "CZS 2. Priklad autokorelacia 002 r0",
    pravda: String.raw`Pre $x[n] = \{1, 2, 1\}$ je $r_{xx}[0] = \sum_n x^2[n] = 1^2 + 2^2 + 1^2 = 6$ — hodnota v nule sa rovna energii signalu a je to maximum.`,
    nepravda: String.raw`Pre $x[n] = \{1, 2, 1\}$ je $r_{xx}[0] = \sum_n x[n] = 1 + 2 + 1 = 4$ — hodnota v nule sa rovna suctu vzoriek.`
  },
  {
    id: "CZS 2. Priklad autokorelacia 003 r1",
    pravda: String.raw`Pre $x[n] = \{1, 2, 1\}$ je $r_{xx}[1] = x[1]x[0] + x[2]x[1] = 2\cdot 1 + 1\cdot 2 = 4$ (prekryv s posunom o jednu vzorku).`,
    nepravda: String.raw`Pre $x[n] = \{1, 2, 1\}$ je $r_{xx}[1] = x[0]x[0] + x[1]x[1] = 1 + 4 = 5$.`
  },
  {
    id: "CZS 2. Priklad autokorelacia 004 vysledok",
    pravda: String.raw`Cela autokorelacia je $r_{xx}[m] = \{1, 4, 6, 4, 1\}$ pre $m = -2 \ldots 2$ — je parna ($r_{xx}[m] = r_{xx}[-m]$) s maximom $6$ v strede.`,
    nepravda: String.raw`Cela autokorelacia je $r_{xx}[m] = \{1, 2, 6, 4, 1\}$ pre $m = -2 \ldots 2$ — nie je parna, lebo zalezi na smere posunu.`
  },
  {
    id: "CZS 2. Priklad autokorelacia 005 dlzka symetria",
    pravda: String.raw`Autokorelacia signalu dlzky $N = 3$ ma dlzku $2N - 1 = 5$ vzoriek a je vzdy parna okolo $m = 0$.`,
    nepravda: String.raw`Autokorelacia signalu dlzky $N = 3$ ma dlzku $N = 3$ vzoriek a je vzdy neparna okolo $m = 0$.`
  }
];

const czsSkuska2AutokorelaciaOtazky = czsSkuska2AutokorelaciaData.map((polozka) => ({
  id: polozka.id,
  tema: "CZS 2. Komplexny priklad - autokorelacia",
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 2",
  subtema: "Komplexny priklad / Autokorelacia",
  slideRef: "CZS_2_03.pdf, slidy 6-11",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska2AutokorelaciaOtazky);

czsOtazky.push(...czsSkuska2PrikladOtazky);

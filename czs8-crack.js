// CZS 8 - FFT (Fast Fourier Transform). Novy okruh.
// Komplexny priklad rozkrokovany podla CZS_8_03.pdf (priklad pre N = 4):
// princip, zlozitost, motylik, bit-reversal, rotacny faktor.

const czsSkuska8CrackData = [
  // ===== Princip a zlozitost =====
  {
    id: "CZS 8. FFT princip 001",
    oblast: "FFT",
    podoblast: "Princip a zlozitost",
    pravda: String.raw`FFT je efektivny algoritmus na vypocet DFT a jej inverzie; nie je to nova transformacia, iba zefektivnenie vypoctu.`,
    nepravda: String.raw`FFT je uplne nova transformacia s odlisnym vyznamom spektralnych koeficientov nez DFT.`
  },
  {
    id: "CZS 8. FFT princip 002",
    oblast: "FFT",
    podoblast: "Princip a zlozitost",
    pravda: String.raw`FFT znizuje vypoctovu zlozitost z $\mathcal{O}(N^2)$ priamej DFT na $\mathcal{O}(N \log N)$.`,
    nepravda: String.raw`FFT znizuje vypoctovu zlozitost z $\mathcal{O}(N^2)$ priamej DFT na $\mathcal{O}(N)$ (linearnu).`
  },
  {
    id: "CZS 8. FFT princip 003",
    oblast: "FFT",
    podoblast: "Princip a zlozitost",
    pravda: String.raw`Klasicka FFT (radix-2) vyzaduje, aby dlzka sekvencie $N$ bola mocninou dvoch (napr. $4, 8, 16, \ldots$).`,
    nepravda: String.raw`Klasicka FFT (radix-2) funguje pre lubovolnu dlzku sekvencie $N$ bez ziadneho obmedzenia.`
  },
  // ===== Worked example N = 4 =====
  {
    id: "CZS 8. FFT priklad 001 dft",
    oblast: "FFT",
    podoblast: "Priklad N = 4",
    pravda: String.raw`Pre $N = 4$ je DFT $S[k] = \displaystyle\sum_{n=0}^{3} s[n]\, e^{-j 2\pi k n / 4}$, takze napr. $S[0] = s[0] + s[1] + s[2] + s[3]$ (vsetky vahy su $e^0 = 1$).`,
    nepravda: String.raw`Pre $N = 4$ je DFT $S[k] = \displaystyle\sum_{n=0}^{3} s[n]\, e^{-j 2\pi k n / 4}$, takze $S[0] = s[0] - s[1] + s[2] - s[3]$ (vahy striedaju znamienko).`
  },
  {
    id: "CZS 8. FFT priklad 002 zoskupenie",
    oblast: "FFT",
    podoblast: "Priklad N = 4",
    pravda: String.raw`FFT vyuziva opakujuce sa hodnoty $e^{-j\pi} = -1$ a $e^{-j2\pi} = 1$ na zoskupenie clenov, takze $S[2] = s[0] - s[1] + s[2] - s[3]$.`,
    nepravda: String.raw`FFT vyuziva opakujuce sa hodnoty, ale $S[2] = s[0] + s[1] + s[2] + s[3]$, rovnako ako jednosmerna zlozka $S[0]$.`
  },
  {
    id: "CZS 8. FFT priklad 003 parne neparne",
    oblast: "FFT",
    podoblast: "Priklad N = 4",
    pravda: String.raw`Vypocet sa rozdeli na parne ($s[0], s[2]$) a neparne ($s[1], s[3]$) vzorky: najprv sa pocita $s[0] \pm s[2]$ a $s[1] \pm s[3]$, az potom sa kombinuju.`,
    nepravda: String.raw`Vypocet sa rozdeli na prvu polovicu ($s[0], s[1]$) a druhu polovicu ($s[2], s[3]$) vzoriek, ktore sa scitavaju nezavisle.`
  },
  // ===== Motylik =====
  {
    id: "CZS 8. FFT motylik 001",
    oblast: "FFT",
    podoblast: "Motylik (butterfly)",
    pravda: String.raw`Zakladny opakujuci sa vzor FFT je tzv. motylik: z dvojice vstupov $a, b$ vznika $a + b$ a $a - b$ (s pripadnym nasobenim rotacnym faktorom).`,
    nepravda: String.raw`Zakladny opakujuci sa vzor FFT je motylik: z dvojice vstupov $a, b$ vznika $a \cdot b$ a $a / b$.`
  },
  {
    id: "CZS 8. FFT motylik 002",
    oblast: "FFT",
    podoblast: "Motylik (butterfly)",
    pravda: String.raw`Pre $N = 16 = 2^4$ ma FFT $\log_2 16 = 4$ stupne motylikov.`,
    nepravda: String.raw`Pre $N = 16 = 2^4$ ma FFT $16$ stupnov motylikov (jeden na kazdu vzorku).`
  },
  // ===== Rotacny faktor =====
  {
    id: "CZS 8. FFT rotacny faktor 001",
    oblast: "FFT",
    podoblast: "Rotacny faktor",
    pravda: String.raw`Komplexny rotacny faktor (twiddle) je $W_N^{r} = e^{-j 2\pi r / N}$; napr. $W_4^{0} = 1$ a $W_4^{1} = e^{-j\pi/2} = -j$.`,
    nepravda: String.raw`Komplexny rotacny faktor je $W_N^{r} = e^{+j 2\pi r N}$; napr. $W_4^{1} = e^{+j8\pi} = 1$.`
  },
  // ===== Bit-reversal =====
  {
    id: "CZS 8. FFT bit reversal 001",
    oblast: "FFT",
    podoblast: "Bit-reversal",
    pravda: String.raw`Poradie vstupnych vzoriek sa urci obratenim poradia bitov indexu: $01_2 \to 10_2$, teda vzorka s indexom $1$ ide na poziciu $2$ (a naopak $2 \to 1$).`,
    nepravda: String.raw`Poradie vstupnych vzoriek sa urci obratenim poradia bitov indexu: $01_2 \to 10_2$, teda vzorka s indexom $1$ ide na poziciu $3$.`
  },
  {
    id: "CZS 8. FFT bit reversal 002",
    oblast: "FFT",
    podoblast: "Bit-reversal",
    pravda: String.raw`Pre $N = 4$ je bit-reversal poradie $0, 2, 1, 3$ (indexy $00, 10, 01, 11$ po obrateni bitov) — vzorky $s[0], s[2], s[1], s[3]$.`,
    nepravda: String.raw`Pre $N = 4$ je bit-reversal poradie $0, 1, 2, 3$, teda vzorky vstupuju v povodnom poradi bez akejkolvek zmeny.`
  }
];

const czsSkuska8CrackOtazky = czsSkuska8CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 8. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 8",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_8_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska8CrackOtazky);

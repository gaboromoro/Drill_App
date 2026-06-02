// CZS 6 - komplexny worked example: navrh dolnej priepusti z rozmiestnenia
// polov a nul na jednotkovej kruznici (podla CZS_6_03.pdf, slidy 6-7).
// Kazdy vypoctovy krok je samostatna crack otazka (pravda/nepravda),
// vsetky pod podoblastou "Komplexny priklad - dolna priepust".
// Obrazky su orezane priamo z prezentacie.

const ZROVINA = "assets/czs6-priklad/zrovina_dp.png";
const MODUL3D = "assets/czs6-priklad/modul3d_dp.png";
const MODUL2D = "assets/czs6-priklad/modul2d_dp.png";

const czsSkuska6PrikladData = [
  // --- Krok 1: identifikacia pol/nula z obrazka ---
  {
    id: "CZS 6. Priklad DP 001 poly nuly",
    obrazky: [ZROVINA],
    pravda: String.raw`Z obrazka v rovine $z$ je nula v pociatku $z_0 = 0$ (kruzok) a pol na realnej osi $z_x = a = 0{,}9$ (krizik) tesne vnutri jednotkovej kruznice.`,
    nepravda: String.raw`Z obrazka v rovine $z$ je pol v pociatku $z_x = 0$ (krizik) a nula na realnej osi $z_0 = a = 0{,}9$ (kruzok) tesne vnutri jednotkovej kruznice.`
  },
  // --- Krok 2: typ filtra ---
  {
    id: "CZS 6. Priklad DP 002 typ filtra",
    obrazky: [ZROVINA],
    pravda: String.raw`Kedze pol $z_x = 0{,}9$ lezi blizko bodu $z = 1$ (co zodpoveda $\omega = 0$), prenos je najvacsi pri nizkych frekvenciach — ide o dolnu priepust.`,
    nepravda: String.raw`Kedze pol $z_x = 0{,}9$ lezi blizko bodu $z = 1$ (co zodpoveda $\omega = 0$), prenos je najvacsi pri vysokych frekvenciach — ide o hornu priepust.`
  },
  // --- Krok 3: prenosova funkcia H(z) ---
  {
    id: "CZS 6. Priklad DP 003 prenosova funkcia",
    obrazky: [ZROVINA],
    pravda: String.raw`Prenosova funkcia z polu a nuly je $H(z) = a_0 \cdot \dfrac{z - z_0}{z - z_x} = a_0 \cdot \dfrac{z}{z - a} = a_0 \cdot \dfrac{1}{1 - a\, z^{-1}}$.`,
    nepravda: String.raw`Prenosova funkcia z polu a nuly je $H(z) = a_0 \cdot \dfrac{z - z_x}{z - z_0} = a_0 \cdot \dfrac{z - a}{z} = a_0 \cdot (1 - a\, z^{-1})$.`
  },
  // --- Krok 4: kmitoctova charakteristika H(e^jw) ---
  {
    id: "CZS 6. Priklad DP 004 kmitoctova charakteristika",
    obrazky: [ZROVINA],
    pravda: String.raw`Dosadenim $z = e^{j\omega}$ dostaneme kmitoctovu charakteristiku $H(e^{j\omega}) = a_0 \cdot \dfrac{1}{1 - a\, e^{-j\omega}} = a_0 \cdot \dfrac{1}{1 - 0{,}9\, e^{-j\omega}}$.`,
    nepravda: String.raw`Dosadenim $z = e^{j\omega}$ dostaneme kmitoctovu charakteristiku $H(e^{j\omega}) = a_0 \cdot \dfrac{1}{1 + a\, e^{-j\omega}} = a_0 \cdot \dfrac{1}{1 + 0{,}9\, e^{-j\omega}}$.`
  },
  // --- Krok 5: normalizacia a_0 ---
  {
    id: "CZS 6. Priklad DP 005 normalizacia",
    obrazky: [ZROVINA],
    pravda: String.raw`Normalizacny koeficient urcime z podmienky $|H(e^{j0})| = 1$. Pri $\omega = 0$ je $e^{-j0} = 1$, takze $\dfrac{a_0}{1 - a} = 1 \Rightarrow a_0 = 1 - a = 1 - 0{,}9 = 0{,}1$.`,
    nepravda: String.raw`Normalizacny koeficient urcime z podmienky $|H(e^{j0})| = 1$. Pri $\omega = 0$ je $e^{-j0} = 1$, takze $\dfrac{a_0}{1 - a} = 1 \Rightarrow a_0 = 1 + a = 1 + 0{,}9 = 1{,}9$.`
  },
  // --- Krok 6: vypocet modulu pri w=0 a w=pi ---
  {
    id: "CZS 6. Priklad DP 006 modul hodnoty",
    obrazky: [MODUL2D],
    pravda: String.raw`Modul: pri $\omega = 0$ je $|H| = \dfrac{0{,}1}{1 - 0{,}9} = 1$ (maximum), pri $\omega = \pi$ je $e^{-j\pi} = -1$, takze $|H| = \dfrac{0{,}1}{1 + 0{,}9} = \dfrac{0{,}1}{1{,}9} \doteq 0{,}053$ (minimum) — typicka dolna priepust.`,
    nepravda: String.raw`Modul: pri $\omega = 0$ je $|H| = \dfrac{0{,}1}{1 - 0{,}9} = 1$ (maximum), pri $\omega = \pi$ je $e^{-j\pi} = -1$, takze $|H| = \dfrac{0{,}1}{1 - 0{,}9} = 1$ — prenos je rovnaky na vsetkych frekvenciach.`
  },
  // --- Krok 7: 3D modulova plocha nad rovinou z ---
  {
    id: "CZS 6. Priklad DP 007 modul 3D plocha",
    obrazky: [MODUL3D],
    pravda: String.raw`V 3D zobrazeni modulu $|H(z)|$ nad rovinou $z$ vytvara pol $z_x = 0{,}9$ vyrazny vrchol (spicku) tesne vnutri jednotkovej kruznice; nula v pociatku stlaca plochu k nule.`,
    nepravda: String.raw`V 3D zobrazeni modulu $|H(z)|$ nad rovinou $z$ vytvara nula $z_0 = 0$ vyrazny vrchol (spicku) v pociatku; pol $z_x = 0{,}9$ stlaca plochu k nule.`
  },
  // --- Krok 8: stabilita ---
  {
    id: "CZS 6. Priklad DP 008 stabilita",
    obrazky: [ZROVINA],
    pravda: String.raw`System je stabilny, lebo jeho jediny pol $z_x = 0{,}9$ lezi vnutri jednotkovej kruznice ($|z_x| < 1$). Impulzna charakteristika $h[n] = a_0\, a^{n} u[n] = 0{,}1 \cdot 0{,}9^{n} u[n]$ klesa.`,
    nepravda: String.raw`System je nestabilny, lebo jeho jediny pol $z_x = 0{,}9$ lezi vnutri jednotkovej kruznice. Impulzna charakteristika $h[n] = 0{,}1 \cdot 0{,}9^{n} u[n]$ rastie nad vsetky medze.`
  }
];

const czsSkuska6PrikladOtazky = czsSkuska6PrikladData.map((polozka) => ({
  id: polozka.id,
  tema: "CZS 6. Komplexny priklad - dolna priepust",
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  obrazky: polozka.obrazky,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 6",
  subtema: "Komplexny priklad / Dolna priepust",
  slideRef: "CZS_6_03.pdf, slidy 6-7",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska6PrikladOtazky);

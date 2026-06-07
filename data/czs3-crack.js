const czsSkuska3CrackData = [
  // ===== LTI: vychodiskovy popis =====
  {
    id: "CZS 3. LTI popis 001",
    oblast: "LTI system",
    podoblast: "Vychodiskovy popis",
    pravda: String.raw`LTI system je linearny a casovo invariantny; jeho odozva na lubovolny vstup je $y[n] = x[n] \ast h[n]$, kde $h[n]$ je impulzna charakteristika.`,
    nepravda: String.raw`LTI system je linearny a casovo invariantny; jeho odozva na lubovolny vstup je $y[n] = x[n] \cdot h[n]$, teda sucin po vzorkoch.`
  },
  {
    id: "CZS 3. LTI popis 002",
    oblast: "LTI system",
    podoblast: "Vychodiskovy popis",
    pravda: String.raw`Impulzna charakteristika $h[n]$ je odozva LTI systemu na jednotkovy impulz $\delta[n]$.`,
    nepravda: String.raw`Impulzna charakteristika $h[n]$ je odozva LTI systemu na jednotkovy skok $u[n]$.`
  },
  {
    id: "CZS 3. LTI popis 003",
    oblast: "LTI system",
    podoblast: "Vychodiskovy popis",
    pravda: String.raw`Lubovolny signal sa da zapisat ako suma vazenych posunutych impulzov: $x[n] = \displaystyle\sum_{i=-\infty}^{\infty} x[i]\,\delta[n-i]$.`,
    nepravda: String.raw`Lubovolny signal sa da zapisat ako suma vazenych posunutych skokov: $x[n] = \displaystyle\sum_{i=-\infty}^{\infty} x[i]\,u[n-i]$.`
  },
  // ===== Konvolucia: vzorec =====
  {
    id: "CZS 3. Konvolucia vzorec 001",
    oblast: "Konvolucia",
    podoblast: "Vzorec konvolucnej sumy",
    pravda: String.raw`Diskretna konvolucia sa pocita ako $y[n] = \displaystyle\sum_{i=-\infty}^{\infty} x[i]\, h[n-i]$; signal $h$ sa zrkadli a posuva o $n$.`,
    nepravda: String.raw`Diskretna konvolucia sa pocita ako $y[n] = \displaystyle\sum_{i=-\infty}^{\infty} x[i]\, h[n+i]$; signal $h$ sa posuva bez zrkadlenia.`
  },
  {
    id: "CZS 3. Konvolucia vzorec 002",
    oblast: "Konvolucia",
    podoblast: "Dlzka a indexovanie",
    pravda: String.raw`Konvolucia dvoch konecnych signalov dlzky $N_x$ a $N_h$ ma vyslednu dlzku $N_y = N_x + N_h - 1$.`,
    nepravda: String.raw`Konvolucia dvoch konecnych signalov dlzky $N_x$ a $N_h$ ma vyslednu dlzku $N_y = N_x \cdot N_h - 1$.`
  },
  {
    id: "CZS 3. Konvolucia vzorec 003",
    oblast: "Konvolucia",
    podoblast: "Dlzka a indexovanie",
    pravda: String.raw`Ak $x[n]$ zacina na indexe $S_x$ a $h[n]$ na indexe $S_h$, vysledok $y[n]$ zacina na $S_y = S_x + S_h$.`,
    nepravda: String.raw`Ak $x[n]$ zacina na indexe $S_x$ a $h[n]$ na indexe $S_h$, vysledok $y[n]$ zacina na $S_y = \max(S_x, S_h)$.`
  },
  // ===== Konvolucia: rucny vypocet =====
  {
    id: "CZS 3. Konvolucia vypocet 001",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet",
    pravda: String.raw`Konvolucia $[1, 2] \ast [1, 1] = [1, 3, 2]$: $y[0]=1\cdot 1=1$, $y[1]=1\cdot 1+2\cdot 1=3$, $y[2]=2\cdot 1=2$.`,
    nepravda: String.raw`Konvolucia $[1, 2] \ast [1, 1] = [1, 2, 2]$: $y[0]=1$, $y[1]=2$, $y[2]=2$.`
  },
  {
    id: "CZS 3. Konvolucia vypocet 002",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet",
    pravda: String.raw`Konvolucia $[1, 2, 3] \ast [1, 1] = [1, 3, 5, 3]$: $y[0]=1$, $y[1]=1+2=3$, $y[2]=2+3=5$, $y[3]=3$.`,
    nepravda: String.raw`Konvolucia $[1, 2, 3] \ast [1, 1] = [1, 3, 3, 3]$: $y[0]=1$, $y[1]=3$, $y[2]=3$, $y[3]=3$.`
  },
  {
    id: "CZS 3. Konvolucia vypocet 003",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet",
    pravda: String.raw`Konvolucia $[1, 2, 3, 1, 1] \ast [1, 2, 2]$ zacina hodnotami $y[0]=1$, $y[1]=4$, $y[2]=9$ a ma dlzku $5+3-1=7$.`,
    nepravda: String.raw`Konvolucia $[1, 2, 3, 1, 1] \ast [1, 2, 2]$ zacina hodnotami $y[0]=1$, $y[1]=4$, $y[2]=9$ a ma dlzku $5$.`
  },
  {
    id: "CZS 3. Konvolucia vypocet 004",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet",
    pravda: String.raw`Konvolucia $[1, 1, 1] \ast [1, 1, 1] = [1, 2, 3, 2, 1]$; konvolucia dvoch obdlznikov dava trojuholnik s vrcholom $3$.`,
    nepravda: String.raw`Konvolucia $[1, 1, 1] \ast [1, 1, 1] = [1, 3, 3, 3, 1]$; vystupom dvoch obdlznikov je lichobeznik.`
  },
  // ===== Konvolucia: specialne pripady =====
  {
    id: "CZS 3. Konvolucia specialne 001",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`$x[n] \ast \delta[n] = x[n]$; jednotkovy impulz je neutralny prvok konvolucie.`,
    nepravda: String.raw`$x[n] \ast \delta[n] = x[n-1]$; konvolucia s impulzom posunie signal o jednu vzorku.`
  },
  {
    id: "CZS 3. Konvolucia specialne 002",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`$x[n] \ast \delta[n-k] = x[n-k]$; konvolucia s posunutym impulzom posunie signal o $k$ vzoriek doprava.`,
    nepravda: String.raw`$x[n] \ast \delta[n-k] = x[n+k]$; konvolucia s posunutym impulzom posunie signal o $k$ vzoriek dolava.`
  },
  {
    id: "CZS 3. Konvolucia specialne 003",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`$x[n] \ast u[n] = \displaystyle\sum_{i=-\infty}^{n} x[i]$; konvolucia s jednotkovym skokom dava kumulativny sucet.`,
    nepravda: String.raw`$x[n] \ast u[n] = \displaystyle\sum_{i=n}^{\infty} x[i]$; konvolucia s jednotkovym skokom scituje od aktualneho indexu po nekonecno.`
  },
  {
    id: "CZS 3. Konvolucia specialne 004",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`$u[n] \ast u[n]$ dava rampu $(n+1)\,u[n]$, teda postupnost $\{1, 2, 3, 4, \ldots\}$.`,
    nepravda: String.raw`$u[n] \ast u[n]$ dava opat jednotkovy skok $u[n]$.`
  },
  {
    id: "CZS 3. Konvolucia specialne 005",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Ak je vstupny signal periodicky, vysledkom konvolucie je opat periodicky signal s tou istou periodou.`,
    nepravda: String.raw`Ak je vstupny signal periodicky, vysledkom konvolucie je vzdy neperiodicky signal konecneho trvania.`
  },
  // ===== Konvolucia: vlastnosti =====
  {
    id: "CZS 3. Konvolucia vlastnosti 001",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: String.raw`Konvolucia je komutativna: $x[n] \ast h[n] = h[n] \ast x[n]$; vstup a impulzna odozva su zamenitelne.`,
    nepravda: String.raw`Konvolucia nie je komutativna: $x[n] \ast h[n]$ sa vo vseobecnosti nerovna $h[n] \ast x[n]$.`
  },
  {
    id: "CZS 3. Konvolucia vlastnosti 002",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: String.raw`Konvolucia je asociativna: $(x \ast h_1) \ast h_2 = x \ast (h_1 \ast h_2)$; poradie spajania systemov mozno menit.`,
    nepravda: String.raw`Konvolucia nie je asociativna: $(x \ast h_1) \ast h_2 \ne x \ast (h_1 \ast h_2)$.`
  },
  {
    id: "CZS 3. Konvolucia vlastnosti 003",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: String.raw`Konvolucia je distributivna: $x \ast (h_1 + h_2) = x \ast h_1 + x \ast h_2$.`,
    nepravda: String.raw`Konvolucia je distributivna v tvare $x \ast (h_1 + h_2) = (x \ast h_1) \cdot (x \ast h_2)$.`
  },
  // ===== Spojenia LTI systemov =====
  {
    id: "CZS 3. Spojenie 001",
    oblast: "Spojenia LTI systemov",
    podoblast: "Seriove a paralelne",
    pravda: String.raw`Kaskadne (seriove) spojenie dvoch LTI systemov ma vyslednu impulznu odozvu $h[n] = h_1[n] \ast h_2[n]$.`,
    nepravda: String.raw`Kaskadne (seriove) spojenie dvoch LTI systemov ma vyslednu impulznu odozvu $h[n] = h_1[n] + h_2[n]$.`
  },
  {
    id: "CZS 3. Spojenie 002",
    oblast: "Spojenia LTI systemov",
    podoblast: "Seriove a paralelne",
    pravda: String.raw`Paralelne spojenie dvoch LTI systemov ma vyslednu impulznu odozvu $h[n] = h_1[n] + h_2[n]$.`,
    nepravda: String.raw`Paralelne spojenie dvoch LTI systemov ma vyslednu impulznu odozvu $h[n] = h_1[n] \ast h_2[n]$.`
  },
  // ===== Kauzalita a stabilita LTI =====
  {
    id: "CZS 3. Kauzalita 001",
    oblast: "Kauzalita a stabilita",
    podoblast: "Kauzalita LTI",
    pravda: String.raw`LTI system je kauzalny prave vtedy, ked $h[n] = 0$ pre vsetky $n < 0$.`,
    nepravda: String.raw`LTI system je kauzalny prave vtedy, ked $h[n] = 0$ pre vsetky $n > 0$.`
  },
  {
    id: "CZS 3. Stabilita 001",
    oblast: "Kauzalita a stabilita",
    podoblast: "Stabilita LTI",
    pravda: String.raw`LTI system je BIBO stabilny prave vtedy, ked $\displaystyle\sum_{n=-\infty}^{\infty} |h[n]| < \infty$ (absolutna sumovatelnost impulznej charakteristiky).`,
    nepravda: String.raw`LTI system je BIBO stabilny prave vtedy, ked $\displaystyle\sum_{n=-\infty}^{\infty} h^2[n] < \infty$ (konecna energia impulznej charakteristiky).`
  },
  {
    id: "CZS 3. Stabilita 002",
    oblast: "Kauzalita a stabilita",
    podoblast: "Stabilita LTI",
    pravda: String.raw`Pre $h[n] = a^n u[n]$ je system stabilny prave vtedy, ked $|a| < 1$, lebo geometricky rad $\sum |a|^n$ vtedy konverguje.`,
    nepravda: String.raw`Pre $h[n] = a^n u[n]$ je system stabilny pre lubovolne $a$, lebo geometricky rad vzdy konverguje.`
  },
  {
    id: "CZS 3. Stabilita 003",
    oblast: "Kauzalita a stabilita",
    podoblast: "Stabilita LTI",
    pravda: String.raw`Pre $h[n] = (\tfrac{1}{2})^n u[n]$ je system stabilny: $\displaystyle\sum_{n=0}^{\infty} (\tfrac{1}{2})^n = \dfrac{1}{1 - \tfrac{1}{2}} = 2 < \infty$.`,
    nepravda: String.raw`Pre $h[n] = (\tfrac{1}{2})^n u[n]$ je system nestabilny, lebo rad $\sum (\tfrac{1}{2})^n$ diverguje.`
  },
  {
    id: "CZS 3. Stabilita 004",
    oblast: "Kauzalita a stabilita",
    podoblast: "Stabilita LTI",
    pravda: String.raw`Pre $h[n] = 2^n u[n]$ je system nestabilny, lebo $\displaystyle\sum_{n=0}^{\infty} 2^n$ diverguje k $\infty$.`,
    nepravda: String.raw`Pre $h[n] = 2^n u[n]$ je system stabilny, lebo $\displaystyle\sum_{n=0}^{\infty} 2^n = \dfrac{1}{1-2} = -1$ je konecna hodnota.`
  },
  {
    id: "CZS 3. Stabilita 005",
    oblast: "Kauzalita a stabilita",
    podoblast: "Stabilita LTI",
    pravda: String.raw`Akumulator $y[n] = y[n-1] + x[n]$ ma $h[n] = u[n]$ a je BIBO nestabilny, lebo $\sum u[n]$ diverguje.`,
    nepravda: String.raw`Akumulator $y[n] = y[n-1] + x[n]$ ma $h[n] = \delta[n]$ a je BIBO stabilny, lebo $\sum \delta[n] = 1$.`
  },
  // ===== FIR systemy =====
  {
    id: "CZS 3. FIR 001",
    oblast: "FIR a IIR systemy",
    podoblast: "FIR vlastnosti",
    pravda: String.raw`FIR system ma konecnu impulznu charakteristiku (konecny pocet prvkov $h[n]$) a je vzdy stabilny.`,
    nepravda: String.raw`FIR system ma nekonecnu impulznu charakteristiku a jeho stabilita je problematicka.`
  },
  {
    id: "CZS 3. FIR 002",
    oblast: "FIR a IIR systemy",
    podoblast: "FIR vlastnosti",
    pravda: String.raw`FIR systemy nemaju spatnu vazbu; vystup zavisi iba od vstupnych vzoriek: $y[n] = \displaystyle\sum_{i=0}^{N-1} b_i\, x[n-i]$.`,
    nepravda: String.raw`FIR systemy maju spatnu vazbu; vystup zavisi aj od minulych vystupnych vzoriek $y[n-i]$.`
  },
  {
    id: "CZS 3. FIR 003",
    oblast: "FIR a IIR systemy",
    podoblast: "FIR vlastnosti",
    pravda: String.raw`Prenosova funkcia FIR systemu ma iba citatel: $H(z) = b_0 + b_1 z^{-1} + \cdots + b_{N-1} z^{-N+1}$ (ziadne poly mimo pociatku).`,
    nepravda: String.raw`Prenosova funkcia FIR systemu ma citatel aj menovatel s polmi mimo pociatku, takze moze byt nestabilna.`
  },
  {
    id: "CZS 3. FIR 004",
    oblast: "FIR a IIR systemy",
    podoblast: "FIR vlastnosti",
    pravda: String.raw`Ak je impulzna charakteristika FIR systemu (anti)symetricka, ma system linearnu fazovu charakteristiku.`,
    nepravda: String.raw`(Anti)symetricka impulzna charakteristika FIR systemu sposobi silne nelinearnu fazovu charakteristiku.`
  },
  {
    id: "CZS 3. FIR 005",
    oblast: "FIR a IIR systemy",
    podoblast: "Urcenie typu FIR/IIR",
    pravda: String.raw`Pre $y[n] = \tfrac{1}{4}(x[n] + x[n-1] + x[n-2] + x[n-3])$ je $h[n] = \{\tfrac14,\tfrac14,\tfrac14,\tfrac14\}$ — 4 nenulove prvky, teda FIR.`,
    nepravda: String.raw`Pre $y[n] = \tfrac{1}{4}(x[n] + x[n-1] + x[n-2] + x[n-3])$ ma $h[n]$ nekonecne vela prvkov, teda ide o IIR.`
  },
  // ===== IIR systemy =====
  {
    id: "CZS 3. IIR 001",
    oblast: "FIR a IIR systemy",
    podoblast: "IIR vlastnosti",
    pravda: String.raw`IIR system ma nekonecnu impulznu charakteristiku a vznika spatnou vazbou (rekurziou) — vystup je zavedeny spat na vstup.`,
    nepravda: String.raw`IIR system ma konecnu impulznu charakteristiku a nema ziadnu spatnu vazbu ani rekurziu.`
  },
  {
    id: "CZS 3. IIR 002",
    oblast: "FIR a IIR systemy",
    podoblast: "IIR vlastnosti",
    pravda: String.raw`IIR system ma problematicku stabilitu a vo vseobecnosti nelinearnu fazovu charakteristiku, ale potrebuje menej koeficientov a pamate nez FIR.`,
    nepravda: String.raw`IIR system je vzdy stabilny a ma linearnu fazovu charakteristiku, no potrebuje viac pamate nez FIR.`
  },
  {
    id: "CZS 3. IIR 003",
    oblast: "FIR a IIR systemy",
    podoblast: "Urcenie typu FIR/IIR",
    pravda: String.raw`Pre $y[n] = 0{,}9\, y[n-1] + x[n]$ je $h[n] = 0{,}9^{n} u[n]$ — nekonecne vela prvkov, teda IIR.`,
    nepravda: String.raw`Pre $y[n] = 0{,}9\, y[n-1] + x[n]$ ma $h[n]$ iba jeden nenulovy prvok, teda ide o FIR.`
  },
  {
    id: "CZS 3. IIR 004",
    oblast: "FIR a IIR systemy",
    podoblast: "Impulzna odozva z rovnice",
    pravda: String.raw`Pre $y[n] = -0{,}8\, y[n-1] + 5\, x[n]$ (a $y[-1]=0$) je $h[0]=5$, $h[1]=-4$, $h[2]=3{,}2$, $h[3]=-2{,}56$ (kazdy clen krat $-0{,}8$).`,
    nepravda: String.raw`Pre $y[n] = -0{,}8\, y[n-1] + 5\, x[n]$ (a $y[-1]=0$) je $h[0]=5$, $h[1]=4$, $h[2]=3{,}2$, $h[3]=2{,}56$ (vsetky kladne).`
  },
  {
    id: "CZS 3. IIR 005",
    oblast: "FIR a IIR systemy",
    podoblast: "Prenosova funkcia",
    pravda: String.raw`Prenosova funkcia IIR systemu ma citatel aj menovatel: $H(z) = \dfrac{B_0 + B_1 z^{-1} + \cdots}{1 + A_1 z^{-1} + \cdots}$; poly urcuje menovatel.`,
    nepravda: String.raw`Prenosova funkcia IIR systemu ma iba citatel $H(z) = B_0 + B_1 z^{-1} + \cdots$, rovnako ako FIR.`
  }
];

const czsSkuska3CrackOtazky = czsSkuska3CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 3. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 3",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_3_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska3CrackOtazky);

const czsSkuska4CrackData = [
  {
    id: "CZS 4. Z-transformacia tabulkovy par 001",
    oblast: "Z-transformacia",
    podoblast: "Tabulkove pary",
    pravda: String.raw`Pre jednotkovy skok plati $\mathcal{Z}\{u[n]\} = \displaystyle\sum_{n=0}^{\infty} z^{-n} = \dfrac{1}{1 - z^{-1}} = \dfrac{z}{z - 1}$ s oblastou konvergencie $|z| > 1$.`,
    nepravda: String.raw`Pre jednotkovy skok plati $\mathcal{Z}\{u[n]\} = \displaystyle\sum_{n=0}^{\infty} z^{-n} = \dfrac{1}{1 - z^{-1}} = \dfrac{z}{z + 1}$ s oblastou konvergencie $|z| > 1$.`
  },
  {
    id: "CZS 4. Z-transformacia tabulkovy par 002",
    oblast: "Z-transformacia",
    podoblast: "Tabulkove pary",
    pravda: String.raw`Pre jednotkovy impulz plati $\mathcal{Z}\{\delta[n]\} = \displaystyle\sum_{n=0}^{\infty} \delta[n]\, z^{-n} = 1 \cdot z^{0} = 1$ pre vsetky $z$.`,
    nepravda: String.raw`Pre jednotkovy impulz plati $\mathcal{Z}\{\delta[n]\} = \displaystyle\sum_{n=0}^{\infty} \delta[n]\, z^{-n} = 1 \cdot z^{-1} = z^{-1}$ pre vsetky $z \neq 0$.`
  },
  {
    id: "CZS 4. Z-transformacia tabulkovy par 003",
    oblast: "Z-transformacia",
    podoblast: "Tabulkove pary",
    pravda: String.raw`Pre posunuty jednotkovy impulz plati $\mathcal{Z}\{\delta[n - m]\} = z^{-m}$ pre $m \ge 0$ (posun doprava o $m$ vzoriek = nasobenie $z^{-m}$ v $z$-obraze).`,
    nepravda: String.raw`Pre posunuty jednotkovy impulz plati $\mathcal{Z}\{\delta[n - m]\} = z^{m}$ pre $m \ge 0$ (posun doprava o $m$ vzoriek = nasobenie $z^{m}$ v $z$-obraze).`
  },
  {
    id: "CZS 4. Z-transformacia tabulkovy par 004",
    oblast: "Z-transformacia",
    podoblast: "Tabulkove pary",
    pravda: String.raw`Pre $s[n] = a^{n} u[n]$ plati $\mathcal{Z}\{a^{n} u[n]\} = \displaystyle\sum_{n=0}^{\infty} \left(\dfrac{a}{z}\right)^{n} = \dfrac{1}{1 - a/z} = \dfrac{z}{z - a}$ s ROC $|z| > |a|$.`,
    nepravda: String.raw`Pre $s[n] = a^{n} u[n]$ plati $\mathcal{Z}\{a^{n} u[n]\} = \displaystyle\sum_{n=0}^{\infty} \left(\dfrac{a}{z}\right)^{n} = \dfrac{1}{1 + a/z} = \dfrac{z}{z + a}$ s ROC $|z| > |a|$.`
  },
  {
    id: "CZS 4. Z-transformacia vlastnost zpozdenie 001",
    oblast: "Z-transformacia",
    podoblast: "Vlastnosti — posun v case",
    pravda: String.raw`Pre kauzalnu zpozdenu postupnost plati $s[n - m] \;\Leftrightarrow\; z^{-m}\, S(z)$ pre $m \in \mathbb{N}$; posun doprava sa v $z$-obraze prejavi nasobenim $z^{-m}$.`,
    nepravda: String.raw`Pre kauzalnu zpozdenu postupnost plati $s[n - m] \;\Leftrightarrow\; z^{m}\, S(z)$ pre $m \in \mathbb{N}$; posun doprava sa v $z$-obraze prejavi nasobenim $z^{m}$.`
  },
  {
    id: "CZS 4. Z-transformacia konvolucny teorem 001",
    oblast: "Z-transformacia",
    podoblast: "Konvolucny teorem",
    pravda: String.raw`Konvolucny teorem v $z$-oblasti: $\mathcal{Z}\{s[n] \ast t[n]\} = S(z) \cdot T(z)$; konvolucia v case sa prevedie na sucin obrazov.`,
    nepravda: String.raw`Konvolucny teorem v $z$-oblasti: $\mathcal{Z}\{s[n] \ast t[n]\} = S(z) + T(z)$; konvolucia v case sa prevedie na sucet obrazov.`
  },
  {
    id: "CZS 4. Z-transformacia pociatocna hodnota 001",
    oblast: "Z-transformacia",
    podoblast: "Veta o pociatocnej hodnote",
    pravda: String.raw`Pre kauzalnu postupnost ($s[n] = 0$ pre $n < 0$) plati veta o pociatocnej hodnote: $s[0] = \displaystyle\lim_{z \to \infty} S(z)$.`,
    nepravda: String.raw`Pre kauzalnu postupnost ($s[n] = 0$ pre $n < 0$) plati veta o pociatocnej hodnote: $s[0] = \displaystyle\lim_{z \to 0} S(z)$.`
  },
  {
    id: "CZS 4. Z-transformacia tabulkovy par 005",
    oblast: "Z-transformacia",
    podoblast: "Tabulkove pary",
    pravda: String.raw`Pre $s[n] = n \cdot u[n]$ plati $\mathcal{Z}\{n \cdot u[n]\} = \dfrac{z}{(z - 1)^{2}}$ s oblastou konvergencie $|z| > 1$.`,
    nepravda: String.raw`Pre $s[n] = n \cdot u[n]$ plati $\mathcal{Z}\{n \cdot u[n]\} = \dfrac{1}{(z - 1)^{2}}$ s oblastou konvergencie $|z| > 1$.`
  },
  {
    id: "CZS 4. Z-transformacia tabulkovy par 006",
    oblast: "Z-transformacia",
    podoblast: "Tabulkove pary",
    pravda: String.raw`Pre $s[n] = \sin(\omega_{0} T_\mathrm{vz} n) \cdot u[n]$ plati $\mathcal{Z}\{s[n]\} = \dfrac{z \sin(\omega_{0} T_\mathrm{vz})}{z^{2} - 2 z \cos(\omega_{0} T_\mathrm{vz}) + 1}$ s ROC $|z| > 1$.`,
    nepravda: String.raw`Pre $s[n] = \sin(\omega_{0} T_\mathrm{vz} n) \cdot u[n]$ plati $\mathcal{Z}\{s[n]\} = \dfrac{z \sin(\omega_{0} T_\mathrm{vz})}{z^{2} + 2 z \cos(\omega_{0} T_\mathrm{vz}) + 1}$ s ROC $|z| > 1$.`
  },
  {
    id: "CZS 4. Z-transformacia realny priklad sporenie 001",
    oblast: "Z-transformacia",
    podoblast: "Realne priklady",
    pravda: String.raw`Pre rekurziu $s[n] = s[n - 1] + 100 \cdot u[n]$ (akumulator jednotkoveho skoku) je $S(z) = \dfrac{100}{(1 - z^{-1})^{2}}$ — dvojnasobny pol v $z = 1$, lebo akumulacia skoku dava rampu, takze $s[n] = 100 (n + 1) u[n]$.`,
    nepravda: String.raw`Pre rekurziu $s[n] = s[n - 1] + 100 \cdot u[n]$ je $S(z) = \dfrac{100}{1 - z^{-1}}$ — jeden pol v $z = 1$ (vstup chapeme ako $100\,\delta[n]$), takze $s[n] = 100\, u[n]$, teda konstantnych $100$ pre kazde $n \ge 0$.`
  },
  {
    id: "CZS 4. Z-transformacia spatna parcialne zlomky 001",
    oblast: "Z-transformacia",
    podoblast: "Spatna Z-transformacia",
    pravda: String.raw`Pre $S(z) = \dfrac{z - 1}{(z + 1)(z - 0{,}5)}$ rozkladom na parcialne zlomky $S(z) = \dfrac{4/3}{z + 1} + \dfrac{-1/3}{z - 0{,}5}$ a vzorcom $\mathcal{Z}^{-1}\!\left\{\tfrac{1}{z - a}\right\} = a^{n-1} u[n-1]$ dostaneme $s[n] = \tfrac{4}{3}(-1)^{n-1} - \tfrac{1}{3}(0{,}5)^{n-1}$ pre $n \ge 1$, takze $s[1] = \tfrac{4}{3} - \tfrac{1}{3} = 1$.`,
    nepravda: String.raw`Pre $S(z) = \dfrac{z - 1}{(z + 1)(z - 0{,}5)}$ rozkladom na parcialne zlomky $S(z) = \dfrac{4/3}{z + 1} + \dfrac{-1/3}{z - 0{,}5}$ a pouzitim paru $\mathcal{Z}^{-1}\!\left\{\tfrac{z}{z - a}\right\} = a^{n} u[n]$ (zanedbame, ze v citateli nie je $z$) dostaneme $s[n] = \tfrac{4}{3}(-1)^{n} - \tfrac{1}{3}(0{,}5)^{n} u[n]$, takze $s[1] = \tfrac{4}{3} - \tfrac{1}{3} = 1$.`
  },
  {
    id: "CZS 4. Z-transformacia pociatocna hodnota 002",
    oblast: "Z-transformacia",
    podoblast: "Veta o pociatocnej hodnote",
    pravda: String.raw`Pre $S(z) = \dfrac{z - 1}{(z + 1)(z - 0{,}5)}$ rozsirenim citatela aj menovatela $\tfrac{1}{z^{2}}$ a aplikaciou $z \to \infty$ dostaneme $s[0] = \displaystyle\lim_{z \to \infty} \dfrac{\tfrac{1}{z} - \tfrac{1}{z^{2}}}{\left(1 + \tfrac{1}{z}\right)\!\left(1 - \tfrac{0{,}5}{z}\right)} = \dfrac{0 - 0}{1 \cdot 1} = 0$.`,
    nepravda: String.raw`Pre $S(z) = \dfrac{z - 1}{(z + 1)(z - 0{,}5)}$ rozsirenim citatela $\tfrac{1}{z}$ a menovatela $\tfrac{1}{z^{2}}$ a aplikaciou $z \to \infty$ dostaneme $s[0] = \displaystyle\lim_{z \to \infty} \dfrac{1 - \tfrac{1}{z}}{\left(1 + \tfrac{1}{z}\right)\!\left(1 - \tfrac{0{,}5}{z}\right)} = \dfrac{1 - 0}{1 \cdot 1} = 1$.`
  },
  {
    id: "CZS 4. Z-transformacia realny priklad uroceni 001",
    oblast: "Z-transformacia",
    podoblast: "Realne priklady",
    pravda: String.raw`Pre rekurziu rocneho uroceni $s[n] = 1{,}1 \cdot s[n - 1] + 100\,\delta[n]$ s $s[-1] = 0$ vedie pol v $z = 1{,}1$ na par $\mathcal{Z}^{-1}\{\tfrac{z}{z - a}\} = a^{n} u[n]$, takze $s[n] = 100 \cdot 1{,}1^{n}$ a $s[5] = 100 \cdot 1{,}1^{5} \doteq 161{,}05$ Kc (zlozene urocenie, exponencialny rast).`,
    nepravda: String.raw`Pre rekurziu rocneho uroceni $s[n] = 1{,}1 \cdot s[n - 1] + 100\,\delta[n]$ s $s[-1] = 0$ pol v $z = 1{,}1$ zodpoveda paru $\mathcal{Z}^{-1}\{\tfrac{z}{z - a}\} = a \cdot n \cdot u[n]$, takze $s[n] = 100 \cdot 1{,}1 \cdot n$ a $s[5] = 100 \cdot 1{,}1 \cdot 5 = 550$ Kc (linearny rast).`
  },
  {
    id: "CZS 4. Z-transformacia realny priklad odpisy 001",
    oblast: "Z-transformacia",
    podoblast: "Realne priklady",
    pravda: String.raw`Hodnota stroja klesa kazdy rok na $80\%$: $s[n] = 0{,}8 \cdot s[n-1]$, $s[0] = 1000$. Pol je v $z = 0{,}8$ (vnutri kruznice, $|z| < 1$), takze $s[n] = 1000 \cdot 0{,}8^{n}$ — klesajuca exponenciala, system je stabilny.`,
    nepravda: String.raw`Hodnota stroja klesa kazdy rok na $80\%$: $s[n] = 0{,}8 \cdot s[n-1]$, $s[0] = 1000$. Pol je v $z = 1{,}25$ (prevratena hodnota $1/0{,}8$), takze $s[n] = 1000 \cdot 1{,}25^{n}$ — rastuca exponenciala, system je nestabilny.`
  },
  {
    id: "CZS 4. Z-transformacia realny priklad populacia 001",
    oblast: "Z-transformacia",
    podoblast: "Realne priklady",
    pravda: String.raw`Populacia s konstantnym prirastkom $P$ za rok: $s[n] = s[n-1] + P\,u[n]$ je akumulator skoku, takze $S(z)$ ma dvojnasobny pol v $z = 1$ a vysledok je rampa $s[n] = P(n+1)\,u[n]$ — linearny rast.`,
    nepravda: String.raw`Populacia s konstantnym prirastkom $P$ za rok: $s[n] = s[n-1] + P\,u[n]$ ma jednoduchy pol v $z = 1$ (akoby vstup $P\,\delta[n]$), takze vysledok je skok $s[n] = P\,u[n]$ — populacia ostane konstantna.`
  },
  {
    id: "CZS 4. Z-transformacia konkretne hodnoty 001",
    oblast: "Z-transformacia",
    podoblast: "Vlastnosti — predsunutie",
    pravda: String.raw`Pre $s[n] = e^{\alpha(n + 2)} u[n]$ s $\alpha = \ln 2$ (cize $e^{\alpha} = 2$, $e^{2\alpha} = 4$) plati podla vlastnosti predsunutej postupnosti $\mathcal{Z}\{s[n]\} = \dfrac{z \cdot e^{2\alpha}}{z - e^{\alpha}} = \dfrac{4 z}{z - 2}$.`,
    nepravda: String.raw`Pre $s[n] = e^{\alpha(n + 2)} u[n]$ s $\alpha = \ln 2$ (cize $e^{\alpha} = 2$, $e^{2\alpha} = 4$) plati podla vlastnosti predsunutej postupnosti $\mathcal{Z}\{s[n]\} = \dfrac{z \cdot e^{2\alpha}}{z - e^{\alpha}} = \dfrac{2 z}{z - 2}$.`
  },
  {
    id: "CZS 4. Z-transformacia konkretne hodnoty 002",
    oblast: "Z-transformacia",
    podoblast: "Harmonicke signaly s konkretnou frekvenciou",
    pravda: String.raw`Pre $s[n] = \sin\!\left(\tfrac{\pi}{3} n\right) u[n]$ pri $\sin\tfrac{\pi}{3} = \tfrac{\sqrt{3}}{2}$ a $\cos\tfrac{\pi}{3} = \tfrac{1}{2}$ plati $\mathcal{Z}\{s[n]\} = \dfrac{z \sin\tfrac{\pi}{3}}{z^{2} - 2 z \cos\tfrac{\pi}{3} + 1} = \dfrac{\tfrac{\sqrt{3}}{2}\, z}{z^{2} - z + 1}$.`,
    nepravda: String.raw`Pre $s[n] = \sin\!\left(\tfrac{\pi}{3} n\right) u[n]$ pri $\sin\tfrac{\pi}{3} = \tfrac{\sqrt{3}}{2}$ a $\cos\tfrac{\pi}{3} = \tfrac{1}{2}$ plati $\mathcal{Z}\{s[n]\} = \dfrac{z \sin\tfrac{\pi}{3}}{z^{2} + 2 z \cos\tfrac{\pi}{3} + 1} = \dfrac{\tfrac{\sqrt{3}}{2}\, z}{z^{2} + z + 1}$.`
  },

  // ===== ULTRA ZAKLADY Z-TRANSFORMACIE (pre zacinajucich) =====
  {
    id: "CZS 4. Zaklady definicia 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Z-transformacia postupnosti $s[n]$ je definovana ako $S(z) = \displaystyle\sum_{n=-\infty}^{\infty} s[n]\, z^{-n}$.`,
    nepravda: String.raw`Z-transformacia postupnosti $s[n]$ je definovana ako $S(z) = \displaystyle\sum_{n=-\infty}^{\infty} s[n]\, z^{n}$ (s kladnym exponentom).`
  },
  {
    id: "CZS 4. Zaklady definicia 002",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Clen $z^{-1}$ v Z-transformacii predstavuje oneskorenie o jednu vzorku: $\mathcal{Z}\{s[n-1]\} = z^{-1} S(z)$.`,
    nepravda: String.raw`Clen $z^{-1}$ v Z-transformacii predstavuje predsunutie o jednu vzorku: $\mathcal{Z}\{s[n-1]\} = z^{+1} S(z)$.`
  },
  {
    id: "CZS 4. Zaklady par impulz 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Jednotkovy impulz sa transformuje najjednoduchsie: $\mathcal{Z}\{\delta[n]\} = 1$.`,
    nepravda: String.raw`Jednotkovy impulz sa transformuje na $\mathcal{Z}\{\delta[n]\} = z$.`
  },
  {
    id: "CZS 4. Zaklady par skok 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Jednotkovy skok ma obraz $\mathcal{Z}\{u[n]\} = \dfrac{z}{z - 1}$.`,
    nepravda: String.raw`Jednotkovy skok ma obraz $\mathcal{Z}\{u[n]\} = \dfrac{z}{z + 1}$.`
  },
  {
    id: "CZS 4. Zaklady par exponenciala 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Exponencialna postupnost ma obraz $\mathcal{Z}\{a^{n} u[n]\} = \dfrac{z}{z - a}$.`,
    nepravda: String.raw`Exponencialna postupnost ma obraz $\mathcal{Z}\{a^{n} u[n]\} = \dfrac{z}{z \cdot a}$.`
  },
  {
    id: "CZS 4. Zaklady linearita 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Z-transformacia je linearna: $\mathcal{Z}\{a\, s_1[n] + b\, s_2[n]\} = a\, S_1(z) + b\, S_2(z)$.`,
    nepravda: String.raw`Z-transformacia je linearna: $\mathcal{Z}\{a\, s_1[n] + b\, s_2[n]\} = a\, b\, S_1(z)\, S_2(z)$.`
  },
  {
    id: "CZS 4. Zaklady konecny signal 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Pre konecny signal $s[n] = \{1, 2, 3\}$ (od $n = 0$) je $S(z) = 1 + 2 z^{-1} + 3 z^{-2}$ (kazda vzorka da clen $s[n]\, z^{-n}$).`,
    nepravda: String.raw`Pre konecny signal $s[n] = \{1, 2, 3\}$ (od $n = 0$) je $S(z) = 1 + 2 z + 3 z^{2}$.`
  },
  {
    id: "CZS 4. Zaklady posun impulz 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Posunuty impulz $\delta[n - 2]$ ma obraz $\mathcal{Z}\{\delta[n-2]\} = z^{-2}$.`,
    nepravda: String.raw`Posunuty impulz $\delta[n - 2]$ ma obraz $\mathcal{Z}\{\delta[n-2]\} = 2 z^{-1}$.`
  },
  {
    id: "CZS 4. Zaklady nasobenie konstantou 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Nasobenie signalu konstantou nasobi aj jeho obraz: $\mathcal{Z}\{5\,\delta[n]\} = 5$.`,
    nepravda: String.raw`Nasobenie signalu konstantou obraz nemeni: $\mathcal{Z}\{5\,\delta[n]\} = 1$.`
  },
  {
    id: "CZS 4. Zaklady roc 001",
    oblast: "Z-transformacia",
    podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Oblast konvergencie (ROC) kauzalneho signalu $a^{n} u[n]$ je vonkajsok kruznice: $|z| > |a|$.`,
    nepravda: String.raw`Oblast konvergencie (ROC) kauzalneho signalu $a^{n} u[n]$ je vnutro kruznice: $|z| < |a|$.`
  }
];

const czsSkuska4CrackOtazky = czsSkuska4CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 4. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 4",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_4_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska4CrackOtazky);

const czsSkuska2CrackData = [
  {
    id: "CZS 2-3. Konvolucia vypocet dlzka 001",
    oblast: "Konvolucia",
    podoblast: "Dlzka a indexovanie",
    pravda: String.raw`Konvolucia dvoch konecnych signalov dlzky $L_1$ a $L_2$ ma vyslednu dlzku $L_1 + L_2 - 1$.`,
    nepravda: String.raw`Konvolucia dvoch konecnych signalov dlzky $L_1$ a $L_2$ ma vyslednu dlzku $L_1 \cdot L_2 - 1$.`
  },
  {
    id: "CZS 2-3. Konvolucia vypocet dlzka 002",
    oblast: "Konvolucia",
    podoblast: "Dlzka a indexovanie",
    pravda: String.raw`Ak $x[n]$ zacina na indexe $n_x$ a $h[n]$ na indexe $n_h$, potom $y[n] = x[n] \ast h[n]$ zacina na indexe $n_x + n_h$.`,
    nepravda: String.raw`Ak $x[n]$ zacina na indexe $n_x$ a $h[n]$ na indexe $n_h$, potom $y[n] = x[n] \ast h[n]$ zacina na indexe $\max(n_x, n_h)$.`
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 001",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: String.raw`Konvolucia $[1, 2] \ast [1, 1] = [1, 3, 2]$, lebo $y[0]=1\cdot 1=1$, $y[1]=1\cdot 1+2\cdot 1=3$, $y[2]=2\cdot 1=2$.`,
    nepravda: String.raw`Konvolucia $[1, 2] \ast [1, 1] = [1, 2, 2]$, lebo $y[0]=1\cdot 1=1$, $y[1]=2\cdot 1=2$, $y[2]=2\cdot 1=2$.`
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 002",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: String.raw`Konvolucia $[1, 2, 3] \ast [1, 1] = [1, 3, 5, 3]$: $y[0]=1$, $y[1]=1+2=3$, $y[2]=2+3=5$, $y[3]=3$.`,
    nepravda: String.raw`Konvolucia $[1, 2, 3] \ast [1, 1] = [1, 3, 3, 3]$: $y[0]=1$, $y[1]=1+2=3$, $y[2]=3$, $y[3]=3$.`
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 003",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: String.raw`Konvolucia $[1, 2, 3, 1, 1] \ast [1, 2, 2]$ zacina hodnotami $y[0]=1$, $y[1]=4$, $y[2]=9$ a vysledok ma dlzku $7$.`,
    nepravda: String.raw`Konvolucia $[1, 2, 3, 1, 1] \ast [1, 2, 2]$ zacina hodnotami $y[0]=1$, $y[1]=4$, $y[2]=9$ a vysledok ma dlzku $5$.`
  },
  {
    id: "CZS 2-3. Konvolucia identita 001",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Konvolucia $x[n] \ast \delta[n] = x[n]$; jednotkovy impulz je neutralny prvok konvolucie a signal sa neposunie.`,
    nepravda: String.raw`Konvolucia $x[n] \ast \delta[n] = x[n-1]$; jednotkovy impulz konvoluciou posunie signal o jednu vzorku doprava.`
  },
  {
    id: "CZS 2-3. Konvolucia identita 002",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Konvolucia $x[n] \ast \delta[n-k] = x[n-k]$: konvolucia s posunutym impulzom posunie signal o $k$ vzoriek doprava.`,
    nepravda: String.raw`Konvolucia $x[n] \ast \delta[n-k] = x[n+k]$: konvolucia s posunutym impulzom posunie signal o $k$ vzoriek dolava.`
  },
  {
    id: "CZS 2-3. Konvolucia identita 003",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Konvolucia $x[n] \ast u[n]$ zodpoveda kumulativnemu suctu: $y[n] = \displaystyle\sum_{k=-\infty}^{n} x[k]$.`,
    nepravda: String.raw`Konvolucia $x[n] \ast u[n]$ zodpoveda kumulativnemu suctu od aktualneho indexu po nekonecno: $y[n] = \displaystyle\sum_{k=n}^{\infty} x[k]$.`
  },
  {
    id: "CZS 2-3. Konvolucia identita 004",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Konvolucia $u[n] \ast u[n]$ dava rampu, ktora pre $n \ge 0$ nadobuda hodnoty $(n+1)$, teda postupnost $\{1, 2, 3, 4, \ldots\}$.`,
    nepravda: String.raw`Konvolucia $u[n] \ast u[n]$ dava opat jednotkovy skok $u[n]$, pretoze konvolucia s $u[n]$ funguje ako identita.`
  },
  {
    id: "CZS 2-3. Konvolucia vlastnosti 001",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: String.raw`Diskretna konvolucia je komutativna: $x[n] \ast h[n] = h[n] \ast x[n]$; vstupny signal aj impulzna odozva su zamenitelne.`,
    nepravda: String.raw`Diskretna konvolucia nie je komutativna: $x[n] \ast h[n]$ vo vseobecnosti nie je rovne $h[n] \ast x[n]$, lebo $h[n]$ sa pri vypocte zrkadli.`
  },
  {
    id: "CZS 2-3. Korelacia autokorelacia 001",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacna funkcia realneho signalu je parna: $r_{xx}[m] = r_{xx}[-m]$ a maximum nadobuda v bode $m = 0$.`,
    nepravda: String.raw`Autokorelacna funkcia realneho signalu je neparna: $r_{xx}[m] = -r_{xx}[-m]$ a maximum nadobuda v bode $m = 1$.`
  },
  {
    id: "CZS 2-3. Korelacia krizova 001",
    oblast: "Korelacia",
    podoblast: "Krizova korelacia",
    pravda: String.raw`Krizova korelacia nie je komutativna; plati vztah $r_{xy}[m] = r_{yx}[-m]$, teda zamena poradia signalov sa prejavi zrkadlovym otocenim okolo nuly.`,
    nepravda: String.raw`Krizova korelacia je komutativna; plati vztah $r_{xy}[m] = r_{yx}[m]$, teda zamena poradia signalov nema na vysledok ziadny vplyv.`
  },
  {
    id: "CZS 2-3. LTI stabilita 001",
    oblast: "LTI system",
    podoblast: "Stabilita cez impulznu charakteristiku",
    pravda: String.raw`LTI system je BIBO stabilny prave vtedy, ked plati $\displaystyle\sum_{n=-\infty}^{\infty} |h[n]| < \infty$ (absolutna sumovatelnost impulznej charakteristiky).`,
    nepravda: String.raw`LTI system je BIBO stabilny prave vtedy, ked plati $\displaystyle\sum_{n=-\infty}^{\infty} h[n]^2 < \infty$ (energia impulznej charakteristiky je konecna).`
  },
  {
    id: "CZS 2-3. LTI stabilita 002",
    oblast: "LTI system",
    podoblast: "Stabilita cez impulznu charakteristiku",
    pravda: String.raw`LTI system s $h[n] = \left(\tfrac{1}{2}\right)^{n} u[n]$ je stabilny, lebo $\displaystyle\sum_{n=0}^{\infty} \left(\tfrac{1}{2}\right)^{n} = \dfrac{1}{1 - \tfrac{1}{2}} = 2 < \infty$.`,
    nepravda: String.raw`LTI system s $h[n] = \left(\tfrac{1}{2}\right)^{n} u[n]$ je nestabilny, lebo geometricky rad $\displaystyle\sum_{n=0}^{\infty} \left(\tfrac{1}{2}\right)^{n}$ diverguje.`
  },
  {
    id: "CZS 2-3. LTI kauzalita 001",
    oblast: "LTI system",
    podoblast: "Kauzalita cez impulznu charakteristiku",
    pravda: String.raw`LTI system je kauzalny prave vtedy, ked jeho impulzna charakteristika splna $h[n] = 0$ pre vsetky $n < 0$.`,
    nepravda: String.raw`LTI system je kauzalny prave vtedy, ked jeho impulzna charakteristika splna $h[n] = 0$ pre vsetky $n > 0$.`
  },
  {
    id: "CZS 2-3. Konvolucia rucny vypocet 004",
    oblast: "Konvolucia",
    podoblast: "Rucny vypocet kratkych signalov",
    pravda: String.raw`Konvolucia $[1, 1, 1] \ast [1, 1, 1] = [1, 2, 3, 2, 1]$; vystupom dvoch obdlznikov je trojuholnik s vrcholom $3$ v strede.`,
    nepravda: String.raw`Konvolucia $[1, 1, 1] \ast [1, 1, 1] = [1, 3, 3, 3, 1]$; vystupom dvoch obdlznikov je lichobeznik s plochym vrcholom $3$.`
  },
  {
    id: "CZS 2-3. Konvolucia vlastnosti 002",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: String.raw`Konvolucia splna distributivny zakon: $x[n] \ast (h_1[n] + h_2[n]) = x[n] \ast h_1[n] + x[n] \ast h_2[n]$.`,
    nepravda: String.raw`Konvolucia splna distributivny zakon v tvare: $x[n] \ast (h_1[n] + h_2[n]) = \bigl(x[n] \ast h_1[n]\bigr) \cdot \bigl(x[n] \ast h_2[n]\bigr)$.`
  },
  {
    id: "CZS 2-3. Konvolucia vlastnosti 003",
    oblast: "Konvolucia",
    podoblast: "Vlastnosti",
    pravda: String.raw`Konvolucia je asociativna: $(x[n] \ast h_1[n]) \ast h_2[n] = x[n] \ast (h_1[n] \ast h_2[n])$; poradie spajania systemov mozno menit.`,
    nepravda: String.raw`Konvolucia nie je asociativna: $(x[n] \ast h_1[n]) \ast h_2[n]$ vo vseobecnosti nie je rovne $x[n] \ast (h_1[n] \ast h_2[n])$.`
  },
  {
    id: "CZS 2-3. LTI spojenie 001",
    oblast: "LTI system",
    podoblast: "Spojenia LTI systemov",
    pravda: String.raw`Kaskadne (seriove) spojenie dvoch LTI systemov s impulznymi odozvami $h_1[n]$ a $h_2[n]$ ma vyslednu impulznu odozvu $h[n] = h_1[n] \ast h_2[n]$.`,
    nepravda: String.raw`Kaskadne (seriove) spojenie dvoch LTI systemov s impulznymi odozvami $h_1[n]$ a $h_2[n]$ ma vyslednu impulznu odozvu $h[n] = h_1[n] + h_2[n]$.`
  },
  {
    id: "CZS 2-3. LTI spojenie 002",
    oblast: "LTI system",
    podoblast: "Spojenia LTI systemov",
    pravda: String.raw`Paralelne spojenie dvoch LTI systemov s impulznymi odozvami $h_1[n]$ a $h_2[n]$ ma vyslednu impulznu odozvu $h[n] = h_1[n] + h_2[n]$.`,
    nepravda: String.raw`Paralelne spojenie dvoch LTI systemov s impulznymi odozvami $h_1[n]$ a $h_2[n]$ ma vyslednu impulznu odozvu $h[n] = h_1[n] \ast h_2[n]$.`
  },
  {
    id: "CZS 2-3. Konvolucia vzorec 001",
    oblast: "Konvolucia",
    podoblast: "Vzorec konvolucnej sumy",
    pravda: String.raw`Diskretna konvolucia sa pocita ako $y[n] = \displaystyle\sum_{k=-\infty}^{\infty} x[k]\, h[n-k]$; signal $h$ sa zrkadli a posuva o $n$.`,
    nepravda: String.raw`Diskretna konvolucia sa pocita ako $y[n] = \displaystyle\sum_{k=-\infty}^{\infty} x[k]\, h[n+k]$; signal $h$ sa iba posuva o $n$ bez zrkadlenia.`
  },
  {
    id: "CZS 2-3. Konvolucia identita 005",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Konvolucia dvoch jednotkovych impulzov je opat jednotkovy impulz: $\delta[n] \ast \delta[n] = \delta[n]$.`,
    nepravda: String.raw`Konvolucia dvoch jednotkovych impulzov je dvojnasobny impulz: $\delta[n] \ast \delta[n] = 2\,\delta[n]$.`
  },
  {
    id: "CZS 2-3. Konvolucia identita 006",
    oblast: "Konvolucia",
    podoblast: "Specialne pripady",
    pravda: String.raw`Konvolucia obdlznikoveho signalu sam so sebou (oba dlzky $N$) dava trojuholnikovy signal s vrcholom v strede a vyslednou dlzkou $2N - 1$.`,
    nepravda: String.raw`Konvolucia obdlznikoveho signalu sam so sebou (oba dlzky $N$) dava opat obdlznikovy signal rovnakej dlzky $N$.`
  },
  {
    id: "CZS 2-3. Korelacia autokorelacia 002",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacna funkcia realneho signalu nadobuda v bode $m = 0$ hodnotu $r_{xx}[0] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]^2$, co zodpoveda energii signalu.`,
    nepravda: String.raw`Autokorelacna funkcia realneho signalu nadobuda v bode $m = 0$ hodnotu $r_{xx}[0] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]$, co zodpoveda strednej hodnote signalu.`
  },
  {
    id: "CZS 2-3. Korelacia autokorelacia 003",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacna funkcia periodickeho signalu s periodou $T$ je kvaziperiodicka s tou istou periodou $T$; maxima sa opakuju kazdych $T$ vzoriek.`,
    nepravda: String.raw`Autokorelacna funkcia periodickeho signalu s periodou $T$ sa stane neperiodickou a monotonne klesa k nule pre rastuce $|m|$.`
  },
  {
    id: "CZS 2-3. Korelacia krizova 002",
    oblast: "Korelacia",
    podoblast: "Krizova korelacia",
    pravda: String.raw`Krizova korelacia sa pocita ako $r_{xy}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\, y[n+m]$; je to suma sucinov dvoch signalov po posunuti druheho o $m$.`,
    nepravda: String.raw`Krizova korelacia sa pocita ako $r_{xy}[m] = x[m]\, y[m]$; je to obycajny sucin vzoriek na rovnakom indexe bez sumovania.`
  },
  {
    id: "CZS 2-3. LTI stabilita 003",
    oblast: "LTI system",
    podoblast: "Stabilita cez impulznu charakteristiku",
    pravda: String.raw`LTI system s $h[n] = 2^{n}\, u[n]$ je nestabilny, lebo $\displaystyle\sum_{n=0}^{\infty} 2^{n}$ diverguje k $\infty$ (geometricky rad s kvocientom $2$).`,
    nepravda: String.raw`LTI system s $h[n] = 2^{n}\, u[n]$ je stabilny, lebo $\displaystyle\sum_{n=0}^{\infty} 2^{n} = \dfrac{1}{1-2} = -1$ je konecna hodnota.`
  },
  {
    id: "CZS 2-3. Klasifikacia casova invariantnost 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`System $y[n] = n \cdot x[n]$ nie je casovo invariantny: odozva na $x[n-i]$ je $n \cdot x[n-i]$, no posunuta odozva by mala byt $(n-i) \cdot x[n-i]$.`,
    nepravda: String.raw`System $y[n] = n \cdot x[n]$ je casovo invariantny: odozva na $x[n-i]$ je $n \cdot x[n-i]$, co sa zhoduje s posunutou odozvou $(n-i) \cdot x[n-i]$.`
  },
  {
    id: "CZS 2-3. Klasifikacia linearita 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`System $y[n] = x[n]^{2}$ nie je linearny: $(a_1 x_1[n] + a_2 x_2[n])^{2}$ obsahuje krizovy clen $2 a_1 a_2\, x_1[n]\, x_2[n]$, ktory v sucte $a_1 x_1[n]^{2} + a_2 x_2[n]^{2}$ chyba.`,
    nepravda: String.raw`System $y[n] = x[n]^{2}$ je linearny: kvadrat zachovava princip superpozicie, lebo $(a_1 x_1[n] + a_2 x_2[n])^{2} = a_1 x_1[n]^{2} + a_2 x_2[n]^{2}$.`
  },
  {
    id: "CZS 2-3. Klasifikacia akumulator 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Akumulator a stabilita",
    pravda: String.raw`Akumulator s diferencnou rovnicou $y[n] = y[n-1] + x[n]$ ma impulznu odozvu $h[n] = u[n]$ a je BIBO nestabilny, lebo $\sum u[n]$ diverguje.`,
    nepravda: String.raw`Akumulator s diferencnou rovnicou $y[n] = y[n-1] + x[n]$ ma impulznu odozvu $h[n] = \delta[n]$ a je BIBO stabilny, lebo $\sum \delta[n] = 1$.`
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

const czsSkuska2CrackData = [
  // ===== Korelacia: vzorce =====
  {
    id: "CZS 2. Korelacia vzorec 001",
    oblast: "Korelacia",
    podoblast: "Vzorec a vyznam",
    pravda: String.raw`Krizova korelacia sa pocita ako $r_{xy}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\, y[n-m]$ a sluzi na urcenie podobnosti dvoch signalov.`,
    nepravda: String.raw`Krizova korelacia sa pocita ako $r_{xy}[m] = x[m]\, y[m]$, teda obycajny sucin vzoriek na rovnakom indexe bez sumovania.`
  },
  {
    id: "CZS 2. Korelacia vzorec 002",
    oblast: "Korelacia",
    podoblast: "Vzorec a vyznam",
    pravda: String.raw`Korelacia NIE je komutativna; plati $r_{xy}[m] = r_{yx}[-m]$, teda zamena poradia signalov sa prejavi zrkadlovym otocenim okolo nuly.`,
    nepravda: String.raw`Korelacia je komutativna; plati $r_{xy}[m] = r_{yx}[m]$, teda na poradi signalov nezalezi.`
  },
  {
    id: "CZS 2. Korelacia vzorec 003",
    oblast: "Korelacia",
    podoblast: "Vzorec a vyznam",
    pravda: String.raw`Korelacia je velmi blizka konvolucii; lisia sa tym, ze pri konvolucii sa druhy signal navyse zrkadli (otoci okolo pociatku), pri korelacii nie.`,
    nepravda: String.raw`Korelacia a konvolucia su uplne odlisne operacie bez akejkolvek matematickej suvislosti.`
  },
  // ===== Korelacia: rucny vypocet =====
  {
    id: "CZS 2. Korelacia vypocet 001",
    oblast: "Korelacia",
    podoblast: "Rucny vypocet",
    pravda: String.raw`Pre $x = [1, 2, 3, 2, 1]$ a $y = [1, 2]$ (zaciatok v $n=0$) je $r_{xy}[0] = \sum x[n]\,y[n] = 1\cdot 1 + 2\cdot 2 = 5$.`,
    nepravda: String.raw`Pre $x = [1, 2, 3, 2, 1]$ a $y = [1, 2]$ (zaciatok v $n=0$) je $r_{xy}[0] = 1\cdot 1 + 2\cdot 2 = 3$.`
  },
  {
    id: "CZS 2. Korelacia vypocet 002",
    oblast: "Korelacia",
    podoblast: "Rucny vypocet",
    pravda: String.raw`Pre $x = [0,1,2,3,2,1,0]$ a $y = [0,0,1,2,0,0,0]$ je $r_{xy}[0] = 2\cdot 1 + 3\cdot 2 = 8$ (suma sucinov bez posunu).`,
    nepravda: String.raw`Pre $x = [0,1,2,3,2,1,0]$ a $y = [0,0,1,2,0,0,0]$ je $r_{xy}[0] = 2\cdot 1 + 3\cdot 2 = 5$.`
  },
  // ===== Autokorelacia =====
  {
    id: "CZS 2. Autokorelacia 001",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacna funkcia realneho signalu je parna: $r_{xx}[m] = r_{xx}[-m]$ a maximum nadobuda vzdy v bode $m = 0$.`,
    nepravda: String.raw`Autokorelacna funkcia realneho signalu je neparna: $r_{xx}[m] = -r_{xx}[-m]$ a maximum nadobuda v bode $m = 1$.`
  },
  {
    id: "CZS 2. Autokorelacia 002",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacia v bode $m=0$ je $r_{xx}[0] = \displaystyle\sum_{n} x[n]^2$, co zodpoveda energii signalu.`,
    nepravda: String.raw`Autokorelacia v bode $m=0$ je $r_{xx}[0] = \displaystyle\sum_{n} x[n]$, co zodpoveda strednej hodnote signalu.`
  },
  {
    id: "CZS 2. Autokorelacia 003",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacna funkcia periodickeho signalu s periodou $T$ je kvaziperiodicka s tou istou periodou $T$.`,
    nepravda: String.raw`Autokorelacna funkcia periodickeho signalu s periodou $T$ je neperiodicka a monotonne klesa k nule.`
  },
  {
    id: "CZS 2. Autokorelacia 004",
    oblast: "Korelacia",
    podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacia sa pouziva na odhalenie skrytej periodicity v silne zasumenych signaloch (miera samopodobnosti).`,
    nepravda: String.raw`Autokorelacia dokaze merat podobnost iba dvoch roznych signalov, na vlastnu periodicitu signalu sa pouzit neda.`
  },
  {
    id: "CZS 2. Korelacia echo 001",
    oblast: "Korelacia",
    podoblast: "Aplikacia - echo a radar",
    pravda: String.raw`Pri zmesi priameho signalu a jeho oneskorenych echo kopii ma krizova korelacia vyslaneho a prijateho signalu vyrazne maxima na posunoch $m$, ktore zodpovedaju oneskoreniam ech (napr. $500$ a $1000$ vzoriek pri posunoch $50$ a $100$ ms a $T_\mathrm{vz} = 100\,\mu s$).`,
    nepravda: String.raw`Pri zmesi priameho signalu a jeho oneskorenych echo kopii ma krizova korelacia jedine maximum v bode $m = 0$, z polohy ech sa nic vycitat neda.`
  },
  {
    id: "CZS 2. Korelacia echo 002",
    oblast: "Korelacia",
    podoblast: "Aplikacia - echo a radar",
    pravda: String.raw`Pri radarovom merani vzdialenosti sa z polohy maxima korelacie urci oneskorenie $m$, z neho cas $t = m\,T_\mathrm{vz}$ a nasledne draha k objektu.`,
    nepravda: String.raw`Pri radarovom merani vzdialenosti sa vzdialenost objektu urci priamo z amplitudy maxima korelacie, poloha maxima nie je dolezita.`
  },
  // ===== Prevodna funkcia / popis systemu =====
  {
    id: "CZS 2. Prevodna funkcia 001",
    oblast: "Prevodne funkcie a popis systemu",
    podoblast: "Vonkajsi a vnutorny popis",
    pravda: String.raw`Vonkajsi popis systemu je $y[n] = T\{x[n]\}$ (vstup priamo na vystup), vnutorny popis pouziva stavove premenne $v_i[n]$.`,
    nepravda: String.raw`Vonkajsi popis systemu pouziva stavove premenne $v_i[n]$, kym vnutorny popis je iba $y[n] = T\{x[n]\}$.`
  },
  {
    id: "CZS 2. Prevodna funkcia 002",
    oblast: "Prevodne funkcie a popis systemu",
    podoblast: "Akumulator",
    pravda: String.raw`Akumulator $y[n] = \displaystyle\sum_{i=-\infty}^{n} x[i]$ sa da zapisat rekurzivne ako $y[n] = y[n-1] + x[n]$.`,
    nepravda: String.raw`Akumulator $y[n] = \displaystyle\sum_{i=-\infty}^{n} x[i]$ sa da zapisat rekurzivne ako $y[n] = y[n-1] \cdot x[n]$.`
  },
  {
    id: "CZS 2. Prevodna funkcia 003",
    oblast: "Prevodne funkcie a popis systemu",
    podoblast: "Akumulator",
    pravda: String.raw`Pre akumulator a vstup $x[n] = [3,2,1,0,1,2,3]$ (od $n=-3$) je vystup postupny sucet: $y[-3]=3,\ y[-2]=5,\ y[-1]=6,\ y[0]=6,\ y[1]=7$.`,
    nepravda: String.raw`Pre akumulator a vstup $x[n] = [3,2,1,0,1,2,3]$ (od $n=-3$) je vystup $y[-3]=3,\ y[-2]=2,\ y[-1]=1,\ y[0]=0$ (kopia vstupu).`
  },
  {
    id: "CZS 2. Prevodna funkcia 004",
    oblast: "Prevodne funkcie a popis systemu",
    podoblast: "Akumulator",
    pravda: String.raw`Akumulator je dynamicky (ma pamat) a kauzalny system, no je BIBO nestabilny: na ohraniceny vstup $x[n] = u[n]$ rastie vystup $y[n] = (n+1)\,u[n]$ nad vsetky medze.`,
    nepravda: String.raw`Akumulator je staticky (bez pamate) a BIBO stabilny system: na ohraniceny vstup $x[n] = u[n]$ je vystup vzdy ohraniceny.`
  },
  {
    id: "CZS 2. Prevodna funkcia 005",
    oblast: "Prevodne funkcie a popis systemu",
    podoblast: "Akumulator",
    pravda: String.raw`Pre akumulator so vstupom $x[n] = n\,u[n]$ a $n_0 = 0$ je vystup suctom aritmetickej postupnosti: $y[n] = y[-1] + \dfrac{n(n+1)}{2}$. Pri nulovej pociatocnej podmienke $y[-1]=0$ je $y[n] = \dfrac{n(n+1)}{2}$.`,
    nepravda: String.raw`Pre akumulator so vstupom $x[n] = n\,u[n]$ a $n_0 = 0$ je vystup $y[n] = y[-1] + n^2$. Pri nulovej pociatocnej podmienke $y[-1]=0$ je $y[n] = n^2$.`
  },
  {
    id: "CZS 2. Prevodna funkcia 006",
    oblast: "Prevodne funkcie a popis systemu",
    podoblast: "Akumulator",
    pravda: String.raw`Pre akumulator so vstupom $x[n] = n\,u[n]$ a NENULOVOU pociatocnou podmienkou $y[-1]=1$ je vystup $y[n] = 1 + \dfrac{n(n+1)}{2} = \dfrac{n^2 + n + 2}{2}$.`,
    nepravda: String.raw`Pre akumulator so vstupom $x[n] = n\,u[n]$ a pociatocnou podmienkou $y[-1]=1$ je vystup rovnaky ako pri $y[-1]=0$, lebo pociatocna podmienka vystup neovplyvni.`
  },
  // ===== Klasifikacia: staticky/dynamicky =====
  {
    id: "CZS 2. Klasifikacia staticky 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Staticky a dynamicky",
    pravda: String.raw`Staticky system (bez pamate) ma vystup zavisly iba od aktualneho vstupu, napr. $y[n] = a\,x[n]$; dynamicky system pouziva aj minule vzorky.`,
    nepravda: String.raw`Staticky system (bez pamate) pouziva minule vzorky vstupu aj vystupu, kym dynamicky system zavisi iba od aktualneho vstupu.`
  },
  // ===== Klasifikacia: casova invariantnost =====
  {
    id: "CZS 2. Klasifikacia invariantnost 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`System je casovo invariantny, ak posun vstupu o $k$ vyvola iba rovnaky posun vystupu: $T\{x[n-k]\} = y[n-k]$.`,
    nepravda: String.raw`System je casovo invariantny, ak posun vstupu o $k$ zmeni tvar vystupu, teda $T\{x[n-k]\} \ne y[n-k]$.`
  },
  {
    id: "CZS 2. Klasifikacia invariantnost 002",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`System $y[n] = n \cdot x[n]$ NIE je casovo invariantny: odozva na $x[n-i]$ je $n\,x[n-i]$, ale posunuta odozva ma byt $(n-i)\,x[n-i]$.`,
    nepravda: String.raw`System $y[n] = n \cdot x[n]$ je casovo invariantny, lebo odozva na $x[n-i]$ je $n\,x[n-i]$, co sa zhoduje s $(n-i)\,x[n-i]$.`
  },
  {
    id: "CZS 2. Klasifikacia invariantnost 003",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`Test invariantnosti: porovnaj (1) odozvu na posunuty vstup $y[n,i] = T\{x[n-i]\}$ s (2) posunutou odozvou $y[n-i]$. System je invariantny, ak $y[n,i] = y[n-i]$.`,
    nepravda: String.raw`Test invariantnosti: porovnaj (1) odozvu na posunuty vstup $y[n,i] = T\{x[n-i]\}$ s (2) posunutou odozvou $y[n-i]$. System je invariantny, ak $y[n,i] \neq y[n-i]$.`
  },
  {
    id: "CZS 2. Klasifikacia invariantnost 004",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`System $y[n] = x[n] - x[n-1]$ JE casovo invariantny: $T\{x[n-i]\} = x[n-i] - x[n-i-1]$ sa zhoduje s posunutou odozvou $y[n-i] = x[n-i] - x[n-i-1]$.`,
    nepravda: String.raw`System $y[n] = x[n] - x[n-1]$ NIE je casovo invariantny, lebo $T\{x[n-i]\} = x[n-i] - x[n-i-1]$ sa lisi od posunutej odozvy $y[n-i]$.`
  },
  {
    id: "CZS 2. Klasifikacia invariantnost 005",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`Vseobecne plati: system s konstantnymi koeficientmi (napr. $y[n] = x[n] - x[n-1]$) je casovo invariantny, kym koeficient zavisly od $n$ (napr. $y[n] = n\,x[n]$) robi system casovo premennym.`,
    nepravda: String.raw`Vseobecne plati: koeficient zavisly od $n$ (napr. $y[n] = n\,x[n]$) zachova casovu invariantnost, kym konstantne koeficienty ju vzdy porusuju.`
  },
  {
    id: "CZS 2. Klasifikacia invariantnost 006",
    oblast: "Klasifikacia systemov",
    podoblast: "Casova invariantnost",
    pravda: String.raw`System $y[n] = x[-n]$ (otocenie casovej osi) NIE je casovo invariantny: posun vstupu o $i$ da $x[-(n-i)] = x[-n+i]$, kym posun vystupu da $x[-(n-i)]$ — to sa nezhoduje.`,
    nepravda: String.raw`System $y[n] = x[-n]$ (otocenie casovej osi) JE casovo invariantny, lebo otocenie casu nezavisi od polohy signalu.`
  },
  // ===== Klasifikacia: linearita =====
  {
    id: "CZS 2. Klasifikacia linearita 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`Linearny system splna princip superpozicie: $T\{a_1 x_1[n] + a_2 x_2[n]\} = a_1 T\{x_1[n]\} + a_2 T\{x_2[n]\}$.`,
    nepravda: String.raw`Linearny system splna $T\{a_1 x_1[n] + a_2 x_2[n]\} = a_1 a_2\, T\{x_1[n]\}\, T\{x_2[n]\}$.`
  },
  {
    id: "CZS 2. Klasifikacia linearita 002",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`System $y[n] = x^2[n]$ NIE je linearny: $(a_1 x_1 + a_2 x_2)^2$ obsahuje krizovy clen $2 a_1 a_2 x_1 x_2$, ktory v $a_1 x_1^2 + a_2 x_2^2$ chyba.`,
    nepravda: String.raw`System $y[n] = x^2[n]$ je linearny, lebo $(a_1 x_1 + a_2 x_2)^2 = a_1 x_1^2 + a_2 x_2^2$.`
  },
  {
    id: "CZS 2. Klasifikacia linearita 003",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`Test linearity: porovnaj odozvu na zlozeny vstup $T\{a_1 x_1 + a_2 x_2\}$ s linearnou kombinaciou odoziev $a_1 T\{x_1\} + a_2 T\{x_2\}$. Ak sa rovnaju, system je linearny.`,
    nepravda: String.raw`Test linearity: staci overit, ci $T\{a\,x[n]\} = a\,T\{x[n]\}$; aditivita $T\{x_1 + x_2\}$ sa testovat nemusi.`
  },
  {
    id: "CZS 2. Klasifikacia linearita 004",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`System $y[n] = n \cdot x[n]$ JE linearny: $T\{a_1 x_1 + a_2 x_2\} = n(a_1 x_1 + a_2 x_2) = a_1 (n x_1) + a_2 (n x_2)$, co je presne $a_1 y_1 + a_2 y_2$ (hoci je casovo premenny).`,
    nepravda: String.raw`System $y[n] = n \cdot x[n]$ NIE je linearny, lebo nasobenie premennou $n$ porusuje princip superpozicie.`
  },
  {
    id: "CZS 2. Klasifikacia linearita 005",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`System s aditivnou konstantou $y[n] = x[n] + 5$ NIE je linearny: pre nulovy vstup $x[n] = 0$ je vystup $5 \neq 0$, takze sa porusuje homogenita (linearny system ma na nulovy vstup nulovy vystup).`,
    nepravda: String.raw`System s aditivnou konstantou $y[n] = x[n] + 5$ je linearny, lebo posun o konstantu nemeni princip superpozicie.`
  },
  {
    id: "CZS 2. Klasifikacia linearita 006",
    oblast: "Klasifikacia systemov",
    podoblast: "Linearita",
    pravda: String.raw`Akumulator $y[n] = \sum_{i=-\infty}^{n} x[i]$ JE linearny: suma je linearna operacia, takze $\sum (a_1 x_1 + a_2 x_2) = a_1 \sum x_1 + a_2 \sum x_2$.`,
    nepravda: String.raw`Akumulator $y[n] = \sum_{i=-\infty}^{n} x[i]$ NIE je linearny, lebo scitavanie minulych vzoriek porusuje superpoziciu.`
  },
  // ===== Klasifikacia: kauzalita =====
  {
    id: "CZS 2. Klasifikacia kauzalita 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Kauzalita",
    pravda: String.raw`Kauzalny system ma vystup zavisly iba od aktualnych a minulych vzoriek, nie od buducich (napr. $y[n] = x[n] + x[n-1]$).`,
    nepravda: String.raw`Kauzalny system ma vystup zavisly aj od buducich vzoriek vstupu (napr. $y[n] = x[n] + x[n+1]$).`
  },
  {
    id: "CZS 2. Klasifikacia kauzalita 002",
    oblast: "Klasifikacia systemov",
    podoblast: "Kauzalita",
    pravda: String.raw`System $y[n] = x[n+1] - x[n-1]$ je nekauzalny, lebo vystup zavisi od buduceho vzorku $x[n+1]$.`,
    nepravda: String.raw`System $y[n] = x[n+1] - x[n-1]$ je kauzalny, lebo pouziva iba susedne vzorky okolo $n$.`
  },
  // ===== Klasifikacia: stabilita =====
  {
    id: "CZS 2. Klasifikacia stabilita 001",
    oblast: "Klasifikacia systemov",
    podoblast: "Stabilita",
    pravda: String.raw`System je BIBO stabilny, ak na kazdy ohraniceny vstup $|x[n]| \le M_x < \infty$ odpoveda ohranicenym vystupom $|y[n]| \le M_y < \infty$.`,
    nepravda: String.raw`System je BIBO stabilny, ak na kazdy ohraniceny vstup odpoveda vystupom, ktory moze rast nad vsetky medze.`
  },
  {
    id: "CZS 2. Klasifikacia stabilita 002",
    oblast: "Klasifikacia systemov",
    podoblast: "Stabilita",
    pravda: String.raw`Pre system $y[n] = y^2[n-1] + x[n]$ s $x[n] = C\,\delta[n]$ a $y[-1]=0$ vyjde $y[0]=C$, $y[1]=C^2$, $y[2]=C^4$, vseobecne $y[n] = C^{2^n}$.`,
    nepravda: String.raw`Pre system $y[n] = y^2[n-1] + x[n]$ s $x[n] = C\,\delta[n]$ a $y[-1]=0$ vyjde $y[0]=C$, $y[1]=2C$, $y[2]=3C$, vseobecne $y[n] = (n+1)C$.`
  },
  {
    id: "CZS 2. Klasifikacia stabilita 003",
    oblast: "Klasifikacia systemov",
    podoblast: "Stabilita",
    pravda: String.raw`System $y[n] = y^2[n-1] + x[n]$ s budenim $C\,\delta[n]$ ma vystup $y[n] = C^{2^n}$: pre $|C| > 1$ rastie nad vsetky medze (nestabilny), pre $0 < |C| < 1$ klesa k nule (stabilny).`,
    nepravda: String.raw`System $y[n] = y^2[n-1] + x[n]$ s budenim $C\,\delta[n]$ je stabilny pre kazde $C$, lebo umocnovanie vystup vzdy utlmi.`
  }
];

const czsSkuska2CrackOtazky = czsSkuska2CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 2. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 2",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_2_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska2CrackOtazky);

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

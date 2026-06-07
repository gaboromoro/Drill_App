// CZS 0 - Zaklady signalov. Doplneny okruh pre SZZ okruhy 1 a 2:
// diskretny vs cislicovy signal, kvantovanie a strata informacie,
// zakladne operacie (sucet, sucin, posun, predsunutie),
// parna a neparna zlozka, viacrozmerne signaly a oddelitelnost.

const czsSkuska0CrackData = [
  // ===== Diskretny vs cislicovy signal =====
  {
    id: "CZS 0. Diskretny vs cislicovy 001",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Rozdiel signalov",
    pravda: String.raw`Diskretny signal je diskretny v case, ale spojity v amplitude; cislicovy (numericky) signal je diskretny v case aj v amplitude (kvantovany).`,
    nepravda: String.raw`Diskretny signal je diskretny v case aj v amplitude; cislicovy (numericky) signal je diskretny iba v case a jeho amplituda ostava spojita.`
  },
  {
    id: "CZS 0. Diskretny vs cislicovy 002",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Rozdiel signalov",
    pravda: String.raw`Vzorkovanim spojiteho signalu vznikne diskretny signal; az kvantovanim amplitudy na konecny pocet hladin vznikne cislicovy signal.`,
    nepravda: String.raw`Vzorkovanim spojiteho signalu vznikne priamo cislicovy signal, takze kvantovanie amplitudy uz nie je potrebne.`
  },
  {
    id: "CZS 0. Diskretny vs cislicovy 003",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Rozdiel signalov",
    pravda: String.raw`Cislicovy signal sa da reprezentovat konecnym poctom bitov na vzorku, kym diskretny nekvantovany signal vo vseobecnosti potrebuje nekonecnu presnost.`,
    nepravda: String.raw`Aj diskretny nekvantovany signal sa da vzdy presne reprezentovat konecnym poctom bitov na vzorku, rovnako ako cislicovy.`
  },
  // ===== Kvantovanie a strata informacie =====
  {
    id: "CZS 0. Kvantovanie 001",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Kvantovanie",
    pravda: String.raw`Kvantovanie priradi spojitej amplitude najblizsiu z konecneho poctu kvantovacich hladin; vznika tym nevratna kvantovacia chyba (strata informacie).`,
    nepravda: String.raw`Kvantovanie priradi spojitej amplitude najblizsiu hladinu, ale je to vratny proces bez akejkolvek straty informacie.`
  },
  {
    id: "CZS 0. Kvantovanie 002",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Kvantovanie",
    pravda: String.raw`$N$-bitovy kvantizator ma $2^{N}$ kvantovacich hladin (napr. $8$ bitov da $256$ hladin).`,
    nepravda: String.raw`$N$-bitovy kvantizator ma $N^{2}$ kvantovacich hladin (napr. $8$ bitov da $64$ hladin).`
  },
  {
    id: "CZS 0. Kvantovanie 003",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Kvantovanie",
    pravda: String.raw`Kvantovaci krok $\Delta = \dfrac{\text{rozsah}}{2^{N}}$: cim viac bitov, tym mensi krok a tym mensia kvantovacia chyba.`,
    nepravda: String.raw`Kvantovaci krok $\Delta = \dfrac{\text{rozsah}}{2^{N}}$: cim viac bitov, tym vacsi krok a tym vacsia kvantovacia chyba.`
  },
  {
    id: "CZS 0. Kvantovanie 004",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Kvantovanie",
    pravda: String.raw`Kvantovaciu chybu casto modelujeme ako sum rovnomerne rozlozeny v intervale $\langle -\Delta/2,\ \Delta/2\rangle$; kazdy dalsi bit zlepsi odstup signal-sum (SNR) priblizne o $6\,\text{dB}$.`,
    nepravda: String.raw`Kvantovaciu chybu casto modelujeme ako sum rovnomerne rozlozeny v intervale $\langle -\Delta/2,\ \Delta/2\rangle$; kazdy dalsi bit zlepsi odstup signal-sum (SNR) priblizne o $20\,\text{dB}$.`
  },
  {
    id: "CZS 0. Kvantovanie 005",
    oblast: "Diskretny a cislicovy signal",
    podoblast: "Strata informacie",
    pravda: String.raw`Strata informacie pri kvantovani je principialne nevratna — z kvantovanej hodnoty sa neda presne rekonstruovat povodna spojita amplituda.`,
    nepravda: String.raw`Strata informacie pri kvantovani je vratna — z kvantovanej hodnoty sa vzdy da presne rekonstruovat povodna spojita amplituda.`
  },
  // ===== Zakladne operacie so signalmi =====
  {
    id: "CZS 0. Operacie sucet 001",
    oblast: "Zakladne operacie",
    podoblast: "Sucet a sucin",
    pravda: String.raw`Sucet dvoch diskretnych signalov $y[n] = x_1[n] + x_2[n]$ sa pocita po vzorkach — scitavaju sa hodnoty na rovnakom indexe $n$.`,
    nepravda: String.raw`Sucet dvoch diskretnych signalov $y[n] = x_1[n] + x_2[n]$ sa pocita konvoluciou, takze vysledok ma dlzku $N_1 + N_2 - 1$.`
  },
  {
    id: "CZS 0. Operacie sucin 001",
    oblast: "Zakladne operacie",
    podoblast: "Sucet a sucin",
    pravda: String.raw`Sucin dvoch diskretnych signalov $y[n] = x_1[n]\, x_2[n]$ je tiez operacia po vzorkach; napr. oknovanie je sucin signalu s oknom $w[n]$.`,
    nepravda: String.raw`Sucin dvoch diskretnych signalov $y[n] = x_1[n]\, x_2[n]$ sa pocita ako konvolucia ich vzoriek, preto sa pouziva na filtrovanie.`
  },
  {
    id: "CZS 0. Operacie posun 001",
    oblast: "Zakladne operacie",
    podoblast: "Posun a predsunutie",
    pravda: String.raw`Oneskorenie (zpozdenie) o $k > 0$: $y[n] = x[n-k]$ posunie signal doprava; predsunutie o $k$: $y[n] = x[n+k]$ posunie signal dolava.`,
    nepravda: String.raw`Oneskorenie (zpozdenie) o $k > 0$: $y[n] = x[n-k]$ posunie signal dolava; predsunutie o $k$: $y[n] = x[n+k]$ posunie signal doprava.`
  },
  {
    id: "CZS 0. Operacie predsunutie 001",
    oblast: "Zakladne operacie",
    podoblast: "Posun a predsunutie",
    pravda: String.raw`Pre $x[n] = \{1;\, 2;\, 3\}$ na indexoch $n = 0,1,2$ je predsunutie $y[n] = x[n+1]$ rovne $\{1;\, 2;\, 3\}$ na indexoch $n = -1, 0, 1$ (posun dolava o jednu vzorku).`,
    nepravda: String.raw`Pre $x[n] = \{1;\, 2;\, 3\}$ na indexoch $n = 0,1,2$ je predsunutie $y[n] = x[n+1]$ rovne $\{0;\, 1;\, 2;\, 3\}$ na indexoch $n = 0,1,2,3$ (posun doprava o jednu vzorku).`
  },
  // ===== Parna a neparna zlozka signalu =====
  {
    id: "CZS 0. Parnost rozklad 001",
    oblast: "Parna a neparna zlozka",
    podoblast: "Rozklad",
    pravda: String.raw`Kazdy realny signal sa da jednoznacne rozlozit na sucet parnej a neparnej zlozky: $x[n] = x_p[n] + x_n[n]$.`,
    nepravda: String.raw`Kazdy realny signal sa da jednoznacne rozlozit na sucin parnej a neparnej zlozky: $x[n] = x_p[n] \cdot x_n[n]$.`
  },
  {
    id: "CZS 0. Parnost parna 001",
    oblast: "Parna a neparna zlozka",
    podoblast: "Rozklad",
    pravda: String.raw`Parna zlozka je $x_p[n] = \dfrac{x[n] + x[-n]}{2}$ a plati pre nu $x_p[n] = x_p[-n]$.`,
    nepravda: String.raw`Parna zlozka je $x_p[n] = \dfrac{x[n] - x[-n]}{2}$ a plati pre nu $x_p[n] = x_p[-n]$.`
  },
  {
    id: "CZS 0. Parnost neparna 001",
    oblast: "Parna a neparna zlozka",
    podoblast: "Rozklad",
    pravda: String.raw`Neparna zlozka je $x_n[n] = \dfrac{x[n] - x[-n]}{2}$, plati $x_n[n] = -x_n[-n]$ a v bode $n = 0$ je vzdy $x_n[0] = 0$.`,
    nepravda: String.raw`Neparna zlozka je $x_n[n] = \dfrac{x[n] + x[-n]}{2}$, plati $x_n[n] = -x_n[-n]$ a v bode $n = 0$ je vzdy $x_n[0] = x[0]$.`
  },
  {
    id: "CZS 0. Parnost vypocet 001",
    oblast: "Parna a neparna zlozka",
    podoblast: "Vypocet a priklady",
    pravda: String.raw`Pre signal s $x[1] = 4$ a $x[-1] = 1$ je parna zlozka $x_p[1] = \dfrac{4 + 1}{2} = 2{,}5$ a neparna zlozka $x_n[1] = \dfrac{4 - 1}{2} = 1{,}5$.`,
    nepravda: String.raw`Pre signal s $x[1] = 4$ a $x[-1] = 1$ je parna zlozka $x_p[1] = \dfrac{4 - 1}{2} = 1{,}5$ a neparna zlozka $x_n[1] = \dfrac{4 + 1}{2} = 2{,}5$.`
  },
  {
    id: "CZS 0. Parnost priklady 001",
    oblast: "Parna a neparna zlozka",
    podoblast: "Vypocet a priklady",
    pravda: String.raw`Kosinus $\cos(\omega n)$ je parny signal ($x[-n] = x[n]$), kym sinus $\sin(\omega n)$ je neparny signal ($x[-n] = -x[n]$).`,
    nepravda: String.raw`Kosinus $\cos(\omega n)$ je neparny signal ($x[-n] = -x[n]$), kym sinus $\sin(\omega n)$ je parny signal ($x[-n] = x[n]$).`
  },
  // ===== Viacrozmerne signaly a oddelitelnost =====
  {
    id: "CZS 0. Viacrozmerne 001",
    oblast: "Viacrozmerne signaly",
    podoblast: "Definicia a oddelitelnost",
    pravda: String.raw`Viacrozmerny diskretny signal zavisi od viacerych nezavislych premennych — napr. obraz $x[m, n]$ ma dva priestorove indexy.`,
    nepravda: String.raw`Viacrozmerny diskretny signal zavisi iba od jednej premennej — napr. obraz $x[n]$ ma jediny index.`
  },
  {
    id: "CZS 0. Viacrozmerne oddelitelnost 001",
    oblast: "Viacrozmerne signaly",
    podoblast: "Definicia a oddelitelnost",
    pravda: String.raw`Viacrozmerny signal je oddelitelny (separabilny), ak sa da zapisat ako sucin jednorozmernych zloziek: $x[m, n] = x_1[m]\, x_2[n]$.`,
    nepravda: String.raw`Viacrozmerny signal je oddelitelny (separabilny), ak sa da zapisat ako sucet jednorozmernych zloziek: $x[m, n] = x_1[m] + x_2[n]$.`
  },
  {
    id: "CZS 0. Viacrozmerne oddelitelnost 002",
    oblast: "Viacrozmerne signaly",
    podoblast: "Definicia a oddelitelnost",
    pravda: String.raw`Spracovanie oddelitelneho 2D signalu (napr. 2D konvoluciu separabilnym jadrom) mozno rozlozit na postupne 1D operacie po riadkoch a stlpcoch, co znizi vypoctovu narocnost.`,
    nepravda: String.raw`Spracovanie oddelitelneho 2D signalu nemozno rozlozit na 1D operacie, preto je vzdy vypoctovo narocnejsie nez spracovanie neoddelitelneho signalu.`
  }
];

const czsSkuska0CrackOtazky = czsSkuska0CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 0. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 0",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_1_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska0CrackOtazky);

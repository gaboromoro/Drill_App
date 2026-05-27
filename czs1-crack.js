const czsSkuska1CrackData = [
  {
    id: "CZS 1. Zaklady vzorkovacia veta 001",
    oblast: "Zaklady",
    podoblast: "Vzorkovacia veta",
    pravda: String.raw`Pre signal s pasmom $0$ az $f_\mathrm{max} = 6{,}5\,\text{MHz}$ musi byt maximalna vzorkovacia perioda $T_\mathrm{vz}$ mensia ako $\dfrac{1}{2 \cdot 6{,}5\,\text{MHz}} = 76{,}93\,\text{ns}$.`,
    nepravda: String.raw`Pre signal s pasmom $0$ az $f_\mathrm{max} = 6{,}5\,\text{MHz}$ musi byt maximalna vzorkovacia perioda $T_\mathrm{vz}$ mensia ako $\dfrac{1}{6{,}5\,\text{MHz}} = 153{,}85\,\text{ns}$.`
  },
  {
    id: "CZS 1. Zaklady vzorkovacia veta 002",
    oblast: "Zaklady",
    podoblast: "Vzorkovacia veta",
    pravda: String.raw`Pre audio signal s pasmom $0$ az $8\,\text{kHz}$ musi vzorkovacia frekvencia $f_\mathrm{vz}$ splnat $f_\mathrm{vz} > 16\,\text{kHz}$, inak nastane aliasing.`,
    nepravda: String.raw`Pre audio signal s pasmom $0$ az $8\,\text{kHz}$ staci, aby vzorkovacia frekvencia $f_\mathrm{vz}$ splnala $f_\mathrm{vz} > 8\,\text{kHz}$, inak nastane aliasing.`
  },
  {
    id: "CZS 1. Zaklady vzorkovacia veta 003",
    oblast: "Zaklady",
    podoblast: "Vzorkovacia veta",
    pravda: String.raw`Pri vzorkovani $\sin(2\pi f_\mathrm{max}\, t)$ presne na hranicke $f_\mathrm{vz} = 2 f_\mathrm{max}$ padnu vsetky vzorky na priechody nulou a vystupna postupnost je samych nul.`,
    nepravda: String.raw`Pri vzorkovani $\sin(2\pi f_\mathrm{max}\, t)$ presne na hranicke $f_\mathrm{vz} = 2 f_\mathrm{max}$ padnu vsetky vzorky na lokalne maxima a vystupna postupnost ma konstantnu kladnu amplitudu.`
  },
  {
    id: "CZS 1. Zaklady vlastna frekvencia signalu 001",
    oblast: "Zaklady",
    podoblast: "Vlastna frekvencia signalu",
    pravda: String.raw`Pre $s[n] = \sin(250\pi\, n\, T_\mathrm{vz} + 0{,}25\pi)$ pri $T_\mathrm{vz} = 1\,\text{ms}$ plati $250\pi = 2\pi f$, takze vlastna frekvencia signalu je $f = 125\,\text{Hz}$.`,
    nepravda: String.raw`Pre $s[n] = \sin(250\pi\, n\, T_\mathrm{vz} + 0{,}25\pi)$ pri $T_\mathrm{vz} = 1\,\text{ms}$ plati $250\pi = 2\pi f$, takze vlastna frekvencia signalu je $f = 250\,\text{Hz}$.`
  },
  {
    id: "CZS 1. Zaklady normalizovana frekvencia 001",
    oblast: "Zaklady",
    podoblast: "Normalizovana frekvencia",
    pravda: String.raw`Normalizovana frekvencia sa pocita ako $f = F / F_s$, takze pre $F = 250\,\text{Hz}$ a $F_s = 1000\,\text{Hz}$ vyjde $f = 0{,}25$.`,
    nepravda: String.raw`Normalizovana frekvencia sa pocita ako $f = F / F_s$, takze pre $F = 250\,\text{Hz}$ a $F_s = 1000\,\text{Hz}$ vyjde $f = 4$.`
  },
  {
    id: "CZS 1. Zaklady zakladne operacie posun 001",
    oblast: "Zaklady",
    podoblast: "Zakladne operacie",
    pravda: String.raw`Pre $x[n] = \{0;\, 1;\, 2;\, 3\}$ na indexoch $n = 0,1,2,3$ vznikne $y[n] = x[n-2]$ ako $\{0;\, 0;\, 0;\, 1;\, 2;\, 3\}$ na indexoch $n = 0,\ldots,5$; signal je posunuty doprava o dve vzorky.`,
    nepravda: String.raw`Pre $x[n] = \{0;\, 1;\, 2;\, 3\}$ na indexoch $n = 0,1,2,3$ vznikne $y[n] = x[n-2]$ ako $\{2;\, 3;\, 0;\, 0\}$ na indexoch $n = 0,1,2,3$; signal je posunuty dolava o dve vzorky.`
  },
  {
    id: "CZS 1. Zaklady energia a vykon 001",
    oblast: "Zaklady",
    podoblast: "Energia a vykon",
    pravda: String.raw`Jednotkovy skok $u[n]$ ma celkovu energiu $E = \displaystyle\sum_{n=0}^{\infty} 1^2 = \infty$, preto $u[n]$ nie je energeticky signal.`,
    nepravda: String.raw`Jednotkovy skok $u[n]$ ma celkovu energiu $E = \displaystyle\sum_{n=0}^{\infty} 1^2 = 1$, preto $u[n]$ je energeticky signal.`
  },
  {
    id: "CZS 1. Zaklady energia a vykon 002",
    oblast: "Zaklady",
    podoblast: "Energia a vykon",
    pravda: String.raw`Stredny vykon jednotkoveho skoku $u[n]$ je $P = \lim\limits_{N \to \infty} \dfrac{N+1}{2N+1} = \dfrac{1}{2}$, takze $u[n]$ je vykonovy signal.`,
    nepravda: String.raw`Stredny vykon jednotkoveho skoku $u[n]$ je $P = \lim\limits_{N \to \infty} \dfrac{N+1}{2N+1} = 1$, takze $u[n]$ je vykonovy signal.`
  },
  {
    id: "CZS 1. Zaklady periodicita 001",
    oblast: "Zaklady",
    podoblast: "Periodicita diskretneho signalu",
    pravda: String.raw`Signal $s[n] = \cos(n)$ nie je periodicky, lebo neexistuje cele cislo $T_1 \ge 1$, pre ktore by platilo $\cos(n + T_1) = \cos(n)$.`,
    nepravda: String.raw`Signal $s[n] = \cos(n)$ je periodicky s celociselnou periodou $T_1 = 2\pi$ vzoriek, pretoze $\cos(n + 2\pi) = \cos(n)$.`
  },
  {
    id: "CZS 1. Zaklady periodicita 002",
    oblast: "Zaklady",
    podoblast: "Periodicita diskretneho signalu",
    pravda: String.raw`Signal $s[n] = \cos(\pi n)$ je periodicky s periodou $T_1 = 2$ vzorky, lebo $\cos(\pi(n+2)) = \cos(\pi n + 2\pi) = \cos(\pi n)$.`,
    nepravda: String.raw`Signal $s[n] = \cos(\pi n)$ je periodicky s periodou $T_1 = \pi$ vzoriek, lebo $\cos(\pi(n+\pi)) = \cos(\pi n + \pi^2) = \cos(\pi n)$.`
  },
  {
    id: "CZS 1. Zaklady rozklad cez impulzy 001",
    oblast: "Zaklady",
    podoblast: "Rozklad cez jednotkove impulzy",
    pravda: String.raw`Jednotkovy skok $u[n]$ sa da rozpisat ako $u[n] = \displaystyle\sum_{k=0}^{\infty} \delta[n - k]$, teda ako nekonecna suma jednotkovych impulzov posunutych doprava o $k$.`,
    nepravda: String.raw`Jednotkovy skok $u[n]$ sa da rozpisat ako $u[n] = \displaystyle\sum_{k=-\infty}^{0} \delta[n - k]$, teda ako nekonecna suma jednotkovych impulzov posunutych dolava o $k$.`
  },
  {
    id: "CZS 1. Zaklady komplexna exponenciala 001",
    oblast: "Zaklady",
    podoblast: "Komplexna exponenciala",
    pravda: String.raw`Pre $s[n] = a^n$ s $a = r\, e^{j\theta}$ plati Eulerov rozpis $s[n] = r^n \cos(\theta n) + j\, r^n \sin(\theta n)$.`,
    nepravda: String.raw`Pre $s[n] = a^n$ s $a = r\, e^{j\theta}$ plati Eulerov rozpis $s[n] = r \cos(\theta^n) + j\, r \sin(\theta^n)$.`
  }
];

const czsSkuska1CrackOtazky = czsSkuska1CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 1. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 1",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_1_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska1CrackOtazky);

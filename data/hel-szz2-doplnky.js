// SZZ okruh 2 - doplnok: Cebysevove polynomy, wavefolding, prevodne funkcie
// (funkcne menice) a digitalna realizacia AM/RM/FM/PWM.
// Zdroj: HEL_06_Digitalni_realizace.pdf (funkcne menice) + HEL_01.
// Pouziva zdrojovu prezentaciu "HEL Skuska 1" s oblastami "Tvarovanie vlny"
// a "Modulacne metody", ktore hel-szz-okruhy.js premapuje na SZZ okruh 2.
// Kazdy vyrok ma dve nepravdy (50 % pravda / 25 % + 25 % nepravda).
const helSzz2DoplnkyData = [
  // ===== Prevodne funkcie / funkcne menice =====
  {
    id: "HEL 2D. Menice 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Symetricky aj nesymetricky omezovac (Clipper) dosadi maximalnu/minimalnu hodnotu, ked ju vstupny vzorek prekroci.",
    nepravda: "Symetricky aj nesymetricky omezovac (Clipper) dosadi nulu, ked vstupny vzorek prekroci maximalnu/minimalnu hodnotu.",
    nepravda2: "Symetricky aj nesymetricky omezovac (Clipper) pri prekroceni hodnoty signal odraza spat s prevratenou polaritou."
  },
  {
    id: "HEL 2D. Menice 002",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Dvojcestny usmernovac pocita absolutnu hodnotu vstupneho signalu, cim zdvojnasobi zakladny kmitocet.",
    nepravda: "Dvojcestny usmernovac pocita druhu mocninu vstupneho signalu, cim zachova zakladny kmitocet.",
    nepravda2: "Dvojcestny usmernovac pocita absolutnu hodnotu vstupneho signalu, cim zakladny kmitocet znizi na polovicu."
  },
  {
    id: "HEL 2D. Menice 003",
    oblast: "Tvarovanie vlny",
    podoblast: "Funkcne menice",
    pravda: "Prahovanie signalu dosadi 0, ak je absolutna hodnota vstupneho vzorku mensia nez hodnota prahu.",
    nepravda: "Prahovanie signalu dosadi 0, ak je absolutna hodnota vstupneho vzorku vacsia nez hodnota prahu.",
    nepravda2: "Prahovanie signalu dosadi hodnotu prahu, ak je absolutna hodnota vzorku mensia nez prah."
  },
  {
    id: "HEL 2D. Menice 004",
    oblast: "Tvarovanie vlny",
    podoblast: "Shaper",
    pravda: "Aproximacia po castiach lomenou linearnou funkciou (Shaper) definuje prevodnu charakteristiku bodmi zlomu, ale nemozno urcit vztah medzi parametrami charakteristiky a zmenou spektra.",
    nepravda: "Aproximacia po castiach lomenou linearnou funkciou (Shaper) presne urcuje vztah medzi parametrami charakteristiky a zmenou spektra.",
    nepravda2: "Shaper je hladka spojita krivka definovana jedinym polynomom, nie bodmi zlomu."
  },

  // ===== Wavefolding =====
  {
    id: "HEL 2D. Wavefold 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Wavefolding",
    pravda: "Wavefolder (Mirror) pri prekroceni min/max hodnoty dosadi hodnotu s prevratenou polaritou, cim signal 'preklada' a obohacuje spektrum.",
    nepravda: "Wavefolder (Mirror) pri prekroceni min/max hodnoty signal len orezava na konstantnu uroven a spektrum neobohacuje.",
    nepravda2: "Wavefolder (Mirror) pri prekroceni min/max hodnoty dosadi nulu, cim spektrum ochudobni."
  },
  {
    id: "HEL 2D. Wavefold 002",
    oblast: "Tvarovanie vlny",
    podoblast: "Wavefolding",
    pravda: "Na rozdiel od bezneho clippingu wavefolding pri prekroceni prahu signal odraza spat, takze vznika viac novych harmonickych zloziek.",
    nepravda: "Na rozdiel od wavefoldingu clipping pri prekroceni prahu signal odraza spat, takze vznika viac novych harmonickych zloziek.",
    nepravda2: "Clipping aj wavefolding vytvaraju rovnaky pocet novych harmonickych, lisia sa iba ich amplitudou."
  },

  // ===== Polynomialna aproximacia a Cebysevove polynomy =====
  {
    id: "HEL 2D. Polynom 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Polynomialna aproximacia",
    pravda: "Spektrum vystupu tvarovaca s prevodnou charakteristikou aproximovanou polynomom M-teho radu obsahuje 1. az M-tu harmonicku zlozku.",
    nepravda: "Spektrum vystupu tvarovaca s prevodnou charakteristikou aproximovanou polynomom M-teho radu obsahuje iba 1. harmonicku zlozku.",
    nepravda2: "Spektrum vystupu tvarovaca aproximovaneho polynomom M-teho radu obsahuje vsetky harmonicke az do nekonecna."
  },
  {
    id: "HEL 2D. Polynom 002",
    oblast: "Tvarovanie vlny",
    podoblast: "Polynomialna aproximacia",
    pravda: "Koeficienty tvarovacieho polynomu mozno spocitat sustavou linearnych rovnic podla pozadovanych pomerov amplitud vyssich harmonickych k 1. harmonickej.",
    nepravda: "Koeficienty tvarovacieho polynomu nemozno vopred urcit, nastavuju sa iba pokusom a omylom za behu.",
    nepravda2: "Koeficienty tvarovacieho polynomu su vzdy konstantne a nezavisia od pozadovaneho spektra."
  },
  {
    id: "HEL 2D. Cebysev 001",
    oblast: "Tvarovanie vlny",
    podoblast: "Cebysevove polynomy",
    pravda: "Cebysevov polynom k-teho radu Tk(x) generuje prave k-tu harmonicku zlozku, co umoznuje vytvorit signal s presne danym spektralnym obsahom.",
    nepravda: "Cebysevov polynom k-teho radu Tk(x) generuje vsetky harmonicke az po k-tu naraz, takze spektrum nemozno presne urcit.",
    nepravda2: "Cebysevov polynom k-teho radu Tk(x) generuje k-tu subharmonicku (delinu zakladneho kmitoctu)."
  },
  {
    id: "HEL 2D. Cebysev 002",
    oblast: "Tvarovanie vlny",
    podoblast: "Cebysevove polynomy",
    pravda: "Cebysevove polynomy mozno pocitat rekurzivne vztahom Tk+1(x) = 2*x*Tk(x) - Tk-1(x), pricom T0(x)=1 a T1(x)=x.",
    nepravda: "Cebysevove polynomy mozno pocitat rekurzivne vztahom Tk+1(x) = 2*x*Tk(x) + Tk-1(x), pricom T0(x)=0 a T1(x)=1.",
    nepravda2: "Cebysevove polynomy mozno pocitat rekurzivne vztahom Tk+1(x) = x*Tk(x) - 2*Tk-1(x), pricom T0(x)=1 a T1(x)=x."
  },
  {
    id: "HEL 2D. Cebysev 003",
    oblast: "Tvarovanie vlny",
    podoblast: "Cebysevove polynomy",
    pravda: "Pre Cebysevove polynomy plati T2(x)=2x^2-1 a T3(x)=4x^3-3x.",
    nepravda: "Pre Cebysevove polynomy plati T2(x)=2x^2+1 a T3(x)=4x^3+3x.",
    nepravda2: "Pre Cebysevove polynomy plati T2(x)=x^2-1 a T3(x)=3x^3-4x."
  },

  // ===== Digitalna realizacia AM/RM/FM/PWM =====
  {
    id: "HEL 2D. Mod 001",
    oblast: "Modulacne metody",
    podoblast: "Digitalna AM a RM",
    pravda: "Digitalna realizacia amplitudovej a kruhovej modulacie vychadza priamo z rovnice, teda z nasobenia modulacneho a nosneho signalu.",
    nepravda: "Digitalna realizacia amplitudovej a kruhovej modulacie vychadza zo scitania modulacneho a nosneho signalu v protifaze.",
    nepravda2: "Digitalna realizacia amplitudovej a kruhovej modulacie vychadza z konvolucie modulacneho a nosneho signalu."
  },
  {
    id: "HEL 2D. Mod 002",
    oblast: "Modulacne metody",
    podoblast: "Digitalna AM a RM",
    pravda: "Pri kruhovej modulacii (RM) sa nosna nasobi priamo modulacnym signalom, pri amplitudovej (AM) sa nosna nasobi vyrazom (1 + m*cos...).",
    nepravda: "Pri amplitudovej modulacii (AM) sa nosna nasobi priamo modulacnym signalom, pri kruhovej (RM) sa nasobi vyrazom (1 + m*cos...).",
    nepravda2: "Pri RM aj AM sa nosna nasobi rovnakym vyrazom (1 + m*cos...), lisia sa iba indexom modulacie."
  },
  {
    id: "HEL 2D. Mod 003",
    oblast: "Modulacne metody",
    podoblast: "Digitalna FM",
    pravda: "Kmitoctova modulacia s harmonickou nosnou sa digitalne realizuje pomocou fazovej modulacie.",
    nepravda: "Kmitoctova modulacia s harmonickou nosnou sa digitalne realizuje pomocou amplitudovej modulacie.",
    nepravda2: "Kmitoctova modulacia s harmonickou nosnou sa digitalne realizuje pomocou kruhovej modulacie (nasobenia)."
  },
  {
    id: "HEL 2D. Mod 004",
    oblast: "Modulacne metody",
    podoblast: "Digitalna FM",
    pravda: "Kedze FM je nelinearny system, pri generovani treba pouzit nadvzorkovanie alebo metody pasmovo obmedzenych signalov.",
    nepravda: "Kedze FM je linearny system, pri generovani netreba nadvzorkovanie ani pasmovo obmedzene signaly.",
    nepravda2: "FM je sice nelinearny system, ale aliasingu sa zbavime jednoduchym zvysenim bitovej hlbky vystupu."
  },
  {
    id: "HEL 2D. Mod 005",
    oblast: "Modulacne metody",
    podoblast: "Digitalne PWM",
    pravda: "Pulznu sirkovu modulaciu (PWM) mozno digitalne realizovat harmonickou syntezou, posunom jednosmernej zlozky piloveho priebehu (modulo citac) alebo casovym posunom pri DPW/BLIT.",
    nepravda: "Pulznu sirkovu modulaciu (PWM) mozno digitalne realizovat iba zmenou bitovej hlbky vystupneho signalu.",
    nepravda2: "Pulznu sirkovu modulaciu (PWM) mozno digitalne realizovat iba zmenou vzorkovacieho kmitoctu vystupu."
  }
];

const helSzz2DoplnkyOtazky = helSzz2DoplnkyData.map((polozka) => ({
  id: polozka.id,
  tema: `HEL 2 doplnok. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "HEL Skuska 1",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

helOtazky.push(...helSzz2DoplnkyOtazky);

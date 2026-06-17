// ZHA SZZ okruh 8: Rozmiestnenie hracov a posluchacov - konecna rychlost zvuku a ubytok
// intenzity so vzdialenostou; riesenia pri akustickej interpretacii aj pri ozvuceni; sweet spot.
// SZZ otazka: Vysvetlete, jake jsou problemy spojene s rozmistenim hracu a posluchacu
// v prostoru zpusobene konecnou rychlosti zvuku a ubytkem intenzity v zavislosti na vzdalenosti.
// Pojednejte o reseni pri akusticke interpretaci, pri pouziti ozvucovacich systemu. Popiste,
// co ovlivnuje polohu mista s nejlepsim poslechem.
// Zdroj: Ai51R_Sireni, Ai41R_Hlasitost.

const zha8CrackData = [
  {
    id: "ZHA 8. Rychlost 001",
    oblast: "Konecna rychlost zvuku",
    podoblast: "Rychlost",
    pravda: "Rychlost zvuku je priblizne 340 m/s pri 15 stupnoch C; rastie s teplotou.",
    nepravda: "Rychlost zvuku je priblizne 340 km/s pri 15 stupnoch C; klesa s teplotou.",
    nepravda2: "Rychlost zvuku je priblizne 340 m/s a od teploty nezavisi."
  },
  {
    id: "ZHA 8. Rychlost 002",
    oblast: "Konecna rychlost zvuku",
    podoblast: "Latencia",
    pravda: "Hrac rozpozna casovy posun uz okolo 3-10 ms (priblizne 1-3 m) - kriticke pre suhru a nahravanie.",
    nepravda: "Hrac rozpozna casovy posun az nad 1 sekundu (priblizne 340 m) - pre suhru je zanedbatelny.",
    nepravda2: "Hrac rozpozna casovy posun uz okolo 3-10 us (mikrosekund), pod 1 mm vzdialenosti."
  },
  {
    id: "ZHA 8. Ubytok 001",
    oblast: "Ubytok intenzity",
    podoblast: "Gulova vlna",
    pravda: "Gulova vlna (bodovy zdroj): intenzita ubuda s 1/r na druhu.",
    nepravda: "Gulova vlna (bodovy zdroj): intenzita ubuda linearne s 1/r.",
    nepravda2: "Gulova vlna (bodovy zdroj): intenzita sa so vzdialenostou nemeni."
  },
  {
    id: "ZHA 8. Ubytok 002",
    oblast: "Ubytok intenzity",
    podoblast: "Valcova a rovinna vlna",
    pravda: "Valcova vlna (priamkovy zdroj, line array) ubuda s 1/r; rovinna vlna sa so vzdialenostou prakticky nemeni.",
    nepravda: "Valcova vlna ubuda s 1/r na druhu; rovinna vlna ubuda s 1/r.",
    nepravda2: "Valcova vlna sa nemeni; rovinna vlna ubuda s 1/r na druhu."
  },
  {
    id: "ZHA 8. Riesenie 001",
    oblast: "Riesenia",
    podoblast: "Akusticka vs elektricka cesta",
    pravda: "Akusticky sireny zvuk sa neda zosilnit a ma latenciu (340 m/s); elektricky signal (~3.10^8 m/s) sa da zosilnit, delit a upravit.",
    nepravda: "Akusticky sireny zvuk sa da lubovolne zosilnit; elektricky signal ma vacsiu latenciu nez akusticky.",
    nepravda2: "Akusticky aj elektricky zvuk sa siria rovnakou rychlostou 340 m/s a oba sa daju zosilnit."
  },
  {
    id: "ZHA 8. Riesenie 002",
    oblast: "Riesenia",
    podoblast: "Ozvucovacie systemy",
    pravda: "Ozvucovacie systemy riesia ubytok a smerovanie (line array, subwoofer), ale pridavaju latenciu spracovania.",
    nepravda: "Ozvucovacie systemy odstrania latenciu uplne, lebo zvuk sa siri okamzite.",
    nepravda2: "Ozvucovacie systemy zvysuju ubytok intenzity so vzdialenostou oproti akustickemu sireniu."
  },
  {
    id: "ZHA 8. Riesenie 003",
    oblast: "Riesenia",
    podoblast: "Akusticka interpretacia",
    pravda: "Pri akustickej interpretacii: byt blizko a v najlepsom uhle nastroja = maximum priameho zvuku; pozor na nevyrovnanost hlasov.",
    nepravda: "Pri akustickej interpretacii: byt co najdalej od nastroja = maximum priameho zvuku.",
    nepravda2: "Pri akustickej interpretacii nezalezi na uhle ani vzdialenosti, len na hlasitosti hry."
  },
  {
    id: "ZHA 8. Sweet spot 001",
    oblast: "Sweet spot",
    podoblast: "Definicia",
    pravda: "Sweet spot = miesto najlepsieho posluchu; pri stereo a surround je jeho velkost obmedzena.",
    nepravda: "Sweet spot = miesto s najvyssou hlasitostou; pri stereo a surround pokryva cely priestor.",
    nepravda2: "Sweet spot = miesto s najdlhsim dozvukom; je rovnako velke pri mono aj stereo."
  },
  {
    id: "ZHA 8. Sweet spot 002",
    oblast: "Sweet spot",
    podoblast: "Co ovplyvnuje polohu",
    pravda: "Polohu najlepsieho posluchu urcuju rozdiely vzdialenosti k zdrojom (cas/faza) a pomer priameho a odrazeneho zvuku.",
    nepravda: "Polohu najlepsieho posluchu urcuje len celkova hlasitost, nie casove ani fazove rozdiely.",
    nepravda2: "Polohu najlepsieho posluchu urcuje vyhradne teplota vzduchu v sale."
  },
  {
    id: "ZHA 8. Smerove slysanie 001",
    oblast: "Sweet spot",
    podoblast: "Binauralne slysanie",
    pravda: "Smer zdroja urcujeme z rozdielu intenzit (akusticky tien hlavy) a casoveho/fazoveho rozdielu medzi usami.",
    nepravda: "Smer zdroja urcujeme len z absolutnej hlasitosti v jednom uchu.",
    nepravda2: "Smer zdroja urcujeme z dlzky dozvuku, nie z rozdielu medzi usami."
  }
];

const zha8CrackOtazky = zha8CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 8. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "8. Sirenie zvuku a rozmiestnenie",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai51R_Sireni.pdf / Ai41R_Hlasitost.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha8CrackOtazky);

// ZHA SZZ okruh 1: Zakladne vlastnosti hudobneho tonu a ich vztah k fyzikalnym velicinam.
// SZZ otazka: Jake jsou zakladni vlastnosti hudebniho tonu? Dejte tyto vlastnosti do
// souvislosti s fyzikalnimi velicinami charakterizujicimi zvuk.
// Zdroj: Ai11R_Uvod, Ai21R_KmityAVlny, Ai41R_Hlasitost.

const zha1CrackData = [
  {
    id: "ZHA 1. Vlastnosti 001",
    oblast: "Vlastnosti tonu a veliciny",
    podoblast: "Prehlad",
    pravda: "Styri zakladne vlastnosti tonu: vyska, hlasitost, farba (timbre), dlzka.",
    nepravda: "Styri zakladne vlastnosti tonu: vyska, hlasitost, dozvuk, dlzka.",
    nepravda2: "Styri zakladne vlastnosti tonu: vyska, intenzita, farba, vzdialenost."
  },
  {
    id: "ZHA 1. Vlastnosti 002",
    oblast: "Vlastnosti tonu a veliciny",
    podoblast: "Vyska",
    pravda: "Vyska tonu zodpoveda frekvencii (Hz); dvojnasobna frekvencia = oktava.",
    nepravda: "Vyska tonu zodpoveda amplitude; dvojnasobna amplituda = oktava.",
    nepravda2: "Vyska tonu zodpoveda frekvencii (Hz); dvojnasobna frekvencia = kvinta."
  },
  {
    id: "ZHA 1. Vlastnosti 003",
    oblast: "Vlastnosti tonu a veliciny",
    podoblast: "Hlasitost",
    pravda: "Hlasitost zodpoveda intenzite / akustickemu tlaku (amplitude); meria sa v dB.",
    nepravda: "Hlasitost zodpoveda frekvencii kmitania; meria sa v Hz.",
    nepravda2: "Hlasitost zodpoveda dlzke periody; meria sa v sekundach."
  },
  {
    id: "ZHA 1. Vlastnosti 004",
    oblast: "Vlastnosti tonu a veliciny",
    podoblast: "Farba",
    pravda: "Farba tonu zodpoveda frekvencnemu spektru - zlozeniu vyssich harmonickych.",
    nepravda: "Farba tonu zodpoveda amplitude fundamentu - sile zakladneho tonu.",
    nepravda2: "Farba tonu zodpoveda dlzke dozvuku v priestore."
  },
  {
    id: "ZHA 1. Vlastnosti 005",
    oblast: "Vlastnosti tonu a veliciny",
    podoblast: "Dlzka",
    pravda: "Dlzka tonu zodpoveda casu trvania (sekundy).",
    nepravda: "Dlzka tonu zodpoveda poctu vyssich harmonickych.",
    nepravda2: "Dlzka tonu zodpoveda velkosti akustickeho tlaku."
  },
  {
    id: "ZHA 1. Vlastnosti 006",
    oblast: "Fyzikalne veliciny",
    podoblast: "Ton a hluk",
    pravda: "Ton = periodicke kmitanie (urcita vyska); hluk = neperiodicke / nahodne kmitanie.",
    nepravda: "Ton = neperiodicke kmitanie; hluk = periodicke kmitanie s urcitou vyskou.",
    nepravda2: "Ton aj hluk su periodicke; lisia sa len amplitudou."
  },
  {
    id: "ZHA 1. Vlastnosti 007",
    oblast: "Fyzikalne veliciny",
    podoblast: "Akusticke veliciny",
    pravda: "Akusticky tlak = odchylka od atmosferickeho tlaku; intenzita = akusticky vykon na jednotku plochy.",
    nepravda: "Akusticky tlak = atmosfericky tlak v miestnosti; intenzita = akusticky vykon krat plocha.",
    nepravda2: "Akusticky tlak = odchylka od atmosferickeho tlaku; intenzita = energia za cas (vykon)."
  },
  {
    id: "ZHA 1. Vlastnosti 008",
    oblast: "Fyzikalne veliciny",
    podoblast: "Vnimanie",
    pravda: "Vnimanie je logaritmicke (Weber-Fechner): nasobok podnetu = linearny prirastok vnemu, preto sa zavadza dB.",
    nepravda: "Vnimanie je linearne: dvojnasobok podnetu = dvojnasobok vnemu, preto sa zavadza dB.",
    nepravda2: "Vnimanie je exponencialne: linearny prirastok podnetu = nasobok vnemu, preto sa zavadza dB."
  },
  {
    id: "ZHA 1. Vlastnosti 009",
    oblast: "Fyzikalne veliciny",
    podoblast: "Prelinanie parametrov",
    pravda: "Vlastnosti sa prelinaju: napr. sila uderu na klavesu meni obalku, transienty, alikvoty aj ladenie - nejde o ciste oddelene veliciny.",
    nepravda: "Kazda vlastnost zodpoveda presne jednej velicine 1:1; sila uderu meni iba hlasitost.",
    nepravda2: "Vlastnosti sa prelinaju: napr. sila uderu meni iba dlzku tonu, na farbu ani ladenie nema vplyv."
  },
  {
    id: "ZHA 1. Vlastnosti 010",
    oblast: "Fyzikalne veliciny",
    podoblast: "Vnimanie vysky",
    pravda: "Vnem vysky nezavisi len od frekvencie: pri nizkych tonoch vnimana vyska so zvysenim hlasitosti klesa.",
    nepravda: "Vnem vysky zavisi vyhradne od frekvencie a od hlasitosti je uplne nezavisly.",
    nepravda2: "Vnem vysky nezavisi len od frekvencie: pri nizkych tonoch vnimana vyska so zvysenim hlasitosti rastie."
  }
];

const zha1CrackOtazky = zha1CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 1. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "1. Vlastnosti tonu",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai11R_Uvod.pdf / Ai21R_KmityAVlny.pdf / Ai41R_Hlasitost.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha1CrackOtazky);

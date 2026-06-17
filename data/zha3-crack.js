// ZHA SZZ okruh 3: Frekvencna a casova reprezentacia tonu; prejav hlasitosti, vysky, farby,
// vibrata a tremola v kazdej reprezentacii.
// SZZ otazka: Pojednejte o frekvencni a casove reprezentaci hudebniho tonu. Jak se projevi
// hlasitost, vyska, barva, vibrato a tremolo pri grafickem znazorneni kazde z techto reprezentaci?
// Zdroj: Ai31R_CasoveVlastnosti, Ai31R_Spektrum.

const zha3CrackData = [
  {
    id: "ZHA 3. Reprezentacie 001",
    oblast: "Dve reprezentacie",
    podoblast: "Definicia",
    pravda: "Casova reprezentacia = priebeh amplitudy v case (waveform/obalka); frekvencna = spektrum (amplituda vs frekvencia).",
    nepravda: "Casova reprezentacia = spektrum (amplituda vs frekvencia); frekvencna = priebeh amplitudy v case.",
    nepravda2: "Casova aj frekvencna reprezentacia zobrazuju amplitudu v zavislosti od casu."
  },
  {
    id: "ZHA 3. Reprezentacie 002",
    oblast: "Hlasitost",
    podoblast: "Prejav",
    pravda: "Hlasitost: casovo = vacsia amplituda priebehu; spektralne = vyssie amplitudy zloziek.",
    nepravda: "Hlasitost: casovo = kratsia perioda priebehu; spektralne = posun zloziek doprava.",
    nepravda2: "Hlasitost: casovo = vacsia amplituda; spektralne = viac harmonickych zloziek (sirsie spektrum)."
  },
  {
    id: "ZHA 3. Reprezentacie 003",
    oblast: "Vyska",
    podoblast: "Prejav",
    pravda: "Vyska: casovo = kratsia perioda; spektralne = posun fundamentu (a harmonickych) k vyssej frekvencii.",
    nepravda: "Vyska: casovo = vacsia amplituda; spektralne = vyssie amplitudy zloziek.",
    nepravda2: "Vyska: casovo = dlhsia perioda; spektralne = posun fundamentu k vyssej frekvencii."
  },
  {
    id: "ZHA 3. Reprezentacie 004",
    oblast: "Farba",
    podoblast: "Prejav",
    pravda: "Farba: casovo = tvar / zlozitost priebehu vlny; spektralne = pomer amplitud harmonickych.",
    nepravda: "Farba: casovo = amplituda priebehu; spektralne = poloha fundamentu.",
    nepravda2: "Farba: casovo = perioda priebehu; spektralne = pomer amplitud harmonickych."
  },
  {
    id: "ZHA 3. Reprezentacie 005",
    oblast: "Vibrato",
    podoblast: "Prejav",
    pravda: "Vibrato = periodicka zmena vysky (frekvencie); spektralne kolise poloha zloziek (FM), casovo kolise perioda.",
    nepravda: "Vibrato = periodicka zmena intenzity (amplitudy); spektralne kolise amplituda zloziek (AM).",
    nepravda2: "Vibrato = periodicka zmena vysky; casovo aj spektralne sa prejavi len ako kolisanie amplitudy."
  },
  {
    id: "ZHA 3. Reprezentacie 006",
    oblast: "Tremolo",
    podoblast: "Prejav",
    pravda: "Tremolo = periodicka zmena intenzity (amplitudy); casovo aj spektralne kolise amplituda (AM).",
    nepravda: "Tremolo = periodicka zmena vysky (frekvencie); spektralne kolise poloha zloziek (FM).",
    nepravda2: "Tremolo = periodicka zmena farby; spektralne kolise pocet harmonickych."
  },
  {
    id: "ZHA 3. Reprezentacie 007",
    oblast: "Vibrato a tremolo",
    podoblast: "Rozlisenie",
    pravda: "Vibrato meni vysku, tremolo meni intenzitu - su to rozne veci, ktore sa nesmu zamienat.",
    nepravda: "Vibrato meni intenzitu, tremolo meni vysku.",
    nepravda2: "Vibrato aj tremolo menia vysku tonu, lisia sa len rychlostou kolisania."
  },
  {
    id: "ZHA 3. Obalka 001",
    oblast: "Casova obalka",
    podoblast: "ADSR",
    pravda: "ADSR obalka: Attack (nabeh), Decay (pokles), Sustain (drzanie), Release (doznenie) - casova charakteristika tonu.",
    nepravda: "ADSR obalka: Amplitude, Decay, Spektrum, Release - frekvencna charakteristika tonu.",
    nepravda2: "ADSR obalka: Attack, Delay, Sustain, Reverb - casova charakteristika tonu."
  },
  {
    id: "ZHA 3. Obalka 002",
    oblast: "Casova obalka",
    podoblast: "Attack",
    pravda: "Attack je spektralne najzlozitejsia cast tonu - obsahuje transienty.",
    nepravda: "Sustain je spektralne najzlozitejsia cast tonu - obsahuje transienty.",
    nepravda2: "Attack je spektralne najjednoduchsia cast tonu - cisty sinus bez transientov."
  },
  {
    id: "ZHA 3. Obalka 003",
    oblast: "Casova obalka",
    podoblast: "Sustain a Release",
    pravda: "Sustain = konstantna amplituda; jej dlzka zavisi od drzania klavesy / tahu slacika. Release netreba zamienat s dozvukom priestoru.",
    nepravda: "Sustain = klesajuca amplituda; Release je totozny s dozvukom priestoru.",
    nepravda2: "Sustain = rastuca amplituda; jej dlzka zavisi od sily uderu, nie od drzania klavesy."
  }
];

const zha3CrackOtazky = zha3CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZHA 3. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "3. Frekvencna a casova reprezentacia",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Ai31R_CasoveVlastnosti.pdf / Ai31R_Spektrum.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zhaOtazky.push(...zha3CrackOtazky);

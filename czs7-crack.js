const czsSkuska7CrackData = [
  // ===== STFT definicia =====
  {
    id: "CZS 7. STFT definicia 001",
    oblast: "STFT",
    podoblast: "Definicia",
    pravda: String.raw`STFT je $S_{\mathrm{STFT}}(e^{j\omega}, m) = \displaystyle\sum_{n=-\infty}^{\infty} s[n]\, w[n-m]\, e^{-j\omega n}$ — v podstate DTFT zo sucinu useku signalu s oknom.`,
    nepravda: String.raw`STFT je $S_{\mathrm{STFT}}(e^{j\omega}, m) = \displaystyle\sum_{n=-\infty}^{\infty} s[n]\, w[n-m]\, e^{+j\omega n}$ — v podstate inverzna DTFT bez okna.`
  },
  {
    id: "CZS 7. STFT definicia 002",
    oblast: "STFT",
    podoblast: "Definicia",
    pravda: String.raw`STFT realizuje DTFT z nasobenia useku signalu priebehom vhodneho okna $w[n-m]$ posunuteho na poziciu $m$.`,
    nepravda: String.raw`STFT realizuje DTFT z konvolucie celeho signalu s oknom, nezavisle od pozicie $m$.`
  },
  {
    id: "CZS 7. STFT definicia 003",
    oblast: "STFT",
    podoblast: "Definicia",
    pravda: String.raw`Casovy posun okna o $m$ sa v spektre prejavi ako fazovy clen $e^{-j\omega m}$ (vlastnost posunu v case $s[n-k] \Leftrightarrow e^{-jk\omega} S(e^{j\omega})$).`,
    nepravda: String.raw`Casovy posun okna o $m$ sa v spektre prejavi ako zmena amplitudy o faktor $m$, faza ostava nezmenena.`
  },
  {
    id: "CZS 7. STFT definicia 004",
    oblast: "STFT",
    podoblast: "Definicia",
    pravda: String.raw`Inverzna transformacia ISTFT je problematicka, ale riesitelna — okna sa prekryvaju a tento prekryv treba kompenzovat.`,
    nepravda: String.raw`Inverzna transformacia ISTFT je triviialna a jednoznacna, pretoze okna sa nikdy neprekryvaju.`
  },
  {
    id: "CZS 7. STFT definicia 005",
    oblast: "STFT",
    podoblast: "Motivacia",
    pravda: String.raw`STFT dava casovo-frekvencny popis: ukazuje, ako sa spektrum signalu meni v case, na rozdiel od DTFT/DFT, ktore davaju jedine spektrum za cely signal.`,
    nepravda: String.raw`STFT dava jedine globalne spektrum za cely signal, rovnako ako DTFT, iba pouziva ine okno.`
  },

  // ===== Spectral leakage =====
  {
    id: "CZS 7. Leakage 001",
    oblast: "Spektralny unik",
    podoblast: "Spectral leakage",
    pravda: String.raw`Spektralny unik (spectral leakage) je dosledok oknoveho vyrezu signalu — sucin periodickeho signalu s oknom konecnej dlzky rozmaze spektralnu ciaru do postrannych lalokov.`,
    nepravda: String.raw`Spektralny unik (spectral leakage) vznika iba pri nekonecne dlhom signali a oknovanie ho uplne odstrani.`
  },
  {
    id: "CZS 7. Leakage 002",
    oblast: "Spektralny unik",
    podoblast: "Spectral leakage",
    pravda: String.raw`Pri DFT k uniku nedoide, ak je perioda signalu celociselnym nasobkom dlzky okna; ak nie je, spektralna ciara unika do postrannych lalokov.`,
    nepravda: String.raw`Pri DFT k uniku doide vzdy, aj ked je perioda signalu celociselnym nasobkom dlzky okna.`
  },
  {
    id: "CZS 7. Leakage 003",
    oblast: "Spektralny unik",
    podoblast: "Spectral leakage",
    pravda: String.raw`Signal $x[n] = \sin(2\pi \cdot 4 \cdot n/N)$ pri $N = 16$ ma celociselny pocet period v okne, takze jeho DFT spektrum je ostra ciara; $\sin(2\pi \cdot 4{,}5 \cdot n/N)$ necely pocet, takze unika.`,
    nepravda: String.raw`Signal $x[n] = \sin(2\pi \cdot 4{,}5 \cdot n/N)$ pri $N = 16$ ma celociselny pocet period v okne, takze jeho DFT spektrum je ostra ciara bez uniku.`
  },

  // ===== Okenne funkcie =====
  {
    id: "CZS 7. Okna 001",
    oblast: "Okenne funkcie",
    podoblast: "Pravouhle okno",
    pravda: String.raw`DTFT pravouhleho okna dlzky $N$ je $W_{\mathrm{box}}(e^{j\omega}) = \dfrac{\sin(\omega N/2)}{\sin(\omega/2)}$ (Dirichletove jadro) — uzky hlavny lalok, ale velke postranne laloky.`,
    nepravda: String.raw`DTFT pravouhleho okna dlzky $N$ je $W_{\mathrm{box}}(e^{j\omega}) = e^{-\omega^2 N}$ (Gaussova obalka) — bez postrannych lalokov.`
  },
  {
    id: "CZS 7. Okna 002",
    oblast: "Okenne funkcie",
    podoblast: "Pravouhle okno",
    pravda: String.raw`Pravouhle okno ma zo vsetkych okien najuzsi hlavny lalok, ale najvyssie postranne laloky (najhorsi spektralny unik).`,
    nepravda: String.raw`Pravouhle okno ma zo vsetkych okien najsirsi hlavny lalok a najnizsie postranne laloky (najlepsie potlacenie uniku).`
  },
  {
    id: "CZS 7. Okna 003",
    oblast: "Okenne funkcie",
    podoblast: "Hammingovo a Hannovo okno",
    pravda: String.raw`Hammingovo aj Hannovo okno maju tvar $w[n] = a_0 - (1 - a_0)\cos\dfrac{2\pi n}{N-1}$; Hamming pouziva $a_0 = 0{,}54$, Hann $a_0 = 0{,}5$.`,
    nepravda: String.raw`Hammingovo aj Hannovo okno maju tvar $w[n] = a_0 - (1 - a_0)\cos\dfrac{2\pi n}{N-1}$; Hamming pouziva $a_0 = 0{,}5$, Hann $a_0 = 0{,}54$.`
  },
  {
    id: "CZS 7. Okna 004",
    oblast: "Okenne funkcie",
    podoblast: "Hammingovo a Hannovo okno",
    pravda: String.raw`Nelinearne okna (Hamming, Hann) maju oproti pravouhlemu sirsi hlavny lalok, ale vyrazne vacsie potlacenie postrannych lalokov.`,
    nepravda: String.raw`Nelinearne okna (Hamming, Hann) maju oproti pravouhlemu uzsi hlavny lalok aj nizsie postranne laloky zaroven.`
  },
  {
    id: "CZS 7. Okna 005",
    oblast: "Okenne funkcie",
    podoblast: "Bartlettovo a Gaussovo okno",
    pravda: String.raw`Bartlettovo okno ma trojuholnikovy tvar, Gaussovo okno tvar $w[n] = e^{-\frac{1}{2}\left(\frac{n - (N-1)/2}{\sigma (N-1)/2}\right)^2}$ s parametrom $\sigma$.`,
    nepravda: String.raw`Bartlettovo okno ma obdlznikovy (konstantny) tvar a Gaussovo okno je linearne klesajuca rampa.`
  },
  {
    id: "CZS 7. Okna 006",
    oblast: "Okenne funkcie",
    podoblast: "Kompromis okna",
    pravda: String.raw`Volba okna je kompromis: uzsi hlavny lalok znamena lepsie frekvencne rozlisenie, nizsie postranne laloky znamenaju mensi spektralny unik — nedaju sa dosiahnut oba naraz.`,
    nepravda: String.raw`Idealne okno dosahuje sucasne najuzsi hlavny lalok aj najnizsie postranne laloky, takze ziadny kompromis nie je potrebny.`
  },

  // ===== Spektrogram =====
  {
    id: "CZS 7. Spektrogram 001",
    oblast: "Spektrogram",
    podoblast: "Vypocet",
    pravda: String.raw`Spektrogram vznikne tak, ze signal sa rozdeli na prekryvajuce sa segmenty, kazdy sa vahuje oknom a na kazdy sa aplikuje DFT.`,
    nepravda: String.raw`Spektrogram vznikne tak, ze na cely signal sa naraz aplikuje jedina DFT bez segmentacie a okien.`
  },
  {
    id: "CZS 7. Spektrogram 002",
    oblast: "Spektrogram",
    podoblast: "Zobrazenie",
    pravda: String.raw`V spektrograme je os $x$ cas, os $y$ frekvencia a farba (hodnota) vyjadruje vykon danej frekvencnej zlozky (zvycajne v dB).`,
    nepravda: String.raw`V spektrograme je os $x$ frekvencia, os $y$ amplituda a farba vyjadruje cas vzniku danej zlozky.`
  },
  {
    id: "CZS 7. Spektrogram 003",
    oblast: "Spektrogram",
    podoblast: "Vypocet",
    pravda: String.raw`Z DFT segmentu sa pocita vykonove spektrum $\tfrac{1}{N}|S[k]|^2$ a zvycajne sa normalizuje delenim maximalnou zlozkou.`,
    nepravda: String.raw`Z DFT segmentu sa pocita iba faza $\arg S[k]$, ktora sa priamo vykresluje ako vykon.`
  },

  // ===== Periodogram a PSD =====
  {
    id: "CZS 7. PSD 001",
    oblast: "Periodogram a PSD",
    podoblast: "Definicia PSD",
    pravda: String.raw`Spektralna hustota vykonu (PSD) vyjadruje vykon signalu pripadajuci na jednotku frekvencie; pre diskretne signaly sa uvadza jej odhad.`,
    nepravda: String.raw`Spektralna hustota vykonu (PSD) vyjadruje celkovu energiu signalu v case a pre diskretne signaly je vzdy presna, nie odhad.`
  },
  {
    id: "CZS 7. PSD 002",
    oblast: "Periodogram a PSD",
    podoblast: "Periodogram",
    pravda: String.raw`Periodogram je odhad PSD: $P[k] = \dfrac{1}{N}|S[k]|^2 = \dfrac{1}{N}\left|\displaystyle\sum_{n=0}^{N-1} s[n]\, e^{-j2\pi kn/N}\right|^2$.`,
    nepravda: String.raw`Periodogram je odhad PSD: $P[k] = N\,|S[k]|^2 = N\left|\displaystyle\sum_{n=0}^{N-1} s[n]\, e^{-j2\pi kn/N}\right|^2$.`
  },
  {
    id: "CZS 7. PSD 003",
    oblast: "Periodogram a PSD",
    podoblast: "Periodogram",
    pravda: String.raw`Periodogram (odhad PSD) ma oproti klasickemu spektru lepsie vlastnosti pri praci s nahodnymi signalmi.`,
    nepravda: String.raw`Periodogram (odhad PSD) ma oproti klasickemu spektru horsie vlastnosti pri praci s nahodnymi signalmi, preto sa pre sum nepouziva.`
  },
  {
    id: "CZS 7. PSD 004",
    oblast: "Periodogram a PSD",
    podoblast: "Vyjadrenie v dB",
    pravda: String.raw`Pri vyjadreni urovne v dB uz nezalezi, ci ide o vykon alebo amplitudu, lebo $20\log_{10}|S[k]| = 10\log_{10}|S[k]|^2$.`,
    nepravda: String.raw`Pri vyjadreni urovne v dB plati $20\log_{10}|S[k]| = 20\log_{10}|S[k]|^2$, takze vykon a amplituda davaju vzdy odlisne dB hodnoty.`
  },

  // ===== Parseval pre DFT =====
  {
    id: "CZS 7. Parseval 001",
    oblast: "Parsevalov teorem",
    podoblast: "Parseval pre DFT",
    pravda: String.raw`Parsevalov teorem pre (neunitarnu) DFT: $\displaystyle\sum_{n=0}^{N-1}|s[n]|^2 = \dfrac{1}{N}\sum_{k=0}^{N-1}|S[k]|^2$ — energia v case sa rovna energii v spektre.`,
    nepravda: String.raw`Parsevalov teorem pre (neunitarnu) DFT: $\displaystyle\sum_{n=0}^{N-1}|s[n]|^2 = N\sum_{k=0}^{N-1}|S[k]|^2$ — energia v spektre je $N$-krat vacsia.`
  },
  {
    id: "CZS 7. Parseval 002",
    oblast: "Parsevalov teorem",
    podoblast: "Parseval pre DFT",
    pravda: String.raw`Faktor $\tfrac{1}{N}$ na frekvencnej strane kompenzuje skalovanie koeficientov neunitarnej DFT tak, aby energia vyjadrena v spektre bola rovna energii v case.`,
    nepravda: String.raw`Faktor $\tfrac{1}{N}$ na frekvencnej strane je len kozmeticky a na rovnost energii v case a spektre nema vplyv.`
  }
];

const czsSkuska7CrackOtazky = czsSkuska7CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `CZS 7. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 7",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "CZS_7_03.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska7CrackOtazky);

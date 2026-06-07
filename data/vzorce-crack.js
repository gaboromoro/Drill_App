// Okruh "Vzorce" - maximalne strucne vzorcove crack otazky (label: vzorec).
// Kazda otazka patri do okruhu "Vzorce" (prezentacia) AJ do svojej temy
// pomocou pola `okruhy` (napr. ["CZS 5"]). Tvori vzorcovy protiklad k
// slovnym (popisnym) otazkam, ktore uz su v jednotlivych CZS okruhoch.

const vzorceData = [
  // ===== Kvantizacia (CZS 0) =====
  {
    oblast: "Kvantizacia", okruh: "CZS 0",
    pravda: String.raw`Kvantovacie hladiny ($N$ bitov): $L = 2^{N}$`,
    nepravda: String.raw`Kvantovacie hladiny ($N$ bitov): $L = N^{2}$`
  },
  {
    oblast: "Kvantizacia", okruh: "CZS 0",
    pravda: String.raw`Kvantovaci krok: $\Delta = \dfrac{\text{rozsah}}{2^{N}}$`,
    nepravda: String.raw`Kvantovaci krok: $\Delta = \dfrac{2^{N}}{\text{rozsah}}$`
  },
  {
    oblast: "Kvantizacia", okruh: "CZS 0",
    pravda: String.raw`SNR kvantizacie: $\mathrm{SNR} \approx 6{,}02\,N + 1{,}76\ \text{dB}$`,
    nepravda: String.raw`SNR kvantizacie: $\mathrm{SNR} \approx 1{,}76\,N + 6{,}02\ \text{dB}$`
  },

  // ===== Parna a neparna zlozka (CZS 0) =====
  {
    oblast: "Parna a neparna zlozka", okruh: "CZS 0",
    pravda: String.raw`Parna zlozka: $x_p[n] = \dfrac{x[n] + x[-n]}{2}$`,
    nepravda: String.raw`Parna zlozka: $x_p[n] = \dfrac{x[n] - x[-n]}{2}$`
  },
  {
    oblast: "Parna a neparna zlozka", okruh: "CZS 0",
    pravda: String.raw`Neparna zlozka: $x_n[n] = \dfrac{x[n] - x[-n]}{2}$`,
    nepravda: String.raw`Neparna zlozka: $x_n[n] = \dfrac{x[n] + x[-n]}{2}$`
  },

  // ===== Vzorkovanie a frekvencia (CZS 1) =====
  {
    oblast: "Vzorkovanie a frekvencia", okruh: "CZS 1",
    pravda: String.raw`Vzorkovacia veta: $f_{vz} > 2 f_{max}$`,
    nepravda: String.raw`Vzorkovacia veta: $f_{vz} > \tfrac{1}{2} f_{max}$`
  },
  {
    oblast: "Vzorkovanie a frekvencia", okruh: "CZS 1",
    pravda: String.raw`Normalizovana frekvencia: $f = \dfrac{F}{F_s}$`,
    nepravda: String.raw`Normalizovana frekvencia: $f = \dfrac{F_s}{F}$`
  },
  {
    oblast: "Vzorkovanie a frekvencia", okruh: "CZS 1",
    pravda: String.raw`Uhlova normalizovana frekvencia: $\omega = \dfrac{2\pi F}{F_s}$`,
    nepravda: String.raw`Uhlova normalizovana frekvencia: $\omega = \dfrac{F}{2\pi F_s}$`
  },

  // ===== Energia a vykon (CZS 1) =====
  {
    oblast: "Energia a vykon", okruh: "CZS 1",
    pravda: String.raw`Energia signalu: $E = \displaystyle\sum_{n=-\infty}^{\infty} |x[n]|^{2}$`,
    nepravda: String.raw`Energia signalu: $E = \displaystyle\sum_{n=-\infty}^{\infty} |x[n]|$`
  },
  {
    oblast: "Energia a vykon", okruh: "CZS 1",
    pravda: String.raw`Stredny vykon: $P = \displaystyle\lim_{N\to\infty}\dfrac{1}{2N+1}\sum_{n=-N}^{N} |x[n]|^{2}$`,
    nepravda: String.raw`Stredny vykon: $P = \displaystyle\sum_{n=-\infty}^{\infty} |x[n]|^{2}$`
  },
  {
    oblast: "Energia a vykon", okruh: "CZS 1",
    pravda: String.raw`Stredny vykon harmonickeho $A\cos(\omega n + \varphi)$: $P = \dfrac{A^{2}}{2}$`,
    nepravda: String.raw`Stredny vykon harmonickeho $A\cos(\omega n + \varphi)$: $P = A^{2}$`
  },

  // ===== Korelacia (CZS 2) =====
  {
    oblast: "Korelacia", okruh: "CZS 2",
    pravda: String.raw`Krizova korelacia: $r_{xy}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,y[n-m]$`,
    nepravda: String.raw`Krizova korelacia: $r_{xy}[m] = x[m]\,y[m]$`
  },
  {
    oblast: "Korelacia", okruh: "CZS 2",
    pravda: String.raw`Autokorelacia: $r_{xx}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,x[n-m]$`,
    nepravda: String.raw`Autokorelacia: $r_{xx}[m] = \displaystyle\sum_{n=-\infty}^{\infty} x[n] + x[n-m]$`
  },
  {
    oblast: "Korelacia", okruh: "CZS 2",
    pravda: String.raw`Autokorelacia v nule: $r_{xx}[0] = \displaystyle\sum_{n} x[n]^{2} = E$`,
    nepravda: String.raw`Autokorelacia v nule: $r_{xx}[0] = \displaystyle\sum_{n} x[n]$`
  },

  // ===== Konvolucia a LTI (CZS 3) =====
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`Diskretna konvolucia: $y[n] = \displaystyle\sum_{k=-\infty}^{\infty} x[k]\,h[n-k]$`,
    nepravda: String.raw`Diskretna konvolucia: $y[n] = \displaystyle\sum_{k=-\infty}^{\infty} x[k]\,h[n+k]$`
  },
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`Dlzka konvolucie: $N_y = N_x + N_h - 1$`,
    nepravda: String.raw`Dlzka konvolucie: $N_y = N_x \cdot N_h - 1$`
  },
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`Vystup LTI systemu: $y[n] = x[n] * h[n]$`,
    nepravda: String.raw`Vystup LTI systemu: $y[n] = x[n] \cdot h[n]$`
  },
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`BIBO stabilita LTI: $\displaystyle\sum_{n=-\infty}^{\infty} |h[n]| < \infty$`,
    nepravda: String.raw`BIBO stabilita LTI: $\displaystyle\sum_{n=-\infty}^{\infty} h[n]^{2} < \infty$`
  },
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`Kauzalita LTI: $h[n] = 0$ pre $n < 0$`,
    nepravda: String.raw`Kauzalita LTI: $h[n] = 0$ pre $n > 0$`
  },
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`Seriove spojenie LTI: $h[n] = h_1[n] * h_2[n]$`,
    nepravda: String.raw`Seriove spojenie LTI: $h[n] = h_1[n] + h_2[n]$`
  },
  {
    oblast: "Konvolucia a LTI", okruh: "CZS 3",
    pravda: String.raw`Paralelne spojenie LTI: $h[n] = h_1[n] + h_2[n]$`,
    nepravda: String.raw`Paralelne spojenie LTI: $h[n] = h_1[n] * h_2[n]$`
  },

  // ===== Z-transformacia (CZS 4) =====
  {
    oblast: "Z-transformacia", okruh: "CZS 4",
    pravda: String.raw`Z-transformacia: $X(z) = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,z^{-n}$`,
    nepravda: String.raw`Z-transformacia: $X(z) = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,z^{n}$`
  },
  {
    oblast: "Z-transformacia", okruh: "CZS 4",
    pravda: String.raw`Jednostranna Z-transformacia: $X(z) = \displaystyle\sum_{n=0}^{\infty} x[n]\,z^{-n}$`,
    nepravda: String.raw`Jednostranna Z-transformacia: $X(z) = \displaystyle\sum_{n=0}^{\infty} x[n]\,z^{n}$`
  },
  {
    oblast: "Z-transformacia", okruh: "CZS 4",
    pravda: String.raw`Z posun v case: $x[n-m] \;\Leftrightarrow\; z^{-m}\,X(z)$`,
    nepravda: String.raw`Z posun v case: $x[n-m] \;\Leftrightarrow\; z^{m}\,X(z)$`
  },
  {
    oblast: "Z-transformacia", okruh: "CZS 4",
    pravda: String.raw`Z konvolucny teorem: $x[n] * h[n] \;\Leftrightarrow\; X(z)\,H(z)$`,
    nepravda: String.raw`Z konvolucny teorem: $x[n] * h[n] \;\Leftrightarrow\; X(z) + H(z)$`
  },
  {
    oblast: "Z-transformacia", okruh: "CZS 4",
    pravda: String.raw`Z-obraz skoku: $u[n] \;\Leftrightarrow\; \dfrac{z}{z-1}$`,
    nepravda: String.raw`Z-obraz skoku: $u[n] \;\Leftrightarrow\; \dfrac{z}{z+1}$`
  },
  {
    oblast: "Z-transformacia", okruh: "CZS 4",
    pravda: String.raw`Z-obraz $a^{n}u[n]$: $\;\dfrac{z}{z-a}$`,
    nepravda: String.raw`Z-obraz $a^{n}u[n]$: $\;\dfrac{z}{z+a}$`
  },

  // ===== DTFT a DFT (CZS 5) =====
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`DTFT: $X(e^{j\omega}) = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,e^{-j\omega n}$`,
    nepravda: String.raw`DTFT: $X(e^{j\omega}) = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,e^{+j\omega n}$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`IDTFT: $x[n] = \dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi} X(e^{j\omega})\,e^{j\omega n}\,d\omega$`,
    nepravda: String.raw`IDTFT: $x[n] = \displaystyle\int_{-\pi}^{\pi} X(e^{j\omega})\,e^{j\omega n}\,d\omega$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`DFT: $X[k] = \displaystyle\sum_{n=0}^{N-1} x[n]\,e^{-j 2\pi k n / N}$`,
    nepravda: String.raw`DFT: $X[k] = \displaystyle\sum_{n=0}^{N-1} x[n]\,e^{-j 2\pi k n}$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`IDFT: $x[n] = \dfrac{1}{N}\displaystyle\sum_{k=0}^{N-1} X[k]\,e^{+j 2\pi k n / N}$`,
    nepravda: String.raw`IDFT: $x[n] = \displaystyle\sum_{k=0}^{N-1} X[k]\,e^{-j 2\pi k n / N}$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`DFT bin frekvencia: $\omega_k = \dfrac{2\pi k}{N}$`,
    nepravda: String.raw`DFT bin frekvencia: $\omega_k = \dfrac{2\pi N}{k}$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`DFT jednosmerna zlozka: $X[0] = \displaystyle\sum_{n=0}^{N-1} x[n]$`,
    nepravda: String.raw`DFT jednosmerna zlozka: $X[0] = \dfrac{1}{N}\displaystyle\sum_{n=0}^{N-1} x[n]$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`DTFT posun v case: $x[n-k] \;\Leftrightarrow\; e^{-j\omega k}\,X(e^{j\omega})$`,
    nepravda: String.raw`DTFT posun v case: $x[n-k] \;\Leftrightarrow\; e^{+j\omega k}\,X(e^{j\omega})$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Parsevalov teorem (DTFT): $\displaystyle\sum_{n} |x[n]|^{2} = \dfrac{1}{2\pi}\int_{-\pi}^{\pi} |X(e^{j\omega})|^{2}\,d\omega$`,
    nepravda: String.raw`Parsevalov teorem (DTFT): $\displaystyle\sum_{n} |x[n]|^{2} = \int_{-\pi}^{\pi} |X(e^{j\omega})|^{2}\,d\omega$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Parsevalov teorem (DFT): $\displaystyle\sum_{n=0}^{N-1} |x[n]|^{2} = \dfrac{1}{N}\sum_{k=0}^{N-1} |X[k]|^{2}$`,
    nepravda: String.raw`Parsevalov teorem (DFT): $\displaystyle\sum_{n=0}^{N-1} |x[n]|^{2} = \sum_{k=0}^{N-1} |X[k]|^{2}$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Konvolucny teorem: $x_1[n] * x_2[n] \;\Leftrightarrow\; X_1(e^{j\omega})\,X_2(e^{j\omega})$`,
    nepravda: String.raw`Konvolucny teorem: $x_1[n] * x_2[n] \;\Leftrightarrow\; X_1(e^{j\omega}) + X_2(e^{j\omega})$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Korelacny teorem: $x_1[n] \circ x_2[n] \;\Leftrightarrow\; X_1(e^{j\omega})\,X_2^{*}(e^{j\omega})$`,
    nepravda: String.raw`Korelacny teorem: $x_1[n] \circ x_2[n] \;\Leftrightarrow\; X_1(e^{j\omega})\,X_2(e^{j\omega})$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Kruhova konvolucia: $y[n] = \displaystyle\sum_{k=0}^{N-1} x[k]\,h[(n-k)\bmod N]$`,
    nepravda: String.raw`Kruhova konvolucia: $y[n] = \displaystyle\sum_{k=0}^{N-1} x[k]\,h[(n+k)\bmod N]$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Kruhova korelacia: $z[n] = \displaystyle\sum_{m=0}^{N-1} x[m]\,y[(n+m)\bmod N]$`,
    nepravda: String.raw`Kruhova korelacia: $z[n] = \displaystyle\sum_{m=0}^{N-1} x[m]\,y[(n-m)\bmod N]$`
  },
  {
    oblast: "DTFT a DFT", okruh: "CZS 5",
    pravda: String.raw`Spektrum vystupu LTI: $Y(e^{j\omega}) = H(e^{j\omega})\,X(e^{j\omega})$`,
    nepravda: String.raw`Spektrum vystupu LTI: $Y(e^{j\omega}) = H(e^{j\omega}) + X(e^{j\omega})$`
  },

  // ===== Filtre a faza (CZS 6) =====
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Frekvencna charakteristika: $H(e^{j\omega}) = H(z)\big|_{z = e^{j\omega}}$`,
    nepravda: String.raw`Frekvencna charakteristika: $H(e^{j\omega}) = H(z)\big|_{z = \omega}$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Prenosova funkcia FIR: $H(z) = \displaystyle\sum_{i=0}^{N-1} b_i\,z^{-i}$`,
    nepravda: String.raw`Prenosova funkcia FIR: $H(z) = \dfrac{1}{\displaystyle\sum_{i=0}^{N-1} b_i\,z^{-i}}$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`FIR diferencna rovnica: $y[n] = \displaystyle\sum_{i=0}^{N-1} b_i\,x[n-i]$`,
    nepravda: String.raw`FIR diferencna rovnica: $y[n] = \displaystyle\sum_{i=1}^{N-1} a_i\,y[n-i]$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Skupinove oneskorenie: $\tau_g = -\dfrac{d\theta(\omega)}{d\omega}$`,
    nepravda: String.raw`Skupinove oneskorenie: $\tau_g = -\dfrac{\theta(\omega)}{\omega}$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Fazove oneskorenie: $\tau_\varphi = -\dfrac{\theta(\omega)}{\omega}$`,
    nepravda: String.raw`Fazove oneskorenie: $\tau_\varphi = -\dfrac{d\theta(\omega)}{d\omega}$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Hrebenovy filter (suma): $H(z) = 1 + z^{-M}$`,
    nepravda: String.raw`Hrebenovy filter (suma): $H(z) = 1 - z^{-M}$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Priemerovaci filter: $H(z) = \dfrac{1}{M+1}\displaystyle\sum_{k=0}^{M} z^{-k}$`,
    nepravda: String.raw`Priemerovaci filter: $H(z) = (M+1)\displaystyle\sum_{k=0}^{M} z^{-k}$`
  },
  {
    oblast: "Filtre a faza", okruh: "CZS 6",
    pravda: String.raw`Fazovaci clanok (all-pass): $H(z) = \dfrac{z^{-1} - a}{1 - a\,z^{-1}}$`,
    nepravda: String.raw`Fazovaci clanok (all-pass): $H(z) = \dfrac{z^{-1} - a}{1 + a\,z^{-1}}$`
  },

  // ===== STFT a okna (CZS 7) =====
  {
    oblast: "STFT a okna", okruh: "CZS 7",
    pravda: String.raw`STFT: $S(e^{j\omega}, m) = \displaystyle\sum_{n=-\infty}^{\infty} s[n]\,w[n-m]\,e^{-j\omega n}$`,
    nepravda: String.raw`STFT: $S(e^{j\omega}, m) = \displaystyle\sum_{n=-\infty}^{\infty} s[n]\,w[n-m]\,e^{+j\omega n}$`
  },
  {
    oblast: "STFT a okna", okruh: "CZS 7",
    pravda: String.raw`Hammingovo/Hannovo okno: $w[n] = a_0 - (1 - a_0)\cos\dfrac{2\pi n}{N-1}$`,
    nepravda: String.raw`Hammingovo/Hannovo okno: $w[n] = a_0 + (1 - a_0)\cos\dfrac{2\pi n}{N-1}$`
  },

  // ===== FFT (CZS 8) =====
  {
    oblast: "FFT", okruh: "CZS 8",
    pravda: String.raw`Rotacny faktor (twiddle): $W_N^{r} = e^{-j 2\pi r / N}$`,
    nepravda: String.raw`Rotacny faktor (twiddle): $W_N^{r} = e^{+j 2\pi r N}$`
  },
  {
    oblast: "FFT", okruh: "CZS 8",
    pravda: String.raw`Vypoctova zlozitost FFT: $\mathcal{O}(N \log N)$`,
    nepravda: String.raw`Vypoctova zlozitost FFT: $\mathcal{O}(N^{2})$`
  },
  {
    oblast: "FFT", okruh: "CZS 8",
    pravda: String.raw`FFT motylik: z dvojice $a, b$ vznika $a+b$ a $a-b$`,
    nepravda: String.raw`FFT motylik: z dvojice $a, b$ vznika $a \cdot b$ a $a / b$`
  }
];

const vzorceOtazky = vzorceData.map((polozka, index) => ({
  id: `Vzorce ${String(index + 1).padStart(3, "0")}`,
  tema: `Vzorce - ${polozka.oblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny vzorec: ${polozka.pravda}`,
  prezentacia: "Vzorce",
  okruhy: [polozka.okruh],
  subtema: `Vzorce / ${polozka.oblast}`,
  slideRef: "",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...vzorceOtazky);

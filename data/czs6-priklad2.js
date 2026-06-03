// CZS 6 - druhy komplexny worked example: navrh pasmovej priepusti z dvojice
// komplexne zdruzenych polov na jednotkovej kruznici (podla CZS_6_03.pdf, slidy 16-18).
// Kazdy vypoctovy krok je samostatna crack otazka. Obrazky orezane z prezentacie.

const ZROVINA_BP = "assets/czs6-priklad2/zrovina_bp.png";
const MODUL3D_BP = "assets/czs6-priklad2/modul3d_bp.png";
const MODUL2D_BP = "assets/czs6-priklad2/modul2d_bp.png";

const czsSkuska6Priklad2Data = [
  {
    id: "CZS 6. Priklad PP 001 poly nuly",
    obrazky: [ZROVINA_BP],
    pravda: String.raw`Z obrazka v rovine $z$ su dva komplexne zdruzene poly $z_{x\,1,2} = r\,e^{\pm j\omega_0}$ ($0 < r < 1$) a dvojnasobna nula v pociatku $z_0 = 0$ — typicke rozmiestnenie pre pasmovu priepust.`,
    nepravda: String.raw`Z obrazka v rovine $z$ su dve komplexne zdruzene nuly $z_{0\,1,2} = r\,e^{\pm j\omega_0}$ a dvojnasobny pol v pociatku $z_x = 0$ — typicke rozmiestnenie pre pasmovu zadrz.`
  },
  {
    id: "CZS 6. Priklad PP 002 typ filtra",
    obrazky: [ZROVINA_BP],
    pravda: String.raw`Poly lezia blizko jednotkovej kruznice na uhle $\pm\omega_0$, takze prenos je najvacsi v okoli frekvencie $\omega_0$ — ide o pasmovu priepust naladenu na $\omega_0$.`,
    nepravda: String.raw`Poly lezia blizko jednotkovej kruznice na uhle $\pm\omega_0$, takze prenos je v okoli frekvencie $\omega_0$ najmensi — ide o pasmovu zadrz na $\omega_0$.`
  },
  {
    id: "CZS 6. Priklad PP 003 prenosova funkcia",
    obrazky: [ZROVINA_BP],
    pravda: String.raw`Z polov $z_{1,2} = r\,e^{\pm j\omega_0}$ plati $z_1 + z_2 = 2r\cos\omega_0$ a $z_1 z_2 = r^2$, takze $H(z) = \dfrac{a_0\, z^2}{z^2 - 2r\cos(\omega_0)\, z + r^2}$.`,
    nepravda: String.raw`Z polov $z_{1,2} = r\,e^{\pm j\omega_0}$ plati $z_1 + z_2 = 2r\cos\omega_0$ a $z_1 z_2 = r^2$, takze $H(z) = \dfrac{a_0\, z^2}{z^2 + 2r\cos(\omega_0)\, z + r^2}$.`
  },
  {
    id: "CZS 6. Priklad PP 004 kmitoctova charakteristika",
    obrazky: [ZROVINA_BP],
    pravda: String.raw`Dosadenim $z = e^{j\omega}$: $H(e^{j\omega}) = \dfrac{a_0\, e^{j2\omega}}{e^{j2\omega} - 2r\cos(\omega_0)\, e^{j\omega} + r^2}$.`,
    nepravda: String.raw`Dosadenim $z = e^{j\omega}$: $H(e^{j\omega}) = \dfrac{a_0\, e^{-j2\omega}}{e^{j2\omega} - 2r\cos(\omega_0)\, e^{j\omega} + r^2}$ (citatel ma opacne znamienko exponentu).`
  },
  {
    id: "CZS 6. Priklad PP 005 normalizacia",
    obrazky: [ZROVINA_BP],
    pravda: String.raw`Z podmienky $|H(e^{j\omega_0})| = 1$ vychadza $a_0 = \dfrac{1 - r}{1}\sqrt{1 + r^2 - 2r\cos(2\omega_0)}$; pre $r = 0{,}9$ a $\omega_0 = \pi/4$ je $a_0 \doteq 0{,}1354$.`,
    nepravda: String.raw`Z podmienky $|H(e^{j\omega_0})| = 1$ vychadza $a_0 = 1$ nezavisle od $r$ a $\omega_0$, lebo normalizacia je vzdy jednotkova.`
  },
  {
    id: "CZS 6. Priklad PP 006 modul 2D",
    obrazky: [MODUL2D_BP],
    pravda: String.raw`Modulova charakteristika $|H(e^{j\omega})|$ ma dva symetricke vrcholy s hodnotou $1$ pri $\omega = \pm\omega_0$ (tu $\pm\pi/4$) a klesa k malej hodnote pri $\omega = 0$ a $\omega = \pi$ — pasmova priepust.`,
    nepravda: String.raw`Modulova charakteristika $|H(e^{j\omega})|$ ma jeden vrchol pri $\omega = 0$ a monotonne klesa k nule pri $\omega = \pi$ — dolna priepust.`
  },
  {
    id: "CZS 6. Priklad PP 007 modul 3D",
    obrazky: [MODUL3D_BP],
    pravda: String.raw`V 3D zobrazeni modulu $|H(z)|$ nad rovinou $z$ vytvaraju dva komplexne zdruzene poly dva vyrazne vrcholy tesne vnutri jednotkovej kruznice na uhloch $\pm\omega_0$.`,
    nepravda: String.raw`V 3D zobrazeni modulu $|H(z)|$ nad rovinou $z$ vytvara dvojnasobna nula v pociatku jediny vrchol v strede; poly ziadne vrcholy netvoria.`
  },
  {
    id: "CZS 6. Priklad PP 008 stabilita",
    obrazky: [ZROVINA_BP],
    pravda: String.raw`System je stabilny, lebo oba poly maju modul $|z_x| = r = 0{,}9 < 1$, teda lezia vnutri jednotkovej kruznice. Cim blizsie su poly ku kruznici, tym uzsi a vyssi je rezonancny vrchol.`,
    nepravda: String.raw`System je nestabilny, lebo poly s modulom $r = 0{,}9$ lezia vnutri jednotkovej kruznice; stabilita by vyzadovala poly mimo kruznice.`
  }
];

const czsSkuska6Priklad2Otazky = czsSkuska6Priklad2Data.map((polozka) => ({
  id: polozka.id,
  tema: "CZS 6. Komplexny priklad - pasmova priepust",
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  obrazky: polozka.obrazky,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "CZS 6",
  subtema: "Komplexny priklad / Pasmova priepust",
  slideRef: "CZS_6_03.pdf, slidy 16-18",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsSkuska6Priklad2Otazky);

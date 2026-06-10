// Doplnkove crack otazky: posilnenie dolezitych faktov INYMI SLOVAMI (uci
// logickym premyslanim, nie biflovanim - rovnaky styl ako duplicity v CZS 5)
// + doplnenie dier v pokryti SZZ okruhov.
//
// Pouzivaju povodne CZS prezentacie + oblast/podoblast, takze ich remap
// (czs-szz-okruhy.js) zaradi do spravneho SZZ okruhu. Tento subor sa MUSI
// nacitat pred czs-szz-okruhy.js.

const czsDoplnkyData = [
  // ===================== SZZ 1: Diskretne a cislicove signaly (CZS 0/1) =====================
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Vzorkovacia veta",
    pravda: String.raw`Ak nie je splnene $f_{vz} > 2 f_{max}$, vyssie frekvencie sa "preklopia" do nizsich (aliasing) a povodny signal sa uz neda verne rekonstruovat.`,
    nepravda: String.raw`Ak nie je splnene $f_{vz} > 2 f_{max}$, vyssie frekvencie sa jednoducho odfiltruju a signal v pasme do $f_{max}$ ostane vzdy rekonstruovatelny.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Vzorkovacia veta",
    pravda: String.raw`Hranicna (Nyquistova) frekvencia je polovica vzorkovacej: $f_N = f_{vz}/2$; verne vieme zachytit iba zlozky pod $f_N$.`,
    nepravda: String.raw`Hranicna (Nyquistova) frekvencia sa rovna vzorkovacej: $f_N = f_{vz}$; verne vieme zachytit vsetky zlozky az po $f_{vz}$.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Jednotkovy impulz a skok",
    pravda: String.raw`Jednotkovy impulz $\delta[n]$ je $1$ iba pre $n=0$ a $0$ inde; je to stavebny kamen - kazdy signal sa da poskladat z posunutych vazenych impulzov.`,
    nepravda: String.raw`Jednotkovy impulz $\delta[n]$ je $1$ pre vsetky $n \ge 0$ a $0$ pre $n < 0$; je to to iste ako jednotkovy skok.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Jednotkovy impulz a skok",
    pravda: String.raw`Skok a impulz spolu suvisia: $u[n] = \displaystyle\sum_{k=-\infty}^{n}\delta[k]$ a naopak $\delta[n] = u[n] - u[n-1]$ (prva diferencia skoku).`,
    nepravda: String.raw`Skok a impulz spolu suvisia: $\delta[n] = \displaystyle\sum_{k=-\infty}^{n} u[k]$ a naopak $u[n] = \delta[n] - \delta[n-1]$.`
  },
  {
    prezentacia: "CZS 0", oblast: "Diskretny a cislicovy signal", podoblast: "Rozdiel signalov",
    pravda: String.raw`Signal sa diskretizuje v dvoch osiach: v case (vzorkovanie) a v amplitude (kvantovanie). Diskretny = iba cas, cislicovy = cas aj amplituda.`,
    nepravda: String.raw`Signal sa diskretizuje v dvoch osiach: v case aj amplitude. Diskretny aj cislicovy su diskretne v oboch osiach, lisia sa len poctom bitov.`
  },
  {
    prezentacia: "CZS 0", oblast: "Diskretny a cislicovy signal", podoblast: "Kvantovanie",
    pravda: String.raw`Viac kvantovacich bitov = viac hladin, jemnejsi krok a mensia kvantovacia chyba - za cenu vacsieho datoveho toku.`,
    nepravda: String.raw`Viac kvantovacich bitov = menej hladin a vacsi krok, preto kvantovacia chyba s poctom bitov rastie.`
  },

  // ===================== SZZ 2: Klasifikacia signalov (CZS 1) =====================
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Periodicita diskretneho signalu",
    pravda: String.raw`$\cos(\omega n)$ je periodicky prave vtedy, ak je $\dfrac{\omega}{2\pi}$ racionalne; perioda je najmensie cele $N$, pre ktore je $\omega N$ celociselnym nasobkom $2\pi$.`,
    nepravda: String.raw`$\cos(\omega n)$ je periodicky pre kazde $\omega$, lebo kosinus je vzdy periodicky; perioda je vzdy $N = 2\pi$ vzoriek.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Energia a vykon",
    pravda: String.raw`Energeticky signal ma konecnu energiu a nulovy stredny vykon (napr. konecny signal); vykonovy signal ma nekonecnu energiu a konecny nenulovy vykon (napr. periodicky signal).`,
    nepravda: String.raw`Energeticky signal ma nekonecnu energiu a nulovy vykon; vykonovy ma konecnu energiu aj vykon, preto kazdy realny signal je oboje naraz.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Komplexna exponenciala",
    pravda: String.raw`Komplexna exponenciala $e^{j\omega n} = \cos(\omega n) + j\sin(\omega n)$ ma konstantny modul $1$; realna a imaginarna cast su navzajom posunute o $90^\circ$.`,
    nepravda: String.raw`Komplexna exponenciala $e^{j\omega n} = \cos(\omega n) + j\sin(\omega n)$ ma modul rastuci s $n$; realna a imaginarna cast su vzdy v faze.`
  },

  // ===================== SZZ 3: Korelacia (CZS 2) =====================
  {
    prezentacia: "CZS 2", oblast: "Korelacia", podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacia bieleho sumu ma vyrazny vrchol iba v $m=0$ (energia), pre $m \neq 0$ je takmer nulova - vzorky sumu su navzajom nekorelovane.`,
    nepravda: String.raw`Autokorelacia bieleho sumu je konstantna pre vsetky posuny $m$, lebo sum obsahuje vsetky frekvencie rovnomerne.`
  },
  {
    prezentacia: "CZS 2", oblast: "Korelacia", podoblast: "Vzorec a vyznam",
    pravda: String.raw`Korelaciu mozno pocitat ako konvoluciu, ked jeden signal casovo zrkadlime: $r_{xy}[m] = x[m] * y[-m]$.`,
    nepravda: String.raw`Korelacia a konvolucia su totozne, $r_{xy}[m] = x[m] * y[m]$; ziadne zrkadlenie nie je potrebne.`
  },
  {
    prezentacia: "CZS 2", oblast: "Korelacia", podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacia ma globalne maximum vzdy v $m=0$ - signal je sam so sebou najpodobnejsi pri nulovom posune: $r_{xx}[0] \ge |r_{xx}[m]|$.`,
    nepravda: String.raw`Autokorelacia moze mat maximum pri lubovolnom posune $m$; bod $m=0$ nie je nicim vynimocny.`
  },
  {
    prezentacia: "CZS 2", oblast: "Korelacia", podoblast: "Autokorelacia",
    pravda: String.raw`Autokorelacia periodickeho signalu zostava periodicka s rovnakou periodou - preto sa korelacia pouziva na odhalenie skrytej periodicity v zasumenych datach.`,
    nepravda: String.raw`Autokorelacia periodickeho signalu rychlo klesne k nule, takze periodicitu skryje a na jej hladanie sa nehodi.`
  },

  // ===================== SZZ 4: Diskretne systemy (CZS 2) =====================
  {
    prezentacia: "CZS 2", oblast: "Prevodne funkcie a popis systemu", podoblast: "Stavovy popis",
    okruhy: ["6. FIR a IIR systemy"],
    pravda: String.raw`Stavovy (vnutorny) popis pouziva dvojicu rovnic: stavovu $\mathbf{v}[n+1] = \mathbf{A}\,\mathbf{v}[n] + \mathbf{b}\,x[n]$ a vystupnu $y[n] = \mathbf{c}^{\top}\mathbf{v}[n] + d\,x[n]$.`,
    nepravda: String.raw`Stavovy (vnutorny) popis pouziva jedinu rovnicu $y[n] = T\{x[n]\}$ bez akychkolvek stavovych premennych.`
  },
  {
    prezentacia: "CZS 2", oblast: "Prevodne funkcie a popis systemu", podoblast: "Diferencna rovnica",
    pravda: String.raw`Linearny system s konstantnymi koeficientmi opisuje diferencna rovnica $\displaystyle\sum_{k=0}^{N} a_k\,y[n-k] = \sum_{m=0}^{M} b_m\,x[n-m]$.`,
    nepravda: String.raw`Linearny diskretny system opisuje diferencialna rovnica $\dfrac{dy}{dn} = a\,y + b\,x$, lebo pracuje so spojitym casom.`
  },
  {
    prezentacia: "CZS 2", oblast: "Klasifikacia systemov", podoblast: "Staticky a dynamicky",
    pravda: String.raw`Dynamicky system ma pamat - vystup zavisi aj od minulych (pripadne buducich) vzoriek; staticky system pamat nema a reaguje len na aktualnu vzorku.`,
    nepravda: String.raw`Staticky system ma pamat a pouziva minule vzorky; dynamicky system pamat nema a zavisi len od aktualnej vzorky.`
  },
  {
    prezentacia: "CZS 2", oblast: "Klasifikacia systemov", podoblast: "Stabilita",
    pravda: String.raw`BIBO stabilita: kazdy ohraniceny vstup da ohraniceny vystup. Staci jediny ohraniceny vstup s neohranicenym vystupom a system je nestabilny.`,
    nepravda: String.raw`BIBO stabilita: aspon jeden ohraniceny vstup da ohraniceny vystup. Ak existuje co i len jeden taky vstup, system je stabilny.`
  },

  // ===================== SZZ 5: LTI systemy (CZS 3) =====================
  {
    prezentacia: "CZS 3", oblast: "LTI system", podoblast: "Vychodiskovy popis",
    pravda: String.raw`Impulzna charakteristika $h[n]$ plne opisuje LTI system: ked ju poznam, odozvu na lubovolny vstup ziskam konvoluciou $y[n] = x[n] * h[n]$.`,
    nepravda: String.raw`Impulzna charakteristika $h[n]$ opisuje LTI system len pre impulzny vstup; pre iny vstup treba system merat nanovo.`
  },
  {
    prezentacia: "CZS 3", oblast: "Konvolucia", podoblast: "Vlastnosti",
    pravda: String.raw`Konvolucia je komutativna, takze vstup a impulzna odozva su zamenitelne: $x[n] * h[n] = h[n] * x[n]$ - system "nerozlisuje", co je signal a co charakteristika.`,
    nepravda: String.raw`Konvolucia nie je komutativna; zamena $x[n]$ a $h[n]$ vo vseobecnosti zmeni vystup.`
  },
  {
    prezentacia: "CZS 3", oblast: "Kauzalita a stabilita", podoblast: "Stabilita LTI",
    pravda: String.raw`LTI system je stabilny prave vtedy, ak je $h[n]$ absolutne sumovatelna ($\sum|h[n]| < \infty$) - teda ak impulzna charakteristika dostatocne rychlo dozneva.`,
    nepravda: String.raw`LTI system je stabilny prave vtedy, ak je $h[n]$ konecna; nekonecna impulzna charakteristika vzdy znamena nestabilitu.`
  },

  // ===================== SZZ 6: FIR a IIR systemy (CZS 3) =====================
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "FIR vlastnosti",
    pravda: String.raw`FIR system nema spatnu vazbu: vystup je len vazena suma konecne mnohych vstupnych vzoriek, preto impulzna odozva po $N$ vzorkach skonci.`,
    nepravda: String.raw`FIR system ma spatnu vazbu od vystupu, preto jeho impulzna odozva trva nekonecne dlho.`
  },
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "IIR vlastnosti",
    pravda: String.raw`IIR system pouziva spatnu vazbu (rekurziu) - vystup zavisi aj od minulych vystupov, takze impulzna odozva moze trvat nekonecne dlho.`,
    nepravda: String.raw`IIR system nepouziva ziadnu spatnu vazbu; jeho impulzna odozva je vzdy konecna, len dlhsia ako pri FIR.`
  },
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "FIR vlastnosti",
    pravda: String.raw`FIR system je vzdy stabilny - prenosova funkcia nema poly mimo pociatku, takze konecna suma $\sum|h[n]|$ je vzdy konecna.`,
    nepravda: String.raw`FIR system moze byt nestabilny, ak ma poly blizko jednotkovej kruznice, podobne ako IIR.`
  },
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "FIR vlastnosti",
    pravda: String.raw`FIR filter so symetrickou (alebo antisymetrickou) impulznou charakteristikou ma presne linearnu fazu - vsetky frekvencie sa oneskoria rovnako a tvar signalu sa nedeformuje.`,
    nepravda: String.raw`FIR filter ma linearnu fazu len pri nesymetrickej impulznej charakteristike; symetria fazu znelinearni.`
  },
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "IIR vlastnosti",
    pravda: String.raw`IIR filter dosiahne strmu charakteristiku s malo koeficientmi, no za cenu nelinearnej fazy a rizika nestability (poly musia byt vnutri jednotkovej kruznice).`,
    nepravda: String.raw`IIR filter potrebuje na strmu charakteristiku viac koeficientov nez FIR a ma vzdy linearnu fazu aj zarucenu stabilitu.`
  },
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "Prenosova funkcia",
    pravda: String.raw`FIR ma prenosovu funkciu len s citatelom (same nuly), IIR ma aj menovatel (poly); prave poly v menovateli su zdrojom nekonecnej odozvy aj moznej nestability.`,
    nepravda: String.raw`FIR aj IIR maju prenosovu funkciu len s citatelom; lisia sa iba poctom clenov, nie pritomnostou polov.`
  },
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "Prenosova funkcia",
    pravda: String.raw`Z diferencnej rovnice ziskame $H(z)$ Z-transformaciou: koeficienty pri $x[n-m]$ tvoria citatel, koeficienty pri $y[n-k]$ menovatel.`,
    nepravda: String.raw`Z diferencnej rovnice ziskame $H(z)$ tak, ze koeficienty pri $y[n-k]$ tvoria citatel a koeficienty pri $x[n-m]$ menovatel.`
  },

  // ===================== SZZ 7: Transformacia Z (CZS 4) =====================
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Vlastnosti — nasobenie exponencialou",
    pravda: String.raw`Nasobenie postupnosti exponencialou meni mierku v rovine $z$: $a^{n} x[n] \;\Leftrightarrow\; X\!\left(\dfrac{z}{a}\right)$ (poly a nuly sa nasobia $a$).`,
    nepravda: String.raw`Nasobenie postupnosti exponencialou len posunie obraz: $a^{n} x[n] \;\Leftrightarrow\; X(z) - a$.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Spatna Z-transformacia",
    pravda: String.raw`Spatnu Z-transformaciu mozno pocitat reziduovou vetou: $x[n] = \displaystyle\sum_{\text{poly}} \mathrm{Res}\big[X(z)\,z^{n-1}\big]$ - sucet rezidui vo vsetkych poloch.`,
    nepravda: String.raw`Spatnu Z-transformaciu reziduovou vetou pocitame ako $x[n] = \displaystyle\sum \mathrm{Res}\big[X(z)\,z^{n-1}\big]$, ale scitavame rezidua iba v nulach citatela.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Spatna Z-transformacia",
    pravda: String.raw`Pri spatnej Z-transformacii racionalnu funkciu rozlozime na parcialne zlomky a kazdy clen $\dfrac{z}{z-a}$ prelozime cez slovnik na $a^{n}u[n]$.`,
    nepravda: String.raw`Pri spatnej Z-transformacii racionalnu funkciu rozlozime na parcialne zlomky a kazdy clen $\dfrac{z}{z-a}$ prelozime na $\delta[n-a]$.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Z-transformacia riesi diferencne rovnice algebraicky: posun $y[n-k]$ sa stane nasobenim $z^{-k}$, rovnica sa vyriesi pre $Y(z)$ a spatnou transformaciou ziskame $y[n]$.`,
    nepravda: String.raw`Z-transformacia riesi diferencne rovnice tak, ze ich prevedie na diferencialne rovnice v spojitom case riesene integrovanim.`
  },

  // ===================== SZZ 10: Casovo-frekvencna analyza a FFT (CZS 7/8) =====================
  {
    prezentacia: "CZS 7", oblast: "STFT", podoblast: "Definicia",
    pravda: String.raw`STFT pozera na signal cez posuvne okno: pre kazdu poziciu okna spravi DFT z vyrezu, takze vidno, ako sa spektrum meni v case.`,
    nepravda: String.raw`STFT spravi jedinu DFT z celeho signalu naraz, preto da len jedno priemerne spektrum bez casovej informacie.`
  },
  {
    prezentacia: "CZS 7", oblast: "Spektralny unik", podoblast: "Spectral leakage",
    pravda: String.raw`Spektralny unik vznika, ked do okna nepadne cely pocet period signalu - ostre orezanie na hranici okna rozmaze spektralnu ciaru do postrannych lalokov.`,
    nepravda: String.raw`Spektralny unik vznika len pri sumovych signaloch; pri ciste harmonickom signali nikdy nenastane bez ohladu na dlzku okna.`
  },
  {
    prezentacia: "CZS 7", oblast: "Okenne funkcie", podoblast: "Kompromis okna",
    pravda: String.raw`Pri vybere okna platí kompromis: uzsi hlavny lalok (lepsie rozlisenie) ide ruka v ruke s vyssimi postrannymi lalokmi (vacsi unik) - oboje naraz sa zlepsit neda.`,
    nepravda: String.raw`Spravnym oknom sa da naraz dosiahnut najuzsi hlavny lalok aj najnizsie postranne laloky, takze ziadny kompromis neexistuje.`
  },
  {
    prezentacia: "CZS 8", oblast: "FFT", podoblast: "Bit-reversal",
    pravda: String.raw`FFT usporiada vstup do bit-reversal poradia: index zapiseme binarne a obratime poradie bitov (napr. pre $N=8$ ide index $1 = 001$ na poziciu $100 = 4$).`,
    nepravda: String.raw`FFT usporiada vstup do bit-reversal poradia tak, ze cely vstup len otoci odzadu dopredu ($0,1,\ldots,N-1 \to N-1,\ldots,1,0$).`
  },
  {
    prezentacia: "CZS 8", oblast: "FFT", podoblast: "Princip a zlozitost",
    pravda: String.raw`FFT zrychluje DFT rozdelenim na parne a neparne vzorky a vyuzitim symetrie rotacnych faktorov - z $\mathcal{O}(N^2)$ spravi $\mathcal{O}(N\log_2 N)$.`,
    nepravda: String.raw`FFT zrychluje DFT tym, ze zanedba male spektralne zlozky, preto je rychlejsia, ale menej presna nez DFT.`
  },

  // ===================== TEORIA Z PREZENTACII (CZS_1_03, CZS_4_03) =====================
  // SZZ 1: blokova schema cislicoveho spracovania + ulohy spracovania (slidy 5-6)
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Blokova schema spracovania",
    pravda: String.raw`Zakladny retazec cislicoveho spracovania: analogovy vstup → predfilter → A/D → diskretny system → D/A → postfilter → analogovy vystup.`,
    nepravda: String.raw`Zakladny retazec cislicoveho spracovania: analogovy vstup → D/A → predfilter → diskretny system → A/D → postfilter → analogovy vystup.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Blokova schema spracovania",
    pravda: String.raw`Predfilter pred A/D je antialiasingovy: obmedzi spektrum vstupu pod Nyquistovu frekvenciu este pred vzorkovanim.`,
    nepravda: String.raw`Predfilter pred A/D zvysuje pocet kvantovacich hladin a meni cislicovy signal spat na analogovy.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Blokova schema spracovania",
    pravda: String.raw`A/D prevodnik meni analogovy signal na cislicovy (vzorkovanie v case + kvantovanie amplitudy); spatny prevod robi D/A.`,
    nepravda: String.raw`A/D prevodnik meni cislicovy signal spat na analogovy; vzorkovanie aj kvantovanie robi az D/A.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Blokova schema spracovania",
    pravda: String.raw`Postfilter za D/A vyhladi schodovity priebeh vystupu - je to rekonstrukcny (vyhladzovaci) filter.`,
    nepravda: String.raw`Postfilter za D/A vzorkuje analogovy vstup a vybera vzorkovaciu frekvenciu este pred A/D prevodom.`
  },
  {
    prezentacia: "CZS 1", oblast: "Zaklady", podoblast: "Ulohy spracovania",
    pravda: String.raw`Filtracia signal UPRAVUJE (odstranenie sumu, oddelenie pasiem, tvarovanie spektra); analyza zistuje, CO signal obsahuje (spektrum, zdroj, rozpoznavanie).`,
    nepravda: String.raw`Filtracia signal iba analyzuje (zistuje jeho vlastnosti), kym analyza signal upravuje odstranenim sumu a tvarovanim spektra.`
  },

  // SZZ 4: stavove premenne ako pamat systemu
  {
    prezentacia: "CZS 2", oblast: "Prevodne funkcie a popis systemu", podoblast: "Stavovy popis",
    okruhy: ["6. FIR a IIR systemy"],
    pravda: String.raw`Stavove premenne nesu pamat systemu - su to minimalne informacie z minulosti potrebne na vypocet buduceho vystupu pri znamom vstupe.`,
    nepravda: String.raw`Stavove premenne su len iny nazov pre vstupne vzorky $x[n]$; system bez vstupu ziadnu pamat nepotrebuje.`
  },

  // SZZ 7: oblast konvergencie (ROC) - slidy CZS_4_03 6-7
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Oblast konvergencie (ROC)",
    pravda: String.raw`Oblast konvergencie (ROC) nikdy neobsahuje ziadny pol; je ohranicena modulmi polov.`,
    nepravda: String.raw`Oblast konvergencie (ROC) vzdy obsahuje vsetky poly, lebo prave v poloch Z-transformacia konverguje najlepsie.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Oblast konvergencie (ROC)",
    pravda: String.raw`Pravostranna (kauzalna) postupnost ma ROC vonkajsok najvzdialenejsieho polu: $|z| > r_{\max}$ (modul najvacsieho polu).`,
    nepravda: String.raw`Pravostranna (kauzalna) postupnost ma ROC vnutro najblizsieho polu: $|z| < r_{\min}$ (modul najmensieho polu).`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Oblast konvergencie (ROC)",
    pravda: String.raw`Lavostranna postupnost ma ROC vnutro najblizsieho polu k pociatku: $|z| < r_{\min}$ (modul najmensieho polu).`,
    nepravda: String.raw`Lavostranna postupnost ma ROC vonkajsok najvzdialenejsieho polu: $|z| > r_{\max}$ (modul najvacsieho polu).`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Oblast konvergencie (ROC)",
    pravda: String.raw`Obojstranna postupnost ma ROC v tvare medzikruzia medzi dvoma polmi.`,
    nepravda: String.raw`Obojstranna postupnost ma ROC vzdy vonkajsok najvzdialenejsieho polu, rovnako ako kauzalna postupnost.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Oblast konvergencie (ROC)",
    pravda: String.raw`Ten isty algebraicky vyraz $X(z)$ moze pri roznom ROC zodpovedat roznym postupnostiam - preto k Z-transformacii vzdy patri aj ROC.`,
    nepravda: String.raw`Algebraicky vyraz $X(z)$ jednoznacne urcuje postupnost aj bez udania ROC, lebo kazdemu vyrazu zodpoveda prave jeden signal.`
  },

  // SZZ 7: vztah Z-transformacie a DTFT - slidy CZS_4_03 8-9
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Vztah k DTFT",
    pravda: String.raw`DTFT ziskame z $X(z)$ dosadenim $z = e^{j\omega}$ (vyhodnotenie na jednotkovej kruznici), ale iba ak jednotkova kruznica lezi v ROC.`,
    nepravda: String.raw`DTFT ziskame z $X(z)$ dosadenim $z = e^{j\omega}$ vzdy, ked je $X(z)$ racionalna, bez ohladu na ROC.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Vztah k DTFT",
    pravda: String.raw`Pre stabilny LTI system lezi jednotkova kruznica vzdy v ROC prenosovej funkcie $H(z)$ - preto jeho frekvencna charakteristika existuje.`,
    nepravda: String.raw`Pre stabilny LTI system lezi jednotkova kruznica vzdy mimo ROC prenosovej funkcie $H(z)$, preto frekvencna charakteristika neexistuje.`
  },
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Vztah k DTFT",
    pravda: String.raw`Pol na jednotkovej kruznici je problem: DTFT v beznom zmysle nemusi existovat, lebo ROC nesmie obsahovat pol.`,
    nepravda: String.raw`Pol na jednotkovej kruznici je podmienkou existencie DTFT - prave tam musi lezat aspon jeden pol.`
  },

  // ===================== SZZ 6: FIR/IIR a stavovy popis z CZS_3_03.pdf (slidy 21-39) =====================
  // FIR: impulzna charakteristika = koeficienty b_i (slidy 22, 30-31)
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "FIR vlastnosti",
    pravda: String.raw`Pre FIR system $y[n] = \displaystyle\sum_{i=0}^{N-1} b_i\,x[n-i]$ su koeficienty $b_i$ priamo vzorkami impulznej charakteristiky: $h[i] = b_i$.`,
    nepravda: String.raw`Pre FIR system $y[n] = \displaystyle\sum_{i=0}^{N-1} b_i\,x[n-i]$ su koeficienty $b_i$ spatnovazobne koeficienty vystupu, nie impulzna charakteristika.`
  },
  // FIR typicke priklady (slide 24)
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "FIR vlastnosti",
    pravda: String.raw`Typicke FIR systemy: zosilnovac $y[n]=k\,x[n]$ ($h[n]=k\,\delta[n]$), zpozdovac $y[n]=x[n-k]$ ($h[n]=\delta[n-k]$), derivator $y[n]=x[n]-x[n-1]$ ($h[n]=\delta[n]-\delta[n-1]$).`,
    nepravda: String.raw`Typicke FIR systemy: zosilnovac $y[n]=k\,x[n]$ ($h[n]=k\,\delta[n]$), zpozdovac $y[n]=x[n-k]$ ($h[n]=\delta[n+k]$), derivator $y[n]=x[n]-x[n-1]$ ($h[n]=\delta[n]+\delta[n-1]$).`
  },
  // FIR realizacia - transverzalna struktura (slide 21)
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "FIR vlastnosti",
    pravda: String.raw`FIR system sa realizuje transverzalnou (priamou) strukturou: retazec oneskorovacich clenov $z^{-1}$ na vstupe, kazda odbocka sa vahuje koeficientom $b_i$ a vetvy sa scitaju do vystupu.`,
    nepravda: String.raw`FIR system sa realizuje strukturou so spatnou vazbou: vystup sa cez oneskorovacie cleny $z^{-1}$ privadza spat na vstup a scituje s vahami $b_i$.`
  },
  // IIR: rad filtra = pocet polov (slide 27)
  {
    prezentacia: "CZS 3", oblast: "FIR a IIR systemy", podoblast: "IIR vlastnosti",
    pravda: String.raw`IIR prenosova funkcia $H(z) = \dfrac{B(z)}{A(z)}$ ma $M$ nul a $N$ polov; rad filtra urcuje pocet polov $N$ (stupen menovatela).`,
    nepravda: String.raw`IIR prenosova funkcia $H(z) = \dfrac{B(z)}{A(z)}$ ma $M$ nul a $N$ polov; rad filtra urcuje pocet nul $M$ (stupen citatela).`
  },
  // Stavovy popis - konstrukcia N stavovych premennych (slidy 35-36); patri do okruhu 6 aj 4
  {
    prezentacia: "CZS 2", oblast: "Prevodne funkcie a popis systemu", podoblast: "Stavovy popis",
    okruhy: ["6. FIR a IIR systemy"],
    pravda: String.raw`Stavovy popis systemu $N$-teho radu zavedie $N$ vnutornych stavovych premennych $v_1[n], \ldots, v_N[n]$, kde kazda pracuje s oneskorenim o jednu vzorku ($z^{-1}$).`,
    nepravda: String.raw`Stavovy popis systemu $N$-teho radu zavedie jedinu stavovu premennu, ktora drzi celu minulost vstupu bez oneskorovacich clenov.`
  },

  // ===================== SZZ 7: Z-transformacia z CZS_4_03.pdf (doplnenie teorie) =====================
  // Jednostranna definicia pre kauzalne signaly (slide 2) - nas zakladny "definicia" je obojstranny
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Zaklady Z-transformacie",
    pravda: String.raw`Jednostranna Z-transformacia (pre kauzalne signaly) je $X(z) = \displaystyle\sum_{n=0}^{\infty} x[n]\,z^{-n}$, kde $z = r\,e^{j\varphi}$ je komplexne cislo; rad konverguje na oblasti konvergencie.`,
    nepravda: String.raw`Jednostranna Z-transformacia (pre kauzalne signaly) je $X(z) = \displaystyle\sum_{n=-\infty}^{\infty} x[n]\,z^{-n}$, teda sumuje aj cez zaporne casy $n < 0$.`
  },
  // Derivacna vlastnost: nasobenie indexom n (slidy 18-21)
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Vlastnosti — nasobenie postupnostou",
    pravda: String.raw`Nasobenie postupnosti indexom $n$ zodpoveda derivacii obrazu: $n\,x[n] \;\Leftrightarrow\; -z\,\dfrac{dX(z)}{dz}$.`,
    nepravda: String.raw`Nasobenie postupnosti indexom $n$ zodpoveda derivacii obrazu: $n\,x[n] \;\Leftrightarrow\; z\,\dfrac{dX(z)}{dz}$ (bez zaporneho znamienka).`
  },
  // Konvolucia = polynomialne nasobenie obrazov (slide 25)
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Konvolucny teorem",
    pravda: String.raw`Cez Z-transformaciu sa konvolucia zmeni na sucin obrazov, co prakticky zodpoveda polynomialnemu nasobeniu: vzorky signalov su koeficienty polynomov v $z^{-1}$.`,
    nepravda: String.raw`Cez Z-transformaciu sa konvolucia zmeni na sucet obrazov, co prakticky zodpoveda scitaniu polynomov v $z^{-1}$.`
  },
  // Spatna Z - dva sposoby (slide 30)
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Spatna Z-transformacia",
    pravda: String.raw`Spatnu Z-transformaciu mozno urcit dvoma sposobmi: (1) rozklad na parcialne zlomky + slovnik obrazov, alebo (2) Cauchyho reziduova veta (univerzalna aj pre vyrazy mimo slovnik).`,
    nepravda: String.raw`Spatnu Z-transformaciu mozno urcit iba rozkladom na parcialne zlomky a slovnikom obrazov; reziduova veta sa na spatnu Z-transformaciu nepouziva.`
  },
  // Reziduum pre jednoduchy pol (slidy 35-38)
  {
    prezentacia: "CZS 4", oblast: "Z-transformacia", podoblast: "Spatna Z-transformacia",
    pravda: String.raw`Reziduum pre jednoduchy pol $z_k$: $\mathrm{Res}_{z_k} = \displaystyle\lim_{z \to z_k} (z - z_k)\,X(z)\,z^{n-1}$; vzorka $x[n]$ je sucet rezidui cez vsetky poly.`,
    nepravda: String.raw`Reziduum pre jednoduchy pol $z_k$: $\mathrm{Res}_{z_k} = \displaystyle\lim_{z \to z_k} (z - z_k)\,X(z)$; faktor $z^{n-1}$ sa do rezidua nezahrna.`
  }
];

// Poradove cisla doplnkov (Doplnok NNN), ktore su iba PREFORMULOVANIA uz
// pokrytych faktov (na logicke ucenie v crack mode). V Exam Mode sa NEzobrazia
// - tam ostane vystiznejsia kanonicka verzia z hlavnych crack suborov.
// Ostatne doplnky (nova latka / gap-fill: blokova schema, ROC, autokorelacia
// sumu, reziduova veta, ...) v Exam Mode zostavaju.
const DOPLNKY_EXAM_SKIP = new Set([
  5, 6,                       // SZZ 1: 2-osova diskretizacia, kvantovaci kompromis
  11, 12, 13,                 // SZZ 3: korelacia=konvolucia, max v m=0, periodicka autokor.
  16, 17,                     // SZZ 4: staticky/dynamicky, BIBO
  18, 19, 20,                 // SZZ 5: impulzna char., komutativnost, stabilita
  21, 22, 23, 24, 25, 26,     // SZZ 6: FIR/IIR vlastnosti a prenos (kanon. originaly ostavaju)
  32, 33, 34, 35, 36          // SZZ 10: STFT, leakage, kompromis okna, bit-reversal, FFT zrychlenie
]);

const czsDoplnkyOtazky = czsDoplnkyData.map((polozka, index) => ({
  id: `Doplnok ${String(index + 1).padStart(3, "0")}`,
  tema: `${polozka.prezentacia}. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: polozka.prezentacia,
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "",
  okruhy: polozka.okruhy,
  examSkip: DOPLNKY_EXAM_SKIP.has(index + 1),
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda
  }
}));

czsOtazky.push(...czsDoplnkyOtazky);

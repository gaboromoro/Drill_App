# Drill App

Jednoduchá statická drill aplikácia na precvičovanie otázok z PC2 a CZS.

Spustenie:

1. Otvor `index.html` v prehliadači, alebo
2. spusti lokálny server v priečinku `drill-app`:

```powershell
node server.mjs
```

Potom otvor:

```text
http://127.0.0.1:8137
```

Klávesové ovládanie:

- možnosti 1, 2, 3, 4: klávesy `1`, `2`, `3`, `4`
- skontrolovať: medzerník
- ďalšia otázka: medzerník po kontrole odpovede

Režimy:

- `Uzavretý test` - otázky s možnosťami odpovedí
- `Kódové úlohy` - otvorené otázky z `inf.skuska.otvorene.pdf`, odpoveď sa píše ako kód

Predmety:

- `PC2` - pôvodné otázky z programovania
- `CZS` - speedtest otázky z číslicového spracovania signálov

CZS obsahuje otázky podľa prezentácií:

- `CZS_1_03`: základný blok číslicového spracovania, diskrétny signál, vzorkovanie, aliasing, kvantovanie, jednotkový impulz, jednotkový skok a základné operácie so signálom
- `CZS_2_03`: korelácia, autokorelácia, popis diskrétnych systémov, akumulátor, počiatočné podmienky, rekurzia, blokové diagramy, linearita, časová invariantnosť, kauzalita a stabilita
- `CZS_3_03`: LTI systém, impulzná charakteristika, diskrétna konvolúcia, spájanie LTI systémov, kauzalita a stabilita LTI, FIR/IIR systémy a stavový popis

V nastaveniach sa dá vybrať predmet, prezentácia aj konkrétne podokruhy. Z vybraných otázok sa test vždy náhodne zamieša.

Pri kódových úlohách sa kontrolujú hlavné body riešenia. Aplikácia berie do úvahy aj viacero správnych zápisov, napríklad `Comparable` alebo `Comparator`, rôzne názvy premenných a bežné alternatívy v SQL.

Otázky aj poradie odpovedí sa automaticky miešajú.

Poznámka: Niektoré krúžky v PDF neoznačovali správnu odpoveď. Pri otázkach ako `private`, `HashSet`, `TreeMap`, `Iterator`, top-level komponenty a konštruktor sú odpovede opravené podľa prezentácií.

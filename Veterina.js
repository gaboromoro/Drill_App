// Veterina - Patologicka morfologie (Patmorfa)
// Dva testy zostavene zo zbierok otazok:
//   * "Patmorfa 2024"      (Patmorfa 2024 sesbirane.pdf)
//   * "Patmorfa leto 2025" (Sesbirane patmorfa - leto 2025)
// Spravne odpovede su prevzate zo zeleno oznacenych moznosti v povodnych PDF.
// 'typ: "viac"' = otazka s viacerymi spravnymi odpovedami.

const veterinaOtazky = [
  {
    "id": "vet2024-001",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Jak se nazývá mléčně zakalená tekutina tukové konzistence v dutině hrudní?",
    "moznosti": [
      "chylothorax",
      "hemothorax",
      "Pyothorax",
      "lipothorax"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-002",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Při léčebné aplikaci progestinů u kočky můžeme na mléčné žláze pozorovat?",
    "moznosti": [
      "Cystická dilatace tubulů",
      "fibroadenomatózní hyperplazie mléčné žlázy",
      "lobulární hyperplazie mléčné žlázy"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-003",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Pearlsovo barvení při ikteru u psa byl pozorován ikterus, vzorek z jater byl obarven, co jsou modro zelené inkluze?",
    "moznosti": [
      "Haptoglobin",
      "Hemosiderin",
      "Bilirubin",
      "Hemoglobin",
      "Hematin",
      "transferin"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-004",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Chřipka koní - původce",
    "moznosti": [
      "Flavivirus",
      "Orbivirus",
      "Orthovirus",
      "Morbilivirus",
      "Reovirus",
      "Orthomyxoviridae",
      "herpesvirus"
    ],
    "spravne": [
      5
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-005",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Fyziologická dilatace lymfatických CÉV",
    "moznosti": [
      "Lymfangiektázie",
      "Lymfadenopatie",
      "Lymfom",
      "lymfadenitis"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-006",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Zvětšení MÍZNÍ UZLINY neznámé příčiny",
    "moznosti": [
      "Lymfangiektázie",
      "Lymfadenopatie",
      "Lymfom",
      "lymfadeinitis"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-007",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co s nejvyšší pravděpodobností nenalezneme u akutního zánětu ?",
    "moznosti": [
      "Metaplázie",
      "Nekróza",
      "Kalcifikace",
      "polymorfonukleáry"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-008",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Hypostáza",
    "moznosti": [
      "Městnání krve ve spodní části orgánu",
      "zpomalení toku krve při zánětu"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-009",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Livores mortis",
    "moznosti": [
      "Je v místě tlaku",
      "podkoží bledé nebo červené",
      "při vyšší okolní teplotě jsou lépe vidět než při nižší",
      "při otravě CO jsou modrofialové",
      "pokud je krev tekutá tak jsou lépe ohraničené"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-010",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co nepatří mezi adaptační změny buňky",
    "moznosti": [
      "Dystrofie",
      "atrofie prostá",
      "atrofie numerická",
      "metaplazie",
      "hyperplazie",
      "Hypoplazie"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-011",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Jaký šok při popálení několik hodin po",
    "moznosti": [
      "Neurogenní",
      "Hypovolemický",
      "Septický",
      "kardiogenní"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-012",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Atelektáza při pneumothoraxu",
    "moznosti": [
      "Kompresní",
      "Kontrakční",
      "fetální"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-013",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Paraneoplastický syndrom u psa při lymfomu",
    "moznosti": [
      "Estrogenizace se změnami v kostní dřeni",
      "metastatická kalcifikace",
      "žádná odpověď není správná"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-014",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Ventrální strana jazyku u kočky, na hlavě, šedavý, ulcerující, metastázuje do MU, napadá kosti",
    "moznosti": [
      "spinocelulární karcinom",
      "sarkom",
      "maligní melanom"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-015",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co nezpůsobuje hemodynamický plicní edém",
    "moznosti": [
      "Hypoproteinemie z enteritidy",
      "Sepse",
      "hypertenze v levém atriu",
      "porucha mitrální chlopně",
      "obstrukce plicních žil"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-016",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co je typické pro akutní nekrotickou pankreatitidu",
    "moznosti": [
      "Natrávený tuk",
      "bílá nekróza tuku okolo pankreatu a i ve větší dálce",
      "bílý pankreat",
      "černá, na řezu suchá, tvrdá",
      "žádná odpověď není správná"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-017",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Nádor z ovarií produkující hormony",
    "moznosti": [
      "Z rete ovaris",
      "granulo-thekální",
      "adenokarcinom"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-018",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "U jakého nádoru z epitelu jsou nepřehledně uspořádané, vřetenovité, hyperchromní velká jádra",
    "moznosti": [
      "Sarkom ale není z epitelu ne",
      "Leiomyom",
      "Lymfom",
      "spinocelulární karcinom"
    ],
    "spravne": [
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-019",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Malignita tumoru na základě",
    "moznosti": [
      "Počet mitóz",
      "METASTÁZY / invazívny rast"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-020",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Snížená kontraktilita srdce",
    "moznosti": [
      "Snižuje výdej, snižuje tlak",
      "Snižuje výdej, zvyšuje tlak",
      "Zvyšuje výdej, zvyšuje tlak",
      "Zvyšuje výdej, snižuje tlak",
      "Žádná odpověď není správná"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-021",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co způsobuje u zánětu zvětšení tkáně",
    "moznosti": [
      "Zvýšení propustnosti",
      "transdukce tekutin"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-022",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Povrchový zánět kůže, je to zánět epidermo-dermální junkce, degenerace buněk stratum basale, lymfoplasmocytární infiltrát. Rozhodni, jestli se jedná o:",
    "moznosti": [
      "Nodulární",
      "Difuzní",
      "Perivaskulární",
      "lichenoidní"
    ],
    "spravne": [
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-023",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Při infekci ischemické koagulační nekrózy dochází ke vzniku:",
    "moznosti": [
      "Vlhké gangrény",
      "kolikvační nekrózy",
      "kaseózní nekrózy",
      "fibroplazie"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-024",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Popis střevní patologie: deskvamace epitelu, hyperplazie pohárkových buněk, serózní výtok s příměsí hlenu? lehky lymfo+makrofág+plasmocyt inf. podslizničí, hyperemie cev. Vyber, co je to za zánět:",
    "moznosti": [
      "Pseudomembranózní",
      "Purulentní",
      "Katarální"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-025",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co je pravdivé tvrzení o trombu?",
    "moznosti": [
      "Pokud je trombus infikovaný, způsobí pyemii",
      "Vždy způsobí ischemii dané oblasti",
      "Nevzniká v proudu",
      "Nevzniká v srdci"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-026",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Proč vzniká hemoragická diateza při DIC?",
    "moznosti": [
      "Zräzanin",
      "Spotřebování srážecích faktorů"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-027",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co je typické pro chronické selhání ledvin?",
    "moznosti": [
      "vzniká silným krvácením",
      "hypofosfatémie a hyperkalcemie",
      "dochází k ektopické kalcifikaci v srdci, plicích, cévách, žaludku"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-028",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Jak se nazývá otočení orgánu kolem podélné osy",
    "moznosti": [
      "Torze",
      "Intususcepce",
      "Hernie",
      "volvulus"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-029",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Granulačná tkáň čo NENÍ pravda",
    "moznosti": [
      "Obsahuje myofibroblasty",
      "Je zásadní součástí hojení",
      "Je hlavní část 2. fáze hojení"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-030",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Jak reaguje srdce na objemové přetížení?",
    "moznosti": [
      "Hypertrofie levé komory",
      "Hypertrofie pravé komory",
      "Dilatace levé komory"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-031",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Zmnožení počtu buněk",
    "moznosti": [
      "Hyperplazie",
      "Hypertrofie"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-032",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Cornu cutaneum",
    "moznosti": [
      "U koní",
      "U všech zvířat",
      "U krav v oblasti rohu, papilomaviry",
      "U psu, způsobeno herpesvirem",
      "U koček rohovinová? ložiska spojené s FeLV"
    ],
    "spravne": [
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-033",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Jak může buňka reagovat na patologické podněty:",
    "moznosti": [
      "Nekroza",
      "Apoptoza",
      "Metaplazie",
      "Deplece glykogenu",
      "Všechno správně"
    ],
    "spravne": [
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-034",
    "tema": "Patmorfa 2024",
    "typ": "viac",
    "otazka": "Salmonelóza u psů a koček co je NEpravda:",
    "moznosti": [
      "Krváceniny v parenchymatózních orgánech",
      "Je častá u zvířat s dobrou imunitou",
      "Způsobuje bronchopneumonie"
    ],
    "spravne": [
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-035",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Kožní leishmanioza",
    "moznosti": [
      "neutrofilní a granulocytární infiltrát",
      "pěnité makrofágy"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-036",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Který kationt převládá v kaseifikační/koagulační nekroze?",
    "moznosti": [
      "vápník",
      "draslík",
      "železo"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-037",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Hyperhydratace v preformovaných dutinách se jmenuje:",
    "moznosti": [
      "hydrops",
      "transsudace/transsudát"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-038",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Které z následujících tvrzení o inf. Hepatitidě psů je pravdivé",
    "moznosti": [
      "V důsledku DIC a poškození endot. Kapilár se rozvijí hemorh. Diatéza",
      "Játra zvetšená, edematózne prosákla"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-039",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Které parazity NEnalezneme v průdušnici?",
    "moznosti": [
      "Schistosoma spp",
      "Capillarie aerophila",
      "Syngamus",
      "Spirocerca lupi",
      "Filaroides osleri"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-040",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Zánět – správné tvrzení:",
    "moznosti": [
      "Vzniká jen z chemických podnětů",
      "Len z fyzikálnych",
      "Obecná reakce na noxu pomocí cév",
      "Chemotaxe je působení chemických látek při zánětu"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-041",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "serozní atrofie perikardiální tukové tkáně – vybrat správné tvrzení",
    "moznosti": [
      "jen u obéznich",
      "želatinózna hmota s ložiskami nekrózy tukové tkáne"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-042",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Lymfoplazmocytární chronická enteritida – o jaké onemocnění se jedná?",
    "moznosti": [
      "ulcerativní kolitida",
      "nespecifický střevní zánět"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-043",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co určuje, zda je nádor maligní/benigní",
    "moznosti": [
      "Počet mitóz",
      "Metastáze"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-044",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co je hlavní funkcí granulační tkáně při hojení per secundam:",
    "moznosti": [
      "přemostit ránu = vyplniť defekt",
      "poskytnout výživu makrofágům",
      "vychytat bakterie"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-045",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Pes, byla mu provedena levostranná nefrektomie, poté byla pravá ledvina zvětšená, o jaký problém se jedná:",
    "moznosti": [
      "hypertrofie",
      "hyperplazie"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-046",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co tvoří primární krevní zátku",
    "moznosti": [
      "trombocyty",
      "endotelie",
      "fibrin",
      "endotelin"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-047",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Pri nedostatku živín je to atrofia z akej príčiny",
    "moznosti": [
      "inaniční atrofie",
      "Atrofie z imobilizace",
      "Tlaková atrofie"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-048",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Nádor z podpornej tkáne perifernich nervu",
    "moznosti": [
      "neurinom -neurofibrom",
      "neurocytom -neuroblastom"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-049",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Hypertrofická osteopatie - Marieho syndom",
    "moznosti": [
      "Hypertrofická osteopatie jako sekundární reakce na chronické procesy zánětlivého, nebo neoplastického původu",
      "Něco s vitamínem A a ovlivněním proliferace dlouhých kostí",
      "Málo vit D"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-050",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co neplatí pro akutní zánět",
    "moznosti": [
      "edém",
      "kongesce cévy",
      "metaplazie",
      "nekróza"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-051",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Rhodococcus equi – co dělá a které orgány jsou nejvíce postiženy?",
    "moznosti": [
      "katarální bronchopneumonie, abcedující lymfadenitida, pyogranulomatózní enteritida",
      "fibrinózní pleuropneumonie, hnisavá lymfadenitida, ulcerativní enterokolitida",
      "granulomatózní splenitida, pneumonie, lymfadenitida a enterokolitida",
      "pyogranulomatózní pneumonie, lymfadenitida, ulcerativní enterokolitida",
      "abcedující pneumonie, pyogranulomatózní splenitida, katarální enteritida"
    ],
    "spravne": [
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-052",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Co vzniká při poškození kůže popálením/zánětem",
    "moznosti": [
      "Leukoderma",
      "Vitiligo",
      "Lentigo",
      "Amelanosis"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-053",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Jak se označuje nádor tvořený propletenými snopci protáhlých nestejně velkých vřetenitých buněk s velkými, atypickými hyperchromními jádry a četnými mitózami?",
    "moznosti": [
      "Sarkom",
      "Leiomyom",
      "Lymfom",
      "adenokarcinom",
      "dlaždicový karcinom"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-054",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Které z následujících tvrzení o Steatóze je pravdivé?",
    "moznosti": [
      "každá porucha metabolismu lipidů se projeví jako steatóza",
      "steatóza je nahromadění tuků v jakékoliv buňce",
      "je to akumulace lipidů v buňce ve formě kapkovitých agregátů",
      "výskyt lipidů v buňce je vždy patologický jev",
      "příkladem steatózy je např. lipomatóza myokardu"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-055",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Který z následujících stavů můžeme s nejmenší pravděpodobností očekávat v oblasti akutního zánětu?",
    "moznosti": [
      "Kongesci cév",
      "Edém",
      "Polymorfonukleáry",
      "Nekrózu",
      "Metaplazii"
    ],
    "spravne": [
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-056",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Mezi příčinu hemodynamického edému plic nepatří",
    "moznosti": [
      "Mitrální stenóza",
      "Sepse",
      "Enteropatie se ztrátou proteinů",
      "Obstrukce plicních žil a stagnace krve v plicích",
      "Hypertenze v levém atriu při levostranné srdeční insuficienci"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-057",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Které tvrzení o selhání levého srdce je nepravdivé?",
    "moznosti": [
      "Vzniká při poruše funkce mitrální a aortální chlopně",
      "Vzniká v důsledku difúzní intersticiální fibrózy plic",
      "Vzniká edém plic",
      "Morfologicky se projeví výrazným městnáním krve v plicích",
      "Nejčastěji způsobeno snížením kontraktility myokardu při myokarditidách"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-058",
    "tema": "Patmorfa 2024",
    "typ": "jedna",
    "otazka": "Které tvrzení o akutní bronchitidě je pravdivé?",
    "moznosti": [
      "Nápadná je fibróza lamina propria",
      "Infiltrát je tvořen především lymfocyty, makrofágy a plasmocyty",
      "Častou komplikací psů jsou alveolární atelektázy a bronchoektázie",
      "Vyvíjí se v případech intenzivního prolongovaného poškození epitelu s nadprodukcí hlenu",
      "Je charakteristická různě intenzivní sekrecí, často dochází k rychlé restituci epitelu"
    ],
    "spravne": [
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2024-059",
    "tema": "Patmorfa 2024",
    "typ": "viac",
    "otazka": "Při kterém z následujících stavů vzniká metastatická kalcifikace?",
    "moznosti": [
      "Hyperparathyroidismus",
      "Nekróza tkáně",
      "Akutní onemocnění ledvin",
      "Nedostatek vitaminu D",
      "Embolie atheronových kalcifikovaných hmot"
    ],
    "spravne": [
      0,
      2,
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa 2024",
    "subtema": "Patmorfa 2024"
  },
  {
    "id": "vet2025-001",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo patrí medzi paramyxovírusy?",
    "moznosti": [
      "psinka (canine distemper virus)",
      "newcastleská choroba",
      "parainfluenza psov",
      "besnota (rhabdovírusy)",
      "myxomatóza králikov (poxvírusy)"
    ],
    "spravne": [
      0,
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-002",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Ako sa prejavuje hypertyreóza?",
    "moznosti": [
      "dystrofia pečene (chronicky)",
      "hypertrofia srdca",
      "atrofia srdca",
      "zväčšenie štítnej žľazy",
      "zmenšenie štítnej žľazy"
    ],
    "spravne": [
      0,
      1,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-003",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo NEPLATÍ o karcinóme štítnej žľazy?",
    "moznosti": [
      "je častejší u psov ako u mačiek",
      "je častejší u mačiek ako u psov",
      "je častejšie unilaterálny",
      "metastázuje do pľúc"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-004",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo hlavne obsahuje biely trombus?",
    "moznosti": [
      "trombocyty a fibrín",
      "neutrofily",
      "makrofágy",
      "hyalín",
      "granulocyty"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-005",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo NEPLATÍ pre toxoplazmu?",
    "moznosti": [
      "replikuje sa v čreve medzihostiteľa",
      "definitívny hostiteľ je z čeľade Felidae",
      "človek môže byť medzihostiteľ",
      "kongenitálna forma najčastejšie u oviec",
      "patrí medzi kokcídie"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-006",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo NEPATRÍ medzi neisté známky smrti?",
    "moznosti": [
      "zástava dychu",
      "zástava srdca",
      "areflexia",
      "znížená telesná teplota",
      "livores mortis (posmrtné škvrny)"
    ],
    "spravne": [
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-007",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Označte správne tvrdenia o ortuti.",
    "moznosti": [
      "anorganická ortuť sa v prírode mení na organickú",
      "anorganická ortuť sa kumuluje v nervovom systéme",
      "organická ortuť spôsobuje nekrózu Purkyňových buniek",
      "organická ortuť spôsobuje toxické neuropatie",
      "otrava ortuťou ohrozuje hlavne bylinožravce"
    ],
    "spravne": [
      0,
      1,
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-008",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Správne tvrdenia o sekundárnom hyperadrenokorticizme.",
    "moznosti": [
      "nádor neurohypofýzy",
      "nádor pars distalis adenohypofýzy",
      "označuje sa ako Cushingov syndróm",
      "zvýšená produkcia ACTH",
      "znížená produkcia ACTH"
    ],
    "spravne": [
      1,
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-009",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Správne tvrdenia o blastómoch.",
    "moznosti": [
      "vysoko malígne",
      "benígne",
      "vysoká celularita",
      "nízka celularita",
      "invazívne"
    ],
    "spravne": [
      0,
      2,
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-010",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo spôsobuje Cushingov syndróm u psa?",
    "moznosti": [
      "zvýšený rast srsti",
      "symetrická alopécia",
      "atrofia epidermis",
      "kalcifikácia kože",
      "hyperpigmentácia"
    ],
    "spravne": [
      1,
      2,
      3,
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-011",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Keď krv stagnuje vo veľkom krvnom obehu (venostáza), čo to spôsobí v pečeni?",
    "moznosti": [
      "edém",
      "anasarka",
      "kongescia",
      "atrofia",
      "hyperplázia"
    ],
    "spravne": [
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-012",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Aký šok aktivuje kinínový systém, komplement a fibrinolytický systém?",
    "moznosti": [
      "hypovolemický",
      "toxigénny (endotoxínový)",
      "neurogénny",
      "kardiogénny"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-013",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Vyberte správne tvrdenie o deficite stopových prvkov a vitamínov.",
    "moznosti": [
      "nedostatok selénu spôsobuje mortalitu seliat",
      "nedostatok riboflavínu je problém hlavne u psov",
      "nedostatok riboflavínu spôsobuje vysokú mortalitu v chovoch kuriat",
      "selén pôsobí priamo toxicky na kožu"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-014",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Rozdiely medzi nekrózou a apoptózou.",
    "moznosti": [
      "rozpadnuté bunky vyzerajú inak",
      "pri apoptóze dôjde k pyknóze",
      "pri apoptóze sa jadro rozpadne karyorexou (pri nekróze karyolýzou)",
      "apoptóza je vždy sprevádzaná zápalovou reakciou"
    ],
    "spravne": [
      0,
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-015",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo je príčinou primárnej hyperparatyreózy?",
    "moznosti": [
      "neoplastické procesy",
      "nutričná príčina",
      "toxická príčina"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-016",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo spôsobí pľúcnu hypertenziu?",
    "moznosti": [
      "chronické ochorenie pľúc",
      "trikuspidálna nedostatočnosť",
      "vazodilatácia kapilár"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-017",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Ako vyzerá akútny zápal?",
    "moznosti": [
      "edém",
      "vazodilatácia",
      "vazokonstrikcia",
      "infarkt"
    ],
    "spravne": [
      0,
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-018",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Ako sa nazýva cysta, ktorá vznikla traumatickým zanesením epitelu do submukózy?",
    "moznosti": [
      "implantačná (inklúzna) cysta",
      "hyperplastická cysta",
      "retenčná cysta (aterom, comedo, ranula)"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-019",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Črevo – lymfoplazmocytárna proliferácia. O aké ochorenie ide?",
    "moznosti": [
      "nešpecifický črevný zápal",
      "salmonelóza (hnisavý fibrinózny)",
      "ulcerózna kolitída"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-020",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Ako bude vyzerať srdce uhynutého zvieraťa po srdcovom zlyhaní?",
    "moznosti": [
      "tenké (zoslabené) steny komôr",
      "znížená hmotnosť",
      "hypertrofia stien"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-021",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Aké sú sekundárne nádory v hypofýze?",
    "moznosti": [
      "ameloblastóm",
      "malígny lymfóm",
      "malígny melanóm",
      "mamárny karcinóm"
    ],
    "spravne": [
      1,
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-022",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo platí o hypertermii?",
    "moznosti": [
      "spôsobí cirkulačné zlyhanie a šok",
      "siriasis je úpal a výrazne ovplyvňuje CNS",
      "prevažujú anabolické procesy"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-023",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Chronická oklúzia arterioly sa prejaví:",
    "moznosti": [
      "atrofiou tkaniva",
      "koagulačnou nekrózou (akútna)",
      "kolikvačnou nekrózou",
      "hypopláziou"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-024",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo je pravda o astrocytoch?",
    "moznosti": [
      "patria do mikroglií",
      "tvoria podpornú tkanivo neurónov",
      "zúčastňujú sa imunitnej odpovede",
      "sú v sivej aj bielej hmote"
    ],
    "spravne": [
      1,
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-025",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "S akým procesom súvisia kaspázy?",
    "moznosti": [
      "nekróza",
      "apoptóza",
      "ischémia"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-026",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Označ správne tvrdenia o ischémii a hypoxii.",
    "moznosti": [
      "ischémia je nedostatočné prekrvenie orgánov",
      "hypoxia je nedostatok kyslíka v krvi",
      "hypoxia je nedostatočné zásobenie orgánov krvou",
      "ischémia je nedostatok kyslíka v tkanive",
      "hypoxia je nedostatok kyslíka v tkanive"
    ],
    "spravne": [
      0,
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-027",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Bunka vylučuje látku, ktorá ovplyvňuje tú istú bunku. O aký typ sekrécie ide?",
    "moznosti": [
      "parakrinná",
      "endokrinná",
      "autokrinná",
      "neurokrinná",
      "neuroendokrinná"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-028",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Adenómy hypofýzy.",
    "moznosti": [
      "sú menej časté než karcinómy",
      "sú dobre ohraničené (obvykle opuzdrené)",
      "sú okrúhle/oválne",
      "môžu utlačiť n. opticus",
      "môžu zdeformovať celú hypofýzu"
    ],
    "spravne": [
      1,
      2,
      3,
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-029",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Akou technikou sa farbí amyloid?",
    "moznosti": [
      "PAS, Bestov karmín (glykogén)",
      "Konžská červeň",
      "Sudánová červeň (tuky)"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-030",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Tuková embólia.",
    "moznosti": [
      "vzniká trieštivou zlomeninou veľkých kostí",
      "embolus sa dostáva do mozgu",
      "tvorí sa pri požití niečoho tučného",
      "nie je závažná",
      "vzniká pri traumatickom poranení brucha"
    ],
    "spravne": [
      0,
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-031",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Primárna endokrinopatia.",
    "moznosti": [
      "vzniká poškodením danej žľazy",
      "vzniká funkčným nádorom buniek danej žľazy",
      "vzniká degradáciou hormónu"
    ],
    "spravne": [
      0,
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-032",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Choristia.",
    "moznosti": [
      "ektopické tkanivo",
      "tkanivo na inom mieste a rovnakej stavby",
      "tkanivo na správnom mieste, ale dezorganizované",
      "príkladom je pankreatické tkanivo v stene žalúdka",
      "je to isté čo choristóm"
    ],
    "spravne": [
      0,
      1,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-033",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Lipomatóza srdca.",
    "moznosti": [
      "u kachektických jedincov",
      "ukladanie tuku do kardiomyocytov",
      "ukladanie tuku medzi svalové vlákna srdca"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-034",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo spôsobuje Rhodococcus equi?",
    "moznosti": [
      "pyogranulomatózna bronchopneumónia, lymfadenitída, ulcerózna enteritída",
      "hnisavá bronchopneumónia, pyogranulomatózna lymfadenitída, katarálna enteritída",
      "katarálna bronchopneumónia, lymfadenitída, pyogranulomatózna enteritída"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-035",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Vyberte správne tvrdenia o krvácaní do CNS.",
    "moznosti": [
      "epidurálny hematóm je častejší u ľudí než u zvierat",
      "epidurálny hematóm je častejší u zvierat než u ľudí",
      "subarachnoidálne krvácanie je častejšie u ľudí než u zvierat",
      "subarachnoidálne krvácanie je častejšie u zvierat než u ľudí"
    ],
    "spravne": [
      0,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-036",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Osteomalácia.",
    "moznosti": [
      "sivá želatínová hmota v kostnej dreni",
      "krehké, lámavé kosti (osteoporóza)",
      "dutina kostnej drene je rozšírená až do epifýz",
      "je to ochorenie rastúcich kostí"
    ],
    "spravne": [
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-037",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Ako sú fagocytované mikroorganizmy zahubené?",
    "moznosti": [
      "lyzozýmom",
      "lyzozomálnymi enzýmami",
      "peroxidom vodíka",
      "chemokínmi"
    ],
    "spravne": [
      0,
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-038",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Vyber NESPRÁVNE tvrdenie o kazeóznej nekróze.",
    "moznosti": [
      "je synonymom pre kazeifikačnú nekrózu",
      "má štruktúru mäkkého tvarohu",
      "má drobivú štruktúru žltkastej farby",
      "tvorí sa pri paratuberkulóze a pasteurelóze",
      "tvorí sa pri TBC a pseudotuberkulóze"
    ],
    "spravne": [
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-039",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Správne tvrdenia o plynatej gangréne.",
    "moznosti": [
      "dôležité je aeróbne prostredie",
      "postihnuté tkanivo je tmavočervené",
      "baktérie, ktoré ju spôsobujú, majú histolytický účinok",
      "na tkanivo pôsobia anaeróbne baktérie svojimi toxínmi"
    ],
    "spravne": [
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-040",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Pri dystopii sleziny dochádza v slezine k:",
    "moznosti": [
      "akútnej aktívnej hyperémii",
      "akútnej pasívnej hyperémii",
      "chronickej aktívnej hyperémii",
      "chronickej pasívnej hyperémii",
      "ischémii"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-041",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Antrakóza pľúc.",
    "moznosti": [
      "vzniká pri streľbe do pľúc",
      "má žltú farbu",
      "pigment je väčšinou fagocytovaný",
      "ide o vdýchnutie kremičitého prachu (silikóza)"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-042",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Správne tvrdenia o regenerácii.",
    "moznosti": [
      "regenerácia a reparácia sa vzájomne vylučujú",
      "je to nahradenie funkčne a morfologicky rovnocenným tkanivom",
      "je súčasťou reparatívneho procesu",
      "u cicavcov sa prejavuje skôr náhradou buniek a tkanív (namiesto orgánov a končatín ako u plazov)"
    ],
    "spravne": [
      1,
      2,
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-043",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Akútna zápalová reakcia vtákov.",
    "moznosti": [
      "heterofilný granulóm",
      "rôzne typy granulómov",
      "ani jedna odpoveď nie je správna"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-044",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo sa využíva na určenie prognózy tumoru?",
    "moznosti": [
      "postihnutie lymfatických uzlín",
      "mitotický index",
      "diferenciácia buniek",
      "farba nádoru na reze"
    ],
    "spravne": [
      0,
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-045",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo NEPATRÍ medzi mezenchymálne tumory?",
    "moznosti": [
      "rabdomyosarkóm",
      "leiomyóm",
      "urotelový papilóm"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-046",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Čo NEPLATÍ o lymfóme ošípaných?",
    "moznosti": [
      "vyskytuje sa u jedincov vo veku 2-3 mesiace",
      "vyskytuje sa u jedincov stredného veku",
      "je najčastejším tumorom ošípaných"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-047",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Aké herpetické ochorenia spôsobujú lézie v CNS?",
    "moznosti": [
      "Aujeszkého choroba",
      "malígna katarálna horúčka (hlavnička)",
      "besnota (rhabdovírus)"
    ],
    "spravne": [
      0,
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-048",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Správne tvrdenie o cyanotickej indurácii orgánov.",
    "moznosti": [
      "je to znížené množstvo redukovaného hemoglobínu",
      "dochádza k zhrubnutiu (indurácii) orgánov fibrózou pri chronickej venóznej kongescii",
      "prejavuje sa anemickými sliznicami"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-049",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Na čo pôsobia dobre rozpustné dráždivé plyny?",
    "moznosti": [
      "alveoly",
      "tracheu",
      "bronchioly",
      "pľúcne interstícium",
      "interalveolárne septá"
    ],
    "spravne": [
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-050",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Kto je najčastejšie infikovaný psím herpesvírusom (CHV-1)?",
    "moznosti": [
      "psy nad 3 roky",
      "brezé sučky",
      "šteňatá do 3 týždňov (nehnisavá nekrotická meningoencefalitída)",
      "jedince medzi 1.-3. rokom"
    ],
    "spravne": [
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-051",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Kongenitálne vady sleziny.",
    "moznosti": [
      "agenéza",
      "hypoplázia",
      "hemangiosarkóm (získaný nádor)"
    ],
    "spravne": [
      0,
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-052",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Adenóm nadobličky.",
    "moznosti": [
      "pri raste môže zničiť celú nadobličku",
      "môže, ale nemusí byť funkčný",
      "typicky metastázuje",
      "je väčší než karcinóm nadobličky",
      "je menší než karcinóm nadobličky"
    ],
    "spravne": [
      0,
      1,
      4
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-053",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Ako sa nazývajú zväčšené, palisádovito usporiadané makrofágy s ovoidným jadrom?",
    "moznosti": [
      "epiteloidná bunka (veľká, slabo sa farbiaca)",
      "Langhansova bunka (typ obrovskej bunky pri TBC)",
      "obrovská bunka (giant cell – syncýtium makrofágov)"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-054",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Nádor z buniek vretenovitého tvaru rôznych veľkostí je:",
    "moznosti": [
      "sarkóm",
      "leiomyóm (skôr uniformné bunky)",
      "adenóm (žľazový epitel – kubické, cylindrické bunky)"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-055",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Reverzibilná zmena na bunke je:",
    "moznosti": [
      "hydropická degenerácia",
      "karyorexa",
      "ruptúra lyzozómu"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-056",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Popis kožnej lézie: svetlá, prominujúca, so spongiózou. Čo to je?",
    "moznosti": [
      "urtikária (žihľavka – bledá vyvýšená lézia z perivaskulárneho edému)",
      "papula (pupienok – vyvýšená tuhá lézia)",
      "hygróm (podkožný mäkký cystický útvar nad kostnými výčnelkami)"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-057",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Kongenitálna absencia melanínu v koži je:",
    "moznosti": [
      "albinizmus",
      "névus (materské znamienko)",
      "amelanodermia"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-058",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo je pravda o akútnom zlyhaní obličiek (ARF)?",
    "moznosti": [
      "je reverzibilné",
      "prejavuje sa polyúriou",
      "môže ho spôsobiť akútna tubulárna nekróza pri toxických látkach a ischémii"
    ],
    "spravne": [
      0,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-059",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo je pravda pre chronické zlyhanie obličiek (CHRF)?",
    "moznosti": [
      "neregeneratívna anémia z dôvodu zníženej tvorby erytropoetínu",
      "ektopická kalcifikácia orgánov v dôsledku sekundárnej hyperparatyreózy",
      "je ireverzibilné",
      "regeneratívna anémia z nadprodukcie erytropoetínu"
    ],
    "spravne": [
      0,
      1,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-060",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Keď sa zle podajú lieky do karotídy u koňa, čo sa stane v CNS?",
    "moznosti": [
      "granulóm",
      "krvácaniny",
      "encefalitída",
      "encefalomalácia"
    ],
    "spravne": [
      3
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-061",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Vyber pravdivé tvrdenia o CNS.",
    "moznosti": [
      "pri primárnej demyelinizácii je zachovaný axón",
      "pri sekundárnej demyelinizácii je zachovaný axón",
      "uprostred nekrózy v CNS zostáva cystický útvar (kolikvačná nekróza = infarktová jazva)"
    ],
    "spravne": [
      0,
      2
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-062",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čím je tvorená hematoencefalická bariéra (HEB) a čo o nej platí?",
    "moznosti": [
      "oligodendrocytmi",
      "výbežkami astrocytov",
      "mozgovými plenami",
      "bráni vstupu baktérií do CNS",
      "periférne nervy sú chránené HEB",
      "periférne nervy NIE sú chránené HEB"
    ],
    "spravne": [
      1,
      3,
      5
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-063",
    "tema": "Patmorfa léto 2025",
    "typ": "viac",
    "otazka": "Čo NEPLATÍ pri hypoadrenokorticizme?",
    "moznosti": [
      "tachykardia",
      "hypertenzia",
      "hypotenzia",
      "hyponatrémia",
      "hypotermia"
    ],
    "spravne": [
      0,
      1
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  },
  {
    "id": "vet2025-064",
    "tema": "Patmorfa léto 2025",
    "typ": "jedna",
    "otazka": "Vyber pravdu o livores mortis.",
    "moznosti": [
      "podkožie je bledé alebo červené",
      "pri vyššej teplote prostredia sú horšie viditeľné",
      "ak je krv tekutá, sú lepšie ohraničené"
    ],
    "spravne": [
      0
    ],
    "vysvetlenie": "",
    "prezentacia": "Patmorfa léto 2025",
    "subtema": "Patmorfa léto 2025"
  }
];

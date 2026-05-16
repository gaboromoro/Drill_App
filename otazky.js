const otazky = [
  {
    id: 1,
    tema: "Databázy",
    typ: "viac",
    otazka: "Co je pravda v případě relačních databází?",
    moznosti: [
      "Data jsou uložena v tabulkách.",
      "Logické struktury jsou odděleny od fyzického uložení dat.",
      "Nelze je uložit do souboru.",
      "Pro připojení k databázi musí existovat aktivní síťové připojení."
    ],
    spravne: [0, 1],
    vysvetlenie: "Relačná databáza pracuje s tabuľkami a logická štruktúra je oddelená od fyzického uloženia."
  },
  {
    id: 2,
    tema: "Kolekcie",
    typ: "viac",
    otazka: "Podle čeho jsou setříděny prvky v datové struktuře TreeMap?",
    moznosti: [
      "Dle vlastního kritéria definovaného při implementaci rozhraní Comparable v rámci dané třídy.",
      "Dle vlastního kritéria definovaného při implementaci rozhraní Comparator použitého v dané kolekci.",
      "Podle abecedy, případně podle hodnoty v případě primitivních datových typů.",
      "Pomocí iterátoru."
    ],
    spravne: [0, 1],
    vysvetlenie: "TreeMap triedi podľa kľúča. Používa prirodzené radenie Comparable alebo dodaný Comparator."
  },
  {
    id: 3,
    tema: "GUI",
    typ: "jedna",
    otazka: "Jaký správce uspořádání je použit v následujícím obrázku?",
    obrazok: "assets/flowlayout-ukazka.png",
    popisObrazka: "Ukážka okna s tlačidlami usporiadanými postupne do riadkov",
    moznosti: [
      "FlowLayout",
      "GridLayout",
      "Nelze toho dosáhnout použití jednoho správce uspořádání.",
      "BorderLayout"
    ],
    spravne: [0],
    vysvetlenie: "Komponenty idú postupne za sebou do riadkov, čo zodpovedá FlowLayout."
  },
  {
    id: 4,
    tema: "Kolekcie",
    typ: "viac",
    otazka: "K čemu slouží iterátor v případě kolekcí?",
    moznosti: [
      "K vyhledávání prvků uložených v kolekci.",
      "K procházení kolekce.",
      "K rozdělení kolekce na dvě podkolekce.",
      "K odstranění prvků v rámci kolekce."
    ],
    spravne: [1, 3],
    vysvetlenie: "Iterator poskytuje hlavne prechádzanie kolekcie a metódu remove pre odstránenie posledného prvku vráteného cez next."
  },
  {
    id: 5,
    tema: "Výnimky",
    typ: "jedna",
    otazka: "Co platí v případě ošetření více různých výjimek vzniklých v jednom bloku try s více bloky catch?",
    moznosti: [
      "Nejprve musí být implementovány bloky catch reprezentující výjimky odvozených tříd, poté až tříd rodičovských.",
      "Blok try může mít pouze jeden blok catch, který ošetří jen výjimky dané třídy. Všechny ostatní výjimky jsou ošetřeny v bloku finnaly.",
      "Blok try může mít pouze jeden blok catch, všechny výjimky jsou ošetřeny v tomto bloku.",
      "Bloky catch musí být implementovány v pořadí, ve kterém dochází ke vzniku jednotlivých výjimek."
    ],
    spravne: [0],
    vysvetlenie: "Najprv sa píšu špecifickejšie výnimky, až potom všeobecnejšie rodičovské triedy."
  },
  {
    id: 6,
    tema: "Triedy",
    typ: "jedna",
    otazka: "Může být v deklaraci konstruktoru uveden nějaký návratový typ?",
    moznosti: [
      "Pravda",
      "Nepravda"
    ],
    spravne: [1],
    vysvetlenie: "Konštruktor nemá návratový typ, ani void."
  },
  {
    id: 7,
    tema: "Návrhové vzory",
    typ: "jedna",
    otazka: "Jaký návrhový vzor byste použili v případě, že potřebujete právě jednu realizaci, která bude vždy k použití?",
    moznosti: [
      "Statická tovární metoda (Static Factory)",
      "Služební (Servant)",
      "Jedináček (Singleton)",
      "Přepravce (Messenger)"
    ],
    spravne: [2],
    vysvetlenie: "Singleton zabezpečuje práve jednu inštanciu triedy."
  },
  {
    id: 8,
    tema: "Dátové typy",
    typ: "jedna",
    otazka: "Jakým způsobem lze primitivní datový typ převést na objekt?",
    moznosti: [
      "Pomocí zapouzdření.",
      "Pomocí obálkových typů.",
      "Pomocí enumerátoru.",
      "Pomocí dynamické datové struktury."
    ],
    spravne: [1],
    vysvetlenie: "Primitívne typy sa v kolekciách používajú cez obalové typy, napríklad int cez Integer."
  },
  {
    id: 9,
    tema: "Syntax",
    typ: "jedna",
    otazka: "Obsahuje tento javovský kód chybu?",
    kod: "int a = 5;\na = a - 5;\nif (a)\n    System.out.println(\"Vysledek operace je nenulovy\");",
    moznosti: [
      "Pravda",
      "Nepravda"
    ],
    spravne: [0],
    vysvetlenie: "V Jave musí byť podmienka typu boolean. Číslo 0 alebo 1 sa nedá použiť ako podmienka."
  },
  {
    id: 10,
    tema: "Objekty",
    typ: "jedna",
    otazka: "Dojde při spuštění následujícího kódu k vytvoření objektu ze třídy Worker?",
    kod: "Worker worker();",
    moznosti: [
      "Pravda",
      "Nepravda"
    ],
    spravne: [1],
    vysvetlenie: "Bez kľúčového slova new sa objekt nevytvorí."
  },
  {
    id: 11,
    tema: "GUI",
    typ: "viac",
    otazka: "Do top level komponent patří:",
    moznosti: [
      "JPanel",
      "JDialog",
      "JFrame",
      "JMain"
    ],
    spravne: [1, 2],
    vysvetlenie: "Podľa prezentácie sú top-level komponenty hlavne JFrame a JDialog. JPanel je kontajnerová komponenta."
  },
  {
    id: 12,
    tema: "Kolekcie",
    typ: "jedna",
    otazka: "Jaká jsou specifika datové struktury HashSet?",
    moznosti: [
      "Vyhledávání probíhá podle metod hashCode a equals.",
      "Obsahuje dvojici hodnot klíč-hodnota.",
      "Musí obsahovat implementaci rozhraní Comparable.",
      "Prvky jsou trvale setříděny."
    ],
    spravne: [0],
    vysvetlenie: "HashSet používa hashCode a equals. Trvalé triedenie patrí k TreeSet, nie HashSet."
  },
  {
    id: 13,
    tema: "Kolekcie",
    typ: "viac",
    otazka: "Jaká jsou specifika datové struktury seznam (List)?",
    moznosti: [
      "Může obsahovat dva stejné prvky.",
      "Může obsahovat neomezený počet prvků.",
      "Udržuje pořadí vkládaných prvků.",
      "Nelze do ní uložit primitivní datový typ."
    ],
    spravne: [0, 1, 2, 3],
    vysvetlenie: "List povoľuje duplicity, zachováva poradie a pracuje s objektmi. Primitívne typy sa ukladajú cez obalové typy."
  },
  {
    id: 14,
    tema: "Dedičnosť",
    typ: "jedna",
    otazka: "Mějme rodičovskou třídu Worker, která obsahuje implicitní konstruktor. Jakým způsobem zavoláme tento konstruktor v konstruktoru odvozené třídy?",
    moznosti: [
      "super()",
      "new Worker(this)",
      "this.Worker()",
      "Worker(this)"
    ],
    spravne: [0],
    vysvetlenie: "Konštruktor rodiča sa volá pomocou super()."
  },
  {
    id: 15,
    tema: "GUI",
    typ: "viac",
    otazka: "Jaké znáte správce uspořádání (LayoutManager)?",
    moznosti: [
      "TabLayout",
      "FlowLayout",
      "BorderLayout",
      "GridLayout"
    ],
    spravne: [1, 2, 3],
    vysvetlenie: "V prezentáciách sú uvedené FlowLayout, BorderLayout a GridLayout."
  },
  {
    id: 16,
    tema: "Testovanie",
    typ: "jedna",
    otazka: "K čemu slouží příkaz assert?",
    moznosti: [
      "K přiřazení sledovaných oblastí kódu do oblasti zájmu.",
      "K hlídání platnosti podmínek během běhu programu.",
      "K testování programu.",
      "K přesměrování výstupního proudu z/do konzolového okna (popř. souboru)."
    ],
    spravne: [1],
    vysvetlenie: "Assert kontroluje, či počas behu programu platí zadaná podmienka."
  },
  {
    id: 17,
    tema: "Výnimky",
    typ: "jedna",
    otazka: "Mějme následující kód, co vše se vypíše při spuštění kódu?",
    kod: "try {\n    int a = 10 / 0;\n    System.out.println(\"Vysledek operace je \" + a);\n}\ncatch (ArithmeticException e) {\n    System.out.println(\"Doslo k deleni nulou\");\n}\ncatch (RuntimeException e) {\n    System.out.println(\"Doslo k neosetrene vyjimce\");\n}\ncatch (Exception e) {\n    System.out.println(\"Doslo k vyjimce\");\n}",
    moznosti: [
      "Doslo k vyjimce",
      "Vysledek operace je Infinity.",
      "Doslo k neosetrene vyjimce",
      "Doslo k deleni nulou"
    ],
    spravne: [3],
    vysvetlenie: "Delenie int nulou vyvolá ArithmeticException a zachytí sa v prvom catch bloku."
  },
  {
    id: 18,
    tema: "Prístupové práva",
    typ: "jedna",
    otazka: "Co znamená modifikátor přístupu private?",
    moznosti: [
      "Daný prvek je přístupný pouze v rámci své třídy.",
      "Daný prvek je přístupný v rámci své třídy a potomků této třídy.",
      "Daný prvek je přístupný pouze v rámci svého balíčku."
    ],
    spravne: [0],
    vysvetlenie: "Private člen je dostupný iba vo svojej triede. Prístup pre potomkov opisuje protected."
  },
  {
    id: 19,
    tema: "Dátové typy",
    typ: "jedna",
    otazka: "Jaká je počáteční hodnota datového typu double?",
    moznosti: [
      "0.0d",
      "0.0f",
      "0",
      "není definována"
    ],
    spravne: [0],
    vysvetlenie: "Predvolená hodnota atribútu typu double je 0.0d."
  },
  {
    id: 20,
    tema: "Kolekcie",
    typ: "jedna",
    otazka: "K čemu slouží metoda hashCode?",
    moznosti: [
      "Kontroluje zdrojový kód objektu.",
      "Udává pozici objektu v kolekci na základě hashovací tabulky.",
      "Vrací jedinečnou hodnotu pro danou instanci.",
      "Generuje jedinečnou hodnotu (hash) na základě formálního parametru metody."
    ],
    spravne: [2],
    vysvetlenie: "hashCode vracia číselný hash objektu. V HashSet sa používa spolu s equals."
  },
  {
    id: 21,
    tema: "Výnimky",
    typ: "jedna",
    otazka: "Co je to propagace výjimky?",
    moznosti: [
      "Výjimku neošetřujeme v místě vzniku, ale posouváme na vyšší úroveň v rámci programu.",
      "Výjimku ignorujeme.",
      "Výjimku v místě vzniku ošetříme, ale vytvoříme o tom systémový zápis.",
      "Výjimku propagujeme do jádra programu, kde je automaticky ošetřena."
    ],
    spravne: [0],
    vysvetlenie: "Propagácia znamená, že výnimku neposudzujeme hneď v mieste vzniku, ale necháme ju riešiť vyššiu úroveň."
  },
  {
    id: 22,
    tema: "Java",
    typ: "viac",
    otazka: "Uveďte výhody programovacího jazyka JAVA vůči programovacímu jazyku C++.",
    moznosti: [
      "Obsahuje systém pro automatickou dealokaci paměti.",
      "Je nezávislý na cílovém HW a operačním systému.",
      "Je objektově orientovaný."
    ],
    spravne: [0, 1],
    vysvetlenie: "Java má garbage collector a je prenositeľná cez JVM. Objektová orientácia nie je výhoda voči C++, pretože C++ je tiež objektovo orientované."
  },
  {
    id: 23,
    tema: "Syntax",
    typ: "jedna",
    otazka: "Obsahuje tento javovský kód chybu?",
    kod: "int a = 5;\na = 5;\nif (a > 0)\n    System.out.println(\"Vysledek operace je nenulovy\");",
    moznosti: [
      "Pravda",
      "Nepravda"
    ],
    spravne: [1],
    vysvetlenie: "Podmienka a > 0 je typu boolean, preto je zápis správny."
  },
  {
    id: 24,
    tema: "Balíčky",
    typ: "jedna",
    otazka: "K čemu slouží v javě balíček (package)?",
    moznosti: [
      "Zajišťuje zapouzdření dat.",
      "Sdružuje třídy do logických celků.",
      "Jedná se o nepovinnou anotaci určující oblast využití dané třídy."
    ],
    spravne: [1],
    vysvetlenie: "Package združuje súvisiace triedy do logických celkov."
  },
  {
    id: 25,
    tema: "Abstrakcia",
    typ: "jedna",
    otazka: "Co je to abstraktní třída?",
    moznosti: [
      "Třída, která má abstraktní alespoň jednu metodu nebo proměnnou.",
      "Třída s vysokou mírou abstrakce, kdy při vytvoření objektu z této třídy je třeba v konstruktoru definovat příslušné abstraktní typy.",
      "Třída, která má alespoň jednu metodu abstraktní, z této třídy nelze vytvořit objekt."
    ],
    spravne: [2],
    vysvetlenie: "Z abstraktnej triedy nemožno vytvoriť objekt. V kurze je viazaná na abstraktnú metódu."
  },
  {
    id: 26,
    tema: "Syntax",
    typ: "jedna",
    otazka: "Které klíčové slovo je v Jave spojeno s pojmem větvení?",
    moznosti: [
      "switch",
      "while",
      "branch"
    ],
    spravne: [0],
    vysvetlenie: "switch patrí medzi vetvenie programu. while je cyklus."
  },
  {
    id: 27,
    tema: "Návrhové vzory",
    typ: "viac",
    otazka: "Jaká jsou specifika návrhového vzoru Knihovní třída (Utility class)?",
    moznosti: [
      "Všechny atributy jsou statické.",
      "Znemožňuje dědění.",
      "Má privátní konstruktor.",
      "Všechny metody jsou statické."
    ],
    spravne: [0, 1, 2, 3],
    vysvetlenie: "Podľa prezentácie má Utility class statické atribúty a metódy, private konštruktor a final kvôli zákazu dedenia."
  },
  {
    id: 28,
    tema: "Polymorfizmus",
    typ: "jedna",
    otazka: "Co se vypíše do konzolového okna?",
    kod: "class Worker {\n    public void pozdrav() {\n        System.out.print(\"Ahoj \");\n    }\n}\n\nclass Scientist extends Worker {\n    public void pozdrav() {\n        System.out.print(\"Karle.\");\n    }\n}\n\nWorker karel = new Scientist();\nkarel.pozdrav();",
    moznosti: [
      "Ahoj",
      "Karle",
      "Ahoj Karle"
    ],
    spravne: [1],
    vysvetlenie: "Premenná má typ Worker, ale objekt je Scientist. Pri prekrytí metódy sa zavolá verzia z reálneho objektu."
  },
  {
    id: 29,
    tema: "Triedy",
    typ: "viac",
    otazka: "Co je to konstruktor?",
    moznosti: [
      "Speciální metoda, která je spuštěna ihned při vytvoření objektu.",
      "Metoda, pomocí níž lze inicializovat proměnné při vytvoření daného objektu.",
      "Metoda, která má název shodný s názvem třídy."
    ],
    spravne: [0, 1, 2],
    vysvetlenie: "Konštruktor sa volá pri vytvorení objektu, inicializuje dáta a má rovnaký názov ako trieda."
  }
];

const otvoreneUlohy = [
  "Vytvořte generickou třídu Student obsahující dva privátní atributy ID a Jmeno. Vytvořte konstruktor, metodu vypis a objekt, nad kterým metodu zavoláte.",
  "Mějme třídu Dokument s metodou void zapisData(String data). Upravte metodu tak, aby pro prázdný textový řetězec vracela kontrolovanou výjimku EmptyData, vytvořte objekt a vhodně ošetřete chybové stavy."
];

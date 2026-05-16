const kodoveUlohy = [
  {
    id: 1,
    tema: "Kolekcie",
    zadanie: "Vytvorte triedu Student s privátnym atribútom ID typu int. Upravte triedu tak, aby sa objekty dali použiť v TreeSet alebo TreeMap.",
    kriteria: [
      { popis: "trieda Student", vzory: ["class\\s+student"] },
      { popis: "privátny atribút ID typu int", vzory: ["private\\s+int\\s+id"] },
      { popis: "konštruktor nastavuje ID", vzory: ["student\\s*\\(\\s*int\\s+id", "this\\.id\\s*=\\s*id"] },
      { popis: "triedenie cez Comparable alebo Comparator", vzory: ["implements\\s+comparable\\s*<\\s*student\\s*>", "comparator\\s*<\\s*student\\s*>", "comparingint"] },
      { popis: "porovnanie podľa ID", vzory: ["compareto\\s*\\(", "compare\\s*\\(", "integer\\.compare\\s*\\([^;]*id"] },
      { popis: "použitie TreeSet alebo TreeMap", vzory: ["treeset\\s*<\\s*student", "treemap\\s*<"] }
    ],
    riesenie: `class Student implements Comparable<Student> {
    private int ID;

    public Student(int ID) {
        this.ID = ID;
    }

    public int getID() {
        return ID;
    }

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.ID, other.ID);
    }
}

class Main {
    public static void main(String[] args) {
        java.util.TreeSet<Student> studenti = new java.util.TreeSet<>();
        studenti.add(new Student(1));
    }
}`
  },
  {
    id: 2,
    tema: "Výnimky",
    zadanie: "Trieda Dokument má metódu void zapisData(String data). Upravte ju tak, aby pri prázdnom texte vyhodila kontrolovanú výnimku EmptyData. Vytvorte objekt a výnimku ošetrite.",
    kriteria: [
      { popis: "kontrolovaná výnimka EmptyData", vzory: ["class\\s+emptydata\\s+extends\\s+exception", "throws\\s+emptydata"] },
      { popis: "metóda zapisData(String data)", vzory: ["void\\s+zapisdata\\s*\\(\\s*string\\s+data"] },
      { popis: "metóda deklaruje throws EmptyData", vzory: ["zapisdata[\\s\\S]*throws\\s+emptydata"] },
      { popis: "kontrola prázdneho textu", vzory: ["data\\.isempty\\s*\\(", "data\\.length\\s*\\(\\s*\\)\\s*==\\s*0", "data\\.equals\\s*\\(\\s*\"\"\\s*\\)"] },
      { popis: "vyhodenie výnimky", vzory: ["throw\\s+new\\s+emptydata"] },
      { popis: "volanie v try/catch", vzory: ["try\\s*\\{[\\s\\S]*zapisdata[\\s\\S]*catch\\s*\\(\\s*emptydata"] }
    ],
    riesenie: `class EmptyData extends Exception {
    public EmptyData() {
        super("Data jsou prazdna");
    }
}

class Dokument {
    public void zapisData(String data) throws EmptyData {
        if (data.isEmpty()) {
            throw new EmptyData();
        }
        System.out.println(data);
    }
}

class Main {
    public static void main(String[] args) {
        Dokument d = new Dokument();
        try {
            d.zapisData("");
        } catch (EmptyData e) {
            System.out.println("Chyba: " + e.getMessage());
        }
    }
}`
  },
  {
    id: 3,
    tema: "Triedy a polia",
    zadanie: "Vytvorte triedu Databaze so súkromným poľom String. Veľkosť poľa sa zadáva v konštruktore. Vytvorte metódu na uloženie mena podľa indexu a metódu, ktorá meno z indexu vráti. Vytvorte objekt veľkosti 5, uložte meno a vypíšte ho.",
    kriteria: [
      { popis: "trieda Databaze", vzory: ["class\\s+databaze"] },
      { popis: "súkromné pole String", vzory: ["private\\s+string\\s*\\[\\s*\\]"] },
      { popis: "konštruktor s veľkosťou poľa", vzory: ["databaze\\s*\\(\\s*int\\s+\\w+", "new\\s+string\\s*\\["] },
      { popis: "metóda uloží String podľa indexu", vzory: ["void\\s+\\w+\\s*\\(\\s*string\\s+\\w+\\s*,\\s*int\\s+\\w+", "\\[\\s*\\w+\\s*\\]\\s*=\\s*\\w+"] },
      { popis: "metóda vracia String podľa indexu", vzory: ["string\\s+\\w+\\s*\\(\\s*int\\s+\\w+", "return\\s+\\w+\\s*\\[\\s*\\w+\\s*\\]"] },
      { popis: "vytvorený objekt veľkosti 5 a použitie metód", vzory: ["new\\s+databaze\\s*\\(\\s*5\\s*\\)", "\\.\\w+\\s*\\(\\s*\"[^\"]+\"\\s*,\\s*\\d+", "system\\.out\\.println\\s*\\("] }
    ],
    riesenie: `class Databaze {
    private String[] pole;

    public Databaze(int velikost) {
        pole = new String[velikost];
    }

    public void uloz(String jmeno, int index) {
        pole[index] = jmeno;
    }

    public String vypis(int index) {
        return pole[index];
    }
}

class Main {
    public static void main(String[] args) {
        Databaze db = new Databaze(5);
        db.uloz("Marek", 1);
        System.out.println(db.vypis(1));
    }
}`
  },
  {
    id: 4,
    tema: "Rozhrania",
    zadanie: "Vytvorte rozhranie Worker s metódami nastavPraci a vyplatMzdu. Realizujte ľubovoľnú triedu implementujúcu toto rozhranie.",
    kriteria: [
      { popis: "rozhranie Worker", vzory: ["interface\\s+worker"] },
      { popis: "metóda nastavPraci", vzory: ["void\\s+nastavpraci\\s*\\("] },
      { popis: "metóda vyplatMzdu", vzory: ["void\\s+vyplatmzdu\\s*\\("] },
      { popis: "trieda implementuje Worker", vzory: ["class\\s+\\w+\\s+implements\\s+worker"] },
      { popis: "implementované verejné metódy", vzory: ["public\\s+void\\s+nastavpraci", "public\\s+void\\s+vyplatmzdu"] }
    ],
    riesenie: `interface Worker {
    void nastavPraci();
    void vyplatMzdu();
}

class Zamestnanec implements Worker {
    private String prace;

    @Override
    public void nastavPraci() {
        prace = "programator";
    }

    @Override
    public void vyplatMzdu() {
        System.out.println("Mzda vyplacena");
    }
}`
  },
  {
    id: 5,
    tema: "SQL",
    zadanie: "Tabuľka Student má polia ID, jmeno, rok_narozeni, plat. Napíšte SQL príkaz na vloženie záznamu a SQL príkaz, ktorý vypíše všetko o osobe s daným ID.",
    kriteria: [
      { popis: "INSERT INTO Student", vzory: ["insert\\s+into\\s+student"] },
      { popis: "hodnoty cez VALUES", vzory: ["values\\s*\\("] },
      { popis: "SELECT z tabuľky Student", vzory: ["select\\s+(\\*|[\\w,\\s]+)\\s+from\\s+student"] },
      { popis: "podmienka podľa ID", vzory: ["where\\s+id\\s*=\\s*\\d+", "where\\s+id\\s*=\\s*\\?"] }
    ],
    riesenie: `INSERT INTO Student (ID, jmeno, rok_narozeni, plat)
VALUES (1, 'Marek', 2000, 25000);

SELECT *
FROM Student
WHERE ID = 1;`
  },
  {
    id: 6,
    tema: "Generika",
    zadanie: "Vytvorte ľubovoľnú generickú triedu a z nej vytvorte objekt.",
    kriteria: [
      { popis: "generická trieda", vzory: ["class\\s+\\w+\\s*<\\s*\\w+\\s*>"] },
      { popis: "použitie generického typu v triede", vzory: ["private\\s+\\w+\\s+\\w+", "public\\s+\\w+\\s+get", "\\(\\s*\\w+\\s+\\w+\\s*\\)"] },
      { popis: "vytvorený objekt generickej triedy", vzory: ["new\\s+\\w+\\s*<\\s*\\s*>\\s*\\(", "new\\s+\\w+\\s*<\\s*\\w+\\s*>\\s*\\("] }
    ],
    riesenie: `class Box<T> {
    private T hodnota;

    public Box(T hodnota) {
        this.hodnota = hodnota;
    }

    public T getHodnota() {
        return hodnota;
    }
}

class Main {
    public static void main(String[] args) {
        Box<String> box = new Box<>("text");
        System.out.println(box.getHodnota());
    }
}`
  },
  {
    id: 7,
    tema: "Návrhové vzory",
    zadanie: "Uveďte príklad použitia návrhového vzoru Statická továrna trieda (Static Factory class) vo forme kódu.",
    kriteria: [
      { popis: "trieda s privátnym konštruktorom", vzory: ["private\\s+\\w+\\s*\\("] },
      { popis: "statická továrenská metóda", vzory: ["public\\s+static\\s+\\w+\\s+\\w+\\s*\\("] },
      { popis: "metóda vracia nový objekt", vzory: ["return\\s+new\\s+\\w+\\s*\\("] },
      { popis: "objekt sa vytvára cez statickú metódu", vzory: ["\\w+\\s+\\w+\\s*=\\s*\\w+\\.\\w+\\s*\\("] }
    ],
    riesenie: `class Student {
    private String jmeno;

    private Student(String jmeno) {
        this.jmeno = jmeno;
    }

    public static Student vytvor(String jmeno) {
        return new Student(jmeno);
    }
}

class Main {
    public static void main(String[] args) {
        Student s = Student.vytvor("Petr");
    }
}`
  },
  {
    id: 8,
    tema: "Generické metódy",
    zadanie: "Realizujte ľubovoľnú negenerickú triedu s jednou generickou metódou. Vytvorte objekt a metódu zavolajte.",
    kriteria: [
      { popis: "negenerická trieda", vzory: ["class\\s+\\w+\\s*\\{"] },
      { popis: "generická metóda", vzory: ["public\\s*<\\s*\\w+\\s*>\\s+void\\s+\\w+\\s*\\(", "public\\s*<\\s*\\w+\\s*>\\s+\\w+\\s+\\w+\\s*\\("] },
      { popis: "metóda používa generický parameter", vzory: ["\\(\\s*\\w+\\s+\\w+\\s*\\)"] },
      { popis: "vytvorený objekt triedy", vzory: ["new\\s+\\w+\\s*\\(\\s*\\)"] },
      { popis: "volanie generickej metódy", vzory: ["\\.\\w+\\s*\\("] }
    ],
    riesenie: `class Vypisovac {
    public <T> void vypis(T hodnota) {
        System.out.println(hodnota);
    }
}

class Main {
    public static void main(String[] args) {
        Vypisovac v = new Vypisovac();
        v.vypis("Ahoj");
        v.vypis(10);
    }
}`
  },
  {
    id: 9,
    tema: "Generické rozhranie",
    zadanie: "Realizujte ľubovoľné generické rozhranie. Potom vytvorte negenerickú triedu, ktorá ho implementuje, a vytvorte objekt tejto triedy.",
    kriteria: [
      { popis: "generické rozhranie", vzory: ["interface\\s+\\w+\\s*<\\s*\\w+\\s*>"] },
      { popis: "rozhranie používa generický typ", vzory: ["void\\s+\\w+\\s*\\(\\s*\\w+\\s+\\w+\\s*\\)", "\\w+\\s+\\w+\\s*\\(\\s*\\)"] },
      { popis: "negenerická trieda implementuje konkrétny typ", vzory: ["class\\s+\\w+\\s+implements\\s+\\w+\\s*<\\s*(string|integer|double|\\w+)\\s*>"] },
      { popis: "vytvorený objekt implementujúcej triedy", vzory: ["new\\s+\\w+\\s*\\(\\s*\\)"] }
    ],
    riesenie: `interface Uloziste<T> {
    void uloz(T hodnota);
    T vrat();
}

class TextoveUloziste implements Uloziste<String> {
    private String hodnota;

    public void uloz(String hodnota) {
        this.hodnota = hodnota;
    }

    public String vrat() {
        return hodnota;
    }
}

class Main {
    public static void main(String[] args) {
        TextoveUloziste u = new TextoveUloziste();
        u.uloz("text");
        System.out.println(u.vrat());
    }
}`
  },
  {
    id: 10,
    tema: "SQL",
    zadanie: "Tabuľka Worker má polia ID, prijmeni, rok_narozeni, plat. Napíšte SQL príkaz na vloženie záznamu a SQL príkaz, ktorý odstráni osobu s daným ID.",
    kriteria: [
      { popis: "INSERT INTO Worker", vzory: ["insert\\s+into\\s+worker"] },
      { popis: "vložené hodnoty", vzory: ["values\\s*\\("] },
      { popis: "DELETE FROM Worker", vzory: ["delete\\s+from\\s+worker"] },
      { popis: "mazanie podľa ID", vzory: ["where\\s+id\\s*=\\s*\\d+", "where\\s+id\\s*=\\s*\\?"] }
    ],
    riesenie: `INSERT INTO Worker (ID, prijmeni, rok_narozeni, plat)
VALUES (1, 'Novak', 1999, 30000);

DELETE FROM Worker
WHERE ID = 1;`
  },
  {
    id: 11,
    tema: "Abstraktné triedy",
    zadanie: "Vytvorte abstraktnú triedu Zivocich s atribútom jmeno, getterom, setterom a abstraktnou metódou pozdrav vracajúcou String. Odvoďte triedu Pes, vytvorte objekt, nastavte meno a vypíšte pozdrav.",
    kriteria: [
      { popis: "abstraktná trieda Zivocich", vzory: ["abstract\\s+class\\s+zivocich"] },
      { popis: "atribút jmeno", vzory: ["private\\s+string\\s+jmeno"] },
      { popis: "getter a setter", vzory: ["string\\s+getjmeno\\s*\\(", "void\\s+setjmeno\\s*\\("] },
      { popis: "abstraktná metóda pozdrav vracia String", vzory: ["abstract\\s+string\\s+pozdrav\\s*\\("] },
      { popis: "trieda Pes dedí zo Zivocich", vzory: ["class\\s+pes\\s+extends\\s+zivocich"] },
      { popis: "vytvorený objekt, nastavené meno a vypísaný pozdrav", vzory: ["new\\s+pes\\s*\\(", "\\.setjmeno\\s*\\(", "system\\.out\\.println\\s*\\([^;]*\\.pozdrav\\s*\\("] }
    ],
    riesenie: `abstract class Zivocich {
    private String jmeno;

    public String getJmeno() {
        return jmeno;
    }

    public void setJmeno(String jmeno) {
        this.jmeno = jmeno;
    }

    public abstract String pozdrav();
}

class Pes extends Zivocich {
    @Override
    public String pozdrav() {
        return "Ahoj, ja jsem " + getJmeno();
    }
}

class Main {
    public static void main(String[] args) {
        Pes p = new Pes();
        p.setJmeno("Rex");
        System.out.println(p.pozdrav());
    }
}`
  },
  {
    id: 12,
    tema: "Zapúzdrenie",
    zadanie: "Vytvorte triedu Student s atribútmi prumer typu double a jmeno typu String. Zapúzdrite prumer cez getter a setter. Konštruktor má nastaviť meno. Vytvorte objekt, nastavte prumer a vypíšte ho.",
    kriteria: [
      { popis: "trieda Student", vzory: ["class\\s+student"] },
      { popis: "privátne atribúty prumer a jmeno", vzory: ["private\\s+double\\s+prumer", "private\\s+string\\s+jmeno"] },
      { popis: "konštruktor nastavuje meno", vzory: ["student\\s*\\(\\s*string\\s+jmeno", "this\\.jmeno\\s*=\\s*jmeno"] },
      { popis: "getter a setter pre prumer", vzory: ["double\\s+getprumer\\s*\\(", "void\\s+setprumer\\s*\\(\\s*double\\s+prumer"] },
      { popis: "vytvorený objekt a použitie set/get", vzory: ["new\\s+student\\s*\\(", "\\.setprumer\\s*\\(", "\\.getprumer\\s*\\("] }
    ],
    riesenie: `class Student {
    private double prumer;
    private String jmeno;

    public Student(String jmeno) {
        this.jmeno = jmeno;
    }

    public double getPrumer() {
        return prumer;
    }

    public void setPrumer(double prumer) {
        this.prumer = prumer;
    }
}

class Main {
    public static void main(String[] args) {
        Student s = new Student("Petr");
        s.setPrumer(2.3);
        System.out.println(s.getPrumer());
    }
}`
  },
  {
    id: 13,
    tema: "Návrhové vzory",
    zadanie: "Uveďte príklad použitia návrhového vzoru Přepravce (Messenger class) vo forme kódu.",
    kriteria: [
      { popis: "samostatná trieda na prenesenie viacerých hodnôt", vzory: ["class\\s+\\w+\\s*\\{[\\s\\S]*\\w+\\s+\\w+;[\\s\\S]*\\w+\\s+\\w+;"] },
      { popis: "konštruktor nastavuje hodnoty", vzory: ["public\\s+\\w+\\s*\\([^)]*,[^)]*\\)", "this\\.\\w+\\s*=\\s*\\w+"] },
      { popis: "metóda vracia objekt prepravcu", vzory: ["static\\s+\\w+\\s+\\w+\\s*\\(", "return\\s+new\\s+\\w+\\s*\\("] },
      { popis: "použitie vrátených hodnôt", vzory: ["\\.minimum", "\\.maximum", "\\.\\w+\\s*\\("] }
    ],
    riesenie: `class Vysledek {
    public final int minimum;
    public final int maximum;

    public Vysledek(int minimum, int maximum) {
        this.minimum = minimum;
        this.maximum = maximum;
    }
}

class Main {
    public static Vysledek najdiMinMax() {
        return new Vysledek(1, 10);
    }

    public static void main(String[] args) {
        Vysledek v = najdiMinMax();
        System.out.println(v.minimum);
        System.out.println(v.maximum);
    }
}`
  },
  {
    id: 14,
    tema: "Generika",
    zadanie: "Vytvorte generickú triedu Student s privátnymi atribútmi ID generického typu a Jmeno typu String. Vytvorte konštruktor, metódu vypis a objekt, nad ktorým vypis zavoláte.",
    kriteria: [
      { popis: "generická trieda Student<T>", vzory: ["class\\s+student\\s*<\\s*\\w+\\s*>"] },
      { popis: "privátne atribúty ID a Jmeno", vzory: ["private\\s+\\w+\\s+id", "private\\s+string\\s+jmeno"] },
      { popis: "konštruktor nastavuje oba atribúty", vzory: ["student\\s*\\(\\s*\\w+\\s+id\\s*,\\s*string\\s+jmeno", "this\\.id\\s*=\\s*id", "this\\.jmeno\\s*=\\s*jmeno"] },
      { popis: "metóda vypis", vzory: ["void\\s+vypis\\s*\\(", "system\\.out\\.println"] },
      { popis: "vytvorený objekt a zavolaný vypis", vzory: ["new\\s+student\\s*<", "\\.vypis\\s*\\("] }
    ],
    riesenie: `class Student<T> {
    private T ID;
    private String Jmeno;

    public Student(T ID, String Jmeno) {
        this.ID = ID;
        this.Jmeno = Jmeno;
    }

    public void vypis() {
        System.out.println("Jmeno: " + Jmeno + ", ID: " + ID);
    }
}

class Main {
    public static void main(String[] args) {
        Student<Integer> s = new Student<>(1, "Petr");
        s.vypis();
    }
}`
  },
  {
    id: 15,
    tema: "SQL",
    zadanie: "Tabuľka Zamestnanci má polia ID, jmeno, rok_narozeni, plat. Napíšte SQL príkaz, ktorý vráti ID a jmeno osôb narodených pred rokom 1985 s platom vyšším ako 25000. Potom napíšte príkaz, ktorý zmaže celý obsah tabuľky.",
    kriteria: [
      { popis: "SELECT ID a jmeno", vzory: ["select\\s+id\\s*,\\s*jmeno"] },
      { popis: "FROM Zamestnanci", vzory: ["from\\s+zamestnanci"] },
      { popis: "podmienka rok_narozeni < 1985", vzory: ["rok_narozeni\\s*<\\s*1985"] },
      { popis: "podmienka plat > 25000", vzory: ["plat\\s*>\\s*25000"] },
      { popis: "zmazanie obsahu tabuľky", vzory: ["delete\\s+from\\s+zamestnanci\\s*;", "truncate\\s+table\\s+zamestnanci"] }
    ],
    riesenie: `SELECT ID, jmeno
FROM Zamestnanci
WHERE rok_narozeni < 1985 AND plat > 25000;

DELETE FROM Zamestnanci;`
  },
  {
    id: 16,
    tema: "Návrhové vzory",
    zadanie: "Uveďte príklad použitia návrhového vzoru Jedináček (Singleton class) vo forme kódu.",
    kriteria: [
      { popis: "privátna statická inštancia", vzory: ["private\\s+static\\s+\\w+\\s+instance"] },
      { popis: "privátny konštruktor", vzory: ["private\\s+\\w+\\s*\\(\\s*\\)"] },
      { popis: "verejná statická metóda na získanie inštancie", vzory: ["public\\s+static\\s+\\w+\\s+(getinstance|\\w+)\\s*\\("] },
      { popis: "vytvorenie inštancie iba ak je null", vzory: ["if\\s*\\(\\s*instance\\s*==\\s*null\\s*\\)", "instance\\s*=\\s*new\\s+\\w+\\s*\\("] },
      { popis: "vrátenie inštancie", vzory: ["return\\s+instance"] }
    ],
    riesenie: `class Nastaveni {
    private static Nastaveni instance;

    private Nastaveni() {
    }

    public static Nastaveni getInstance() {
        if (instance == null) {
            instance = new Nastaveni();
        }
        return instance;
    }
}

class Main {
    public static void main(String[] args) {
        Nastaveni n = Nastaveni.getInstance();
    }
}`
  },
  {
    id: 17,
    tema: "Kolekcie",
    zadanie: "Trieda Student má verejný atribút ID typu int a nemožno ju upraviť. Vytvorte TreeSet a vložte doň jeden objekt triedy Student.",
    kriteria: [
      { popis: "použitý TreeSet<Student>", vzory: ["treeset\\s*<\\s*student\\s*>"] },
      { popis: "triedenie bez úpravy triedy cez Comparator alebo lambda", vzory: ["new\\s+comparator\\s*<\\s*student\\s*>", "\\(\\s*\\w+\\s*,\\s*\\w+\\s*\\)\\s*->", "comparator\\.comparingint"] },
      { popis: "porovnanie podľa ID", vzory: ["integer\\.compare\\s*\\([^;]*\\.id", "\\.id\\s*-\\s*\\w+\\.id", "comparingint\\s*\\([^)]*id"] },
      { popis: "vložený objekt Student", vzory: ["\\.add\\s*\\(\\s*new\\s+student\\s*\\("] }
    ],
    riesenie: `import java.util.Comparator;
import java.util.TreeSet;

class Student {
    public int ID;

    public Student(int ID) {
        this.ID = ID;
    }
}

class Main {
    public static void main(String[] args) {
        TreeSet<Student> studenti = new TreeSet<>(
            new Comparator<Student>() {
                public int compare(Student a, Student b) {
                    return Integer.compare(a.ID, b.ID);
                }
            }
        );

        studenti.add(new Student(1));
    }
}`
  }
];

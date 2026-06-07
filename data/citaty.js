const citaty = [
  {
    zdroj: "Ž 27, 1",
    text: "„Pán je moje svetlo a moja spása, koho sa mám báť?\n\nPán je ochranca môjho života, pred kým sa mám strachovať?“"
  },
  {
    zdroj: "Ž 27, 4",
    text: "„O jedno prosím Pána a za tým túžim, aby som mohol bývať v dome Pánovom po všetky dni svojho života, aby som pociťoval nehu Pánovu a obdivoval jeho chrám.“"
  },
  {
    zdroj: "Ž 27",
    text: "„Pán je moje svetlo a moja spása, koho sa mám báť?\nPán je ochranca môjho života, pred kým sa mám strachovať?\n\nKeď sa približujú ku mne zločinci a chcú mi zničiť telo, vtedy moji utláčatelia a nepriatelia strácajú silu a padajú.\n\nAj keby sa proti mne postavili šíky, moje srdce sa nezľakne. Aj keby proti mne vzbĺkol boj, zotrvám v dôvere.\n\nO jedno prosím Pána a za tým túžim, aby som mohol bývať v dome Pánovom po všetky dni svojho života, aby som pociťoval nehu Pánovu a obdivoval jeho chrám.\n\nA on ma vo svojom stane schová v deň nešťastia, ukryje ma v skrýši svojho príbytku a postaví ma vysoko na skalu.\n\nA už teraz dvíham hlavu nad svojich nepriateľov, čo ma obkľučujú. V jeho stánku mu prinesiem obetu chvály, budem spievať a hrať Pánovi.\n\nČuj, Pane, hlas môjho volania, zľutuj sa nado mnou a vyslyš ma.\n\nV srdci mi znejú tvoje slová: „Hľadajte moju tvár!“ Pane, ja hľadám tvoju tvár.\n\nNeodvracaj svoju tvár odo mňa, neodkláňaj sa v hneve od svojho služobníka. Ty si moja pomoc, neodvrhuj ma, ani ma neopúšťaj, Bože, moja spása.\n\nHoci by ma opustili otec aj mať, Pán sa ma predsa ujme.\n\nUkáž mi, Pane, svoju cestu a priveď ma na správny chodník, lebo mám mnoho nepriateľov.\n\nNevydávaj ma zvoli utláčateľov; veď povstali proti mne kriví svedkovia, dychtiví po násilí.\n\nVerím, že uvidím dobrodenia Pánove v krajine žijúcich.\n\nOčakávaj Pána a buď statočný; srdce maj silné a drž sa Pána.“"
  },
  {
    zdroj: "Ž 23, 1",
    text: "„Pán je môj pastier, nič mi nechýba:\n\npasie ma na zelených pašienkach,\n\nnič mi nechýba.“"
  },
  {
    zdroj: "Ž 23",
    text: "„Pán je môj pastier, nič mi nechýba: pasie ma na zelených pašienkach. Vodí ma k tichým vodám, dušu mi osviežuje. Vodí ma po správnych chodníkoch, verný svojmu menu. I keby som mal ísť tmavou dolinou, nebudem sa báť zlého, lebo ty si so mnou. Tvoj prút a tvoja palica, tie sú mi útechou. Prestieraš mi stôl pred očami mojich protivníkov. Leješ mi olej na hlavu a kalich mi napĺňaš až po okraj. Dobrota a milosť budú ma sprevádzať po všetky dni môjho života. A budem bývať v dome Pánovom mnoho a mnoho dní.“"
  },
  {
    zdroj: "Mt 9, 37-38",
    text: "„Žatva je veľká, ale robotníkov málo. Preto proste Pána žatvy, aby poslal robotníkov na svoju žatvu.“"
  },
  {
    zdroj: "Ž 127, 1",
    text: "„Ak Pán nestavia dom,\nmárne sa namáhajú tí, čo ho stavajú.“"
  },
  {
    zdroj: "1 Kr 19, 11–15",
    text: "Práve prechádzal Pán. Pred Pánom išiel vietor, veľký a prudký, ktorý trhá vrchy a láme skaly. Ale Pán nebol vo vetre. Po vetre zemetrasenie, ale Pán nebol v zemetrasení. Po zemetrasení oheň, ale Pán nebol v ohni. A po ohni tichý, lahodný šum. Keď to Eliáš počul, zahalil si tvár plášťom, vyšiel a zastal pri vchode do jaskyne. Vtom prehovoril k nemu akýsi hlas a pýtal sa: „Čo tu robíš, Eliáš?“ Odpovedal: „Plný som horlivosti za Pána, Boha zástupov. Veď synovia Izraela opustili tvoju zmluvu, tvoje oltáre zborili a tvojich prorokov pobili mečom! Ja sám som ostal a za mojím životom sliedia, chcú mi ho vziať.“"
  },
  {
    zdroj: "Ž 34",
    text: "„Velebiť chcem Pána v každom čase, moje ústa budú ho vždy chváliť. Pán je sláva mojej duše, nechže ma počujú pokorní a nech sa tešia.\nVelebte so mnou Pána, oslavujme spoločne jeho meno. Hľadal som Pána a On ma vyslyšal a vytrhol ma zo všetkej hrôzy.\nAnjel Pánov sa utáborí okolo tých, čo sa ho boja a vyslobodí ich. Tento úbožiak volá a Pán ho počúva a vyslobodí ho zo všetkých jeho tiesní.\nSkúste a viďte, aký dobrý je Pán. Šťastný človek, čo sa utieka k nemu.\nMnohé sú skúšky, ktoré čakajú spravodlivého, ale zo všetkých ho vyslobodí Pán. Volali a Pán ich vyslyšal, vyslobodil ich zo všetkých tiesní.“"
  },
  {
    zdroj: "Prís 5, 15 - 23",
    text: "„Pi vodu z vlastnej studnice, tečúcu (vodu) z vlastnej studienky!\nAby sa nevylievali von tvoje pramene a na námestia stružky vôd.\nNech patria iba tebe samému a okrem teba nikomu!\nNech je požehnaný tvoj prameň a teš sa žene svojej mladosti!\nJe sťaby utešená laň a srnka pôvabná; jej ňadrá nech ťa opájajú v každý čas, kochaj sa jednostaj v jej ľúbosti!\nVeď prečože by si sa kochal v inej, syn môj, a (prečo) by si cudzinku objímal?!“"
  },
  {
    zdroj: "Jób 1, 21",
    text: "„Nahý som vyšiel z lona svojej matky a nahý sa ta vrátim.\n\nPán dal, Pán vzal, nech je Pánovo meno zvelebené!“"
  },
  {
    zdroj: "2 Kor 4, 10",
    text: "„Nosíme stále na našom tele umieranie Ježiša,\n\naby sa ukázalo na nás jeho zmŕtvychvstanie.“"
  },
  
  /*
  {
    zdroj: "",
    text: "„“"
  },
  */
];

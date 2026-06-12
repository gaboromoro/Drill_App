// ZIN SZZ okruh 4: Orchestralne zestove nastroje.
// SZZ otazka: Popiste orchestralni zestove nastroje, jejich spolecne znaky a individualni
// odlisnosti. Ladeni, notace, bezny rozsah.
// 17 statementov; kazdy ma DVE nepravdy - kazda flipuje inu dolezitu vec.
// Zdroj: prezentacia "Zeste".

const zin4CrackData = [
  // ===== Spolocne znaky (7) =====
  {
    id: "ZIN 4. Spolocne znaky 001",
    oblast: "Spolocne znaky",
    podoblast: "Prehlad",
    pravda: "Orchestralne zeste: trubka, lesny roh, pozoun, tuba.",
    nepravda: "Orchestralne zeste: trubka, lesny roh, pozoun, saxofon.",
    nepravda2: "Orchestralne zeste: trubka, lesny roh, pozoun, kridlovka."
  },
  {
    id: "ZIN 4. Spolocne znaky 002",
    oblast: "Spolocne znaky",
    podoblast: "Tvorba tonu",
    pravda: "Zdroj tonu: pery hraca = membranozny dvojity jazycek na natrubku; vysledny signal sa blizi pile.",
    nepravda: "Zdroj tonu: kovovy jazycek vnutri natrubku rozkmitany prudom vzduchu; vysledny signal sa blizi pile.",
    nepravda2: "Zdroj tonu: pery hraca = membranozny dvojity jazycek na natrubku; vysledny signal sa blizi sinusu."
  },
  {
    id: "ZIN 4. Spolocne znaky 003",
    oblast: "Spolocne znaky",
    podoblast: "Tvorba tonu",
    pravda: "Hra stoji na prefukovani alikvotnej rady; ventily alebo snizec doplnaju chybajuce chromaticke tony.",
    nepravda: "Hra stoji na samostatnom otvore s klapkou pre kazdy ton; alikvotna rada sa nevyuziva.",
    nepravda2: "Hra stoji na prefukovani alikvotnej rady; ventily alebo snizec doplnaju chybajuce chromaticke tony skratenim trubice."
  },
  {
    id: "ZIN 4. Spolocne znaky 004",
    oblast: "Spolocne znaky",
    podoblast: "Ventily",
    pravda: "Ventily znizuju ton predlzenim trubice: 1. o cely ton, 2. o polton, 3. o poltora tona; kombinuju sa.",
    nepravda: "Ventily znizuju ton predlzenim trubice: 1. o polton, 2. o cely ton, 3. o poltora tona; kombinuju sa.",
    nepravda2: "Ventily znizuju ton predlzenim trubice: 1. o cely ton, 2. o polton, 3. o velku terciu; kombinuju sa."
  },
  {
    id: "ZIN 4. Spolocne znaky 005",
    oblast: "Spolocne znaky",
    podoblast: "Natrubok a roztrub",
    pravda: "Natrubok: miskovity (plytky kotlik) = ostrejsi ton; lievikovity (konicky) = hebsi ton.",
    nepravda: "Natrubok: miskovity (plytky kotlik) = hebsi ton; lievikovity (konicky) = ostrejsi ton.",
    nepravda2: "Natrubok: miskovity (hlboky kotlik) = ostrejsi ton; lievikovity (konicky) = hebsi ton."
  },
  {
    id: "ZIN 4. Spolocne znaky 006",
    oblast: "Spolocne znaky",
    podoblast: "Natrubok a roztrub",
    pravda: "Menzura a roztrub: valcova + exponencialny zaver = prierazna farba; kuzelova + konicky roztrub = makka farba.",
    nepravda: "Menzura a roztrub: valcova + exponencialny zaver = makka farba; kuzelova + konicky roztrub = prierazna farba.",
    nepravda2: "Menzura a roztrub: valcova + exponencialny zaver = prierazna farba; kuzelova + konicky roztrub = makka farba (napriklad trubka)."
  },
  {
    id: "ZIN 4. Spolocne znaky 007",
    oblast: "Spolocne znaky",
    podoblast: "Ventily a dusitka",
    pravda: "Dusitka sa vkladaju do roztrubu - menia farbu aj silu (od makkych po ostre).",
    nepravda: "Dusitka sa nasadzuju na natrubok - menia farbu aj silu (od makkych po ostre).",
    nepravda2: "Dusitka sa vkladaju do roztrubu - menia len silu zvuku, farbu nemenia."
  },

  // ===== Individualne odlisnosti (6) =====
  {
    id: "ZIN 4. Individualne 001",
    oblast: "Individualne odlisnosti",
    podoblast: "Trubka",
    pravda: "Trubka: 3 pisty, prevazne valcova menzura - prierazna farba.",
    nepravda: "Trubka: 4 pisty, prevazne valcova menzura - prierazna farba.",
    nepravda2: "Trubka: 3 pisty, prevazne kuzelova menzura - prierazna farba."
  },
  {
    id: "ZIN 4. Individualne 002",
    oblast: "Individualne odlisnosti",
    podoblast: "Lesny roh",
    pravda: "Lesny roh: stocena trubica vyse 4 m, ventily pre lavu ruku, prava ruka v roztrube, lievikovity natrubok.",
    nepravda: "Lesny roh: stocena trubica vyse 4 m, ventily pre pravu ruku, lava ruka v roztrube, lievikovity natrubok.",
    nepravda2: "Lesny roh: stocena trubica vyse 4 m, ventily pre lavu ruku, prava ruka v roztrube, miskovity natrubok."
  },
  {
    id: "ZIN 4. Individualne 003",
    oblast: "Individualne odlisnosti",
    podoblast: "Lesny roh",
    pravda: "Dvojity roh F/B s kvartovou (palcovou) klapkou; v orchestri kvarteto - 1. a 3. vysoko, 2. a 4. nizko.",
    nepravda: "Dvojity roh F/Es s kvartovou (palcovou) klapkou; v orchestri kvarteto - 1. a 3. vysoko, 2. a 4. nizko.",
    nepravda2: "Dvojity roh F/B s kvartovou (palcovou) klapkou; v orchestri kvarteto - 1. a 2. vysoko, 3. a 4. nizko."
  },
  {
    id: "ZIN 4. Individualne 004",
    oblast: "Individualne odlisnosti",
    podoblast: "Pozoun",
    pravda: "Pozoun: vysku meni snizec so 7 polohami - presne doladovanie aj glissando; typy tenorovy a basovy.",
    nepravda: "Pozoun: vysku menia 3 ventily ako u trubky - glissando nie je mozne; typy tenorovy a basovy.",
    nepravda2: "Pozoun: vysku meni snizec so 6 polohami - presne doladovanie aj glissando; typy tenorovy a basovy."
  },
  {
    id: "ZIN 4. Individualne 005",
    oblast: "Individualne odlisnosti",
    podoblast: "Tuba",
    pravda: "Tuba: najhlbsi zest orchestra; kuzelova menzura, siroky roztrub smerom nahor.",
    nepravda: "Tuba: najhlbsi zest orchestra; valcova menzura, siroky roztrub smerom nahor.",
    nepravda2: "Tuba: najhlbsi zest orchestra; kuzelova menzura, siroky roztrub smerom dopredu."
  },
  {
    id: "ZIN 4. Individualne 006",
    oblast: "Individualne odlisnosti",
    podoblast: "Zvlastnosti",
    pravda: "Wagnerova tuba: kombinacia tuby a lesneho rohu (rohovy natrubok a ventily) - hraju ju hornisti.",
    nepravda: "Wagnerova tuba: kombinacia tuby a pozounu (pozounovy natrubok a snizec) - hraju ju pozounisti.",
    nepravda2: "Wagnerova tuba: kombinacia tuby a lesneho rohu (rohovy natrubok a ventily) - hraju ju tubisti."
  },

  // ===== Ladenie, notacia, rozsah (4) =====
  {
    id: "ZIN 4. Ladenie notacia 001",
    oblast: "Ladenie, notacia, rozsah",
    podoblast: "Nastroje",
    pravda: "Trubka in B: znie o velku sekundu nizsie; huslovy kluc; pisany rozsah cca fis az c3.",
    nepravda: "Trubka in B: znie o velku sekundu vyssie; huslovy kluc; pisany rozsah cca fis az c3.",
    nepravda2: "Trubka in B: znie o malu terciu nizsie; huslovy kluc; pisany rozsah cca fis az c3."
  },
  {
    id: "ZIN 4. Ladenie notacia 002",
    oblast: "Ladenie, notacia, rozsah",
    podoblast: "Nastroje",
    pravda: "Lesny roh in F: znie o cistu kvintu nizsie; huslovy kluc; rozsah priblizne styri oktavy.",
    nepravda: "Lesny roh in F: znie o cistu kvartu nizsie; huslovy kluc; rozsah priblizne styri oktavy.",
    nepravda2: "Lesny roh in F: znie o cistu kvintu nizsie; huslovy kluc; rozsah priblizne dve oktavy."
  },
  {
    id: "ZIN 4. Ladenie notacia 003",
    oblast: "Ladenie, notacia, rozsah",
    podoblast: "Nastroje",
    pravda: "Pozoun: netransponuje; basovy a tenorovy kluc; rozsah cca E az b1 + pedalove tony.",
    nepravda: "Pozoun: transponuje in B; basovy a tenorovy kluc; rozsah cca E az b1 + pedalove tony.",
    nepravda2: "Pozoun: netransponuje; basovy a tenorovy kluc; rozsah cca E az b1, pedalove tony nema."
  },
  {
    id: "ZIN 4. Ladenie notacia 004",
    oblast: "Ladenie, notacia, rozsah",
    podoblast: "Nastroje",
    pravda: "Tuba: netransponuje; basovy kluc; stavia sa v ladeniach F, Es, C a B.",
    nepravda: "Tuba: transponuje in B ako trubka; basovy kluc; stavia sa v ladeniach F, Es, C a B.",
    nepravda2: "Tuba: netransponuje; tenorovy kluc; stavia sa v ladeniach F, Es, C a B."
  }
];

const zin4CrackOtazky = zin4CrackData.map((polozka) => ({
  id: polozka.id,
  tema: `ZIN 4. ${polozka.oblast} - ${polozka.podoblast}`,
  typ: "jedna",
  format: "crack",
  uroven: "tazka",
  otazka: polozka.pravda,
  moznosti: ["z", "x"],
  spravne: [0],
  vysvetlenie: `Spravny statement: ${polozka.pravda}`,
  prezentacia: "4. Zestove nastroje",
  subtema: `${polozka.oblast} / ${polozka.podoblast}`,
  slideRef: "Zeste.pdf",
  crackPair: {
    pravda: polozka.pravda,
    nepravda: polozka.nepravda,
    nepravda2: polozka.nepravda2
  }
}));

zinOtazky.push(...zin4CrackOtazky);

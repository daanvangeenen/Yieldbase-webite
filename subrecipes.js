// ===== Halffabricaten — gedeeld tussen Recepturen en Bakkerij =====
//
// Bij producten zoals tompouce of slagroomtaart gebruik je halffabricaten
// (banketbakkersroom, bladerdeeg, biscuit, …). Deze hebben een eigen recept.
// In de receptweergave wordt het ingredient automatisch een klikbare link
// die het halffabricaat-recept opent.
//
// patterns[] = woord(en) waarop wordt gematcht in een ingredient-regel.

const SUBRECIPES = {
  banketbakkersroom: {
    patterns: ['vanille-banketbakkersroom', 'banketbakkersroom'],
    name: 'Banketbakkersroom',
    cat: 'Halffabricaat',
    time: '30 min', yield: '1 liter', diff: 'Eenvoudig',
    ingredients: [
      '1 l volle melk',
      '200 g suiker',
      '6 eierdooiers',
      '90 g maizena',
      '1 vanillestokje (of 1 el vanille-extract)',
      '30 g boter',
    ],
    steps: [
      'Snijd het vanillestokje open en schraap het merg eruit.',
      'Verwarm melk met vanillemerg en de helft van de suiker tot tegen het kookpunt.',
      'Klop dooiers met overige suiker en maizena tot een glad mengsel.',
      'Giet een kwart van de hete melk bij de dooiers en klop snel los.',
      'Giet alles terug in de pan, breng al roerend aan de kook tot het indikt (~2 min).',
      'Roer de boter erdoor, dek af met huishoudfolie op de room en laat afkoelen.',
    ],
    notes: 'Houdbaar 24 uur gekoeld. Niet invriezen — schift bij ontdooien.',
  },

  bladerdeeg: {
    patterns: ['bladerdeeg'],
    name: 'Bladerdeeg',
    cat: 'Halffabricaat',
    time: '4 uur (incl. rust)', yield: '1 kg', diff: 'Moeilijk',
    ingredients: [
      '500 g bloem',
      '250 ml ijskoud water',
      '10 g zout',
      '50 g zachte boter (in deeg)',
      '350 g koude roomboter (toer-boter)',
    ],
    steps: [
      'Meng bloem, zout, water en zachte boter tot een soepel deeg.',
      'Rol uit tot rechthoek, leg de koude boter erin en vouw dicht.',
      'Toereer 3× — telkens 30 min koelen tussen de toeren.',
      'Houd deeg en boter altijd onder 16 °C.',
      'Na 3 toeren minimaal 1 uur rusten in koeling voor gebruik.',
    ],
    notes: 'Invriezen kan — max. 3 maanden. Ontdooi langzaam in de koeling.',
  },

  botercreme: {
    patterns: ['botercrème', 'botercreme'],
    name: 'Botercrème',
    cat: 'Halffabricaat',
    time: '20 min', yield: '500 g', diff: 'Gemiddeld',
    ingredients: [
      '250 g zachte roomboter',
      '125 g poedersuiker',
      '4 eierdooiers',
      '100 g suiker',
      '50 ml water',
    ],
    steps: [
      'Maak een suikersiroop: water en suiker koken tot 118 °C.',
      'Klop dooiers schuimig en giet de siroop er in een dun straaltje bij.',
      'Klop tot het mengsel volledig is afgekoeld (~10 min).',
      'Voeg beetje bij beetje de zachte boter toe.',
      'Klop tot luchtig en glad.',
    ],
    notes: 'Smaakvarianten: voeg sterke koffie, gesmolten chocolade of vanille toe in de laatste stap.',
  },

  soezendeeg: {
    patterns: ['soezendeeg'],
    name: 'Soezendeeg',
    cat: 'Halffabricaat',
    time: '25 min', yield: '~400 g', diff: 'Gemiddeld',
    ingredients: [
      '250 ml water',
      '100 g boter',
      '150 g bloem',
      '4 eieren',
      'snufje zout',
    ],
    steps: [
      'Water, boter en zout aan de kook brengen.',
      'Bloem in 1× toevoegen en met een houten lepel droogstoken (~1 min).',
      'Pan van het vuur, deeg 5 min laten afkoelen.',
      'Eieren één voor één toevoegen, telkens goed mengen.',
      'Deeg moet glanzend zijn en in dikke linten van de lepel vallen.',
    ],
  },

  biscuit: {
    patterns: ['chocoladebiscuit', 'biscuitbodem', 'biscuit'],
    name: 'Biscuit',
    cat: 'Halffabricaat',
    time: '45 min', yield: '1 bodem Ø 22 cm', diff: 'Eenvoudig',
    ingredients: [
      '4 eieren',
      '120 g suiker',
      '120 g bloem',
      '1 zakje vanillesuiker',
      'snufje zout',
    ],
    steps: [
      'Klop eieren met suiker schuimig en bleek (~8 min).',
      'Zeef de bloem erboven en spatel voorzichtig erdoor.',
      'Giet in een beboterde vorm Ø 22 cm.',
      'Bak op 180 °C, 22–25 min.',
      'Laat afkoelen op een rooster, gebruik pas als deze volledig koud is.',
    ],
    notes: 'Voor chocoladebiscuit: vervang 30 g bloem door 30 g cacaopoeder.',
  },

  fondant: {
    patterns: ['chocolade-fondant', 'chocolade fondant', 'chocoladefondant', 'fondant'],
    name: 'Fondant',
    cat: 'Halffabricaat',
    time: '15 min', yield: '500 g', diff: 'Eenvoudig',
    ingredients: [
      '500 g fondantsuiker',
      '50 ml water',
      'kleurstof of smaakstof naar wens',
    ],
    steps: [
      'Verwarm de fondant in een schaal au bain-marie.',
      'Voeg water beetje bij beetje toe tot smeuïge consistentie.',
      'Voeg eventueel kleur of smaak toe.',
      'Gebruik direct — fondant stijft snel op.',
    ],
    notes: 'Niet warmer maken dan 37 °C, anders verliest hij zijn glans.',
  },

  amandelspijs: {
    patterns: ['amandelspijs'],
    name: 'Amandelspijs',
    cat: 'Halffabricaat',
    time: '15 min + 1 nacht rust', yield: '500 g', diff: 'Eenvoudig',
    ingredients: [
      '250 g amandelen (geraspt)',
      '250 g poedersuiker',
      '1 ei',
      'rasp van ½ citroen',
    ],
    steps: [
      'Meng alle ingrediënten tot een homogene massa.',
      'Wikkel in folie en laat minimaal 12 uur rusten.',
    ],
    notes: 'Houdbaar 2 weken gekoeld. Smaak is beter na 1 dag rust.',
  },

  slagroom: {
    patterns: ['verse slagroom', 'slagroom'],
    name: 'Slagroom (basis)',
    cat: 'Halffabricaat',
    time: '5 min', yield: '500 ml', diff: 'Eenvoudig',
    ingredients: [
      '500 ml verse slagroom (35% vet)',
      '40 g suiker',
      '1 zakje stijfsel (optioneel, voor stevigheid)',
    ],
    steps: [
      'Zorg dat slagroom en kom goed koud zijn.',
      'Klop op middelhoge snelheid tot het lobbig wordt.',
      'Voeg suiker en eventueel stijfsel toe.',
      'Klop verder tot stijve pieken — niet te lang, dan schift het.',
    ],
  },

  nougatine: {
    patterns: ['nougatine'],
    name: 'Nougatine',
    cat: 'Halffabricaat',
    time: '15 min', yield: '400 g', diff: 'Gemiddeld',
    ingredients: [
      '200 g suiker',
      '50 ml water',
      '200 g amandelschilfers (geroosterd)',
    ],
    steps: [
      'Verwarm water en suiker tot een lichtbruine karamel (~170 °C).',
      'Voeg de geroosterde amandelschilfers toe en meng snel.',
      'Stort op een silicone-mat of beboterd bakpapier.',
      'Druk plat met een vetvrije rol en laat hard worden.',
      'Breek of hak in stukjes naar wens.',
    ],
    notes: 'Bewaar in een luchtdichte bus — wordt anders snel zacht.',
  },

  marsepein: {
    patterns: ['marsepein'],
    name: 'Marsepein',
    cat: 'Halffabricaat',
    time: '10 min', yield: '500 g', diff: 'Eenvoudig',
    ingredients: [
      '250 g amandelen (geraspt)',
      '250 g poedersuiker',
      '2 el water (of rozenwater voor extra aroma)',
    ],
    steps: [
      'Meng amandelen en poedersuiker.',
      'Voeg water beetje bij beetje toe tot een soepele bal.',
      'Kneed kort tot glad.',
      'Wikkel in folie tot gebruik.',
    ],
    notes: 'Vrijwel identiek aan amandelspijs, maar minder ei = harder.',
  },

  lemon_curd: {
    patterns: ['lemon curd', 'lemoncurd'],
    name: 'Lemon curd',
    cat: 'Halffabricaat',
    time: '15 min', yield: '500 g', diff: 'Eenvoudig',
    ingredients: [
      '4 eieren',
      '200 g suiker',
      '150 ml citroensap (~4 citroenen)',
      'rasp van 2 citroenen',
      '120 g boter (in blokjes)',
    ],
    steps: [
      'Au bain-marie eieren, suiker, sap en rasp samen kloppen.',
      'Blijven roeren tot het indikt (~10 min).',
      'Van het vuur, boter beetje bij beetje door de warme massa kloppen.',
      'Direct gebruiken of in pot afkoelen.',
    ],
  },

  zandkoekjes: {
    patterns: ['zandkoekjes-deeg', 'zoet kruimeldeeg', 'kruimeldeeg', 'zoete bodem'],
    name: 'Zandkoekjes-deeg',
    cat: 'Halffabricaat',
    time: '30 min + 1 uur koeling', yield: '500 g', diff: 'Eenvoudig',
    ingredients: [
      '250 g bloem',
      '125 g koude boter (in blokjes)',
      '100 g poedersuiker',
      '1 ei',
      'snufje zout',
    ],
    steps: [
      'Wrijf bloem, suiker, zout en boter tot grof kruim.',
      'Voeg het ei toe en kneed kort tot een bal.',
      'Wikkel in folie en laat 1 uur rusten in de koeling.',
      'Rol uit tussen twee vellen bakpapier voor gebruik.',
    ],
  },
};

// Vervangt het eerste matchende halffabricaat-woord in een ingredient-regel
// door een klikbare link. Langste patroon wint zodat 'vanille-banketbakkersroom'
// niet halverwege wordt gebroken op 'banketbakkersroom'.
function linkifyIngredient(text) {
  const all = [];
  Object.entries(SUBRECIPES).forEach(([key, sub]) => {
    sub.patterns.forEach(p => all.push({ key, pattern: p }));
  });
  all.sort((a, b) => b.pattern.length - a.pattern.length);
  for (const { key, pattern } of all) {
    const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    const regex = new RegExp(`(${escaped})`, 'i');
    if (regex.test(text)) {
      return text.replace(regex, `<a class="ingredient-link" data-subrecipe="${key}" href="#">$1</a>`);
    }
  }
  return text;
}

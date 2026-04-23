// Compact: [substanceA_key, substanceB_key, risk_level, description_pl, nt_effects_json, mechanism, clinical_notes]
// Risk levels: S=low_synergy, N=low_no_interaction, P=low_potentiation, C=caution, D=dangerous, L=life_threat
// Substance keys must match keys in src/data/substances.ts

type R = 'S'|'N'|'P'|'C'|'D'|'L';
const R_MAP: Record<R, string> = {
  S: 'low_synergy',
  N: 'low_no_interaction',
  P: 'low_potentiation',
  C: 'caution',
  D: 'dangerous',
  L: 'life_threat'
};

type Row = [string, string, R, string, Record<string, string>, string?, string?];

export { R_MAP };

export const INTERACTIONS: Row[] = [
  // === PSYCHEDELICS × PSYCHEDELICS ===
  ['lsd', 'psilocybin', 'P', 'Wzajemna potencjacja efektów psychedelicznych przez wspólny agonizm 5-HT2A', { ht: 'surge' }, 'Oba agoniści 5-HT2A — efekt addytywny'],
  ['lsd', 'dmt', 'P', 'Potencjacja — DMT nakłada się na trwający trip LSD', { ht: 'surge' }],
  ['lsd', '2cb', 'P', 'Silna potencjalizacja wizualna i mentalna', { ht: 'surge' }],
  ['psilocybin', 'dmt', 'P', 'Oba tryptaminy — addytywna aktywacja 5-HT2A', { ht: 'surge' }],
  ['psilocybin', '2cb', 'P', 'Potencjalizacja efektów psychedelicznych', { ht: 'surge' }],
  ['dmt', '2cb', 'P', 'Intensyfikacja doznań wizualnych', { ht: 'surge' }],

  // === PSYCHEDELICS × CANNABIS ===
  ['lsd', 'thc', 'C', 'THC potencjalizuje psychedeliki — ryzyko lęku, psychozy', { ht: 'up', cb1: 'up' }, 'CB1 moduluje 5-HT2A signaling'],
  ['psilocybin', 'thc', 'C', 'Potencjalizacja z ryzykiem lęku', { ht: 'up', cb1: 'up' }],
  ['dmt', 'thc', 'C', 'Potencjalizacja wizualna, ryzyko dezorientacji', { ht: 'up', cb1: 'up' }],
  ['2cb', 'thc', 'C', 'Mocna potencjalizacja wizualna i body-loadu', { ht: 'up', cb1: 'up' }],
  ['lsd', 'cbd', 'N', 'CBD może łagodzić lęk tripu bez osłabiania wizji', { cb1: 'down' }],
  ['psilocybin', 'cbd', 'N', 'Łagodzenie niepokoju tripu', { cb1: 'down' }],

  // === PSYCHEDELICS × DISSOCIATIVES ===
  ['lsd', 'ketamine', 'C', 'Głęboka dysocjacja + psychedelia. Nieprzewidywalne', { ht: 'up', glut: 'down' }],
  ['lsd', 'dxm', 'D', 'DXM jest inhibitorem SERT — z LSD ryzyko serotoniny', { ht: 'dangerous_surge', glut: 'down' }, 'SERT inhibicja + 5-HT2A agonizm', 'Ryzyko zespołu serotoninowego'],
  ['lsd', 'nitrous', 'P', 'Krótkotrwała intensyfikacja tripu', { ht: 'up', glut: 'down' }],
  ['psilocybin', 'ketamine', 'C', 'Potencjalizacja dysocjacyjno-psychedeliczna', { ht: 'up', glut: 'down' }],
  ['psilocybin', 'dxm', 'D', 'Ryzyko serotoninowe jak LSD+DXM', { ht: 'dangerous_surge' }],
  ['psilocybin', 'nitrous', 'P', 'Krótka, intensywna potencjalizacja', { ht: 'up' }],
  ['2cb', 'ketamine', 'C', 'Zwiększona dysocjacja i zniekształcenia obrazu', { ht: 'up', glut: 'down' }],

  // === PSYCHEDELICS × STIMULANTS ===
  ['lsd', 'amphetamine', 'C', 'Stymulacja + psychedelia — ryzyko lęku i pętli myślowych', { ht: 'up', da: 'up', ne: 'up' }],
  ['lsd', 'methamphetamine', 'D', 'Ekstremalna stymulacja, ryzyko psychozy i wyczerpania', { ht: 'up', da: 'surge', ne: 'surge' }],
  ['lsd', 'mdma', 'P', 'Candyflip — wzajemna potencjalizacja euforii i wizji', { ht: 'surge', da: 'up' }],
  ['lsd', 'cocaine', 'C', 'Kokaina może tłumić psychedelię, silne obciążenie serca', { da: 'up', ne: 'up' }],
  ['psilocybin', 'amphetamine', 'C', 'Zwiększone ryzyko paranoi i tachykardii', { ht: 'up', ne: 'up' }],
  ['psilocybin', 'mdma', 'P', 'Hippieflip — synergia euforii i empatii', { ht: 'surge', da: 'up' }],
  ['2cb', 'mdma', 'P', 'Nexusflip — MDMA wzmacnia 2C-B, 2C-B przedłuża MDMA', { ht: 'surge', da: 'up' }],
  ['2cb', 'amphetamine', 'C', 'Silna stymulacja z elementami wizualnymi', { ht: 'up', da: 'up' }],

  // === PSYCHEDELICS × DEPRESSANTS ===
  ['lsd', 'alcohol', 'S', 'Alkohol tłumi efekty psychedeliczne', { ht: 'down', gaba: 'up' }, 'GABA potencjalizacja tłumi 5-HT2A'],
  ['lsd', 'ghb', 'C', 'Nieprzewidywalne połączenie depresant+psychedelik', { ht: 'up', gaba: 'up' }],
  ['lsd', 'diazepam', 'S', 'Benzo jako trip-killer — redukuje psychedelię', { ht: 'down', gaba: 'up' }],
  ['lsd', 'alprazolam', 'S', 'Trip-killer — szybkie wygaszanie lęku i wizji', { ht: 'down', gaba: 'up' }],
  ['psilocybin', 'alcohol', 'S', 'Alkohol redukuje efekty grzybów', { ht: 'down', gaba: 'up' }],
  ['lsd', 'codeine', 'S', 'Opioidy redukują komponent mentalny tripu', { ht: 'down', opioid: 'up' }],

  // === STIMULANTS × STIMULANTS ===
  ['amphetamine', 'cocaine', 'D', 'Addytywna kardiotoksyczność i ryzyko zawału', { da: 'surge', ne: 'surge' }, 'Dwa mechanizmy DA jednocześnie', 'Arytmia, zawał'],
  ['amphetamine', 'mdma', 'D', 'Hipertermia, kardiotoksyczność, neurotoksyczność', { da: 'surge', ht: 'surge', ne: 'surge' }, '', 'Zwiększona neurotoksyczność MDMA'],
  ['amphetamine', 'methamphetamine', 'D', 'Ekstremalne obciążenie OUN i serca', { da: 'extreme', ne: 'extreme' }],
  ['amphetamine', 'alpvp', 'D', 'Ekstremalny DA overload, ryzyko psychozy', { da: 'surge', ne: 'surge' }, '', 'Psychoza, arytmia'],
  ['amphetamine', 'mephedrone', 'D', 'Kardiotoksyczność, hipertermia', { da: 'surge', ht: 'up', ne: 'surge' }],
  ['amphetamine', '3cmc', 'D', 'Silna stymulacja, ryzyko drgawek i hipertermii', { da: 'surge', ne: 'surge' }],
  ['cocaine', 'mdma', 'D', 'Kokaina blokuje SERT potrzebny dla MDMA. Kardiotoksyczne', { da: 'surge', ne: 'surge' }, 'Kokaina antagonizuje efekt empatogenny MDMA'],
  ['cocaine', 'alpvp', 'L', 'Ekstremalny DA surge — krytyczne ryzyko arytmii', { da: 'extreme', ne: 'surge' }, '', 'Zgony'],
  ['mdma', 'mephedrone', 'D', 'Podwójny releasing — hipertermia, zespół serotoninowy', { ht: 'surge', da: 'surge' }],
  ['amphetamine', 'caffeine', 'C', 'Dodatkowa stymulacja sercowa i lęk', { ne: 'up', da: 'up' }],
  ['cocaine', 'caffeine', 'C', 'Addytywna kardiotoksyczność', { ne: 'up', da: 'up' }],
  ['methamphetamine', 'mephedrone', 'L', 'Ekstremalne ryzyko zgonu sercowego', { da: 'extreme', ht: 'surge' }],
  ['alpvp', 'mephedrone', 'D', 'Krytyczne obciążenie serca i ryzyko psychozy', { da: 'extreme' }],
  ['3cmc', 'mephedrone', 'D', 'Bardzo silne obciążenie układu krążenia', { da: 'surge', ht: 'surge' }],
  ['caffeine', 'nicotine', 'N', 'Wzajemna potencjalizacja stymulacji', { ne: 'up', da: 'up' }],

  // === STIMULANTS × DEPRESSANTS ===
  ['amphetamine', 'alcohol', 'C', 'Maskowanie intoksykacji alkoholowej — ryzyko przedawkowania', { da: 'up', gaba: 'up' }],
  ['cocaine', 'alcohol', 'D', 'Tworzy cocaethylene — wysoce kardiotoksyczny metabolit', { da: 'up' }, 'Cocaethylene wydłuża efekt i zwiększa kardiotoksyczność', 'Główna przyczyna zgonów przy kokainie'],
  ['mdma', 'alcohol', 'C', 'Dehydratacja, hipertermia, hepatotoksyczność', { ht: 'up', gaba: 'up' }],
  ['amphetamine', 'ghb', 'C', 'Stymulant maskuje sedację GHB — ryzyko zapaści po zejsciu stymulanta', { da: 'up', gaba: 'up' }],
  ['cocaine', 'ghb', 'D', 'Obciążenie serca + depresja OUN', { da: 'up', gaba: 'up' }],
  ['amphetamine', 'codeine', 'C', 'Speedball — maskowanie depresji oddechowej', { da: 'up', opioid: 'up' }],
  ['cocaine', 'codeine', 'D', 'Speedball — wysokie ryzyko zgonu', { da: 'up', opioid: 'up' }, '', 'Arytmia + depresja oddechowa'],
  ['amphetamine', 'diazepam', 'S', 'Benzo łagodzi stymulację i lęk', { da: 'up', gaba: 'up' }],
  ['mephedrone', 'alcohol', 'C', 'Silne odwodnienie i obciążenie serca', { ht: 'up', gaba: 'up' }],
  ['alpvp', 'alprazolam', 'S', 'Łagodzenie lęku stymulacyjnego', { da: 'up', gaba: 'up' }],

  // === DEPRESSANTS × DEPRESSANTS ===
  ['alcohol', 'ghb', 'L', 'Synergistyczna depresja OUN — zatrzymanie oddechu', { gaba: 'extreme' }, 'Oba potencjalizują GABA', 'Zatrzymanie oddechu, śmierć'],
  ['alcohol', 'codeine', 'L', 'Krytyczna depresja oddechowa', { gaba: 'up', opioid: 'extreme' }, '', 'Zatrzymanie oddechu'],
  ['alcohol', 'kratom', 'D', 'Nasilenie sedacji i nudności, obciążenie wątroby', { gaba: 'up', opioid: 'up' }],
  ['alcohol', 'diazepam', 'L', 'Synergistyczna depresja OUN i utrata przytomności', { gaba: 'extreme' }, 'Oba PAM GABA-A', 'Śpiączka, zatrzymanie oddechu'],
  ['alcohol', 'alprazolam', 'L', 'Ekstremalna sedacja, amnezja, ryzyko zgonu', { gaba: 'extreme' }],
  ['alcohol', 'zolpidem', 'L', 'Silna depresja OUN, somnambulizm, ryzyko zapaści', { gaba: 'extreme' }],
  ['ghb', 'codeine', 'L', 'Krytyczna depresja oddechowa', { gaba: 'up', opioid: 'extreme' }, '', 'Zatrzymanie oddechu'],
  ['ghb', 'diazepam', 'L', 'Podwójna depresja GABAergiczna', { gaba: 'extreme' }, 'GABA-A + GABA-B jednocześnie', 'Śpiączka'],
  ['codeine', 'diazepam', 'L', 'Najczęstsza przyczyna zgonów z przedawkowania', { gaba: 'up', opioid: 'extreme' }, '', 'FDA black box warning'],
  ['kratom', 'diazepam', 'D', 'Nasilenie depresji OUN', { gaba: 'up', opioid: 'up' }],
  ['alprazolam', 'diazepam', 'D', 'Nadmierna sedacja, ryzyko utraty przytomności', { gaba: 'surge' }],
  ['zolpidem', 'alprazolam', 'D', 'Bardzo silna depresja OUN', { gaba: 'surge' }],
  ['alcohol', 'ketamine', 'D', 'Wymioty + utrata przytomności = ryzyko aspiracji', { gaba: 'up', glut: 'down' }],
  ['alcohol', 'dxm', 'D', 'Depresja OUN + hepatotoksyczność', { gaba: 'up', glut: 'down', ht: 'up' }],
  ['ghb', 'ketamine', 'D', 'Podwójna depresja OUN', { gaba: 'up', glut: 'down' }],

  // === DISSOCIATIVES × STIMULANTS ===
  ['ketamine', 'amphetamine', 'C', 'Przeciwstawne efekty — obciążenie serca', { glut: 'down', da: 'up' }],
  ['ketamine', 'mdma', 'C', 'Kitty-flip — popularny miks, silna dysocjacja i euforia', { glut: 'down', ht: 'up', da: 'up' }],
  ['ketamine', 'cocaine', 'C', 'Calvin Klein (CK) — obciążenie serca + dysocjacja', { glut: 'down', da: 'up' }],
  ['dxm', 'amphetamine', 'D', 'Ryzyko serotoninowe i sercowe', { ht: 'up', da: 'surge', ne: 'surge' }],
  ['dxm', 'mdma', 'L', 'Zespół serotoninowy — krytyczne ryzyko', { ht: 'extreme' }, 'SERT inhibicja DXM + releasing MDMA', 'Zespół serotoninowy'],
  ['dxm', 'cocaine', 'D', 'Addytywna serotonina i stymulacja', { ht: 'up', da: 'surge' }],
  ['nitrous', 'ketamine', 'P', 'Głęboka dysocjacja', { glut: 'extreme_down' }],

  // === CANNABIS & MISC ===
  ['thc', 'cbd', 'S', 'CBD łagodzi psychoaktywność i lęk wywołany przez THC', { cb1: 'down' }],
  ['thc', 'amphetamine', 'N', 'Konopie mogą łagodzić zjazd po stymulantach', { cb1: 'up', da: 'up' }],
  ['thc', 'mdma', 'P', 'Intensyfikacja doznań sensorycznych', { cb1: 'up', ht: 'up' }],
  ['thc', 'alcohol', 'C', 'Cross-fading — ryzyko silnych nudności i zawrotów głowy', { cb1: 'up', gaba: 'up' }],
  ['thc', 'ketamine', 'P', 'Potencjalizacja dysocjacji', { cb1: 'up', glut: 'down' }],
  ['thc', 'lsd', 'C', 'Potencjalizacja efektów wizualnych i mentalnych', { cb1: 'up', ht: 'up' }],
  ['cbd', 'lsd', 'N', 'Redukcja lęku bez wpływu na wizje', { cb1: 'down' }],
  ['cbd', 'alcohol', 'N', 'Brak istotnych negatywnych interakcji', {}],
  ['nicotine', 'caffeine', 'N', 'Synergia stymulująca', { da: 'up' }],
  ['nicotine', 'alcohol', 'S', 'Nikotyna może lekko osłabiać odczuwaną sedację', { da: 'up', gaba: 'up' }],
  ['nicotine', 'amphetamine', 'C', 'Zwiększone obciążenie serca', { da: 'up', ne: 'up' }],

  // === OTHERS ===
  ['nitrous', 'alcohol', 'D', 'Ryzyko utraty przytomności i wymiotów', { glut: 'down', gaba: 'up' }],
  ['nitrous', 'mdma', 'P', 'Krótka, intensywna euforia', { ht: 'up' }],
  ['salvia', 'lsd', 'C', 'Ekstremalnie intensywne i dezorientujące', { ht: 'up' }],
  ['salvia', 'ketamine', 'C', 'Bardzo silna dysocjacja', { glut: 'down' }],
  ['salvia', 'thc', 'C', 'Zwiększone ryzyko paniki i dezorientacji', { cb1: 'up' }],
  ['kratom', 'alcohol', 'D', 'Nasilenie sedacji i ryzyko wymiotów', { gaba: 'up', opioid: 'up' }],
  ['kratom', 'mdma', 'C', 'Możliwe obciążenie wątroby i serca', { ht: 'up', opioid: 'up' }],
  ['kratom', 'codeine', 'D', 'Synergia opioidowa, ryzyko przedawkowania', { opioid: 'surge' }],
  ['zolpidem', 'alcohol', 'L', 'Ekstremalne ryzyko zapaści oddechowej', { gaba: 'extreme' }],
  ['zolpidem', 'diazepam', 'D', 'Silna synergia depresyjna', { gaba: 'surge' }],
  ['methamphetamine', 'cocaine', 'L', 'Ekstremalne ryzyko zgonu sercowego', { da: 'extreme', ne: 'extreme' }],
  ['3cmc', 'alpvp', 'L', 'Krytyczne obciążenie serca i ryzyko psychozy', { da: 'extreme' }],
  ['caffeine', 'mdma', 'C', 'Zwiększone obciążenie serca i ryzyko przegrzania', { ht: 'up', ne: 'up' }],
  ['caffeine', 'alcohol', 'N', 'Maskowanie intoksykacji alkoholowej', { ne: 'up', gaba: 'up' }],
  ['nicotine', 'cocaine', 'D', 'Krytyczne obciążenie układu krążenia', { da: 'surge', ne: 'surge' }],
];

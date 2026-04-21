// Compact: [substanceA_key, substanceB_key, risk_level, description_pl, nt_effects_json, mechanism, clinical_notes]
// Risk levels: S=low_synergy, N=low_no_interaction, P=low_potentiation, C=caution, D=dangerous, L=life_threat
type R = 'S'|'N'|'P'|'C'|'D'|'L';
const R_MAP: Record<R, string> = {S:'low_synergy',N:'low_no_interaction',P:'low_potentiation',C:'caution',D:'dangerous',L:'life_threat'};
type Row = [string,string,R,string,Record<string,string>,string?,string?];

export { R_MAP };

export const INTERACTIONS: Row[] = [
  // === PSYCHEDELICS × PSYCHEDELICS ===
  ['lsd','grzyby','P','Wzajemna potencjacja efektów psychedelicznych przez wspólny agonizm 5-HT2A',{ht:'surge'},'Oba agoniści 5-HT2A — efekt addytywny'],
  ['lsd','dmt','P','Potencjacja — DMT nakłada się na trwający trip LSD',{ht:'surge'}],
  ['lsd','meskalina','P','Potencjacja psychedeliczna',{ht:'surge'}],
  ['lsd','dox','C','DOx ma komponent stymulujący + bardzo długi czas działania. Nieprzewidywalne połączenie',{ht:'surge',ne:'up'}],
  ['lsd','nbome','C','NBOMe ma wąskie okno dawkowania — łączenie zwiększa ryzyko toksyczności 5-HT2B',{ht:'surge'},'','Ryzyko kardiotoksyczności'],
  ['lsd','2cx','P','Potencjacja efektów psychedelicznych',{ht:'surge'}],
  ['lsd','2ctx','D','2C-T-x ma komponent MAOI — ryzyko zespołu serotoninowego z LSD',{ht:'dangerous_surge'},'MAOI + 5-HT2A agonist','Ryzyko zespołu serotoninowego'],
  ['lsd','5meoxxt','C','5-MeO silniejszy agonista 5-HT1A — ryzyko przytłoczenia',{ht:'surge'}],
  ['grzyby','dmt','P','Oba tryptaminy — addytywna aktywacja 5-HT2A',{ht:'surge'}],
  ['grzyby','meskalina','P','Potencjacja psychedeliczna',{ht:'surge'}],
  ['grzyby','nbome','C','Ryzyko nadmiernej aktywacji 5-HT2A',{ht:'surge'}],
  ['dmt','5meoxxt','C','Oba silne tryptaminy — ryzyko przytłoczenia i serotoniny',{ht:'surge'}],

  // === PSYCHEDELICS × CANNABIS ===
  ['lsd','konopie','C','THC potencjalizuje psychedeliki — ryzyko lęku, psychozy',{ht:'up',cb1:'up'},'CB1 moduluje 5-HT2A signaling'],
  ['grzyby','konopie','C','Potencjalizacja z ryzykiem lęku',{ht:'up',cb1:'up'}],
  ['dmt','konopie','C','Potencjalizacja',{ht:'up',cb1:'up'}],
  ['meskalina','konopie','C','Potencjalizacja',{ht:'up',cb1:'up'}],

  // === PSYCHEDELICS × DISSOCIATIVES ===
  ['lsd','ketamina','C','Głęboka dysocjacja + psychedelia. Nieprzewidywalne',{ht:'up',glut:'down'}],
  ['lsd','dxm','D','DXM jest inhibitorem SERT — z LSD ryzyko serotoniny',{ht:'dangerous_surge',glut:'down'},'SERT inhibicja + 5-HT2A agonizm','Ryzyko zespołu serotoninowego'],
  ['lsd','n2o','P','Krótkotrwała intensyfikacja tripu',{ht:'up',glut:'down'}],
  ['grzyby','ketamina','C','Potencjalizacja dysocjacyjno-psychedeliczna',{ht:'up',glut:'down'}],
  ['grzyby','dxm','D','Ryzyko serotoninowe jak LSD+DXM',{ht:'dangerous_surge'},'','Ryzyko zespołu serotoninowego'],
  ['grzyby','n2o','P','Krótka potencjalizacja',{ht:'up'}],

  // === PSYCHEDELICS × STIMULANTS ===
  ['lsd','amfetaminy','C','Stymulacja + psychedelia — lęk, tachykardia',{ht:'up',da:'up',ne:'up'}],
  ['lsd','mdma','C','Candyflip — potencjalizacja. Bezpieczne przy niskich dawkach obu',{ht:'surge',da:'up'}],
  ['lsd','kokaina','C','Kokaina może tłumić psychedelię, ryzyko sercowe',{da:'up',ne:'up'}],
  ['grzyby','amfetaminy','C','Lęk, tachykardia',{ht:'up',ne:'up'}],
  ['grzyby','mdma','C','Hippie flip — potencjalizacja',{ht:'surge',da:'up'}],

  // === PSYCHEDELICS × DEPRESSANTS ===
  ['lsd','alkohol','S','Alkohol tłumi efekty psychedeliczne',{ht:'down',gaba:'up'},'GABA potencjalizacja tłumi 5-HT2A'],
  ['lsd','ghb','C','Nieprzewidywalne połączenie depresant+psychedelik',{ht:'up',gaba:'up'}],
  ['lsd','benzodiazepiny','S','Benzo jako trip-killer — redukuje psychedelię',{ht:'down',gaba:'up'}],
  ['grzyby','alkohol','S','Alkohol redukuje efekty grzybów',{ht:'down',gaba:'up'}],
  ['grzyby','benzodiazepiny','S','Trip-killer',{ht:'down',gaba:'up'}],
  ['lsd','opioidy','S','Opioidy redukują psychedelię',{ht:'down',opioid:'up'}],
  ['grzyby','opioidy','S','Opioidy redukują psychedelię',{ht:'down',opioid:'up'}],

  // === PSYCHEDELICS × PSYCHIATRIC ===
  ['lsd','ssri','S','SSRI tłumi efekty LSD — rywalizacja o 5-HT2A',{ht:'blocked'},'Chroniczna blokada SERT zmienia wrażliwość 5-HT2A'],
  ['lsd','snri','S','Podobnie jak SSRI — tłumienie',{ht:'blocked'}],
  ['lsd','maoi','D','MAOI potencjalizuje LSD wielokrotnie — bardzo niebezpieczne',{ht:'dangerous_surge'},'MAO nie degraduje LSD ale potencjalizuje sygnalizację 5-HT','Nieprzewidywalna potencjalizacja'],
  ['lsd','lit','L','EKSTREMALNIE NIEBEZPIECZNE — drgawki, śpiączka, śmierć',{ht:'surge',glut:'surge'},'Mechanizm niejasny — prawdopodobnie modulacja inozytolu + 5-HT','Wiele udokumentowanych przypadków drgawek i śmierci'],
  ['lsd','antypsy_typ','S','Antipsychotyk blokuje trip przez antagonizm D2/5-HT2A',{ht:'blocked',da:'blocked'}],
  ['lsd','antypsy_atyp','S','Trip-killer — blokada 5-HT2A',{ht:'blocked'}],
  ['grzyby','ssri','S','SSRI tłumi efekty grzybów',{ht:'blocked'}],
  ['grzyby','maoi','D','MAOI potencjalizuje psylocybinę',{ht:'dangerous_surge'}],
  ['grzyby','lit','L','EKSTREMALNIE NIEBEZPIECZNE jak LSD+Lit',{ht:'surge',glut:'surge'},'','Drgawki, śmierć'],

  // === STIMULANTS × STIMULANTS ===
  ['amfetaminy','kokaina','D','Addytywna kardiotoksyczność',{da:'surge',ne:'surge'},'Dwa mechanizmy DA jednocześnie','Arytmia, zawał'],
  ['amfetaminy','mdma','D','Hipertermia, kardiotoksyczność, neurotoksyczność',{da:'surge',ht:'surge',ne:'surge'},'','Zwiększona neurotoksyczność MDMA'],
  ['amfetaminy','apvp','D','Ekstremalny DA overload',{da:'surge',ne:'surge'},'','Psychoza, arytmia'],
  ['amfetaminy','4mmc','D','Kardiotoksyczność, hipertermia',{da:'surge',ht:'up',ne:'surge'}],
  ['kokaina','mdma','D','Kokaina blokuje SERT potrzebny dla MDMA. Kardiotoxic',{da:'surge',ne:'surge'},'Kokaina antagonizuje efekt empatogenny MDMA'],
  ['kokaina','apvp','L','Ekstremalny DA surge — arytmia',{da:'extreme',ne:'surge'},'','Zgony'],
  ['mdma','4mmc','D','Podwójny releasing — hipertermia, serotonina',{ht:'surge',da:'surge'}],
  ['amfetaminy','kofeina','C','Dodatkowa stymulacja sercowa',{ne:'up',da:'up'}],
  ['kokaina','kofeina','C','Addytywna kardiotoksyczność',{ne:'up',da:'up'}],

  // === STIMULANTS × DEPRESSANTS ===
  ['amfetaminy','alkohol','C','Maskowanie intoksykacji alkoholowej',{da:'up',gaba:'up'}],
  ['kokaina','alkohol','D','Tworzy cocaethylene — kardiotoksyczny metabolit',{da:'up'},'Cocaethylene wydłuża efekt i zwiększa kardiotoksyczność','Główna przyczyna zgonów przy kokainie'],
  ['mdma','alkohol','C','Dehytracja, hipertermia, hepatotoksyczność',{ht:'up',gaba:'up'}],
  ['amfetaminy','ghb','C','Stymulant maskuje sedację GHB',{da:'up',gaba:'up'}],
  ['kokaina','ghb','D','Obciążenie serca + depresja OUN',{da:'up',gaba:'up'}],
  ['amfetaminy','opioidy','C','Speedball — maskowanie depresji oddechowej',{da:'up',opioid:'up'}],
  ['kokaina','opioidy','D','Speedball — główna przyczyna zgonów',{da:'up',opioid:'up'},'','Arytmia + depresja oddechowa'],
  ['amfetaminy','benzodiazepiny','S','Benzo łagodzi stymulację',{da:'up',gaba:'up'}],
  ['kokaina','benzodiazepiny','S','Benzo jako landing gear',{da:'up',gaba:'up'}],

  // === STIMULANTS × PSYCHIATRIC ===
  ['amfetaminy','maoi','L','MAOI blokuje metabolizm amfetaminy — przełom hipertensyjny',{da:'extreme',ne:'extreme'},'Brak degradacji MAO = toksyczne nagromadzenie DA/NE','Śmiertelne nadciśnienie'],
  ['mdma','maoi','L','Ekstremalny zespół serotoninowy + przełom hipertensyjny',{ht:'extreme',da:'extreme'},'','Jeden z najniebezpieczniejszych miksów'],
  ['kokaina','maoi','L','Przełom hipertensyjny',{da:'extreme',ne:'extreme'}],
  ['mdma','ssri','D','SSRI blokuje SERT — MDMA nie działa + ryzyko serotoniny',{ht:'dangerous'},'SSRI blokuje mechanizm działania MDMA','Brak efektu empatogennego + ryzyko SS'],
  ['mdma','snri','D','Jak SSRI ale z dodatkowym NE',{ht:'dangerous',ne:'up'}],
  ['amfetaminy','ssri','C','Ryzyko zespołu serotoninowego przy wysokich dawkach',{ht:'up',da:'up'}],
  ['amfetaminy','bupropion','D','Oba podnoszą DA/NE — ryzyko drgawek',{da:'surge',ne:'surge'},'Bupropion obniża próg drgawkowy'],
  ['kokaina','bupropion','D','Addytywna blokada DAT',{da:'surge'}],
  ['4mmc','ssri','C','Osłabiony efekt mefedronu + ryzyko serotoninowe',{ht:'up'}],
  ['4mmc','maoi','L','Toksyczne nagromadzenie monoamin',{ht:'extreme',da:'extreme',ne:'extreme'}],
  ['apvp','antypsy_typ','S','Antipsychotyk może łagodzić psychozę stymulacyjną',{da:'blocked'}],

  // === DEPRESSANTS × DEPRESSANTS ===
  ['alkohol','ghb','L','Synergistyczna depresja OUN — zatrzymanie oddechu',{gaba:'extreme'},'Oba potencjalizują GABA','Zatrzymanie oddechu, śmierć'],
  ['alkohol','opioidy','L','Depresja oddechowa — główna przyczyna zgonów opioidowych',{gaba:'up',opioid:'extreme'},'','Zatrzymanie oddechu'],
  ['alkohol','benzodiazepiny','L','Synergistyczna depresja OUN',{gaba:'extreme'},'Oba PAM GABA-A','Śpiączka, zatrzymanie oddechu'],
  ['ghb','opioidy','L','Depresja oddechowa',{gaba:'up',opioid:'extreme'},'','Zatrzymanie oddechu'],
  ['ghb','benzodiazepiny','L','Podwójna depresja GABAergiczna',{gaba:'extreme'},'GABA-A + GABA-B jednocześnie','Śpiączka'],
  ['opioidy','benzodiazepiny','L','Najczęstsza przyczyna zgonów z przedawkowania opioidów',{gaba:'up',opioid:'extreme'},'','FDA black box warning'],
  ['alkohol','ketamina','D','Wymioty + utrata przytomności = ryzyko aspiracji',{gaba:'up',glut:'down'}],
  ['alkohol','dxm','D','Depresja OUN + hepatotoksyczność',{gaba:'up',glut:'down',ht:'up'}],
  ['ghb','ketamina','D','Podwójna depresja OUN',{gaba:'up',glut:'down'}],

  // === DEPRESSANTS × PSYCHIATRIC ===
  ['alkohol','ssri','C','Nasilenie sedacji, pogorszenie depresji',{ht:'up',gaba:'up'}],
  ['alkohol','maoi','D','Tyraminowa reakcja z niektórymi alkoholami (piwo, wino)',{ne:'surge'},'MAOI blokuje metabolizm tyraminy w fermentowanych napojach','Przełom hipertensyjny'],
  ['alkohol','lit','C','Odwodnienie zwiększa toksyczność litu',{},'','Monitorować poziom litu'],
  ['alkohol','pregabalina','D','Synergistyczna sedacja',{gaba:'up'}],
  ['opioidy','ssri','C','Umiarkowane ryzyko serotoninowe',{ht:'up',opioid:'up'}],
  ['benzodiazepiny','ssri','N','Bezpieczne połączenie — częste w psychiatrii',{ht:'up',gaba:'up'}],
  ['benzodiazepiny','snri','N','Bezpieczne klinicznie',{ht:'up',gaba:'up'}],
  ['benzodiazepiny','lit','N','Bezpieczne',{gaba:'up'}],
  ['benzodiazepiny','antypsy_atyp','C','Sedacja',{gaba:'up',da:'down'}],
  ['opioidy','pregabalina','D','Synergistyczna depresja oddechowa',{gaba:'up',opioid:'up'},'','Zgony raportowane'],
  ['ghb','pregabalina','L','Depresja OUN',{gaba:'extreme'}],

  // === DISSOCIATIVES × STIMULANTS ===
  ['ketamina','amfetaminy','C','Przeciwstawne efekty — stymulacja vs dysocjacja',{glut:'down',da:'up'}],
  ['ketamina','mdma','C','Potencjalizacja — popularny ale ryzykowny miks',{glut:'down',ht:'up',da:'up'}],
  ['ketamina','kokaina','C','Obciążenie serca + dysocjacja',{glut:'down',da:'up'}],
  ['dxm','amfetaminy','D','DXM SERT + amf DA/NE = ryzyko serotoninowe i sercowe',{ht:'up',da:'surge',ne:'surge'}],
  ['dxm','mdma','L','Zespół serotoninowy — oba podnoszą 5-HT',{ht:'extreme'},'SERT inhibicja DXM + releasing MDMA','Zespół serotoninowy'],
  ['dxm','kokaina','D','Addytywna serotonina i stymulacja',{ht:'up',da:'surge'}],

  // === DISSOCIATIVES × PSYCHIATRIC ===
  ['ketamina','ssri','N','Ogólnie bezpieczne',{glut:'down',ht:'up'}],
  ['ketamina','maoi','C','Umiarkowane ryzyko',{glut:'down'}],
  ['ketamina','lit','C','Mało danych',{glut:'down'}],
  ['dxm','ssri','L','Zespół serotoninowy',{ht:'extreme'},'Oba inhibitory SERT','Udokumentowane zgony'],
  ['dxm','snri','L','Zespół serotoninowy',{ht:'extreme'}],
  ['dxm','maoi','L','Najsilniejszy zespół serotoninowy',{ht:'extreme',da:'extreme'},'','Śmierć'],

  // === OPIOIDS specific ===
  ['tramadol','ssri','L','Zespół serotoninowy — tramadol jest SNRI',{ht:'extreme'},'Oba blokują SERT','Drgawki, zespół serotoninowy, śmierć'],
  ['tramadol','snri','L','Zespół serotoninowy',{ht:'extreme',ne:'surge'}],
  ['tramadol','maoi','L','Ekstremalny zespół serotoninowy',{ht:'extreme'},'','Śmierć'],
  ['tramadol','mdma','L','Zespół serotoninowy + drgawki',{ht:'extreme'},'Tramadol obniża próg drgawkowy','Drgawki + zespół serotoninowy'],
  ['tramadol','dxm','L','Potrójne zagrożenie serotoniny',{ht:'extreme'}],
  ['tramadol','alkohol','D','Depresja oddechowa + drgawki',{gaba:'up',opioid:'up'}],
  ['tramadol','benzodiazepiny','D','Depresja oddechowa',{gaba:'up',opioid:'up'}],
  ['tramadol','ghb','L','Depresja OUN',{gaba:'up',opioid:'up'}],

  // === PSYCHIATRIC × PSYCHIATRIC ===
  ['ssri','maoi','L','Zespół serotoninowy',{ht:'extreme'},'Najklasyczniejsza przyczyna zespołu serotoninowego','2 tygodnie wash-out wymagane'],
  ['ssri','snri','D','Nadmierna serotonina',{ht:'surge'}],
  ['ssri','lit','C','Monitorować — ryzyko serotoniny',{ht:'up'},'','Zespół serotoninowy rzadki ale możliwy'],
  ['ssri','bupropion','C','Częste kliniczne połączenie ale SSRI inhibuje CYP2D6',{ht:'up',da:'up'}],
  ['snri','maoi','L','Zespół serotoninowy',{ht:'extreme',ne:'extreme'}],
  ['maoi','bupropion','L','Przełom hipertensyjny',{da:'extreme',ne:'extreme'}],
  ['lit','antypsy_typ','C','Neurotoksyczność przy wysokich dawkach',{da:'down'}],
  ['lit','antypsy_atyp','C','Monitorować',{da:'down',ht:'down'}],
  ['antypsy_typ','antypsy_atyp','D','Nadmierna blokada D2 — EPS',{da:'extreme_block'}],
  ['pregabalina','benzodiazepiny','D','Synergistyczna sedacja',{gaba:'surge'},'','Depresja oddechowa'],

  // === CANNABIS × misc ===
  ['konopie','amfetaminy','N','Konopie łagodzą stymulację',{cb1:'up',da:'up'}],
  ['konopie','mdma','P','Potencjalizacja sensoryczna',{cb1:'up',ht:'up'}],
  ['konopie','ketamina','P','Potencjalizacja dysocjacji',{cb1:'up',glut:'down'}],
  ['konopie','alkohol','C','Cross-fading — wymioty, zawroty głowy',{cb1:'up',gaba:'up'}],
  ['konopie','opioidy','P','Potencjalizacja analgezji',{cb1:'up',opioid:'up'}],
  ['konopie','benzodiazepiny','P','Potencjalizacja sedacji',{cb1:'up',gaba:'up'}],
  ['konopie','ssri','N','Ogólnie bezpieczne',{cb1:'up',ht:'up'}],
  ['konopie','antypsy_atyp','S','Antipsychotyk może łagodzić THC-paranoidę',{cb1:'up',da:'down'}],

  // === N2O ===
  ['n2o','alkohol','D','Depresja OUN',{glut:'down',gaba:'up'}],
  ['n2o','opioidy','D','Depresja oddechowa',{glut:'down',opioid:'up'}],
  ['n2o','ketamina','C','Głęboka dysocjacja',{glut:'extreme_down'}],
  ['n2o','mdma','P','Potencjalizacja',{glut:'down',ht:'up'}],

  // === CAFFEINE ===
  ['kofeina','alkohol','N','Maskowanie intoksykacji',{ne:'up',gaba:'up'}],
  ['kofeina','mdma','C','Dodatkowe obciążenie serca',{ne:'up',ht:'up'}],
  ['kofeina','ssri','N','Bezpieczne',{ne:'up',ht:'up'}],
  ['kofeina','lit','C','Kofeina może obniżać poziom litu',{},'Kofeina zwiększa klirens nerkowy litu'],
  ['kofeina','benzodiazepiny','S','Kofeina przeciwdziała sedacji',{ne:'up',gaba:'up'}],
];

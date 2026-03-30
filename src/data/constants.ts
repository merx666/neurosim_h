
export const CATEGORIES = {
  cathinone:   { label: "KATYNONY",    label_en: "CATHINONES",    color: "#00ff9f" },
  entactogen:  { label: "ENTAKTOGENY", label_en: "ENTACTOGENS",   color: "#ee00ff" },
  stimulant:   { label: "STYMULANTY",  label_en: "STIMULANTS",    color: "#ffcc00" },
  opioid:      { label: "OPIOIDY",     label_en: "OPIOIDS",       color: "#9933ff" },
  dissociative:{ label: "DYSOCJANTY",  label_en: "DISSOCIATIVES", color: "#0099ff" },
  psychedelic: { label: "PSYCHEDELIKI",label_en: "PSYCHEDELICS",  color: "#44ff00" },
  cannabinoid: { label: "KANNABINOIDY",label_en: "CANNABINOIDS",  color: "#50e890" },
  gabaergic:   { label: "GABA-ERGIKI", label_en: "GABAERGICS",    color: "#5599ff" },
};
export const BRAIN_R = {
  PFC:    { x:0.25, y:0.34, label:'PFC'      },
  ACC:    { x:0.32, y:0.46, label:'ACC'      },
  NAc:    { x:0.38, y:0.58, label:'NAc'      },
  VTA:    { x:0.50, y:0.58, label:'VTA'      },
  Amy:    { x:0.46, y:0.67, label:'Amygdala' },
  Hipp:   { x:0.58, y:0.63, label:'Hipp'     },
  Thal:   { x:0.46, y:0.46, label:'Thalamus' },
  Raphe:  { x:0.61, y:0.60, label:'Raphe'    },
  LC:     { x:0.70, y:0.64, label:'LC'       },
  Cereb:  { x:0.78, y:0.73, label:'Cerebellum'  },
  VCtx:   { x:0.82, y:0.38, label:'V.Ctx'    },
  Cortex: { x:0.52, y:0.22, label:'Cortex'   },
};
export const NT_COL = {
  da:     '0,255,170',
  ht:     '255,68,255',
  ne:     '255,170,68',
  gaba:   '80,140,255',
  glut:   '255,220,50',
  endo:   '100,232,144',
  opioid: '160,100,255',
  cb1:    '80,210,130',
};
export var UI_PL={subtitle:"PSYCHOPHARMACOLOGY ENGINE // WYBIERZ SUBSTANCJĘ",back:"← POWRÓT",vizSynapse:"WIZUALIZACJA SYNAPTYCZNA",timeline:"TIMELINE EFEKTÓW — KLIKNIJ FAZĘ",tabMech:"MECHANIZM — LEGENDA ANIMACJI",tabBrain:"OBSZARY MÓZGU",sp:{psilocybin:"MECHANIZM SYNAPTYCZNY — 5-HT2A (PSILOCYNA)",lsd:"KINETYKA WIĄZANIA — LSD vs NORMALNY AGONISTA",thc:"OBWÓD VTA — DISINHIBICJA DOPAMINY (CB1→GABA→DA)",cbd:"ALLOSTERYCZNA MODULACJA CB1 — CBD vs THC",dxm:"REUPTAKE — SERT INHIBICJA DXM",def:"REUPTAKE — NORMALNY vs ZABLOKOWANY"}};
export var UI_EN={subtitle:"PSYCHOPHARMACOLOGY ENGINE // SELECT SUBSTANCE",back:"← BACK",vizSynapse:"SYNAPTIC VISUALIZATION",timeline:"EFFECTS TIMELINE — CLICK A PHASE",tabMech:"MECHANISM — ANIMATION GUIDE",tabBrain:"BRAIN REGIONS",sp:{psilocybin:"SYNAPTIC MECHANISM — 5-HT2A (PSILOCIN)",lsd:"BINDING KINETICS — LSD vs NORMAL AGONIST",thc:"VTA CIRCUIT — DOPAMINE DISINHIBITION (CB1→GABA→DA)",cbd:"CB1 ALLOSTERIC MODULATION — CBD vs THC",dxm:"REUPTAKE — DXM SERT INHIBITION",def:"REUPTAKE — NORMAL vs BLOCKED"}};
export var CANVAS_T={
  pl:{channelClosed:"KANAŁ ZAMKNIĘTY",glutBind:"GLUTAMINIAN WIĄŻE → OTWARCIE",ionFlow:"PRZEPŁYW JONÓW (Ca²⁺, Na⁺)",ketEnter:"KETAMINA WCHODZI DO KANAŁU",dxmEnter:"DXM/DXO WCHODZI DO KANAŁU",channelBlocked:"KANAŁ ZABLOKOWANY",gabaBind:"GABA WIĄŻE α/β — RZADKIE OTWARCIA",dzpApproach:"DIAZEPAM ZBLIŻA SIĘ DO MIEJSCA α/γ",freqUp:"↑ CZĘSTOTLIWOŚĆ OTWARCIA — Cl⁻ WPŁYWA",nacCircuit:"NUCLEUS ACCUMBENS — OBWÓD DEINHIBICJI",arrowCodeine:"kodeina",silenced:"wyciszony",disinhibited:"odhamowany",dmnNodes:"DMN",extNetworks:"sieci zewnętrzne",lsdMap:"MAPA POWINOWACTWA — LSD-25 (μg aktywne)",lsdKinetics:function(n,t){return n+"/"+t+" receptorów z lid closure — stąd 8–12h działania przy μg dawce";},lidKinetics:"LSD — lid closure",htNormal:"5-HT — normalny agonista",seroSyn:"PRE — NEURON SEROTONINERGICZNY",pyrSyn:"POST — NEURON PIRAMIDALNY KORY (warstwa II/V)",gqCascade:function(n){return "Gq → PLC → IP3 → Ca²⁺ ("+n+" receptorów)";},activeSites:function(n){return n+" receptorów 5-HT2A aktywnych";},psilocinLabel:"psilocyna",htLabel:"5-HT",normalTransport:"NORMALNY TRANSPORT",blockedTransport:"ZABLOKOWANY TRANSPORT",extracellular:"ZEWNĄTRZKOMÓRKOWE",intracellular:"WEWNĄTRZKOMÓRKOWE",synapticCleft:"SZCZELINA SYNAPTYCZNA"},
  en:{channelClosed:"CHANNEL CLOSED",glutBind:"GLUTAMATE BINDS → OPENING",ionFlow:"ION FLOW (Ca²⁺, Na⁺)",ketEnter:"KETAMINE ENTERS CHANNEL",dxmEnter:"DXM/DXO ENTERS CHANNEL",channelBlocked:"CHANNEL BLOCKED",gabaBind:"GABA BINDS α/β — INFREQUENT OPENINGS",dzpApproach:"DIAZEPAM APPROACHES α/γ SITE",freqUp:"↑ OPENING FREQUENCY — Cl⁻ INFLUX",nacCircuit:"NUCLEUS ACCUMBENS — DISINHIBITION CIRCUIT",arrowCodeine:"codeine",silenced:"silenced",disinhibited:"disinhibited",dmnNodes:"DMN",extNetworks:"external networks",lsdMap:"AFFINITY MAP — LSD-25 (active at μg)",lsdKinetics:function(n,t){return n+"/"+t+" receptors with lid closure — hence 8–12h duration at μg dose";},lidKinetics:"LSD — lid closure",htNormal:"5-HT — normal agonist",seroSyn:"PRE — SEROTONERGIC NEURON",pyrSyn:"POST — CORTICAL PYRAMIDAL NEURON (layer II/V)",gqCascade:function(n){return "Gq → PLC → IP3 → Ca²⁺ ("+n+" receptors)";},activeSites:function(n){return n+" 5-HT2A receptors active";},psilocinLabel:"psilocin",htLabel:"5-HT",normalTransport:"NORMAL TRANSPORT",blockedTransport:"BLOCKED TRANSPORT",extracellular:"EXTRACELLULAR",intracellular:"INTRACELLULAR",synapticCleft:"SYNAPTIC CLEFT"}
};

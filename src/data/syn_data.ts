export const SYN = {
  mephedrone: {
    type:'mixed', label:'WYRZUT + BLOKADA REUPTAKE',
    da:{spawn:0.048,block:0.60}, ht:{spawn:0.072,block:0.70}, ne:{spawn:0.034,block:0.40},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Dopamina (DA)</b> — odpowiada za euforię i napęd</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff"></span><b style="color:#aaa">Serotonina (5-HT)</b> — odpowiada za ciepło, empatię i nastrój</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">Noradrenalina (NE)</b> — pobudzenie, czujność</div>
</div>
<p>Mefedron to <b>releasing agent z komponentem blokady reuptake</b>. Widać to w animacji w dwóch fazach: początkowo pęcherzyki synaptyczne (kółka w górnym terminalu) pulsują i wypuszczają serię cząsteczek — to aktywny wyrzut. Cząsteczki spadają przez szczelinę synaptyczną, a większość z nich zamiast wrócić przez transportery (symbole ∩ na granicy terminali) zostaje zatrzymana w szczelinie — dryf brownowski zamiast powrotu.</p>
<p>Blokada SERT:DAT wynosi ~1:1 in vitro (Pifl 2015, Green 2014); ~2:1 in vivo. W animacji widać lekką przewagę różowych cząsteczek nad zielonymi — to właśnie serotoninowy charakter nadaje mefedronowi "ciepło" odróżniające go od czystych stymulantów.</p>
<p><b>Transportery (∩):</b> te podświetlone kolorem substancji z cząsteczką w środku — to zablokowane DAT/SERT. Aktywne (z pulsującą strzałką ↑) pobierają cząsteczki z powrotem. Mefedron blokuje większość, ale nie wszystkie.</p>
<p><b>Receptory postsynaptyczne (prostokąty na dole):</b> kiedy cząsteczka do nich dociera, receptor rozświetla się — to aktywacja. Tutaj dzieje się to często przez duży wyrzut i długi czas przebywania cząsteczek w szczelinie.</p>
<p><b>Animacja 2 — Porównanie reuptake.</b> Lewa strona: normalny transport — cząsteczki 5-HT i DA szybko wracają przez aktywne SERT/DAT (strzałki ↑). Prawa strona: mefedron zablokował transportery (świecące kropki ∩) — cząsteczki dryftują znacznie dłużej. Liczba SERT blokada 70%, DAT 60% — widać to w proporcji czasu przebywania.</p>`,
    brain:`<p>Mapa mózgu mefedronu to klasyczny profil <b>monoaminergiczny nieselektywny</b> — aktywacja rozlewa się przez trzy systemy jednocześnie, tworząc szerszą sieć niż czyste stymulatory dopaminowe.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Główne źródło dopaminy — neurony VTA wysyłają projekcje do NAc (szlak nagrody) i PFC (motywacja). Mefedron pobudza ten system przez odwrócony DAT.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Centrum nagrody — skumulowana DA to neurobiologiczne źródło euforii i napędu. Intensywność świecenia NAc koreluje z subiektywną euforią.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Jądra szwu — źródło serotoniny projekcji wstępującej. Odwrócony SERT uwalnia masowo 5-HT, która rozprzestrzenia się do kory, Amy i Hipp. Stąd pochodzi ciepło i empatia.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Ciało migdałowate — aktywacja 5-HT2A i 5-HT1A tłumi normalną hiperaktywność lękową. Stąd efekt obniżenia zahamowań społecznych i emocjonalne otwarcie.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Kora przedczołowa — aktywowana przez 5-HT z projekcji Raphe. Przy mefedronie PFC ma charakter serotoninowy, odróżniając go od kokainy (gdzie dominuje DA).</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — NET reversal uwalnia NE, dając pobudzenie i czujność. Odpowiada za fizyczne komponenty: przyspieszone tętno, suchość w ustach, wzrost temperatury ciała.</div></div>
<p><b>Wzorzec fazowy:</b> Na peaku aktywnych jest 6 regionów jednocześnie. Come-down charakteryzuje się gwałtownym wygaszeniem szczególnie NAc i Raphe — bezpośredni substrat crashu i głodu kolejnej dawki.</p>`,
    brain_en:`<p>Mephedrone's brain map is a classic non-selective monoaminergic profile — activation spreads across three systems simultaneously, creating a broader network than pure DA stimulants.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Primary dopamine source — VTA neurons project to NAc (reward pathway) and PFC (motivation). Mephedrone drives this via reversed DAT.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Reward center — accumulated DA is the neurobiological source of euphoria. NAc brightness correlates with subjective euphoria intensity.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Raphe nuclei — serotonin source. Reversed SERT floods 5-HT into every cortical region. This is the "warmth" center.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Amygdala — 5-HT1A activation reduces fear reactivity. Mephedrone's anxiolytic component is largely serotonergic.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — NET blockade. Arousal, heart rate, blood pressure elevation. The stimulant "edge."</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>Dopamine (DA) — euphoria and drive</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff;opacity:0.5"></span>Serotonin (5-HT) — warmth, empathy, mood</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>Noradrenaline (NE) — arousal, alertness</div>
</div>
<p>Mephedrone is a <b>releasing agent with a reuptake-blocking component</b>. This shows up in two phases: synaptic vesicles (circles in the upper terminal) pulse and release a burst of particles — active efflux. Particles fall through the synaptic cleft, but instead of returning via transporters (∩ symbols at the terminal border) most stall in the cleft — Brownian drift instead of reuptake.</p>
<p>SERT:DAT blockade ratio is ~1:1 in vitro (Pifl 2015, Green 2014); ~2:1 in vivo. In the animation, a slight dominance of pink particles over green reflects this. This serotonergic character is what gives mephedrone its "warmth" — absent in pure DA stimulants.</p>
<p><b>Transporters (∩):</b> highlighted ones with a particle inside = blocked DAT/SERT. Active transporters (with pulsing ↑ arrow) recapture particles. Mephedrone blocks most, but not all.</p>
<p><b>Postsynaptic receptors (rectangles at bottom):</b> light up when a particle arrives. This happens frequently due to high efflux and prolonged cleft dwell-time.</p>
<p><b>Animation 2 — Reuptake comparison.</b> Left: normal transport — 5-HT and DA quickly return via active SERT/DAT (↑ arrows). Right: mephedrone has blocked transporters (glowing ∩) — particles drift far longer. SERT blockade ~70%, DAT ~60% — reflected in dwell-time proportions.</p>`
  },
  '3cmc': {
    name_en: "3-CMC", fullName_en: "3-Chloromethcathinone (3-CMC)", class_en: "Cathinone",
    type:'inhibitor', label:'BLOKADA DAT / NET',
    da:{spawn:0.022,block:0.82}, ht:{spawn:0.010,block:0.44}, ne:{spawn:0.020,block:0.78},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Dopamina (DA)</b> — główny target</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff"></span><b style="color:#aaa">Serotonina (5-HT)</b> — słaba aktywność</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">Noradrenalina (NE)</b> — drugi główny target</div>
</div>
<p>3-CMC to przede wszystkim <b>inhibitor reuptake</b> — blokuje transportery DAT i NET, ale wypuszcza znacznie mniej cząsteczek niż releaser. W animacji widać to wyraźnie: pęcherzyki są ciemniejsze, mniej aktywne. Nieliczne cząsteczki które się pojawiają, <b>długo zostają w szczelinie</b> zamiast być pobierane z powrotem.</p>
<p>Różnica vs mefedron: tutaj nie ma fali wyrzutu — cząsteczki pojawiają się pojedynczo, spokojnie. Ale te które już są w szczelinie — prawie nie wracają. Transportery (∩) są w większości zablokowane, głównie DAT i NET. Szczelina z czasem zaczyna świecić od akumulacji DA i NE.</p>
<p>Brak silnego komponentu serotoninowego (mało różowych cząsteczek, mało zablokowanych SERT) przekłada się na brak "ciepła" — tylko stymulacja bez empatogennego tła.</p>
<p><b>Animacja 2 — Porównanie reuptake.</b> DAT zablokowany w 82%, NET w 78% — na prawej stronie prawie żadna cząsteczka DA ani NE nie wraca. Efekt akumulacji jest wyraźniejszy niż przy mefedronie (który ma też wyrzut), bo tutaj jedynym mechanizmem jest czysta blokada reuptake.</p>`,
    brain:`<p>Profil 3-CMC to <b>dominacja szlaku dopaminowo-noradrenergicznego</b> bez wyraźnego komponentu serotoninowego — mapa jest bardziej zielono-pomarańczowa niż różowa. To wizualizacja "zimnej" stymulacji bez warmth mefedronu.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Źródło DA — blokada DAT na terminalach projekcji mezolimbicznych. Akumulacja DA bez masowego wyrzutu (brak releasing), więc onset wolniejszy ale efekt utrzymany dłużej.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Centrum nagrody — akumulacja DA przez blokadę reuptake. Nieco niższa intensywność niż mefedron (brak releaserowego komponentu), ale utrzymana dłużej przez wolniejszy metabolizm.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — silna aktywacja NET inhibicją. Dominujący komponent subiektywny: czujność, fokus, energetyczna stymulacja bez emocjonalnego ciepła.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Kora przedczołowa — aktywowana noradrenergicznie przez projekcje LC. Efekt kognitywny: poprawa koncentracji, energetyczny fokus. NE zamiast DA tworzy profil "roboczy".</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">ACC</div><div class="brain-region-desc">Przednia kora zakrętu obręczy — węzeł selektywnej uwagi i error detection. Aktywacja NE odpowiada za subiektywne poczucie skupienia i zwiększoną czujność błędów.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Ciało migdałowate — aktywacja NE z projekcji LC. Przy braku 5-HT może nasilać lęk zamiast go tłumić — odwrotność efektu mefedronu.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Słaba aktywacja serotoninowa przez umiarkowaną SERT inhibicję — minimalny komponent 5-HT, zbyt słaby żeby dać empatię, ale obecny na come-up i peaku.</div></div>
<p><b>Kluczowe porównanie z mefedronu:</b> Brak aktywacji Amy przez 5-HT (brak efektu anksjolitycznego), słaba aktywność Raphe, dominacja NE nad 5-HT. Stąd "zimny" charakter stymulacji 3-CMC.</p>`,
    brain_en:`<p>3-CMC's profile is DA/NE dominance with no meaningful serotonergic component — the map is green and orange, not pink. This visualises "cold" stimulation without warmth.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">DA source — DAT blockade on mesolimbic terminals. Accumulation without mass efflux (no releasing), so onset is slower but effect sustained longer.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Reward center — DA accumulation via reuptake blockade. Slightly lower intensity than mephedrone (no releaser component), but longer-lasting.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — strong NET activation. Arousal, hypertension, tachycardia. Dominant NE component.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">NE in PFC → working memory improvement, executive function via α2A receptors. The "focus" component.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#00ffaa"></span>Dopamine (DA) — primary target</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff;opacity:0.4"></span>Serotonin (5-HT) — weak activity</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>Noradrenaline (NE) — secondary target</div>
</div>
<p>3-CMC is primarily a <b>reuptake inhibitor</b> — blocks DAT and NET but releases far fewer particles than a releaser. In the animation, vesicles are darker, less active. The few particles that appear linger in the cleft instead of being recaptured.</p>
<p><b>Difference vs mephedrone:</b> no burst of efflux — particles appear singly, quietly. But those already in the cleft barely return. Transporters (∩) are mostly blocked — especially DAT and NET. The cleft gradually brightens from DA/NE accumulation.</p>
<p>The absence of a strong serotonin component (few pink particles, few blocked SERT) produces a "cold" stimulation — focus and alertness without empathic warmth.</p>
<p><b>Animation 2 — Reuptake comparison.</b> DAT/NET blockade without SERT. Slower onset than mephedrone, effect sustained longer due to slower metabolism.</p>`
  },
  alpvp: {
    type:'inhibitor', label:'SILNA BLOKADA DAT — BRAK SERT',
    da:{spawn:0.018,block:0.95}, ht:{spawn:0.000,block:0.00}, ne:{spawn:0.015,block:0.88},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Dopamina (DA)</b> — prawie bez reuptake</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff" style="opacity:0.2"></span><b style="color:#555">Serotonina (5-HT)</b> — <i>nieobecna</i></div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">Noradrenalina (NE)</b> — silna blokada</div>
</div>
<p>α-PVP to <b>najsilniejszy znany inhibitor DAT</b>. W animacji nie zobaczysz różowych cząsteczek — serotonina jest tutaj nieobecna. Tylko DA (zielone) i NE (pomarańczowe). To nie jest kwestia estetyki: brak SERT aktywności oznacza brak serotoninowego hamulca dopaminy przez receptor 5-HT2C.</p>
<p>Transportery (∩) DA są prawie wszystkie zablokowane — szczelina zaczyna się wypełniać zielonymi cząsteczkami, które nie mają dokąd wrócić. To wizualizacja pętli SEEKING bez punktu nasycenia: dopamina rośnie, receptory są permanentnie aktywowane, ale brak serotoniny oznacza brak sygnału "wystarczy".</p>
<p><b>Dlaczego to jest niebezpieczne:</b> normalnie 5-HT przez 5-HT2C hamuje neurony dopaminowe w nucleus accumbens. Bez tego hamulca (widoczne jako brak różowych cząsteczek) kumulacja DA w szczelinie postępuje bez naturalnego ograniczenia — mechanizm psychozy stymulacyjnej.</p>
<p><b>Animacja 2 — Porównanie reuptake.</b> DAT 95% zablokowany — na prawej stronie cząsteczki DA i NE praktycznie nie wracają. T½ zablokowany jest ok. ×20 dłuższy niż normalny. Zauważ że różowych cząsteczek (SERT) jest najmniej — serotonina jest blokowana tylko w 52% vs 88% DAT. Widać to w proporcji kolorów w legendzie i szczelinie.</p>`,
    brain:`<p>α-PVP to <b>ekstremalna selektywność DA/NE bez żadnego 5-HT</b>. Mapa mózgu zawiera tylko dwa kolory — zielony i pomarańczowy. Brak różowego to wizualizacja braku serotoninowego bufora i mechanizmu kompulsji.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Na peaku świeci maksymalnie (i:1.0) — najwyższa intensywność w całej aplikacji. Silna blokada DAT przez pirolidinowy pierścień α-PVP, wyższe powinowactwo niż kokaina.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Pełna saturacja (i:1.0). Brak modulacji 5-HT2C (który normalnie hamuje DA) = DA rośnie bez sufitu. Neurobiologia kompulsji — system SEEKING aktywowany bez punktu nasycenia.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Silna aktywacja NE (i:0.90) — tachykardia, hipertensja, ekstremalne pobudzenie. Jeden z najintensywniejszych sygnałów LC w zestawieniu wszystkich substancji.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Ciało migdałowate z silną DA na peaku (i:0.70). Przy braku 5-HT, sama DA w Amy koreluje z paranoidalną czujnością i dysforycznym lękiem — odwrotność anksjolizacji MDMA.</div></div>
<p><b>Faza Crash:</b> VTA i NAc prawie martwe (i:0.10–0.15). Ale Amy wykazuje silną aktywację NE (i:0.55) — biologiczny substrat paranoi i lęku w crashu. Właśnie ta dysbalans wyjaśnia horror crashu α-PVP.</p>
<p><b>Faza Redose:</b> NAc i Amy znowu aktywne — craving bez możliwości zaspokojenia.</p>`,
    brain_en:`<p>α-PVP is extreme DA/NE selectivity with zero 5-HT. The brain map contains only two colours — green and orange. The absence of pink visualises the missing serotonergic buffer and the neurobiological mechanism of compulsion.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Peaks at maximum (i:1.0) — highest intensity in the app. Strong DAT blockade via α-PVP's pyrrolidine ring, higher affinity than cocaine.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Full saturation (i:1.0). No 5-HT2C modulation (which normally brakes DA) = dopamine rises without a ceiling. Neurobiology of compulsion — SEEKING system activated with no satiation point.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Strong NE activation (i:0.90) — severe tachycardia, hypertension. The cardiovascular danger of α-PVP is visible here.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">NE/DA in PFC (i:0.85). Extreme agitation, paranoid ideation. The cortical component of stimulant psychosis.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#00ffaa"></span>Dopamine (DA) — near-complete blockade</div>
  <div class="guide-row" style="opacity:0.4"><span class="guide-dot" style="background:#ff44ff"></span>Serotonin (5-HT) — absent</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>Noradrenaline (NE) — strong blockade</div>
</div>
<p>α-PVP is the <b>most potent known DAT inhibitor</b>. No pink particles — serotonin is absent. Only DA (green) and NE (orange). This isn't aesthetic: the absence of SERT activity means no serotonergic brake on dopamine via the 5-HT2C receptor.</p>
<p>DA transporters (∩) are nearly all blocked — the cleft fills with green particles that have nowhere to go. This visualises a SEEKING loop without a satiation point: dopamine rises, receptors are permanently activated, but without serotonin there is no "enough" signal.</p>
<p><b>Why this is dangerous:</b> normally 5-HT via 5-HT2C inhibits dopaminergic neurons in nucleus accumbens. Without that brake, the compulsion signal escalates unchecked. Rebound psychosis and compulsive redosing are pharmacologically predictable consequences of this profile.</p>
<p><b>Animation 2 — Reuptake comparison.</b> DAT near-saturated (95%), NET (88%). No SERT column — absent in this molecule.</p>`
  },
  mdma: {
    type:'releaser', label:'MASYWNY WYRZUT 5-HT / DA',
    da:{spawn:0.055,block:0.54}, ht:{spawn:0.088,block:0.80}, ne:{spawn:0.060,block:0.60},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Dopamina (DA)</b> — silny wyrzut</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff"></span><b style="color:#aaa">Serotonina (5-HT)</b> — dominujący wyrzut (≈ x10 vs DA)</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">Noradrenalina (NE)</b> — znaczący wyrzut</div>
</div>
<p>MDMA to <b>masywny releasing agent</b> ze stosunkiem SERT:DAT <b>~3–10:1</b> w zależności od układu testowego (~2–4:1 na transporterach ludzkich). W animacji widać to natychmiast: różowych cząsteczek (5-HT) jest znacznie więcej niż zielonych (DA). Pęcherzyki w górnym terminalu pulsują intensywnie — to aktywny, odwrócony transport przez SERT i DAT.</p>
<p><b>Wbudowany hamulec:</b> masywna 5-HT aktywuje receptor 5-HT2C, który hamuje neurony dopaminowe w NAc. W animacji to widać pośrednio — mimo że DA jest dużo, szczelina nie akumuluje jej tak chaotycznie jak przy α-PVP. Jest równowaga. To właśnie odróżnia MDMA od czystych stymulantów DA.</p>
<p>Transportery (∩) są w większości zablokowane — cząsteczki długo pozostają w szczelinie. Po intensywnym wyrzucie magazyny 5-HT wyczerpują się (to mechanizm "Suicide Tuesday" — potrzeba 1-5 dni na resyntezę serotoniny).</p>
<p><b>Animacja 2 — Porównanie reuptake.</b> SERT zablokowany silniej niż DAT — na prawej stronie dominuje różowa akumulacja 5-HT. Stosunek SERT:DAT wynosi ~3–10:1 zależnie od układu testowego; in vivo przewaga 5-HT jest wyraźna. Normalny reuptake (lewa) pokazuje jak szybko 5-HT naturalnie znika — MDMA wydłuża ten czas wielokrotnie.</p>`,
    brain:`<p>MDMA wykazuje <b>najszerszą serotoninową sieć aktywacji</b> spośród wszystkich substancji w aplikacji. Na peaku praktycznie każdy region jest różowy. To wizualizacja dlaczego MDMA jest empatogenem, a nie stymulantem.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Jądra szwu na pełnej aktywacji (i:0.96) — masywny wyrzut przez odwrócony SERT. Raphe to epicentrum — stąd 5-HT rozlewa się do każdego obszaru mózgu.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Ciało migdałowate silnie serotoninowe (i:0.82). 5-HT przez 5-HT1A dramatycznie obniża reaktywność lękową — biologiczny substrat "MDMA love" i otwarcia emocjonalnego.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Nucleus accumbens dominowany przez 5-HT (i:0.88), z DA jako drugim komponentem. Kombinacja 5-HT + DA tworzy unikalny profil — hedoniści z empatią.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Komponent dopaminowy (i:0.80). MDMA uwalnia DA przez DAT reversal, ale w stosunku znacznie mniejszym niż 5-HT. DA napędza euforię i energię fizyczną.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hipokamp — 5-HT gęsto (i:0.70). Aktywacja 5-HT1A w hipokampie powiązana z plastycznością i efektem terapeutycznym MDMA w PTSD — kluczowy obszar dla przetwarzania wspomnień emocjonalnych.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Kora przedczołowa serotoninowa (i:0.78). Integracja emocjonalna, zmniejszona "narracja krytyczna" — efekt otwartości i autentyczności komunikacji charakterystyczny dla MDMA.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — NET reversal (i:0.72). Noradrenalina odpowiada za fizyczne komponenty: przyspieszone tętno, rozszerzone źrenice, podwyższona temperatura ciała.</div></div>
<p><b>Wzorzec serotoninowy:</b> Porównaj z α-PVP (tylko zielony i pomarańczowy) albo DMT (różowy tylko w korze). MDMA to jedyna substancja z tak szeroką dystrybucją 5-HT obejmującą równocześnie Amy, NAc, Hipp i PFC.</p>`,
    brain_en:`<p>MDMA shows the widest serotonergic activation network of any substance in the app. At peak, virtually every region is pink. This visualises why MDMA is an entactogen, not a stimulant.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Raphe nuclei at full activation (i:0.96) — massive efflux via reversed SERT. This is the epicentre — 5-HT floods every brain region from here.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Amygdala strongly serotonergic (i:0.82). 5-HT via 5-HT1A dramatically reduces fear reactivity — the biological substrate of "MDMA love" and emotional openness.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Dominated by 5-HT (i:0.88), with DA as secondary. The euphoria is serotonergic, not purely dopaminergic — a key difference from cocaine.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">DA component (i:0.72) — the stimulant "push." Secondary to 5-HT but creates the energetic drive.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">NE efflux — tachycardia, hyperthermia risk, blood pressure elevation. The physiologically dangerous component.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>Dopamine (DA) — strong efflux</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>Serotonin (5-HT) — dominant efflux (≈ ×10 vs DA)</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>Noradrenaline (NE) — significant efflux</div>
</div>
<p>MDMA is a <b>massive releasing agent</b> with a SERT:DAT ratio of ~3–10:1 depending on the assay system (~2–4:1 on human transporters). In the animation you immediately see far more pink particles (5-HT) than green (DA). Vesicles pulse intensely — this is active, reversed transport through SERT and DAT.</p>
<p><b>Built-in brake:</b> massive 5-HT activates the 5-HT2C receptor, which inhibits dopaminergic neurons in NAc. Visible indirectly in the animation — despite high DA, the cleft doesn't accumulate chaotically like α-PVP. There is balance. This is what separates MDMA from pure DA stimulants.</p>
<p><b>Transporters (∩):</b> mostly blocked — particles linger in the cleft. SERT more blocked than DAT, reflecting the higher 5-HT selectivity.</p>
<p><b>Animation 2 — Reuptake comparison.</b> Pink particles dominant (SERT 80%), green visible (DAT 54%). The ratio is the MDMA fingerprint.</p>`
  },
  cocaine: {
    type:'inhibitor', label:'BLOKADA DAT / SERT / NET',
    da:{spawn:0.018,block:0.88}, ht:{spawn:0.009,block:0.52}, ne:{spawn:0.015,block:0.80},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Dopamina (DA)</b> — główna blokada reuptake</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff"></span><b style="color:#aaa">Serotonina (5-HT)</b> — umiarkowana blokada</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">Noradrenalina (NE)</b> — silna blokada</div>
</div>
<p>Kokaina to <b>czysty inhibitor reuptake</b> — nie wchodzi do neuronu i nie odwraca transporterów, tylko blokuje ich kieszeń wiążącą od zewnątrz. Dlatego w animacji pęcherzyki są spokojne (mały wyrzut), ale cząsteczki które naturalnie się pojawiają zostają uwięzione w szczelinie przez zablokowane transportery (∩).</p>
<p>Kluczowa właściwość: efekt kokainy zależy od <i>aktywności neuronów w danej chwili</i>. Im więcej naturalnego wyrzutu DA — tym silniejszy efekt blokady. Animacja pokazuje stan przy typowej aktywności. W kontekstach silnej naturalnej aktywacji (stres, ćwiczenia, seks) efekt byłby proporcjonalnie intensywniejszy.</p>
<p><b>Krótki czas działania</b> wynika z szybkiego metabolizmu przez esterazy w osoczu, nie przez transportery. Stąd gwałtowny crash i silny craving — cząsteczki znikają z szczeliny nagle gdy metabolizm usuwa lek, a receptory "czekają" na DA której nie ma.</p>
<p><b>Animacja 2 — Porównanie reuptake.</b> Trzy transportery: DAT 88%, NET 80%, SERT 52%. Prawa strona pokazuje jak przy tak wysokiej blokadzie szczelina akumuluje DA i NE — efekt use-dependent: im więcej naturalnej aktywności neuronów, tym więcej NT zostaje "złapanych" przez blokadę. Kokaina nie zmienia wyrzutu — tylko wydłuża czas obecności tego co już jest.</p>`,
    brain:`<p>Kokaina to <b>czysty profil mezolimbiczny DA/NE</b> — intensywny, krótki, skoncentrowany na szlaku nagrody. Faza Craving jest tak samo informatywna jak Peak — neurobiologia głodu kokainy jest dosłownie widoczna na mapie.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Nucleus accumbens — centrum kokainowej euforii (i:0.97 na peaku, najwyższe DA w całej aplikacji). Blokada DAT na terminalach NAc = masywna akumulacja DA. Szybkość onset wynika z wysokiej gęstości DAT właśnie tutaj.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Aktywacja (i:0.55) — kokaina działa głównie na terminale, nie na ciała komórek VTA. Stąd VTA świeci słabiej niż NAc, co odzwierciedla lokalizację DAT w terminalach projekcyjnych.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Silna aktywacja NE (i:0.88) — NET blokada. Odpowiada za somatyczne efekty: tachykardia, wzrost ciśnienia, zwężenie naczyń. Przy IV/donosowym podaniu: fizyczny "rush".</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Aktywacja DA (i:0.65) przez projekcje mezokortykalne — grandioza, pewność siebie, przyspieszone myślenie. Przy kokainie PFC jest dopaminowe, nie noradrenergiczne jak przy amfetaminie.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">Amy (Craving)</div><div class="brain-region-desc">Ciało migdałowate wybucha przy Craving (i:0.78) — neurobiologiczny substrat głodu, drażliwości i paranoi po crashu. Amy jest aktywna gdy NAc jest wyczerpane — mózg "chce" bez możliwości zaspokojenia.</div></div>
<p><b>Faza Craving — kluczowa obserwacja:</b> Po crashu NAc(i:0.65) i Amy(i:0.78) ponownie aktywne. To klasyczna dysregulacja systemu nagrody: DA-seeking bez nasycenia. Substrat neurobiologiczny syndromu uzależnienia.</p>`,
    brain_en:`<p>Cocaine is a clean mesolimbic DA/NE profile — intense, short, concentrated on the reward pathway. The Craving phase is as informative as Peak — the neurobiology of cocaine craving is literally visible on the map.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Nucleus accumbens — centre of cocaine euphoria (i:0.97 at peak, highest DA in the app). DAT blockade at NAc terminals = massive DA accumulation. Fast onset from high DAT density in terminals.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Activation (i:0.55) — cocaine acts mainly on terminals, not VTA cell bodies. VTA glows less than NAc, reflecting DAT localisation in terminal fields.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Strong NE (i:0.80) — tachycardia, vasoconstriction, hypertension. The cardiovascular risk visible in the brain map.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">NE/DA in PFC (i:0.72). Cognitive sharpening — the "clarity" of cocaine. But at higher doses disrupts prefrontal inhibitory control.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#00ffaa"></span>Dopamine (DA) — primary reuptake block</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>Serotonin (5-HT) — moderate blockade</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>Noradrenaline (NE) — strong blockade</div>
</div>
<p>Cocaine is a <b>pure reuptake inhibitor</b> — it doesn't enter the neuron or reverse transporters, only blocks their binding pocket from outside. So in the animation the vesicles are calm (minimal efflux), but particles that naturally appear get trapped in the cleft by blocked transporters (∩).</p>
<p><b>Key property:</b> cocaine's effect depends on neuronal firing at that moment. The more natural DA release — the stronger the blockade effect. The animation shows a typical activity state. In contexts of high natural activation (stress, exercise, sex), the effect would be proportionally more intense.</p>
<p><b>Short duration</b> from rapid ester hydrolysis by plasma cholinesterases — t½ ≈ 45–90 min. Crack cocaine's faster onset (inhaled vs nasal) creates stronger reinforcement — the speed of onset matters more than the peak level for addiction potential.</p>
<p><b>Animation 2 — Reuptake comparison.</b> Three blocked transporter columns: DAT (88%), NET (80%), SERT (52%). The DA/NE ratio creates the stimulant + cardiovascular profile.</p>`
  },
  amphetamine: {
    type:'releaser', label:'MASYWNY WYRZUT (VMAT2 + DAT)',
    da:{spawn:0.080,block:0.62}, ht:{spawn:0.008,block:0.24}, ne:{spawn:0.082,block:0.66},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Dopamina (DA)</b> — masywny wyrzut</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff"></span><b style="color:#aaa">Serotonina (5-HT)</b> — śladowa aktywność</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">Noradrenalina (NE)</b> — dominujący wyrzut</div>
</div>
<p>Amfetamina to <b>releasing agent z unikalnym mechanizmem VMAT2</b>. Blokuje transporter pęcherzykowy który normalnie pakuje DA do pęcherzyków — DA zalewa cytozol i jest wyrzucana przez odwrócony DAT niezależnie od aktywności neuronów. W animacji widać to jako intensywny, ciągły puls pęcherzyków i gęsty strumień cząsteczek DA (zielone) i NE (pomarańczowe).</p>
<p>NE dominuje numerycznie — to właśnie nadaje amfetaminie "roboczy" charakter (fokus, wytrzymałość, supresja zmęczenia) zamiast czystej euforii. Minimalna aktywność 5-HT (prawie brak różowych) = brak empatogennego efektu.</p>
<p><b>Wyczerpywanie magazynów:</b> w odróżnieniu od kokainy, amfetamina faktycznie fizycznie opróżnia pęcherzyki DA. Crash po binge ma komponent fizyczny — nie tylko blokada zdjęta, ale naprawdę brak neuroprzekaźnika do wyrzutu.</p>
<p><b>Animacja 2 — Porównanie reuptake.</b> DAT 62%, NET 66% — blokada umiarkowana w porównaniu do kokainy czy α-PVP, ale i tak wyraźna. Różnica: tu cząsteczki pojawiają się przez aktywny wyrzut (VMAT2), nie tylko bazalną aktywność. W połączeniu z blokadą reuptake efekt sumuje się — i to tłumaczy wyczerpywanie magazynów przy binge: wyrzucasz więcej i wolniej odbieras.</p>`,
    brain:`<p>Amfetamina to profil <b>masywny noradrenergiczno-dopaminowy</b> — NET > DAT potencja sprawia że mapa jest bardziej pomarańczowa niż zielona. To odróżnia ją od kokainy i wyjaśnia "roboczy" charakter.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — dominująca aktywacja NE (i:0.92, najwyższy LC w aplikacji). NET > DAT: silniejszy wyrzut NE niż DA. Stąd profil: czujność, wytrzymałość, tłumienie zmęczenia — bez hedonistycznego "uderzenia" DA.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Silna aktywacja NE (i:0.88). NE w PFC poprawia pamięć roboczą i funkcje wykonawcze przez receptory α2A — mechanizm leczniczego działania amfetaminy w ADHD.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Źródło DA przez VMAT2 inhibicję i odwrócony DAT (i:0.85).</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Komponent euforii DA (i:0.82) — wyraźnie niższy względem LC/PFC. Amfetamina jest bardziej NE niż DA, stąd mniej hedonistyczna niż kokaina.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Wzgórze — aktywacja NE przez projekcje LC (i:0.72). Moduluje bramkowanie sensoryczne — zwiększa "przetwarzanie" bodźców, stąd heightened awareness.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hipokamp — NE z LC (i:0.62). NE w Hipp moduluje konsolidację pamięci — przy amfetaminie uczenie się może być ułatwione przez wzrost NE.</div></div>
<p><b>Porównanie z kokainą:</b> Kokaina — NAc dominuje (centrum nagrody). Amfetamina — LC i PFC dominują (czujność i kognicja). Ta różnica w dominujących regionach widoczna jest wprost przez kolory mapy.</p>`,
    brain_en:`<p>Amphetamine shows a massive noradrenergic-dopaminergic profile — NET > DAT potency makes the map more orange than green. This distinguishes it from cocaine and explains the "productive" character.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Locus coeruleus — dominant NE activation (i:0.92, highest LC in the app). NET > DAT: stronger NE efflux than DA. Profile: alertness, endurance, fatigue suppression — without the DA "rush."</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Strong NE activation (i:0.88). NE in PFC improves working memory and executive function via α2A receptors — mechanism of amphetamine's therapeutic effect in ADHD.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">DA source via VMAT2 inhibition (i:0.80). Higher than cocaine because VMAT2 releases DA regardless of firing rate — activity-independent efflux.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Reward centre (i:0.82). Present, but secondary to NE in terms of overall profile. The euphoria is real but less "pure" than cocaine.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#00ffaa"></span>Dopamine (DA) — massive efflux</div>
  <div class="guide-row" style="opacity:0.4"><span class="guide-dot" style="background:#ff44ff"></span>Serotonin (5-HT) — trace activity</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>Noradrenaline (NE) — dominant efflux</div>
</div>
<p>Amphetamine is a <b>releasing agent with a unique VMAT2 mechanism</b>. It blocks the vesicular transporter that normally packages DA into vesicles — DA floods the cytosol and is expelled via reversed DAT independently of neuronal activity. In the animation: intense, continuous vesicle pulsing and a dense stream of DA (green) and NE (orange) particles.</p>
<p><b>NE dominates numerically</b> — this gives amphetamine its "working" character (focus, endurance, fatigue suppression) rather than pure euphoria. Minimal 5-HT activity (almost no pink) = no empathogenic effect.</p>
<p><b>Depletion of stores:</b> unlike cocaine, amphetamine physically empties vesicular DA. The crash comes partly from genuine depletion — resynthesis takes hours to days.</p>
<p><b>Animation 2 — Reuptake comparison.</b> Green and orange columns, high spawn rate (VMAT2 mechanism). DAT (62%), NET (66%) — slightly less blockade than α-PVP but far greater total release.</p>`
  },
  codeine: {
    type:'indirect', vizType:'disinhibition',
    label:'OBWÓD DEINHIBICJI μOR → GABA → DA',
    da:{spawn:0,block:0}, ht:{spawn:0,block:0}, ne:{spawn:0,block:0},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#9933ff"></span><b style="color:#aaa">Neuron μOR</b> — receptor opioidowy; kodeina/morfina wiąże się tutaj</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff4466"></span><b style="color:#aaa">Interneuron GABA</b> — normalnie hamuje neurony DA; tutaj wyciszony</div>
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">Neuron DA</b> — dopaminergiczny; odhamowany gdy GABA milczy</div>
</div>
<p>Animacja pokazuje <b>obwód deinhibicji</b> — trzy neurony w jądrze półleżącym (nucleus accumbens). Normalnie interneuron GABA-ergiczny (czerwony) aktywnie hamuje neuron DA (zielony) — to naturalne "trzymanie w ryzach" układu nagrody.</p>
<p>Gdy kodeina (przekształcona do morfiny przez CYP2D6) wiąże się z μOR na interneuronie GABA: interneuron milknie (ciemnieje, puls zanika). Bez hamulca GABA — neuron DA zaczyna się palić swobodnie (rozświetla się, wysyła sygnały do NAc). <b>Wzrost DA nie z wyrzutu, ale z usunięcia hamowania.</b></p>
<p>To kluczowa różnica mechanistyczna od katynonów: kodeina nie dotyka DAT ani pęcherzyków — odpowiedź jest wolniejsza, bardziej modulowana, i istnieje naturalna "podłoga" dla efektu wyznaczona przez pozostałą aktywność GABA. Stąd łagodniejszy, mniej kompulsywny profil.</p>`,
    brain:`<p>Kodeina wykazuje <b>rozproszony profil opioidowy</b> (kolor fioletowy — µ-OR) z pośrednim komponentem dopaminowym w NAc/VTA. Fioletowy kolor oznacza działanie przez receptor µ-opioidowy — mechanizm niezależny od GABA.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#a064ff;box-shadow:0 0 5px #a064ff"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Wzgórze — gęste µ-OR na neuronach przekaźnikowych. Aktywacja → hyperpolaryzacja przez GIRK, zamknięcie Cav. Efekt: blokada przekazywania sygnałów bólowych przez wzgórzowe relay nuclei. Neurobiologia analgezji.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#a064ff;box-shadow:0 0 5px #a064ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">µ-OR w BLA i CeA — opioidowa redukcja reaktywności Amy. Komponent anksjolityczny kodeiny: bezpośrednio przez Gi/o, bez udziału GABA.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Pośredni wzrost DA przez deinhibicję (i:0.72). Morfina aktywuje µ-OR na interneuronach GABA-ergicznych VTA → zdejmuje hamowanie z neuronów DA. Wzrost DA ~30% vs ~300% przy kokainie.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">Mechanizm deinhibicji: µ-OR na interneuronach GABA w VTA (i:0.62). µ-OR aktywacja → mniej GABA → więcej firing neuronów dopaminowych.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#a064ff;box-shadow:0 0 5px #a064ff"></div><div class="brain-region-name">Cortex / Hipp / PFC</div><div class="brain-region-desc">µ-OR na neuronach korowych, hipokampalnych i przedczołowych — efekty: analgezja, sedacja, upośledzenie pamięci, zmiana percepcji dyskomfortu.</div></div>
<p><b>Fioletowy ≠ niebieski:</b> Kolor "opioid" różni się od "gaba" — opioidy działają przez µ-OR/Gi, nie przez kanał chlorkowy GABA-A. Oba dają inhibicję, ale różnymi ścieżkami molekularnymi.</p>`,
    brain_en:`<p>Codeine shows a diffuse opioid profile (purple — µOR) with an indirect dopaminergic component in NAc/VTA. Purple means action via µ-opioid receptor — a mechanism independent of GABA signalling.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#a064ff;box-shadow:0 0 5px #a064ff"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Thalamus — dense µOR on relay neurons. Activation → hyperpolarisation via GIRK, closure of Cav. Effect: blockade of pain signal transmission through thalamic relay nuclei. Neurobiology of analgesia.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#a064ff;box-shadow:0 0 5px #a064ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">µOR in BLA and CeA — opioid reduction of amygdala reactivity. Anxiolytic component of codeine: directly via Gi/o, without GABA involvement.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Indirect DA rise via disinhibition (i:0.55). Modest — µOR mutes GABA interneurons in VTA, which then release the DA neurons. The neurobiological basis of the mild euphoria.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#a064ff;box-shadow:0 0 5px #a064ff"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hippocampal µOR (i:0.40). Sedative and memory components of opioids. The dreamy quality of opioid analgesia.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#a064ff"></span>µOR neuron — opioid receptor; codeine/morphine binds here</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff4444"></span>GABA interneuron — normally inhibits DA neurons; here silenced</div>
  <div class="guide-row"><span class="guide-dot" style="background:#00ffaa"></span>DA neuron — dopaminergic; disinhibited when GABA is silent</div>
</div>
<p>The animation shows a <b>disinhibition circuit</b> — three neurons in the nucleus accumbens. Normally the GABAergic interneuron (red) actively inhibits the DA neuron (green) — the natural "leash" on the reward system.</p>
<p>When codeine (converted to morphine by CYP2D6) binds µOR on the GABA interneuron: the interneuron falls silent (dims, pulse fades). Without the GABA brake — the DA neuron begins firing freely (brightens, sends signals to NAc). The DA rise comes not from efflux but from the removal of inhibition.</p>
<p><b>Key mechanistic difference from cathinones:</b> codeine doesn't touch DAT or vesicles — it modulates a circuit. DA increase is indirect, modest (~30% vs ~300% for cocaine), and depends on the intact GABA→DA circuit in VTA/NAc.</p>
<p><b>CYP2D6 polymorphism:</b> ~7–10% of Europeans are poor metabolisers — codeine is essentially inactive. Ultra-rapid metabolisers experience disproportionately strong effects (fatalities documented).</p>`
  },
  ketamine: {
    type:'receptor_block', vizType:'nmda_channel',
    label:'KANAŁ NMDA — OPEN CHANNEL BLOCK',
    da:{spawn:0,block:0}, ht:{spawn:0,block:0}, ne:{spawn:0,block:0},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#44aaff"></span><b style="color:#aaa">Glutaminian</b> — ligand otwierający kanał NMDA</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffff44"></span><b style="color:#aaa">Mg²⁺</b> — napięciowy blok wewnątrz kanału (normalny fizjologicznie)</div>
  <div class="gl-row"><span class="gl-dot" style="background:#0099ff"></span><b style="color:#aaa">Ca²⁺ / Na⁺</b> — jony przepływające przez otwarty kanał</div>
  <div class="gl-row"><span class="gl-dot" style="background:#0099ff"></span><b style="color:#aaa">Ketamina</b> — cząsteczka wchodząca do <i>otwartego</i> kanału i go blokująca</div>
</div>
<p>Animacja pokazuje <b>pojedynczy receptor NMDA w przekroju przez błonę</b>. NMDA to kanał jonotropowy glutaminianu z unikalną właściwością: wymaga jednocześnie wiązania glutaminianu I depolaryzacji błony (usunięcia bloku Mg²⁺). To "bramka koincydencyjna" — kluczowa dla LTP i plastyczności synaptycznej.</p>
<p>Mechanizm ketaminy: <b>open channel block</b> — cząsteczka wchodzi do kanału <i>tylko gdy jest otwarty</i>, tzn. po aktywacji glutaminianem i depolaryzacji. Wewnątrz blouje przepływ jonów Ca²⁺ i Na⁺. To tłumaczy "use-dependent" charakter — im bardziej aktywny neuron, tym silniejszy efekt ketaminy.</p>
<p>Blokada NMDA w interneuronach GABA → disinhibicja → pośredni wzrost DA i glutaminianu w PFC. Dezorganizacja przetwarzania informacji w korze i hipokampie = dysocjacja. Nowe badania: szybka plastyczność synaptyczna przez AMPA upregulation po usunięciu bloku = mechanizm antydepresyjny esketaminy.</p>`,
    brain:`<p>Ketamina to <b>dezorganizacja glutaminianergiczna z paradoksalnym wzrostem glut w korze</b>. Żółty kolor nie oznacza "zdrowej aktywacji" — oznacza zdezorganizowany system po NMDA blokadzie z wtórną deinhibicją.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Najsilniejsza aktywacja glut (i:0.88). Ketamina blokuje NMDA na interneuronach GABA-ergicznych PFC → disinhibicja neuronów piramidalnych → paradoksalny wzrost glutaminianu. Potwierdzone MRS in vivo. Mechanizm dysocjacji i psychozy ketaminowej.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">Ogólna kora (i:0.85) — ta sama disinhibicja co w PFC. Dezorganizacja przetwarzania sensorycznego = zaburzenia percepcji, anestezja dysocjacyjna.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Wzgórze — bezpośrednia blokada NMDA na neuronach przekaźnikowych (i:0.82). Zaburzenie bramkowania sensorycznego — "filtr sensoryczny" przestaje filtrować.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">VCtx</div><div class="brain-region-desc">Kora wzrokowa (i:0.70) — dezorganizacja przetwarzania wzrokowego. Visual distortions, poczucie tunelu. Ketaminowe "widzenie tunelowe".</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">ACC</div><div class="brain-region-desc">Przednia kora obręczy (i:0.72) — centrum integracji bólu i emocji. Blokada NMDA w ACC = mechanizm przeciwbólowego i antydepresyjnego działania ketaminy.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">Pośredni wzrost DA (i:0.65) — disinhibicja dopaminergiczna przez NMDA blokadę na interneuronach. Euforyczny komponent ketaminy.</div></div>
<p><b>Interpretacja żółtego:</b> "Glut" w brainMap nie oznacza "glutaminian działa zdrowo" — oznacza system zdezorganizowany przez NMDA blokadę, z paradoksalnym wzrostem w regionach korowych. Najważniejsza nota interpretacyjna dla ketaminy.</p>`,
    brain_en:`<p>Ketamine is glutamatergic disorganisation with a paradoxical cortical glutamate increase. Yellow does not mean "healthy activation" — it means a disorganised system after NMDA blockade with secondary disinhibition.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Strongest glutamate activation (i:0.88). Ketamine blocks NMDA on PFC GABAergic interneurons → pyramidal disinhibition → paradoxical glutamate surge. Confirmed by in vivo MRS. Mechanism of dissociation and ketamine psychosis.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">General cortex (i:0.85) — same disinhibition as PFC. Disorganised sensory processing = perceptual disturbances, dissociative anaesthesia.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hippocampal NMDA block (i:0.75). Memory disruption. But also: rapid spinogenesis here after low-dose exposure = neuroplasticity mechanism.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffdc32;box-shadow:0 0 5px #ffdc32"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Thalamic gating disruption (i:0.70). Sensory information no longer filtered normally — the core of dissociative anaesthesia.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#ffdc32"></span>Glutamate — ligand that opens the NMDA channel</div>
  <div class="guide-row"><span class="guide-dot" style="background:#888888"></span>Mg²⁺ — voltage-dependent block inside the channel (normal physiology)</div>
  <div class="guide-row"><span class="guide-dot" style="background:#66ccff"></span>Ca²⁺ / Na⁺ — ions flowing through the open channel</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>Ketamine — molecule entering the open channel and blocking it</div>
</div>
<p>The animation shows a single NMDA receptor in cross-section through the membrane. NMDA is an ionotropic glutamate channel with a unique property: it requires <b>simultaneous</b> glutamate binding AND membrane depolarisation (removal of the Mg²⁺ block). It's a "coincidence detector" — key for LTP and synaptic plasticity.</p>
<p><b>Ketamine's mechanism: open channel block</b> — the molecule enters the channel only when it's open, i.e. after glutamate activation and depolarisation. Inside, it blocks Ca²⁺ and Na⁺ flow. This explains the "use-dependent" character — the more active the neuron, the stronger ketamine's effect.</p>
<p>Low-dose antidepressant effect: blocking NMDA on inhibitory interneurons (GABAergic) in PFC → disinhibition of pyramidal neurons → glutamate surge → AMPA receptor activation → rapid synaptic plasticity (spinogenesis within hours). Mechanism of esketamine (Spravato).</p>`
  },
  psilocybin: {
    type:'agonist', vizType:'dmn_network',
    label:'DISRUPCJA SIECI DEFAULT MODE',
    da:{spawn:0,block:0}, ht:{spawn:0,block:0}, ne:{spawn:0,block:0},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#44ff00"></span><b style="color:#aaa">Węzły DMN</b> — sieć Default Mode: mPFC, PCC, AG-L, AG-R</div>
  <div class="gl-row"><span class="gl-dot" style="background:#aaaaaa"></span><b style="color:#aaa">Sieci zewnętrzne</b> — wizualna (VIS), słuchowa (AUD), somatosensoryczna (SOM), czołowo-ciemieniowa (FPN)</div>
  <div class="gl-row"><span class="gl-dot" style="background:#44ff00"></span><b style="color:#aaa">Zielone linie</b> — połączenia wewnątrz DMN (grubość = siła connectivity)</div>
  <div class="gl-row"><span class="gl-dot" style="background:#b464ff"></span><b style="color:#aaa">Fioletowe linie</b> — nowe połączenia cross-network pojawiające się pod wpływem psylocybiny</div>
</div>
<p><b>Animacja 1 — Sieć funkcjonalna (DMN).</b> Psylocybina aktywuje receptory 5-HT2A głównie na dendrytach apikalnych warstwy V (wiązanie w warstwach I, III, V — Jakab &amp; Goldman-Rakic 1998) w węzłach sieci Default Mode Network — sieci odpowiedzialnej za narrację własnego ja, ruminacje i myślenie autobiograficzne. W fazie bazalnej (animacja startuje) DMN jest silnie połączony wewnętrznie. Po ramping up psylocybiny: połączenia DMN słabną (zielone linie cienieją), a między sieciami które normalnie nie komunikują się bezpośrednio pojawiają się nowe fioletowe krawędzie. To <b>"brain entropy"</b> — mierzalnie wyższa losowość wzorców aktywności mózgu. Cykl powtarza się co ~8 sekund.</p>
<p>Korelacja subiektywna: rozpad narracji "ja" = disrupcja DMN. Terapeutycznie: DMN w depresji jest hyperaktywny (pętla ruminacji) — disrupcja pozwala na reset wzorców. Efekt może utrzymywać się tygodniami przez spinogenezę w PFC.</p>
<p><b>Animacja 2 — Mechanizm synaptyczny 5-HT2A.</b> Duże fioletowe cząsteczki to <b>psilocyna</b> (aktywny metabolit psylocybiny) — wchodzi do synapsy serotoninergicznej i stopniowo wypiera naturalną 5-HT (mniejsze różowe cząsteczki) z receptorów 5-HT2A na neuronie piramidalnym kory. Psilocyna jest <b>partial agonistą</b> — wiąże się mocniej niż 5-HT, ale produkuje inny wzorzec sygnalizacji wewnątrz komórki. Kiedy ≥2 receptory są zajęte, widać aktywację kaskady <b>Gq → PLC → IP3 → Ca²⁺</b> (strzałki w dół). To właśnie ta downstream signaling różni się od normalnej aktywacji 5-HT — psylocyna silniej rekrutuje β-arrestin, co może być odpowiedzialne za jej plastogenny (a nie halucynogenny) efekt przy niskich dawkach.</p>`,
    brain:`<p>Psylocybina wykazuje <b>rozległą aktywację serotoninową skoncentrowaną w korze asocjacyjnej i strukturach limbicznych</b>. Kluczowa różnica od MDMA: bez aktywacji VTA/NAc — brak euforii dopaminowej, czyste doświadczenie 5-HT2A.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">Najsilniejsza aktywacja (i:0.92). 5-HT2A na dendrytach apikalnych warstwy V w całej korze. Biologiczne podłoże "brain entropy" — zwiększonej losowości aktywności mierzonej fMRI.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Potężna aktywacja (i:0.88). Disrupcja DMN w PFC = zaburzenie narracji ego, poczucie zjednoczenia, ego dissolution przy wysokich dawkach.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">VCtx</div><div class="brain-region-desc">Kora wzrokowa (i:0.85). 5-HT2A w V1–V4 wyjaśnia geometryczne halucynacje wzrokowe, percepcję kolorów, widzenie wzorców przy zamkniętych oczach.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hipokamp (i:0.70). 5-HT1A i 5-HT2A — zwiększona plastyczność synaptyczna, dostęp do wspomnień autobiograficznych. Klinicznie ważne dla terapii PTSD i depresji.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Wzgórze (i:0.60) — model CSTC: 5-HT2A zaburza bramkowanie wzgórzowe. Wzgórze normalnie filtruje informacje sensoryczne; psylocybina "otwiera filtr".</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Autoreceptory 5-HT1A (i:0.75) — ujemne sprzężenie zwrotne: aktywacja 5-HT1A na neuronach Raphe zmniejsza ich własne firing.</div></div>
<p><b>Brak DA:</b> Brak zielonego (DA) — psylocybina nie aktywuje szlaku mezolimbicznego. Stąd brak euforii kokaino-podobnej i bardzo niski potencjał uzależnienia.</p>`,
    brain_en:`<p>Psilocybin shows extensive serotonergic activation concentrated in associative cortex and limbic structures. Key difference from MDMA: no VTA/NAc activation — no dopaminergic euphoria, pure 5-HT2A experience.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">Strongest activation (i:0.92). 5-HT2A on apical dendrites of layer V throughout the cortex. Biological substrate of "brain entropy" — increased randomness measured by fMRI.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Powerful activation (i:0.88). DMN disruption in PFC = dissolution of ego narrative, sense of unity, ego dissolution at high doses.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">VCtx</div><div class="brain-region-desc">Visual cortex (i:0.85). 5-HT2A in V1–V4 underlies geometric and visual hallucinations. Weaker than LSD (0.95) — psilocybin's visual effects are less intense.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hippocampus (i:0.78). 5-HT2A activation + rapid spinogenesis = neuroplasticity mechanism. Correlates with therapeutic effects in depression and PTSD.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Amygdala (i:0.72). Reduced fear reactivity. Emotional processing changes during psilocybin experience — reduced negative affect bias.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>DMN nodes — Default Mode Network: mPFC, PCC, AG-L, AG-R</div>
  <div class="guide-row"><span class="guide-dot" style="background:#66aaff"></span>External networks — visual (VIS), auditory (AUD), somatosensory (SOM), fronto-parietal (FPN)</div>
  <div class="guide-row">Green lines — connections within DMN (thickness = connectivity strength)</div>
  <div class="guide-row">Purple lines — new cross-network connections appearing under psilocybin</div>
</div>
<p><b>Animation 1 — Functional network (DMN).</b> Psilocybin activates 5-HT2A receptors primarily on apical dendrites of layer V (binding in layers I, III, V — Jakab & Goldman-Rakic 1998) in Default Mode Network nodes — the network responsible for self-narrative, rumination, and autobiographical thinking. In the baseline phase (animation start) DMN is strongly internally connected. As psilocybin ramps up: DMN connections weaken (green lines thin), and novel cross-network connections appear (purple) — between regions that don't normally communicate. This is the "increased entropic brain activity" measured by fMRI.</p>
<p><b>Animation 2 — 5-HT2A synaptic mechanism.</b> Large purple particles are <b>psilocin</b> (the active metabolite) — entering the serotonergic synapse and gradually displacing natural 5-HT (smaller pink) from 5-HT2A receptors on layer V pyramidal neurons. Psilocin is a <b>partial agonist</b> — binds more tightly than 5-HT but produces a different intracellular signalling pattern. When ≥2 receptors are occupied, the <b>Gq → PLC → IP3 → Ca²⁺</b> cascade activates. Psilocin's stronger β-arrestin recruitment vs 5-HT may underlie its plastogenic (vs hallucinogenic) effect at lower doses.</p>`
  },
  lsd: {
    type:'agonist', vizType:'receptor_map',
    label:'MAPA RECEPTORÓW — SZEROKIE WIĄZANIE',
    da:{spawn:0,block:0}, ht:{spawn:0,block:0}, ne:{spawn:0,block:0},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#ff44ff"></span><b style="color:#aaa">5-HT2A / 5-HT1A</b> — serotoninowe; główny target psychedeliczny i anksjolityczny</div>
  <div class="gl-row"><span class="gl-dot" style="background:#00ffaa"></span><b style="color:#aaa">D2 / D1</b> — dopaminowe; stymulujący, mentalnie zaostrzający komponent LSD vs psylocybina</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">α1B / α2A</b> — adrenergiczne; rozszerzone źrenice, tachykardia, wzrost ciśnienia</div>
  <div class="gl-row"><span class="gl-dot" style="background:#64b4ff"></span><b style="color:#aaa">H1</b> — histaminowy; komponent sedatywny, antiemetic</div>
  <div class="gl-row"><span class="gl-dot" style="background:#b4dcff"></span><b style="color:#aaa">σ1</b> — sigma-1; dysocjacyjny, oniryczny komponent przy wyższych dawkach</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffffff"></span><b style="color:#aaa">Łuk ⬡ locked</b> — lid closure: pętla receptora zamknęła się nad cząsteczką LSD</div>
</div>
<p><b>Animacja 1 — Mapa powinowactwa.</b> Cząsteczki LSD wlatują do każdej klasy receptorów z odpowiedniej strony (cel po lewej → cząsteczka z lewej). LSD posiada wyjątkowo szeroką sieć receptorową — 9 klas jednocześnie — co odróżnia je od psylocybiny (dominująco 5-HT2A). Gdy receptor osiągnie lid closure (glowing arc), wyświetla etykietę ⬡ locked. Mała belka pod każdą nazwą = relative affinity (Ki).</p>
<p><b>Animacja 2 — Kinetyka wiązania.</b> Każdy rząd porównuje dwie krzywe jednocześnie: przerywana szara linia = naturalna serotonina (5-HT) oscyluje i odpływa w sekundach; kolorowy bar = LSD narasta i <i>nie opada</i>. Po osiągnięciu progu pojawia się 🔒 — to lid closure. Licznik na dole pokazuje ile z 6 klas jest zablokowanych aktualnie. Kluczowy insight: LSD przy dawce 100 μg oznacza że w mózgu jest dosłownie <b>mniej cząsteczek niż w jednej tabletce witaminy C</b> — efekt 8-12h wynika wyłącznie z kinetyki, nie z ilości.</p>
<p>Komponent D2 daje "ostrzejszy", bardziej mentalny charakter vs cieplejsza psylocybina. α-adrenergiczna aktywacja odpowiada za objawy fizyczne: mydriasis (źrenice), tachykardia, piloerekcja. σ1 może być odpowiedzialny za oniryczne, senne epizody przy wyższych dawkach lub pod koniec tripu.</p>`,
    brain:`<p>LSD wykazuje <b>najszerszy profil receptorowy ze wszystkich psychedelików</b> — kora wzrokowa maksymalnie nasycona, plus unikalny komponent dopaminowy (D2) widoczny w NAc/VTA. To biologiczna różnica między LSD a psylocybiną.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">VCtx</div><div class="brain-region-desc">Kora wzrokowa — najwyższa wartość w mapie LSD (i:0.95). 5-HT2A w V1–V4 wyjaśnia intensywność i złożoność efektów wizualnych LSD — silniejszych niż psylocybina.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">Ogólna kora (i:0.94). Globalna desynchronizacja przez 5-HT2A = brain entropy wyższe niż przy psylocybinie.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Silna aktywacja (i:0.90). Disrupcja DMN + D2 dodaje komponent "myśli racingowych" nieobecny przy psylocybinie.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Aktywacja NE przez α-adrenergiczne działanie LSD (i:0.55) — rozszerzone źrenice, tachykardia, piloerekcja. LC dodaje stymulujący komponent nieobecny przy czystych 5-HT2A agonistach.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc"><b>Unikalny dla LSD:</b> Aktywność DA (i:0.35) przez partial agonizm D2 — potwierdzone PET (spadek wiązania racloprydu). Biologiczne podłoże "stymulującego" charakteru LSD vs psylocybiny.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">VTA</div><div class="brain-region-desc">DA komponent (i:0.28) przez D2 agonizm — psychedeliki normalnie nie mają aktywnego VTA/NAc. LSD jest wyjątkiem.</div></div>
<p><b>LSD vs Psylocybina w mapie:</b> Psylocybina — tylko różowy. LSD — różowy + pomarańczowy + zielony. Różnorodność kolorów to wizualizacja szerszego profilu receptorowego i "ostrzejszego" charakteru LSD.</p>`,
    brain_en:`<p>LSD shows the broadest receptor profile among psychedelics — visual cortex maximally saturated, plus a unique dopaminergic component (D2) visible in NAc/VTA. This is the biological difference between LSD and psilocybin.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">VCtx</div><div class="brain-region-desc">Visual cortex — highest value in LSD map (i:0.95). 5-HT2A in V1–V4 explains the intensity and complexity of LSD's visual effects — stronger than psilocybin.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">General cortex (i:0.94). Global desynchronisation via 5-HT2A = higher brain entropy than psilocybin.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Strong activation (i:0.90). DMN disruption + D2 adds a "racing thoughts" component absent in psilocybin.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">D2 activation (i:0.55). LSD's dopaminergic component — unique among classic psychedelics. Contributes to the stimulant, energetic quality and longer lasting effects.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">α-adrenergic activation (i:0.62). Tachycardia, pupil dilation, heightened arousal. The sympathomimetic component of LSD.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>5-HT2A / 5-HT2B / 5-HT1A — serotonergic; primary psychedelic and anxiolytic target</div>
  <div class="guide-row"><span class="guide-dot" style="background:#00ffaa"></span>D2 / D1 — dopaminergic; stimulant, mentally sharpening component of LSD vs psilocybin</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffaa44"></span>α1B / α2A — adrenergic; dilated pupils, tachycardia, BP rise</div>
  <div class="guide-row"><span class="guide-dot" style="background:#5090ff"></span>H1 — histaminergic; sedative, antiemetic component</div>
  <div class="guide-row"><span class="guide-dot" style="background:#888888"></span>σ1 — sigma-1; dissociative, oneiric component at higher doses</div>
  <div class="guide-row">⬡ locked arc — lid closure: receptor loop closed over LSD molecule</div>
</div>
<p><b>Animation 1 — Affinity map.</b> LSD molecules fly into each receptor class from the appropriate side. LSD has an exceptionally broad receptor network — 9 classes simultaneously — distinguishing it from psilocybin (dominantly 5-HT2A). When a receptor reaches lid closure (glowing arc), it displays the ⬡ lock label and remains occupied — this is the mechanism behind LSD's extreme duration (8–12 hours): the molecule becomes physically trapped inside the receptor's binding pocket.</p>
<p><b>Animation 2 — 5-HT2A mechanism.</b> Identical target to psilocybin but with much higher affinity (Ki ≈ 2–5 nM for LSD vs ≈30–50 nM for psilocin). Lid closure visible in the second animation as the receptor changes shape around the LSD molecule.</p>`
  },
  thc: {
    type:'agonist', vizType:'cb1_retrograde',
    label:'RETROGRADE SIGNALING — CB1 (endokannabinoidowy)',
    da:{spawn:0,block:0}, ht:{spawn:0,block:0}, ne:{spawn:0,block:0},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#50e890"></span><b style="color:#aaa">THC</b> — imituje endokannabinoidy, wchodzi do synapsy z zewnątrz</div>
  <div class="gl-row"><span class="gl-dot" style="background:#80ffb0"></span><b style="color:#aaa">Endokannabinoidy (AEA/2-AG)</b> — produkowane przez neuron POST, lecą w górę (retrograde)</div>
  <div class="gl-row"><span class="gl-dot" style="background:#aaaaff"></span><b style="color:#aaa">Neuroprzekaźnik (Glu/GABA)</b> — normalny kierunek: pre→post</div>
  <div class="gl-row"><span class="gl-dot" style="background:#50e890"></span><b style="color:#aaa">CB1 (na PRE)</b> — receptor kannabinoidowy; aktywacja hamuje wyrzut NT</div>
</div>
<p><b>Animacja 1 — Retrograde signaling.</b> To najbardziej unikalna właściwość układu endokannabinoidowego: sygnał biegnie <i>pod prąd</i>. Szare cząsteczki NT lecą normalnie (pre→post). Gdy post-synaptic neuron jest wystarczająco aktywny, produkuje endokannabinoidy (małe zielone, lecące w górę) które aktywują CB1 na aksonie presynaptycznym. CB1 aktywacja → zamknięcie kanałów Ca²⁺ → mniej wyrzutu NT. To mechanizm DSI/DSE — depolarization-induced suppression.</p>
<p>THC (duże jasno-zielone cząsteczki) imituje ten sygnał, ale jest metabolizowany przez FAAH znacznie wolniej niż anandamid — efekt jest globalny i długotrwały zamiast precyzyjnego i krótkotrwałego. Gdy CB1 jest aktywowany przez THC, wyrzut NT wyraźnie spada — widać mniej szarych cząsteczek w szczelinie.</p>
<p><b>Animacja 2 — Obwód VTA / disinhibicja DA.</b> Euforia THC wynika z pośredniego działania na dopaminę przez VTA. CB1 na neuronach GABA-ergicznych (interneurony) tłumi ich aktywność → odhamowanie neuronów dopaminowych → wzrost DA w NAc. Mechanizm identyczny jak przy opioidach — deinhibicja, nie bezpośredni agonizm DA.`,
    brain:`<p>THC pokazuje <b>układ aktywacji CB1</b> (jasny zielony) skoncentrowany tam gdzie gęstość CB1 jest najwyższa. W tej samej mapie widzisz też ciemniejszy zielony (DA) w NAc/VTA — dwa odcienie zielonego to dwa różne mechanizmy.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hipokamp — najwyższa gęstość CB1 w mózgu (i:0.88). Efekt: zaburzenie formowania nowych wspomnień (anterograde memory impairment). Neurobiologia "zapominania" pod THC.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">CB1 (i:0.82) — hamuje wyrzut NT presynaptycznie. Zaburzenie planowania, working memory, inhibicji behawioralnej.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">Cereb</div><div class="brain-region-desc">Móżdżek — wysoka gęstość CB1 w komórkach granularnych i Purkinjego (i:0.78). Efekt: zaburzenie koordynacji ruchowej, ataksja, zmienione timing motoryczne.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc</div><div class="brain-region-desc">DA przez deinhibicję (i:0.72) — CB1 na interneuronach GABA w VTA zdejmuje hamowanie z neuronów DA. THC nie aktywuje DA bezpośrednio.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">CB1 (i:0.65) — paradoksalne: niskie dawki mogą redukować lęk, wysokie — nasilać. Typ reakcji zależy od dawki i kontekstu.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">Thal</div><div class="brain-region-desc">Niska gęstość CB1 (i:0.28, Herkenham 1990) — heterogeniczna dystrybucja. Jądra wzgórza mają znacznie mniej CB1 niż hipokamp czy kora.</div></div>
<p><b>cb1 vs da w tej mapie:</b> Jasny zielony (cb1) = bezpośrednia aktywacja receptora kannabinoidowego. Ciemny zielony (da) = dopamina w NAc/VTA przez deinhibicję. THC nie jest stymulantem — DA to efekt pośredni.</p>`,
    brain_en:`<p>THC shows CB1 activation (bright green) concentrated where CB1 density is highest. The same map also shows darker green (DA) in NAc/VTA — two shades of green representing two different mechanisms.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hippocampus — highest CB1 density in the brain (i:0.88). Effect: disruption of new memory formation (anterograde memory impairment). Neurobiology of forgetting under THC.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">CB1 (i:0.82) — presynaptically suppresses NT release. Disruption of planning, working memory, behavioural inhibition.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">Cereb</div><div class="brain-region-desc">Cerebellum — high CB1 in granule cells and Purkinje cells (i:0.78). Effect: impaired motor coordination, altered time perception.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#00ffaa;box-shadow:0 0 5px #00ffaa"></div><div class="brain-region-name">NAc / VTA</div><div class="brain-region-desc">Indirect DA rise (i:0.65) — disinhibition via CB1 on VTA interneurons. The hedonic component. Tolerance develops rapidly here.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#50d282"></span>THC — mimics endocannabinoids; enters the synapse from outside</div>
  <div class="guide-row"><span class="guide-dot" style="background:#50d282;opacity:0.6"></span>Endocannabinoids (AEA/2-AG) — produced by the POST neuron; travel upward (retrograde)</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffdc32"></span>Neurotransmitter (Glu/GABA) — normal direction: pre→post</div>
  <div class="guide-row">CB1 (on PRE) — cannabinoid receptor; activation suppresses NT release</div>
</div>
<p><b>Animation 1 — Retrograde signalling.</b> The most unique feature of the endocannabinoid system: the signal travels backwards. Grey NT particles fly normally (pre→post). When the postsynaptic neuron is sufficiently active, it produces endocannabinoids (small green, flying upward) that activate CB1 on the presynaptic axon. CB1 activation → closure of Ca²⁺ channels → less NT release. This is DSI/DSE — depolarization-induced suppression.</p>
<p>THC (large bright-green particles) mimics this signal but is not metabolised as quickly as endogenous ligands — the effect lasts much longer. This explains the dose mismatch: unlike endocannabinoids (produced on demand), THC is exogenous and persistent.</p>
<p><b>Animation 2 — VTA disinhibition circuit.</b> THC euphoria comes from indirect DA action through VTA. CB1 on GABAergic interneurons suppresses their activity → disinhibition of dopaminergic neurons → DA rise in NAc. Mechanism identical to opioids — disinhibition, not direct DA agonism.</p>`
  },
  cbd: {
    type:'agonist', vizType:'cbd_multitarget',
    label:'MAPA TARGETÓW — CBD (brak psychoaktywności)',
    da:{spawn:0,block:0}, ht:{spawn:0,block:0}, ne:{spawn:0,block:0},
    guide:`
<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#64c8ff"></span><b style="color:#aaa">CBD</b> — niebieskawa cząsteczka, brak klasycznego agonizmu CB1</div>
  <div class="gl-row"><span class="gl-dot" style="background:#50e890"></span><b style="color:#aaa">CB1 (allosteryczny)</b> — CBD wiąże się, ale nie aktywuje; zmienia kształt receptora</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff88cc"></span><b style="color:#aaa">5-HT1A</b> — partial agonista; kluczowy dla anksjolizacji</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ffaa44"></span><b style="color:#aaa">TRPV1</b> — kanał kapsaicynowy; CBD jest agonistą → aktywuje, a następnie desensytyzuje kanał</div>
  <div class="gl-row"><span class="gl-dot" style="background:#aaddff"></span><b style="color:#aaa">FAAH</b> — enzym degradujący anandamid; inhibicja → wzrost AEA</div>
</div>
<p><b>Animacja 1 — Multi-target mapa.</b> CBD nie ma jednego dominującego mechanizmu — działa na wiele celów jednocześnie z umiarkowanym powinowactwem. CB1 jest oznaczony inaczej niż pozostałe: CBD go wiąże (cząsteczka ląduje) ale receptor <i>nie świeci się</i> — to allosteryczna modulacja, nie aktywacja. Porównaj z LSD gdzie każdy związany receptor glows intensywnie.</p>
<p>5-HT1A — jedyny cel gdzie CBD daje wyraźną aktywację (partial agonizm). To główny mechanizm działania anksjolitycznego i antydepresyjnego, zbliżony do buspironu. TRPV1: CBD jest agonistą — aktywuje kanał, wywołując napływ Ca²⁺ i wtórną desensytyzację; efekt przeciwbólowy wynika właśnie z tej desensytyzacji. FAAH: CBD dokuje do enzymu, spowalniając degradację anandamidu — pośredni wzrost endokannabinoidów bez bezpośredniej aktywacji CB1.</p>
<p><b>Animacja 2 — Allosteryczna modulacja CB1.</b> Pokazuje co dzieje się gdy w tej samej szczelinie są jednocześnie THC i CBD. CBD zajmując allosteryczne miejsce zmienia konformację CB1 — THC wiąże się słabiej, efekt jest łagodniejszy.</p>`,
    brain:`<p>CBD prezentuje <b>najdelikatniejszy profil w całej aplikacji</b> — niskie intensywności, tylko kilka regionów, serotoninowy kolor dominuje. Wizualizacja substancji działającej subtelnie, bez uderzenia w system nagrody.</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Ciało migdałowate — kluczowy mechanizm anksjolityczny CBD (i:0.62 na peaku). 5-HT1A partial agonizm w BLA i CeA redukuje reaktywność lękową. Potwierdzone eksperymentalnie przez blokadę WAY100635.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hipokamp — 5-HT1A i pośrednio przez anandamid (i:0.55). Właściwości neuroprotekcyjne i potencjał anxiolityczny CBD powiązane z hipokampem.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Jądra szwu — 5-HT1A partial agonizm (i:0.50). Mechanizm podobny do buspironu, ale słabszy. Częściowa aktywacja autoreceptorów.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ffaa44;box-shadow:0 0 5px #ffaa44"></div><div class="brain-region-name">LC</div><div class="brain-region-desc">Pośrednie zmniejszenie aktywności NE (i:0.45). 5-HT1A w Raphe → redukcja nadmiernej aktywności LC. Zmniejszenie fizycznych objawów lęku (tachykardia).</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Słaba ale realna aktywacja 5-HT1A (i:0.40). Potencjał antydepresyjny przez modulację PFC.</div></div>
<p><b>Czego nie ma na mapie:</b> Brak NAc, VTA, DA — CBD nie aktywuje systemu nagrody. Brak CB1 (CBD jest NAM — hamuje, nie aktywuje). Brak gaba (w odróżnieniu od diazepamu). Intensywności 0.40–0.62 vs 0.90–1.0 dla α-PVP oddają tę fundamentalną różnicę.</p>`,
    brain_en:`<p>CBD presents the most subtle profile in the app — low intensities, few regions, serotonergic colour dominates. Visualisation of a substance acting gently, without hitting the reward system.</p>
<div class="brain-content">
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Amygdala — key anxiolytic mechanism (i:0.62 at peak). 5-HT1A partial agonism in BLA and CeA reduces fear reactivity. Confirmed experimentally by WAY100635 blockade.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Hipp</div><div class="brain-region-desc">Hippocampus — 5-HT1A and indirectly via anandamide (i:0.55). Neuroprotective properties and anxiolytic potential of CBD linked to hippocampus.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Raphe</div><div class="brain-region-desc">Raphe nuclei — 5-HT1A partial agonism (i:0.50). Mechanism similar to buspirone. Partial activation of autoreceptors.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#50d282;box-shadow:0 0 5px #50d282"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">CB1 allosteric modulation + indirect anandamide (i:0.42). Anti-anxiety effect in PFC — opposed to THC-induced anxiety at CB1.</div></div>
</div>`,
    guide_en:`<div class="guide-legend">
  <div class="guide-row"><span class="guide-dot" style="background:#50d282;opacity:0.5"></span>CBD — bluish particle; no classic CB1 agonism</div>
  <div class="guide-row">CB1 (allosteric) — CBD binds but doesn't activate; changes receptor shape</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>5-HT1A — partial agonist; key for anxiolysis</div>
  <div class="guide-row">TRPV1 — capsaicin channel; CBD is an agonist → activates, then desensitises</div>
  <div class="guide-row">FAAH — enzyme degrading anandamide; inhibition → AEA increase</div>
</div>
<p><b>Animation 1 — Multi-target map.</b> CBD has no single dominant mechanism — it acts on many targets simultaneously with moderate affinity. CB1 is marked differently from the rest: CBD lands on it but the receptor doesn't light up — this is allosteric modulation, not activation. Compare with LSD where every bound receptor glows intensely.</p>
<p><b>5-HT1A</b> is the only target where CBD produces clear activation (partial agonism). This is the primary mechanism of anxiolytic and antidepressant effects — in the amygdala and hippocampus. Similar target to buspirone.</p>
<p><b>TRPV1 desensitisation:</b> CBD activates the capsaicin channel → Ca²⁺ influx → secondary <b>desensitisation</b>. The analgesic/anti-inflammatory effect comes from desensitisation, not blockade. Calling CBD a "TRPV1 antagonist" is incorrect.</p>
<p><b>FAAH inhibition</b> (IC₅₀ ≈ 8–10 µM) → anandamide rises → indirect CB1 potentiation without direct activation.</p>`
  },

  dmt: {
    type:'agonist', vizType:'dmt_flood',
    label:'5-HT2A FLOOD — GWAŁTOWNA AKTYWACJA (WZIEWNA)',
    da:{spawn:0.004,block:0}, ht:{spawn:0.095,block:0}, ne:{spawn:0.008,block:0},
    guide:`<div class="guide-legend">
  <div class="gl-row"><span class="gl-dot" style="background:#ff44cc"></span><b style="color:#aaa">DMT</b> — magentowe cząsteczki; masowy atak na 5-HT2A w ciągu sekund</div>
  <div class="gl-row"><span class="gl-dot" style="background:#ff88ff"></span><b style="color:#aaa">5-HT2A</b> — receptory postsynaptyczne; zapalają się przy związaniu</div>
</div>
<p>DMT działa jak fala uderzeniowa — pełna saturacja 5-HT2A w mniej niż 2 minuty. Porównaj z psylocybiną: ta sama docelowa sieć receptorowa, ale psylocyna wiąże się stopniowo przez 30-60 minut. Brak czasu na adaptację mózgu tłumaczy skrajną intensywność DMT.</p>
<p><b>Sigma-1:</b> Równoległa aktywacja może tłumaczyć specyficzną jakość przestrzeni DMT — opisywaną jako kontakt z oddzielnymi bytami. Sigma-1 moduluje ER stress response i plastyczność neuronalną.</p>`,
    brain:`<p>DMT wykazuje <b>błyskawiczną, ekstremalnie intensywną aktywację serotoninową kory</b> — szybciej niż jakakolwiek inna substancja w aplikacji. VCtx i Cortex na pełnej saturacji (i:1.0 i 0.98). Biologiczny substrat "przerywania normalnej rzeczywistości".</p>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">VCtx</div><div class="brain-region-desc">Kora wzrokowa — maksymalna saturacja (i:1.0), wyższa niż LSD (0.95). Nagłe, pełne nasycenie 5-HT2A = totalne przestawienie przetwarzania wzrokowego. Stąd "breakthrough" wizualizacje niemożliwe do osiągnięcia przez inne psychedeliki.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Cortex</div><div class="brain-region-desc">Ogólna kora (i:0.98) — szybkość onset DMT przy tak wysokiej intensywności = brak adaptacji kory. Informacja nadchodzi szybciej niż możliwość przetworzenia.</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">PFC</div><div class="brain-region-desc">Disrupcja DMN (i:0.82) — zawieszenie narracji ego następuje znacznie szybciej niż przy psylocybinie (minuty vs godziny).</div></div>
<div class="brain-region-row"><div class="brain-region-dot" style="background:#ff44ff;box-shadow:0 0 5px #ff44ff"></div><div class="brain-region-name">Amy</div><div class="brain-region-desc">Intensywna aktywacja (i:0.78) — może wyjaśniać często opisywane "presencje" i entity encounters. Amy przetwarza znaczenie emocjonalne i poczucie "obecności innych".</div></div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff44ff"></span>Serotonin / Norepinephrine — moderate blockade</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ff0000"></span>Histamine (H1) — strong inhibition (sedation)</div>
  <div class="guide-row"><span class="guide-dot" style="background:#ffff00"></span>Acetylcholine (M1) — blockade (dryness, constipation)</div>
</div>
<p>Amitriptyline is a tricyclic antidepressant (TCA) with a "dirty profile." Besides SERT and NET blockade, it strongly interacts with histamine and muscarinic receptors. The animation shows blocked transporters, but the clinical effect is dominated by a broad receptor spectrum beyond the monoamine synapse itself.</p>
<p><b>Sedation and Pain:</b> Strong H1 blockade (shown as red background in some phases) is responsible for powerful sedation. Its influence on NE and sodium channels (not shown directly) makes it a gold standard for neuropathic pain.</p>
<p><b>Anticholinergic Action:</b> M1 blockade causes classic side effects: dry mouth, blurred vision, and short-term memory issues.</p>`
  }
};

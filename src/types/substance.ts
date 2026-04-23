export type NTLevel = 'da' | 'ht' | 'ne' | 'glut' | 'gaba' | 'opioid' | 'cb1' | 'ac' | 'hi';

export interface Phase {
  n: string; // name
  d: number; // duration (minutes?)
  i: number; // intensity (%)
  c: string; // color
}

export interface BrainRegion {
  r: string; // region name
  i: number; // intensity (0-1)
  nt: NTLevel; // neurotransmitter
}

export interface Comparison {
  t: string; // title/type
  v: string; // value/description
}

export interface Substance {
  id: string;
  name: string;
  name_en?: string;
  fullName: string;
  fullName_en?: string;
  class: string;
  class_en?: string;
  category: 'cathinone' | 'entactogen' | 'stimulant' | 'opioid' | 'dissociative' | 'psychedelic' | 'cannabinoid' | 'gabaergic' | 'sedative' | 'deliriant' | 'depressant';
  mechanism: string;
  targets: string[];
  color: string;
  nt: Partial<Record<NTLevel, number>>;
  phases: Phase[];
  brainMap: BrainRegion[][];
  receptor: string;
  tolerance: string;
  compare: Comparison[];
}


import fs from 'fs';

const verified = JSON.parse(fs.readFileSync('zweryfikowane_interakcje.json', 'utf8'));

const RISK_MAP_REV = {
  'low_synergy': 'S',
  'low_no_interaction': 'N',
  'low_potentiation': 'P',
  'caution': 'C',
  'dangerous': 'D',
  'life_threat': 'L'
};

const newLines = verified.map(i => {
  const risk = RISK_MAP_REV[i.risk_level] || 'N';
  // Escape single quotes in description
  const desc = i.description_pl.replace(/'/g, "\\'");
  return `  ['${i.substanceA}', '${i.substanceB}', '${risk}', '${desc}', {}],`;
});

console.log(`\n  // === ADDED BY AGENT JULES (OpenFDA) ===`);
newLines.forEach(line => console.log(line));

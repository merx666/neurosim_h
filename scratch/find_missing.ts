
import { DATA } from '../src/data/substances.ts';
import { INTERACTIONS } from '../server/data/interactions.ts';
import fs from 'fs';

const keys = Object.keys(DATA);
const existingPairs = new Set();

INTERACTIONS.forEach(row => {
    const a = row[0];
    const b = row[1];
    existingPairs.add(`${a}-${b}`);
    existingPairs.add(`${b}-${a}`);
});

const missing = [];

for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
        const a = keys[i];
        const b = keys[j];
        if (!existingPairs.has(`${a}-${b}`)) {
            missing.push({
                substanceA: a,
                nameA: DATA[a].name,
                substanceB: b,
                nameB: DATA[b].name,
                data_needed: [
                    "risk_level (S, N, P, C, D, L)",
                    "description_pl",
                    "nt_effects (e.g., { da: 'up', ht: 'down' })",
                    "mechanism (optional)",
                    "clinical_notes (optional)"
                ]
            });
        }
    }
}

fs.writeFileSync('missing_interactions.json', JSON.stringify(missing, null, 2));
console.log(`Found ${missing.length} missing interactions. Output saved to missing_interactions.json`);

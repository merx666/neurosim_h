import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from './db.ts';
import { DATA } from '../src/data/substances.ts';
import { SYN } from '../src/data/syn_data.ts';
import { INTERACTIONS, R_MAP } from './data/interactions.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function seed() {
  const client = await pool.connect();
  try {
    const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf-8');
    await client.query(schema);
    console.log('✓ Schema created');

    const substancesList = Object.entries(DATA);
    for (const [key, s] of substancesList) {
      const syn = (SYN as any)[key] || {};
      
      await client.query(
        `INSERT INTO substances (
          key, name_pl, name_en, full_name_pl, full_name_en, class_pl, class_en, 
          category, primary_nt, mechanism, targets, color, nt_profile, 
          phases, brain_map, receptor_detail_pl, receptor_detail_en, tolerance_pl, tolerance_en,
          guide_pl, guide_en, brain_detail_pl, brain_detail_en, comparison_data
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)`,
        [
          key, 
          s.name, 
          s.name_en || null, 
          s.fullName, 
          (s as any).fullName_en || null,
          s.class,
          (s as any).class_en || null,
          s.category,
          Object.keys(s.nt),
          s.mechanism,
          s.targets,
          s.color,
          JSON.stringify(s.nt),
          JSON.stringify(s.phases),
          JSON.stringify(s.brainMap),
          s.receptor,
          (s as any).receptor_en || null,
          s.tolerance,
          (s as any).tolerance_en || null,
          syn.guide || null,
          syn.guide_en || null,
          syn.brain || null,
          syn.brain_en || null,
          JSON.stringify(s.compare)
        ]
      );
    }
    console.log(`✓ ${substancesList.length} substances inserted`);

    const res = await client.query('SELECT id, key FROM substances');
    const keyMap: Record<string, number> = {};
    for (const row of res.rows) keyMap[row.key] = row.id;

    let count = 0;
    for (const row of INTERACTIONS) {
      const [aKey, bKey, risk, desc, ntEffects, mechanism, clinical] = row;
      
      // Map keys to DB keys if necessary (e.g. 'mephedrone' vs '4mmc')
      const mapKey = (k: string) => {
        if (k === '4mmc') return 'mephedrone';
        if (k === 'apvp') return 'alpvp';
        return k;
      };

      const aId = keyMap[mapKey(aKey)];
      const bId = keyMap[mapKey(bKey)];

      if (!aId || !bId) {
        // console.warn(`⚠ Skipping unknown pair: ${aKey} × ${bKey}`);
        continue;
      }

      // Sample clinical sources for integration
      const sources = [
        { name: 'TripSit', url: `https://combo.tripsit.me/` },
        { name: 'PsychonautWiki', url: `https://psychonautwiki.org/wiki/${mapKey(aKey)}` }
      ];

      await client.query(
        `INSERT INTO interactions (substance_a_id, substance_b_id, risk, description_pl, nt_effects, mechanism, clinical_notes, sources)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         ON CONFLICT (substance_a_id, substance_b_id) DO NOTHING`,
        [aId, bId, R_MAP[risk], desc, JSON.stringify(ntEffects), mechanism || null, clinical || null, JSON.stringify(sources)]
      );
      count++;
    }
    console.log(`✓ ${count} interactions inserted`);
    console.log('Seed complete.');
  } catch (err) {
    console.error('Seed error:', err);
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();

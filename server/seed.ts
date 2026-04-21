import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from './db.js';
import { SUBSTANCES } from './data/substances.js';
import { INTERACTIONS, R_MAP } from './data/interactions.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function seed() {
  const client = await pool.connect();
  try {
    // Run schema
    const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf-8');
    await client.query(schema);
    console.log('✓ Schema created');

    // Insert substances
    for (const s of SUBSTANCES) {
      await client.query(
        `INSERT INTO substances (key, name_pl, name_en, category, primary_nt, mechanism)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [s.key, s.name_pl, s.name_en, s.category, s.primary_nt, s.mechanism]
      );
    }
    console.log(`✓ ${SUBSTANCES.length} substances inserted`);

    // Build key→id map
    const res = await client.query('SELECT id, key FROM substances');
    const keyMap: Record<string, number> = {};
    for (const row of res.rows) keyMap[row.key] = row.id;

    // Insert interactions
    let count = 0;
    for (const row of INTERACTIONS) {
      const [aKey, bKey, risk, desc, ntEffects, mechanism, clinical] = row;
      const aId = keyMap[aKey];
      const bId = keyMap[bKey];
      if (!aId || !bId) {
        console.warn(`⚠ Skipping unknown pair: ${aKey} × ${bKey}`);
        continue;
      }
      await client.query(
        `INSERT INTO interactions (substance_a_id, substance_b_id, risk, description_pl, nt_effects, mechanism, clinical_notes)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (substance_a_id, substance_b_id) DO NOTHING`,
        [aId, bId, R_MAP[risk], desc, JSON.stringify(ntEffects), mechanism || null, clinical || null]
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

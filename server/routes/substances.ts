import { Router } from 'express';
import pool from '../db.ts';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, key, name_pl, name_en, class_pl, class_en, category, primary_nt, mechanism, color FROM substances ORDER BY category, name_pl'
    );
    const substances = result.rows.map(row => ({
      id: row.key,
      key: row.key,
      name_pl: row.name_pl,
      name_en: row.name_en,
      class_pl: row.class_pl,
      class_en: row.class_en,
      category: row.category,
      color: row.color,
      primary_nt: row.primary_nt
    }));
    res.json(substances);
  } catch (err) {
    console.error('GET /api/substances error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/:key', async (req, res) => {
  console.log(`GET /api/substances/${req.params.key} hit`);
  try {
    const result = await pool.query(
      'SELECT * FROM substances WHERE key = $1',
      [req.params.key]
    );
    console.log(`Query result rows: ${result.rows.length}`);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Substance not found' });
    }
    const row = result.rows[0];
    const substance = {
      id: row.key,
      key: row.key,
      name_pl: row.name_pl,
      name_en: row.name_en,
      fullName: row.full_name_pl,
      fullName_en: row.full_name_en,
      class_pl: row.class_pl,
      class_en: row.class_en,
      category: row.category,
      mechanism: row.mechanism,
      targets: row.targets,
      color: row.color,
      nt: row.nt_profile,
      phases: row.phases,
      brainMap: row.brain_map,
      receptor: row.receptor_detail_pl,
      receptor_en: row.receptor_detail_en,
      tolerance: row.tolerance_pl,
      tolerance_en: row.tolerance_en,
      guide: row.guide_pl,
      guide_en: row.guide_en,
      brain: row.brain_detail_pl,
      brain_en: row.brain_detail_en,
      compare: row.comparison_data
    };
    res.json(substance);
  } catch (err) {
    console.error(`GET /api/substances/${req.params.key} error:`, err);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;

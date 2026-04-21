import { Router } from 'express';
import pool from '../db.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, key, name_pl, name_en, category, primary_nt, mechanism FROM substances ORDER BY category, name_pl'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('GET /api/substances error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;

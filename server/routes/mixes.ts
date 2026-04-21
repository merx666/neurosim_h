import { Router } from 'express';
import pool from '../db.js';

const router = Router();

// Get interaction between two substances
router.get('/search', async (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) {
    return res.status(400).json({ error: 'Both substance keys (a, b) required' });
  }
  try {
    const result = await pool.query(
      `SELECT i.*, 
              sa.key as substance_a_key, sa.name_pl as substance_a_name, sa.name_en as substance_a_name_en, sa.category as substance_a_category, sa.primary_nt as substance_a_nt,
              sb.key as substance_b_key, sb.name_pl as substance_b_name, sb.name_en as substance_b_name_en, sb.category as substance_b_category, sb.primary_nt as substance_b_nt
       FROM interactions i
       JOIN substances sa ON i.substance_a_id = sa.id
       JOIN substances sb ON i.substance_b_id = sb.id
       WHERE (sa.key = $1 AND sb.key = $2) OR (sa.key = $2 AND sb.key = $1)
       LIMIT 1`,
      [a, b]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Interaction not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('GET /api/interactions/search error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get all interactions for one substance
router.get('/substance/:key', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT i.*, 
              sa.key as substance_a_key, sa.name_pl as substance_a_name, sa.name_en as substance_a_name_en,
              sb.key as substance_b_key, sb.name_pl as substance_b_name, sb.name_en as substance_b_name_en
       FROM interactions i
       JOIN substances sa ON i.substance_a_id = sa.id
       JOIN substances sb ON i.substance_b_id = sb.id
       WHERE sa.key = $1 OR sb.key = $1
       ORDER BY i.risk DESC`,
      [req.params.key]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('GET /api/interactions/substance error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Full matrix
router.get('/matrix', async (_req, res) => {
  try {
    const substances = await pool.query('SELECT id, key, name_pl, name_en, category FROM substances ORDER BY category, name_pl');
    const interactions = await pool.query(
      `SELECT i.risk, i.nt_effects, i.description_pl, i.description_en, i.mechanism, i.clinical_notes,
              sa.key as a_key, sb.key as b_key
       FROM interactions i
       JOIN substances sa ON i.substance_a_id = sa.id
       JOIN substances sb ON i.substance_b_id = sb.id`
    );
    res.json({
      substances: substances.rows,
      interactions: interactions.rows,
    });
  } catch (err) {
    console.error('GET /api/interactions/matrix error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;

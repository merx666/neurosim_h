import pool from './db.ts';

async function check() {
  try {
    const res = await pool.query('SELECT key FROM substances');
    console.log('Keys in DB:', res.rows.map(r => r.key));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

check();

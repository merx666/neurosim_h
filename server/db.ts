import pg from 'pg';

const pool = new pg.Pool({
  host: process.env.PGHOST || 'localhost',
  port: parseInt(process.env.PGPORT || '5432'),
  database: process.env.PGDATABASE || 'neurosim',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
});

export default pool;

DROP TABLE IF EXISTS interactions CASCADE;
DROP TABLE IF EXISTS substances CASCADE;
DROP TYPE IF EXISTS risk_level CASCADE;

CREATE TYPE risk_level AS ENUM (
  'low_synergy','low_no_interaction','low_potentiation','caution','dangerous','life_threat'
);

CREATE TABLE substances (
  id SERIAL PRIMARY KEY,
  key VARCHAR(50) UNIQUE NOT NULL,
  name_pl VARCHAR(100) NOT NULL,
  name_en VARCHAR(100),
  category VARCHAR(50) NOT NULL,
  primary_nt TEXT[],
  mechanism TEXT
);

CREATE TABLE interactions (
  id SERIAL PRIMARY KEY,
  substance_a_id INT REFERENCES substances(id),
  substance_b_id INT REFERENCES substances(id),
  risk risk_level NOT NULL,
  description_pl TEXT,
  description_en TEXT,
  nt_effects JSONB DEFAULT '{}',
  mechanism TEXT,
  clinical_notes TEXT,
  source VARCHAR(200) DEFAULT 'SIN/TripSit',
  UNIQUE(substance_a_id, substance_b_id)
);

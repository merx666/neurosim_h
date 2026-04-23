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
  full_name_pl VARCHAR(200),
  full_name_en VARCHAR(200),
  class_pl VARCHAR(100),
  class_en VARCHAR(100),
  category VARCHAR(50) NOT NULL,
  primary_nt TEXT[],
  mechanism TEXT,
  targets TEXT[],
  color VARCHAR(20),
  nt_profile JSONB DEFAULT '{}',
  phases JSONB DEFAULT '[]',
  brain_map JSONB DEFAULT '[]',
  receptor_detail_pl TEXT,
  receptor_detail_en TEXT,
  tolerance_pl TEXT,
  tolerance_en TEXT,
  guide_pl TEXT,
  guide_en TEXT,
  brain_detail_pl TEXT,
  brain_detail_en TEXT,
  comparison_data JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
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
  sources JSONB DEFAULT '[]',
  source_old VARCHAR(200) DEFAULT 'SIN/TripSit',
  UNIQUE(substance_a_id, substance_b_id)
);

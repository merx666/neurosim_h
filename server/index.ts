import express from 'express';
import cors from 'cors';
import substancesRouter from './routes/substances.js';
import mixesRouter from './routes/mixes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/substances', substancesRouter);
app.use('/api/interactions', mixesRouter);

app.listen(PORT, () => {
  console.log(`NeuroSim API running on http://localhost:${PORT}`);
});

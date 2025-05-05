
import express from 'express';
const app = express();
const PORT = 3000;

app.get('/animes', (_req, res) => {
  res.json([
    { id: 1, title: 'Attack on Titan' },
    { id: 2, title: 'Jujutsu Kaisen' },
    { id: 3, title: 'Demon Slayer' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

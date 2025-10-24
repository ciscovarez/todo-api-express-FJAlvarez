// index.js
const express = require('express');
const tasksRouter = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.json({ message: 'To-Do API con Express.js. Usa /tasks' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// routes.js
const express = require('express');
const router = express.Router();
let tasks = require('./data');

function findTaskIndexById(id) {
  return tasks.findIndex(t => t.id === id);
}

router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description, completed } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'El campo "title" es obligatorio y debe ser una cadena.' });
  }
  if (description !== undefined && typeof description !== 'string') {
    return res.status(400).json({ error: 'El campo "description" debe ser una cadena si se entrega.' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'El campo "completed" debe ser booleano si se entrega.' });
  }

  const newId = tasks.length + 1;
  const newTask = {
    id: newId,
    title: title.trim(),
    description: description ? description.trim() : '',
    completed: typeof completed === 'boolean' ? completed : false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

  const idx = findTaskIndexById(id);
  if (idx === -1) return res.status(404).json({ error: 'Tarea no encontrada' });

  const { title, description, completed } = req.body;

  if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
    return res.status(400).json({ error: 'Si "title" se entrega, debe ser una cadena no vacía.' });
  }
  if (description !== undefined && typeof description !== 'string') {
    return res.status(400).json({ error: 'Si "description" se entrega, debe ser una cadena.' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Si "completed" se entrega, debe ser booleano.' });
  }

  if (title !== undefined) tasks[idx].title = title.trim();
  if (description !== undefined) tasks[idx].description = description.trim();
  if (completed !== undefined) tasks[idx].completed = completed;

  res.json(tasks[idx]);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

  const idx = findTaskIndexById(id);
  if (idx === -1) return res.status(404).json({ error: 'Tarea no encontrada' });

  const removed = tasks.splice(idx, 1)[0];
  res.json({ message: 'Tarea eliminada', task: removed });
});

module.exports = router;

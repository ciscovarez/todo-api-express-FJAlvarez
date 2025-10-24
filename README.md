# 📝 To-Do API con Express.js

**Autor:** Francisco Javier Alvarez - IPG  
**Asignatura:** Programación Back End  
**Unidad 2:** Mi primera API con Express.js  

---

## 📘 Descripción general
Esta API RESTful permite gestionar una lista de **tareas (To-Do List)** mediante operaciones CRUD.

## ⚙️ Instalación
```bash
npm install
npm start
```

## 🧠 Endpoints principales

### GET /tasks
Lista todas las tareas.

### POST /tasks
Crea una nueva tarea.

### PUT /tasks/:id
Actualiza una tarea existente.

### DELETE /tasks/:id
Elimina una tarea.

---

## 🧪 Ejemplos (curl)

**Listar tareas:**
```bash
curl http://localhost:3000/tasks
```

**Crear tarea:**
```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Nueva tarea","description":"Descripción","completed":false}'
```

**Actualizar tarea:**
```bash
curl -X PUT http://localhost:3000/tasks/2 -H "Content-Type: application/json" -d '{"completed":true}'
```

**Eliminar tarea:**
```bash
curl -X DELETE http://localhost:3000/tasks/3
```

---

## ✅ Códigos de estado
- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found

---

🎓 Proyecto desarrollado para la asignatura **Programación Back End (IPG)** — Unidad 2.

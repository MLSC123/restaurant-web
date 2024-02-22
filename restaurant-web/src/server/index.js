// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../sqliteDatabase/restaurantX.db')

const app = express();
const port = 443;

app.use(cors());
app.use(bodyParser.json());

//Importaciones propias
// const menuData = require("../data/data");



// Rutas para el CRUD

// Ruta GET (Read) para /about
app.get('/about', (req, res) => {
  // Lógica para obtener elementos desde la base de datos
  // console.log("Request: ", req.headers);
  console.log("Request /about");
  res.json({
    id: "1",
    name: "Steve Rogers"
  });
});

// Ruta GET (Read) para /menu
app.get('/menu', (req, res) => {

  console.log("Request /menu");

  db.all("SELECT * FROM menuDishes", (err, rows) => {
    if (err) {
      console.log("Error al traer la data de la db");
      // res.status(500).json({ error: err.message });
      return;
    }
    res.json( rows );
  })

});

// Ruta GET (Read) para /menu/:id
app.get('/menu/:id', (req, res) => {
  const idPlate = req.params.id;
  // const plateFound = menuData.find( (plate) => plate.id === idPlate );
  const sqliteQuery = "SELECT * FROM menuDishes WHERE id = ?";
  // Ejecuta la consulta con el parámetro
  db.get(sqliteQuery, [idPlate], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    // Si no hay errores, devuelve el resultado de la consulta
    console.log("Plato encontrado: ", row);
    res.json(row);
  });
});

// // Ejemplo de ruta POST (Create)
// app.post('/api/items', (req, res) => {
//   const newItem = req.body;
//   // Lógica para agregar un nuevo elemento a la base de datos
//   res.json({ message: 'Elemento creado exitosamente' });
// });

// // Ejemplo de ruta PUT (Update)
// app.put('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   const updatedItem = req.body;
//   // Lógica para actualizar un elemento en la base de datos
//   res.json({ message: `Elemento con ID ${itemId} actualizado exitosamente` });
// });

// // Ejemplo de ruta DELETE (Delete)
// app.delete('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   // Lógica para eliminar un elemento de la base de datos
//   res.json({ message: `Elemento con ID ${itemId} eliminado exitosamente` });
// });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});



// Cierre de la conexión a la base de datos cuando la aplicación se cierra
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      return console.error("Error al cerrar la db:", err.message);
    }
    console.log('Conexión a la base de datos cerrada');
    process.exit(0);
  });
});
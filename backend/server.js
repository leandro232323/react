import express from "express";
import cors from "cors";

// Crea la app
const app = express();

// Puerto del servidor
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/api/mensaje", (req, res) => {
  res.json({ texto: "Hola desde el backend " });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
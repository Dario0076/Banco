require("dotenv").config();
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

// Inicializar Firebase Admin con credenciales
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CREDENTIALS))
});
const db = admin.firestore();

// Configurar Express
const app = express();
app.use(cors());
app.use(express.json());

// 📌 1️⃣ Ruta para crear un banco
app.post("/crearBanco", async (req, res) => {
    try {
        const { nombre, sucursal, formasPago } = req.body;

        if (!nombre || !sucursal || !formasPago) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const nuevoBanco = { nombre, sucursal, formasPago };
        const bancoRef = await db.collection("bancos").add(nuevoBanco);

        res.status(201).json({ id: bancoRef.id, mensaje: "Banco registrado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el banco", detalles: error.message });
    }
});

// 📌 2️⃣ Ruta para obtener todos los bancos
app.get("/obtenerBancos", async (req, res) => {
    try {
        const bancosSnap = await db.collection("bancos").get();
        const bancos = bancosSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.status(200).json(bancos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener bancos", detalles: error.message });
    }
});

// 📌 3️⃣ Ruta para obtener un banco por ID
app.get("/obtenerBanco/:id", async (req, res) => {
    try {
        const bancoRef = db.collection("bancos").doc(req.params.id);
        const doc = await bancoRef.get();

        if (!doc.exists) {
            return res.status(404).json({ error: "Banco no encontrado" });
        }

        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el banco", detalles: error.message });
    }
});

// 📌 4️⃣ Ruta para actualizar un banco
app.put("/actualizarBanco/:id", async (req, res) => {
    try {
        const { nombre, sucursal, formasPago } = req.body;

        if (!nombre || !sucursal || !formasPago) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const bancoRef = db.collection("bancos").doc(req.params.id);
        await bancoRef.update({ nombre, sucursal, formasPago });

        res.status(200).json({ mensaje: "Banco actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar banco", detalles: error.message });
    }
});

// 📌 5️⃣ Ruta para eliminar un banco
app.delete("/eliminarBanco/:id", async (req, res) => {
    try {
        const bancoRef = db.collection("bancos").doc(req.params.id);
        await bancoRef.delete();

        res.status(200).json({ mensaje: "Banco eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el banco", detalles: error.message });
    }
});

// Iniciar el servidor en Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

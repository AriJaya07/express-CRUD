// src/index.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mahasiswaRoutes from "./routes/mahasiswaRoutes.js";
import jurusanRoutes from "./routes/jurusanRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/mahasiswa", mahasiswaRoutes);
app.use("/api/jurusan", jurusanRoutes);

app.get("/", (req, res) => res.send("API Mahasiswa is running"));

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// src/routes/mahasiswaRoutes.js
import express from "express";
import {
  createMahasiswa,
  getAllMahasiswa,
  getMahasiswaById,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controllers/mahasiswaController.js";

const router = express.Router();

router.post("/", createMahasiswa); // create
router.get("/", getAllMahasiswa); // list
router.get("/:id", getMahasiswaById); // read one
router.put("/:id", updateMahasiswa); // update
router.delete("/:id", deleteMahasiswa); // delete

export default router;

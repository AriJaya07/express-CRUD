// src/controllers/mahasiswaController.js
import Mahasiswa from "../models/mahasiswa.js";

// Create
export const createMahasiswa = async (req, res, next) => {
  try {
    const { nama, nim, jurusan, angkatan, email } = req.body;
    const existing = await Mahasiswa.findOne({ nim });
    if (existing)
      return res.status(400).json({ message: "NIM sudah terdaftar" });

    const mhs = new Mahasiswa({ nama, nim, jurusan, angkatan, email });
    const saved = await mhs.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

// Read all
export const getAllMahasiswa = async (req, res, next) => {
  try {
    const list = await Mahasiswa.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Read one
export const getMahasiswaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mhs = await Mahasiswa.findById(id);
    if (!mhs)
      return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(mhs);
  } catch (err) {
    next(err);
  }
};

// Update
export const updateMahasiswa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updated = await Mahasiswa.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete
export const deleteMahasiswa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Mahasiswa.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json({ message: "Mahasiswa dihapus" });
  } catch (err) {
    next(err);
  }
};

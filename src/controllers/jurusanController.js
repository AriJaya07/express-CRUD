// src/controllers/jurusanController.js
import Jurusan from "../models/jurusan.js";

export const getAllJurusan = async (req, res, next) => {
  try {
    const data = await Jurusan.find();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getJurusanById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const jurusan = await Jurusan.findById(id);

    if (!jurusan)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });

    res.json(jurusan);
  } catch (err) {
    next(err);
  }
};

export const createJurusan = async (req, res, next) => {
  try {
    const { nama, kode } = req.body;

    const newJurusan = await Jurusan.create({ nama, kode });
    res.status(201).json(newJurusan);
  } catch (err) {
    next(err);
  }
};

export const updateJurusan = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await Jurusan.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteJurusan = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Jurusan.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });

    res.json({ message: "Jurusan berhasil dihapus" });
  } catch (err) {
    next(err);
  }
};

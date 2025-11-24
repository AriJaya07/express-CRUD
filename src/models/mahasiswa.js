// src/models/Mahasiswa.js
import mongoose from "mongoose";

const MahasiswaSchema = new mongoose.Schema({
  nama: String,
  nim: String,
  jurusan: String,
  angkatan: Number,
  email: String
}, {
  collection: "dataSiswa" 
});

const Mahasiswa = mongoose.model("Mahasiswa", MahasiswaSchema);
export default Mahasiswa;

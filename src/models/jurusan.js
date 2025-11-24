import mongoose from "mongoose";

const JurusanSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    kode: { type: String, required: true, unique: true },
  },
  {
    collection: "jurusan",
  }
);

const Jurusan = mongoose.model("Jurusan", JurusanSchema);
export default Jurusan;

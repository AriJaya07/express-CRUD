📘 Laporan Relasi Data Mahasiswa & Jurusan
Menggunakan MongoDB, Mongoose, dan Express.js
📌 1. Pendahuluan

Pada proyek ini dibuat dua entitas utama:

Mahasiswa

Jurusan

Keduanya memiliki hubungan one-to-many, di mana:

Satu Jurusan dapat memiliki banyak Mahasiswa

Setiap Mahasiswa hanya memiliki satu Jurusan

Implementasi menggunakan MongoDB sebagai database dan Mongoose sebagai ODM (Object Data Modeling).

📌 2. Struktur Koleksi (Collections)
🗂️ Koleksi: jurusan

Contoh dokumen:

{
  "_id": "6924485ea6af9f4782dd65ed",
  "nama": "Sistem Informasi",
  "kode": "SI",
  "createdAt": "...",
  "updatedAt": "..."
}

🗂️ Koleksi: mahasiswa

Contoh dokumen:

{
  "_id": "69244bf7d6af9f4782dd6611",
  "nama": "Jaya Test",
  "nim": "0857212233",
  "jurusan": "6924485ea6af9f4782dd65ed",
  "angkatan": 2025,
  "email": "jaya@example.com",
  "createdAt": "...",
  "updatedAt": "..."
}

📌 3. Relasi Data

Dalam Mongoose, relasi dilakukan menggunakan ref pada field jurusan.

📄 Contoh Schema Mahasiswa
const MahasiswaSchema = new mongoose.Schema({
  nama: String,
  nim: { type: String, unique: true },
  jurusan: { type: mongoose.Schema.Types.ObjectId, ref: "Jurusan" },
  angkatan: Number,
  email: String,
}, { timestamps: true });

📄 Contoh Schema Jurusan
const JurusanSchema = new mongoose.Schema({
  nama: String,
  kode: String,
}, { timestamps: true });

📌 4. Cara Menyimpan Data Relasi
➤ Kirim request POST ke /api/mahasiswa:

Body JSON:

{
  "nama": "Jaya Test",
  "nim": "0857212233",
  "jurusan": "6924485ea6af9f4782dd65ed",
  "angkatan": 2025,
  "email": "jaya@example.com"
}


Catatan:
jurusan harus berisi ObjectId, bukan object { type:"", ref:"" }.

📌 5. Cara Menampilkan Mahasiswa Beserta Nama Jurusan (Populate)

Pada controller:

const list = await Mahasiswa.find().populate("jurusan");
res.json(list);


Hasil output:

{
  "nama": "Jaya Test",
  "nim": "0857212233",
  "jurusan": {
    "_id": "6924485ea6af9f4782dd65ed",
    "nama": "Sistem Informasi",
    "kode": "SI"
  },
  "angkatan": 2025,
  "email": "jaya@example.com"
}

📌 6. Alur CRUD
🟢 Create Mahasiswa

Validasi NIM unik

Simpan dengan ObjectId jurusan

Return data mahasiswa

🔵 Read (Get All)
Mahasiswa.find().populate("jurusan")

🔵 Read (Get By ID)
Mahasiswa.findById(id).populate("jurusan")

🟡 Update
findByIdAndUpdate(id, updates, { new: true, runValidators: true })

🔴 Delete
findByIdAndDelete(id)

📌 7. Diagram Relasi (Simple ERD)
+-----------+        1 ----- ∞        +--------------+
|  Jurusan  | ----------------------> |  Mahasiswa   |
+-----------+                        +--------------+
| _id       |                        | _id          |
| nama      |                        | nama         |
| kode      |                        | nim          |
+-----------+                        | jurusan (FK) |
                                     | angkatan     |
                                     | email        |
                                     +--------------+

📌 8. Kesimpulan

Sistem relasi Mahasiswa ↔ Jurusan menggunakan Mongoose memberikan fleksibilitas pada pengelolaan data akademik berbasis dokumen. Dengan populate, proses join berjalan mudah dan efisien di MongoDB.

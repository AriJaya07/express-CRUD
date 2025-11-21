📚 Mahasiswa CRUD API (Express + MongoDB)

Project sederhana untuk mengelola data mahasiswa menggunakan Express.js, MongoDB, dan Mongoose.
Fitur yang tersedia: Create, Read, Update, dan Delete (CRUD).

🚀 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Nodemon (dev)

📦 Install & Setup
1️⃣ Clone project
git clone <repo-url>
cd nama-folder-project

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variable

Buat file .env:

MONGO_URI=mongodb://localhost:27017/siswaDB
PORT=5000


Pastikan siswaDB sesuai dengan nama database kamu di MongoDB / Compass.

▶️ Menjalankan server
Development mode
npm run dev

Production mode
npm start

📁 Project Structure
src/
  ├── models/
  │     └── Mahasiswa.js
  ├── routes/
  │     └── mahasiswaRoutes.js
  ├── controllers/
  │     └── mahasiswaController.js
  ├── index.js
.env
package.json

🧪 API Endpoints
➕ Create Mahasiswa

POST /api/mahasiswa
Body JSON:

{
  "nama": "Joko",
  "nim": "123456",
  "jurusan": "Informatika",
  "angkatan": 2021,
  "email": "joko@example.com"
}

📄 Get All Mahasiswa

GET /api/mahasiswa

📄 Get Mahasiswa by ID

GET /api/mahasiswa/:id

✏️ Update Mahasiswa

PUT /api/mahasiswa/:id

🗑️ Delete Mahasiswa

DELETE /api/mahasiswa/:id

💾 Database

Kamu bisa melihat collection di:

MongoDB Compass

Atau MongoDB Atlas (kalau online)

Collection yang digunakan:

siswaDB → dataSiswa

🙌 Contributing

Pull request terbuka! Tinggal fork, buat branch, dan kirim PR.

📧 Contact

Kalau ada error atau bingung, tinggal tanya aja. Siap bantu 🔥

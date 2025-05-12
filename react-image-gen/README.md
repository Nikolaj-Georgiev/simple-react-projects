# Reactlicate Image Gen

Generate AI-powered images with Replicate!  
This is a full-stack app built with React (frontend), Express (backend), and SQLite (database).  
Each user can register, log in, and generate up to 5 images.

---

## 🖼️ Features

- User registration and login
- Image generation via Replicate API
- Limit of 5 images per user
- Preview and download generated images
- Modern, responsive UI with TailwindCSS

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, TailwindCSS
- **Backend:** Node.js, Express, better-sqlite3
- **Database:** SQLite3 (file-based)
- **AI:** Replicate API

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/reactlicate-image-gen.git
cd reactlicate-image-gen
```

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 3. Configure environment variables

#### Backend (`backend/.env`):

```env
REPLICATE_API_TOKEN=your_replicate_api_token
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Frontend (`frontend/.env`):

```env
VITE_API_URL=http://localhost:5000
```

### 4. Start the applications

#### Backend

```bash
cd backend
npm run dev
```

#### Frontend

```bash
npm run dev
```

---

## ⚠️ Limitations

- Each user can generate up to 5 images.
- The database is not persistent in free cloud deployments (e.g., Render free tier).
- Replicate API usage is subject to your account limits.

---

## 📝 License

MIT

---

## 🙋‍♂️ Contact

For questions or suggestions:  
georgiev.nikolaj@gmail.com

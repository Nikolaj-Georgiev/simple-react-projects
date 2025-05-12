# Reactlicate Image Gen

Generate AI-powered images with Replicate!  
This is a full-stack app built with React (frontend), Express (backend), and SQLite (database).  
Each user can register, log in, and generate up to 5 images.

---

## 🖼️ Features

- User registration and authentication (JWT-based)
- Honeypot logic to prevent bot attacks on forms
- Image generation via Replicate API (Flux 1.1 Pro model)
- Limit of 5 images per user
- Preview and download generated images
- Modern, responsive UI with TailwindCSS

---

## ⚡️ Important

**You must provide your own Replicate API key to use this project!**  
The app uses the [Flux 1.1 Pro model](https://replicate.com/black-forest-labs/flux-1.1-pro) on Replicate, which is a paid model.  
If you want to use this code, [sign up at Replicate](https://replicate.com/) and add your API key in the backend `.env` file.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, TailwindCSS
- **Backend:** Node.js, Express, better-sqlite3
- **Database:** SQLite3 (file-based)
- **AI:** Replicate API (Flux 1.1 Pro)

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/Nikolaj-Georgiev/simple-react-projects.git
cd react-image-gen
```

### 2. Install dependencies

#### Frontend

```bash
npm install
```

#### Backend

```bash
cd /backend
npm install
```

### 3. Configure environment variables

#### Backend (`backend/.env`):

```env
REPLICATE_API_TOKEN=your_replicate_api_token
JWT_SECRET=your_jwt_secret
PORT=5000
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

## 📝 License

MIT

---

## 🙋‍♂️ Contact

For questions or suggestions:  
georgiev.nikolaj@gmail.com

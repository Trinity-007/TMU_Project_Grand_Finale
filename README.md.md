# 🎓 Trinity Memorial University Portal

An affordable university full-stack web project built to demonstrate **student registration, login, and authentication** using Node.js, Express, and MongoDB.

---

## 🧠 Overview
The portal allows users to **sign up**, **log in**, and (in future updates) **access a personalized dashboard**.  
Frontend pages are built with **HTML, CSS, and JavaScript**, while the backend connects to a **MongoDB database** with secure JWT authentication.

---

## ⚙️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose)  
- **Security:** bcrypt & JWT  

---

## 🚀 How to Run
1. Open the `backend` folder in your terminal.  
2. Run:
   ```bash
   npm install
   node server.js
   ```
3. Open your browser and visit:
   ```
   http://localhost:5000
   ```

You should see the homepage of the **Trinity Memorial University Portal**.

---

## 📂 Key Files
- `backend/server.js` → Main server file  
- `backend/routes/auth.js` → Handles register & login routes  
- `backend/models/User.js` → Defines user schema  
- `frontend/` → Contains HTML, CSS, and JS files  

---

## 👨🏽‍💻 Author
**Name:** Aladesae Tosin  (TRINITY)
**Project:** Trinity Memorial University (TMU) Portal  
**Year:** 2025  

> “A learning project demonstrating full-stack integration — from frontend to backend 🔗”

---

# 📘 Extended Documentation

## 📖 Description
The Trinity Memorial University (TMU) web portal serves as a student platform where users can **register, log in, and access their dashboard**. It demonstrates integration between a frontend interface and a backend API using Node.js and MongoDB.

---

## 🧩 Features
- User Registration (with password encryption)
- Secure Login with JWT authentication
- Static frontend served from Express backend
- MongoDB integration for persistent user storage

---

## 🗃️ Folder Structure
```
Tri_In_Unity_Memorial_University/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── index.html
    ├── register.html
    ├── login.html
    ├── dashboard.html
    ├── styles/
    └── js/
```

---

## 🧠 Environment Variables (.env)
```
MONGO_URI=mongodb://127.0.0.1:27017/tmu-db
JWT_SECRET=supersecretkey
PORT=5000
```

---

## 🧾 API Routes
### 1️⃣ Register User
**POST** `/api/auth/register`  
Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
Response:
```json
{
  "token": "jwt-token",
  "user": { "name": "John Doe", "email": "john@example.com" }
}
```

### 2️⃣ Login User
**POST** `/api/auth/login`  
Body:
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```
Response:
```json
{
  "token": "jwt-token",
  "user": { "name": "John Doe", "email": "john@example.com" }
}
```

---

## 💾 Installation Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/Tinity-007/TMU-portal.git
   ```
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Access the frontend at:
   ```
   http://localhost:5000
   ```

---

## 💡 Future Improvements
- Full student dashboard functionality  
- Admin panel for managing users  
- Course registration and grades  
- Deployment to Render or Vercel

---

## 🏁 Conclusion
This project demonstrates how a **simple student portal** can be built using **Node.js, Express, and MongoDB** while connecting it to a static frontend.

---

### 👨🏽‍💻 Author
**Aladesae Tosin (TRINITY)**  
Built with ❤️ for learning and portfolio purposes.

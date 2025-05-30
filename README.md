# Blank React + Vite App
This is an even more stripped-down version of the default Vite+React app.
# 🚀 CS732 Lab 3: Pokedex & Shop App (Fullstack Integration)

This project is a two-part fullstack lab assignment completed for CS732. It demonstrates how to connect a **React + Vite frontend** with an **Express backend** via REST APIs. The app consists of:

- A **Pokédex** app that fetches and displays Pokémon data.
- A **Shop app** where users can add items to a cart and simulate purchases with order history.

---

## 🧩 Technologies Used

### Frontend (Vite + React)
- React Router v6
- Axios for HTTP requests
- React Context for state management

### Backend (Node.js + Express)
- Express routing and middleware
- UUID for order IDs
- Static file serving & API endpoints

---

## 🛠️ Folder Structure


---

## 🔧 Getting Started

### 🗂 Clone and Install

```bash
git clone https://github.com/phar909/cs732-lab3-pokedex-shop.git
cd cs732-lab3-pokedex-shop
📦 Backend Setup
For both exercise-01/backend and exercise-04/backend:
cd exercise-01/backend   # or exercise-04/backend
npm install
npm start

Runs on: http://localhost:3000

🌐 Frontend Setup
For both exercise-01/frontend and exercise-04/frontend:

bash
Copy
Edit
cd exercise-01/frontend   # or exercise-04/frontend
npm install
npm run dev
Runs on: http://localhost:5173

✅ Functionality
🔍 Pokedex App (Exercise 1–3)
Lists all Pokémon names using /api/pokemon

Displays full data per Pokémon using /api/pokemon/:id

Error handling for invalid Pokémon IDs

🛒 Shop App (Exercise 4)
Dynamic product list from backend

Add to cart, checkout, and view order history

New orders POSTed to /api/orders with UUID

**📌 .env Configuration
For each frontend app, ensure this is present:**

# .env file in frontend folder
VITE_API_BASE_URL=http://localhost:3000


🧑‍💻 Author
Punitha Hariharan
Master’s in IT – University of Auckland
GitHub: @phar909


🔒 License
For educational purposes only – part of CS732 lab coursework.


---

### ✅ Next Steps:
- Create a `.env` file in each frontend project (if not already).
- If you'd like, I can generate screenshot placeholders too.
- Let me know if you'd like a shorter version or to split it for `exercise-01` and `exercise-04` separately.

Would you like me to create a Markdown version you can download or copy directly?

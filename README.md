\# 🇨🇴 Colombian Empanadas \& Arepas React App



!\[screenshot](screenshot.png)



Live Demo: https://your-username.github.io/project-03-empanadas-arepas



\## ✨ Features

\- 🔍 Browse empanadas and arepas menu from API

\- 🛒 Add items to global cart (React Context)

\- 📦 Place orders (POST to `/orders`)

\- ⭐ Submit reviews (POST to `/reviews`)

\- 📱 Responsive design (mobile-first)

\- 🔄 Real-time API sync (GET + POST)



\## 🛠️ Tech Stack

React 19 | Vite | json-server | React Router | React Context | Fetch API



text



\## 🚀 Quick Start



\### 1. Clone the repo

```bash

git clone https://github.com/erickchezllan/project-03-empanadas-arepas.git

cd project-03-empanadas-arepas

```



\### 2. Start the backend API

```bash

cd server

npm install

npm start

```

Backend runs at `http://localhost:3000`



\### 3. Start the frontend

```bash

cd ../client

npm install

npm run dev

```

Frontend runs at `http://localhost:5173`



\### 4. Test it

\- Browse empanadas \& arepas on Home

\- Add to cart

\- Place order

\- Submit reviews on Specials page



\## 📁 Project Structure

project-03-empanadas-arepas/

├── client/ (React + Vite frontend)

│ ├── src/

│ │ ├── App.jsx

│ │ ├── context/

│ │ ├── pages/

│ │ └── components/

│ └── .env

└── server/ (json-server backend)

├── db.json

├── server.js

└── package.json



text



\## 🎯 User Stories

1\. Browse Colombian street foods (empanadas, arepas)

2\. Add items to cart and review order

3\. Submit orders and customer reviews



\## 📊 API Endpoints

GET /items - Menu items

GET /orders - Customer orders

POST /orders - Place new order

GET /specials - Today's specials

GET /reviews - Customer reviews

POST /reviews - Submit new review



text



\## 🖥️ Screenshots



\*\*Menu Page\*\*

!\[Menu](screenshot-menu.png)



\*\*Cart Page\*\*

!\[Cart](screenshot-cart.png)



\*\*Specials Page\*\*

!\[Specials](screenshot-specials.png)



\## 📝 Built with

\- React 19 (useState, useEffect, useContext)

\- Vite (fast dev server)

\- json-server@0.17.4 (fake REST API)

\- React Router (3+ page navigation)

\- Global state (CartContext)

\- Local state (forms)

\- Responsive CSS Grid



\## 🚀 Deployed with GitHub Pages

Frontend deployed at GitHub Pages

Backend uses json-server for local development



\---

\*\*Erick Sanchez\*\* • Software Engineering Bootcamp • April 2026


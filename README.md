# Project 04: Full-Stack Colombian Food CRUD App
**Erick Sanchez** — Software Engineering Bootcamp — April 2026

## 🎯 Live Deployment
| Component | URL |
|-----------|-----|
| **Frontend** | [https://your-frontend.vercel.app](https://your-frontend.vercel.app) |
| **Backend API** | [https://your-backend.onrender.com/api/items](https://your-backend.onrender.com/api/items) |
| **Database** | Neon PostgreSQL |

## 🏗️ 3-Tier Architecture
React Frontend (Presentation Layer)
↓
Express Backend (Application Layer)
↓ Routes → Controllers → Services
↓
PostgreSQL Database (Data Layer)

text

## ✅ All Requirements Met

### Backend Architecture
✅ Routes: GET/POST/PUT/DELETE /api/items
✅ Controllers: Request handling + validation
✅ Services: PostgreSQL CRUD + business logic
✅ Database: Neon PostgreSQL + pg library

text

### TypeScript Typing
✅ Item interface (services/controllers)
✅ ApiResponse<T> wrapper (all endpoints)
✅ Request<{ id: string }> (route params)
✅ Proper Promise<Item[]> return types

text

### Full CRUD Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | List all menu items |
| GET | `/api/items/:id` | Single item |
| POST | `/api/items` | Create new item |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

### Tech Stack
Frontend: React + Vite + TypeScript
Backend: Node.js + Express + TypeScript
Database: PostgreSQL (Neon Serverless)
Deployment: Vercel (Frontend) + Render (Backend)

text

## 🚀 Local Setup

### Backend
```bash
cd server
npm install
echo "DATABASE_URL=your_neon_url" > .env
npm run dev
# http://localhost:3000/api/items
```

### Frontend
```bash
cd client
npm install
echo "VITE_API_URL=http://localhost:3000/api" > .env
npm run dev
# http://localhost:5173
```

## 📊 API Documentation
GET /api/items → { success: true, data: Item[] }
GET /api/items/:id → { success: true, data: Item }
POST /api/items → { success: true, data: new Item }
PUT /api/items/:id → { success: true, data: updated Item }
DELETE /api/items/:id → { success: true, data: { message } }

text

## 🗄️ Database Schema

```sql
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎯 Features Demo

1. **Browse** Colombian empanadas/arepas from PostgreSQL
2. **Add** new menu items (POST)
3. **Edit** prices/descriptions (PUT)  
4. **Delete** items (DELETE)
5. **Real-time** data persistence
6. **Responsive** design from Project 03

## 📈 GitHub Commits
[View commit history](https://github.com/erickchezllan/project-04-full-stack/commits/main)